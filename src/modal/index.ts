import { Body, Close, Content, Description, Footer, Root, Title, Trigger } from './modal';

export { modalRecipe } from './modal';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Modal = { Root, Trigger, Content, Title, Description, Body, Footer, Close };
