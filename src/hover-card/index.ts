import { Arrow, Content, Portal, Root, Trigger } from './hover-card';

export { hoverCardRecipe } from './hover-card';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const HoverCard = { Root, Trigger, Portal, Content, Arrow };
