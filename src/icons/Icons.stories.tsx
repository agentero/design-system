import type { ComponentType, SVGProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import * as IconsModule from '@agentero/design-system/icons';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const icons = Object.entries(IconsModule).filter(
	([name, value]) => name.startsWith('Icon') && typeof value === 'function'
) as [string, IconComponent][];

type GalleryArgs = { size: number };

/**
 * Visual gallery of every icon exported from `@agentero/design-system/icons`.
 * Each icon is auto-discovered from the package's public exports — drop a new
 * SVG into `src/icons/svg/`, add a line to `src/icons/index.ts`, and it shows
 * up here on the next build.
 *
 * @summary Auto-discovered grid of all design-system icons
 */
const meta = {
	title: 'Icons/Gallery',
	argTypes: {
		size: { control: { type: 'number', min: 16, max: 96, step: 4 } }
	},
	args: { size: 24 }
} satisfies Meta<GalleryArgs>;

export default meta;
type Story = StoryObj<GalleryArgs>;

/**
 * Renders one card per exported icon with its component name underneath.
 * Use the `size` control to verify icons scale cleanly across the supported
 * range.
 *
 * @summary Auto-discovered icon grid with a size scrubber
 */
export const Gallery: Story = {
	render: ({ size }) => (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-6 p-4 text-text-default-base-primary">
			{icons.map(([name, Icon]) => (
				<div
					key={name}
					className="flex flex-col items-center gap-2 rounded-md border border-border-default-base-primary p-4 [&_path]:fill-current">
					<Icon width={size} height={size} />
					<code className="text-xs">{name}</code>
				</div>
			))}
		</div>
	)
};
