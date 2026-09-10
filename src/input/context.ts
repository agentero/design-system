'use client';

import { createContext, use } from 'react';

import { useMergeProps } from '../../lib';
import type { InputProps } from './input';

/**
 * Props a container hands to every `Input` rendered inside it: the wiring
 * (`id`, `aria-describedby`, `aria-invalid`, `required`, `disabled`,
 * `readOnly`) and, from a form adapter, `name`, `value`, `onChange`, `onBlur`
 * and `ref`. An `Input` with no provider above it reads `null` and uses only
 * its own props.
 */
export const InputContext = createContext<Partial<InputProps> | null>(null);

/**
 * Merges the surrounding `InputContext`, if any, under the input's own props.
 * Own props win; handlers present on both sides are chained and
 * `aria-describedby` ids are concatenated. In development it warns when the
 * input carries an `id` that differs from the one the container provides,
 * since the label would then point elsewhere.
 */
export const useInputContext = (props: InputProps) => {
	const context = use(InputContext);

	if (process.env.NODE_ENV !== 'production' && context?.id && props.id && context.id !== props.id) {
		console.warn(
			`Input: its id "${props.id}" differs from the one its field provides ("${context.id}"), so the label and messages point elsewhere. Set \`controlId\` on the container instead.`
		);
	}

	return useMergeProps(context, props);
};
