import { Item, Root } from './check-list';

export { checkListRecipe } from './check-list';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const CheckList = { Root, Item };
