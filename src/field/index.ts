import { Content, Description, Error, Group, Label, Root } from './field';

export { fieldRecipe } from './field';
export { FieldContext, useFieldContext } from './context';

export type {
	FieldContentProps,
	FieldGroupProps,
	FieldLabelProps,
	FieldRootProps,
	FieldVariants
} from './field';
export type {
	FieldContextValue,
	FieldDescriptionProps,
	FieldErrorLike,
	FieldErrorProps
} from './context';

// Assembled here on purpose: this file must stay free of the 'use client'
// directive. See AGENTS.md, component authoring conventions.
export const Field = { Root, Group, Content, Label, Description, Error };
