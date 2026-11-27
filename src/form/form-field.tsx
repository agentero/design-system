'use client';

import { ReactNode } from 'react';

import {
	type Control,
	type FieldError,
	type FieldPath,
	type FieldValues,
	type UseControllerProps,
	useController
} from 'react-hook-form';

import { Field, type FieldLabelProps } from '../field';

// The shell every `Form<X>` field shares. Internal: `/form` does not export it,
// and it imports no control, so an entry built on it bundles only its own.

/**
 * Props every `Form<X>` field takes besides its control's: the binding to the
 * form and the parts of the field around the control. An entry intersects it
 * with its field root's props (minus `invalid` and `children`) and its own
 * `<control>Props`, and narrows `TName` to the paths holding its value type.
 */
export type FormFieldProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
	TTransformedValues = TFieldValues
> = {
	/**
	 * Path of the value in the form, nested paths included (`'agency.npn'`).
	 * Type it against the form's values by passing their type as the
	 * component's first generic, or by passing `control`: the path must then
	 * exist and hold a value of the field's type.
	 */
	name: TName;
	/**
	 * The form's `control`, from `useForm()`. Defaults to the one the
	 * surrounding `Form.Root` provides; pass it explicitly to get `name`
	 * inference without writing the generic, or when the field renders outside
	 * a `Form.Root`. A `control` whose resolver transforms the values is
	 * accepted as is.
	 */
	control?: Control<TFieldValues, any, TTransformedValues>;
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
	 * Helper text shown under the control, above the error when there is one,
	 * and announced through its `aria-describedby`. Use it for guidance the
	 * user needs before typing; put details worth a click in `tooltip` instead.
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
	 * `required` attribute on the control, which assistive technology
	 * announces. It does not validate — pair it with `rules.required` or a
	 * resolver — and it never triggers the browser bubble, since `Form.Root`
	 * renders `noValidate`.
	 */
	required?: boolean;
	/**
	 * Disables the control and marks the field. Unlike react-hook-form's own
	 * `disabled` option, the value stays in the submitted data: disabling a
	 * field is a presentation decision, not a change to the form's values.
	 */
	disabled?: boolean;
};

/**
 * Binds a `Form<X>` field to its form. It takes the entry's props once the
 * entry has taken its own `<control>Props` out, and splits them three ways:
 *
 * - `field` and `fieldState` from `useController`; the entry maps
 *   `field.value` and `field.onChange` onto its control,
 * - `rootProps` for the field root (`FieldText`, `FieldTextArea`…): every
 *   prop the shell does not own, plus `invalid` and `disabled`,
 * - `shellProps` for `FormFieldShell`, or for `FormFieldContent` in a field
 *   whose control sits beside its text.
 */
export const useFormField = <
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
	TTransformedValues,
	TRest extends object
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
	...root
}: FormFieldProps<TFieldValues, TName, TTransformedValues> & TRest) => {
	// `disabled` stays out of `useController` on purpose: react-hook-form drops
	// a disabled field's value from the submitted data, and a disabled control
	// here keeps submitting its value.
	const { field, fieldState } = useController({ name, control, rules, shouldUnregister });

	return {
		field,
		fieldState,
		rootProps: { ...root, invalid: fieldState.invalid, disabled: disabled || field.disabled },
		shellProps: { label, description, tooltip, tooltipSide, optional, error: fieldState.error }
	};
};

type FormFieldPartsProps = Pick<
	FormFieldProps,
	'label' | 'description' | 'tooltip' | 'tooltipSide' | 'optional'
> & {
	/** The field's error, from `useController`'s `fieldState`. */
	error?: FieldError;
};

// The label and the messages every `Form<X>` field renders, in one place so a
// fix reaches the shell and `FormFieldContent` alike.
const FormFieldLabel = ({ label, tooltip, tooltipSide, optional }: FormFieldPartsProps) => (
	<Field.Label tooltip={tooltip} tooltipSide={tooltipSide} optional={optional}>
		{label}
	</Field.Label>
);

const FormFieldMessages = ({ description, error }: FormFieldPartsProps) => (
	<>
		{description && <Field.Description>{description}</Field.Description>}
		<Field.Error errors={error ? [error] : undefined} />
	</>
);

export type FormFieldShellProps = FormFieldPartsProps & {
	/**
	 * Groups the control with its messages in a `Field.Content`, for a field
	 * root that takes an `orientation`: the messages then stay under the control
	 * when the field lays out as a row. One DOM shape whatever the orientation.
	 */
	wrapContent?: boolean;
	/** The control. */
	children: ReactNode;
};

/**
 * The parts of a `Form<X>` field around its control, in the standard order:
 * label, control, description, error. Render it inside the field root, which
 * provides the context every part reads.
 *
 * It fits a field with a single control and its label above it. A field whose
 * control sits beside its text (a switch, a checkbox) renders
 * `FormFieldContent` next to the control instead. A group of controls (radio
 * group, checkbox group) is named by a title through `aria-labelledby`, not by
 * a `<label for>`: those entries lay out their own parts and use only
 * `useFormField`.
 */
export const FormFieldShell = ({ wrapContent, children, ...parts }: FormFieldShellProps) => {
	const body = (
		<>
			{children}
			<FormFieldMessages {...parts} />
		</>
	);

	return (
		<>
			<FormFieldLabel {...parts} />
			{wrapContent ? <Field.Content>{body}</Field.Content> : body}
		</>
	);
};

export type FormFieldContentProps = FormFieldPartsProps;

/**
 * The text of a `Form<X>` field whose control sits beside it: the label, the
 * description and the error stacked in a `Field.Content`. Render it inside the
 * field root, before or after the control.
 */
export const FormFieldContent = (parts: FormFieldContentProps) => (
	<Field.Content>
		<FormFieldLabel {...parts} />
		<FormFieldMessages {...parts} />
	</Field.Content>
);
