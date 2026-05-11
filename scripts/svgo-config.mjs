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

// Normalize icon color to inherit from text: any fillable shape that isn't
// explicitly `fill="none"` (outline-only) gets `fill="currentColor"`. Lets
// authors drop in SVGs with hex fills or no fill at all and have them behave
// identically — color is always driven by the consumer's CSS color.
const FILLABLE = new Set(['path', 'circle', 'rect', 'ellipse', 'polygon', 'polyline']);
const forceCurrentColorOnFillableElements = {
	name: 'forceCurrentColorOnFillableElements',
	fn: () => ({
		element: {
			enter(node) {
				if (!FILLABLE.has(node.name)) return;
				if (node.attributes.fill === 'none') return;
				node.attributes.fill = 'currentColor';
			}
		}
	})
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
		forceCurrentColorOnFillableElements,
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
