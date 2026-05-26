import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './avatar';

/**
 * Avatar displays a user's profile image, initials, or a fallback icon.
 * Use for user identification in lists, headers, cards, and comment threads.
 * Supports multiple shapes (`circle`, `square`, `pillow`, `pentagon`),
 * content types (`photo`, `initials`, `isotype`), and sizes from `xs` (24px)
 * to `4xl` (128px).
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
		},
		type: {
			control: 'radio',
			options: ['photo', 'initials', 'isotype'],
			description:
				'Content type the avatar represents. `photo` fills the shape, `initials` shows text, `isotype` renders a brand icon smaller than the shape so it sits centered inside.'
		}
	},
	args: {
		fallback: 'JD',
		size: 'md',
		variant: 'circle',
		type: 'photo'
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
		src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
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

/* --------------- Types --------------- */

/**
 * The `photo` type is the default. The image fills the avatar shape edge-to-edge,
 * which is ideal for user profile photographs.
 *
 * @summary Photo type fills the avatar shape edge-to-edge
 */
export const TypePhoto: Story = {
	args: {
		type: 'photo',
		src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
		alt: 'Alex Morgan',
		fallback: 'AM'
	}
};

/**
 * The `initials` type is intended when no image is available and the avatar
 * stands in for a user with their initials. The fallback text is centered
 * within the avatar shape.
 *
 * @summary Initials type for users without a profile photo
 */
export const TypeInitials: Story = {
	args: {
		type: 'initials',
		fallback: 'JD'
	}
};

/**
 * The `isotype` type renders the image smaller than the avatar shape so a
 * brand or organization icon sits centered inside the container rather than
 * filling it. Use for workspace, team, or company avatars where a logo
 * should remain legible inside the bounding shape.
 *
 * @summary Isotype type centers a brand icon inside the shape
 */
export const TypeIsotype: Story = {
	args: {
		type: 'isotype',
		variant: 'square',
		src: 'https://cdn.simpleicons.org/figma',
		alt: 'Figma',
		fallback: 'FG'
	}
};

/**
 * All content types shown side by side: `photo` fills the shape, `initials`
 * centers text, and `isotype` shrinks a brand icon inside the bounding shape.
 *
 * @summary Visual comparison of all avatar content types
 */
export const AllTypes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			<Avatar
				size="lg"
				type="photo"
				src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
				alt="Alex Morgan"
				fallback="AM"
			/>
			<Avatar size="lg" type="initials" fallback="JD" />
			<Avatar
				size="lg"
				type="isotype"
				variant="square"
				src="https://cdn.simpleicons.org/figma"
				alt="Figma"
				fallback="FG"
			/>
		</div>
	)
};

/**
 * The isotype icon scales proportionally smaller than the avatar shape at
 * every size, keeping a consistent inset around the logo from `xs` (24px)
 * to `4xl` (128px).
 *
 * @summary Isotype scaling across all avatar sizes
 */
export const AllSizesIsotype: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			{(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => (
				<Avatar
					key={size}
					size={size}
					type="isotype"
					variant="square"
					src="https://cdn.simpleicons.org/figma"
					alt="Figma"
					fallback="FG"
				/>
			))}
		</div>
	)
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

/* --------------- Colorize --------------- */

/**
 * The `colorize` prop deterministically maps a string (typically a user name)
 * to a color from the palette, applying a tinted background and matching
 * text color. Useful for distinguishing users in lists without profile photos.
 *
 * @summary Colorized avatar based on user name
 */
export const Colorized: Story = {
	args: {
		colorize: 'jane doe',
		fallback: 'JD'
	}
};

/**
 * Multiple colorized avatars showing how different names map to different
 * colors from the palette for visual distinction.
 *
 * @summary Multiple colorized avatars for visual distinction
 */
export const AllColorized: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			{['alice', 'bob', 'carol', 'dave', 'eve', 'frank', 'grace', 'henry', 'iris'].map(name => (
				<Avatar key={name} size="lg" colorize={name} fallback={name.slice(0, 2).toUpperCase()} />
			))}
		</div>
	)
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
 * All sizes with a profile image to verify image scaling and quality
 * across the full size range from `xs` (24px) to `4xl` (128px).
 *
 * @summary All avatar sizes with a profile image
 */
export const AllSizesWithImage: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			{(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(size => (
				<Avatar
					key={size}
					size={size}
					src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
					alt="Alex Morgan"
					fallback="AM"
				/>
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

/**
 * All shape variants with a profile image to show how each mask clips
 * the photo. Particularly useful for verifying the pentagon mask and
 * pillow shape render correctly with real imagery.
 *
 * @summary All avatar shapes with a profile image
 */
export const AllVariantsWithImage: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			{(['circle', 'square', 'pillow', 'pentagon'] as const).map(variant => (
				<Avatar
					key={variant}
					size="lg"
					variant={variant}
					src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
					alt="Alex Morgan"
					fallback="AM"
				/>
			))}
		</div>
	)
};
