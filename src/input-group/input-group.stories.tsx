import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { InputGroup } from '.';
import { Button } from '../button';
import { Divider } from '../divider';
import { Input } from '../input';
import { Tag } from '../tag';
import { IconMail, IconSearch } from './icons';

/**
 * InputGroup puts a control and its addons inside one bordered frame, so a value
 * with a leading icon, a currency prefix or a trailing action reads as a single
 * control rather than as a row of boxes. Three parts compose it: `Root` is the
 * frame, `Addon` holds an icon, a tag or a button, and `Text` holds a text
 * prefix or suffix.
 *
 * The group takes no state props. It reads focus, disabled, invalid and the
 * control's height off the `Input` inside it, so the frame cannot disagree with
 * what it wraps — set `size`, `disabled` and `aria-invalid` on the control as
 * usual.
 *
 * The group is not the control: it renders a `div`, which a `<label>` cannot
 * point at. Inside a form field, reach for `FieldText` with
 * `leadingAddon`/`trailingAddon`, which keeps the field's wiring on the
 * `<input>` inside the frame.
 */
const meta = {
	title: 'Components/InputGroup',
	component: InputGroup.Root,
	tags: ['autodocs'],
	argTypes: {
		// The group has no props to steer: everything visible comes from the
		// control inside it. `children` keeps its documented row all the same —
		// composition is the whole API.
		children: { control: false }
	},
	decorators: [
		Story => (
			<div className="max-w-md">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof InputGroup.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Resolves a design token to the value the browser computes for it. Reading the
 * custom property off `:root` gives back the declaration (`var(--color-…)`), not
 * a colour, so the assertions below put the token on a throwaway element and let
 * the browser do the work — which is also what makes them follow the theme
 * instead of freezing a hex.
 */
const resolveToken = (token: string, property: 'color' | 'border-radius') => {
	const probe = document.createElement('span');
	probe.style.setProperty(property, `var(${token})`);
	document.body.append(probe);
	const computed = getComputedStyle(probe);
	const value = property === 'color' ? computed.color : computed.borderTopLeftRadius;
	probe.remove();

	return value;
};

/**
 * Whether a computed `box-shadow` draws nothing. Tailwind's `shadow-none` sets
 * the shadow variables to transparent rather than removing the declaration, so
 * a switched-off shadow computes to a list of fully transparent layers instead
 * of the `none` keyword.
 */
const isInvisibleShadow = (shadow: string) =>
	shadow === 'none' || !/rgba?\((?!0, 0, 0, 0\))/.test(shadow);

/**
 * A leading icon inside the control's frame — the most common group by a wide
 * margin. The icon is sized and tinted by the addon, so nothing about it is set
 * at the call site.
 *
 * @summary Leading icon addon sharing the control's frame
 */
export const Default: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Addon>
				<IconSearch />
			</InputGroup.Addon>
			<Input aria-label="Search" placeholder="Search" />
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
		const control = canvas.getByRole('textbox', { name: 'Search' });

		// One frame, not two: the group paints the border and the control inside it
		// paints none, so the pair reads as a single control.
		await expect(getComputedStyle(group).borderTopWidth).toBe('1px');
		await expect(getComputedStyle(control).borderTopStyle).toBe('none');
		// The frame keeps the shadow; the control's is switched off.
		await expect(isInvisibleShadow(getComputedStyle(control).boxShadow)).toBe(true);
		await expect(isInvisibleShadow(getComputedStyle(group).boxShadow)).toBe(false);
		// And the icon takes the control's icon colour rather than the page's text
		// colour, which is the addon's job.
		const icon = group.querySelector('svg') as SVGSVGElement;
		const iconPath = icon.querySelector('path') as SVGPathElement;
		await expect(getComputedStyle(iconPath).fill).toBe(
			resolveToken('--color-icon-input-default', 'color')
		);
		await expect(icon.getBoundingClientRect().height).toBe(24);
	}
};

/**
 * A text prefix and a text suffix. `InputGroup.Text` is set in the placeholder
 * colour and at the control's own type size, so `$` and the amount beside it sit
 * on the same line without the prefix competing with what the user typed.
 *
 * Text addons are decoration: nothing announces them. The currency the field
 * expects belongs in its label or description.
 *
 * @summary Text prefix and suffix set in the control's type size
 */
export const WithTextAddons: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Text>$</InputGroup.Text>
			<Input aria-label="Amount" inputMode="decimal" placeholder="0.00" />
			<InputGroup.Text>USD</InputGroup.Text>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const control = canvas.getByRole('textbox', { name: 'Amount' });
		const prefix = canvas.getByText('$');

		// Same type size as the value it sits beside, in the placeholder colour so
		// it reads as part of the line rather than as content.
		await expect(getComputedStyle(prefix).fontSize).toBe(getComputedStyle(control).fontSize);
		await expect(getComputedStyle(prefix).color).toBe(
			resolveToken('--color-text-input-placeholder', 'color')
		);
	}
};

/**
 * A [Tag](?path=/docs/components-tag--docs) as the addon, for a value whose kind
 * has to stay on screen while it is typed. The group squares off the tag's
 * corners and pulls it towards the frame's edge, so it reads as part of the
 * control rather than as content inside it.
 *
 * @summary Tag addon squared off and pulled into the frame's edge
 */
export const WithTagAddon: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Addon>
				<Tag color="informative">ID</Tag>
			</InputGroup.Addon>
			<Input aria-label="Identifier" placeholder="000-0000000" />
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
		const tag = canvasElement.querySelector('[data-slot="tag"]') as HTMLElement;

		// The frame's own treatment wins over the tag's default radius.
		await expect(getComputedStyle(tag).borderTopLeftRadius).toBe(
			resolveToken('--radius-sm', 'border-radius')
		);

		// And the pull, which is the other half of the claim: a negative inline
		// start margin of 4px eats a third of the frame's 12px inner padding, so
		// the tag sits 9px from the frame's left edge (1px border + 12px padding −
		// 4px pull) instead of 13px. That 9px is what the legacy control shows.
		await expect(getComputedStyle(tag).marginInlineStart).toBe('-4px');
		const frame = group.getBoundingClientRect();
		await expect(tag.getBoundingClientRect().left - frame.left).toBeCloseTo(9, 0);
	}
};

/**
 * The same [Tag](?path=/docs/components-tag--docs), on the other side of the
 * value — a code whose kind is only known once it has been typed. The pull
 * follows the tag: it is dropped from the tag's leading edge and applied to its
 * trailing one, so the tag sits against the frame's right edge exactly as the
 * leading one sits against its left.
 *
 * @summary Tag addon after the value, pulled into the frame's trailing edge
 */
export const WithTrailingTagAddon: Story = {
	render: () => (
		<InputGroup.Root>
			<Input aria-label="Tracking code" placeholder="000000000000" />
			<InputGroup.Addon>
				<Tag color="dynamic">TRACK</Tag>
			</InputGroup.Addon>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
		const tag = canvasElement.querySelector('[data-slot="tag"]') as HTMLElement;

		// The tag is genuinely after the control, which is what the frame's
		// adjacency rules key off — an addon that merely looks trailing because of
		// flex order would not match them.
		const control = group.querySelector('input') as HTMLInputElement;
		await expect(control.nextElementSibling).toBe(tag.parentElement);

		// The pull swaps sides. A leading tag takes a -4px start margin; this one
		// has that cancelled back to 0 and takes the -4px on its end instead —
		// without the cancellation it would be pulled away from the edge it sits
		// against and towards the value.
		await expect(getComputedStyle(tag).marginInlineStart).toBe('0px');
		await expect(getComputedStyle(tag).marginInlineEnd).toBe('-4px');

		// So the tag sits 9px from the frame's right edge (1px border + 12px
		// padding − 4px pull), which is the mirror of the leading tag's 9px and the
		// number the legacy control shows.
		const frame = group.getBoundingClientRect();
		await expect(frame.right - tag.getBoundingClientRect().right).toBeCloseTo(9, 0);

		// The squared-off corners still apply: the radius rule is declared before
		// the two margin rules here, where the legacy declared it after, and the
		// trailing tag is the one case where that order is observable.
		await expect(getComputedStyle(tag).borderTopLeftRadius).toBe(
			resolveToken('--radius-sm', 'border-radius')
		);
	}
};

/**
 * A [Divider](?path=/docs/components-divider--docs) splits the frame, and a
 * trailing [Button](?path=/docs/components-button--docs) fills its own end of
 * it. The addon cancels the group's gap with `--input-group-gap` so the button
 * reaches the border instead of floating a gap away from it.
 *
 * Reach for this only when the action belongs to the value — copying it,
 * clearing it, running the search it describes. An action that merely sits near
 * the field belongs outside the frame.
 *
 * @summary Trailing action button filling its end of the frame
 */
export const WithActionButton: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Addon>
				<IconMail />
			</InputGroup.Addon>
			<Input aria-label="Invite by email" type="email" placeholder="name@example.com" />
			<Divider orientation="vertical" />
			<InputGroup.Addon className="-mx-[var(--input-group-gap)]">
				<Button variant="ghost" size="md" className="rounded-none">
					Invite
				</Button>
			</InputGroup.Addon>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
		const button = canvas.getByRole('button', { name: 'Invite' });
		const rule = canvasElement.querySelector('[data-slot="separator"]') as HTMLElement;

		// The button reaches the frame's inner edge — the gap is cancelled, not
		// merely reduced.
		const frame = group.getBoundingClientRect();
		await expect(button.getBoundingClientRect().right).toBeCloseTo(frame.right - 1, 0);
		// And the rule inside the frame takes the frame's own border colour.
		await expect(getComputedStyle(rule).backgroundColor).toBe(
			getComputedStyle(group).borderTopColor
		);
	}
};

const SIZES = ['sm', 'md', 'lg'] as const;

/**
 * The three control heights, set on the `Input` and followed by the frame. The
 * group has no `size` of its own: it takes its height from the control, and at
 * `lg` it raises its corner radius with it, so a grouped control and a bare one
 * of the same size are the same shape.
 *
 * @summary Frame height and radius following the control's size
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			{SIZES.map(size => (
				<div key={size} className="flex items-center gap-4">
					<InputGroup.Root data-testid={`group-${size}`}>
						<InputGroup.Addon>
							<IconSearch />
						</InputGroup.Addon>
						<Input size={size} aria-label={`Grouped ${size}`} placeholder="Search" />
						<InputGroup.Text>{size}</InputGroup.Text>
					</InputGroup.Root>

					<Input size={size} aria-label={`Bare ${size}`} placeholder="Search" />
				</div>
			))}
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const heights = { sm: 32, md: 40, lg: 48 };

		for (const size of SIZES) {
			const group = canvas.getByTestId(`group-${size}`);
			const bare = canvas.getByRole('textbox', { name: `Bare ${size}` });

			// The frame is exactly as tall as the control it replaces — the control's
			// negative block margin is what pays for the frame's two borders.
			await expect(group.getBoundingClientRect().height).toBe(heights[size]);
			await expect(getComputedStyle(group).borderTopLeftRadius).toBe(
				getComputedStyle(bare).borderTopLeftRadius
			);
		}

		// The 48px control is the one that changes the frame's shape.
		const md = canvas.getByTestId('group-md');
		const lg = canvas.getByTestId('group-lg');
		await expect(getComputedStyle(md).borderTopLeftRadius).not.toBe(
			getComputedStyle(lg).borderTopLeftRadius
		);
	}
};

/**
 * Invalid and disabled, both read off the control. `aria-invalid` on the
 * `Input` turns the frame destructive; `disabled` greys the frame, drops its
 * shadow and dims the icon. Neither is a prop on the group, which is what stops
 * the frame from ever disagreeing with the control it wraps.
 *
 * @summary Invalid and disabled frames driven by the control's own attributes
 */
export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<InputGroup.Root data-testid="group-default">
				<InputGroup.Addon>
					<IconMail />
				</InputGroup.Addon>
				<Input aria-label="Default" type="email" placeholder="name@example.com" />
			</InputGroup.Root>

			<InputGroup.Root data-testid="group-invalid">
				<InputGroup.Addon>
					<IconMail />
				</InputGroup.Addon>
				<Input aria-label="Invalid" type="email" aria-invalid defaultValue="name@" />
			</InputGroup.Root>

			<InputGroup.Root data-testid="group-disabled">
				<InputGroup.Addon>
					<IconMail />
				</InputGroup.Addon>
				<Input aria-label="Disabled" type="email" disabled defaultValue="name@example.com" />
			</InputGroup.Root>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const borderOf = (testId: string) =>
			getComputedStyle(canvas.getByTestId(testId)).borderTopColor;

		// Read as rgb() off the elements and compared against each other rather
		// than against a literal, so the assertion follows the tokens.
		await expect(borderOf('group-default')).not.toBe(borderOf('group-invalid'));
		await expect(borderOf('group-default')).not.toBe(borderOf('group-disabled'));

		const disabled = canvas.getByTestId('group-disabled');
		await expect(isInvisibleShadow(getComputedStyle(disabled).boxShadow)).toBe(true);
		await expect(
			isInvisibleShadow(getComputedStyle(canvas.getByTestId('group-default')).boxShadow)
		).toBe(false);
		const disabledIcon = disabled.querySelector('svg path') as SVGPathElement;
		await expect(getComputedStyle(disabledIcon).fill).toBe(
			resolveToken('--color-icon-input-disable', 'color')
		);
	}
};

/**
 * The addon stands in for the control: pressing the icon focuses the value and
 * leaves the caret where it was, which is what makes a leading icon feel like
 * part of the field rather than something beside it. A press that lands on a
 * button inside an addon is left alone, so an addon can still hold a real
 * action.
 *
 * @summary Pressing an addon focuses the control; buttons keep their press
 */
export const FocusFromAddon: Story = {
	render: () => (
		<InputGroup.Root>
			<InputGroup.Addon data-testid="icon-addon">
				<IconSearch />
			</InputGroup.Addon>
			<Input aria-label="Search" defaultValue="Nationwide" placeholder="Search" />
			<Divider orientation="vertical" />
			<InputGroup.Addon className="-mx-[var(--input-group-gap)]">
				<Button variant="ghost" size="md" className="rounded-none">
					Go
				</Button>
			</InputGroup.Addon>
		</InputGroup.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const group = canvasElement.querySelector('[data-slot="input-group"]') as HTMLElement;
		const control = canvas.getByRole('textbox', { name: 'Search' }) as HTMLInputElement;
		const action = canvas.getByRole('button', { name: 'Go' });

		await expect(getComputedStyle(group).outlineWidth).toBe('0px');

		await userEvent.click(canvas.getByTestId('icon-addon'));
		await expect(control).toHaveFocus();
		// Focusing through the addon draws the ring on the frame rather than on the
		// control. The ring is a 75ms transition, so it is waited for rather than
		// read on the same tick as the click.
		await waitFor(async () => {
			await expect(getComputedStyle(group).outlineWidth).toBe('2px');
		});
		await expect(getComputedStyle(control).outlineStyle).toBe('none');

		// The caret half of the claim, which is what the addon's `preventDefault`
		// buys: with the caret parked between the sixth and seventh characters of
		// "Nationwide", pressing the addon has to leave it there rather than
		// dropping it at either end of the value.
		control.setSelectionRange(6, 6);
		await userEvent.click(canvas.getByTestId('icon-addon'));
		await expect(control).toHaveFocus();
		await expect(control.selectionStart).toBe(6);
		await expect(control.selectionEnd).toBe(6);

		// The button keeps its own press: focus does not jump to the value.
		await userEvent.click(action);
		await expect(control).not.toHaveFocus();
	}
};
