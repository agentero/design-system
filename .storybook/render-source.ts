/**
 * The "Show code" snippet cut from the story file as written: the body of the
 * story's `render`, for a `render` that takes no args or that uses hooks.
 *
 * Storybook's own fallback for a story without args prints the whole story
 * object, `play` included, and its `dynamic` snippet prints every handler as
 * `() => {}`, a hook's return value (a `useForm` `methods`) in full and a
 * hook-using wrapper as just its name. The file text keeps the handlers and the
 * hooks, so no story has to repeat its code in `parameters.docs.source.code`.
 * A `render` that takes args and is a single expression gets `undefined`, and
 * keeps the dynamic snippet that follows the controls.
 *
 * Relies on the shape oxfmt gives every story file: `export const Name: Story = {`,
 * properties one tab deep, and a `render` that is `(…) => (…)`, `(…) => {…}` or
 * a single-line `(…) => <X />`.
 */

const storyFiles = import.meta.glob<string>('../src/**/*.stories.tsx', {
	query: '?raw',
	import: 'default',
	eager: true
});

const TAB = '\t';

const dedent = (lines: string[], depth: number) =>
	lines.map(line => (line.startsWith(TAB.repeat(depth)) ? line.slice(depth) : line.trimStart()));

const toSpaces = (lines: string[]) =>
	lines
		.map(line => line.replace(/^\t+/, tabs => '  '.repeat(tabs.length)))
		.join('\n')
		.trim();

/** `const [a, setA] = useState(…)` … `return (<X />);` → the statements, a blank line, then the JSX. */
const blockBody = (lines: string[]) => {
	const returnAt = lines.findLastIndex(line => /^\t\treturn\b/.test(line));
	if (returnAt === -1) return toSpaces(dedent(lines, 2));

	const statements = dedent(lines.slice(0, returnAt), 2);
	const returned = lines[returnAt]!.replace(/^\t\treturn\s*/, '');
	const jsx =
		returned === '('
			? dedent(
					lines.slice(
						returnAt + 1,
						lines.findLastIndex(line => line === '\t\t);')
					),
					3
				)
			: [returned.replace(/;$/, '')];

	return [toSpaces(statements), toSpaces(jsx)].filter(Boolean).join('\n\n');
};

const renderBody = (story: string[]) => {
	const start = story.findIndex(line => line.startsWith('\trender: '));
	const signature = story[start]?.match(/^\trender: (\(\)|\w+|\([^)]*\)) =>\s*(.*)$/);
	if (!signature) return undefined;

	const [, params, head] = signature;
	if (head === '{') {
		const end = story.findIndex((line, index) => index > start && /^\t\S/.test(line));
		return blockBody(story.slice(start + 1, end));
	}
	if (params !== '()') return undefined;
	if (head !== '(') return head!.replace(/,$/, '');

	const end = story.findIndex((line, index) => index > start && /^\t\S/.test(line));
	return toSpaces(dedent(story.slice(start + 1, end), 2));
};

export const renderSource = (fileName: string, storyName: string) => {
	const file = storyFiles[`.${fileName}`];
	if (!file) return undefined;

	// Story names are the export names start-cased, so dropping the spaces and the case finds the export.
	const target = storyName.replace(/\s/g, '').toLowerCase();
	const declaration = [...file.matchAll(/^export const (\w+): Story = \{$/gm)].find(
		match => match[1]!.toLowerCase() === target
	);
	if (!declaration) return undefined;

	const start = declaration.index + declaration[0].length + 1;
	const story = file.slice(start, file.indexOf('\n};', start)).split('\n');

	return renderBody(story);
};
