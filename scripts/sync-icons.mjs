import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'node_modules/@material-symbols/svg-400/rounded');
const SVG_OUT = path.join(ROOT, 'src/icons/svg');
const INDEX_OUT = path.join(ROOT, 'src/icons/index.ts');

const manifest = JSON.parse(await readFile(path.join(ROOT, 'src/icons/manifest.json'), 'utf8'));

const toComponentName = filename => {
	const parts = filename.split(/[_-]/);
	if (parts[parts.length - 1] === 'fill') {
		parts[parts.length - 1] = 'Filled';
	}
	const pascal = parts.map(p => p[0].toUpperCase() + p.slice(1)).join('');
	return `Icon${pascal}`;
};

await rm(SVG_OUT, { recursive: true, force: true });
await mkdir(SVG_OUT, { recursive: true });

const exportLines = [];

for (const filename of manifest) {
	const srcPath = path.join(SOURCE_DIR, `${filename}.svg`);
	const destPath = path.join(SVG_OUT, `${filename}.svg`);
	await copyFile(srcPath, destPath);

	const componentName = toComponentName(filename);
	exportLines.push(`export { default as ${componentName} } from './svg/${filename}.svg';`);
	console.log(`✓ synced ${filename}.svg → ${componentName}`);
}

await writeFile(INDEX_OUT, exportLines.join('\n') + '\n');
console.log(`✓ wrote ${INDEX_OUT}`);
