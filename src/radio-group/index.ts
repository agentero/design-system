import { Item, Root } from './radio-group';

export { radioGroupRecipe } from './radio-group';

export type {
	RadioGroupControl,
	RadioGroupItemProps,
	RadioGroupRootProps,
	RadioGroupVariants
} from './radio-group';

// Assembled outside the 'use client' module so each part stays a client reference (see src/tabs).
export const RadioGroup = { Root, Item };
