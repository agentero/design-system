import { ComponentProps } from 'react';

import { expectTypeOf, it } from 'vitest';

import { Checkbox } from './index';

it('should reject children passed as a label', () => {
	expectTypeOf<ComponentProps<typeof Checkbox>>().not.toHaveProperty('children');
});
