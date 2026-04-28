import type { Meta, StoryObj } from '@storybook/react-vite';
import { RefreshCwIcon } from 'lucide-react';

import { iconStyles } from '../../lib';
import { Button } from '../button';
import { Toast, toast } from './toast';

/**
 * Toast renders transient feedback about an outcome — saved, failed, warning,
 * info — without interrupting the user's flow. Mount `<Toast />` once near
 * the app root to register the provider, then call the imperative `toast()`
 * API from anywhere in the tree. Five semantic types (`neutral`, `success`,
 * `error`, `warning`, `info`) × two layouts (`inline`, `expanded`) cover the
 * common feedback patterns.
 */
const meta = {
	title: 'Components/Toast',
	component: Toast,
	tags: ['autodocs'],
	argTypes: {
		position: {
			control: 'select',
			options: [
				'top-left',
				'top-center',
				'top-right',
				'bottom-left',
				'bottom-center',
				'bottom-right'
			]
		},
		duration: { control: { type: 'number', min: 1000, step: 500 } },
		dir: { control: 'inline-radio', options: ['auto', 'ltr', 'rtl'] },
		gap: { control: { type: 'number', min: 0, step: 2 } },
		offset: { control: 'text' },
		expand: { control: 'boolean' },
		visibleToasts: { control: { type: 'number', min: 1, step: 1 } },
		richColors: { control: 'boolean' },
		invert: { control: 'boolean' },
		hotkey: { table: { disable: true } },
		className: { table: { disable: true } }
	},
	args: {
		position: 'bottom-right',
		duration: 5000
	},
	parameters: {
		docs: {
			story: { inline: false, iframeHeight: 240 }
		}
	},
	decorators: [
		(Story, { args }) => (
			<>
				<Story />
				<Toast {...args} />
			</>
		)
	]
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Args-controlled playground. Click the button to fire a neutral toast; tweak
 * `position` and `duration` from the Controls panel to preview the provider
 * defaults.
 *
 * @summary Default playground for the Toast provider
 */
export const Default: Story = {
	parameters: {
		docs: { story: { inline: true } }
	},
	render: () => (
		<div style={{ minHeight: '240px' }}>
			<Button variant="secondary" onClick={() => toast('Hello from Toast')}>
				Show toast
			</Button>
		</div>
	)
};

/* --------------- Layouts --------------- */

/**
 * Inline layout (default). Compact treatment — title with an optional
 * description stacked directly below it. The `type` drives the icon color.
 * Use for short acknowledgments that don't need a colored rail.
 *
 * @summary Inline layout across all five semantic types
 */
export const Inline: Story = {
	render: () => (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
			<Button
				variant="secondary"
				onClick={() => toast('Something happened', { description: 'Additional context.' })}>
				Neutral
			</Button>
			<Button
				variant="secondary"
				onClick={() => toast.success('Policy saved', { description: 'Your edits are live.' })}>
				Success
			</Button>
			<Button
				variant="secondary"
				onClick={() =>
					toast.error('Failed to save', { description: 'The file could not be processed.' })
				}>
				Error
			</Button>
			<Button
				variant="secondary"
				onClick={() =>
					toast.warning('License expiring soon', { description: 'Renew before end of month.' })
				}>
				Warning
			</Button>
			<Button
				variant="secondary"
				onClick={() =>
					toast.info('Sync in progress', { description: 'Please wait while we sync your data.' })
				}>
				Info
			</Button>
		</div>
	)
};

/**
 * Expanded layout. Multi-line treatment with a 0.375rem colored left rail
 * that tracks the toast's `type`. Use for feedback that benefits from a
 * description on its own line or a trailing action button.
 *
 * @summary Expanded layout across all five semantic types
 */
export const Expanded: Story = {
	render: () => (
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
			<Button
				variant="secondary"
				onClick={() =>
					toast('Something happened', {
						variant: 'expanded',
						description: 'Additional context for the user.'
					})
				}>
				Neutral
			</Button>
			<Button
				variant="secondary"
				onClick={() =>
					toast.success('Policy saved', {
						variant: 'expanded',
						description: 'Your changes have been saved successfully.'
					})
				}>
				Success
			</Button>
			<Button
				variant="secondary"
				onClick={() =>
					toast.error('Failed to save', {
						variant: 'expanded',
						description: 'The file could not be processed.'
					})
				}>
				Error
			</Button>
			<Button
				variant="secondary"
				onClick={() =>
					toast.warning('License expiring soon', {
						variant: 'expanded',
						description: 'Renew before the end of the month to avoid interruption.'
					})
				}>
				Warning
			</Button>
			<Button
				variant="secondary"
				onClick={() =>
					toast.info('Sync in progress', {
						variant: 'expanded',
						description: 'Please wait while we sync your data.'
					})
				}>
				Info
			</Button>
		</div>
	)
};

/* --------------- Actions --------------- */

/**
 * Toast with a structured `action` object. Passing `{ label, onClick }`
 * renders the built-in secondary Button; the handler runs and the toast
 * auto-dismisses afterward.
 *
 * @summary Toast with a structured action button
 */
export const WithActionObject: Story = {
	render: () => (
		<Button
			variant="secondary"
			onClick={() =>
				toast.error('Upload failed', {
					variant: 'expanded',
					description: 'The file could not be processed.',
					action: { label: 'Retry', onClick: () => {} }
				})
			}>
			Show toast with action
		</Button>
	)
};

/**
 * Toast with a raw-ReactNode `action`. Pass any JSX to render a custom
 * trailing control — a link, a pair of buttons, etc. — when the default
 * secondary Button doesn't fit.
 *
 * @summary Toast with a custom ReactNode action
 */
export const WithActionNode: Story = {
	render: () => (
		<Button
			variant="secondary"
			onClick={() =>
				toast('File uploaded', {
					description: 'document.pdf is ready.',
					action: (
						<Button variant="link" onClick={() => {}}>
							View file
						</Button>
					)
				})
			}>
			Show toast with link action
		</Button>
	)
};

/**
 * Toast with both `action` and `cancel`. Cancel renders as a ghost Button
 * next to the action; its handler runs and the toast auto-dismisses.
 *
 * @summary Toast with an action and a cancel control
 */
export const WithActionAndCancel: Story = {
	render: () => (
		<Button
			variant="secondary"
			onClick={() =>
				toast.success('Record archived', {
					variant: 'expanded',
					description: 'The record is hidden from the default view.',
					action: { label: 'Undo', onClick: () => {} },
					cancel: { label: 'Dismiss', onClick: () => {} }
				})
			}>
			Show toast with action + cancel
		</Button>
	)
};

/* --------------- Features --------------- */

/**
 * Non-dismissible toast. Setting `dismissible: false` hides the close button;
 * the toast still auto-dismisses when its `duration` elapses, or
 * programmatically via `toast.dismiss(id)`.
 *
 * @summary Non-dismissible toast (no close button)
 */
export const NonDismissible: Story = {
	render: () => (
		<Button
			variant="secondary"
			onClick={() =>
				toast.info('Sync in progress', {
					dismissible: false,
					description: 'Please wait while we sync your data.'
				})
			}>
			Show non-dismissible toast
		</Button>
	)
};

/**
 * Long-duration toast. `duration` (in ms) overrides the provider default so
 * long-running operations stay visible until they're relevant.
 *
 * @summary Toast with a custom `duration`
 */
export const LongDuration: Story = {
	render: () => (
		<Button
			variant="secondary"
			onClick={() =>
				toast.info('Uploading documents', {
					description: 'This may take a moment.',
					duration: 10_000
				})
			}>
			Show 10s toast
		</Button>
	)
};

/**
 * Programmatic dismissal. `toast()` returns the toast id, which you can pass
 * to `toast.dismiss(id)` to clear it before its duration elapses.
 *
 * @summary Dismiss a toast programmatically via its id
 */
export const ProgrammaticDismiss: Story = {
	render: () => {
		let toastId: string | number | undefined;
		return (
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				<Button
					variant="secondary"
					onClick={() => {
						toastId = toast.info('Uploading...', { duration: 60_000 });
					}}>
					Start
				</Button>
				<Button
					variant="ghost"
					onClick={() => {
						if (toastId !== undefined) toast.dismiss(toastId);
					}}>
					Dismiss
				</Button>
			</div>
		);
	}
};

/**
 * `toast.promise` wires a toast to an async operation — loading while the
 * promise is pending, success or error when it settles. Useful for
 * save/submit flows where the outcome feeds back into the same toast.
 *
 * @summary Wire a toast to an async operation via `toast.promise`
 */
export const WithPromise: Story = {
	render: () => {
		const fakeFetch = () =>
			new Promise<string>((resolve, reject) => {
				window.setTimeout(
					() => (Math.random() > 0.5 ? resolve('ok') : reject(new globalThis.Error('nope'))),
					1500
				);
			});
		return (
			<Button
				variant="secondary"
				onClick={() =>
					toast.promise(fakeFetch(), {
						loading: 'Saving document…',
						success: 'Document saved',
						error: 'Save failed'
					})
				}>
				Run promise
			</Button>
		);
	}
};

/**
 * Custom `icon` override. Pass any ReactNode as `icon` to replace the
 * type-based default — helpful when the toast reflects a domain-specific
 * action (e.g., a sync icon for a sync-in-progress toast).
 *
 * @summary Override the default type-based icon
 */
export const CustomIcon: Story = {
	render: () => (
		<Button
			variant="secondary"
			onClick={() =>
				toast.success('Sync started', {
					description: 'Data sync is in progress.',
					icon: <RefreshCwIcon className={iconStyles({ size: 'lg' })} />
				})
			}>
			Show toast with custom icon
		</Button>
	)
};
