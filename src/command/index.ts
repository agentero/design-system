import { Empty, Group, Input, Item, List, Root } from './command';

export { commandRecipe } from './command';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Command = { Root, Input, List, Empty, Group, Item };
