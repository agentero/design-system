import { SVGProps, useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, mocked, userEvent, waitFor, within } from 'storybook/test';

import { Autocomplete, type AutocompleteRootProps } from '.';
import { Button } from '../button';
import { Checkbox } from '../checkbox';
import { Field } from '../field';
import { FieldText } from '../field-text';
import { Input } from '../input';
import { Label } from '../label';
import { Loading } from '../loading';
import { Modal } from '../modal';
import { Tag } from '../tag';

/**
 * Autocomplete is a free-text field with suggestions below it. The text is the
 * value: picking a suggestion writes its text into the field, and leaving the
 * field, closing the list or pressing Escape keeps whatever was typed. Built on
 * Base UI's Autocomplete, styled as the Combobox.
 */
// What the stories hand to their own code, on top of the root's props: spies the play functions
// assert on and the Actions panel lists.
type StoryArgs = AutocompleteRootProps<string> & {
	/** Runs the search or the prompt, from a pick or from the form's submit. */
	onSearch?: (query: string) => void;
	/** Fires when a suggestion row is picked, from its `onClick`. */
	onPick?: (value: string) => void;
};

// Annotated rather than `satisfies`: `Root`'s inferred props reach into Base UI's internal
// `AriaCombobox` module, which stock tsc cannot name from here (TS2742).
const meta: Meta<StoryArgs> = {
	title: 'Components/Autocomplete',
	component: Autocomplete.Root,
	tags: ['autodocs'],
	parameters: {
		docs: { story: { height: '320px' } }
	},
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

const IconSearch = (props: SVGProps<SVGSVGElement>) => (
	<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M9.52 15.615q-2.562 0-4.34-1.777Q3.405 12.062 3.405 9.5T5.18 5.162q1.776-1.777 4.338-1.777t4.339 1.777q1.777 1.776 1.777 4.338 0 1.071-.36 2.046a5.7 5.7 0 0 1-.96 1.696l5.754 5.754q.209.209.213.522a.7.7 0 0 1-.213.532.72.72 0 0 1-.527.217.72.72 0 0 1-.527-.217l-5.753-5.754q-.75.62-1.725.97t-2.018.35m0-1.5q1.933 0 3.273-1.341 1.342-1.34 1.342-3.274 0-1.932-1.342-3.274-1.34-1.341-3.274-1.341-1.932 0-3.274 1.34Q4.904 7.569 4.904 9.5q0 1.933 1.341 3.274 1.342 1.341 3.274 1.341" />
	</svg>
);

const IconStar = (props: SVGProps<SVGSVGElement>) => (
	<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M12 14.7769L14.6211 16.7615C14.8019 16.8884 14.9843 16.8926 15.1682 16.774C15.3522 16.6554 15.4089 16.4891 15.3384 16.275L14.3461 12.9923L16.9065 11.1716C17.0944 11.0316 17.1515 10.8571 17.0778 10.6481C17.0041 10.4391 16.8573 10.3346 16.6374 10.3346H13.5038L12.4365 6.88658C12.36 6.67246 12.2146 6.5654 12.0003 6.5654C11.786 6.5654 11.6404 6.67246 11.5635 6.88658L10.4961 10.3346H7.36255C7.14265 10.3346 6.99584 10.4391 6.92212 10.6481C6.84841 10.8571 6.90551 11.0316 7.09343 11.1716L9.65383 12.9923L8.66153 16.275C8.59101 16.4891 8.64774 16.6554 8.83173 16.774C9.01569 16.8926 9.19806 16.8884 9.37883 16.7615L12 14.7769ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5766 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45271 3.248 8.29658C3.74667 7.14043 4.42342 6.13474 5.27825 5.27953C6.1331 4.42429 7.13834 3.74723 8.29398 3.24835C9.44959 2.74947 10.6844 2.50002 11.9983 2.50002C13.3122 2.50002 14.5473 2.74936 15.7034 3.24803C16.8596 3.74669 17.8652 4.42344 18.7205 5.27828C19.5757 6.13313 20.2527 7.13837 20.7516 8.294C21.2505 9.44962 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8653 18.7217 18.7205C17.8669 19.5757 16.8616 20.2528 15.706 20.7517C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2166 20 16.1041 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1041 4.77917 14.2166 4 12 4C9.78331 4 7.89581 4.77917 6.33748 6.3375C4.77914 7.89583 3.99998 9.78333 3.99998 12C3.99998 14.2167 4.77914 16.1042 6.33748 17.6625C7.89581 19.2208 9.78331 20 12 20Z" />
	</svg>
);

const CARRIERS = ['Clearcover', 'Hippo', 'Lemonade', 'Openly', 'Progressive', 'Travelers'];

const surface = () => document.body.querySelector('[data-slot="autocomplete-content"]');

// The list anchors to the whole field, not the bare input: as wide as the frame, from its left
// edge. Synchronous, for `waitFor`: the surface grows in from 0.95 scale over 100ms.
const expectListAlignedWithField = (canvasElement: HTMLElement) => {
	const field = canvasElement
		.querySelector('[data-slot="autocomplete-field"]')!
		.getBoundingClientRect();
	const content = surface()!.getBoundingClientRect();

	expect(content.width).toBeCloseTo(field.width, 0);
	expect(content.left).toBeCloseTo(field.left, 0);
};

// The surface stays mounted through its exit animation, so wait it out.
const waitForListClosed = () =>
	waitFor(() => expect(within(document.body).queryByRole('listbox')).not.toBeInTheDocument());

/**
 * Suggestions from memory, filtered by Base UI against the text. Typing opens
 * the list; picking a row writes its text into the field. Any other text is
 * just as valid a value.
 *
 * @summary Free-text field filtering an in-memory list of suggestions
 */
export const Default: Story = {
	render: () => (
		<Autocomplete.Root items={CARRIERS}>
			<Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
			<Autocomplete.Content>
				<Autocomplete.List>
					{(carrier: string) => (
						<Autocomplete.Item key={carrier} value={carrier}>
							{carrier}
						</Autocomplete.Item>
					)}
				</Autocomplete.List>
			</Autocomplete.Content>
		</Autocomplete.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: 'Carrier' });

		await expect(input).toHaveAttribute('data-slot', 'autocomplete-input');

		await userEvent.type(input, 'o');
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(5));
		await waitFor(() => expectListAlignedWithField(canvasElement));
		await expect(body.getByRole('listbox')).toHaveAccessibleName('Suggestions');

		await userEvent.type(input, 'pen');
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
		await userEvent.click(body.getByRole('option', { name: 'Openly' }));
		await waitFor(() => expect(input).toHaveValue('Openly'));
		await waitForListClosed();
	}
};

/**
 * Leaving the field keeps the text, whether it matches a suggestion or not.
 * A Combobox would empty it here, since its value must be an option.
 *
 * @summary Blurring the field keeps the typed text
 */
export const KeepsTextOnBlur: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Autocomplete.Root items={CARRIERS}>
				<Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
				<Autocomplete.Content>
					<Autocomplete.List>
						{(carrier: string) => (
							<Autocomplete.Item key={carrier} value={carrier}>
								{carrier}
							</Autocomplete.Item>
						)}
					</Autocomplete.List>
				</Autocomplete.Content>
			</Autocomplete.Root>
			<Button variant="secondary">Next</Button>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: 'Carrier' });

		await userEvent.type(input, 'Prog');
		await body.findByRole('option', { name: 'Progressive' });

		await userEvent.tab();
		await waitForListClosed();
		await expect(input).toHaveValue('Prog');

		// A click outside closes the list as well, and keeps the text too.
		await userEvent.click(input);
		await userEvent.type(input, 'ressive Direct');
		// By text: while the list is open, Base UI hides the rest of the page from the role queries.
		await userEvent.click(canvas.getByText('Next'));
		await waitForListClosed();
		await expect(input).toHaveValue('Progressive Direct');
	}
};

/**
 * Escape closes the list and keeps the text. A second Escape, on a shut list,
 * keeps it as well: Base UI would empty the field there, as a native search
 * input does, and this field's text is its value.
 *
 * @summary Escape closes the list and never empties the field
 */
export const KeepsTextOnEscape: Story = {
	render: () => (
		<Autocomplete.Root items={CARRIERS}>
			<Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
			<Autocomplete.Content>
				<Autocomplete.List>
					{(carrier: string) => (
						<Autocomplete.Item key={carrier} value={carrier}>
							{carrier}
						</Autocomplete.Item>
					)}
				</Autocomplete.List>
			</Autocomplete.Content>
		</Autocomplete.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: 'Carrier' });

		await userEvent.type(input, 'Lem');
		await body.findByRole('option', { name: 'Lemonade' });

		await userEvent.keyboard('{Escape}');
		await waitForListClosed();
		await expect(input).toHaveValue('Lem');

		await userEvent.keyboard('{Escape}');
		await expect(input).toHaveValue('Lem');
		await expect(input).toHaveFocus();
	}
};

/**
 * Telling a pick from a plain Enter, with Base UI's own events. A pick, by
 * click or by Enter on the highlighted row, fires the row's `onClick`, then
 * `onValueChange` with the reason `'item-press'`, and does not submit the form.
 * Enter with no row highlighted submits the form with the typed text. Each
 * fires once.
 *
 * @summary Item onClick and item-press for a pick, form submit for Enter
 */
export const PickOrSubmit: Story = {
	args: { onValueChange: fn(), onPick: fn(), onSearch: fn() },
	render: ({ onValueChange, onPick, onSearch }) => {
		const [outcome, setOutcome] = useState('');

		return (
			<form
				aria-label="Carrier search"
				className="flex flex-col gap-3"
				onSubmit={event => {
					event.preventDefault();
					const query = String(new FormData(event.currentTarget).get('carrier'));
					onSearch?.(query);
					setOutcome(`Searched for ${query}`);
				}}>
				<Autocomplete.Root items={CARRIERS} onValueChange={onValueChange}>
					<Autocomplete.Input name="carrier" placeholder="Carrier" aria-label="Carrier" />
					<Autocomplete.Content>
						<Autocomplete.List>
							{(carrier: string) => (
								<Autocomplete.Item
									key={carrier}
									value={carrier}
									onClick={() => {
										onPick?.(carrier);
										setOutcome(`Picked ${carrier}`);
									}}>
									{carrier}
								</Autocomplete.Item>
							)}
						</Autocomplete.List>
					</Autocomplete.Content>
				</Autocomplete.Root>
				<output className="text-sm text-text-default-base-secondary">{outcome}</output>
			</form>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: 'Carrier' });
		const itemPress = (value: string) =>
			expect(args.onValueChange).toHaveBeenLastCalledWith(
				value,
				expect.objectContaining({ reason: 'item-press' })
			);

		// Click on a row: the row's onClick, then item-press, and no submit.
		await userEvent.type(input, 'hip');
		await userEvent.click(await body.findByRole('option', { name: 'Hippo' }));
		await waitFor(() => expect(args.onPick).toHaveBeenCalledTimes(1));
		await expect(args.onPick).toHaveBeenLastCalledWith('Hippo');
		await itemPress('Hippo');
		await expect(mocked(args.onPick!).mock.invocationCallOrder[0]).toBeLessThan(
			mocked(args.onValueChange!).mock.invocationCallOrder.at(-1)!
		);
		await expect(canvas.getByText('Picked Hippo')).toBeVisible();
		await expect(input).toHaveValue('Hippo');
		await waitForListClosed();

		// Enter on the highlighted row: the same two events, and no submit.
		await userEvent.clear(input);
		await userEvent.type(input, 'trav');
		await body.findByRole('option', { name: 'Travelers' });
		await userEvent.keyboard('{ArrowDown}');
		await waitFor(() =>
			expect(body.getByRole('option', { name: 'Travelers' })).toHaveAttribute('data-highlighted')
		);
		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(input).toHaveValue('Travelers'));
		await expect(args.onPick).toHaveBeenCalledTimes(2);
		await expect(args.onPick).toHaveBeenNthCalledWith(2, 'Travelers');
		await itemPress('Travelers');
		await expect(args.onSearch).not.toHaveBeenCalled();
		await waitForListClosed();

		// Enter with the list open and nothing highlighted: one submit with the typed text.
		await userEvent.clear(input);
		await userEvent.type(input, 'Trav');
		await body.findByRole('option', { name: 'Travelers' });
		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(args.onSearch).toHaveBeenCalledTimes(1));
		await expect(args.onSearch).toHaveBeenNthCalledWith(1, 'Trav');
		await expect(canvas.getByText('Searched for Trav')).toBeVisible();
		await waitForListClosed();
		await expect(input).toHaveValue('Trav');

		// Enter on a shut list submits too, once.
		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(args.onSearch).toHaveBeenCalledTimes(2));
		await expect(args.onSearch).toHaveBeenNthCalledWith(2, 'Trav');
		await expect(args.onPick).toHaveBeenCalledTimes(2);
	}
};

/**
 * Submission follows the form's submit button, as in the browser: while it is
 * disabled, Enter submits nothing. Here
 * the search waits for the scope to be confirmed.
 *
 * @summary Nothing submits while the form's submit button is disabled
 */
export const DisabledSubmitButton: Story = {
	args: { onSearch: fn() },
	render: ({ onSearch }) => {
		const [confirmed, setConfirmed] = useState(false);
		const [outcome, setOutcome] = useState('');

		return (
			<form
				aria-label="Carrier search"
				className="flex flex-col gap-3"
				onSubmit={event => {
					event.preventDefault();
					const query = String(new FormData(event.currentTarget).get('carrier'));
					onSearch?.(query);
					setOutcome(`Searched for ${query}`);
				}}>
				<div className="flex items-start gap-3">
					<div className="min-w-0 flex-1">
						<Autocomplete.Root items={CARRIERS}>
							<Autocomplete.Input name="carrier" placeholder="Carrier" aria-label="Carrier" />
							<Autocomplete.Content>
								<Autocomplete.List>
									{(carrier: string) => (
										<Autocomplete.Item key={carrier} value={carrier}>
											{carrier}
										</Autocomplete.Item>
									)}
								</Autocomplete.List>
							</Autocomplete.Content>
						</Autocomplete.Root>
					</div>
					<Button type="submit" variant="secondary" disabled={!confirmed}>
						Search
					</Button>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox
						id="personal-lines"
						checked={confirmed}
						onCheckedChange={checked => setConfirmed(checked === true)}
					/>
					<Label htmlFor="personal-lines">Personal lines only</Label>
				</div>
				<output className="text-sm text-text-default-base-secondary">{outcome}</output>
			</form>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: 'Carrier' });

		// Enter with nothing highlighted, on an open list and on a shut one: no submit.
		await userEvent.type(input, 'Trav');
		await body.findByRole('option', { name: 'Travelers' });
		await userEvent.keyboard('{Enter}');
		await waitForListClosed();
		await userEvent.keyboard('{Enter}');
		await new Promise(resolve => setTimeout(resolve, 100));
		await expect(args.onSearch).not.toHaveBeenCalled();

		// Once the button is enabled, Enter submits.
		await userEvent.click(canvas.getByRole('checkbox', { name: 'Personal lines only' }));
		await userEvent.click(input);
		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(args.onSearch).toHaveBeenCalledTimes(1));
		await expect(args.onSearch).toHaveBeenLastCalledWith('Trav');
	}
};

/**
 * In a form with several text fields and no submit button, Enter in the field
 * submits nothing, as in any other input of that form. The form submits from
 * its own controls.
 *
 * @summary Enter does not submit a form with several fields and no button
 */
export const SeveralFieldsWithoutButton: Story = {
	tags: ['!manifest'],
	args: { onSearch: fn() },
	render: ({ onSearch }) => (
		<form
			aria-label="Agency search"
			className="flex flex-col gap-3"
			onSubmit={event => {
				event.preventDefault();
				onSearch?.(String(new FormData(event.currentTarget).get('carrier')));
			}}>
			<Autocomplete.Root items={CARRIERS}>
				<Autocomplete.Input name="carrier" placeholder="Carrier" aria-label="Carrier" />
				<Autocomplete.Content>
					<Autocomplete.List>
						{(carrier: string) => (
							<Autocomplete.Item key={carrier} value={carrier}>
								{carrier}
							</Autocomplete.Item>
						)}
					</Autocomplete.List>
				</Autocomplete.Content>
			</Autocomplete.Root>
			<Input name="agency" placeholder="Agency" aria-label="Agency" />
		</form>
	),
	play: async ({ args, canvasElement }) => {
		const input = within(canvasElement).getByRole('combobox', { name: 'Carrier' });

		// With the list open, Base UI marks the rest of the page `aria-hidden`; still not one field.
		await userEvent.type(input, 'Trav');
		await within(document.body).findByRole('option', { name: 'Travelers' });
		await userEvent.keyboard('{Enter}');
		await waitForListClosed();
		await userEvent.keyboard('{Enter}');
		await new Promise(resolve => setTimeout(resolve, 100));
		await expect(args.onSearch).not.toHaveBeenCalled();
	}
};

/**
 * `before` and `after` place content inside the field's frame, each wrapped in
 * an `InputGroup.Addon`: an icon in front, a tag after. The list still hangs
 * from the whole frame.
 *
 * @summary Icon before and tag after the input, inside the same frame
 */
export const WithBeforeAndAfter: Story = {
	render: () => (
		<Autocomplete.Root items={CARRIERS}>
			<Autocomplete.Input
				placeholder="Carrier"
				aria-label="Carrier"
				before={<IconSearch aria-hidden="true" />}
				after={<Tag color="informative">Beta</Tag>}
			/>
			<Autocomplete.Content>
				<Autocomplete.List>
					{(carrier: string) => (
						<Autocomplete.Item key={carrier} value={carrier}>
							{carrier}
						</Autocomplete.Item>
					)}
				</Autocomplete.List>
			</Autocomplete.Content>
		</Autocomplete.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox', { name: 'Carrier' });
		const field = canvasElement.querySelector('[data-slot="autocomplete-field"]')!;

		const before = field.querySelector('[data-slot="autocomplete-before"]');
		const after = field.querySelector('[data-slot="autocomplete-after"]');
		await expect(before).toHaveAttribute('data-slot', 'autocomplete-before');
		await expect(within(after as HTMLElement).getByText('Beta')).toBeInTheDocument();
		// Reading order inside the one frame: icon, input, tag.
		await expect(field.firstElementChild).toBe(before);
		await expect(field.lastElementChild).toBe(after);
		await expect(input.parentElement).toBe(field);

		await userEvent.type(input, 'l');
		await within(document.body).findByRole('option', { name: 'Clearcover' });
		await waitFor(() => expectListAlignedWithField(canvasElement));
	}
};

/**
 * With an `Empty` message, the list opens even when nothing matches, to say
 * so, from the first keystroke and again after Escape. Without one, as in
 * every other story, a field with nothing to suggest stays shut. Either way
 * the text stays as typed.
 *
 * @summary Message shown in the list when no suggestion matches
 */
export const WithEmptyMessage: Story = {
	render: () => (
		<Autocomplete.Root items={CARRIERS}>
			<Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
			<Autocomplete.Content>
				<Autocomplete.Empty>
					No known carrier matches. Your text is kept as typed.
				</Autocomplete.Empty>
				<Autocomplete.List>
					{(carrier: string) => (
						<Autocomplete.Item key={carrier} value={carrier}>
							{carrier}
						</Autocomplete.Item>
					)}
				</Autocomplete.List>
			</Autocomplete.Content>
		</Autocomplete.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: 'Carrier' });

		// The first keystroke already matches nothing.
		await userEvent.type(input, 'Zurich');
		await expect(await body.findByText(/No known carrier matches/)).toBeVisible();
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(surface()).not.toBeInTheDocument());
		await expect(input).toHaveValue('Zurich');

		// Typing on after Escape opens it again.
		await userEvent.type(input, ' Mutual');
		await expect(await body.findByText(/No known carrier matches/)).toBeVisible();
		await expect(input).toHaveValue('Zurich Mutual');
	}
};

/**
 * Inside a `FieldText` the input takes the label, the description and the
 * error with nothing wired by hand, and points `aria-labelledby` at the label
 * so the name survives the list opening.
 *
 * @summary Label, description and error wired from the surrounding FieldText
 */
export const InsideFieldText: Story = {
	render: () => (
		<FieldText invalid required>
			<Label>Carrier</Label>
			<Autocomplete.Root items={CARRIERS}>
				<Autocomplete.Input placeholder="Type a carrier" />
				<Autocomplete.Content>
					<Autocomplete.List>
						{(carrier: string) => (
							<Autocomplete.Item key={carrier} value={carrier}>
								{carrier}
							</Autocomplete.Item>
						)}
					</Autocomplete.List>
				</Autocomplete.Content>
			</Autocomplete.Root>
			<Field.Error errors={[{ message: 'Enter the carrier name' }]} />
			<Field.Description>The carrier that wrote the policy.</Field.Description>
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox', { name: 'Carrier' });

		await expect(input).toBeRequired();
		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(input).toHaveAccessibleDescription(
			'Enter the carrier name The carrier that wrote the policy.'
		);

		const label = canvas.getByText('Carrier').closest('label');
		await expect(label).toHaveAttribute('id');
		await expect(input).toHaveAttribute('aria-labelledby', label?.getAttribute('id') ?? '');

		await userEvent.type(input, 'hip');
		await within(document.body).findByRole('listbox');
		await expect(input).toHaveAccessibleName('Carrier');
		await userEvent.keyboard('{Escape}');
		await waitForListClosed();
		await expect(input).toHaveValue('hip');
	}
};

const AGENCIES: Record<string, string> = {
	'12-3456789': 'Sunrise Insurance Group',
	'98-7654321': 'Harbor Point Agency'
};

// Stands in for a masking library such as react-number-format.
const formatFein = (value: string) => {
	const digits = value.replace(/\D/g, '').slice(0, 9);
	return digits.length > 2 ? `${digits.slice(0, 2)}-${digits.slice(2)}` : digits;
};

// The lookup answers a moment after the last keystroke, as a request would.
const useAgencyLookup = (fein: string) => {
	const [agency, setAgency] = useState<string | null>(null);

	useEffect(() => {
		setAgency(null);
		const timeout = setTimeout(() => setAgency(AGENCIES[fein] ?? null), 150);
		return () => clearTimeout(timeout);
	}, [fein]);

	return agency;
};

/**
 * A lookup: the typed number is the value, and what a lookup finds for it is
 * offered as a single suggestion that starts highlighted (`autoHighlight="always"`).
 * Picking it, by click or Enter, fills another field from the row's `onClick`;
 * the controlled `value` ignores the `'item-press'` change, so the number stays
 * as typed. With no lookup result the list shows nothing. Tab closes the list
 * and moves to the next field without picking. The input is a
 * masked one, swapped in through `render`.
 *
 * @summary Single highlighted lookup result that fills another field
 */
export const Lookup: Story = {
	render: () => {
		const [fein, setFein] = useState('');
		const [name, setName] = useState('');
		const agency = useAgencyLookup(fein);

		return (
			<div className="flex flex-col gap-4">
				<FieldText>
					<Label>FEIN</Label>
					<Autocomplete.Root
						items={agency ? [agency] : []}
						filter={null}
						autoHighlight="always"
						value={fein}
						onValueChange={(value, eventDetails) => {
							// A pick fills the agency name, not this field.
							if (eventDetails.reason === 'item-press') return;
							setFein(value);
						}}>
						<Autocomplete.Input
							placeholder="XX-XXXXXXX"
							render={inputProps => (
								<input
									{...inputProps}
									inputMode="numeric"
									onChange={event => {
										event.target.value = formatFein(event.target.value);
										inputProps.onChange?.(event);
									}}
								/>
							)}
						/>
						<Autocomplete.Content>
							<Autocomplete.List>
								{(agencyName: string) => (
									<Autocomplete.Item
										key={agencyName}
										value={agencyName}
										onClick={() => setName(agencyName)}>
										<div className="flex min-w-0 flex-col">
											<span className="truncate">{agencyName}</span>
											<span className="truncate text-xs text-text-default-base-tertiary">
												Use this as agency name
											</span>
										</div>
									</Autocomplete.Item>
								)}
							</Autocomplete.List>
						</Autocomplete.Content>
					</Autocomplete.Root>
					<Field.Description>
						The Federal Employer Identification Number of the agency.
					</Field.Description>
				</FieldText>
				<FieldText>
					<Label>Agency name</Label>
					<Input value={name} onChange={event => setName(event.target.value)} />
				</FieldText>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: 'FEIN' });
		const name = canvas.getByRole('textbox', { name: 'Agency name' });

		await expect(input).toHaveAccessibleDescription(
			'The Federal Employer Identification Number of the agency.'
		);

		// No result for a partial number: nothing shows.
		await userEvent.type(input, '1234');
		await expect(input).toHaveValue('12-34');
		await new Promise(resolve => setTimeout(resolve, 250));
		await expect(body.queryByRole('listbox')).not.toBeInTheDocument();
		await expect(body.queryByRole('option')).not.toBeInTheDocument();

		// The full number finds an agency, offered highlighted.
		await userEvent.type(input, '56789');
		const option = await body.findByRole('option', { name: /Sunrise Insurance Group/ });
		await waitFor(() => expect(option).toHaveAttribute('data-highlighted'));
		await waitFor(() => expectListAlignedWithField(canvasElement));

		// Enter picks it: the name is filled, the number is untouched.
		await userEvent.keyboard('{Enter}');
		await waitFor(() => expect(name).toHaveValue('Sunrise Insurance Group'));
		await expect(input).toHaveValue('12-3456789');
		await waitForListClosed();

		// A click picks it the same way.
		await userEvent.clear(name);
		await userEvent.click(input);
		await userEvent.keyboard('{ArrowDown}');
		await userEvent.click(await body.findByRole('option', { name: /Sunrise Insurance Group/ }));
		await waitFor(() => expect(name).toHaveValue('Sunrise Insurance Group'));
		await expect(input).toHaveValue('12-3456789');
		await waitForListClosed();

		// Tab with the list open closes it and moves on to the next field, without picking.
		await userEvent.clear(name);
		await userEvent.click(input);
		await userEvent.keyboard('{ArrowDown}');
		await waitFor(() =>
			expect(body.getByRole('option', { name: /Sunrise Insurance Group/ })).toHaveAttribute(
				'data-highlighted'
			)
		);
		await userEvent.tab();
		await expect(name).toHaveFocus();
		await waitForListClosed();
		await expect(name).toHaveValue('');
		await expect(input).toHaveValue('12-3456789');

		// A number with no agency behind it: nothing shows.
		await userEvent.clear(input);
		await userEvent.type(input, '123456780');
		await expect(input).toHaveValue('12-3456780');
		await new Promise(resolve => setTimeout(resolve, 250));
		await expect(body.queryByRole('option')).not.toBeInTheDocument();
	}
};

/**
 * A locked lookup: the field is disabled, so the list never opens, even with a
 * suggestion ready for the number in it.
 *
 * @summary Disabled lookup field that never opens its list
 */
export const LookupLocked: Story = {
	render: () => (
		<FieldText disabled>
			<Label>FEIN</Label>
			<Autocomplete.Root items={['Sunrise Insurance Group']} defaultValue="12-3456789">
				<Autocomplete.Input placeholder="XX-XXXXXXX" />
				<Autocomplete.Content>
					<Autocomplete.List>
						{(agencyName: string) => (
							<Autocomplete.Item key={agencyName} value={agencyName}>
								{agencyName}
							</Autocomplete.Item>
						)}
					</Autocomplete.List>
				</Autocomplete.Content>
			</Autocomplete.Root>
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox', { name: 'FEIN' });

		await expect(input).toBeDisabled();
		await expect(input).toHaveValue('12-3456789');
		await userEvent.click(input);
		await userEvent.keyboard('{ArrowDown}');
		await expect(within(document.body).queryByRole('listbox')).not.toBeInTheDocument();
	}
};

/**
 * The lookup inside a `Modal`. A click on the field keeps the list open, a
 * pick fills the other field without closing the dialog, and Escape or a click
 * outside close the list, keeping the number. Escape on the shut field then
 * closes the dialog.
 *
 * @summary Lookup inside a Modal, dismissed by Escape or a click outside
 */
export const LookupInsideModal: Story = {
	render: () => {
		const [fein, setFein] = useState('');
		const [name, setName] = useState('');
		const agency = useAgencyLookup(fein);

		return (
			<Modal.Root>
				<Modal.Trigger asChild>
					<Button variant="secondary">Add agency</Button>
				</Modal.Trigger>
				<Modal.Content>
					<Modal.Title>Add agency</Modal.Title>
					<Modal.Body className="flex flex-col gap-4">
						<FieldText>
							<Label>FEIN</Label>
							<Autocomplete.Root
								items={agency ? [agency] : []}
								filter={null}
								autoHighlight="always"
								value={fein}
								onValueChange={(value, eventDetails) => {
									// A pick fills the agency name, not this field.
									if (eventDetails.reason === 'item-press') return;
									setFein(value);
								}}>
								<Autocomplete.Input
									placeholder="XX-XXXXXXX"
									render={inputProps => (
										<input
											{...inputProps}
											inputMode="numeric"
											onChange={event => {
												event.target.value = formatFein(event.target.value);
												inputProps.onChange?.(event);
											}}
										/>
									)}
								/>
								<Autocomplete.Content>
									<Autocomplete.List>
										{(agencyName: string) => (
											<Autocomplete.Item
												key={agencyName}
												value={agencyName}
												onClick={() => setName(agencyName)}>
												<div className="flex min-w-0 flex-col">
													<span className="truncate">{agencyName}</span>
													<span className="truncate text-xs text-text-default-base-tertiary">
														Use this as agency name
													</span>
												</div>
											</Autocomplete.Item>
										)}
									</Autocomplete.List>
								</Autocomplete.Content>
							</Autocomplete.Root>
							<Field.Description>
								The Federal Employer Identification Number of the agency.
							</Field.Description>
						</FieldText>
						<FieldText>
							<Label>Agency name</Label>
							<Input value={name} onChange={event => setName(event.target.value)} />
						</FieldText>
					</Modal.Body>
				</Modal.Content>
			</Modal.Root>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await userEvent.click(canvas.getByRole('button', { name: 'Add agency' }));
		const dialog = await body.findByRole('dialog', { name: 'Add agency' });
		const input = within(dialog).getByRole('combobox', { name: 'FEIN' });
		const name = within(dialog).getByRole('textbox', { name: 'Agency name' });

		await userEvent.type(input, '987654321');
		await body.findByRole('option', { name: /Harbor Point Agency/ });

		// A click on the field itself keeps the list open.
		await userEvent.click(input);
		await expect(body.getByRole('listbox')).toBeInTheDocument();

		await userEvent.click(body.getByRole('option', { name: /Harbor Point Agency/ }));
		await waitFor(() => expect(name).toHaveValue('Harbor Point Agency'));
		await expect(input).toHaveValue('98-7654321');
		await waitForListClosed();
		await expect(dialog).toHaveAttribute('data-state', 'open');

		// Escape closes the list, not the dialog.
		await userEvent.click(input);
		await userEvent.keyboard('{ArrowDown}');
		await body.findByRole('option', { name: /Harbor Point Agency/ });
		await userEvent.keyboard('{Escape}');
		await waitForListClosed();
		await expect(dialog).toHaveAttribute('data-state', 'open');
		await expect(input).toHaveValue('98-7654321');

		// A click outside the field closes it too.
		await userEvent.keyboard('{ArrowDown}');
		await body.findByRole('option', { name: /Harbor Point Agency/ });
		await userEvent.click(within(dialog).getByText('Add agency'));
		await waitForListClosed();
		await expect(dialog).toHaveAttribute('data-state', 'open');
		await expect(input).toHaveValue('98-7654321');

		// With the list shut, Escape closes the dialog.
		await userEvent.click(input);
		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
	}
};

/**
 * A prompt field like the AI filter: an icon that turns into a spinner while
 * the prompt runs and a Beta tag, both inside the frame, and an example
 * overlaid on the empty input through `render`. The suggestion is "run what
 * you typed" or, with nothing typed, the recent prompts. A pick runs it from
 * the row's `onClick`; Enter with no row highlighted runs the typed text from
 * the form's submit.
 *
 * @summary AI prompt with recent prompts, a spinner and a tag in the frame
 */
export const Prompt: Story = {
	args: { onSearch: fn() },
	render: ({ onSearch }) => {
		const [prompt, setPrompt] = useState('');
		const [recents, setRecents] = useState(['Agencies onboarded last week', 'Expired licenses']);
		const [pending, setPending] = useState(false);
		const [applied, setApplied] = useState('');

		const run = (query: string) => {
			const trimmed = query.trim();
			if (!trimmed || pending) return;
			onSearch?.(trimmed);
			setPending(true);
			// Stands in for the request that translates the prompt into filters.
			setTimeout(() => {
				setPending(false);
				setApplied(trimmed);
				setRecents(entries => [trimmed, ...entries.filter(entry => entry !== trimmed)]);
				setPrompt('');
			}, 200);
		};

		const trimmed = prompt.trim();

		return (
			<form
				aria-label="AI filter"
				className="flex flex-col gap-3"
				onSubmit={event => {
					event.preventDefault();
					run(prompt);
				}}>
				<Autocomplete.Root
					items={trimmed ? [trimmed] : recents}
					filter={null}
					openOnInputClick
					value={prompt}
					onValueChange={setPrompt}>
					<Autocomplete.Input
						aria-label="Describe your filters"
						readOnly={pending}
						className="read-only:cursor-wait"
						before={
							pending ? (
								<Loading size="sm" aria-label="Translating filters" />
							) : (
								<IconStar aria-hidden="true" />
							)
						}
						after={<Tag color="informative">Beta</Tag>}
						render={inputProps => (
							<span className="relative flex min-w-0 flex-1">
								{!prompt && (
									<span
										aria-hidden="true"
										className="pointer-events-none absolute inset-0 flex items-center truncate text-sm text-text-input-placeholder">
										Producers licensed in Texas with an expired E&O
									</span>
								)}
								<input {...inputProps} />
							</span>
						)}
					/>
					<Autocomplete.Content>
						<Autocomplete.List aria-label="AI filter suggestions">
							{(query: string) => (
								<Autocomplete.Item key={query} value={query} onClick={() => run(query)}>
									<span className="truncate">
										<span className="text-text-default-base-tertiary">AI Filter </span>
										{query}
									</span>
								</Autocomplete.Item>
							)}
						</Autocomplete.List>
					</Autocomplete.Content>
				</Autocomplete.Root>
				<output className="text-sm text-text-default-base-secondary">
					{applied && `Filtered by "${applied}"`}
				</output>
			</form>
		);
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const input = canvas.getByRole('combobox', { name: 'Describe your filters' });

		await expect(
			canvas.getByText('Producers licensed in Texas with an expired E&O')
		).toHaveAttribute('aria-hidden', 'true');

		// A click opens the recent prompts; picking one runs it.
		await userEvent.click(input);
		await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));
		await waitFor(() => expectListAlignedWithField(canvasElement));
		await userEvent.click(body.getByRole('option', { name: /Expired licenses/ }));
		await expect(args.onSearch).toHaveBeenCalledTimes(1);
		await expect(args.onSearch).toHaveBeenNthCalledWith(1, 'Expired licenses');
		await expect(canvas.getByRole('status', { name: 'Translating filters' })).toBeInTheDocument();
		await expect(input).toHaveAttribute('readonly');
		await expect(await canvas.findByText('Filtered by "Expired licenses"')).toBeVisible();
		await expect(input).toHaveValue('');

		// Typing offers to run the text; Enter with nothing highlighted runs it once, through the form.
		await userEvent.type(input, 'Producers in Ohio');
		await body.findByRole('option', { name: /Producers in Ohio/ });
		await userEvent.keyboard('{Enter}');
		await expect(await canvas.findByText('Filtered by "Producers in Ohio"')).toBeVisible();
		await expect(args.onSearch).toHaveBeenCalledTimes(2);
		await expect(args.onSearch).toHaveBeenNthCalledWith(2, 'Producers in Ohio');

		// A click outside keeps an unsent prompt.
		await userEvent.type(input, 'Agencies in Utah');
		await userEvent.click(canvas.getByText('Filtered by "Producers in Ohio"'));
		await waitForListClosed();
		await expect(input).toHaveValue('Agencies in Utah');
		await expect(args.onSearch).toHaveBeenCalledTimes(2);
	}
};
