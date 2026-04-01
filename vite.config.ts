/// <reference types="vitest/config" />
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { build as esbuild } from 'esbuild';
import { globSync } from 'tinyglobby';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import rootPkg from './package.json';

const __dirname =
	typeof globalThis.__dirname !== 'undefined'
		? globalThis.__dirname
		: path.dirname(fileURLToPath(import.meta.url));

const componentEntries = globSync('src/*/index.{ts,tsx}');

const entry = Object.fromEntries([
	...componentEntries.map(file => [`src/${path.basename(path.dirname(file))}/index`, `./${file}`]),
	['lib/index', './lib/index.ts']
]);

function cleanDist(): Plugin {
	return {
		name: 'clean-dist',
		closeBundle() {
			const distDir = path.resolve(__dirname, 'dist');
			for (const dir of ['_virtual', 'node_modules']) {
				const target = path.join(distDir, dir);
				if (fs.existsSync(target)) {
					fs.rmSync(target, { recursive: true });
				}
			}
		}
	};
}

function bundleMcpServer(): Plugin {
	return {
		name: 'bundle-mcp-server',
		async closeBundle() {
			const distMcp = path.resolve(__dirname, 'dist', 'mcp');
			const manifestsSrc = path.resolve(__dirname, 'storybook-static', 'manifests');

			if (!fs.existsSync(path.join(manifestsSrc, 'components.json'))) {
				console.warn(
					'\n⚠ Skipping MCP server: storybook-static/manifests/components.json not found.' +
						'\n  Run "yarn build-storybook" first to include the MCP server in the build.\n'
				);
				return;
			}

			await esbuild({
				entryPoints: [path.resolve(__dirname, 'mcp', 'server.ts')],
				bundle: true,
				platform: 'node',
				format: 'esm',
				target: 'node20',
				outfile: path.join(distMcp, 'server.mjs'),
				banner: { js: '#!/usr/bin/env node' }
			});

			const manifestsDest = path.join(distMcp, 'manifests');
			fs.mkdirSync(manifestsDest, { recursive: true });
			for (const file of fs.readdirSync(manifestsSrc)) {
				fs.copyFileSync(path.join(manifestsSrc, file), path.join(manifestsDest, file));
			}
		}
	};
}

function generatePackageJson(): Plugin {
	return {
		name: 'generate-package-json',
		closeBundle() {
			const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));

			const exports: Record<string, string | { types: string; import: string }> = {};

			for (const file of componentEntries) {
				const name = path.basename(path.dirname(file));
				exports[`./${name}`] = {
					types: `./src/${name}/index.d.ts`,
					import: `./src/${name}/index.js`
				};
			}

			exports['./lib'] = {
				types: './lib/index.d.ts',
				import: './lib/index.js'
			};

			exports['./theme.css'] = './theme/base.css';
			exports['./mcp'] = './mcp/server.mjs';
			exports['./package.json'] = './package.json';

			const distPkg = {
				name: pkg.name,
				version: pkg.version,
				description: pkg.description,
				type: pkg.type,
				license: pkg.license,
				sideEffects: false,
				homepage: pkg.homepage,
				repository: pkg.repository,
				bugs: pkg.bugs,
				keywords: pkg.keywords,
				exports,
				bin: { 'design-system-mcp': './mcp/server.mjs' },
				peerDependencies: pkg.peerDependencies,
				dependencies: pkg.dependencies
			};

			const distDir = path.resolve(__dirname, 'dist');

			fs.writeFileSync(
				path.join(distDir, 'package.json'),
				JSON.stringify(distPkg, null, '\t') + '\n'
			);

			for (const file of ['README.md', 'LICENSE']) {
				const src = path.resolve(__dirname, file);
				if (fs.existsSync(src)) {
					fs.copyFileSync(src, path.join(distDir, file));
				}
			}

			const themeDir = path.join(distDir, 'theme');
			fs.mkdirSync(themeDir, { recursive: true });
			fs.copyFileSync(
				path.resolve(__dirname, 'themes', 'base.css'),
				path.join(themeDir, 'base.css')
			);
		}
	};
}

const isStorybook = process.env.STORYBOOK === 'true';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		...(isStorybook
			? []
			: [
					dts({
						entryRoot: '.',
						exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx']
					}),
					generatePackageJson(),
					bundleMcpServer(),
					cleanDist()
				])
	],
	build: {
		sourcemap: false,
		lib: {
			entry,
			formats: ['es']
		},
		rollupOptions: {
			external: [
				...Object.keys(rootPkg.peerDependencies),
				...Object.keys(rootPkg.dependencies),
				'react/jsx-runtime'
			],
			output: {
				preserveModules: true,
				preserveModulesRoot: '.'
			}
		}
	},
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(__dirname, '.storybook')
					})
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [{ browser: 'chromium' }]
					}
				}
			}
		]
	}
});
