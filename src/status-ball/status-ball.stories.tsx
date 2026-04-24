import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusBall } from './status-ball';

const COLORS = ['green', 'blue', 'yellow', 'red', 'purple', 'pink', 'orange', 'gray'] as const;

/**
 * StatusBall renders a small colored dot that marks the state of an adjacent
 * label — appointment confirmation, license validity, availability, or any
 * list row where a single glyph of color communicates status. Pair it with
 * text; the dot alone is not announced to assistive technologies, so the
 * surrounding label must carry the meaning.
 */
const meta = {
	title: 'Design System/Feedback/StatusBall',
	component: StatusBall,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: [undefined, ...COLORS]
		}
	},
	args: {
		color: 'gray'
	}
} satisfies Meta<typeof StatusBall>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default dot — `color="gray"` for an unknown or inactive status. Drop
 * next to a text label to surface state at a glance.
 *
 * @summary Default gray dot representing an inactive status
 */
export const Default: Story = {
	render: args => (
		<div className="flex items-center gap-2">
			<StatusBall {...args} />
		</div>
	)
};

/* --------------- Colors --------------- */

/**
 * All 8 colors rendered in a single grid, each paired with a sample label.
 * Consumers typically drive the `color` prop from a domain-specific
 * status → color lookup table.
 *
 * @summary Every color paired with a representative status label
 */
export const Colors: Story = {
	render: () => {
		const samples: { color: (typeof COLORS)[number]; label: string }[] = [
			{ color: 'green', label: 'Active' },
			{ color: 'blue', label: 'Scheduled' },
			{ color: 'yellow', label: 'Pending' },
			{ color: 'red', label: 'Expired' },
			{ color: 'purple', label: 'In review' },
			{ color: 'pink', label: 'Flagged' },
			{ color: 'orange', label: 'Needs attention' },
			{ color: 'gray', label: 'Inactive' }
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
 * Green dot for positive / active states — the most common pairing for "live"
 * records such as active licenses or confirmed appointments.
 *
 * @summary Green dot for positive or active statuses
 */
export const Green: Story = {
	args: { color: 'green' }
};

/**
 * Blue dot for informational or neutral-positive states — e.g., scheduled or
 * queued records that are progressing normally.
 *
 * @summary Blue dot for informational statuses
 */
export const Blue: Story = {
	args: { color: 'blue' }
};

/**
 * Yellow dot for warning or pending states — e.g., a license approaching
 * expiration or an appointment awaiting confirmation.
 *
 * @summary Yellow dot for warning or pending statuses
 */
export const Yellow: Story = {
	args: { color: 'yellow' }
};

/**
 * Red dot for danger / error / expired states — e.g., an expired license or a
 * failed payment that blocks progress.
 *
 * @summary Red dot for danger or error statuses
 */
export const Red: Story = {
	args: { color: 'red' }
};

/**
 * Purple dot for category-specific statuses without a semantic fallback —
 * often used for "in review" or "under assessment" domain states.
 *
 * @summary Purple dot for category-specific statuses
 */
export const Purple: Story = {
	args: { color: 'purple' }
};

/**
 * Pink dot for category-specific statuses — a distinct hue for flagged or
 * priority domain states that need to stand out from warnings.
 *
 * @summary Pink dot for flagged or priority statuses
 */
export const Pink: Story = {
	args: { color: 'pink' }
};

/**
 * Orange dot for attention-worthy states that sit between warning and danger —
 * e.g., records that need action soon but are not yet failed.
 *
 * @summary Orange dot for attention-needed statuses
 */
export const Orange: Story = {
	args: { color: 'orange' }
};

/**
 * Gray dot for inactive, unknown, or default states — the fallback when no
 * other color applies.
 *
 * @summary Gray dot for inactive or unknown statuses
 */
export const Gray: Story = {
	args: { color: 'gray' }
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
			{ color: 'green', name: 'Ada Lovelace', status: 'Active' },
			{ color: 'yellow', name: 'Grace Hopper', status: 'Pending renewal' },
			{ color: 'red', name: 'Alan Turing', status: 'Expired' },
			{ color: 'gray', name: 'Katherine Johnson', status: 'Inactive' }
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
				<StatusBall color="green" />
				Active
			</span>
			<span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
				<StatusBall color="yellow" />
				Pending
			</span>
			<span className="inline-flex items-center gap-1.5 rounded-full border border-border-default-base-primary bg-bg-default-base-primary px-2.5 py-1 text-xs text-text-default-base-primary">
				<StatusBall color="red" />
				Expired
			</span>
		</div>
	)
};
