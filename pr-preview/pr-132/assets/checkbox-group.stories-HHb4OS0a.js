import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BrjaoF8r.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./dist-C8AlzbfS.js";import{n as a,t as o}from"./utils-nsk-j2e0.js";import{n as s,t as c}from"./checkbox-B_dEbrGK.js";import{a as l,n as u,t as d}from"./field-C37Yh807.js";var f,p,m,h,g,_;function v(){return(v=e((()=>{f=t(),i(),a(),s(),u(),p=n(),m=r({slots:{root:`flex`,item:`group/checkbox-group-item flex items-start gap-3`,control:`flex size-6 shrink-0 items-center justify-center`,label:[`flex min-h-6 cursor-pointer items-center text-sm text-text-input-normal select-none`,`group-data-disabled/checkbox-group-item:cursor-not-allowed group-data-disabled/checkbox-group-item:opacity-50`]},variants:{orientation:{vertical:{root:`flex-col gap-2`},horizontal:{root:`flex-row flex-wrap gap-x-6 gap-y-2`}}},defaultVariants:{orientation:`vertical`}}),h=(0,f.createContext)(null),g=({value:e,defaultValue:t=[],onValueChange:n,disabled:r,orientation:i=`vertical`,name:a,"aria-invalid":s,"aria-labelledby":c,"aria-describedby":u,className:d,children:g,..._})=>{let v=l(),y=m({orientation:i}),b=c??(_[`aria-label`]?void 0:v?.labelId),x=r??(v?.disabled||void 0),S=s??(v?.invalid||void 0),[C,w]=(0,f.useState)(t),T=e??C;return(0,p.jsx)(h,{value:{value:T,toggle:(t,r)=>{let i=r?[...T.filter(e=>e!==t),t]:T.filter(e=>e!==t);e===void 0&&w(i),n?.(i)},name:a,disabled:x,invalid:S},children:(0,p.jsx)(`div`,{role:`group`,"data-slot":`checkbox-group`,"data-orientation":i,"data-disabled":x||void 0,"aria-labelledby":b,"aria-describedby":u??v?.describedBy,className:o(y.root(),d),..._,children:g})})},_=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let s=(0,f.use)(h),l=(0,f.useId)();if(!s)throw Error(`CheckboxGroup.Item must be rendered inside CheckboxGroup.Root.`);let u=m(),d=e??l,g=s.value.includes(t),_=s.disabled||n;return(0,p.jsxs)(`div`,{"data-slot":`checkbox-group-item`,"data-state":g?`checked`:`unchecked`,"data-disabled":_||void 0,className:o(u.item(),r),...a,children:[(0,p.jsx)(`span`,{"data-slot":`checkbox-group-item-control`,className:u.control(),children:(0,p.jsx)(c,{id:d,name:s.name,value:t,checked:g,onCheckedChange:e=>s.toggle(t,e===!0),disabled:_,"aria-invalid":s.invalid})}),(0,p.jsx)(`label`,{htmlFor:d,"data-slot":`checkbox-group-item-label`,className:u.label(),children:i})]})};try{m.displayName=`checkboxGroupRecipe`,m.__docgenInfo={description:"Style recipe for CheckboxGroup. Slots: `root`, `item`, `control` (24px slot for the box), `label`.",displayName:`checkboxGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/checkbox-group/checkbox-group.tsx`,methods:[],props:{orientation:{defaultValue:{value:`vertical`},description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{g.displayName=`Root`,g.__docgenInfo={description:'Multi-select list of checkboxes that holds its checked values as a\n`string[]`. Renders `role="group"`: name it with `aria-labelledby` or\n`aria-label`, or put it inside a `Field.Root`, which names, describes,\ninvalidates and disables it (the group\'s own props win).\n\nNot for options inside a `Command` or `Combobox` list, where a focusable\ncheckbox would nest inside the option: use the Combobox\'s multiple\nselection. There is no `required`: "at least one" belongs to the form layer.\n\nEvery native `<div>` attribute is forwarded to the group except\n`aria-invalid`, which goes to the checkboxes (`role="group"` does not\nsupport it).',displayName:`Root`,filePath:`/home/runner/work/design-system/design-system/src/checkbox-group/checkbox-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Controlled list of checked item values.`,name:`value`,required:!1,tags:{},type:{name:`string[]`}},defaultValue:{defaultValue:{value:`[]`},declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Initial list of checked item values for an uncontrolled group.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string[]`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Fires with the next list of checked values, in the order the items were checked.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string[]) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Disables every item in the group.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"`vertical` (default) stacks the items; `horizontal` lays them in a row that wraps.",name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"Form field name shared by every item; each checked item submits `name=value`.",name:`name`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Multi-select checkbox list holding its checked values as a string array`,example:`<span id="lobs">Lines of business</span>
<CheckboxGroup.Root aria-labelledby="lobs" defaultValue={['home']} onValueChange={setLobs}>
  <CheckboxGroup.Item value="home">Home</CheckboxGroup.Item>
  <CheckboxGroup.Item value="auto">Auto</CheckboxGroup.Item>
</CheckboxGroup.Root>`,dataAttribute:`{string} data-orientation - "vertical" | "horizontal"
{string} data-disabled - Present when the whole group is disabled`}}}catch{}try{_.displayName=`Item`,_.__docgenInfo={description:"One option of a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs):\na `Checkbox` and its `<label>`, inside `CheckboxGroup.Root`. Native `<div>`\nattributes go to the row, except `id`, which goes to the checkbox.",displayName:`Item`,filePath:`/home/runner/work/design-system/design-system/src/checkbox-group/checkbox-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Value added to the group's list when this item is checked.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Checkbox and label for one value of the group`,dataAttribute:`{string} data-state - "checked" | "unchecked"
{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var y;function b(){return(b=e((()=>{v(),y={Root:g,Item:_}})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{x=t(),b(),u(),S=n(),{expect:C,fn:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/CheckboxGroup`,component:y.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Lines of business`,defaultValue:[`home`]},render:e=>(0,S.jsx)(y.Root,{...e,children:O.map(({value:e,label:t})=>(0,S.jsx)(y.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:"`Root` owns the checked values; each `Item` is a `Checkbox` with its label."}}}},O=[{value:`home`,label:`Home`},{value:`auto`,label:`Auto`},{value:`renters`,label:`Renters`}],k={args:{onValueChange:w()},play:async({args:e,canvasElement:t})=>{let n=E(t);await C(n.getByRole(`group`,{name:`Lines of business`})).toBeInTheDocument(),await C(n.getByRole(`checkbox`,{name:`Home`})).toBeChecked(),await T.click(n.getByRole(`checkbox`,{name:`Auto`})),await C(n.getByRole(`checkbox`,{name:`Auto`})).toBeChecked(),await C(e.onValueChange).toHaveBeenLastCalledWith([`home`,`auto`]),await T.click(n.getByText(`Home`)),await C(n.getByRole(`checkbox`,{name:`Home`})).not.toBeChecked(),await C(e.onValueChange).toHaveBeenLastCalledWith([`auto`])}},A={args:{defaultValue:[]},play:async({canvasElement:e})=>{let t=E(e);await T.tab(),await C(t.getByRole(`checkbox`,{name:`Home`})).toHaveFocus(),await T.tab(),await T.keyboard(` `),await C(t.getByRole(`checkbox`,{name:`Auto`})).toBeChecked(),await C(t.getByRole(`checkbox`,{name:`Home`})).not.toBeChecked()}},j={args:{"aria-label":void 0,"aria-labelledby":`lobs-heading`},render:e=>(0,S.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,S.jsx)(`span`,{id:`lobs-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Lines of business`}),(0,S.jsx)(y.Root,{...e,children:O.map(({value:e,label:t})=>(0,S.jsx)(y.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=E(e);await C(t.getByRole(`group`,{name:`Lines of business`})).toBeInTheDocument()}},M={render:()=>{let[e,t]=(0,x.useState)([`home`]),n=O.map(({value:e})=>e);return(0,S.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,S.jsx)(`button`,{type:`button`,className:`w-fit text-sm underline`,onClick:()=>t(e.length===n.length?[]:n),children:e.length===n.length?`Unselect all`:`Select all`}),(0,S.jsx)(y.Root,{"aria-label":`Lines of business`,value:e,onValueChange:t,children:O.map(({value:e,label:t})=>(0,S.jsx)(y.Item,{value:e,children:t},e))}),(0,S.jsx)(`output`,{className:`text-sm`,children:e.join(`, `)||`None`})]})},play:async({canvasElement:e})=>{let t=E(e);await T.click(t.getByRole(`button`,{name:`Select all`}));for(let{label:e}of O)await C(t.getByRole(`checkbox`,{name:e})).toBeChecked();await T.click(t.getByRole(`checkbox`,{name:`Auto`})),await C(t.getByRole(`status`)).toHaveTextContent(`home, renters`)}},N={args:{disabled:!0},play:async({canvasElement:e})=>{let t=E(e);for(let e of t.getAllByRole(`checkbox`))await C(e).toBeDisabled();await C(t.getByText(`Home`)).toHaveStyle({opacity:`0.5`})}},P={args:{defaultValue:[`auto`],onValueChange:w()},render:e=>(0,S.jsxs)(y.Root,{...e,children:[(0,S.jsx)(y.Item,{value:`home`,children:`Home`}),(0,S.jsx)(y.Item,{value:`auto`,disabled:!0,children:`Auto (required by your appointment)`}),(0,S.jsx)(y.Item,{value:`renters`,children:`Renters`})]}),play:async({args:e,canvasElement:t})=>{let n=E(t);await C(n.getByRole(`checkbox`,{name:/Auto/})).toBeDisabled(),await T.click(n.getByRole(`checkbox`,{name:`Home`})),await C(e.onValueChange).toHaveBeenLastCalledWith([`auto`,`home`])}},F={args:{"aria-invalid":!0,"aria-describedby":`lobs-error`,defaultValue:[]},render:e=>(0,S.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,S.jsx)(y.Root,{...e,children:O.map(({value:e,label:t})=>(0,S.jsx)(y.Item,{value:e,children:t},e))}),(0,S.jsx)(`p`,{id:`lobs-error`,className:`text-sm text-text-input-destructive`,children:`Select at least one line of business.`})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`group`,{name:`Lines of business`});await C(n).not.toHaveAttribute(`aria-invalid`),await C(n).toHaveAccessibleDescription(`Select at least one line of business.`);for(let e of t.getAllByRole(`checkbox`))await C(e).toHaveAttribute(`aria-invalid`,`true`)}},I={render:()=>{let[e,t]=(0,x.useState)(null);return(0,S.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),t(new FormData(e.currentTarget).getAll(`lobs`))},children:[(0,S.jsx)(y.Root,{"aria-label":`Lines of business`,name:`lobs`,defaultValue:[`home`],children:O.map(({value:e,label:t})=>(0,S.jsx)(y.Item,{value:e,children:t},e))}),(0,S.jsx)(`button`,{type:`submit`,className:`w-fit text-sm underline`,children:`Submit`}),e&&(0,S.jsx)(`output`,{className:`text-sm`,children:e.join(`, `)})]})},play:async({canvasElement:e})=>{let t=E(e);await T.click(t.getByRole(`checkbox`,{name:`Renters`})),await T.click(t.getByRole(`button`,{name:`Submit`})),await C(await t.findByRole(`status`)).toHaveTextContent(`home, renters`)}},L={render:e=>(0,S.jsx)(`div`,{className:`w-60`,children:(0,S.jsxs)(y.Root,{...e,children:[(0,S.jsx)(y.Item,{value:`home`,children:`Homeowners, including dwelling fire and condo unit owners policies`}),(0,S.jsx)(y.Item,{value:`auto`,children:`Auto`})]})}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`checkbox`,{name:/Homeowners/}),r=t.getByText(/Homeowners/),i=n.parentElement.getBoundingClientRect(),a=n.getBoundingClientRect();await C(r.getBoundingClientRect().height).toBeGreaterThan(24),await C(i.top).toBe(r.getBoundingClientRect().top),await C(i.height).toBe(24),await C(a.top-i.top).toBe(4)}},R={args:{orientation:`horizontal`},play:async({canvasElement:e})=>{let t=E(e),[n,r]=t.getAllByRole(`checkbox`).map(e=>e.closest(`[data-slot=checkbox-group-item]`).getBoundingClientRect());await C(t.getByRole(`group`)).toHaveAttribute(`data-orientation`,`horizontal`),await C(r.top).toBe(n.top),await C(r.left-n.right).toBe(24)}},z={render:e=>(0,S.jsxs)(y.Root,{...e,children:[(0,S.jsx)(y.Item,{id:`lob-home`,value:`home`,children:`Home`}),(0,S.jsx)(y.Item,{value:`auto`,children:`Auto`})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`checkbox`,{name:`Home`});await C(n).toHaveAttribute(`id`,`lob-home`),await C(n.closest(`[data-slot=checkbox-group-item]`)).toHaveAttribute(`data-state`,`checked`),await C(t.getByRole(`checkbox`,{name:`Auto`}).id).not.toBe(``)}},B={args:{"aria-label":void 0,defaultValue:[]},render:e=>(0,S.jsxs)(d.Root,{invalid:!0,children:[(0,S.jsx)(d.Label,{children:`Lines of business`}),(0,S.jsx)(d.Description,{children:`The lines this agency writes.`}),(0,S.jsx)(y.Root,{...e,children:O.map(({value:e,label:t})=>(0,S.jsx)(y.Item,{value:e,children:t},e))}),(0,S.jsx)(d.Error,{errors:[{message:`Select at least one line of business`}]})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`group`,{name:`Lines of business`});await C(n).toHaveAccessibleDescription(/writes.*Select at least one|Select at least one.*writes/),await C(n).not.toHaveAttribute(`aria-invalid`);for(let e of t.getAllByRole(`checkbox`))await C(e).toHaveAttribute(`aria-invalid`,`true`)}},V={args:{"aria-label":`Lines written`,disabled:!1},render:e=>(0,S.jsxs)(d.Root,{disabled:!0,children:[(0,S.jsx)(d.Label,{children:`Lines of business`}),(0,S.jsx)(y.Root,{...e,children:O.map(({value:e,label:t})=>(0,S.jsx)(y.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`group`,{name:`Lines written`});await C(n).not.toHaveAttribute(`aria-labelledby`);for(let e of t.getAllByRole(`checkbox`))await C(e).toBeEnabled()}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
  }
}`,...k.parameters?.docs?.source},description:{story:`@summary Uncontrolled group with one item checked`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Tab moves between items and Space toggles the focused one, as with
standalone checkboxes.

@summary Keyboard navigation and toggling`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`@summary Group named by a visible heading`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`@summary Controlled group with a select-all parent`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`@summary Whole group disabled`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest interactive. A checked disabled item
stays in the value.

@summary One item disabled`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`\`aria-invalid\` on the root reaches every checkbox, not the group element.

@summary Failed validation, forwarded to the items`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"With `name`, each checked item submits `name=value`, so a native form reads\nthe selection with `FormData.getAll`.\n\n@summary Native form submission",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`A long label wraps under itself and the box stays level with its first line.

@summary Wrapping label keeps the box on the first line`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Items laid in a row, 24px apart, wrapping when the row runs out of room.

@summary Items in a row`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`@summary Item id reaches the checkbox`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': undefined,
    defaultValue: []
  },
  render: args => <Field.Root invalid>
            <Field.Label>Lines of business</Field.Label>
            <Field.Description>The lines this agency writes.</Field.Description>
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
}`,...B.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, label, messages, `invalid` and `disabled` reach the group with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Lines written',
    disabled: false
  },
  render: args => <Field.Root disabled>
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
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('group', {
      name: 'Lines written'
    });
    await expect(group).not.toHaveAttribute('aria-labelledby');
    for (const checkbox of canvas.getAllByRole('checkbox')) {
      await expect(checkbox).toBeEnabled();
    }
  }
}`,...V.parameters?.docs?.source},description:{story:"`aria-label` and `disabled={false}` on the group win over the field.\n\n@summary Own props override the Field wiring",...V.parameters?.docs?.description}}},H=[`Default`,`Keyboard`,`LabelledByHeading`,`Controlled`,`Disabled`,`DisabledItem`,`Invalid`,`InForm`,`LongLabel`,`Horizontal`,`ItemId`,`InsideField`,`InsideFieldOverridden`]})))()}U();export{M as Controlled,k as Default,N as Disabled,P as DisabledItem,R as Horizontal,I as InForm,B as InsideField,V as InsideFieldOverridden,F as Invalid,z as ItemId,A as Keyboard,j as LabelledByHeading,L as LongLabel,H as __namedExportsOrder,D as default};