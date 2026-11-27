'use client';

import { createContext, use } from 'react';

import { useMergeProps } from '../../lib';
import type { CheckboxProps } from './checkbox';

/**
 * Props a container hands to every `Checkbox` rendered inside it: the wiring
 * (`id`, `aria-describedby`, `aria-invalid`, `required`, `disabled`,
 * `readOnly`) and, from a form adapter, `name`, `checked`, `onCheckedChange`,
 * `onBlur` and `ref`. A `Checkbox` with no provider above it reads `null` and
 * uses only its own props.
 */
export type CheckboxContextValue = Pick<
	CheckboxProps,
	| 'id'
	| 'aria-describedby'
	| 'aria-invalid'
	| 'required'
	| 'disabled'
	| 'readOnly'
	| 'name'
	| 'checked'
	| 'onCheckedChange'
	| 'onBlur'
	| 'ref'
>;

export const CheckboxContext = createContext<CheckboxContextValue | null>(null);

/**
 * Merges the surrounding `CheckboxContext`, if any, under the checkbox's own
 * props. Own props win; handlers present on both sides are chained and
 * `aria-describedby` ids are concatenated. In development it warns when the
 * checkbox carries an `id` that differs from the one the container provides,
 * since the label would then point elsewhere.
 */
export const useCheckboxContext = (props: CheckboxProps): CheckboxProps => {
	const context = use(CheckboxContext);

	if (process.env.NODE_ENV !== 'production' && context?.id && props.id && context.id !== props.id) {
		console.warn(
			`Checkbox: its id "${props.id}" differs from the one its field provides ("${context.id}"), so the label and messages point elsewhere. Set \`controlId\` on the container instead.`
		);
	}

	return useMergeProps(context, props);
};
