import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Combobox } from '.';
import { Button } from '../button';
import { Command } from '../command';
import { Input } from '../input';

/**
 * Combobox is a `Command` in a surface anchored to a trigger. The surface
 * itself is chrome-less — it positions and animates, nothing more — because
 * `Command.Root` already carries the border, radius, shadow and background.
 * Reach for `Popover` when the content has no chrome of its own.
 */
const meta = {
	title: 'Components/Combobox',
	component: Combobox.Root,
	tags: ['autodocs']
} satisfies Meta<typeof Combobox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const LINES_OF_BUSINESS = ['Condo', 'Dwelling Fire', 'Flood', 'Homeowners', 'Landlord'];

/** Button trigger over a filterable list — the shape most consumers need. */
export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [value, setValue] = useState<string>();

		return (
			<Combobox.Root open={open} onOpenChange={setOpen}>
				<Combobox.Trigger asChild>
					<Button variant="secondary">{value ?? 'Select a line of business'}</Button>
				</Combobox.Trigger>
				<Combobox.Content>
					<Command.Root label="Search lines of business">
						<Command.Input placeholder="Search..." />
						<Command.List>
							{LINES_OF_BUSINESS.map(option => (
								<Command.Item
									key={option}
									onSelect={() => {
										setValue(option);
										setOpen(false);
									}}>
									{option}
								</Command.Item>
							))}
						</Command.List>
						<Command.Empty>No options found</Command.Empty>
					</Command.Root>
				</Combobox.Content>
			</Combobox.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// Content portals to the body, so it is outside the story canvas.
		const body = within(document.body);

		await userEvent.click(canvas.getByRole('button', { name: /select a line of business/i }));

		const input = await body.findByRole('combobox', { name: /search lines of business/i });
		await expect(body.getAllByRole('option')).toHaveLength(5);

		await userEvent.type(input, 'flo');
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));

		await userEvent.click(body.getByRole('option', { name: 'Flood' }));

		await waitFor(() => expect(canvas.getByRole('button', { name: 'Flood' })).toBeVisible());
	}
};

/**
 * The surface paints nothing of its own. Two borders on a combobox mean the
 * content was dropped in a `Popover.Content` instead of here.
 */
export const ChromeLessSurface: Story = {
	render: () => (
		<Combobox.Root defaultOpen>
			<Combobox.Trigger asChild>
				<Button variant="secondary">Open</Button>
			</Combobox.Trigger>
			<Combobox.Content>
				<Command.Root label="Search lines of business">
					<Command.Input placeholder="Search..." />
					<Command.List>
						{LINES_OF_BUSINESS.map(option => (
							<Command.Item key={option}>{option}</Command.Item>
						))}
					</Command.List>
					<Command.Empty>No options found</Command.Empty>
				</Command.Root>
			</Combobox.Content>
		</Combobox.Root>
	),
	play: async () => {
		const content = await waitFor(() => {
			const element = document.querySelector('[data-slot="combobox-content"]');
			if (!element) throw new Error('Combobox.Content is not mounted');
			return element;
		});

		const styles = getComputedStyle(content);

		await expect(styles.borderTopWidth).toBe('0px');
		await expect(styles.boxShadow).toBe('none');
		// Any of the transparent spellings is fine; a painted background is not.
		await expect(['transparent', 'rgba(0, 0, 0, 0)']).toContain(styles.backgroundColor);

		// The chrome belongs to the Command panel nested inside it.
		const panel = content.querySelector('[data-slot="command-root"]');
		await expect(panel).toBeInTheDocument();
		await expect(getComputedStyle(panel!).borderTopWidth).not.toBe('0px');
	}
};

/**
 * The surface is 300px wide by default. When the trigger is a full-width form
 * control, match it with `w-(--radix-popover-trigger-width)` instead.
 */
export const MatchingTriggerWidth: Story = {
	render: () => (
		<div className="w-125">
			<Combobox.Root defaultOpen>
				<Combobox.Trigger asChild>
					<Button variant="secondary" align="justify" className="w-full">
						Select a line of business
					</Button>
				</Combobox.Trigger>
				<Combobox.Content className="w-(--radix-popover-trigger-width)">
					<Command.Root label="Search lines of business">
						<Command.Input placeholder="Search..." />
						<Command.List>
							{LINES_OF_BUSINESS.map(option => (
								<Command.Item key={option}>{option}</Command.Item>
							))}
						</Command.List>
						<Command.Empty>No options found</Command.Empty>
					</Command.Root>
				</Combobox.Content>
			</Combobox.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /select a line of business/i });

		const content = await waitFor(() => {
			const element = document.querySelector('[data-slot="combobox-content"]');
			if (!element) throw new Error('Combobox.Content is not mounted');
			return element;
		});

		await waitFor(() =>
			expect(Math.round(content.getBoundingClientRect().width)).toBe(
				Math.round(trigger.getBoundingClientRect().width)
			)
		);
	}
};

/**
 * `Anchor` positions the surface against something other than the trigger —
 * here the search input itself, so the list hangs off the field the user types
 * in. Give `Content` `onOpenAutoFocus` that prevents default, or focus jumps
 * out of that input the moment the list opens.
 */
export const AnchoredToTheSearchField: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		const [search, setSearch] = useState('');

		const matches = LINES_OF_BUSINESS.filter(option =>
			option.toLowerCase().includes(search.trim().toLowerCase())
		);

		return (
			<Combobox.Root open={open} onOpenChange={setOpen}>
				<Combobox.Anchor asChild>
					<Input
						size="sm"
						aria-label="Search lines of business"
						placeholder="Search..."
						value={search}
						onFocus={() => setOpen(true)}
						onChange={event => {
							setSearch(event.target.value);
							setOpen(true);
						}}
					/>
				</Combobox.Anchor>
				<Combobox.Content
					className="w-(--radix-popover-trigger-width)"
					onOpenAutoFocus={event => event.preventDefault()}>
					<Command.Root label="Lines of business" shouldFilter={false}>
						<Command.List>
							{matches.map(option => (
								<Command.Item key={option} value={option}>
									{option}
								</Command.Item>
							))}
						</Command.List>
						<Command.Empty>No options found</Command.Empty>
					</Command.Root>
				</Combobox.Content>
			</Combobox.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const field = canvas.getByRole('textbox', { name: /search lines of business/i });

		await userEvent.click(field);

		// The list collapses to zero height while itemless, so wait on the rows.
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(5));

		await userEvent.type(field, 'flo');

		// Focus stays in the field: the list is anchored to it, not focused itself.
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
		await expect(field).toHaveFocus();
	}
};
