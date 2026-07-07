import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from './switch';

/**
 * Two-state toggle for a setting that takes effect immediately. Prefer it over
 * a Checkbox for a single boolean that applies instantly, and pair it with a
 * `<label htmlFor>` to give it an accessible name.
 */
const meta = {
	title: 'Components/Switch',
	component: Switch,
	tags: ['autodocs'],
	argTypes: {
		size: { control: 'radio', options: ['sm', 'md'] },
		checked: { control: 'boolean' },
		disabled: { control: 'boolean' }
	},
	args: {
		size: 'md',
		disabled: false
	}
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { defaultChecked: true, 'aria-label': 'Toggle setting' }
};

/** The `sm` and `md` sizes compared. */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-6">
			<div className="flex items-center gap-2">
				<Switch id="size-sm" size="sm" defaultChecked />
				<label htmlFor="size-sm" className="text-sm text-text-default-base-primary">
					Small
				</label>
			</div>
			<div className="flex items-center gap-2">
				<Switch id="size-md" size="md" defaultChecked />
				<label htmlFor="size-md" className="text-sm text-text-default-base-primary">
					Medium
				</label>
			</div>
		</div>
	)
};

/** Unchecked and checked tracks. */
export const States: Story = {
	render: args => (
		<div className="flex items-center gap-6">
			<Switch {...args} defaultChecked={false} aria-label="Off" />
			<Switch {...args} defaultChecked aria-label="On" />
		</div>
	)
};

/** Disabled switches are dimmed and reject pointer and keyboard interaction. */
export const Disabled: Story = {
	render: () => (
		<div className="flex items-center gap-6">
			<Switch disabled aria-label="Disabled off" />
			<Switch disabled defaultChecked aria-label="Disabled on" />
		</div>
	)
};

/** Controlled switch wired to component state via `checked` + `onCheckedChange`. */
export const Controlled: Story = {
	render: () => {
		const [enabled, setEnabled] = useState(false);

		return (
			<div className="flex items-center gap-2">
				<Switch id="controlled" checked={enabled} onCheckedChange={setEnabled} />
				<label htmlFor="controlled" className="text-sm text-text-default-base-primary">
					Notifications {enabled ? 'on' : 'off'}
				</label>
			</div>
		);
	}
};

/** Switch aligned in a labelled settings row. */
export const SettingRow: Story = {
	render: () => (
		<div className="flex w-80 items-center justify-between gap-4 rounded-lg border border-border-default-base-primary bg-bg-default-base-primary p-4">
			<div className="flex flex-col gap-0.5">
				<label htmlFor="marketing" className="text-sm font-medium text-text-default-base-primary">
					Marketing emails
				</label>
				<p className="text-xs text-text-default-base-secondary">
					Receive product updates and offers.
				</p>
			</div>
			<Switch id="marketing" defaultChecked />
		</div>
	)
};
