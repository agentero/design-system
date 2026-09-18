import { useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Combobox } from '.';
import { IconSearch } from '../command/icons';
import { Field } from '../field';
import { FieldText } from '../field-text';
import { Label } from '../label';

/**
 * Combobox is a text input that filters a list and writes the chosen option back
 * into itself. Focusing the input or typing opens the list; picking a row fills the
 * input and closes it. Built on Base UI, whose Combobox primitive owns the
 * filtering, the keyboard navigation and the `role="combobox"` wiring.
 */
// Annotated rather than `satisfies`: `Root`'s inferred props reach into Base UI's internal
// `AriaCombobox` module, which stock tsc cannot name from here (TS2742).
const meta: Meta<typeof Combobox.Root> = {
	title: 'Components/Combobox',
	component: Combobox.Root,
	tags: ['autodocs'],
	parameters: {
		docs: { story: { height: '320px' } }
	},
	// The surface takes the input's width; 592px is what the marketplace forms give it.
	decorators: [
		Story => (
			<div className="w-148 max-w-full p-4">
				<Story />
			</div>
		)
	]
};

export default meta;
type Story = StoryObj<typeof meta>;

const STATES = ['California', 'Colorado', 'Connecticut', 'Florida', 'Texas', 'Washington'];

/**
 * The common case: options are already in memory and Base UI filters them against
 * what you type. Selecting a row fills the input and closes the list.
 */
export const Default: Story = {
	render: () => (
		<Combobox.Root items={STATES}>
			<Combobox.Input placeholder="Search states" aria-label="Search states" />
			<Combobox.Content>
				<Combobox.Empty>No matches found</Combobox.Empty>
				<Combobox.List>
					{(state: string) => (
						<Combobox.Item key={state} value={state}>
							{state}
						</Combobox.Item>
					)}
				</Combobox.List>
			</Combobox.Content>
		</Combobox.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: /search states/i });

		await userEvent.click(input);
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(STATES.length));
		await expect(body.getByRole('listbox')).toHaveAccessibleName('Search states');

		// The default filter is `contains`: Colorado and Connecticut, not California.
		await userEvent.type(input, 'co');
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));

		await userEvent.click(body.getByRole('option', { name: 'Colorado' }));
		await waitFor(() => expect(input).toHaveValue('Colorado'));

		// The surface stays mounted through its exit animation, so wait it out.
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
	}
};

/**
 * `Empty` stays mounted so screen readers announce the change; it renders its
 * children only while nothing matches. It needs `items` on `Root` to know that.
 */
export const NoMatches: Story = {
	render: () => (
		<Combobox.Root items={STATES}>
			<Combobox.Input placeholder="Search states" aria-label="Search states" />
			<Combobox.Content>
				<Combobox.Empty>No matches found</Combobox.Empty>
				<Combobox.List>
					{(state: string) => (
						<Combobox.Item key={state} value={state}>
							{state}
						</Combobox.Item>
					)}
				</Combobox.List>
			</Combobox.Content>
		</Combobox.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await userEvent.type(canvas.getByRole('combobox', { name: /search states/i }), 'zzz');

		await expect(await body.findByText(/no matches found/i)).toBeInTheDocument();
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
	}
};

type Agency = { id: string; name: string };

const ALL_AGENCIES: Agency[] = [
	{ id: 'acme', name: 'Acme Insurance' },
	{ id: 'anchor', name: 'Anchor Brokers' },
	{ id: 'beacon', name: 'Beacon Risk' },
	{ id: 'cardinal', name: 'Cardinal Agency' }
];

const searchAgencies = (query: string) =>
	new Promise<Agency[]>(resolve => {
		setTimeout(
			() => resolve(ALL_AGENCIES.filter(a => a.name.toLowerCase().includes(query.toLowerCase()))),
			300
		);
	});

const RemoteSearch = () => {
	const [results, setResults] = useState<Agency[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	// Only the latest request may land; fast typing returns responses out of order.
	const latestRequest = useRef(0);

	const onInputValueChange = async (query: string) => {
		const request = ++latestRequest.current;

		if (query.length < 2) {
			setResults([]);
			setIsLoading(false);
			return;
		}

		setIsLoading(true);
		const agencies = await searchAgencies(query);
		if (request !== latestRequest.current) return;

		setResults(agencies);
		setIsLoading(false);
	};

	return (
		// `filter={null}` hands filtering to the server; `filteredItems` is what came back.
		// `isItemEqualToValue` keeps a re-fetched copy counting as the selected one.
		<Combobox.Root
			items={results}
			filteredItems={results}
			filter={null}
			itemToStringLabel={(agency: Agency) => agency.name}
			isItemEqualToValue={(a: Agency, b: Agency) => a.id === b.id}
			onInputValueChange={onInputValueChange}>
			<Combobox.Input placeholder="Search agencies" aria-label="Search agencies" />
			<Combobox.Content aria-busy={isLoading || undefined}>
				<Combobox.Status>{isLoading ? 'Searching…' : undefined}</Combobox.Status>
				<Combobox.Empty>{isLoading ? undefined : 'No agencies found'}</Combobox.Empty>
				<Combobox.List>
					{(agency: Agency) => (
						<Combobox.Item key={agency.id} value={agency}>
							{agency.name}
						</Combobox.Item>
					)}
				</Combobox.List>
			</Combobox.Content>
		</Combobox.Root>
	);
};

/**
 * Options fetched as you type, as objects — the shape every real consumer has.
 * `filter={null}` turns off local filtering, the rows arrive through
 * `filteredItems`, `Status` announces the wait politely and `Content` is marked
 * busy meanwhile. Picking a row writes `itemToStringLabel` into the input.
 */
export const AsyncSearch: Story = {
	render: () => <RemoteSearch />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await userEvent.type(canvas.getByRole('combobox', { name: /search agencies/i }), 'an');

		await expect(await body.findByText(/searching/i)).toBeInTheDocument();
		await waitFor(() => expect(body.getAllByRole('option').length).toBeGreaterThan(0));

		await userEvent.click(body.getByRole('option', { name: 'Anchor Brokers' }));
		await waitFor(() =>
			expect(canvas.getByRole('combobox', { name: /search agencies/i })).toHaveValue(
				'Anchor Brokers'
			)
		);
	}
};

/**
 * Dropped into a `FieldText`, the input takes the label, the description and
 * the error from the field with nothing wired by hand: `Combobox.Input` reads the
 * same `InputContext` the plain `Input` does.
 */
export const InsideFieldText: Story = {
	render: () => (
		<FieldText invalid required>
			<Label>Agency</Label>
			<Combobox.Root items={STATES}>
				<Combobox.Input placeholder="Search agencies" />
				<Combobox.Content>
					<Combobox.Empty>No matches found</Combobox.Empty>
					<Combobox.List>
						{(state: string) => (
							<Combobox.Item key={state} value={state}>
								{state}
							</Combobox.Item>
						)}
					</Combobox.List>
				</Combobox.Content>
			</Combobox.Root>
			<Field.Description>The agency this agent will be added to.</Field.Description>
			<Field.Error errors={[{ message: 'Pick an agency from the list' }]} />
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox', { name: 'Agency' });

		await expect(input).toHaveAttribute('data-slot', 'combobox-input');
		await expect(input).toBeRequired();
		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(input).toHaveAccessibleDescription(
			/added to.*Pick an agency|Pick an agency.*added to/
		);
	}
};

/**
 * A leading icon is composed around the input, not baked in: not every combobox
 * is a search (a FEIN lookup or a template picker are not), so the component
 * ships no icon of its own. Until `InputGroup` lands in the design system, the
 * marketplace search fields get theirs like this — the icon overlaid, the input
 * padded past it.
 */
export const WithLeadingIcon: Story = {
	render: () => (
		<Combobox.Root items={STATES}>
			<div className="relative">
				<IconSearch
					aria-hidden
					className="pointer-events-none absolute top-1/2 left-3 size-6 -translate-y-1/2 [&>path]:fill-icon-default-base-tertiary"
				/>
				<Combobox.Input className="pl-11" placeholder="Search states" aria-label="Search states" />
			</div>
			<Combobox.Content>
				<Combobox.Empty>No matches found</Combobox.Empty>
				<Combobox.List>
					{(state: string) => (
						<Combobox.Item key={state} value={state}>
							{state}
						</Combobox.Item>
					)}
				</Combobox.List>
			</Combobox.Content>
		</Combobox.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: /search states/i });

		// The icon is decoration: nothing for assistive technology, and the input keeps its name.
		await expect(canvasElement.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
		await expect(input).toHaveClass('pl-11');

		await userEvent.type(input, 'tex');
		await expect(await body.findByRole('option', { name: 'Texas' })).toBeInTheDocument();
	}
};
