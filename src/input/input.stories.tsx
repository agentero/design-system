import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Input } from './input';

/**
 * Input is the base single-line text control. It is intentionally unaware of
 * form fields and form libraries: `id`, `aria-invalid` and `aria-describedby`
 * are plain props, set by a field wrapper or by hand.
 *
 * There is no `status` prop. Mark the control `aria-invalid` and the
 * destructive border follows, so the styling can never disagree with what
 * assistive technology announces.
 */
const meta = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		},
		type: {
			control: 'select',
			options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time']
		},
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' }
	},
	args: {
		type: 'text',
		placeholder: 'Insert value',
		'aria-label': 'Value'
	}
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default control at `md`, usable anywhere without a surrounding field.
 *
 * @summary Default standalone input
 */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Value' });

		await userEvent.type(input, 'Typed by the user');
		await expect(input).toHaveValue('Typed by the user');
	}
};

/**
 * `sm` (32px) keeps dense layouts compact where vertical space is tight.
 *
 * @summary Small 32px control for dense layouts
 */
export const Small: Story = {
	args: {
		size: 'sm'
	}
};

/**
 * `md` (40px) is the default and covers standard form density.
 *
 * @summary Medium 40px control, the default
 */
export const Medium: Story = {
	args: {
		size: 'md'
	}
};

/**
 * `lg` (48px) suits low-density forms and larger touch targets. It also raises
 * the text to `base` and the corner radius to `lg`.
 *
 * @summary Large 48px control for low-density forms
 */
export const Large: Story = {
	args: {
		size: 'lg'
	}
};

/**
 * All three heights together for visual comparison.
 *
 * @summary Visual comparison of the three input sizes
 */
export const AllSizes: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem', maxWidth: '20rem' }}>
			<Input {...args} size="sm" aria-label="Small input" placeholder="sm — 32px" />
			<Input {...args} size="md" aria-label="Medium input" placeholder="md — 40px" />
			<Input {...args} size="lg" aria-label="Large input" placeholder="lg — 48px" />
		</div>
	)
};

/**
 * A range of input types. The type picks the on-screen keyboard on touch
 * devices and the browser's own parsing, so set it even when you validate
 * yourself.
 *
 * @summary Common input types side by side
 */
export const Types: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem', maxWidth: '20rem' }}>
			<Input {...args} type="text" aria-label="Text" placeholder="Text" />
			<Input {...args} type="email" aria-label="Email address" placeholder="you@example.com" />
			<Input {...args} type="password" aria-label="Password" placeholder="Password" />
			<Input {...args} type="number" aria-label="Amount" placeholder="0" />
			<Input {...args} type="date" aria-label="Date" placeholder="" />
		</div>
	)
};

/**
 * The invalid treatment comes purely from `aria-invalid`, so the border can
 * never disagree with what assistive technology announces. Point
 * `aria-describedby` at the message so it is read out with the control.
 *
 * @summary Invalid state driven by aria-invalid
 */
export const Invalid: Story = {
	args: {
		type: 'email',
		'aria-label': 'Email',
		'aria-invalid': true,
		'aria-describedby': 'email-error',
		defaultValue: 'not-an-email'
	},
	render: args => (
		<div style={{ display: 'grid', gap: '0.25rem', maxWidth: '20rem' }}>
			<Input {...args} />
			<span id="email-error">Enter a valid email address.</span>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Email' });

		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(input).toHaveAccessibleDescription('Enter a valid email address.');
	}
};

/**
 * A disabled input keeps its value readable but blocks interaction, drops its
 * shadow and leaves the tab order.
 *
 * @summary Disabled state
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		defaultValue: 'Cannot be edited'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Value' });

		await expect(input).toBeDisabled();
		await userEvent.type(input, 'nope');
		await expect(input).toHaveValue('Cannot be edited');
	}
};

/**
 * Read-only inputs stay focusable and copyable and still submit their value —
 * reach for this over `disabled` when the user needs to read or copy something
 * they cannot change.
 *
 * @summary Read-only value that stays focusable and copyable
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true,
		defaultValue: 'Copy me, but do not change me'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Value' });

		await expect(input).toHaveAttribute('readonly');
		await expect(input).not.toBeDisabled();
	}
};
