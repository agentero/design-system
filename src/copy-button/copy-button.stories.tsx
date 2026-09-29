import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, spyOn, userEvent, waitFor, within } from 'storybook/test';

import { CopyButton } from './copy-button';

const AGENT_ID = '5b1f8c1e-3a7d-4c2b-9e61-0f4d8a2b7c93';

// Real clipboard writes need a focused, permissioned page; the stories only care
// that CopyButton reacts to the write resolving or failing.
const resolveClipboardWrites = () => {
	spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined);
};

/**
 * CopyButton copies a value to the clipboard and confirms it in place, turning
 * its copy icon into a check for a moment.
 */
const meta = {
	title: 'Components/CopyButton',
	component: CopyButton,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'radio',
			options: ['ghost', 'tertiary', 'secondary']
		},
		size: {
			control: 'radio',
			options: ['xs', 'sm', 'md', 'lg']
		},
		feedbackDuration: {
			control: 'number'
		},
		onCopy: { action: 'copied' },
		onCopyError: { action: 'copy failed' }
	},
	args: {
		value: AGENT_ID,
		label: 'Agent ID',
		onCopy: fn(),
		onCopyError: fn()
	},
	beforeEach: resolveClipboardWrites,
	decorators: [
		Story => (
			<div className="flex min-h-24 items-center justify-center p-10">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The resting button: a ghost icon button whose tooltip and accessible name
 * read "Copy Agent ID".
 *
 * @summary Default copy button for an identifier
 */
export const Default: Story = {};

/**
 * Pressing it writes the value, swaps the copy icon for a green check,
 * announces "Agent ID copied" and calls `onCopy`. The check goes away after
 * `feedbackDuration`.
 *
 * @summary Check feedback shown after a successful copy
 */
export const Copied: Story = {
	args: { feedbackDuration: 300 },
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: 'Copy Agent ID' });

		await userEvent.click(button);

		await expect(navigator.clipboard.writeText).toHaveBeenCalledWith(AGENT_ID);
		await expect(args.onCopy).toHaveBeenCalledWith(AGENT_ID);
		await expect(button).toHaveAttribute('data-copied');
		await expect(canvas.getByRole('status')).toHaveTextContent('Agent ID copied');

		await waitFor(() => expect(button).not.toHaveAttribute('data-copied'));
		await expect(canvas.getByRole('status')).toBeEmptyDOMElement();
	}
};

/**
 * When the browser refuses the write, the icon stays as it is and
 * `onCopyError` receives the error, so the app can explain what happened.
 *
 * @summary No check and an error callback when copying fails
 */
export const CopyFailed: Story = {
	beforeEach: () => {
		spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('Clipboard blocked'));
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: 'Copy Agent ID' });

		await userEvent.click(button);

		await waitFor(() => expect(args.onCopyError).toHaveBeenCalled());
		await expect(args.onCopy).not.toHaveBeenCalled();
		await expect(button).not.toHaveAttribute('data-copied');
	}
};

/**
 * The common layout: the value truncated in a row, with the button copying it
 * whole.
 *
 * @summary Next to a truncated value it copies in full
 */
export const WithValue: Story = {
	render: args => (
		<div className="flex w-64 min-w-0 items-center gap-1">
			<span className="min-w-0 truncate text-sm text-text-default-base-primary" title={args.value}>
				{args.value}
			</span>
			<CopyButton {...args} />
		</div>
	)
};

/**
 * Every size side by side, following the Button scale.
 *
 * @summary Visual comparison of all copy button sizes
 */
export const AllSizes: Story = {
	render: args => (
		<div className="flex items-center gap-4">
			{(['xs', 'sm', 'md', 'lg'] as const).map(size => (
				<CopyButton key={size} {...args} size={size} />
			))}
		</div>
	)
};

/**
 * The ghost default next to the tertiary and secondary treatments, for rows
 * that need the button to stand out more.
 *
 * @summary Visual comparison of the supported variants
 */
export const AllVariants: Story = {
	render: args => (
		<div className="flex items-center gap-4">
			{(['ghost', 'tertiary', 'secondary'] as const).map(variant => (
				<CopyButton key={variant} {...args} variant={variant} />
			))}
		</div>
	)
};
