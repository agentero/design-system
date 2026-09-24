import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BFwQyqPz.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./dist-C8AlzbfS.js";import{n as a,t as o}from"./utils-nsk-j2e0.js";import{n as s,t as c}from"./checkbox-D6f7gG-p.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),i(),a(),s(),u=n(),d=r({slots:{root:`flex flex-col gap-1`,item:`flex items-start gap-2`,control:`peer mt-0.5`,label:[`cursor-pointer text-sm text-text-default-base-primary select-none`,`peer-disabled:cursor-not-allowed peer-disabled:opacity-50`]}}),f=(0,l.createContext)(null),p=({value:e,defaultValue:t=[],onValueChange:n,disabled:r,name:i,"aria-invalid":a,className:s,children:c,...p})=>{let m=d(),[h,g]=(0,l.useState)(t),_=e??h;return(0,u.jsx)(f,{value:{value:_,toggle:(t,r)=>{let i=r?[..._.filter(e=>e!==t),t]:_.filter(e=>e!==t);e===void 0&&g(i),n?.(i)},name:i,disabled:r,invalid:a},children:(0,u.jsx)(`div`,{role:`group`,"data-slot":`checkbox-group`,"data-disabled":r||void 0,className:o(m.root(),s),...p,children:c})})},m=({id:e,value:t,disabled:n,className:r,children:i,...a})=>{let s=(0,l.use)(f),p=(0,l.useId)();if(!s)throw Error(`CheckboxGroup.Item must be rendered inside CheckboxGroup.Root.`);let m=d(),h=e??p,g=s.value.includes(t),_=s.disabled||n;return(0,u.jsxs)(`div`,{"data-slot":`checkbox-group-item`,"data-state":g?`checked`:`unchecked`,"data-disabled":_||void 0,className:o(m.item(),r),...a,children:[(0,u.jsx)(c,{id:h,className:m.control(),name:s.name,value:t,checked:g,onCheckedChange:e=>s.toggle(t,e===!0),disabled:_,"aria-invalid":s.invalid}),(0,u.jsx)(`label`,{htmlFor:h,"data-slot":`checkbox-group-item-label`,className:m.label(),children:i})]})};try{d.displayName=`checkboxGroupRecipe`,d.__docgenInfo={description:"Style recipe for CheckboxGroup. Slots: `root` (the group), `item` (one row), `control` (its checkbox), `label` (its text).",displayName:`checkboxGroupRecipe`,filePath:`/home/runner/work/design-system/design-system/src/checkbox-group/checkbox-group.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{}}}catch{}try{p.displayName=`Root`,p.__docgenInfo={description:'Container for a multi-select list of checkboxes. Owns the selected values\nas a `string[]` and renders `role="group"`: name it with `aria-labelledby`\npointing at a visible heading, or with `aria-label`.\n\nHeadless like [Checkbox](?path=/docs/components-checkbox--docs): no group\nlabel, description, error or scroll container. Those belong to the field\nlayer or to the consumer.\n\nNot for options inside a listbox such as a `Command` or `Combobox` list:\neach item is a focusable control, which nests inside the option. Use the\nCombobox\'s multiple selection there.\n\nThere is no `required`: "at least one" is a rule for the form layer, and\n`required` on each checkbox would demand all of them.',displayName:`Root`,filePath:`/home/runner/work/design-system/design-system/src/checkbox-group/checkbox-group.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Controlled list of checked item values.`,name:`value`,required:!1,tags:{},type:{name:`string[]`}},defaultValue:{defaultValue:{value:`[]`},declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Initial list of checked item values for an uncontrolled group.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string[]`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Fires with the next list of checked values, in the order the items were checked.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string[]) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Disables every item in the group.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"Form field name shared by every item; each checked item submits `name=value`.",name:`name`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Multi-select checkbox list holding its checked values as a string array`,example:`<span id="lobs">Lines of business</span>
<CheckboxGroup.Root aria-labelledby="lobs" defaultValue={['home']} onValueChange={setLobs}>
  <CheckboxGroup.Item value="home">Home</CheckboxGroup.Item>
  <CheckboxGroup.Item value="auto">Auto</CheckboxGroup.Item>
</CheckboxGroup.Root>`,dataAttribute:`{string} data-disabled - Present when the whole group is disabled`}}}catch{}try{m.displayName=`Item`,m.__docgenInfo={description:"One option of a [CheckboxGroup](?path=/docs/components-checkboxgroup--docs):\na `Checkbox` and its `<label>`. Must render inside `CheckboxGroup.Root`.",displayName:`Item`,filePath:`/home/runner/work/design-system/design-system/src/checkbox-group/checkbox-group.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Id of the checkbox, which the label points at. Generated when omitted.`,name:`id`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:`Value added to the group's list when this item is checked.`,name:`value`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"Disables this item only. The group's `disabled` wins over `false`.",name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/checkbox-group/checkbox-group.tsx`,name:`TypeLiteral`}],description:"The item's label. Keep it free of interactive elements: it is rendered inside a `<label>`.",name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Checkbox and label for one value of the group`,dataAttribute:`{string} data-state - "checked" | "unchecked"
{string} data-disabled - Present when the item or its group is disabled`}}}catch{}})))()}var g;function _(){return(_=e((()=>{h(),g={Root:p,Item:m}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{v=t(),_(),y=n(),{expect:b,fn:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/CheckboxGroup`,component:g.Root,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`},"aria-invalid":{control:`boolean`},onValueChange:{action:`valueChange`}},args:{"aria-label":`Lines of business`,defaultValue:[`home`]},render:e=>(0,y.jsx)(g.Root,{...e,children:T.map(({value:e,label:t})=>(0,y.jsx)(g.Item,{value:e,children:t},e))}),parameters:{docs:{description:{component:'CheckboxGroup is a compound: `Root` owns the checked values as a\n`string[]` and renders `role="group"`, and each `Item` renders one\n`Checkbox` with its label. Name the group with `aria-labelledby` or\n`aria-label`; the group label, description and error come from the field\nlayer.'}}}},T=[{value:`home`,label:`Home`},{value:`auto`,label:`Auto`},{value:`renters`,label:`Renters`}],E={args:{onValueChange:x()},play:async({args:e,canvasElement:t})=>{let n=C(t);await b(n.getByRole(`group`,{name:`Lines of business`})).toBeInTheDocument(),await b(n.getByRole(`checkbox`,{name:`Home`})).toBeChecked(),await S.click(n.getByRole(`checkbox`,{name:`Auto`})),await b(n.getByRole(`checkbox`,{name:`Auto`})).toBeChecked(),await b(e.onValueChange).toHaveBeenLastCalledWith([`home`,`auto`]),await S.click(n.getByText(`Home`)),await b(n.getByRole(`checkbox`,{name:`Home`})).not.toBeChecked(),await b(e.onValueChange).toHaveBeenLastCalledWith([`auto`])}},D={args:{defaultValue:[]},play:async({canvasElement:e})=>{let t=C(e);await S.tab(),await b(t.getByRole(`checkbox`,{name:`Home`})).toHaveFocus(),await S.tab(),await S.keyboard(` `),await b(t.getByRole(`checkbox`,{name:`Auto`})).toBeChecked(),await b(t.getByRole(`checkbox`,{name:`Home`})).not.toBeChecked()}},O={args:{"aria-label":void 0,"aria-labelledby":`lobs-heading`},render:e=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`span`,{id:`lobs-heading`,className:`text-sm font-semibold text-text-input-normal`,children:`Lines of business`}),(0,y.jsx)(g.Root,{...e,children:T.map(({value:e,label:t})=>(0,y.jsx)(g.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=C(e);await b(t.getByRole(`group`,{name:`Lines of business`})).toBeInTheDocument()}},k={render:()=>{let[e,t]=(0,v.useState)([`home`]),n=T.map(({value:e})=>e);return(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,y.jsx)(`button`,{type:`button`,className:`w-fit text-sm underline`,onClick:()=>t(e.length===n.length?[]:n),children:e.length===n.length?`Unselect all`:`Select all`}),(0,y.jsx)(g.Root,{"aria-label":`Lines of business`,value:e,onValueChange:t,children:T.map(({value:e,label:t})=>(0,y.jsx)(g.Item,{value:e,children:t},e))}),(0,y.jsx)(`output`,{className:`text-sm`,children:e.join(`, `)||`None`})]})},play:async({canvasElement:e})=>{let t=C(e);await S.click(t.getByRole(`button`,{name:`Select all`}));for(let{label:e}of T)await b(t.getByRole(`checkbox`,{name:e})).toBeChecked();await S.click(t.getByRole(`checkbox`,{name:`Auto`})),await b(t.getByRole(`status`)).toHaveTextContent(`home, renters`)}},A={args:{disabled:!0},play:async({canvasElement:e})=>{let t=C(e);for(let e of t.getAllByRole(`checkbox`))await b(e).toBeDisabled();await b(t.getByText(`Home`)).toHaveStyle({opacity:`0.5`})}},j={args:{defaultValue:[`auto`],onValueChange:x()},render:e=>(0,y.jsxs)(g.Root,{...e,children:[(0,y.jsx)(g.Item,{value:`home`,children:`Home`}),(0,y.jsx)(g.Item,{value:`auto`,disabled:!0,children:`Auto (required by your appointment)`}),(0,y.jsx)(g.Item,{value:`renters`,children:`Renters`})]}),play:async({args:e,canvasElement:t})=>{let n=C(t);await b(n.getByRole(`checkbox`,{name:/Auto/})).toBeDisabled(),await S.click(n.getByRole(`checkbox`,{name:`Home`})),await b(e.onValueChange).toHaveBeenLastCalledWith([`auto`,`home`])}},M={args:{"aria-invalid":!0,"aria-describedby":`lobs-error`,defaultValue:[]},render:e=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(g.Root,{...e,children:T.map(({value:e,label:t})=>(0,y.jsx)(g.Item,{value:e,children:t},e))}),(0,y.jsx)(`p`,{id:`lobs-error`,className:`text-sm text-text-input-destructive`,children:`Select at least one line of business.`})]}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`group`,{name:`Lines of business`});await b(n).not.toHaveAttribute(`aria-invalid`),await b(n).toHaveAccessibleDescription(`Select at least one line of business.`);for(let e of t.getAllByRole(`checkbox`))await b(e).toHaveAttribute(`aria-invalid`,`true`)}},N={render:()=>{let[e,t]=(0,v.useState)(null);return(0,y.jsxs)(`form`,{className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),t(new FormData(e.currentTarget).getAll(`lobs`))},children:[(0,y.jsx)(g.Root,{"aria-label":`Lines of business`,name:`lobs`,defaultValue:[`home`],children:T.map(({value:e,label:t})=>(0,y.jsx)(g.Item,{value:e,children:t},e))}),(0,y.jsx)(`button`,{type:`submit`,className:`w-fit text-sm underline`,children:`Submit`}),e&&(0,y.jsx)(`output`,{className:`text-sm`,children:e.join(`, `)})]})},play:async({canvasElement:e})=>{let t=C(e);await S.click(t.getByRole(`checkbox`,{name:`Renters`})),await S.click(t.getByRole(`button`,{name:`Submit`})),await b(await t.findByRole(`status`)).toHaveTextContent(`home, renters`)}},P={render:e=>(0,y.jsx)(`div`,{className:`w-60`,children:(0,y.jsxs)(g.Root,{...e,children:[(0,y.jsx)(g.Item,{value:`home`,children:`Homeowners, including dwelling fire and condo unit owners policies`}),(0,y.jsx)(g.Item,{value:`auto`,children:`Auto`})]})}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`checkbox`,{name:/Homeowners/}),r=t.getByText(/Homeowners/);await b(r.getBoundingClientRect().height).toBeGreaterThan(20),await b(getComputedStyle(n).marginTop).toBe(`2px`);let i=n.getBoundingClientRect().top-r.getBoundingClientRect().top;await b(i).toBeGreaterThan(0),await b(i).toBeLessThanOrEqual(2)}},F={render:e=>(0,y.jsxs)(g.Root,{...e,children:[(0,y.jsx)(g.Item,{id:`lob-home`,value:`home`,children:`Home`}),(0,y.jsx)(g.Item,{value:`auto`,children:`Auto`})]}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`checkbox`,{name:`Home`});await b(n).toHaveAttribute(`id`,`lob-home`),await b(n.closest(`[data-slot=checkbox-group-item]`)).toHaveAttribute(`data-state`,`checked`),await b(t.getByRole(`checkbox`,{name:`Auto`}).id).not.toBe(``)}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`@summary Uncontrolled group with one item checked`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Tab moves between items and Space toggles the focused one, as with
standalone checkboxes.

@summary Keyboard navigation and toggling`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`@summary Group named by a visible heading`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`@summary Controlled group with a select-all parent`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`@summary Whole group disabled`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest interactive. A checked disabled item
stays in the value.

@summary One item disabled`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:'`aria-invalid` on the root reaches every checkbox, never the group element\n(`role="group"` does not support it).\n\n@summary Failed validation, forwarded to the items',...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"With `name`, each checked item submits `name=value`, so a native form reads\nthe selection with `FormData.getAll`.\n\n@summary Native form submission",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    await expect(label.getBoundingClientRect().height).toBeGreaterThan(20);
    await expect(getComputedStyle(checkbox).marginTop).toBe('2px');
    const offset = checkbox.getBoundingClientRect().top - label.getBoundingClientRect().top;
    await expect(offset).toBeGreaterThan(0);
    await expect(offset).toBeLessThanOrEqual(2);
  }
}`,...P.parameters?.docs?.source},description:{story:`A long label wraps under itself and the box stays on its first line.

@summary Wrapping label keeps the box on the first line`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`An \`id\` on the item lands on its checkbox, so a message elsewhere can point
at it; otherwise one is generated.

@summary Item id reaches the checkbox`,...F.parameters?.docs?.description}}},I=[`Default`,`Keyboard`,`LabelledByHeading`,`Controlled`,`Disabled`,`DisabledItem`,`Invalid`,`InForm`,`LongLabel`,`ItemId`]})))()}L();export{k as Controlled,E as Default,A as Disabled,j as DisabledItem,N as InForm,M as Invalid,F as ItemId,D as Keyboard,O as LabelledByHeading,P as LongLabel,I as __namedExportsOrder,w as default};