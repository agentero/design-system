'use client';

import { type FieldPathByValue, type FieldValues } from 'react-hook-form';

import { mergeProps } from '../../lib';
import { FieldText, type FieldTextProps } from '../field-text';
import { FormFieldShell, type FormFieldProps, useFormField } from '../form/form-field';
import { InputTel, type InputTelProps } from '../input-tel';

/**
 * Props `FormTel` forwards to its `InputTel`. The field owns `id` (pass
 * `controlId` on `FormTel` to choose it) and react-hook-form owns `name`,
 * `value` and `defaultValue` (set it in `useForm`'s `defaultValues`).
 *
 * The state is the field's as well: `disabled`, `required` and `readOnly` are
 * props of `FormTel` itself and `aria-invalid` follows its validation state.
 * `aria-describedby` stays open: its ids join the ones the field wires rather
 * than replacing them.
 */
export type FormTelInputProps = Omit<
	InputTelProps,
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
 * The paths of a form's values a `FormTel` can bind to: those holding a
 * string, `null` and `undefined` included. The phone number is stored masked,
 * as text, so a path to a number is rejected at compile time. Untyped forms
 * (`FieldValues`) accept any path.
 */
export type FormTelPath<TFieldValues extends FieldValues> = FieldPathByValue<
	TFieldValues,
	string | null | undefined
>;

export type FormTelProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormTelPath<TFieldValues> = FormTelPath<TFieldValues>,
	TTransformedValues = TFieldValues
> = Omit<FieldTextProps, 'invalid' | 'children'> &
	FormFieldProps<TFieldValues, TName, TTransformedValues> & {
		/**
		 * Everything else the `InputTel` should receive: `placeholder`,
		 * `autoComplete`, `size`, `className` (which styles the frame)…
		 * Handlers such as `onChange` and `onBlur` run after react-hook-form's,
		 * which are already wired, and read the masked value.
		 */
		inputProps?: FormTelInputProps;
	};

/**
 * A complete US phone number field bound to one react-hook-form value: label,
 * `InputTel`, helper text and validation error, laid out in the standard
 * order and wired through `useController`. It renders inside a `Form.Root`,
 * which provides the form, and needs only a `name`, which on a typed form
 * must point at a string (`FormTelPath`).
 *
 * The form stores the number as the user sees it, masked: `(555) 123-4567`,
 * never the bare digits. A partial number may end in a separator: typing
 * leaves the one before the next digit (`(555) 123-`), deleting trims it
 * (`(555) 123`). Validate the full format with a rule such as
 * `pattern: /^\(\d{3}\) \d{3}-\d{4}$/`. A value the form writes
 * itself, through `defaultValues`, `reset` or `setValue`, is shown as it is
 * given, so write it masked too.
 *
 * It is [FormText](?path=/docs/components-formtext--docs) with an
 * [InputTel](?path=/docs/components-inputtel--docs) in place of the `Input`:
 * same props, same layout, the same `required`, `invalid` and error wiring.
 * Every root prop of [FieldText](?path=/docs/components-fieldtext--docs) is
 * accepted and forwarded, such as `orientation`, `className` or `controlId`.
 *
 * Do not use it for international numbers or extensions: the mask only knows
 * the ten-digit US format. Bind those to a `FormText`.
 *
 * @summary Label, InputTel, description and error bound to one react-hook-form field
 *
 * @example
 * <FormTel
 *   name="phone"
 *   label="Phone number"
 *   required
 *   rules={{
 *     required: 'Enter a phone number.',
 *     pattern: { value: /^\(\d{3}\) \d{3}-\d{4}$/, message: 'Enter a 10-digit phone number.' }
 *   }}
 *   inputProps={{ autoComplete: 'tel-national' }}
 * />
 */
export const FormTel = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormTelPath<TFieldValues> = FormTelPath<TFieldValues>,
	TTransformedValues = TFieldValues
>({
	inputProps,
	...props
}: FormTelProps<TFieldValues, TName, TTransformedValues>) => {
	const { field, rootProps, shellProps } = useFormField(props);

	// The empty string keeps the input controlled before the form holds a value
	// for `name`. `FormTelPath` guarantees a string once there; the cast only
	// collapses the unresolved generic.
	const controlProps: Partial<InputTelProps> = {
		name: field.name,
		value: (field.value ?? '') as InputTelProps['value'],
		onChange: field.onChange,
		onBlur: field.onBlur,
		ref: field.ref
	};

	return (
		<FieldText {...rootProps}>
			<FormFieldShell {...shellProps} wrapContent>
				<InputTel {...mergeProps(controlProps, inputProps ?? {})} />
			</FormFieldShell>
		</FieldText>
	);
};

FormTel.displayName = 'FormTel';
