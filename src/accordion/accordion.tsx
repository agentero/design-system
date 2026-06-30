'use client';

import { ComponentProps } from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { type VariantProps, tv } from 'tailwind-variants';

import { cn } from '../../lib';
import { IconKeyboardArrowDown } from './icons';

const rootStyles = tv({
	variants: {
		enclosed: {
			true: 'rounded-lg border border-border-default-base-primary shadow-sm'
		}
	}
});

export type AccordionRootProps = ComponentProps<typeof AccordionPrimitive.Root> &
	VariantProps<typeof rootStyles>;

const Root = ({ className, enclosed, ...props }: AccordionRootProps) => (
	<AccordionPrimitive.Root
		data-slot="accordion-root"
		className={cn(rootStyles({ enclosed }), className)}
		{...props}
	/>
);
Root.displayName = 'Accordion.Root';

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

const Item = ({ className, ...props }: AccordionItemProps) => (
	<AccordionPrimitive.Item
		data-slot="accordion-item"
		className={cn('border-b border-border-default-base-primary last:border-b-0', className)}
		{...props}
	/>
);
Item.displayName = 'Accordion.Item';

// Internal: Trigger renders its own Header, so it is not part of the public API.
const Header = ({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Header>) => (
	<AccordionPrimitive.Header
		data-slot="accordion-header"
		className={cn('flex', className)}
		{...props}
	/>
);
Header.displayName = 'Accordion.Header';

export type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger>;

// Typography (size/weight) is intentionally the consumer's job via children; the Trigger only owns layout + interaction.
const Trigger = ({ className, children, asChild, ...props }: AccordionTriggerProps) => (
	<Header>
		<AccordionPrimitive.Trigger
			data-slot="accordion-trigger"
			asChild={asChild}
			className={cn(
				'group flex flex-1 cursor-pointer items-center justify-between p-4 transition-colors hover:text-text-default-base-secondary',
				'focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary',
				'data-disabled:cursor-not-allowed data-disabled:pointer-events-none data-disabled:text-text-default-disable-primary',
				className
			)}
			{...props}>
			{/* asChild delegates to a custom element, so skip the built-in chevron */}
			{asChild ? (
				children
			) : (
				<>
					{children}
					<IconKeyboardArrowDown
						aria-hidden
						className="size-4 shrink-0 group-data-[state=open]:rotate-180 motion-safe:transition-transform motion-safe:duration-200"
					/>
				</>
			)}
		</AccordionPrimitive.Trigger>
	</Header>
);
Trigger.displayName = 'Accordion.Trigger';

export type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content>;

const Content = ({ className, children, ...props }: AccordionContentProps) => (
	<AccordionPrimitive.Content
		data-slot="accordion-content"
		className={cn(
			'overflow-hidden px-4 text-sm',
			'motion-safe:data-[state=open]:animate-[accordionDown_200ms_ease-out]',
			'motion-safe:data-[state=closed]:animate-[accordionUp_200ms_ease-out]',
			className
		)}
		{...props}>
		{/* Inner wrapper holds the bottom padding so the height animation stays smooth */}
		<div className="pb-4">{children}</div>
	</AccordionPrimitive.Content>
);
Content.displayName = 'Accordion.Content';

/**
 * Stacked, collapsible sections built on Radix UI's Accordion (keyboard nav and
 * ARIA come for free). Compose `Root` with `Item`s, each holding a `Trigger` and
 * `Content`. `type="single"` (optionally `collapsible`) opens one at a time;
 * `type="multiple"` opens sections independently. `enclosed` renders the group
 * as a bordered card.
 */
export const Accordion = {
	Root,
	Item,
	Trigger,
	Content
};
