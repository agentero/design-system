import { type FieldValues } from 'react-hook-form';
import { expectTypeOf, it } from 'vitest';

import { type FormCheckboxPath } from './index';

type AgencyValues = {
	acceptTerms: boolean;
	consents: { marketing: boolean | null; sms?: boolean };
	name: string;
	carriers: number;
};

it('should take only the paths holding a boolean on a typed form', () => {
	expectTypeOf<FormCheckboxPath<AgencyValues>>().toEqualTypeOf<
		'acceptTerms' | 'consents.marketing' | 'consents.sms'
	>();
});

it('should take any path on an untyped form', () => {
	expectTypeOf<FormCheckboxPath<FieldValues>>().toEqualTypeOf<string>();
});
