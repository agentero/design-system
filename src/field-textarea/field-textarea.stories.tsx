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
			<p id="message-hint" className="text-sm">
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
 * With `maxLength` the text area counts inside its box, and the count joins
 * the field's description in what the control announces.
 *
 * @summary Field with a character count inside the box
 */
export const WithCounter: Story = {
	render: args => (
		<FieldTextArea {...args}>
			<Label>Reason</Label>
			<TextArea maxLength={500} defaultValue="Moving to another state." />
			<Field.Description>Shared with the carrier along with the request.</Field.Description>
		</FieldTextArea>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Reason' });

		await expect(textarea).toHaveAccessibleDescription(
			'Shared with the carrier along with the request. 24 of 500 characters'
		);
		await expect(canvas.getByText('24/500')).toBeInTheDocument();
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
