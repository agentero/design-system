'use client';

import { createContext, use } from 'react';

import { useMergeProps } from '../../lib';
import type { SwitchProps } from './switch';

/**
 * Props a container hands to every `Switch` rendered inside it: the wiring
 * (`id`, `aria-describedby`, `aria-invalid`, `required`, `disabled`,
 * `readOnly`), a default `size` and, from a form adapter, `name`, `checked`,
 * `onCheckedChange`, `onBlur` and `ref`. A `Switch` with no provider above it reads `null` and
 * uses only its own props.
 */
export type SwitchContextValue = Pick<
	SwitchProps,
	| 'id'
	| 'aria-describedby'
	| 'aria-invalid'
	| 'required'
	| 'disabled'
	| 'readOnly'
	| 'size'
	| 'name'
	| 'checked'
	| 'onCheckedChange'
	| 'onBlur'
	| 'ref'
>;

export const SwitchContext = createContext<SwitchContextValue | null>(null);

/**
 * Merges the surrounding `SwitchContext`, if any, under the switch's own
 * props. Own props win; handlers present on both sides are chained and
 * `aria-describedby` ids are concatenated. In development it warns when the
 * switch carries an `id` that differs from the one the container provides,
 * since the label would then point elsewhere, and when it carries a `label`
 * inside a field, which would name it twice.
 */
export const useSwitchContext = (props: SwitchProps): SwitchProps => {
	const context = use(SwitchContext);

	if (process.env.NODE_ENV !== 'production' && context?.id && props.id && context.id !== props.id) {
		console.warn(
			`Switch: its id "${props.id}" differs from the one its field provides ("${context.id}"), so the label and messages point elsewhere. Set \`controlId\` on the container instead.`
		);
	}

	if (process.env.NODE_ENV !== 'production' && context?.id && props.label) {
		console.warn(
			`Switch: its \`label\` "${props.label}" gives it a second label inside a field. Use the field's \`Label\` instead.`
		);
	}

	return useMergeProps(context, props);
};
