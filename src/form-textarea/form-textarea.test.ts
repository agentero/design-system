import { type FieldValues } from 'react-hook-form';
import { expectTypeOf, it } from 'vitest';

import { type FormTextAreaPath } from './index';

type PropertyValues = {
	notes: string;
	owner: { name: string | null; middleName?: string };
	yearBuilt: number;
	vacant: boolean;
};

it('should take only the paths holding a string on a typed form', () => {
	expectTypeOf<FormTextAreaPath<PropertyValues>>().toEqualTypeOf<
		'notes' | 'owner.name' | 'owner.middleName'
	>();
});

it('should take any path on an untyped form', () => {
	expectTypeOf<FormTextAreaPath<FieldValues>>().toEqualTypeOf<string>();
});
