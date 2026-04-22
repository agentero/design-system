import type { Meta, StoryObj } from '@storybook/react-vite';

import { Loading } from './loading';

/**
 * Loading displays a circular spinner that indicates an in-progress operation.
 * Use for inline fetch, form submission, or asynchronous task indicators.
 * The spinner inherits its color from the parent `color` and scales with the
 * parent font size via `em`-based size variants (`sm`, `md`, `lg`).
 */
const meta = {
	title: 'Components/Loading',
	component: Loading,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		}
	},
	args: {
		size: 'sm'
	}
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default spinner at `size="sm"` (1em diameter), inheriting the current
 * text color. Matches the out-of-the-box behavior when Loading is dropped
 * into any layout.
 *
 * @summary Default spinner at the `sm` size
 */
export const Default: Story = {};

/* --------------- Sizes --------------- */

/**
 * Small spinner (1em diameter) — the default. Ideal for inline indicators,
 * buttons, and compact layouts where the spinner needs to sit next to text.
 *
 * @summary Small 1em spinner for inline indicators
 */
export const SizeSm: Story = {
	args: { size: 'sm' }
};

/**
 * Medium spinner (1.5em diameter). Use for cards, panels, and standalone
 * loading states where the spinner is the primary visual signal.
 *
 * @summary Medium 1.5em spinner for cards and panels
 */
export const SizeMd: Story = {
	args: { size: 'md' }
};

/**
 * Large spinner (2em diameter). Use for page-level or section-level loading
 * where the spinner needs more visual weight.
 *
 * @summary Large 2em spinner for page or section loading
 */
export const SizeLg: Story = {
	args: { size: 'lg' }
};

/**
 * All three sizes rendered side by side for visual comparison of the
 * `em`-based scaling. Each spinner inherits the same parent text color.
 *
 * @summary Visual comparison of all three spinner sizes
 */
export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
			{(['sm', 'md', 'lg'] as const).map(size => (
				<Loading key={size} size={size} />
			))}
		</div>
	)
};

/* --------------- Color inheritance --------------- */

/**
 * The spinner color tracks the parent `color` (text color) via `border-current`.
 * Wrap Loading in any element with a text color utility — or set `color` on
 * Loading itself — and the spinner adopts that color without extra props.
 *
 * @summary Spinner color inherits from the parent text color
 */
export const InheritsColor: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
			<div className="text-text-default-base-primary">
				<Loading size="md" />
			</div>
			<div className="text-text-default-brand-primary">
				<Loading size="md" />
			</div>
			<div className="text-text-default-danger-primary">
				<Loading size="md" />
			</div>
		</div>
	)
};

/**
 * Spinner on a dark surface to verify `border-current` contrast. The parent
 * sets a light text color, which the spinner inherits so it remains visible
 * against the dark background.
 *
 * @summary Spinner on a dark-background surface
 */
export const OnDarkSurface: Story = {
	render: () => (
		<div className="flex items-center gap-8 rounded-lg bg-bg-button-primary-enable p-8 text-text-default-base-inverse-primary">
			<Loading size="sm" />
			<Loading size="md" />
			<Loading size="lg" />
		</div>
	)
};
