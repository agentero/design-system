import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DQm0CtQO.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./label-BIqto5M8.js";import{n as a,t as o}from"./field-8imviNLl.js";import{n as s,t as c}from"./input-search-C9dbzO3S.js";import{n as l,t as u}from"./field-text-C-af3Qnu.js";import{i as d,n as f}from"./index.esm-B2hwG4i-.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{p=t(),f(),a(),l(),r(),s(),m=n(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/InputSearch`,component:c,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},placeholder:{control:`text`},isLoading:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Search agencies`,onChange:g(e=>e.target.value)},decorators:[e=>(0,m.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,m.jsx)(e,{})})],parameters:{docs:{description:{component:'InputSearch is a search field with a magnifier in front and a clear button\nonce there is text. It is an `Input` of `type="search"` inside an\n`InputGroup`: `className` styles the frame and every other prop reaches the\n`<input>`. Clearing reports a real change event with an empty value, and\n`isLoading` swaps the clear button for a spinner.'}}}},b=e=>Array.from(e.querySelectorAll(`[data-slot="input-search"]`)),x=e=>e.mock.results.at(-1)?.value,S={render:function(e){let[t,n]=(0,p.useState)(``);return(0,m.jsx)(c,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})},play:async({args:e,canvasElement:t})=>{let n=v(t),r=n.getByRole(`searchbox`,{name:`Search agencies`});await h(r).toHaveAttribute(`placeholder`,`Search`),await h(n.queryByRole(`button`,{name:`Clear search`})).not.toBeInTheDocument(),await _.type(r,`Acme`),await _.click(n.getByRole(`button`,{name:`Clear search`})),await h(x(e.onChange)).toBe(``),await h(r).toHaveValue(``),await h(r).toHaveFocus(),await h(n.queryByRole(`button`,{name:`Clear search`})).not.toBeInTheDocument()}},C={args:{isLoading:!0,defaultValue:`Acme`},play:async({canvasElement:e})=>{let t=v(e);await h(t.getByRole(`status`)).toBeInTheDocument(),await h(t.queryByRole(`button`,{name:`Clear search`})).not.toBeInTheDocument()}},w={args:{defaultValue:`Acme Insurance`},play:async({args:e,canvasElement:t})=>{let n=v(t),r=n.getByRole(`searchbox`);await _.click(n.getByRole(`button`,{name:`Clear search`})),await h(r).toHaveValue(``),await h(x(e.onChange)).toBe(``),await h(n.queryByRole(`button`,{name:`Clear search`})).not.toBeInTheDocument(),await _.type(r,`Bay`),await h(n.getByRole(`button`,{name:`Clear search`})).toBeInTheDocument()}},T={render:e=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,m.jsx)(c,{...e,disabled:!0,defaultValue:`Acme`}),(0,m.jsx)(`fieldset`,{disabled:!0,style:{border:0,margin:0,padding:0},children:(0,m.jsx)(c,{...e,"aria-label":`Search carriers`,defaultValue:`Travelers`})})]}),play:async({canvasElement:e})=>{let t=v(e);await h(t.getByRole(`searchbox`,{name:`Search agencies`})).toBeDisabled(),await h(t.getByRole(`searchbox`,{name:`Search carriers`})).toBeDisabled(),await h(t.queryByRole(`button`)).not.toBeInTheDocument()}},E={render:e=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,m.jsx)(c,{...e,size:`sm`,"aria-label":`Small`,defaultValue:`Acme`}),(0,m.jsx)(c,{...e,size:`md`,"aria-label":`Medium`,defaultValue:`Acme`}),(0,m.jsx)(c,{...e,size:`lg`,"aria-label":`Large`,defaultValue:`Acme`})]}),play:async({canvasElement:e})=>{let t=b(e).map(e=>e.getBoundingClientRect().height);await h(t).toEqual([32,40,48])}},D={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,m.jsxs)(u,{children:[(0,m.jsx)(i,{children:`Agency`}),(0,m.jsx)(c,{defaultValue:`Acme`}),(0,m.jsx)(o.Description,{children:`Search by agency name or NPN.`})]}),(0,m.jsxs)(u,{disabled:!0,children:[(0,m.jsx)(i,{children:`Carrier`}),(0,m.jsx)(c,{defaultValue:`Travelers`})]})]}),play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`searchbox`,{name:`Agency`});await h(n).toHaveAccessibleDescription(`Search by agency name or NPN.`),await h(t.getByRole(`searchbox`,{name:`Carrier`})).toBeDisabled(),await h(t.getAllByRole(`button`,{name:`Clear search`})).toHaveLength(1)}},O={args:{defaultValue:`Acme`,clearLabel:`Clear agency search`},play:async({canvasElement:e})=>{let t=v(e);await h(t.getByRole(`button`,{name:`Clear agency search`})).toBeInTheDocument()}},A={tags:[`!manifest`],render:function(e){let{register:t,getValues:n}=d({defaultValues:{query:`Acme`}});return k=n,(0,m.jsx)(c,{"aria-label":e[`aria-label`],...t(`query`)})},play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`searchbox`);await h(n).toHaveValue(`Acme`),await _.click(t.getByRole(`button`,{name:`Clear search`})),await h(n).toHaveValue(``),await h(k().query).toBe(``)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [query, setQuery] = useState('');
    return <InputSearch {...args} value={query} onChange={event => {
      setQuery(event.target.value);
      args.onChange?.(event);
    }} />;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Search agencies'
    });
    await expect(input).toHaveAttribute('placeholder', 'Search');
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).not.toBeInTheDocument();
    await userEvent.type(input, 'Acme');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(lastValue(args.onChange)).toBe('');
    await expect(input).toHaveValue('');
    await expect(input).toHaveFocus();
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).not.toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source},description:{story:`A controlled search. The clear button appears once there is text; pressing
it calls \`onChange\` with an empty \`event.target.value\`, so the state that
owns the query empties too, and focus goes back to the input. The browser's
own cancel button is hidden.

@summary Controlled search with a clear button that empties the query`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    defaultValue: 'Acme'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('status')).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).not.toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source},description:{story:`While \`isLoading\` is set a spinner takes the clear button's place, even with
text in the field.

@summary Spinner in place of the clear button while results load`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Acme Insurance'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(input).toHaveValue('');
    await expect(lastValue(args.onChange)).toBe('');
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).not.toBeInTheDocument();
    await userEvent.type(input, 'Bay');
    await expect(canvas.getByRole('button', {
      name: 'Clear search'
    })).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source},description:{story:"An uncontrolled search with a `defaultValue`. The clear button follows what\nis in the field, and clearing still calls `onChange` with an empty value.\n\n@summary Uncontrolled search starting from a default value",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <InputSearch {...args} disabled defaultValue="Acme" />
            <fieldset disabled style={{
      border: 0,
      margin: 0,
      padding: 0
    }}>
                <InputSearch {...args} aria-label="Search carriers" defaultValue="Travelers" />
            </fieldset>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('searchbox', {
      name: 'Search agencies'
    })).toBeDisabled();
    await expect(canvas.getByRole('searchbox', {
      name: 'Search carriers'
    })).toBeDisabled();
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source},description:{story:"A disabled search has no clear button, whether `disabled` is set on the\ninput itself or comes from a `<fieldset disabled>` around it.\n\n@summary Disabled search with the clear button removed",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <InputSearch {...args} size="sm" aria-label="Small" defaultValue="Acme" />
            <InputSearch {...args} size="md" aria-label="Medium" defaultValue="Acme" />
            <InputSearch {...args} size="lg" aria-label="Large" defaultValue="Acme" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const heights = getFrames(canvasElement).map(frame => frame.getBoundingClientRect().height);
    await expect(heights).toEqual([32, 40, 48]);
  }
}`,...E.parameters?.docs?.source},description:{story:`The three sizes match Input's: the frame is 32, 40 or 48px tall.

@summary The three sizes side by side`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1.5rem'
  }}>
            <FieldText>
                <Label>Agency</Label>
                <InputSearch defaultValue="Acme" />
                <Field.Description>Search by agency name or NPN.</Field.Description>
            </FieldText>
            <FieldText disabled>
                <Label>Carrier</Label>
                <InputSearch defaultValue="Travelers" />
            </FieldText>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Agency'
    });
    await expect(input).toHaveAccessibleDescription('Search by agency name or NPN.');
    await expect(canvas.getByRole('searchbox', {
      name: 'Carrier'
    })).toBeDisabled();
    await expect(canvas.getAllByRole('button', {
      name: 'Clear search'
    })).toHaveLength(1);
  }
}`,...D.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` the input takes its label, description and states from
the field through the frame. A disabled field removes the clear button too.

@summary Label and disabled state reaching the input through the frame`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Acme',
    clearLabel: 'Clear agency search'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Clear agency search'
    })).toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source},description:{story:`\`clearLabel\` names the clear button after what is searched, so a page with
several search fields does not read "Clear search" twice.

@summary Clear button named after what the field searches`,...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: function Render(args) {
    const {
      register,
      getValues
    } = useForm<FilterValues>({
      defaultValues: {
        query: 'Acme'
      }
    });
    readForm = getValues;
    return <InputSearch aria-label={args['aria-label']} {...register('query')} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox');
    await expect(input).toHaveValue('Acme');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(input).toHaveValue('');
    await expect(readForm().query).toBe('');
  }
}`,...A.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: react-hook-form's \`register\`
writes \`defaultValues\` straight into the DOM through the ref, with no change
event, and the clear button must still show; clearing must reach the form.

@summary Clear button with a value written by register through the ref`,...A.parameters?.docs?.description}}},j=[`Default`,`Loading`,`Uncontrolled`,`Disabled`,`AllSizes`,`InsideFieldText`,`ClearLabel`,`WithReactHookForm`]})))()}M();export{E as AllSizes,O as ClearLabel,S as Default,T as Disabled,D as InsideFieldText,C as Loading,w as Uncontrolled,A as WithReactHookForm,j as __namedExportsOrder,y as default};