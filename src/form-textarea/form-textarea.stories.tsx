import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { FormTextArea } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { Form } from '../form';

/**
 * FormTextArea is a complete multi-line text field bound to one
 * react-hook-form value: label, `TextArea`, helper text and validation error
 * in the standard order, wired through `useController`. It renders inside a
 * `Form.Root` and needs only a `name`; `required`, `invalid` and the error
 * reach the label, the text area's `aria-*` attributes and the message with no
 * ids written by hand.
 *
 * It covers the common case. For another layout, compose `useController` with
 * the `FieldTextArea`, `Label`, `TextArea` and `Field.*` primitives directly.
 */
const meta = {
	title: 'Components/FormTextArea',
	component: FormTextArea,
	tags: ['autodocs'],
	argTypes: {
		// The form the story renders owns the path: changing it would unbind the field.
		name: { control: false },
		label: { control: 'text' },
		description: { control: 'text' },
		tooltip: { control: 'text' },
		required: { control: 'boolean' },
		optional: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' }
	},
	args: {
		name: 'reason',
		label: 'Reason',
		required: true,
		optional: false,
		disabled: false,
		readOnly: false
	}
} satisfies Meta<typeof FormTextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const onSubmit = fn();

type CancellationValues = {
	reason: string;
};

/**
 * The field consumers write: a `name`, a `label` and the validation rule.
 * Submitting empty renders the error and marks the text area invalid; typing
 * clears both and the value reaches `onSubmit`.
 *
 * @summary Required text area validating on submit
 */
export const Default: Story = {
	// The controls drive the field; the form owns the path, the control and the rule.
	render: args => {
		const methods = useForm<CancellationValues>({ defaultValues: { reason: '' } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Cancellation"
				className="flex max-w-120 flex-col items-start gap-7">
				<FormTextArea
					rules={{ required: 'Tell us why you are cancelling.' }}
					textAreaProps={{ placeholder: 'Tell us in your own words' }}
					{...args}
					name="reason"
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const textArea = canvas.getByRole('textbox', { name: 'Reason' });

		await expect(textArea.tagName).toBe('TEXTAREA');
		await expect(textArea).toBeRequired();
		await expect(textArea).toHaveAttribute('name', 'reason');
		await expect(canvas.queryByRole('alert')).toBeNull();

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await expect(await canvas.findByRole('alert')).toHaveTextContent(
			'Tell us why you are cancelling.'
		);
		await expect(textArea).toHaveAttribute('aria-invalid', 'true');
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.type(textArea, 'Moving to another carrier.{enter}Effective next month.');

		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
		await expect(textArea).not.toHaveAttribute('aria-invalid');

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ reason: 'Moving to another carrier.\nEffective next month.' },
				expect.anything()
			)
		);
	}
};

type NotesValues = {
	notes: string;
};

/**
 * `description` is helper text under the text area, announced through
 * `aria-describedby`. `tooltip` is an info button beside the label for details
 * worth a click; it is a sibling of the `<label>`, so the field's accessible
 * name stays the label text. The forms mark optional fields rather than
 * required ones: `optional` appends a muted suffix to the label.
 *
 * @summary Optional field with helper text and an info tooltip
 */
export const WithDescriptionAndTooltip: Story = {
	render: () => {
		const methods = useForm<NotesValues>({ defaultValues: { notes: '' } });

		return (
			<Form.Root methods={methods} aria-label="Submission" className="max-w-120">
				<FormTextArea
					name="notes"
					label="Notes for the underwriter"
					tooltip="The carrier reads these before quoting."
					description="Shared with the carrier along with the request."
					optional
				/>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const textArea = canvas.getByRole('textbox', { name: 'Notes for the underwriter (optional)' });
		const trigger = canvas.getByRole('button', { name: 'More information' });

		await expect(textArea).not.toBeRequired();
		await expect(textArea).toHaveAccessibleDescription(
			'Shared with the carrier along with the request.'
		);
		await expect(trigger.closest('label')).toBeNull();
	}
};

/**
 * `limit` in `textAreaProps` shows the count inside the box. The value is
 * controlled, so the count follows the form: a `setValue` or a `reset` moves it
 * with the text. The limit is soft, so pair it with `rules.maxLength`, which is what
 * keeps a longer text from being submitted.
 *
 * @summary Count inside the box, following the form's value and its rule
 */
export const WithLimit: Story = {
	render: () => {
		const methods = useForm<NotesValues>({
			defaultValues: { notes: 'Roof replaced in 2024.' }
		});

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Submission"
				className="flex max-w-120 flex-col items-start gap-7">
				<FormTextArea
					name="notes"
					label="Notes"
					rules={{ maxLength: { value: 40, message: 'Keep it under 40 characters.' } }}
					textAreaProps={{ limit: 40 }}
				/>
				<div className="flex gap-2">
					<Button type="submit">Save</Button>
					<Button type="button" variant="secondary" onClick={() => methods.reset()}>
						Reset
					</Button>
					<Button type="button" variant="secondary" onClick={() => methods.setValue('notes', '')}>
						Clear
					</Button>
				</div>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const textArea = canvas.getByRole('textbox', { name: 'Notes' });
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;

		await expect(counter).toHaveTextContent('22/40');

		await userEvent.type(textArea, ' Garage added after the hail.');
		await expect(counter).toHaveTextContent('51/40');

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));
		await expect(await canvas.findByRole('alert')).toHaveTextContent(
			'Keep it under 40 characters.'
		);
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));

		await waitFor(() => expect(counter).toHaveTextContent('22/40'));
		await expect(textArea).toHaveValue('Roof replaced in 2024.');

		await userEvent.click(canvas.getByRole('button', { name: 'Clear' }));

		await waitFor(() => expect(counter).toHaveTextContent('0/40'));
		await expect(textArea).toHaveValue('');
	}
};

type AppetiteValues = {
	appetite: {
		notes: string;
	};
};

/**
 * `rules` are react-hook-form's, and `name` accepts nested paths typed against
 * the form's values through the generic. `rules.required` validates but does
 * not mark the field required: that stays an explicit `required` prop.
 *
 * @summary Nested path with validation rules, typed through the generic
 */
export const WithRules: Story = {
	render: () => {
		const methods = useForm<AppetiteValues>({ defaultValues: { appetite: { notes: '' } } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Appetite"
				className="flex max-w-120 flex-col items-start gap-7">
				<FormTextArea<AppetiteValues>
					name="appetite.notes"
					label="Appetite notes"
					rules={{
						required: 'Describe the appetite.',
						minLength: { value: 20, message: 'Write at least 20 characters.' }
					}}
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const textArea = canvas.getByRole('textbox', { name: 'Appetite notes' });
		const save = canvas.getByRole('button', { name: 'Save' });

		await expect(textArea).toHaveAttribute('name', 'appetite.notes');
		await expect(textArea).not.toBeRequired();

		await userEvent.click(save);
		await expect(await canvas.findByRole('alert')).toHaveTextContent('Describe the appetite.');

		await userEvent.type(textArea, 'Coastal homes');
		await userEvent.click(save);
		await expect(await canvas.findByRole('alert')).toHaveTextContent(
			'Write at least 20 characters.'
		);
		await expect(onSubmit).not.toHaveBeenCalled();

		await userEvent.type(textArea, ' built after 2000');
		await userEvent.click(save);

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ appetite: { notes: 'Coastal homes built after 2000' } },
				expect.anything()
			)
		);
		await expect(canvas.queryByRole('alert')).toBeNull();
	}
};

/**
 * The description sits right under the text area and the error appears below
 * it. Screen readers announce them in the same order.
 *
 * @summary Helper text under the text area, above the error
 */
export const DescriptionAndError: Story = {
	render: () => {
		const methods = useForm<CancellationValues>({ defaultValues: { reason: '' } });

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Cancellation"
				className="flex max-w-120 flex-col items-start gap-7">
				<FormTextArea
					name="reason"
					label="Reason"
					description="Shared with the carrier."
					rules={{ required: 'Tell us why you are cancelling.' }}
				/>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const textArea = canvas.getByRole('textbox', { name: 'Reason' });

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		const alert = await canvas.findByRole('alert');
		const description = canvas.getByText('Shared with the carrier.');

		// The TextArea renders its `<textarea>` inside its root, so the order is the root's.
		await expect(textArea.closest('[data-slot=textarea-root]')!.nextElementSibling).toBe(
			description
		);
		await expect(description.nextElementSibling).toBe(alert);
		await expect(textArea).toHaveAccessibleDescription(
			'Shared with the carrier. Tell us why you are cancelling.'
		);
		await expect(onSubmit).not.toHaveBeenCalled();
	}
};

const onOwnChange = fn();

/**
 * `textAreaProps` carries the text area's own attributes — `placeholder`,
 * `rows`, `size`… — and its handlers. A consumer `onChange` runs after
 * react-hook-form's: by the time it fires, `getValues` already returns the new
 * value.
 *
 * @summary Text area attributes and a consumer onChange chained after the form's
 */
export const TextAreaPropsChaining: Story = {
	render: () => {
		const methods = useForm<NotesValues>({ defaultValues: { notes: '' } });

		return (
			<Form.Root methods={methods} aria-label="Submission" className="max-w-120">
				<FormTextArea
					name="notes"
					label="Notes"
					textAreaProps={{
						placeholder: 'Anything the underwriter should know',
						rows: 5,
						size: 'sm',
						onChange: event => onOwnChange(methods.getValues('notes'), event.target.value)
					}}
				/>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onOwnChange.mockClear();
		const canvas = within(canvasElement);

		const textArea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textArea).toHaveAttribute('placeholder', 'Anything the underwriter should know');
		await expect(textArea).toHaveAttribute('rows', '5');
		await expect(textArea).toHaveAttribute('data-size', 'sm');

		await userEvent.type(textArea, 'R');

		await expect(textArea).toHaveValue('R');
		await expect(onOwnChange).toHaveBeenCalledTimes(1);
		await expect(onOwnChange).toHaveBeenLastCalledWith('R', 'R');
	}
};

type ReviewValues = {
	underwriterNotes: string;
	reply: string;
};

/**
 * `disabled` disables the text area and marks the field, and the value still
 * reaches `onSubmit` — unlike react-hook-form's own `disabled` option, which
 * drops it. `readOnly` keeps a value the user can read and copy but not edit.
 *
 * @summary Disabled and read-only fields whose values are still submitted
 */
export const DisabledAndReadOnly: Story = {
	render: () => {
		const methods = useForm<ReviewValues>({
			defaultValues: {
				underwriterNotes: 'Needs a wind mitigation report.',
				reply: 'Report attached.'
			}
		});

		return (
			<Form.Root
				methods={methods}
				onSubmit={onSubmit}
				aria-label="Review"
				className="flex max-w-120 flex-col items-start gap-7">
				<Field.Group>
					<FormTextArea name="underwriterNotes" label="Underwriter notes" readOnly />
					<FormTextArea name="reply" label="Reply" disabled />
				</Field.Group>
				<Button type="submit">Save</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		onSubmit.mockClear();
		const canvas = within(canvasElement);

		const notes = canvas.getByRole('textbox', { name: 'Underwriter notes' });
		const reply = canvas.getByRole('textbox', { name: 'Reply' });

		await expect(notes).toHaveAttribute('readonly');
		await expect(reply).toBeDisabled();
		await expect(reply.closest('[data-slot=field]')).toHaveAttribute('data-disabled');

		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() =>
			expect(onSubmit).toHaveBeenCalledWith(
				{ underwriterNotes: 'Needs a wind mitigation report.', reply: 'Report attached.' },
				expect.anything()
			)
		);
	}
};

/**
 * react-hook-form's `ref` reaches the `<textarea>`, so `setFocus` and the
 * focus on the first invalid field after submit both work with no ref written
 * by hand.
 *
 * @summary setFocus reaches the text area through the merged ref
 */
export const SetFocus: Story = {
	render: () => {
		const methods = useForm<CancellationValues & NotesValues>({
			defaultValues: { reason: '', notes: '' }
		});

		return (
			<Form.Root
				methods={methods}
				aria-label="Cancellation"
				className="flex max-w-120 flex-col items-start gap-7">
				<Field.Group>
					<FormTextArea name="reason" label="Reason" />
					<FormTextArea name="notes" label="Notes" />
				</Field.Group>
				<Button type="button" variant="secondary" onClick={() => methods.setFocus('notes')}>
					Focus notes
				</Button>
			</Form.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const notes = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(notes).not.toHaveFocus();

		await userEvent.click(canvas.getByRole('button', { name: 'Focus notes' }));

		await expect(notes).toHaveFocus();
	}
};
