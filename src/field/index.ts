// The published surface of the field layer is the generic `Field`, the
// ready-made fields (`FieldText` today, `Field<X>` per control later) and the
// documented escape hatch. The `FieldRoot`/`FieldLabel`/`FieldControl`/
// `FieldDescription`/`FieldError` parts stay internal on purpose: a consumer
// who cannot compose a field cannot produce a field that looks unlike every
// other one. Publishing them later is additive; taking them back would be a
// breaking change, so they stay in until a real need argues otherwise.
export { FieldContext, useFieldContext } from './context';
export type { FieldContextValue } from './context';
export { Field, fieldRecipe } from './field';
export type { FieldErrorLike, FieldProps, FieldVariants } from './field';
export { FieldText } from './field-text';
export type { FieldTextProps } from './field-text';
