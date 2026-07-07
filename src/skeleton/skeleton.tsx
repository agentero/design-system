'use client';

import { ComponentPropsWithRef } from 'react';

import { tv } from 'tailwind-variants';

export const skeletonRecipe = tv({
	base: 'animate-pulse rounded-sm bg-bg-default-base-tertiary motion-reduce:animate-none'
});

export type SkeletonProps = ComponentPropsWithRef<'div'>;

/**
 * Skeleton renders a pulsing placeholder box while content loads. Size and
 * shape it with Tailwind classes (`h-4 w-30`, `size-10 rounded-full`) to
 * mirror the content it stands in for. Hidden from assistive technologies.
 *
 * @summary Pulsing placeholder box for loading content
 *
 * @example
 * ```tsx
 * <Skeleton className="h-4 w-30" />
 * ```
 */
export const Skeleton = ({ className, ...props }: SkeletonProps) => (
	<div
		data-slot="skeleton"
		aria-hidden="true"
		{...props}
		className={skeletonRecipe({ className })}
	/>
);
Skeleton.displayName = 'Skeleton';
