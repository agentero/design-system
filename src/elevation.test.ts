import { expect, it } from 'vitest';

import { comboboxRecipe } from './combobox/combobox';
import { commandRecipe } from './command/command';
import { contentStyles, subContentStyles } from './dropdown-menu/dropdown-menu';
import { hoverCardRecipe } from './hover-card/hover-card';
import { popoverRecipe } from './popover/popover';
import { selectRecipe } from './select/select';
import { tooltipRecipe } from './tooltip/tooltip';

// The elevation scale in AGENTS.md ("Anchored surfaces share one elevation scale"). A surface
// that drifts from its row fails here instead of sitting at a different height in the app.
const surfaces: [name: string, classes: string, shadow: string, radius: string][] = [
	['Tooltip', tooltipRecipe(), 'shadow-sm', 'rounded-sm'],
	['Popover', popoverRecipe(), 'shadow-lg', 'rounded-md'],
	['HoverCard', hoverCardRecipe(), 'shadow-xl', 'rounded-lg'],
	['Command.Root', commandRecipe().root(), 'shadow-xl', 'rounded-md'],
	['Combobox list', comboboxRecipe().content(), 'shadow-xl', 'rounded-md'],
	['Select list', selectRecipe().content(), 'shadow-xl', 'rounded-md'],
	['DropdownMenu.Content', contentStyles(), 'shadow-xl', 'rounded-lg'],
	['DropdownMenu.SubContent', subContentStyles(), 'shadow-xl', 'rounded-lg']
];

it.each(surfaces)(
	'%s takes its shadow and radius from the scale',
	(_name, classes, shadow, radius) => {
		const tokens = classes.split(/\s+/);

		expect(tokens).toContain(shadow);
		expect(tokens).toContain(radius);
		expect(tokens).toContain('border');
		expect(tokens).toContain('border-border-default-base-primary');
		expect(tokens).toContain('bg-bg-default-base-primary');
	}
);
