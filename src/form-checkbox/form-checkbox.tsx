'use client';

import { type FieldPathByValue, type FieldValues } from 'react-hook-form';

import { mergeProps } from '../../lib';
import { Checkbox, type CheckboxProps } from '../checkbox';
import { FieldCheckbox, type FieldCheckboxProps } from '../field-checkbox';
import { FormFieldContent, type FormFieldProps, useFormField } from '../form/form-field';

/** Props `FormCheckbox` forwards to its `Checkbox`: see `checkboxProps`. */
export type FormCheckboxCheckboxProps = Omit<
	CheckboxProps,
	| 'id'
	| 'name'
	| 'checked'
	| 'defaultChecked'
	| 'value'
	| 'ref'
	| 'disabled'
	| 'required'
	| 'readOnly'
	| 'aria-invalid'
>;

/**
 * The paths of a form's values a `FormCheckbox` can bind to: those holding a
 * boolean, `null` and `undefined` included, since an empty form often starts
 * from either and both read as unchecked. A path to a string, a number or an
 * object is rejected at compile time. Untyped forms (`FieldValues`) accept any
 * path.
 */
export type FormCheckboxPath<TFieldValues extends FieldValues> = FieldPathByValue<
	TFieldValues,
	boolean | null | undefined
>;

export type FormCheckboxProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormCheckboxPath<TFieldValues> = FormCheckboxPath<TFieldValues>,
	TTransformedValues = TFieldValues
> = Omit<FieldCheckboxProps, 'invalid' | 'children'> &
	FormFieldProps<TFieldValues, TName, TTransformedValues> & {
		/**
		 * Everything else the `Checkbox` should receive: `className`, `aria-*`…
		 * Handlers such as `onCheckedChange` and `onBlur` run after
		 * react-hook-form's, which are already wired, and `aria-describedby` ids
		 * join the ones the field wires. The rest is owned elsewhere, so it is
		 * left out: the field sets `id` (choose it with `controlId`) and names the
		 * box with its `label`; react-hook-form sets `name` and `checked` (start
		 * it in `useForm`'s `defaultValues`); `disabled`, `required` and
		 * `readOnly` are props of `FormCheckbox`, so the label and the root follow
		 * them too.
		 */
		checkboxProps?: FormCheckboxCheckboxProps;
	};

/**
 * A complete checkbox field bound to one boolean react-hook-form value: the
 * box, its label, helper text and validation error, wired through
 * `useController`. It renders inside a `Form.Root`, which provides the form,
 * and needs only a `name`, which on a typed form must point at a boolean
 * (`FormCheckboxPath`). The `required`, `invalid` and error states reach the
 * label, the box's `aria-*` attributes and the message with no ids written by
 * hand.
 *
 * The layout is [FieldCheckbox](?path=/docs/components-fieldcheckbox--docs)'s:
 * the box first, and the label, its description and its error stacked beside
 * it. Checking the box stores `true` and clearing it `false`. `rules.required`
 * fails on `false`, so it is how a box the user must check (terms, consent) is
 * validated.
 *
 * Use it for the common case: one labelled checkbox in a form. A list of
 * options stored in one array is a `CheckboxGroup`. For another layout,
 * compose the primitives yourself: `useController` with `FieldCheckbox`,
 * `Checkbox`, `Field.Content`, `Label`, `Field.Description` and
 * `Field.Error`. Over that composition `FormCheckbox` adds one thing: it reads
 * an empty value as unchecked (`checked={field.value === true}`), where a
 * `Checkbox` given the form's `undefined` starts uncontrolled.
 *
 * Errors come from `useController`'s per-field state, never from
 * `formState.errors`, so the message stays fresh under the React Compiler.
 *
 * @summary Checkbox, label, description and error bound to one boolean react-hook-form field
 *
 * @example
 * <FormCheckbox
 *   name="acceptTerms"
 *   label="I accept the carrier terms"
 *   required
 *   rules={{ required: 'Accept the terms to send the request.' }}
 * />
 */
export const FormCheckbox = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormCheckboxPath<TFieldValues> = FormCheckboxPath<TFieldValues>,
	TTransformedValues = TFieldValues
>({
	checkboxProps,
	...props
}: FormCheckboxProps<TFieldValues, TName, TTransformedValues>) => {
	const { field, rootProps, shellProps } = useFormField(props);

	// Only `true` checks the box: an empty value reads as unchecked, and `checked`
	// stays a boolean so the box is controlled from the first render. The form
	// stores a boolean, never Radix's `'indeterminate'`.
	const controlProps: Partial<CheckboxProps> = {
		name: field.name,
		checked: field.value === true,
		onCheckedChange: checked => field.onChange(checked === true),
		onBlur: field.onBlur,
		ref: field.ref
	};

	return (
		<FieldCheckbox {...rootProps}>
			<Checkbox {...mergeProps(controlProps, checkboxProps ?? {})} />
			<FormFieldContent {...shellProps} />
		</FieldCheckbox>
	);
};

FormCheckbox.displayName = 'FormCheckbox';
