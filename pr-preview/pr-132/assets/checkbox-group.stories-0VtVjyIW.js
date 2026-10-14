import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CvaWx8mR.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./dist-C8AlzbfS.js";import{n as a,t as o}from"./utils-nsk-j2e0.js";import{n as s,r as c}from"./merge-props-Cs-A9p9J.js";import{n as l,t as u}from"./checkbox-D-3TGNI6.js";import{a as d,n as f,t as p}from"./field-DeGEtfTK.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{m=t(),i(),a(),s(),l(),f(),h=n(),g=r({slots:{root:[`flex [:is([data-slot=field-content],[data-slot=field-description])+&]:mt-2`,`[&:has(+[data-slot=field-error])]:mb-2`],item:`group/checkbox-group-item flex`,label:[`flex cursor-pointer items-start gap-3 text-sm text-text-input-normal select-none`,`group-data-disabled/checkbox-group-item:cursor-not-allowed`,`in-data-readonly:cursor-default`],control:`flex size-6 shrink-0 items-center justify-center`,text:`flex min-h-6 items-center group-data-disabled/checkbox-group-item:opacity-50`},variants:{orientation:{vertical:{root:`flex-col gap-2`},horizontal:{root:`flex-row flex-wrap gap-x-6 gap-y-2`}}},defaultVariants:{orientation:`vertical`}}),_=(0,m.createContext)(null),v=({value:e,defaultValue:t=[],onValueChange:n,disabled:r,readOnly:i,orientation:a=`vertical`,name:s,"aria-invalid":l,"aria-labelledby":u,"aria-describedby":f,className:p,children:v,...y})=>{let b=d(),x=g({orientation:a}),S=u??(y[`aria-label`]===void 0?b?.labelId:void 0),C=r??(b?.disabled||void 0),w=i??(b?.readOnly||void 0),T=l??(b?.invalid||void 0),[E,D]=(0,m.useState)(t),O=e??E,k=c({"aria-describedby":b?.describedBy},{"aria-describedby":f})[`aria-describedby`];return(0,h.jsx)(_,{value:{value:O,toggle:(t,r)=>{if(w)return;let i=r?[...O.filter(e=>e!==t),t]:O.filter(e=>e!==t);e===void 0&&D(i),n?.(i)},styles:x,name:s,disabled:C,readOnly:w,invalid:T},children:(0,h.jsx)(`div`,{...y,role:`group`,"data-slot":`checkbox-group`,"data-orientation":a,"data-disabled":C||void 0,"data-readonly":w||void 0,"aria-labelledby":S,"aria-describedby":k,className:o(x.root(),p),children:v})})},v.displayName=`CheckboxGroup.Root`,y=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let s=(0,m.use)(_),c=(0,m.useId)();if(!s)throw Error(`CheckboxGroup.Item must be rendered inside CheckboxGroup.Root.`);let{styles:l}=s,d=e??c,f=s.value.includes(t),p=s.disabled||n;return(0,h.jsx)(`div`,{...a,"data-slot":`checkbox-group-item`,"data-state":f?`checked`:`unchecked`,"data-disabled":p||void 0,className:o(l.item(),r),children:(0,h.jsxs)(`label`,{htmlFor:d,"data-slot":`checkbox-group-item-label`,className:l.label(),children:[(0,h.jsx)(`span`,{"data-slot":`checkbox-group-item-control`,className:l.control(),children:(0,h.jsx)(u,{id:d,name:s.name,value:t,checked:f,onCheckedChange:e=>s.toggle(t,e===!0),disabled:p,"aria-readonly":s.readOnly,"aria-invalid":s.invalid})}),(0,h.jsx)(`span`,{"data-slot":`checkbox-group-item-text`,className:l.text(),children:i})]})})},y.displayName=`CheckboxGroup.Item`;try{g.displayName=`CheckboxGroup.Root`,g.__docgenInfo={description:"Style recipe for CheckboxGroup. Slots: `root`, `item`, `label` (the clickable row), `control` (24px slot for the box), `text`.",displayName:`CheckboxGroup.Root`,filePath:`/home/runner/work/design-system/design-system/src/checkbox-group/checkbox-group.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{y.displayName=`CheckboxGroup.Item`,y.__docgenInfo={description:"One option of a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs):\na `Checkbox` and its `<label>`, inside `CheckboxGroup.Root`. Native `<div>`\nattributes go to the row, except `id`, which goes to the checkbox.",displayName:`CheckboxGroup.Item`,filePath:`/home/runner/work/design-system/design-system/src/checkbox-group/checkbox-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Value added to the group's list when this item is checked.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Checkbox and label for one value of the group`,dataAttribute:`{string} data-state - "checked" | "unchecked"
{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var x;function S(){return(S=e((()=>{b(),x={Root:v,Item:y}})))()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{C=t(),S(),f(),w=n(),{expect:T,fn:E,userEvent:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/CheckboxGroup`,component:x.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Lines of business`,defaultValue:[`home`]},render:e=>(0,w.jsx)(x.Root,{...e,children:A.map(({value:e,label:t})=>(0,w.jsx)(x.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:"`Root` owns the checked values; each `Item` is a `Checkbox` with its label."}}}},A=[{value:`home`,label:`Home`},{value:`auto`,label:`Auto`},{value:`renters`,label:`Renters`}],j={args:{onValueChange:E()},play:async({args:e,canvasElement:t})=>{let n=O(t);await T(n.getByRole(`group`,{name:`Lines of business`})).toBeInTheDocument(),await T(n.getByRole(`checkbox`,{name:`Home`})).toBeChecked(),await D.click(n.getByRole(`checkbox`,{name:`Auto`})),await T(n.getByRole(`checkbox`,{name:`Auto`})).toBeChecked(),await T(e.onValueChange).toHaveBeenLastCalledWith([`home`,`auto`]),await D.click(n.getByText(`Home`)),await T(n.getByRole(`checkbox`,{name:`Home`})).not.toBeChecked(),await T(e.onValueChange).toHaveBeenLastCalledWith([`auto`]);let r=n.getByRole(`checkbox`,{name:`Renters`});await D.click(r.closest(`[data-slot=checkbox-group-item-control]`)),await T(r).toBeChecked()}},M={args:{defaultValue:[]},play:async({canvasElement:e})=>{let t=O(e);await D.tab(),await T(t.getByRole(`checkbox`,{name:`Home`})).toHaveFocus(),await D.tab(),await D.keyboard(` `),await T(t.getByRole(`checkbox`,{name:`Auto`})).toBeChecked(),await T(t.getByRole(`checkbox`,{name:`Home`})).not.toBeChecked()}},N={args:{"aria-label":void 0,"aria-labelledby":`lobs-heading`},render:e=>(0,w.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,w.jsx)(`span`,{id:`lobs-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Lines of business`}),(0,w.jsx)(x.Root,{...e,children:A.map(({value:e,label:t})=>(0,w.jsx)(x.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=O(e);await T(t.getByRole(`group`,{name:`Lines of business`})).toBeInTheDocument()}},P={render:()=>{let[e,t]=(0,C.useState)([`home`]),n=A.map(({value:e})=>e);return(0,w.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,w.jsx)(`button`,{type:`button`,className:`w-fit text-sm underline`,onClick:()=>t(e.length===n.length?[]:n),children:e.length===n.length?`Unselect all`:`Select all`}),(0,w.jsx)(x.Root,{"aria-label":`Lines of business`,value:e,onValueChange:t,children:A.map(({value:e,label:t})=>(0,w.jsx)(x.Item,{value:e,children:t},e))}),(0,w.jsx)(`output`,{className:`text-sm`,children:e.join(`, `)||`None`})]})},play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:`Select all`}));for(let{label:e}of A)await T(t.getByRole(`checkbox`,{name:e})).toBeChecked();await D.click(t.getByRole(`checkbox`,{name:`Auto`})),await T(t.getByRole(`status`)).toHaveTextContent(`home, renters`)}},F={args:{disabled:!0},play:async({canvasElement:e})=>{let t=O(e);for(let e of t.getAllByRole(`checkbox`))await T(e).toBeDisabled();await T(t.getByText(`Home`)).toHaveStyle({opacity:`0.5`})}},I={args:{"aria-label":void 0,onValueChange:E()},render:e=>(0,w.jsxs)(p.Root,{readOnly:!0,children:[(0,w.jsx)(p.Label,{children:`Lines of business`}),(0,w.jsx)(x.Root,{...e,children:A.map(({value:e,label:t})=>(0,w.jsx)(x.Item,{value:e,children:t},e))})]}),play:async({args:e,canvasElement:t})=>{let n=O(t),r=n.getByRole(`checkbox`,{name:`Auto`});await T(n.getByRole(`group`,{name:`Lines of business`})).toHaveAttribute(`data-readonly`),await T(r).toHaveAttribute(`aria-readonly`,`true`),await T(r).toBeEnabled(),await D.click(r),await D.click(n.getByText(`Home`)),await T(r).not.toBeChecked(),await T(n.getByRole(`checkbox`,{name:`Home`})).toBeChecked(),await T(e.onValueChange).not.toHaveBeenCalled()}},L={args:{defaultValue:[`auto`],onValueChange:E()},render:e=>(0,w.jsxs)(x.Root,{...e,children:[(0,w.jsx)(x.Item,{value:`home`,children:`Home`}),(0,w.jsx)(x.Item,{value:`auto`,disabled:!0,children:`Auto (required by your appointment)`}),(0,w.jsx)(x.Item,{value:`renters`,children:`Renters`})]}),play:async({args:e,canvasElement:t})=>{let n=O(t);await T(n.getByRole(`checkbox`,{name:/Auto/})).toBeDisabled(),await D.click(n.getByRole(`checkbox`,{name:`Home`})),await T(e.onValueChange).toHaveBeenLastCalledWith([`auto`,`home`])}},R={args:{"aria-invalid":!0,"aria-describedby":`lobs-error`,defaultValue:[]},render:e=>(0,w.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,w.jsx)(x.Root,{...e,children:A.map(({value:e,label:t})=>(0,w.jsx)(x.Item,{value:e,children:t},e))}),(0,w.jsx)(`p`,{id:`lobs-error`,className:`text-sm text-text-input-destructive`,children:`Select at least one line of business.`})]}),play:async({canvasElement:e})=>{let t=O(e),n=t.getByRole(`group`,{name:`Lines of business`});await T(n).not.toHaveAttribute(`aria-invalid`),await T(n).toHaveAccessibleDescription(`Select at least one line of business.`);for(let e of t.getAllByRole(`checkbox`))await T(e).toHaveAttribute(`aria-invalid`,`true`)}},z={render:()=>{let[e,t]=(0,C.useState)(null);return(0,w.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),t(new FormData(e.currentTarget).getAll(`lobs`))},children:[(0,w.jsx)(x.Root,{"aria-label":`Lines of business`,name:`lobs`,defaultValue:[`home`],children:A.map(({value:e,label:t})=>(0,w.jsx)(x.Item,{value:e,children:t},e))}),(0,w.jsx)(`button`,{type:`submit`,className:`w-fit text-sm underline`,children:`Submit`}),e&&(0,w.jsx)(`output`,{className:`text-sm`,children:e.join(`, `)})]})},play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`checkbox`,{name:`Renters`})),await D.click(t.getByRole(`button`,{name:`Submit`})),await T(await t.findByRole(`status`)).toHaveTextContent(`home, renters`)}},B={render:e=>(0,w.jsx)(`div`,{className:`w-60`,children:(0,w.jsxs)(x.Root,{...e,children:[(0,w.jsx)(x.Item,{value:`home`,children:`Homeowners, including dwelling fire and condo unit owners policies`}),(0,w.jsx)(x.Item,{value:`auto`,children:`Auto`})]})}),play:async({canvasElement:e})=>{let t=O(e),n=t.getByRole(`checkbox`,{name:/Homeowners/}),r=t.getByText(/Homeowners/),i=n.parentElement.getBoundingClientRect(),a=n.getBoundingClientRect();await T(r.getBoundingClientRect().height).toBeGreaterThan(24),await T(i.top).toBe(r.getBoundingClientRect().top),await T(i.height).toBe(24),await T(a.top-i.top).toBe(4)}},V={args:{orientation:`horizontal`},play:async({canvasElement:e})=>{let t=O(e),[n,r]=t.getAllByRole(`checkbox`).map(e=>e.closest(`[data-slot=checkbox-group-item]`).getBoundingClientRect());await T(t.getByRole(`group`)).toHaveAttribute(`data-orientation`,`horizontal`),await T(r.top).toBe(n.top),await T(r.left-n.right).toBe(24)}},H={render:e=>(0,w.jsxs)(x.Root,{...e,children:[(0,w.jsx)(x.Item,{id:`lob-home`,value:`home`,children:`Home`}),(0,w.jsx)(x.Item,{value:`auto`,children:`Auto`})]}),play:async({canvasElement:e})=>{let t=O(e),n=t.getByRole(`checkbox`,{name:`Home`});await T(n).toHaveAttribute(`id`,`lob-home`),await T(n.closest(`[data-slot=checkbox-group-item]`)).toHaveAttribute(`data-state`,`checked`),await T(t.getByRole(`checkbox`,{name:`Auto`}).id).not.toBe(``)}},U={args:{"aria-label":void 0,defaultValue:[]},render:e=>(0,w.jsxs)(p.Root,{invalid:!0,children:[(0,w.jsxs)(p.Content,{children:[(0,w.jsx)(p.Label,{children:`Lines of business`}),(0,w.jsx)(p.Description,{children:`The lines this agency writes.`})]}),(0,w.jsx)(x.Root,{...e,children:A.map(({value:e,label:t})=>(0,w.jsx)(x.Item,{value:e,children:t},e))}),(0,w.jsx)(p.Error,{errors:[{message:`Select at least one line of business`}]})]}),play:async({canvasElement:e})=>{let t=O(e),n=t.getByRole(`group`,{name:`Lines of business`});await T(n).toHaveAccessibleDescription(/writes.*Select at least one|Select at least one.*writes/),await T(n).not.toHaveAttribute(`aria-invalid`);for(let e of t.getAllByRole(`checkbox`))await T(e).toHaveAttribute(`aria-invalid`,`true`)}},W={args:{"aria-label":`Lines written`,"aria-describedby":`lobs-note`,disabled:!1},render:e=>(0,w.jsxs)(p.Root,{disabled:!0,children:[(0,w.jsxs)(p.Content,{children:[(0,w.jsx)(p.Label,{children:`Lines of business`}),(0,w.jsx)(p.Description,{children:`The lines this agency writes.`})]}),(0,w.jsx)(`p`,{id:`lobs-note`,children:`Ask the principal before changing them.`}),(0,w.jsx)(x.Root,{...e,children:A.map(({value:e,label:t})=>(0,w.jsx)(x.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=O(e),n=t.getByRole(`group`,{name:`Lines written`});await T(n).not.toHaveAttribute(`aria-labelledby`),await T(n).toHaveAccessibleDescription(`The lines this agency writes. Ask the principal before changing them.`);for(let e of t.getAllByRole(`checkbox`))await T(e).toBeEnabled()}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('group', {
      name: 'Lines of business'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('checkbox', {
      name: 'Home'
    })).toBeChecked();
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Auto'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: 'Auto'
    })).toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['home', 'auto']);
    await userEvent.click(canvas.getByText('Home'));
    await expect(canvas.getByRole('checkbox', {
      name: 'Home'
    })).not.toBeChecked();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['auto']);

    // The padding around the box and the gap before the text toggle too: the label wraps them.
    const renters = canvas.getByRole('checkbox', {
      name: 'Renters'
    });
    await userEvent.click(renters.closest('[data-slot=checkbox-group-item-control]')!);
    await expect(renters).toBeChecked();
  }
}`,...j.parameters?.docs?.source},description:{story:`@summary Uncontrolled group with one item checked`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    await expect(canvas.getByRole('checkbox', {
      name: 'Home'
    })).toHaveFocus();
    await userEvent.tab();
    await userEvent.keyboard(' ');
    await expect(canvas.getByRole('checkbox', {
      name: 'Auto'
    })).toBeChecked();
    await expect(canvas.getByRole('checkbox', {
      name: 'Home'
    })).not.toBeChecked();
  }
}`,...M.parameters?.docs?.source},description:{story:`Tab moves between items and Space toggles the focused one, as with
standalone checkboxes.

@summary Keyboard navigation and toggling`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': undefined,
    'aria-labelledby': 'lobs-heading'
  },
  render: args => <div className="flex flex-col gap-2">
            <span id="lobs-heading" className="text-sm font-semibold text-text-input-normal">
                Lines of business
            </span>
            <CheckboxGroup.Root {...args}>
                {LOBS.map(({
        value,
        label
      }) => <CheckboxGroup.Item key={value} value={value}>
                        {label}
                    </CheckboxGroup.Item>)}
            </CheckboxGroup.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('group', {
      name: 'Lines of business'
    })).toBeInTheDocument();
  }
}`,...N.parameters?.docs?.source},description:{story:`@summary Group named by a visible heading`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['home']);
    const allValues = LOBS.map(({
      value
    }) => value);
    return <div className="flex flex-col gap-3">
                <button type="button" className="w-fit text-sm underline" onClick={() => setSelected(selected.length === allValues.length ? [] : allValues)}>
                    {selected.length === allValues.length ? 'Unselect all' : 'Select all'}
                </button>
                <CheckboxGroup.Root aria-label="Lines of business" value={selected} onValueChange={setSelected}>
                    {LOBS.map(({
          value,
          label
        }) => <CheckboxGroup.Item key={value} value={value}>
                            {label}
                        </CheckboxGroup.Item>)}
                </CheckboxGroup.Root>
                <output className="text-sm">{selected.join(', ') || 'None'}</output>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Select all'
    }));
    for (const {
      label
    } of LOBS) {
      await expect(canvas.getByRole('checkbox', {
        name: label
      })).toBeChecked();
    }
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Auto'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('home, renters');
  }
}`,...P.parameters?.docs?.source},description:{story:`@summary Controlled group with a select-all parent`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const checkbox of canvas.getAllByRole('checkbox')) {
      await expect(checkbox).toBeDisabled();
    }
    await expect(canvas.getByText('Home')).toHaveStyle({
      opacity: '0.5'
    });
  }
}`,...F.parameters?.docs?.source},description:{story:`@summary Whole group disabled`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': undefined,
    onValueChange: fn()
  },
  render: args => <Field.Root readOnly>
            <Field.Label>Lines of business</Field.Label>
            <CheckboxGroup.Root {...args}>
                {LOBS.map(({
        value,
        label
      }) => <CheckboxGroup.Item key={value} value={value}>
                        {label}
                    </CheckboxGroup.Item>)}
            </CheckboxGroup.Root>
        </Field.Root>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const auto = canvas.getByRole('checkbox', {
      name: 'Auto'
    });
    await expect(canvas.getByRole('group', {
      name: 'Lines of business'
    })).toHaveAttribute('data-readonly');
    await expect(auto).toHaveAttribute('aria-readonly', 'true');
    await expect(auto).toBeEnabled();
    await userEvent.click(auto);
    await userEvent.click(canvas.getByText('Home'));
    await expect(auto).not.toBeChecked();
    await expect(canvas.getByRole('checkbox', {
      name: 'Home'
    })).toBeChecked();
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...I.parameters?.docs?.source},description:{story:"Inside a read-only `Field.Root`, the items stay focusable but do not toggle,\nand each checkbox announces `aria-readonly` (a `group` cannot carry it).\n\n@summary Read-only through a surrounding Field",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['auto'],
    onValueChange: fn()
  },
  render: args => <CheckboxGroup.Root {...args}>
            <CheckboxGroup.Item value="home">Home</CheckboxGroup.Item>
            <CheckboxGroup.Item value="auto" disabled>
                Auto (required by your appointment)
            </CheckboxGroup.Item>
            <CheckboxGroup.Item value="renters">Renters</CheckboxGroup.Item>
        </CheckboxGroup.Root>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('checkbox', {
      name: /Auto/
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Home'
    }));
    await expect(args.onValueChange).toHaveBeenLastCalledWith(['auto', 'home']);
  }
}`,...L.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest interactive. A checked disabled item
stays in the value.

@summary One item disabled`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    'aria-describedby': 'lobs-error',
    defaultValue: []
  },
  render: args => <div className="flex flex-col gap-2">
            <CheckboxGroup.Root {...args}>
                {LOBS.map(({
        value,
        label
      }) => <CheckboxGroup.Item key={value} value={value}>
                        {label}
                    </CheckboxGroup.Item>)}
            </CheckboxGroup.Root>
            <p id="lobs-error" className="text-sm text-text-input-destructive">
                Select at least one line of business.
            </p>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('group', {
      name: 'Lines of business'
    });
    await expect(group).not.toHaveAttribute('aria-invalid');
    await expect(group).toHaveAccessibleDescription('Select at least one line of business.');
    for (const checkbox of canvas.getAllByRole('checkbox')) {
      await expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`\`aria-invalid\` on the root reaches every checkbox, not the group element.

@summary Failed validation, forwarded to the items`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string[] | null>(null);
    return <form className="flex flex-col gap-3" onSubmit={event => {
      event.preventDefault();
      setSubmitted(new FormData(event.currentTarget).getAll('lobs') as string[]);
    }}>
                <CheckboxGroup.Root aria-label="Lines of business" name="lobs" defaultValue={['home']}>
                    {LOBS.map(({
          value,
          label
        }) => <CheckboxGroup.Item key={value} value={value}>
                            {label}
                        </CheckboxGroup.Item>)}
                </CheckboxGroup.Root>
                <button type="submit" className="w-fit text-sm underline">
                    Submit
                </button>
                {submitted && <output className="text-sm">{submitted.join(', ')}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Renters'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('home, renters');
  }
}`,...z.parameters?.docs?.source},description:{story:"With `name`, each checked item submits `name=value`, so a native form reads\nthe selection with `FormData.getAll`.\n\n@summary Native form submission",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-60">
            <CheckboxGroup.Root {...args}>
                <CheckboxGroup.Item value="home">
                    Homeowners, including dwelling fire and condo unit owners policies
                </CheckboxGroup.Item>
                <CheckboxGroup.Item value="auto">Auto</CheckboxGroup.Item>
            </CheckboxGroup.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /Homeowners/
    });
    const label = canvas.getByText(/Homeowners/);
    const slot = checkbox.parentElement!.getBoundingClientRect();
    const box = checkbox.getBoundingClientRect();
    await expect(label.getBoundingClientRect().height).toBeGreaterThan(24);
    await expect(slot.top).toBe(label.getBoundingClientRect().top);
    await expect(slot.height).toBe(24);
    await expect(box.top - slot.top).toBe(4);
  }
}`,...B.parameters?.docs?.source},description:{story:`A long label wraps under itself and the box stays level with its first line.

@summary Wrapping label keeps the box on the first line`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [home, auto] = canvas.getAllByRole('checkbox').map(checkbox => checkbox.closest('[data-slot=checkbox-group-item]')!.getBoundingClientRect()) as [DOMRect, DOMRect];
    await expect(canvas.getByRole('group')).toHaveAttribute('data-orientation', 'horizontal');
    await expect(auto.top).toBe(home.top);
    await expect(auto.left - home.right).toBe(24);
  }
}`,...V.parameters?.docs?.source},description:{story:`Items laid in a row, 24px apart, wrapping when the row runs out of room.

@summary Items in a row`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <CheckboxGroup.Root {...args}>
            <CheckboxGroup.Item id="lob-home" value="home">
                Home
            </CheckboxGroup.Item>
            <CheckboxGroup.Item value="auto">Auto</CheckboxGroup.Item>
        </CheckboxGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const home = canvas.getByRole('checkbox', {
      name: 'Home'
    });
    await expect(home).toHaveAttribute('id', 'lob-home');
    await expect(home.closest('[data-slot=checkbox-group-item]')).toHaveAttribute('data-state', 'checked');
    await expect(canvas.getByRole('checkbox', {
      name: 'Auto'
    }).id).not.toBe('');
  }
}`,...H.parameters?.docs?.source},description:{story:`@summary Item id reaches the checkbox`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': undefined,
    defaultValue: []
  },
  render: args => <Field.Root invalid>
            <Field.Content>
                <Field.Label>Lines of business</Field.Label>
                <Field.Description>The lines this agency writes.</Field.Description>
            </Field.Content>
            <CheckboxGroup.Root {...args}>
                {LOBS.map(({
        value,
        label
      }) => <CheckboxGroup.Item key={value} value={value}>
                        {label}
                    </CheckboxGroup.Item>)}
            </CheckboxGroup.Root>
            <Field.Error errors={[{
      message: 'Select at least one line of business'
    }]} />
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('group', {
      name: 'Lines of business'
    });
    await expect(group).toHaveAccessibleDescription(/writes.*Select at least one|Select at least one.*writes/);
    await expect(group).not.toHaveAttribute('aria-invalid');
    for (const checkbox of canvas.getAllByRole('checkbox')) {
      await expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    }
  }
}`,...U.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, label, messages, `invalid` and `disabled` reach the group with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Lines written',
    'aria-describedby': 'lobs-note',
    disabled: false
  },
  render: args => <Field.Root disabled>
            <Field.Content>
                <Field.Label>Lines of business</Field.Label>
                <Field.Description>The lines this agency writes.</Field.Description>
            </Field.Content>
            <p id="lobs-note">Ask the principal before changing them.</p>
            <CheckboxGroup.Root {...args}>
                {LOBS.map(({
        value,
        label
      }) => <CheckboxGroup.Item key={value} value={value}>
                        {label}
                    </CheckboxGroup.Item>)}
            </CheckboxGroup.Root>
        </Field.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('group', {
      name: 'Lines written'
    });
    await expect(group).not.toHaveAttribute('aria-labelledby');
    await expect(group).toHaveAccessibleDescription('The lines this agency writes. Ask the principal before changing them.');
    for (const checkbox of canvas.getAllByRole('checkbox')) {
      await expect(checkbox).toBeEnabled();
    }
  }
}`,...W.parameters?.docs?.source},description:{story:"`aria-label` and `disabled={false}` on the group win over the field. Its own\n`aria-describedby` joins the field's messages instead of replacing them.\n\n@summary Own props override the Field wiring",...W.parameters?.docs?.description}}},G=[`Default`,`Keyboard`,`LabelledByHeading`,`Controlled`,`Disabled`,`ReadOnly`,`DisabledItem`,`Invalid`,`InForm`,`LongLabel`,`Horizontal`,`ItemId`,`InsideField`,`InsideFieldOverridden`]})))()}K();export{P as Controlled,j as Default,F as Disabled,L as DisabledItem,V as Horizontal,z as InForm,U as InsideField,W as InsideFieldOverridden,R as Invalid,H as ItemId,M as Keyboard,N as LabelledByHeading,B as LongLabel,I as ReadOnly,G as __namedExportsOrder,k as default};