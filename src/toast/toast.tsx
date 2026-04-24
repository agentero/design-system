'use client';

import { ReactNode } from 'react';

import { Toaster, toast as sonnerToast } from 'sonner';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '../../lib';
import { Button } from '../button';
import {
	IconCheckCircle,
	IconCloseSmall,
	IconErrorOutline,
	IconInfoFilled,
	IconWarning
} from './icons';

/**
 * Style recipe for Toast using tailwind-variants. Multi-slot recipe whose
 * variants (`layout`, `type`) drive the two layout treatments (`inline`,
 * `expanded`) across the five semantic toast types. Compound variants paint
 * the colored left rail that distinguishes the expanded layout per type.
 *
 * Exported for advanced composition (e.g., styling a custom element to match
 * a Toast slot). Prefer rendering the `Toast` provider + calling `toast()`.
 *
 * @summary tailwind-variants recipe backing the Toast component styles
 */
export const toastRecipe = tv({
	slots: {
		root: 'w-full flex items-start border border-border-default-base-primary bg-white text-text-default-base-primary shadow-xs',
		iconWrapper: 'shrink-0',
		icon: 'size-6 [&_svg]:size-6 [&_path]:fill-current',
		contentWrapper: 'flex flex-1 min-w-0',
		leading: 'flex flex-1 min-w-0 text-sm leading-normal',
		title: 'font-semibold text-text-default-base-primary shrink-0',
		description: 'font-normal text-text-default-base-tertiary',
		trailing: 'flex items-center gap-2',
		actionBtn: 'min-w-0 shadow-xs'
	},
	variants: {
		layout: {
			inline: {
				root: 'rounded-lg p-2 gap-2 items-center',
				iconWrapper: 'pl-1',
				contentWrapper: 'flex-row items-center gap-0',
				leading: 'flex-col items-start gap-0',
				trailing: 'pl-2'
			},
			expanded: {
				root: 'rounded-md p-4 gap-1 [background-size:0.375rem_100%] bg-left bg-no-repeat',
				iconWrapper: '-mt-px',
				contentWrapper: 'flex-col items-start gap-3',
				leading: 'flex-col items-start gap-0 px-2',
				trailing: 'px-2'
			}
		},
		type: {
			neutral: { icon: 'text-icon-default-base-secondary' },
			success: { icon: 'text-icon-default-positive-primary' },
			error: { icon: 'text-icon-default-danger-primary' },
			warning: { icon: 'text-icon-default-warning-primary' },
			info: { icon: 'text-icon-default-info-primary' }
		}
	},
	compoundVariants: [
		{
			layout: 'expanded',
			type: 'neutral',
			class: { root: 'bg-[linear-gradient(var(--color-rail-neutral),var(--color-rail-neutral))]' }
		},
		{
			layout: 'expanded',
			type: 'success',
			class: { root: 'bg-[linear-gradient(var(--color-rail-success),var(--color-rail-success))]' }
		},
		{
			layout: 'expanded',
			type: 'error',
			class: { root: 'bg-[linear-gradient(var(--color-rail-danger),var(--color-rail-danger))]' }
		},
		{
			layout: 'expanded',
			type: 'warning',
			class: { root: 'bg-[linear-gradient(var(--color-rail-warning),var(--color-rail-warning))]' }
		},
		{
			layout: 'expanded',
			type: 'info',
			class: { root: 'bg-[linear-gradient(var(--color-rail-info),var(--color-rail-info))]' }
		}
	],
	defaultVariants: { layout: 'inline', type: 'neutral' }
});

type ToastVariants = VariantProps<typeof toastRecipe>;

/**
 * Semantic type of a toast notification. Drives the built-in icon and the
 * color applied to the expanded-layout left rail.
 *
 * @summary Toast semantic type union (`neutral`, `success`, `error`, `warning`, `info`)
 */
export type ToastType = NonNullable<ToastVariants['type']>;

/** Structured action with a label and click handler, rendered as a secondary Button. */
type ToastActionObject = { label: ReactNode; onClick: () => void };

/**
 * Trailing action rendered next to the title. Pass `{ label, onClick }` for
 * the built-in secondary Button, or any ReactNode to render a custom control.
 *
 * @summary Toast action — structured object or raw ReactNode
 */
export type ToastAction = ToastActionObject | ReactNode;

const isActionObject = (action: ToastAction): action is ToastActionObject =>
	action !== null && typeof action === 'object' && 'onClick' in action;

const iconMap: Record<ToastType, ReactNode> = {
	neutral: <IconInfoFilled />,
	success: <IconCheckCircle />,
	info: <IconInfoFilled />,
	warning: <IconWarning />,
	error: <IconErrorOutline />
};

type ToastContentProps = {
	id: string | number;
	title?: ReactNode;
	type?: ToastType;
	variant?: 'inline' | 'expanded';
	icon?: ReactNode;
	description?: ReactNode;
	action?: ToastAction;
	cancel?: { label: ReactNode; onClick: () => void };
	className?: string;
	dismissible?: boolean;
};

const ToastContent = ({
	id,
	title,
	type = 'neutral',
	variant = 'inline',
	icon,
	description,
	action,
	cancel,
	className,
	dismissible = true
}: ToastContentProps) => {
	const styles = toastRecipe({ layout: variant, type });

	return (
		<div data-slot="toast" className={cn(styles.root(), className)}>
			<div className={styles.iconWrapper()}>
				<span className={styles.icon()}>{icon ?? iconMap[type]}</span>
			</div>

			<div className={styles.contentWrapper()}>
				<div className={styles.leading()}>
					{title && <h2 className={styles.title()}>{title}</h2>}
					{description && <p className={styles.description()}>{description}</p>}
				</div>
				{(action || cancel) && (
					<div className={styles.trailing()}>
						{action &&
							(isActionObject(action) ? (
								<Button
									variant="secondary"
									className={styles.actionBtn()}
									onClick={() => {
										action.onClick();
										sonnerToast.dismiss(id);
									}}>
									{action.label}
								</Button>
							) : (
								action
							))}
						{cancel && (
							<Button
								variant="ghost"
								onClick={() => {
									cancel.onClick();
									sonnerToast.dismiss(id);
								}}>
								{cancel.label}
							</Button>
						)}
					</div>
				)}
			</div>
			{dismissible && (
				<Button onClick={() => sonnerToast.dismiss(id)} aria-label="Close" variant="ghost" iconOnly>
					<IconCloseSmall />
				</Button>
			)}
		</div>
	);
};

/**
 * Options passed to {@link toast} and its typed helpers. Controls the toast's
 * content, layout, trailing actions, auto-dismiss duration, and id.
 *
 * @summary Options for the imperative `toast()` API
 */
export type ToastOptions = {
	/** Optional secondary text shown below the title. */
	description?: ReactNode;
	/**
	 * Layout variant. Defaults to `'inline'`.
	 * - `'inline'` — compact single-line layout.
	 * - `'expanded'` — multi-line layout with a colored left rail.
	 */
	variant?: 'inline' | 'expanded';
	/** Custom icon that overrides the default type-based icon. */
	icon?: ReactNode;
	/**
	 * Optional primary action rendered in the trailing area. Pass
	 * `{ label, onClick }` for the built-in secondary Button, or any ReactNode
	 * for a custom control.
	 */
	action?: ToastAction;
	/** Optional cancel button rendered alongside `action`. */
	cancel?: { label: ReactNode; onClick: () => void };
	/** Auto-dismiss duration in milliseconds. Overrides the `Toast` provider default. */
	duration?: number;
	/** Explicit toast id — useful for deduplication or programmatic dismissal via `toast.dismiss(id)`. */
	id?: string | number;
	/** Additional className merged onto the root element. Escape hatch — prefer `variant` and `type` for style decisions. */
	className?: string;
	/** Whether to show the dismiss (close) button. Defaults to `true`. */
	dismissible?: boolean;
};

const createToast = (title: ReactNode, type?: ToastType, options?: ToastOptions) => {
	const { duration, id, className, ...contentProps } = options ?? {};
	const data: Parameters<typeof sonnerToast.custom>[1] = {};
	if (duration !== undefined) data.duration = duration;
	if (id !== undefined) data.id = id;
	return sonnerToast.custom(
		toastId => (
			<ToastContent
				id={toastId}
				title={title}
				type={type}
				className={className}
				{...contentProps}
			/>
		),
		data
	);
};

/**
 * Imperative API for showing toast notifications. Calling `toast(title)`
 * fires a neutral toast; the typed helpers (`toast.success`, `toast.error`,
 * `toast.warning`, `toast.info`) apply the matching semantic icon and color.
 *
 * `toast.dismiss(id?)` dismisses a specific toast (or all of them when called
 * without an id); `toast.loading` + `toast.promise` wire to sonner's async
 * helpers; `toast.custom` is an escape hatch for fully-custom render output —
 * reach for the typed helpers first.
 *
 * Requires a `<Toast />` provider mounted somewhere in the React tree.
 *
 * @summary Imperative `toast()` with typed semantic helpers and async utilities
 *
 * @example
 * toast('Something happened');
 *
 * @example
 * toast.success('Policy saved');
 * toast.error('Save failed');
 * toast.warning('License expiring soon');
 * toast.info('Sync in progress');
 *
 * @example
 * toast.error('Upload failed', {
 *   variant: 'expanded',
 *   description: 'The file could not be processed.',
 *   action: { label: 'Retry', onClick: retry }
 * });
 *
 * @example
 * const id = toast.info('Uploading...');
 * toast.dismiss(id);
 *
 * @example
 * toast.promise(saveDocument(), {
 *   loading: 'Saving...',
 *   success: 'Saved',
 *   error: 'Save failed'
 * });
 */
type TypedToastFn = (title: ReactNode, options?: ToastOptions) => string | number;

type ToastApi = TypedToastFn & {
	success: TypedToastFn;
	error: TypedToastFn;
	warning: TypedToastFn;
	info: TypedToastFn;
	dismiss: typeof sonnerToast.dismiss;
	custom: typeof sonnerToast.custom;
	loading: typeof sonnerToast.loading;
	promise: typeof sonnerToast.promise;
};

export const toast: ToastApi = Object.assign(
	(title: ReactNode, options?: ToastOptions) => createToast(title, undefined, options),
	{
		success: (title: ReactNode, options?: ToastOptions) => createToast(title, 'success', options),
		error: (title: ReactNode, options?: ToastOptions) => createToast(title, 'error', options),
		warning: (title: ReactNode, options?: ToastOptions) => createToast(title, 'warning', options),
		info: (title: ReactNode, options?: ToastOptions) => createToast(title, 'info', options),
		dismiss: sonnerToast.dismiss,
		custom: sonnerToast.custom,
		loading: sonnerToast.loading,
		promise: sonnerToast.promise
	}
);

/**
 * Placement of the Toaster on the screen. Mirrors sonner's `position` prop.
 *
 * @summary Toaster screen position union
 */
export type ToastPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

/**
 * Props for the `Toast` provider. Exposes the sonner `Toaster` configuration
 * surface the design system documents directly (`position`, `duration`,
 * `className`, `dir`, `gap`, `offset`, `expand`, `visibleToasts`, `hotkey`,
 * `richColors`, `invert`). Any additional props are forwarded to sonner via
 * the underlying `<Toaster>` component.
 *
 * @summary Props accepted by the Toast provider
 */
export type ToastProps = {
	/** Placement of the toaster on the screen. Defaults to `'bottom-right'`. */
	position?: ToastPosition;
	/** Default auto-dismiss duration in ms for toasts fired against this provider. Defaults to `5000`. */
	duration?: number;
	/** Text direction. Sonner forwards this to the rendered toaster root. */
	dir?: 'auto' | 'ltr' | 'rtl';
	/** Gap between stacked toasts, in pixels. */
	gap?: number;
	/** Offset from the screen edge, in pixels or as a CSS length. */
	offset?: string | number;
	/** When `true`, stack expands on hover instead of auto-collapsing. */
	expand?: boolean;
	/** Maximum number of toasts rendered at once before earlier ones dismiss. */
	visibleToasts?: number;
	/** Keyboard shortcut used to focus the toaster. */
	hotkey?: string[];
	/** When `true`, sonner paints colored backgrounds per type (DS uses its own icon tokens by default). */
	richColors?: boolean;
	/** When `true`, flips light/dark theme on the toaster root. */
	invert?: boolean;
	/** Additional className merged onto the sonner `<Toaster>` root. */
	className?: string;
};

/**
 * Toast provider. Renders the sonner `<Toaster />` configured for the
 * {@link toast} imperative API. Mount it once near the root of your React
 * tree (below any context providers that the toasts need, and above the
 * rest of the app) so every call to `toast()` from anywhere in the tree
 * renders into the same surface.
 *
 * Defaults: `position='bottom-right'`, `duration=5000`. The Toaster is sized
 * to `33.875rem` (`[--width:33.875rem]`) and each list item stretches to that
 * width (`[&>li]:w-full`) so the DS Toast fills the Toaster row rather than
 * sonner's 356px default. The provider disables sonner's built-in close
 * button (`closeButton={false}`) — dismissal is rendered inside each Toast
 * by the DS component itself.
 *
 * Do **not** use Toast for persistent feedback — mount an `Alert` with
 * `color="success|danger"` instead. Do **not** use Toast for form
 * validation errors — render those inline with the form field.
 *
 * @summary Toast provider; mount once near the app root
 *
 * @example
 * <Toast />
 *
 * @example
 * <Toast position="top-center" duration={4000} />
 */
export const Toast = ({
	position = 'bottom-right',
	duration = 5000,
	className,
	...props
}: ToastProps) => (
	<Toaster
		{...props}
		position={position}
		duration={duration}
		closeButton={false}
		className={cn('[--width:23.75rem]! [&>li]:w-full', className)}
	/>
);
