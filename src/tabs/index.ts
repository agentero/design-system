import { Content, Label, List, Root, Trigger } from './tabs';

export { tabsRecipe } from './tabs';

export type {
	TabsRootProps,
	TabsListProps,
	TabsTriggerProps,
	TabsContentProps,
	TabsLabelProps
} from './tabs';

// Kept free of the 'use client' directive on purpose. `tabs.tsx` is the client
// module and each of its named exports becomes its own client reference. This
// object is assembled here, on the server side of that boundary, so in a Server
// Component `Tabs.Content` is the `Content` reference and renders. The same
// object exported from `tabs.tsx` crosses the boundary as one opaque reference
// and `Tabs.Content` is undefined. `export * as Tabs from './tabs'` reads better
// but rolldown lowers it to a namespace object *inside* `tabs.js`, which is that
// same broken shape, so the object is written by hand.
export const Tabs = { Root, List, Trigger, Content, Label };
