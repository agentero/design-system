'use client';

import { useId } from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { tv } from 'tailwind-variants';

export const progressRecipe = tv({
	slots: {
		root: 'flex flex-col gap-2',
		// The fill paints with `currentColor` (see indicator), so the track's text
		// color IS the fill color — consumers recolor it with a `text-*` class.
		track: 'relative h-2 w-full overflow-hidden rounded-sm bg-neutrals-200 text-neutrals-900',
		indicator:
			'size-full bg-current transition-transform duration-600 ease-in-out motion-reduce:transition-none',
		labelRow: 'flex items-center justify-between gap-2',
		label: 'text-sm text-text-default-base-primary',
		value: 'text-base text-text-default-base-primary'
	}
});

export type ProgressProps = {
	/** Completion percentage, 0–100. Values outside the range are clamped. */
	percentage: number;
	/** Optional label rendered above the bar, with the percentage value on the right. */
	label?: string;
	/** Accessible name when no visible `label` is provided. Defaults to `'Progress'`. */
	'aria-label'?: string;
	/**
	 * Extra classes for the bar, merged last. The fill paints with `currentColor`,
	 * so a text color recolors it (e.g. `text-brand-400`); sizing classes resize
	 * the track (e.g. `h-3`).
	 */
	className?: string;
};

/**
 * Progress shows how far a bounded task has advanced — wizard steps, upload
 * status, or a split of a total. Pass `percentage` (0–100) and optionally a
 * `label`, which renders above the bar with the percentage value. Built on
 * Radix UI Progress, so `role="progressbar"` and `aria-value*` come wired.
 *
 * The fill is near-black by default and paints with `currentColor` — recolor
 * it from the consumer with a plain text color class.
 *
 * @summary Horizontal progress bar with optional label
 *
 * @example
 * ```tsx
 * <Progress percentage={62} label="Profile completion" className="text-brand-400" />
 * ```
 */
export const Progress = ({
	percentage,
	label,
	'aria-label': ariaLabel,
	className
}: ProgressProps) => {
	const labelId = useId();
	const styles = progressRecipe();
	const value = Math.min(100, Math.max(0, percentage));

	return (
		<div data-slot="progress" className={styles.root()}>
			{label && (
				<div data-slot="progress-label" className={styles.labelRow()}>
					<span id={labelId} className={styles.label()}>
						{label}
					</span>
					<span className={styles.value()}>{value}%</span>
				</div>
			)}
			<ProgressPrimitive.Root
				data-slot="progress-track"
				value={value}
				aria-labelledby={label ? labelId : undefined}
				aria-label={label ? undefined : (ariaLabel ?? 'Progress')}
				className={styles.track({ className })}>
				<ProgressPrimitive.Indicator
					data-slot="progress-indicator"
					className={styles.indicator()}
					style={{ transform: `translateX(-${100 - value}%)` }}
				/>
			</ProgressPrimitive.Root>
		</div>
	);
};
Progress.displayName = 'Progress';
