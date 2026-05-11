import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { build } from 'esbuild';
import svgrPlugin from 'esbuild-plugin-svgr';

import { svgoConfig } from './svgo-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const entryPoint = path.resolve(rootDir, 'src/icons/index.ts');
const outDir = path.resolve(rootDir, 'lib/icons');
const outfile = path.join(outDir, 'index.jsx');

await build({
	entryPoints: [entryPoint],
	outfile,
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

mkdirSync(outDir, { recursive: true });

const source = readFileSync(entryPoint, 'utf-8');
const names = Array.from(
	source.matchAll(/export\s*\{\s*default\s+as\s+(\w+)\s*\}\s*from\s*['"][^'"]+\.svg['"]/g),
	match => match[1]
);

const declaration = [
	"import type { ComponentType, SVGProps } from 'react';",
	'',
	...names.map(name => `export declare const ${name}: ComponentType<SVGProps<SVGSVGElement>>;`),
	''
].join('\n');

writeFileSync(path.join(outDir, 'index.d.ts'), declaration);
