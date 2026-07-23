'use client';

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
					className: cn(itemClassName, avatar.props.className)
				})
			)}
			{overflow > 0 && (
				<Avatar
					data-slot="avatar-group-overflow"
					size={size}
					variant={variant}
					fallback={`+${overflow}`}
					className={itemClassName}
				/>
			)}
		</div>
	);
};
