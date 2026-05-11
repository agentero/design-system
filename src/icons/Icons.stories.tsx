import type { ComponentType, SVGProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import * as IconsModule from '@agentero/design-system/icons';

type IconEntry = [string, ComponentType<SVGProps<SVGSVGElement>>];

const icons = (Object.entries(IconsModule) as [string, unknown][]).filter(
	([name, value]) => name.startsWith('Icon') && typeof value === 'function'
) as IconEntry[];

type GalleryArgs = { size: number };

/**
 * Auto-discovering gallery of every icon exported from
 * `@agentero/design-system/icons`. New icons appear here automatically once
 * they're added to `src/icons/manifest.json` and `yarn build:icons` is run —
 * no per-icon story files needed.
 */
const meta = {
	title: 'Components/Icons',
	argTypes: {
		size: { control: { type: 'number', min: 16, max: 96, step: 4 } }
	},
	args: { size: 24 }
} satisfies Meta<GalleryArgs>;

export default meta;
type Story = StoryObj<GalleryArgs>;

/**
 * Renders every shared icon at the chosen pixel size. Colors inherit from the
 * surrounding `text-*` utility — the wrapper here uses
 * `text-text-default-base-primary` so the gallery picks up the theme token.
 *
 * @summary Auto-discovering grid of all shared icons
 */
export const Gallery: Story = {
	render: ({ size }) => (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 p-4 text-text-default-base-primary">
			{icons.map(([name, Icon]) => (
				<div
					key={name}
					className="flex flex-col items-center gap-2 rounded-lg border border-border-default-base-primary p-4">
					<Icon width={size} height={size} fill="currentColor" />
					<code className="text-xs text-text-default-base-secondary">{name}</code>
				</div>
			))}
		</div>
	)
};
