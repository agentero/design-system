import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Canonical sizing recipe for icons rendered inside design-system components.
 *
 * Apply via `className` on any SVG icon (e.g. from `lucide-react`) to enforce
 * consistent dimensions, color inheritance, and shrink behavior across the
 * design system. Icons inside composed components (Button, Input, Alert, …)
 * should always reference this recipe from their own `tv` slots rather than
 * hand-rolling sizes.
 *
 * Sizes: `sm` (14px, default), `md` (16px), `lg` (20px). Calling `iconStyles()`
 * with no args returns the default `sm`.
 *
 * @example
 * import { ChevronRightIcon } from 'lucide-react';
 * import { iconStyles } from '@agentero/design-system/lib';
 *
 * <ChevronRightIcon className={iconStyles()} />
 * <ChevronRightIcon className={iconStyles({ size: 'lg' })} />
 */
export const iconStyles = tv({
	base: 'shrink-0',
	variants: {
		size: {
			sm: 'size-3.5', // 14px
			md: 'size-4', // 16px
			lg: 'size-5' // 20px
		}
	},
	defaultVariants: {
		size: 'sm'
	}
});

export type IconStylesProps = VariantProps<typeof iconStyles>;
