import * as lucide from 'lucide-react';
import { describe, expect, it } from 'vitest';

import * as custom from './custom';
import * as icons from './index';

describe('icons barrel', () => {
	it('should re-export every custom icon', () => {
		for (const name of Object.keys(custom)) {
			expect(icons[name as keyof typeof icons]).toBe(custom[name as keyof typeof custom]);
		}
	});

	it('should not reuse a name lucide already exports', () => {
		expect(Object.keys(custom).filter(name => name in lucide)).toEqual([]);
	});
});
