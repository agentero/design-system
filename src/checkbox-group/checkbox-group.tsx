'use client';

import { ComponentPropsWithRef, createContext, ReactNode, use, useId, useState } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { Checkbox } from '../checkbox';
import { useFieldContext } from '../field';

/**
 * Style recipe for CheckboxGroup. Slots: `root` (the group), `item` (one row),
 * `control` (the 24px slot its checkbox is centred in), `label` (its text).
 * The `orientation` variant stacks the items or lays them in a row.
 */
export const checkboxGroupRecipe = tv({
	slots: {
		root: 'flex',
		item: 'group/checkbox-group-item flex items-start gap-3',
		control: 'flex size-6 shrink-0 items-center justify-center',
		// At least one slot tall and centred in it, so a one-line label sits level with
		// the box; a wrapping label grows downwards from the box's line.
		label: [
			'flex min-h-6 cursor-pointer items-center text-sm text-text-input-normal select-none',
			'group-data-disabled/checkbox-group-item:cursor-not-allowed group-data-disabled/checkbox-group-item:opacity-50'
		]
	},
	variants: {
		orientation: {
			vertical: { root: 'flex-col gap-2' },
			horizontal: { root: 'flex-row flex-wrap gap-x-6 gap-y-2' }
		}
	},
	defaultVariants: {
		orientation: 'vertical'
	}
});

export type CheckboxGroupVariants = VariantProps<typeof checkboxGroupRecipe>;

type CheckboxGroupContextValue = {
	value: string[];
	toggle: (itemValue: string, checked: boolean) => void;
	name?: string;
	disabled?: boolean;
	invalid?: ComponentPropsWithRef<'button'>['aria-invalid'];
};

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

export type CheckboxGroupRootProps = Omit<
	ComponentPropsWithRef<'div'>,
	'defaultValue' | 'onChange'
> & {
	/** Controlled list of checked item values. */
	value?: string[];
	/** Initial list of checked item values for an uncontrolled group. */
	defaultValue?: string[];
	/** Fires with the next list of checked values, in the order the items were checked. */
	onValueChange?: (value: string[]) => void;
	/** Disables every item in the group. */
	disabled?: boolean;
	/** `vertical` (default) stacks the items; `horizontal` lays them in a row that wraps. */
	orientation?: CheckboxGroupVariants['orientation'];
	/** Form field name shared by every item; each checked item submits `name=value`. */
	name?: string;
};

/**
 * Container for a multi-select list of checkboxes. Owns the selected values
 * as a `string[]` and renders `role="group"`: name it with `aria-labelledby`
 * pointing at a visible heading, or with `aria-label`.
 *
 * Headless like [Checkbox](?path=/docs/components-checkbox--docs): no group
 * label, description, error or scroll container of its own. Put it inside a
 * `Field.Root` for those: the group is then named by the field's label
 * (`aria-labelledby`), described by its description and error, and takes
 * `invalid` and `disabled`, all as defaults its own props override. The
 * label's `for` reaches nothing, since a group is not a labelable element, so
 * clicking the caption toggles no item. The field's `readOnly` is not read:
 * checkboxes have no read-only state.
 *
 * Not for options inside a listbox such as a `Command` or `Combobox` list:
 * each item is a focusable control, which nests inside the option. Use the
 * Combobox's multiple selection there.
 *
 * There is no `required`: "at least one" is a rule for the form layer, and
 * `required` on each checkbox would demand all of them.
 *
 * Every native `<div>` attribute is accepted and forwarded to the group
 * (`className`, `aria-label`, `data-*`), except `aria-invalid`: it paints every
 * item with the destructive treatment and is forwarded to the checkboxes
 * instead, since `role="group"` does not support it. Point `aria-describedby`
 * at the error message.
 *
 * @summary Multi-select checkbox list holding its checked values as a string array
 *
 * @example
 * <span id="lobs">Lines of business</span>
 * <CheckboxGroup.Root aria-labelledby="lobs" defaultValue={['home']} onValueChange={setLobs}>
 *   <CheckboxGroup.Item value="home">Home</CheckboxGroup.Item>
 *   <CheckboxGroup.Item value="auto">Auto</CheckboxGroup.Item>
 * </CheckboxGroup.Root>
 *
 * @dataAttribute {string} data-orientation - "vertical" | "horizontal"
 * @dataAttribute {string} data-disabled - Present when the whole group is disabled
 */
export const Root = ({
	value: valueProp,
	defaultValue = [],
	onValueChange,
	disabled: disabledProp,
	orientation = 'vertical',
	name,
	'aria-invalid': invalidProp,
	'aria-labelledby': labelledByProp,
	'aria-describedby': describedByProp,
	className,
	children,
	...props
}: CheckboxGroupRootProps) => {
	const field = useFieldContext();
	const styles = checkboxGroupRecipe({ orientation });
	// A name the consumer gave, either way, wins over the field's label.
	const labelledBy = labelledByProp ?? (props['aria-label'] ? undefined : field?.labelId);
	const disabled = disabledProp ?? (field?.disabled || undefined);
	const invalid = invalidProp ?? (field?.invalid || undefined);
	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
	const value = valueProp ?? uncontrolledValue;

	const toggle = (itemValue: string, checked: boolean) => {
		const next = checked
			? [...value.filter(v => v !== itemValue), itemValue]
			: value.filter(v => v !== itemValue);

		if (valueProp === undefined) setUncontrolledValue(next);
		onValueChange?.(next);
	};

	return (
		<CheckboxGroupContext value={{ value, toggle, name, disabled, invalid }}>
			<div
				role="group"
				data-slot="checkbox-group"
				data-orientation={orientation}
				data-disabled={disabled || undefined}
				aria-labelledby={labelledBy}
				aria-describedby={describedByProp ?? field?.describedBy}
				className={cn(styles.root(), className)}
				{...props}>
				{children}
			</div>
		</CheckboxGroupContext>
	);
};

export type CheckboxGroupItemProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
	/** Value added to the group's list when this item is checked. */
	value: string;
	/** Disables this item only. The group's `disabled` wins over `false`. */
	disabled?: boolean;
	/** The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`. */
	children: ReactNode;
};

/**
 * One option of a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs):
 * a `Checkbox` and its `<label>`. Must render inside `CheckboxGroup.Root`.
 *
 * Every native `<div>` attribute is accepted and forwarded to the row
 * (`className`, `title`, `data-*`), except `id`: it goes to the checkbox, which
 * the label points at, and is generated when omitted.
 *
 * @summary Checkbox and label for one value of the group
 *
 * @dataAttribute {string} data-state - "checked" | "unchecked"
 * @dataAttribute {string} data-disabled - Present when the item or its group is disabled
 */
export const Item = ({
	id: idProp,
	value,
	disabled,
	className,
	children,
	...props
}: CheckboxGroupItemProps) => {
	const context = use(CheckboxGroupContext);
	const generatedId = useId();

	if (!context) throw new Error('CheckboxGroup.Item must be rendered inside CheckboxGroup.Root.');

	const styles = checkboxGroupRecipe();
	const id = idProp ?? generatedId;
	const checked = context.value.includes(value);
	const isDisabled = context.disabled || disabled;

	return (
		<div
			data-slot="checkbox-group-item"
			data-state={checked ? 'checked' : 'unchecked'}
			data-disabled={isDisabled || undefined}
			className={cn(styles.item(), className)}
			{...props}>
			<span data-slot="checkbox-group-item-control" className={styles.control()}>
				<Checkbox
					id={id}
					name={context.name}
					value={value}
					checked={checked}
					onCheckedChange={checked => context.toggle(value, checked === true)}
					disabled={isDisabled}
					aria-invalid={context.invalid}
				/>
			</span>
			<label htmlFor={id} data-slot="checkbox-group-item-label" className={styles.label()}>
				{children}
			</label>
		</div>
	);
};
