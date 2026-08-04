'use client';

import { createContext, use } from 'react';

export type FieldContextValue = {
	/** `id` of the field's control, not of the `Field.Root` element. */
	id: string;
	invalid: boolean;
	descriptionId: string;
	errorId: string;
	/** Both message ids, ready to pass to the control's `aria-describedby`. */
	describedBy: string;
};

export const FieldContext = createContext<FieldContextValue | null>(null);

/**
 * Reads the surrounding `Field.Root` wiring. Returns `null` outside a
 * `Field.Root`, so a control can consume it and still work standalone — always
 * fall back to its own props when it is `null`.
 *
 * Kept in its own module so `Label` can read it without importing `field.tsx`,
 * which would drag Tooltip into the `label` subpath.
 *
 * @summary Reads the surrounding Field.Root id and invalid state
 */
export const useFieldContext = () => use(FieldContext);
