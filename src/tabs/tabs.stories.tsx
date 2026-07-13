import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Tabs } from './tabs';

const meta = {
	title: 'Components/Tabs',
	component: Tabs.Root,
	tags: ['autodocs']
} satisfies Meta<typeof Tabs.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

const TABS = [
	{ value: 'overview', label: 'Overview', body: 'A summary of the policy and its coverage.' },
	{ value: 'documents', label: 'Documents', body: 'Declarations, endorsements and forms.' },
	{ value: 'activity', label: 'Activity', body: 'A timeline of recent changes and events.' }
] as const;

const TabItems = () =>
	TABS.map(({ value, label }) => (
		<Tabs.Trigger key={value} value={value}>
			{label}
		</Tabs.Trigger>
	));

const TabPanels = () =>
	TABS.map(({ value, body }) => (
		<Tabs.Content key={value} value={value} className="p-4 text-sm text-text-default-base-primary">
			{body}
		</Tabs.Content>
	));

/** `line` (default): the active tab is marked with an animated underline. */
export const Default: Story = {
	args: {
		variant: 'line',
		defaultValue: 'overview'
	},
	argTypes: {
		variant: {
			control: 'radio',
			options: ['line', 'enclosed', 'button'],
			description: 'line = underline; enclosed = segmented pills; button = button-like tabs'
		}
	},
	render: args => (
		<Tabs.Root {...args}>
			<Tabs.List>
				<TabItems />
			</Tabs.List>
			<TabPanels />
		</Tabs.Root>
	)
};

/** `enclosed` renders segmented pills; the active tab sits on a raised surface. */
export const Enclosed: Story = {
	render: () => (
		<Tabs.Root variant="enclosed" defaultValue="overview">
			<Tabs.List>
				<TabItems />
			</Tabs.List>
			<TabPanels />
		</Tabs.Root>
	)
};

/** `button` renders button-like tabs, with room for a leading icon per trigger. */
export const Buttons: Story = {
	render: () => (
		<Tabs.Root variant="button" defaultValue="overview">
			<Tabs.List>
				<TabItems />
			</Tabs.List>
			<TabPanels />
		</Tabs.Root>
	)
};

/** `position` aligns the tab list within the row (`start` is the default). */
export const Positions: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			{(['start', 'center', 'end'] as const).map(position => (
				<Tabs.Root key={position} variant="enclosed" position={position} defaultValue="overview">
					<Tabs.List>
						<TabItems />
					</Tabs.List>
					<TabPanels />
				</Tabs.Root>
			))}
		</div>
	)
};

/** `position="full"` stretches the tab list to fill the available width. */
export const FullWidth: Story = {
	render: () => (
		<Tabs.Root variant="enclosed" position="full" defaultValue="overview">
			<Tabs.List>
				<TabItems />
			</Tabs.List>
			<TabPanels />
		</Tabs.Root>
	)
};

/** Selecting a tab reveals its panel and hides the others. */
export const SwitchTabs: Story = {
	args: {
		variant: 'line',
		defaultValue: 'overview'
	},
	render: args => (
		<Tabs.Root {...args}>
			<Tabs.List>
				<TabItems />
			</Tabs.List>
			<TabPanels />
		</Tabs.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const overview = canvas.getByRole('tab', { name: /overview/i });
		const documents = canvas.getByRole('tab', { name: /documents/i });

		await expect(overview).toHaveAttribute('data-state', 'active');
		await expect(await canvas.findByText(/summary of the policy/i)).toBeVisible();

		await userEvent.click(documents);
		await expect(documents).toHaveAttribute('data-state', 'active');
		await expect(overview).toHaveAttribute('data-state', 'inactive');
		await expect(await canvas.findByText(/declarations, endorsements/i)).toBeVisible();
	}
};
