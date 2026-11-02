'use client';

import { ComponentProps, createContext, ReactNode, use } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { tv } from 'tailwind-variants';

export const tooltipRecipe = tv({
	base: [
		'z-(--z-index-tooltip) max-w-[32ch] px-3 py-2',
		'rounded-sm border border-border-default-base-primary bg-bg-default-base-primary shadow-sm',
		'text-xs text-pretty text-text-default-base-secondary select-none'
	]
});

const SharedProviderContext = createContext(false);

export type TooltipProviderProps = {
	/** The subtree whose tooltips share one hover delay. Usually the whole app. */
	children: ReactNode;
	/** Hover delay in ms before the first tooltip opens. Defaults to `300`. */
	delayDuration?: number;
	/** Window in ms after a tooltip closes during which the next one opens with no delay. Defaults to `300`. */
	skipDelayDuration?: number;
};

/**
 * TooltipProvider makes every Tooltip inside it share one hover delay: the
 * first tooltip waits `delayDuration`, and the next one the pointer reaches
 * opens at once, until `skipDelayDuration` passes with none open. Mount it
 * once near the app root. A Tooltip outside any TooltipProvider still works
 * and opens as soon as it is hovered.
 *
 * @summary Shares one hover delay across every Tooltip inside it
 *
 * @example
 * ```tsx
 * <TooltipProvider>
 *   <App />
 * </TooltipProvider>
 * ```
 */
export const TooltipProvider = ({
	children,
	delayDuration = 300,
	skipDelayDuration = 300
}: TooltipProviderProps) => (
	<TooltipPrimitive.Provider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
		<SharedProviderContext value>{children}</SharedProviderContext>
	</TooltipPrimitive.Provider>
);
TooltipProvider.displayName = 'TooltipProvider';

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
	/** Hover delay in ms for this tooltip. Defaults to the `TooltipProvider` delay, or `0` outside one; focus always opens instantly. */
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
 * Wrap the app in one `TooltipProvider` so only the first tooltip waits for
 * the hover delay and its neighbours open at once.
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
	delayDuration,
	open,
	defaultOpen,
	onOpenChange,
	className
}: TooltipProps) => {
	const tooltip = (
		<TooltipPrimitive.Root
			open={open}
			defaultOpen={defaultOpen}
			onOpenChange={onOpenChange}
			delayDuration={delayDuration}>
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
	);

	if (use(SharedProviderContext)) return tooltip;

	// Alone, a tooltip has no neighbours to skip the delay for:
	// a delay would only make each one in a row wait.
	return (
		<TooltipPrimitive.Provider delayDuration={0} skipDelayDuration={0}>
			{tooltip}
		</TooltipPrimitive.Provider>
	);
};
Tooltip.displayName = 'Tooltip';
