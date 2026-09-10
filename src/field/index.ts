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

// Kept free of the 'use client' directive on purpose. `field.tsx` is the client
// module and each of its named exports becomes its own client reference; the
// object is assembled here so `Field.Root` resolves in a Server Component. See
// AGENTS.md and src/tabs/index.ts.
export const Field = { Root, Group, Content, Label, Description, Error };
