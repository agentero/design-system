import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const TEXT = 'Button';

const VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost', 'link'] as const;
const SIZES = ['xs', 'sm', 'md', 'lg'] as const;
const NON_LINK_VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost'] as const;

const IconAdd = () => (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
	</svg>
);

const IconClose = () => (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.41 4.29 19.7l-1.41-1.41L9.17 12 2.88 5.71 4.29 4.29 10.59 10.59l6.3-6.3z" />
	</svg>
);

const Row = ({ children }: { children: React.ReactNode }) => (
	<div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
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
