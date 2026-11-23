import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronDownIcon } from 'lucide-react';
import { expect, fn, spyOn, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../button';
import { DropdownMenu } from '../dropdown-menu';
import { Label } from '../label';
import { FileDrop, type FileDropProps, type FileDropValue } from './file-drop';

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

const csv = () =>
	new File(['agency,state\nNorthside Insurance,TX\n'], 'agencies.csv', { type: 'text/csv' });

// Stands in for the address of a file the app stored earlier.
const storedW9Url = URL.createObjectURL(pdf('w9.pdf', 'Form W-9, Northside Insurance'));

const dragEvent = (type: 'dragenter' | 'dragleave' | 'drop', file?: File) => {
	const dataTransfer = new DataTransfer();

	if (file) {
		dataTransfer.items.add(file);
	}

	return new DragEvent(type, { bubbles: true, cancelable: true, dataTransfer });
};

const getZone = (canvasElement: HTMLElement) =>
	canvasElement.querySelector<HTMLElement>('[data-slot=file-drop]')!;

/**
 * Keeps the picked file in state, the way a form would, so the stories show
 * the preview after a pick and the spies still record every call.
 */
const ControlledFileDrop = ({
	value: initialValue,
	onFileChange,
	onFileRemove,
	...props
}: FileDropProps) => {
	const [value, setValue] = useState<FileDropValue | null | undefined>(initialValue);

	return (
		<FileDrop
			{...props}
			value={value}
			onFileChange={file => {
				setValue({ file });
				onFileChange?.(file);
			}}
			onFileRemove={
				onFileRemove &&
				(() => {
					setValue(null);
					onFileRemove();
				})
			}
		/>
	);
};

/**
 * FileDrop uploads one file: a dashed zone that takes a dropped file or opens
 * the picker, and a preview with "Replace file" once there is one. It is
 * controlled through `value`, `onFileChange` and `onFileReject`, and its real
 * control is a hidden `<input type="file">` a `Label` names.
 */
const meta = {
	title: 'Components/FileDrop',
	component: FileDrop,
	tags: ['autodocs'],
	argTypes: {
		accept: { control: 'text' },
		disabled: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		'aria-invalid': { control: 'boolean' }
	},
	args: {
		accept: 'application/pdf',
		onFileChange: fn(),
		onFileReject: fn()
	},
	decorators: [
		// The story's own id names the input, so the Docs page, which renders every
		// story at once, has no two labels pointing at the same input.
		(Story, { id, args, parameters }) => (
			<div className="flex max-w-120 flex-col gap-2">
				{parameters.label !== false && <Label htmlFor={id}>W-9</Label>}
				<Story args={{ ...args, id }} />
			</div>
		)
	]
} satisfies Meta<typeof FileDrop>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The empty zone, labelled by the `Label` through the hidden input, with the
 * formats `accept` allows. Clicking anywhere on it opens the picker; a picked
 * file is reported through `onFileChange`.
 *
 * @summary Empty drop zone that opens the picker and reports the file
 */
export const Default: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText<HTMLInputElement>('W-9');
		const zone = getZone(canvasElement);

		await expect(input).toHaveAttribute('type', 'file');
		await expect(zone).toHaveAttribute('data-state', 'empty');
		await expect(canvas.getByText('Accepted formats: PDF')).toBeVisible();
		await expect(zone.getBoundingClientRect().height).toBe(200);

		const openPicker = spyOn(input, 'click').mockImplementation(() => {});
		await userEvent.click(zone);
		await expect(openPicker).toHaveBeenCalledOnce();
		openPicker.mockRestore();

		const file = pdf('w9.pdf', 'Form W-9');
		await userEvent.upload(input, file);

		await expect(args.onFileChange).toHaveBeenCalledWith(file);
	}
};

/**
 * Once the state holds the file, the box shows it: PDFs, plain text and
 * images in a frame as tall as the zone was, under a "Replace file" button
 * that opens the picker again. Focus moves to the button, since the input
 * leaves the tab order; `required` stops holding, since the file never
 * reaches the input; and a file dropped on the preview is swallowed instead of
 * opening in place of the page.
 *
 * @summary Picked file previewed, with Replace file
 */
export const PickedFile: Story = {
	args: {
		required: true
	},
	render: args => <ControlledFileDrop {...args} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByLabelText('W-9')).toBeRequired();

		// After the native picker closes, focus is back on the input it opened from.
		canvas.getByLabelText('W-9').focus();
		await userEvent.upload(canvas.getByLabelText('W-9'), pdf('w9.pdf', 'Form W-9'));

		const frame = await canvas.findByTitle('File preview');

		await expect(canvas.getByRole('button', { name: 'Replace file' })).toHaveFocus();

		await expect(frame.getAttribute('src')).toMatch(/^blob:/);
		await expect(getZone(canvasElement)).toHaveAttribute('data-state', 'filled');
		await expect(frame.getBoundingClientRect().height).toBe(200);

		const input = canvas.getByLabelText<HTMLInputElement>('W-9');
		const openPicker = spyOn(input, 'click').mockImplementation(() => {});

		await expect(input).toHaveAttribute('tabindex', '-1');
		await expect(input).not.toBeRequired();

		const stray = dragEvent('drop', pdf('other.pdf', 'Other'));
		getZone(canvasElement).dispatchEvent(stray);
		await expect(stray.defaultPrevented).toBe(true);

		await userEvent.click(canvas.getByRole('button', { name: 'Replace file' }));
		await expect(openPicker).toHaveBeenCalledOnce();
		openPicker.mockRestore();
	}
};

/**
 * A file stored earlier comes in as `value.url` and previews from that
 * address, so an edit form opens on the current document. `onFileRemove` adds
 * a "Remove" button beside "Replace file"; clearing the value there brings the
 * drop zone back, with focus on it. The input is emptied too, so the same file
 * can be picked again.
 *
 * @summary Stored file with a Remove button
 */
export const Removable: Story = {
	args: {
		value: { url: storedW9Url },
		onFileRemove: fn()
	},
	render: args => <ControlledFileDrop {...args} />,
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText<HTMLInputElement>('W-9');

		await expect(canvas.getByTitle('File preview')).toHaveAttribute('src', storedW9Url);

		await userEvent.click(canvas.getByRole('button', { name: 'Remove' }));

		await expect(args.onFileRemove).toHaveBeenCalledOnce();
		await expect(getZone(canvasElement)).toHaveAttribute('data-state', 'empty');
		await expect(input).toHaveFocus();

		await userEvent.upload(input, pdf('w9.pdf', 'Form W-9'));
		await userEvent.click(await canvas.findByRole('button', { name: 'Remove' }));

		await expect(getZone(canvasElement)).toHaveAttribute('data-state', 'empty');
		await expect(input).toHaveValue('');
	}
};

/**
 * `previewLoading` holds a placeholder while the stored file's `url` is on its
 * way (a signed URL fetched on demand, say), instead of "No preview
 * available". Until then the value carries only the file's `name`.
 *
 * @summary Placeholder while the stored file's URL loads
 */
export const PreviewLoading: Story = {
	args: {
		value: { name: 'w9-northside-insurance.pdf' },
		previewLoading: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('status', { name: 'Loading file preview' })).toBeVisible();
		await expect(canvas.queryByText('(No preview available)')).toBeNull();
	}
};

/**
 * `children` offer another way to supply the file, rendered in the empty zone
 * under an "or": here a menu of the files the agency already stored, as
 * producerflow's "Choose from agency" does. Their clicks are their own: they
 * never open the picker, and picking a file sets the value like a drop would.
 * `showAcceptedFormats={false}` drops the formats line.
 *
 * @summary Another way to supply the file inside the zone
 */
export const AlternativeSource: Story = {
	args: {
		showAcceptedFormats: false
	},
	render: function Render(args) {
		const [value, setValue] = useState<FileDropValue | null>(null);

		return (
			<FileDrop {...args} value={value} onFileRemove={() => setValue(null)}>
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
								onSelect={() => setValue({ url: storedW9Url, name: 'w9-northside-insurance.pdf' })}>
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
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const page = within(canvasElement.ownerDocument.body);
		const input = canvas.getByLabelText<HTMLInputElement>('W-9');
		const openPicker = spyOn(input, 'click').mockImplementation(() => {});

		await expect(canvas.getByText('or')).toBeVisible();
		await expect(canvas.queryByText(/Accepted formats/)).toBeNull();

		await userEvent.click(canvas.getByRole('button', { name: 'Choose from agency' }));
		await userEvent.click(await page.findByRole('menuitem', { name: 'W-9 · Northside Insurance' }));

		await expect(openPicker).not.toHaveBeenCalled();
		openPicker.mockRestore();

		await expect(await canvas.findByTitle('File preview')).toHaveAttribute('src', storedW9Url);
	}
};

/**
 * Wrapped in a `<label>` instead of named by one, a click on the zone still
 * opens the picker once: the zone cancels the label's own click on the input.
 *
 * @summary Inside a label, a click opens the picker once
 */
export const InsideLabel: Story = {
	// Runs as a test only: an edge case, not a state consumers need to see.
	tags: ['!dev', '!autodocs', '!manifest'],
	parameters: { label: false },
	render: args => (
		<Label className="flex-col flex-nowrap gap-2">
			W-9
			<FileDrop {...args} />
		</Label>
	),
	play: async ({ canvasElement }) => {
		const input = within(canvasElement).getByLabelText<HTMLInputElement>(/^W-9/);
		const opened = fn((event: Event) => event.preventDefault());

		input.addEventListener('click', opened);
		await userEvent.click(getZone(canvasElement).querySelector('svg')!.parentElement!);
		input.removeEventListener('click', opened);

		await expect(opened).toHaveBeenCalledOnce();
	}
};

/**
 * A file the frame cannot show (a spreadsheet, an empty file, an image over
 * 10 MB, or HTML and SVG, whose scripts would run in the app) keeps the box
 * with its name over a placeholder instead.
 *
 * @summary File without a preview shows its name and a placeholder
 */
export const WithoutPreview: Story = {
	args: {
		accept: '.csv',
		value: { file: csv() }
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('agencies.csv')).toBeVisible();
		await expect(canvas.getByText('(No preview available)')).toBeVisible();
		await expect(canvas.queryByTitle('File preview')).toBeNull();
	}
};

/**
 * A file known only by its `name`, copied from another record with neither
 * the `File` nor a URL to show, prints the name over the placeholder.
 *
 * @summary File known only by its name
 */
export const NameOnly: Story = {
	// Runs as a test only: it looks the same as WithoutPreview.
	tags: ['!dev', '!autodocs', '!manifest'],
	args: {
		value: { name: 'w9-northside-insurance.pdf' }
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(getZone(canvasElement)).toHaveAttribute('data-state', 'filled');
		await expect(canvas.getByText('w9-northside-insurance.pdf')).toBeVisible();
		await expect(canvas.getByText('(No preview available)')).toBeVisible();
	}
};

/**
 * Dragging over the zone tints it by whether `accept` allows the file, and
 * leaving clears the tint; a dragged link or text gets none. Mid-drag the
 * browser gives only the MIME type, so an `accept` made of extensions shows
 * the rejected tint until the drop. The drop itself is checked against
 * `accept` like a pick: a match goes to `onFileChange`, anything else to
 * `onFileReject`, since the picker filters by `accept` and a drop does not.
 *
 * @summary Drag tint and dropped files checked against accept
 */
export const DragAndDrop: Story = {
	// Runs as a test only: at rest it looks the same as Default.
	tags: ['!dev', '!autodocs', '!manifest'],
	play: async ({ args, canvasElement }) => {
		const zone = getZone(canvasElement);
		const link = new DataTransfer();
		const accepted = pdf('w9.pdf', 'Form W-9');
		const rejected = csv();

		link.setData('text/uri-list', 'https://www.irs.gov/forms-pubs/about-form-w-9');
		zone.dispatchEvent(new DragEvent('dragenter', { bubbles: true, dataTransfer: link }));
		await expect(zone).not.toHaveAttribute('data-dragging');

		zone.dispatchEvent(dragEvent('dragenter', accepted));
		await waitFor(() => expect(zone).toHaveAttribute('data-dragging', 'accept'));

		zone.dispatchEvent(dragEvent('dragleave'));
		await waitFor(() => expect(zone).not.toHaveAttribute('data-dragging'));

		zone.dispatchEvent(dragEvent('dragenter', rejected));
		await waitFor(() => expect(zone).toHaveAttribute('data-dragging', 'reject'));

		zone.dispatchEvent(dragEvent('drop', rejected));
		await waitFor(() => expect(args.onFileReject).toHaveBeenCalledWith(rejected));
		await expect(args.onFileChange).not.toHaveBeenCalled();

		zone.dispatchEvent(dragEvent('drop', accepted));
		await waitFor(() => expect(args.onFileChange).toHaveBeenCalledWith(accepted));
		await expect(zone).not.toHaveAttribute('data-dragging');
	}
};

/**
 * `aria-invalid` paints the zone in the destructive tone; point
 * `aria-describedby` at the message so it is read with the control. Here the
 * error comes from `onFileReject`.
 *
 * @summary Invalid zone with its error message
 */
export const Invalid: Story = {
	render: function Render(args) {
		const [error, setError] = useState('Upload the signed W-9.');

		return (
			<>
				<ControlledFileDrop
					{...args}
					aria-invalid={!!error}
					aria-describedby="w9-error"
					onFileReject={file => {
						setError(`${file.name} is not a PDF.`);
						args.onFileReject?.(file);
					}}
				/>
				{error && (
					<p id="w9-error" role="alert" className="text-sm text-text-input-destructive">
						{error}
					</p>
				)}
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('W-9');

		await expect(getZone(canvasElement)).toHaveAttribute('data-invalid');
		await expect(input).toHaveAccessibleDescription('Upload the signed W-9.');

		getZone(canvasElement).dispatchEvent(dragEvent('drop', csv()));

		await expect(await canvas.findByText('agencies.csv is not a PDF.')).toBeVisible();
	}
};

/**
 * `disabled` greys the zone out and disables the input: clicks open nothing
 * and drops are ignored.
 *
 * @summary Disabled zone that takes no file
 */
export const Disabled: Story = {
	args: {
		disabled: true
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText<HTMLInputElement>('W-9');
		const zone = getZone(canvasElement);
		const openPicker = spyOn(input, 'click').mockImplementation(() => {});

		await expect(input).toBeDisabled();
		await userEvent.click(zone);
		await expect(openPicker).not.toHaveBeenCalled();
		openPicker.mockRestore();

		zone.dispatchEvent(dragEvent('drop', pdf('w9.pdf', 'Form W-9')));
		await expect(args.onFileChange).not.toHaveBeenCalled();
	}
};

/**
 * `readOnly` shows the file with no "Replace file" button, and neither the
 * label nor a drop changes it: a document to look at, not to edit.
 *
 * @summary Read-only preview without Replace file
 */
export const ReadOnly: Story = {
	args: {
		readOnly: true,
		value: { url: storedW9Url }
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByTitle('File preview')).toHaveAttribute('src', storedW9Url);
		await expect(canvas.queryByRole('button', { name: 'Replace file' })).toBeNull();
	}
};

/**
 * Read-only with no file renders nothing: there is no document to look at and
 * none can be added.
 *
 * @summary Read-only without a file renders nothing
 */
export const ReadOnlyEmpty: Story = {
	// Runs as a test only: it renders nothing to look at.
	tags: ['!dev', '!autodocs', '!manifest'],
	args: {
		readOnly: true
	},
	play: async ({ canvasElement }) => {
		await expect(getZone(canvasElement)).toBeNull();
	}
};

/**
 * `className` lands on the box, so setting `--file-drop-min-height` there
 * resizes the zone and the preview alike, here to 300px for a longer document.
 *
 * @summary Taller zone through className
 */
export const CustomHeight: Story = {
	args: {
		className: '[--file-drop-min-height:18.75rem]'
	},
	render: args => <ControlledFileDrop {...args} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(getZone(canvasElement).getBoundingClientRect().height).toBe(300);

		await userEvent.upload(canvas.getByLabelText('W-9'), pdf('w9.pdf', 'Form W-9'));

		await expect((await canvas.findByTitle('File preview')).getBoundingClientRect().height).toBe(
			300
		);
	}
};
