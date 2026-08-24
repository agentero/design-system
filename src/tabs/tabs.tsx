'use client';

import { ComponentProps, createContext, use } from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { type VariantProps, tv } from 'tailwind-variants';

import { cn } from '../../lib';

export const tabsRecipe = tv({
	slots: {
		root: 'flex flex-col',
		list: 'z-1 flex shrink-0 overflow-x-auto overflow-y-hidden',
		trigger: [
			'relative cursor-pointer text-sm font-semibold text-text-default-base-secondary no-underline transition-colors duration-150',
			'hover:text-text-default-base-primary',
			'focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary',
			'data-disabled:cursor-not-allowed data-disabled:opacity-50',
			'data-[state=active]:text-text-default-base-primary'
		],
		content: ''
	},
	variants: {
		variant: {
			line: {
				list: 'w-full gap-6 border-b border-border-default-base-primary bg-bg-default-base-primary px-4',
				trigger: [
					'grid h-10 content-center text-text-default-base-tertiary',
					"before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-bottom before:scale-y-0 before:bg-text-button-secondary-enable before:transition-transform before:duration-200 before:will-change-transform before:content-['']",
					'data-[state=active]:before:scale-y-100'
				]
			},
			enclosed: {
				list: 'inline-grid max-w-full auto-cols-fr grid-flow-col rounded-md bg-bg-default-base-tertiary p-1',
				trigger:
					'flex items-center justify-center rounded-sm px-3 py-1 text-center data-[state=active]:bg-bg-default-base-primary'
			},
			button: {
				list: 'gap-2',
				trigger: [
					'flex h-8 items-center gap-2.5 rounded-md px-3 text-sm font-normal text-text-default-base-secondary',
					'[&>svg]:-mx-1 [&>svg]:size-4 [&>svg]:fill-icon-default-base-secondary',
					'hover:bg-bg-default-base-primary-hover data-[state=active]:bg-bg-default-base-primary-hover'
				]
			}
		},
		position: {
			center: { list: 'justify-center self-center' },
			start: { list: 'self-start' },
			end: { list: 'justify-end self-end' },
			full: { list: 'w-full self-stretch' }
		}
	},
	compoundVariants: [
		{
			variant: 'button',
			position: 'start',
			class: { list: '-ml-2.25' }
		}
	],
	defaultVariants: {
		variant: 'line',
		position: 'start'
	}
});

type TabsVariants = VariantProps<typeof tabsRecipe>;
type TabsSlots = ReturnType<typeof tabsRecipe>;

const TabsContext = createContext<TabsSlots | null>(null);

const useTabs = () => {
	const context = use(TabsContext);
	if (!context) {
		throw new Error('Tabs.List, Tabs.Trigger and Tabs.Content must be used within Tabs.Root');
	}
	return context;
};

export type TabsRootProps = ComponentProps<typeof TabsPrimitive.Root> & TabsVariants;

/**
 * Root of a set of tabs, built on Radix UI's Tabs so keyboard nav, roving focus
 * and ARIA come for free. Owns the selected tab (controlled via `value`/
 * `onValueChange` or uncontrolled via `defaultValue`) and wraps `List` and
 * `Content`s. `variant` picks the look — `line` (default) underlines the active
 * tab, `enclosed` renders segmented pills, `button` renders button-like tabs.
 *
 * @summary Root provider for a Tabs group
 *
 * @example
 * ```tsx
 * import { Tabs } from '@agentero/design-system/tabs';
 *
 * <Tabs.Root defaultValue="overview">
 *   <Tabs.List>
 *     <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
 *     <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="overview">…</Tabs.Content>
 *   <Tabs.Content value="activity">…</Tabs.Content>
 * </Tabs.Root>
 * ```
 */
export const Root = ({ className, variant, position, ...props }: TabsRootProps) => {
	const styles = tabsRecipe({ variant, position });

	return (
		<TabsContext value={styles}>
			<TabsPrimitive.Root
				data-slot="tabs-root"
				className={cn(styles.root(), className)}
				{...props}
			/>
		</TabsContext>
	);
};
Root.displayName = 'Tabs.Root';

export type TabsListProps = ComponentProps<typeof TabsPrimitive.List>;

export const List = ({ className, ...props }: TabsListProps) => {
	const styles = useTabs();

	return (
		<TabsPrimitive.List data-slot="tabs-list" className={cn(styles.list(), className)} {...props} />
	);
};
List.displayName = 'Tabs.List';

export type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>;

export const Trigger = ({ className, ...props }: TabsTriggerProps) => {
	const styles = useTabs();

	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(styles.trigger(), className)}
			{...props}
		/>
	);
};
Trigger.displayName = 'Tabs.Trigger';

export type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>;

export const Content = ({ className, ...props }: TabsContentProps) => {
	const styles = useTabs();

	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cn(styles.content(), className)}
			{...props}
		/>
	);
};
Content.displayName = 'Tabs.Content';

export type TabsLabelProps = ComponentProps<'span'> & {
	variant?: TabsVariants['variant'];
};

/**
 * Non-interactive heading with the exact look of an inactive `Trigger`: it
 * renders the trigger styles without the active data-state, and
 * `pointer-events-none` keeps the hover styles from firing. Use it when a
 * panel keeps the tab row's visual language but has a single, non-selectable
 * title — a lone tab would announce a selectable control that isn't one.
 * Inside a `Root` it picks up the group's variant; standalone, pass `variant`.
 * It renders a plain `span` — wrap it in a heading element when the title
 * needs heading semantics.
 *
 * @summary Text styled as an inactive tab trigger
 *
 * @example
 * ```tsx
 * <h2>
 *   <Tabs.Label>Shared coverages</Tabs.Label>
 * </h2>
 * ```
 */
export const Label = ({ className, variant, ...props }: TabsLabelProps) => {
	const context = use(TabsContext);
	const styles = context ?? tabsRecipe({ variant });

	return (
		<span
			data-slot="tabs-label"
			className={cn(styles.trigger(), 'pointer-events-none', className)}
			{...props}
		/>
	);
};
Label.displayName = 'Tabs.Label';
