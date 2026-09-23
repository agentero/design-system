import { Suspense, use, useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Combobox } from '.';
import { Button } from '../button';
import { IconSearch } from '../command/icons';
import { Field } from '../field';
import { FieldText } from '../field-text';
import { Label } from '../label';
import { Modal } from '../modal';
import { Skeleton } from '../skeleton';

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
		// Named on its own: borrowing the input's name would resolve to the typed text.
		await expect(body.getByRole('listbox')).toHaveAccessibleName('Suggestions');

		// The default filter is `contains`: Colorado and Connecticut, not California.
		await userEvent.type(input, 'co');
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));

		// Nothing picked yet, so the clear button has nothing to clear and stays unmounted.
		await expect(canvas.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();

		await userEvent.click(body.getByRole('option', { name: 'Colorado' }));
		await waitFor(() => expect(input).toHaveValue('Colorado'));

		await userEvent.click(await canvas.findByRole('button', { name: /clear/i }));
		await waitFor(() => expect(input).toHaveValue(''));
		await expect(input).toHaveFocus();
		await userEvent.keyboard('{Escape}');

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

// Placeholder rows with an item's exact height, so the surface keeps its size while the results
// land instead of collapsing to a status line and growing back.
const SkeletonRows = () => (
	<div data-slot="combobox-skeleton" className="py-2" aria-hidden="true">
		{['w-28', 'w-36', 'w-32'].map(width => (
			<div key={width} className="mx-2 my-px flex items-center px-3 py-2">
				<Skeleton className={`h-5 ${width}`} />
			</div>
		))}
	</div>
);

// Stand-in for react-query: one promise per query, reused across renders so `use()` can suspend
// on it. Keyed by query, a late response for an older query settles into an entry nobody renders
// any more — the same guard against out-of-order responses that a query key gives the apps.
const agencyRequests = new Map<string, Promise<Agency[]>>();
const loadAgencies = (query: string) => {
	let request = agencyRequests.get(query);
	if (!request) {
		request = searchAgencies(query);
		agencyRequests.set(query, request);
	}
	return request;
};

// `Combobox.Empty` needs `items` on `Root`, which this pattern never has: the rows are the
// suspended child's, so the empty message is its as well.
const AgencyItems = ({ query }: { query: string }) => {
	const agencies = use(loadAgencies(query));

	if (agencies.length === 0) {
		return (
			<div className="mx-2 my-px px-3 py-2 text-sm text-text-default-base-tertiary">
				No agencies found
			</div>
		);
	}

	return (
		<Combobox.List>
			{agencies.map(agency => (
				<Combobox.Item key={agency.id} value={agency}>
					{agency.name}
				</Combobox.Item>
			))}
		</Combobox.List>
	);
};

const SuspenseSearch = () => {
	const [query, setQuery] = useState('');

	return (
		// No `items` and `filter={null}`: the server did the filtering, the child renders what came
		// back, and `isItemEqualToValue` keeps a re-fetched copy counting as the selected one.
		<Combobox.Root
			filter={null}
			itemToStringLabel={(agency: Agency) => agency.name}
			isItemEqualToValue={(a: Agency, b: Agency) => a.id === b.id}
			onInputValueChange={(value, { reason }) => {
				// Picking a row writes its label into the input; that is not a new search.
				if (reason !== 'item-press') setQuery(value);
			}}>
			<Combobox.Input placeholder="Search agencies" aria-label="Search agencies" />
			<Combobox.Content>
				<Suspense fallback={<SkeletonRows />}>
					<AgencyItems query={query} />
				</Suspense>
			</Combobox.Content>
		</Combobox.Root>
	);
};

/**
 * Options fetched as you type, the way the apps load data: the rows are a component
 * that suspends on the request, so a `Suspense` boundary inside `Content` shows
 * placeholder rows until they land. Nothing tracks `loading` by hand and no stale
 * list lingers under the wait: the data is read by query, which is also what makes
 * out-of-order responses harmless. Drop a `useSuspenseQuery` where `use()` is.
 */
export const AsyncSearch: Story = {
	render: () => <SuspenseSearch />,
	// The play stops at the placeholder rows. Once the boundary is suspended, the test harness
	// (React's act environment) does not reliably flush the retry that lands the rows, so the
	// resolved state is asserted on `AsyncSearchWithStatus` instead, where nothing suspends.
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: /search agencies/i });

		// Focus opens the surface and the first request goes out for the empty query: no
		// minimum length here, that is the consumer's rule to add where it fetches.
		await userEvent.click(input);

		// Placeholder rows while the request is in flight, and no options yet.
		await waitFor(() =>
			expect(document.body.querySelector('[data-slot="combobox-skeleton"]')).toBeInTheDocument()
		);
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
		await userEvent.keyboard('{Escape}');
	}
};

const StatusSearch = () => {
	const [results, setResults] = useState<Agency[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	// Only the latest request may land; fast typing returns responses out of order.
	const latestRequest = useRef(0);

	const onInputValueChange = async (query: string) => {
		const request = ++latestRequest.current;

		// The previous rows go before the wait starts: a list that no longer matches what is typed
		// must not sit under the loading state.
		setResults([]);
		setIsLoading(true);
		const agencies = await searchAgencies(query);
		if (request !== latestRequest.current) return;

		setResults(agencies);
		setIsLoading(false);
	};

	return (
		// `filter={null}` hands filtering to the server; `filteredItems` is what came back.
		<Combobox.Root
			items={results}
			filteredItems={results}
			filter={null}
			itemToStringLabel={(agency: Agency) => agency.name}
			isItemEqualToValue={(a: Agency, b: Agency) => a.id === b.id}
			onInputValueChange={onInputValueChange}>
			<Combobox.Input placeholder="Search agencies" aria-label="Search agencies" />
			<Combobox.Content aria-busy={isLoading || undefined}>
				{/* The rows show the wait; `Status` only announces it. */}
				<Combobox.Status className="sr-only">
					{isLoading ? 'Searching…' : undefined}
				</Combobox.Status>
				{isLoading && <SkeletonRows />}
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
 * The same search without Suspense, for a consumer that gets a `loading` flag from
 * its data layer instead: `filter={null}`, the rows arrive through `filteredItems`,
 * `Content` is marked busy and `Status` announces the wait. The list is cleared
 * before each request and a request that is no longer the latest is dropped.
 */
export const AsyncSearchWithStatus: Story = {
	render: () => <StatusSearch />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: /search agencies/i });

		await userEvent.type(input, 'an');

		await expect(await body.findByText(/searching/i)).toBeInTheDocument();
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
		await waitFor(() => expect(body.getAllByRole('option').length).toBeGreaterThan(0));

		// Narrowing the query drops the old rows at once rather than leaving them under the wait.
		await userEvent.type(input, 'ch');
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));

		await userEvent.click(body.getByRole('option', { name: 'Anchor Brokers' }));
		await waitFor(() => expect(input).toHaveValue('Anchor Brokers'));
		await userEvent.keyboard('{Escape}');
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
					className="pointer-events-none absolute top-1/2 left-3 z-1 size-6 -translate-y-1/2 [&>path]:fill-icon-default-base-tertiary"
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

/**
 * Inside a `Modal`, which is a Radix Dialog. The surface portals to the body, so
 * this checks that the dialog's modal layer neither blocks pointer events on the
 * list nor treats a click in it as a click outside and closes.
 */
export const InsideModal: Story = {
	render: () => (
		<Modal.Root>
			<Modal.Trigger asChild>
				<Button variant="secondary">Assign agency</Button>
			</Modal.Trigger>
			<Modal.Content>
				<Modal.Title>Assign agency</Modal.Title>
				<Modal.Body>
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
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await userEvent.click(canvas.getByRole('button', { name: /assign agency/i }));
		const dialog = await body.findByRole('dialog', { name: /assign agency/i });
		const input = within(dialog).getByRole('combobox', { name: /search states/i });

		await userEvent.click(input);
		await userEvent.type(input, 'flo');
		const option = await body.findByRole('option', { name: 'Florida' });

		await userEvent.click(option);
		await waitFor(() => expect(input).toHaveValue('Florida'));
		// The dialog must survive the click on the portalled list — still open, not exiting.
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(dialog).toHaveAttribute('data-state', 'open');
	}
};
