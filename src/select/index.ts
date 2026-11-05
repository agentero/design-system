import { Content, Item, Root, Trigger } from './select';

export { selectRecipe } from './select';

export type {
	SelectContentProps,
	SelectItemProps,
	SelectRootProps,
	SelectTriggerProps
} from './select';

// Assembled outside the 'use client' module so each part stays a client reference (see src/tabs).
export const Select = { Root, Trigger, Content, Item };
