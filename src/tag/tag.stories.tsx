import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlusIcon } from 'lucide-react';
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
							<PlusIcon />
						</Tag>
						<Tag size={size} color="informative" variant="secondary">
							<PlusIcon />
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
					<PlusIcon />
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
							<PlusIcon />
							tag
							<PlusIcon />
						</Tag>
					))}
				</Row>
			))}
		</Stack>
	)
};

/**
 * `truncate` caps the Tag at its container's width and ellipsizes the label.
 * The ellipsis sits on a wrapper around each text run, so a Tag that mixes an
 * icon with a long label clips the label and leaves the icon at full size.
 *
 * @summary Long labels capped at the container width with an ellipsis
 */
export const Truncate: Story = {
	render: () => (
		<Stack>
			<div style={{ width: '9rem' }}>
				<Tag truncate title="Travel insurance limited lines producer">
					Travel insurance limited lines producer
				</Tag>
			</div>
			<div style={{ width: '9rem' }}>
				<Tag truncate color="informative">
					<PlusIcon />
					Travel insurance limited lines producer
				</Tag>
			</div>
		</Stack>
	),
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByTitle('Travel insurance limited lines producer');
		const textWrapper = label.firstElementChild as HTMLElement;

		expect(label.className).toContain('overflow-hidden');
		expect(textWrapper.scrollWidth).toBeGreaterThan(textWrapper.clientWidth);
		// `text-overflow` only ellipsizes a block container — the Tag itself is
		// a flex one, so the resolved value has to land on the text wrapper.
		expect(getComputedStyle(textWrapper).textOverflow).toBe('ellipsis');
		expect(getComputedStyle(textWrapper).display).toBe('block');

		// The label gives way, never the icon: as a flex item it would otherwise
		// shrink along its width and leave a sliver.
		const icon = canvasElement.querySelector('svg')!.getBoundingClientRect();
		expect(Math.round(icon.width)).toBe(Math.round(icon.height));
	}
};

/**
 * Without `truncate`, a Tag never wraps its label onto multiple lines — a
 * container narrower than the label just gets overflowed by a single-line
 * Tag that keeps its intrinsic width, instead of breaking the label across
 * lines and spilling out of the fixed-height box.
 *
 * @summary A too-narrow container overflows a single-line Tag; the label never wraps
 */
export const OverflowsWithoutWrapping: Story = {
	render: () => (
		<div style={{ width: '9rem', border: '1px dashed gray' }}>
			<Tag title="Travel insurance limited lines producer">
				Travel insurance limited lines producer
			</Tag>
		</div>
	),
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByTitle('Travel insurance limited lines producer');

		expect(getComputedStyle(label).whiteSpace).toBe('nowrap');

		// A single line at `sm` is 24px (`h-6`) tall — if the label had wrapped,
		// the box would be a multiple of that.
		const box = label.getBoundingClientRect();
		expect(Math.round(box.height)).toBe(24);

		// The label keeps its full intrinsic width and overflows the 9rem (144px) container.
		expect(box.width).toBeGreaterThan(144);
	}
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
									<PlusIcon />
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
									<PlusIcon />
									{variant}
									<PlusIcon />
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
									<PlusIcon />
								</Tag>
							))}
						</Row>
					</Stack>
				))}
			</Stack>
		</div>
	)
};
