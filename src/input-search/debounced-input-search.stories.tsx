import { ChangeEvent, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fireEvent, fn, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../button';
import { DebouncedInputSearch } from './debounced-input-search';

/**
 * DebouncedInputSearch is an `InputSearch` for filters that are expensive to
 * run. Keystrokes show up at once, but `onChange` fires only once the user
 * pauses for 300ms, with the last change event. It is always controlled:
 * `value` and `onChange` are required, and the field follows a `value`
 * changed from outside.
 */
const meta = {
	title: 'Components/DebouncedInputSearch',
	component: DebouncedInputSearch,
	tags: ['autodocs'],
	argTypes: {
		// Each story keeps the query in its own state, as a page would.
		value: { control: false },
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
		value: '',
		onChange: fn((event: ChangeEvent<HTMLInputElement>) => event.target.value)
	},
	decorators: [
		Story => (
			<div style={{ maxWidth: '24rem' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof DebouncedInputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

// The spy returns `event.target.value` as it was when `onChange` ran: the
// target is the live input, so reading it later would only show its current value.
const calls = (onChange: unknown) =>
	(onChange as ReturnType<typeof fn>).mock.results.map(r => r.value);

/**
 * A page filtering by a query it owns. Typing shows up in the field at once;
 * `onChange` arrives once the user pauses, with the whole text in
 * `event.target.value`. Clearing the field goes through the same delay.
 *
 * @summary Controlled query reported once the user stops typing
 */
export const Default: Story = {
	render: function Render(args) {
		const [query, setQuery] = useState(args.value);

		return (
			<DebouncedInputSearch
				{...args}
				value={query}
				onChange={event => {
					setQuery(event.target.value);
					args.onChange(event);
				}}
			/>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox', { name: 'Search agencies' });

		// Four keystrokes, one call: only the gap between keys has to stay under
		// the delay, not the whole sequence.
		await userEvent.type(input, 'Acme');
		await expect(input).toHaveValue('Acme');

		await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
		await expect(calls(args.onChange)).toEqual(['Acme']);

		await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }));
		await expect(input).toHaveValue('');

		await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(2));
		await expect(calls(args.onChange)).toEqual(['Acme', '']);
	}
};

/**
 * The field follows `value` when the page changes it from outside, here a
 * saved search applied with a button: nothing is being typed, so the new
 * query replaces the text.
 *
 * @summary Field following a value changed from outside while idle
 */
export const ExternalValue: Story = {
	render: function Render(args) {
		const [query, setQuery] = useState('Acme');

		return (
			<div style={{ display: 'grid', gap: '1rem' }}>
				<DebouncedInputSearch
					{...args}
					value={query}
					onChange={event => {
						setQuery(event.target.value);
						args.onChange(event);
					}}
				/>
				<Button variant="secondary" size="sm" onClick={() => setQuery('Travelers')}>
					Apply saved search
				</Button>
			</div>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox', { name: 'Search agencies' });

		await expect(input).toHaveValue('Acme');
		await userEvent.click(canvas.getByRole('button', { name: 'Apply saved search' }));
		await expect(input).toHaveValue('Travelers');
		await expect(args.onChange).not.toHaveBeenCalled();
	}
};

/**
 * A `value` that changes from outside while the user is still typing does not
 * overwrite the text. The page gets what was typed once the user pauses, and
 * the field keeps showing it.
 *
 * @summary Typing in progress wins over a value changed from outside
 */
export const TypingWins: Story = {
	render: function Render(args) {
		const [query, setQuery] = useState('');

		return (
			<div style={{ display: 'grid', gap: '1rem' }}>
				<DebouncedInputSearch
					{...args}
					value={query}
					onChange={event => {
						setQuery(event.target.value);
						args.onChange(event);
					}}
				/>
				<Button variant="secondary" size="sm" onClick={() => setQuery('Travelers')}>
					Apply saved search
				</Button>
			</div>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox', { name: 'Search agencies' });

		// Typing and the outside change run in the same task, so the delay cannot
		// run out between them however slow the runner is.
		fireEvent.change(input, { target: { value: 'Acme' } });
		canvas.getByRole('button', { name: 'Apply saved search' }).click();
		await expect(input).toHaveValue('Acme');

		await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
		await expect(calls(args.onChange)).toEqual(['Acme']);
		await expect(input).toHaveValue('Acme');
	}
};

/**
 * Pressing Enter reports the text at once instead of waiting for the pause.
 *
 * @summary Enter reports the pending query without waiting
 */
export const SubmitOnEnter: Story = {
	render: function Render(args) {
		const [query, setQuery] = useState(args.value);

		return (
			<DebouncedInputSearch
				{...args}
				value={query}
				onChange={event => {
					setQuery(event.target.value);
					args.onChange(event);
				}}
			/>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('searchbox', { name: 'Search agencies' });

		await userEvent.type(input, 'Acme{Enter}');
		await expect(calls(args.onChange)).toEqual(['Acme']);
	}
};

/**
 * When the field unmounts with a call pending, here because the panel holding
 * it closes, `onChange` fires at once with what was typed instead of being lost.
 *
 * @summary Pending query reported when the field unmounts
 */
export const ReportOnUnmount: Story = {
	render: function Render(args) {
		const [query, setQuery] = useState('');
		const [open, setOpen] = useState(true);

		return (
			<div style={{ display: 'grid', gap: '1rem' }}>
				{open && (
					<DebouncedInputSearch
						{...args}
						value={query}
						onChange={event => {
							setQuery(event.target.value);
							args.onChange(event);
						}}
					/>
				)}
				<Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
					Close filters
				</Button>
				<output>Filtering by: {query}</output>
			</div>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.type(canvas.getByRole('searchbox', { name: 'Search agencies' }), 'Acme');
		await userEvent.click(canvas.getByRole('button', { name: 'Close filters' }));

		await expect(canvas.queryByRole('searchbox')).not.toBeInTheDocument();
		await expect(calls(args.onChange)).toEqual(['Acme']);
		await expect(canvas.getByRole('status')).toHaveTextContent('Filtering by: Acme');
	}
};
