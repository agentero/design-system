'use client';

import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	Children,
	ForwardedRef,
	isValidElement,
	PropsWithChildren,
	ReactNode,
	Ref
} from 'react';

import Link, { LinkProps } from 'next/link';
import { tv } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for Button using tailwind-variants. Single-slot recipe whose
 * variants (`variant`, `size`, `status`, `hasOnlyIcon`, `disabled`, `rounded`,
 * `align`, `fitContent`) plus compound variants drive destructive and disabled
 * treatments. All colors route through design-system tokens defined in
 * `themes/base.css`.
 *
 * Exported for advanced composition (e.g., styling a link or custom element
 * to match a Button). Prefer rendering the `Button` component directly.
 *
 * @summary tailwind-variants recipe backing the Button component styles
 */
export const buttonStyle = tv({
	base: [
		'relative inline-flex items-center',
		'font-semibold rounded-md cursor-pointer',
		'bg-transparent no-underline',
		'border border-solid border-transparent',
		'transition-[background-color,border-color,color] duration-200',
		'[-webkit-tap-highlight-color:transparent]',
		'[&_[data-slot=button-label]]:overflow-hidden',
		'[&_[data-slot=button-label]]:text-ellipsis',
		'[&_[data-slot=button-label]]:whitespace-nowrap',
		'[&_[data-slot=button-label]]:[flex:0_1_auto]',
		'[&_[data-slot=button-label]]:min-w-0',
		'[&_svg]:[flex:0_0_fit-content]',
		'disabled:cursor-not-allowed disabled:pointer-events-none',
		'focus-visible:outline-solid focus-visible:outline-2',
		'focus-visible:outline-offset-[0.125rem]',
		'focus-visible:outline-focus-ring-button-primary'
	],
	variants: {
		variant: {
			primary: [
				'bg-bg-button-primary-enable border-bg-button-primary-enable',
				'text-text-button-primary-enable',
				'[&_svg]:fill-icon-button-primary-enable',
				'hover:bg-bg-button-primary-hover hover:border-bg-button-primary-hover'
			],
			secondary: [
				'bg-bg-button-secondary-enable border-border-button-secondary-enable',
				'text-text-button-secondary-enable',
				'shadow-1',
				'[&_svg]:fill-icon-button-secondary-enable',
				'hover:bg-bg-button-secondary-hover'
			],
			tertiary: [
				'bg-bg-button-tertiary-enable border-bg-button-tertiary-enable',
				'text-text-button-tertiary-enable',
				'[&_svg]:fill-icon-button-tertiary-enable',
				'hover:bg-bg-button-tertiary-hover hover:border-bg-button-tertiary-hover'
			],
			ghost: [
				'bg-bg-button-ghost-enable border-bg-button-ghost-enable',
				'text-text-button-ghost-enable',
				'mix-blend-multiply bg-blend-multiply',
				'[&_svg]:fill-icon-button-ghost-enable',
				'hover:bg-bg-button-ghost-hover hover:border-bg-button-ghost-hover'
			],
			link: [
				'px-0 underline',
				'[text-underline-offset:var(--text-underline-offset)]',
				'text-text-button-link-enable',
				'[&_svg]:fill-icon-button-link-enable'
			]
		},
		size: {
			xs: 'h-6 min-w-16 px-[0.6875rem] gap-2 text-xs [&_svg]:size-5 [&_svg]:-mx-1',
			sm: 'h-8 min-w-[5.375rem] px-[0.6875rem] gap-2 text-sm [&_svg]:size-5 [&_svg]:-mx-1',
			md: 'h-10 min-w-[6.25rem] px-[1.1875rem] gap-4 text-sm [&_svg]:size-6 [&_svg]:-mx-2',
			lg: 'h-12 min-w-30 px-[1.1875rem] gap-4 text-base rounded-lg [&_svg]:size-6 [&_svg]:-mx-2'
		},
		status: {
			danger: 'focus-visible:outline-focus-ring-button-destructive'
		},
		hasOnlyIcon: {
			true: 'aspect-square px-0 min-w-[unset]'
		},
		disabled: {
			true: 'cursor-not-allowed pointer-events-none'
		},
		rounded: {
			true: 'rounded-full'
		},
		align: {
			center: 'justify-center',
			start: 'justify-start',
			end: 'justify-end',
			justify: 'justify-between'
		},
		fitContent: {
			true: 'min-w-fit'
		}
	},
	compoundVariants: [
		/* Disabled × variant — applied via class (works for anchors that lack :disabled) */
		{
			variant: 'primary',
			disabled: true,
			class: [
				'bg-bg-button-primary-disable border-bg-button-primary-disable',
				'text-text-button-primary-disable',
				'[&_svg]:fill-icon-button-primary-disable'
			]
		},
		{
			variant: 'secondary',
			disabled: true,
			class: [
				'bg-bg-button-secondary-disable border-border-button-secondary-disable',
				'text-text-button-secondary-disable',
				'[&_svg]:fill-icon-button-secondary-disable'
			]
		},
		{
			variant: 'tertiary',
			disabled: true,
			class: [
				'bg-bg-button-tertiary-disable border-bg-button-tertiary-disable',
				'text-text-button-tertiary-disable',
				'[&_svg]:fill-icon-button-tertiary-disable'
			]
		},
		{
			variant: 'ghost',
			disabled: true,
			class: [
				'bg-bg-button-ghost-disable border-bg-button-ghost-disable',
				'text-text-button-ghost-disable',
				'[&_svg]:fill-icon-button-ghost-disable'
			]
		},
		{
			variant: 'link',
			disabled: true,
			class: ['text-text-button-link-disable', '[&_svg]:fill-icon-button-link-disable']
		},
		/* Destructive (status=danger) × variant — enabled state */
		{
			variant: 'primary',
			status: 'danger',
			class: [
				'bg-bg-button-primary-destructive-enable',
				'border-bg-button-primary-destructive-enable',
				'text-text-button-primary-destructive-enable',
				'[&_svg]:fill-icon-button-primary-destructive-enable',
				'hover:bg-bg-button-primary-destructive-hover',
				'hover:border-bg-button-primary-destructive-hover'
			]
		},
		{
			variant: 'secondary',
			status: 'danger',
			class: [
				'bg-bg-button-secondary-destructive-enable',
				'border-border-button-secondary-destructive-enable',
				'text-text-button-secondary-destructive-enable',
				'[&_svg]:fill-icon-button-secondary-destructive-enable',
				'hover:bg-bg-button-secondary-destructive-hover'
			]
		},
		{
			variant: 'tertiary',
			status: 'danger',
			class: [
				'bg-bg-button-tertiary-destructive-enable',
				'border-bg-button-tertiary-destructive-enable',
				'text-text-button-tertiary-destructive-enable',
				'[&_svg]:fill-icon-button-tertiary-destructive-enable',
				'hover:bg-bg-button-tertiary-destructive-hover',
				'hover:border-bg-button-tertiary-destructive-hover'
			]
		},
		{
			variant: 'ghost',
			status: 'danger',
			class: [
				'bg-bg-button-ghost-destructive-enable',
				'border-bg-button-ghost-destructive-enable',
				'text-text-button-ghost-destructive-enable',
				'[&_svg]:fill-icon-button-ghost-destructive-enable',
				'hover:bg-bg-button-ghost-destructive-hover',
				'hover:border-bg-button-ghost-destructive-hover'
			]
		},
		{
			variant: 'link',
			status: 'danger',
			class: [
				'text-text-button-link-destructive-enable',
				'[&_svg]:fill-icon-button-link-destructive-enable',
				'hover:text-text-button-link-destructive-hover',
				'hover:[&_svg]:fill-icon-button-link-destructive-hover'
			]
		},
		/* Destructive × variant × disabled */
		{
			variant: 'primary',
			status: 'danger',
			disabled: true,
			class: [
				'bg-bg-button-primary-destructive-disable',
				'border-bg-button-primary-destructive-disable',
				'text-text-button-primary-destructive-disable',
				'[&_svg]:fill-icon-button-primary-destructive-disable'
			]
		},
		{
			variant: 'secondary',
			status: 'danger',
			disabled: true,
			class: [
				'bg-bg-button-secondary-destructive-disable',
				'border-border-button-secondary-destructive-disable',
				'text-text-button-secondary-destructive-disable',
				'[&_svg]:fill-icon-button-secondary-destructive-disable'
			]
		},
		{
			variant: 'tertiary',
			status: 'danger',
			disabled: true,
			class: [
				'bg-bg-button-tertiary-destructive-disable',
				'border-bg-button-tertiary-destructive-disable',
				'text-text-button-tertiary-destructive-disable',
				'[&_svg]:fill-icon-button-tertiary-destructive-disable'
			]
		},
		{
			variant: 'ghost',
			status: 'danger',
			disabled: true,
			class: [
				'bg-bg-button-ghost-destructive-disable',
				'border-bg-button-ghost-destructive-disable',
				'text-text-button-ghost-destructive-disable',
				'[&_svg]:fill-icon-button-ghost-destructive-disable'
			]
		},
		{
			variant: 'link',
			status: 'danger',
			disabled: true,
			class: [
				'text-text-button-link-destructive-disable',
				'[&_svg]:fill-icon-button-link-destructive-disable'
			]
		},
		/* Link variant strips sizing regardless of `size` */
		{
			variant: 'link',
			size: ['xs', 'sm', 'md', 'lg'],
			class: 'h-auto min-w-[unset] px-0 py-0 gap-1 [&_svg]:mx-0'
		},
		/* Icon-only large renders at a bigger icon size */
		{
			hasOnlyIcon: true,
			size: 'lg',
			class: 'rounded-md [&_svg]:size-8'
		}
	],
	defaultVariants: {
		variant: 'primary',
		size: 'sm',
		align: 'center'
	}
});

/**
 * Visual hierarchy levels supported by Button.
 *
 * @summary Button variant union (`primary`, `secondary`, `tertiary`, `ghost`, `link`)
 */
export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link';

/**
 * Size scale supported by Button, from compact (`xs`) to prominent (`lg`).
 *
 * @summary Button size union (`xs`, `sm`, `md`, `lg`)
 */
export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';

type ButtonBaseProps = {
	/**
	 * Element the Button renders as. Defaults to `'button'`.
	 * - `'button'` — standard `<button>`, for actions that mutate state or trigger behavior.
	 * - `'a'` — plain `<a>`, for external links or when `next/link` is not desired.
	 * - `'link'` — Next.js `<Link>`, for client-side navigation within a Next app.
	 */
	as?: 'a' | 'link' | 'button';
	/**
	 * Visual hierarchy. Defaults to `'primary'`.
	 * - `primary` — main call-to-action; use once per view.
	 * - `secondary` — alternative action alongside a primary button.
	 * - `tertiary` — low-emphasis action, subtle background.
	 * - `ghost` — minimal background; use on tinted or dense surfaces.
	 * - `link` — inline text-style action; no padding or background.
	 */
	variant?: ButtonVariantType;
	/**
	 * Control size. Defaults to `'sm'`.
	 * - `xs` (24px) — dense toolbars, compact inline actions.
	 * - `sm` (32px) — standard usage in forms and cards.
	 * - `md` (40px) — prominent actions in modals or feature rows.
	 * - `lg` (48px) — hero CTAs and full-width mobile actions.
	 */
	size?: ButtonSizeType;
	/**
	 * Semantic status override. Set to `'danger'` for destructive actions
	 * (delete, remove, disconnect) — applies the destructive color treatment
	 * across all variants.
	 */
	status?: 'danger';
	/**
	 * When `true`, shows a spinner overlay and forces the button into a disabled
	 * state to block further interaction. Not supported with `variant="link"` —
	 * passing both throws at render time.
	 */
	loading?: boolean;
	/**
	 * Disables interaction and applies the disabled color treatment. Applied
	 * via className so it also affects `as="a"` / `as="link"` anchors that
	 * ignore the native `disabled` attribute.
	 */
	disabled?: boolean;
	/**
	 * When `true`, renders a fully pill-shaped button (rounded-full). Otherwise
	 * uses the variant's default corner radius.
	 */
	rounded?: boolean;
	/**
	 * Justifies children along the main axis. Defaults to `'center'`.
	 * Use `'justify'` to push leading and trailing icons to the edges.
	 */
	align?: 'center' | 'start' | 'end' | 'justify';
	/**
	 * When `true`, removes the per-size `min-width` floor so the button hugs
	 * its content. Useful for inline actions inside tight containers.
	 */
	fitContent?: boolean;
	/**
	 * Ref forwarded to the underlying element. Typed as a union covering both
	 * `<button>` and `<a>` to accommodate the polymorphic `as` prop.
	 */
	ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
};

/**
 * Button props when rendered as a native `<button>` element. Accepts all
 * standard `ButtonHTMLAttributes` in addition to the Button base props.
 *
 * @summary Button props specialized for `as="button"`
 */
export type ButtonAsButton = ButtonBaseProps &
	ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

/**
 * Button props when rendered as a plain `<a>` element. Use for external links
 * or contexts where Next.js client-side routing is not desired.
 *
 * @summary Button props specialized for `as="a"`
 */
export type ButtonAsAnchor = ButtonBaseProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' };

/**
 * Button props when rendered as a Next.js `<Link>`. Accepts `next/link`
 * `LinkProps` (including `href`, `prefetch`, `replace`) plus anchor attributes.
 *
 * @summary Button props specialized for `as="link"` (Next.js Link)
 */
export type ButtonAsLink = ButtonBaseProps &
	LinkProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'link' };

/**
 * Discriminated union of Button props across all three `as` targets.
 * TypeScript narrows to the correct attribute set based on the `as` value.
 *
 * @summary Union of Button props across `as="button" | "a" | "link"`
 */
export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

const ButtonLoading = () => (
	<span
		aria-label="loading"
		role="status"
		className={cn(
			'absolute inset-0 grid place-items-center',
			'rounded-[inherit] bg-inherit',
			'before:content-[""] before:block before:size-[1em]',
			'before:border-2 before:border-solid before:rounded-full',
			'before:border-current before:border-t-transparent',
			'before:animate-spin'
		)}
	/>
);

const processChildrenForTruncation = (children: ReactNode): ReactNode => {
	const childArray = Children.toArray(children);
	const hasOnlyIcon = childArray.every(value => isValidElement(value));

	if (hasOnlyIcon) {
		return children;
	}

	const textNodes: ReactNode[] = [];
	const result: ReactNode[] = [];

	childArray.forEach(child => {
		if (isValidElement(child)) {
			if (textNodes.length > 0) {
				result.push(
					<span key={`text-${result.length}`} data-slot="button-label">
						{textNodes.splice(0, textNodes.length)}
					</span>
				);
			}
			result.push(child);
		} else if (child) {
			textNodes.push(child);
		}
	});

	if (textNodes.length > 0) {
		result.push(
			<span key={`text-${result.length}`} data-slot="button-label">
				{textNodes}
			</span>
		);
	}

	return result;
};

/**
 * Button is the design system's primary actionable control. Use it for any
 * interaction that triggers behavior, submits a form, or navigates the user —
 * its polymorphic `as` prop renders a `<button>`, a plain `<a>`, or a Next.js
 * `<Link>` without changing the visual treatment.
 *
 * Pick `variant` to express hierarchy (`primary` for the main CTA,
 * `secondary` / `tertiary` for supporting actions, `ghost` on tinted
 * surfaces, `link` for inline text actions). Use `status="danger"` for
 * destructive actions and `loading` to block interaction while async work
 * resolves.
 *
 * Do **not** use Button for toggle states (prefer a Switch or ToggleButton),
 * for passive decorative anchors without action intent (use a plain `<a>`),
 * or with `variant="link"` when loading or when the button has no text
 * children — both combinations throw at render time.
 *
 * @summary Primary actionable control; renders button, anchor, or next/link
 *
 * @example
 * <Button variant="primary" size="sm" onClick={handleSave}>
 *   Save changes
 * </Button>
 *
 * @example
 * <Button as="link" href="/dashboard" variant="secondary">
 *   Go to dashboard
 * </Button>
 *
 * @example
 * <Button variant="primary" status="danger" loading={isDeleting} onClick={handleDelete}>
 *   Delete account
 * </Button>
 */
export const Button = ({
	children,
	as = 'button',
	variant,
	size,
	status,
	loading,
	rounded,
	align,
	fitContent,
	disabled,
	ref,
	className,
	...props
}: PropsWithChildren<ButtonProps>) => {
	const hasOnlyIcon = Children.toArray(children).every(value => isValidElement(value));
	const isDisabled = disabled || loading;

	if (loading && variant === 'link') {
		throw new Error('Button with variant link and loading is not supported');
	}

	if (hasOnlyIcon && variant === 'link') {
		throw new Error(
			'Button with no text and variant link is not supported. Use it with variant tertiary instead'
		);
	}

	const mergedClassName = cn(
		buttonStyle({
			variant,
			size,
			hasOnlyIcon,
			disabled: isDisabled,
			status,
			rounded,
			align,
			fitContent
		}),
		className
	);

	const content = (
		<>
			{loading && <ButtonLoading />}
			{processChildrenForTruncation(children)}
		</>
	);

	if (as === 'a') {
		return (
			<a
				data-slot="button"
				{...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
				className={mergedClassName}
				ref={ref as ForwardedRef<HTMLAnchorElement>}>
				{content}
			</a>
		);
	}

	if (as === 'link') {
		return (
			<Link
				data-slot="button"
				{...(props as LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>)}
				className={mergedClassName}
				ref={ref as ForwardedRef<HTMLAnchorElement>}>
				{content}
			</Link>
		);
	}

	return (
		<button
			data-slot="button"
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
			className={mergedClassName}
			disabled={isDisabled}
			ref={ref as ForwardedRef<HTMLButtonElement>}>
			{content}
		</button>
	);
};
