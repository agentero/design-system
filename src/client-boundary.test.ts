import fs from 'node:fs';
import path from 'node:path';

import { globSync } from 'tinyglobby';
import { describe, expect, it } from 'vitest';

/**
 * Enforces the export shape of multi-part components: the `'use client'` module
 * exports each part on its own, and the namespace object is assembled in the
 * directive-free `index.ts`. AGENTS.md explains why it has to be that way;
 * `src/tabs/` is the reference implementation.
 */

const root = path.resolve(import.meta.dirname, '..');
const read = (file: string) => fs.readFileSync(path.join(root, file), 'utf8');

const hasUseClient = (source: string) => /^(['"])use client\1;/.test(source);

/** PascalCase `export const X = {` whose first entry is a PascalCase part. */
const NAMESPACE_OBJECT = /^export const ([A-Z][a-zA-Z0-9]*) = \{\s*\n?\s*[A-Z][a-zA-Z0-9]*[,:\s]/m;

const barrels = globSync('src/*/index.{ts,tsx}', { cwd: root }).sort();
const modules = globSync('src/**/*.{ts,tsx}', {
	cwd: root,
	ignore: ['**/*.stories.*', '**/*.test.*']
}).sort();

describe('client boundary export shape', () => {
	it('finds the component barrels', () => {
		expect(barrels.length).toBeGreaterThan(0);
	});

	it.each(barrels)('%s carries no "use client" directive', file => {
		expect(hasUseClient(read(file))).toBe(false);
	});

	it.each(barrels)('%s builds its namespace objects itself, not with `export * as`', file => {
		expect(read(file)).not.toMatch(/^export \* as /m);
	});

	it.each(modules)('%s exports no namespace object from a client module', file => {
		const source = read(file);
		if (!hasUseClient(source)) return;

		// The offending name goes into the asserted value so a failure says which
		// object to move; vitest's message argument is off-limits here (oxlint).
		const offender = NAMESPACE_OBJECT.exec(source)?.[1];
		expect(
			offender &&
				`${file} exports the namespace object \`${offender}\` from a client module. ` +
					'Export each part on its own and assemble the object in index.ts (AGENTS.md).'
		).toBeFalsy();
	});
});
