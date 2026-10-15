'use client';

import { ComponentPropsWithRef, createContext, ReactNode, use, useId, useState } from 'react';

import { tv, VariantProps } from 'tailwind-variants';

import { cn, mergeProps } from '../../lib';
import { Checkbox } from '../checkbox';
import { useFieldContext } from '../field';

/** Style recipe for CheckboxGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px slot for the box), `text`. */
export const checkboxGroupRecipe = tv({
	slots: {
		// Figma leaves 16px between the label block and the options, where the field's gap is 8;
		// an error below gets the same 16px.
		root: [
			'flex [:is([data-slot=field-content],[data-slot=field-description])+&]:mt-2',
			'[&:has(+[data-slot=field-error])]:mb-2'
		],
		item: 'group/checkbox-group-item flex',
		label: [
			'flex cursor-pointer items-start gap-3 text-sm text-text-input-normal select-none',
			'group-data-disabled/checkbox-group-item:cursor-not-allowed',
			'in-data-readonly:cursor-default'
		],
		control: 'flex size-6 shrink-0 items-center justify-center',
		// The checkbox dims itself when disabled; only the text needs it here.
		text: 'flex min-h-6 items-center group-data-disabled/checkbox-group-item:opacity-50'
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
	styles: ReturnType<typeof checkboxGroupRecipe>;
	name?: string;
	disabled?: boolean;
	readOnly?: boolean;
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
	/** Keeps every item focusable but stops it from toggling; each checkbox gets `aria-readonly`. */
	readOnly?: boolean;
	/** `vertical` (default) stacks the items; `horizontal` lays them in a row that wraps. */
	orientation?: CheckboxGroupVariants['orientation'];
	/** Form field name shared by every item; each checked item submits `name=value`. */
	name?: string;
};

/**
 * Multi-select list of checkboxes that holds its checked values as a
 * `string[]`. Renders `role="group"`: name it with `aria-labelledby` or
 * `aria-label`, or put it inside a `Field.Root`, which names, describes,
 * invalidates, disables and makes it read-only (the group's own props win).
 *
 * Not for options inside a `Command` or `Combobox` list, where a focusable
 * checkbox would nest inside the option: use the Combobox's multiple
 * selection. There is no `required`: "at least one" belongs to the form layer.
 *
 * Every native `<div>` attribute is forwarded to the group except
 * `aria-invalid`, which goes to the checkboxes (`role="group"` does not
 * support it).
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
 * @dataAttribute {string} data-readonly - Present when the group is read-only
 */
export const Root = ({
	value: valueProp,
	defaultValue = [],
	onValueChange,
	disabled: disabledProp,
	readOnly: readOnlyProp,
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
	const labelledBy =
		labelledByProp ?? (props['aria-label'] !== undefined ? undefined : field?.labelId);
	const disabled = disabledProp ?? (field?.disabled || undefined);
	const readOnly = readOnlyProp ?? (field?.readOnly || undefined);
	const invalid = invalidProp ?? (field?.invalid || undefined);
	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
	const value = valueProp ?? uncontrolledValue;
	// Own ids join the field's error and description instead of replacing them.
	const describedBy = mergeProps(
		{ 'aria-describedby': field?.describedBy },
		{ 'aria-describedby': describedByProp }
	)['aria-describedby'];

	const toggle = (itemValue: string, checked: boolean) => {
		if (readOnly) return;

		const next = checked
			? [...value.filter(v => v !== itemValue), itemValue]
			: value.filter(v => v !== itemValue);

		if (valueProp === undefined) setUncontrolledValue(next);
		onValueChange?.(next);
	};

	return (
		<CheckboxGroupContext value={{ value, toggle, styles, name, disabled, readOnly, invalid }}>
			<div
				{...props}
				role="group"
				data-slot="checkbox-group"
				data-orientation={orientation}
				data-disabled={disabled || undefined}
				data-readonly={readOnly || undefined}
				aria-labelledby={labelledBy}
				aria-describedby={describedBy}
				className={cn(styles.root(), className)}>
				{children}
			</div>
		</CheckboxGroupContext>
	);
};
Root.displayName = 'CheckboxGroup.Root';

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
 * a `Checkbox` and its `<label>`, inside `CheckboxGroup.Root`. Native `<div>`
 * attributes go to the row, except `id`, which goes to the checkbox.
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

	const { styles } = context;
	const id = idProp ?? generatedId;
	const checked = context.value.includes(value);
	const isDisabled = context.disabled || disabled;

	return (
		<div
			{...props}
			data-slot="checkbox-group-item"
			data-state={checked ? 'checked' : 'unchecked'}
			data-disabled={isDisabled || undefined}
			className={cn(styles.item(), className)}>
			{/* The label wraps the box's slot and the gap too, so the whole row toggles. */}
			<label htmlFor={id} data-slot="checkbox-group-item-label" className={styles.label()}>
				<span data-slot="checkbox-group-item-control" className={styles.control()}>
					<Checkbox
						id={id}
						name={context.name}
						value={value}
						checked={checked}
						onCheckedChange={checked => context.toggle(value, checked === true)}
						disabled={isDisabled}
						aria-readonly={context.readOnly}
						aria-invalid={context.invalid}
					/>
				</span>
				<span data-slot="checkbox-group-item-text" className={styles.text()}>
					{children}
				</span>
			</label>
		</div>
	);
};
Item.displayName = 'CheckboxGroup.Item';
