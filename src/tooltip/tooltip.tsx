'use client';

import { ComponentProps, ReactNode } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { tv } from 'tailwind-variants';

// Directional entrance animation is keyed off `data-side` so the tooltip
// fades and slides in from the edge nearest its trigger.
export const tooltipRecipe = tv({
	base: [
		'z-(--z-index-tooltip) max-w-[32ch] px-3 py-2',
		'rounded-sm border border-border-default-base-primary bg-bg-default-base-primary shadow-sm',
		'text-xs text-pretty text-text-default-base-secondary select-none',
		'will-change-[transform,opacity]',
		'data-[side=bottom]:animate-tooltip-slide-in-from-top',
		'data-[side=top]:animate-tooltip-slide-in-from-bottom',
		'data-[side=left]:animate-tooltip-slide-in-from-right',
		'data-[side=right]:animate-tooltip-slide-in-from-left',
		// `!` so it outranks the higher-specificity data-[side=…] rules above
		'motion-reduce:animate-none!'
	]
});

type RootProps = ComponentProps<typeof TooltipPrimitive.Root>;

export type TooltipProps = {
	/** The trigger element. Hovering or focusing it reveals the tooltip. */
	children: ReactNode;
	/** The floating hint. Keep it short — labels or hints, not paragraphs. */
	content: ReactNode;
	/** Preferred side of the trigger; flips on collision. Defaults to `'top'`. */
	side?: TooltipPrimitive.TooltipContentProps['side'];
	/** Preferred alignment against the trigger. Defaults to `'center'`. */
	align?: TooltipPrimitive.TooltipContentProps['align'];
	/** Distance in pixels between the tooltip and its trigger. Defaults to `4`. */
	sideOffset?: number;
	/** Merge Radix's behavior onto an already-interactive child instead of wrapping it in a `<button>`. Defaults to `false`. */
	asChild?: boolean;
	/** Hide the tooltip when the trigger is clipped away (e.g. scrolled out of an `overflow` container). */
	hideWhenDetached?: boolean;
	/** Delay in ms before opening on hover. Defaults to `0`; focus always opens instantly. */
	delayDuration?: number;
	/** Extra classes for the content surface, merged last. */
	className?: string;
} & Pick<RootProps, 'open' | 'defaultOpen' | 'onOpenChange'>;

/**
 * Tooltip reveals a short, non-essential hint anchored to a trigger element on
 * hover or focus. Pass the trigger as `children` and the hint as `content`; use
 * `asChild` when the trigger is already interactive (a button or link) to avoid
 * nesting interactive elements. Don't put essential or interactive content
 * inside it — hover-only content is inaccessible to touch and keyboard users.
 *
 * @summary Hover/focus hint anchored to a trigger element
 *
 * @example
 * ```tsx
 * <Tooltip content="Archive this carrier" asChild>
 *   <IconButton aria-label="Archive"><IconArchive /></IconButton>
 * </Tooltip>
 * ```
 */
export const Tooltip = ({
	children,
	content,
	side = 'top',
	align,
	sideOffset = 4,
	asChild = false,
	hideWhenDetached,
	delayDuration = 0,
	open,
	defaultOpen,
	onOpenChange,
	className
}: TooltipProps) => (
	<TooltipPrimitive.Provider delayDuration={delayDuration} skipDelayDuration={0}>
		<TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
			<TooltipPrimitive.Trigger
				asChild={asChild}
				data-slot="tooltip-trigger"
				data-testid="tooltip-trigger"
				className="align-middle">
				{children}
			</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Portal>
				<TooltipPrimitive.Content
					data-slot="tooltip-content"
					side={side}
					align={align}
					sideOffset={sideOffset}
					collisionPadding={8}
					hideWhenDetached={hideWhenDetached}
					className={tooltipRecipe({ className })}>
					{content}
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		</TooltipPrimitive.Root>
	</TooltipPrimitive.Provider>
);
Tooltip.displayName = 'Tooltip';
