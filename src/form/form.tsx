'use client';

import { ComponentPropsWithRef } from 'react';

import {
	type FieldValues,
	FormProvider,
	type SubmitHandler,
	type UseFormReturn
} from 'react-hook-form';

export type FormRootProps<
	TFieldValues extends FieldValues = FieldValues,
	TTransformedValues = TFieldValues
> = Omit<ComponentPropsWithRef<'form'>, 'onSubmit' | 'noValidate'> & {
	/**
	 * The object `useForm()` returns. `Form.Root` hands it to every form field
	 * inside through react-hook-form's `FormProvider`, so a `FormText` needs only
	 * its `name`. Create it in the component that owns the form and pass
	 * `defaultValues`: a field whose value is `undefined` on the first render
	 * starts uncontrolled. A form whose resolver transforms the values
	 * (`useForm<Input, Context, Output>`) is accepted as is.
	 */
	methods: UseFormReturn<TFieldValues, any, TTransformedValues>;
	/**
	 * Called with the validated values once validation passes: the resolver's
	 * output when it transforms them, the form's values otherwise. Wrapped in
	 * `methods.handleSubmit`, which prevents the native submit and focuses the
	 * first invalid field; when it is omitted the form validates and does nothing
	 * else.
	 */
	onSubmit?: SubmitHandler<TTransformedValues>;
	/**
	 * Accessible name of the form. A `<form>` only becomes a landmark when it is
	 * named, and screen readers list landmarks by name, so it is required.
	 */
	'aria-label': string;
};

const noop = () => {};

/**
 * The `<form>` element of a react-hook-form form: it provides the `useForm()`
 * instance to the form fields inside it (`FormText` and the other `Form<X>`
 * components) and routes the submit through `handleSubmit`. It always renders
 * `noValidate`, so the `required` attribute a field sets reaches assistive
 * technology without the browser's own validation bubble getting in the way:
 * validation is react-hook-form's, from `rules` or a resolver.
 *
 * Use it around any form built with the `Form<X>` fields. Without
 * react-hook-form, render a plain `<form>` with the presentational primitives
 * ([FieldText](?path=/docs/components-fieldtext--docs)) instead — this
 * component is only the binding.
 *
 * `react-hook-form` is an optional peer dependency: the design system never
 * bundles its own copy, because `FormProvider` and the fields must share one
 * React context. Two copies in an app (a nested version under a workspace,
 * say) make every field throw from `useController`; `yarn why react-hook-form`
 * should list a single instance.
 *
 * @summary Form element bound to a react-hook-form instance, shared with its fields
 *
 * @example
 * const methods = useForm<Values>({ defaultValues: { agencyName: '', email: '' } });
 *
 * <Form.Root methods={methods} onSubmit={saveAgency} aria-label="Agency profile">
 *   <FormText name="agencyName" label="Agency name" required rules={{ required: 'Enter the agency name.' }} />
 *   <FormText name="email" label="Email" inputProps={{ type: 'email' }} />
 *   <Button type="submit">Save</Button>
 * </Form.Root>
 */
export const Root = <
	TFieldValues extends FieldValues = FieldValues,
	TTransformedValues = TFieldValues
>({
	methods,
	onSubmit,
	...props
}: FormRootProps<TFieldValues, TTransformedValues>) => (
	<FormProvider {...methods}>
		{/* `noValidate` goes after the spread on purpose: the native `required` a
		    field sets must never raise the browser's validation bubble. */}
		<form
			data-slot="form"
			onSubmit={methods.handleSubmit(onSubmit ?? noop)}
			{...props}
			noValidate
		/>
	</FormProvider>
);

Root.displayName = 'Form.Root';
