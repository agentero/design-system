// Kept free of the 'use client' directive on purpose. React turns each named
// export of a client module into its own client reference, so a Server Component
// can import them through this barrel and through `import * as Tabs`. Exporting a
// single `Tabs` object instead would put the parts behind a property read the
// browser bundle cannot resolve, and `Tabs.Content` would render as undefined.
export {
	TabsContent as Content,
	TabsLabel as Label,
	TabsList as List,
	TabsRoot as Root,
	TabsTrigger as Trigger,
	TabsContent,
	TabsLabel,
	TabsList,
	TabsRoot,
	TabsTrigger,
	tabsRecipe
} from './tabs';

export type {
	TabsRootProps,
	TabsListProps,
	TabsTriggerProps,
	TabsContentProps,
	TabsLabelProps
} from './tabs';
