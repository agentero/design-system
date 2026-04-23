import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { Divider } from './divider';

/**
 * Divider separates content visually along either a horizontal or vertical
 * axis. Use between page or card sections, between inline items in a toolbar
 * or list, or — with the `label` prop — to render an "or"-style break between
 * options. Set `decorative={false}` when the separator carries semantic
 * meaning so it's announced to assistive technologies.
 */
const meta = {
	title: 'Components/Divider',
	component: Divider,
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['horizontal', 'vertical']
		},
		decorative: {
			control: 'boolean'
		},
		label: {
			control: 'text'
		}
	},
	args: {
		orientation: 'horizontal',
		decorative: true
	}
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default horizontal, decorative divider — a 1px line that spans the
 * parent width. Use this form between stacked content blocks.
 *
 * @summary Default horizontal decorative divider
 */
export const Default: Story = {
	render: args => (
		<div className="flex w-80 flex-col gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6">
			<div className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-text-default-base-primary">First section</h3>
				<p className="text-sm text-text-default-base-secondary">
					Content above the divider. The divider visually breaks this from the next section.
				</p>
			</div>
			<Divider {...args} />
			<div className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-text-default-base-primary">Second section</h3>
				<p className="text-sm text-text-default-base-secondary">
					Content below the divider, clearly separated from the first.
				</p>
			</div>
		</div>
	)
};

/* --------------- Orientations --------------- */

/**
 * Horizontal divider — a 1px line spanning the parent's full width. The
 * default orientation; use to separate stacked content.
 *
 * @summary Horizontal 1px line spanning the parent width
 */
export const Horizontal: Story = {
	render: () => (
		<div className="w-80">
			<Divider />
		</div>
	)
};

/**
 * Vertical divider — a 1px line spanning the parent's full height. Parent must
 * establish a height (via `h-*` or an intrinsic flex item height) for the line
 * to be visible.
 *
 * @summary Vertical 1px line spanning the parent height
 */
export const Vertical: Story = {
	render: () => (
		<div className="flex h-24 items-stretch">
			<Divider orientation="vertical" />
		</div>
	)
};

/* --------------- Labels --------------- */

/**
 * Labelled divider. The label sits centered between two flanking 1px lines —
 * a common pattern for "or" breaks between authentication options.
 *
 * @summary Horizontal divider with a centered "or" label
 */
export const WithLabel: Story = {
	args: { label: 'or' },
	render: args => (
		<div className="flex w-80 flex-col gap-2">
			<Button variant="primary">Continue with email</Button>
			<Divider {...args} />
			<Button variant="secondary">Continue with SSO</Button>
		</div>
	)
};

/**
 * Vertical divider with a label. The label sits between two stacked 1px line
 * segments; use sparingly — horizontal labelled dividers are more common.
 *
 * @summary Vertical divider with a centered label
 */
export const VerticalWithLabel: Story = {
	args: { orientation: 'vertical', label: 'OR' },
	render: args => (
		<div className="flex h-40 items-stretch gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6">
			<div className="flex flex-col justify-center gap-1">
				<h3 className="text-sm font-semibold text-text-default-base-primary">Left panel</h3>
				<p className="text-xs text-text-default-base-secondary">Content on the left side</p>
			</div>
			<Divider {...args} />
			<div className="flex flex-col justify-center gap-1">
				<h3 className="text-sm font-semibold text-text-default-base-primary">Right panel</h3>
				<p className="text-xs text-text-default-base-secondary">Content on the right side</p>
			</div>
		</div>
	)
};

/* --------------- Semantic --------------- */

/**
 * Semantic divider (`decorative={false}`). Exposes `role="separator"` and
 * `aria-orientation` to assistive technologies, marking a meaningful section
 * break rather than a purely visual one.
 *
 * @summary Semantic separator announced to assistive technologies
 */
export const Semantic: Story = {
	args: { decorative: false },
	render: args => (
		<div className="flex w-80 flex-col gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-6">
			<section className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-text-default-base-primary">Section one</h3>
				<p className="text-sm text-text-default-base-secondary">
					Semantically separated from the next section for screen readers.
				</p>
			</section>
			<Divider {...args} />
			<section className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-text-default-base-primary">Section two</h3>
				<p className="text-sm text-text-default-base-secondary">
					Screen readers will announce this as a separate section.
				</p>
			</section>
		</div>
	)
};

/* --------------- Usage examples --------------- */

/**
 * Divider between list rows. Dividers delineate each item without the visual
 * weight of a full border on every row.
 *
 * @summary Horizontal dividers between stacked list rows
 */
export const InList: Story = {
	render: () => (
		<div className="w-80 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary">
			<div className="flex flex-col gap-1 px-4 py-3">
				<h4 className="text-sm font-semibold text-text-default-base-primary">Notification 1</h4>
				<p className="text-xs text-text-default-base-secondary">
					You have a new message from Jane.
				</p>
			</div>
			<Divider />
			<div className="flex flex-col gap-1 px-4 py-3">
				<h4 className="text-sm font-semibold text-text-default-base-primary">Notification 2</h4>
				<p className="text-xs text-text-default-base-secondary">
					Your report is ready to download.
				</p>
			</div>
			<Divider />
			<div className="flex flex-col gap-1 px-4 py-3">
				<h4 className="text-sm font-semibold text-text-default-base-primary">Notification 3</h4>
				<p className="text-xs text-text-default-base-secondary">
					System maintenance is scheduled for tonight.
				</p>
			</div>
		</div>
	)
};

/**
 * Vertical dividers grouping related toolbar actions. Use to separate logical
 * clusters of buttons (editing vs. history vs. settings) without visual
 * weight.
 *
 * @summary Vertical dividers grouping toolbar actions
 */
export const InToolbar: Story = {
	render: () => (
		<div className="inline-flex h-10 items-center gap-1 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary px-2 shadow-1">
			<Button variant="ghost" size="xs">
				Cut
			</Button>
			<Button variant="ghost" size="xs">
				Copy
			</Button>
			<Button variant="ghost" size="xs">
				Paste
			</Button>
			<Divider orientation="vertical" className="mx-1 h-6" />
			<Button variant="ghost" size="xs">
				Undo
			</Button>
			<Button variant="ghost" size="xs">
				Redo
			</Button>
			<Divider orientation="vertical" className="mx-1 h-6" />
			<Button variant="ghost" size="xs">
				Settings
			</Button>
		</div>
	)
};

/**
 * Horizontal dividers between content sections in a long-form layout. Helps
 * create visual hierarchy in content-heavy pages.
 *
 * @summary Horizontal dividers between content sections
 */
export const HorizontalInContent: Story = {
	render: () => (
		<div className="flex w-96 flex-col gap-4 p-6">
			<div className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-text-default-base-primary">Section title</h3>
				<p className="text-sm text-text-default-base-secondary">
					Descriptive content for the first section. The divider below separates it from the next.
				</p>
			</div>
			<Divider />
			<div className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-text-default-base-primary">Another section</h3>
				<p className="text-sm text-text-default-base-secondary">
					The second section is clearly separated from the previous one.
				</p>
			</div>
			<Divider />
			<div className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-text-default-base-primary">Final section</h3>
				<p className="text-sm text-text-default-base-secondary">
					Dividers help establish visual hierarchy in content-heavy layouts.
				</p>
			</div>
		</div>
	)
};

/**
 * Vertical dividers between inline elements. Common for separating a row of
 * related controls or inline links without visual weight.
 *
 * @summary Vertical dividers separating inline elements
 */
export const VerticalBetweenElements: Story = {
	render: () => (
		<div className="flex h-10 items-center gap-3">
			<Button variant="primary" size="sm">
				Button 1
			</Button>
			<Divider orientation="vertical" />
			<Button variant="primary" size="sm">
				Button 2
			</Button>
			<Divider orientation="vertical" />
			<Button variant="primary" size="sm">
				Button 3
			</Button>
		</div>
	)
};
