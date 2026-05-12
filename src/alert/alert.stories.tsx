import type { Meta, StoryObj } from '@storybook/react-vite';
import {
	CircleAlertIcon,
	CircleCheckIcon,
	InfoIcon,
	LightbulbIcon,
	StarIcon,
	TriangleAlertIcon
} from 'lucide-react';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Alert } from './alert';

const COLORS = [
	'neutral',
	'success',
	'danger',
	'warning',
	'info',
	'creative',
	'dynamic',
	'playful'
] as const;

const SIZES = ['sm', 'md'] as const;

const Stack = ({ children }: { children: React.ReactNode }) => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>
);

/**
 * Alert surfaces feedback about outcomes or state changes — success, danger,
 * warning, or info. Compose it from `Alert.Content`, `Alert.Title`,
 * `Alert.Paragraph`, `Alert.Actions`, and `Alert.Button` to build the layout
 * your flow needs. Eight colors, two sizes, and a ghost mode cover most
 * feedback scenarios.
 */
const meta = {
	title: 'Components/Alert',
	component: Alert,
	tags: ['autodocs'],
	argTypes: {
		color: { control: 'select', options: COLORS },
		size: { control: 'radio', options: SIZES },
		ghost: { control: 'boolean' },
		hasIcon: { control: 'boolean' },
		onDismiss: { control: 'boolean' },
		icon: {
			control: 'select',
			options: ['default', 'star', 'check', 'error', 'info', 'warning'],
			mapping: {
				default: undefined,
				star: StarIcon,
				check: CircleCheckIcon,
				error: CircleAlertIcon,
				info: InfoIcon,
				warning: TriangleAlertIcon
			}
		}
	},
	args: {
		color: 'neutral',
		size: 'sm',
		ghost: false,
		hasIcon: true
	},
	render: ({ onDismiss, ...args }) => (
		<Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
			<Alert.Content>
				<Alert.Title>Title</Alert.Title>
				<Alert.Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert.Paragraph>
			</Alert.Content>
		</Alert>
	)
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Args-controlled playground. Toggle `color`, `size`, `ghost`, `hasIcon`, and
 * `onDismiss` from the Controls panel to explore every visual combination.
 *
 * @summary Default args playground for Alert
 */
export const Default: Story = {};

/* --------------- Colors --------------- */

/**
 * Neutral color is the default and carries no strong semantic signal — use it
 * for generic inline information.
 *
 * @summary Neutral color (default)
 */
export const Neutral: Story = { args: { color: 'neutral' } };

/**
 * Success color confirms a positive outcome — saved record, completed task,
 * healthy state.
 *
 * @summary Success color for positive outcomes
 */
export const Success: Story = { args: { color: 'success' } };

/**
 * Danger color flags errors and destructive outcomes that require the user's
 * attention.
 *
 * @summary Danger color for errors and destructive outcomes
 */
export const Danger: Story = { args: { color: 'danger' } };

/**
 * Warning color signals caution — the user should review before proceeding.
 *
 * @summary Warning color for cautionary feedback
 */
export const Warning: Story = { args: { color: 'warning' } };

/**
 * Info color highlights tips, hints, or secondary informational content.
 *
 * @summary Info color for informational highlights
 */
export const Info: Story = { args: { color: 'info' } };

/**
 * Creative color uses a brand-aligned purple accent for marketing or
 * onboarding moments.
 *
 * @summary Creative brand accent color
 */
export const Creative: Story = { args: { color: 'creative' } };

/**
 * Dynamic color uses a brand-aligned orange accent for activity or
 * momentum-focused content.
 *
 * @summary Dynamic brand accent color
 */
export const Dynamic: Story = { args: { color: 'dynamic' } };

/**
 * Playful color uses a brand-aligned pink accent for lighter or celebratory
 * content.
 *
 * @summary Playful brand accent color
 */
export const Playful: Story = { args: { color: 'playful' } };

/* --------------- Ghost --------------- */

/**
 * Ghost mode removes the background and padding so the alert blends inline
 * with surrounding text (e.g., form field errors). Colors switch to the ghost
 * token ramp for lower visual weight.
 *
 * @summary Ghost mode for inline, low-emphasis alerts
 */
export const Ghost: Story = { args: { color: 'danger', ghost: true } };

/* --------------- Sizes --------------- */

/**
 * Small size (default) uses compact padding and 14/12px typography — suitable
 * for inline alerts inside forms, tables, or cards.
 *
 * @summary Small size (default, compact)
 */
export const SmallSize: Story = { args: { size: 'sm' } };

/**
 * Medium size uses larger padding and 18/14px typography — suitable for
 * standalone alerts in empty states, modals, or dedicated feedback regions.
 *
 * @summary Medium size (prominent, standalone)
 */
export const MediumSize: Story = { args: { size: 'md' } };

/* --------------- Features --------------- */

/**
 * Dismissible alert. Providing `onDismiss` shows an icon-only close button
 * with `aria-label="Dismiss"` that inherits the alert's color.
 *
 * @summary Alert with a dismiss button
 */
export const WithDismiss: Story = {
	args: { color: 'warning', onDismiss: fn() },
	argTypes: { onDismiss: { control: false, action: 'onDismiss' } },
	render: args => (
		<Alert {...args}>
			<Alert.Content>
				<Alert.Title>Title</Alert.Title>
				<Alert.Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert.Paragraph>
			</Alert.Content>
		</Alert>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const root = canvas.getByRole('alert');
		await expect(root).toHaveAttribute('data-slot', 'alert-root');
		await expect(root).toHaveAccessibleName('Title');

		const dismiss = canvas.getByRole('button', { name: 'Dismiss' });
		await userEvent.click(dismiss);
		await expect(args.onDismiss).toHaveBeenCalledTimes(1);
	}
};

/**
 * Alert with a trailing action pinned to the right edge. Use `Alert.Actions`
 * + `Alert.Button` for the common "message + action" pattern.
 *
 * @summary Alert with a trailing action button
 */
export const WithActions: Story = {
	args: { color: 'info' },
	render: ({ onDismiss, ...args }) => (
		<Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
			<Alert.Content>
				<Alert.Title>Update available</Alert.Title>
				<Alert.Paragraph>Reload to apply the latest version.</Alert.Paragraph>
			</Alert.Content>
			<Alert.Actions>
				<Alert.Button onClick={() => {}}>Reload</Alert.Button>
			</Alert.Actions>
		</Alert>
	)
};

/**
 * Alert combining a dismiss button with a trailing action. Dismiss is pinned
 * to the right edge after the actions.
 *
 * @summary Alert with both dismiss and action
 */
export const WithDismissAndAction: Story = {
	args: { color: 'warning', size: 'md', onDismiss: (() => {}) as never },
	render: ({ onDismiss, ...args }) => (
		<Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
			<Alert.Content>
				<Alert.Title>Session expiring</Alert.Title>
				<Alert.Paragraph>Renew to continue editing.</Alert.Paragraph>
			</Alert.Content>
			<Alert.Actions>
				<Alert.Button onClick={() => {}}>Renew session</Alert.Button>
			</Alert.Actions>
		</Alert>
	)
};

/**
 * Alert rendered without the built-in color icon. Use `hasIcon={false}` when
 * the surrounding context already conveys the semantic intent.
 *
 * @summary Alert without the default icon
 */
export const WithoutIcon: Story = {
	args: { color: 'info', hasIcon: false }
};

/**
 * Alert with a caller-supplied icon that replaces the default color icon. The
 * custom icon receives the slot-computed className so color tokens still
 * apply.
 *
 * @summary Alert with a custom icon override
 */
export const WithCustomIcon: Story = {
	args: { color: 'creative', icon: LightbulbIcon }
};

/**
 * Alert rendering a paragraph from pre-sanitized HTML via
 * `Alert.ParagraphHtml`. The caller is responsible for sanitizing the HTML
 * string before passing it in.
 *
 * @summary Alert paragraph rendered from HTML
 */
export const WithParagraphHtml: Story = {
	args: { color: 'success' },
	render: ({ onDismiss, ...args }) => (
		<Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
			<Alert.Content>
				<Alert.Title>Formatted content</Alert.Title>
				<Alert.ParagraphHtml html="Review the <strong>terms</strong> or <a href='https://example.com'>read the docs</a>." />
			</Alert.Content>
		</Alert>
	)
};

/**
 * Alert with a 64×64 pictogram in place of the inline icon. Use
 * `Alert.Pictograms` when the message benefits from a richer illustration.
 *
 * @summary Alert with a pictogram illustration
 */
export const WithPictograms: Story = {
	args: { color: 'info', hasIcon: false, size: 'md' },
	render: ({ onDismiss, ...args }) => (
		<Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
			<Alert.Pictograms>
				<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
					<circle cx="32" cy="32" r="28" fill="currentColor" opacity="0.15" />
					<circle cx="32" cy="32" r="14" fill="currentColor" />
				</svg>
			</Alert.Pictograms>
			<Alert.Content>
				<Alert.Title>Pictogram example</Alert.Title>
				<Alert.Paragraph>
					Pictograms scale to 64×64px regardless of the configured size.
				</Alert.Paragraph>
			</Alert.Content>
		</Alert>
	)
};

/**
 * Alert rendered with only a paragraph — no title. The root omits
 * `aria-labelledby` since there is no title to reference.
 *
 * @summary Alert with only a paragraph body
 */
export const OnlyParagraph: Story = {
	args: { color: 'neutral' },
	render: ({ onDismiss, ...args }) => (
		<Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
			<Alert.Paragraph>This field is required.</Alert.Paragraph>
		</Alert>
	)
};

/**
 * Action button rendered inline below the paragraphs, inside
 * `Alert.Content`, rather than pinned to the right via `Alert.Actions`.
 *
 * @summary Alert with actions placed below the content
 */
export const WithActionsBelow: Story = {
	args: { color: 'success' },
	render: ({ onDismiss, ...args }) => (
		<Alert {...args} onDismiss={onDismiss ? () => {} : undefined}>
			<Alert.Content>
				<Alert.Title>Upload complete</Alert.Title>
				<Alert.Paragraph>12 documents were added to the policy.</Alert.Paragraph>
				<div>
					<Alert.Button onClick={() => {}}>View documents</Alert.Button>
				</div>
			</Alert.Content>
		</Alert>
	)
};

/* --------------- Showcases --------------- */

/**
 * All eight colors in their primary (non-ghost) treatment, stacked for
 * comparison. Each alert uses the built-in icon mapping for its color.
 *
 * @summary Visual comparison of all Alert colors
 */
export const AllColors: Story = {
	render: () => (
		<Stack>
			{COLORS.map(color => (
				<Alert key={color} color={color}>
					<Alert.Content>
						<Alert.Title>{color}</Alert.Title>
						<Alert.Paragraph>
							This is a {color} alert variant with the default icon.
						</Alert.Paragraph>
					</Alert.Content>
				</Alert>
			))}
		</Stack>
	)
};

/**
 * All eight colors in ghost mode, stacked for comparison. Ghost alerts use a
 * lower-weight token ramp and omit background + padding.
 *
 * @summary Visual comparison of all Alert colors in ghost mode
 */
export const AllGhostColors: Story = {
	render: () => (
		<Stack>
			{COLORS.map(color => (
				<Alert key={color} color={color} ghost>
					<Alert.Content>
						<Alert.Title>{color} (ghost)</Alert.Title>
						<Alert.Paragraph>
							This is a {color} ghost alert variant with the ghost icon color.
						</Alert.Paragraph>
					</Alert.Content>
				</Alert>
			))}
		</Stack>
	)
};
