import { ReactNode, use, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { FieldTextArea } from '.';
import { Field, FieldContext, FieldErrorLike } from '../field';
import { Label } from '../label';
import { TextArea, TextAreaContext, type TextAreaContextValue } from '../textarea';

/**
 * FieldTextArea is a `Field.Root` for a multi-line text control. It provides
 * `TextAreaContext`, so the `TextArea` inside associates itself with the label
 * and the messages and takes `invalid`, `required`, `disabled` and `readOnly`
 * from the field — no `id`, `htmlFor`, `aria-describedby` or `aria-invalid`
 * written by hand.
 *
 * It knows nothing about form libraries, and its contexts compose: a provider
 * nested inside it can extend `TextAreaContext` with `value`, `onChange`,
 * `onBlur` and `name`, and `FieldContext` with the errors, as the last story
 * shows.
 */
const meta = {
	title: 'Components/FieldTextArea',
	component: FieldTextArea,
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['vertical', 'horizontal', 'responsive']
		},
		invalid: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' }
	},
	args: {
		orientation: 'vertical',
		invalid: false,
		disabled: false,
		readOnly: false,
		required: false
	},
	decorators: [
		Story => (
			<div style={{ maxWidth: '28rem' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof FieldTextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The composition consumers write: a label, the design system's `TextArea` and
 * helper text. The label points at the control and the control is described
 * by the text, all through context.
 *
 * @summary Label, TextArea and description wired with no ids
 */
export const Default: Story = {
	render: args => (
		<FieldTextArea {...args}>
			<Label>Notes</Label>
			<TextArea placeholder="Anything the underwriter should know" />
			<Field.Description>Shared with the carrier along with the request.</Field.Description>
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAttribute('data-slot', 'textarea');
		await expect(textarea).toHaveAccessibleDescription(
			'Shared with the carrier along with the request.'
		);
		await expect(textarea).not.toHaveAttribute('aria-invalid');
	}
};

/**
 * `required` on the field reaches both the label's asterisk and the control's
 * `required` attribute.
 *
 * @summary Required field driven from the root alone
 */
export const Required: Story = {
	args: {
		required: true
	},
	render: args => (
		<FieldTextArea {...args}>
			<Label>Reason</Label>
			<TextArea placeholder="Tell us in your own words" />
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Reason' })).toBeRequired();
		await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
	}
};

/**
 * `invalid` on the field sets `aria-invalid` on the control, which drives its
 * destructive border, and the error is announced with the control.
 *
 * @summary Invalid field with the TextArea styled by aria-invalid
 */
export const Invalid: Story = {
	args: {
		invalid: true
	},
	render: args => (
		<FieldTextArea {...args}>
			<Label>Reason</Label>
			<TextArea defaultValue="n/a" />
			<Field.Error errors={[{ message: 'Tell us why you are cancelling.' }]} />
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const textarea = canvas.getByRole('textbox', { name: 'Reason' });
		const alert = canvas.getByRole('alert');

		await expect(textarea).toHaveAttribute('aria-invalid', 'true');
		await expect(textarea).toHaveAttribute('aria-describedby', expect.stringContaining(alert.id));
		await expect(
			canvasElement.querySelector('[data-slot=field][data-invalid="true"]')
		).not.toBeNull();
	}
};

/**
 * `disabled` on the field disables the control through context.
 *
 * @summary Disabled field driven from the root
 */
export const Disabled: Story = {
	args: {
		disabled: true
	},
	render: args => (
		<FieldTextArea {...args}>
			<Label>Notes</Label>
			<TextArea defaultValue="Locked once the request is submitted." />
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Notes' })).toBeDisabled();
	}
};

/**
 * `readOnly` on the field reaches the control through context. The value
 * stays focusable, copyable and submitted, and the control looks like any
 * other.
 *
 * @summary Read-only field driven from the root
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true
	},
	render: args => (
		<FieldTextArea {...args}>
			<Label>Underwriter notes</Label>
			<TextArea defaultValue="Approved subject to a roof inspection." />
			<Field.Description>Written by the carrier; contact them to change it.</Field.Description>
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const textarea = canvas.getByRole('textbox', { name: 'Underwriter notes' });

		await expect(textarea).toHaveAttribute('readonly');
		await expect(textarea).not.toBeDisabled();
	}
};

/**
 * The context is a default, never an override: an extra `aria-describedby` is
 * concatenated with the field's ids, `className` is merged and `size` passes
 * through untouched.
 *
 * @summary TextArea's own props merge with, and win over, the field's context
 */
export const OwnPropsWin: Story = {
	render: args => (
		<div className="flex flex-col gap-2">
			<FieldTextArea {...args}>
				<Label>Message</Label>
				<TextArea size="lg" className="max-h-60" aria-describedby="message-hint" />
				<Field.Description>Sent to the agent as written.</Field.Description>
			</FieldTextArea>
			<p id="message-hint" className="text-sm text-text-input-placeholder">
				Markdown is not rendered.
			</p>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const textarea = canvas.getByRole('textbox', { name: 'Message' });

		await expect(textarea).toHaveAccessibleDescription(
			'Sent to the agent as written. Markdown is not rendered.'
		);
		await expect(textarea).toHaveAttribute('data-size', 'lg');
		await expect(textarea).toHaveClass('max-h-60');
	}
};

/**
 * Figma's empty state with a count: the description on the left and the count
 * on the right, 16px apart under the box. Beside a count a long description
 * keeps to one line and truncates; a screen reader still hears all of it, with
 * the count.
 *
 * @summary Count beside a truncated description, under the box
 */
export const WithCounter: Story = {
	render: args => (
		<FieldTextArea {...args}>
			<Label optional>Notes</Label>
			<TextArea maxLength={500} placeholder="Placeholder" />
			<Field.Description>
				Shared with the carrier along with the request, and kept on the policy file for audits.
			</Field.Description>
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: /Notes/ });
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
		const description = canvas.getByText(/Shared with the carrier/);
		const box = textarea.getBoundingClientRect();
		const count = counter.getBoundingClientRect();
		const help = description.getBoundingClientRect();

		await expect(counter).toHaveTextContent('0/500');
		await expect(textarea).toHaveAccessibleDescription(
			'Shared with the carrier along with the request, and kept on the policy file for audits. 0 of 500 characters'
		);
		await expect(help.top - box.bottom).toBe(8);
		await expect(count.top).toBe(help.top);
		await expect(Math.round(count.right)).toBe(Math.round(box.right));
		await expect(count.left - help.right).toBe(16);
		await expect(help.height).toBe(21);
		await expect(getComputedStyle(description).textOverflow).toBe('ellipsis');
	}
};

/**
 * Past the limit, as in Figma: the user keeps typing, the characters over the
 * limit and the count read destructive, and the form's validation shows its
 * error where the description goes.
 *
 * @summary Over the limit: extra characters, count and error in red
 */
export const OverLimit: Story = {
	args: { invalid: true },
	render: args => (
		<FieldTextArea {...args}>
			<Label>Notes</Label>
			<TextArea
				maxLength={40}
				defaultValue="Roof replaced in 2024 after hail damage, garage added."
			/>
			<Field.Error errors={[{ message: 'Keep it brief' }]} />
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
		const overText = canvasElement.querySelector('[data-slot=textarea-overflow] [data-over]')!;
		const alert = canvas.getByRole('alert');

		await expect(counter).toHaveTextContent('54/40');
		await expect(overText.textContent).toBe((textarea as HTMLTextAreaElement).value.slice(40));
		await expect(getComputedStyle(overText).color).toBe(getComputedStyle(alert).color);

		await userEvent.type(textarea, ' More text.');
		await expect(counter).toHaveTextContent('65/40');
	}
};

/**
 * A horizontal field keeps its row, label beside the box, and the count sits
 * under the box rather than beside it.
 *
 * @summary Horizontal field: count under the box, label beside it
 */
export const HorizontalWithCounter: Story = {
	// Runs as a test only: a layout edge case, not a Figma state.
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { orientation: 'horizontal' },
	render: args => (
		<FieldTextArea {...args}>
			<Label>Reason</Label>
			<TextArea maxLength={500} />
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const root = canvasElement.querySelector('[data-slot=field]')!;
		const label = canvas.getByText('Reason').closest('label')!.getBoundingClientRect();
		const box = canvas.getByRole('textbox', { name: 'Reason' }).getBoundingClientRect();
		const count = canvasElement
			.querySelector('[data-slot=textarea-counter]')!
			.getBoundingClientRect();

		await expect(getComputedStyle(root).display).toBe('flex');
		await expect(box.left).toBeGreaterThan(label.right);
		await expect(count.top - box.bottom).toBe(8);
		await expect(Math.round(count.right)).toBe(Math.round(box.right));
	}
};

/**
 * A `Field.Content` holding the box and its messages gets the same row as a
 * vertical field: description left, count right.
 *
 * @summary Count beside the description inside a Field.Content
 */
export const ContentWithCounter: Story = {
	// Runs as a test only: a layout edge case, not a Figma state.
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { orientation: 'horizontal' },
	render: args => (
		<FieldTextArea {...args}>
			<Label>Reason</Label>
			<Field.Content className="flex-1">
				<TextArea maxLength={500} />
				<Field.Description>Shared with the carrier.</Field.Description>
			</Field.Content>
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const box = canvas.getByRole('textbox', { name: 'Reason' }).getBoundingClientRect();
		const help = canvas.getByText('Shared with the carrier.').getBoundingClientRect();
		const count = canvasElement
			.querySelector('[data-slot=textarea-counter]')!
			.getBoundingClientRect();

		await expect(count.top).toBe(help.top);
		await expect(help.top - box.bottom).toBe(8);
		await expect(Math.round(count.right)).toBe(Math.round(box.right));
	}
};

/**
 * An invalid field shows its error where the description goes, and the count
 * beside it turns destructive too, as in Figma.
 *
 * @summary Error and destructive count share the row under the box
 */
export const InvalidWithCounter: Story = {
	args: { invalid: true, required: true },
	render: args => (
		<FieldTextArea {...args}>
			<Label>Reason</Label>
			<TextArea maxLength={500} />
			<Field.Error errors={[{ message: 'This field is required' }]} />
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
		const alert = canvas.getByRole('alert');

		await expect(counter.getBoundingClientRect().top).toBe(alert.getBoundingClientRect().top);
		await expect(getComputedStyle(counter).color).toBe(getComputedStyle(alert).color);
	}
};

/**
 * Extends `TextAreaContext` and `FieldContext` under the field, so the value,
 * the handlers and the errors come from outside. Must sit inside
 * `FieldTextArea` so it inherits the field's wiring and only adds to it.
 */
const ContextExtension = ({
	textAreaProps,
	errors,
	children
}: {
	textAreaProps: TextAreaContextValue;
	errors?: FieldErrorLike[];
	children: ReactNode;
}) => {
	const textArea = use(TextAreaContext);
	const field = use(FieldContext);

	return (
		<TextAreaContext value={{ ...textArea, ...textAreaProps }}>
			<FieldContext value={field && { ...field, errors }}>{children}</FieldContext>
		</TextAreaContext>
	);
};

const onOwnChange = fn();

/**
 * The contexts are an extension point: a provider nested in the field adds
 * `name`, `value`, `onChange` and `onBlur` to `TextAreaContext`, so a bare
 * `<TextArea />` becomes controlled, and the errors to `FieldContext`, so a
 * bare `<Field.Error />` renders them — here with `useState` and no form
 * library. The text area's own `onChange` still runs, chained after the
 * provider's.
 *
 * @summary TextArea controlled and errors supplied from outside the field
 */
export const ControlledFromContext: Story = {
	render: () => {
		const [value, setValue] = useState('');
		const [touched, setTouched] = useState(false);

		const errors = touched && !value ? [{ message: 'Required' }] : undefined;

		return (
			<FieldTextArea invalid={!!errors} required>
				<ContextExtension
					textAreaProps={{
						name: 'notes',
						value,
						onChange: event => setValue(event.target.value),
						onBlur: () => setTouched(true)
					}}
					errors={errors}>
					<Label>Notes</Label>
					<TextArea onChange={onOwnChange} />
					<Field.Error />
				</ContextExtension>
			</FieldTextArea>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAttribute('name', 'notes');
		await expect(canvas.queryByRole('alert')).toBeNull();

		await userEvent.click(textarea);
		await userEvent.tab();

		await expect(await canvas.findByRole('alert')).toHaveTextContent('Required');
		await expect(textarea).toHaveAttribute('aria-invalid', 'true');

		await userEvent.type(textarea, 'Roof replaced in 2024.');

		await expect(textarea).toHaveValue('Roof replaced in 2024.');
		await expect(onOwnChange).toHaveBeenCalled();
		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
	}
};
