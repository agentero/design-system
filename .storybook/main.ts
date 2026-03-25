import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-vitest',
		'@storybook/addon-mcp',
		'@chromatic-com/storybook'
	],
	framework: '@storybook/react-vite',
	typescript: {
		reactDocgen: 'react-docgen-typescript'
	}
};
export default config;
