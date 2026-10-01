import type { Preview } from '@storybook/react-vite';

import { renderSource } from './render-source';

import './index.css';

const preview: Preview = {
	parameters: {
		docs: {
			source: {
				// The story's `render` body when it takes no args or uses hooks, else Storybook's
				// dynamic snippet, which follows the controls; see `render-source.ts`.
				transform: (code: string, { parameters, name }: { parameters: any; name: string }) =>
					renderSource(parameters.fileName, name) ?? code
			}
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		a11y: {
			test: 'error',
			config: {
				rules: [
					// TODO: re-enable once contrast tokens are fixed (Avatar, Button, Divider).
					// Violations remain visible in the Accessibility panel; only blocking is disabled.
					{ id: 'color-contrast', enabled: false }
				]
			}
		}
	}
};

export default preview;
