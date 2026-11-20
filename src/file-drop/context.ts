'use client';

import { createContext, use } from 'react';

import { useMergeProps } from '../../lib';
import type { FileDropProps } from './file-drop';

/**
 * Props a container hands to every `FileDrop` rendered inside it: the wiring
 * (`id`, `aria-describedby`, `aria-invalid`, `required`, `disabled`,
 * `readOnly`) and, from a form adapter, `name`, `value`, `onFileChange`,
 * `onFileReject`, `onFileRemove`, `onBlur` and `ref`. A `FileDrop` with no
 * provider above it reads `null` and uses only its own props.
 */
export type FileDropContextValue = Pick<
	FileDropProps,
	| 'id'
	| 'aria-describedby'
	| 'aria-invalid'
	| 'required'
	| 'disabled'
	| 'readOnly'
	| 'name'
	| 'value'
	| 'onFileChange'
	| 'onFileReject'
	| 'onFileRemove'
	| 'onBlur'
	| 'ref'
>;

export const FileDropContext = createContext<FileDropContextValue | null>(null);

/**
 * Merges the surrounding `FileDropContext`, if any, under the file drop's own
 * props. Own props win; handlers present on both sides are chained and
 * `aria-describedby` ids are concatenated. In development it warns when the
 * file drop carries an `id` that differs from the one the container provides,
 * since the label would then point elsewhere.
 */
export const useFileDropContext = (props: FileDropProps): FileDropProps => {
	const context = use(FileDropContext);

	if (process.env.NODE_ENV !== 'production' && context?.id && props.id && context.id !== props.id) {
		console.warn(
			`FileDrop: its id "${props.id}" differs from the one its field provides ("${context.id}"), so the label and messages point elsewhere. Set \`controlId\` on the container instead.`
		);
	}

	return useMergeProps(context, props);
};
