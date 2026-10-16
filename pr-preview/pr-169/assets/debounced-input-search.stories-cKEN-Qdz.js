import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Cu-8_1HN.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./merge-props-_ceX4MV7.js";import{n as a,t as o}from"./button-DAnh6UM_.js";import{n as s,t as c}from"./input-search-BVbTAcWI.js";function l(e,t,n,r){var i=this,a=(0,u.useRef)(null),o=(0,u.useRef)(0),s=(0,u.useRef)(0),c=(0,u.useRef)(null),l=(0,u.useRef)([]),d=(0,u.useRef)(),f=(0,u.useRef)(),p=(0,u.useRef)(e),m=(0,u.useRef)(!0),h=(0,u.useRef)(),g=(0,u.useRef)();p.current=e;var _=typeof window<`u`,v=!t&&t!==0&&_;if(typeof e!=`function`)throw TypeError(`Expected a function`);t=+t||0;var y=!!(n||={}).leading,b=!(`trailing`in n)||!!n.trailing,x=!!n.flushOnExit&&b,S=`maxWait`in n,C=`debounceOnServer`in n&&!!n.debounceOnServer,w=S?Math.max(+n.maxWait||0,t):null,T=(0,u.useMemo)(function(){var e=function(e){var t=l.current,n=d.current;return l.current=d.current=null,o.current=e,s.current=s.current||e,f.current=p.current.apply(n,t)},n=function(e,t){v&&cancelAnimationFrame(c.current),c.current=v?requestAnimationFrame(e):setTimeout(e,t)},u=function(e){if(!m.current)return!1;var n=e-a.current;return!a.current||n>=t||n<0||S&&e-o.current>=w},T=function(t){return c.current=null,b&&l.current?e(t):(l.current=d.current=null,f.current)},E=function e(){var r=Date.now();if(y&&s.current===o.current&&D(),u(r))return T(r);if(m.current){var i=t-(r-a.current);n(e,S?Math.min(i,w-(r-o.current)):i)}},D=function(){r&&r({})},O=function(){if(_||C){var r,s=Date.now(),p=u(s);if(l.current=[].slice.call(arguments),d.current=i,a.current=s,x&&!h.current&&(h.current=function(){globalThis.document?.visibilityState===`hidden`&&g.current.flush()},(r=globalThis.document)==null||r.addEventListener==null||r.addEventListener(`visibilitychange`,h.current)),p){if(!c.current&&m.current)return o.current=a.current,n(E,t),y?e(a.current):f.current;if(S)return n(E,t),e(a.current)}return c.current||n(E,t),f.current}};return O.cancel=function(){var e=c.current;e&&(v?cancelAnimationFrame(c.current):clearTimeout(c.current)),o.current=0,l.current=a.current=d.current=c.current=null,e&&r&&r({})},O.isPending=function(){return!!c.current},O.flush=function(){return c.current?T(Date.now()):f.current},O},[y,S,t,w,b,x,v,_,C,r]);return g.current=T,(0,u.useEffect)(function(){return m.current=!0,function(){var e;x&&g.current.flush(),h.current&&=((e=globalThis.document)==null||e.removeEventListener==null||e.removeEventListener(`visibilitychange`,h.current),null),m.current=!1}},[x]),T}var u;function d(){return(d=e((()=>{u=t()})))()}var f,p,m;function h(){return(h=e((()=>{f=t(),d(),r(),s(),p=n(),m=({value:e,onChange:t,onKeyDown:n,...r})=>{let[a,o]=(0,f.useState)(e),[s,u]=(0,f.useState)(e),d=l(t,300);e!==s&&(u(e),d.isPending()||o(e));let m=e=>{o(e.target.value),d(e)},h=e=>{let t=e.nativeEvent.isComposing||e.keyCode===229;e.key===`Enter`&&!t&&d.flush()};return(0,p.jsx)(c,{...r,value:a,onChange:m,onKeyDown:i(h,n)})},m.displayName=`DebouncedInputSearch`;try{m.displayName=`DebouncedInputSearch`,m.__docgenInfo={description:"DebouncedInputSearch is an [InputSearch](?path=/docs/components-inputsearch--docs)\nfor filters that are expensive to run: a table query, a request to the\nserver. Keystrokes show up in the field at once, but `onChange` fires only\nonce the user pauses for `DEBOUNCE_TIME` (300ms), with the last change\nevent, so the page runs one search per pause instead of one per key. It is\nalways controlled: `value` and `onChange` are required, the page owns the\nquery, and the field follows a `value` changed from outside while the user\nis not typing.\n\nEvery other prop goes to the InputSearch and from there to the `<input>`:\nthe `ref`, `size`, `isLoading`, `placeholder`, `aria-*` and every other\nstandard attribute. Only `type` is not accepted. `className` styles the\nframe.\n\nDo not use it where every keystroke matters, such as filtering a short list\nalready in memory; that is a plain\n[InputSearch](?path=/docs/components-inputsearch--docs). To pick a value from\nthe results, use [Combobox](?path=/docs/components-combobox--docs).",displayName:`DebouncedInputSearch`,filePath:`/home/runner/work/design-system/design-system/src/input-search/debounced-input-search.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},isLoading:{defaultValue:null,declarations:[{fileName:`design-system/src/input-search/input-search.tsx`,name:`TypeLiteral`}],description:`Shows a spinner at the end of the frame, in place of the clear button,
while the results for the current text are on their way. Defaults to
\`false\`.`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},clearLabel:{defaultValue:null,declarations:[{fileName:`design-system/src/input-search/input-search.tsx`,name:`TypeLiteral`}],description:"Accessible name of the clear button. Defaults to `'Clear search'`; name it\nafter what is searched (`'Clear agency search'`) when a page carries\nseveral search fields.",name:`clearLabel`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/input-search/debounced-input-search.tsx`,name:`TypeLiteral`}],description:`The query the page is filtering by. The field shows it, and follows it
when it changes from outside (a reset button, a saved filter, navigation),
unless the user is in the middle of typing: then what they typed stays,
and \`onChange\` reports it once they pause.`,name:`value`,required:!0,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/input-search/debounced-input-search.tsx`,name:`TypeLiteral`}],description:`Fires once the user has stopped typing for \`DEBOUNCE_TIME\` milliseconds,
with the change event of the last keystroke; clearing the field goes
through the same delay. A pending call fires at once when the user
presses Enter, and is dropped when the field unmounts, so a page that is
navigating away is not sent back. Read the text from \`event.target.value\`, which is
what the field shows at that moment. \`event.currentTarget\` is no longer
set by then, since the event is delivered after the browser's dispatch.`,name:`onChange`,required:!0,tags:{},type:{name:`ChangeEventHandler<HTMLInputElement>`}}},tags:{summary:`Search input that reports the query once the user pauses typing`,dataAttribute:`{string} data-slot - Always set to "input-search" on the frame`,example:`<DebouncedInputSearch
  aria-label="Search agencies"
  value={filters.query}
  onChange={event => setFilters({ ...filters, query: event.target.value })}
  isLoading={isFetching}
/>`}}}catch{}})))()}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{g=t(),a(),h(),_=n(),{expect:v,fireEvent:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/DebouncedInputSearch`,component:m,tags:[`autodocs`],argTypes:{value:{control:!1},size:{control:`radio`,options:[`sm`,`md`,`lg`]},placeholder:{control:`text`},isLoading:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Search agencies`,value:``,onChange:b(e=>e.target.value)},decorators:[e=>(0,_.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,_.jsx)(e,{})})],parameters:{docs:{description:{component:"DebouncedInputSearch is an `InputSearch` for filters that are expensive to\nrun. Keystrokes show up at once, but `onChange` fires only once the user\npauses for 300ms, with the last change event. It is always controlled:\n`value` and `onChange` are required, and the field follows a `value`\nchanged from outside."}}}},T=e=>e.mock.results.map(e=>e.value),E={render:function(e){let[t,n]=(0,g.useState)(e.value);return(0,_.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,_.jsx)(m,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}}),(0,_.jsxs)(`output`,{children:[`Filtering by: `,t]})]})},play:async({args:e,canvasElement:t})=>{let n=C(t),r=n.getByRole(`searchbox`,{name:`Search agencies`});await x.type(r,`Acme`),await v(r).toHaveValue(`Acme`),await S(()=>v(e.onChange).toHaveBeenCalledTimes(1)),await v(T(e.onChange)).toEqual([`Acme`]),await v(n.getByRole(`status`)).toHaveTextContent(`Filtering by: Acme`),await x.click(n.getByRole(`button`,{name:`Clear search`})),await v(r).toHaveValue(``),await S(()=>v(e.onChange).toHaveBeenCalledTimes(2)),await v(T(e.onChange)).toEqual([`Acme`,``]),await v(n.getByRole(`status`)).toHaveTextContent(/^Filtering by:$/)}},D={render:function(e){let[t,n]=(0,g.useState)(`Acme`);return(0,_.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,_.jsx)(m,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}}),(0,_.jsx)(o,{variant:`secondary`,size:`sm`,onClick:()=>n(`Travelers`),children:`Apply saved search`}),(0,_.jsxs)(`output`,{children:[`Filtering by: `,t]})]})},play:async({args:e,canvasElement:t})=>{let n=C(t),r=n.getByRole(`searchbox`,{name:`Search agencies`});await v(r).toHaveValue(`Acme`),await x.click(n.getByRole(`button`,{name:`Apply saved search`})),await v(r).toHaveValue(`Travelers`),await v(n.getByRole(`status`)).toHaveTextContent(`Filtering by: Travelers`),await v(e.onChange).not.toHaveBeenCalled()}},O={tags:[`!dev`,`!autodocs`,`!manifest`],render:function(e){let[t,n]=(0,g.useState)(``);return(0,_.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,_.jsx)(m,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}}),(0,_.jsx)(o,{variant:`secondary`,size:`sm`,onClick:()=>n(`Travelers`),children:`Apply saved search`})]})},play:async({args:e,canvasElement:t})=>{let n=C(t),r=n.getByRole(`searchbox`,{name:`Search agencies`});y.change(r,{target:{value:`Acme`}}),n.getByRole(`button`,{name:`Apply saved search`}).click(),await v(r).toHaveValue(`Acme`),await S(()=>v(e.onChange).toHaveBeenCalledTimes(1)),await v(T(e.onChange)).toEqual([`Acme`]),await v(r).toHaveValue(`Acme`)}},k={render:function(e){let[t,n]=(0,g.useState)(e.value);return(0,_.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,_.jsx)(m,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}}),(0,_.jsxs)(`output`,{children:[`Filtering by: `,t]})]})},play:async({args:e,canvasElement:t})=>{let n=C(t),r=n.getByRole(`searchbox`,{name:`Search agencies`});await x.type(r,`Acme{Enter}`),await v(T(e.onChange)).toEqual([`Acme`]),await v(n.getByRole(`status`)).toHaveTextContent(`Filtering by: Acme`)}},A={tags:[`!dev`,`!autodocs`,`!manifest`],render:function(e){let[t,n]=(0,g.useState)(!0);return(0,_.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[t&&(0,_.jsx)(m,{...e}),(0,_.jsx)(o,{variant:`secondary`,size:`sm`,onClick:()=>n(!1),children:`Close filters`})]})},play:async({args:e,canvasElement:t})=>{let n=C(t);await x.type(n.getByRole(`searchbox`,{name:`Search agencies`}),`Acme`),await x.click(n.getByRole(`button`,{name:`Close filters`})),await v(n.queryByRole(`searchbox`)).not.toBeInTheDocument(),await new Promise(e=>setTimeout(e,600)),await v(e.onChange).not.toHaveBeenCalled()}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [query, setQuery] = useState(args.value);
    return <div style={{
      display: 'grid',
      gap: '1rem'
    }}>
                <DebouncedInputSearch {...args} value={query} onChange={event => {
        setQuery(event.target.value);
        args.onChange(event);
      }} />
                <output>Filtering by: {query}</output>
            </div>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Search agencies'
    });

    // Four keystrokes, one call: only the gap between keys has to stay under
    // the delay, not the whole sequence.
    await userEvent.type(input, 'Acme');
    await expect(input).toHaveValue('Acme');
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
    await expect(calls(args.onChange)).toEqual(['Acme']);
    await expect(canvas.getByRole('status')).toHaveTextContent('Filtering by: Acme');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(input).toHaveValue('');
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(2));
    await expect(calls(args.onChange)).toEqual(['Acme', '']);
    await expect(canvas.getByRole('status')).toHaveTextContent(/^Filtering by:$/);
  }
}`,...E.parameters?.docs?.source},description:{story:`A page filtering by a query it owns, shown below the field. Typing shows up
in the field at once; \`onChange\` arrives once the user pauses, with the
whole text in \`event.target.value\`, and only then does the query below
change. Clearing the field goes through the same delay.

@summary Controlled query reported once the user stops typing`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [query, setQuery] = useState('Acme');
    return <div style={{
      display: 'grid',
      gap: '1rem'
    }}>
                <DebouncedInputSearch {...args} value={query} onChange={event => {
        setQuery(event.target.value);
        args.onChange(event);
      }} />
                <Button variant="secondary" size="sm" onClick={() => setQuery('Travelers')}>
                    Apply saved search
                </Button>
                <output>Filtering by: {query}</output>
            </div>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Search agencies'
    });
    await expect(input).toHaveValue('Acme');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Apply saved search'
    }));
    await expect(input).toHaveValue('Travelers');
    await expect(canvas.getByRole('status')).toHaveTextContent('Filtering by: Travelers');
    await expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...D.parameters?.docs?.source},description:{story:`The field follows \`value\` when the page changes it from outside, here a
saved search applied with a button: nothing is being typed, so the new
query replaces the text.

@summary Field following a value changed from outside while idle`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  // Runs as a test only: by hand, clicking the button always takes longer than
  // the delay, so nothing is pending and the field follows the new value.
  tags: ['!dev', '!autodocs', '!manifest'],
  render: function Render(args) {
    const [query, setQuery] = useState('');
    return <div style={{
      display: 'grid',
      gap: '1rem'
    }}>
                <DebouncedInputSearch {...args} value={query} onChange={event => {
        setQuery(event.target.value);
        args.onChange(event);
      }} />
                <Button variant="secondary" size="sm" onClick={() => setQuery('Travelers')}>
                    Apply saved search
                </Button>
            </div>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Search agencies'
    });

    // Typing and the outside change run in the same task, so the delay cannot
    // run out between them however slow the runner is.
    fireEvent.change(input, {
      target: {
        value: 'Acme'
      }
    });
    canvas.getByRole('button', {
      name: 'Apply saved search'
    }).click();
    await expect(input).toHaveValue('Acme');
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
    await expect(calls(args.onChange)).toEqual(['Acme']);
    await expect(input).toHaveValue('Acme');
  }
}`,...O.parameters?.docs?.source},description:{story:`A \`value\` that changes from outside while the user is still typing does not
overwrite the text. The page gets what was typed once the user pauses, and
the field keeps showing it.

@summary Typing in progress wins over a value changed from outside`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [query, setQuery] = useState(args.value);
    return <div style={{
      display: 'grid',
      gap: '1rem'
    }}>
                <DebouncedInputSearch {...args} value={query} onChange={event => {
        setQuery(event.target.value);
        args.onChange(event);
      }} />
                <output>Filtering by: {query}</output>
            </div>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Search agencies'
    });
    await userEvent.type(input, 'Acme{Enter}');
    await expect(calls(args.onChange)).toEqual(['Acme']);
    await expect(canvas.getByRole('status')).toHaveTextContent('Filtering by: Acme');
  }
}`,...k.parameters?.docs?.source},description:{story:`Pressing Enter reports the text at once instead of waiting for the pause.

@summary Enter reports the pending query without waiting`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: function Render(args) {
    const [open, setOpen] = useState(true);
    return <div style={{
      display: 'grid',
      gap: '1rem'
    }}>
                {open && <DebouncedInputSearch {...args} />}
                <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
                    Close filters
                </Button>
            </div>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('searchbox', {
      name: 'Search agencies'
    }), 'Acme');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Close filters'
    }));
    await expect(canvas.queryByRole('searchbox')).not.toBeInTheDocument();
    await new Promise(resolve => setTimeout(resolve, DEBOUNCE_TIME * 2));
    await expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...A.parameters?.docs?.source},description:{story:`When the field unmounts with a call pending, here because the panel holding
it closes, the call is dropped: on a client-side navigation the page is
leaving, and an \`onChange\` that writes the query to the URL would send it back.

@summary Pending query dropped when the field unmounts`,...A.parameters?.docs?.description}}},j=[`Default`,`ExternalValue`,`TypingWins`,`SubmitOnEnter`,`DiscardOnUnmount`]})))()}M();export{E as Default,A as DiscardOnUnmount,D as ExternalValue,k as SubmitOnEnter,O as TypingWins,j as __namedExportsOrder,w as default};