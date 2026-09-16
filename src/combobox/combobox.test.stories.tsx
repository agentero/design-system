import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Combobox } from '.';
import { Button } from '../button';
import { Command } from '../command';
import * as Examples from './combobox.stories';

/** Interaction checks reuse the public examples without changing their preview state. */
const meta = {
	title: 'Tests/Combobox',
	component: Combobox.Root,
	tags: ['!dev', '!autodocs', '!manifest']
} satisfies Meta<typeof Combobox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/** @summary Verify Default behavior */
export const Default: Story = {
	...Examples.Default,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await expect(body.queryByRole('dialog')).not.toBeInTheDocument();
		await userEvent.click(canvas.getByRole('button', { name: 'Select a line of business' }));

		const dialog = await body.findByRole('dialog', { name: 'Select a line of business' });
		await expect(canvas.getByRole('button', { name: 'Select a line of business' })).toHaveAttribute(
			'aria-controls',
			dialog.id
		);
		const input = await body.findByRole('combobox', { name: 'Search lines of business' });
		await expect(body.getAllByRole('option')).toHaveLength(5);

		await userEvent.type(input, 'flo');
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));

		await userEvent.click(body.getByRole('option', { name: 'Flood' }));

		const trigger = canvas.getByRole('button', { name: 'Flood' });
		await waitFor(() => expect(trigger).toHaveFocus());
		await userEvent.click(trigger);
		await body.findByRole('dialog', { name: 'Select a line of business' });
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
		await expect(trigger).toHaveFocus();
	}
};

/** @summary Verify ChromeLessSurface behavior */
export const ChromeLessSurface: Story = {
	...Examples.ChromeLessSurface,
	play: async () => {
		const content = await waitFor(() => {
			const element = document.querySelector('[data-slot="combobox-content"]');
			if (!element) throw new Error('Combobox.Content is not mounted');
			return element;
		});

		const styles = getComputedStyle(content);

		await expect(styles.borderTopWidth).toBe('0px');
		await expect(styles.boxShadow).toBe('none');
		await expect(styles.width).toBe('300px');
		await expect(styles.animationName).toBe('comboboxIn');
		await expect(styles.animationDuration).toBe('0.1s');
		await expect(content.querySelector('[data-slot=combobox-content-inner]')).toBeInTheDocument();
		await expect(['transparent', 'rgba(0, 0, 0, 0)']).toContain(styles.backgroundColor);

		const panel = content.querySelector('[data-slot="command-root"]');
		await expect(panel).toBeInTheDocument();
		await expect(getComputedStyle(panel!).borderTopWidth).not.toBe('0px');
	}
};

/** @summary Verify MatchingTriggerWidth behavior */
export const MatchingTriggerWidth: Story = {
	...Examples.MatchingTriggerWidth,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: 'Select a line of business' });

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

/** @summary Verify AnchoredToTheSearchField behavior */
export const AnchoredToTheSearchField: Story = {
	...Examples.AnchoredToTheSearchField,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const field = canvas.getByRole('combobox', { name: 'Search lines of business' });

		await expect(field).toHaveValue('');
		await expect(field).toHaveAttribute('aria-expanded', 'false');
		await expect(field).not.toHaveAttribute('aria-controls');
		await userEvent.click(field);
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(5));
		await expect(body.queryByRole('dialog')).not.toBeInTheDocument();
		await expect(field).toHaveAttribute('aria-controls', body.getByRole('listbox').id);
		await userEvent.click(field);
		await expect(field).toHaveAttribute('aria-expanded', 'true');
		await expect(body.getByRole('listbox')).toBeVisible();

		await userEvent.keyboard('{ArrowDown}');
		const secondOption = body.getByRole('option', { name: 'Dwelling Fire' });
		await expect(secondOption).toHaveAttribute('aria-selected', 'true');
		await expect(field).toHaveAttribute('aria-activedescendant', secondOption.id);
		await userEvent.keyboard('{Enter}');
		await expect(field).toHaveValue('Dwelling Fire');
		await expect(field).toHaveAttribute('aria-expanded', 'false');
		await expect(field).toHaveFocus();
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());

		await userEvent.click(field);
		await userEvent.clear(field);
		await userEvent.type(field, 'flo');
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
		await expect(field).toHaveFocus();
		await userEvent.keyboard('{Escape}');
		await expect(field).toHaveAttribute('aria-expanded', 'false');
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
	}
};

/** @summary Verify CustomContainer behavior */
export const CustomContainer: Story = {
	...Examples.CustomContainer,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: 'Open options' });
		await userEvent.click(trigger);
		const container = within(canvas.getByTestId('combobox-container'));
		const dialog = await container.findByRole('dialog', { name: 'Custom options' });
		await waitFor(() => expect(dialog).toBeVisible());
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(container.queryByRole('dialog')).not.toBeInTheDocument());
		await expect(trigger).toHaveFocus();
	}
};

/** @summary Verify ExternalPortal behavior */
export const ExternalPortal: Story = {
	...Examples.ExternalPortal,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container = within(canvas.getByTestId('external-combobox-container'));
		const dialog = await container.findByRole('dialog', { name: 'External options' });
		await waitFor(() => expect(dialog).toBeVisible());
		await userEvent.click(canvas.getByRole('heading', { name: 'External options' }));
		await waitFor(() => expect(container.queryByRole('dialog')).not.toBeInTheDocument());
	}
};

/** @summary Verify the default 8px offset shared with Popover, DropdownMenu and HoverCard */
export const DefaultSpacing: Story = {
	render: () => (
		<Combobox.Root defaultOpen>
			<Combobox.Trigger asChild>
				<Button>Choose a state</Button>
			</Combobox.Trigger>
			<Combobox.Content label="Choose a state" side="bottom" avoidCollisions={false}>
				<Command.Root label="Search states">
					<Command.Input />
					<Command.List>
						<Command.Item>California</Command.Item>
					</Command.List>
				</Command.Root>
			</Combobox.Content>
		</Combobox.Root>
	),
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('button', { name: 'Choose a state' });
		const dialog = await within(document.body).findByRole('dialog', { name: 'Choose a state' });
		await waitFor(() =>
			expect(
				dialog.getBoundingClientRect().top - trigger.getBoundingClientRect().bottom
			).toBeCloseTo(8, 0)
		);
	}
};

/** @summary Verify MarketplaceSpacing behavior */
export const MarketplaceSpacing: Story = {
	...Examples.MarketplaceSpacing,
	play: async ({ canvasElement }) => {
		const trigger = within(canvasElement).getByRole('button', { name: 'Choose a state' });
		const dialog = await within(document.body).findByRole('dialog', { name: 'Choose a state' });
		await waitFor(() =>
			expect(
				dialog.getBoundingClientRect().top - trigger.getBoundingClientRect().bottom
			).toBeCloseTo(4, 0)
		);
	}
};
