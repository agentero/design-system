import { Addon, Root, Text } from './input-group';

export { inputGroupRecipe } from './input-group';
export type { InputGroupAddonProps, InputGroupRootProps, InputGroupTextProps } from './input-group';

// Assembled outside the client module so each part keeps its own client reference (see `src/tabs/index.ts`).
export const InputGroup = { Root, Addon, Text };
