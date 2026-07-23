import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Alert } from '../alert';
import { Button } from '../button';
import { FileDrop, FileDropFile, FileDropRejection, FileDropRejectionReason } from './file-drop';

const UploadIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path
			d="M12 15V4m0 0L8 8m4-4 4 4M5 17v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const CloseIcon = () => (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
		<path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
	</svg>
);

type DemoProps = {
	multiple?: boolean;
	accept?: string;
	maxSize?: number;
	maxFiles?: number;
};

const Demo = ({ multiple, accept, maxSize, maxFiles }: DemoProps) => {
	const [files, setFiles] = useState<FileDropFile[]>([]);
	const [rejected, setRejected] = useState<FileDropRejection[]>([]);

	const onValueChange = (next: FileDropFile[]) => {
		setFiles(next);
		setRejected([]);
	};

	return (
		<div className="max-w-md">
			<FileDrop
				value={files}
				onValueChange={onValueChange}
				multiple={multiple}
				accept={accept}
				maxSize={maxSize}
				maxFiles={maxFiles}
				onReject={setRejected}>
				<FileDrop.Zone>
					<UploadIcon />
					<p>
						Drag &amp; drop or <FileDrop.Trigger>browse</FileDrop.Trigger>
					</p>
					<FileDrop.Input aria-label="Upload file" />
				</FileDrop.Zone>
				{files.length > 0 && (
					<FileDrop.List>
						{files.map((file, index) => (
							<FileDrop.Item key={index}>
								<FileDrop.Preview file={file} />
								<span className="min-w-0 flex-1 truncate text-sm">{file.name}</span>
								<FileDrop.Remove file={file} aria-label={`Remove ${file.name}`}>
									<CloseIcon />
								</FileDrop.Remove>
							</FileDrop.Item>
						))}
					</FileDrop.List>
				)}
			</FileDrop>
			{rejected.length > 0 && (
				<Alert color="danger" ghost className="mt-2">
					<Alert.Content>
						{rejected.map(({ file, reason }, index) => (
							<Alert.Paragraph key={index}>
								{file.name} {rejectionMessage[reason]}
							</Alert.Paragraph>
						))}
					</Alert.Content>
				</Alert>
			)}
		</div>
	);
};

const rejectionMessage: Record<FileDropRejectionReason, string> = {
	type: "isn't an accepted file type",
	size: 'is too large',
	count: 'exceeds the file limit'
};

/**
 * FileDrop is a composable drag-and-drop file picker. Compose the drop zone,
 * trigger, hidden input, and the selected-file list from its sub-components;
 * it stays controlled and form-agnostic.
 */
const meta = {
	title: 'Components/FileDrop',
	component: FileDrop,
	tags: ['autodocs'],
	args: { value: [], onValueChange: () => {} }
} satisfies Meta<typeof FileDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

// real minimal assets so previews render instead of erroring
const SAMPLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#818cf8"/><circle cx="56" cy="24" r="14" fill="#c7d2fe"/><path d="M0 62l24-18 20 14 16-10 20 14v18H0z" fill="#4f46e5"/></svg>`;

const imageFile = (name: string) => new File([SAMPLE_SVG], name, { type: 'image/svg+xml' });

const SAMPLE_PDF = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 42 >>
stream
BT /F1 24 Tf 72 720 Td (Sample PDF) Tj ET
endstream
endobj
trailer
<< /Root 1 0 R >>`;

const pdfFile = (name: string) => new File([SAMPLE_PDF], name, { type: 'application/pdf' });

const useDocumentUrl = (file: FileDropFile | undefined) => {
	const [objectUrl, setObjectUrl] = useState<string>();

	useEffect(() => {
		if (!file || 'url' in file) {
			setObjectUrl(undefined);
			return;
		}
		const url = URL.createObjectURL(file);
		setObjectUrl(url);
		return () => URL.revokeObjectURL(url);
	}, [file]);

	return file && 'url' in file ? file.url : objectUrl;
};

// The rich preview (filename header + "Replace file" + iframe) is composed in
// the consumer — the DS primitive stays lean. This reproduces the legacy look.
const DocumentDemo = () => {
	const [files, setFiles] = useState<FileDropFile[]>([]);
	const [file] = files;
	const url = useDocumentUrl(file);
	// view=FitH fits the page to the iframe width. Chrome's PDF toolbar is viewer-internal
	// UI with a ~34rem min width — keep the preview at least that wide or it scrolls.
	const src = url ? `${url}#toolbar=1&navpanes=0&view=FitH` : undefined;

	return (
		<div className="max-w-2xl">
			<FileDrop value={files} onValueChange={setFiles} accept="application/pdf,image/*">
				<FileDrop.Input aria-label="Upload document" />
				{file ? (
					<div className="overflow-hidden rounded-md border border-border-default-base-primary">
						<div className="flex items-center justify-between gap-4 border-b border-border-default-base-primary px-4 py-3">
							<span className="truncate text-sm text-text-default-base-secondary">{file.name}</span>
							<FileDrop.Trigger asChild>
								<Button variant="secondary" size="sm">
									Replace file
								</Button>
							</FileDrop.Trigger>
						</div>
						<iframe title={file.name} src={src} className="block h-100 w-full border-0" />
					</div>
				) : (
					<FileDrop.Zone>
						<UploadIcon />
						<p>
							Drag &amp; drop or <FileDrop.Trigger>browse</FileDrop.Trigger>
						</p>
					</FileDrop.Zone>
				)}
			</FileDrop>
		</div>
	);
};

/** @summary Empty drop zone — the initial state before any file is selected */
export const Default: Story = {
	render: () => <Demo accept="image/*" />,
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);

		expect(canvas.getByText(/drag & drop/i)).toBeInTheDocument();
		expect(canvas.getByRole('button', { name: 'browse' })).toBeInTheDocument();
		expect(canvas.getByLabelText('Upload file')).toBeInTheDocument();
	}
};

/** @summary Single-file upload — selecting replaces the current file */
export const Uploaded: Story = {
	render: () => <Demo accept="image/*" />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Upload file');

		await userEvent.upload(input, imageFile('logo.svg'));
		expect(await canvas.findByText('logo.svg')).toBeInTheDocument();
		expect(canvas.getByRole('button', { name: 'Remove logo.svg' })).toBeInTheDocument();

		await userEvent.upload(input, imageFile('replacement.svg'));
		expect(await canvas.findByText('replacement.svg')).toBeInTheDocument();
		expect(canvas.queryByText('logo.svg')).not.toBeInTheDocument();
	}
};

/** @summary Multiple-file selection (files accumulate across selections) */
export const Multiple: Story = {
	render: () => <Demo multiple accept="image/*" />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Upload file');

		await userEvent.upload(input, [imageFile('a.svg'), imageFile('b.svg')]);
		await userEvent.upload(input, imageFile('c.svg'));

		expect(await canvas.findByText('c.svg')).toBeInTheDocument();
		expect(canvas.getByText('a.svg')).toBeInTheDocument();
		expect(canvas.getByText('b.svg')).toBeInTheDocument();
	}
};

/** @summary Files over `maxSize` or outside `accept` are rejected and reported through `onReject` */
export const Rejects: Story = {
	render: () => <Demo accept="image/*" maxSize={100} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Upload file');

		await userEvent.upload(input, imageFile('too-big.svg'));
		expect(await canvas.findByRole('alert')).toHaveTextContent(/too-big\.svg is too large/i);

		const user = userEvent.setup({ applyAccept: false });
		await user.upload(input, pdfFile('report.pdf'));
		expect(await canvas.findByRole('alert')).toHaveTextContent(
			/report\.pdf isn't an accepted file type/i
		);
		expect(canvas.queryByRole('button', { name: /remove/i })).not.toBeInTheDocument();
	}
};

/** @summary Invalid and disabled zone states */
export const States: Story = {
	render: () => (
		<div className="flex max-w-md flex-col gap-4">
			<FileDrop value={[]} onValueChange={() => {}} invalid>
				<FileDrop.Zone>
					<p>Invalid</p>
					<FileDrop.Input aria-label="Invalid upload" />
				</FileDrop.Zone>
			</FileDrop>
			<FileDrop value={[]} onValueChange={() => {}} disabled>
				<FileDrop.Zone>
					<p>Disabled</p>
					<FileDrop.Input aria-label="Disabled upload" />
				</FileDrop.Zone>
			</FileDrop>
		</div>
	),
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);

		expect(canvas.getByText('Invalid').closest('[data-slot="file-drop-zone"]')).toHaveAttribute(
			'data-invalid'
		);
		expect(canvas.getByText('Disabled').closest('[data-slot="file-drop-zone"]')).toHaveAttribute(
			'data-disabled'
		);
		expect(canvas.getByLabelText('Invalid upload')).toHaveAttribute('aria-invalid', 'true');
	}
};

/** @summary Empty document drop zone — the initial state of the PDF upload */
export const DocumentEmpty: Story = {
	render: () => <DocumentDemo />,
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement);

		expect(canvas.getByText(/drag & drop/i)).toBeInTheDocument();
		expect(canvas.getByRole('button', { name: 'browse' })).toBeInTheDocument();
		expect(canvas.getByLabelText('Upload document')).toBeInTheDocument();
	}
};

/** @summary Document upload with the legacy-style preview (header + Replace file + iframe) composed in the consumer */
export const Document: Story = {
	render: () => <DocumentDemo />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Upload document');

		await userEvent.upload(input, pdfFile('policy.pdf'));

		const frame = await canvas.findByTitle('policy.pdf');
		expect(frame.tagName).toBe('IFRAME');
	}
};
