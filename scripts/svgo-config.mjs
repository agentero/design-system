// SVGO config shared by the esbuild + SVGR icon pipeline. Mirrors the
// configuration used by `@agentero/icons` in producerflow/mono so that both
// packages emit `<svg>` roots with the same `data-icon` attribute and
// runtime-unique internal IDs. The only deviation: the `data-icon` value is
// normalized from snake_case (which is what `@material-symbols/svg-400`
// ships) to kebab-case, matching producerflow's convention.

let idCounter = 0;
const generateUniqueId = () => {
	idCounter++;
	return `svg_${idCounter}_${Date.now()}`;
};

const addDataIconAttribute = {
	name: 'addDataIconAttribute',
	fn: (_root, _params, info) => {
		const filePath = info.path || '';
		const fileName = filePath.split('/').pop().replace('.svg', '');
		const iconName = fileName.replace(/_/g, '-');

		return {
			element: {
				enter(node) {
					if (node.name === 'svg') {
						node.attributes['data-icon'] = iconName;
					}
				}
			}
		};
	}
};

export const svgoConfig = {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					removeViewBox: false,
					convertShapeToPath: false,
					cleanupIds: false
				}
			}
		},
		addDataIconAttribute,
		{
			name: 'prefixIds',
			params: {
				prefix: () => generateUniqueId(),
				prefixIds: true,
				prefixClassNames: false
			}
		}
	]
};
