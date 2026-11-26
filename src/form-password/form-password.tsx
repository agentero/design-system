'use client';

import { type FieldPathByValue, type FieldValues } from 'react-hook-form';

import { mergeProps } from '../../lib';
import { FieldText, type FieldTextProps } from '../field-text';
import { FormFieldShell, type FormFieldProps, useFormField } from '../form/form-field';
import { InputPassword, type InputPasswordProps } from '../input-password';

/**
 * Props `FormPassword` forwards to its `InputPassword`. The field owns `id`
 * (pass `controlId` on `FormPassword` to choose it) and react-hook-form owns
 * `name`, `value` and `defaultValue` (set it in `useForm`'s `defaultValues`).
 *
 * The state is the field's as well: `disabled`, `required` and `readOnly` are
 * props of `FormPassword` itself and `aria-invalid` follows its validation
 * state. `aria-describedby` stays open: its ids join the ones the field wires
 * rather than replacing them.
 */
export type FormPasswordInputProps = Omit<
	InputPasswordProps,
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
 * The paths of a form's values a `FormPassword` can bind to: those holding a
 * string, `null` and `undefined` included. A path to a number, a boolean or an
 * object is rejected at compile time. Untyped forms (`FieldValues`) accept any
 * path.
 */
export type FormPasswordPath<TFieldValues extends FieldValues> = FieldPathByValue<
	TFieldValues,
	string | null | undefined
>;

export type FormPasswordProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormPasswordPath<TFieldValues> = FormPasswordPath<TFieldValues>,
	TTransformedValues = TFieldValues
> = Omit<FieldTextProps, 'invalid' | 'children'> &
	FormFieldProps<TFieldValues, TName, TTransformedValues> & {
		/**
		 * Everything else the `InputPassword` should receive: `autoComplete`,
		 * `placeholder`, `maxLength`, `size`, `className` (which styles the
		 * frame)… Handlers such as `onChange` and `onBlur` run after
		 * react-hook-form's, which are already wired. `type` is not accepted:
		 * the show/hide toggle owns it.
		 */
		inputProps?: FormPasswordInputProps;
	};

/**
 * A complete password field bound to one react-hook-form value: label,
 * `InputPassword` with its show/hide toggle, helper text and validation
 * error, laid out in the standard order and wired through `useController`. It
 * renders inside a `Form.Root`, which provides the form, and needs only a
 * `name`, which on a typed form must point at a string (`FormPasswordPath`).
 *
 * The form stores the text as typed; the toggle only changes what the input
 * shows. Set `inputProps.autoComplete` to `current-password` on sign-in and
 * `new-password` when the user picks one, so password managers fill the right
 * value. For the strength rules of a new password, put each one in
 * `rules.validate` and set `criteriaMode: 'all'` on the form: the field then
 * lists every rule that failed.
 *
 * It is [FormText](?path=/docs/components-formtext--docs) with an
 * [InputPassword](?path=/docs/components-inputpassword--docs) in place of the
 * `Input`: same props, same layout, the same `required`, `invalid` and error
 * wiring. The one difference is `inputProps.type`, which `FormText` accepts
 * and `FormPassword` does not, because the toggle owns it. Every root prop of
 * [FieldText](?path=/docs/components-fieldtext--docs) is accepted and
 * forwarded, such as `orientation`, `className` or `controlId`.
 *
 * Do not use it for text that is not secret, nor for a one-time code, which
 * is a `FormText` with `inputProps={{ autoComplete: 'one-time-code' }}`.
 *
 * @summary Label, InputPassword, description and error bound to one react-hook-form field
 *
 * @example
 * <FormPassword
 *   name="password"
 *   label="Password"
 *   required
 *   rules={{ required: 'Enter your password.' }}
 *   inputProps={{ autoComplete: 'current-password' }}
 * />
 */
export const FormPassword = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormPasswordPath<TFieldValues> = FormPasswordPath<TFieldValues>,
	TTransformedValues = TFieldValues
>({
	inputProps,
	...props
}: FormPasswordProps<TFieldValues, TName, TTransformedValues>) => {
	const { field, rootProps, shellProps } = useFormField(props);

	// The empty string keeps the input controlled before the form holds a value
	// for `name`. `FormPasswordPath` guarantees a string once there; the cast
	// only collapses the unresolved generic.
	const controlProps: Partial<InputPasswordProps> = {
		name: field.name,
		value: (field.value ?? '') as InputPasswordProps['value'],
		onChange: field.onChange,
		onBlur: field.onBlur,
		ref: field.ref
	};

	return (
		<FieldText {...rootProps}>
			<FormFieldShell {...shellProps} wrapContent>
				<InputPassword {...mergeProps(controlProps, inputProps ?? {})} />
			</FormFieldShell>
		</FieldText>
	);
};

FormPassword.displayName = 'FormPassword';
