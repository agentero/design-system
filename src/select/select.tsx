'use client';

import { ComponentPropsWithRef, ReactNode } from 'react';

import * as SelectPrimitive from '@radix-ui/react-select';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { IconCheck, IconKeyboardArrowDown } from '../combobox/icons';
import { useFieldContext } from '../field';
import { inputRecipe, InputSize } from '../input';

/**
 * Style recipe for Select. Slots: `trigger` (the closed field), `value`, `icon` (the chevron),
 * `content` (the floating surface), `viewport` (the scrolling list), `scrollButton`, `item`,
 * `trailing`, `indicator` (the check on the selected row), `groupLabel` and `separator`. The
 * trigger wears `Input`'s recipe.
 *
 * @summary tailwind-variants recipe backing the Select trigger, surface and rows
 */
export const selectRecipe = tv({
	slots: {
		trigger: [
			'flex cursor-pointer items-center gap-2 pe-3 text-start',
			// Focus moves to the options while the list is open; the field keeps its ring meanwhile.
			'data-[state=open]:border-border-input-focus data-[state=open]:outline-border-input-focus',
			'data-[state=open]:outline-[0.125rem] data-[state=open]:outline-offset-[-0.0625rem]',
			'aria-invalid:data-[state=open]:border-border-input-destructive',
			'aria-invalid:data-[state=open]:outline-border-input-destructive'
		],
		value:
			'min-w-0 flex-1 truncate group-data-placeholder/select-trigger:text-text-input-placeholder',
		icon: [
			'flex size-5 shrink-0 items-center justify-center transition-transform duration-150 motion-reduce:transition-none',
			'[&_path]:fill-icon-input-default group-data-[state=open]/select-trigger:-rotate-180',
			'group-disabled/select-trigger:[&_path]:fill-icon-input-disable'
		],
		content: [
			'relative z-(--z-index-top-layer) flex flex-col overflow-hidden outline-none',
			'rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-xl'
		],
		viewport: 'scroll-py-1 py-1',
		scrollButton: [
			'flex h-6 shrink-0 cursor-default items-center justify-center bg-bg-default-base-primary',
			'[&_path]:fill-icon-input-default'
		],
		item: [
			'group/item relative mx-1 flex min-h-10 cursor-pointer items-center rounded-md py-2 ps-4',
			// The end padding keeps room for the check, so the text never runs under it.
			'pe-10 text-sm text-text-default-base-primary outline-none select-none',
			'data-highlighted:bg-bg-default-base-primary-hover',
			'data-disabled:cursor-default data-disabled:text-text-default-base-tertiary'
		],
		trailing: 'ms-3 shrink-0 text-xs text-text-default-base-tertiary',
		indicator: [
			'pointer-events-none absolute end-2 flex size-5 items-center justify-center',
			'text-icon-default-base-secondary group-data-disabled/item:text-text-default-base-tertiary'
		],
		groupLabel: 'mx-1 px-3 py-1 text-xs text-text-default-base-tertiary',
		separator: 'my-2 h-px bg-border-default-base-primary'
	},
	variants: {
		// With text at the end, the check follows it in the row instead of sitting over the padding.
		trailing: {
			true: { item: 'pe-2', indicator: 'static ms-2 shrink-0' }
		},
		position: {
			// Below the trigger, as wide as it, capped to six rows or the room left.
			popper: {
				content:
					'w-(--radix-select-trigger-width) max-h-[min(18rem,var(--radix-select-content-available-height))]'
			},
			// Over the trigger with the picked option on top of it; Radix sizes and places it.
			'item-aligned': { content: 'max-h-72' }
		}
	}
});

const slots = selectRecipe();

export type SelectRootProps = ComponentPropsWithRef<typeof SelectPrimitive.Root>;

/**
 * Root of a select: a button that opens a list of options and shows the one
 * picked. Use it for a pick from a short, known list, where typing would add
 * nothing. For a long list or one the user searches, use
 * [Combobox](?path=/docs/components-combobox--docs); for a handful of options
 * that should all stay visible, use
 * [RadioGroup](?path=/docs/components-radiogroup--docs).
 *
 * The trigger shows the picked option's label. Values are strings, and `''`
 * means nothing picked, so the placeholder shows. With `name`, the form submits
 * `name=value`, `required` blocks the submission until something is picked,
 * and a native form reset puts the select back on its `defaultValue`.
 *
 * Inside a `Field.Root`, `disabled` and `required` default to the field's, and
 * the trigger takes its label, description and error. Every Radix root prop is
 * accepted and forwarded — `value`, `defaultValue`, `onValueChange`, `open` and
 * so on.
 *
 * With react-hook-form, wire it through `Controller` and render the form with
 * `noValidate`, as `Form.Root` does: a required select also sets the native
 * `required`, and the browser would otherwise block the submit before the
 * form library validates.
 *
 * @summary Root of a single-select dropdown picking from a short list
 * @see {@link https://www.radix-ui.com/primitives/docs/components/select|Radix UI Select}
 *
 * @example
 * <Select.Root defaultValue="monthly" name="plan">
 *   <Select.Trigger placeholder="Select a plan" />
 *   <Select.Content>
 *     <Select.Item value="monthly">Monthly</Select.Item>
 *     <Select.Item value="yearly">Yearly</Select.Item>
 *   </Select.Content>
 * </Select.Root>
 */
export const Root = ({ disabled, required, ...props }: SelectRootProps) => {
	const field = useFieldContext();

	return (
		<SelectPrimitive.Root
			{...props}
			disabled={disabled ?? field?.disabled}
			required={required ?? field?.required}
		/>
	);
};
Root.displayName = 'Select.Root';

export type SelectTriggerProps = Omit<
	ComponentPropsWithRef<typeof SelectPrimitive.Trigger>,
	'children'
> & {
	/** Control height, matching `Input`. Defaults to `'md'`. */
	size?: InputSize;
	/** Text shown while nothing is picked. */
	placeholder?: ReactNode;
	/** Renders the picked value. Defaults to the picked option's label. */
	children?: ReactNode;
};

/**
 * The closed field: a button drawn as an `Input`, showing the picked option
 * (or `placeholder`) and a chevron. Click, Enter, Space or the arrow keys
 * open the list. While the list is open the focus is on the options, and the
 * field keeps its focus ring.
 *
 * Inside a `Field.Root` it takes the field's `id`, description and `invalid`,
 * so the `Field.Label` names it, and its own props win. Outside one, give it an
 * `aria-label` or point a `Label` at its `id`. Its `ref` reaches the button, so
 * a form library can focus the field on a failed submit.
 *
 * @summary Button drawn as an input, showing the picked option and a chevron
 * @dataAttribute {string} data-slot - Always set to "select-trigger"
 * @dataAttribute {string} data-state - "open" while the list is open, "closed" otherwise
 * @dataAttribute {string} data-placeholder - Present while nothing is picked
 */
export const Trigger = ({
	size = 'md',
	placeholder,
	children,
	className,
	...props
}: SelectTriggerProps) => {
	const field = useFieldContext();

	return (
		<SelectPrimitive.Trigger
			id={field?.controlId}
			aria-describedby={field?.describedBy}
			aria-invalid={field?.invalid || undefined}
			{...props}
			data-slot="select-trigger"
			data-size={size}
			className={cn(inputRecipe({ size }), 'group/select-trigger', slots.trigger(), className)}>
			{/* Radix drops a `className` on `Value`, so the wrapper carries the truncation. */}
			<span data-slot="select-value" className={slots.value()}>
				<SelectPrimitive.Value placeholder={placeholder}>{children}</SelectPrimitive.Value>
			</span>
			<SelectPrimitive.Icon data-slot="select-icon" className={slots.icon()}>
				<IconKeyboardArrowDown className="size-5" />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	);
};
Trigger.displayName = 'Select.Trigger';

export type SelectContentProps = ComponentPropsWithRef<typeof SelectPrimitive.Content>;

/**
 * The floating list. By default (`position="popper"`) it opens below the
 * trigger, matches its width and caps its height to six rows or the room
 * available, so a long list scrolls, with arrows at the ends while there is
 * more to see. `position="item-aligned"` opens it over the trigger instead,
 * with the picked option on top of it.
 *
 * It renders on Radix's layer stack, so inside a `Modal` or a `Popover` the
 * focus stays on the list and Escape closes the list first.
 *
 * Inside a `Field.Root` the list is named after the `Field.Label`; otherwise it
 * is named "Options". Pass `aria-label` or `aria-labelledby` to name it.
 *
 * @summary Floating surface holding the options
 * @dataAttribute {string} data-slot - Always set to "select-content"
 */
export const Content = ({
	position = 'popper',
	side = 'bottom',
	align = 'start',
	sideOffset = 8,
	collisionPadding = 8,
	className,
	children,
	...props
}: SelectContentProps) => {
	const field = useFieldContext();
	// Radix leaves the listbox unnamed.
	const name =
		props['aria-label'] || props['aria-labelledby']
			? {}
			: field
				? { 'aria-labelledby': field.labelId }
				: { 'aria-label': 'Options' };

	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				{...name}
				{...props}
				position={position}
				side={side}
				align={align}
				sideOffset={sideOffset}
				collisionPadding={collisionPadding}
				data-slot="select-content"
				className={cn(slots.content({ position }), className)}>
				<SelectPrimitive.ScrollUpButton
					data-slot="select-scroll-up"
					className={slots.scrollButton()}>
					<IconKeyboardArrowDown className="size-4 rotate-180" />
				</SelectPrimitive.ScrollUpButton>
				<SelectPrimitive.Viewport data-slot="select-list" className={slots.viewport()}>
					{children}
				</SelectPrimitive.Viewport>
				<SelectPrimitive.ScrollDownButton
					data-slot="select-scroll-down"
					className={slots.scrollButton()}>
					<IconKeyboardArrowDown className="size-4" />
				</SelectPrimitive.ScrollDownButton>
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
};
Content.displayName = 'Select.Content';

export type SelectItemProps = ComponentPropsWithRef<typeof SelectPrimitive.Item> & {
	/** Short text at the end of the row, such as a code or a count. It does not show in the trigger. */
	trailing?: ReactNode;
};

/**
 * One option. `value` is what the select stores and submits; the children are
 * the label shown in the row and in the trigger. The picked row carries a
 * check at its end. A `disabled` row is greyed out and cannot be picked.
 *
 * @summary Option row inside the list
 * @dataAttribute {string} data-slot - Always set to "select-item"
 * @dataAttribute {string} data-state - "checked" on the picked row
 * @dataAttribute {string} data-highlighted - Present on the row under the pointer or the keyboard
 */
export const Item = ({ trailing, className, children, ...props }: SelectItemProps) => {
	const styles = selectRecipe({ trailing: trailing !== undefined });

	return (
		<SelectPrimitive.Item
			{...props}
			data-slot="select-item"
			className={cn(styles.item(), className)}>
			{/* Radix drops a `className` on `ItemText` too. */}
			<span className="min-w-0 flex-1 truncate">
				<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
			</span>
			{trailing !== undefined && (
				<span data-slot="select-item-trailing" className={slots.trailing()}>
					{trailing}
				</span>
			)}
			{/* Always takes its room, so a column of trailing text lines up. */}
			<span className={styles.indicator()}>
				<SelectPrimitive.ItemIndicator data-slot="select-item-indicator" className="flex">
					<IconCheck className="size-5" />
				</SelectPrimitive.ItemIndicator>
			</span>
		</SelectPrimitive.Item>
	);
};
Item.displayName = 'Select.Item';

export type SelectGroupProps = ComponentPropsWithRef<typeof SelectPrimitive.Group>;

/**
 * A section of options. Give it a `GroupLabel` as heading, and put a
 * `Separator` between sections. A single section can carry a heading too.
 *
 * @summary Section of options under a heading
 * @dataAttribute {string} data-slot - Always set to "select-group"
 */
export const Group = (props: SelectGroupProps) => (
	<SelectPrimitive.Group {...props} data-slot="select-group" />
);
Group.displayName = 'Select.Group';

export type SelectGroupLabelProps = ComponentPropsWithRef<typeof SelectPrimitive.Label>;

/**
 * Heading of a `Group`. It names the group and cannot be picked.
 *
 * @summary Heading of a section of options
 * @dataAttribute {string} data-slot - Always set to "select-group-label"
 */
export const GroupLabel = ({ className, ...props }: SelectGroupLabelProps) => (
	<SelectPrimitive.Label
		{...props}
		data-slot="select-group-label"
		className={cn(slots.groupLabel(), className)}
	/>
);
GroupLabel.displayName = 'Select.GroupLabel';

export type SelectSeparatorProps = ComponentPropsWithRef<typeof SelectPrimitive.Separator>;

/**
 * Line between two `Group`s.
 *
 * @summary Divider between sections of options
 * @dataAttribute {string} data-slot - Always set to "select-separator"
 */
export const Separator = ({ className, ...props }: SelectSeparatorProps) => (
	<SelectPrimitive.Separator
		{...props}
		data-slot="select-separator"
		className={cn(slots.separator(), className)}
	/>
);
Separator.displayName = 'Select.Separator';
