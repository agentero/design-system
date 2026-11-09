import fs from 'node:fs';
import path from 'node:path';

import { globSync } from 'tinyglobby';
import { describe, expect, it } from 'vitest';

/**
 * Consumers generate this package's CSS by scanning the published `dist`
 * JavaScript, where the bundler escapes the quotes inside class strings. A
 * class like `has-[input[aria-invalid="true"]]:…` reaches their Tailwind as
 * `aria-invalid=\"true\"`, which compiles to a selector no element matches, so
 * the style silently never applies outside this repo's own Storybook. Write
 * attribute values in arbitrary variants unquoted: `[aria-invalid=true]`.
 */

const root = path.resolve(import.meta.dirname, '..');

/** A quoted attribute selector inside an arbitrary variant, closed by `]:` or `]/group:`. */
const QUOTED_ATTRIBUTE_VARIANT = /\[[\w-]+="[^"]*"\][^'"`\s]*\](?:\/[\w-]+)?:/;

const modules = globSync('src/**/*.{ts,tsx}', {
	cwd: root,
	ignore: ['**/*.stories.*', '**/*.test.*']
}).sort();

describe('quoted attribute values in Tailwind variants', () => {
	it('finds the source modules', () => {
		expect(modules.length).toBeGreaterThan(0);
	});

	it.each(modules)('%s quotes no attribute value inside a variant', file => {
		const source = fs.readFileSync(path.join(root, file), 'utf8');
		expect(QUOTED_ATTRIBUTE_VARIANT.exec(source)?.[0]).toBeUndefined();
	});
});
