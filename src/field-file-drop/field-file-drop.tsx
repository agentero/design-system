'use client';

import { ReactNode } from 'react';

import { Field, type FieldRootProps, useFieldContext } from '../field';
import { FileDropContext, type FileDropContextValue } from '../file-drop';

const FileDropProvider = ({ children }: { children: ReactNode }) => {
	const field = useFieldContext();

	const value: FileDropContextValue | null = field && {
		id: field.controlId,
		'aria-describedby': field.describedBy,
		'aria-invalid': field.invalid || undefined,
		required: field.required || undefined,
		disabled: field.disabled || undefined,
		readOnly: field.readOnly || undefined
	};

	return <FileDropContext value={value}>{children}</FileDropContext>;
};

/** `Field.Root`'s props minus `orientation`: a file drop field is always vertical. */
export type FieldFileDropProps = Omit<FieldRootProps, 'orientation'>;

/**
 * A `Field.Root` for a one-file upload: it provides `FileDropContext`, so the
 * `FileDrop` inside associates its input with the label and the messages and
 * takes `invalid`, `required`, `disabled` and `readOnly` from the field. Every
 * other part (`Label`, `Field.Description`, `Field.Error`) works as in any
 * field. The field is always vertical, the label over the box: the box is a
 * drop zone or a preview at least 200px tall, so there is no `orientation`.
 *
 * The field's messages reach the zone and, once there is a file, "Replace
 * file", which keeps the focus. A file `accept` turns down arrives at the
 * `FileDrop`'s `onFileReject`: set the field `invalid` and its error there,
 * since the field does not see the file. With `readOnly` and no file the box
 * renders nothing, so show the field only when there is a file to look at.
 *
 * Form-library agnostic, and its contexts compose: a provider nested inside it
 * can extend `FileDropContext` with `name`, `value`, `onFileChange`,
 * `onFileReject`, `onFileRemove`, `onBlur` and `ref` to control the
 * `FileDrop`, and `FieldContext` with the errors, on top of the wiring
 * `FieldFileDrop` already set.
 *
 * @summary Field for a one-file upload, wiring the FileDrop inside it
 *
 * @example
 * <FieldFileDrop invalid={!!error} required>
 *   <Label>W-9</Label>
 *   <FileDrop
 *     accept="application/pdf"
 *     value={value}
 *     onFileChange={file => setValue({ file })}
 *     onFileReject={() => setError({ message: 'Upload the W-9 as a PDF.' })}
 *   />
 *   <Field.Description>Signed in the last 12 months.</Field.Description>
 *   <Field.Error errors={[error]} />
 * </FieldFileDrop>
 */
export const FieldFileDrop = ({ children, ...props }: FieldFileDropProps) => (
	<Field.Root {...props}>
		<FileDropProvider>{children}</FileDropProvider>
	</Field.Root>
);

FieldFileDrop.displayName = 'FieldFileDrop';
