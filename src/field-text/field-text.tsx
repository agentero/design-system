'use client';

import { ReactNode, useMemo } from 'react';

import { Field, type FieldRootProps, useFieldContext } from '../field';
import { InputContext, type InputProps } from '../input';

const InputProvider = ({ children }: { children: ReactNode }) => {
	const field = useFieldContext();

	const value = useMemo<Partial<InputProps> | null>(
		() =>
			field && {
				id: field.controlId,
				'aria-describedby': field.describedBy,
				'aria-invalid': field.invalid || undefined,
				required: field.required || undefined,
				disabled: field.disabled || undefined,
				readOnly: field.readOnly || undefined
			},
		[field]
	);

	return <InputContext value={value}>{children}</InputContext>;
};

export type FieldTextProps = FieldRootProps;

/**
 * A `Field.Root` for a single-line text control: it provides `InputContext`,
 * so the `Input` inside associates itself with the label and the messages and
 * takes `invalid`, `required`, `disabled` and `readOnly` from the field. Every other part
 * (`Label`, `Field.Description`, `Field.Error`) works as in any field.
 *
 * Form-library agnostic. A form adapter re-provides `InputContext` under it
 * with `name`, `value`, `onChange`, `onBlur` and `ref`, and `FieldContext` with
 * the errors, without `FieldText` knowing about the library.
 *
 * @summary Field for a single-line text control, wiring the Input inside it
 *
 * @example
 * <FieldText invalid={!!error} required>
 *   <Label>Email</Label>
 *   <Input type="email" />
 *   <Field.Description>We only use this for policy documents.</Field.Description>
 *   <Field.Error errors={[error]} />
 * </FieldText>
 */
export const FieldText = ({ children, ...props }: FieldTextProps) => (
	<Field.Root {...props}>
		<InputProvider>{children}</InputProvider>
	</Field.Root>
);

FieldText.displayName = 'FieldText';
