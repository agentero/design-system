import { Anchor, Close, Content, Portal, Root, Trigger } from './popover';

export { popoverRecipe } from './popover';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Popover = { Root, Trigger, Anchor, Close, Portal, Content };
