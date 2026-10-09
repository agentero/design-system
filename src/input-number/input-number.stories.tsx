import { ChangeEvent, createRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Field } from '../field';
import { FieldText } from '../field-text';
import { InputContext } from '../input';
import { InputGroup } from '../input-group';
import { Label } from '../label';
import { InputNumber } from './input-number';

/**
 * InputNumber is a text field that only takes digits and formats them as the
 * user types: thousands separators on request, leading zeros kept unless
 * turned off, no sign. `onChange` fires with the formatted text in
 * `event.target.value`. It is an `Input` driven by `react-number-format`, so
 * it takes its label, messages and states from a surrounding `FieldText`.
 */
const meta = {
	title: 'Components/InputNumber',
	component: InputNumber,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		},
		type: {
			control: 'radio',
			options: ['text', 'tel', 'password']
		},
		thousandSeparator: { control: 'boolean' },
		allowLeadingZeros: { control: 'boolean' },
		maxNumber: { control: 'number' },
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' }
	},
	args: {
		'aria-label': 'Premium',
		onChange: fn((event: ChangeEvent<HTMLInputElement>) => event.target.value)
	},
	decorators: [
		Story => (
			<div style={{ maxWidth: '24rem' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof InputNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

// The spy returns `event.target.value` as it was when `onChange` ran: the
// target is the live input, so reading it later would only show its current value.
const lastValue = (onChange: unknown) =>
	(onChange as ReturnType<typeof fn>).mock.results.at(-1)?.value;

const inputRef = createRef<HTMLInputElement>();

/**
 * Only digits make it into the field: letters and a minus sign are ignored as
 * they are typed. `onChange` reports the text as it is shown, and the `ref`
 * points at the `<input>` element.
 *
 * @summary Digits-only field that ignores letters and signs
 */
export const Default: Story = {
	render: args => <InputNumber {...args} ref={inputRef} />,
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium' });

		await userEvent.type(input, '12abc34-');

		await expect(input).toHaveValue('1234');
		await expect(lastValue(args.onChange)).toBe('1234');
		await expect(inputRef.current).toBe(input);
	}
};

/**
 * `type="tel"` brings up the numeric keypad on phones. The field still
 * formats and filters the same way; only the underlying input type changes.
 *
 * @summary Numeric keypad on phones through the tel input type
 */
export const TypeTel: Story = {
	args: {
		type: 'tel',
		'aria-label': 'NPN'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'NPN' });

		await expect(input).toHaveAttribute('type', 'tel');
		await userEvent.type(input, '2a9');
		await expect(input).toHaveValue('29');
	}
};

/**
 * With `thousandSeparator` the integer part is grouped with commas as the
 * user types, and the commas are part of what `onChange` reports.
 *
 * @summary Thousands grouped with commas as the user types
 */
export const ThousandSeparator: Story = {
	args: {
		thousandSeparator: true
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium' });

		await userEvent.type(input, '1234567');

		await expect(input).toHaveValue('1,234,567');
		await expect(lastValue(args.onChange)).toBe('1,234,567');
	}
};

/**
 * `maxNumber` caps the value: a keystroke that would push the number above
 * it is dropped, so the field keeps its previous value and `onChange` is not
 * called for it.
 *
 * @summary Keystrokes that would exceed a maximum are dropped
 */
export const MaxNumber: Story = {
	args: {
		maxNumber: 100,
		'aria-label': 'Commission rate'
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Commission rate' });

		await userEvent.type(input, '1000');

		await expect(input).toHaveValue('100');
		await expect(lastValue(args.onChange)).toBe('100');
		await expect((args.onChange as ReturnType<typeof fn>).mock.calls).toHaveLength(3);
	}
};

/**
 * Leading zeros are kept by default, as an NPN or a ZIP code needs. With
 * `allowLeadingZeros` off they are dropped once the field loses focus, which
 * is what an amount wants.
 *
 * @summary Leading zeros kept by default, dropped on blur when turned off
 */
export const LeadingZeros: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<InputNumber {...args} aria-label="ZIP code" />
			<InputNumber {...args} aria-label="Amount" allowLeadingZeros={false} />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const zip = canvas.getByRole('textbox', { name: 'ZIP code' });
		const amount = canvas.getByRole('textbox', { name: 'Amount' });

		await userEvent.type(zip, '007');
		await userEvent.type(amount, '007');
		await userEvent.tab();

		await expect(zip).toHaveValue('007');
		await expect(amount).toHaveValue('7');
	}
};

/**
 * A controlled field takes `value` as a number and shows it formatted. The
 * state keeps what `onChange` reports, so it holds the formatted text.
 *
 * @summary Controlled field showing a numeric value formatted
 */
export const Controlled: Story = {
	args: {
		thousandSeparator: true
	},
	render: function Render(args) {
		const [premium, setPremium] = useState<number | string>(1234);

		return (
			<InputNumber
				{...args}
				value={premium}
				onChange={event => {
					setPremium(event.target.value);
					args.onChange?.(event);
				}}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium' });

		await expect(input).toHaveValue('1,234');
		await userEvent.type(input, '5');
		await expect(input).toHaveValue('12,345');
	}
};

/**
 * Inside an `InputGroup` the field sits behind a currency affix and the
 * frame takes its focus, disabled and invalid states from the input.
 *
 * @summary Amount with a currency prefix inside an input group
 */
export const InsideInputGroup: Story = {
	args: {
		thousandSeparator: true,
		allowLeadingZeros: false,
		placeholder: '0'
	},
	render: args => (
		<InputGroup.Root>
			<InputGroup.Text>$</InputGroup.Text>
			<InputNumber {...args} />
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium' });

		await userEvent.type(input, '2500');
		await expect(input).toHaveValue('2,500');
		await expect(canvas.getByText('$')).toBeInTheDocument();
	}
};

/**
 * Inside a `FieldText` the input takes its label, description and states from
 * the field. `invalid` on the field sets `aria-invalid`, which paints the
 * destructive border, and `disabled` reaches the input the same way.
 *
 * @summary Label, messages and states reaching the input from a FieldText
 */
export const InsideFieldText: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: '1.5rem' }}>
			<FieldText required>
				<Label>NPN</Label>
				<InputNumber type="tel" />
				<Field.Description>The 7 to 10 digit National Producer Number.</Field.Description>
			</FieldText>
			<FieldText invalid>
				<Label>Years in business</Label>
				<InputNumber defaultValue={150} />
				<Field.Error errors={[{ message: 'Enter at most 100 years.' }]} />
			</FieldText>
			<FieldText disabled>
				<Label>Agency code</Label>
				<InputNumber defaultValue="00412" />
			</FieldText>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const npn = canvas.getByLabelText(/^NPN/);
		const years = canvas.getByLabelText('Years in business');
		const code = canvas.getByLabelText('Agency code');

		await expect(npn).toBeRequired();
		await expect(npn).toHaveAccessibleDescription('The 7 to 10 digit National Producer Number.');
		await expect(years).toHaveAttribute('aria-invalid', 'true');
		await expect(years).toHaveAccessibleDescription('Enter at most 100 years.');
		await expect(getComputedStyle(years).borderColor).not.toBe(getComputedStyle(npn).borderColor);
		await expect(code).toBeDisabled();
		await expect(code).toHaveValue('00412');
	}
};

/**
 * A disabled field keeps its formatted value and takes no input.
 *
 * @summary Disabled field with a formatted value
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		thousandSeparator: true,
		defaultValue: 12500
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium' });

		await expect(input).toBeDisabled();
		await expect(input).toHaveValue('12,500');
	}
};

/**
 * `aria-invalid` paints the destructive border, the same way it does on a
 * plain `Input`.
 *
 * @summary Invalid state driven by aria-invalid
 */
export const Invalid: Story = {
	args: {
		'aria-invalid': true,
		defaultValue: 0
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium' });

		await expect(input).toHaveAttribute('aria-invalid', 'true');
	}
};

/**
 * The three sizes match Input's: 32, 40 or 48px tall.
 *
 * @summary The three sizes side by side
 */
export const AllSizes: Story = {
	args: {
		thousandSeparator: true,
		defaultValue: 1234
	},
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<InputNumber {...args} size="sm" aria-label="Small" />
			<InputNumber {...args} size="md" aria-label="Medium" />
			<InputNumber {...args} size="lg" aria-label="Large" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const heights = within(canvasElement)
			.getAllByRole('textbox')
			.map(input => input.getBoundingClientRect().height);

		await expect(heights).toEqual([32, 40, 48]);
	}
};

type AgencyValues = { npn: string };

let readForm: () => AgencyValues;

/**
 * Regression check, kept out of the manifest: react-hook-form's `register`
 * hands over `ref`, `onChange` and `onBlur`, and the form stores the
 * formatted text that `onChange` reports.
 *
 * @summary Register storing the formatted text through onChange
 */
export const WithReactHookForm: Story = {
	tags: ['!manifest'],
	render: function Render(args) {
		const { register, getValues } = useForm<AgencyValues>({
			defaultValues: { npn: '' }
		});
		readForm = getValues;

		return <InputNumber aria-label={args['aria-label']} thousandSeparator {...register('npn')} />;
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		await userEvent.type(input, '1234');
		await expect(input).toHaveValue('1,234');
		await expect(readForm().npn).toBe('1,234');
	}
};

const contextRef = createRef<HTMLInputElement>();
const contextOnChange = fn((event: ChangeEvent<HTMLInputElement>) => event.target.value);

/**
 * Regression check, kept out of the manifest: a container's `InputContext`
 * is merged once, before the formatting, so a context `onChange` runs once
 * per keystroke with the formatted value, and the context `ref` reaches the
 * `<input>` alongside the field's own.
 *
 * @summary Context handlers merged once, before the formatting
 */
export const WithInputContext: Story = {
	tags: ['!manifest'],
	args: {
		thousandSeparator: true
	},
	render: args => (
		<InputContext value={{ onChange: contextOnChange, ref: contextRef }}>
			<InputNumber {...args} ref={inputRef} />
		</InputContext>
	),
	play: async ({ args, canvasElement }) => {
		contextOnChange.mockClear();
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium' });

		await userEvent.type(input, '1234');

		await expect(input).toHaveValue('1,234');
		await expect(lastValue(contextOnChange)).toBe('1,234');
		await expect(contextOnChange.mock.calls).toHaveLength(4);
		await expect(lastValue(args.onChange)).toBe('1,234');
		await expect(contextRef.current).toBe(input);
		await expect(inputRef.current).toBe(input);
	}
};
