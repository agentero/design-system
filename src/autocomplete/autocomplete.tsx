'use client';

// Stays: `@base-ui/react/autocomplete` is `export * as Autocomplete`, so its parts hang off one
// export like cmdk's; without the directive they arrive `undefined` (see `command.tsx`).
import {
	Children,
	ComponentPropsWithRef,
	createContext,
	isValidElement,
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

// The root decides when the list shows, so its open state is not the consumer's to drive. A
// submit on a pick runs from the row's `onClick`: Base UI's own finds the form through a ref that
// every Base UI field outside a Base UI `Field` shares, and submits the wrong one.
export type AutocompleteRootProps<Item> = Omit<
	AutocompletePrimitive.Root.Props<Item>,
	'open' | 'defaultOpen' | 'onOpenChange' | 'submitOnItemClick'
>;

type RootContextValue = {
	/** Set by `Content` when it holds an `Empty`, which may then show with no rows. */
	setHasEmpty: (hasEmpty: boolean) => void;
	/** Drops an open request held back for want of rows, when the input loses focus. */
	dismiss: () => void;
};

const RootContext = createContext<RootContextValue | null>(null);

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
 * list opens only while it has a row to show, or always when it holds an
 * `Empty` message: a field with nothing to suggest stays shut, and one whose
 * suggestions arrive late (a lookup still running) opens when they do, if the
 * user is still in the field.
 * `autoHighlight` highlights the first row as the user types, and `'always'`
 * highlights it as soon as it renders, which suits a single suggestion.
 *
 * Every Base UI root prop is accepted and forwarded: `value`, `defaultValue`,
 * `onValueChange`, `items`, `filter`, `autoHighlight`, `openOnInputClick`
 * and so on, except two. The open state (`open`, `defaultOpen`,
 * `onOpenChange`) is left out, since the root decides when the list shows.
 * `submitOnItemClick` is left out too: to submit on a pick, run the submit
 * from the row's `onClick` with the row's value. Base UI empties the field on Escape while the
 * list is shut, as a native search input does; this root keeps the text
 * instead, and does not report that change. Escape while the list waits for
 * late suggestions drops the wait, so they no longer open it. Inside a `Modal`
 * or `Popover`, Escape on an open list closes the list only, and the next one
 * closes the layer.
 *
 * Picking a row and pressing Enter are told apart with Base UI's own events:
 *
 * - A pick, by pointer or by Enter on the highlighted row, fires the row's
 *   `onClick` and then `onValueChange` with `eventDetails.reason` set to
 *   `'item-press'`, carrying the row's text. Base UI stops that Enter, so the
 *   form is not submitted as well.
 * - Enter with no row highlighted closes the list and submits the owning form
 *   once, as the browser would: by clicking its default button, so the
 *   button's `onClick` runs, and not while that button is disabled. With no submit button the form submits only when
 *   this is its one text field.
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
	children,
	...props
}: AutocompleteRootProps<Item>) => {
	// Held here even when uncontrolled: Base UI writes its own copy before `onValueChange`
	// runs, so a change cancelled there would land anyway.
	const [valueState, setValueState] = useState(defaultValue);
	const value = valueProp ?? valueState;

	// Base UI opens the list with no rows too, and while it is open it hides the rest of the page
	// from assistive technology. So the root holds what the user asked for (typing, ArrowDown)
	// apart from what shows: with `items` and no `Empty`, the list shows only while it has a row,
	// and a lookup that answers late opens the list it was asked for.
	const [requested, setRequested] = useState(false);
	const [hasRows, setHasRows] = useState(false);
	const [hasEmpty, setHasEmpty] = useState(false);
	const counted = props.items !== undefined || props.filteredItems !== undefined;
	const open = requested && (!counted || hasRows || hasEmpty);

	// Base UI only reports a close for a list it shows; `dismiss` reads this to drop one held back.
	const shown = useRef(open);
	useLayoutEffect(() => {
		shown.current = open;
	}, [open]);

	const handleValueChange: typeof onValueChange = (nextValue, eventDetails) => {
		// Escape on a shut list empties the field in Base UI. The text is the value here, so the
		// field keeps it. A list held back for want of rows is dropped instead, so late rows do not
		// open it, and the Escape stops here. With nothing held it undid nothing, and goes on to a
		// surrounding Modal or Popover. Base UI stops it only after a pick, so both are set here.
		if (eventDetails.reason === 'escape-key') {
			eventDetails.cancel();
			if (requested) {
				setRequested(false);
				eventDetails.event.stopPropagation();
			} else {
				eventDetails.allowPropagation();
			}
			return;
		}
		onValueChange?.(nextValue, eventDetails);
		if (valueProp === undefined && !eventDetails.isCanceled) setValueState(nextValue);
	};

	const context = useMemo<RootContextValue>(
		() => ({
			setHasEmpty,
			dismiss: () => {
				if (!shown.current) setRequested(false);
			}
		}),
		[]
	);

	return (
		<RootContext value={context}>
			<AutocompletePrimitive.Root
				{...(props as AutocompletePrimitive.Root.Props<unknown>)}
				value={value}
				onValueChange={handleValueChange}
				open={open}
				onOpenChange={setRequested}>
				{children}
				{counted && <RowsProbe onChange={setHasRows} />}
			</AutocompletePrimitive.Root>
		</RootContext>
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

// The input types HTML counts as "fields that block implicit submission".
const BLOCKING_TYPES = new Set([
	'text',
	'search',
	'url',
	'tel',
	'email',
	'password',
	'date',
	'month',
	'week',
	'time',
	'datetime-local',
	'number'
]);

// Base UI's hidden input is `aria-hidden` and out of the tab order. `aria-hidden` alone would not
// tell it apart: while a list is open, Base UI sets it on the rest of the page too.
const isBlockingField = (element: Element) =>
	element instanceof HTMLInputElement &&
	BLOCKING_TYPES.has(element.type) &&
	!(element.tabIndex === -1 && element.getAttribute('aria-hidden') === 'true');

// Submits as the browser does on Enter: by clicking the form's default button, so its `onClick`
// runs, which does nothing while it is disabled. With no button, only a form whose one text field
// this is.
const submitForm = (form: HTMLFormElement) => {
	const defaultButton = Array.from(form.elements).find(isSubmitButton);
	if (defaultButton) {
		defaultButton.click();
		return;
	}
	if (Array.from(form.elements).filter(isBlockingField).length <= 1) form.requestSubmit();
};

// Base UI lets Enter through to the form when no row is highlighted, and stops it when one is.
// Base UI also renders a hidden text input of its own next to this one, which the browser counts,
// so a prompt form with no button would never submit. This submits as the browser would without
// that input; the native submission is prevented so a form with a button does not submit twice.
const submitOnEnter = (event: KeyboardEvent<HTMLDivElement>) => {
	const input = event.target;
	if (event.key !== 'Enter' || event.defaultPrevented || event.nativeEvent.isComposing) return;
	if (!(input instanceof HTMLInputElement) || input.dataset.slot !== 'autocomplete-input') return;
	if (!input.form) return;

	event.preventDefault();
	submitForm(input.form);
};

/**
 * The text field. Typing opens the list, as does ArrowDown; a click opens it
 * only under `openOnInputClick`. A click on the field never closes it; Escape
 * and a click outside do, and both keep the text.
 *
 * It wears the same styling as `Input` and takes the same wiring from
 * `InputContext`, so inside a `FieldText` the label, the hint and the error
 * point at it with nothing passed by hand. Its own props win over the context.
 * A `value`, `defaultValue` or `onChange` in the context is ignored: the text
 * is the root's, so bind it through `Root`'s `value` and `onValueChange`.
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
	const root = use(RootContext);
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
					root?.dismiss();
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
 * Under a root with `items`, it opens only while the list has a row, unless
 * it holds an `Empty` message as a direct child; see `Root`.
 *
 * Accepts the positioning props `side`, `align`, `sideOffset`, `alignOffset`,
 * `anchor` and `collisionPadding`, with the same defaults as Combobox: below
 * the field, from its left edge, 12px away.
 *
 * @summary Floating surface under the field, holding the suggestions
 * @dataAttribute {string} data-slot - Always set to "autocomplete-content"
 */
export const Content = (props: ContentProps) => {
	const setHasEmpty = use(RootContext)?.setHasEmpty;
	// Read from the children rather than registered by `Empty`: the surface portals, and renders
	// nothing while the list is shut, so an `Empty` inside it could not ask for the list to open.
	const hasEmpty = Children.toArray(props.children).some(
		child => isValidElement(child) && child.type === Empty
	);
	useLayoutEffect(() => {
		setHasEmpty?.(hasEmpty);
		return () => setHasEmpty?.(false);
	}, [setHasEmpty, hasEmpty]);

	return <ComboboxContent data-slot="autocomplete-content" {...props} />;
};
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
 * and it must be a direct child of `Content`, which reads it there.
 * Leave it out when a field with nothing to suggest should show nothing at
 * all.
 *
 * @summary Message shown when no suggestion matches the text
 * @dataAttribute {string} data-slot - Always set to "autocomplete-empty"
 */
export const Empty = (props: EmptyProps) => (
	<ComboboxEmpty data-slot="autocomplete-empty" {...props} />
);
Empty.displayName = 'Autocomplete.Empty';
