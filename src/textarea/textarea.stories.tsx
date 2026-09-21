import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { TextArea } from './textarea';

/**
 * TextArea is the base multi-line text control, with Input's skin, sizes and
 * states. It wires nothing on its own: `id`, `aria-invalid` and
 * `aria-describedby` are plain props, set by whoever owns the field.
 */
const meta = {
	title: 'Components/TextArea',
	component: TextArea,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		},
		rows: { control: 'number' },
		placeholder: { control: 'text' },
		maxLength: { control: 'number' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' }
	},
	args: {
		placeholder: 'Anything the underwriter should know',
		'aria-label': 'Notes'
	},
	decorators: [
		Story => (
			<div style={{ maxWidth: '24rem' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default control at `md`: three rows at rest and a vertical resize handle
 * the user can drag to make it taller.
 *
 * @summary Default standalone text area
 */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAttribute('data-slot', 'textarea');
		await expect(getComputedStyle(textarea).resize).toBe('vertical');

		await userEvent.type(textarea, 'Roof replaced in 2024.{enter}No prior claims.');
		await expect(textarea).toHaveValue('Roof replaced in 2024.\nNo prior claims.');
	}
};

/**
 * The three sizes mirror Input's: the first row measures one Input of the same
 * size and the minimum height shows three rows.
 *
 * @summary The three sizes, three rows tall at rest
 */
export const AllSizes: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<TextArea {...args} size="sm" aria-label="Small" placeholder="sm — 76px, three rows" />
			<TextArea {...args} size="md" aria-label="Medium" placeholder="md — 84px, three rows" />
			<TextArea {...args} size="lg" aria-label="Large" placeholder="lg — 96px, three rows" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const height = (name: string) =>
			canvas.getByRole('textbox', { name }).getBoundingClientRect().height;

		await expect(height('Small')).toBe(76);
		await expect(height('Medium')).toBe(84);
		await expect(height('Large')).toBe(96);
		await expect(canvas.getByRole('textbox', { name: 'Large' })).toHaveAttribute('data-size', 'lg');
	}
};

/**
 * `rows` sets a taller initial height when three rows are not enough.
 *
 * @summary Taller initial height through the native rows attribute
 */
export const Rows: Story = {
	args: {
		rows: 6,
		placeholder: 'Six rows visible before scrolling'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAttribute('rows', '6');
		await expect(textarea.getBoundingClientRect().height).toBeGreaterThan(84);
	}
};

/**
 * The invalid treatment comes purely from `aria-invalid`; point
 * `aria-describedby` at the message so it is read with the control.
 *
 * @summary Invalid state driven by aria-invalid
 */
export const Invalid: Story = {
	args: {
		'aria-label': 'Reason',
		'aria-invalid': true,
		'aria-describedby': 'reason-error',
		defaultValue: 'n/a'
	},
	render: args => (
		<div style={{ display: 'grid', gap: '0.25rem' }}>
			<TextArea {...args} />
			<span id="reason-error">Tell us why you are cancelling.</span>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Reason' });

		await expect(textarea).toHaveAttribute('aria-invalid', 'true');
		await expect(textarea).toHaveAccessibleDescription('Tell us why you are cancelling.');
	}
};

/**
 * @summary Disabled state
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		defaultValue: 'Cannot be edited'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toBeDisabled();
		await userEvent.type(textarea, 'nope');
		await expect(textarea).toHaveValue('Cannot be edited');
	}
};

/**
 * @summary Read-only value that stays focusable and copyable
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true,
		defaultValue: 'Copy me, but do not change me'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAttribute('readonly');
		await expect(textarea).not.toBeDisabled();
	}
};
