'use client';

import {
	Children,
	ComponentProps,
	ComponentType,
	createContext,
	isValidElement,
	PropsWithChildren,
	ReactNode,
	use,
	useId
} from 'react';

import {
	CircleAlertIcon,
	CircleCheckIcon,
	InfoIcon,
	type LucideIcon,
	StarIcon,
	TriangleAlertIcon,
	XIcon
} from 'lucide-react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn, iconStyles } from '../../lib';
import { Button } from '../button';

/**
 * Style recipe for Alert using tailwind-variants. Exposes five slots
 * (`root`, `title`, `paragraph`, `content`, `icon`) and three variants
 * (`color`, `size`, `ghost`). Compound variants collapse the 8 colors ×
 * ghost boolean matrix into a single row per combination, so each slot's
 * color token is defined exactly once.
 *
 * Exported for advanced composition (e.g., styling a custom element to
 * match an Alert slot). Prefer rendering the `Alert` component directly.
 *
 * @summary tailwind-variants recipe backing the Alert component styles
 */
export const alertRecipe = tv({
	slots: {
		root: [
			'flex items-start rounded-md',
			'[&_[data-slot=alert-title]]:-mt-px',
			'[&_a]:text-current [&_a]:fill-current [&_a]:underline [&_a:hover]:no-underline'
		],
		title: 'font-semibold',
		paragraph: '',
		content: 'flex flex-col h-full self-start',
		icon: ''
	},
	variants: {
		color: {
			neutral: {},
			success: {},
			danger: {},
			warning: {},
			info: {},
			creative: {},
			dynamic: {},
			playful: {}
		},
		size: {
			sm: {
				root: 'px-4 py-3 gap-2',
				title: 'text-sm',
				paragraph: 'text-xs',
				content: 'gap-1'
			},
			md: {
				root: 'px-8 py-6 gap-4',
				title: 'text-lg',
				paragraph: 'text-sm',
				content: 'gap-2'
			}
		},
		ghost: {
			true: { root: 'bg-transparent p-0' },
			false: {}
		}
	},
	compoundVariants: [
		{
			ghost: false,
			color: 'neutral',
			class: {
				root: 'bg-bg-alert-primary-neutral text-text-alert-primary-neutral',
				icon: 'text-icon-alert-primary-neutral'
			}
		},
		{
			ghost: false,
			color: 'success',
			class: {
				root: 'bg-bg-alert-primary-success text-text-alert-primary-success',
				icon: 'text-icon-alert-primary-success'
			}
		},
		{
			ghost: false,
			color: 'danger',
			class: {
				root: 'bg-bg-alert-primary-danger text-text-alert-primary-danger',
				icon: 'text-icon-alert-primary-danger'
			}
		},
		{
			ghost: false,
			color: 'warning',
			class: {
				root: 'bg-bg-alert-primary-warning text-text-alert-primary-warning',
				icon: 'text-icon-alert-primary-warning'
			}
		},
		{
			ghost: false,
			color: 'info',
			class: {
				root: 'bg-bg-alert-primary-info text-text-alert-primary-info',
				icon: 'text-icon-alert-primary-info'
			}
		},
		{
			ghost: false,
			color: 'creative',
			class: {
				root: 'bg-bg-alert-primary-creative text-text-alert-primary-creative',
				icon: 'text-icon-alert-primary-creative'
			}
		},
		{
			ghost: false,
			color: 'dynamic',
			class: {
				root: 'bg-bg-alert-primary-dynamic text-text-alert-primary-dynamic',
				icon: 'text-icon-alert-primary-dynamic'
			}
		},
		{
			ghost: false,
			color: 'playful',
			class: {
				root: 'bg-bg-alert-primary-playful text-text-alert-primary-playful',
				icon: 'text-icon-alert-primary-playful'
			}
		},
		{
			ghost: true,
			color: 'neutral',
			class: {
				root: 'text-text-alert-ghost-neutral',
				icon: 'text-icon-alert-ghost-neutral'
			}
		},
		{
			ghost: true,
			color: 'success',
			class: {
				root: 'text-text-alert-ghost-success',
				icon: 'text-icon-alert-ghost-success'
			}
		},
		{
			ghost: true,
			color: 'danger',
			class: {
				root: 'text-text-alert-ghost-danger',
				icon: 'text-icon-alert-ghost-danger'
			}
		},
		{
			ghost: true,
			color: 'warning',
			class: {
				root: 'text-text-alert-ghost-warning',
				icon: 'text-icon-alert-ghost-warning'
			}
		},
		{
			ghost: true,
			color: 'info',
			class: {
				root: 'text-text-alert-ghost-info',
				icon: 'text-icon-alert-ghost-info'
			}
		},
		{
			ghost: true,
			color: 'creative',
			class: {
				root: 'text-text-alert-ghost-creative',
				icon: 'text-icon-alert-ghost-creative'
			}
		},
		{
			ghost: true,
			color: 'dynamic',
			class: {
				root: 'text-text-alert-ghost-dynamic',
				icon: 'text-icon-alert-ghost-dynamic'
			}
		},
		{
			ghost: true,
			color: 'playful',
			class: {
				root: 'text-text-alert-ghost-playful',
				icon: 'text-icon-alert-ghost-playful'
			}
		},
		{
			size: 'sm',
			class: {
				root: '[&:not(:has([data-slot=alert-title]))_[data-slot=alert-paragraph]:first-of-type]:mt-0.5'
			}
		},
		{
			size: 'md',
			class: {
				root: '[&:not(:has([data-slot=alert-title]))_[data-slot=alert-paragraph]:first-of-type]:mt-px'
			}
		}
	],
	defaultVariants: {
		color: 'neutral',
		size: 'sm',
		ghost: false
	}
});

type AlertVariants = VariantProps<typeof alertRecipe>;
type AlertSlotsStyles = ReturnType<typeof alertRecipe>;

/**
 * Supported alert color variants that drive background, text, and icon tokens.
 *
 * @summary Alert color union (`neutral`, `success`, `danger`, `warning`, `info`, `creative`, `dynamic`, `playful`)
 */
export type AlertColorType = NonNullable<AlertVariants['color']>;

/**
 * Supported alert sizes. `sm` is the default and compact treatment; `md` is
 * the more prominent variant with larger padding and typography.
 *
 * @summary Alert size union (`sm`, `md`)
 */
export type AlertSizeType = NonNullable<AlertVariants['size']>;

type AlertContextValue = {
	size: AlertSizeType;
	slotsStyles: AlertSlotsStyles;
	titleId: string;
	descId: string;
};

const AlertContext = createContext<AlertContextValue | null>(null);

/**
 * Returns the current Alert context including size, computed slot styles,
 * and the ids used for `aria-labelledby` (title) and `aria-describedby`
 * (paragraph wrapper). Must be called within an `Alert` component tree.
 *
 * @summary Access alert context for size, slot styles, and a11y ids
 */
export const useAlert = () => {
	const context = use(AlertContext);
	if (!context) {
		throw new Error('useAlert must be used within an Alert');
	}
	return context;
};

const iconMapping: {
	[key in AlertColorType]: LucideIcon;
} = {
	neutral: InfoIcon,
	success: CircleCheckIcon,
	danger: CircleAlertIcon,
	warning: TriangleAlertIcon,
	info: InfoIcon,
	creative: StarIcon,
	dynamic: InfoIcon,
	playful: InfoIcon
};

const mdIconClass = iconStyles({ size: 'md' });
const lgIconClass = iconStyles({ size: 'lg' });

const iconClassForAlertSize: Record<AlertSizeType, string> = {
	sm: mdIconClass,
	md: lgIconClass
};

/* --------------- Sub-components --------------- */

/**
 * Renders a styled heading inside an Alert. The element inherits size from
 * the parent Alert and its id is wired to the root's `aria-labelledby`
 * so assistive tech announces the title as the accessible name.
 *
 * @summary Alert heading; supplies the accessible name via `aria-labelledby`
 *
 * @example
 * <Alert color="success">
 *   <Alert.Content>
 *     <Alert.Title>Saved</Alert.Title>
 *   </Alert.Content>
 * </Alert>
 */
const AlertTitle = ({ className, children, ...props }: ComponentProps<'h3'>) => {
	const { slotsStyles, titleId } = useAlert();
	return (
		<h3
			id={titleId}
			data-slot="alert-title"
			{...props}
			className={cn(slotsStyles.title(), className)}>
			{children}
		</h3>
	);
};

/**
 * Renders a body paragraph inside an Alert. Inherits size from the parent
 * Alert context and contributes to the accessible description.
 *
 * @summary Alert body paragraph
 *
 * @example
 * <Alert.Paragraph>Your changes have been saved.</Alert.Paragraph>
 */
const AlertParagraph = ({ className, children, ...props }: ComponentProps<'p'>) => {
	const { slotsStyles } = useAlert();
	return (
		<p data-slot="alert-paragraph" {...props} className={cn(slotsStyles.paragraph(), className)}>
			{children}
		</p>
	);
};

/**
 * Renders raw HTML inside an Alert paragraph slot via
 * `dangerouslySetInnerHTML`. The caller is responsible for sanitizing the
 * `html` string before passing it in — this component does not escape or
 * filter content.
 *
 * @summary Alert paragraph that renders pre-sanitized HTML
 *
 * @example
 * <Alert.ParagraphHtml html={sanitize(rawHtml)} />
 */
const AlertParagraphHtml = ({
	html,
	className,
	...props
}: { html: string } & ComponentProps<'div'>) => {
	const { slotsStyles } = useAlert();
	return (
		<div
			data-slot="alert-paragraph"
			{...props}
			className={cn(slotsStyles.paragraph(), className)}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
};

/**
 * Groups title and paragraph content inside an Alert. Applies the context
 * size's gap and flex column layout to keep title + paragraphs stacked
 * with consistent spacing.
 *
 * @summary Vertical wrapper for Alert title and paragraphs
 *
 * @example
 * <Alert.Content>
 *   <Alert.Title>Heads up</Alert.Title>
 *   <Alert.Paragraph>Action required.</Alert.Paragraph>
 * </Alert.Content>
 */
const AlertContent = ({ className, children, ...props }: ComponentProps<'div'>) => {
	const { slotsStyles } = useAlert();
	return (
		<div data-slot="alert-content" {...props} className={cn(slotsStyles.content(), className)}>
			{children}
		</div>
	);
};

/**
 * Container for action buttons pinned to the right edge of the Alert,
 * vertically centered. Use alongside `Alert.Content` to place actions
 * opposite the main message.
 *
 * @summary Right-aligned actions container
 *
 * @example
 * <Alert.Actions>
 *   <Alert.Button onClick={renew}>Renew</Alert.Button>
 * </Alert.Actions>
 */
const AlertActions = ({ className, children, ...props }: ComponentProps<'div'>) => (
	<div
		data-slot="alert-actions"
		{...props}
		className={cn('ml-auto flex flex-col items-center justify-center gap-2', className)}>
		{children}
	</div>
);

/**
 * Container for a 64×64 pictogram/illustration rendered inside an Alert.
 * Forces any `<svg>` descendant to render at 64px square.
 *
 * @summary Fixed-size pictogram container for Alert
 *
 * @example
 * <Alert.Pictograms><MyIllustration /></Alert.Pictograms>
 */
const AlertPictograms = ({ className, children, ...props }: ComponentProps<'div'>) => (
	<div {...props} className={cn('[&_svg]:h-16! [&_svg]:w-16!', className)}>
		{children}
	</div>
);

/**
 * Link-styled button that inherits the Alert's text color. Equivalent to
 * `<Button variant="link" className="text-current" />` — consumer props
 * are spread last so every prop (including `variant` and `className`
 * beyond the default `text-current`) is overridable.
 *
 * @summary Link-style button that inherits the Alert color
 *
 * @example
 * <Alert.Button onClick={undo}>Undo</Alert.Button>
 */
const AlertButton = ({ className, ...rest }: ComponentProps<typeof Button>) => (
	<Button variant="link" className={cn('text-current', className)} {...rest} />
);

/* --------------- Children traversal --------------- */

const containsComponent = (
	children: ReactNode,
	target: ComponentType<unknown> | ((...args: unknown[]) => unknown)
): boolean =>
	Children.toArray(children).some(child => {
		if (!isValidElement(child)) return false;
		if (child.type === target) return true;
		const grand = (child.props as { children?: ReactNode }).children;
		return grand ? containsComponent(grand, target) : false;
	});

/* --------------- Root --------------- */

type AlertProps = {
	/** Fires when the dismiss button is clicked. When provided, renders an `iconOnly` close button with `aria-label="Dismiss"`. */
	onDismiss?: () => void;
	/** When `true` (default), renders the built-in icon for the current `color`. Set to `false` to omit the icon entirely. */
	hasIcon?: boolean;
	/**
	 * Overrides the default icon for the current `color`. Pass any `LucideIcon`
	 * from `lucide-react` — Alert applies the size + color tokens via className,
	 * so consumers don't need to style the icon themselves.
	 *
	 * @example
	 * import { LightbulbIcon } from 'lucide-react';
	 *
	 * <Alert color="creative" icon={LightbulbIcon}>
	 *   <Alert.Content>
	 *     <Alert.Title>Pro tip</Alert.Title>
	 *   </Alert.Content>
	 * </Alert>
	 */
	icon?: LucideIcon;
	/**
	 * Semantic color. Defaults to `'neutral'`.
	 * - `neutral` — generic info; no strong signal.
	 * - `success` — positive confirmation.
	 * - `danger` — error or destructive outcome.
	 * - `warning` — caution; user attention needed.
	 * - `info` — informational highlight.
	 * - `creative`, `dynamic`, `playful` — brand-aligned accents.
	 */
	color?: AlertColorType;
	/**
	 * Size treatment. Defaults to `'sm'`.
	 * - `sm` — compact inline alerts (1rem padding, 14/12px typography).
	 * - `md` — prominent standalone alerts (2rem padding, 18/14px typography).
	 */
	size?: AlertSizeType;
	/**
	 * When `true`, removes background and padding so the alert blends inline
	 * with surrounding text (e.g., inline form field errors). Colors switch
	 * to the ghost token ramp for lower visual weight.
	 */
	ghost?: boolean;
} & ComponentProps<'div'>;

/**
 * Alert surfaces feedback about an outcome or state change — success, error,
 * warning, or informational. Compose it from the exposed sub-components to
 * build the layout you need: `Alert.Content` groups a `Alert.Title` and any
 * number of `Alert.Paragraph` / `Alert.ParagraphHtml`; `Alert.Actions` adds
 * trailing buttons; `Alert.Pictograms` renders a 64px illustration. Pass
 * `onDismiss` to show a close button; `hasIcon={false}` to hide the default
 * icon; `icon` to substitute a custom icon component.
 *
 * Accessibility: the root carries `role="alert"`; `aria-labelledby` points at
 * the rendered `Alert.Title` (when present) and `aria-describedby` at the
 * paragraph wrapper. Multiple Alerts on the same page receive unique ids via
 * `useId()`. The dismiss control has an accessible name of `Dismiss`.
 *
 * Do **not** use Alert for transient toast notifications (use a Toast
 * component) or for large error pages (use a dedicated empty-state).
 *
 * @summary Feedback banner with color variants, optional icon, and dismiss
 *
 * @example
 * <Alert color="success" size="sm">
 *   <Alert.Content>
 *     <Alert.Title>Policy saved</Alert.Title>
 *     <Alert.Paragraph>Your changes are live.</Alert.Paragraph>
 *   </Alert.Content>
 * </Alert>
 *
 * @example
 * <Alert color="warning" onDismiss={() => setOpen(false)}>
 *   <Alert.Content>
 *     <Alert.Title>Session expiring</Alert.Title>
 *     <Alert.Paragraph>Renew to continue editing.</Alert.Paragraph>
 *   </Alert.Content>
 *   <Alert.Actions>
 *     <Alert.Button onClick={renew}>Renew session</Alert.Button>
 *   </Alert.Actions>
 * </Alert>
 *
 * @example
 * <Alert color="danger" ghost>
 *   <Alert.Paragraph>This field is required.</Alert.Paragraph>
 * </Alert>
 */
export const Alert = ({
	children,
	onDismiss,
	hasIcon = true,
	icon,
	color = 'neutral',
	size = 'sm',
	ghost = false,
	className,
	...props
}: PropsWithChildren<AlertProps>) => {
	const slotsStyles = alertRecipe({ color, size, ghost });
	const rootId = useId();
	const titleId = `${rootId}-title`;
	const descId = `${rootId}-desc`;

	const hasTitle = containsComponent(children, AlertTitle as ComponentType<unknown>);
	const hasDescription =
		containsComponent(children, AlertParagraph as ComponentType<unknown>) ||
		containsComponent(children, AlertParagraphHtml as ComponentType<unknown>);

	const Icon = icon ?? iconMapping[color];
	const shouldRenderIcon = icon ? true : hasIcon;

	return (
		<AlertContext value={{ size, slotsStyles, titleId, descId }}>
			<div
				role="alert"
				aria-labelledby={hasTitle ? titleId : undefined}
				aria-describedby={hasDescription ? descId : undefined}
				data-slot="alert-root"
				{...props}
				className={cn(slotsStyles.root(), className)}>
				{onDismiss && (
					<div
						className={cn('order-last ml-auto self-center', {
							'pl-2.5': size === 'sm',
							'pl-0.5': size === 'md'
						})}>
						<Button
							variant="ghost"
							size={size}
							iconOnly
							aria-label="Dismiss"
							className="text-current"
							onClick={onDismiss}>
							<XIcon />
						</Button>
					</div>
				)}
				{shouldRenderIcon && (
					<Icon
						className={cn(iconClassForAlertSize[size], slotsStyles.icon())}
						data-slot="alert-icon"
					/>
				)}
				<div id={descId} className="flex w-full items-center gap-10">
					{children}
				</div>
			</div>
		</AlertContext>
	);
};

Alert.Title = AlertTitle;
Alert.Paragraph = AlertParagraph;
Alert.ParagraphHtml = AlertParagraphHtml;
Alert.Content = AlertContent;
Alert.Actions = AlertActions;
Alert.Button = AlertButton;
Alert.Pictograms = AlertPictograms;
