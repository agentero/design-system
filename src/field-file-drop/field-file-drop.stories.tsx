import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronDownIcon } from 'lucide-react';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { FieldFileDrop } from '.';
import { Button } from '../button';
import { DropdownMenu } from '../dropdown-menu';
import { Field, type FieldErrorLike } from '../field';
import { FileDrop, type FileDropValue } from '../file-drop';
import { Label } from '../label';

/**
 * FieldFileDrop is a `Field.Root` for a one-file upload. It provides
 * `FileDropContext`, so the `FileDrop` inside associates its input with the
 * label and the messages and takes `invalid`, `required`, `disabled` and
 * `readOnly` from the field — no `id`, `htmlFor`, `aria-describedby` or
 * `aria-invalid` written by hand. The label sits over the box, as in the other
 * vertical fields.
 *
 * It knows nothing about form libraries: the stories keep the file and the
 * error in state, the way a form would.
 */
const meta = {
	title: 'Components/FieldFileDrop',
	component: FieldFileDrop,
	tags: ['autodocs'],
	argTypes: {
		invalid: { control: 'boolean' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		required: { control: 'boolean' }
	},
	args: {
		invalid: false,
		disabled: false,
		readOnly: false,
		required: false
	},
	decorators: [
		Story => (
			<div className="max-w-120">
				<Story />
			</div>
		)
	]
} satisfies Meta<typeof FieldFileDrop>;

export default meta;

type Story = StoryObj<typeof meta>;

// The stories with no play are the ones the controls and the Docs page drive;
// the hidden ones flip the field's state, and run as tests only.
const testOnly = ['!dev', '!autodocs', '!manifest'];

// A one-page PDF built in place, so the preview shows a real document with no
// network: each object's byte offset goes into the cross-reference table.
const pdfBytes = (title: string) => {
	const content = `BT /F1 24 Tf 72 720 Td (${title}) Tj ET`;
	const objects = [
		'<< /Type /Catalog /Pages 2 0 R >>',
		'<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
		'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
		`<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
		'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'
	];
	let body = '%PDF-1.4\n';
	const offsets = objects.map((object, index) => {
		const offset = body.length;
		body += `${index + 1} 0 obj\n${object}\nendobj\n`;
		return offset;
	});
	const xref = body.length;
	const rows = offsets.map(offset => `${String(offset).padStart(10, '0')} 00000 n \n`).join('');

	return `${body}xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${rows}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
};

const pdf = (name: string, title: string) =>
	new File([pdfBytes(title)], name, { type: 'application/pdf' });

// Stands in for the address of a file the app stored earlier.
const storedW9Url = URL.createObjectURL(pdf('w9.pdf', 'Form W-9, Northside Insurance'));

// A drop skips the picker's own `accept` filter, as a user dragging any file does.
const drop = (canvasElement: HTMLElement, file: File) => {
	const dataTransfer = new DataTransfer();
	dataTransfer.items.add(file);

	canvasElement
		.querySelector('[data-slot=file-drop]')!
		.dispatchEvent(new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer }));
};

const rejectionError = { message: 'Upload the W-9 as a PDF.' };

/**
 * The W-9 field of an agency form: the file in state, and the error a
 * rejected file sets. `invalid` and `error` start where the story needs them.
 */
const W9Field = ({
	initialValue = null,
	initialError,
	invalid,
	...props
}: Story['args'] & {
	initialValue?: FileDropValue | null;
	initialError?: FieldErrorLike;
}) => {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState(initialError);

	return (
		<FieldFileDrop {...props} invalid={invalid || !!error}>
			<Label>W-9</Label>
			<FileDrop
				accept="application/pdf"
				value={value}
				onFileChange={file => {
					setError(undefined);
					setValue({ file });
				}}
				onFileReject={() => setError(rejectionError)}
				onFileRemove={() => setValue(null)}
			/>
			<Field.Description>Signed in the last 12 months.</Field.Description>
			<Field.Error errors={error ? [error] : undefined} />
		</FieldFileDrop>
	);
};

/**
 * The composition consumers write: a label, the design system's `FileDrop`
 * and helper text. The label names the file input and the input is described
 * by the text and the accepted formats, all through context. A file `accept`
 * turns down sets the field's error from `onFileReject`.
 *
 * @summary Label, FileDrop and description wired with no ids
 */
export const Default: Story = {
	// The controls drive the field; the story keeps the file and the error.
	render: args => <W9Field {...args} />
};

/** The label names the input, and the description and the formats describe it. */
export const WiresTheFileDrop: Story = {
	tags: testOnly,
	render: () => <W9Field required />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// The label's text ends in the required asterisk.
		const input = canvas.getByLabelText<HTMLInputElement>(/^W-9/);

		await expect(input).toHaveAttribute('type', 'file');
		await expect(input).toBeRequired();
		await expect(input).toHaveAccessibleDescription(
			'Signed in the last 12 months. Accepted formats: PDF'
		);
	}
};

/**
 * Once there is a file the preview replaces the zone, and the field's
 * messages move to "Replace file", the control that keeps the focus.
 * `onFileRemove` on the `FileDrop` adds "Remove", which brings the zone back.
 *
 * @summary Stored file previewed under the label
 */
export const Filled: Story = {
	render: () => <W9Field initialValue={{ url: storedW9Url }} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByTitle('File preview')).toHaveAttribute('src', storedW9Url);
		await expect(canvas.getByRole('button', { name: 'Replace file' })).toHaveAccessibleDescription(
			'Signed in the last 12 months.'
		);
	}
};

/** Removing the file brings the zone back, and a new pick previews it. */
export const RemovesAndPicksAgain: Story = {
	tags: testOnly,
	render: () => <W9Field initialValue={{ url: storedW9Url }} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button', { name: 'Remove' }));

		const input = canvas.getByLabelText<HTMLInputElement>('W-9');

		await expect(input).toHaveFocus();

		await userEvent.upload(input, pdf('w9-2026.pdf', 'Form W-9, 2026'));

		await expect((await canvas.findByTitle('File preview')).getAttribute('src')).toMatch(/^blob:/);
	}
};

/**
 * `invalid` paints the zone in the destructive tone and `Field.Error` shows
 * the message under the description; both reach the input's
 * `aria-describedby`. Here the error comes from a file `accept` turned down.
 *
 * @summary Rejected file: destructive zone and the error under it
 */
export const Invalid: Story = {
	render: () => <W9Field initialError={rejectionError} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByLabelText('W-9');

		await expect(input).toHaveAttribute('aria-invalid', 'true');
		await expect(canvasElement.querySelector('[data-slot=file-drop]')).toHaveAttribute(
			'data-invalid'
		);
		await expect(input).toHaveAccessibleDescription(
			'Signed in the last 12 months. Upload the W-9 as a PDF. Accepted formats: PDF'
		);
	}
};

/** A rejected file sets the error, and an accepted one clears it and is previewed. */
export const RejectsThenAccepts: Story = {
	tags: testOnly,
	render: () => <W9Field />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const input = canvas.getByLabelText('W-9');

		drop(canvasElement, new File(['agency,state\n'], 'agencies.csv', { type: 'text/csv' }));

		await expect(await canvas.findByRole('alert')).toHaveTextContent('Upload the W-9 as a PDF.');
		await expect(input).toHaveAttribute('aria-invalid', 'true');

		drop(canvasElement, pdf('w9.pdf', 'Form W-9'));

		await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
		await expect(await canvas.findByTitle('File preview')).toBeVisible();
		await expect(canvas.getByRole('button', { name: 'Replace file' })).not.toHaveAttribute(
			'aria-invalid'
		);
	}
};

/**
 * `required` on the field reaches both the label's asterisk and the input's
 * `required`, which holds only while the zone is empty.
 *
 * @summary Required field driven from the root alone
 */
export const Required: Story = {
	render: () => <W9Field required />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText(/^W-9/)).toBeRequired();
		await expect(canvas.getByText('*')).toBeVisible();
	}
};

/**
 * Another way to supply the file, here picking the W-9 of another agency,
 * goes in the `FileDrop`'s `children`: it sits in the empty zone under an
 * "or", and leaves with it once there is a file.
 *
 * @summary Another way to supply the file inside the zone
 */
export const AlternativeSource: Story = {
	render: function Render() {
		const [value, setValue] = useState<FileDropValue | null>(null);

		return (
			<FieldFileDrop>
				<Label>W-9</Label>
				<FileDrop
					accept="application/pdf"
					showAcceptedFormats={false}
					value={value}
					onFileChange={file => setValue({ file })}
					onFileRemove={() => setValue(null)}>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<Button type="button" variant="secondary" size="md">
								Choose from agency
								<ChevronDownIcon />
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Portal>
							<DropdownMenu.Content>
								<DropdownMenu.Item
									onSelect={() =>
										setValue({ url: storedW9Url, name: 'w9-northside-insurance.pdf' })
									}>
									W-9 · Northside Insurance
								</DropdownMenu.Item>
								<DropdownMenu.Item
									onSelect={() => setValue({ url: storedW9Url, name: 'w9-lakeside-agency.pdf' })}>
									W-9 · Lakeside Agency
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</FileDrop>
			</FieldFileDrop>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('W-9')).toHaveAttribute('type', 'file');
		await expect(canvas.getByRole('button', { name: 'Choose from agency' })).toBeVisible();
	}
};

/**
 * `disabled` on the field greys the zone out and disables the input: clicks
 * open nothing and drops are ignored.
 *
 * @summary Disabled field driven from the root
 */
export const Disabled: Story = {
	render: () => <W9Field disabled />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('W-9')).toBeDisabled();
		await expect(canvasElement.querySelector('[data-slot=field]')).toHaveAttribute('data-disabled');
	}
};

/**
 * `readOnly` on the field shows the stored file without "Replace file" or
 * "Remove". With no file the box renders nothing, so render the field only
 * when there is one.
 *
 * @summary Read-only field showing the stored file
 */
export const ReadOnly: Story = {
	render: () => <W9Field readOnly initialValue={{ url: storedW9Url }} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByTitle('File preview')).toHaveAttribute('src', storedW9Url);
		await expect(canvas.queryByRole('button', { name: 'Replace file' })).toBeNull();
		await expect(canvas.queryByRole('button', { name: 'Remove' })).toBeNull();
	}
};
