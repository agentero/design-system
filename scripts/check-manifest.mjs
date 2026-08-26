// Guards the MCP manifest against silently losing what consumers read from it.
//
// The manifest is the design system's product for an agent: it is where the
// component's purpose, props and import line come from. It has degraded twice
// without anyone noticing (PR #98 and PR #99), because nothing here fails when
// an entry comes out empty — the Storybook docs page keeps looking fine, since
// it reads from a different path. This runs after `yarn build-storybook`.

import fs from 'node:fs';
import path from 'node:path';

const MANIFEST = path.join('storybook-static', 'manifests', 'components.json');

// Components whose root part legitimately declares no props of its own.
const NO_OWN_PROPS = new Set(['components-checklist', 'components-skeleton']);

if (!fs.existsSync(MANIFEST)) {
	console.error(`✗ ${MANIFEST} not found — run \`yarn build-storybook\` first.`);
	process.exit(1);
}

const { components } = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
const entries = Object.entries(components ?? {});
const failures = [];

if (entries.length === 0) failures.push('the manifest carries no components at all');

for (const [id, entry] of entries) {
	const docgen = entry.reactComponentMeta ?? entry.reactDocgenTypescript ?? {};
	// Where the tags live depends on the docgen engine, and the unused slots are
	// present but empty — so merge rather than pick the first one that exists.
	const tags = { ...docgen.tags, ...docgen.jsDocTags, ...entry.jsDocTags };
	const props = Object.keys(docgen.props ?? {});

	if (entry.error) failures.push(`${id}: ${entry.error.name}`);
	if (!entry.description?.trim()) {
		failures.push(`${id}: no description — is the JSDoc above \`const meta\` missing?`);
	}
	if (!tags.summary) failures.push(`${id}: no @summary`);
	if (props.length === 0 && !NO_OWN_PROPS.has(id)) failures.push(`${id}: no props`);
	if (!entry.import?.trim()) failures.push(`${id}: no import line`);
}

if (failures.length > 0) {
	console.error(`✗ ${MANIFEST} is incomplete:\n`);
	for (const failure of failures) console.error(`  · ${failure}`);
	console.error(
		'\nThe docs page is not proof: it has its own docgen path and stays correct ' +
			'while these entries are empty. See AGENTS.md, MCP server.'
	);
	process.exit(1);
}

console.log(`✓ ${entries.length} manifest entries carry a description, a @summary and props`);
