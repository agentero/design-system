import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, spyOn, userEvent, waitFor, within } from 'storybook/test';

import { Input } from '../input';
import { InputGroup } from '../input-group';
import { useFieldContext } from './context';
import { Field, FieldProps } from './field';

/**
 * The captioned branch of `FieldProps`. Storybook derives a story's `Args` from
 * the component's props, and `FieldProps` is a union — the rule that a field
 * carries exactly one of `label`, `aria-label` or `aria-labelledby` — which its
 * `Args` helpers flatten to `never`. The args below are the branch every
 * arg-driven story uses; the fields named without a caption are rendered
 * directly, and the union itself is covered in `field.types.test.ts`.
 */
type FieldArgs = Extract<FieldProps, { label: unknown }>;

/**
 * Field lays out one form field — caption, control, helper text and error — and
 * wires their accessibility relations for free. The parts arrive as flat props
 * and the control as the single child: Field generates the ids, points the
 * caption at the control, and merges `id`, `aria-invalid`, `aria-describedby`
 * and the native `required` onto it. The control stays a plain component that
 * knows nothing about fields.
 *
 * The layout is closed on purpose — there is no way to reorder the parts or to
 * assemble the caption yourself, which is what keeps every form in the product
 * looking the same. For a text field, reach for `FieldText` instead; the
 * generic Field is for controls that have no ready-made field yet.
 */
const meta = {
	title: 'Components/Field',
	component: Field,
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		tooltip: { control: 'text' },
		description: { control: 'text' },
		optional: { control: 'boolean' },
		required: { control: 'boolean' },
		orientation: {
			control: 'radio',
			options: ['vertical', 'horizontal']
		},
		controlId: { control: 'text' },
		suppressErrorMessage: { control: 'boolean' },
		// `control: false` rather than `table: { disable: true }`: none of these
		// has a widget worth offering, and every one of them has to keep its row
		// in the docs. `children` is the field's only required prop and `errors`
		// one of its most used; the two naming attributes are the alternative to
		// `label`, and typing one in while `label` is set would name the field
		// twice — which the types reject and the panel could not.
		errors: { control: false },
		children: { control: false },
		'aria-label': { control: false },
		'aria-labelledby': { control: false }
	},
	args: {
		label: 'Agency name',
		children: <Input placeholder="ACME Insurance" />
	},
	decorators: [
		Story => (
			<div className="max-w-md">
				<Story />
			</div>
		)
	]
} satisfies Meta<FieldArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Caption and control, associated through the ids Field generates — no
 * `htmlFor`/`id` written by hand.
 *
 * @summary Label and control wired automatically from a flat prop surface
 */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Agency name');

		await expect(input).toBeInTheDocument();
		// A valid field renders no aria-invalid attribute at all — the
		// `aria-invalid="false"` footgun some screen readers announce.
		await expect(input).not.toHaveAttribute('aria-invalid');
		// The field always advertises its description and error ids, even with
		// neither part rendered. Those dangling references cost nothing: the
		// description comes out empty and axe raises nothing — which is what
		// spares the description and error from registering with the root.
		await expect(input).toHaveAttribute('aria-describedby');
		await expect(input).toHaveAccessibleDescription('');
	}
};

/**
 * Helper text and error message both reach the control through the single
 * `aria-describedby` the field advertises. Any error with a message flips the
 * field to invalid, so `aria-invalid` and the message can never disagree, and
 * the message is announced assertively via `role="alert"`.
 *
 * @summary Description and error wired into the control's aria-describedby
 */
export const WithDescriptionAndError: Story = {
	args: {
		label: 'Scheduling link',
		description: 'Shown on your public profile.',
		errors: [{ message: 'Enter a full URL, including https://.' }],
		children: <Input type="url" defaultValue="cal.com/jane" />
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Scheduling link');
		const error = canvas.getByRole('alert');

		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(error).toHaveTextContent('Enter a full URL, including https://.');
		await expect(input).toHaveAccessibleDescription(
			'Shown on your public profile. Enter a full URL, including https://.'
		);
	}
};

/**
 * Several errors render as a list, deduped by message, so a rule that fires
 * twice is only read out once.
 *
 * @summary Multiple error messages collapse into a deduped list
 */
export const WithMultipleErrors: Story = {
	args: {
		label: 'Password',
		errors: [
			{ message: 'Use at least 12 characters.' },
			{ message: 'Add a number.' },
			{ message: 'Add a number.' }
		],
		children: <Input type="password" defaultValue="abc" />
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getAllByRole('listitem')).toHaveLength(2);
	}
};

const RATE_ERROR = 'Enter a number between 0 and 100.';
const RATE_TOAST_ID = 'commission-rate-toast';

// A percentage control: an <input> and a static suffix inside one frame, so
// there is no single child for the field to inject into. It reads the field's
// wiring, puts it on the <input>, and points the description at the region that
// carries the message the field is no longer rendering.
const RateControl = () => {
	const field = useFieldContext();

	return (
		<InputGroup.Root>
			<Input
				type="number"
				defaultValue="120"
				id={field?.controlId}
				aria-invalid={field?.invalid || undefined}
				aria-describedby={RATE_TOAST_ID}
			/>
			<InputGroup.Text>%</InputGroup.Text>
		</InputGroup.Root>
	);
};

/**
 * `suppressErrorMessage` stops the message being rendered under the control and
 * changes nothing else: the control still gets `aria-invalid`, the root still
 * gets `data-invalid`, and the wiring is untouched. It is for the screens that
 * report validation somewhere else — a toast, a summary at the top of the form.
 *
 * The half that is easy to forget is the announcement. An `aria-invalid` with
 * nothing describing it tells a screen reader user that something is wrong and
 * nothing about what, so whatever carries the message has to be reachable from
 * the control. Here the message sits in a live region outside the field and the
 * control points at it — which is also why this shape needs the escape hatch
 * rather than the flat props.
 *
 * @summary Invalid field whose message is reported outside the field
 */
export const SuppressedErrorMessage: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<Field
				label="Commission rate"
				errors={[{ message: RATE_ERROR }]}
				suppressErrorMessage
				data-testid="rate-field">
				<RateControl />
			</Field>

			<p
				id={RATE_TOAST_ID}
				role="status"
				className="m-0 rounded-md border border-solid border-border-input-destructive px-3 py-2 text-sm text-text-input-destructive">
				{RATE_ERROR}
			</p>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const root = canvas.getByTestId('rate-field');
		const control = canvas.getByRole('spinbutton', { name: 'Commission rate' });

		// Invalid, and marked as such on both ends…
		await expect(control).toHaveAttribute('aria-invalid', 'true');
		await expect(root).toHaveAttribute('data-invalid');

		// …with no message under the control: the field renders no error element
		// at all, so there is nothing on that row and nothing announcing twice.
		await expect(root.querySelector('[data-slot="field-error"]')).toBeNull();
		await expect(within(root).queryByRole('alert')).toBeNull();
		await expect(within(root).queryByText(RATE_ERROR)).toBeNull();

		// The message is announced from outside the field instead, once.
		await expect(control).toHaveAccessibleDescription(RATE_ERROR);
		await expect(canvas.getAllByText(RATE_ERROR)).toHaveLength(1);
	}
};

/**
 * The hint trigger sits beside the caption, outside the `<label>` element, so
 * the control's accessible name stays clean and the trigger keeps its own.
 * `tooltip` takes the content and that is the entire API — no trigger to place,
 * no side to choose. The hint pops above and flips when there is no room, in
 * every field, which is the point.
 *
 * @summary Optional suffix on the caption plus a tooltip outside the label
 */
export const WithTooltipAndOptional: Story = {
	args: {
		label: 'Scheduling link',
		optional: true,
		tooltip: 'Anyone with this link can book time on your calendar.',
		children: <Input type="url" placeholder="https://cal.com/jane" />
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		// The trigger lives outside the <label>: the control's name is only the
		// caption…
		await expect(canvas.getByRole('textbox', { name: 'Scheduling link' })).toBeInTheDocument();
		// …the muted "(optional)" suffix is a pseudo-element, so it is read off the
		// computed style rather than the DOM, and it stays out of that name.
		const caption = canvasElement.querySelector('[data-slot="label"] span') as HTMLElement;
		await expect(getComputedStyle(caption, '::after').content).toContain('optional');
		// …and the trigger is an independently focusable, named button.
		const trigger = canvas.getByRole('button', { name: 'More information' });
		await expect(trigger).toBeInTheDocument();

		// One prop is enough. The balloon is placed above the trigger and flips
		// below when there is no room — asserted as "one of the two" on purpose,
		// since the side depends on available space, which is exactly why there is
		// nothing here for a consumer to choose.
		await userEvent.hover(trigger);
		const hints = await body.findAllByText('Anyone with this link can book time on your calendar.');
		const side = hints[0]?.closest('[data-side]')?.getAttribute('data-side');

		await expect(['top', 'bottom']).toContain(side);
	}
};

/**
 * A field can be named without a visible caption, and it has to be named
 * somehow: the types take exactly one of `label`, `aria-label` or
 * `aria-labelledby`, so leaving all three out does not compile. What that
 * guarantees is the declaration and no more — `aria-label={''}` type-checks,
 * and so does an `aria-labelledby` pointing at an id that is not on the page.
 * Both leave the control unnamed, and neither is something a type can catch.
 *
 * Reach for `aria-label` where the design has no room for a caption — a search
 * box in a toolbar — and for `aria-labelledby` where the text is already on
 * screen somewhere else, pointing at that element's id. Either way the name
 * lands on the **control**, never on the field's root: a name on the wrapping
 * `<div>` labels a group nobody navigates to and leaves the control itself
 * unnamed. The field renders no caption, so nothing takes up the space one
 * would have used.
 *
 * Prefer a visible `label`. A name only a screen reader can reach is a name
 * most users never get.
 *
 * @summary Field named by aria-label or aria-labelledby, with no caption
 */
export const WithoutVisibleLabel: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: '1.5rem' }}>
			<Field aria-label="Search" data-testid="named-inline">
				<Input type="search" placeholder="Search" />
			</Field>

			<div>
				<h2 id="monthly-limit" className="m-0 pb-2 text-sm font-semibold text-text-input-normal">
					Monthly limit
				</h2>

				<Field
					aria-labelledby="monthly-limit"
					description="Raise it at any time."
					data-testid="named-by-heading">
					<Input type="number" defaultValue="500" />
				</Field>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const search = canvas.getByRole('searchbox', { name: 'Search' });
		const limit = canvas.getByRole('spinbutton', { name: 'Monthly limit' });

		// Both fields are named, and neither rendered a caption to do it.
		await expect(canvasElement.querySelector('label')).toBeNull();
		await expect(canvasElement.querySelector('[data-slot="field-caption"]')).toBeNull();

		// The name is on the control, not on the field's root.
		await expect(search).toHaveAttribute('aria-label', 'Search');
		await expect(canvas.getByTestId('named-inline')).not.toHaveAttribute('aria-label');
		await expect(limit).toHaveAttribute('aria-labelledby', 'monthly-limit');
		await expect(canvas.getByTestId('named-by-heading')).not.toHaveAttribute('aria-labelledby');

		// And the rest of the wiring is untouched: the helper text is still
		// announced with the control.
		await expect(limit).toHaveAccessibleDescription('Raise it at any time.');
	}
};

const box = (element: Element) => element.getBoundingClientRect();
const middle = (element: Element) => box(element).top + box(element).height / 2;

/**
 * The two arrangements, asserted in a real browser so a change to the recipe
 * fails the test rather than the design review.
 *
 * - **vertical** (the default) — caption, control and messages stacked in one
 *   column.
 * - **horizontal** — caption in a fixed-width first column, the control on its
 *   row, and the description under the control rather than under the caption.
 *
 * The caption travels as a single grid item, which is what lets one
 * slot-to-cell mapping serve both. In horizontal the label column is
 * `--field-label-width` (12rem by default) rather than `auto`: each field is
 * its own grid, so an auto column would size differently per field and nothing
 * would line up down the form.
 *
 * Both fields here have room for the horizontal layout — each sits in a slot
 * pinned to 28rem, comfortably above the 24rem fold. What happens when they do
 * not is the `Responsive` story below.
 *
 * @summary Vertical and horizontal arrangements side by side
 */
export const Orientation: Story = {
	render: args => (
		// Each field gets its own slot at an exact width, the way `Responsive`
		// does. The horizontal assertions below only hold above the 384px fold, so
		// the width they measure has to be set rather than inherited: a
		// `max-width` from a decorator or a docs page leaves the field free to
		// render narrower than the fold and fold out from under them.
		<div style={{ display: 'grid', gap: '2rem' }}>
			<div style={{ width: '28rem' }}>
				<Field {...args} data-testid="vertical-field">
					<Input type="url" placeholder="https://cal.com/jane" />
				</Field>
			</div>

			<div style={{ width: '28rem' }}>
				<Field {...args} orientation="horizontal" data-testid="horizontal-field">
					<Input type="url" placeholder="https://cal.com/jane" />
				</Field>
			</div>
		</div>
	),
	args: {
		label: 'Scheduling link',
		tooltip: 'Anyone with this link can book time on your calendar.',
		description: 'Shown on your public profile.'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		for (const testId of ['vertical-field', 'horizontal-field']) {
			const root = canvas.getByTestId(testId);
			const field = within(root);
			const caption = root.querySelector('[data-slot="field-caption"]') as HTMLElement;
			const label = field.getByText('Scheduling link').closest('label') as HTMLElement;
			const trigger = field.getByRole('button', { name: 'More information' });
			const control = field.getByRole('textbox');
			const description = field.getByText('Shown on your public profile.');

			await expect(getComputedStyle(root).display).toBe('grid');
			// The parts the root places are the caption, the control and the
			// messages — nothing else sits in between.
			for (const part of [caption, control, description]) {
				await expect(part.parentElement).toBe(root);
			}
			// The label and its trigger are inside the caption, side by side, and
			// the consumer never wrote that pairing.
			await expect(label.parentElement).toBe(caption);
			await expect(trigger.parentElement).toBe(caption);
			await expect(middle(trigger)).toBeCloseTo(middle(label), 0);
			await expect(box(trigger).left).toBeGreaterThanOrEqual(box(label).right);
		}

		// The pinned widths, asserted before anything that depends on them: 448px
		// is 64px above the fold, and the horizontal assertions below are only
		// true on that side of it.
		for (const testId of ['vertical-field', 'horizontal-field']) {
			await expect(box(canvas.getByTestId(testId)).width).toBeCloseTo(448, 0);
		}

		// Vertical: the control is below the caption and takes the full width.
		const vertical = canvas.getByTestId('vertical-field');
		const verticalCaption = vertical.querySelector('[data-slot="field-caption"]') as HTMLElement;
		const verticalControl = within(vertical).getByRole('textbox');
		const verticalDescription = within(vertical).getByText('Shown on your public profile.');

		await expect(box(verticalControl).top).toBeGreaterThanOrEqual(box(verticalCaption).bottom);
		await expect(box(verticalDescription).top).toBeGreaterThanOrEqual(box(verticalControl).bottom);
		await expect(box(verticalControl).width).toBeCloseTo(box(vertical).width, 0);

		// Horizontal: the caption is to the left, on the control's row, and the
		// description lines up under the control — not under the caption.
		const horizontal = canvas.getByTestId('horizontal-field');
		const horizontalCaption = horizontal.querySelector(
			'[data-slot="field-caption"]'
		) as HTMLElement;
		const horizontalControl = within(horizontal).getByRole('textbox');
		const horizontalDescription = within(horizontal).getByText('Shown on your public profile.');

		await expect(box(horizontalControl).left).toBeGreaterThanOrEqual(box(horizontalCaption).right);
		await expect(middle(horizontalCaption)).toBeCloseTo(middle(horizontalControl), 0);
		await expect(box(horizontalDescription).left).toBeCloseTo(box(horizontalControl).left, 0);
		await expect(box(horizontalDescription).top).toBeGreaterThanOrEqual(
			box(horizontalControl).bottom
		);
		// The label column is the fixed 12rem default plus the 12px column gap, so
		// labels line up down a form instead of each field sizing its own column.
		await expect(box(horizontalControl).left - box(horizontal).left).toBeCloseTo(192 + 12, 0);
	}
};

/**
 * The same horizontal field in three slots. The caption column is a fixed 192px
 * and never yields, so there is a width below which the control has nothing
 * left: `horizontal` folds back to the vertical stack below 24rem (384px) of the
 * field's **own** width. The flip is exact — two columns at 384px, stacked at
 * 383px — and from 383px down to 100px the field takes its slot's width with
 * nothing overflowing. The play function resizes the first slot to assert both,
 * rather than leaving them as a measurement in prose.
 *
 * It measures its own slot, not the viewport and not an ancestor: the third
 * field below sits in a 320px slot inside an 800px container that declares
 * `field-group` — the name the legacy container that stacks fields uses — and it
 * folds all the same. The query is named (`@container/field`), though not because
 * an unnamed one would have measured the group: the field's root declares
 * `container-type` itself, so it is already the nearest container for its own
 * parts and an unnamed query resolves to the field. The name is what keeps that
 * true if the root ever stops being a container, or a part ends up inside
 * another one.
 *
 * There is no `responsive` orientation to pick: `horizontal` already is one,
 * which is why it is safe in a slot whose width you do not control. All three
 * fields got the same treatment, folded or not — each root is its own query
 * container and declares the same two columns — and what the fold changes is
 * only which cells the parts occupy. Nothing in the markup records which side
 * of the fold a field is on: the arrangement lives entirely in CSS, so style a
 * folded field from a width of your own, never from a hook on the field.
 *
 * @summary Horizontal folds to vertical when its own slot is too narrow
 */
export const Responsive: Story = {
	args: {
		label: 'Scheduling link',
		orientation: 'horizontal',
		description: 'Shown on your public profile.'
	},
	render: args => (
		<div style={{ display: 'grid', gap: '2rem' }}>
			<div style={{ width: '20rem' }} data-testid="narrow-slot">
				<Field {...args} data-testid="folded-field">
					<Input type="url" placeholder="https://cal.com/jane" />
				</Field>
			</div>

			<div style={{ width: '40rem' }} data-testid="wide-slot">
				<Field {...args} data-testid="horizontal-field">
					<Input type="url" placeholder="https://cal.com/jane" />
				</Field>
			</div>

			<div style={{ width: '50rem', containerType: 'inline-size', containerName: 'field-group' }}>
				<div style={{ width: '20rem' }}>
					<Field {...args} data-testid="grouped-field">
						<Input type="url" placeholder="https://cal.com/jane" />
					</Field>
				</div>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const partsOf = (root: HTMLElement) => ({
			caption: root.querySelector('[data-slot="field-caption"]') as HTMLElement,
			control: within(root).getByRole('textbox'),
			description: within(root).getByText('Shown on your public profile.')
		});

		// All three were asked for the same arrangement, and all three got it —
		// including the two that render folded. What proves it is the fold's own
		// machinery: the `horizontal` variant is the only one that makes the root a
		// query container, and it does so at every width. The fold is CSS on the
		// parts, so the root's grid is identical on both sides of it.
		for (const testId of ['folded-field', 'horizontal-field', 'grouped-field']) {
			const root = canvas.getByTestId(testId);

			await expect(getComputedStyle(root).containerType).toBe('inline-size');
			await expect(getComputedStyle(root).containerName).toBe('field');
			await expect(getComputedStyle(root).gridTemplateColumns.split(' ')).toHaveLength(2);
		}

		// 320px: folded. Every part spans both columns, which puts the control on
		// its own row under the caption, at the field's left edge — no 192px
		// gutter — and full width, with nothing spilling out of the slot.
		const folded = canvas.getByTestId('folded-field');
		const narrow = partsOf(folded);

		await expect(box(folded).width).toBeCloseTo(320, 0);
		// The two columns are still declared — the 192px one, and what is left of
		// the 320 after it and the 12px gap. What folds is the spans below, never
		// the root's template: a container query cannot restyle its own container.
		await expect(getComputedStyle(folded).gridTemplateColumns).toBe('192px 116px');
		await expect(getComputedStyle(narrow.caption).gridColumnEnd).toBe('span 2');
		await expect(box(narrow.control).top).toBeGreaterThanOrEqual(box(narrow.caption).bottom);
		await expect(box(narrow.control).left).toBeCloseTo(box(folded).left, 0);
		await expect(box(narrow.control).width).toBeCloseTo(320, 0);
		await expect(folded.scrollWidth).toBe(320);

		// 640px: horizontal. Caption in the first column on the control's row, the
		// control and the description starting after the 192px column and its 12px
		// gap, and the whole field inside its slot.
		const horizontal = canvas.getByTestId('horizontal-field');
		const wide = partsOf(horizontal);

		await expect(box(horizontal).width).toBeCloseTo(640, 0);
		await expect(getComputedStyle(horizontal).gridTemplateColumns).toBe('192px 436px');
		await expect(getComputedStyle(wide.caption).gridColumnStart).toBe('1');
		await expect(getComputedStyle(wide.control).gridColumnStart).toBe('2');
		await expect(middle(wide.caption)).toBeCloseTo(middle(wide.control), 0);
		await expect(box(wide.control).left - box(horizontal).left).toBeCloseTo(192 + 12, 0);
		await expect(box(wide.description).left).toBeCloseTo(box(wide.control).left, 0);
		await expect(horizontal.scrollWidth).toBe(640);

		// A 320px slot inside an 800px `field-group` container: the field measures
		// itself, so it folds exactly like the first one.
		const grouped = canvas.getByTestId('grouped-field');
		const inGroup = partsOf(grouped);

		await expect(box(grouped).width).toBeCloseTo(320, 0);
		await expect(box(inGroup.control).top).toBeGreaterThanOrEqual(box(inGroup.caption).bottom);
		await expect(box(inGroup.control).left).toBeCloseTo(box(grouped).left, 0);
		await expect(box(inGroup.control).width).toBeCloseTo(320, 0);

		// The threshold and the floor the docs above claim, driven from here rather
		// than described: the first slot is resized in place, since the fold is a
		// container query on the field's own width and its slot is the only input.
		const slot = canvas.getByTestId('narrow-slot');
		const foldedAt = async (width: number) => {
			slot.style.width = `${width}px`;
			await waitFor(() => expect(box(folded).width).toBeCloseTo(width, 0));

			return getComputedStyle(narrow.caption).gridColumnEnd === 'span 2';
		};

		// Exactly 384px: the query is `min-width: 24rem`, so the field is still two
		// columns at 384 and stacked one pixel below it.
		await expect(await foldedAt(385)).toBe(false);
		await expect(await foldedAt(384)).toBe(false);
		await expect(await foldedAt(383)).toBe(true);

		// And from there down to 100px the field is the width of its slot with
		// nothing spilling out — which is what makes a 192px column that never
		// yields safe in a slot whose width nobody controls.
		for (const width of [383, 320, 240, 160, 100]) {
			await expect(await foldedAt(width)).toBe(true);
			await expect(box(narrow.control).width).toBeCloseTo(width, 0);
			await expect(folded.scrollWidth).toBe(width);
		}

		// Left as the story renders it, so what the docs page shows is the markup.
		slot.style.width = '20rem';
	}
};

/**
 * A field named by `aria-label` renders no caption, and `horizontal` exists to
 * put a caption beside the control. Asking for both would leave the fixed 192px
 * column holding nothing, with the control pushed off to the side of an empty
 * gutter — so a field with no caption lays out in one column whichever
 * orientation it asks for.
 *
 * What it gets is the vertical layout itself, not a horizontal one that happens
 * to be folded: the root is a single column and is not a query container at
 * all, so there is no width at which the caption column comes back. A folded
 * horizontal field is the other thing entirely — see `Responsive`.
 *
 * Hidden from the library (`!dev`): the combination is not one to reach for on
 * purpose, and what it produces on screen is an ordinary field. The guarantee
 * belongs in `yarn test`, which is where this still runs.
 *
 * @summary Test that a field with no caption drops the caption column
 */
export const HorizontalWithoutCaption: Story = {
	tags: ['!dev', '!manifest'],
	render: () => (
		<div style={{ width: '40rem' }}>
			<Field aria-label="Search" orientation="horizontal" data-testid="captionless-horizontal">
				<Input type="search" placeholder="Search" />
			</Field>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const root = canvas.getByTestId('captionless-horizontal');
		const control = canvas.getByRole('searchbox', { name: 'Search' });

		// There is no caption, so there is no caption column…
		await expect(root.querySelector('[data-slot="field-caption"]')).toBeNull();
		await expect(getComputedStyle(root).gridTemplateColumns).toBe('640px');
		// One column because the field resolved to `vertical`, not because a
		// horizontal one folded: the root is not a query container, so there is no
		// width that brings the 192px column back. The slot here is 640px — well
		// above the 384px fold — which is where a horizontal field would show two.
		await expect(getComputedStyle(root).containerType).toBe('normal');

		// …and none of its 192px: the control starts at the field's edge and takes
		// the whole width, in a slot wide enough for the two-column layout.
		await expect(box(root).width).toBeCloseTo(640, 0);
		await expect(box(control).left).toBeCloseTo(box(root).left, 0);
		await expect(box(control).width).toBeCloseTo(640, 0);
	}
};

/**
 * `required` is declared once, on the field, and reaches both halves: the
 * caption draws the asterisk and the control gets the native `required`
 * attribute. That matters because the asterisk is `aria-hidden` — the attribute
 * is the only half a screen reader announces, and declaring them separately
 * makes it possible to ship the asterisk without it, a mistake neither
 * TypeScript nor axe can catch.
 *
 * `optional` and `required` together do not throw: `required` wins and the
 * " (optional)" suffix is dropped. The suffix is a CSS pseudo-element, so the
 * assertions read it off the computed style rather than the DOM.
 *
 * @summary required declared once reaches both the caption and the control
 */
export const RequiredWiring: Story = {
	tags: ['!manifest'],
	render: () => (
		<div style={{ display: 'grid', gap: '2rem' }}>
			<Field label="Required" required data-testid="required">
				<Input placeholder="ACME Insurance" />
			</Field>

			<Field label="Optional and required" optional required data-testid="required-and-optional">
				<Input placeholder="ACME Insurance" />
			</Field>

			<Field label="Optional only" optional data-testid="optional-only">
				<Input placeholder="ACME Insurance" />
			</Field>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const suffixOf = (root: HTMLElement) =>
			getComputedStyle(root.querySelector('[data-slot="label"] span') as HTMLElement, '::after')
				.content;

		// Declared once: caption and control both marked, and the decorative
		// asterisk stays out of the accessible name.
		const required = within(canvas.getByTestId('required'));
		await expect(required.getByRole('textbox')).toBeRequired();
		await expect(required.getByText('*')).toBeInTheDocument();
		await expect(required.getByRole('textbox')).toHaveAccessibleName('Required');

		// required wins over optional, and rendering does not throw.
		const conflicting = canvas.getByTestId('required-and-optional');
		await expect(within(conflicting).getByText('*')).toBeInTheDocument();
		await expect(suffixOf(conflicting)).toBe('none');

		// The reference: optional alone does render the suffix.
		await expect(suffixOf(canvas.getByTestId('optional-only'))).toContain('optional');
	}
};

/**
 * The generated ids are opaque on purpose — what matters is that the label,
 * the control and the messages agree, not what the string says. Nobody reads an
 * `aria-describedby`, and ids nobody can predict are ids nobody comes to depend
 * on.
 *
 * Two cases need a stable one anyway: an end-to-end selector, and an
 * `aria-labelledby` pointing at the control from outside the field. That is
 * what `controlId` is for, and it replaces the generated one on the control
 * with the label following automatically.
 *
 * It is a separate prop rather than `id` because `id` already means something:
 * like any component that renders an element, Field puts it on the element it
 * renders — its root. Redefining it to mean the control instead would make
 * Field the one place where `id` does not do what `id` does.
 *
 * @summary Stable control id for when a generated one will not do
 */
export const WithSemanticControlId: Story = {
	args: {
		label: 'Billing email',
		controlId: 'billing-email',
		children: <Input type="email" placeholder="billing@acme-insurance.com" />
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('Billing email')).toHaveAttribute('id', 'billing-email');
	}
};

/**
 * What the control declares for itself reaches it untouched — which is what
 * makes `size` the control's concern rather than the field's: the generic Field
 * takes an arbitrary child and cannot know whether it accepts a `size`, so you
 * set it on the control and the field leaves it alone.
 *
 * `aria-describedby` is the one to be careful with. It is a list of references,
 * so joining is what you would expect, but the control's value is taken whole
 * and the field's own description and error drop out of it — they stay on
 * screen and stop being announced.
 *
 * The shape below is a real one: two fields sharing a single block of help text
 * rendered once beneath them, which is why the text cannot live in either
 * field's `description`. If you need that, point the two controls at the shared
 * text and accept that each field's own messages leave the list, or repeat the
 * text per field.
 *
 * @summary Control props win, and aria-describedby replaces the field's own
 */
export const ControlPropsWin: Story = {
	tags: ['!manifest'],
	render: () => (
		<div style={{ display: 'grid', gap: '1rem', maxWidth: '20rem' }}>
			<Field label="Account fields" errors={[{ message: 'Pick at least one.' }]}>
				<Input size="lg" aria-describedby="sync-help" />
			</Field>
			<Field label="Contact fields">
				<Input aria-describedby="sync-help" />
			</Field>
			<p id="sync-help">Only the fields selected here are kept in sync.</p>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Account fields');

		// The shared hint replaces the field's two references rather than joining
		// them: the error below is rendered, and announced by nobody.
		const references = input.getAttribute('aria-describedby')?.split(' ') ?? [];
		await expect(references).toEqual(['sync-help']);
		await expect(input).toHaveAccessibleDescription(
			'Only the fields selected here are kept in sync.'
		);
		await expect(canvas.getByText('Pick at least one.')).toBeInTheDocument();

		// A prop the field knows nothing about arrives untouched.
		await expect(input).toHaveAttribute('data-size', 'lg');
	}
};

/**
 * Typing into a wired field works exactly like a bare input — the wiring adds
 * attributes, never behavior.
 *
 * @summary Interaction smoke test through the wired control
 */
export const Interaction: Story = {
	tags: ['!manifest'],
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Agency name');

		await userEvent.type(input, 'Typed by the user');
		await expect(input).toHaveValue('Typed by the user');
	}
};

// An input with a trailing text addon, built on the real InputGroup: the group
// is a wrapper, so the wiring has to reach the <input> inside it rather than the
// <div> around it.
const HandleWithDomain = () => {
	const field = useFieldContext();

	return (
		<InputGroup.Root>
			<Input
				type="text"
				placeholder="jane"
				id={field?.controlId}
				aria-describedby={field?.describedBy}
				aria-invalid={field?.invalid || undefined}
				required={field?.required || undefined}
			/>
			<InputGroup.Text>@example.com</InputGroup.Text>
		</InputGroup.Root>
	);
};

/**
 * A control made of several elements — an
 * [InputGroup](?path=/docs/components-inputgroup--docs) holding an input and a
 * text suffix — where there is no single child for the field to inject into. The
 * component reads `useFieldContext()` and puts the wiring on the element that
 * really is the control, so the caption still points at the `<input>` and not at
 * the group's `div`.
 *
 * This is the escape hatch, shown on the real component. Everything it reads
 * from the context it also has to place, and nothing checks that it did: the
 * field merges its wiring onto its single child, and a plain function component
 * like this one has no props to merge onto, so it discards all of them in
 * silence. The field's name works here only because the caption is a visible
 * `label` pointing at the `controlId` this component wrote onto the `<input>`.
 * Miss that line and the field still compiles and still renders — see
 * `FieldYearMonth` for the same responsibility with an `aria-labelledby`.
 *
 * For a text field with an addon you do not need any of this: `FieldText` takes
 * `leadingAddon`/`trailingAddon` and does exactly this internally.
 *
 * @summary Input group wiring itself to the field through useFieldContext
 */
export const CompositeControl: Story = {
	tags: ['!manifest'],
	render: () => (
		<Field
			label="Work email"
			description="We only use it to send the sign-in link."
			data-testid="composite-field">
			<HandleWithDomain />
		</Field>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const control = canvas.getByRole('textbox', { name: 'Work email' });
		const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;

		// Wired through, despite sitting one level deeper than the field's parts.
		await expect(control).toHaveAttribute('id');
		await expect(control).toHaveAccessibleDescription('We only use it to send the sign-in link.');
		// And it really is nested inside the group, not hoisted out of it — the
		// group keeps the div, the input keeps the wiring.
		await expect(control.closest('[data-slot="input-group"]')).toBe(group);
		await expect(group).not.toHaveAttribute('id');
		// The suffix is decoration: it stays out of the control's name and out of
		// its description.
		await expect(control).toHaveAccessibleName('Work email');
	}
};

/**
 * The guard's test: an input group passed as the field's child instead of the
 * control inside it. The id lands on the group's `<div>`, the caption points at
 * an element a `<label>` cannot label, and the control is left with no
 * accessible name — all without throwing. That silence is why the warning
 * exists, and why `FieldText`'s addon props are the way to reach for a group in
 * a field.
 *
 * Hidden from the library (`!dev`): it renders the mistake on purpose, and a
 * broken field is not an example to leave on display. It still runs in
 * `yarn test`, which is where the guarantee belongs.
 *
 * @summary Test for the development warning when the wiring misses the control
 */
export const CompositeControlGuard: Story = {
	tags: ['!dev', '!manifest'],
	parameters: { a11y: { test: 'off' } },
	beforeEach: () => {
		const warn = spyOn(console, 'warn').mockImplementation(() => {});

		return () => warn.mockRestore();
	},
	render: () => (
		<Field label="Wired onto the wrapper" data-testid="broken-field">
			<InputGroup.Root>
				<Input type="text" placeholder="jane" />
				<InputGroup.Text>@example.com</InputGroup.Text>
			</InputGroup.Root>
		</Field>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const field = canvas.getByTestId('broken-field');
		const group = field.querySelector('[data-slot="input-group"]');
		const caption = within(field).getByText('Wired onto the wrapper').closest('label');

		// The warning fires and names the element it wired.
		await expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('Field wired a <div>'));

		// And this is what it warns about.
		await expect(group).toHaveAttribute('id');
		await expect(caption).toHaveAttribute('for', group?.getAttribute('id'));
		await expect(within(field).getByRole('textbox')).toHaveAccessibleName('');
	}
};

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const YEARS = [2024, 2023, 2022, 2021];

const selectStyle = {
	height: '2.5rem',
	borderRadius: '.375rem',
	border: '1px solid var(--color-border-input-default)',
	background: 'var(--color-bg-input-normal)',
	padding: '0 .5rem'
};

// The field declares that its control is named by this element, and the control
// renders it: one id, written at both ends.
const LICENCE_CAPTION_ID = 'licence-obtained-caption';

// Two selects that together are one value. There is no single element for the
// field to inject into and no single element a <label> could point at, so the
// control reads the field's wiring and places it on both — including the
// caption, which becomes its own <legend>.
const YearMonthControl = () => {
	const field = useFieldContext();
	const shared = {
		'aria-describedby': field?.describedBy,
		'aria-invalid': field?.invalid || undefined,
		required: field?.required || undefined,
		style: selectStyle
	};

	return (
		<fieldset aria-labelledby={LICENCE_CAPTION_ID} style={{ border: 0, margin: 0, padding: 0 }}>
			<legend id={LICENCE_CAPTION_ID} style={{ padding: 0, fontSize: '.875rem', fontWeight: 600 }}>
				Licence obtained
			</legend>

			<div style={{ display: 'flex', gap: '.5rem', paddingTop: '.25rem' }}>
				<select aria-label="Month" defaultValue="" {...shared}>
					<option value="" disabled>
						Month
					</option>
					{MONTHS.map(month => (
						<option key={month} value={month}>
							{month}
						</option>
					))}
				</select>

				<select aria-label="Year" defaultValue="" {...shared}>
					<option value="" disabled>
						Year
					</option>
					{YEARS.map(year => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>
		</fieldset>
	);
};

/**
 * A consumption case the flat props cannot express: two controls that together
 * are one value, sharing one caption and one error. `Field` still owns the
 * layout, the ids and the messages; the control reads `useFieldContext()` and
 * puts the field's `describedBy` on both selects, so the pair is described by
 * the same helper text and the same error — announced once, not twice.
 *
 * The caption here is a `<legend>` the control renders, not the field's
 * `label`, because a single `<label>` can only point at one of the two selects.
 * Which is where the escape hatch's real cost shows: **the name is placed by
 * this component, not by the field.** The `aria-labelledby` on the `Field`
 * below states what the name should be and reaches nothing on its own —
 * `YearMonthControl` is a plain function component, so the props the field
 * merges onto it are discarded silently, that one included. Nothing errors,
 * nothing warns, and no type complains; the reference on the `<fieldset>` is
 * what actually names the group, and it is written by hand at both ends.
 *
 * So read the field's declaration here as intent. On this path the labelling
 * union guarantees nothing, and an accessible name is only real once you have
 * checked it in a browser — which is what the assertions below do.
 *
 * The other rule of the escape hatch: none of this belongs in a base control. A
 * `Select` that read the context would behave differently depending on where it
 * was rendered.
 *
 * @summary Two selects as one field, assembled through the escape hatch
 */
export const FieldYearMonth: Story = {
	tags: ['!manifest'],
	render: () => (
		<Field
			aria-labelledby={LICENCE_CAPTION_ID}
			description="Renewal reminders go out 30 days before."
			errors={[{ message: 'Pick both a month and a year.' }]}
			data-testid="year-month-field">
			<YearMonthControl />
		</Field>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const month = canvas.getByRole('combobox', { name: 'Month' });
		const year = canvas.getByRole('combobox', { name: 'Year' });
		const described = 'Renewal reminders go out 30 days before. Pick both a month and a year.';

		// The name the field declares is the one the group ends up with, placed by
		// the control: the field renders no caption of its own.
		await expect(canvas.getByRole('group', { name: 'Licence obtained' })).toHaveAttribute(
			'aria-labelledby',
			LICENCE_CAPTION_ID
		);
		await expect(canvasElement.querySelector('[data-slot="field-caption"]')).toBeNull();

		// Both controls are associated with the field's helper text and error…
		for (const control of [month, year]) {
			await expect(control).toHaveAccessibleDescription(described);
			await expect(control).toHaveAttribute('aria-invalid', 'true');
		}

		// …and the error itself is rendered — and announced — exactly once.
		const alerts = canvas.getAllByRole('alert');
		await expect(alerts).toHaveLength(1);
		await expect(alerts[0]).toHaveTextContent('Pick both a month and a year.');
	}
};
