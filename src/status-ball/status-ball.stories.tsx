import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { StatusBall } from './status-ball';

const INTENTS = [
	'success',
	'info',
	'warning',
	'danger',
	'creative',
	'dynamic',
	'playful',
	'neutral'
] as const;

/**
 * StatusBall renders a small colored dot that marks the state of an adjacent
 * label — appointment confirmation, license validity, availability, or any
 * list row where a single glyph of color communicates status. Pair it with
 * text; the dot alone is not announced to assistive technologies, so the
 * surrounding label must carry the meaning.
 */
const meta = {
	title: 'Components/StatusBall',
	component: StatusBall,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: [undefined, ...INTENTS]
		}
	},
	args: {
		color: 'neutral'
	}
} satisfies Meta<typeof StatusBall>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default dot — `color="neutral"` for an unknown or inactive status. Drop
 * next to a text label to surface state at a glance.
 *
 * @summary Default neutral dot representing an inactive status
 */
export const Default: Story = {
	render: args => (
		<div className="flex items-center gap-2">
			<StatusBall {...args} />
		</div>
	)
};

/* --------------- Intents --------------- */

/**
 * All 8 semantic intents rendered in a single grid, each paired with a sample
 * label. Consumers typically drive the `color` prop from a domain-specific
 * status → intent lookup table.
 *
 * @summary Every intent paired with a representative status label
 */
export const Intents: Story = {
	render: () => {
		const samples: { color: (typeof INTENTS)[number]; label: string }[] = [
			{ color: 'success', label: 'Active' },
			{ color: 'info', label: 'Scheduled' },
			{ color: 'warning', label: 'Pending' },
			{ color: 'danger', label: 'Expired' },
			{ color: 'creative', label: 'In review' },
			{ color: 'playful', label: 'Flagged' },
			{ color: 'dynamic', label: 'Needs attention' },
			{ color: 'neutral', label: 'Inactive' }
		];

		return (
			<div className="grid grid-cols-2 gap-x-8 gap-y-3">
				{samples.map(({ color, label }) => (
					<div key={color} className="flex items-center gap-2">
						<StatusBall color={color} />
						<span className="text-sm text-text-default-base-primary">{label}</span>
					</div>
				))}
			</div>
		);
	}
};

/**
 * Success dot for positive / active states — the most common pairing for
 * "live" records such as active licenses or confirmed appointments.
 *
 * @summary Success dot for positive or active statuses
 */
export const Success: Story = {
	args: { color: 'success' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const dot = canvas.getByTestId('status-ball-success');

		// Structural contract — public API of the DS.
		await expect(dot).toHaveAttribute('data-slot', 'status-ball');

		// Visual outcomes from the resolved CSS, not from the utility class.
		// Catches token regressions, CSS load failures, and cascade overrides.
		const styles = getComputedStyle(dot);

		// Geometry from the base recipe: `size-2 rounded-full`.
		await expect(styles.width).toBe('8px');
		await expect(styles.height).toBe('8px');
		await expect(parseFloat(styles.borderRadius)).toBeGreaterThan(0);

		// Color matches the `success` token's resolved value (`--color-positive-700`
		// → `#0f8a2a`). Hardcoding the rgb instead of probing the variable means
		// intentional token tweaks must update this test on purpose, and gives us a
		// per-theme assertion when dark / marketplace / producerflow modes land.
		await expect(styles.backgroundColor).toBe('rgb(15, 138, 42)');
	},
	render: args => <StatusBall {...args} data-testid="status-ball-success" />,
	parameters: { a11y: { test: 'error' } }
};

/**
 * Info dot for informational or neutral-positive states — e.g., scheduled or
 * queued records that are progressing normally.
 *
 * @summary Info dot for informational statuses
 */
export const Info: Story = {
	args: { color: 'info' }
};

/**
 * Warning dot for pending states or records approaching a deadline — e.g., a
 * license nearing expiration or an appointment awaiting confirmation.
 *
 * @summary Warning dot for pending or approaching-deadline statuses
 */
export const Warning: Story = {
	args: { color: 'warning' }
};

/**
 * Danger dot for error / expired / blocking states — e.g., an expired license
 * or a failed payment that blocks progress.
 *
 * @summary Danger dot for error or expired statuses
 */
export const Danger: Story = {
	args: { color: 'danger' }
};

/**
 * Creative dot for category-specific statuses without a direct success/info/
 * warning/danger mapping — often used for "in review" or "under assessment"
 * domain states.
 *
 * @summary Creative dot for category-specific statuses
 */
export const Creative: Story = {
	args: { color: 'creative' }
};

/**
 * Dynamic dot for attention-worthy states that sit between warning and
 * danger — e.g., records that need action soon but are not yet failed.
 *
 * @summary Dynamic dot for attention-needed statuses
 */
export const Dynamic: Story = {
	args: { color: 'dynamic' }
};

/**
 * Playful dot for flagged or priority domain states that need to stand out
 * from warnings with a distinct hue.
 *
 * @summary Playful dot for flagged or priority statuses
 */
export const Playful: Story = {
	args: { color: 'playful' }
};

/**
 * Neutral dot for inactive, unknown, or default states — the fallback when no
 * other intent applies.
 *
 * @summary Neutral dot for inactive or unknown statuses
 */
export const Neutral: Story = {
	args: { color: 'neutral' }
};

/* --------------- Usage examples --------------- */

/**
 * StatusBall inside a list row — the canonical production usage, mirroring
 * the appointment and license list patterns in `producerflow/mono`. Each row
 * pairs a dot with a label and supporting text.
 *
 * @summary StatusBall paired with labels inside a list
 */
export const InList: Story = {
	render: () => {
		const rows = [
			{ color: 'success', name: 'Ada Lovelace', status: 'Active' },
			{ color: 'warning', name: 'Grace Hopper', status: 'Pending renewal' },
			{ color: 'danger', name: 'Alan Turing', status: 'Expired' },
			{ color: 'neutral', name: 'Katherine Johnson', status: 'Inactive' }
		] as const;

		return (
			<ul className="w-80 divide-y divide-border-default-base-primary rounded-lg border border-border-default-base-primary bg-bg-default-base-primary">
				{rows.map(row => (
					<li key={row.name} className="flex items-center gap-3 px-4 py-3">
						<StatusBall color={row.color} />
						<div className="flex flex-col">
							<span className="text-sm font-medium text-text-default-base-primary">{row.name}</span>
							<span className="text-xs text-text-default-base-secondary">{row.status}</span>
						</div>
					</li>
				))}
			</ul>
		);
	}
};

/**
 * StatusBall inside a status pill — a tinted badge that pairs the dot with a
 * label in a single rounded container. Use when the status needs more visual
 * weight than a bare list row provides.
 *
 * @summary StatusBall inside a rounded status pill
 */
export const InPill: Story = {
	render: () => (
		<div className="flex flex-wrap items-center gap-2">
			<span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
				<StatusBall color="success" />
				Active
			</span>
			<span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
				<StatusBall color="warning" />
				Pending
			</span>
			<span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
				<StatusBall color="danger" />
				Expired
			</span>
		</div>
	)
};
