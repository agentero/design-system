'use client';

// Stays: `@base-ui/react/combobox` is `export * as Combobox`, so its parts hang off one
// export like cmdk's — without the directive they arrive `undefined` (see `command.tsx`).
import { ComponentPropsWithRef, createContext, use, useEffect, useRef, useState } from 'react';

import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { useFieldContext } from '../field';
import { inputRecipe, InputSize } from '../input';
import { InputGroup } from '../input-group';
import { IconCancel, IconCheck, IconKeyboardArrowDown, IconSearch } from './icons';
import { useBaseInputContext } from './input-context';

/**
 * Style recipe for Combobox. Slots: `action` and `trigger` (the clear and
 * chevron buttons inside the input's frame, which is `InputGroup`'s),
 * `clear` (hides the clear button while the input is disabled or read-only),
 * `triggerReplaced` (hides the chevron once the clear button has a value to
 * clear), `content`,
 * `list`, `item`, `indicator` and `message`. The surface carries its
 * own chrome — border, background and shadow — because the list it holds is
 * plain content.
 *
 * @summary tailwind-variants recipe backing the Combobox surface and list styles
 */
export const comboboxRecipe = tv({
	slots: {
		// Clear and trigger share one shape: a bare 24px icon button inside the frame's padding.
		action: [
			'flex size-6 shrink-0 cursor-pointer items-center justify-center self-center rounded-sm',
			'[&>svg>path]:fill-icon-input-default hover:[&>svg>path]:fill-icon-default-base-primary',
			'focus-visible:outline-2 focus-visible:outline-border-input-focus',
			'disabled:cursor-default disabled:[&>svg>path]:fill-icon-input-disable'
		],
		trigger:
			'transition-[rotate] duration-100 data-popup-open:rotate-180 motion-reduce:transition-none',
		// With a clear button beside it, the chevron gives way to it once there is a value, as in
		// Base UI's own example. Base UI marks the frame `data-placeholder` while there is none.
		// A disabled or read-only input matches `:read-only` whichever part locked it — `Root`, a
		// `FieldText`, the input itself or a `<fieldset>` — and has nothing to clear.
		clear: 'group-has-[input:read-only]/input-group:hidden',
		triggerReplaced:
			'[[data-slot=combobox-field]:not([data-placeholder]):not(:has(input:read-only))_&]:hidden',
		content: [
			'w-(--anchor-width) max-h-(--available-height) overflow-hidden rounded-md',
			'border border-border-default-base-primary bg-bg-default-base-primary shadow-lg',
			// Not Base UI's `--transform-origin`: with `align="start"` it puts the origin on the left
			// corner, and this surface is as wide as the input, so it has to grow from the edge it hangs from.
			'data-[side=bottom]:origin-top data-[side=top]:origin-bottom',
			// With no row and no `Empty` to show, the border alone would read as a stray line.
			'[&:not(:has(>:not(:empty)))]:hidden',
			// The legacy Datalist's own timing — a 100ms fade over a 0.95 scale — driven off Base UI's
			// start/end attributes rather than the shared dropdown keyframes, whose 0.9 scale and
			// translate read as a slow start on a surface this wide.
			// `scale`, not `transform`: Tailwind v4 scale utilities set the standalone scale property.
			'transition-[scale,opacity] duration-100 ease-in-out',
			// Bracketed on purpose: Tailwind does not emit a rule for the bare `data-starting-style:`
			// form, so the surface would appear with no transition at all.
			'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
			'data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
			'motion-reduce:transition-none'
		],
		// Never taller than the room left: the surface clips there and would hide the last rows.
		// When empty, its padding alone would be a 16px band under `Empty`. `:empty`, not Base UI's
		// `data-empty`: that one tracks the root's `items`, so a list whose rows are rendered by hand
		// (a server search with no `items`) is always flagged empty and loses its padding.
		list: [
			'max-h-[min(10.25rem,var(--available-height))] overflow-y-auto scroll-py-2 py-2 outline-none',
			'empty:py-0'
		],
		item: [
			// Panel radius minus the 2px gap, so the row reads as concentric with the panel.
			'group/item mx-2 my-px flex cursor-pointer items-center rounded-[calc(var(--radius-md)-2px)]',
			'px-3 py-2 text-sm text-text-default-base-primary select-none',
			// `data-highlighted` covers pointer and keyboard alike; no `hover:` needed.
			'data-highlighted:bg-bg-default-base-primary-hover',
			'data-disabled:cursor-default data-disabled:text-text-default-base-tertiary'
		],
		// A checkbox lookalike on the same tokens as `Checkbox`, so a multi-select row reads as the
		// legacy checkbox row did. Presentational: the row itself is the option, so a real checkbox
		// here would nest one control inside another.
		indicator: [
			'mr-2 flex size-4 shrink-0 items-center justify-center rounded-sm',
			'border-[1.5px] border-border-checkbox-default bg-bg-input-normal',
			'text-text-default-base-inverse-primary transition-colors duration-150',
			'data-selected:border-bg-checkbox-selected data-selected:bg-bg-checkbox-selected',
			'[&>svg]:hidden data-selected:[&>svg]:block',
			'group-data-disabled/item:border-border-checkbox-disabled',
			'group-data-disabled/item:data-selected:border-bg-checkbox-disabled',
			'group-data-disabled/item:data-selected:bg-bg-checkbox-disabled'
		],
		// Both stay mounted to be announced, so idle they collapse instead of hiding.
		message: ['mx-2 my-px px-3 py-2 text-sm text-text-default-base-tertiary', 'empty:m-0 empty:p-0']
	}
});

const slots = comboboxRecipe();

// Whether the nearest `Root` holds several values. `Item` reads it to show the selection
// indicator and `Input` to drop the clear button and the chevron; Base UI keeps its own selection mode in
// a private store.
const MultipleContext = createContext(false);

// The root's `loading`, for `Content` to mark busy and for `Empty` to hold back. It stays
// `undefined` for a root that never opted in.
const LoadingContext = createContext<boolean | undefined>(undefined);

// How long a request runs before its label is announced. VoiceOver cuts off whatever it is saying
// to echo the key just typed and, when the list opens, to read out its new expanded state; both
// start about 100ms after the keystroke. A label that lands later queues behind them instead of
// being dropped. A request that answers sooner has no wait worth announcing.
const LOADING_ANNOUNCE_DELAY = 500;

// Base UI's `'always'` mode: the first row is highlighted as soon as the list has one, so Enter
// picks what the user sees. `true` only highlights after typing and misses rows that arrive later
// through `filteredItems`. The Combobox types only list the boolean; the mode is the one
// Autocomplete documents, read by the same `AriaCombobox` underneath.
const HIGHLIGHT_FIRST = 'always' as unknown as boolean;

// The label for the live region: set once the list has been open and loading for the delay, and
// cleared as soon as either stops.
const useLoadingAnnouncement = (waiting: boolean, label: string) => {
	const [due, setDue] = useState(false);

	useEffect(() => {
		if (!waiting) return;
		const timeout = setTimeout(() => setDue(true), LOADING_ANNOUNCE_DELAY);
		return () => {
			clearTimeout(timeout);
			setDue(false);
		};
	}, [waiting]);

	return waiting && due ? label : null;
};

export type ComboboxRootProps<
	Value,
	Multiple extends boolean | undefined,
	Item
> = ComboboxPrimitive.Root.Props<Value, Multiple, Item> & {
	/**
	 * Characters the query needs, spaces aside, before the list opens. Below it
	 * focusing, clicking or pressing the chevron leaves the list shut, and
	 * deleting back under it closes the list. Defaults to `0`: the list opens on
	 * focus.
	 */
	minInputLength?: number;
	/**
	 * Whether the options are being fetched. Once the list has been open and
	 * loading for half a second, `loadingLabel` is announced once: sooner, a
	 * screen reader would cut it off to echo the key just typed, and a faster
	 * answer has no wait to announce. `Content` is marked `aria-busy`, and
	 * `Empty` shows nothing, so "no results" is not read out before the results
	 * arrive. The announcement comes from a visually hidden live region the root
	 * renders next to the field, so it is in place before the list opens. On a search
	 * against an API, pass it from the first render, as `false` while idle: a root
	 * that leaves it out gets no live region. A list filtered in memory never
	 * waits and leaves it out. While loading with no rows yet, the surface shows
	 * whatever placeholder `Content` holds — `Empty` stays quiet.
	 */
	loading?: boolean;
	/**
	 * What a screen reader hears when `loading` turns `true`. Announced only; any
	 * loading visuals — placeholder rows, a spinner — are yours to render inside
	 * `Content`, hidden from assistive technology. Defaults to `'Loading…'`.
	 */
	loadingLabel?: string;
};

/**
 * Root of a combobox: a text input that filters a list of options and writes the
 * chosen one back into itself. The list opens on focus, on the first keystroke
 * or from the chevron of `Input`'s `select` variant.
 *
 * For a search against an API, set `minInputLength` so the list stays shut until
 * the query is worth sending: a field that opens an empty list on focus reads as
 * broken. For a pick from a short fixed list with no typing at all, prefer a
 * select.
 *
 * Pass the options as `items`. For a list that comes from the server, set
 * `filter={null}`, hand the already-filtered rows to `filteredItems`, request
 * them from `onInputValueChange`, and pass the request's state as `loading`:
 * the combobox announces the wait and marks the list busy on its own.
 *
 * Every Base UI root prop is accepted and forwarded — `items`, `filter`,
 * `value`, `onValueChange` and so on. `open` stays the consumer's to control;
 * `minInputLength` only refuses to open below the minimum.
 *
 * `disabled` and `readOnly` belong here, not on `Input`: the input, the clear
 * button and the chevron all read them from the root. `disabled` locks the
 * whole field; `readOnly` locks the value but still lets the list open and be
 * browsed. Inside a `FieldText` both default to the field's.
 *
 * The first row is highlighted as soon as the list shows one, so Enter picks
 * it without the arrow keys; pass `autoHighlight={false}` to start with
 * nothing highlighted. The highlight follows `items` (and `filteredItems`):
 * rows rendered without them, by a child that loads its own data, are only
 * highlighted once the query changes. See `Input` for what Enter does in a form.
 *
 * With `multiple`, the value is an array and picking a row toggles it. The list
 * stays open and keeps the typed query between picks, so several rows can be
 * ticked from one search; closing the list (Escape, a click outside) still resets
 * the query. Each row then shows whether it is selected — see `Item`. Nothing is
 * written back into the input: render the selection next to the field.
 *
 * @summary Root provider for an input-triggered filterable list
 * @see {@link https://base-ui.com/react/components/combobox|Base UI Combobox}
 *
 * @example
 * ```tsx
 * import { Combobox } from '@agentero/design-system/combobox';
 *
 * <Combobox.Root items={states}>
 *   <Combobox.Input placeholder="Search states" />
 *   <Combobox.Content>
 *     <Combobox.Empty>No matches found</Combobox.Empty>
 *     <Combobox.List>
 *       {(state: string) => <Combobox.Item key={state} value={state}>{state}</Combobox.Item>}
 *     </Combobox.List>
 *   </Combobox.Content>
 * </Combobox.Root>
 * ```
 */
export const Root = <Value, Multiple extends boolean | undefined = false, Item = Value>({
	minInputLength = 0,
	loading,
	loadingLabel = 'Loading…',
	autoHighlight,
	open: openProp,
	defaultOpen = false,
	onOpenChange,
	onOpenChangeComplete,
	onInputValueChange,
	children,
	...props
}: ComboboxRootProps<Value, Multiple, Item>) => {
	const field = useFieldContext();
	const multiple = Boolean(props.multiple);
	const disabled = props.disabled ?? field?.disabled;
	const readOnly = props.readOnly ?? field?.readOnly;
	const [openState, setOpenState] = useState(defaultOpen);
	// A ref, not state: Base UI reports the new text before it asks to open on that same
	// keystroke, so the check has to see it before React re-renders.
	const query = useRef(String(props.inputValue ?? props.defaultInputValue ?? ''));
	if (props.inputValue !== undefined) query.current = String(props.inputValue);
	const isShort = (value: string) => value.trim().length < minInputLength;
	// Once the list has closed, Base UI writes the selected label back into the input — or
	// empties it when nothing is picked — to drop the abandoned query. When the minimum closed
	// it, the user is still typing that query, so this write is skipped.
	const closedForMinimum = useRef(false);
	const skipCloseReset = useRef(false);

	const handleOpenChange: typeof onOpenChange = (open, eventDetails) => {
		if (open && isShort(query.current)) {
			eventDetails.cancel();
			return;
		}
		closedForMinimum.current = false;
		onOpenChange?.(open, eventDetails);
		// Base UI closes the list (and so clears the query) after a pick made while filtering;
		// cancelling that request is its documented way to keep picking from one search.
		if (multiple && !open && eventDetails.reason === 'item-press') {
			eventDetails.cancel();
		}
		if (!eventDetails.isCanceled) setOpenState(open);
	};

	const handleOpenChangeComplete: typeof onOpenChangeComplete = open => {
		onOpenChangeComplete?.(open);
		if (open || !closedForMinimum.current) return;

		closedForMinimum.current = false;
		// Base UI resets the input in this same synchronous pass, right after this callback.
		skipCloseReset.current = true;
		queueMicrotask(() => (skipCloseReset.current = false));
	};

	const handleInputValueChange: typeof onInputValueChange = (value, eventDetails) => {
		if (skipCloseReset.current) {
			skipCloseReset.current = false;
			eventDetails.cancel();
			return;
		}
		query.current = value;
		onInputValueChange?.(value, eventDetails);
		// Base UI only closes the list once the text is empty, so a minimum closes it here.
		if (isShort(value) && openProp === undefined && openState) {
			closedForMinimum.current = true;
			setOpenState(false);
		}
	};

	// Without a minimum, Base UI keeps its own open state, as it always has.
	const open = openProp ?? (minInputLength > 0 ? openState : undefined);
	const announcement = useLoadingAnnouncement(
		Boolean(loading) && (openProp ?? openState),
		loadingLabel
	);

	return (
		<MultipleContext value={multiple}>
			<LoadingContext value={loading}>
				<ComboboxPrimitive.Root
					open={open}
					defaultOpen={defaultOpen}
					onOpenChange={handleOpenChange}
					onOpenChangeComplete={handleOpenChangeComplete}
					onInputValueChange={handleInputValueChange}
					autoHighlight={autoHighlight ?? HIGHLIGHT_FIRST}
					{...props}
					disabled={disabled}
					readOnly={readOnly}>
					{children}
					{loading !== undefined && (
						// Next to the field, not inside `Content`: the surface mounts on the keystroke that
						// starts the request, and a live region that appears already filled in is skipped.
						// This one is on the page before the list opens, so the label is always a text
						// change. Base UI leaves live regions out of what it hides while the list is open.
						<ComboboxPrimitive.Status data-slot="combobox-loading" className="sr-only">
							{announcement}
						</ComboboxPrimitive.Status>
					)}
				</ComboboxPrimitive.Root>
			</LoadingContext>
		</MultipleContext>
	);
};
Root.displayName = 'Combobox.Root';

// The native `size` is a number; intersected with the token union it collapses to `never`.
type InputProps = Omit<ComponentPropsWithRef<typeof ComboboxPrimitive.Input>, 'size'> & {
	/** Control height, matching `Input`. Defaults to `'md'`. */
	size?: InputSize;
	/**
	 * What surrounds the input. Defaults to `'search'`.
	 * - `search` — magnifier in front, clear button after: a lookup the user types
	 * - `plain` — the input alone
	 * - `select` — a chevron that toggles the list: a short list to browse
	 */
	variant?: 'search' | 'plain' | 'select';
	/**
	 * Whether a clear button follows the input once an option is picked.
	 * Defaults to `true` for `search` and `false` for `plain` and `select`; pass
	 * it to override the variant. On a `select` it replaces the chevron while
	 * there is a value. Ignored under a `multiple` root, which never
	 * shows one.
	 */
	showClear?: boolean;
	/**
	 * Accessible name for the clear button. Defaults to `'Clear'`; name it after
	 * the field when a page carries several comboboxes.
	 */
	clearLabel?: string;
	/** Accessible name for the chevron of the `select` variant. Defaults to `'Show options'`. */
	triggerLabel?: string;
	/**
	 * Whether Enter, pressed while the list is open and no row is highlighted,
	 * closes the list and submits the surrounding form, as in a plain input.
	 * Defaults to `false`: Enter then does nothing.
	 */
	submitOnEnter?: boolean;
};

/**
 * The text field, which doubles as the trigger: focusing or typing opens the
 * list. It wears the same styling as `Input` and takes the same wiring from
 * `InputContext`, so inside a `FieldText` the label, the hint and the error point
 * at it with nothing passed by hand. Its own props win over the context.
 *
 * Inside a field it also names itself with `aria-labelledby` pointing at the
 * label, on top of the label's own `for`. While the list is open, Base UI hides
 * everything but the input and the list from assistive technology, label
 * included, and a `<label for>` alone then stops naming the input; a direct
 * reference keeps the name. Outside a field, give it `aria-label` or an
 * `aria-labelledby` of your own.
 *
 * It is drawn as an `InputGroup` frame, and the list anchors to that whole
 * frame, so it is as wide as the field and starts at its left edge whatever
 * sits beside the input. `variant` picks what does:
 *
 * - `search` (default): a magnifier in front and a clear button. For any field
 *   where the user types to look something up.
 * - `plain`: the input alone, with no icon and no button. When the field needs
 *   no affordance at all.
 * - `select`: a chevron that opens and closes the list. For a short known list
 *   the user may want to browse before typing.
 *
 * Only `search` carries a clear button by default; `showClear` adds it to the
 * other two or drops it from `search`. It shows once an option is picked, on
 * every variant: text typed without a pick is not a value, and closing the
 * list drops it, as Escape does. Pressing it empties the text and drops the
 * picked option. It is out of the tab order; from the keyboard, selecting the
 * text and deleting it drops the option too. A `disabled` or `readOnly` field
 * has none, as there is nothing to clear. On a `select`, the clear button
 * takes the chevron's place once an option is picked; the list still opens
 * from the input. Name it with `clearLabel`, and the chevron with
 * `triggerLabel`, when a page has more than one combobox.
 *
 * Under a `multiple` root there is neither: the list stays open between picks,
 * so a chevron has nothing to toggle, and Base UI's clear button would drop the
 * whole selection while a cross inside a search field reads as "clear what I
 * typed". The selection is rendered outside the field, with its own way to
 * remove each entry.
 *
 * The typed text is a query, never the value, so while the list is open Enter
 * does not submit a surrounding form: it picks the highlighted row — the first
 * one, unless the user moved the highlight — and with none highlighted, as
 * while the list is empty, it does nothing. With the list closed, Enter
 * submits as in any input. `submitOnEnter` restores Base UI's default: with no
 * row highlighted, Enter closes the list and submits the form.
 *
 * Every native input attribute is accepted and forwarded to the `<input>` —
 * `placeholder`, `autoComplete` — and so is `className`. Pass `disabled` and
 * `readOnly` to `Root` instead; on the input alone, `disabled` still hides the
 * clear button and disables the chevron, but `readOnly` leaves the chevron free
 * to change the value.
 *
 * @summary Search, plain or select field that opens and filters the list
 * @dataAttribute {string} data-slot - Always set to "combobox-input"
 */
export const Input = ({
	variant = 'search',
	showClear = variant === 'search',
	clearLabel = 'Clear',
	triggerLabel = 'Show options',
	submitOnEnter = false,
	...props
}: InputProps) => {
	const { className, size = 'md', onKeyDown, ...rest } = useBaseInputContext(props);
	const multiple = use(MultipleContext);
	const clearable = showClear && !multiple;

	// With no row highlighted, Base UI closes the list and lets Enter through to the form, as a
	// plain input would. Here the text is only a query, never the value, so Enter does nothing.
	const handleKeyDown: InputProps['onKeyDown'] = event => {
		onKeyDown?.(event);
		const input = event.currentTarget;
		if (submitOnEnter || event.key !== 'Enter' || event.defaultPrevented) return;
		if (event.nativeEvent.isComposing || input.getAttribute('aria-expanded') !== 'true') return;

		const list = document.getElementById(input.getAttribute('aria-controls') ?? '');
		if (list?.querySelector('[data-highlighted]')) return;

		event.preventDefault();
		event.preventBaseUIHandler();
	};

	return (
		// Base UI's part, so the list anchors to the whole frame — icon and buttons included —
		// rather than to the bare input; drawn by our `InputGroup.Root`, so it is the same frame.
		<ComboboxPrimitive.InputGroup
			render={<InputGroup.Root />}
			data-slot="combobox-field"
			// Base UI opens the list on a press on the frame unless `Root` is disabled; with
			// `disabled` on the input alone, a click on the padding would still open it.
			onMouseDown={rest.disabled ? event => event.preventBaseUIHandler() : undefined}
			// Alone in the frame, the text keeps a plain `Input`'s inset rather than the group's.
			className={variant === 'plain' ? 'px-4' : undefined}>
			{variant === 'search' && (
				<InputGroup.Addon>
					<IconSearch />
				</InputGroup.Addon>
			)}
			<ComboboxPrimitive.Input
				data-slot="combobox-input"
				data-size={size}
				className={cn(inputRecipe({ size }), className)}
				{...rest}
				onKeyDown={handleKeyDown}
			/>
			{clearable && (
				<ComboboxPrimitive.Clear
					data-slot="combobox-clear"
					aria-label={clearLabel}
					className={cn(slots.action(), slots.clear())}>
					<IconCancel />
				</ComboboxPrimitive.Clear>
			)}
			{variant === 'select' && !multiple && (
				<ComboboxPrimitive.Trigger
					data-slot="combobox-trigger"
					aria-label={triggerLabel}
					// `disabled` belongs on `Root`, where Base UI's `Trigger` reads it; passed to the input
					// alone, the chevron would still open the list and change the value.
					disabled={rest.disabled}
					className={cn(slots.action(), slots.trigger(), clearable && slots.triggerReplaced())}>
					<IconKeyboardArrowDown />
				</ComboboxPrimitive.Trigger>
			)}
		</ComboboxPrimitive.InputGroup>
	);
};
Input.displayName = 'Combobox.Input';

type ContentProps = ComponentPropsWithRef<typeof ComboboxPrimitive.Popup> &
	Pick<
		ComponentPropsWithRef<typeof ComboboxPrimitive.Positioner>,
		'side' | 'align' | 'sideOffset' | 'alignOffset' | 'anchor' | 'collisionPadding'
	>;

/**
 * The floating surface holding the list. It portals to the body, matches the
 * input's width and caps its height to the space actually available, so a list
 * near the bottom of the viewport scrolls instead of overflowing.
 *
 * `sideOffset` defaults to 12, the gap the legacy Datalist kept. It is wider than
 * the 8 every other surface uses on purpose: those hang off a button, while this
 * one sits under a focused input whose ring is already two near-black pixels, and
 * at 8 the two borders fight.
 *
 * Under a root that passes `loading`, the surface is `aria-busy` while `loading`
 * is `true`; the root announces the wait. An `aria-busy` passed here wins.
 *
 * @summary Floating surface anchored to the input, holding the list
 * @dataAttribute {string} data-slot - Always set to "combobox-content"
 */
export const Content = ({
	className,
	side = 'bottom',
	align = 'start',
	sideOffset = 12,
	alignOffset,
	anchor,
	collisionPadding = 8,
	children,
	...props
}: ContentProps) => {
	const loading = use(LoadingContext);

	return (
		<ComboboxPrimitive.Portal>
			<ComboboxPrimitive.Positioner
				side={side}
				align={align}
				sideOffset={sideOffset}
				alignOffset={alignOffset}
				anchor={anchor}
				collisionPadding={collisionPadding}
				// A Radix modal (`Modal`) sets `pointer-events: none` on the body and re-enables only its
				// own layers; the surface portals to the body, so it re-enables itself the same way.
				className="isolate z-(--z-index-top-layer) pointer-events-auto">
				<ComboboxPrimitive.Popup
					data-slot="combobox-content"
					aria-busy={loading || undefined}
					className={cn(slots.content(), className)}
					{...props}>
					{children}
				</ComboboxPrimitive.Popup>
			</ComboboxPrimitive.Positioner>
		</ComboboxPrimitive.Portal>
	);
};
Content.displayName = 'Combobox.Content';

type ListProps = ComponentPropsWithRef<typeof ComboboxPrimitive.List>;

/**
 * Scrollable container for the items. Give it a function as its child to render
 * one `Item` per entry of the root's `items`.
 *
 * Base UI ships the listbox unnamed, which axe flags, so it carries a generic
 * `aria-label`. Name it after the field when a page has more than one — and note
 * it cannot borrow the input's name: `aria-labelledby` pointing at a text field
 * resolves to that field's *value*, so the list would rename itself on every
 * keystroke.
 *
 * @summary Scrollable list of the filtered items
 * @dataAttribute {string} data-slot - Always set to "combobox-list"
 */
export const List = ({ className, ...props }: ListProps) => {
	const labelled = 'aria-label' in props || 'aria-labelledby' in props;

	return (
		<ComboboxPrimitive.List
			data-slot="combobox-list"
			aria-label={labelled ? undefined : 'Suggestions'}
			className={cn(slots.list(), className)}
			{...props}
		/>
	);
};
List.displayName = 'Combobox.List';

type ItemProps = ComponentPropsWithRef<typeof ComboboxPrimitive.Item>;

/**
 * A selectable row. `value` is what the combobox stores and what
 * `itemToStringLabel` turns into the text written back into the input.
 *
 * Under a `multiple` root it leads with a checkbox-shaped indicator that fills
 * while the row is selected, and the row announces `aria-selected` to assistive
 * technology. The indicator is decoration, not a control: clicking anywhere on
 * the row, or pressing Enter on it, is what toggles the selection.
 *
 * @summary Selectable row inside the list
 * @dataAttribute {string} data-slot - Always set to "combobox-item"
 * @dataAttribute {string} data-selected - Present while the row is selected
 */
export const Item = ({ className, children, ...props }: ItemProps) => {
	const multiple = use(MultipleContext);

	return (
		<ComboboxPrimitive.Item
			data-slot="combobox-item"
			className={cn(slots.item(), className)}
			{...props}>
			{multiple && (
				// Kept mounted so the empty box shows the row can be ticked, as a checkbox would.
				<ComboboxPrimitive.ItemIndicator
					keepMounted
					data-slot="combobox-item-indicator"
					className={slots.indicator()}>
					<IconCheck className="size-4 shrink-0" />
				</ComboboxPrimitive.ItemIndicator>
			)}
			{children}
		</ComboboxPrimitive.Item>
	);
};
Item.displayName = 'Combobox.Item';

type EmptyProps = ComponentPropsWithRef<typeof ComboboxPrimitive.Empty>;

/**
 * Shown in place of the list when nothing matches, and announced politely. It
 * needs `items` on `Root` to know the list is empty, and it must stay mounted —
 * change its children rather than rendering it conditionally. While the root is
 * `loading` it shows nothing: the list is empty because the results have not
 * arrived yet, not because there are none. With no rows to show either, the
 * surface would open as an empty frame, so render placeholder rows inside
 * `Content` for the wait.
 *
 * @summary Message shown when no item matches the query
 * @dataAttribute {string} data-slot - Always set to "combobox-empty"
 */
export const Empty = ({ className, children, ...props }: EmptyProps) => {
	const loading = use(LoadingContext);

	return (
		<ComboboxPrimitive.Empty
			data-slot="combobox-empty"
			className={cn(slots.message(), className)}
			{...props}>
			{loading ? null : children}
		</ComboboxPrimitive.Empty>
	);
};
Empty.displayName = 'Combobox.Empty';

type StatusProps = ComponentPropsWithRef<typeof ComboboxPrimitive.Status>;

/**
 * A politely announced message about the list. For the wait on a remote search,
 * pass `loading` to `Root` instead: it announces and marks the surface busy with
 * nothing else wired. Reach for `Status` for any other message — a count of
 * results, an error from the request — and keep it mounted, swapping its
 * children: a live region that appears already filled in is often skipped.
 *
 * @summary Politely announced status message for an async list
 * @dataAttribute {string} data-slot - Always set to "combobox-status"
 */
export const Status = ({ className, ...props }: StatusProps) => (
	<ComboboxPrimitive.Status
		data-slot="combobox-status"
		className={cn(slots.message(), className)}
		{...props}
	/>
);
Status.displayName = 'Combobox.Status';
