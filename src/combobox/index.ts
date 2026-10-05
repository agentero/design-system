import { Content, Empty, Input, Item, List, Root, Status } from './combobox';

export { comboboxRecipe } from './combobox';
export type { ComboboxRootProps } from './combobox';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Combobox = { Root, Input, Content, List, Item, Empty, Status };
