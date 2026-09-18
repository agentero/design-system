import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Label } from '../label';
import { Checkbox } from './checkbox';

/**
 * Base control for a boolean the user confirms later. Headless: pair it with
 * a `Label` and `htmlFor`, or give it an `aria-label`. There is no `status`
 * prop — set `aria-invalid` and the destructive treatment follows.
 */
const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		checked: { control: 'radio', options: [true, false, 'indeterminate'] },
		defaultChecked: { control: 'radio', options: [true, false, 'indeterminate'] },
		disabled: { control: 'boolean' },
		required: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' },
		onCheckedChange: { action: 'checkedChange' }
	},
	args: {
		disabled: false,
		'aria-label': 'Select row'
	}
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

/** @summary Default standalone checkbox */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox', { name: 'Select row' });

		await expect(checkbox).not.toBeChecked();
		await userEvent.click(checkbox);
		await expect(checkbox).toBeChecked();
	}
};

/** @summary Checked state */
export const Checked: Story = {
	args: { defaultChecked: true }
};

/**
 * A state you set, never one the user clicks into: use it for a parent that
 * governs a partially selected group.
 *
 * @summary Mixed state for a partially selected group
 */
export const Indeterminate: Story = {
	args: { checked: 'indeterminate' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox', { name: 'Select row' });

		await expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
	}
};

/**
 * Starts mixed without a controlled value, then toggles through checked and unchecked.
 *
 * @summary Uncontrolled checkbox starting in the mixed state
 */
export const UncontrolledIndeterminate: Story = {
	args: { defaultChecked: 'indeterminate' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox', { name: 'Select row' });

		await expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
		await userEvent.click(checkbox);
		await expect(checkbox).toBeChecked();
		await userEvent.keyboard(' ');
		await expect(checkbox).toHaveAttribute('aria-checked', 'false');
	}
};

/** @summary Disabled in every state */
export const Disabled: Story = {
	render: () => (
		<div className="flex items-center gap-6">
			<Checkbox disabled aria-label="Disabled unchecked" />
			<Checkbox disabled defaultChecked aria-label="Disabled checked" />
			<Checkbox disabled checked="indeterminate" aria-label="Disabled mixed" />
		</div>
	)
};

/** @summary Failed validation, driven by aria-invalid */
export const Invalid: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<Checkbox id="terms" aria-invalid aria-describedby="terms-error" required />
				<Label htmlFor="terms">I accept the terms of service</Label>
			</div>
			<p id="terms-error" className="text-sm text-text-input-destructive">
				You must accept the terms to continue.
			</p>
		</div>
	)
};

/** @summary Labelled checkbox with the text in the hit target */
export const WithLabel: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Checkbox id="newsletter" name="newsletter" />
			<Label htmlFor="newsletter">Email me product updates</Label>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByText('Email me product updates'));
		await expect(canvas.getByRole('checkbox', { name: 'Email me product updates' })).toBeChecked();
	}
};

/** @summary Controlled checkbox driven by component state */
export const Controlled: Story = {
	render: () => {
		const [accepted, setAccepted] = useState(false);

		return (
			<div className="flex items-center gap-2">
				<Checkbox
					id="controlled"
					checked={accepted}
					onCheckedChange={value => setAccepted(value === true)}
				/>
				<Label htmlFor="controlled">Auto-renew policy {accepted ? '(on)' : '(off)'}</Label>
			</div>
		);
	}
};

/** @summary Parent select-all checkbox governing a group */
export const SelectAll: Story = {
	render: () => {
		const carriers = ['Openly', 'Lemonade', 'Bamboo'];
		const [selected, setSelected] = useState<string[]>(['Openly']);
		const allSelected = selected.length === carriers.length;

		return (
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-2">
					<Checkbox
						id="select-all"
						checked={allSelected ? true : selected.length > 0 ? 'indeterminate' : false}
						onCheckedChange={value => setSelected(value === true ? carriers : [])}
					/>
					<Label htmlFor="select-all">Select all carriers</Label>
				</div>
				<div className="ms-6 flex flex-col gap-2">
					{carriers.map(carrier => (
						<div key={carrier} className="flex items-center gap-2">
							<Checkbox
								id={carrier}
								checked={selected.includes(carrier)}
								onCheckedChange={value =>
									setSelected(prev =>
										value === true ? [...prev, carrier] : prev.filter(name => name !== carrier)
									)
								}
							/>
							<Label htmlFor={carrier}>{carrier}</Label>
						</div>
					))}
				</div>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const selectAll = canvas.getByRole('checkbox', { name: 'Select all carriers' });

		await expect(selectAll).toHaveAttribute('aria-checked', 'mixed');
		await userEvent.click(selectAll);
		await expect(canvas.getByRole('checkbox', { name: 'Bamboo' })).toBeChecked();
	}
};

/**
 * A surrounding selection container must not change the checkbox's own glyph.
 *
 * @summary Mixed checkbox inside another selected group
 */
export const InsideSelectedGroup: Story = {
	render: () => (
		<div className="group" data-state="checked">
			<Checkbox aria-label="Select carriers" defaultChecked="indeterminate" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const checkbox = within(canvasElement).getByRole('checkbox', { name: 'Select carriers' });
		const [check, minus] = checkbox.querySelectorAll('[data-slot=checkbox-indicator] svg');
		await expect(check).not.toBeVisible();
		await expect(minus).toBeVisible();
		await userEvent.click(checkbox);
		await expect(check).toBeVisible();
		await expect(minus).not.toBeVisible();
	}
};

/**
 * Preserves the legacy palette and 16px footprint for every value and validation state.
 *
 * @summary Legacy checkbox colours across all interaction states
 */
export const LegacyStates: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			{[false, true].map(invalid => (
				<div key={String(invalid)} className="flex flex-col gap-4">
					{[false, true].map(disabled => (
						<div key={String(disabled)} className="flex items-center gap-6">
							{([false, true, 'indeterminate'] as const).map(checked => (
								<Checkbox
									key={String(checked)}
									aria-label={`${invalid ? 'Invalid' : 'Valid'} ${disabled ? 'disabled' : 'enabled'} ${checked}`}
									checked={checked}
									disabled={disabled}
									aria-invalid={invalid}
								/>
							))}
						</div>
					))}
				</div>
			))}
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const states = [
			{
				name: 'Valid enabled',
				border: 'rgb(207, 210, 219)',
				fill: 'rgb(36, 36, 36)',
				cursor: 'pointer'
			},
			{
				name: 'Valid disabled',
				border: 'rgb(227, 227, 227)',
				fill: 'rgb(205, 205, 205)',
				cursor: 'not-allowed'
			},
			{
				name: 'Invalid enabled',
				border: 'rgb(217, 38, 38)',
				fill: 'rgb(217, 38, 38)',
				cursor: 'pointer'
			},
			{
				name: 'Invalid disabled',
				border: 'rgb(240, 168, 168)',
				fill: 'rgb(240, 168, 168)',
				cursor: 'not-allowed'
			}
		];
		for (const state of states) {
			for (const value of ['false', 'true', 'indeterminate']) {
				const checkbox = canvas.getByRole('checkbox', { name: `${state.name} ${value}` });
				const styles = getComputedStyle(checkbox);
				await expect(checkbox.getBoundingClientRect().width).toBe(16);
				await expect(checkbox.getBoundingClientRect().height).toBe(16);
				await expect(styles.borderRadius).toBe('4px');
				await expect(styles.borderWidth).toBe('1px');
				await expect(styles.backgroundColor).toBe(
					value === 'false' ? 'rgb(255, 255, 255)' : state.fill
				);
				await expect(styles.borderColor).toBe(value === 'false' ? state.border : state.fill);
				await expect(styles.cursor).toBe(state.cursor);
			}
		}
	}
};
