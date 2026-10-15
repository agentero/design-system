'use client';

// Stays: `@base-ui/react/autocomplete` is `export * as Autocomplete`, so its parts hang off one
// export like cmdk's; without the directive they arrive `undefined` (see `command.tsx`).
import {
	ComponentPropsWithRef,
	createContext,
	KeyboardEvent,
	ReactNode,
	use,
	useLayoutEffect,
	useMemo,
	useRef,
	useState
} from 'react';

import { Autocomplete as AutocompletePrimitive } from '@base-ui/react/autocomplete';

import { cn } from '../../lib';
import {
	Content as ComboboxContent,
	Empty as ComboboxEmpty,
	Item as ComboboxItem,
	List as ComboboxList
} from '../combobox/combobox';
import { useBaseInputContext } from '../combobox/input-context';
import { inputRecipe, InputSize } from '../input';
import { InputGroup } from '../input-group';

export type AutocompleteRootProps<Item> = AutocompletePrimitive.Root.Props<Item>;

type GateContextValue = {
	/** Drops an open request the root is holding back, when the input loses focus. */
	dismiss: () => void;
	/** Lets an `Empty` open the list when nothing matches; returns its unregister. */
	registerEmpty: () => () => void;
};

const GateContext = createContext<GateContextValue | null>(null);

// Reports whether Base UI's filtered list has a row. It has to sit inside the primitive root,
// whose context holds the filtered items.
const RowsProbe = ({ onChange }: { onChange: (hasRows: boolean) => void }) => {
	const hasRows = AutocompletePrimitive.useFilteredItems().length > 0;
	useLayoutEffect(() => onChange(hasRows), [hasRows, onChange]);
	return null;
};

/**
 * Root of an autocomplete: a text field whose value is the text itself, with a
 * list of suggestions below it. Nothing is selected. Leaving the field, closing
 * the list and pressing Escape all keep what was typed.
 *
 * Use it for a free-text field that suggests: a prompt with recent queries, a
 * number field that offers what a lookup found. When the value must be one of
 * the options, use [Combobox](?path=/docs/components-combobox--docs) instead:
 * it writes the picked option back and drops text that matches none.
 *
 * Pass the suggestions as `items`. Base UI filters them against the text; set
 * `filter={null}` when they are already the ones to show. With `items`, the
 * list opens only while it has a row to show, or an `Empty` message: a field
 * with nothing to suggest stays shut, and one whose suggestions arrive late (a
 * lookup still running) opens when they do, if the user is still in the field.
 * `autoHighlight` highlights the first row as the user types, and `'always'`
 * highlights it as soon as it renders, which suits a single suggestion.
 *
 * Every Base UI root prop is accepted and forwarded: `value`, `defaultValue`,
 * `onValueChange`, `items`, `filter`, `autoHighlight`, `openOnInputClick`,
 * `submitOnItemClick` and so on. A controlled `open` is passed through as is,
 * without the check for rows. Base UI empties the field on Escape while the
 * list is shut, as a native search input does; this root keeps the text
 * instead, and does not report that change. Inside a `Modal`, Escape on an open
 * list closes the list only, and the next one closes the dialog; the modal
 * leaves an Escape from an expanded combobox to it.
 *
 * Picking a row and pressing Enter are told apart with Base UI's own events:
 *
 * - A pick, by pointer or by Enter on the highlighted row, fires the row's
 *   `onClick` and then `onValueChange` with `eventDetails.reason` set to
 *   `'item-press'`, carrying the row's text. Base UI stops that Enter, so the
 *   form is not submitted as well. With `submitOnItemClick` the owning form is
 *   submitted once, right after the pick.
 * - Enter with no row highlighted closes the list and submits the owning form
 *   once, through its default button when it has one. A form with no submit
 *   button submits too, as a form with a single text field does.
 * - A pick fills the field with the row's text. To keep the typed text, call
 *   `eventDetails.cancel()` when the reason is `'item-press'`, or ignore that
 *   change on a controlled `value`: the row's `onClick` can then write
 *   elsewhere.
 *
 * @summary Free-text field with a list of suggestions below it
 * @see {@link https://base-ui.com/react/components/autocomplete|Base UI Autocomplete}
 *
 * @example
 * ```tsx
 * import { Autocomplete } from '@agentero/design-system/autocomplete';
 *
 * <form onSubmit={() => runPrompt(prompt)}>
 *   <Autocomplete.Root items={recentPrompts} value={prompt} onValueChange={setPrompt}>
 *     <Autocomplete.Input aria-label="Describe your filters" before={<IconEffects />} />
 *     <Autocomplete.Content>
 *       <Autocomplete.List>
 *         {(recent: string) => (
 *           <Autocomplete.Item key={recent} value={recent} onClick={() => runPrompt(recent)}>
 *             {recent}
 *           </Autocomplete.Item>
 *         )}
 *       </Autocomplete.List>
 *     </Autocomplete.Content>
 *   </Autocomplete.Root>
 * </form>
 * ```
 */
export const Root = <Item,>({
	value: valueProp,
	defaultValue = '',
	onValueChange,
	open: openProp,
	defaultOpen = false,
	onOpenChange,
	children,
	...props
}: AutocompleteRootProps<Item>) => {
	// Held here even when uncontrolled: Base UI writes its own copy before `onValueChange`
	// runs, so a change cancelled there would land anyway.
	const [valueState, setValueState] = useState(defaultValue);
	const value = valueProp ?? valueState;

	// What the user asked for (typing, ArrowDown, a click under `openOnInputClick`), held apart
	// from what is shown: Base UI opens an empty list, and while it is open it hides the rest of
	// the page from assistive technology. With `items`, the list only shows once it has a row, or
	// an `Empty` to show instead; a lookup that answers late then opens the list it was asked for.
	const [requested, setRequested] = useState(defaultOpen);
	const [hasRows, setHasRows] = useState(false);
	const [emptyCount, setEmptyCount] = useState(0);
	const counted = props.items !== undefined || props.filteredItems !== undefined;
	const open = openProp ?? (requested && (!counted || hasRows || emptyCount > 0));

	const handleOpenChange: typeof onOpenChange = (nextOpen, eventDetails) => {
		onOpenChange?.(nextOpen, eventDetails);
		if (!eventDetails.isCanceled) setRequested(nextOpen);
	};

	const handleValueChange: typeof onValueChange = (nextValue, eventDetails) => {
		// Escape on a shut list empties the field in Base UI. The text is the value here.
		if (eventDetails.reason === 'escape-key') {
			eventDetails.cancel();
			setRequested(false);
			return;
		}
		onValueChange?.(nextValue, eventDetails);
		if (valueProp === undefined && !eventDetails.isCanceled) setValueState(nextValue);
	};

	const shown = useRef(open);
	shown.current = open;

	// Stable, so an `Empty` registers once rather than on every render of the root.
	const gate = useMemo<GateContextValue>(
		() => ({
			// Base UI only reports a close for a list it shows; one held back has to be dropped
			// here, or it would open once the user has moved on.
			dismiss: () => {
				if (!shown.current) setRequested(false);
			},
			registerEmpty: () => {
				setEmptyCount(count => count + 1);
				return () => setEmptyCount(count => count - 1);
			}
		}),
		[]
	);

	return (
		<GateContext value={gate}>
			<AutocompletePrimitive.Root
				{...(props as AutocompleteRootProps<unknown>)}
				value={value}
				onValueChange={handleValueChange}
				open={open}
				onOpenChange={handleOpenChange}>
				{children}
				{counted && openProp === undefined && <RowsProbe onChange={setHasRows} />}
			</AutocompletePrimitive.Root>
		</GateContext>
	);
};
Root.displayName = 'Autocomplete.Root';

// The native `size` is a number; intersected with the token union it collapses to `never`.
type InputProps = Omit<ComponentPropsWithRef<typeof AutocompletePrimitive.Input>, 'size'> & {
	/** Control height, matching `Input`. Defaults to `'md'`. */
	size?: InputSize;
	/**
	 * Content in front of the input, inside the frame: an icon, a spinner while
	 * a request runs. Wrapped in an `InputGroup.Addon`, so an icon takes the
	 * input's colour and size. Decoration: hide an icon from assistive
	 * technology, and name a spinner.
	 */
	before?: ReactNode;
	/**
	 * Content after the input, inside the frame: a `Tag`, a unit, a button.
	 * Wrapped in an `InputGroup.Addon`; a tag tucks into the frame's padding.
	 */
	after?: ReactNode;
};

const hasContent = (node: ReactNode) => node !== undefined && node !== null && node !== false;

const isSubmitButton = (element: Element): element is HTMLButtonElement | HTMLInputElement =>
	(element instanceof HTMLButtonElement || element instanceof HTMLInputElement) &&
	element.type === 'submit';

// Base UI lets Enter through to the form when no row is highlighted, and stops it when one is.
// The browser then submits only a form with a single text field or a submit button, and Base UI
// renders a hidden text input of its own next to this one, so a prompt form with no button would
// never submit. This submits it as the browser would, through the form's default button if it has
// one; the native submission is prevented so a form with a button does not submit twice.
const submitOnEnter = (event: KeyboardEvent<HTMLDivElement>) => {
	const input = event.target;
	if (event.key !== 'Enter' || event.defaultPrevented || event.nativeEvent.isComposing) return;
	if (!(input instanceof HTMLInputElement) || input.dataset.slot !== 'autocomplete-input') return;
	if (!input.form) return;

	event.preventDefault();
	const defaultButton = Array.from(input.form.elements).find(isSubmitButton);
	input.form.requestSubmit(defaultButton?.disabled ? undefined : defaultButton);
};

/**
 * The text field. Typing opens the list, as does ArrowDown; a click opens it
 * only under `openOnInputClick`. A click on the field never closes it; Escape
 * and a click outside do, and both keep the text.
 *
 * It wears the same styling as `Input` and takes the same wiring from
 * `InputContext`, so inside a `FieldText` the label, the hint and the error
 * point at it with nothing passed by hand. Its own props win over the context.
 * Inside a field it also names itself with `aria-labelledby` pointing at the
 * label: while the list is open, Base UI hides everything but the input and
 * the list from assistive technology, and a `<label for>` alone stops naming
 * it. Outside a field, give it `aria-label` or an `aria-labelledby` of your
 * own.
 *
 * It is drawn as an `InputGroup` frame, and the list anchors to that whole
 * frame, so it is as wide as the field whatever sits in `before` and `after`.
 *
 * Every native input attribute is accepted and forwarded to the `<input>`:
 * `placeholder`, `readOnly`, `inputMode`. `className` styles the `<input>`.
 * Base UI's `render` swaps the element: pass a function that spreads the props
 * it receives onto a masked input, or onto a wrapper's `<input>` when the
 * field needs an overlay of its own.
 *
 * @summary Text field inside a frame with optional content before and after
 * @dataAttribute {string} data-slot - Always set to "autocomplete-input"
 */
export const Input = ({ before, after, ...props }: InputProps) => {
	const { className, size = 'md', onBlur, ...rest } = useBaseInputContext(props);
	const gate = use(GateContext);
	const bare = !hasContent(before) && !hasContent(after);

	return (
		// Base UI's part, so the list anchors to the whole frame rather than to the bare input;
		// drawn by our `InputGroup.Root`, so it is the same frame.
		<AutocompletePrimitive.InputGroup
			render={<InputGroup.Root />}
			data-slot="autocomplete-field"
			onKeyDown={submitOnEnter}
			// Alone in the frame, the text keeps a plain `Input`'s inset rather than the group's.
			className={bare ? 'px-4' : undefined}>
			{hasContent(before) && (
				<InputGroup.Addon data-slot="autocomplete-before">{before}</InputGroup.Addon>
			)}
			<AutocompletePrimitive.Input
				data-slot="autocomplete-input"
				data-size={size}
				className={cn(inputRecipe({ size }), className)}
				onBlur={event => {
					onBlur?.(event);
					gate?.dismiss();
				}}
				{...rest}
			/>
			{hasContent(after) && (
				<InputGroup.Addon data-slot="autocomplete-after">{after}</InputGroup.Addon>
			)}
		</AutocompletePrimitive.InputGroup>
	);
};
Input.displayName = 'Autocomplete.Input';

// The parts below are Combobox's: Base UI's Autocomplete re-exports the Combobox popup, list,
// item and empty parts, which read the same store, so the same styled parts serve both roots.

type ContentProps = ComponentPropsWithRef<typeof ComboboxContent>;

/**
 * The floating surface holding the suggestions. It portals to the body, is as
 * wide as the field's frame, and caps its height to the space available. It
 * works inside a `Modal`.
 *
 * Under a root with `items`, it opens only while the list has a row or an
 * `Empty` message to show; see `Root`.
 *
 * Accepts the positioning props `side`, `align`, `sideOffset`, `alignOffset`,
 * `anchor` and `collisionPadding`, with the same defaults as Combobox: below
 * the field, from its left edge, 12px away.
 *
 * @summary Floating surface under the field, holding the suggestions
 * @dataAttribute {string} data-slot - Always set to "autocomplete-content"
 */
export const Content = (props: ContentProps) => (
	<ComboboxContent data-slot="autocomplete-content" {...props} />
);
Content.displayName = 'Autocomplete.Content';

type ListProps = ComponentPropsWithRef<typeof ComboboxList>;

/**
 * Scrollable container for the suggestions. Give it a function as its child
 * to render one `Item` per entry of the root's `items`, or render the rows by
 * hand.
 *
 * It carries a generic `aria-label`, "Suggestions". Name it after the field
 * when a page has more than one. It cannot borrow the input's name: a
 * reference to a text field resolves to its value.
 *
 * @summary Scrollable list of the suggestions
 * @dataAttribute {string} data-slot - Always set to "autocomplete-list"
 */
export const List = (props: ListProps) => <ComboboxList data-slot="autocomplete-list" {...props} />;
List.displayName = 'Autocomplete.List';

type ItemProps = ComponentPropsWithRef<typeof ComboboxItem>;

/**
 * A suggestion. `value` is what the root writes into the field when the row is
 * picked: a string, an object of shape `{ value, label }`, or anything the
 * root's `itemToStringValue` turns into text.
 *
 * `onClick` fires on a pick by pointer and on Enter while the row is
 * highlighted, before the root's `onValueChange` reports `'item-press'`. Run
 * the suggestion there, or write it to another field and cancel the
 * `'item-press'` change to leave the typed text alone.
 *
 * @summary Suggestion row inside the list
 * @dataAttribute {string} data-slot - Always set to "autocomplete-item"
 * @dataAttribute {string} data-highlighted - Present while the row is highlighted
 */
export const Item = (props: ItemProps) => <ComboboxItem data-slot="autocomplete-item" {...props} />;
Item.displayName = 'Autocomplete.Item';

type EmptyProps = ComponentPropsWithRef<typeof ComboboxEmpty>;

/**
 * Shown in place of the rows when no suggestion matches the text, and
 * announced politely. It needs `items` on `Root` to know the list is empty,
 * and it must stay mounted: change its children rather than rendering it
 * conditionally. Leave it out when a field with nothing to suggest should show
 * nothing at all.
 *
 * @summary Message shown when no suggestion matches the text
 * @dataAttribute {string} data-slot - Always set to "autocomplete-empty"
 */
export const Empty = (props: EmptyProps) => {
	const gate = use(GateContext);
	useLayoutEffect(() => gate?.registerEmpty(), [gate]);

	return <ComboboxEmpty data-slot="autocomplete-empty" {...props} />;
};
Empty.displayName = 'Autocomplete.Empty';
