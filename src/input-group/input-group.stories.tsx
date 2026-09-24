import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { InputGroup } from '.';
import { Button } from '../button';
import { IconSearch } from '../command/icons';
import { Divider } from '../divider';
import { Field } from '../field';
import { FieldText } from '../field-text';
import { Input, InputSize } from '../input';
import { Label } from '../label';
import { Tag } from '../tag';

/**
 * InputGroup draws an `Input` and what sits beside it — an icon, a currency or
 * unit affix, a trailing action — as one bordered control. The frame owns the
 * border, the shadow and the focus ring; the `Input` inside renders bare and
 * hands its state to the frame through `:has()`, so focus, `disabled`,
 * `aria-invalid` and `size` are never wired by hand. Inside a `FieldText` the
 * `Input` keeps taking its label and messages from the field.
 */
const meta = {
	title: 'Components/InputGroup',
	component: InputGroup.Root,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<div className="w-96 max-w-full p-4">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof InputGroup.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A search field: the icon leads and the input takes the rest of the frame.
 * Pressing the icon focuses the input, and the frame — not the input — draws the
 * focus ring, so the two never show a double border.
 *
 * @summary Leading icon addon with the frame drawing the focus ring
 */
export const Default: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Addon>
				<IconSearch />
			</InputGroup.Addon>
			<Input type="search" placeholder="Search agencies" aria-label="Search agencies" />
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('group');
		const input = canvas.getByRole('searchbox', { name: 'Search agencies' });

		await expect(group).toHaveAttribute('data-slot', 'input-group');
		await expect(input).toHaveAttribute('data-slot', 'input');

		await userEvent.click(canvasElement.querySelector('[data-slot="input-group-addon"]')!);
		await expect(input).toHaveFocus();

		// `waitFor`: the frame's ring transitions in over 75ms.
		await waitFor(() => expect(getComputedStyle(group).outlineWidth).toBe('2px'));
		await expect(getComputedStyle(input).borderStyle).toBe('none');
		await expect(getComputedStyle(input).outlineStyle).toBe('none');
	}
};

/**
 * Text affixes on both sides. They are decoration only — a screen reader does
 * not read them as part of the value — so the unit is also in the label.
 *
 * @summary Currency prefix and unit suffix around an amount
 */
export const TextAffixes: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Text>$</InputGroup.Text>
			<Input inputMode="decimal" placeholder="0.00" aria-label="Premium in US dollars" />
			<InputGroup.Text>USD</InputGroup.Text>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium in US dollars' });

		await expect(canvas.getByText('$')).toHaveAttribute('data-slot', 'input-group-text');
		await expect(canvas.getByText('USD')).toHaveAttribute('data-slot', 'input-group-text');

		await userEvent.type(input, '1250');
		await expect(input).toHaveValue('1250');
	}
};

/**
 * A `Divider` separates an affix from the value when it reads as a distinct
 * segment, like a protocol before a domain. It spans the full height of the
 * frame, meeting its border at both ends.
 *
 * @summary Protocol prefix and domain suffix split off by vertical dividers
 */
export const WithDivider: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Text>https://</InputGroup.Text>
			<Divider orientation="vertical" />
			<Input
				type="text"
				inputMode="url"
				autoCapitalize="none"
				placeholder="www.agentero"
				aria-label="Agency website"
			/>
			<Divider orientation="vertical" />
			<InputGroup.Text>.com</InputGroup.Text>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('group');
		const input = canvas.getByRole('textbox', { name: 'Agency website' });
		const dividers = group.querySelectorAll<HTMLElement>('[data-slot="separator"]');

		await expect(dividers).toHaveLength(2);
		for (const divider of dividers) {
			await expect(divider.offsetHeight).toBe(group.clientHeight);
		}

		await userEvent.type(input, 'www.agentero');
		await expect((input as HTMLInputElement).validity.valid).toBe(true);
	}
};

/**
 * A `Tag` in an addon labels what the value is. It tucks into the frame's
 * padding on the side it touches and takes a tighter radius, so it sits inside
 * the corner instead of competing with it.
 *
 * @summary Leading and trailing tags tucked into the frame's padding
 */
export const WithTags: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<InputGroup.Root>
				<InputGroup.Addon>
					<Tag color="informative">FEIN</Tag>
				</InputGroup.Addon>
				<Input placeholder="XX-XXXXXXX" aria-label="FEIN" />
			</InputGroup.Root>
			<InputGroup.Root>
				<InputGroup.Addon>
					<IconSearch />
				</InputGroup.Addon>
				<Input placeholder="Describe your filters" aria-label="Describe your filters" />
				<InputGroup.Addon>
					<Tag color="informative">Beta</Tag>
				</InputGroup.Addon>
			</InputGroup.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const leading = getComputedStyle(canvas.getByText('FEIN'));
		const trailing = getComputedStyle(canvas.getByText('Beta'));
		const standalone = document.createElement('span');
		standalone.className = 'rounded-sm';
		canvasElement.append(standalone);

		await expect(leading.marginInlineStart).toBe('-4px');
		await expect(trailing.marginInlineStart).toBe('0px');
		await expect(trailing.marginInlineEnd).toBe('-4px');
		await expect(leading.borderRadius).toBe(getComputedStyle(standalone).borderRadius);
		standalone.remove();
	}
};

/**
 * A trailing action runs edge to edge: the addon cancels the frame's gap and
 * padding with `-mx-(--input-group-gap)`, a `Divider` marks it off, and a
 * square-cornered ghost `Button` fills the segment. Pressing the button runs
 * it without moving focus into the input.
 *
 * @summary Ghost button filling a trailing segment of the frame
 */
const handleCopy = fn();

export const WithButton: Story = {
	render: () => (
		<InputGroup.Root>
			<Input value="https://agentero.com/r/abc123" readOnly aria-label="Referral link" />
			<Divider orientation="vertical" />
			<InputGroup.Addon className="-mx-(--input-group-gap)">
				<Button variant="ghost" size="md" className="rounded-none" onClick={handleCopy}>
					Copy link
				</Button>
			</InputGroup.Addon>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvas.getByRole('group');
		const button = canvas.getByRole('button', { name: 'Copy link' });

		await userEvent.click(button);
		await expect(handleCopy).toHaveBeenCalledOnce();
		await expect(canvas.getByRole('textbox', { name: 'Referral link' })).not.toHaveFocus();

		const frame = group.getBoundingClientRect();
		const edge = button.getBoundingClientRect();
		await expect(edge.right).toBeCloseTo(frame.right - group.clientLeft, 0);
		await expect(edge.height).toBeCloseTo(group.clientHeight, 0);
	}
};

/**
 * `disabled` on the input greys out the whole frame — background, border, icon
 * and affix — and the frame stops offering the text cursor.
 *
 * @summary Disabled input greying out the frame and its addons
 */
export const Disabled: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Addon>
				<IconSearch />
			</InputGroup.Addon>
			<Input placeholder="Search agencies" aria-label="Search agencies" disabled />
			<InputGroup.Text>USD</InputGroup.Text>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('textbox', { name: 'Search agencies' })).toBeDisabled();
		await expect(getComputedStyle(canvas.getByRole('group')).cursor).toBe('default');
	}
};

/**
 * `aria-invalid` on the input moves the destructive border to the frame, and
 * the ring follows it on focus.
 *
 * @summary Invalid input driving the frame's destructive border
 */
export const Invalid: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Text>$</InputGroup.Text>
			<Input defaultValue="-40" aria-invalid aria-label="Premium in US dollars" />
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Premium in US dollars' });
		const valid = document.createElement('div');
		valid.className = 'border border-border-input-default';
		canvasElement.append(valid);

		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(getComputedStyle(canvas.getByRole('group')).borderColor).not.toBe(
			getComputedStyle(valid).borderColor
		);
		valid.remove();
	}
};

const SIZES: InputSize[] = ['sm', 'md', 'lg'];

/**
 * The frame follows the input's `size`: the same height as a standalone
 * `Input` of that size, and the larger corner radius with `lg`.
 *
 * @summary The three input sizes inside the frame, heights matching Input
 */
export const AllSizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			{SIZES.map(size => (
				<InputGroup.Root key={size}>
					<InputGroup.Addon>
						<IconSearch />
					</InputGroup.Addon>
					<Input size={size} placeholder={`Size ${size}`} aria-label={`Size ${size}`} />
				</InputGroup.Root>
			))}
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const [sm, md, lg] = canvas.getAllByRole('group') as [HTMLElement, HTMLElement, HTMLElement];

		await expect(sm.getBoundingClientRect().height).toBe(32);
		await expect(md.getBoundingClientRect().height).toBe(40);
		await expect(lg.getBoundingClientRect().height).toBe(48);
		await expect(parseFloat(getComputedStyle(lg).borderRadius)).toBeGreaterThan(
			parseFloat(getComputedStyle(md).borderRadius)
		);
	}
};

/**
 * Inside a `FieldText` nothing changes for the group: the `Input` reads the
 * field's context at any depth, so the label names it and the description
 * describes it with no ids written by hand. The frame is not in the way.
 *
 * @summary Label and description reaching the input through the frame
 */
export const InsideFieldText: Story = {
	render: () => (
		<FieldText required>
			<Label>Agency website</Label>
			<InputGroup.Root>
				<InputGroup.Text>https://</InputGroup.Text>
				<Input type="text" inputMode="url" autoCapitalize="none" placeholder="www.agentero.com" />
			</InputGroup.Root>
			<Field.Description>Shown on your public profile.</Field.Description>
		</FieldText>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox', { name: 'Agency website' });

		await expect(input).toBeRequired();
		await expect(input).toHaveAccessibleDescription('Shown on your public profile.');
		await expect(canvas.getByRole('group')).not.toHaveAttribute('id');
	}
};
