'use client';

// Stays: `@base-ui/react/combobox` is `export * as Combobox`, so its parts hang off one
// export like cmdk's — without the directive they arrive `undefined` (see `command.tsx`).
import { ComponentPropsWithRef, createContext, use, useRef, useState } from 'react';

import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { tv } from 'tailwind-variants';

import { cn, useMergeProps } from '../../lib';
import { useFieldContext } from '../field';
import { InputContext, inputRecipe, InputSize } from '../input';
import { InputGroup } from '../input-group';
import { IconCancel, IconCheck, IconKeyboardArrowDown, IconSearch } from './icons';

/**
 * Style recipe for Combobox. Slots: `action` and `trigger` (the clear and
 * chevron buttons inside the input's frame, which is `InputGroup`'s),
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
		triggerReplaced: '[[data-slot=combobox-field]:not([data-placeholder])_&]:hidden',
		content: [
			'w-(--anchor-width) max-h-(--available-height) overflow-hidden rounded-md',
			'border border-border-default-base-primary bg-bg-default-base-primary shadow-lg',
			// Not Base UI's `--transform-origin`: with `align="start"` it puts the origin on the left
			// corner, and this surface is as wide as the input, so it has to grow from the edge it hangs from.
			'data-[side=bottom]:origin-top data-[side=top]:origin-bottom',
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
			'border border-border-input-default bg-bg-input-normal',
			'text-text-default-base-inverse-primary transition-colors duration-200 ease-in-out',
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
 * `filter={null}`, hand the already-filtered rows to `filteredItems`, and request
 * them from `onInputValueChange`; `Status` then announces the wait.
 *
 * Every Base UI root prop is accepted and forwarded — `items`, `filter`,
 * `value`, `onValueChange` and so on. `open` stays the consumer's to control;
 * `minInputLength` only refuses to open below the minimum.
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
	open: openProp,
	defaultOpen = false,
	onOpenChange,
	onInputValueChange,
	...props
}: ComboboxRootProps<Value, Multiple, Item>) => {
	const multiple = Boolean(props.multiple);
	const [openState, setOpenState] = useState(defaultOpen);
	// A ref, not state: Base UI reports the new text before it asks to open on that same
	// keystroke, so the check has to see it before React re-renders.
	const query = useRef(String(props.inputValue ?? props.defaultInputValue ?? ''));
	if (props.inputValue !== undefined) query.current = String(props.inputValue);
	const isShort = (value: string) => value.trim().length < minInputLength;

	const handleOpenChange: typeof onOpenChange = (open, eventDetails) => {
		if (open && isShort(query.current)) {
			eventDetails.cancel();
			return;
		}
		onOpenChange?.(open, eventDetails);
		// Base UI closes the list (and so clears the query) after a pick made while filtering;
		// cancelling that request is its documented way to keep picking from one search.
		if (multiple && !open && eventDetails.reason === 'item-press') {
			eventDetails.cancel();
		}
		if (!eventDetails.isCanceled) setOpenState(open);
	};

	const handleInputValueChange: typeof onInputValueChange = (value, eventDetails) => {
		query.current = value;
		onInputValueChange?.(value, eventDetails);
		// Base UI only closes the list once the text is empty, so a minimum closes it here.
		if (isShort(value)) setOpenState(false);
	};

	// Without a minimum, Base UI keeps its own open state, as it always has.
	const open = openProp ?? (minInputLength > 0 ? openState : undefined);

	return (
		<MultipleContext value={multiple}>
			<ComboboxPrimitive.Root
				open={open}
				defaultOpen={defaultOpen}
				onOpenChange={handleOpenChange}
				onInputValueChange={handleInputValueChange}
				{...props}
			/>
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
};

// `Root` owns the text through `inputValue`; a form adapter's copies would fight it.
const ROOT_OWNED_KEYS = new Set(['value', 'defaultValue', 'onChange']);

const useComboboxInputContext = (props: InputProps) => {
	const context = use(InputContext);
	const field = useFieldContext();
	const wiring = context
		? Object.fromEntries(Object.entries(context).filter(([key]) => !ROOT_OWNED_KEYS.has(key)))
		: null;

	// The field's `<label for>` is not enough here: while the list is open, Base UI hides
	// everything but the input and the list from assistive technology, label included, and
	// Chrome then drops it from the name. A direct `aria-labelledby` reference survives that.
	// Only as a default: a name the consumer gave, either way, wins.
	const named = 'aria-label' in props || 'aria-labelledby' in props;
	const labelledBy = !named && field ? { 'aria-labelledby': field.labelId } : null;

	return useMergeProps({ ...wiring, ...labelledBy } as Partial<InputProps> | null, props);
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
 * other two or drops it from `search`. On a `select`, the clear button takes the
 * chevron's place once an option is picked; the list still opens from the input. Base UI mounts it only once there is
 * something to clear — a picked option — so an untouched field shows nothing. Name it with
 * `clearLabel`, and the chevron with `triggerLabel`, when a page has more than
 * one combobox.
 *
 * Under a `multiple` root there is neither: the list stays open between picks,
 * so a chevron has nothing to toggle, and Base UI's clear button would drop the
 * whole selection while a cross inside a search field reads as "clear what I
 * typed". The selection is rendered outside the field, with its own way to
 * remove each entry.
 *
 * Every native input attribute is accepted and forwarded to the `<input>` —
 * `placeholder`, `disabled`, `autoComplete` — and so is `className`.
 *
 * @summary Search, plain or select field that opens and filters the list
 * @dataAttribute {string} data-slot - Always set to "combobox-input"
 */
export const Input = ({
	variant = 'search',
	showClear = variant === 'search',
	clearLabel = 'Clear',
	triggerLabel = 'Show options',
	...props
}: InputProps) => {
	const { className, size = 'md', ...rest } = useComboboxInputContext(props);
	const multiple = use(MultipleContext);

	return (
		// Base UI's part, so the list anchors to the whole frame — icon and buttons included —
		// rather than to the bare input; drawn by our `InputGroup.Root`, so it is the same frame.
		<ComboboxPrimitive.InputGroup
			render={<InputGroup.Root />}
			data-slot="combobox-field"
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
			/>
			{showClear && !multiple && (
				<ComboboxPrimitive.Clear
					data-slot="combobox-clear"
					aria-label={clearLabel}
					className={slots.action()}>
					<IconCancel />
				</ComboboxPrimitive.Clear>
			)}
			{variant === 'select' && !multiple && (
				<ComboboxPrimitive.Trigger
					data-slot="combobox-trigger"
					aria-label={triggerLabel}
					className={cn(slots.action(), slots.trigger(), showClear && slots.triggerReplaced())}>
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
	...props
}: ContentProps) => (
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
				className={cn(slots.content(), className)}
				{...props}
			/>
		</ComboboxPrimitive.Positioner>
	</ComboboxPrimitive.Portal>
);
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
					<IconCheck className="size-3.5" />
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
 * change its children rather than rendering it conditionally.
 *
 * @summary Message shown when no item matches the query
 * @dataAttribute {string} data-slot - Always set to "combobox-empty"
 */
export const Empty = ({ className, ...props }: EmptyProps) => (
	<ComboboxPrimitive.Empty
		data-slot="combobox-empty"
		className={cn(slots.message(), className)}
		{...props}
	/>
);
Empty.displayName = 'Combobox.Empty';

type StatusProps = ComponentPropsWithRef<typeof ComboboxPrimitive.Status>;

/**
 * Announces the state of a list that is still loading. Use it for the wait on a
 * remote search: keep it mounted and swap its children. It does not mark the
 * surface busy on its own — pass `aria-busy` to `Content` while the request is in
 * flight, as Base UI's own examples do.
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
