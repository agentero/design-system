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

| Legacy                             | Here                                                        |
| ---------------------------------- | ----------------------------------------------------------- |
| `Form.Root` (wraps `FormProvider`) | `Form.Root` from `@agentero/design-system/form`             |
| `FieldText`                        | `FormText` from `@agentero/design-system/form-text`         |
| `FieldPhoneNumber`                 | `FormTel` from `@agentero/design-system/form-tel`           |
| `FieldNumber`                      | `FormNumber` from `@agentero/design-system/form-number`     |
| `FieldPassword`                    | `FormPassword` from `@agentero/design-system/form-password` |
| Other `Field<X>`                   | their `Form<X>`, as each control lands                      |

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

## `FieldPhoneNumber` → `FormTel`

`FormTel` is `FormText` with an `InputTel` in place of the `Input`, so the
`FieldText` mapping above holds for every prop the two share. What is specific
to the phone field:

| Legacy                        | Here                        | Note                                                                                                    |
| ----------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------- |
| `registerOptions`             | `rules`                     | react-hook-form's rules, without `valueAs*` or `setValueAs` ([Coercion](#coercion-gates-the-migration)) |
| `defaultValue`                | `useForm`'s `defaultValues` | written masked, `(555) 123-4567`                                                                        |
| `placeholder`, `autoFocus`    | `inputProps`                |                                                                                                         |
| `size`                        | `inputProps.size`           | defaults to `md`; `agentero/mono`'s legacy field defaulted to `sm`                                      |
| `type`                        | —                           | `InputTel` owns it: always `tel`                                                                        |
| `displayErrorMessage={false}` | —                           | not in v1, as for `FormText`                                                                            |

**Stored value.** The form holds the masked text, `(555) 123-4567`, as the
legacy field did. A partial number may end in a separator: typing leaves the
one before the next digit (`(555) 123-`), deleting trims it (`(555) 123`).
Schemas that validate the legacy value keep working unchanged.

**What changes.**

- The `+1` prefix is part of `InputTel`. Of the two legacy fields, only
  `producerflow/mono`'s drew it, around its own input; `agentero/mono`'s
  already rendered this `InputTel`. Nothing to do at the call site.
- A value the form writes (`defaultValues`, `reset`, `setValue`) is shown as
  given: the mask only runs on what the user types or pastes. The legacy field
  behaved the same way, so a call site that loads bare digits from the API was
  already showing them unmasked. Those digits look filled in but fail a
  `pattern` rule for the masked format on submit, so mask them before writing.

## `FieldNumber` → `FormNumber`

`FormNumber` is `FormText` with an `InputNumber` in place of the `Input`. What
is specific to the numeric field:

| Legacy                                                          | Here                        | Note                                                                                                    |
| --------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------- |
| `registerOptions`                                               | `rules`                     | react-hook-form's rules, without `valueAs*` or `setValueAs` ([Coercion](#coercion-gates-the-migration)) |
| `defaultValue`                                                  | `useForm`'s `defaultValues` | the legacy prop set the input only, not the form                                                        |
| `thousandSeparator`, `allowLeadingZeros`                        | `inputProps`                | `thousandSeparator` now defaults to `false`, see below                                                  |
| `placeholder`, `autoFocus`, `maxLength`, `onFocus`, `onKeyDown` | `inputProps`                |                                                                                                         |
| `inputClassName` (`producerflow/mono`)                          | `inputProps.className`      |                                                                                                         |
| `size`                                                          | `inputProps.size`           | defaults to `md`; `agentero/mono`'s legacy field defaulted to `sm`                                      |
| `maxValue`                                                      | `inputProps.maxNumber`      | the legacy `max` attribute did nothing on a text input; `maxNumber` blocks the keystroke                |
| `minValue`                                                      | `rules.validate`            | parse the text there; see below                                                                         |
| `type`                                                          | —                           | drop it: `type` no longer picks the keypad (see below); keep `inputProps.type: 'password'` for a PIN    |
| `status` (`producerflow/mono`)                                  | —                           | the field's validation state drives the border                                                          |
| `displayErrorMessage={false}`                                   | —                           | not in v1, as for `FormText`                                                                            |

**Stored value.** The form holds the formatted text, as the legacy field did:
`"1,234"` with a separator, `"001234"` for an identifier, `""` when empty.
Parse it where the number is used. A form that types the path as `number` does
not compile against `FormNumberPath`: type it as a string and parse it in the
resolver or on submit.

With `zodResolver`, the form's values take the schema's input type. Under zod 4
`z.coerce.number()` and `z.preprocess(...)` take `unknown`, which does not
compile either. Declare the field as a string and transform it, so the path
binds and `onSubmit` still receives the number:

```ts
amount: z.string()
	.transform(value => Number(value.replaceAll(',', '')))
	.pipe(z.number().min(100));
```

**What changes.**

- `thousandSeparator` defaults to `false`; the legacy default was `true`. An
  amount field that relied on it passes `inputProps={{ thousandSeparator: true }}`.
  An identifier field (NPN, ZIP code) drops the `thousandSeparator={false}` it
  had to pass.
- With `thousandSeparator` set, leading zeros are dropped. The legacy field
  showed `0,001,234`.
- The keypad is decimal (`inputMode="decimal"`) whatever the `type`.
  `producerflow/mono`'s legacy field showed the phone keypad, through its
  default `type="tel"`; an identifier field that wants digits only passes
  `inputProps.inputMode: 'numeric'`. `agentero/mono` already renders the
  design-system `InputNumber`, so its keypad does not change.
- react-hook-form's `min` and `max` rules read the text as a number. They work
  on `"1234"`, but with `thousandSeparator` set they pass silently on
  `"1,234"`, which reads as `NaN`. Bound such an amount with
  `inputProps.maxNumber` or with a `validate` rule that strips the commas:
  `validate: value => Number(value.replaceAll(',', '')) >= 100 || 'Enter at least 100.'`.
  A plain `Number(value)` is `NaN` on `"1,000"` too.

## `FieldPassword` → `FormPassword`

`FormPassword` is `FormText` with an `InputPassword` in place of the `Input`.
What is specific to the password field:

| Legacy                                     | Here              | Note                                                               |
| ------------------------------------------ | ----------------- | ------------------------------------------------------------------ |
| `autoComplete`, `autoFocus`, `placeholder` | `inputProps`      | set `autoComplete` to `current-password` or `new-password`         |
| `size`                                     | `inputProps.size` | defaults to `md`; `agentero/mono`'s legacy field defaulted to `sm` |

**Stored value.** The text as typed, as before. The show/hide toggle only
changes what the input displays.

**A field that picks its control at runtime.** The carrier credentials forms
in `agentero/mono` render `isHidden ? FieldPassword : FieldText`. The same
switch works here, `isHidden ? FormPassword : FormText`, since both take the
same field props and `inputProps`; leave `type` out of `inputProps`, which
`FormPassword` does not accept.

**Password inputs wired by hand.** Besides `FieldPassword`, `agentero/mono`
spreads `register` into a bare `InputPassword` next to its own `Label` and
error message. Each of those becomes one `FormPassword`.
