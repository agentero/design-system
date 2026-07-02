import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Tag, TagColor, TagVariant } from './tag';

const COLORS = [
	'neutral',
	'positive',
	'danger',
	'warning',
	'informative',
	'creative',
	'dynamic',
	'playful'
] as const satisfies readonly TagColor[];

const VARIANTS = [
	'secondary',
	'tertiary',
	'ghost',
	'invisible'
] as const satisfies readonly TagVariant[];

const IconAdd = () => (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M11.25 12.75H6.25C6.0375 12.75 5.85938 12.6781 5.71563 12.5343C5.57187 12.3905 5.5 12.2123 5.5 11.9997C5.5 11.7871 5.57187 11.609 5.71563 11.4654C5.85938 11.3218 6.0375 11.25 6.25 11.25H11.25V6.25003C11.25 6.03753 11.3219 5.85941 11.4657 5.71566C11.6095 5.57191 11.7877 5.50003 12.0003 5.50003C12.2129 5.50003 12.391 5.57191 12.5346 5.71566C12.6782 5.85941 12.7499 6.03753 12.7499 6.25003V11.25H17.75C17.9625 11.25 18.1406 11.3219 18.2843 11.4657C18.4281 11.6095 18.5 11.7877 18.5 12.0003C18.5 12.2129 18.4281 12.391 18.2843 12.5346C18.1406 12.6782 17.9625 12.75 17.75 12.75H12.7499V17.75C12.7499 17.9625 12.6781 18.1406 12.5342 18.2844C12.3904 18.4281 12.2122 18.5 11.9997 18.5C11.787 18.5 11.609 18.4281 11.4654 18.2844C11.3218 18.1406 11.25 17.9625 11.25 17.75V12.75Z" />
	</svg>
);

const Row = ({ children }: { children: React.ReactNode }) => (
	<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
		{children}
	</div>
);

const Stack = ({ gap = '1rem', children }: { gap?: string; children: React.ReactNode }) => (
	<div style={{ display: 'flex', flexDirection: 'column', gap }}>{children}</div>
);

/**
 * Tag is a compact semantic label for statuses, categories, counts, and
 * attributes. Pick `color` for meaning, `variant` for fill emphasis, and
 * `size` for prominence. A plain Tag is a static badge; pass `asChild` to make
 * it an interactive link or button, which adds the pointer cursor and hover fill.
 */
const meta = {
	title: 'Components/Tag',
	component: Tag,
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: 'text',
			table: { type: { summary: 'React.ReactNode' } }
		},
		color: { control: 'select', options: COLORS },
		variant: { control: 'select', options: VARIANTS },
		size: { control: 'radio', options: ['xs', 'sm', 'md'] },
		pill: { control: 'boolean' },
		truncate: { control: 'boolean' }
	},
	args: {
		children: 'Default',
		color: 'neutral',
		variant: 'secondary',
		size: 'sm'
	}
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Args-controlled playground. Toggle `color`, `variant`, `size`, `pill`, and
 * `truncate` from the Controls panel to explore every visual combination.
 *
 * @summary Default args playground for Tag
 */
export const Default: Story = {};

/**
 * The three sizes — `xs` (20px), `sm` (24px, default), and `md` (32px) — each
 * shown icon-only, icon + text, and text-only so the type and icon scale are
 * visible.
 *
 * @summary All three sizes across icon-only, icon + text, and text-only
 */
export const Sizes: Story = {
	render: () => (
		<Stack>
			{(['xs', 'sm', 'md'] as const).map(size => (
				<Stack gap="0.5rem" key={size}>
					<strong>{size}:</strong>
					<Row>
						<Tag
							size={size}
							color="informative"
							variant="secondary"
							role="img"
							aria-label={`${size} icon only`}>
							<IconAdd />
						</Tag>
						<Tag size={size} color="informative" variant="secondary">
							<IconAdd />
							{size}
						</Tag>
						<Tag size={size} color="informative" variant="secondary">
							{size}
						</Tag>
					</Row>
				</Stack>
			))}
		</Stack>
	)
};

/**
 * The `Style` axis: the default rounded corners (top row) versus `pill` fully
 * rounded (bottom row), shown across every fill variant.
 *
 * @summary Rounded (default) vs pill
 */
export const Styles: Story = {
	render: () => (
		<Stack gap="0.5rem">
			<Row>
				{VARIANTS.map(variant => (
					<Tag key={variant} color="informative" variant={variant}>
						{variant}
					</Tag>
				))}
			</Row>
			<Row>
				{VARIANTS.map(variant => (
					<Tag key={variant} color="informative" variant={variant} pill>
						{variant}
					</Tag>
				))}
			</Row>
		</Stack>
	)
};

/**
 * Static badge vs interactive Tag. A plain `<span>` badge has no hover; pass
 * `asChild` with a `<button>` (or `<a>`) to make it interactive — that adds the
 * pointer cursor and reveals the hover fill on `:hover`. Hover the middle and
 * right Tags to see it.
 *
 * @summary Static badge vs interactive (asChild) hover
 */
export const Interactive: Story = {
	render: () => (
		<Row>
			<Tag color="informative" variant="secondary">
				badge
			</Tag>
			<Tag color="informative" variant="secondary" asChild>
				<button type="button">interactive</button>
			</Tag>
			<Tag color="informative" variant="secondary" asChild aria-label="add">
				<button type="button">
					<IconAdd />
				</button>
			</Tag>
		</Row>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('badge');
		const button = canvas.getByRole('button', { name: 'interactive' });

		expect(badge.className).not.toContain('hover:bg-bg-tag');
		expect(button).toHaveAttribute('data-slot', 'tag');
		expect(button.className).toContain('hover:bg-bg-tag-informative-hover');
		await userEvent.hover(button);
	}
};

/**
 * `secondary` fills with a tinted background plus a matching border, shown
 * across every color.
 *
 * @summary `secondary` variant across all colors
 */
export const Secondary: Story = {
	render: () => (
		<Row>
			{COLORS.map(color => (
				<Tag key={color} variant="secondary" color={color}>
					{color}
				</Tag>
			))}
		</Row>
	),
	play: ({ canvasElement }) => {
		const positive = within(canvasElement).getByText('positive');
		expect(getComputedStyle(positive).backgroundColor).toBe('rgb(232, 252, 236)');
	}
};

/**
 * `tertiary` (default) fills with a tinted background and no border, shown
 * across every color.
 *
 * @summary `tertiary` variant across all colors
 */
export const Tertiary: Story = {
	render: () => (
		<Row>
			{COLORS.map(color => (
				<Tag key={color} variant="tertiary" color={color}>
					{color}
				</Tag>
			))}
		</Row>
	)
};

/**
 * `ghost` shows colored text alone with no background or border, across every
 * color.
 *
 * @summary `ghost` variant across all colors
 */
export const Ghost: Story = {
	render: () => (
		<Row>
			{COLORS.map(color => (
				<Tag key={color} variant="ghost" color={color}>
					{color}
				</Tag>
			))}
		</Row>
	)
};

/**
 * `invisible` stays fully transparent until hovered, then reveals its fill.
 * The top row renders plain `<span>` Tags; the bottom row renders interactive
 * Tags via `asChild` with a `<button>` child.
 *
 * @summary `invisible` variant as span and as interactive button
 */
export const Invisible: Story = {
	render: () => (
		<Stack gap="0.5rem">
			<Row>
				{COLORS.map(color => (
					<Tag key={color} variant="invisible" color={color}>
						{color}
					</Tag>
				))}
			</Row>
			<Row>
				{COLORS.map(color => (
					<Tag key={color} variant="invisible" color={color} asChild>
						<button type="button">{color}</button>
					</Tag>
				))}
			</Row>
		</Stack>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: 'neutral' });
		expect(button).toHaveAttribute('data-slot', 'tag');
		expect(button.className).toContain('hover:opacity-100');
		await userEvent.hover(button);
	}
};

/**
 * Every variant for every color rendered with a leading and trailing icon.
 * Icons are tinted with each color's `icon-tag-*` token.
 *
 * @summary Variant × color grid with icons
 */
export const WithIcon: Story = {
	render: () => (
		<Stack>
			{COLORS.map(color => (
				<Row key={color}>
					{VARIANTS.map(variant => (
						<Tag key={variant} color={color} variant={variant}>
							<IconAdd />
							tag
							<IconAdd />
						</Tag>
					))}
				</Row>
			))}
		</Stack>
	)
};

/**
 * Full matrix: every variant for every color, repeated as default, as `pill`,
 * as an interactive `asChild` `<button>`, with a single leading icon, with
 * leading + trailing icons, and icon-only.
 *
 * @summary Variant × color matrix — default, pill, button, and icon layouts
 */
export const Colors: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
			<Stack>
				{COLORS.map(color => (
					<Stack gap="0.5rem" key={color}>
						<strong>{color}:</strong>
						<Row>
							{VARIANTS.map(variant => (
								<Tag key={variant} color={color} variant={variant}>
									{variant}
								</Tag>
							))}
						</Row>
					</Stack>
				))}
			</Stack>
			<Stack>
				{COLORS.map(color => (
					<Stack gap="0.5rem" key={color}>
						<strong>{color} with pill:</strong>
						<Row>
							{VARIANTS.map(variant => (
								<Tag key={variant} color={color} variant={variant} pill>
									{variant}
								</Tag>
							))}
						</Row>
					</Stack>
				))}
			</Stack>
			<Stack>
				{COLORS.map(color => (
					<Stack gap="0.5rem" key={color}>
						<strong>{color} as button:</strong>
						<Row>
							{VARIANTS.map(variant => (
								<Tag key={variant} color={color} variant={variant} asChild>
									<button type="button">{variant}</button>
								</Tag>
							))}
						</Row>
					</Stack>
				))}
			</Stack>
			<Stack>
				{COLORS.map(color => (
					<Stack gap="0.5rem" key={color}>
						<strong>{color} with icon:</strong>
						<Row>
							{VARIANTS.map(variant => (
								<Tag key={variant} color={color} variant={variant}>
									<IconAdd />
									{variant}
								</Tag>
							))}
						</Row>
					</Stack>
				))}
			</Stack>
			<Stack>
				{COLORS.map(color => (
					<Stack gap="0.5rem" key={color}>
						<strong>{color} with icons:</strong>
						<Row>
							{VARIANTS.map(variant => (
								<Tag key={variant} color={color} variant={variant}>
									<IconAdd />
									{variant}
									<IconAdd />
								</Tag>
							))}
						</Row>
					</Stack>
				))}
			</Stack>
			<Stack>
				{COLORS.map(color => (
					<Stack gap="0.5rem" key={color}>
						<strong>{color} icon only:</strong>
						<Row>
							{VARIANTS.map(variant => (
								<Tag
									key={variant}
									color={color}
									variant={variant}
									role="img"
									aria-label={`${color} ${variant}`}>
									<IconAdd />
								</Tag>
							))}
						</Row>
					</Stack>
				))}
			</Stack>
		</div>
	)
};
