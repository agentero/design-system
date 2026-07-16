'use client';

import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { Tooltip } from '../tooltip';

// `root` is the flex wrapper used only when an `info` tooltip is present, so
// the label text and help trigger sit side by side.
export const labelRecipe = tv({
	slots: {
		root: 'flex flex-row items-start gap-1',
		label: 'mb-2 flex text-sm font-semibold text-text-default-base-primary'
	},
	variants: {
		readonly: {
			true: { label: 'text-text-default-base-secondary' }
		},
		optional: {
			true: {
				label:
					"after:font-normal after:text-text-default-base-tertiary after:content-['_(optional)']"
			}
		}
	},
	defaultVariants: {
		readonly: false,
		optional: false
	}
});

export type LabelVariants = VariantProps<typeof labelRecipe>;

export type LabelProps = ComponentPropsWithRef<typeof LabelPrimitive.Root> &
	LabelVariants & {
		/** Tooltip content shown next to the label; rendered only alongside `infoIcon`. */
		info?: ReactNode;
		/** Trigger for the `info` tooltip (e.g. a help icon); kept as a prop so the DS stays icon-agnostic. Give it an accessible name. */
		infoIcon?: ReactNode;
	};

/**
 * Accessible caption for a form control, built on Radix's Label primitive
 * (associates with the control via `htmlFor`, prevents text selection on
 * double-click). Pass `optional` for a muted " (optional)" suffix, `readonly`
 * to render a dimmed `<dt>` for read-only summaries (place it inside a `<dl>`),
 * and `info` + `infoIcon` for an inline help tooltip.
 *
 * @example
 * <Label htmlFor="tier" info="Determines quoting access" infoIcon={<HelpIcon />}>
 *   Agency tier
 * </Label>
 */
export const Label = ({
	className,
	children,
	optional = false,
	readonly = false,
	info,
	infoIcon,
	ref,
	...props
}: LabelProps) => {
	const styles = labelRecipe({ optional, readonly });
	const Element: ElementType = readonly ? 'dt' : LabelPrimitive.Root;

	const label = (
		<Element ref={ref} data-slot="label" className={cn(styles.label(), className)} {...props}>
			{children}
		</Element>
	);

	if (info && infoIcon) {
		return (
			<div className={styles.root()} data-slot="label-root">
				{label}
				<Tooltip content={info}>{infoIcon}</Tooltip>
			</div>
		);
	}

	return label;
};
