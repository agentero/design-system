'use client';

import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren, Ref } from 'react';

import { tv } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for Button using tailwind-variants.
 * Defines a single-slot recipe with variants (`variant`, `size`, `status`,
 * `hasOnlyIcon`, `disabled`, `rounded`, `align`, `fitContent`) plus
 * compound variants for destructive and disabled states.
 *
 * Ported 1:1 from the legacy Panda `cva` recipe in `@agentero/ui`. All
 * colors route through design-system tokens defined in `themes/base.css`.
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

export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link';
export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg';

type ButtonBaseProps = {
	as?: 'a' | 'link' | 'button';
	variant?: ButtonVariantType;
	size?: ButtonSizeType;
	status?: 'danger';
	loading?: boolean;
	disabled?: boolean;
	rounded?: boolean;
	align?: 'center' | 'start' | 'end' | 'justify';
	fitContent?: boolean;
	ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
};

export type ButtonAsButton = ButtonBaseProps &
	ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

export type ButtonAsAnchor = ButtonBaseProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' };

export type ButtonAsLink = ButtonBaseProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'link'; href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export const Button = ({
	children,
	as: _as,
	variant: _variant,
	size: _size,
	status: _status,
	loading: _loading,
	rounded: _rounded,
	align: _align,
	fitContent: _fitContent,
	disabled,
	ref,
	className,
	...props
}: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			data-slot="button"
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
			disabled={disabled}
			ref={ref as Ref<HTMLButtonElement>}
			className={cn(className)}>
			{children}
		</button>
	);
};
