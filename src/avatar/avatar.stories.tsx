import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './avatar';

/**
 * Avatar displays a user's profile image, initials, or a fallback icon.
 * Use for user identification in lists, headers, cards, and comment threads.
 * Supports multiple shapes (`circle`, `square`, `pillow`, `pentagon`) and
 * sizes from `xs` (24px) to `4xl` (128px).
 */
const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']
		},
		variant: {
			control: 'radio',
			options: ['circle', 'square', 'pillow', 'pentagon']
		}
	},
	args: {
		fallback: 'JD',
		size: 'md',
		variant: 'circle'
	}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default avatar with fallback initials. Renders as a medium circle
 * when no image source is provided.
 *
 * @summary Default avatar with fallback initials
 */
export const Default: Story = {};

/**
 * Avatar displaying a user profile photo. The image fills the avatar shape
 * and the fallback is hidden while the image loads successfully.
 *
 * @summary Avatar with a profile image
 */
export const WithImage: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop',
		alt: 'Alex Morgan'
	}
};

/**
 * When the image fails to load, the fallback content is displayed.
 * Pass initials, an icon, or any ReactNode as the `fallback` prop.
 *
 * @summary Fallback content shown when image is unavailable
 */
export const WithFallbackInitials: Story = {
	args: {
		src: 'https://broken-url.example/photo.jpg',
		fallback: 'AM'
	}
};

/* --------------- Variants --------------- */

/**
 * The circle variant is the default shape, ideal for user profile photos.
 *
 * @summary Circle-shaped avatar (default)
 */
export const Circle: Story = {
	args: {
		variant: 'circle',
		fallback: 'CR'
	}
};

/**
 * The square variant uses a rounded rectangle, suitable for workspace,
 * team, or organization icons.
 *
 * @summary Square-shaped avatar for workspaces
 */
export const Square: Story = {
	args: {
		variant: 'square',
		fallback: 'WS'
	}
};

/**
 * The pillow variant uses a soft, organic squircle shape for a
 * friendly and distinctive appearance.
 *
 * @summary Pillow-shaped avatar with organic squircle
 */
export const Pillow: Story = {
	args: {
		variant: 'pillow',
		fallback: 'PL'
	}
};

/**
 * The pentagon variant uses a five-sided mask for a unique visual identity.
 * Note: the border is hidden in this variant due to the mask shape.
 *
 * @summary Pentagon-shaped avatar for unique identity
 */
export const Pentagon: Story = {
	args: {
		variant: 'pentagon',
		fallback: 'PT'
	}
};

/* --------------- Sizes --------------- */

/**
 * Extra-small avatar (24px) for dense lists and inline indicators.
 *
 * @summary Extra-small 24px avatar
 */
export const SizeXs: Story = {
	args: { size: 'xs', fallback: 'XS' }
};

/**
 * Small avatar (32px) for compact layouts and table rows.
 *
 * @summary Small 32px avatar
 */
export const SizeSm: Story = {
	args: { size: 'sm', fallback: 'SM' }
};

/**
 * Large avatar (48px) for profile sections and detail views.
 *
 * @summary Large 48px avatar
 */
export const SizeLg: Story = {
	args: { size: 'lg', fallback: 'LG' }
};

/**
 * Extra-large avatar (64px) for hero sections and prominent display.
 *
 * @summary Extra-large 64px avatar
 */
export const SizeXl: Story = {
	args: { size: 'xl', fallback: 'XL' }
};

/* --------------- Showcases --------------- */

/**
 * All available sizes displayed together for visual comparison.
 * Sizes range from `xs` (24px) to `4xl` (128px).
 *
 * @summary Visual comparison of all avatar sizes
 */
export const AllSizes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			{(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => (
				<Avatar key={size} size={size} fallback={size.toUpperCase()} />
			))}
		</div>
	)
};

/**
 * All available shape variants displayed together for visual comparison.
 * Each variant serves a different use case: user photos, workspaces,
 * friendly branding, and unique identity.
 *
 * @summary Visual comparison of all avatar shapes
 */
export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			{(['circle', 'square', 'pillow', 'pentagon'] as const).map(variant => (
				<Avatar
					key={variant}
					size="lg"
					variant={variant}
					fallback={variant.slice(0, 2).toUpperCase()}
				/>
			))}
		</div>
	)
};
