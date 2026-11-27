'use client';

import { type FieldPathByValue, type FieldValues } from 'react-hook-form';

import { mergeProps } from '../../lib';
import { Field } from '../field';
import { FieldSwitch, type FieldSwitchProps } from '../field-switch';
import { type FormFieldProps, useFormField } from '../form/form-field';
import { Switch, type SwitchProps } from '../switch';

/** Props `FormSwitch` forwards to its `Switch`: see `switchProps`. */
export type FormSwitchSwitchProps = Omit<
	SwitchProps,
	| 'id'
	| 'name'
	| 'checked'
	| 'defaultChecked'
	| 'value'
	| 'ref'
	| 'label'
	| 'reverse'
	| 'disabled'
	| 'required'
	| 'readOnly'
	| 'aria-invalid'
>;

/**
 * The paths of a form's values a `FormSwitch` can bind to: those holding a
 * boolean, `null` and `undefined` included, since an empty form often starts
 * from either and both read as off. A path to a string, a number or an object
 * is rejected at compile time. Untyped forms (`FieldValues`) accept any path.
 */
export type FormSwitchPath<TFieldValues extends FieldValues> = FieldPathByValue<
	TFieldValues,
	boolean | null | undefined
>;

export type FormSwitchProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormSwitchPath<TFieldValues> = FormSwitchPath<TFieldValues>,
	TTransformedValues = TFieldValues
> = Omit<FieldSwitchProps, 'invalid' | 'children'> &
	FormFieldProps<TFieldValues, TName, TTransformedValues> & {
		/**
		 * Everything else the `Switch` should receive: `size`, `className`,
		 * `aria-*`… Handlers such as `onCheckedChange` and `onBlur` run after
		 * react-hook-form's, which are already wired, and `aria-describedby` ids
		 * join the ones the field wires. The rest is owned elsewhere, so it is
		 * left out: the field sets `id` (choose it with `controlId`) and names
		 * the toggle with its `label`; react-hook-form sets `name` and `checked`
		 * (start it in `useForm`'s `defaultValues`); `disabled`, `required` and
		 * `readOnly` are props of `FormSwitch`, so the label and the root follow
		 * them too.
		 */
		switchProps?: FormSwitchSwitchProps;
		/**
		 * Side of the toggle in a `horizontal` field: `end` (default) puts it
		 * after the label and its description, `start` before them. A `vertical`
		 * field always puts it under them.
		 */
		switchPosition?: 'start' | 'end';
	};

/**
 * A complete on/off field bound to one boolean react-hook-form value: label,
 * `Switch`, helper text and validation error, wired through `useController`.
 * It renders inside a `Form.Root`, which provides the form, and needs only a
 * `name`, which on a typed form must point at a boolean (`FormSwitchPath`).
 * The `required`, `invalid` and error states reach the label, the toggle's
 * `aria-*` attributes and the message with no ids written by hand.
 *
 * The layout is [FieldSwitch](?path=/docs/components-fieldswitch--docs)'s:
 * the label, its description and its error stack together in a
 * `Field.Content`, with the toggle beside them (`horizontal`, the default) or
 * under them (`vertical`); `switchPosition="start"` moves it before the text
 * in a row. An empty value (`undefined`, `null`) reads as off,
 * and flipping the toggle stores `true` or `false`. `rules.required` fails on
 * `false`, so it is how a toggle the user must turn on is validated.
 *
 * Use it for the common case: a labelled toggle in a form. For another
 * layout, compose the primitives yourself: `useController` with
 * `FieldSwitch`, `Field.Content`, `Label`, `Switch`, `Field.Description` and
 * `Field.Error`. Over that composition `FormSwitch` adds one thing: it reads
 * an empty value as off (`checked={field.value === true}`), where a `Switch`
 * given the form's `undefined` starts uncontrolled.
 *
 * Errors come from `useController`'s per-field state, never from
 * `formState.errors`, so the message stays fresh under the React Compiler.
 *
 * @summary Label, Switch, description and error bound to one boolean react-hook-form field
 *
 * @example
 * <FormSwitch
 *   name="emailNotifications"
 *   label="Email notifications"
 *   description="Get an email when a carrier returns a quote."
 * />
 */
export const FormSwitch = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormSwitchPath<TFieldValues> = FormSwitchPath<TFieldValues>,
	TTransformedValues = TFieldValues
>({
	switchProps,
	switchPosition = 'end',
	...props
}: FormSwitchProps<TFieldValues, TName, TTransformedValues>) => {
	const { field, rootProps, shellProps } = useFormField(props);
	const { label, description, tooltip, tooltipSide, optional, error } = shellProps;

	// Only `true` turns the toggle on: an empty value reads as off, and `checked`
	// stays a boolean so the toggle is controlled from the first render.
	const controlProps: Partial<SwitchProps> = {
		name: field.name,
		checked: field.value === true,
		onCheckedChange: field.onChange,
		onBlur: field.onBlur,
		ref: field.ref
	};

	const toggle = <Switch {...mergeProps(controlProps, switchProps ?? {})} />;
	const toggleFirst = switchPosition === 'start' && rootProps.orientation !== 'vertical';

	return (
		<FieldSwitch {...rootProps}>
			{toggleFirst && toggle}
			<Field.Content>
				<Field.Label tooltip={tooltip} tooltipSide={tooltipSide} optional={optional}>
					{label}
				</Field.Label>
				{description && <Field.Description>{description}</Field.Description>}
				<Field.Error errors={error ? [error] : undefined} />
			</Field.Content>
			{!toggleFirst && toggle}
		</FieldSwitch>
	);
};

FormSwitch.displayName = 'FormSwitch';
