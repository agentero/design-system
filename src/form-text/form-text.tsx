'use client';

import { ReactNode } from 'react';

import {
	type Control,
	type FieldPath,
	type FieldValues,
	type UseControllerProps,
	useController
} from 'react-hook-form';

import { mergeProps } from '../../lib';
import { Field, type FieldLabelProps } from '../field';
import { FieldText, type FieldTextProps } from '../field-text';
import { Input, type InputProps } from '../input';

/**
 * Props `FormText` forwards to its `Input`. The field owns `id` (pass
 * `controlId` on `FormText` to choose it) and react-hook-form owns `name`,
 * `value` and `defaultValue` (set it in `useForm`'s `defaultValues`).
 */
export type FormTextInputProps = Omit<InputProps, 'id' | 'name' | 'value' | 'defaultValue' | 'ref'>;

export type FormTextProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<FieldTextProps, 'invalid' | 'children'> & {
	/**
	 * Path of the value in the form, nested paths included (`'agency.npn'`).
	 * Type it against the form's values with the generic
	 * (`<FormText<Values> name="agency.npn" />`) or by passing `control`.
	 */
	name: TName;
	/**
	 * The form's `control`, from `useForm()`. Defaults to the one the
	 * surrounding `Form.Root` provides; pass it explicitly to get `name`
	 * inference without writing the generic, or when the field renders outside
	 * a `Form.Root`.
	 */
	control?: Control<TFieldValues>;
	/**
	 * react-hook-form validation rules for this field (`required`, `pattern`,
	 * `validate`…), same as `register`'s. They only validate: `rules.required`
	 * does not mark the field `required` — that is a separate, visible decision.
	 */
	rules?: UseControllerProps<TFieldValues, TName>['rules'];
	/**
	 * Drops the value from the form when the field unmounts, react-hook-form's
	 * `shouldUnregister`. Defaults to `false`: a field revealed by another one
	 * keeps its value while hidden.
	 */
	shouldUnregister?: boolean;
	/** The caption, rendered as the field's label. Text in almost every case. */
	label: ReactNode;
	/**
	 * Helper text shown under the control and announced through its
	 * `aria-describedby`. Use it for guidance the user needs before typing; put
	 * details worth a click in `tooltip` instead.
	 */
	description?: ReactNode;
	/**
	 * Content of an info tooltip rendered beside the label, for details that
	 * would clutter the description. The trigger is a sibling of the label, so
	 * the field's accessible name stays the label text.
	 */
	tooltip?: FieldLabelProps['tooltip'];
	/** Preferred side of the tooltip. Defaults to `'top'`. */
	tooltipSide?: FieldLabelProps['tooltipSide'];
	/**
	 * Appends a muted " (optional)" to the label. The forms mark optional fields
	 * rather than required ones; ignored when `required` is set.
	 */
	optional?: boolean;
	/**
	 * Marks the field required: an asterisk on the label and the native
	 * `required` attribute on the input, which assistive technology announces.
	 * It does not validate — pair it with `rules.required` or a resolver — and it
	 * never triggers the browser bubble, since `Form.Root` renders `noValidate`.
	 */
	required?: boolean;
	/**
	 * Disables the input and marks the field. Unlike react-hook-form's own
	 * `disabled` option, the value stays in the submitted data: disabling a
	 * field is a presentation decision, not a change to the form's values.
	 */
	disabled?: boolean;
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
 * form, and needs only a `name`. The `required`, `invalid` and error states
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
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	name,
	control,
	rules,
	shouldUnregister,
	disabled,
	label,
	description,
	tooltip,
	tooltipSide,
	optional,
	inputProps,
	...root
}: FormTextProps<TFieldValues, TName>) => {
	// `disabled` stays out of `useController` on purpose: react-hook-form drops
	// a disabled field's value from the submitted data, and a disabled input
	// here keeps submitting its value.
	const { field, fieldState } = useController({ name, control, rules, shouldUnregister });

	// `field.value` is `undefined` until the form holds a value for `name`, and
	// an `<input value={undefined}>` starts uncontrolled; the empty string keeps
	// it controlled from the first render. The cast collapses the path generic:
	// this is a text control, so the value is a string.
	const controlProps: Partial<InputProps> = {
		name: field.name,
		value: (field.value ?? '') as InputProps['value'],
		onChange: field.onChange,
		onBlur: field.onBlur,
		ref: field.ref
	};

	return (
		<FieldText invalid={fieldState.invalid} disabled={disabled || field.disabled} {...root}>
			<Field.Label tooltip={tooltip} tooltipSide={tooltipSide} optional={optional}>
				{label}
			</Field.Label>
			{/* One DOM shape whatever the orientation: `Field.Content` keeps the
			    messages under the control when the field lays out as a row. */}
			<Field.Content>
				<Input {...mergeProps(controlProps, inputProps ?? {})} />
				{description && <Field.Description>{description}</Field.Description>}
				<Field.Error errors={fieldState.error ? [fieldState.error] : undefined} />
			</Field.Content>
		</FieldText>
	);
};

FormText.displayName = 'FormText';
