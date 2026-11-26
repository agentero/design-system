'use client';

import { type FieldPathByValue, type FieldValues } from 'react-hook-form';

import { mergeProps } from '../../lib';
import { FieldText, type FieldTextProps } from '../field-text';
import { FormFieldShell, type FormFieldProps, useFormField } from '../form/form-field';
import { InputNumber, type InputNumberProps } from '../input-number';

/**
 * Props `FormNumber` forwards to its `InputNumber`. The field owns `id` (pass
 * `controlId` on `FormNumber` to choose it) and react-hook-form owns `name`,
 * `value` and `defaultValue` (set it in `useForm`'s `defaultValues`).
 *
 * The state is the field's as well: `disabled`, `required` and `readOnly` are
 * props of `FormNumber` itself and `aria-invalid` follows its validation
 * state. `aria-describedby` stays open: its ids join the ones the field wires
 * rather than replacing them.
 */
export type FormNumberInputProps = Omit<
	InputNumberProps,
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
 * The paths of a form's values a `FormNumber` can bind to: those holding a
 * string, `null` and `undefined` included. The field stores the formatted
 * text (`"1,234"`), not a number, so a path typed `number` is rejected at
 * compile time. Untyped forms (`FieldValues`) accept any path.
 */
export type FormNumberPath<TFieldValues extends FieldValues> = FieldPathByValue<
	TFieldValues,
	string | null | undefined
>;

export type FormNumberProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormNumberPath<TFieldValues> = FormNumberPath<TFieldValues>,
	TTransformedValues = TFieldValues
> = Omit<FieldTextProps, 'invalid' | 'children'> &
	FormFieldProps<TFieldValues, TName, TTransformedValues> & {
		/**
		 * Everything else the `InputNumber` should receive: the formatting
		 * (`thousandSeparator`, `allowLeadingZeros`, `maxNumber`), `inputMode`,
		 * `placeholder`, `size`, `className`… Handlers such as `onChange` and
		 * `onBlur` run after react-hook-form's, which are already wired, and
		 * read the formatted text.
		 */
		inputProps?: FormNumberInputProps;
	};

/**
 * A complete numeric field bound to one react-hook-form value: label,
 * `InputNumber`, helper text and validation error, laid out in the standard
 * order and wired through `useController`. It renders inside a `Form.Root`,
 * which provides the form, and needs only a `name`, which on a typed form
 * must point at a string (`FormNumberPath`).
 *
 * The form stores the text the field shows, not a number: `"1,234"` with
 * `thousandSeparator`, `"001234"` for an identifier that keeps its leading
 * zeros, `""` when empty. Parse it where the number is used (in the schema or
 * on submit). By default the field keeps leading zeros and groups nothing,
 * which suits identifiers such as an NPN or a ZIP code; pass
 * `inputProps={{ thousandSeparator: true }}` for an amount, which also drops
 * leading zeros. The mobile keypad has a decimal key unless
 * `inputProps.inputMode` is `'numeric'`.
 *
 * It is [FormText](?path=/docs/components-formtext--docs) with an
 * [InputNumber](?path=/docs/components-inputnumber--docs) in place of the
 * `Input`: same props, same layout, the same `required`, `invalid` and error
 * wiring. Every root prop of
 * [FieldText](?path=/docs/components-fieldtext--docs) is accepted and
 * forwarded, such as `orientation`, `className` or `controlId`.
 *
 * Do not use it for a phone number, which is a `FormTel`, nor for a form
 * value that must be stored as a `number`.
 *
 * @summary Label, InputNumber, description and error bound to one react-hook-form field
 *
 * @example
 * <FormNumber
 *   name="annualPremium"
 *   label="Annual premium"
 *   required
 *   rules={{ required: 'Enter the annual premium.' }}
 *   inputProps={{ thousandSeparator: true, placeholder: '0' }}
 * />
 */
export const FormNumber = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormNumberPath<TFieldValues> = FormNumberPath<TFieldValues>,
	TTransformedValues = TFieldValues
>({
	inputProps,
	...props
}: FormNumberProps<TFieldValues, TName, TTransformedValues>) => {
	const { field, rootProps, shellProps } = useFormField(props);

	// `InputNumber` renders from `value`, so the field stays controlled: the
	// empty string until the form holds a value for `name`. `FormNumberPath`
	// guarantees a string once there; the cast only collapses the unresolved
	// generic.
	const controlProps: Partial<InputNumberProps> = {
		name: field.name,
		value: (field.value ?? '') as InputNumberProps['value'],
		onChange: field.onChange,
		onBlur: field.onBlur,
		ref: field.ref
	};

	return (
		<FieldText {...rootProps}>
			<FormFieldShell {...shellProps} wrapContent>
				<InputNumber {...mergeProps(controlProps, inputProps ?? {})} />
			</FormFieldShell>
		</FieldText>
	);
};

FormNumber.displayName = 'FormNumber';
