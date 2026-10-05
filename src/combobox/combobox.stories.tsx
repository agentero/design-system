import { Suspense, use, useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Combobox } from '.';
import { Button } from '../button';
import { Field } from '../field';
import { FieldText } from '../field-text';
import { Label } from '../label';
import { Modal } from '../modal';
import { Skeleton } from '../skeleton';
import { Tag } from '../tag';

/**
 * Combobox is a text input that filters a list and writes the chosen option back
 * into itself. Focusing the input or typing opens the list; picking a row fills the
 * input and closes it. With `multiple` the rows become checkbox-like toggles and the
 * list stays open between picks. Built on Base UI, whose Combobox primitive owns
 * the filtering, the keyboard navigation and the `role="combobox"` wiring.
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

// The list anchors to the whole field, not the bare input: as wide as the frame, from its left
// edge. Synchronous, for `waitFor`: the surface grows in from 0.95 scale over 100ms.
const expectListAlignedWithField = (canvasElement: HTMLElement) => {
	const field = canvasElement
		.querySelector('[data-slot="combobox-field"]')!
		.getBoundingClientRect();
	const content = document.body
		.querySelector('[data-slot="combobox-content"]')!
		.getBoundingClientRect();

	expect(content.width).toBeCloseTo(field.width, 0);
	expect(content.left).toBeCloseTo(field.left, 0);
};

/**
 * The common case: options are already in memory and Base UI filters them against
 * what you type. Selecting a row fills the input and closes the list. The field is
 * a search out of the box — a magnifier in front, a clear button once something is
 * picked — and the list hangs from the whole field.
 *
 * @summary Search field with a magnifier and clear button over an in-memory list
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

		// The magnifier is decoration inside an input group addon.
		const icon = canvasElement.querySelector('[data-slot="input-group-addon"] svg');
		await expect(icon).toHaveAttribute('aria-hidden', 'true');

		await userEvent.click(input);
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(STATES.length));
		await waitFor(() => expectListAlignedWithField(canvasElement));
		// Named on its own: borrowing the input's name would resolve to the typed text.
		await expect(body.getByRole('listbox')).toHaveAccessibleName('Suggestions');
		// A single-value list has no selection indicator: that is the multi-select row's.
		await expect(
			document.body.querySelector('[data-slot="combobox-item-indicator"]')
		).not.toBeInTheDocument();

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
 * `variant="plain"`: the input alone, with no magnifier and no clear button, for a
 * field that needs no affordance — a FEIN lookup, a template name. The list still
 * matches the field's width.
 *
 * @summary Bare input with no icon and no clear button
 */
export const Plain: Story = {
	render: () => (
		<Combobox.Root items={STATES}>
			<Combobox.Input variant="plain" placeholder="State" aria-label="State" />
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
		const input = canvas.getByRole('combobox', { name: 'State' });

		await expect(canvasElement.querySelector('svg')).not.toBeInTheDocument();
		// Alone in the frame, the text sits at a plain `Input`'s 16px inset, not the group's 12px.
		const field = canvasElement.querySelector<HTMLElement>('[data-slot="combobox-field"]')!;
		await expect(getComputedStyle(field).paddingLeft).toBe('16px');

		await userEvent.type(input, 'tex');
		await waitFor(() => expectListAlignedWithField(canvasElement));
		await userEvent.click(await body.findByRole('option', { name: 'Texas' }));
		await waitFor(() => expect(input).toHaveValue('Texas'));

		// A picked value would mount the clear button in the other variants.
		await expect(canvas.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
	}
};

/**
 * `variant="select"`: a chevron after the input opens and closes the list, for a
 * short known list the user may want to browse before typing. It has no clear
 * button by default. The chevron is out of the tab order — the input already
 * opens the list from the keyboard with the arrow keys.
 *
 * @summary Field with a chevron that toggles the list, for short known lists
 */
export const Select: Story = {
	render: () => (
		<Combobox.Root items={STATES}>
			<Combobox.Input variant="select" placeholder="Choose a state" aria-label="State" />
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
		const input = canvas.getByRole('combobox', { name: 'State' });
		const trigger = canvas.getByRole('button', { name: 'Show options' });

		await expect(trigger).toHaveAttribute('aria-expanded', 'false');

		await userEvent.click(trigger);
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(STATES.length));
		await expect(trigger).toHaveAttribute('aria-expanded', 'true');
		await waitFor(() => expectListAlignedWithField(canvasElement));

		await userEvent.click(trigger);
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(trigger).toHaveAttribute('aria-expanded', 'false');

		await userEvent.click(trigger);
		await userEvent.click(await body.findByRole('option', { name: 'Florida' }));
		await waitFor(() => expect(input).toHaveValue('Florida'));
		await expect(canvas.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
	}
};

/**
 * `showClear` overrides the variant's default: here it adds the clear button to a
 * `select`, so a picked option can be removed without selecting the text and
 * deleting it. While there is a value it takes the chevron's place; clearing
 * brings the chevron back. Passing `false` drops it from `search`.
 *
 * @summary Select field with a clear button added through showClear
 */
export const SelectWithClear: Story = {
	render: () => (
		<Combobox.Root items={STATES} defaultValue="Florida">
			<Combobox.Input variant="select" showClear placeholder="Choose a state" aria-label="State" />
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
		const input = canvas.getByRole('combobox', { name: 'State' });
		const trigger = canvasElement.querySelector<HTMLElement>('[data-slot="combobox-trigger"]')!;

		// A value: the clear button stands where the chevron was.
		await expect(trigger).not.toBeVisible();
		await userEvent.click(canvas.getByRole('button', { name: /clear/i }));
		await waitFor(() => expect(input).toHaveValue(''));
		await expect(input).toHaveFocus();
		await userEvent.keyboard('{Escape}');

		// No value: the clear button is gone and the chevron is back.
		await expect(canvas.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
		await expect(trigger).toBeVisible();
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

/**
 * Several values from one list, the way Lines of Authority or locations are
 * assigned: each row leads with a checkbox-shaped indicator, picking a row toggles
 * it, and the list stays open with the query intact so the next pick is one click
 * away. The input never shows the selection; the field renders it alongside,
 * here as tags.
 */
export const MultipleSelection: Story = {
	render: () => {
		const [selected, setSelected] = useState<string[]>([]);

		return (
			<div className="flex flex-col gap-4">
				<Combobox.Root items={STATES} multiple value={selected} onValueChange={setSelected}>
					<Combobox.Input placeholder="Assign states" aria-label="Assign states" />
					<Combobox.Content>
						<Combobox.Empty>No matches found</Combobox.Empty>
						<Combobox.List aria-label="States">
							{(state: string) => (
								<Combobox.Item key={state} value={state}>
									{state}
								</Combobox.Item>
							)}
						</Combobox.List>
					</Combobox.Content>
				</Combobox.Root>
				{selected.length > 0 && (
					<ul aria-label="Selected states" className="flex flex-wrap gap-2">
						{selected.map(state => (
							<li key={state}>
								<Tag size="sm">{state}</Tag>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: /assign states/i });

		await userEvent.type(input, 'co');
		const list = await body.findByRole('listbox', { name: 'States' });
		await expect(list).toHaveAttribute('aria-multiselectable', 'true');
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));

		// Every row carries an indicator, empty until the row is picked.
		const colorado = body.getByRole('option', { name: 'Colorado' });
		const indicator = colorado.querySelector('[data-slot="combobox-item-indicator"]');
		await expect(indicator).toBeInTheDocument();
		await expect(indicator).not.toHaveAttribute('data-selected');
		await expect(colorado).toHaveAttribute('aria-selected', 'false');

		// Keyboard: arrow onto a row and press Enter. The list stays open and the query stays put.
		await userEvent.keyboard('{ArrowDown}{Enter}');
		await waitFor(() => expect(colorado).toHaveAttribute('aria-selected', 'true'));
		await expect(indicator).toHaveAttribute('data-selected');
		await expect(input).toHaveValue('co');
		await expect(body.getByRole('listbox', { name: 'States' })).toBeInTheDocument();
		await expect(
			within(canvas.getByRole('list', { name: /selected states/i })).getByText('Colorado')
		).toBeInTheDocument();

		// Mouse: the next pick adds to the selection without reopening or retyping.
		await userEvent.click(body.getByRole('option', { name: 'Connecticut' }));
		await waitFor(() =>
			expect(body.getByRole('option', { name: 'Connecticut' })).toHaveAttribute(
				'aria-selected',
				'true'
			)
		);
		await expect(colorado).toHaveAttribute('aria-selected', 'true');
		await expect(input).toHaveValue('co');
		await expect(canvas.getAllByRole('listitem')).toHaveLength(2);
		// No clear button and no chevron here: Base UI's clear would wipe the selection, not the
		// query, and a list that stays open between picks has nothing for a chevron to toggle.
		await expect(canvas.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
		await expect(
			canvasElement.querySelector('[data-slot="combobox-trigger"]')
		).not.toBeInTheDocument();

		// Picking a selected row again clears it.
		await userEvent.click(colorado);
		await waitFor(() => expect(colorado).toHaveAttribute('aria-selected', 'false'));
		await expect(indicator).not.toHaveAttribute('data-selected');
		await expect(canvas.getAllByRole('listitem')).toHaveLength(1);

		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
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

/**
 * Options fetched as you type, the way the apps load data: the rows are a component
 * that suspends on the request, so a `Suspense` boundary inside `Content` shows
 * placeholder rows until they land. Nothing tracks `loading` by hand and no stale
 * list lingers under the wait: the data is read by query, which is also what makes
 * out-of-order responses harmless. Drop a `useSuspenseQuery` where `use()` is.
 */
export const AsyncSearch: Story = {
	render: () => {
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
	},
	// The play stops at the placeholder rows. Once the boundary is suspended, the test harness
	// (React's act environment) does not reliably flush the retry that lands the rows, so the
	// resolved state is asserted on `AsyncSearchWithStatus` instead, where nothing suspends.
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: /search agencies/i });

		// Focus opens the surface and the first request goes out for the empty query: no
		// `minInputLength` here — see `AsyncSearchWithStatus` for a search that waits for one.
		await userEvent.click(input);

		// Placeholder rows while the request is in flight, and no options yet.
		await waitFor(() =>
			expect(document.body.querySelector('[data-slot="combobox-skeleton"]')).toBeInTheDocument()
		);
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
		await userEvent.keyboard('{Escape}');
	}
};

// What the apps wait for before asking the API.
const MIN_QUERY_LENGTH = 2;

/**
 * The same search without Suspense, for a consumer that gets a `loading` flag from
 * its data layer instead: `filter={null}`, the rows arrive through `filteredItems`,
 * `Content` is marked busy and `Status` announces the wait. The list is cleared
 * before each request and a request that is no longer the latest is dropped.
 *
 * `minInputLength` keeps the list shut until two characters are typed — focusing
 * the field opens nothing, and deleting back under the minimum closes it — and
 * no request goes out for a shorter query either.
 *
 * @summary API search that waits for two characters, with loading status
 */
export const AsyncSearchWithStatus: Story = {
	render: () => {
		const [results, setResults] = useState<Agency[]>([]);
		const [isLoading, setIsLoading] = useState(false);
		// Only the latest request may land; fast typing returns responses out of order.
		const latestRequest = useRef(0);

		const onInputValueChange = async (query: string) => {
			const request = ++latestRequest.current;
			if (query.trim().length < MIN_QUERY_LENGTH) {
				setResults([]);
				setIsLoading(false);
				return;
			}

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
				minInputLength={MIN_QUERY_LENGTH}
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
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: /search agencies/i });

		// Under the minimum nothing opens: not on focus, not on the first character.
		await userEvent.click(input);
		await userEvent.type(input, 'a');
		await expect(input).toHaveAttribute('aria-expanded', 'false');
		await expect(body.queryByRole('listbox')).not.toBeInTheDocument();

		await userEvent.type(input, 'n');

		await expect(await body.findByText(/searching/i)).toBeInTheDocument();
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
		await waitFor(() => expect(body.getAllByRole('option').length).toBeGreaterThan(0));

		// Narrowing the query drops the old rows at once rather than leaving them under the wait.
		await userEvent.type(input, 'ch');
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));

		// Deleting back under the minimum closes the list.
		await userEvent.type(input, '{Backspace}{Backspace}{Backspace}');
		await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
		await expect(input).toHaveAttribute('aria-expanded', 'false');

		await userEvent.type(input, 'ch');
		await userEvent.click(await body.findByRole('option', { name: 'Anchor Brokers' }));
		await waitFor(() => expect(input).toHaveValue('Anchor Brokers'));
		await userEvent.keyboard('{Escape}');
	}
};

/**
 * Dropped into a `FieldText`, the input takes the label, the description and
 * the error from the field with nothing wired by hand: `Combobox.Input` reads the
 * same `InputContext` the plain `Input` does. It also points `aria-labelledby`
 * at the label, so the name survives the list opening: Base UI then hides the
 * rest of the page from assistive technology, label included, and a
 * `<label for>` alone would stop naming the input.
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

		// Named through a direct reference to the label as well as its `for`. The JS matcher
		// cannot see the `aria-hidden` Base UI sets while open — only a browser's accessibility
		// tree does — so this checks the wiring; the name itself from Chrome stays a manual check.
		const label = canvas.getByText('Agency').closest('label');
		await expect(label).toHaveAttribute('id');
		await expect(input).toHaveAttribute('aria-labelledby', label?.getAttribute('id') ?? '');
		await userEvent.click(input);
		await within(document.body).findByRole('listbox');
		await expect(input).toHaveAccessibleName('Agency');
		await userEvent.keyboard('{Escape}');
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
