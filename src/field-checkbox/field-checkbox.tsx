'use client';

import { ReactNode } from 'react';

import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { CheckboxContext, type CheckboxContextValue } from '../checkbox';
import { Field, type FieldRootProps, useFieldContext } from '../field';

const CheckboxProvider = ({ children }: { children: ReactNode }) => {
	const field = useFieldContext();

	const value: CheckboxContextValue | null = field && {
		id: field.controlId,
		'aria-describedby': field.describedBy,
		'aria-invalid': field.invalid || undefined,
		required: field.required || undefined,
		disabled: field.disabled || undefined,
		readOnly: field.readOnly || undefined
	};

	return <CheckboxContext value={value}>{children}</CheckboxContext>;
};

// Figma's Checkbox field: the 16px box centred in a 24px slot, the label 12px
// after the slot, and the box on the label's first line however many lines the
// text below it takes. The field's row stretches its first child, so the box
// is kept to its own width. The error joins the label and its description as
// one block of text, flush under them like the description under the label.
export const fieldCheckboxRecipe = tv({
	base: [
		'items-start gap-3',
		'[&>:first-child]:flex-none',
		'[&>[data-slot=checkbox]]:m-1',
		'[&>[data-slot=field-content]>[data-slot=field-error]]:-mt-2'
	]
});

export type FieldCheckboxProps = Omit<FieldRootProps, 'orientation'>;

/**
 * A `Field.Root` for a checkbox: it provides `CheckboxContext`, so the
 * `Checkbox` inside associates itself with the label and the messages and
 * takes `invalid`, `required`, `disabled` and `readOnly` from the field. Every
 * other part (`Label`, `Field.Content`, `Field.Description`, `Field.Error`)
 * works as in any field.
 *
 * The layout is the design's only one: the box first, then its label on the
 * same line. Write the `Checkbox` first and the `Label` after it; wrap the
 * label with its description and its error in a `Field.Content`, so they
 * stack together beside the box instead of joining the row. There is no
 * `orientation`. `readOnly` keeps the box focusable and announced but stops a
 * click or Space from toggling it.
 *
 * Form-library agnostic, and its contexts compose: a provider nested inside it
 * can extend `CheckboxContext` with `name`, `checked`, `onCheckedChange`,
 * `onBlur` and `ref` to control the `Checkbox`, and `FieldContext` with the
 * errors, on top of the wiring `FieldCheckbox` already set.
 *
 * @summary Field for a checkbox, wiring the Checkbox inside it
 *
 * @example
 * <FieldCheckbox invalid={!!error} required>
 *   <Checkbox checked={accepted} onCheckedChange={setAccepted} />
 *   <Field.Content>
 *     <Label>I accept the carrier terms</Label>
 *     <Field.Description>We email you a copy.</Field.Description>
 *     <Field.Error errors={[error]} />
 *   </Field.Content>
 * </FieldCheckbox>
 */
export const FieldCheckbox = ({ className, children, ...props }: FieldCheckboxProps) => (
	<Field.Root orientation="horizontal" className={cn(fieldCheckboxRecipe(), className)} {...props}>
		<CheckboxProvider>{children}</CheckboxProvider>
	</Field.Root>
);

FieldCheckbox.displayName = 'FieldCheckbox';
