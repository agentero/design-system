import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Label } from './label';

const HelpIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="More information">
		<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 15.25a.75.75 0 110-1.5.75.75 0 010 1.5zm1.03-4.32c-.4.28-.53.45-.53.82v.25h-1v-.25c0-.86.4-1.31.97-1.71.5-.35.78-.58.78-1.05 0-.55-.43-.94-1.06-.94-.6 0-1.05.35-1.14.94l-.99-.13c.16-1.05.98-1.71 2.14-1.71 1.2 0 2.05.72 2.05 1.82 0 .84-.44 1.25-1.19 1.71z" />
	</svg>
);

const Stack = ({ children }: { children: React.ReactNode }) => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>
);

/**
 * Label captions a form control. Associate it with an input via `htmlFor` so
 * clicking the label focuses the control. Use `optional` for a muted
 * " (optional)" suffix, `readonly` to render a dimmed `<dt>` for read-only
 * summaries, and `info` + `infoIcon` for an inline help tooltip.
 */
const meta = {
	title: 'Components/Label',
	component: Label,
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: 'text',
			table: { type: { summary: 'React.ReactNode' } }
		},
		optional: { control: 'boolean' },
		readonly: { control: 'boolean' }
	},
	args: {
		children: 'Email',
		optional: false,
		readonly: false
	}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Args-controlled playground. Toggle `optional` and `readonly` from the
 * Controls panel to explore each state.
 *
 * @summary Default args playground for Label
 */
export const Default: Story = {
	args: { htmlFor: 'email' },
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Email');

		expect(label).toHaveAttribute('data-slot', 'label');
		expect(label.tagName).toBe('LABEL');
		expect(label).toHaveAttribute('for', 'email');
	}
};

/**
 * The default label, the `optional` variant with its muted " (optional)"
 * suffix, and the `readonly` variant rendered as a dimmed `<dt>` inside a
 * `<dl>` for read-only summaries.
 *
 * @summary Default, optional, and read-only labels
 */
export const States: Story = {
	render: () => (
		<Stack>
			<Label htmlFor="default">Default label</Label>
			<Label htmlFor="optional" optional>
				Optional field
			</Label>
			<dl>
				<Label readonly>Read-only field</Label>
				<dd>Read-only value</dd>
			</dl>
		</Stack>
	),
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);

		expect(canvas.getByText('Default label').tagName).toBe('LABEL');
		expect(canvas.getByText('Read-only field').tagName).toBe('DT');
	}
};

/**
 * With `info` and `infoIcon`, Label renders a flex wrapper placing a help
 * trigger beside the caption; hovering the icon reveals the tooltip. The icon
 * is supplied by the consumer so the design system stays icon-library agnostic.
 *
 * @summary Label with an inline help tooltip
 */
export const WithInfo: Story = {
	render: () => (
		<Label htmlFor="tier" info="Determines the agency's quoting access." infoIcon={<HelpIcon />}>
			Agency tier
		</Label>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);
		const trigger = canvas.getByTestId('tooltip-trigger');

		expect(canvas.getByText('Agency tier')).toHaveAttribute('data-slot', 'label');
		await userEvent.hover(trigger);
		const tooltips = await body.findAllByText(/quoting access/i);
		expect(tooltips.length).toBeGreaterThan(0);
	}
};
