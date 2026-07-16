import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { FileDrop, FileDropFile, FileDropRejection } from './file-drop';

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

type DemoProps = {
	multiple?: boolean;
	accept?: string;
	maxSize?: number;
	maxFiles?: number;
};

const Demo = ({ multiple, accept, maxSize, maxFiles }: DemoProps) => {
	const [files, setFiles] = useState<FileDropFile[]>([]);
	const [rejected, setRejected] = useState<FileDropRejection[]>([]);

	return (
		<div style={{ maxWidth: '28rem' }}>
			<FileDrop
				value={files}
				onValueChange={setFiles}
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
				<FileDrop.List>
					{files.map(file => (
						<FileDrop.Item key={file.name} file={file}>
							<FileDrop.Preview file={file} />
							<span>{file.name}</span>
							<FileDrop.Remove aria-label={`Remove ${file.name}`}>✕</FileDrop.Remove>
						</FileDrop.Item>
					))}
				</FileDrop.List>
			</FileDrop>
			{rejected.length > 0 && (
				<p role="alert">Rejected: {rejected.map(r => `${r.file.name} (${r.reason})`).join(', ')}</p>
			)}
		</div>
	);
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

const imageFile = (name: string, bytes = 8) =>
	new File([new Uint8Array(bytes)], name, { type: 'image/png' });

/**
 * Single-file picker. Selecting a file replaces the current one and shows it in
 * the list with a thumbnail and a remove button.
 *
 * @summary Default single-file drop zone
 */
export const Default: Story = {
	render: () => <Demo accept="image/*" />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Upload file');

		await userEvent.upload(input, imageFile('logo.png'));

		expect(await canvas.findByText('logo.png')).toBeInTheDocument();
		expect(canvas.getByRole('button', { name: 'Remove logo.png' })).toBeInTheDocument();
	}
};

/**
 * With `multiple`, selected files accumulate in the list instead of replacing
 * each other.
 *
 * @summary Multiple-file selection
 */
export const Multiple: Story = {
	render: () => <Demo multiple accept="image/*" />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Upload file');

		await userEvent.upload(input, [imageFile('a.png'), imageFile('b.png')]);

		expect(await canvas.findByText('a.png')).toBeInTheDocument();
		expect(canvas.getByText('b.png')).toBeInTheDocument();
	}
};

/**
 * Files over `maxSize` are rejected and reported through `onReject` rather than
 * added to the value.
 *
 * @summary Rejecting a file that exceeds maxSize
 */
export const Rejects: Story = {
	render: () => <Demo accept="image/*" maxSize={4} />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Upload file');

		await userEvent.upload(input, imageFile('too-big.png', 64));

		const alert = await canvas.findByRole('alert');
		expect(alert).toHaveTextContent(/too-big\.png \(size\)/);
		expect(canvas.queryByRole('button', { name: /remove/i })).not.toBeInTheDocument();
	}
};
