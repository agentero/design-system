import { ChangeEvent, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Field } from '../field';
import { FieldText } from '../field-text';
import { Label } from '../label';
import { InputSearch } from './input-search';

/**
 * InputSearch is a search field with a magnifier in front and a clear button
 * once there is text. It is an `Input` of `type="search"` inside an
 * `InputGroup`: `className` styles the frame and every other prop reaches the
 * `<input>`. Clearing reports a real change event with an empty value, and
 * `isLoading` swaps the clear button for a spinner.
 */
const meta = {
	title: 'Components/InputSearch',
	component: InputSearch,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		},
		placeholder: { control: 'text' },
		isLoading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' }
	},
	args: {
		'aria-label': 'Search agencies',
		onChange: fn((event: ChangeEvent<HTMLInputElement>) => event.target.value)
	},
	decorators: [
		Story => (
			<div style={{ maxWidth: '24rem' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof InputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

const getFrames = (canvasElement: HTMLElement) =>
	Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-slot="input-search"]'));

// The spy returns `event.target.value` as it was when `onChange` ran: the
// target is the live input, so reading it later would only show its current value.
const lastValue = (onChange: unknown) =>
	(onChange as ReturnType<typeof fn>).mock.results.at(-1)?.value;

/**
 * A controlled search. The clear button appears once there is text; pressing
 * it calls `onChange` with an empty `event.target.value`, so the state that
 * owns the query empties too, and focus goes back to the input. The browser's
 * own cancel button is hidden.
 *
 * @summary Controlled search with a clear button that empties the query
 */
export const Default: Story = {
	render: function Render(args) {
		const [query, setQuery] = useState('');

		return (
			<InputSearch
				{...args}
				value={query}
				onChange={event => {
					setQuery(event.target.value);
					args.onChange?.(event);
				}}
			/>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox', { name: 'Search agencies' });

		await expect(input).toHaveAttribute('placeholder', 'Search');
		await expect(canvas.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();

		await userEvent.type(input, 'Acme');
		await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }));

		await expect(lastValue(args.onChange)).toBe('');
		await expect(input).toHaveValue('');
		await expect(input).toHaveFocus();
		await expect(canvas.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
	}
};

/**
 * While `isLoading` is set a spinner takes the clear button's place, even with
 * text in the field.
 *
 * @summary Spinner in place of the clear button while results load
 */
export const Loading: Story = {
	args: {
		isLoading: true,
		defaultValue: 'Acme'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('status')).toBeInTheDocument();
		await expect(canvas.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
	}
};

/**
 * An uncontrolled search with a `defaultValue`. The clear button follows what
 * is in the field, and clearing still calls `onChange` with an empty value.
 *
 * @summary Uncontrolled search starting from a default value
 */
export const Uncontrolled: Story = {
	args: {
		defaultValue: 'Acme Insurance'
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox');

		await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }));
		await expect(input).toHaveValue('');
		await expect(lastValue(args.onChange)).toBe('');
		await expect(canvas.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();

		await userEvent.type(input, 'Bay');
		await expect(canvas.getByRole('button', { name: 'Clear search' })).toBeInTheDocument();
	}
};

/**
 * A disabled search has no clear button, whether `disabled` is set on the
 * input itself or comes from a `<fieldset disabled>` around it.
 *
 * @summary Disabled search with the clear button removed
 */
export const Disabled: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<InputSearch {...args} disabled defaultValue="Acme" />
			<fieldset disabled style={{ border: 0, margin: 0, padding: 0 }}>
				<InputSearch {...args} aria-label="Search carriers" defaultValue="Travelers" />
			</fieldset>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('searchbox', { name: 'Search agencies' })).toBeDisabled();
		await expect(canvas.getByRole('searchbox', { name: 'Search carriers' })).toBeDisabled();
		await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
	}
};

/**
 * The three sizes match Input's: the frame is 32, 40 or 48px tall.
 *
 * @summary The three sizes side by side
 */
export const AllSizes: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<InputSearch {...args} size="sm" aria-label="Small" defaultValue="Acme" />
			<InputSearch {...args} size="md" aria-label="Medium" defaultValue="Acme" />
			<InputSearch {...args} size="lg" aria-label="Large" defaultValue="Acme" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const heights = getFrames(canvasElement).map(frame => frame.getBoundingClientRect().height);

		await expect(heights).toEqual([32, 40, 48]);
	}
};

/**
 * Inside a `FieldText` the input takes its label, description and states from
 * the field through the frame. A disabled field removes the clear button too.
 *
 * @summary Label and disabled state reaching the input through the frame
 */
export const InsideFieldText: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: '1.5rem' }}>
			<FieldText>
				<Label>Agency</Label>
				<InputSearch defaultValue="Acme" />
				<Field.Description>Search by agency name or NPN.</Field.Description>
			</FieldText>
			<FieldText disabled>
				<Label>Carrier</Label>
				<InputSearch defaultValue="Travelers" />
			</FieldText>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox', { name: 'Agency' });

		await expect(input).toHaveAccessibleDescription('Search by agency name or NPN.');
		await expect(canvas.getByRole('searchbox', { name: 'Carrier' })).toBeDisabled();
		await expect(canvas.getAllByRole('button', { name: 'Clear search' })).toHaveLength(1);
	}
};

/**
 * `clearLabel` names the clear button after what is searched, so a page with
 * several search fields does not read "Clear search" twice.
 *
 * @summary Clear button named after what the field searches
 */
export const ClearLabel: Story = {
	args: {
		defaultValue: 'Acme',
		clearLabel: 'Clear agency search'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('button', { name: 'Clear agency search' })).toBeInTheDocument();
	}
};

type FilterValues = { query: string };

let readForm: () => FilterValues;

/**
 * Regression check, kept out of the manifest: react-hook-form's `register`
 * writes `defaultValues` straight into the DOM through the ref, with no change
 * event, and the clear button must still show; clearing must reach the form.
 *
 * @summary Clear button with a value written by register through the ref
 */
export const WithReactHookForm: Story = {
	tags: ['!manifest'],
	render: function Render(args) {
		const { register, getValues } = useForm<FilterValues>({
			defaultValues: { query: 'Acme' }
		});
		readForm = getValues;

		return <InputSearch aria-label={args['aria-label']} {...register('query')} />;
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox');

		await expect(input).toHaveValue('Acme');
		await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }));
		await expect(input).toHaveValue('');
		await expect(readForm().query).toBe('');
	}
};
