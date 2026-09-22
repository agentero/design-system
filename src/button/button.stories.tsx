import type { SVGProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlusIcon, XIcon } from 'lucide-react';
import { expect } from 'storybook/test';

import { Button } from './button';

// Not icons anyone should ship — stand-ins for what consumers still pass in.
// `LegacyBarePathIcon` is a hand-drawn SVG whose path has no `fill` (it renders
// black unless the recipe paints it); `LegacyHardcodedFillIcon` is the exact shape
// `@agentero/icons` exports: root `fill="none"`, path with its own hex fill.
const LegacyBarePathIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
		<path d="M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z" />
	</svg>
);

const LegacyHardcodedFillIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
		<path
			fill="#434856"
			d="M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z"
		/>
	</svg>
);

const TEXT = 'Button';

const VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost', 'link'] as const;
const SIZES = ['xs', 'sm', 'md', 'lg'] as const;
const NON_LINK_VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost'] as const;

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
 * destructive actions. Pass `asChild` to render Button's styles on any nested
 * element — a plain `<a>`, a framework `<Link>`, or a custom component —
 * without Button binding to any particular framework.
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
 * supporting actions, `ghost` for low-emphasis inline actions, and `link`
 * for text-only actions.
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
 * Disabled state across all variants. Rendered via `asChild` with `<a>`
 * children to show the disabled treatment applied via className — native
 * anchors ignore the `disabled` attribute, so Button emits `aria-disabled`
 * and `data-disabled` on the child instead.
 *
 * @summary Disabled treatment for every variant
 */
export const Disabled: Story = {
	render: () => (
		<Row>
			{VARIANTS.map(variant => (
				<Button asChild key={variant} variant={variant} disabled>
					<a>{TEXT}</a>
				</Button>
			))}
		</Row>
	)
};

/* --------------- Icons --------------- */

/**
 * Variant × size grid with leading and trailing icons.
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
							<PlusIcon />
							{TEXT}
							<PlusIcon />
						</Button>
					))}
				</Row>
			))}
		</Stack>
	)
};

// Reads what the browser actually painted: the icon's own color, and how each
// shape reached it (lucide by stroke, the legacy shapes by fill).
type Paint = ReturnType<typeof paintedWith>;

const paintedWith = (svg: SVGElement) => {
	const path = svg.querySelector('path') as SVGPathElement;
	return {
		color: getComputedStyle(svg).color,
		svgFill: getComputedStyle(svg).fill,
		pathFill: getComputedStyle(path).fill,
		pathStroke: getComputedStyle(path).stroke
	};
};

/**
 * Test only — hidden from the sidebar and the docs page (`!dev`, `!autodocs`),
 * so every visible story stays on lucide. Consumers still pass filled Material
 * glyphs from `@agentero/icons`, in two shapes a stroke icon does not have: a
 * `<path>` with no `fill` at all (black unless the recipe paints it) and a
 * `<path>` carrying its own hardcoded `fill`. Both must land on the same token
 * as a lucide icon in every variant — this run is what catches
 * `[&_svg:not([fill=none])]:fill-current` and `[&_svg_path[fill]]:fill-current`
 * regressing.
 *
 * @summary Legacy filled icons land on the same token as lucide ones
 */
export const LegacyFilledIcon: Story = {
	tags: ['!dev', '!autodocs'],
	render: () => (
		<Stack>
			{NON_LINK_VARIANTS.map(variant => (
				<Row key={variant}>
					<Button variant={variant}>
						<PlusIcon />
						lucide
					</Button>
					<Button variant={variant}>
						<LegacyBarePathIcon />
						bare path
					</Button>
					<Button variant={variant}>
						<LegacyHardcodedFillIcon />
						hardcoded fill
					</Button>
				</Row>
			))}
		</Stack>
	),
	play: async ({ canvasElement }) => {
		const icons = [...canvasElement.querySelectorAll<SVGElement>('button svg')].map(paintedWith);
		await expect(icons).toHaveLength(NON_LINK_VARIANTS.length * 3);
		for (let i = 0; i < icons.length; i += 3) {
			const [lucide, barePath, hardcoded] = icons.slice(i, i + 3) as [Paint, Paint, Paint];
			// One variant per row: the three icons share the variant's icon token…
			await expect(barePath.color).toBe(lucide.color);
			await expect(hardcoded.color).toBe(lucide.color);
			// …lucide by stroke, never filled; the legacy shapes by fill.
			await expect(lucide.pathStroke).toBe(lucide.color);
			await expect(lucide.pathFill).toBe('none');
			await expect(barePath.pathFill).toBe(lucide.color);
			await expect(hardcoded.pathFill).toBe(lucide.color);
		}
	}
};

/**
 * Icon-only buttons across the variant × size grid. Excludes `variant="link"`
 * — combining `link` with icon-only children logs a dev-only warning because
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
							<XIcon />
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
 * `variant="link"` — combining `link` with `loading` logs a dev-only warning.
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
								<PlusIcon />
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
						<PlusIcon />
						{TEXT}
						<PlusIcon />
					</Button>
				))}
			</Row>
			<Row>
				{VARIANTS.map(variant => (
					<Button asChild key={variant} variant={variant} status="danger" disabled>
						<a>
							<PlusIcon />
							{TEXT}
							<PlusIcon />
						</a>
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
							<PlusIcon />
							{TEXT}
							<PlusIcon />
						</Button>
					))}
				</Row>
			))}
		</Stack>
	)
};

/* --------------- asChild --------------- */

/**
 * `asChild` renders Button's styles on the nested child element rather than
 * on a `<button>` — the child receives Button's `className`, `ref`, and
 * merged props via Radix's `Slot` primitive. Use it to turn any anchor or
 * framework `Link` into a Button without coupling the design system to a
 * router. In app code, swap the plain `<a>` below for your framework's Link
 * (`next/link`, `react-router`, `@tanstack/react-router`, etc.).
 *
 * @summary `asChild` composes Button's styles onto any element
 */
export const AsChild: Story = {
	render: () => (
		<Row>
			<Button asChild variant="primary">
				<a href="/dashboard">Go to dashboard</a>
			</Button>
			<Button asChild variant="secondary">
				<a href="https://agentero.com" target="_blank" rel="noreferrer">
					Visit Agentero
				</a>
			</Button>
		</Row>
	)
};
