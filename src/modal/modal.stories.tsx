import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '../button';
import { Modal } from './modal';

/**
 * Modal is a compound dialog built on Radix UI: `Root` owns the open state,
 * `Content` is the centered surface (`size` md/lg), and `Title`/`Body`/`Footer`
 * structure it. Close it with `Escape`, the overlay, the X button, or a
 * `Modal.Close asChild` around your own button.
 *
 * `Content` also takes `variant="alert"` for the modal the user has to answer:
 * it drops all three implicit ways out and is announced as an `alertdialog`.
 */
const meta = {
	title: 'Components/Modal',
	component: Modal.Root,
	tags: ['autodocs']
} satisfies Meta<typeof Modal.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Trigger-driven modal: open it, then dismiss with the footer's Cancel. */
export const Default: Story = {
	render: () => (
		<Modal.Root>
			<Modal.Trigger asChild>
				<Button variant="secondary">Delete carrier</Button>
			</Modal.Trigger>
			<Modal.Content>
				<Modal.Title>Delete carrier</Modal.Title>
				<Modal.Body>
					<p>This will remove the carrier from your agency. This action cannot be undone.</p>
				</Modal.Body>
				<Modal.Footer>
					<Modal.Close asChild>
						<Button variant="ghost">Cancel</Button>
					</Modal.Close>
					<Button variant="primary">Delete</Button>
				</Modal.Footer>
			</Modal.Content>
		</Modal.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await userEvent.click(canvas.getByRole('button', { name: /delete carrier/i }));

		const dialog = await body.findByRole('dialog', { name: /delete carrier/i });
		await waitFor(() => expect(dialog).toBeVisible());
		await expect(body.getByText(/cannot be undone/i)).toBeVisible();

		await userEvent.click(body.getByRole('button', { name: /cancel/i }));
		await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
	}
};

const ControlledExample = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button variant="secondary" onClick={() => setIsOpen(true)}>
				Open controlled
			</Button>
			<Modal.Root open={isOpen} onOpenChange={setIsOpen}>
				<Modal.Content>
					<Modal.Title>Controlled modal</Modal.Title>
					<Modal.Body>
						<p>The open state lives in the consumer.</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={() => setIsOpen(false)}>
							Done
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Root>
		</>
	);
};

/** Controlled with `open`/`onOpenChange` — the dominant pattern in both apps. Also closes on `Escape`. */
export const Controlled: Story = {
	render: () => <ControlledExample />,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await userEvent.click(canvas.getByRole('button', { name: /open controlled/i }));
		const dialog = await body.findByRole('dialog', { name: /controlled modal/i });
		await waitFor(() => expect(dialog).toBeVisible());

		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
	}
};

/** `size="lg"` widens the surface to 720px; `md` (default) is 540px. */
export const Large: Story = {
	render: () => (
		<Modal.Root>
			<Modal.Trigger asChild>
				<Button variant="secondary">Open large</Button>
			</Modal.Trigger>
			<Modal.Content size="lg">
				<Modal.Title>Large modal</Modal.Title>
				<Modal.Body>
					<p>Use `lg` for wide content like tables or side-by-side forms.</p>
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	)
};

/** Long content scrolls inside `Body` while title and footer stay pinned. */
export const ScrollableBody: Story = {
	render: () => (
		<Modal.Root>
			<Modal.Trigger asChild>
				<Button variant="secondary">Open scrollable</Button>
			</Modal.Trigger>
			<Modal.Content>
				<Modal.Title>Terms and conditions</Modal.Title>
				<Modal.Body>
					{Array.from({ length: 24 }, (_, i) => (
						<p key={i} className="mb-4">
							Section {i + 1}: agents shall maintain active licensure in every state where they
							transact business, and notify the marketplace of any change in appointment status.
						</p>
					))}
				</Modal.Body>
				<Modal.Footer>
					<Modal.Close asChild>
						<Button variant="primary">Accept</Button>
					</Modal.Close>
				</Modal.Footer>
			</Modal.Content>
		</Modal.Root>
	)
};

/**
 * `variant="alert"` for a decision the user cannot skip: `Escape` and overlay
 * clicks are ignored, `Modal.Title` renders no X button, and the surface is
 * announced as an `alertdialog`. Only the footer actions close it.
 */
export const Alert: Story = {
	render: () => (
		<Modal.Root>
			<Modal.Trigger asChild>
				<Button variant="secondary">Open alert</Button>
			</Modal.Trigger>
			<Modal.Content variant="alert">
				<Modal.Title>Complete your Docusign integration</Modal.Title>
				<Modal.Body>
					<p>To enable your integration, please authorize access to your Docusign account.</p>
				</Modal.Body>
				<Modal.Footer>
					<Modal.Close asChild>
						<Button variant="ghost">Not now</Button>
					</Modal.Close>
					<Button variant="primary">Authorize</Button>
				</Modal.Footer>
			</Modal.Content>
		</Modal.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const body = within(document.body);

		await userEvent.click(canvas.getByRole('button', { name: 'Open alert' }));

		const dialog = await body.findByRole('alertdialog', {
			name: 'Complete your Docusign integration'
		});
		await waitFor(() => expect(dialog).toBeVisible());

		await expect(body.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();

		await userEvent.keyboard('{Escape}');
		await expect(dialog).toBeVisible();

		await userEvent.click(document.querySelector('[data-slot="modal-overlay"]')!);
		await expect(dialog).toBeVisible();

		await userEvent.click(body.getByRole('button', { name: 'Not now' }));
		await waitFor(() => expect(body.queryByRole('alertdialog')).not.toBeInTheDocument());
	}
};
