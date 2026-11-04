'use client';

import { createContext, use } from 'react';

import { useMergeProps } from '../../lib';
import type { TextAreaProps } from './textarea';

/**
 * Props a container hands to every `TextArea` rendered inside it: the wiring
 * (`id`, `aria-describedby`, `aria-invalid`, `required`, `disabled`,
 * `readOnly`) and, from a form adapter, `name`, `value`, `onChange`, `onBlur`
 * and `ref`. A `TextArea` with no provider above it reads `null` and uses only
 * its own props.
 */
export type TextAreaContextValue = Pick<
	TextAreaProps,
	| 'id'
	| 'aria-describedby'
	| 'aria-invalid'
	| 'required'
	| 'disabled'
	| 'readOnly'
	| 'name'
	| 'onChange'
	| 'onBlur'
	| 'ref'
> & { value?: string };

export const TextAreaContext = createContext<TextAreaContextValue | null>(null);

/**
 * Merges the surrounding `TextAreaContext`, if any, under the text area's own
 * props. Own props win; handlers present on both sides are chained and
 * `aria-describedby` ids are concatenated. In development it warns when the
 * text area carries an `id` that differs from the one the container provides,
 * since the label would then point elsewhere.
 */
export const useTextAreaContext = (props: TextAreaProps): TextAreaProps => {
	const context = use(TextAreaContext);

	if (process.env.NODE_ENV !== 'production' && context?.id && props.id && context.id !== props.id) {
		console.warn(
			`TextArea: its id "${props.id}" differs from the one its field provides ("${context.id}"), so the label and messages point elsewhere. Set \`controlId\` on the container instead.`
		);
	}

	return useMergeProps(context, props);
};
