import { Item, Root } from './radio-group';

export { radioGroupRecipe } from './radio-group';

export type { RadioGroupItemProps, RadioGroupRootProps, RadioGroupVariants } from './radio-group';

// Assembled here, outside the 'use client' module, so each part stays its own
// client reference and `RadioGroup.Item` renders in a Server Component.
// See src/tabs/index.ts for the full reasoning.
export const RadioGroup = { Root, Item };
