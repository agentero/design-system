'use client';

import {
	ComponentPropsWithRef,
	createContext,
	ReactNode,
	use,
	useEffect,
	useId,
	useLayoutEffect,
	useMemo,
	useRef,
	useState
} from 'react';

import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';
import { tv, VariantProps } from 'tailwind-variants';

import { cn, mergeProps, mergeRefs } from '../../lib';
import { useFieldContext } from '../field';

/**
 * Style recipe for RadioGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px
 * slot for the radio), `radio` (the 16px circle), `indicator` (the dot), `text`.
 */
export const radioGroupRecipe = tv({
	slots: {
		// Figma leaves 16px between the options and the field's label block or error; the field's
		// gap is 8.
		root: [
			'flex [:is([data-slot=field-content],[data-slot=field-description])+&]:mt-2',
			'[&:has(+[data-slot=field-error])]:mb-2'
		],
		item: 'group/radio-group-item flex',
		label: [
			'flex cursor-pointer items-start gap-3 text-sm text-text-default-base-primary select-none',
			'group-data-disabled/radio-group-item:cursor-not-allowed',
			'in-data-readonly:cursor-default'
		],
		control: 'flex size-6 shrink-0 items-center justify-center',
		radio: [
			'relative box-border inline-flex size-4 shrink-0 items-center justify-center rounded-full',
			'border-[1.5px] border-solid border-border-checkbox-default bg-bg-input-normal',
			'cursor-pointer transition-colors duration-150',
			// Hover reads from the whole row, which selects as a whole.
			'not-data-disabled:data-unchecked:shadow-xs',
			'not-data-disabled:not-data-readonly:not-in-aria-invalid:data-unchecked:group-hover/radio-group-item:border-border-input-hover',
			'data-checked:border-bg-checkbox-selected',
			'outline-solid outline-2 outline-offset-2 outline-transparent',
			'focus-visible:outline-focus-ring-button-primary',
			// `aria-invalid` sits on the group, so each radio reads it from there.
			'in-aria-invalid:border-border-input-destructive',
			'in-aria-invalid:focus-visible:outline-focus-ring-button-destructive',
			'in-aria-invalid:data-checked:border-bg-default-danger-primary',
			'data-disabled:cursor-not-allowed data-disabled:border-border-checkbox-disabled data-disabled:bg-bg-input-disable',
			'in-aria-invalid:data-disabled:border-bg-checkbox-invalid-disabled',
			'in-data-readonly:cursor-default'
		],
		indicator: [
			'size-2 rounded-full bg-bg-checkbox-selected',
			'in-aria-invalid:bg-bg-default-danger-primary',
			'data-disabled:bg-bg-checkbox-disabled',
			'in-aria-invalid:data-disabled:bg-bg-checkbox-invalid-disabled'
		],
		text: 'flex min-h-6 items-center group-data-disabled/radio-group-item:text-text-default-disable-primary'
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

export type RadioGroupVariants = VariantProps<typeof radioGroupRecipe>;

type RadioGroupContextValue = {
	styles: ReturnType<typeof radioGroupRecipe>;
	disabled?: boolean;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

const getRadios = (root: HTMLElement | null) =>
	Array.from(root?.querySelectorAll<HTMLButtonElement>('[data-slot=radio-group-radio]') ?? []);

const getInputs = (root: HTMLElement | null) =>
	Array.from(root?.querySelectorAll<HTMLInputElement>('input[type=radio]') ?? []);

const getTabStop = (root: HTMLElement | null) =>
	getRadios(root).find(radio => radio.tabIndex === 0);

export type RadioGroupRootProps = Omit<
	ComponentPropsWithRef<'div'>,
	'defaultValue' | 'onChange'
> & {
	/** Controlled value of the selected item. `''` leaves every item unselected. */
	value?: string;
	/** Initial value for an uncontrolled group. Leave it out to start with nothing selected. */
	defaultValue?: string;
	/** Fires with the value of the item the user selects. */
	onValueChange?: (value: string) => void;
	/** Disables every item in the group. */
	disabled?: boolean;
	/** Keeps the items focusable but stops the selection from changing. */
	readOnly?: boolean;
	/**
	 * Marks the group required (`aria-required`). With `name`, the browser also
	 * blocks a form submission until an item is selected; without it the radios
	 * are not one native group, so validation is left to the form.
	 */
	required?: boolean;
	/** `vertical` (default) stacks the items; `horizontal` lays them in a row that wraps. */
	orientation?: RadioGroupVariants['orientation'];
	/** Form field name; the form submits `name=value` for the selected item. */
	name?: string;
};

/**
 * Single-select list of radios that holds the selected value as a `string`.
 * Renders `role="radiogroup"`: name it with `aria-labelledby` or
 * `aria-label`, or put it inside a `Field.Root`, which names, describes,
 * invalidates, disables, requires and makes it read-only (the group's own
 * props win). Tab enters the group on the selected item, and the arrow keys
 * move the selection.
 *
 * Use it when the options are few and should all stay visible. For a long
 * list use [Combobox](?path=/docs/components-combobox--docs), for several
 * values use [CheckboxGroup](?path=/docs/components-checkboxgroup--docs), and
 * for an on/off setting use [Switch](?path=/docs/components-switch--docs).
 *
 * Every native `<div>` attribute is forwarded to the group, `aria-invalid`
 * included: `role="radiogroup"` supports it, and each radio paints the
 * destructive state from it. The `ref` reaches the group element, and calling
 * `focus()` on it moves focus to the radio Tab would land on, so a form
 * library can focus the field on a failed submit. With react-hook-form, wire
 * it through `Controller` (`value`, `onValueChange`, `ref`), not `register`:
 * the radios' inputs belong to the group, not to the form library.
 *
 * A native form reset puts an uncontrolled group back on `defaultValue` and a
 * controlled one on its `value`.
 *
 * @summary Single-select radio list holding its selected value as a string
 *
 * @example
 * <span id="payment">Payment plan</span>
 * <RadioGroup.Root aria-labelledby="payment" defaultValue="monthly" onValueChange={setPlan}>
 *   <RadioGroup.Item value="monthly">Monthly</RadioGroup.Item>
 *   <RadioGroup.Item value="annual">Annual</RadioGroup.Item>
 * </RadioGroup.Root>
 *
 * @dataAttribute {string} data-orientation - "vertical" | "horizontal"
 * @dataAttribute {string} data-disabled - Present when the whole group is disabled
 * @dataAttribute {string} data-readonly - Present when the group is read-only
 */
export const Root = ({
	value,
	defaultValue,
	onValueChange,
	disabled: disabledProp,
	readOnly: readOnlyProp,
	required: requiredProp,
	orientation = 'vertical',
	name,
	'aria-invalid': invalidProp,
	'aria-labelledby': labelledByProp,
	'aria-describedby': describedByProp,
	ref,
	onFocus,
	className,
	children,
	...props
}: RadioGroupRootProps) => {
	const field = useFieldContext();
	const styles = radioGroupRecipe({ orientation });
	const labelledBy =
		labelledByProp ?? (props['aria-label'] !== undefined ? undefined : field?.labelId);
	const disabled = disabledProp ?? (field?.disabled || undefined);
	const readOnly = readOnlyProp ?? (field?.readOnly || undefined);
	const required = requiredProp ?? (field?.required || undefined);
	const invalid = invalidProp ?? (field?.invalid || undefined);
	const describedBy = mergeProps(
		{ 'aria-describedby': field?.describedBy },
		{ 'aria-describedby': describedByProp }
	)['aria-describedby'];

	// Base UI always runs controlled, so the tab stop and the form reset below know the selection.
	const [initialValue] = useState(defaultValue);
	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
	const isControlled = value !== undefined;
	const selected = isControlled ? value : uncontrolledValue;

	const rootRef = useRef<HTMLDivElement>(null);
	const mergedRef = useMemo(() => mergeRefs(rootRef, ref), [ref]);
	const resetTarget = useRef({ isControlled, selected, initialValue });
	resetTarget.current = { isControlled, selected, initialValue };

	// Base UI leaves the tab stop on a disabled checked radio, and does not move it when the value
	// changes from outside. Put it on the checked radio if enabled, else on the first enabled one.
	useLayoutEffect(() => {
		const radios = getRadios(rootRef.current);
		const enabled = radios.filter(radio => !radio.disabled);
		const stop = enabled.find(radio => radio.getAttribute('aria-checked') === 'true') ?? enabled[0];

		if (!stop) return;
		for (const radio of radios) radio.tabIndex = radio === stop ? 0 : -1;
	});

	// A native reset rewrites the radio inputs behind Base UI's back. Once it is done, go back to the
	// starting (or controlled) value and make the inputs match what is shown.
	useEffect(() => {
		const form = rootRef.current?.closest('form');

		if (!form) return;

		const handleReset = () =>
			queueMicrotask(() => {
				const { isControlled, selected, initialValue } = resetTarget.current;
				const target = isControlled ? selected : initialValue;

				if (!isControlled) setUncontrolledValue(initialValue);
				for (const input of getInputs(rootRef.current)) input.checked = input.value === target;
			});

		form.addEventListener('reset', handleReset);
		return () => form.removeEventListener('reset', handleReset);
	}, []);

	return (
		<RadioGroupContext value={{ styles, disabled }}>
			<RadioGroupPrimitive<string | null>
				{...props}
				ref={mergedRef}
				// Focusable by script only, so `focus()` on the group can hand focus to a radio.
				tabIndex={-1}
				onFocus={event => {
					onFocus?.(event);
					if (event.target === event.currentTarget) getTabStop(rootRef.current)?.focus();
				}}
				value={selected ?? null}
				onValueChange={next => {
					if (next === null) return;
					if (!isControlled) setUncontrolledValue(next);
					onValueChange?.(next);
				}}
				disabled={disabled}
				readOnly={readOnly}
				// Unnamed radios are not one native group, so a native `required` cannot mean
				// "one of them".
				required={required && name !== undefined}
				aria-required={required || undefined}
				name={name}
				data-slot="radio-group"
				data-orientation={orientation}
				aria-orientation={orientation}
				aria-invalid={invalid}
				aria-labelledby={labelledBy}
				aria-describedby={describedBy}
				className={cn(styles.root(), className)}>
				{children}
			</RadioGroupPrimitive>
		</RadioGroupContext>
	);
};
Root.displayName = 'RadioGroup.Root';

export type RadioGroupItemProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
	/** Value the group takes when this item is selected. */
	value: string;
	/** Disables this item only. The group's `disabled` wins over `false`. */
	disabled?: boolean;
	/** The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`. */
	children: ReactNode;
};

/**
 * One option of a [RadioGroup](?path=/docs/components-radiogroup--docs): a
 * radio and its `<label>`, inside `RadioGroup.Root`. Native `<div>`
 * attributes go to the row, except `id`, which goes to the radio.
 *
 * @summary Radio and label for one value of the group
 *
 * @dataAttribute {string} data-disabled - Present when the item or its group is disabled
 */
export const Item = ({
	id: idProp,
	value,
	disabled,
	className,
	children,
	...props
}: RadioGroupItemProps) => {
	const context = use(RadioGroupContext);
	const generatedId = useId();

	if (!context) throw new Error('RadioGroup.Item must be rendered inside RadioGroup.Root.');

	const { styles } = context;
	const id = idProp ?? generatedId;
	const isDisabled = context.disabled || disabled;

	return (
		<div
			{...props}
			data-slot="radio-group-item"
			data-disabled={isDisabled || undefined}
			className={cn(styles.item(), className)}>
			<label htmlFor={id} data-slot="radio-group-item-label" className={styles.label()}>
				<span data-slot="radio-group-item-control" className={styles.control()}>
					{/* Base UI's default <span> passes `id` to its hidden input, so no <label> names it. */}
					<RadioPrimitive.Root
						nativeButton
						render={<button type="button" />}
						id={id}
						value={value}
						disabled={isDisabled}
						data-slot="radio-group-radio"
						className={styles.radio()}>
						<RadioPrimitive.Indicator
							data-slot="radio-group-indicator"
							className={styles.indicator()}
						/>
					</RadioPrimitive.Root>
				</span>
				<span data-slot="radio-group-item-text" className={styles.text()}>
					{children}
				</span>
			</label>
		</div>
	);
};
Item.displayName = 'RadioGroup.Item';
