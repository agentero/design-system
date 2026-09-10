import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Label } from './label';

/**
 * Label is the accessible caption for a form control, built on Radix's Label
 * primitive: it associates with the control through `htmlFor` and does not select
 * text on double-click.
 *
 * `optional` and `required` are display-only affordances — the control itself
 * still has to carry `required` / `aria-required`.
 */
const meta = {
	title: 'Components/Label',
	component: Label,
	tags: ['autodocs'],
	argTypes: {
		optional: { control: 'boolean' },
		required: { control: 'boolean' }
	},
	args: {
		children: 'Email'
	}
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A plain caption, associated with its control through `htmlFor`.
 *
 * @summary Default label associated with a control
 */
export const Default: Story = {
	args: {
		htmlFor: 'email'
	},
	render: args => (
		<>
			<Label {...args} />
			<input id="email" placeholder="you@example.com" />
		</>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('Email')).toBeInTheDocument();
	}
};

/**
 * Appends a muted " (optional)" suffix for fields that can be left blank.
 *
 * @summary Optional field with a muted suffix
 */
export const Optional: Story = {
	args: {
		optional: true,
		children: 'Phone number'
	}
};

/**
 * Appends an asterisk. It is `aria-hidden`, so the control still needs its own
 * `required` attribute for assistive technology.
 *
 * @summary Required field with a decorative asterisk
 */
export const Required: Story = {
	args: {
		required: true,
		children: 'Full name'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const text = canvas.getByText('Full name');
		const asterisk = canvas.getByText('*');

		await expect(asterisk).toHaveAttribute('aria-hidden', 'true');

		// Spacing comes from the row's `gap-1` alone. A margin on the asterisk on top
		// of it would put it 8px from the caption, where Figma spaces every part by 4.
		await expect(asterisk.getBoundingClientRect().left - text.getBoundingClientRect().right).toBe(
			4
		);
	}
};

/**
 * Contradictory props do not throw — `required` wins and the optional suffix is
 * dropped, so a mistake never takes the page down.
 *
 * @summary required takes precedence over optional
 */
export const RequiredWinsOverOptional: Story = {
	args: {
		optional: true,
		required: true,
		children: 'Agency name'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('*')).toBeInTheDocument();
		await expect(canvas.getByText('Agency name')).not.toHaveClass(/after:content/);
	}
};
