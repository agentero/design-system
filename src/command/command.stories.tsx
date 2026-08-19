import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { Command } from './command';

/**
 * Command is a filterable list built on `cmdk`. Type to narrow the options,
 * navigate with the arrow keys, select with Enter. It carries its own panel
 * chrome, so dropping it inside a `Popover.Content` yields a combobox.
 */
const meta = {
	title: 'Components/Command',
	component: Command.Root,
	tags: ['autodocs']
} satisfies Meta<typeof Command.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const OPTIONS = ['Profile', 'Documentation', 'Projects'];

const GROUP_HEADING =
	'**:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:text-text-default-base-tertiary';

/** Search field over a flat list. Typing filters the rows through cmdk's default scorer. */
export const Default: Story = {
	render: () => (
		<Command.Root label="Search commands">
			<Command.Input placeholder="Type a command or search..." />
			<Command.List>
				{OPTIONS.map(option => (
					<Command.Item key={option}>{option}</Command.Item>
				))}
			</Command.List>
			<Command.Empty>No results found.</Command.Empty>
		</Command.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox', { name: /search commands/i });

		await expect(input.closest('[data-slot="command-search"]')).toBeInTheDocument();
		await expect(canvas.getAllByRole('option')).toHaveLength(3);

		// "pro" fuzzy-matches Profile and Projects but not Documentation, which has no "p".
		await userEvent.type(input, 'pro');

		await waitFor(() => expect(canvas.getAllByRole('option')).toHaveLength(2));
		await expect(canvas.getByText('Profile')).toBeInTheDocument();
		await expect(canvas.queryByText('Documentation')).not.toBeInTheDocument();
	}
};

/** `Empty` renders only while nothing matches, so it can live permanently in the list. */
export const EmptyState: Story = {
	render: () => (
		<Command.Root label="Search commands">
			<Command.Input placeholder="Search..." />
			<Command.List>
				{OPTIONS.map(option => (
					<Command.Item key={option}>{option}</Command.Item>
				))}
			</Command.List>
			<Command.Empty>No results found for your search.</Command.Empty>
		</Command.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox', { name: /search commands/i });

		await expect(canvas.queryByText(/no results found/i)).not.toBeInTheDocument();

		await userEvent.type(input, 'zzzzz');

		await expect(await canvas.findByText(/no results found/i)).toBeInTheDocument();
		await expect(canvas.queryAllByRole('option')).toHaveLength(0);

		// The itemless listbox stays mounted; it must collapse instead of leaving its py-2 as a gap.
		const list = canvas.getByRole('listbox');
		await expect(list.getBoundingClientRect().height).toBe(0);
	}
};

/**
 * `Group` sections related options. It ships unstyled, so the heading is styled
 * per usage through the `[cmdk-group-heading]` hook.
 */
export const Grouped: Story = {
	render: () => (
		<Command.Root label="Search commands">
			<Command.Input placeholder="Search..." />
			<Command.List>
				<Command.Group heading="Account" className={GROUP_HEADING}>
					<Command.Item>Profile</Command.Item>
					<Command.Item>Billing</Command.Item>
				</Command.Group>
				<Command.Group heading="Workspace" className={GROUP_HEADING}>
					<Command.Item>Projects</Command.Item>
					<Command.Item>Members</Command.Item>
				</Command.Group>
			</Command.List>
			<Command.Empty>No results found.</Command.Empty>
		</Command.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Account')).toBeVisible();
		await expect(canvas.getByText('Workspace')).toBeInTheDocument();

		// cmdk hides an unmatched group with `hidden`, leaving its children mounted.
		await userEvent.type(canvas.getByRole('combobox', { name: /search commands/i }), 'proj');

		await waitFor(() => expect(canvas.getByText('Account')).not.toBeVisible());
		await expect(canvas.getByText('Workspace')).toBeVisible();
	}
};

/**
 * Arrow keys move the active row — marked `data-selected="true"` — and Enter
 * fires `onSelect` on it. `keywords` make a row matchable by terms it does not
 * display, which is how the value/label split is handled.
 */
const handleSelect = fn();

export const KeyboardNavigation: Story = {
	args: { label: 'Search commands' },
	render: args => (
		<Command.Root {...args}>
			<Command.Input placeholder="Search..." />
			<Command.List>
				<Command.Item value="home" keywords={['Homeowners']} onSelect={handleSelect}>
					Homeowners
				</Command.Item>
				<Command.Item value="auto" keywords={['Auto']} onSelect={handleSelect}>
					Auto
				</Command.Item>
			</Command.List>
			<Command.Empty>No results found.</Command.Empty>
		</Command.Root>
	),
	play: async ({ canvasElement }) => {
		handleSelect.mockClear();
		const canvas = within(canvasElement);
		const options = canvas.getAllByRole('option');

		// cmdk activates the first row on mount.
		await expect(options[0]).toHaveAttribute('data-selected', 'true');
		await expect(options[1]).toHaveAttribute('data-selected', 'false');

		await userEvent.click(canvas.getByRole('combobox', { name: /search commands/i }));
		await userEvent.keyboard('{ArrowDown}');

		await waitFor(() => expect(options[1]).toHaveAttribute('data-selected', 'true'));
		await expect(options[0]).toHaveAttribute('data-selected', 'false');

		await userEvent.keyboard('{Enter}');
		await expect(handleSelect).toHaveBeenCalledTimes(1);
		await expect(handleSelect).toHaveBeenCalledWith('auto');
	}
};
