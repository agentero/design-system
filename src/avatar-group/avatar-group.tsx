import {
	Children,
	cloneElement,
	ComponentProps,
	ComponentPropsWithRef,
	isValidElement,
	ReactElement,
	ReactNode
} from 'react';

import { tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { Avatar } from '../avatar';

type AvatarSize = ComponentProps<typeof Avatar>['size'];
type AvatarVariant = ComponentProps<typeof Avatar>['variant'];

export const avatarGroupRecipe = tv({
	slots: {
		root: 'inline-flex items-center',
		// Overlap each avatar over the previous (reset on the first); the 2px ring is the
		// Avatar's own border, colored with the surface token so it tracks light/dark.
		item: 'relative first:ms-0 [--avatar-border-color:var(--color-bg-default-base-primary)] [--avatar-border-width:0.125rem]'
	},
	variants: {
		size: {
			xs: { item: '-ms-1.5' },
			sm: { item: '-ms-2' },
			md: { item: '-ms-2.5' },
			lg: { item: '-ms-3' },
			xl: { item: '-ms-3.5' },
			'2xl': { item: '-ms-4' },
			'3xl': { item: '-ms-4.5' },
			'4xl': { item: '-ms-5' }
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

const textOf = (node: ReactNode): string => {
	if (typeof node === 'string' || typeof node === 'number') return String(node);
	if (Array.isArray(node)) return node.map(textOf).join('');
	if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
	return '';
};

// Avatar hides its fallback from assistive technology. A grouped avatar has no
// name beside it, so the text of its fallback stays its accessible name, unless
// the caller names the avatar, marks it decorative, or it has a photo, which
// `alt` names. A role the caller set is kept: it is not a name.
const fallbackName = ({
	fallback,
	src,
	role = 'img',
	'aria-label': ariaLabel,
	'aria-labelledby': ariaLabelledBy
}: ComponentProps<typeof Avatar>) => {
	const text = textOf(fallback).trim();
	const isNamed = ariaLabel !== undefined || ariaLabelledBy !== undefined;
	const isDecorative = role === 'presentation' || role === 'none';

	return text && !src && !isNamed && !isDecorative ? { role, 'aria-label': text } : undefined;
};

export type AvatarGroupProps = Omit<ComponentPropsWithRef<'div'>, 'children'> & {
	children?: ReactNode;
	max?: number;
	size?: AvatarSize;
	/** Shape applied uniformly to every avatar and the `+N` bubble. Defaults to `circle`. */
	variant?: AvatarVariant;
};

/**
 * Stacks `<Avatar>` children into an overlapping row, collapsing everything past
 * `max` (default 3) into a trailing `+N` bubble. Pass `<Avatar>` elements
 * directly — the group clones each to force a uniform `size`/`variant` and the
 * overlap, so wrapped children won't pick those up.
 *
 * Avatar hides its fallback from assistive technology, and a grouped avatar has
 * no name beside it. The group therefore exposes an avatar without `src` as an
 * image named by the text of its fallback, and the `+N` bubble as an image
 * named `+N`. An icon fallback has no text, so it gets no name.
 * Initials are a poor name: give each avatar `role="img"` and an `aria-label`
 * with the person's name, and the group keeps them. An avatar with `src` is
 * named by its `alt` only, so it has no name if the photo fails to load.
 *
 * @summary Overlapping row of avatars, collapsing the rest into `+N`
 *
 * @example
 * <AvatarGroup size="sm" max={3}>
 * 	<Avatar fallback="AL" colorize="Ada Lovelace" />
 * 	<Avatar fallback="GH" colorize="Grace Hopper" />
 * 	<Avatar fallback="MK" colorize="Mary Kom" />
 * </AvatarGroup>
 */
export const AvatarGroup = ({
	children,
	max = 3,
	size = 'md',
	variant,
	className,
	ref,
	...props
}: AvatarGroupProps) => {
	const styles = avatarGroupRecipe({ size });
	const itemClassName = styles.item();

	const avatars = Children.toArray(children).filter(isValidElement) as ReactElement<
		ComponentProps<typeof Avatar>
	>[];
	const visible = avatars.slice(0, Math.max(0, max));
	const overflow = avatars.length - visible.length;

	return (
		<div ref={ref} data-slot="avatar-group" {...props} className={cn(styles.root(), className)}>
			{visible.map(avatar =>
				cloneElement(avatar, {
					size,
					variant,
					className: cn(itemClassName, avatar.props.className),
					...fallbackName(avatar.props)
				})
			)}
			{overflow > 0 && (
				<Avatar
					data-slot="avatar-group-overflow"
					role="img"
					aria-label={`+${overflow}`}
					size={size}
					variant={variant}
					fallback={`+${overflow}`}
					className={itemClassName}
				/>
			)}
		</div>
	);
};
