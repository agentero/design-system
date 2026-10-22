import { useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../button';
import { Label } from '../label';
import { TextArea } from './textarea';

const layerMatches = (textarea: HTMLElement) => {
	const layer = textarea.parentElement!.querySelector<HTMLElement>(
		'[data-slot=textarea-overflow]'
	)!;
	const box = textarea.getBoundingClientRect();
	const over = layer.getBoundingClientRect();
	// The layer covers the textarea's client area, inside its border and scrollbars.
	return {
		layer,
		sameOrigin:
			over.top === box.top + textarea.clientTop &&
			over.left === box.left + textarea.clientLeft &&
			over.width === textarea.clientWidth &&
			over.height === textarea.clientHeight
	};
};

/**
 * TextArea is the base multi-line text control, with Input's skin, sizes and
 * states. It wires nothing on its own: `id`, `aria-invalid` and
 * `aria-describedby` are plain props, set by whoever owns the field.
 */
const meta = {
	title: 'Components/TextArea',
	component: TextArea,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg']
		},
		rows: { control: 'number' },
		placeholder: { control: 'text' },
		limit: { control: 'number' },
		maxLength: { control: 'number' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' }
	},
	args: {
		placeholder: 'Anything the underwriter should know',
		'aria-label': 'Notes'
	},
	decorators: [
		Story => (
			<div style={{ maxWidth: '24rem' }}>
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default control at `md`: three rows at rest and a vertical resize handle
 * the user can drag to make it taller.
 *
 * @summary Default standalone text area
 */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAttribute('data-slot', 'textarea');
		await expect(getComputedStyle(textarea).resize).toBe('vertical');

		await userEvent.type(textarea, 'Roof replaced in 2024.{enter}No prior claims.');
		await expect(textarea).toHaveValue('Roof replaced in 2024.\nNo prior claims.');
	}
};

/**
 * The three sizes mirror Input's: the first row measures one Input of the same
 * size and the minimum height shows three rows.
 *
 * @summary The three sizes, three rows tall at rest
 */
export const AllSizes: Story = {
	render: args => (
		<div style={{ display: 'grid', gap: '1rem' }}>
			<TextArea {...args} size="sm" aria-label="Small" placeholder="sm — 76px, three rows" />
			<TextArea {...args} size="md" aria-label="Medium" placeholder="md — 84px, three rows" />
			<TextArea {...args} size="lg" aria-label="Large" placeholder="lg — 96px, three rows" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const height = (name: string) =>
			canvas.getByRole('textbox', { name }).getBoundingClientRect().height;

		await expect(height('Small')).toBe(76);
		await expect(height('Medium')).toBe(84);
		await expect(height('Large')).toBe(96);
		await expect(canvas.getByRole('textbox', { name: 'Large' })).toHaveAttribute('data-size', 'lg');
	}
};

/**
 * `rows` sets a taller initial height when three rows are not enough.
 *
 * @summary Taller initial height through the native rows attribute
 */
export const Rows: Story = {
	args: {
		rows: 6,
		placeholder: 'Six rows visible before scrolling'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAttribute('rows', '6');
		await expect(textarea.getBoundingClientRect().height).toBeGreaterThan(84);
	}
};

/**
 * The invalid treatment comes purely from `aria-invalid`; point
 * `aria-describedby` at the message so it is read with the control.
 *
 * @summary Invalid state driven by aria-invalid
 */
export const Invalid: Story = {
	args: {
		'aria-label': 'Reason',
		'aria-invalid': true,
		'aria-describedby': 'reason-error',
		defaultValue: 'n/a'
	},
	render: args => (
		<div style={{ display: 'grid', gap: '0.25rem' }}>
			<TextArea {...args} />
			<span id="reason-error" className="text-sm text-text-input-destructive">
				Tell us why you are cancelling.
			</span>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Reason' });

		await expect(textarea).toHaveAttribute('aria-invalid', 'true');
		await expect(textarea).toHaveAccessibleDescription('Tell us why you are cancelling.');
	}
};

/**
 * @summary Disabled state
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		defaultValue: 'Cannot be edited'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toBeDisabled();
		await userEvent.type(textarea, 'nope');
		await expect(textarea).toHaveValue('Cannot be edited');
	}
};

/**
 * @summary Read-only value that stays focusable and copyable
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true,
		defaultValue: 'Copy me, but do not change me'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAttribute('readonly');
		await expect(textarea).not.toBeDisabled();
	}
};

/**
 * `limit` shows the count inside the box, on its last row and aligned with
 * the text. The count is part of the control's description, so a screen reader
 * hears "0 of 140 characters" with the field instead of on every keystroke.
 *
 * @summary Character count inside the box, driven by limit
 */
export const WithCounter: Story = {
	args: { limit: 140 },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;

		await expect(textarea).toHaveAccessibleDescription('0 of 140 characters');
		await expect(counter).toHaveTextContent('0/140');

		await userEvent.type(textarea, 'Roof replaced in 2024.');

		await expect(counter).toHaveTextContent('22/140');
		await expect(textarea).toHaveAccessibleDescription('22 of 140 characters');

		const frame = canvasElement.querySelector('[data-slot=textarea-root]')!.getBoundingClientRect();
		const box = textarea.getBoundingClientRect();
		const count = counter.getBoundingClientRect();
		// The textarea's -1px bottom margin, from the frame, tucks the count 1px under it.
		await expect(count.top).toBe(box.bottom - 1);
		await expect(count.bottom).toBeLessThan(frame.bottom);
		await expect(count.left).toBe(box.left);
		// 1px border and 16px padding, as a standalone TextArea's text.
		await expect(box.left - frame.left).toBe(17);

		// A press on the count brings focus back from elsewhere, and keeps a selection.
		(textarea as HTMLTextAreaElement).setSelectionRange(5, 13);
		textarea.blur();
		await expect(textarea).not.toHaveFocus();
		await userEvent.click(counter);
		await expect(textarea).toHaveFocus();
		await expect((textarea as HTMLTextAreaElement).selectionStart).toBe(5);
		await expect((textarea as HTMLTextAreaElement).selectionEnd).toBe(13);
	}
};

/**
 * A counted TextArea grows a line at a time as the text reaches its last row,
 * instead of scrolling, and has no resize handle.
 *
 * @summary Counted box grows with its text
 */
export const CounterGrowsWithText: Story = {
	args: { limit: 500 },
	play: async ({ canvasElement }) => {
		const textarea = within(canvasElement).getByRole('textbox', { name: 'Notes' });
		const resting = textarea.getBoundingClientRect().height;

		await expect(getComputedStyle(textarea).resize).toBe('none');

		await userEvent.type(textarea, 'One{Enter}Two{Enter}Three{Enter}Four{Enter}Five{Enter}Six');

		await expect(textarea.getBoundingClientRect().height).toBeGreaterThan(resting);
		await expect(textarea.scrollHeight).toBeLessThanOrEqual(textarea.clientHeight);
	}
};

/**
 * The limit is soft: typing goes past it, the characters over the limit and
 * the count turn destructive, and the description says by how much, so the
 * form's validation can reject it.
 *
 * @summary Typing past the limit turns the count destructive
 */
export const CounterOverLimit: Story = {
	args: { limit: 10 },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
		const muted = getComputedStyle(counter).color;

		await userEvent.type(textarea, 'Twelve chars');

		await expect(textarea).toHaveValue('Twelve chars');
		await expect(textarea).not.toHaveAttribute('maxlength');
		await expect(counter).toHaveTextContent('12/10');
		await expect(counter).toHaveAttribute('data-over');
		await expect(getComputedStyle(counter).color).not.toBe(muted);
		await expect(textarea).toHaveAccessibleDescription('2 characters over the limit of 10');

		// The characters past the limit read destructive inside the box.
		const layer = canvasElement.querySelector('[data-slot=textarea-overflow]')!;
		const overText = layer.querySelector('[data-over]')!;
		await expect(overText).toHaveTextContent('rs');
		await expect(getComputedStyle(overText).color).toBe(getComputedStyle(counter).color);
		await expect(layerMatches(textarea).sameOrigin).toBe(true);

		// The layer paints the text, so the textarea's own text never shows through.
		await expect(getComputedStyle(textarea).color).toBe('rgba(0, 0, 0, 0)');
		await expect(getComputedStyle(textarea).caretColor).not.toBe('rgba(0, 0, 0, 0)');

		await userEvent.keyboard('{Backspace}');
		await expect(textarea).toHaveAccessibleDescription('1 character over the limit of 10');

		await userEvent.keyboard('{Backspace}');
		await expect(canvasElement.querySelector('[data-slot=textarea-overflow]')).toBeNull();
		await expect(counter).not.toHaveAttribute('data-over');
		await expect(getComputedStyle(textarea).color).not.toBe('rgba(0, 0, 0, 0)');
	}
};

/**
 * `maxLength` stays the native hard cap: typing stops at it and no count is
 * shown. The soft limit with the count is `limit`.
 *
 * @summary Native maxLength caps typing and shows no count
 */
export const MaxLengthStaysNative: Story = {
	// Runs as a test only: it pins the native attribute's meaning, not a visual state.
	tags: ['!dev', '!autodocs', '!manifest'],
	args: { maxLength: 5 },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await userEvent.type(textarea, 'Twelve chars');

		await expect(textarea).toHaveAttribute('maxlength', '5');
		await expect(textarea).toHaveValue('Twelv');
		await expect(canvasElement.querySelector('[data-slot=textarea-counter]')).toBeNull();
		await expect(getComputedStyle(textarea.parentElement!).display).toBe('contents');
	}
};

/**
 * The count never joins the name of a `<label>` wrapped around the control.
 *
 * @summary Count kept out of a wrapping label's name
 */
export const CounterInLabel: Story = {
	// Runs as a test only: an edge case, not a state consumers need to see.
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<Label className="flex-col items-stretch font-normal">
			Notes
			<TextArea limit={100} defaultValue="hello" />
		</Label>
	),
	play: async ({ canvasElement }) => {
		const textarea = within(canvasElement).getByRole('textbox', { name: 'Notes' });

		await expect(textarea).toHaveAccessibleDescription('5 of 100 characters');
	}
};

/**
 * The red layer follows the textarea it covers whatever styles it: a margin
 * or `box-content` from `className`, right-to-left text, a long unwrapped line scrolled
 * sideways, and an emoji right on the limit, which is never cut in two.
 *
 * @summary Over-limit highlight follows margins, direction, sideways scroll and emoji
 */
export const OverflowFollowsTextarea: Story = {
	// Runs as a test only: an edge case, not a state consumers need to see.
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<div className="flex flex-col gap-4">
			<TextArea aria-label="Margin" className="mt-4" limit={5} defaultValue="Twelve chars" />
			<TextArea
				aria-label="Content box"
				className="box-content"
				limit={5}
				defaultValue="Twelve chars"
			/>
			<TextArea aria-label="Right to left" dir="rtl" limit={5} defaultValue="שלום עולם טוב" />
			<TextArea
				aria-label="Unwrapped"
				className="max-h-24"
				wrap="off"
				limit={5}
				defaultValue={Array(6).fill('A long line that does not wrap '.repeat(6)).join('\n')}
			/>
			<TextArea aria-label="Emoji" limit={3} defaultValue="ab😀cd" />
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textbox = (name: string) => canvas.getByRole('textbox', { name }) as HTMLTextAreaElement;

		await expect(layerMatches(textbox('Margin')).sameOrigin).toBe(true);
		await expect(layerMatches(textbox('Content box')).sameOrigin).toBe(true);
		await expect(getComputedStyle(layerMatches(textbox('Margin')).layer).visibility).toBe(
			'visible'
		);

		const rtl = layerMatches(textbox('Right to left'));
		await expect(getComputedStyle(rtl.layer).direction).toBe('rtl');

		const unwrapped = textbox('Unwrapped');
		await expect(layerMatches(unwrapped).sameOrigin).toBe(true);
		unwrapped.scrollLeft = 120;
		unwrapped.scrollTop = unwrapped.scrollHeight;
		unwrapped.dispatchEvent(new Event('scroll'));
		// Capped, the counted box scrolls rather than growing, so the sync is not 0 against 0.
		await expect(unwrapped.scrollLeft).toBeGreaterThan(0);
		await expect(unwrapped.scrollTop).toBeGreaterThan(0);
		await waitFor(() => {
			const { layer } = layerMatches(unwrapped);
			expect(layer.scrollLeft).toBe(unwrapped.scrollLeft);
			expect(layer.scrollTop).toBe(unwrapped.scrollTop);
		});

		const emoji = layerMatches(textbox('Emoji')).layer;
		await expect(emoji.querySelector('[data-over]')!.textContent).toBe('😀cd');
	}
};

const ControlledCounter = () => {
	const [value, setValue] = useState('Twelve');

	return (
		<TextArea
			aria-label="Notes"
			limit={10}
			value={value}
			onChange={event => setValue(event.target.value)}
		/>
	);
};

/**
 * A controlled value drives the count and the highlight too, past the limit
 * and back under it.
 *
 * @summary Controlled count and highlight past the limit
 */
export const CounterControlled: Story = {
	// Runs as a test only: covers the controlled path of the count.
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => <ControlledCounter />,
	play: async ({ canvasElement }) => {
		const textarea = within(canvasElement).getByRole('textbox', { name: 'Notes' });
		const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;

		await expect(counter).toHaveTextContent('6/10');
		await userEvent.type(textarea, ' chars!');
		await expect(counter).toHaveTextContent('13/10');
		await expect(
			canvasElement.querySelector('[data-slot=textarea-overflow] [data-over]')!.textContent
		).toBe('rs!');
		await userEvent.keyboard('{Backspace}{Backspace}{Backspace}');
		await expect(counter).toHaveTextContent('10/10');
		await expect(canvasElement.querySelector('[data-slot=textarea-overflow]')).toBeNull();
	}
};

const ResetForm = () => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [, setResets] = useState(0);

	return (
		<div className="flex flex-col items-start gap-2">
			<TextArea ref={textareaRef} aria-label="Notes" limit={100} defaultValue="hello" />
			<Button
				variant="secondary"
				size="sm"
				onClick={() => {
					textareaRef.current!.value = 'bye';
					setResets(count => count + 1);
				}}>
				Reset
			</Button>
		</div>
	);
};

/**
 * The uncontrolled count follows a value the form rewrites without an input
 * event: a re-render after a react-hook-form-style reset, and a native reset.
 *
 * @summary Uncontrolled count follows form resets
 */
export const CounterFollowsResets: Story = {
	// Runs as a test only: it covers how the count is read, not a visual state.
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<div className="flex flex-col gap-6">
			<ResetForm />
			<form className="flex flex-col items-start gap-2">
				<TextArea aria-label="Native" limit={100} defaultValue="hello" />
				<Button type="reset" variant="secondary" size="sm">
					Native reset
				</Button>
			</form>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const [rerendered, native] = canvasElement.querySelectorAll('[data-slot=textarea-counter]');

		await expect(rerendered).toHaveTextContent('5/100');
		await userEvent.click(canvas.getByRole('button', { name: 'Reset' }));
		await expect(rerendered).toHaveTextContent('3/100');

		await userEvent.type(canvas.getByRole('textbox', { name: 'Native' }), ' there');
		await expect(native).toHaveTextContent('11/100');
		await userEvent.click(canvas.getByRole('button', { name: 'Native reset' }));
		await waitFor(() => expect(native).toHaveTextContent('5/100'));
	}
};

/**
 * Without a count the wrapper is `display: contents`, so the `<textarea>`
 * lays out as a direct child of its container: a width or a flex item class
 * in `className` works as on a bare `<textarea>`.
 *
 * @summary Without limit the wrapper leaves layout to the textarea
 */
export const LayoutWithoutCounter: Story = {
	// Runs as a test only: an edge case, not a state consumers need to see.
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<div className="flex w-96 items-start gap-4">
			<TextArea aria-label="Notes" className="w-auto flex-1" />
			<Button variant="secondary" size="sm">
				Clear
			</Button>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });
		const button = canvas.getByRole('button', { name: 'Clear' });

		await expect(getComputedStyle(textarea.parentElement!).display).toBe('contents');
		await expect(textarea.getBoundingClientRect().right + 16).toBeCloseTo(
			button.getBoundingClientRect().left,
			0
		);
	}
};

/**
 * With a count the frame fills its container, even one that does not stretch
 * its children.
 *
 * @summary Counted frame fills its container
 */
export const LayoutWithCounter: Story = {
	// Runs as a test only: an edge case, not a state consumers need to see.
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => (
		<div className="flex w-96 flex-col items-start">
			<TextArea aria-label="Notes" limit={140} />
		</div>
	),
	play: async ({ canvasElement }) => {
		const frame = canvasElement.querySelector('[data-slot=textarea-root]')!;

		await expect(frame.getBoundingClientRect().width).toBe(384);
	}
};

const LimitToggle = () => {
	const [limited, setLimited] = useState(false);

	return (
		<div className="flex flex-col items-start gap-2">
			<TextArea aria-label="Notes" limit={limited ? 100 : undefined} />
			<Button variant="secondary" size="sm" onClick={() => setLimited(value => !value)}>
				Toggle limit
			</Button>
		</div>
	);
};

/**
 * The `<textarea>` keeps its place in the tree whether or not there is a
 * count, so adding or removing `limit` keeps what the user typed.
 *
 * @summary Adding a limit keeps the same control and its text
 */
export const ToggleLimit: Story = {
	// Runs as a test only: an edge case, not a state consumers need to see.
	tags: ['!dev', '!autodocs', '!manifest'],
	render: () => <LimitToggle />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox', { name: 'Notes' });

		await userEvent.type(textarea, 'Draft');
		await userEvent.click(canvas.getByRole('button', { name: 'Toggle limit' }));

		await expect(canvas.getByRole('textbox', { name: 'Notes' })).toBe(textarea);
		await expect(textarea).toHaveValue('Draft');
		await expect(canvasElement.querySelector('[data-slot=textarea-counter]')).toHaveTextContent(
			'5/100'
		);
	}
};
