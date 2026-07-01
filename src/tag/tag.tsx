'use client';

import { Children, ComponentPropsWithRef, isValidElement, ReactNode, Ref } from 'react';

import { Slot, Slottable } from '@radix-ui/react-slot';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for Tag. Each color maps to its dedicated `*-tag-*` semantic
 * tokens (bg enable/hover, border, text/icon) defined in the theme — one ramp
 * per color, so the recipe carries no raw palette values.
 *
 * @summary tailwind-variants recipe backing the Tag component styles
 */
export const tagRecipe = tv({
	base: [
		'inline-flex w-fit min-w-fit items-center gap-1',
		'rounded-md border border-solid border-transparent px-2',
		'font-normal leading-normal no-underline',
		'transition-[background-color,opacity] duration-200',
		'[&_svg]:size-3.5'
	],
	variants: {
		color: {
			neutral:
				'bg-bg-tag-neutral-enable text-text-tag-neutral border-border-tag-neutral [&_svg_path]:fill-icon-tag-neutral',
			positive:
				'bg-bg-tag-positive-enable text-text-tag-positive border-border-tag-positive [&_svg_path]:fill-icon-tag-positive',
			danger:
				'bg-bg-tag-danger-enable text-text-tag-danger border-border-tag-danger [&_svg_path]:fill-icon-tag-danger',
			warning:
				'bg-bg-tag-warning-enable text-text-tag-warning border-border-tag-warning [&_svg_path]:fill-icon-tag-warning',
			informative:
				'bg-bg-tag-informative-enable text-text-tag-informative border-border-tag-informative [&_svg_path]:fill-icon-tag-informative',
			creative:
				'bg-bg-tag-creative-enable text-text-tag-creative border-border-tag-creative [&_svg_path]:fill-icon-tag-creative',
			dynamic:
				'bg-bg-tag-dynamic-enable text-text-tag-dynamic border-border-tag-dynamic [&_svg_path]:fill-icon-tag-dynamic',
			playful:
				'bg-bg-tag-playful-enable text-text-tag-playful border-border-tag-playful [&_svg_path]:fill-icon-tag-playful'
		},
		variant: {
			secondary: '',
			tertiary: 'border-transparent',
			ghost: 'border-transparent bg-transparent',
			invisible: 'border-transparent bg-transparent opacity-0'
		},
		size: {
			xs: 'h-5 px-1.5 text-xs [&_svg]:size-3',
			sm: 'h-6 text-xs',
			md: 'h-8 text-sm'
		},
		pill: {
			true: 'rounded-full'
		},
		truncate: {
			true: 'max-w-full min-w-0 overflow-hidden text-ellipsis whitespace-nowrap'
		},
		interactive: {
			true: 'cursor-pointer'
		},
		// Icon-only Tags are square (per-size dimensions set in compoundVariants) with the icon centered.
		hasOnlyIcon: {
			true: 'justify-center px-0'
		}
	},
	compoundVariants: [
		// Icon-only: square box + larger centered icon, sized per size token.
		{ hasOnlyIcon: true, size: 'xs', class: 'size-5' },
		{ hasOnlyIcon: true, size: 'sm', class: 'size-6' },
		{ hasOnlyIcon: true, size: 'md', class: 'size-8 [&_svg]:size-4' },
		// Hover only applies when the Tag is interactive (asChild); a static badge has none.
		{ color: 'neutral', interactive: true, class: 'hover:bg-bg-tag-neutral-hover' },
		{ color: 'positive', interactive: true, class: 'hover:bg-bg-tag-positive-hover' },
		{ color: 'danger', interactive: true, class: 'hover:bg-bg-tag-danger-hover' },
		{ color: 'warning', interactive: true, class: 'hover:bg-bg-tag-warning-hover' },
		{ color: 'informative', interactive: true, class: 'hover:bg-bg-tag-informative-hover' },
		{ color: 'creative', interactive: true, class: 'hover:bg-bg-tag-creative-hover' },
		{ color: 'dynamic', interactive: true, class: 'hover:bg-bg-tag-dynamic-hover' },
		{ color: 'playful', interactive: true, class: 'hover:bg-bg-tag-playful-hover' },
		{ variant: 'invisible', interactive: true, class: 'hover:opacity-100' }
	],
	defaultVariants: {
		color: 'neutral',
		variant: 'tertiary',
		size: 'sm'
	}
});

/**
 * @summary Tag color union (`neutral`, `positive`, `danger`, `warning`, `informative`, `creative`, `dynamic`, `playful`)
 */
export type TagColor = NonNullable<VariantProps<typeof tagRecipe>['color']>;

/**
 * Fill treatments: `secondary` (tinted fill + border), `tertiary` (tinted fill,
 * no border — default), `ghost` (text only), and `invisible` (transparent until
 * hovered).
 *
 * @summary Tag variant union (`secondary`, `tertiary`, `ghost`, `invisible`)
 */
export type TagVariant = NonNullable<VariantProps<typeof tagRecipe>['variant']>;

/**
 * @summary Tag size union (`xs`, `sm`, `md`)
 */
export type TagSize = NonNullable<VariantProps<typeof tagRecipe>['size']>;

/**
 * Tag props. Accepts all standard `<span>` attributes plus the style variants.
 *
 * @summary Props accepted by Tag; use `asChild` to render a different element
 */
export type TagProps = Omit<ComponentPropsWithRef<'span'>, 'color'> &
	Omit<VariantProps<typeof tagRecipe>, 'interactive' | 'hasOnlyIcon'> & {
		/**
		 * Render the single child element instead of a `<span>` (via Radix `Slot`),
		 * keeping Tag framework-agnostic. Marks the Tag interactive: adds the pointer
		 * cursor and the hover fill (a plain `<span>` Tag is a static badge).
		 */
		asChild?: boolean;
		children?: ReactNode;
		ref?: Ref<HTMLElement>;
	};

/**
 * Tag is a compact label for statuses, categories, counts, and attributes. As a
 * plain `<span>` it reads as a static badge with no hover. Pass `asChild` to
 * render an interactive link or button instead — that adds the pointer cursor
 * and the hover fill. Pick `color` for meaning and `variant` for fill emphasis.
 *
 * @summary Compact semantic label; renders a static badge `<span>` or, with `asChild`, an interactive element
 *
 * @example
 * <Tag color="positive">Active</Tag>
 *
 * @example
 * <Tag asChild color="informative">
 *   <a href="/carriers">View carriers</a>
 * </Tag>
 */
export const Tag = ({
	children,
	asChild,
	color,
	variant,
	size,
	pill,
	truncate,
	className,
	ref,
	...props
}: TagProps) => {
	const Comp = asChild ? Slot : 'span';
	
	// asChild the content lives inside the wrapper child, so inspect its children.
	const content =
		asChild && isValidElement<{ children?: ReactNode }>(children)
			? children.props.children
			: children;
	const contentChildren = Children.toArray(content);
	const hasOnlyIcon = contentChildren.length > 0 && contentChildren.every(isValidElement);

	const mergedClassName = cn(
		tagRecipe({ color, variant, size, pill, truncate, interactive: asChild, hasOnlyIcon }),
		className
	);

	return (
		<Comp data-slot="tag" {...props} className={mergedClassName} ref={ref}>
			{asChild ? <Slottable>{children}</Slottable> : children}
		</Comp>
	);
};
