'use client';

import { type FieldPathByValue, type FieldValues } from 'react-hook-form';

import { mergeProps } from '../../lib';
import { FieldTextArea, type FieldTextAreaProps } from '../field-textarea';
import { FormFieldShell, type FormFieldProps, useFormField } from '../form/form-field';
import { TextArea, type TextAreaProps } from '../textarea';

/**
 * Props `FormTextArea` forwards to its `TextArea`. The field owns `id` (pass
 * `controlId` on `FormTextArea` to choose it) and react-hook-form owns `name`,
 * `value` and `defaultValue` (set it in `useForm`'s `defaultValues`).
 *
 * The state is the field's as well: `disabled`, `required` and `readOnly` are
 * props of `FormTextArea` itself and `aria-invalid` follows its validation
 * state. A `TextArea` takes its own props over the ones its context hands it,
 * so setting them here would move the control without the label and the root
 * following. `aria-describedby` stays open: its ids join the ones the field
 * wires rather than replacing them.
 */
export type FormTextAreaTextAreaProps = Omit<
	TextAreaProps,
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
 * The paths of a form's values a `FormTextArea` can bind to: those holding a
 * string, `null` and `undefined` included, since a text area stores a string
 * and an empty form often starts from either. A path to a number, a boolean or
 * an object is rejected at compile time. Untyped forms (`FieldValues`) accept
 * any path.
 */
export type FormTextAreaPath<TFieldValues extends FieldValues> = FieldPathByValue<
	TFieldValues,
	string | null | undefined
>;

export type FormTextAreaProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormTextAreaPath<TFieldValues> = FormTextAreaPath<TFieldValues>,
	TTransformedValues = TFieldValues
> = Omit<FieldTextAreaProps, 'invalid' | 'children'> &
	FormFieldProps<TFieldValues, TName, TTransformedValues> & {
		/**
		 * Everything else the `TextArea` should receive: `placeholder`, `rows`,
		 * `limit`, `maxLength`, `size`, `className`… Handlers such as `onChange` and
		 * `onBlur` run after react-hook-form's, which are already wired.
		 */
		textAreaProps?: FormTextAreaTextAreaProps;
	};

/**
 * A complete multi-line text field bound to one react-hook-form value: label,
 * `TextArea`, helper text and validation error, laid out in the standard order
 * and wired through `useController`. It renders inside a `Form.Root`, which
 * provides the form, and needs only a `name`, which on a typed form must point
 * at a string (`FormTextAreaPath`). The `required`, `invalid` and error states
 * reach the label, the text area's `aria-*` attributes and the message with no
 * ids written by hand.
 *
 * The value is controlled, so a `limit` in `textAreaProps` counts what the
 * form holds, `reset` and `setValue` included. `rules.maxLength` only
 * validates: it shows no count, so set `limit` alongside it. The field is
 * always vertical, like
 * [FieldTextArea](?path=/docs/components-fieldtextarea--docs): there is no
 * `orientation`.
 *
 * Use it for the common case: a labelled text area in a form. For another
 * layout, compose the primitives yourself: `useController` with
 * `FieldTextArea`, `Label`, `TextArea`, `Field.Description` and `Field.Error`.
 * `FormTextArea` adds no behaviour of its own over that composition.
 *
 * Errors come from `useController`'s per-field state, never from
 * `formState.errors`, so the message stays fresh under the React Compiler.
 * With `criteriaMode: 'all'` on the form the error carries every rule that
 * failed and `Field.Error` lists them all.
 *
 * @summary Label, TextArea, description and error bound to one react-hook-form field
 *
 * @example
 * <FormTextArea
 *   name="notes"
 *   label="Notes for the underwriter"
 *   description="Shared with the carrier."
 *   optional
 *   rules={{ maxLength: { value: 500, message: 'Keep it under 500 characters.' } }}
 *   textAreaProps={{ limit: 500, placeholder: 'Anything the underwriter should know' }}
 * />
 */
export const FormTextArea = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FormTextAreaPath<TFieldValues> = FormTextAreaPath<TFieldValues>,
	TTransformedValues = TFieldValues
>({
	textAreaProps,
	...props
}: FormTextAreaProps<TFieldValues, TName, TTransformedValues>) => {
	const { field, rootProps, shellProps } = useFormField(props);

	// `field.value` is `undefined` until the form holds a value for `name`, and a
	// `<textarea value={undefined}>` starts uncontrolled; the empty string keeps
	// it controlled from the first render. `FormTextAreaPath` guarantees the
	// value is a string once there; the cast only collapses the unresolved generic.
	const controlProps: Partial<TextAreaProps> = {
		name: field.name,
		value: (field.value ?? '') as TextAreaProps['value'],
		onChange: field.onChange,
		onBlur: field.onBlur,
		ref: field.ref
	};

	return (
		<FieldTextArea {...rootProps}>
			<FormFieldShell {...shellProps}>
				<TextArea {...mergeProps(controlProps, textAreaProps ?? {})} />
			</FormFieldShell>
		</FieldTextArea>
	);
};

FormTextArea.displayName = 'FormTextArea';
