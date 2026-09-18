# Migrating legacy form fields

How a `@agentero/ui` `Field<X>` call site moves to this design system. The
adoption tickets are PF-6947 (`producerflow/mono`) and MKT-1585
(`agentero/mono`).

## The rule

A legacy `Field<X>` maps to the new **`Form<X>`**, never to the new
presentational `Field<X>`.

The names collide but the layers do not. The legacy `Field<X>` is bound to
react-hook-form: it calls `register` and reads `formState.errors` itself. Its
equivalent here is `Form<X>`, which does the same through `useController`. The
new `Field<X>` is the presentational layer underneath, with no form library in
it — reach for it only when the layout is not the standard one and you are
wiring `useController` yourself.

| Legacy                             | Here                                                |
| ---------------------------------- | --------------------------------------------------- |
| `Form.Root` (wraps `FormProvider`) | `Form.Root` from `@agentero/design-system/form`     |
| `FieldText`                        | `FormText` from `@agentero/design-system/form-text` |
| Other `Field<X>`                   | their `Form<X>`, as each control lands              |

## Prop mapping for `FieldText` → `FormText`

| Legacy                                                                                        | Here                                | Note                                                                                              |
| --------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| `name`, `label`, `optional`, `disabled`                                                       | same                                |                                                                                                   |
| `help`                                                                                        | `description`                       | the helper text under the control                                                                 |
| `description`                                                                                 | `tooltip`                           | legacy passed it to the label as `info`, an info tooltip                                          |
| `type`, `placeholder`, `maxLength`, `autoComplete`, `autoFocus`, `onPaste`, `onFocus`, `size` | `inputProps`                        | everything the `<input>` itself takes                                                             |
| `onChange`, `onBlur`                                                                          | `inputProps`                        | they run after react-hook-form's, which are already wired                                         |
| `id`                                                                                          | `controlId` on the field            | ids are generated; set this one only when something outside must point at the control             |
| `defaultValue`                                                                                | `useForm`'s `defaultValues`         | the form owns the initial value; `FormText` never takes one, so it moves up to the `useForm` call |
| `minValue`, `maxValue`                                                                        | `inputProps.min` / `inputProps.max` | native attributes on the `<input>`                                                                |
| `aria-label`                                                                                  | —                                   | not in v1: every field is labelled                                                                |
| `displayErrorMessage={false}`                                                                 | —                                   | not in v1: render the primitives directly for a field whose message lives elsewhere               |
| `getReadonlyValue`                                                                            | —                                   | the read-only view belongs to dynamic forms, not to this layer                                    |
| `nested`                                                                                      | —                                   | it only changed the spacing; the surrounding layout owns it here (`Field.Group`)                  |
| `children` (nested sub-fields)                                                                | —                                   | the dependent sub-fields container is ENG-2170                                                    |
| `valueAsNumber`                                                                               | —                                   | see below                                                                                         |

`required` is new and separate: it marks the field visually and natively.
Validation stays in `rules` or in the form's resolver, and `rules.required`
does not mark the field.

## Coercion gates the migration

`FormText` binds the value with `useController`, and react-hook-form does not
accept `valueAsNumber`, `valueAsDate` or `setValueAs` there — it excludes them
from `UseControllerProps['rules']`. The value therefore reaches the form as a
**string**.

So, before migrating a call site:

- **The legacy field did not coerce** → the value was already a string, the
  schema already accepts a string, and it makes no difference whether the form
  validates with zod or with yup. Migrate it.
- **The legacy field coerced** (`valueAsNumber` on `FieldText`, or
  `registerOptions={{ valueAsNumber | valueAsDate | setValueAs }}` on the
  numeric fields) → do not migrate it to `FormText`. Wait for the `Form<X>` of
  that control, which owns its own value mapping and can convert before storing.
  Migrating it anyway changes the submitted type, and a schema that does not
  cast breaks: `z.number()` rejects `"60"`, while `yup.number()` would cast it.
  When the form is typed (`useForm<Values>` and `<FormText<Values>`, or
  `control`), the type system enforces this: `name` only accepts paths whose
  value is a string (`FormTextPath`), so a `z.number()` field fails to compile
  rather than at validation.

Find them with:

```sh
rg 'valueAsNumber|valueAsDate|setValueAs' --glob '!**/node_modules/**' -t ts
```

Known blocked call sites, all the same field and all in `producerflow/mono`
(`ownershipPercentage`, typed `z.number()` in
`modules/agencies/ui/individualForm/useIndividualForm.ts`):

- `producerflow-ui/modules/agencies/ui/individualForm/OwnershipPercentageField.tsx`
- `producerflow-ui/modules/agencies/ui/shared/IndividualFormFields.tsx`
- `producerflow-ui/modules/agencies/ui/shared/FirmFormFields.tsx`

`agentero/mono` has no coercing `FieldText`; its `valueAsNumber` and
`setValueAs` sit on `FieldInteger`, which migrates with its own `Form<X>`.

## Validation library

This layer never sees it. `Form.Root` takes the `useForm()` instance from
outside, so the resolver is the consumer's: zod and yup both work, including
side by side in the same app. `FormText` reads only `fieldState.invalid` and
`fieldState.error`, which react-hook-form normalises the same way for every
resolver.

Two shapes are worth knowing:

- **`criteriaMode: 'all'`** on the form makes react-hook-form collect every rule
  that failed rather than stopping at the first, in the error's `types`.
  `Field.Error` renders them all, so this works both through `Form<X>` and in a
  layout wired by hand.
- **An error on an object or array path** — a zod `.refine()` or a yup `.test()`
  declared without a `path` that points at a leaf — lands on that path's
  `error.root` and belongs to no field, so no `FormText` renders it. Give the
  refinement a leaf `path`, or render a `Field.Error` where the group lives.
