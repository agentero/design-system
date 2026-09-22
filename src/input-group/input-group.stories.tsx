import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { InputGroup } from '.';
import { IconSearch } from '../command/icons';
import { Divider } from '../divider';
import { Field } from '../field';
import { FieldText } from '../field-text';
import { Input, InputSize } from '../input';
import { Label } from '../label';

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
 * A `Divider` separates a prefix from the value when the affix reads as a
 * distinct segment, like a protocol before a domain.
 *
 * @summary Protocol prefix separated from the input by a vertical divider
 */
export const WithDivider: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Text>https://</InputGroup.Text>
			<Divider orientation="vertical" className="my-2" />
			<Input
				type="text"
				inputMode="url"
				autoCapitalize="none"
				placeholder="www.agentero.com"
				aria-label="Agency website"
			/>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByRole('textbox', { name: 'Agency website' });

		await expect(canvas.getByText('https://')).toBeInTheDocument();
		await expect(input).toHaveAttribute('inputmode', 'url');
		await userEvent.type(input, 'www.agentero.com');
		await expect((input as HTMLInputElement).validity.valid).toBe(true);
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
