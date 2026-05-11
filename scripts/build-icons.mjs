import { build } from 'esbuild';
import svgrPlugin from 'esbuild-plugin-svgr';
import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { svgoConfig } from './svgo-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRY = path.join(ROOT, 'src/icons/index.ts');
const OUT_DIR = path.join(ROOT, 'lib/icons');
const OUT_FILE = path.join(OUT_DIR, 'index.jsx');
const TYPES_OUT = path.join(OUT_DIR, 'index.d.ts');

await mkdir(OUT_DIR, { recursive: true });

await build({
	entryPoints: [ENTRY],
	outfile: OUT_FILE,
	external: ['react', 'react/jsx-runtime'],
	bundle: true,
	format: 'esm',
	jsx: 'automatic',
	minify: true,
	sourcemap: false,
	plugins: [
		svgrPlugin({
			jsxRuntime: 'automatic',
			plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
			svgoConfig
		})
	]
});

await copyFile(ENTRY, TYPES_OUT);
console.log(`✓ built ${OUT_FILE}`);
console.log(`✓ wrote ${TYPES_OUT}`);
