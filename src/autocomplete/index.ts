import { Content, Empty, Input, Item, List, Root } from './autocomplete';

export type { AutocompleteRootProps } from './autocomplete';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Autocomplete = { Root, Input, Content, List, Item, Empty };
