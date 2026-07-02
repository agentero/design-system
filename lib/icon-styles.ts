import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Canonical icon sizing for any SVG icon (e.g. from `lucide-react`). Apply via
 * `className` to enforce a consistent size plus `shrink-0`.
 *
 * Sizes: `sm` 14px (default), `md` 16px, `lg` 20px.
 *
 * @example
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
