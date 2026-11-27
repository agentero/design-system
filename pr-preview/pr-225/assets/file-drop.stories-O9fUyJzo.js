import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-Qnxa24Ni.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./chevron-down-CHQUl5g5.js";import{n as a,t as o}from"./file-drop-Dm79tLBn.js";import{n as s,t as c}from"./button-C1H0vVIZ.js";import{n as l,t as u}from"./label-D3XMsz5h.js";import{n as d,t as f}from"./dropdown-menu-DPQMGvHi.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{p=t(),r(),s(),d(),l(),a(),m=n(),{expect:h,fn:g,spyOn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x=e=>{let t=`BT /F1 24 Tf 72 720 Td (${e}) Tj ET`,n=[`<< /Type /Catalog /Pages 2 0 R >>`,`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>`,`<< /Length ${t.length} >>\nstream\n${t}\nendstream`,`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`],r=`%PDF-1.4
`,i=n.map((e,t)=>{let n=r.length;return r+=`${t+1} 0 obj\n${e}\nendobj\n`,n}),a=r.length,o=i.map(e=>`${String(e).padStart(10,`0`)} 00000 n \n`).join(``);return`${r}xref\n0 ${n.length+1}\n0000000000 65535 f \n${o}trailer\n<< /Size ${n.length+1} /Root 1 0 R >>\nstartxref\n${a}\n%%EOF`},S=(e,t)=>new File([x(t)],e,{type:`application/pdf`}),C=()=>new File([`agency,state
Northside Insurance,TX
`],`agencies.csv`,{type:`text/csv`}),w=URL.createObjectURL(S(`w9.pdf`,`Form W-9, Northside Insurance`)),T=(e,t)=>{let n=new DataTransfer;return t&&n.items.add(t),new DragEvent(e,{bubbles:!0,cancelable:!0,dataTransfer:n})},E=e=>e.querySelector(`[data-slot=file-drop]`),D=({value:e,onFileChange:t,onFileRemove:n,...r})=>{let[i,a]=(0,p.useState)(e);return(0,m.jsx)(o,{...r,value:i,onFileChange:e=>{a({file:e}),t?.(e)},onFileRemove:n&&(()=>{a(null),n()})})},O=({children:e})=>{let t=(0,p.useId)();return(0,m.jsx)(`div`,{className:`flex max-w-120 flex-col gap-2`,children:e(t)})},k={title:`Components/FileDrop`,component:o,tags:[`autodocs`],argTypes:{accept:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{accept:`application/pdf`,onFileChange:g(),onFileReject:g()},decorators:[(e,{args:t,parameters:n})=>(0,m.jsx)(O,{children:r=>(0,m.jsxs)(m.Fragment,{children:[n.label!==!1&&(0,m.jsx)(u,{htmlFor:r,children:`W-9`}),(0,m.jsx)(e,{args:{...t,id:r}})]})})],parameters:{docs:{description:{component:'FileDrop uploads one file: a dashed zone that takes a dropped file or opens\nthe picker, and a preview with "Replace file" once there is one. It is\ncontrolled through `value`, `onFileChange` and `onFileReject`, and its real\ncontrol is a hidden `<input type="file">` a `Label` names.'}}}},A={render:e=>(0,m.jsx)(D,{...e}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByLabelText(`W-9`),r=E(e);await h(n).toHaveAttribute(`type`,`file`),await h(r).toHaveAttribute(`data-state`,`empty`),await h(t.getByText(`Accepted formats: PDF`)).toBeVisible(),await h(r.getBoundingClientRect().height).toBe(200);let i=_(n,`click`).mockImplementation(()=>{});await v.click(r),await h(i).toHaveBeenCalledOnce(),i.mockRestore()}},j={args:{required:!0,value:{file:S(`w9.pdf`,`Form W-9`)}},render:e=>(0,m.jsx)(D,{...e}),play:async({canvasElement:e})=>{let t=b(e),n=await t.findByTitle(`File preview`);await h(n.getAttribute(`src`)).toMatch(/^blob:/),await h(E(e)).toHaveAttribute(`data-state`,`filled`),await h(n.getBoundingClientRect().height).toBe(200);let r=t.getByLabelText(`W-9`),i=_(r,`click`).mockImplementation(()=>{});await h(r).toHaveAttribute(`tabindex`,`-1`),await h(r).not.toBeRequired();let a=T(`drop`,S(`other.pdf`,`Other`));E(e).dispatchEvent(a),await h(a.defaultPrevented).toBe(!0),await v.click(t.getByRole(`button`,{name:`Replace file`})),await h(i).toHaveBeenCalledOnce(),i.mockRestore()}},M={args:{value:{url:w},onFileRemove:g()},render:e=>(0,m.jsx)(D,{...e}),play:async({args:e,canvasElement:t})=>{let n=b(t),r=n.getByLabelText(`W-9`);await h(n.getByTitle(`File preview`)).toHaveAttribute(`src`,w),await v.click(n.getByRole(`button`,{name:`Remove`})),await h(e.onFileRemove).toHaveBeenCalledOnce(),await h(E(t)).toHaveAttribute(`data-state`,`empty`),await h(r).toHaveFocus();let i=S(`w9.pdf`,`Form W-9`);await v.upload(r,i),await h(e.onFileChange).toHaveBeenCalledWith(i),await h(await n.findByRole(`button`,{name:`Replace file`})).toHaveFocus(),await h(r).toHaveValue(``)}},N={args:{value:{name:`w9-northside-insurance.pdf`},previewLoading:!0},render:e=>(0,m.jsx)(D,{...e}),play:async({canvasElement:e})=>{let t=b(e);await h(t.getByRole(`status`,{name:`Loading file preview`})).toBeVisible(),await h(t.queryByText(`(No preview available)`)).toBeNull()}},P={args:{showAcceptedFormats:!1},render:function(e){let[t,n]=(0,p.useState)(null);return(0,m.jsx)(o,{...e,value:t,onFileChange:t=>{n({file:t}),e.onFileChange?.(t)},onFileRemove:()=>n(null),children:(0,m.jsxs)(f.Root,{children:[(0,m.jsx)(f.Trigger,{asChild:!0,children:(0,m.jsxs)(c,{type:`button`,variant:`secondary`,size:`md`,children:[`Choose from agency`,(0,m.jsx)(i,{})]})}),(0,m.jsx)(f.Portal,{children:(0,m.jsxs)(f.Content,{children:[(0,m.jsx)(f.Item,{onSelect:()=>n({url:w,name:`w9-northside-insurance.pdf`}),children:`W-9 · Northside Insurance`}),(0,m.jsx)(f.Item,{onSelect:()=>n({url:w,name:`w9-lakeside-agency.pdf`}),children:`W-9 · Lakeside Agency`})]})})]})})},play:async({args:e,canvasElement:t})=>{let n=b(t),r=b(t.ownerDocument.body),i=n.getByLabelText(`W-9`),a=_(i,`click`).mockImplementation(()=>{});await h(n.getByText(`or`)).toBeVisible(),await h(n.queryByText(/Accepted formats/)).toBeNull(),await v.click(n.getByRole(`button`,{name:`Choose from agency`})),await v.click(await r.findByRole(`menuitem`,{name:`W-9 · Northside Insurance`})),await h(a).not.toHaveBeenCalled(),a.mockRestore(),await h(await n.findByTitle(`File preview`)).toHaveAttribute(`src`,w),await v.click(n.getByRole(`button`,{name:`Remove`})),await v.upload(i,S(`w9.pdf`,`Form W-9`)),await h(e.onFileChange).toHaveBeenCalledOnce(),await h((await n.findByTitle(`File preview`)).getAttribute(`src`)).toMatch(/^blob:/),await v.click(n.getByRole(`button`,{name:`Remove`})),await h(n.getByRole(`button`,{name:`Choose from agency`})).toBeVisible()}},F={tags:[`!dev`,`!autodocs`,`!manifest`],parameters:{label:!1},render:e=>(0,m.jsxs)(u,{className:`flex-col flex-nowrap gap-2`,children:[`W-9`,(0,m.jsx)(o,{...e})]}),play:async({canvasElement:e})=>{let t=b(e).getByLabelText(/^W-9/),n=g(e=>e.preventDefault());t.addEventListener(`click`,n),await v.click(E(e).querySelector(`svg`).parentElement),t.removeEventListener(`click`,n),await h(n).toHaveBeenCalledOnce()}},I={args:{accept:`.csv`,value:{file:C()}},render:e=>(0,m.jsx)(D,{...e}),play:async({canvasElement:e})=>{let t=b(e);await h(t.getByText(`agencies.csv`)).toBeVisible(),await h(t.getByText(`(No preview available)`)).toBeVisible(),await h(t.queryByTitle(`File preview`)).toBeNull()}},L={tags:[`!dev`,`!autodocs`,`!manifest`],args:{value:{name:`w9-northside-insurance.pdf`}},play:async({canvasElement:e})=>{let t=b(e);await h(E(e)).toHaveAttribute(`data-state`,`filled`),await h(t.getByText(`w9-northside-insurance.pdf`)).toBeVisible(),await h(t.getByText(`(No preview available)`)).toBeVisible()}},R={tags:[`!dev`,`!autodocs`,`!manifest`],play:async({args:e,canvasElement:t})=>{let n=E(t),r=new DataTransfer,i=S(`w9.pdf`,`Form W-9`),a=C();r.setData(`text/uri-list`,`https://www.irs.gov/forms-pubs/about-form-w-9`),n.dispatchEvent(new DragEvent(`dragenter`,{bubbles:!0,dataTransfer:r})),await new Promise(e=>setTimeout(e,100)),await h(n).not.toHaveAttribute(`data-dragging`),n.dispatchEvent(T(`dragenter`,i)),await y(()=>h(n).toHaveAttribute(`data-dragging`,`accept`)),n.dispatchEvent(T(`dragleave`)),await y(()=>h(n).not.toHaveAttribute(`data-dragging`)),n.dispatchEvent(T(`dragenter`,a)),await y(()=>h(n).toHaveAttribute(`data-dragging`,`reject`)),n.dispatchEvent(T(`drop`,a)),await y(()=>h(e.onFileReject).toHaveBeenCalledWith(a)),await y(()=>h(n).not.toHaveAttribute(`data-dragging`)),await h(e.onFileChange).not.toHaveBeenCalled(),n.dispatchEvent(T(`drop`,i)),await y(()=>h(e.onFileChange).toHaveBeenCalledWith(i)),await h(n).not.toHaveAttribute(`data-dragging`)}},z={render:function(e){let[t,n]=(0,p.useState)(`Upload the signed W-9.`);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(D,{...e,"aria-invalid":!!t,"aria-describedby":`w9-error`,onFileChange:t=>{n(``),e.onFileChange?.(t)},onFileReject:t=>{n(`${t.name} is not a PDF.`),e.onFileReject?.(t)}}),t&&(0,m.jsx)(`p`,{id:`w9-error`,role:`alert`,className:`text-sm text-text-input-destructive`,children:t})]})},play:async({canvasElement:e})=>{let t=b(e),n=t.getByLabelText(`W-9`);await h(E(e)).toHaveAttribute(`data-invalid`),await h(n).toHaveAccessibleDescription(`Upload the signed W-9. Accepted formats: PDF`),E(e).dispatchEvent(T(`drop`,C())),await h(await t.findByText(`agencies.csv is not a PDF.`)).toBeVisible()}},B={args:{disabled:!0},play:async({args:e,canvasElement:t})=>{let n=b(t).getByLabelText(`W-9`),r=E(t),i=_(n,`click`).mockImplementation(()=>{});await h(n).toBeDisabled(),await v.click(r),await h(i).not.toHaveBeenCalled(),i.mockRestore(),r.dispatchEvent(T(`drop`,S(`w9.pdf`,`Form W-9`))),await h(e.onFileChange).not.toHaveBeenCalled()}},V={tags:[`!dev`,`!autodocs`,`!manifest`],args:{disabled:!0,children:(0,m.jsx)(c,{type:`button`,variant:`secondary`,size:`md`,children:`Choose from agency`})},play:async({canvasElement:e})=>{let t=b(e).getByRole(`button`,{name:`Choose from agency`});await h(t.closest(`[data-slot=file-drop-alternative]`)).toHaveAttribute(`inert`),t.focus(),await h(t).not.toHaveFocus()}},H={args:{readOnly:!0,value:{url:w}},play:async({canvasElement:e})=>{let t=b(e);await h(t.getByTitle(`File preview`)).toHaveAttribute(`src`,w),await h(t.queryByRole(`button`,{name:`Replace file`})).toBeNull()}},U={tags:[`!dev`,`!autodocs`,`!manifest`],args:{readOnly:!0},play:async({canvasElement:e})=>{await h(E(e)).toBeNull()}},W={args:{className:`[--file-drop-min-height:18.75rem]`},render:e=>(0,m.jsx)(D,{...e}),play:async({canvasElement:e})=>{let t=b(e);await h(E(e).getBoundingClientRect().height).toBe(300),await v.upload(t.getByLabelText(`W-9`),S(`w9.pdf`,`Form W-9`)),await h((await t.findByTitle(`File preview`)).getBoundingClientRect().height).toBe(300)}},G=[`Default`,`PickedFile`,`Removable`,`PreviewLoading`,`AlternativeSource`,`InsideLabel`,`WithoutPreview`,`NameOnly`,`DragAndDrop`,`Invalid`,`Disabled`,`DisabledAlternativeSource`,`ReadOnly`,`ReadOnlyEmpty`,`CustomHeight`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledFileDrop {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>('W-9');
    const zone = getZone(canvasElement);
    await expect(input).toHaveAttribute('type', 'file');
    await expect(zone).toHaveAttribute('data-state', 'empty');
    await expect(canvas.getByText('Accepted formats: PDF')).toBeVisible();
    await expect(zone.getBoundingClientRect().height).toBe(200);
    const openPicker = spyOn(input, 'click').mockImplementation(() => {});
    await userEvent.click(zone);
    await expect(openPicker).toHaveBeenCalledOnce();
    openPicker.mockRestore();
  }
}`,...A.parameters?.docs?.source},description:{story:"The empty zone, labelled by the `Label` through the hidden input, with the\nformats `accept` allows. Clicking anywhere on it opens the picker.\n\n@summary Empty drop zone that opens the picker",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    value: {
      file: pdf('w9.pdf', 'Form W-9')
    }
  },
  render: args => <ControlledFileDrop {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const frame = await canvas.findByTitle('File preview');
    await expect(frame.getAttribute('src')).toMatch(/^blob:/);
    await expect(getZone(canvasElement)).toHaveAttribute('data-state', 'filled');
    await expect(frame.getBoundingClientRect().height).toBe(200);
    const input = canvas.getByLabelText<HTMLInputElement>('W-9');
    const openPicker = spyOn(input, 'click').mockImplementation(() => {});
    await expect(input).toHaveAttribute('tabindex', '-1');
    await expect(input).not.toBeRequired();
    const stray = dragEvent('drop', pdf('other.pdf', 'Other'));
    getZone(canvasElement).dispatchEvent(stray);
    await expect(stray.defaultPrevented).toBe(true);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Replace file'
    }));
    await expect(openPicker).toHaveBeenCalledOnce();
    openPicker.mockRestore();
  }
}`,...j.parameters?.docs?.source},description:{story:`Once the state holds the file, the box shows it: PDFs, plain text and
images in a frame as tall as the zone was, under a "Replace file" button
that opens the picker again. Focus moves to the button, since the input
leaves the tab order; \`required\` stops holding, since the file never
reaches the input; and a file dropped on the preview is swallowed instead of
opening in place of the page.

@summary Picked file previewed, with Replace file`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      url: storedW9Url
    },
    onFileRemove: fn()
  },
  render: args => <ControlledFileDrop {...args} />,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>('W-9');
    await expect(canvas.getByTitle('File preview')).toHaveAttribute('src', storedW9Url);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove'
    }));
    await expect(args.onFileRemove).toHaveBeenCalledOnce();
    await expect(getZone(canvasElement)).toHaveAttribute('data-state', 'empty');
    await expect(input).toHaveFocus();

    // Picking a new file previews it, moves focus to "Replace file" and empties
    // the input, so the same file can be picked again.
    const file = pdf('w9.pdf', 'Form W-9');
    await userEvent.upload(input, file);
    await expect(args.onFileChange).toHaveBeenCalledWith(file);
    await expect(await canvas.findByRole('button', {
      name: 'Replace file'
    })).toHaveFocus();
    await expect(input).toHaveValue('');
  }
}`,...M.parameters?.docs?.source},description:{story:`A file stored earlier comes in as \`value.url\` and previews from that
address, so an edit form opens on the current document. \`onFileRemove\` adds
a "Remove" button beside "Replace file"; clearing the value there brings the
drop zone back, with focus on it.

@summary Stored file with a Remove button`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      name: 'w9-northside-insurance.pdf'
    },
    previewLoading: true
  },
  render: args => <ControlledFileDrop {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('status', {
      name: 'Loading file preview'
    })).toBeVisible();
    await expect(canvas.queryByText('(No preview available)')).toBeNull();
  }
}`,...N.parameters?.docs?.source},description:{story:`\`previewLoading\` holds a placeholder while the stored file's \`url\` is on its
way (a signed URL fetched on demand, say), instead of "No preview
available". Until then the value carries only the file's \`name\`.

@summary Placeholder while the stored file's URL loads`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    showAcceptedFormats: false
  },
  render: function Render(args) {
    const [value, setValue] = useState<FileDropValue | null>(null);
    return <FileDrop {...args} value={value} onFileChange={file => {
      setValue({
        file
      });
      args.onFileChange?.(file);
    }} onFileRemove={() => setValue(null)}>
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
            </FileDrop>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const input = canvas.getByLabelText<HTMLInputElement>('W-9');
    const openPicker = spyOn(input, 'click').mockImplementation(() => {});
    await expect(canvas.getByText('or')).toBeVisible();
    await expect(canvas.queryByText(/Accepted formats/)).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Choose from agency'
    }));
    await userEvent.click(await page.findByRole('menuitem', {
      name: 'W-9 · Northside Insurance'
    }));
    await expect(openPicker).not.toHaveBeenCalled();
    openPicker.mockRestore();
    await expect(await canvas.findByTitle('File preview')).toHaveAttribute('src', storedW9Url);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove'
    }));
    await userEvent.upload(input, pdf('w9.pdf', 'Form W-9'));
    await expect(args.onFileChange).toHaveBeenCalledOnce();
    await expect((await canvas.findByTitle('File preview')).getAttribute('src')).toMatch(/^blob:/);

    // Back to the empty zone, where the alternative source lives.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Choose from agency'
    })).toBeVisible();
  }
}`,...P.parameters?.docs?.source},description:{story:`\`children\` offer another way to supply the file, rendered in the empty zone
under an "or": here a menu of the files the agency already stored, as
producerflow's "Choose from agency" does. Their clicks are their own: they
never open the picker, and picking a file sets the value like a drop would,
while browsing and dropping keep working. \`showAcceptedFormats={false}\`
drops the formats line.

@summary Another way to supply the file inside the zone`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: an edge case, not a state consumers need to see.
  tags: ['!dev', '!autodocs', '!manifest'],
  parameters: {
    label: false
  },
  render: args => <Label className="flex-col flex-nowrap gap-2">
            W-9
            <FileDrop {...args} />
        </Label>,
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByLabelText<HTMLInputElement>(/^W-9/);
    const opened = fn((event: Event) => event.preventDefault());
    input.addEventListener('click', opened);
    await userEvent.click(getZone(canvasElement).querySelector('svg')!.parentElement!);
    input.removeEventListener('click', opened);
    await expect(opened).toHaveBeenCalledOnce();
  }
}`,...F.parameters?.docs?.source},description:{story:`Wrapped in a \`<label>\` instead of named by one, a click on the zone still
opens the picker once: the zone cancels the label's own click on the input.

@summary Inside a label, a click opens the picker once`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    accept: '.csv',
    value: {
      file: csv()
    }
  },
  render: args => <ControlledFileDrop {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('agencies.csv')).toBeVisible();
    await expect(canvas.getByText('(No preview available)')).toBeVisible();
    await expect(canvas.queryByTitle('File preview')).toBeNull();
  }
}`,...I.parameters?.docs?.source},description:{story:`A file the frame cannot show (a spreadsheet, an empty file, an image over
10 MB, or HTML and SVG, whose scripts would run in the app) keeps the box
with its name over a placeholder instead.

@summary File without a preview shows its name and a placeholder`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: it looks the same as WithoutPreview.
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    value: {
      name: 'w9-northside-insurance.pdf'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(getZone(canvasElement)).toHaveAttribute('data-state', 'filled');
    await expect(canvas.getByText('w9-northside-insurance.pdf')).toBeVisible();
    await expect(canvas.getByText('(No preview available)')).toBeVisible();
  }
}`,...L.parameters?.docs?.source},description:{story:"A file known only by its `name`, copied from another record with neither\nthe `File` nor a URL to show, prints the name over the placeholder.\n\n@summary File known only by its name",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: at rest it looks the same as Default.
  tags: ['!dev', '!autodocs', '!manifest'],
  play: async ({
    args,
    canvasElement
  }) => {
    const zone = getZone(canvasElement);
    const link = new DataTransfer();
    const accepted = pdf('w9.pdf', 'Form W-9');
    const rejected = csv();
    link.setData('text/uri-list', 'https://www.irs.gov/forms-pubs/about-form-w-9');
    zone.dispatchEvent(new DragEvent('dragenter', {
      bubbles: true,
      dataTransfer: link
    }));
    // A drag event renders on a later task, so the check waits for it first.
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(zone).not.toHaveAttribute('data-dragging');
    zone.dispatchEvent(dragEvent('dragenter', accepted));
    await waitFor(() => expect(zone).toHaveAttribute('data-dragging', 'accept'));
    zone.dispatchEvent(dragEvent('dragleave'));
    await waitFor(() => expect(zone).not.toHaveAttribute('data-dragging'));
    zone.dispatchEvent(dragEvent('dragenter', rejected));
    await waitFor(() => expect(zone).toHaveAttribute('data-dragging', 'reject'));
    zone.dispatchEvent(dragEvent('drop', rejected));
    await waitFor(() => expect(args.onFileReject).toHaveBeenCalledWith(rejected));
    await waitFor(() => expect(zone).not.toHaveAttribute('data-dragging'));
    await expect(args.onFileChange).not.toHaveBeenCalled();
    zone.dispatchEvent(dragEvent('drop', accepted));
    await waitFor(() => expect(args.onFileChange).toHaveBeenCalledWith(accepted));
    await expect(zone).not.toHaveAttribute('data-dragging');
  }
}`,...R.parameters?.docs?.source},description:{story:"Dragging over the zone tints it by whether `accept` allows the file, and\nleaving clears the tint; a dragged link or text gets none. Mid-drag the\nbrowser gives only the MIME type, so an extension-only `accept` tints red\nuntil the drop. The drop itself is checked against `accept` like a pick: a\nmatch goes to `onFileChange`, anything else to `onFileReject`, since the\npicker filters by `accept` and a drop does not.\n\n@summary Drag tint and dropped files checked against accept",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [error, setError] = useState('Upload the signed W-9.');
    return <>
                <ControlledFileDrop {...args} aria-invalid={!!error} aria-describedby="w9-error" onFileChange={file => {
        setError('');
        args.onFileChange?.(file);
      }} onFileReject={file => {
        setError(\`\${file.name} is not a PDF.\`);
        args.onFileReject?.(file);
      }} />
                {error && <p id="w9-error" role="alert" className="text-sm text-text-input-destructive">
                        {error}
                    </p>}
            </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('W-9');
    await expect(getZone(canvasElement)).toHaveAttribute('data-invalid');
    await expect(input).toHaveAccessibleDescription('Upload the signed W-9. Accepted formats: PDF');
    getZone(canvasElement).dispatchEvent(dragEvent('drop', csv()));
    await expect(await canvas.findByText('agencies.csv is not a PDF.')).toBeVisible();
  }
}`,...z.parameters?.docs?.source},description:{story:"`aria-invalid` paints the zone in the destructive tone; point\n`aria-describedby` at the message so it is read with the control. Here the\nerror comes from `onFileReject`.\n\n@summary Invalid zone with its error message",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText<HTMLInputElement>('W-9');
    const zone = getZone(canvasElement);
    const openPicker = spyOn(input, 'click').mockImplementation(() => {});
    await expect(input).toBeDisabled();
    await userEvent.click(zone);
    await expect(openPicker).not.toHaveBeenCalled();
    openPicker.mockRestore();
    zone.dispatchEvent(dragEvent('drop', pdf('w9.pdf', 'Form W-9')));
    await expect(args.onFileChange).not.toHaveBeenCalled();
  }
}`,...B.parameters?.docs?.source},description:{story:`\`disabled\` greys the zone out and disables the input: clicks open nothing
and drops are ignored.

@summary Disabled zone that takes no file`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: it looks the same as Disabled with a button inside.
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    disabled: true,
    children: <Button type="button" variant="secondary" size="md">
                Choose from agency
            </Button>
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'Choose from agency'
    });
    await expect(button.closest('[data-slot=file-drop-alternative]')).toHaveAttribute('inert');
    button.focus();
    await expect(button).not.toHaveFocus();
  }
}`,...V.parameters?.docs?.source},description:{story:`Disabled, the alternative source goes inert with the zone: its controls take
no focus, click or key, even when the consumer forgets to disable them.

@summary Disabled zone makes its alternative source inert`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: {
      url: storedW9Url
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTitle('File preview')).toHaveAttribute('src', storedW9Url);
    await expect(canvas.queryByRole('button', {
      name: 'Replace file'
    })).toBeNull();
  }
}`,...H.parameters?.docs?.source},description:{story:`\`readOnly\` shows the file with no "Replace file" button, and neither the
label nor a drop changes it: a document to look at, not to edit.

@summary Read-only preview without Replace file`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: it renders nothing to look at.
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    readOnly: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(getZone(canvasElement)).toBeNull();
  }
}`,...U.parameters?.docs?.source},description:{story:`Read-only with no file renders nothing: there is no document to look at and
none can be added.

@summary Read-only without a file renders nothing`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    className: '[--file-drop-min-height:18.75rem]'
  },
  render: args => <ControlledFileDrop {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(getZone(canvasElement).getBoundingClientRect().height).toBe(300);
    await userEvent.upload(canvas.getByLabelText('W-9'), pdf('w9.pdf', 'Form W-9'));
    await expect((await canvas.findByTitle('File preview')).getBoundingClientRect().height).toBe(300);
  }
}`,...W.parameters?.docs?.source},description:{story:"`className` lands on the box, so setting `--file-drop-min-height` there\nresizes the zone and the preview alike, here to 300px for a longer document.\n\n@summary Taller zone through className",...W.parameters?.docs?.description}}}})))()}K();export{P as AlternativeSource,W as CustomHeight,A as Default,B as Disabled,V as DisabledAlternativeSource,R as DragAndDrop,F as InsideLabel,z as Invalid,L as NameOnly,j as PickedFile,N as PreviewLoading,H as ReadOnly,U as ReadOnlyEmpty,M as Removable,I as WithoutPreview,G as __namedExportsOrder,k as default};