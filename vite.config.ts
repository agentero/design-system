/// <reference types="vitest/config" />
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
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

function generatePackageJson(): Plugin {
	return {
		name: 'generate-package-json',
		closeBundle() {
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

			exports['./theme'] = './theme/base.css';
			exports['./package.json'] = './package.json';

			const distPkg = {
				name: rootPkg.name,
				version: rootPkg.version,
				type: rootPkg.type,
				license: rootPkg.license,
				sideEffects: false,
				exports,
				peerDependencies: rootPkg.peerDependencies,
				dependencies: rootPkg.dependencies
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
		...isStorybook
			? []
			: [
					dts({
						entryRoot: '.',
						exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx']
					}),
					generatePackageJson(),
					cleanDist()
				]
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
