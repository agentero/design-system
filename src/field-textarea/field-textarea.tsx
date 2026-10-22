'use client';

import { ReactNode } from 'react';

import { Field, type FieldRootProps, useFieldContext } from '../field';
import { TextAreaContext, type TextAreaContextValue } from '../textarea';

const TextAreaProvider = ({ children }: { children: ReactNode }) => {
	const field = useFieldContext();

	const value: TextAreaContextValue | null = field && {
		id: field.controlId,
		'aria-describedby': field.describedBy,
		'aria-invalid': field.invalid || undefined,
		required: field.required || undefined,
		disabled: field.disabled || undefined,
		readOnly: field.readOnly || undefined
	};

	return <TextAreaContext value={value}>{children}</TextAreaContext>;
};

export type FieldTextAreaProps = FieldRootProps;

/**
 * A `Field.Root` for a multi-line text control: it provides `TextAreaContext`,
 * so the `TextArea` inside associates itself with the label and the messages
 * and takes `invalid`, `required`, `disabled` and `readOnly` from the field.
 * Every other part (`Label`, `Field.Description`, `Field.Error`) works as in
 * any field. With `limit` on the `TextArea`, its count sits inside the box,
 * so the description or the error keeps the row under it to itself.
 *
 * Form-library agnostic, and its contexts compose: a provider nested inside it
 * can extend `TextAreaContext` with `name`, `value`, `onChange`, `onBlur` and
 * `ref` to control the `TextArea`, and `FieldContext` with the errors, on top
 * of the wiring `FieldTextArea` already set.
 *
 * @summary Field for a multi-line text control, wiring the TextArea inside it
 *
 * @example
 * <FieldTextArea invalid={!!error} required>
 *   <Label>Reason</Label>
 *   <TextArea placeholder="Tell us in your own words" />
 *   <Field.Description>Shared with the carrier.</Field.Description>
 *   <Field.Error errors={[error]} />
 * </FieldTextArea>
 */
export const FieldTextArea = ({ children, ...props }: FieldTextAreaProps) => (
	<Field.Root {...props}>
		<TextAreaProvider>{children}</TextAreaProvider>
	</Field.Root>
);

FieldTextArea.displayName = 'FieldTextArea';
