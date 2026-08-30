'use client';

import { ComponentPropsWithRef, createContext, use } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

export const cardRecipe = tv({
	slots: {
		root: 'flex flex-col overflow-clip rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-xs',
		header: 'flex flex-col',
		body: 'flex flex-col',
		footer: 'flex items-center gap-3'
	},
	variants: {
		// `none` drops root padding and turns sections into divider-separated
		// bands; `md` / `lg` pad the root and gap the sections instead.
		spacing: {
			none: {
				header: 'border-b border-border-default-base-primary px-6 py-4',
				body: 'p-6',
				footer: 'border-t border-border-default-base-primary px-6 py-4'
			},
			md: {
				root: 'gap-4 p-6'
			},
			lg: {
				root: 'gap-6 p-10'
			}
		}
	},
	defaultVariants: {
		spacing: 'md'
	}
});

type CardVariants = VariantProps<typeof cardRecipe>;
export type CardSpacingType = NonNullable<CardVariants['spacing']>;

const CardContext = createContext<ReturnType<typeof cardRecipe> | null>(null);

const useCard = () => {
	const styles = use(CardContext);
	if (!styles) {
		throw new Error('Card sub-components must be used within a Card');
	}
	return styles;
};

const CardHeader = ({ className, children, ...props }: ComponentPropsWithRef<'div'>) => {
	const styles = useCard();
	return (
		<div data-slot="card-header" {...props} className={cn(styles.header(), className)}>
			{children}
		</div>
	);
};
CardHeader.displayName = 'Card.Header';

const CardBody = ({ className, children, ...props }: ComponentPropsWithRef<'div'>) => {
	const styles = useCard();
	return (
		<div data-slot="card-body" {...props} className={cn(styles.body(), className)}>
			{children}
		</div>
	);
};
CardBody.displayName = 'Card.Body';

const CardFooter = ({ className, children, ...props }: ComponentPropsWithRef<'div'>) => {
	const styles = useCard();
	return (
		<div data-slot="card-footer" {...props} className={cn(styles.footer(), className)}>
			{children}
		</div>
	);
};
CardFooter.displayName = 'Card.Footer';

type CardProps = ComponentPropsWithRef<'div'> & {
	/** Internal spacing: `none` (divider-separated bands), `md` (default), `lg`. */
	spacing?: CardSpacingType;
	/** Render the single child element instead of a `<div>` (via Radix `Slot`) — e.g. an `<article>`, `<section>`, or `<a>`. */
	asChild?: boolean;
};

/**
 * Surface container — border, radius, and shadow — with optional
 * `Card.Header` / `Card.Body` / `Card.Footer` sections. No fixed width and no
 * built-in content: size it from the parent and compose whatever you need.
 * Pass `asChild` to render a semantic element (`<article>`, `<section>`) or an
 * anchor instead of the default `<div>`.
 */
export const Card = ({ spacing = 'md', asChild, className, children, ...props }: CardProps) => {
	const styles = cardRecipe({ spacing });
	const Comp = asChild ? Slot : 'div';

	return (
		<CardContext value={styles}>
			<Comp data-slot="card-root" {...props} className={cn(styles.root(), className)}>
				{children}
			</Comp>
		</CardContext>
	);
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
