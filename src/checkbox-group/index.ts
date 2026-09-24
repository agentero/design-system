import { Item, Root } from './checkbox-group';

export { checkboxGroupRecipe } from './checkbox-group';

export type { CheckboxGroupRootProps, CheckboxGroupItemProps } from './checkbox-group';

// Assembled here, outside the 'use client' module, so each part stays its own
// client reference and `CheckboxGroup.Item` renders in a Server Component.
// See src/tabs/index.ts for the full reasoning.
export const CheckboxGroup = { Root, Item };
