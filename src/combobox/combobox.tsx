'use client';

// Stays: `@base-ui/react/combobox` is `export * as Combobox`, so its parts hang off one
// export like cmdk's — without the directive they arrive `undefined` (see `command.tsx`).
import { ComponentPropsWithRef, createContext, use, useEffect, useId, useState } from 'react';

import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { tv } from 'tailwind-variants';

import { cn, useMergeProps } from '../../lib';
import { InputContext, inputRecipe, InputSize } from '../input';

/**
 * Style recipe for Combobox. The surface carries its own chrome — border,
 * background and shadow — because the list it holds is plain content.
 *
 * @summary tailwind-variants recipe backing the Combobox surface and list styles
 */
export const comboboxRecipe = tv({
	slots: {
		content: [
			'w-(--anchor-width) max-h-(--available-height) overflow-hidden rounded-md',
			'border border-border-default-base-primary bg-bg-default-base-primary shadow-lg',
			'origin-(--transform-origin)',
			'data-open:data-[side=bottom]:animate-dropdown-slide-in-from-top',
			'data-open:data-[side=top]:animate-dropdown-slide-in-from-bottom',
			'data-closed:animate-dropdown-slide-out',
			'motion-reduce:animate-none!'
		],
		// Never taller than the room left: the surface clips there and would hide the last rows.
		// Empty, the padding alone would be a 16px band under `Empty`.
		list: [
			'max-h-[min(10.25rem,var(--available-height))] overflow-y-auto scroll-py-2 py-2 outline-none',
			'data-empty:py-0'
		],
		item: [
			// Panel radius minus the 2px gap, so the row reads as concentric with the panel.
			'mx-2 my-px flex cursor-pointer items-center rounded-[calc(var(--radius-md)-2px)]',
			'px-3 py-2 text-sm text-text-default-base-primary select-none',
			// `data-highlighted` covers pointer and keyboard alike; no `hover:` needed.
			'data-highlighted:bg-bg-default-base-primary-hover',
			'data-disabled:cursor-default data-disabled:text-text-default-base-tertiary'
		],
		// Both stay mounted to be announced, so idle they collapse instead of hiding.
		message: ['mx-2 my-px px-3 py-2 text-sm text-text-default-base-tertiary', 'empty:m-0 empty:p-0']
	}
});

const slots = comboboxRecipe();

// Base UI leaves the listbox unnamed, which axe flags. `Input` publishes its final id
// here and `List` labels itself with it.
type ComboboxContextValue = {
	inputId: string | undefined;
	setInputId: (id: string) => void;
};

const ComboboxContext = createContext<ComboboxContextValue | null>(null);

/**
 * Root of a combobox: a text input that filters a list of options and writes the
 * chosen one back into itself. With `Input` as the only trigger, the list opens on
 * focus or on the first keystroke.
 *
 * Pass the options as `items`. For a list that comes from the server, set
 * `filter={null}`, hand the already-filtered rows to `filteredItems`, and request
 * them from `onInputValueChange`; `Status` then announces the wait.
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
export const Root = <Value, Multiple extends boolean | undefined = false, Item = Value>(
	props: ComboboxPrimitive.Root.Props<Value, Multiple, Item>
) => {
	const [inputId, setInputId] = useState<string>();

	return (
		<ComboboxContext value={{ inputId, setInputId }}>
			<ComboboxPrimitive.Root {...props} />
		</ComboboxContext>
	);
};
Root.displayName = 'Combobox.Root';

// The native `size` is a number; intersected with the token union it collapses to `never`.
type InputProps = Omit<ComponentPropsWithRef<typeof ComboboxPrimitive.Input>, 'size'> & {
	/** Control height, matching `Input`. Defaults to `'md'`. */
	size?: InputSize;
};

// `Root` owns the text through `inputValue`; a form adapter's copies would fight it.
const ROOT_OWNED_KEYS = new Set(['value', 'defaultValue', 'onChange']);

const useComboboxInputContext = (props: InputProps) => {
	const context = use(InputContext);
	const wiring = context
		? Object.fromEntries(Object.entries(context).filter(([key]) => !ROOT_OWNED_KEYS.has(key)))
		: null;

	return useMergeProps(wiring as Partial<InputProps> | null, props);
};

/**
 * The search field, which doubles as the trigger: focusing or typing opens the
 * list. It wears the same styling as `Input` and takes the same wiring from
 * `InputContext`, so inside a `FieldText` the label, the hint and the error point
 * at it with nothing passed by hand. Its own props win over the context.
 *
 * Pass `render` to swap the element for a richer control — a field with a leading
 * search icon, for instance — and the combobox wiring rides along.
 *
 * @summary Search field that opens the list on focus and filters it as you type
 * @dataAttribute {string} data-slot - Always set to "combobox-input"
 */
export const Input = (props: InputProps) => {
	const { className, size = 'md', id: ownId, ...rest } = useComboboxInputContext(props);
	const generatedId = useId();
	const id = ownId ?? generatedId;
	const combobox = use(ComboboxContext);

	// After render on purpose: a container may impose its own id (FieldText's `controlId`).
	useEffect(() => {
		combobox?.setInputId(id);
	}, [combobox, id]);

	return (
		<ComboboxPrimitive.Input
			data-slot="combobox-input"
			data-size={size}
			id={id}
			className={cn(inputRecipe({ size }), className)}
			{...rest}
		/>
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
			className="isolate z-(--z-index-top-layer)">
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
 * one `Item` per entry of the root's `items`. It takes its accessible name from
 * the input — so from the field label, when there is one — unless you label it
 * yourself.
 *
 * @summary Scrollable list of the filtered items
 * @dataAttribute {string} data-slot - Always set to "combobox-list"
 */
export const List = ({ className, ...props }: ListProps) => {
	const combobox = use(ComboboxContext);
	const labelled = 'aria-label' in props || 'aria-labelledby' in props;

	return (
		<ComboboxPrimitive.List
			data-slot="combobox-list"
			aria-labelledby={labelled ? undefined : combobox?.inputId}
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
 * @summary Selectable row inside the list
 * @dataAttribute {string} data-slot - Always set to "combobox-item"
 */
export const Item = ({ className, ...props }: ItemProps) => (
	<ComboboxPrimitive.Item
		data-slot="combobox-item"
		className={cn(slots.item(), className)}
		{...props}
	/>
);
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
