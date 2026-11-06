import type { SVGProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlusIcon, XIcon } from 'lucide-react';
import { expect, within } from 'storybook/test';

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

// The other shape in `@agentero/icons`: a painted root, a transparent `fill="none"`
// mask path in front and the bare glyph path behind it.
const LegacyMaskedIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
		<path d="M0 0h24v24H0z" fill="none" />
		<path d="M11.25 12.75H6.25a.75.75 0 0 1 0-1.5h5v-5a.75.75 0 0 1 1.5 0v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0z" />
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
	const path = svg.querySelector('path:not([fill=none])') as SVGPathElement;
	const mask = svg.querySelector('path[fill=none]');
	return {
		color: getComputedStyle(svg).color,
		svgFill: getComputedStyle(svg).fill,
		pathFill: getComputedStyle(path).fill,
		pathStroke: getComputedStyle(path).stroke,
		strokeWidth: getComputedStyle(path).strokeWidth,
		maskFill: mask ? getComputedStyle(mask).fill : undefined
	};
};

/**
 * Test only — hidden from the sidebar and the docs page (`!dev`, `!autodocs`),
 * so every visible story stays on lucide. Consumers still pass filled Material
 * glyphs from `@agentero/icons`, in shapes a stroke icon does not have: a
 * `<path>` with no `fill` at all (black unless the recipe paints it), a `<path>`
 * carrying its own hardcoded `fill`, and a `fill="none"` mask path in front of
 * the glyph that must stay transparent. All must land on the button's color like
 * a lucide icon in every variant — this run is what catches the two `:where()`
 * compatibility rules regressing.
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
					<Button variant={variant}>
						<LegacyMaskedIcon />
						masked
					</Button>
				</Row>
			))}
		</Stack>
	),
	play: async ({ canvasElement }) => {
		const icons = [...canvasElement.querySelectorAll<SVGElement>('button svg')].map(paintedWith);
		await expect(icons).toHaveLength(NON_LINK_VARIANTS.length * 4);
		for (let i = 0; i < icons.length; i += 4) {
			const [lucide, barePath, hardcoded, masked] = icons.slice(i, i + 4) as [
				Paint,
				Paint,
				Paint,
				Paint
			];
			// One variant per row: the four icons share the button's color…
			await expect(barePath.color).toBe(lucide.color);
			await expect(hardcoded.color).toBe(lucide.color);
			await expect(masked.color).toBe(lucide.color);
			// …lucide by stroke, never filled; the legacy shapes by fill.
			await expect(lucide.pathStroke).toBe(lucide.color);
			await expect(lucide.pathFill).toBe('none');
			// …at the library's 1.5 stroke, not lucide's default 2.
			await expect(lucide.strokeWidth).toBe('1.5px');
			await expect(barePath.pathFill).toBe(lucide.color);
			await expect(hardcoded.pathFill).toBe(lucide.color);
			await expect(masked.pathFill).toBe(lucide.color);
			// …and the mask in front of a legacy glyph stays transparent.
			await expect(masked.maskFill).toBe('none');
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

/* --------------- Open trigger --------------- */

const resolveColor = (token: string) => {
	const probe = document.createElement('span');
	probe.style.backgroundColor = `var(${token})`;
	document.body.append(probe);
	const color = getComputedStyle(probe).backgroundColor;
	probe.remove();
	return color;
};

/**
 * A Button that opens a menu, popover, select or combobox list keeps its hover
 * look while that overlay is open, so the pointer can leave it for the list
 * without the trigger looking idle. The open state is read from
 * `aria-expanded="true"` together with `aria-haspopup` (or `role="combobox"`),
 * which Radix and Base UI triggers set for you. A disclosure toggle, such as a
 * collapsible section header, sets only `aria-expanded` and keeps its regular look,
 * and a disabled or loading trigger keeps its disabled look.
 *
 * @summary Overlay triggers keep the hover look while their overlay is open
 */
export const OpenTrigger: Story = {
	render: () => (
		<Stack>
			<Row>
				{NON_LINK_VARIANTS.map(variant => (
					<Button key={variant} variant={variant} aria-haspopup="menu" aria-expanded="true">
						{`${variant} menu open`}
					</Button>
				))}
			</Row>
			<Row>
				<Button variant="secondary" aria-expanded="true">
					Section expanded
				</Button>
				<Button variant="secondary" status="danger" aria-haspopup="menu" aria-expanded="true">
					Danger menu open
				</Button>
				<Button variant="secondary" loading aria-haspopup="menu" aria-expanded="true">
					Loading menu open
				</Button>
			</Row>
		</Stack>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		for (const variant of NON_LINK_VARIANTS) {
			const trigger = canvas.getByRole('button', { name: `${variant} menu open` });
			await expect(getComputedStyle(trigger).backgroundColor).toBe(
				resolveColor(`--color-bg-button-${variant}-hover`)
			);
		}
		const disclosure = canvas.getByRole('button', { name: 'Section expanded' });
		await expect(getComputedStyle(disclosure).backgroundColor).toBe(
			resolveColor('--color-bg-button-secondary-enable')
		);
		const dangerTrigger = canvas.getByRole('button', { name: 'Danger menu open' });
		await expect(getComputedStyle(dangerTrigger).backgroundColor).toBe(
			resolveColor('--color-bg-button-secondary-destructive-hover')
		);
		const loadingTrigger = canvas.getByText('Loading menu open').closest('button')!;
		await expect(getComputedStyle(loadingTrigger).backgroundColor).toBe(
			resolveColor('--color-bg-button-secondary-disable')
		);
	}
};
