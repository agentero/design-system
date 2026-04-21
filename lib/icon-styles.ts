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
 * @example
 * import { ChevronRight } from 'lucide-react';
 * import { iconStyles } from '@agentero/design-system/lib';
 *
 * <ChevronRight className={iconStyles({ size: 'md' })} />
 */
export const iconStyles = tv({
	base: 'shrink-0',
	variants: {
		size: {
			sm: 'size-4', // 16px
			md: 'size-5', // 20px
			lg: 'size-6' // 24px
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export type IconStylesProps = VariantProps<typeof iconStyles>;
