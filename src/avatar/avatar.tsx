'use client';

import { ComponentPropsWithRef, createContext, ReactNode, use } from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';

/**
 * Style recipe for Avatar using tailwind-variants.
 * Defines slots (`root`, `image`, `fallback`) and variants (`size`, `variant`).
 * Customize avatar appearance by composing these slots and variants.
 */
export const avatarRecipe = tv({
	slots: {
		root: [
			'flex items-center justify-center align-middle',
			'overflow-hidden select-none box-border',
			'shrink-0 relative font-inherit',
			'm-0 outline-none p-0 font-semibold',
			'text-text-default-base-primary bg-bg-default-base-primary',
			'border-solid border-[length:var(--avatar-border-width,1px)]',
			'border-[var(--avatar-border-color,var(--color-border-default-base-primary))]',
			'h-fit w-fit'
		],
		image: ['flex object-cover box-border h-full vertical-align-middle w-full'],
		fallback: ['uppercase', '[&_svg]:size-[1.5em] [&_svg]:fill-neutral-500']
	},
	variants: {
		size: {
			xs: {
				root: 'size-6',
				fallback: 'text-xs leading-[1.125rem] [&_svg]:size-[0.9375rem]'
			},
			sm: {
				root: 'size-8',
				fallback: 'text-sm'
			},
			md: {
				root: 'size-10',
				fallback: 'text-base'
			},
			lg: {
				root: 'size-12',
				fallback: 'text-lg'
			},
			xl: {
				root: 'size-16',
				fallback: 'text-[1.375rem]'
			},
			'2xl': {
				root: 'size-20',
				fallback: 'text-[1.625rem]'
			},
			'3xl': {
				root: 'size-24',
				fallback: 'text-[2rem]'
			},
			'4xl': {
				root: 'size-32',
				fallback: 'text-[3rem]'
			}
		},
		variant: {
			circle: { root: 'rounded-full' },
			square: { root: 'rounded-md' },
			pillow: {
				root: [
					'rounded-[38.5%]',
					'[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==)]',
					'[mask-size:contain]'
				]
			},
			pentagon: {
				root: [
					'!border-none',
					'[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjU2NTcgMC4yNTA5NzdDMTUuODM0OCAtMC4wODM2NTk0IDE3LjE2NTggLTAuMDgzNjU4NCAxOC40MzQ4IDAuMjUwOTc3QzE5Ljg5NDIgMC42MzU4OCAyMS4yMTMzIDEuNjMwODkgMjMuNjM0IDMuNDM3NUwyNy4yNDQ0IDYuMTMxODRDMjkuNjY3IDcuOTM5OCAzMC45OTMyIDguOTE5NzcgMzEuNzk4MSAxMC4yMjI3QzMyLjQ5NzcgMTEuMzU1IDMyLjkwNzYgMTIuNjQ5OCAzMi45ODk1IDEzLjk4NjNDMzMuMDgzNSAxNS41MjI3IDMyLjU3MjQgMTcuMTExOSAzMS42NDY3IDIwLjAzODFMMzAuMjY3OCAyNC4zOTc1QzI5LjM0MjUgMjcuMzIyNyAyOC44NDU4IDI4LjkxODIgMjcuODg4OSAzMC4xMDY0QzI3LjA1NjEgMzEuMTQwNiAyNS45ODA4IDMxLjk0MzIgMjQuNzYzIDMyLjQzODVDMjMuMzYxNSAzMy4wMDg0IDIxLjcyMzggMzMgMTguNzMxNyAzM0gxNC4yNjg4QzExLjI3NjcgMzMgOS42MzkwNCAzMy4wMDg0IDguMjM3NiAzMi40Mzg1QzcuMDE5NzUgMzEuOTQzMiA1Ljk0NDQ4IDMxLjE0MDYgNS4xMTE2MiAzMC4xMDY0QzQuMTU0NzIgMjguOTE4MiAzLjY1ODAyIDI3LjMyMjcgMi43MzI3MiAyNC4zOTc1TDEuMzUzODEgMjAuMDM4MUMwLjQyODE4NyAxNy4xMTE5IC0wLjA4Mjk0NiAxNS41MjI3IDAuMDExMDM5IDEzLjk4NjNDMC4wOTI5MDMgMTIuNjQ5OCAwLjUwMjg4MSAxMS4zNTUgMS4yMDI0NCAxMC4yMjI3QzIuMDA3NCA4LjkxOTc3IDMuMzMzNTggNy45Mzk4IDUuNzU2MTYgNi4xMzE4NEw5LjM2NjUxIDMuNDM3NUMxMS43ODcyIDEuNjMwODkgMTMuMTA2MyAwLjYzNTg4IDE0LjU2NTcgMC4yNTA5NzdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)]',
					'[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]',
					'after:content-[""] after:absolute after:inset-0 after:pointer-events-none after:z-[1]',
					'after:bg-[var(--avatar-border-color,var(--color-border-default-base-primary))]',
					'after:[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMC41IC0wLjUgMzQgMzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjU2NTcgMC4yNTA5NzdDMTUuODM0OCAtMC4wODM2NTk0IDE3LjE2NTggLTAuMDgzNjU4NCAxOC40MzQ4IDAuMjUwOTc3QzE5Ljg5NDIgMC42MzU4OCAyMS4yMTMzIDEuNjMwODkgMjMuNjM0IDMuNDM3NUwyNy4yNDQ0IDYuMTMxODRDMjkuNjY3IDcuOTM5OCAzMC45OTMyIDguOTE5NzcgMzEuNzk4MSAxMC4yMjI3QzMyLjQ5NzcgMTEuMzU1IDMyLjkwNzYgMTIuNjQ5OCAzMi45ODk1IDEzLjk4NjNDMzMuMDgzNSAxNS41MjI3IDMyLjU3MjQgMTcuMTExOSAzMS42NDY3IDIwLjAzODFMMzAuMjY3OCAyNC4zOTc1QzI5LjM0MjUgMjcuMzIyNyAyOC44NDU4IDI4LjkxODIgMjcuODg4OSAzMC4xMDY0QzI3LjA1NjEgMzEuMTQwNiAyNS45ODA4IDMxLjk0MzIgMjQuNzYzIDMyLjQzODVDMjMuMzYxNSAzMy4wMDg0IDIxLjcyMzggMzMgMTguNzMxNyAzM0gxNC4yNjg4QzExLjI3NjcgMzMgOS42MzkwNCAzMy4wMDg0IDguMjM3NiAzMi40Mzg1QzcuMDE5NzUgMzEuOTQzMiA1Ljk0NDQ4IDMxLjE0MDYgNS4xMTE2MiAzMC4xMDY0QzQuMTU0NzIgMjguOTE4MiAzLjY1ODAyIDI3LjMyMjcgMi43MzI3MiAyNC4zOTc1TDEuMzUzODEgMjAuMDM4MUMwLjQyODE4NyAxNy4xMTE5IC0wLjA4Mjk0NiAxNS41MjI3IDAuMDExMDM5IDEzLjk4NjNDMC4wOTI5MDMgMTIuNjQ5OCAwLjUwMjg4MSAxMS4zNTUgMS4yMDI0NCAxMC4yMjI3QzIuMDA3NCA4LjkxOTc3IDMuMzMzNTggNy45Mzk4IDUuNzU2MTYgNi4xMzE4NEw5LjM2NjUxIDMuNDM3NUMxMS43ODcyIDEuNjMwODkgMTMuMTA2MyAwLjYzNTg4IDE0LjU2NTcgMC4yNTA5NzdaIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiIHZlY3Rvci1lZmZlY3Q9Im5vbi1zY2FsaW5nLXN0cm9rZSIvPjwvc3ZnPg==)]',
					'after:[mask-size:100%_100%] after:[mask-repeat:no-repeat] after:[mask-position:center]'
				]
			}
		}
	},
	defaultVariants: {
		size: 'md',
		variant: 'circle'
	}
});

type AvatarVariants = VariantProps<typeof avatarRecipe>;
type AvatarSlotsStyles = ReturnType<typeof avatarRecipe>;

/* --------------- Contexts --------------- */

type AvatarContextValue = AvatarVariants & {
	slotsStyles: AvatarSlotsStyles;
};

const AvatarContext = createContext<AvatarContextValue | null>(null);

/**
 * Returns the current Avatar context including variant props and computed slot styles.
 * Must be called within an `AvatarRoot` (or `Avatar`) component tree.
 *
 * @summary Access avatar context for size, variant, and slot styles
 */
export const useAvatar = () => {
	const context = use(AvatarContext);
	if (!context) {
		throw new Error('useAvatar must be used within an AvatarProvider');
	}
	return context;
};

/* --------------- Root --------------- */

type AvatarRootProps = ComponentPropsWithRef<typeof AvatarPrimitive.Root> & AvatarVariants;

const AvatarRoot = ({ size, variant, ...props }: AvatarRootProps) => {
	const styles = avatarRecipe({ size, variant });

	return (
		<AvatarContext value={{ size, variant, slotsStyles: styles }}>
			<AvatarPrimitive.Root {...props} className={cn(styles.root(), props.className)} />
		</AvatarContext>
	);
};

/* --------------- Image --------------- */

type AvatarImageProps = ComponentPropsWithRef<typeof AvatarPrimitive.Image>;

const AvatarImage = (props: AvatarImageProps) => {
	const { slotsStyles } = useAvatar();
	return <AvatarPrimitive.Image {...props} className={cn(slotsStyles.image(), props.className)} />;
};

/* --------------- Fallback --------------- */

type AvatarFallbackProps = ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>;

const AvatarFallback = (props: AvatarFallbackProps) => {
	const { slotsStyles } = useAvatar();
	return (
		<AvatarPrimitive.Fallback {...props} className={cn(slotsStyles.fallback(), props.className)} />
	);
};

type AvatarProps = ComponentPropsWithRef<typeof AvatarPrimitive.Root> & {
	/** Accessible alt text describing the avatar image. Required when `src` is provided. */
	alt?: string;
	/** Image URL to display. When unavailable or loading fails, `fallback` content is shown instead. */
	src?: string;
	/** Content rendered when `src` is missing or fails to load. Typically user initials (e.g., "JD") or an icon. */
	fallback?: ReactNode;
	/**
	 * Controls the avatar dimensions. Defaults to `'md'` (40px).
	 * - `xs` (24px) — inline indicators, dense lists
	 * - `sm` (32px) — compact layouts, table rows
	 * - `md` (40px) — standard usage, cards, headers
	 * - `lg` (48px) — profile sections, detail views
	 * - `xl` (64px) — hero sections, prominent display
	 * - `2xl` (80px), `3xl` (96px), `4xl` (128px) — large feature areas, profile pages
	 */
	size?: AvatarVariants['size'];
	/**
	 * Shape of the avatar container. Defaults to `'circle'`.
	 * - `circle` — standard round avatar for user photos
	 * - `square` — rounded rectangle, suitable for workspace or team icons
	 * - `pillow` — soft, organic squircle shape
	 * - `pentagon` — distinctive five-sided shape for unique visual identity
	 */
	variant?: AvatarVariants['variant'];
};

/**
 * Avatar displays a user's profile image, initials, or a fallback icon.
 * Use Avatar for user identification in lists, headers, cards, and comment threads.
 *
 * Do **not** use Avatar for decorative images or thumbnails unrelated to a person
 * or entity — use a standard `<img>` or a Thumbnail component instead.
 *
 * Renders an image when `src` is provided; otherwise displays `fallback` content
 * (typically initials or an icon). Built on Radix UI Avatar primitives.
 *
 * Available shapes: `circle` (default), `square`, `pillow`, and `pentagon`.
 * Sizes range from `xs` (24px) to `4xl` (128px), defaulting to `md` (40px).
 *
 * @summary Displays a user's profile image, initials, or fallback icon
 *
 * @example
 * <Avatar src="/photos/jane.jpg" alt="Jane Doe" size="md" variant="circle" />
 *
 * @example
 * <Avatar fallback="JD" size="lg" variant="square" />
 */
export const Avatar = ({ alt, src, fallback, size, variant, ref, ...props }: AvatarProps) => {
	return (
		<AvatarRoot {...props} ref={ref} size={size} variant={variant}>
			<AvatarImage alt={alt} src={src} />
			<AvatarFallback>{fallback}</AvatarFallback>
		</AvatarRoot>
	);
};
