import { useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../button';
import { InputGroup } from '../input-group';
import { Label } from '../label';
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
			<span id="reason-error" className="text-sm text-text-input-destructive">
				Tell us why you are cancelling.
			</span>
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

/**
 * `maxLength` caps the value and shows the count inside the box, bottom
 * right. The count is part of the control's description, so a screen reader
 * hears "0 of 140 characters" with the field instead of on every keystroke.
 *
 * @summary Character count inside the box, driven by maxLength
 */
export const WithCounter: Story = {
	args: { maxLength: 140 },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;

		await expect(textarea).toHaveAccessibleDescription('0 of 140 characters');
		await expect(counter).toHaveTextContent('0/140');

		await userEvent.type(textarea, 'Roof replaced in 2024.');

		await expect(counter).toHaveTextContent('22/140');
		await expect(textarea).toHaveAccessibleDescription('22 of 140 characters');

		const box = textarea.getBoundingClientRect();
		const count = counter.getBoundingClientRect();
		await expect(box.right - count.right).toBe(12);
		await expect(box.bottom - count.bottom).toBe(8);
		await expect(getComputedStyle(textarea).paddingBottom).toBe('28px');
	}
};

/**
 * A controlled value counts too, and one longer than `maxLength` — set by
 * code, since typing stops at the cap — turns the count destructive.
 *
 * @summary Controlled count, destructive past the limit
 */
export const CounterOverLimit: Story = {
	args: {
		maxLength: 10,
		value: 'Twelve chars',
		onChange: () => {},
		'aria-invalid': true
	},
	play: async ({ canvasElement }) => {
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;

		await expect(counter).toHaveTextContent('12/10');
		await expect(counter).toHaveAttribute('data-over');
	}
};

const ResetForm = () => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [, setResets] = useState(0);

	return (
		<div className="flex flex-col items-start gap-2">
			<TextArea ref={textareaRef} aria-label="Notes" maxLength={100} defaultValue="hello" />
			<Button
				variant="secondary"
				size="sm"
				onClick={() => {
					textareaRef.current!.value = 'bye';
					setResets(count => count + 1);
				}}>
				Reset
			</Button>
		</div>
	);
};

/**
 * A form that rewrites an uncontrolled value, as a react-hook-form `reset`
 * does, fires no input event; the count reads the `<textarea>` again when the
 * form re-renders.
 *
 * @summary Uncontrolled count follows a value rewritten by the form
 */
export const CounterAfterReset: Story = {
	render: () => <ResetForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;

		await expect(counter).toHaveTextContent('5/100');
		await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));
		await expect(counter).toHaveTextContent('3/100');
	}
};

/**
 * A native form reset restores the default value without an input event; the
 * count listens to the form's `reset` and follows.
 *
 * @summary Uncontrolled count follows a native form reset
 */
export const CounterAfterNativeReset: Story = {
	render: () => (
		<form className="flex flex-col items-start gap-2">
			<TextArea aria-label="Notes" maxLength={100} defaultValue="hello" />
			<Button type="reset" variant="secondary" size="sm">
				Reset
			</Button>
		</form>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;

		await userEvent.type(canvas.getByRole('textbox', { name: 'Notes' }), ' there');
		await expect(counter).toHaveTextContent('11/100');
		await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));
		await waitFor(() => expect(counter).toHaveTextContent('5/100'));
	}
};

/**
 * Without a count the wrapper is `display: contents`, so the `<textarea>`
 * lays out as a direct child of its container: a width or a flex item class
 * in `className` works as on a bare `<textarea>`.
 *
 * @summary Without maxLength the wrapper leaves layout to the textarea
 */
export const LayoutWithoutCounter: Story = {
	render: () => (
		<div className="flex w-96 items-start gap-4">
			<TextArea aria-label="Notes" className="w-auto flex-1" />
			<Button variant="secondary" size="sm">
				Clear
			</Button>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });
		const button = canvas.getByRole('button', { name: 'Clear' });

		await expect(getComputedStyle(textarea.parentElement!).display).toBe('contents');
		await expect(textarea.getBoundingClientRect().right + 16).toBeCloseTo(
			button.getBoundingClientRect().left,
			0
		);
	}
};

const ToggleLimit = () => {
	const [limited, setLimited] = useState(false);

	return (
		<div className="flex flex-col items-start gap-2">
			<TextArea aria-label="Notes" maxLength={limited ? 100 : undefined} />
			<Button variant="secondary" size="sm" onClick={() => setLimited(value => !value)}>
				Toggle limit
			</Button>
		</div>
	);
};

/**
 * The `<textarea>` keeps its place in the tree whether or not there is a
 * count, so adding or removing `maxLength` keeps what the user typed.
 *
 * @summary Adding a limit keeps the same control and its text
 */
export const ToggleMaxLength: Story = {
	render: () => <ToggleLimit />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await userEvent.type(textarea, 'Draft');
		await userEvent.click(canvas.getByRole('button', { name: 'Toggle limit' }));

		await expect(canvas.getByRole('textbox', { name: 'Notes' })).toBe(textarea);
		await expect(textarea).toHaveValue('Draft');
		await expect(canvasElement.querySelector('[data-slot=textarea-counter]')).toHaveTextContent(
			'5/100'
		);
	}
};

/**
 * The count is anchored to the `<textarea>`, so a width set through
 * `className` keeps it in the box's corner, and it never joins the name of a
 * `<label>` wrapped around the control.
 *
 * @summary Count stays in the corner of a narrower box and out of the label's name
 */
export const CounterNarrowInLabel: Story = {
	render: () => (
		<Label className="flex-col items-start font-normal">
			Notes
			<TextArea className="w-64" maxLength={100} defaultValue="hello" />
		</Label>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
		const box = textarea.getBoundingClientRect();
		const count = counter.getBoundingClientRect();

		await expect(box.width).toBe(256);
		await expect(box.right - count.right).toBe(12);
		await expect(box.bottom - count.bottom).toBe(8);
		await expect(textarea).toHaveAccessibleDescription('5 of 100 characters');
	}
};

/**
 * Inside an `InputGroup` the count keeps its room: the group strips the
 * textarea's own padding, but not the space reserved under the text.
 *
 * @summary Count inside an InputGroup keeps the text clear of it
 */
export const CounterInInputGroup: Story = {
	render: () => (
		<InputGroup.Root>
			<TextArea aria-label="Notes" maxLength={100} defaultValue="hello" />
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const textarea = within(canvasElement).getByRole('textbox', { name: 'Notes' });

		await expect(getComputedStyle(textarea).paddingBottom).toBe('28px');
	}
};
