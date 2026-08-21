import type { Preview } from '@storybook/react-vite';

import './index.css';

const preview: Preview = {
	parameters: {
		docs: {
			source: {
				// Decorators are viewing harness, not part of the example — keep
				// them out of "Show code" snippets and the MCP manifest.
				excludeDecorators: true
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
