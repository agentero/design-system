import { ChangeEvent, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../button';
import { Field } from '../field';
import { FieldText } from '../field-text';
import { InputContext } from '../input';
import { InputGroup } from '../input-group';
import { Label } from '../label';
import { InputTel } from './input-tel';

/**
 * InputTel is a US phone number field that masks as you type: the digits are
 * laid out as `(555) 123-4567`, anything else is dropped and the caret stays
 * next to the digit just edited. It is an `Input` of `type="tel"` with no frame
 * of its own; `onChange` receives the native event with the masked text already
 * in `event.target.value`.
 */
const meta = {
	title: 'Components/InputTel',
	component: InputTel,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		},
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' }
	},
	args: {
		'aria-label': 'Phone number',
		onChange: fn((event: ChangeEvent<HTMLInputElement>) => event.target.value)
	},
	decorators: [
		Story => (
			<div style={{ maxWidth: '24rem' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof InputTel>;

export default meta;

type Story = StoryObj<typeof meta>;

const getInputs = (canvasElement: HTMLElement) =>
	Array.from(canvasElement.querySelectorAll<HTMLInputElement>('[data-slot="input-tel"]'));

// The spy returns `event.target.value` as it was when `onChange` ran: the
// target is the live input, so reading it later would only show its current value.
const lastValue = (onChange: unknown) =>
	(onChange as ReturnType<typeof fn>).mock.results.at(-1)?.value;

/**
 * An uncontrolled phone field. Typing the ten digits lays them out as
 * `(555) 123-4567`, and every `onChange` call carries the masked text in
 * `event.target.value`.
 *
 * @summary Phone field masking the digits as they are typed
 */
export const Default: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(input).toHaveAttribute('type', 'tel');

		await userEvent.type(input, '5551234567');

		await expect(input).toHaveValue('(555) 123-4567');
		await expect(lastValue(args.onChange)).toBe('(555) 123-4567');
	}
};

/**
 * A controlled phone field. The state that owns the value stores what
 * `event.target.value` reports, which is already masked, and the input shows
 * it back unchanged. A partial number carries the separator that comes before
 * the next digit, so six digits read `(555) 123-`.
 *
 * @summary Controlled phone field storing the masked value
 */
export const Controlled: Story = {
	render: function Render(args) {
		const [phone, setPhone] = useState('');

		return (
			<InputTel
				{...args}
				value={phone}
				onChange={event => {
					setPhone(event.target.value);
					args.onChange?.(event);
				}}
			/>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await userEvent.type(input, '555123');

		await expect(input).toHaveValue('(555) 123-');
		await expect(lastValue(args.onChange)).toBe('(555) 123-');
	}
};

/**
 * Editing in the middle of a full number: a digit typed after `(5` shifts the
 * rest right, the eleventh digit falls off the end and the caret stays after
 * the digit just typed instead of jumping to the end.
 *
 * @summary Caret staying put when a digit is inserted mid-number
 */
export const CaretInTheMiddle: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole<HTMLInputElement>('textbox', { name: 'Phone number' });

		await userEvent.type(input, '5551234567');
		await userEvent.type(input, '9', { initialSelectionStart: 2, initialSelectionEnd: 2 });

		await expect(input).toHaveValue('(595) 512-3456');
		await waitFor(() => expect(input.selectionStart).toBe(3));
	}
};

/**
 * Backspace over the mask's own characters: after `555` the field shows
 * `(555) `, and deleting backwards trims the separators along with the digit
 * under the caret instead of leaving a dangling `) `.
 *
 * @summary Backspace trimming the separators the mask added
 */
export const BackspaceOverMaskCharacters: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await userEvent.type(input, '555');
		await expect(input).toHaveValue('(555) ');

		await userEvent.keyboard('{Backspace}');
		await expect(input).toHaveValue('(555');

		await userEvent.keyboard('{Backspace}');
		await expect(input).toHaveValue('(55');
	}
};

/**
 * A pasted number in any format is reduced to its digits and masked, so
 * `555-123-4567` from a clipboard ends up as `(555) 123-4567`.
 *
 * @summary Pasted number reduced to its digits and masked
 */
export const Paste: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await userEvent.click(input);
		await userEvent.paste('555-123-4567');

		await expect(input).toHaveValue('(555) 123-4567');
		await expect(lastValue(args.onChange)).toBe('(555) 123-4567');
	}
};

/**
 * The usual US phone layout: an `InputGroup` frame with a `+1` prefix in front
 * of the masked input. The prefix is decoration, so the value stays
 * `(555) 123-4567`.
 *
 * @summary Country prefix beside the masked input in an InputGroup
 */
export const InsideInputGroup: Story = {
	render: args => (
		<InputGroup.Root>
			<InputGroup.Text>+1</InputGroup.Text>
			<InputTel {...args} autoComplete="tel-national" placeholder="(555) 000-0000" />
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(canvas.getByText('+1')).toBeInTheDocument();

		await userEvent.type(input, '5551234567');

		await expect(input).toHaveValue('(555) 123-4567');
	}
};

/**
 * Inside a `FieldText` the input takes its label, description and states from
 * the field, and the masked value still reaches a handler the field provides.
 *
 * @summary Label and description reaching the input through the field
 */
export const InsideFieldText: Story = {
	render: () => (
		<FieldText>
			<Label>Phone number</Label>
			<InputTel />
			<Field.Description>We only call about your account.</Field.Description>
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(input).toHaveAccessibleDescription('We only call about your account.');

		await userEvent.type(input, '5551234567');

		await expect(input).toHaveValue('(555) 123-4567');
	}
};

type ContactValues = { phone: string };

let submitted: ContactValues | undefined;

/**
 * Registered with react-hook-form, the form receives the masked value: the
 * `register` handler reads `event.target.value` like any other change.
 *
 * @summary Masked value reaching react-hook-form through register
 */
export const WithReactHookForm: Story = {
	render: function Render(args) {
		const { register, handleSubmit } = useForm<ContactValues>({
			defaultValues: { phone: '' }
		});

		return (
			<form
				aria-label="Contact"
				noValidate
				onSubmit={handleSubmit(values => {
					submitted = values;
				})}
				style={{ display: 'grid', gap: '1rem' }}>
				<InputTel aria-label={args['aria-label']} {...register('phone')} />
				<Button type="submit">Save</Button>
			</form>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await userEvent.type(input, '5551234567');
		await userEvent.click(canvas.getByRole('button', { name: 'Save' }));

		await waitFor(() => expect(submitted?.phone).toBe('(555) 123-4567'));
	}
};

/**
 * Regression check, kept out of the manifest: a handler handed down through
 * `InputContext` runs once per keystroke, after the mask, so it reads the
 * masked value too.
 *
 * @summary Context handler called once per key with the masked value
 */
export const WithInputContext: Story = {
	tags: ['!manifest'],
	render: args => (
		<InputContext value={{ onChange: args.onChange }}>
			<InputTel aria-label={args['aria-label']} />
		</InputContext>
	),
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await userEvent.type(input, '5551234567');

		await expect(input).toHaveValue('(555) 123-4567');
		await expect(lastValue(args.onChange)).toBe('(555) 123-4567');
		await expect(args.onChange).toHaveBeenCalledTimes(10);
	}
};

/**
 * A disabled phone field keeps its masked value and takes no input.
 *
 * @summary Disabled phone field
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		defaultValue: '(555) 123-4567'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Phone number' })).toBeDisabled();
	}
};

/**
 * `aria-invalid` paints the destructive border; point `aria-describedby` at
 * the message so both are read together.
 *
 * @summary Invalid phone field with its error message
 */
export const Invalid: Story = {
	args: {
		'aria-invalid': true,
		'aria-describedby': 'phone-error',
		defaultValue: '(555) 123'
	},
	render: args => (
		<div style={{ display: 'grid', gap: '0.5rem' }}>
			<InputTel {...args} />
			<span id="phone-error">Enter a 10-digit phone number.</span>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Phone number' });

		await expect(input).toBeInvalid();
		await expect(input).toHaveAccessibleDescription('Enter a 10-digit phone number.');
	}
};

/**
 * The three sizes match Input's: the control is 32, 40 or 48px tall.
 *
 * @summary The three sizes side by side
 */
export const AllSizes: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<InputTel {...args} size="sm" aria-label="Small" defaultValue="(555) 123-4567" />
			<InputTel {...args} size="md" aria-label="Medium" defaultValue="(555) 123-4567" />
			<InputTel {...args} size="lg" aria-label="Large" defaultValue="(555) 123-4567" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const heights = getInputs(canvasElement).map(input => input.getBoundingClientRect().height);

		await expect(heights).toEqual([32, 40, 48]);
	}
};
