import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-C3rJuCxC.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BnnXtymG.js";import{n as a,t as o}from"./input-search-BI4W69o1.js";function s(e,t,n,r){var i=this,a=(0,c.useRef)(null),o=(0,c.useRef)(0),s=(0,c.useRef)(0),l=(0,c.useRef)(null),u=(0,c.useRef)([]),d=(0,c.useRef)(),f=(0,c.useRef)(),p=(0,c.useRef)(e),m=(0,c.useRef)(!0),h=(0,c.useRef)(),g=(0,c.useRef)();p.current=e;var _=typeof window<`u`,v=!t&&t!==0&&_;if(typeof e!=`function`)throw TypeError(`Expected a function`);t=+t||0;var y=!!(n||={}).leading,b=!(`trailing`in n)||!!n.trailing,x=!!n.flushOnExit&&b,S=`maxWait`in n,C=`debounceOnServer`in n&&!!n.debounceOnServer,w=S?Math.max(+n.maxWait||0,t):null,T=(0,c.useMemo)(function(){var e=function(e){var t=u.current,n=d.current;return u.current=d.current=null,o.current=e,s.current=s.current||e,f.current=p.current.apply(n,t)},n=function(e,t){v&&cancelAnimationFrame(l.current),l.current=v?requestAnimationFrame(e):setTimeout(e,t)},c=function(e){if(!m.current)return!1;var n=e-a.current;return!a.current||n>=t||n<0||S&&e-o.current>=w},T=function(t){return l.current=null,b&&u.current?e(t):(u.current=d.current=null,f.current)},E=function e(){var r=Date.now();if(y&&s.current===o.current&&D(),c(r))return T(r);if(m.current){var i=t-(r-a.current);n(e,S?Math.min(i,w-(r-o.current)):i)}},D=function(){r&&r({})},O=function(){if(_||C){var r,s=Date.now(),p=c(s);if(u.current=[].slice.call(arguments),d.current=i,a.current=s,x&&!h.current&&(h.current=function(){globalThis.document?.visibilityState===`hidden`&&g.current.flush()},(r=globalThis.document)==null||r.addEventListener==null||r.addEventListener(`visibilitychange`,h.current)),p){if(!l.current&&m.current)return o.current=a.current,n(E,t),y?e(a.current):f.current;if(S)return n(E,t),e(a.current)}return l.current||n(E,t),f.current}};return O.cancel=function(){var e=l.current;e&&(v?cancelAnimationFrame(l.current):clearTimeout(l.current)),o.current=0,u.current=a.current=d.current=l.current=null,e&&r&&r({})},O.isPending=function(){return!!l.current},O.flush=function(){return l.current?T(Date.now()):f.current},O},[y,S,t,w,b,x,v,_,C,r]);return g.current=T,(0,c.useEffect)(function(){return m.current=!0,function(){var e;x&&g.current.flush(),h.current&&=((e=globalThis.document)==null||e.removeEventListener==null||e.removeEventListener(`visibilitychange`,h.current),null),m.current=!1}},[x]),T}var c;function l(){return(l=e((()=>{c=t()})))()}var u,d,f;function p(){return(p=e((()=>{u=t(),l(),a(),d=n(),f=({value:e,onChange:t,...n})=>{let[r,i]=(0,u.useState)(e),[a,c]=(0,u.useState)(e),l=s(t,300);e!==a&&(c(e),l.isPending()||i(e));let f=e=>{i(e.target.value),l(e)};return(0,d.jsx)(o,{...n,value:r,onChange:f})},f.displayName=`DebouncedInputSearch`;try{300 .displayName=`DEBOUNCE_TIME`,300 .__docgenInfo={description:"Milliseconds DebouncedInputSearch waits after the last keystroke before it\ncalls `onChange`.",displayName:`DEBOUNCE_TIME`,filePath:`/home/runner/work/design-system/design-system/src/input-search/debounced-input-search.tsx`,methods:[],props:{},tags:{summary:`Debounce delay of DebouncedInputSearch, in milliseconds`}}}catch{}try{f.displayName=`DebouncedInputSearch`,f.__docgenInfo={description:"DebouncedInputSearch is an [InputSearch](?path=/docs/components-inputsearch--docs)\nfor filters that are expensive to run: a table query, a request to the\nserver. Keystrokes show up in the field at once, but `onChange` fires only\nonce the user pauses for `DEBOUNCE_TIME` (300ms), with the last change\nevent, so the page runs one search per pause instead of one per key. It is\nalways controlled: `value` and `onChange` are required, the page owns the\nquery, and the field follows a `value` changed from outside while the user\nis not typing.\n\nEvery other prop goes to the InputSearch and from there to the `<input>`:\nthe `ref`, `size`, `isLoading`, `placeholder`, `aria-*` and every other\nstandard attribute. Only `type` is not accepted. `className` styles the\nframe.\n\nDo not use it where every keystroke matters, such as filtering a short list\nalready in memory; that is a plain\n[InputSearch](?path=/docs/components-inputsearch--docs). To pick a value from\nthe results, use [Combobox](?path=/docs/components-combobox--docs).",displayName:`DebouncedInputSearch`,filePath:`/home/runner/work/design-system/design-system/src/input-search/debounced-input-search.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},isLoading:{defaultValue:null,declarations:[{fileName:`design-system/src/input-search/input-search.tsx`,name:`TypeLiteral`}],description:`Shows a spinner at the end of the frame, in place of the clear button,
while the results for the current text are on their way. Defaults to
\`false\`.`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},clearLabel:{defaultValue:null,declarations:[{fileName:`design-system/src/input-search/input-search.tsx`,name:`TypeLiteral`}],description:"Accessible name of the clear button. Defaults to `'Clear search'`; name it\nafter what is searched (`'Clear agency search'`) when a page carries\nseveral search fields.",name:`clearLabel`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/input-search/debounced-input-search.tsx`,name:`TypeLiteral`}],description:`The query the page is filtering by. The field shows it, and follows it
when it changes from outside (a reset button, a saved filter, navigation),
unless the user is in the middle of typing: then what they typed stays,
and \`onChange\` reports it once they pause.`,name:`value`,required:!0,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/input-search/debounced-input-search.tsx`,name:`TypeLiteral`}],description:"Fires once the user has stopped typing for `DEBOUNCE_TIME` milliseconds,\nwith the change event of the last keystroke; clearing the field goes\nthrough the same delay. Read the text from `event.target.value`, which is\nwhat the field shows at that moment. `event.currentTarget` is no longer\nset by then, since the event is delivered after the browser's dispatch.",name:`onChange`,required:!0,tags:{},type:{name:`ChangeEventHandler<HTMLInputElement>`}}},tags:{summary:`Search input that reports the query once the user pauses typing`,dataAttribute:`{string} data-slot - Always set to "input-search" on the frame`,example:`<DebouncedInputSearch
  aria-label="Search agencies"
  value={filters.query}
  onChange={event => setFilters({ ...filters, query: event.target.value })}
  isLoading={isFetching}
/>`}}}catch{}})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{m=t(),r(),p(),h=n(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/DebouncedInputSearch`,component:f,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},placeholder:{control:`text`},isLoading:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Search agencies`,value:``,onChange:_(e=>e.target.value)},decorators:[e=>(0,h.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,h.jsx)(e,{})})],parameters:{docs:{description:{component:"DebouncedInputSearch is an `InputSearch` for filters that are expensive to\nrun. Keystrokes show up at once, but `onChange` fires only once the user\npauses for 300ms, with the last change event. It is always controlled:\n`value` and `onChange` are required, and the field follows a `value`\nchanged from outside while the user is not typing."}}}},S=e=>e.mock.results.map(e=>e.value),C={render:function(e){let[t,n]=(0,m.useState)(e.value);return(0,h.jsx)(f,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}})},play:async({args:e,canvasElement:t})=>{let n=b(t),r=n.getByRole(`searchbox`,{name:`Search agencies`});await v.type(r,`Acme`),await g(r).toHaveValue(`Acme`),await g(e.onChange).not.toHaveBeenCalled(),await y(()=>g(e.onChange).toHaveBeenCalledTimes(1)),await g(S(e.onChange)).toEqual([`Acme`]),await v.click(n.getByRole(`button`,{name:`Clear search`})),await g(r).toHaveValue(``),await g(e.onChange).toHaveBeenCalledTimes(1),await y(()=>g(e.onChange).toHaveBeenCalledTimes(2)),await g(S(e.onChange)).toEqual([`Acme`,``])}},w={render:function(e){let[t,n]=(0,m.useState)(`Acme`);return(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,h.jsx)(f,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}}),(0,h.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>n(`Travelers`),children:`Apply saved search`})]})},play:async({args:e,canvasElement:t})=>{let n=b(t),r=n.getByRole(`searchbox`,{name:`Search agencies`});await g(r).toHaveValue(`Acme`),await v.click(n.getByRole(`button`,{name:`Apply saved search`})),await g(r).toHaveValue(`Travelers`),await g(e.onChange).not.toHaveBeenCalled()}},T={render:function(e){let[t,n]=(0,m.useState)(``);return(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,h.jsx)(f,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange(t)}}),(0,h.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>n(`Travelers`),children:`Apply saved search`})]})},play:async({args:e,canvasElement:t})=>{let n=b(t),r=n.getByRole(`searchbox`,{name:`Search agencies`});await v.click(r),await v.paste(`Acme`),await v.click(n.getByRole(`button`,{name:`Apply saved search`})),await g(r).toHaveValue(`Acme`),await y(()=>g(e.onChange).toHaveBeenCalledTimes(1)),await g(S(e.onChange)).toEqual([`Acme`]),await g(r).toHaveValue(`Acme`)}},E={args:{value:`Acme`,isLoading:!0},play:async({canvasElement:e})=>{let t=b(e);await g(t.getByRole(`searchbox`)).toHaveValue(`Acme`),await g(t.getByRole(`status`)).toBeInTheDocument(),await g(t.queryByRole(`button`,{name:`Clear search`})).not.toBeInTheDocument()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [query, setQuery] = useState(args.value);
    return <DebouncedInputSearch {...args} value={query} onChange={event => {
      setQuery(event.target.value);
      args.onChange(event);
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
    await userEvent.type(input, 'Acme');
    await expect(input).toHaveValue('Acme');
    await expect(args.onChange).not.toHaveBeenCalled();
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
    await expect(calls(args.onChange)).toEqual(['Acme']);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await expect(input).toHaveValue('');
    await expect(args.onChange).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(2));
    await expect(calls(args.onChange)).toEqual(['Acme', '']);
  }
}`,...C.parameters?.docs?.source},description:{story:`A page filtering by a query it owns. Typing shows up in the field at once;
\`onChange\` arrives once the user pauses, with the whole text in
\`event.target.value\`. Clearing the field goes through the same delay.

@summary Controlled query reported once the user stops typing`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    await expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...w.parameters?.docs?.source},description:{story:`The field follows \`value\` when the page changes it from outside, here a
saved search applied with a button: nothing is being typed, so the new
query replaces the text.

@summary Field following a value changed from outside while idle`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(input);
    await userEvent.paste('Acme');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Apply saved search'
    }));
    await expect(input).toHaveValue('Acme');
    await waitFor(() => expect(args.onChange).toHaveBeenCalledTimes(1));
    await expect(calls(args.onChange)).toEqual(['Acme']);
    await expect(input).toHaveValue('Acme');
  }
}`,...T.parameters?.docs?.source},description:{story:`A \`value\` that changes from outside while the user is still typing does not
overwrite the text. The page gets what was typed once the user pauses, and
the field keeps showing it.

@summary Typing in progress wins over a value changed from outside`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Acme',
    isLoading: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('searchbox')).toHaveValue('Acme');
    await expect(canvas.getByRole('status')).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'Clear search'
    })).not.toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source},description:{story:`While the results for the current query load, \`isLoading\` shows a spinner
in place of the clear button, as on InputSearch.

@summary Spinner in place of the clear button while results load`,...E.parameters?.docs?.description}}},D=[`Default`,`ExternalValue`,`TypingWins`,`Loading`]})))()}O();export{C as Default,w as ExternalValue,E as Loading,T as TypingWins,D as __namedExportsOrder,x as default};