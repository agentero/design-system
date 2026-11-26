import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./merge-props-GNsc3KMc.js";import{n as i,t as a}from"./button-BwCmvAjz.js";import{n as o,t as s}from"./field-wFNLybdV.js";import{n as c,t as l}from"./textarea-DlWZDM9A.js";import{n as u,t as d}from"./field-textarea-CzFwXXvX.js";import{a as f,r as p}from"./index.esm-C4UtmdDD.js";import{a as m,i as h,n as g,r as _,t as v}from"./form-BPqEmImk.js";var y,b;function x(){return(x=e((()=>{n(),u(),h(),c(),y=t(),b=({textAreaProps:e,...t})=>{let{field:n,rootProps:i,shellProps:a}=m(t),o={name:n.name,value:n.value??``,onChange:n.onChange,onBlur:n.onBlur,ref:n.ref};return(0,y.jsx)(d,{...i,children:(0,y.jsx)(_,{...a,children:(0,y.jsx)(l,{...r(o,e??{})})})})},b.displayName=`FormTextArea`;try{b.displayName=`FormTextArea`,b.__docgenInfo={description:"A complete multi-line text field bound to one react-hook-form value: label,\n`TextArea`, helper text and validation error, laid out in the standard order\nand wired through `useController`. It renders inside a `Form.Root`, which\nprovides the form, and needs only a `name`, which on a typed form must point\nat a string (`FormTextAreaPath`). The `required`, `invalid` and error states\nreach the label, the text area's `aria-*` attributes and the message with no\nids written by hand.\n\nThe value is controlled, so a `limit` in `textAreaProps` counts what the\nform holds, `reset` and `setValue` included. `rules.maxLength` only\nvalidates: it shows no count, so set `limit` alongside it. The field is\nalways vertical, like\n[FieldTextArea](?path=/docs/components-fieldtextarea--docs): there is no\n`orientation`.\n\nUse it for the common case: a labelled text area in a form. For another\nlayout, compose the primitives yourself: `useController` with\n`FieldTextArea`, `Label`, `TextArea`, `Field.Description` and `Field.Error`.\n`FormTextArea` adds no behaviour of its own over that composition.\n\nErrors come from `useController`'s per-field state, never from\n`formState.errors`, so the message stays fresh under the React Compiler.\nWith `criteriaMode: 'all'` on the form the error carries every rule that\nfailed and `Field.Error` lists them all.",displayName:`FormTextArea`,filePath:`/home/runner/work/design-system/design-system/src/form-textarea/form-textarea.tsx`,methods:[],props:{disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.\nDisables the control and marks the field. Unlike react-hook-form's own\n`disabled` option, the value stays in the submitted data: disabling a\nfield is a presentation decision, not a change to the form's values.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.\nMarks the field required: an asterisk on the label and the native\n`required` attribute on the control, which assistive technology\nannounces. It does not validate — pair it with `rules.required` or a\nresolver — and it never triggers the browser bubble, since `Form.Root`\nrenders `noValidate`.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Path of the value in the form, nested paths included (`'agency.npn'`).\nType it against the form's values by passing their type as the\ncomponent's first generic, or by passing `control`: the path must then\nexist and hold a value of the field's type.",name:`name`,required:!0,tags:{},type:{name:`string`}},control:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"The form's `control`, from `useForm()`. Defaults to the one the\nsurrounding `Form.Root` provides; pass it explicitly to get `name`\ninference without writing the generic, or when the field renders outside\na `Form.Root`. A `control` whose resolver transforms the values is\naccepted as is.",name:`control`,required:!1,tags:{},type:{name:`Control<TFieldValues, any, TTransformedValues>`}},rules:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"react-hook-form validation rules for this field (`required`, `pattern`,\n`validate`…), same as `register`'s. They only validate: `rules.required`\ndoes not mark the field `required` — that is a separate, visible decision.",name:`rules`,required:!1,tags:{},type:{name:`Omit<RegisterOptions<TFieldValues, TName>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">`}},shouldUnregister:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Drops the value from the form when the field unmounts, react-hook-form's\n`shouldUnregister`. Defaults to `false`: a field revealed by another one\nkeeps its value while hidden.",name:`shouldUnregister`,required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`The caption, rendered as the field's label. Text in almost every case.`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Helper text shown under the control, above the error when there is one,\nand announced through its `aria-describedby`. Use it for guidance the\nuser needs before typing; put details worth a click in `tooltip` instead.",name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},tooltip:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:`Content of an info tooltip rendered beside the label, for details that
would clutter the description. The trigger is a sibling of the label, so
the field's accessible name stays the label text.`,name:`tooltip`,required:!1,tags:{},type:{name:`ReactNode`}},tooltipSide:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:"Preferred side of the tooltip. Defaults to `'top'`.",name:`tooltipSide`,required:!1,tags:{},type:{name:`enum`,raw:`"top" | "right" | "bottom" | "left"`,value:[{value:`"top"`},{value:`"right"`},{value:`"bottom"`},{value:`"left"`}]}},optional:{defaultValue:null,declarations:[{fileName:`design-system/src/form/form-field.tsx`,name:`TypeLiteral`}],description:'Appends a muted " (optional)" to the label. The forms mark optional fields\nrather than required ones; ignored when `required` is set.',name:`optional`,required:!1,tags:{},type:{name:`boolean`}},textAreaProps:{defaultValue:null,declarations:[{fileName:`design-system/src/form-textarea/form-textarea.tsx`,name:`TypeLiteral`}],description:"Everything else the `TextArea` should receive: `placeholder`, `rows`,\n`limit`, `maxLength`, `size`, `className`… Handlers such as `onChange` and\n`onBlur` run after react-hook-form's, which are already wired.",name:`textAreaProps`,required:!1,tags:{},type:{name:`FormTextAreaTextAreaProps`}}},tags:{summary:`Label, TextArea, description and error bound to one react-hook-form field`,example:`<FormTextArea
  name="notes"
  label="Notes for the underwriter"
  description="Shared with the carrier."
  optional
  rules={{ maxLength: { value: 500, message: 'Keep it under 500 characters.' } }}
  textAreaProps={{ limit: 500, placeholder: 'Anything the underwriter should know' }}
/>`}}}catch{}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{p(),x(),i(),o(),g(),S=t(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/FormTextArea`,component:b,tags:[`autodocs`],argTypes:{name:{control:!1},label:{control:`text`},description:{control:`text`},tooltip:{control:`text`},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`}},args:{name:`reason`,label:`Reason`,required:!0,optional:!1,disabled:!1,readOnly:!1},parameters:{docs:{description:{component:"FormTextArea is a complete multi-line text field bound to one\nreact-hook-form value: label, `TextArea`, helper text and validation error\nin the standard order, wired through `useController`. It renders inside a\n`Form.Root` and needs only a `name`; `required`, `invalid` and the error\nreach the label, the text area's `aria-*` attributes and the message with no\nids written by hand.\n\nIt covers the common case. For another layout, compose `useController` with\nthe `FieldTextArea`, `Label`, `TextArea` and `Field.*` primitives directly."}}}},k=w(),A={render:e=>{let t=f({defaultValues:{reason:``}});return(0,S.jsxs)(v.Root,{methods:t,onSubmit:k,"aria-label":`Cancellation`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsx)(b,{rules:{required:`Tell us why you are cancelling.`},textAreaProps:{placeholder:`Tell us in your own words`},...e,name:`reason`}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Reason`});await C(n.tagName).toBe(`TEXTAREA`),await C(n).toBeRequired(),await C(n).toHaveAttribute(`name`,`reason`),await C(t.queryByRole(`alert`)).toBeNull(),await T.click(t.getByRole(`button`,{name:`Save`})),await C(await t.findByRole(`alert`)).toHaveTextContent(`Tell us why you are cancelling.`),await C(n).toHaveAttribute(`aria-invalid`,`true`),await C(k).not.toHaveBeenCalled(),await T.type(n,`Moving to another carrier.{enter}Effective next month.`),await E(()=>C(t.queryByRole(`alert`)).toBeNull()),await C(n).not.toHaveAttribute(`aria-invalid`),await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(k).toHaveBeenCalledWith({reason:`Moving to another carrier.
Effective next month.`},C.anything()))}},j={render:()=>{let e=f({defaultValues:{notes:``}});return(0,S.jsx)(v.Root,{methods:e,"aria-label":`Submission`,className:`max-w-120`,children:(0,S.jsx)(b,{name:`notes`,label:`Notes for the underwriter`,tooltip:`The carrier reads these before quoting.`,description:`Shared with the carrier along with the request.`,optional:!0})})},play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`textbox`,{name:`Notes for the underwriter (optional)`}),r=t.getByRole(`button`,{name:`More information`});await C(n).not.toBeRequired(),await C(n).toHaveAccessibleDescription(`Shared with the carrier along with the request.`),await C(r.closest(`label`)).toBeNull()}},M={render:()=>{let e=f({defaultValues:{notes:`Roof replaced in 2024.`}});return(0,S.jsxs)(v.Root,{methods:e,onSubmit:k,"aria-label":`Submission`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`notes`,label:`Notes`,rules:{maxLength:{value:40,message:`Keep it under 40 characters.`}},textAreaProps:{limit:40}}),(0,S.jsxs)(`div`,{className:`flex gap-2`,children:[(0,S.jsx)(a,{type:`submit`,children:`Save`}),(0,S.jsx)(a,{type:`button`,variant:`secondary`,onClick:()=>e.reset(),children:`Reset`}),(0,S.jsx)(a,{type:`button`,variant:`secondary`,onClick:()=>e.setValue(`notes`,``),children:`Clear`})]})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Notes`}),r=e.querySelector(`[data-slot=textarea-counter]`);await C(r).toHaveTextContent(`22/40`),await T.type(n,` Garage added after the hail.`),await C(r).toHaveTextContent(`51/40`),await T.click(t.getByRole(`button`,{name:`Save`})),await C(await t.findByRole(`alert`)).toHaveTextContent(`Keep it under 40 characters.`),await C(k).not.toHaveBeenCalled(),await T.click(t.getByRole(`button`,{name:`Reset`})),await E(()=>C(r).toHaveTextContent(`22/40`)),await C(n).toHaveValue(`Roof replaced in 2024.`),await T.click(t.getByRole(`button`,{name:`Clear`})),await E(()=>C(r).toHaveTextContent(`0/40`)),await C(n).toHaveValue(``)}},N={render:()=>{let e=f({defaultValues:{appetite:{notes:``}}});return(0,S.jsxs)(v.Root,{methods:e,onSubmit:k,"aria-label":`Appetite`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`appetite.notes`,label:`Appetite notes`,rules:{required:`Describe the appetite.`,minLength:{value:20,message:`Write at least 20 characters.`}}}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Appetite notes`}),r=t.getByRole(`button`,{name:`Save`});await C(n).toHaveAttribute(`name`,`appetite.notes`),await C(n).not.toBeRequired(),await T.click(r),await C(await t.findByRole(`alert`)).toHaveTextContent(`Describe the appetite.`),await T.type(n,`Coastal homes`),await T.click(r),await C(await t.findByRole(`alert`)).toHaveTextContent(`Write at least 20 characters.`),await C(k).not.toHaveBeenCalled(),await T.type(n,` built after 2000`),await T.click(r),await E(()=>C(k).toHaveBeenCalledWith({appetite:{notes:`Coastal homes built after 2000`}},C.anything())),await C(t.queryByRole(`alert`)).toBeNull()}},P={render:()=>{let e=f({defaultValues:{reason:``}});return(0,S.jsxs)(v.Root,{methods:e,onSubmit:k,"aria-label":`Cancellation`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsx)(b,{name:`reason`,label:`Reason`,description:`Shared with the carrier.`,rules:{required:`Tell us why you are cancelling.`}}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Reason`});await T.click(t.getByRole(`button`,{name:`Save`}));let r=await t.findByRole(`alert`),i=t.getByText(`Shared with the carrier.`);await C(n.closest(`[data-slot=textarea-root]`).nextElementSibling).toBe(i),await C(i.nextElementSibling).toBe(r),await C(n).toHaveAccessibleDescription(`Shared with the carrier. Tell us why you are cancelling.`),await C(k).not.toHaveBeenCalled()}},F=w(),I={render:()=>{let e=f({defaultValues:{notes:``}});return(0,S.jsx)(v.Root,{methods:e,"aria-label":`Submission`,className:`max-w-120`,children:(0,S.jsx)(b,{name:`notes`,label:`Notes`,textAreaProps:{placeholder:`Anything the underwriter should know`,rows:5,size:`sm`,onChange:t=>F(e.getValues(`notes`),t.target.value)}})})},play:async({canvasElement:e})=>{F.mockClear();let t=D(e).getByRole(`textbox`,{name:`Notes`});await C(t).toHaveAttribute(`placeholder`,`Anything the underwriter should know`),await C(t).toHaveAttribute(`rows`,`5`),await C(t).toHaveAttribute(`data-size`,`sm`),await T.type(t,`R`),await C(t).toHaveValue(`R`),await C(F).toHaveBeenCalledTimes(1),await C(F).toHaveBeenLastCalledWith(`R`,`R`)}},L={render:()=>{let e=f({defaultValues:{underwriterNotes:`Needs a wind mitigation report.`,reply:`Report attached.`}});return(0,S.jsxs)(v.Root,{methods:e,onSubmit:k,"aria-label":`Review`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsxs)(s.Group,{children:[(0,S.jsx)(b,{name:`underwriterNotes`,label:`Underwriter notes`,readOnly:!0}),(0,S.jsx)(b,{name:`reply`,label:`Reply`,disabled:!0})]}),(0,S.jsx)(a,{type:`submit`,children:`Save`})]})},play:async({canvasElement:e})=>{k.mockClear();let t=D(e),n=t.getByRole(`textbox`,{name:`Underwriter notes`}),r=t.getByRole(`textbox`,{name:`Reply`});await C(n).toHaveAttribute(`readonly`),await C(r).toBeDisabled(),await C(r.closest(`[data-slot=field]`)).toHaveAttribute(`data-disabled`),await T.click(t.getByRole(`button`,{name:`Save`})),await E(()=>C(k).toHaveBeenCalledWith({underwriterNotes:`Needs a wind mitigation report.`,reply:`Report attached.`},C.anything()))}},R={render:()=>{let e=f({defaultValues:{reason:``,notes:``}});return(0,S.jsxs)(v.Root,{methods:e,"aria-label":`Cancellation`,className:`flex max-w-120 flex-col items-start gap-7`,children:[(0,S.jsxs)(s.Group,{children:[(0,S.jsx)(b,{name:`reason`,label:`Reason`}),(0,S.jsx)(b,{name:`notes`,label:`Notes`})]}),(0,S.jsx)(a,{type:`button`,variant:`secondary`,onClick:()=>e.setFocus(`notes`),children:`Focus notes`})]})},play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`textbox`,{name:`Notes`});await C(n).not.toHaveFocus(),await T.click(t.getByRole(`button`,{name:`Focus notes`})),await C(n).toHaveFocus()}},z=[`Default`,`WithDescriptionAndTooltip`,`WithLimit`,`WithRules`,`DescriptionAndError`,`TextAreaPropsChaining`,`DisabledAndReadOnly`,`SetFocus`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the form owns the path, the control and the rule.
  render: args => {
    const methods = useForm<CancellationValues>({
      defaultValues: {
        reason: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Cancellation" className="flex max-w-120 flex-col items-start gap-7">
                <FormTextArea rules={{
        required: 'Tell us why you are cancelling.'
      }} textAreaProps={{
        placeholder: 'Tell us in your own words'
      }} {...args} name="reason" />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox', {
      name: 'Reason'
    });
    await expect(textArea.tagName).toBe('TEXTAREA');
    await expect(textArea).toBeRequired();
    await expect(textArea).toHaveAttribute('name', 'reason');
    await expect(canvas.queryByRole('alert')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Tell us why you are cancelling.');
    await expect(textArea).toHaveAttribute('aria-invalid', 'true');
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.type(textArea, 'Moving to another carrier.{enter}Effective next month.');
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await expect(textArea).not.toHaveAttribute('aria-invalid');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      reason: 'Moving to another carrier.\\nEffective next month.'
    }, expect.anything()));
  }
}`,...A.parameters?.docs?.source},description:{story:"The field consumers write: a `name`, a `label` and the validation rule.\nSubmitting empty renders the error and marks the text area invalid; typing\nclears both and the value reaches `onSubmit`.\n\n@summary Required text area validating on submit",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<NotesValues>({
      defaultValues: {
        notes: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Submission" className="max-w-120">
                <FormTextArea name="notes" label="Notes for the underwriter" tooltip="The carrier reads these before quoting." description="Shared with the carrier along with the request." optional />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox', {
      name: 'Notes for the underwriter (optional)'
    });
    const trigger = canvas.getByRole('button', {
      name: 'More information'
    });
    await expect(textArea).not.toBeRequired();
    await expect(textArea).toHaveAccessibleDescription('Shared with the carrier along with the request.');
    await expect(trigger.closest('label')).toBeNull();
  }
}`,...j.parameters?.docs?.source},description:{story:"`description` is helper text under the text area, announced through\n`aria-describedby`. `tooltip` is an info button beside the label for details\nworth a click; it is a sibling of the `<label>`, so the field's accessible\nname stays the label text. The forms mark optional fields rather than\nrequired ones: `optional` appends a muted suffix to the label.\n\n@summary Optional field with helper text and an info tooltip",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<NotesValues>({
      defaultValues: {
        notes: 'Roof replaced in 2024.'
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Submission" className="flex max-w-120 flex-col items-start gap-7">
                <FormTextArea name="notes" label="Notes" rules={{
        maxLength: {
          value: 40,
          message: 'Keep it under 40 characters.'
        }
      }} textAreaProps={{
        limit: 40
      }} />
                <div className="flex gap-2">
                    <Button type="submit">Save</Button>
                    <Button type="button" variant="secondary" onClick={() => methods.reset()}>
                        Reset
                    </Button>
                    <Button type="button" variant="secondary" onClick={() => methods.setValue('notes', '')}>
                        Clear
                    </Button>
                </div>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    const counter = canvasElement.querySelector('[data-slot=textarea-counter]')!;
    await expect(counter).toHaveTextContent('22/40');
    await userEvent.type(textArea, ' Garage added after the hail.');
    await expect(counter).toHaveTextContent('51/40');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Keep it under 40 characters.');
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(counter).toHaveTextContent('22/40'));
    await expect(textArea).toHaveValue('Roof replaced in 2024.');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear'
    }));
    await waitFor(() => expect(counter).toHaveTextContent('0/40'));
    await expect(textArea).toHaveValue('');
  }
}`,...M.parameters?.docs?.source},description:{story:"`limit` in `textAreaProps` shows the count inside the box. The value is\ncontrolled, so the count follows the form: a `setValue` or a `reset` moves it\nwith the text. The limit is soft, so pair it with `rules.maxLength`, which is what\nkeeps a longer text from being submitted.\n\n@summary Count inside the box, following the form's value and its rule",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<AppetiteValues>({
      defaultValues: {
        appetite: {
          notes: ''
        }
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Appetite" className="flex max-w-120 flex-col items-start gap-7">
                <FormTextArea<AppetiteValues> name="appetite.notes" label="Appetite notes" rules={{
        required: 'Describe the appetite.',
        minLength: {
          value: 20,
          message: 'Write at least 20 characters.'
        }
      }} />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox', {
      name: 'Appetite notes'
    });
    const save = canvas.getByRole('button', {
      name: 'Save'
    });
    await expect(textArea).toHaveAttribute('name', 'appetite.notes');
    await expect(textArea).not.toBeRequired();
    await userEvent.click(save);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Describe the appetite.');
    await userEvent.type(textArea, 'Coastal homes');
    await userEvent.click(save);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Write at least 20 characters.');
    await expect(onSubmit).not.toHaveBeenCalled();
    await userEvent.type(textArea, ' built after 2000');
    await userEvent.click(save);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      appetite: {
        notes: 'Coastal homes built after 2000'
      }
    }, expect.anything()));
    await expect(canvas.queryByRole('alert')).toBeNull();
  }
}`,...N.parameters?.docs?.source},description:{story:"`rules` are react-hook-form's, and `name` accepts nested paths typed against\nthe form's values through the generic. `rules.required` validates but does\nnot mark the field required: that stays an explicit `required` prop.\n\n@summary Nested path with validation rules, typed through the generic",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<CancellationValues>({
      defaultValues: {
        reason: ''
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Cancellation" className="flex max-w-120 flex-col items-start gap-7">
                <FormTextArea name="reason" label="Reason" description="Shared with the carrier." rules={{
        required: 'Tell us why you are cancelling.'
      }} />
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox', {
      name: 'Reason'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    const alert = await canvas.findByRole('alert');
    const description = canvas.getByText('Shared with the carrier.');

    // The TextArea renders its \`<textarea>\` inside its root, so the order is the root's.
    await expect(textArea.closest('[data-slot=textarea-root]')!.nextElementSibling).toBe(description);
    await expect(description.nextElementSibling).toBe(alert);
    await expect(textArea).toHaveAccessibleDescription('Shared with the carrier. Tell us why you are cancelling.');
    await expect(onSubmit).not.toHaveBeenCalled();
  }
}`,...P.parameters?.docs?.source},description:{story:`The description sits right under the text area and the error appears below
it. Screen readers announce them in the same order.

@summary Helper text under the text area, above the error`,...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<NotesValues>({
      defaultValues: {
        notes: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Submission" className="max-w-120">
                <FormTextArea name="notes" label="Notes" textAreaProps={{
        placeholder: 'Anything the underwriter should know',
        rows: 5,
        size: 'sm',
        onChange: event => onOwnChange(methods.getValues('notes'), event.target.value)
      }} />
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onOwnChange.mockClear();
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(textArea).toHaveAttribute('placeholder', 'Anything the underwriter should know');
    await expect(textArea).toHaveAttribute('rows', '5');
    await expect(textArea).toHaveAttribute('data-size', 'sm');
    await userEvent.type(textArea, 'R');
    await expect(textArea).toHaveValue('R');
    await expect(onOwnChange).toHaveBeenCalledTimes(1);
    await expect(onOwnChange).toHaveBeenLastCalledWith('R', 'R');
  }
}`,...I.parameters?.docs?.source},description:{story:"`textAreaProps` carries the text area's own attributes — `placeholder`,\n`rows`, `size`… — and its handlers. A consumer `onChange` runs after\nreact-hook-form's: by the time it fires, `getValues` already returns the new\nvalue.\n\n@summary Text area attributes and a consumer onChange chained after the form's",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<ReviewValues>({
      defaultValues: {
        underwriterNotes: 'Needs a wind mitigation report.',
        reply: 'Report attached.'
      }
    });
    return <Form.Root methods={methods} onSubmit={onSubmit} aria-label="Review" className="flex max-w-120 flex-col items-start gap-7">
                <Field.Group>
                    <FormTextArea name="underwriterNotes" label="Underwriter notes" readOnly />
                    <FormTextArea name="reply" label="Reply" disabled />
                </Field.Group>
                <Button type="submit">Save</Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const notes = canvas.getByRole('textbox', {
      name: 'Underwriter notes'
    });
    const reply = canvas.getByRole('textbox', {
      name: 'Reply'
    });
    await expect(notes).toHaveAttribute('readonly');
    await expect(reply).toBeDisabled();
    await expect(reply.closest('[data-slot=field]')).toHaveAttribute('data-disabled');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save'
    }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
      underwriterNotes: 'Needs a wind mitigation report.',
      reply: 'Report attached.'
    }, expect.anything()));
  }
}`,...L.parameters?.docs?.source},description:{story:"`disabled` disables the text area and marks the field, and the value still\nreaches `onSubmit` — unlike react-hook-form's own `disabled` option, which\ndrops it. `readOnly` keeps a value the user can read and copy but not edit.\n\n@summary Disabled and read-only fields whose values are still submitted",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useForm<CancellationValues & NotesValues>({
      defaultValues: {
        reason: '',
        notes: ''
      }
    });
    return <Form.Root methods={methods} aria-label="Cancellation" className="flex max-w-120 flex-col items-start gap-7">
                <Field.Group>
                    <FormTextArea name="reason" label="Reason" />
                    <FormTextArea name="notes" label="Notes" />
                </Field.Group>
                <Button type="button" variant="secondary" onClick={() => methods.setFocus('notes')}>
                    Focus notes
                </Button>
            </Form.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const notes = canvas.getByRole('textbox', {
      name: 'Notes'
    });
    await expect(notes).not.toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Focus notes'
    }));
    await expect(notes).toHaveFocus();
  }
}`,...R.parameters?.docs?.source},description:{story:"react-hook-form's `ref` reaches the `<textarea>`, so `setFocus` and the\nfocus on the first invalid field after submit both work with no ref written\nby hand.\n\n@summary setFocus reaches the text area through the merged ref",...R.parameters?.docs?.description}}}})))()}B();export{A as Default,P as DescriptionAndError,L as DisabledAndReadOnly,R as SetFocus,I as TextAreaPropsChaining,j as WithDescriptionAndTooltip,M as WithLimit,N as WithRules,z as __namedExportsOrder,O as default};