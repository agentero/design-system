'use client';

import { ComponentPropsWithRef, createContext, ReactNode, use, useId, useState } from 'react';

import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { Checkbox } from '../checkbox';

/** Style recipe for CheckboxGroup. Slots: `root` (the group), `item` (one row), `control` (its checkbox), `label` (its text). */
export const checkboxGroupRecipe = tv({
	slots: {
		root: 'flex flex-col gap-1',
		item: 'flex items-start gap-2',
		// Top-aligned row, so the box stays on the first line of a wrapping
		// label: `mt-0.5` centres its 16px on the label's 20px line.
		control: 'peer mt-0.5',
		label: [
			'cursor-pointer text-sm text-text-default-base-primary select-none',
			'peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
		]
	}
});

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
	/** Form field name shared by every item; each checked item submits `name=value`. */
	name?: string;
	/**
	 * Paints every item with the destructive treatment. It is forwarded to the
	 * checkboxes, not set on the group: `role="group"` does not support it.
	 * Point `aria-describedby` at the error message.
	 */
	'aria-invalid'?: ComponentPropsWithRef<'button'>['aria-invalid'];
};

/**
 * Container for a multi-select list of checkboxes. Owns the selected values
 * as a `string[]` and renders `role="group"`: name it with `aria-labelledby`
 * pointing at a visible heading, or with `aria-label`.
 *
 * Headless like [Checkbox](?path=/docs/components-checkbox--docs): no group
 * label, description, error or scroll container. Those belong to the field
 * layer or to the consumer.
 *
 * Not for options inside a listbox such as a `Command` or `Combobox` list:
 * each item is a focusable control, which nests inside the option. Use the
 * Combobox's multiple selection there.
 *
 * There is no `required`: "at least one" is a rule for the form layer, and
 * `required` on each checkbox would demand all of them.
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
 * @dataAttribute {string} data-disabled - Present when the whole group is disabled
 */
export const Root = ({
	value: valueProp,
	defaultValue = [],
	onValueChange,
	disabled,
	name,
	'aria-invalid': invalid,
	className,
	children,
	...props
}: CheckboxGroupRootProps) => {
	const styles = checkboxGroupRecipe();
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
				data-disabled={disabled || undefined}
				className={cn(styles.root(), className)}
				{...props}>
				{children}
			</div>
		</CheckboxGroupContext>
	);
};

export type CheckboxGroupItemProps = Omit<ComponentPropsWithRef<'div'>, 'children' | 'id'> & {
	/** Id of the checkbox, which the label points at. Generated when omitted. */
	id?: string;
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
			<Checkbox
				id={id}
				className={styles.control()}
				name={context.name}
				value={value}
				checked={checked}
				onCheckedChange={checked => context.toggle(value, checked === true)}
				disabled={isDisabled}
				aria-invalid={context.invalid}
			/>
			<label htmlFor={id} data-slot="checkbox-group-item-label" className={styles.label()}>
				{children}
			</label>
		</div>
	);
};
