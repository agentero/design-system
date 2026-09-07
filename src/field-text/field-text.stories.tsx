import { ReactNode, use, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { FieldText } from '.';
import { ErrorContext, Field, FieldErrorLike } from '../field';
import { Input, InputContext, InputProps } from '../input';
import { Label } from '../label';

/**
 * FieldText is a `Field.Root` for a single-line text control. It provides
 * `InputContext`, so the `Input` inside associates itself with the label and
 * the messages and takes `invalid`, `required` and `disabled` from the field —
 * no `id`, `htmlFor`, `aria-describedby` or `aria-invalid` written by hand.
 *
 * It knows nothing about form libraries. A form adapter re-provides
 * `InputContext` with `value`, `onChange`, `onBlur` and `name`, and
 * `ErrorContext` with the errors, as the last story simulates.
 */
const meta = {
	title: 'Components/FieldText',
	component: FieldText,
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'radio',
			options: ['vertical', 'horizontal']
		},
		invalid: { control: 'boolean' },
		disabled: { control: 'boolean' },
		required: { control: 'boolean' }
	},
	args: {
		orientation: 'vertical',
		invalid: false,
		disabled: false,
		required: false
	}
} satisfies Meta<typeof FieldText>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The composition consumers write: a label, the design system's `Input` and
 * helper text. The label points at the input and the input is described by the
 * text, all through context.
 *
 * @summary Label, Input and description wired with no ids
 */
export const Default: Story = {
	render: args => (
		<FieldText {...args}>
			<Label>Email</Label>
			<Input type="email" placeholder="you@example.com" />
			<Field.Description>We only use this to send policy documents.</Field.Description>
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Email' });

		await expect(input).toHaveAttribute('data-slot', 'input');
		await expect(input).toHaveAccessibleDescription('We only use this to send policy documents.');
		await expect(input).not.toHaveAttribute('aria-invalid');
	}
};

/**
 * `required` on the field reaches both the label's asterisk and the input's
 * `required` attribute.
 *
 * @summary Required field driven from the root alone
 */
export const Required: Story = {
	args: {
		required: true
	},
	render: args => (
		<FieldText {...args}>
			<Label>Full name</Label>
			<Input placeholder="Jane Doe" />
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Full name' })).toBeRequired();
		await expect(canvas.getByText('*')).toHaveAttribute('aria-hidden', 'true');
	}
};

/**
 * `invalid` on the field sets `aria-invalid` on the input, which drives its
 * destructive border, and the error is announced with the input.
 *
 * @summary Invalid field with the Input styled by aria-invalid
 */
export const Invalid: Story = {
	args: {
		invalid: true
	},
	render: args => (
		<FieldText {...args}>
			<Label>Email</Label>
			<Input type="email" defaultValue="not-an-email" />
			<Field.Error errors={[{ message: 'Enter a valid email address.' }]} />
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Email' });
		const alert = canvas.getByRole('alert');

		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(input).toHaveAttribute('aria-describedby', expect.stringContaining(alert.id));
		await expect(
			canvasElement.querySelector('[data-slot=field][data-invalid="true"]')
		).not.toBeNull();
	}
};

/**
 * `disabled` on the field disables the input through context.
 *
 * @summary Disabled field driven from the root
 */
export const Disabled: Story = {
	args: {
		disabled: true
	},
	render: args => (
		<FieldText {...args}>
			<Label>Agency</Label>
			<Input defaultValue="Acme Insurance" />
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Agency' })).toBeDisabled();
	}
};

/**
 * The context is a default, never an override: an extra `aria-describedby` is
 * concatenated with the field's ids, `className` is merged and `size` passes
 * through untouched.
 *
 * @summary Input's own props merge with, and win over, the field's context
 */
export const OwnPropsWin: Story = {
	render: args => (
		<div className="flex flex-col gap-2">
			<FieldText {...args}>
				<Label>Website</Label>
				<Input type="url" size="lg" className="max-w-xs" aria-describedby="website-hint" />
				<Field.Description>Include the protocol.</Field.Description>
			</FieldText>
			<p id="website-hint" className="text-sm">
				Shown on your public profile.
			</p>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Website' });

		await expect(input).toHaveAccessibleDescription(
			'Include the protocol. Shown on your public profile.'
		);
		await expect(input).toHaveAttribute('data-size', 'lg');
		await expect(input).toHaveClass('max-w-xs');
	}
};

/**
 * Re-provides `InputContext` and `ErrorContext` under the field with what a
 * form library would supply. Must sit inside `FieldText` so it inherits the
 * field's wiring and only adds to it.
 */
const FormAdapter = ({
	inputProps,
	errors,
	children
}: {
	inputProps: Partial<InputProps>;
	errors?: FieldErrorLike[];
	children: ReactNode;
}) => {
	const input = use(InputContext);
	const error = use(ErrorContext);

	return (
		<InputContext value={{ ...input, ...inputProps }}>
			<ErrorContext value={{ ...error, errors }}>{children}</ErrorContext>
		</InputContext>
	);
};

const onOwnChange = fn();

const SimulatedForm = () => {
	const [value, setValue] = useState('');
	const [touched, setTouched] = useState(false);

	const errors = touched && !value ? [{ message: 'Required' }] : undefined;

	return (
		<FieldText invalid={!!errors} required>
			<FormAdapter
				inputProps={{
					name: 'email',
					value,
					onChange: event => setValue(event.target.value),
					onBlur: () => setTouched(true)
				}}
				errors={errors}>
				<Label>Email</Label>
				<Input type="email" onChange={onOwnChange} />
				<Field.Error />
			</FormAdapter>
		</FieldText>
	);
};

/**
 * What a form adapter does with these contexts, simulated with `useState` and
 * no form library: it extends `InputContext` with `name`, `value`, `onChange`
 * and `onBlur`, so a bare `<Input />` becomes controlled, and `ErrorContext`
 * with the errors, so a bare `<Field.Error />` renders them. The input's own
 * `onChange` still runs, chained after the adapter's.
 *
 * @summary Form-adapter extension point simulated without a form library
 */
export const FormAdapterSimulation: Story = {
	render: () => <SimulatedForm />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Email' });

		await expect(input).toHaveAttribute('name', 'email');
		await expect(canvas.queryByRole('alert')).toBeNull();

		await userEvent.click(input);
		await userEvent.tab();

		await expect(await canvas.findByRole('alert')).toHaveTextContent('Required');
		await expect(input).toHaveAttribute('aria-invalid', 'true');

		await userEvent.type(input, 'jane@example.com');

		await expect(input).toHaveValue('jane@example.com');
		await expect(onOwnChange).toHaveBeenCalled();
		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
	}
};
