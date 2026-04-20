'use client';

import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren, Ref } from 'react';

import { cn } from '../../lib';

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
