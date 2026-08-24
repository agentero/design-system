import { Content, Item, Root, Trigger } from './accordion';

export type {
	AccordionRootProps,
	AccordionItemProps,
	AccordionTriggerProps,
	AccordionContentProps
} from './accordion';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Accordion = { Root, Item, Trigger, Content };
