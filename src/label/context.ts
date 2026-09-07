'use client';

import { createContext, use } from 'react';

import { useMergeProps } from '../../lib';
import type { LabelProps } from './label';

/**
 * Props a container hands to every `Label` rendered inside it, typically
 * `htmlFor` (the control's id) and `required`. A `Label` with no provider above
 * it reads `null` and uses only its own props.
 */
export const LabelContext = createContext<Partial<LabelProps> | null>(null);

/**
 * Merges the surrounding `LabelContext`, if any, under the label's own props.
 * Own props win, so an explicit `htmlFor` or `required={false}` overrides
 * whatever the container provides.
 */
export const useLabelContext = (props: LabelProps) => useMergeProps(use(LabelContext), props);
