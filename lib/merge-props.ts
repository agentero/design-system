import { Ref, RefCallback, useMemo } from 'react';

import { cn } from './utils';

type Handler<Args extends unknown[]> = (...args: Args) => void;

/**
 * Calls every callback in order with the same arguments. Skips the ones that
 * are `null` or `undefined`, so optional handlers can be passed straight in.
 */
export const chain =
	<Args extends unknown[]>(...callbacks: Array<Handler<Args> | null | undefined>) =>
	(...args: Args) => {
		for (const callback of callbacks) {
			callback?.(...args);
		}
	};

/**
 * Merges several refs into one callback ref that assigns all of them. Honors
 * React 19 cleanup functions: a callback ref that returns a cleanup gets it
 * called on detach; the others are reset to `null` the classic way.
 *
 * Memoize the result (see `useMergeProps`): React re-runs a callback ref whose
 * identity changed, so rebuilding it every render detaches and re-attaches
 * every underlying ref each time.
 */
export const mergeRefs =
	<T>(...refs: Array<Ref<T> | undefined>): RefCallback<T> =>
	node => {
		const cleanups = refs.map(ref => {
			if (typeof ref === 'function') {
				return ref(node);
			}
			if (ref) {
				ref.current = node;
			}
			return undefined;
		});

		return () => {
			refs.forEach((ref, index) => {
				const cleanup = cleanups[index];
				if (typeof cleanup === 'function') {
					cleanup();
				} else if (typeof ref === 'function') {
					ref(null);
				} else if (ref) {
					ref.current = null;
				}
			});
		};
	};

const mergeIds = (a: string, b: string) =>
	[...new Set(`${a} ${b}`.split(/\s+/).filter(Boolean))].join(' ');

const isHandlerKey = (key: string) => /^on[A-Z]/.test(key);

/**
 * Merges props a component receives from a context under the props it was
 * given directly. Own props win; a context is a default, never an override.
 * Mirrors React Aria's `mergeProps`:
 *
 * - `on*` handlers present on both sides are chained, context first.
 * - `aria-describedby` ids are concatenated (context first, de-duplicated).
 * - `className` is merged with `cn`.
 * - `ref`s present on both sides are merged with `mergeRefs`.
 * - `id` and everything else: the own value wins when it is not `undefined`.
 *
 * With no context (`null`/`undefined`) the own props are returned untouched,
 * so a component reading a context still behaves as before outside of it.
 */
export const mergeProps = <P extends object>(
	contextProps: Partial<P> | null | undefined,
	ownProps: P
): P => {
	if (!contextProps) {
		return ownProps;
	}

	const merged: Record<string, unknown> = { ...contextProps };

	for (const [key, ownValue] of Object.entries(ownProps)) {
		if (ownValue === undefined) {
			continue;
		}

		const contextValue = merged[key];

		if (isHandlerKey(key) && typeof contextValue === 'function' && typeof ownValue === 'function') {
			merged[key] = chain(contextValue as Handler<unknown[]>, ownValue as Handler<unknown[]>);
		} else if (
			key === 'aria-describedby' &&
			typeof contextValue === 'string' &&
			typeof ownValue === 'string'
		) {
			merged[key] = mergeIds(contextValue, ownValue);
		} else if (key === 'className' && typeof contextValue === 'string') {
			merged[key] = cn(contextValue, ownValue as string);
		} else if (key === 'ref' && contextValue && ownValue) {
			merged[key] = mergeRefs(contextValue as Ref<unknown>, ownValue as Ref<unknown>);
		} else {
			merged[key] = ownValue;
		}
	}

	return merged as P;
};

type WithRef = { ref?: Ref<unknown> };

/**
 * `mergeProps` for render time: same rules, but the merged `ref` keeps a stable
 * identity across renders as long as the two underlying refs do, so React does
 * not detach and re-attach them on every render. This is the hook every
 * `useXContext(props)` in the design system is built on.
 */
export const useMergeProps = <P extends object>(
	contextProps: Partial<P> | null | undefined,
	ownProps: P
): P => {
	const contextRef = (contextProps as WithRef | null | undefined)?.ref;
	const ownRef = (ownProps as WithRef).ref;

	const mergedRef = useMemo(
		() => (contextRef && ownRef ? mergeRefs(contextRef, ownRef) : undefined),
		[contextRef, ownRef]
	);

	const merged = mergeProps(contextProps, ownProps);

	if (mergedRef) {
		return { ...merged, ref: mergedRef };
	}

	return merged;
};
