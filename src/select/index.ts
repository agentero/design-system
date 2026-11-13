import { Content, Group, GroupLabel, Item, Root, Separator, Trigger } from './select';

export { selectRecipe } from './select';

export type {
	SelectContentProps,
	SelectGroupLabelProps,
	SelectGroupProps,
	SelectItemProps,
	SelectRootProps,
	SelectSeparatorProps,
	SelectTriggerProps
} from './select';

// Assembled outside the 'use client' module so each part stays a client reference (see src/tabs).
export const Select = { Root, Trigger, Content, Item, Group, GroupLabel, Separator };
