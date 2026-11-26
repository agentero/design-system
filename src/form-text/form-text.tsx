'use client';

import { type FieldPathByValue, type FieldValues } from 'react-hook-form';

import { mergeProps } from '../../lib';
import { FieldText, type FieldTextProps } from '../field-text';
import { FormFieldShell, type FormFieldProps, useFormField } from '../form/form-field';
import { Input, type InputProps } from '../input';

/**
 * Props `FormText` forwards to its `Input`. The field owns `id` (pass
 * `controlId` on `FormText` to choose it) and react-hook-form owns `name`,
 * `value` and `defaultValue` (set it in `useForm`'s `defaultValues`).
 *
 * The state is the field's as well: `disabled`, `required` and `readOnly` are
 * props of `FormText` itself and `aria-invalid` follows its validation state.
 * An `Input` takes its own props over the ones its context hands it, so
 * setting them here would move the control without the label and the root
 * following. `aria-describedby` stays open: its ids join the ones the field
 * wires rather than replacing them.
 */
export type FormTextInputProps = Omit<
	InputProps,
	| 'id'
	| 'name'
	| 'value'
	| 'defaultValue'
	| 'ref'
	| 'disabled'
	| 'required'
	| 'readOnly'
	| 'aria-invalid'
>;

/**
 * The paths of a form's values a `FormText` can bind to: those holding a
 * string, `null` and `undefined` included, since an input stores a string and
 * an empty form often starts from either. A path to a number, a boolean or an
 * object is rejected at compile time; it belongs to the `Form<X>` of that
 * value type. Untyped forms (`FieldValues`) accept any path.
 */
export type FormTextPath<TFieldValues extends FieldValues> = FieldPathByValue<
	TFieldValues,
	string | null | undefined
>;

export type FormTextProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormTextPath<TFieldValues> = FormTextPath<TFieldValues>,
	TTransformedValues = TFieldValues
> = Omit<FieldTextProps, 'invalid' | 'children'> &
	FormFieldProps<TFieldValues, TName, TTransformedValues> & {
		/**
		 * Everything else the `Input` should receive: `type`, `placeholder`,
		 * `maxLength`, `autoComplete`, `size`, `className`… Handlers such as
		 * `onChange` and `onBlur` run after react-hook-form's, which are already
		 * wired.
		 */
		inputProps?: FormTextInputProps;
	};

/**
 * A complete text field bound to one react-hook-form value: label, `Input`,
 * helper text and validation error, laid out in the standard order and wired
 * through `useController`. It renders inside a `Form.Root`, which provides the
 * form, and needs only a `name`, which on a typed form must point at a string
 * (`FormTextPath`). The `required`, `invalid` and error states
 * reach the label, the input's `aria-*` attributes and the message with no
 * ids written by hand.
 *
 * Use it for the common case: a labelled single-line input in a form. When
 * the layout is different — an input with addons, another control, a
 * message rendered elsewhere — compose the primitives yourself:
 * `useController` with [FieldText](?path=/docs/components-fieldtext--docs),
 * `Label`, `Input`, `Field.Description` and `Field.Error`. `FormText` adds no
 * behaviour of its own over that composition.
 *
 * Errors come from `useController`'s per-field state, never from
 * `formState.errors`, so the message stays fresh under the React Compiler.
 * With `criteriaMode: 'all'` on the form the error carries every rule that
 * failed and `Field.Error` lists them all. An error on an array or object path
 * (`error.root`) is not this field's: render a `Field.Error` for it where the
 * group lives.
 *
 * @summary Label, Input, description and error bound to one react-hook-form field
 *
 * @example
 * <FormText
 *   name="taxId"
 *   label="Tax ID"
 *   tooltip="The EIN the IRS issued to the agency."
 *   description="Nine digits, with or without the dash."
 *   required
 *   rules={{ required: 'Enter the tax ID.', pattern: { value: /^\d{2}-?\d{7}$/, message: 'Nine digits.' } }}
 *   inputProps={{ inputMode: 'numeric', autoComplete: 'off' }}
 * />
 */
export const FormText = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormTextPath<TFieldValues> = FormTextPath<TFieldValues>,
	TTransformedValues = TFieldValues
>({
	inputProps,
	...props
}: FormTextProps<TFieldValues, TName, TTransformedValues>) => {
	const { field, rootProps, shellProps } = useFormField(props);

	// `field.value` is `undefined` until the form holds a value for `name`, and
	// an `<input value={undefined}>` starts uncontrolled; the empty string keeps
	// it controlled from the first render. `FormTextPath` guarantees the value
	// is a string once there; the cast only collapses the unresolved generic.
	const controlProps: Partial<InputProps> = {
		name: field.name,
		value: (field.value ?? '') as InputProps['value'],
		onChange: field.onChange,
		onBlur: field.onBlur,
		ref: field.ref
	};

	return (
		<FieldText {...rootProps}>
			<FormFieldShell {...shellProps} wrapContent>
				<Input {...mergeProps(controlProps, inputProps ?? {})} />
			</FormFieldShell>
		</FieldText>
	);
};

FormText.displayName = 'FormText';
