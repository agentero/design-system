import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Label } from '../label';
import { Field, useFieldContext } from './field';

/**
 * Field lays out a single form field — label, control, helper text and error —
 * and wires the accessibility relationships between them. `Field.Root` generates
 * the ids and shares them through context, so the label associates itself with
 * the control and the messages land in the control's `aria-describedby` without
 * anyone passing an `id`.
 *
 * Spacing between fields belongs to `Field.Group`, never to a margin on the
 * field, so a field never carries spacing its container cannot control.
 *
 * It is form-library agnostic: pass `invalid` and `errors` from whatever
 * validates your form.
 */
const meta = {
	title: 'Components/Field',
	component: Field.Root,
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['vertical', 'horizontal', 'responsive']
		},
		invalid: { control: 'boolean' }
	}
} satisfies Meta<typeof Field.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

// Stand-in for the DS Input, which lands in ENG-1759 — it shows the contract
// that component implements against useFieldContext().
const DemoInput = ({ placeholder }: { placeholder?: string }) => {
	const field = useFieldContext();

	return (
		<input
			data-slot="input"
			id={field?.id}
			aria-invalid={field?.invalid}
			aria-describedby={field?.describedBy}
			placeholder={placeholder}
			className="h-10 rounded-md border border-solid border-border-input-default px-4 text-sm aria-invalid:border-border-input-destructive"
		/>
	);
};

/**
 * A vertical field with a label, a control and helper text. The label is
 * associated with the input and the description is referenced by it — neither
 * needed an explicit `id`.
 *
 * @summary Default vertical field with label, control and description
 */
export const Default: Story = {
	args: {
		children: (
			<>
				<Label>Email</Label>
				<DemoInput placeholder="you@example.com" />
				<Field.Description>We only use this to send policy documents.</Field.Description>
			</>
		)
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByLabelText('Email');
		const description = canvas.getByText(/policy documents/i);

		await expect(input).toHaveAttribute(
			'aria-describedby',
			expect.stringContaining(description.id)
		);
		await expect(input).not.toHaveAttribute('aria-invalid', 'true');
	}
};

/**
 * A label with a hint beside it. `Field.Label` puts the two on one row and keeps
 * the trigger a *sibling* of the `<label>`: the field's accessible name stays
 * "Scheduling link" and the icon carries its own, so neither absorbs the other.
 *
 * @summary Label with an info tooltip beside it
 */
export const WithLabelTooltip: Story = {
	args: {
		children: (
			<>
				<Field.Label>
					<Label optional>Scheduling link</Label>
					<Field.LabelTooltip>
						Anyone with this link can book time on your calendar.
					</Field.LabelTooltip>
				</Field.Label>
				<DemoInput placeholder="https://calendly.com/you" />
			</>
		)
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		// getByLabelText throws on a second match: nesting the trigger in the
		// `<label>` would make it answer to the label's name too.
		const input = canvas.getByLabelText('Scheduling link');
		const trigger = canvas.getByRole('button', { name: 'More information' });

		await expect(input).toHaveAttribute('data-slot', 'input');
		await expect(trigger.closest('label')).toBeNull();

		await userEvent.tab();
		await expect(trigger).toHaveFocus();

		const hints = await body.findAllByText(/book time on your calendar/i);
		await expect(hints.length).toBeGreaterThan(0);
	}
};

/**
 * A failing field. `invalid` styles the field, marks the control `aria-invalid`
 * and the message is announced as an alert.
 *
 * @summary Failing field with an announced error message
 */
export const Invalid: Story = {
	args: {
		invalid: true,
		children: (
			<>
				<Label>Email</Label>
				<DemoInput placeholder="you@example.com" />
				<Field.Error errors={[{ message: 'Invalid email address' }]} />
			</>
		)
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const error = canvas.getByRole('alert');

		await expect(error).toHaveTextContent('Invalid email address');
		await expect(canvas.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
		await expect(error.id).toBe(
			canvas.getByLabelText('Email').getAttribute('aria-describedby')?.split(' ')[1]
		);
	}
};

/**
 * Several errors on one field are de-duplicated by message and rendered as a
 * bulleted list. Feed it a form library's error array directly.
 *
 * @summary Multiple errors render as a de-duplicated list
 */
export const MultipleErrors: Story = {
	args: {
		invalid: true,
		children: (
			<>
				<Label>Password</Label>
				<DemoInput />
				<Field.Error
					errors={[
						{ message: 'At least 10 characters' },
						{ message: 'At least one number' },
						{ message: 'At least 10 characters' }
					]}
				/>
			</>
		)
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getAllByRole('listitem')).toHaveLength(2);
	}
};

/**
 * With no message, `Field.Error` renders nothing — so it can stay mounted
 * unconditionally instead of being wrapped in a conditional.
 *
 * @summary Field.Error renders nothing when there is no message
 */
export const NoError: Story = {
	args: {
		children: (
			<>
				<Label>Email</Label>
				<DemoInput placeholder="you@example.com" />
				<Field.Error errors={[undefined]} />
			</>
		)
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.queryByRole('alert')).not.toBeInTheDocument();
	}
};

/**
 * The label sits beside the control — the layout for switches and checkboxes.
 * Wrap the control and its messages in `Field.Content` so they stack next to the
 * label.
 *
 * @summary Horizontal field with the label beside the control
 */
export const Horizontal: Story = {
	args: {
		orientation: 'horizontal',
		children: (
			<>
				<Label>Notify me</Label>
				<Field.Content>
					<DemoInput />
					<Field.Description>Sent once a day at most.</Field.Description>
				</Field.Content>
			</>
		)
	}
};

/**
 * The label row keeps the `flex-auto` share the bare `Label` had, so pairing it
 * with a tooltip does not shift the horizontal layout.
 *
 * @summary Horizontal field whose label carries a tooltip
 */
export const HorizontalWithLabelTooltip: Story = {
	args: {
		orientation: 'horizontal',
		children: (
			<>
				<Field.Label>
					<Label>Sandbox agency</Label>
					<Field.LabelTooltip>Excluded from analytics and commission reporting.</Field.LabelTooltip>
				</Field.Label>
				<Field.Content>
					<DemoInput />
					<Field.Description>Only for QA and demos.</Field.Description>
				</Field.Content>
			</>
		)
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const row = canvas.getByText('Sandbox agency').closest('[data-slot=field-label]');

		// The orientation selector has to reach the wrapper, not just a bare Label.
		await expect(row).not.toBeNull();
		await expect(getComputedStyle(row as Element).flexGrow).toBe('1');
	}
};

/**
 * Vertical on narrow containers and horizontal from `48rem` up. It measures the
 * `Field.Group` container, not the viewport, so a field inside a modal collapses
 * correctly regardless of window width.
 *
 * @summary Responsive field driven by its container's width
 */
export const Responsive: Story = {
	args: {
		orientation: 'responsive',
		children: (
			<>
				<Label>Agency name</Label>
				<Field.Content>
					<DemoInput placeholder="Acme Insurance" />
				</Field.Content>
			</>
		)
	},
	decorators: [
		Story => (
			<Field.Group>
				<Story />
			</Field.Group>
		)
	]
};

/**
 * `Field.Group` stacks fields and owns the space between them. Each field's ids
 * are independent, so labels stay associated with their own control.
 *
 * @summary Field.Group stacks sibling fields and owns their spacing
 */
export const Group: Story = {
	render: () => (
		<Field.Group>
			<Field.Root>
				<Label>First name</Label>
				<DemoInput placeholder="Jane" />
			</Field.Root>
			<Field.Root>
				<Label>Last name</Label>
				<DemoInput placeholder="Doe" />
			</Field.Root>
			<Field.Root invalid>
				<Label>Email</Label>
				<DemoInput placeholder="you@example.com" />
				<Field.Error errors={[{ message: 'This field is mandatory' }]} />
			</Field.Root>
		</Field.Group>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const firstName = canvas.getByLabelText('First name');
		const lastName = canvas.getByLabelText('Last name');

		await expect(firstName.id).not.toBe(lastName.id);
		await expect(canvas.getAllByRole('textbox')).toHaveLength(3);
		await expect(canvas.getAllByRole('alert')).toHaveLength(1);
	}
};
