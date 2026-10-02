import { type FormEvent, type ReactNode, type SVGProps, useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { InputGroup } from '.';
import { IconKeyboardArrowDown } from '../accordion/icons';
import { Button } from '../button';
import { IconCancel } from '../combobox/icons';
import { IconSearch } from '../command/icons';
import { Divider } from '../divider';
import { DropdownMenu } from '../dropdown-menu';
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

const getGroups = (canvasElement: HTMLElement) =>
	Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-slot="input-group"]'));
const getGroup = (canvasElement: HTMLElement) => getGroups(canvasElement)[0]!;

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
		const group = getGroup(canvasElement);
		const input = canvas.getByRole('searchbox', { name: 'Search agencies' });

		await expect(group).not.toHaveAttribute('role');
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
		const group = getGroup(canvasElement);
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
 * `variant="action"` runs the button edge to edge, with its focus ring inset,
 * and a `Divider` marks it off. Pressing it does not move focus into the input.
 *
 * @summary Ghost button filling a trailing segment of the frame
 */
const handleCopy = fn();

export const WithButton: Story = {
	render: () => (
		<InputGroup.Root>
			<Input value="https://agentero.com/r/abc123" readOnly aria-label="Referral link" />
			<Divider orientation="vertical" />
			<InputGroup.Addon variant="action">
				<Button type="button" variant="ghost" size="md" onClick={handleCopy}>
					Copy link
				</Button>
			</InputGroup.Addon>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = getGroup(canvasElement);
		const button = canvas.getByRole('button', { name: 'Copy link' });

		await userEvent.click(button);
		await expect(handleCopy).toHaveBeenCalledOnce();
		await expect(canvas.getByRole('textbox', { name: 'Referral link' })).not.toHaveFocus();

		const frame = group.getBoundingClientRect();
		const edge = button.getBoundingClientRect();
		await expect(frame.height).toBe(40);
		await expect(edge.right).toBeCloseTo(frame.right - group.clientLeft, 0);
		await expect(edge.height).toBeCloseTo(group.clientHeight, 0);
		await expect(getComputedStyle(button).borderTopLeftRadius).toBe('0px');
		await expect(getComputedStyle(button).borderTopRightRadius).toBe(
			getComputedStyle(group).borderTopRightRadius
		);

		// The frame clips overflow, so the ring has to sit inside the button to be seen.
		canvas.getByRole('textbox', { name: 'Referral link' }).focus();
		await userEvent.tab();
		await expect(button).toHaveFocus();
		await expect(parseFloat(getComputedStyle(button).outlineOffset)).toBeLessThan(0);
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
		await expect(getComputedStyle(getGroup(canvasElement)).cursor).toBe('default');
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
		await expect(getComputedStyle(getGroup(canvasElement)).borderColor).not.toBe(
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
		const [sm, md, lg] = getGroups(canvasElement) as [HTMLElement, HTMLElement, HTMLElement];

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
		await expect(getGroup(canvasElement)).not.toHaveAttribute('id');
	}
};

const IconMail = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
	</svg>
);

type FieldStatesProps = {
	label: ReactNode;
	tooltip?: ReactNode;
	required?: boolean;
	error: string;
	children: ReactNode;
};

/** Renders a field twice, as the Portal UI library templates do: valid, then invalid with its error. */
const FieldStates = ({ label, tooltip, required, error, children }: FieldStatesProps) => (
	<div className="flex flex-col gap-6">
		{[false, true].map(invalid => (
			<FieldText key={String(invalid)} invalid={invalid} required={required}>
				<Field.Label required={required} optional={!required} tooltip={tooltip}>
					{label}
				</Field.Label>
				{children}
				{invalid ? (
					<Field.Error errors={[{ message: error }]} />
				) : (
					<Field.Description>Helper text</Field.Description>
				)}
			</FieldText>
		))}
	</div>
);

const SearchInput = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<InputGroup.Root>
			<InputGroup.Addon>
				<IconSearch />
			</InputGroup.Addon>
			<Input
				ref={inputRef}
				value={value}
				onChange={event => setValue(event.target.value)}
				placeholder="Search agencies"
			/>
			{value && (
				<InputGroup.Addon>
					<Button
						variant="ghost"
						size="xs"
						type="button"
						iconOnly
						aria-label="Clear search"
						onClick={() => {
							setValue('');
							inputRef.current?.focus();
						}}>
						<IconCancel />
					</Button>
				</InputGroup.Addon>
			)}
		</InputGroup.Root>
	);
};

/**
 * The search field from the Portal UI library: a leading icon, and a clear
 * button that appears once there is a value. Clearing empties the input and
 * puts the focus back in it. It is a plain text input, so the browser's own
 * search cancel button does not show beside this one. When the search picks
 * from a list of results, use `Combobox`, which brings its own clear button.
 *
 * @summary Search field with a clear button, valid and invalid
 */
const handleSearchSubmit = fn((event: FormEvent) => event.preventDefault());

export const SearchField: Story = {
	render: () => (
		<form onSubmit={handleSearchSubmit}>
			<FieldStates
				label="Agency"
				tooltip="Search by agency name or NPN."
				required
				error="Pick an agency from the list.">
				<SearchInput />
			</FieldStates>
		</form>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const [input] = canvas.getAllByRole('textbox', { name: /Agency/ }) as [HTMLElement];

		await expect(canvas.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
		await userEvent.type(input, 'Acme');
		await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }));
		await expect(input).toHaveValue('');
		await expect(input).toHaveFocus();
		await expect(handleSearchSubmit).not.toHaveBeenCalled();
		await expect(canvas.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
	}
};

/**
 * The email field from the Portal UI library: a leading icon is all it adds
 * to the input.
 *
 * @summary Email field with a leading icon, valid and invalid
 */
export const EmailField: Story = {
	render: () => (
		<FieldStates label="Email" required error="Enter a valid email address.">
			<InputGroup.Root>
				<InputGroup.Addon>
					<IconMail />
				</InputGroup.Addon>
				<Input type="email" placeholder="me@email.com" />
			</InputGroup.Root>
		</FieldStates>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const [valid, invalid] = canvas.getAllByRole('textbox', { name: /Email/ }) as [
			HTMLElement,
			HTMLElement
		];

		await expect(valid).not.toHaveAttribute('aria-invalid');
		await expect(invalid).toHaveAttribute('aria-invalid', 'true');
		await expect(invalid).toHaveAccessibleDescription('Enter a valid email address.');
	}
};

const CURRENCIES = ['USD', 'EUR', 'MXN'];

const PriceInput = () => {
	const [currency, setCurrency] = useState('USD');

	return (
		<InputGroup.Root>
			<InputGroup.Text>$</InputGroup.Text>
			<Input inputMode="decimal" placeholder="0.00" />
			<InputGroup.Addon variant="action">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild>
						<Button variant="ghost" size="sm" aria-label={`Currency: ${currency}`}>
							{currency}
							<IconKeyboardArrowDown />
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Portal>
						<DropdownMenu.Content align="end">
							{CURRENCIES.map(option => (
								<DropdownMenu.Item key={option} onSelect={() => setCurrency(option)}>
									{option}
								</DropdownMenu.Item>
							))}
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
			</InputGroup.Addon>
		</InputGroup.Root>
	);
};

/**
 * The price field from the Portal UI library: a currency symbol before the
 * value and a currency picker after it. The picker is a `DropdownMenu` whose
 * trigger fills an `action` addon, so it keeps the frame's height and an inset
 * focus ring.
 *
 * @summary Price field with a symbol and a currency picker, valid and invalid
 */
export const PriceField: Story = {
	render: () => (
		<FieldStates label="Price" required error="Enter a price above zero.">
			<PriceInput />
		</FieldStates>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(canvasElement.ownerDocument.body);
		const [group] = getGroups(canvasElement) as [HTMLElement];
		const [trigger] = canvas.getAllByRole('button', { name: 'Currency: USD' }) as [HTMLElement];

		await expect(group.getBoundingClientRect().height).toBe(40);
		await userEvent.click(trigger);
		await userEvent.click(await body.findByRole('menuitem', { name: 'EUR' }));
		await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
		await expect(trigger).toHaveAccessibleName('Currency: EUR');
		await expect(trigger).toHaveFocus();

		// Back to USD so the story shows the template's default once the test is done.
		await userEvent.click(trigger);
		await userEvent.click(await body.findByRole('menuitem', { name: 'USD' }));
		await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
	}
};

const COUNTRY_CODES = ['US +1', 'CA +1'];

const PhoneInput = () => {
	const [code, setCode] = useState('US +1');

	return (
		<InputGroup.Root>
			<InputGroup.Addon variant="action">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild>
						<Button variant="ghost" size="sm" aria-label={`Country code: ${code}`}>
							{code}
							<IconKeyboardArrowDown />
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Portal>
						<DropdownMenu.Content align="start">
							{COUNTRY_CODES.map(option => (
								<DropdownMenu.Item key={option} onSelect={() => setCode(option)}>
									{option}
								</DropdownMenu.Item>
							))}
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>
			</InputGroup.Addon>
			<Input type="tel" autoComplete="tel-national" placeholder="(555) 000-0000" />
		</InputGroup.Root>
	);
};

/**
 * The optional phone field from the Portal UI library: a country code picker
 * before the number. The picker leads, so the `action` addon rounds its
 * button's start corners with the frame.
 *
 * @summary Phone field with a leading country code picker, valid and invalid
 */
export const PhoneField: Story = {
	render: () => (
		<FieldStates label="Phone number" error="Enter a 10-digit phone number.">
			<PhoneInput />
		</FieldStates>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const [group] = getGroups(canvasElement) as [HTMLElement];
		const [trigger] = canvas.getAllByRole('button', { name: 'Country code: US +1' }) as [
			HTMLElement
		];
		const frame = group.getBoundingClientRect();

		await expect(frame.height).toBe(40);
		await expect(trigger.getBoundingClientRect().left).toBeCloseTo(
			frame.left + group.clientLeft,
			0
		);
		await expect(getComputedStyle(trigger).borderTopLeftRadius).toBe(
			getComputedStyle(group).borderTopLeftRadius
		);
	}
};
