import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const TEXT = 'Button';

const VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost', 'link'] as const;
const SIZES = ['xs', 'sm', 'md', 'lg'] as const;
const NON_LINK_VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost'] as const;

const IconAdd = () => (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.25 12.75H6.25C6.0375 12.75 5.85938 12.6781 5.71563 12.5343C5.57187 12.3905 5.5 12.2123 5.5 11.9997C5.5 11.7871 5.57187 11.609 5.71563 11.4654C5.85938 11.3218 6.0375 11.25 6.25 11.25H11.25V6.25003C11.25 6.03753 11.3219 5.85941 11.4657 5.71566C11.6095 5.57191 11.7877 5.50003 12.0003 5.50003C12.2129 5.50003 12.391 5.57191 12.5346 5.71566C12.6782 5.85941 12.7499 6.03753 12.7499 6.25003V11.25H17.75C17.9625 11.25 18.1406 11.3219 18.2843 11.4657C18.4281 11.6095 18.5 11.7877 18.5 12.0003C18.5 12.2129 18.4281 12.391 18.2843 12.5346C18.1406 12.6782 17.9625 12.75 17.75 12.75H12.7499V17.75C12.7499 17.9625 12.6781 18.1406 12.5342 18.2844C12.3904 18.4281 12.2122 18.5 11.9997 18.5C11.787 18.5 11.609 18.4281 11.4654 18.2844C11.3218 18.1406 11.25 17.9625 11.25 17.75V12.75Z" />
	</svg>
);

const IconClose = () => (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M12 13.0538L6.92689 18.1269C6.78844 18.2654 6.6144 18.3362 6.40479 18.3394C6.19519 18.3426 6.01795 18.2718 5.87309 18.1269C5.7282 17.982 5.65576 17.8064 5.65576 17.6C5.65576 17.3936 5.7282 17.218 5.87309 17.0731L10.9462 12L5.87309 6.92689C5.73462 6.78844 5.66379 6.6144 5.66059 6.40479C5.65737 6.19519 5.7282 6.01795 5.87309 5.87309C6.01795 5.7282 6.19359 5.65576 6.39999 5.65576C6.60639 5.65576 6.78202 5.7282 6.92689 5.87309L12 10.9462L17.0731 5.87309C17.2115 5.73462 17.3856 5.66379 17.5952 5.66059C17.8048 5.65737 17.982 5.7282 18.1269 5.87309C18.2718 6.01795 18.3442 6.19359 18.3442 6.39999C18.3442 6.60639 18.2718 6.78202 18.1269 6.92689L13.0538 12L18.1269 17.0731C18.2654 17.2115 18.3362 17.3856 18.3394 17.5952C18.3426 17.8048 18.2718 17.982 18.1269 18.1269C17.982 18.2718 17.8064 18.3442 17.6 18.3442C17.3936 18.3442 17.218 18.2718 17.0731 18.1269L12 13.0538Z" />
	</svg>
);

const Row = ({ children }: { children: React.ReactNode }) => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			gap: '1rem'
		}}>
		{children}
	</div>
);

const Stack = ({ children }: { children: React.ReactNode }) => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>
);

/**
 * Button is the design system's primary actionable control. Pick `variant` to
 * express hierarchy, `size` for prominence, and `status="danger"` for
 * destructive actions. The polymorphic `as` prop renders a `<button>`, a plain
 * `<a>`, or a Next.js `<Link>` without changing the visual treatment.
 */
const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: 'text',
			table: { type: { summary: 'React.ReactNode' } }
		},
		variant: {
			control: 'radio',
			options: VARIANTS
		},
		size: {
			control: 'radio',
			options: SIZES
		},
		status: {
			control: 'radio',
			options: [undefined, 'danger']
		},
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		rounded: { control: 'boolean' }
	},
	args: {
		children: TEXT,
		variant: 'primary',
		size: 'sm'
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Args-controlled playground. Toggle `variant`, `size`, `status`, `loading`,
 * `disabled`, and `rounded` from the Controls panel to explore every visual
 * combination of the Button.
 *
 * @summary Default args playground for Button
 */
export const Default: Story = {};

/* --------------- Variants --------------- */

/**
 * All five variants at the default `sm` size. Variants express visual
 * hierarchy: `primary` for the main CTA, `secondary` / `tertiary` for
 * supporting actions, `ghost` on tinted surfaces, and `link` for inline
 * text actions.
 *
 * @summary All Button variants at default size
 */
export const Variants: Story = {
	render: () => (
		<Row>
			{VARIANTS.map(variant => (
				<Button key={variant} variant={variant}>
					{TEXT}
				</Button>
			))}
		</Row>
	)
};

/* --------------- Sizes --------------- */

/**
 * All four sizes at the default `primary` variant. Sizes scale from `xs`
 * (24px) for dense toolbars up to `lg` (48px) for hero CTAs.
 *
 * @summary All Button sizes at default variant
 */
export const Sizes: Story = {
	render: () => (
		<Row>
			{SIZES.map(size => (
				<Button key={size} size={size}>
					{TEXT}
				</Button>
			))}
		</Row>
	)
};

/* --------------- Disabled --------------- */

/**
 * Disabled state across all variants. Rendered as `<a>` elements to show the
 * disabled treatment applied via className (native anchors ignore the
 * `disabled` attribute, so Button handles this at the styling level).
 *
 * @summary Disabled treatment for every variant
 */
export const Disabled: Story = {
	render: () => (
		<Row>
			{VARIANTS.map(variant => (
				<Button as="a" key={variant} variant={variant} disabled>
					{TEXT}
				</Button>
			))}
		</Row>
	)
};

/* --------------- Icons --------------- */

/**
 * Variant × size grid with leading and trailing icons. Icons stay full-size
 * while text truncates — the Button wraps text runs in `<span data-slot=
 * "button-label">` so overflow ellipsizes the label without shrinking the
 * icons.
 *
 * @summary Variant × size grid with leading + trailing icons
 */
export const WithIcons: Story = {
	render: () => (
		<Stack>
			{VARIANTS.map(variant => (
				<Row key={variant}>
					{SIZES.map(size => (
						<Button key={size} variant={variant} size={size}>
							<IconAdd />
							{TEXT}
							<IconAdd />
						</Button>
					))}
				</Row>
			))}
		</Stack>
	)
};

/**
 * Icon-only buttons across the variant × size grid. Excludes `variant="link"`
 * — combining `link` with icon-only children throws at render time because
 * the link treatment has no padding to accommodate an icon alone.
 *
 * @summary Icon-only Button across variant × size (excluding `link`)
 */
export const OnlyIcon: Story = {
	render: () => (
		<Stack>
			{NON_LINK_VARIANTS.map(variant => (
				<Row key={variant}>
					{SIZES.map(size => (
						<Button key={size} variant={variant} size={size} aria-label="Close">
							<IconClose />
						</Button>
					))}
				</Row>
			))}
		</Stack>
	)
};

/* --------------- Loading --------------- */

/**
 * Loading state across the variant × size grid. Each row shows two buttons
 * per size: one icon-only, one with text. Loading forces `disabled` and
 * overlays a spinner that inherits the variant's text color. Excludes
 * `variant="link"` — combining `link` with `loading` throws at render time.
 *
 * @summary Loading state across variant × size (excluding `link`)
 */
export const Loading: Story = {
	render: () => (
		<Stack>
			{NON_LINK_VARIANTS.map(variant => (
				<Row key={variant}>
					{SIZES.map(size => (
						<div key={size} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
							<Button variant={variant} size={size} loading aria-label="Loading">
								<IconAdd />
							</Button>
							<Button variant={variant} size={size} loading>
								{TEXT}
							</Button>
						</div>
					))}
				</Row>
			))}
		</Stack>
	)
};

/* --------------- Status --------------- */

/**
 * Destructive treatment via `status="danger"`. The top row shows every
 * variant enabled; the bottom row shows every variant disabled. Use
 * `status="danger"` for delete, remove, or disconnect actions regardless of
 * variant.
 *
 * @summary `status="danger"` across every variant, enabled + disabled
 */
export const Status: Story = {
	render: () => (
		<Stack>
			<Row>
				{VARIANTS.map(variant => (
					<Button key={variant} variant={variant} status="danger">
						<IconAdd />
						{TEXT}
						<IconAdd />
					</Button>
				))}
			</Row>
			<Row>
				{VARIANTS.map(variant => (
					<Button as="a" key={variant} variant={variant} status="danger" disabled>
						<IconAdd />
						{TEXT}
						<IconAdd />
					</Button>
				))}
			</Row>
		</Stack>
	)
};

/* --------------- Rounded --------------- */

/**
 * Fully pill-shaped buttons across the variant × size grid. Excludes
 * `variant="link"` since the link treatment has no background to round.
 *
 * @summary `rounded` pill shape across variant × size (excluding `link`)
 */
export const Rounded: Story = {
	render: () => (
		<Stack>
			{NON_LINK_VARIANTS.map(variant => (
				<Row key={variant}>
					{SIZES.map(size => (
						<Button key={size} variant={variant} size={size} rounded>
							<IconAdd />
							{TEXT}
							<IconAdd />
						</Button>
					))}
				</Row>
			))}
		</Stack>
	)
};

/* --------------- Polymorphic --------------- */

/**
 * Polymorphic rendering via `as`. `as="link"` renders a Next.js `<Link>` for
 * client-side navigation, while `as="a"` renders a plain `<a>` for external
 * URLs. Both preserve the Button's visual treatment.
 *
 * @summary `as="link"` (next/link) and `as="a"` (anchor) examples
 */
export const AsLink: Story = {
	render: () => (
		<Row>
			<Button as="link" href="/dashboard" variant="primary">
				Go to dashboard
			</Button>
			<Button
				as="a"
				href="https://agentero.com"
				target="_blank"
				rel="noreferrer"
				variant="secondary">
				Visit Agentero
			</Button>
		</Row>
	)
};
