import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-DAiRc6aS.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./chevron-down-CshWLIT3.js";import{i as a,n as o,r as s,t as c}from"./file-drop-D7JMXE_G.js";import{n as l,t as u}from"./button-CGLimDXl.js";import{n as d,t as f}from"./label-CnQwyPp2.js";import{a as p,n as m,t as h}from"./field-ZCUDzyI7.js";import{n as g,t as _}from"./dropdown-menu-Ck3uSita.js";var v,y,b;function x(){return(x=e((()=>{m(),a(),v=n(),y=({children:e})=>{let t=p(),n=t&&{id:t.controlId,"aria-describedby":t.describedBy,"aria-invalid":t.invalid||void 0,required:t.required||void 0,disabled:t.disabled||void 0,readOnly:t.readOnly||void 0};return(0,v.jsx)(s,{value:n,children:e})},b=({children:e,...t})=>(0,v.jsx)(h.Root,{...t,children:(0,v.jsx)(y,{children:e})}),b.displayName=`FieldFileDrop`;try{b.displayName=`FieldFileDrop`,b.__docgenInfo={description:"A `Field.Root` for a one-file upload: it provides `FileDropContext`, so the\n`FileDrop` inside associates its input with the label and the messages and\ntakes `invalid`, `required`, `disabled` and `readOnly` from the field. Every\nother part (`Label`, `Field.Description`, `Field.Error`) works as in any\nfield. The field is always vertical, the label over the box: the box is a\ndrop zone or a preview at least 200px tall, so there is no `orientation`.\n\nThe field's messages reach the zone and, once there is a file, \"Replace\nfile\", which keeps the focus. A file `accept` turns down arrives at the\n`FileDrop`'s `onFileReject`: set the field `invalid` and its error there,\nsince the field does not see the file. With `readOnly` and no file the box\nrenders nothing, so show the field only when there is a file to look at.\n\nForm-library agnostic, and its contexts compose: a provider nested inside it\ncan extend `FileDropContext` with `name`, `value`, `onFileChange`,\n`onFileReject`, `onFileRemove`, `onBlur` and `ref` to control the\n`FileDrop`, and `FieldContext` with the errors, on top of the wiring\n`FieldFileDrop` already set.",displayName:`FieldFileDrop`,filePath:`/home/runner/work/design-system/design-system/src/field-file-drop/field-file-drop.tsx`,methods:[],props:{disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Disables the control through its context and sets `data-disabled` on the root.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Single source of truth for a required field: the `Label` shows its\nasterisk and the control receives `required`, both through context.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Makes the control read-only through its context (focusable and copyable,\nnot editable, still submitted) and sets `data-readonly` on the root.",name:`readOnly`,required:!1,tags:{},type:{name:`boolean`}},invalid:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"Marks the field as failing validation: sets `data-invalid` on the root and\n`aria-invalid` on the control through its context, which drives the\ncontrol's destructive border. The label keeps its color by design.",name:`invalid`,required:!1,tags:{},type:{name:`boolean`}},controlId:{defaultValue:null,declarations:[{fileName:`design-system/src/field/field.tsx`,name:`TypeLiteral`}],description:"`id` for the control. Generated when omitted. Set it here, not on the\ncontrol, so the label and the messages keep pointing at the right element.",name:`controlId`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Field for a one-file upload, wiring the FileDrop inside it`,example:`<FieldFileDrop invalid={!!error} required>
  <Label>W-9</Label>
  <FileDrop
    accept="application/pdf"
    value={value}
    onFileChange={file => setValue({ file })}
    onFileReject={() => setError({ message: 'Upload the W-9 as a PDF.' })}
  />
  <Field.Description>Signed in the last 12 months.</Field.Description>
  <Field.Error errors={[error]} />
</FieldFileDrop>`}}}catch{}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{S=t(),r(),x(),l(),g(),m(),o(),d(),C=n(),{expect:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/FieldFileDrop`,component:b,tags:[`autodocs`],argTypes:{invalid:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`}},args:{invalid:!1,disabled:!1,readOnly:!1,required:!1},decorators:[e=>(0,C.jsx)(`div`,{className:`max-w-120`,children:(0,C.jsx)(e,{})})],parameters:{docs:{description:{component:"FieldFileDrop is a `Field.Root` for a one-file upload. It provides\n`FileDropContext`, so the `FileDrop` inside associates its input with the\nlabel and the messages and takes `invalid`, `required`, `disabled` and\n`readOnly` from the field — no `id`, `htmlFor`, `aria-describedby` or\n`aria-invalid` written by hand. The label sits over the box, as in the other\nvertical fields.\n\nIt knows nothing about form libraries: the stories keep the file and the\nerror in state, the way a form would."}}}},k=[`!dev`,`!autodocs`,`!manifest`],A=e=>{let t=`BT /F1 24 Tf 72 720 Td (${e}) Tj ET`,n=[`<< /Type /Catalog /Pages 2 0 R >>`,`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>`,`<< /Length ${t.length} >>\nstream\n${t}\nendstream`,`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`],r=`%PDF-1.4
`,i=n.map((e,t)=>{let n=r.length;return r+=`${t+1} 0 obj\n${e}\nendobj\n`,n}),a=r.length,o=i.map(e=>`${String(e).padStart(10,`0`)} 00000 n \n`).join(``);return`${r}xref\n0 ${n.length+1}\n0000000000 65535 f \n${o}trailer\n<< /Size ${n.length+1} /Root 1 0 R >>\nstartxref\n${a}\n%%EOF`},j=(e,t)=>new File([A(t)],e,{type:`application/pdf`}),M=URL.createObjectURL(j(`w9.pdf`,`Form W-9, Northside Insurance`)),N=(e,t)=>{let n=new DataTransfer;n.items.add(t),e.querySelector(`[data-slot=file-drop]`).dispatchEvent(new DragEvent(`drop`,{bubbles:!0,cancelable:!0,dataTransfer:n}))},P={message:`Upload the W-9 as a PDF.`},F=({initialValue:e=null,initialError:t,invalid:n,...r})=>{let[i,a]=(0,S.useState)(e),[o,s]=(0,S.useState)(t);return(0,C.jsxs)(b,{...r,invalid:n||!!o,children:[(0,C.jsx)(f,{children:`W-9`}),(0,C.jsx)(c,{accept:`application/pdf`,value:i,onFileChange:e=>{s(void 0),a({file:e})},onFileReject:()=>s(P),onFileRemove:()=>a(null)}),(0,C.jsx)(h.Description,{children:`Signed in the last 12 months.`}),(0,C.jsx)(h.Error,{errors:o?[o]:void 0})]})},I={render:e=>(0,C.jsx)(F,{...e})},L={tags:k,render:()=>(0,C.jsx)(F,{required:!0}),play:async({canvasElement:e})=>{let t=D(e).getByLabelText(/^W-9/);await w(t).toHaveAttribute(`type`,`file`),await w(t).toBeRequired(),await w(t).toHaveAccessibleDescription(`Signed in the last 12 months. Accepted formats: PDF`)}},R={render:()=>(0,C.jsx)(F,{initialValue:{url:M}}),play:async({canvasElement:e})=>{let t=D(e);await w(t.getByTitle(`File preview`)).toHaveAttribute(`src`,M),await w(t.getByRole(`button`,{name:`Replace file`})).toHaveAccessibleDescription(`Signed in the last 12 months.`)}},z={tags:k,render:()=>(0,C.jsx)(F,{initialValue:{url:M}}),play:async({canvasElement:e})=>{let t=D(e);await T.click(t.getByRole(`button`,{name:`Remove`}));let n=t.getByLabelText(`W-9`);await w(n).toHaveFocus(),await T.upload(n,j(`w9-2026.pdf`,`Form W-9, 2026`)),await w((await t.findByTitle(`File preview`)).getAttribute(`src`)).toMatch(/^blob:/)}},B={render:()=>(0,C.jsx)(F,{initialError:P}),play:async({canvasElement:e})=>{let t=D(e).getByLabelText(`W-9`);await w(t).toHaveAttribute(`aria-invalid`,`true`),await w(e.querySelector(`[data-slot=file-drop]`)).toHaveAttribute(`data-invalid`),await w(t).toHaveAccessibleDescription(`Signed in the last 12 months. Upload the W-9 as a PDF. Accepted formats: PDF`)}},V={tags:k,render:()=>(0,C.jsx)(F,{}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByLabelText(`W-9`);N(e,new File([`agency,state
`],`agencies.csv`,{type:`text/csv`})),await w(await t.findByRole(`alert`)).toHaveTextContent(`Upload the W-9 as a PDF.`),await w(n).toHaveAttribute(`aria-invalid`,`true`),N(e,j(`w9.pdf`,`Form W-9`)),await E(()=>w(t.queryByRole(`alert`)).toBeNull()),await w(await t.findByTitle(`File preview`)).toBeVisible(),await w(t.getByRole(`button`,{name:`Replace file`})).not.toHaveAttribute(`aria-invalid`)}},H={render:()=>(0,C.jsx)(F,{required:!0}),play:async({canvasElement:e})=>{let t=D(e);await w(t.getByLabelText(/^W-9/)).toBeRequired(),await w(t.getByText(`*`)).toBeVisible()}},U={render:function(){let[e,t]=(0,S.useState)(null);return(0,C.jsxs)(b,{children:[(0,C.jsx)(f,{children:`W-9`}),(0,C.jsx)(c,{accept:`application/pdf`,showAcceptedFormats:!1,value:e,onFileChange:e=>t({file:e}),onFileRemove:()=>t(null),children:(0,C.jsxs)(_.Root,{children:[(0,C.jsx)(_.Trigger,{asChild:!0,children:(0,C.jsxs)(u,{type:`button`,variant:`secondary`,size:`md`,children:[`Choose from agency`,(0,C.jsx)(i,{})]})}),(0,C.jsx)(_.Portal,{children:(0,C.jsxs)(_.Content,{children:[(0,C.jsx)(_.Item,{onSelect:()=>t({url:M,name:`w9-northside-insurance.pdf`}),children:`W-9 · Northside Insurance`}),(0,C.jsx)(_.Item,{onSelect:()=>t({url:M,name:`w9-lakeside-agency.pdf`}),children:`W-9 · Lakeside Agency`})]})})]})})]})},play:async({canvasElement:e})=>{let t=D(e);await w(t.getByLabelText(`W-9`)).toHaveAttribute(`type`,`file`),await w(t.getByRole(`button`,{name:`Choose from agency`})).toBeVisible()}},W={render:()=>(0,C.jsx)(F,{disabled:!0}),play:async({canvasElement:e})=>{let t=D(e);await w(t.getByLabelText(`W-9`)).toBeDisabled(),await w(e.querySelector(`[data-slot=field]`)).toHaveAttribute(`data-disabled`)}},G={render:()=>(0,C.jsx)(F,{readOnly:!0,initialValue:{url:M}}),play:async({canvasElement:e})=>{let t=D(e);await w(t.getByTitle(`File preview`)).toHaveAttribute(`src`,M),await w(t.queryByRole(`button`,{name:`Replace file`})).toBeNull(),await w(t.queryByRole(`button`,{name:`Remove`})).toBeNull()}},K=[`Default`,`WiresTheFileDrop`,`Filled`,`RemovesAndPicksAgain`,`Invalid`,`RejectsThenAccepts`,`Required`,`AlternativeSource`,`Disabled`,`ReadOnly`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  // The controls drive the field; the story keeps the file and the error.
  render: args => <W9Field {...args} />
}`,...I.parameters?.docs?.source},description:{story:"The composition consumers write: a label, the design system's `FileDrop`\nand helper text. The label names the file input and the input is described\nby the text and the accepted formats, all through context. A file `accept`\nturns down sets the field's error from `onFileReject`.\n\n@summary Label, FileDrop and description wired with no ids",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <W9Field required />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The label's text ends in the required asterisk.
    const input = canvas.getByLabelText<HTMLInputElement>(/^W-9/);
    await expect(input).toHaveAttribute('type', 'file');
    await expect(input).toBeRequired();
    await expect(input).toHaveAccessibleDescription('Signed in the last 12 months. Accepted formats: PDF');
  }
}`,...L.parameters?.docs?.source},description:{story:`The label names the input, and the description and the formats describe it.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <W9Field initialValue={{
    url: storedW9Url
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTitle('File preview')).toHaveAttribute('src', storedW9Url);
    await expect(canvas.getByRole('button', {
      name: 'Replace file'
    })).toHaveAccessibleDescription('Signed in the last 12 months.');
  }
}`,...R.parameters?.docs?.source},description:{story:`Once there is a file the preview replaces the zone, and the field's
messages move to "Replace file", the control that keeps the focus.
\`onFileRemove\` on the \`FileDrop\` adds "Remove", which brings the zone back.

@summary Stored file previewed under the label`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <W9Field initialValue={{
    url: storedW9Url
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove'
    }));
    const input = canvas.getByLabelText<HTMLInputElement>('W-9');
    await expect(input).toHaveFocus();
    await userEvent.upload(input, pdf('w9-2026.pdf', 'Form W-9, 2026'));
    await expect((await canvas.findByTitle('File preview')).getAttribute('src')).toMatch(/^blob:/);
  }
}`,...z.parameters?.docs?.source},description:{story:`Removing the file brings the zone back, and a new pick previews it.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <W9Field initialError={rejectionError} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('W-9');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvasElement.querySelector('[data-slot=file-drop]')).toHaveAttribute('data-invalid');
    await expect(input).toHaveAccessibleDescription('Signed in the last 12 months. Upload the W-9 as a PDF. Accepted formats: PDF');
  }
}`,...B.parameters?.docs?.source},description:{story:"`invalid` paints the zone in the destructive tone and `Field.Error` shows\nthe message under the description; both reach the input's\n`aria-describedby`. Here the error comes from a file `accept` turned down.\n\n@summary Rejected file: destructive zone and the error under it",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: testOnly,
  render: () => <W9Field />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('W-9');
    drop(canvasElement, new File(['agency,state\\n'], 'agencies.csv', {
      type: 'text/csv'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Upload the W-9 as a PDF.');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    drop(canvasElement, pdf('w9.pdf', 'Form W-9'));
    await waitFor(() => expect(canvas.queryByRole('alert')).toBeNull());
    await expect(await canvas.findByTitle('File preview')).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Replace file'
    })).not.toHaveAttribute('aria-invalid');
  }
}`,...V.parameters?.docs?.source},description:{story:`A rejected file sets the error, and an accepted one clears it and is previewed.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <W9Field required />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText(/^W-9/)).toBeRequired();
    await expect(canvas.getByText('*')).toBeVisible();
  }
}`,...H.parameters?.docs?.source},description:{story:"`required` on the field reaches both the label's asterisk and the input's\n`required`, which holds only while the zone is empty.\n\n@summary Required field driven from the root alone",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<FileDropValue | null>(null);
    return <FieldFileDrop>
                <Label>W-9</Label>
                <FileDrop accept="application/pdf" showAcceptedFormats={false} value={value} onFileChange={file => setValue({
        file
      })} onFileRemove={() => setValue(null)}>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <Button type="button" variant="secondary" size="md">
                                Choose from agency
                                <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item onSelect={() => setValue({
                url: storedW9Url,
                name: 'w9-northside-insurance.pdf'
              })}>
                                    W-9 · Northside Insurance
                                </DropdownMenu.Item>
                                <DropdownMenu.Item onSelect={() => setValue({
                url: storedW9Url,
                name: 'w9-lakeside-agency.pdf'
              })}>
                                    W-9 · Lakeside Agency
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </FileDrop>
            </FieldFileDrop>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('W-9')).toHaveAttribute('type', 'file');
    await expect(canvas.getByRole('button', {
      name: 'Choose from agency'
    })).toBeVisible();
  }
}`,...U.parameters?.docs?.source},description:{story:`Another way to supply the file, here picking the W-9 of another agency,
goes in the \`FileDrop\`'s \`children\`: it sits in the empty zone under an
"or", and leaves with it once there is a file.

@summary Another way to supply the file inside the zone`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <W9Field disabled />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('W-9')).toBeDisabled();
    await expect(canvasElement.querySelector('[data-slot=field]')).toHaveAttribute('data-disabled');
  }
}`,...W.parameters?.docs?.source},description:{story:`\`disabled\` on the field greys the zone out and disables the input: clicks
open nothing and drops are ignored.

@summary Disabled field driven from the root`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <W9Field readOnly initialValue={{
    url: storedW9Url
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTitle('File preview')).toHaveAttribute('src', storedW9Url);
    await expect(canvas.queryByRole('button', {
      name: 'Replace file'
    })).toBeNull();
    await expect(canvas.queryByRole('button', {
      name: 'Remove'
    })).toBeNull();
  }
}`,...G.parameters?.docs?.source},description:{story:`\`readOnly\` on the field shows the stored file without "Replace file" or
"Remove". With no file the box renders nothing, so render the field only
when there is one.

@summary Read-only field showing the stored file`,...G.parameters?.docs?.description}}}})))()}q();export{U as AlternativeSource,I as Default,W as Disabled,R as Filled,B as Invalid,G as ReadOnly,V as RejectsThenAccepts,z as RemovesAndPicksAgain,H as Required,L as WiresTheFileDrop,K as __namedExportsOrder,O as default};