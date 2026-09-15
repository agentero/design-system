import { Anchor, Content, Portal, Root, Trigger } from './combobox';

export { comboboxRecipe } from './combobox';
export type { ComboboxContentProps } from './combobox';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Combobox = { Root, Trigger, Anchor, Portal, Content };
