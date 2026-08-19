'use client';

import { ComponentProps } from 'react';

import { Command as CommandPrimitive } from 'cmdk';
import { tv } from 'tailwind-variants';

import { IconSearch } from './icons';

export const commandRecipe = tv({
	slots: {
		root: [
			'overflow-hidden rounded-md bg-bg-default-base-primary shadow-xl',
			'border border-border-default-base-secondary'
		],
		search: ['flex items-center gap-2 px-4 py-3', 'border-b border-border-default-base-secondary'],
		// Without shrink-0 the w-full input squeezes the icon below 24px.
		searchIcon: 'shrink-0 pointer-events-none [&>path]:fill-icon-default-base-tertiary',
		input: [
			'w-full border-none bg-transparent text-sm text-text-default-base-primary outline-none',
			'placeholder:text-text-default-base-tertiary'
		],
		// Caps the list mid-row, so a clipped row hints that there is more to scroll. With `Empty`
		// as a sibling, the itemless list would otherwise keep its py-2 as a 16px dead gap.
		list: [
			'max-h-65.25 overflow-y-auto rounded-md px-1 py-2 outline-none scroll-py-2',
			'not-has-[[cmdk-item]]:py-0'
		],
		empty: 'p-3 text-center text-sm text-text-default-base-tertiary',
		// cmdk emits data-selected on every row ("false" when inactive), so the variant needs the value.
		item: [
			'flex items-center rounded-md px-3 py-2 text-sm text-text-default-base-primary',
			'cursor-pointer hover:bg-bg-default-base-tertiary',
			'data-[selected=true]:bg-bg-default-base-tertiary'
		]
	}
});

const slots = commandRecipe();

/**
 * Props for the Command Root component.
 *
 * @property {string} [label] - Accessible name for the search input (rendered visually hidden). See `Input`.
 * @property {boolean} [shouldFilter=true] - When false, cmdk stops filtering and the consumer owns which items render.
 * @property {(value: string, search: string, keywords?: string[]) => number} [filter] - Custom scorer; return 0 to hide an item.
 * @property {string} [value] - Controlled value of the selected item.
 * @property {(value: string) => void} [onValueChange] - Called with the newly active value. cmdk only fires it when `value` is controlled.
 * @property {boolean} [loop=false] - Wrap keyboard navigation around the ends of the list.
 * @property {string} [className] - Additional CSS classes to apply.
 */
type RootProps = ComponentProps<typeof CommandPrimitive>;

/**
 * Surface that owns the search state, filtering and keyboard navigation.
 * Carries the panel chrome (border, radius, shadow), so it can be dropped
 * straight into a `Popover.Content` without extra wrapping.
 *
 * `label` names the search input — it is the only prop that can, see `Input`.
 *
 * @summary Filterable command palette container
 *
 * @example
 * ```tsx
 * <Command.Root label="Search options" shouldFilter={false}>
 *   <Command.Input placeholder="Search..." />
 *   <Command.List>...</Command.List>
 * </Command.Root>
 * ```
 */
const Root = ({ className, ...props }: RootProps) => (
	<CommandPrimitive data-slot="command-root" className={slots.root({ className })} {...props} />
);
Root.displayName = 'Command.Root';

/**
 * Props for the Command Input component.
 *
 * @property {string} [value] - Controlled search text.
 * @property {(search: string) => void} [onValueChange] - Called as the search text changes.
 * @property {string} [placeholder] - Placeholder shown while the search is empty.
 * @property {string} [className] - Additional CSS classes, applied to the search **row**, not the inner `<input>`.
 */
type InputProps = ComponentProps<typeof CommandPrimitive.Input>;

/**
 * Search row: a leading magnifier plus the text field that drives filtering.
 * `className` lands on the row wrapper rather than the `<input>`, since the row
 * is what reads as the field.
 *
 * Name it through `Root`'s `label`, **not** `aria-label` here: cmdk applies its
 * own `aria-labelledby` after spreading props, so it always wins and an
 * `aria-label` here is silently ignored.
 *
 * @summary Search field that filters the list as you type
 *
 * @example
 * ```tsx
 * <Command.Root label="Search options">
 *   <Command.Input placeholder="Search options..." />
 * </Command.Root>
 * ```
 */
const Input = ({ className, ...props }: InputProps) => (
	<div data-slot="command-search" className={slots.search({ className })}>
		<IconSearch data-slot="command-search-icon" className={slots.searchIcon()} aria-hidden />
		<CommandPrimitive.Input data-slot="command-input" className={slots.input()} {...props} />
	</div>
);
Input.displayName = 'Command.Input';

/**
 * Props for the Command List component.
 *
 * @property {string} [label] - Accessible name for the listbox.
 * @property {string} [className] - Additional CSS classes to apply.
 */
type ListProps = ComponentProps<typeof CommandPrimitive.List>;

/**
 * Scrollable region holding the items. Height is capped so a long list scrolls
 * instead of growing the surface; to change that cap, pass your own `max-h-*`.
 *
 * @summary Scroll container for command items
 */
const List = ({ className, ...props }: ListProps) => (
	<CommandPrimitive.List
		data-slot="command-list"
		className={slots.list({ className })}
		{...props}
	/>
);
List.displayName = 'Command.List';

/**
 * Props for the Command Empty component.
 *
 * @property {string} [className] - Additional CSS classes to apply.
 */
type EmptyProps = ComponentProps<typeof CommandPrimitive.Empty>;

/**
 * Message rendered only while the search matches nothing; renders nothing at
 * all when there are results, so it can sit in the tree permanently.
 *
 * Place it as a **sibling** of `List`, not inside it: cmdk hardcodes
 * `role="presentation"` here and `role="listbox"` on `List`, and a
 * presentational child fails `aria-required-children`.
 *
 * @summary Empty-state message shown when no item matches
 *
 * @example
 * ```tsx
 * <Command.List>{items}</Command.List>
 * <Command.Empty>No options found</Command.Empty>
 * ```
 */
const Empty = ({ className, ...props }: EmptyProps) => (
	<CommandPrimitive.Empty
		data-slot="command-empty"
		className={slots.empty({ className })}
		{...props}
	/>
);
Empty.displayName = 'Command.Empty';

/**
 * Props for the Command Group component.
 *
 * @property {ReactNode} [heading] - Label rendered above the group's items.
 * @property {string} [value] - Value used when filtering the group as a whole.
 * @property {string} [className] - Additional CSS classes to apply.
 */
type GroupProps = ComponentProps<typeof CommandPrimitive.Group>;

/**
 * Optional section wrapper around related items. Unstyled by design, so
 * ungrouped lists carry no extra spacing. cmdk renders the heading itself, so
 * style it from here with the descendant variant:
 * `**:[[cmdk-group-heading]]:px-3`.
 *
 * @summary Unstyled grouping wrapper for related items
 */
const Group = (props: GroupProps) => (
	<CommandPrimitive.Group data-slot="command-group" {...props} />
);
Group.displayName = 'Command.Group';

/**
 * Props for the Command Item component.
 *
 * @property {string} [value] - Value passed to `onSelect` and used for filtering.
 * @property {string[]} [keywords] - Extra terms that match this item without being displayed.
 * @property {boolean} [disabled] - When true, blocks selection and keyboard focus.
 * @property {(value: string) => void} [onSelect] - Called on click or Enter.
 * @property {string} [className] - Additional CSS classes to apply.
 *
 * @dataAttribute {string} data-selected - "true" on the active row, "false" otherwise
 * @dataAttribute {string} data-disabled - "true" when disabled, "false" otherwise
 */
type ItemProps = ComponentProps<typeof CommandPrimitive.Item>;

/**
 * Selectable row. cmdk keeps exactly one item active — via pointer or arrow
 * keys — and marks it `data-selected="true"`; Enter fires `onSelect` on that
 * row. Use `keywords` to make an item matchable by terms it doesn't display.
 *
 * @summary Selectable command row with hover and active styling
 *
 * @example
 * ```tsx
 * <Command.Item value="ho" keywords={['Homeowners']} onSelect={handleSelect}>
 *   Homeowners
 * </Command.Item>
 * ```
 */
const Item = ({ className, ...props }: ItemProps) => (
	<CommandPrimitive.Item
		data-slot="command-item"
		className={slots.item({ className })}
		{...props}
	/>
);
Item.displayName = 'Command.Item';

/**
 * Command is a filterable list built on `cmdk`: type to narrow the options,
 * navigate with the arrow keys, select with Enter. Compose from `Root` /
 * `Input` / `List` / `Empty` / `Item`, with `Group` when the options need
 * sections.
 *
 * `Root` carries its own panel chrome, so nesting it in a `Popover.Content`
 * yields a combobox. Reach for `DropdownMenu` instead when the options are
 * actions and there is nothing to search.
 *
 * @summary Filterable, keyboard-navigable list of options
 * @see {@link https://github.com/pacocoursey/cmdk|cmdk}
 *
 * @example
 * ```tsx
 * <Command.Root label="Search lines of business">
 *   <Command.Input placeholder="Search lines of business..." />
 *   <Command.List>
 *     <Command.Item onSelect={() => select('home')}>Homeowners</Command.Item>
 *     <Command.Item onSelect={() => select('auto')}>Auto</Command.Item>
 *   </Command.List>
 *   <Command.Empty>No options found</Command.Empty>
 * </Command.Root>
 * ```
 */
export const Command = {
	Root,
	Input,
	List,
	Empty,
	Group,
	Item
};
