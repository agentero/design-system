'use client';

import { ReactNode } from 'react';

import { cn } from '../../lib';
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

// With a count, the container holding the TextArea and its messages becomes two
// columns under the box, as in Figma: the description (one line, truncated) or
// the error on the left, the count on the right, 16px apart. That container is
// the root of a vertical field, or a `Field.Content` in any orientation; the
// TextArea's own wrapper turns `display: contents` so its count is a grid item.
const counterRowClassName = [
	'data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:grid data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:grid-flow-row-dense data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:grid-cols-[1fr_auto] data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:gap-x-4',
	'data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>*]:col-span-2 data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]]:contents',
	'data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]>[data-slot=textarea-box]]:col-span-2',
	'data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>:is([data-slot=field-description],[data-slot=field-error])]:col-span-1',
	'data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=field-description]]:truncate',
	'data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]>[data-slot=textarea-counter]]:col-start-2',
	'data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]>[data-slot=textarea-counter]]:mt-0',
	'data-[orientation=vertical]:has-[>[data-slot=textarea-root]>[data-slot=textarea-counter]]:[&>[data-slot=textarea-root]>[data-slot=textarea-counter]]:self-end',
	'[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])]:grid [&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])]:grid-flow-row-dense [&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])]:grid-cols-[1fr_auto] [&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])]:gap-x-4',
	'[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>*]:col-span-2 [&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]]:contents',
	'[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]>[data-slot=textarea-box]]:col-span-2',
	'[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>:is([data-slot=field-description],[data-slot=field-error])]:col-span-1',
	'[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=field-description]]:truncate',
	'[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]>[data-slot=textarea-counter]]:col-start-2',
	'[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]>[data-slot=textarea-counter]]:mt-0',
	'[&_[data-slot=field-content]:has(>[data-slot=textarea-root]>[data-slot=textarea-counter])>[data-slot=textarea-root]>[data-slot=textarea-counter]]:self-end'
];

/**
 * A `Field.Root` for a multi-line text control: it provides `TextAreaContext`,
 * so the `TextArea` inside associates itself with the label and the messages
 * and takes `invalid`, `required`, `disabled` and `readOnly` from the field.
 * Every other part (`Label`, `Field.Description`, `Field.Error`) works as in
 * any field. With `maxLength` on the `TextArea`, its count shares the row under
 * the box with the description or the error, on the right; the description
 * then keeps to one line and truncates, while an error wraps.
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
export const FieldTextArea = ({ className, children, ...props }: FieldTextAreaProps) => (
	<Field.Root className={cn(counterRowClassName, className)} {...props}>
		<TextAreaProvider>{children}</TextAreaProvider>
	</Field.Root>
);

FieldTextArea.displayName = 'FieldTextArea';
