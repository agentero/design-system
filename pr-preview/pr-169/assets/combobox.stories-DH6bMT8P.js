import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BV-FuTVA.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BBAFfyYI.js";import{a,c as o,i as s,n as ee,o as te,r as ne,s as re,t as ie}from"./combobox-DI1X9w5O.js";import{n as ae,t as c}from"./label-C_OGLQb6.js";import{n as oe,t as l}from"./field-CJcP5j74.js";import{n as se,t as u}from"./field-text-C3MQfDSy.js";import{n as ce,t as d}from"./modal-F0sKylhF.js";import{n as le,t as ue}from"./tag-DM0kRAgH.js";import{n as de,t as f}from"./popover-OF7wpYDY.js";import{n as fe,t as pe}from"./skeleton-DVVxKlZy.js";var p;function m(){return(m=e((()=>{o(),p={Root:te,Input:ne,Content:ie,List:a,Item:s,Empty:ee,Status:re}})))()}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,me;function he(){return(he=e((()=>{h=t(),m(),r(),oe(),se(),ae(),ce(),de(),fe(),le(),g=n(),{configure:_,expect:v,fn:y,getConfig:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Combobox`,component:p.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:`Combobox is a text input that filters a list and writes the chosen option back
into itself. Focusing the input or typing opens the list; picking a row fills the
input and closes it. With \`multiple\` the rows become checkbox-like toggles and the
list stays open between picks. Built on Base UI, whose Combobox primitive owns
the filtering, the keyboard navigation and the \`role="combobox"\` wiring.`}}},decorators:[e=>(0,g.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,g.jsx)(e,{})})]},T=[`California`,`Colorado`,`Connecticut`,`Florida`,`Texas`,`Washington`],E=e=>{let t=e.querySelector(`[data-slot="combobox-field"]`).getBoundingClientRect(),n=document.body.querySelector(`[data-slot="combobox-content"]`).getBoundingClientRect();v(n.width).toBeCloseTo(t.width,0),v(n.left).toBeCloseTo(t.left,0)},D={render:()=>(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:/search states/i}),i=e.querySelector(`[data-slot="input-group-addon"] svg`);await v(i).toHaveAttribute(`aria-hidden`,`true`),await x.click(r),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(T.length)),await S(()=>E(e)),await v(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await v(document.body.querySelector(`[data-slot="combobox-item-indicator"]`)).not.toBeInTheDocument(),await x.type(r,`co`),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(2)),await v(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await x.click(n.getByRole(`option`,{name:`Colorado`})),await S(()=>v(r).toHaveValue(`Colorado`)),await x.click(await t.findByRole(`button`,{name:/clear/i})),await S(()=>v(r).toHaveValue(``)),await v(r).toHaveFocus(),await x.keyboard(`{ArrowDown}`),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(T.length)),await v(n.getByRole(`option`,{name:`Colorado`})).not.toHaveAttribute(`aria-selected`,`true`),await x.keyboard(`{Escape}`),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},O={render:()=>(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{variant:`plain`,placeholder:`State`,"aria-label":`State`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:`State`});await v(e.querySelector(`svg`)).not.toBeInTheDocument();let i=e.querySelector(`[data-slot="combobox-field"]`);await v(getComputedStyle(i).paddingLeft).toBe(`16px`),await x.type(r,`tex`),await S(()=>E(e)),await x.click(await n.findByRole(`option`,{name:`Texas`})),await S(()=>v(r).toHaveValue(`Texas`)),await v(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},k={render:()=>(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{variant:`select`,placeholder:`Choose a state`,"aria-label":`State`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await v(i).toHaveAttribute(`aria-expanded`,`false`),await x.click(i),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(T.length)),await v(i).toHaveAttribute(`aria-expanded`,`true`),await S(()=>E(e)),await x.click(i),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await v(i).toHaveAttribute(`aria-expanded`,`false`),await x.click(i),await x.click(await n.findByRole(`option`,{name:`Florida`})),await S(()=>v(r).toHaveValue(`Florida`)),await v(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},A={render:()=>(0,g.jsxs)(p.Root,{items:T,defaultValue:`Florida`,children:[(0,g.jsx)(p.Input,{variant:`select`,showClear:!0,placeholder:`Choose a state`,"aria-label":`State`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`combobox`,{name:`State`}),r=e.querySelector(`[data-slot="combobox-trigger"]`);await v(r).not.toBeVisible(),await x.click(t.getByRole(`button`,{name:/clear/i})),await S(()=>v(n).toHaveValue(``)),await v(n).toHaveFocus(),await x.keyboard(`{Escape}`),await S(()=>v(C(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),await v(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await v(r).toBeVisible()}},j={render:()=>(0,g.jsxs)(p.Root,{items:T,defaultValue:`Florida`,disabled:!0,children:[(0,g.jsx)(p.Input,{variant:`select`,showClear:!0,"aria-label":`State`}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`button`,{name:`Show options`});await v(t.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`),await v(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await v(n).toBeVisible(),await v(n).toBeDisabled()}},M={render:()=>(0,g.jsxs)(u,{readOnly:!0,children:[(0,g.jsx)(c,{children:`State`}),(0,g.jsxs)(p.Root,{items:T,defaultValue:`Texas`,children:[(0,g.jsx)(p.Input,{variant:`select`,showClear:!0}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await v(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await v(i).toBeVisible(),await x.click(i),await S(()=>v(n.getByRole(`listbox`)).toBeInTheDocument()),await x.click(n.getByRole(`option`,{name:`Florida`})),await v(r).toHaveValue(`Texas`)}},N={tags:[`!manifest`],args:{onOpenChange:y()},render:e=>(0,g.jsxs)(p.Root,{items:T,defaultValue:`Florida`,onOpenChange:e.onOpenChange,children:[(0,g.jsx)(p.Input,{variant:`select`,showClear:!0,disabled:!0,"aria-label":`State`}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})})]}),play:async({args:e,canvasElement:t})=>{let n=C(t),r=n.getByRole(`button`,{name:`Show options`});await v(n.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await v(r).toBeVisible(),await v(r).toBeDisabled(),await x.click(r),await x.click(t.querySelector(`[data-slot="combobox-field"]`)),await v(e.onOpenChange).not.toHaveBeenCalled(),await v(n.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`)}},P={render:()=>(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=C(document.body);await x.type(t.getByRole(`combobox`,{name:/search states/i}),`zzz`),await v(await n.findByText(/no matches found/i)).toBeInTheDocument(),await v(n.queryByRole(`option`)).not.toBeInTheDocument()}},F={render:()=>{let[e,t]=(0,h.useState)([]);return(0,g.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,g.jsxs)(p.Root,{items:T,multiple:!0,value:e,onValueChange:t,children:[(0,g.jsx)(p.Input,{placeholder:`Assign states`,"aria-label":`Assign states`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{"aria-label":`States`,children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),e.length>0&&(0,g.jsx)(`ul`,{"aria-label":`Selected states`,className:`flex flex-wrap gap-2`,children:e.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsx)(ue,{size:`sm`,children:e})},e))})]})},play:async({canvasElement:e})=>{let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:/assign states/i});await x.type(r,`co`);let i=await n.findByRole(`listbox`,{name:`States`});await v(i).toHaveAttribute(`aria-multiselectable`,`true`),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(2));let a=n.getByRole(`option`,{name:`Colorado`}),o=a.querySelector(`[data-slot="combobox-item-indicator"]`);await v(o).toBeInTheDocument(),await v(o).not.toHaveAttribute(`data-selected`),await v(a).toHaveAttribute(`aria-selected`,`false`),await x.keyboard(`{ArrowDown}{Enter}`),await S(()=>v(a).toHaveAttribute(`aria-selected`,`true`)),await v(o).toHaveAttribute(`data-selected`),await v(r).toHaveValue(`co`),await v(n.getByRole(`listbox`,{name:`States`})).toBeInTheDocument(),await v(C(t.getByRole(`list`,{name:/selected states/i})).getByText(`Colorado`)).toBeInTheDocument(),await x.click(n.getByRole(`option`,{name:`Connecticut`})),await S(()=>v(n.getByRole(`option`,{name:`Connecticut`})).toHaveAttribute(`aria-selected`,`true`)),await v(a).toHaveAttribute(`aria-selected`,`true`),await v(r).toHaveValue(`co`),await v(t.getAllByRole(`listitem`)).toHaveLength(2),await v(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await v(e.querySelector(`[data-slot="combobox-trigger"]`)).not.toBeInTheDocument(),await x.click(a),await S(()=>v(a).toHaveAttribute(`aria-selected`,`false`)),await v(o).not.toHaveAttribute(`data-selected`),await v(t.getAllByRole(`listitem`)).toHaveLength(1),await x.keyboard(`{Escape}`),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},I=[{id:`acme`,name:`Acme Insurance`},{id:`anchor`,name:`Anchor Brokers`},{id:`beacon`,name:`Beacon Risk`},{id:`cardinal`,name:`Cardinal Agency`}],L=e=>new Promise(t=>{setTimeout(()=>t(I.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),800)}),R=()=>(0,g.jsx)(`div`,{"data-slot":`combobox-skeleton`,className:`py-2`,"aria-hidden":`true`,children:[`w-28`,`w-36`,`w-32`].map(e=>(0,g.jsx)(`div`,{className:`mx-2 my-px flex items-center px-3 py-2`,children:(0,g.jsx)(pe,{className:`h-5 ${e}`})},e))}),z=new Map,B=e=>{let t=z.get(e);return t||(t=L(e),z.set(e,t)),t},V=({query:e})=>{let t=(0,h.use)(B(e));return t.length===0?(0,g.jsx)(`div`,{className:`mx-2 my-px px-3 py-2 text-sm text-text-default-base-tertiary`,children:`No agencies found`}):(0,g.jsx)(p.List,{children:t.map(e=>(0,g.jsx)(p.Item,{value:e,children:e.name},e.id))})},H={render:()=>{let[e,t]=(0,h.useState)(``),n=(0,h.useDeferredValue)(e),r=e!==n;return(0,g.jsxs)(p.Root,{filter:null,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,loading:r,loadingLabel:`Searching agencies…`,onInputValueChange:(e,{reason:n})=>{n!==`item-press`&&t(e)},children:[(0,g.jsx)(p.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(h.Suspense,{fallback:(0,g.jsx)(R,{}),children:(0,g.jsx)(V,{query:n})})})]})},play:async({canvasElement:e})=>{let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=()=>document.body.querySelector(`[data-slot="combobox-skeleton"]`),a=()=>document.body.querySelector(`[data-slot="combobox-content"]`);await x.click(r),await S(()=>v(i()).toBeInTheDocument()),await v(n.queryByRole(`option`)).not.toBeInTheDocument(),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(4)),await v(a()).not.toHaveAttribute(`aria-busy`);let{eventWrapper:o}=b();_({eventWrapper:e=>e()});try{await x.type(r,`b`)}finally{_({eventWrapper:o})}await S(()=>v(a()).toHaveAttribute(`aria-busy`,`true`)),await S(()=>v(n.getByText(/searching agencies/i)).toBeInTheDocument()),await v(i()).not.toBeInTheDocument(),await v(n.getAllByRole(`option`)).toHaveLength(4),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(2)),await v(a()).not.toHaveAttribute(`aria-busy`),await v(i()).not.toBeInTheDocument(),await x.keyboard(`{Escape}`),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},U=2,W={render:()=>{let[e,t]=(0,h.useState)([]),[n,r]=(0,h.useState)(!1),i=(0,h.useRef)(0);return(0,g.jsxs)(p.Root,{items:e,filteredItems:e,filter:null,minInputLength:U,loading:n,loadingLabel:`Searching agencies…`,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,onInputValueChange:async e=>{let n=++i.current;if(e.trim().length<U){t([]),r(!1);return}r(!0);let a=await L(e);n===i.current&&(t(a),r(!1))},children:[(0,g.jsx)(p.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,g.jsxs)(p.Content,{children:[n&&e.length===0&&(0,g.jsx)(R,{}),(0,g.jsx)(p.Empty,{children:`No agencies found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e.name},e.id)})]})]})},play:async({canvasElement:e})=>{let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=e.querySelector(`[data-slot="combobox-loading"]`);await v(i).toBeInTheDocument(),await v(i).toBeEmptyDOMElement(),await x.click(r),await x.type(r,`a`),await v(r).toHaveAttribute(`aria-expanded`,`false`),await v(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await x.type(r,`n`),await S(()=>v(i).toHaveTextContent(/searching agencies/i));let a=document.body.querySelector(`[data-slot="combobox-content"]`);await v(a).toHaveAttribute(`aria-busy`,`true`);let o=n.getAllByRole(`status`).filter(e=>e.textContent?.trim());await v(o).toHaveLength(1),await v(o).toEqual([i]),await v(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await v(n.queryByRole(`option`)).not.toBeInTheDocument(),await S(()=>v(n.getAllByRole(`option`).length).toBeGreaterThan(0)),await v(a).not.toHaveAttribute(`aria-busy`),await v(n.queryByText(/searching agencies/i)).not.toBeInTheDocument(),await v(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument();let s=n.getAllByRole(`option`).length;await x.type(r,`ch`),await v(a).toHaveAttribute(`aria-busy`,`true`),await S(()=>v(i).toHaveTextContent(/searching agencies/i)),await v(n.getAllByRole(`option`)).toHaveLength(s),await v(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument(),await x.keyboard(`{Enter}`),await v(r).toHaveValue(`anch`),await v(r).toHaveAttribute(`aria-expanded`,`true`),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(1)),await v(a).not.toHaveAttribute(`aria-busy`),await x.type(r,`{Backspace}{Backspace}{Backspace}`),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await v(r).toHaveAttribute(`aria-expanded`,`false`),await v(r).toHaveValue(`a`),await x.type(r,`nch`),await x.click(await n.findByRole(`option`,{name:`Anchor Brokers`})),await S(()=>v(r).toHaveValue(`Anchor Brokers`)),await x.keyboard(`{Escape}`),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},G=y(),K={render:()=>(0,g.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,onSubmit:e=>{e.preventDefault(),G()},children:[(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{placeholder:`Search states`,"aria-label":`State`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),(0,g.jsx)(i,{type:`submit`,children:`Save`})]}),play:async({canvasElement:e})=>{G.mockClear();let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:`State`});await x.click(r),await x.type(r,`co`),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(2)),await v(document.body.querySelector(`[data-highlighted]`)).not.toBeInTheDocument(),await x.keyboard(`{Enter}`),await S(()=>v(r).toHaveValue(`Colorado`)),await v(G).not.toHaveBeenCalled(),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await x.keyboard(`{Enter}`),await v(G).toHaveBeenCalledTimes(1),await x.clear(r),await x.type(r,`zz`),await S(()=>v(n.getByText(`No matches found`)).toBeVisible()),await x.keyboard(`{Enter}`),await v(G).toHaveBeenCalledTimes(1),await v(r).toHaveValue(`zz`),await v(r).toHaveAttribute(`aria-expanded`,`true`),await x.keyboard(`{Escape}`),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},q=y(),J={render:()=>(0,g.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,onSubmit:e=>{e.preventDefault(),q()},children:[(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{submitOnEnter:!0,placeholder:`Search states`,"aria-label":`State`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),(0,g.jsx)(i,{type:`submit`,children:`Save`})]}),play:async({canvasElement:e})=>{q.mockClear();let t=C(e),n=C(document.body),r=t.getByRole(`combobox`,{name:`State`});await x.click(r),await x.type(r,`co`),await S(()=>v(n.getAllByRole(`option`)).toHaveLength(2)),await x.keyboard(`{Enter}`),await v(q).toHaveBeenCalledTimes(1),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await v(r).not.toHaveValue(`Colorado`)}},Y={render:()=>(0,g.jsxs)(u,{invalid:!0,required:!0,children:[(0,g.jsx)(c,{children:`Agency`}),(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{placeholder:`Search agencies`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]}),(0,g.jsx)(l.Description,{children:`The agency this agent will be added to.`}),(0,g.jsx)(l.Error,{errors:[{message:`Pick an agency from the list`}]})]}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`combobox`,{name:`Agency`});await v(n).toHaveAttribute(`data-slot`,`combobox-input`),await v(n).toBeRequired(),await v(n).toHaveAttribute(`aria-invalid`,`true`),await v(n).toHaveAccessibleDescription(`The agency this agent will be added to. Pick an agency from the list`);let r=t.getByText(`Agency`).closest(`label`);await v(r).toHaveAttribute(`id`),await v(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await x.click(n),await C(document.body).findByRole(`listbox`),await v(n).toHaveAccessibleName(`Agency`),await x.keyboard(`{Escape}`),await S(()=>v(C(document.body).queryByRole(`listbox`)).not.toBeInTheDocument())}},X={render:()=>(0,g.jsxs)(d.Root,{children:[(0,g.jsx)(d.Trigger,{asChild:!0,children:(0,g.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,g.jsxs)(d.Content,{children:[(0,g.jsx)(d.Title,{children:`Assign agency`}),(0,g.jsx)(d.Body,{children:(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]})})]})]}),play:async({canvasElement:e})=>{let t=C(e),n=C(document.body);await x.click(t.getByRole(`button`,{name:/assign agency/i}));let r=await n.findByRole(`dialog`,{name:/assign agency/i}),i=C(r).getByRole(`combobox`,{name:/search states/i});await x.click(i),await x.type(i,`flo`);let a=await n.findByRole(`option`,{name:`Florida`});await x.click(a),await S(()=>v(i).toHaveValue(`Florida`)),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await v(r).toHaveAttribute(`data-state`,`open`),await x.keyboard(`{ArrowDown}`),await n.findByRole(`listbox`),await x.keyboard(`{Escape}`),await S(()=>v(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await v(i).toHaveValue(`Florida`),await v(r).toHaveAttribute(`data-state`,`open`),await x.keyboard(`{Escape}`),await v(i).toHaveValue(``),await v(r).toHaveAttribute(`data-state`,`open`),await x.keyboard(`{Escape}`),await S(()=>v(r).toHaveAttribute(`data-state`,`closed`))}},Z={render:()=>(0,g.jsxs)(f.Root,{children:[(0,g.jsx)(f.Trigger,{asChild:!0,children:(0,g.jsx)(i,{variant:`secondary`,children:`Filter by state`})}),(0,g.jsx)(f.Content,{"aria-label":`Filter by state`,children:(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,g.jsxs)(p.Content,{children:[(0,g.jsx)(p.Empty,{children:`No matches found`}),(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})]})]})})]}),play:async({canvasElement:e})=>{let t=C(document.body),n=C(e).getByRole(`button`,{name:/filter by state/i});await x.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await x.click(r),await t.findByRole(`listbox`),await x.keyboard(`{Escape}`),await S(()=>v(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await v(n).toHaveAttribute(`data-state`,`open`),await x.keyboard(`{Escape}`),await S(()=>v(n).toHaveAttribute(`data-state`,`closed`))}},Q={render:Z.render,play:async({canvasElement:e})=>{let t=C(document.body),n=C(e).getByRole(`button`,{name:/filter by state/i});await x.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await x.click(r),await x.click(await t.findByRole(`option`,{name:`Texas`})),await S(()=>v(r).toHaveValue(`Texas`)),await x.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await x.keyboard(`{Escape}`),await S(()=>v(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await v(r).toHaveValue(`Texas`),await x.keyboard(`{Escape}`),await v(r).toHaveValue(``),await v(n).toHaveAttribute(`data-state`,`open`),await x.keyboard(`{Escape}`),await S(()=>v(n).toHaveAttribute(`data-state`,`closed`))}},$={render:()=>(0,g.jsxs)(d.Root,{children:[(0,g.jsx)(d.Trigger,{asChild:!0,children:(0,g.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,g.jsxs)(d.Content,{children:[(0,g.jsx)(d.Title,{children:`Assign agency`}),(0,g.jsx)(d.Body,{children:(0,g.jsxs)(p.Root,{items:T,children:[(0,g.jsx)(p.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,g.jsx)(p.Content,{children:(0,g.jsx)(p.List,{children:e=>(0,g.jsx)(p.Item,{value:e,children:e},e)})})]})})]})]}),play:async({canvasElement:e})=>{let t=C(document.body);await x.click(C(e).getByRole(`button`,{name:/assign agency/i}));let n=await t.findByRole(`dialog`,{name:/assign agency/i}),r=C(n).getByRole(`combobox`,{name:/search states/i});await x.type(r,`zzz`),await v(t.queryByRole(`option`)).not.toBeInTheDocument(),await v(document.querySelector(`[data-slot="combobox-content"]`)).not.toBeVisible(),await x.keyboard(`{Escape}`),await S(()=>v(n).toHaveAttribute(`data-state`,`closed`))}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root items={STATES}>
            <Combobox.Input placeholder="Search states" aria-label="Search states" />
            <Combobox.Content>
                <Combobox.Empty>No matches found</Combobox.Empty>
                <Combobox.List>
                    {(state: string) => <Combobox.Item key={state} value={state}>
                            {state}
                        </Combobox.Item>}
                </Combobox.List>
            </Combobox.Content>
        </Combobox.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: /search states/i
    });

    // The magnifier is decoration inside an input group addon.
    const icon = canvasElement.querySelector('[data-slot="input-group-addon"] svg');
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
    await userEvent.click(input);
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(STATES.length));
    await waitFor(() => expectListAlignedWithField(canvasElement));
    // Named on its own: borrowing the input's name would resolve to the typed text.
    await expect(body.getByRole('listbox')).toHaveAccessibleName('Suggestions');
    // A single-value list has no selection indicator: that is the multi-select row's.
    await expect(document.body.querySelector('[data-slot="combobox-item-indicator"]')).not.toBeInTheDocument();

    // The default filter is \`contains\`: Colorado and Connecticut, not California.
    await userEvent.type(input, 'co');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await userEvent.click(body.getByRole('option', {
      name: 'Colorado'
    }));
    await waitFor(() => expect(input).toHaveValue('Colorado'));
    await userEvent.click(await canvas.findByRole('button', {
      name: /clear/i
    }));
    await waitFor(() => expect(input).toHaveValue(''));
    await expect(input).toHaveFocus();
    // Emptying the text drops the picked option too: reopened, no row is selected.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(STATES.length));
    await expect(body.getByRole('option', {
      name: 'Colorado'
    })).not.toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{Escape}');

    // The surface stays mounted through its exit animation, so wait it out.
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...D.parameters?.docs?.source},description:{story:`The common case: options are already in memory and Base UI filters them against
what you type. Selecting a row fills the input and closes the list. The field is
a search out of the box — a magnifier in front, a clear button once something is
picked — and the list hangs from the whole field. Clearing drops the picked option.

@summary Search field with a magnifier and clear button over an in-memory list`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root items={STATES}>
            <Combobox.Input variant="plain" placeholder="State" aria-label="State" />
            <Combobox.Content>
                <Combobox.Empty>No matches found</Combobox.Empty>
                <Combobox.List>
                    {(state: string) => <Combobox.Item key={state} value={state}>
                            {state}
                        </Combobox.Item>}
                </Combobox.List>
            </Combobox.Content>
        </Combobox.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'State'
    });
    await expect(canvasElement.querySelector('svg')).not.toBeInTheDocument();
    // Alone in the frame, the text sits at a plain \`Input\`'s 16px inset, not the group's 12px.
    const field = canvasElement.querySelector<HTMLElement>('[data-slot="combobox-field"]')!;
    await expect(getComputedStyle(field).paddingLeft).toBe('16px');
    await userEvent.type(input, 'tex');
    await waitFor(() => expectListAlignedWithField(canvasElement));
    await userEvent.click(await body.findByRole('option', {
      name: 'Texas'
    }));
    await waitFor(() => expect(input).toHaveValue('Texas'));

    // A picked value would mount the clear button in the other variants.
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...O.parameters?.docs?.source},description:{story:`\`variant="plain"\`: the input alone, with no magnifier and no clear button, for a
field that needs no affordance — a FEIN lookup, a template name. The list still
matches the field's width.

@summary Bare input with no icon and no clear button`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root items={STATES}>
            <Combobox.Input variant="select" placeholder="Choose a state" aria-label="State" />
            <Combobox.Content>
                <Combobox.Empty>No matches found</Combobox.Empty>
                <Combobox.List>
                    {(state: string) => <Combobox.Item key={state} value={state}>
                            {state}
                        </Combobox.Item>}
                </Combobox.List>
            </Combobox.Content>
        </Combobox.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'State'
    });
    const trigger = canvas.getByRole('button', {
      name: 'Show options'
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(STATES.length));
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expectListAlignedWithField(canvasElement));
    await userEvent.click(trigger);
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await userEvent.click(await body.findByRole('option', {
      name: 'Florida'
    }));
    await waitFor(() => expect(input).toHaveValue('Florida'));
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...k.parameters?.docs?.source},description:{story:`\`variant="select"\`: a chevron after the input opens and closes the list, for a
short known list the user may want to browse before typing. It has no clear
button by default. The chevron is out of the tab order — the input already
opens the list from the keyboard with the arrow keys.

@summary Field with a chevron that toggles the list, for short known lists`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root items={STATES} defaultValue="Florida">
            <Combobox.Input variant="select" showClear placeholder="Choose a state" aria-label="State" />
            <Combobox.Content>
                <Combobox.Empty>No matches found</Combobox.Empty>
                <Combobox.List>
                    {(state: string) => <Combobox.Item key={state} value={state}>
                            {state}
                        </Combobox.Item>}
                </Combobox.List>
            </Combobox.Content>
        </Combobox.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'State'
    });
    const trigger = canvasElement.querySelector<HTMLElement>('[data-slot="combobox-trigger"]')!;

    // A value: the clear button stands where the chevron was.
    await expect(trigger).not.toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: /clear/i
    }));
    await waitFor(() => expect(input).toHaveValue(''));
    await expect(input).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('listbox')).not.toBeInTheDocument());

    // No value: the clear button is gone and the chevron is back.
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await expect(trigger).toBeVisible();
  }
}`,...A.parameters?.docs?.source},description:{story:"`showClear` overrides the variant's default: here it adds the clear button to a\n`select`, so a picked option can be removed without selecting the text and\ndeleting it. While there is a value it takes the chevron's place; clearing\nbrings the chevron back. Passing `false` drops it from `search`.\n\n@summary Select field with a clear button added through showClear",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root items={STATES} defaultValue="Florida" disabled>
            <Combobox.Input variant="select" showClear aria-label="State" />
            <Combobox.Content>
                <Combobox.List>
                    {(state: string) => <Combobox.Item key={state} value={state}>
                            {state}
                        </Combobox.Item>}
                </Combobox.List>
            </Combobox.Content>
        </Combobox.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Show options'
    });
    await expect(canvas.getByRole('combobox', {
      name: 'State'
    })).toHaveValue('Florida');
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    // With no clear button to stand in for it, the chevron stays in place.
    await expect(trigger).toBeVisible();
    await expect(trigger).toBeDisabled();
  }
}`,...j.parameters?.docs?.source},description:{story:"`disabled` goes on `Root`, or on the surrounding `FieldText`. The field keeps\nits value, shows no clear button, and its chevron is disabled, so the list\ncannot open.\n\n@summary Disabled field that keeps its value",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <FieldText readOnly>
            <Label>State</Label>
            <Combobox.Root items={STATES} defaultValue="Texas">
                <Combobox.Input variant="select" showClear />
                <Combobox.Content>
                    <Combobox.List>
                        {(state: string) => <Combobox.Item key={state} value={state}>
                                {state}
                            </Combobox.Item>}
                    </Combobox.List>
                </Combobox.Content>
            </Combobox.Root>
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'State'
    });
    const trigger = canvas.getByRole('button', {
      name: 'Show options'
    });
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await expect(trigger).toBeVisible();
    await userEvent.click(trigger);
    await waitFor(() => expect(body.getByRole('listbox')).toBeInTheDocument());
    await userEvent.click(body.getByRole('option', {
      name: 'Florida'
    }));
    await expect(input).toHaveValue('Texas');
  }
}`,...M.parameters?.docs?.source},description:{story:"`readOnly` goes on `Root`, or on the surrounding `FieldText` as here. It locks\nthe value, not the list: there is no clear button, but the chevron still\nopens the list to browse it, and picking a row leaves the value as it was.\n\n@summary Read-only field whose list can be browsed but not picked from",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  // Base UI calls \`onOpenChange\` inside the press handler, so the spy reports an opening
  // at once, where the listbox would only mount a few frames later.
  args: {
    onOpenChange: fn()
  },
  render: args => <Combobox.Root items={STATES} defaultValue="Florida" onOpenChange={args.onOpenChange}>
            <Combobox.Input variant="select" showClear disabled aria-label="State" />
            <Combobox.Content>
                <Combobox.List>
                    {(state: string) => <Combobox.Item key={state} value={state}>
                            {state}
                        </Combobox.Item>}
                </Combobox.List>
            </Combobox.Content>
        </Combobox.Root>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Show options'
    });
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await expect(trigger).toBeVisible();
    await expect(trigger).toBeDisabled();
    await userEvent.click(trigger);
    await userEvent.click(canvasElement.querySelector('[data-slot="combobox-field"]')!);
    await expect(args.onOpenChange).not.toHaveBeenCalled();
    await expect(canvas.getByRole('combobox', {
      name: 'State'
    })).toHaveValue('Florida');
  }
}`,...N.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: \`disabled\` passed to the input
alone, not to \`Root\`, still hides the clear button and disables the chevron,
and a press on the frame does not open the list, so the value cannot change.

@summary Chevron disabled when only the input is disabled`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox.Root items={STATES}>
            <Combobox.Input placeholder="Search states" aria-label="Search states" />
            <Combobox.Content>
                <Combobox.Empty>No matches found</Combobox.Empty>
                <Combobox.List>
                    {(state: string) => <Combobox.Item key={state} value={state}>
                            {state}
                        </Combobox.Item>}
                </Combobox.List>
            </Combobox.Content>
        </Combobox.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.type(canvas.getByRole('combobox', {
      name: /search states/i
    }), 'zzz');
    await expect(await body.findByText(/no matches found/i)).toBeInTheDocument();
    await expect(body.queryByRole('option')).not.toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source},description:{story:"`Empty` stays mounted so screen readers announce the change; it renders its\nchildren only while nothing matches. It needs `items` on `Root` to know that.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <div className="flex flex-col gap-4">
                <Combobox.Root items={STATES} multiple value={selected} onValueChange={setSelected}>
                    <Combobox.Input placeholder="Assign states" aria-label="Assign states" />
                    <Combobox.Content>
                        <Combobox.Empty>No matches found</Combobox.Empty>
                        <Combobox.List aria-label="States">
                            {(state: string) => <Combobox.Item key={state} value={state}>
                                    {state}
                                </Combobox.Item>}
                        </Combobox.List>
                    </Combobox.Content>
                </Combobox.Root>
                {selected.length > 0 && <ul aria-label="Selected states" className="flex flex-wrap gap-2">
                        {selected.map(state => <li key={state}>
                                <Tag size="sm">{state}</Tag>
                            </li>)}
                    </ul>}
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: /assign states/i
    });
    await userEvent.type(input, 'co');
    const list = await body.findByRole('listbox', {
      name: 'States'
    });
    await expect(list).toHaveAttribute('aria-multiselectable', 'true');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));

    // Every row carries an indicator, empty until the row is picked.
    const colorado = body.getByRole('option', {
      name: 'Colorado'
    });
    const indicator = colorado.querySelector('[data-slot="combobox-item-indicator"]');
    await expect(indicator).toBeInTheDocument();
    await expect(indicator).not.toHaveAttribute('data-selected');
    await expect(colorado).toHaveAttribute('aria-selected', 'false');

    // Keyboard: arrow onto a row and press Enter. The list stays open and the query stays put.
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(colorado).toHaveAttribute('aria-selected', 'true'));
    await expect(indicator).toHaveAttribute('data-selected');
    await expect(input).toHaveValue('co');
    await expect(body.getByRole('listbox', {
      name: 'States'
    })).toBeInTheDocument();
    await expect(within(canvas.getByRole('list', {
      name: /selected states/i
    })).getByText('Colorado')).toBeInTheDocument();

    // Mouse: the next pick adds to the selection without reopening or retyping.
    await userEvent.click(body.getByRole('option', {
      name: 'Connecticut'
    }));
    await waitFor(() => expect(body.getByRole('option', {
      name: 'Connecticut'
    })).toHaveAttribute('aria-selected', 'true'));
    await expect(colorado).toHaveAttribute('aria-selected', 'true');
    await expect(input).toHaveValue('co');
    await expect(canvas.getAllByRole('listitem')).toHaveLength(2);
    // No clear button and no chevron here: Base UI's clear would wipe the selection, not the
    // query, and a list that stays open between picks has nothing for a chevron to toggle.
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await expect(canvasElement.querySelector('[data-slot="combobox-trigger"]')).not.toBeInTheDocument();

    // Picking a selected row again clears it.
    await userEvent.click(colorado);
    await waitFor(() => expect(colorado).toHaveAttribute('aria-selected', 'false'));
    await expect(indicator).not.toHaveAttribute('data-selected');
    await expect(canvas.getAllByRole('listitem')).toHaveLength(1);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...F.parameters?.docs?.source},description:{story:`Several values from one list, the way Lines of Authority or locations are
assigned: each row leads with a checkbox-shaped indicator, picking a row toggles
it, and the list stays open with the query intact so the next pick is one click
away. The input never shows the selection; the field renders it alongside,
here as tags.`,...F.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('');
    // The rows read the deferred query: while the new one suspends, React keeps rendering the
    // old rows instead of falling back to the placeholders.
    const deferredQuery = useDeferredValue(query);
    const isStale = query !== deferredQuery;
    return (
      // No \`items\` and \`filter={null}\`: the server did the filtering, the child renders what came
      // back, and \`isItemEqualToValue\` keeps a re-fetched copy counting as the selected one.
      <Combobox.Root filter={null} itemToStringLabel={(agency: Agency) => agency.name} isItemEqualToValue={(a: Agency, b: Agency) => a.id === b.id} loading={isStale} loadingLabel="Searching agencies…" onInputValueChange={(value, {
        reason
      }) => {
        // Picking a row writes its label into the input; that is not a new search.
        if (reason !== 'item-press') setQuery(value);
      }}>
                <Combobox.Input placeholder="Search agencies" aria-label="Search agencies" />
                <Combobox.Content>
                    <Suspense fallback={<SkeletonRows />}>
                        <AgencyItems query={deferredQuery} />
                    </Suspense>
                </Combobox.Content>
            </Combobox.Root>
    );
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: /search agencies/i
    });
    const skeleton = () => document.body.querySelector('[data-slot="combobox-skeleton"]');
    const content = () => document.body.querySelector('[data-slot="combobox-content"]');

    // Focus opens the surface and the first request goes out for the empty query: no
    // \`minInputLength\` here — see \`AsyncSearchWithLoading\` for a search that waits for one.
    await userEvent.click(input);

    // Placeholder rows on the first load, and no options yet.
    await waitFor(() => expect(skeleton()).toBeInTheDocument());
    await expect(body.queryByRole('option')).not.toBeInTheDocument();
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(4));
    await expect(content()).not.toHaveAttribute('aria-busy');

    // A new search keeps the previous rows, marked busy, until its own land. Storybook wraps each
    // event in an \`act()\` it does not await, and a deferred render that suspends inside one is
    // never retried; typing outside it lets React schedule the retry the way it does in the app.
    const {
      eventWrapper
    } = getConfig();
    configure({
      eventWrapper: event => event()
    });
    try {
      await userEvent.type(input, 'b');
    } finally {
      configure({
        eventWrapper
      });
    }
    await waitFor(() => expect(content()).toHaveAttribute('aria-busy', 'true'));
    await waitFor(() => expect(body.getByText(/searching agencies/i)).toBeInTheDocument());
    await expect(skeleton()).not.toBeInTheDocument();
    await expect(body.getAllByRole('option')).toHaveLength(4);
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));
    await expect(content()).not.toHaveAttribute('aria-busy');
    await expect(skeleton()).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...H.parameters?.docs?.source},description:{story:"Options fetched as you type, the way the apps load data: the rows are a component\nthat suspends on the request, so a `Suspense` boundary inside `Content` shows\nplaceholder rows until the first results land. The rows read a deferred copy of\nthe query, so a new search keeps the previous rows on screen while it loads, and\npassing that staleness as `loading` announces the wait and marks `Content` busy\nuntil they are replaced; the placeholders never come back. Nothing tracks a\nrequest by hand, and reading the data by query is what\nmakes out-of-order responses harmless. With react-query, drop a\n`useSuspenseQuery` where `use()` is, or use `placeholderData: keepPreviousData`\nwith a plain `useQuery` for the same behaviour.",...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [results, setResults] = useState<Agency[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    // Only the latest request may land; fast typing returns responses out of order.
    const latestRequest = useRef(0);
    const onInputValueChange = async (query: string) => {
      const request = ++latestRequest.current;
      if (query.trim().length < MIN_QUERY_LENGTH) {
        setResults([]);
        setIsLoading(false);
        return;
      }

      // The previous rows stay through the wait, marked busy, rather than blinking out and back.
      setIsLoading(true);
      const agencies = await searchAgencies(query);
      if (request !== latestRequest.current) return;
      setResults(agencies);
      setIsLoading(false);
    };
    return (
      // \`filter={null}\` hands filtering to the server; \`filteredItems\` is what came back.
      <Combobox.Root items={results} filteredItems={results} filter={null} minInputLength={MIN_QUERY_LENGTH} loading={isLoading} loadingLabel="Searching agencies…" itemToStringLabel={(agency: Agency) => agency.name} isItemEqualToValue={(a: Agency, b: Agency) => a.id === b.id} onInputValueChange={onInputValueChange}>
                <Combobox.Input placeholder="Search agencies" aria-label="Search agencies" />
                <Combobox.Content>
                    {isLoading && results.length === 0 && <SkeletonRows />}
                    <Combobox.Empty>No agencies found</Combobox.Empty>
                    <Combobox.List>
                        {(agency: Agency) => <Combobox.Item key={agency.id} value={agency}>
                                {agency.name}
                            </Combobox.Item>}
                    </Combobox.List>
                </Combobox.Content>
            </Combobox.Root>
    );
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: /search agencies/i
    });

    // The loading region is on the page, empty, before the list ever opens.
    const region = canvasElement.querySelector('[data-slot="combobox-loading"]');
    await expect(region).toBeInTheDocument();
    await expect(region).toBeEmptyDOMElement();

    // Under the minimum nothing opens: not on focus, not on the first character.
    await userEvent.click(input);
    await userEvent.type(input, 'a');
    await expect(input).toHaveAttribute('aria-expanded', 'false');
    await expect(body.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.type(input, 'n');

    // One live region speaks for the wait; the placeholder rows and \`Empty\` stay silent.
    await waitFor(() => expect(region).toHaveTextContent(/searching agencies/i));
    const content = document.body.querySelector('[data-slot="combobox-content"]');
    await expect(content).toHaveAttribute('aria-busy', 'true');
    const speaking = body.getAllByRole('status').filter(status => status.textContent?.trim());
    await expect(speaking).toHaveLength(1);
    await expect(speaking).toEqual([region]);
    await expect(body.queryByText(/no agencies found/i)).not.toBeInTheDocument();
    await expect(body.queryByRole('option')).not.toBeInTheDocument();
    await waitFor(() => expect(body.getAllByRole('option').length).toBeGreaterThan(0));
    await expect(content).not.toHaveAttribute('aria-busy');
    await expect(body.queryByText(/searching agencies/i)).not.toBeInTheDocument();
    await expect(document.body.querySelector('[data-slot="combobox-skeleton"]')).not.toBeInTheDocument();

    // Narrowing the query keeps the previous rows, marked busy, until the new ones land.
    const previous = body.getAllByRole('option').length;
    await userEvent.type(input, 'ch');
    await expect(content).toHaveAttribute('aria-busy', 'true');
    await waitFor(() => expect(region).toHaveTextContent(/searching agencies/i));
    await expect(body.getAllByRole('option')).toHaveLength(previous);
    await expect(document.body.querySelector('[data-slot="combobox-skeleton"]')).not.toBeInTheDocument();
    // Enter waits for the answer: the rows on screen belong to the previous query.
    await userEvent.keyboard('{Enter}');
    await expect(input).toHaveValue('anch');
    await expect(input).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
    await expect(content).not.toHaveAttribute('aria-busy');

    // Deleting back under the minimum closes the list.
    await userEvent.type(input, '{Backspace}{Backspace}{Backspace}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(input).toHaveAttribute('aria-expanded', 'false');
    // What is left of the query stays: the user is still typing it.
    await expect(input).toHaveValue('a');
    await userEvent.type(input, 'nch');
    await userEvent.click(await body.findByRole('option', {
      name: 'Anchor Brokers'
    }));
    await waitFor(() => expect(input).toHaveValue('Anchor Brokers'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...W.parameters?.docs?.source},description:{story:'The same search without Suspense, for a consumer that gets a `loading` flag from\nits data layer instead: `filter={null}`, the rows arrive through `filteredItems`,\nand the flag goes to `Root` as `loading`. That is all the wiring the wait needs:\n`Content` is marked busy, `loadingLabel` is announced once when the request\nstarts, and `Empty` holds back "no results" until the answer is in. Placeholder\nrows show only while there is nothing to show yet, hidden from assistive\ntechnology since the label already speaks for them; after that, the previous\nrows stay until the new ones replace them. A request that is no longer the\nlatest is dropped.\n\n`minInputLength` keeps the list shut until two characters are typed — focusing\nthe field opens nothing, and deleting back under the minimum closes it — and\nno request goes out for a shorter query either.\n\n@summary API search that waits for two characters and announces its loading state',...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col items-start gap-4" onSubmit={event => {
    event.preventDefault();
    onSubmit();
  }}>
            <Combobox.Root items={STATES}>
                <Combobox.Input placeholder="Search states" aria-label="State" />
                <Combobox.Content>
                    <Combobox.Empty>No matches found</Combobox.Empty>
                    <Combobox.List>
                        {(state: string) => <Combobox.Item key={state} value={state}>
                                {state}
                            </Combobox.Item>}
                    </Combobox.List>
                </Combobox.Content>
            </Combobox.Root>
            <Button type="submit">Save</Button>
        </form>,
  play: async ({
    canvasElement
  }) => {
    onSubmit.mockClear();
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'State'
    });
    await userEvent.click(input);
    await userEvent.type(input, 'co');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));
    await expect(document.body.querySelector('[data-highlighted]')).not.toBeInTheDocument();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(input).toHaveValue('Colorado'));
    await expect(onSubmit).not.toHaveBeenCalled();
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());

    // With the list closed, Enter is the form's again.
    await userEvent.keyboard('{Enter}');
    await expect(onSubmit).toHaveBeenCalledTimes(1);

    // Nothing to pick: Enter leaves the query and the list as they are.
    await userEvent.clear(input);
    await userEvent.type(input, 'zz');
    await waitFor(() => expect(body.getByText('No matches found')).toBeVisible());
    await userEvent.keyboard('{Enter}');
    await expect(onSubmit).toHaveBeenCalledTimes(1);
    await expect(input).toHaveValue('zz');
    await expect(input).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...K.parameters?.docs?.source},description:{story:`Inside a form, Enter in an open list picks a row instead of submitting: the
highlighted one, or the first one when the user typed and never touched the
arrow keys. With no match, it does nothing. Once the list is closed, Enter
submits the form as in any input.

@summary Enter picks the first row while the list is open, submits once closed`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col items-start gap-4" onSubmit={event => {
    event.preventDefault();
    onSubmitOnEnter();
  }}>
            <Combobox.Root items={STATES}>
                <Combobox.Input submitOnEnter placeholder="Search states" aria-label="State" />
                <Combobox.Content>
                    <Combobox.Empty>No matches found</Combobox.Empty>
                    <Combobox.List>
                        {(state: string) => <Combobox.Item key={state} value={state}>
                                {state}
                            </Combobox.Item>}
                    </Combobox.List>
                </Combobox.Content>
            </Combobox.Root>
            <Button type="submit">Save</Button>
        </form>,
  play: async ({
    canvasElement
  }) => {
    onSubmitOnEnter.mockClear();
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'State'
    });
    await userEvent.click(input);
    await userEvent.type(input, 'co');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));
    await userEvent.keyboard('{Enter}');
    await expect(onSubmitOnEnter).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(input).not.toHaveValue('Colorado');
  }
}`,...J.parameters?.docs?.source},description:{story:`\`submitOnEnter\` on the input brings back Base UI's default: with no row
highlighted, Enter closes the list, drops the typed query and submits the form.
A highlighted row is still picked.

@summary Enter submits the form when no row is highlighted`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <FieldText invalid required>
            <Label>Agency</Label>
            <Combobox.Root items={STATES}>
                <Combobox.Input placeholder="Search agencies" />
                <Combobox.Content>
                    <Combobox.Empty>No matches found</Combobox.Empty>
                    <Combobox.List>
                        {(state: string) => <Combobox.Item key={state} value={state}>
                                {state}
                            </Combobox.Item>}
                    </Combobox.List>
                </Combobox.Content>
            </Combobox.Root>
            <Field.Description>The agency this agent will be added to.</Field.Description>
            <Field.Error errors={[{
      message: 'Pick an agency from the list'
    }]} />
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'Agency'
    });
    await expect(input).toHaveAttribute('data-slot', 'combobox-input');
    await expect(input).toBeRequired();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('The agency this agent will be added to. Pick an agency from the list');

    // Named through a direct reference to the label as well as its \`for\`. The JS matcher
    // cannot see the \`aria-hidden\` Base UI sets while open — only a browser's accessibility
    // tree does — so this checks the wiring; the name itself from Chrome stays a manual check.
    const label = canvas.getByText('Agency').closest('label');
    await expect(label).toHaveAttribute('id');
    await expect(input).toHaveAttribute('aria-labelledby', label?.getAttribute('id') ?? '');
    await userEvent.click(input);
    await within(document.body).findByRole('listbox');
    await expect(input).toHaveAccessibleName('Agency');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...Y.parameters?.docs?.source},description:{story:"Dropped into a `FieldText`, the input takes the label, the description and\nthe error from the field with nothing wired by hand: `Combobox.Input` reads the\nsame `InputContext` the plain `Input` does. It also points `aria-labelledby`\nat the label, so the name survives the list opening: Base UI then hides the\nrest of the page from assistive technology, label included, and a\n`<label for>` alone would stop naming the input.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Assign agency</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Assign agency</Modal.Title>
                <Modal.Body>
                    <Combobox.Root items={STATES}>
                        <Combobox.Input placeholder="Search states" aria-label="Search states" />
                        <Combobox.Content>
                            <Combobox.Empty>No matches found</Combobox.Empty>
                            <Combobox.List>
                                {(state: string) => <Combobox.Item key={state} value={state}>
                                        {state}
                                    </Combobox.Item>}
                            </Combobox.List>
                        </Combobox.Content>
                    </Combobox.Root>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: /assign agency/i
    }));
    const dialog = await body.findByRole('dialog', {
      name: /assign agency/i
    });
    const input = within(dialog).getByRole('combobox', {
      name: /search states/i
    });
    await userEvent.click(input);
    await userEvent.type(input, 'flo');
    const option = await body.findByRole('option', {
      name: 'Florida'
    });
    await userEvent.click(option);
    await waitFor(() => expect(input).toHaveValue('Florida'));
    // The dialog must survive the click on the portalled list — still open, not exiting.
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(dialog).toHaveAttribute('data-state', 'open');

    // With a value picked, each Escape undoes one thing: the list, then the value, then the dialog.
    await userEvent.keyboard('{ArrowDown}');
    await body.findByRole('listbox');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(input).toHaveValue('Florida');
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await expect(input).toHaveValue('');
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...X.parameters?.docs?.source},description:{story:`Inside a \`Modal\`, which is a Radix Dialog. The surface portals to the body, so
this checks that the dialog's modal layer neither blocks pointer events on the
list nor treats a click in it as a click outside and closes. With a value
picked, Escape closes the list, then clears the value, then closes the modal.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Filter by state</Button>
            </Popover.Trigger>
            <Popover.Content aria-label="Filter by state">
                <Combobox.Root items={STATES}>
                    <Combobox.Input placeholder="Search states" aria-label="Search states" />
                    <Combobox.Content>
                        <Combobox.Empty>No matches found</Combobox.Empty>
                        <Combobox.List>
                            {(state: string) => <Combobox.Item key={state} value={state}>
                                    {state}
                                </Combobox.Item>}
                        </Combobox.List>
                    </Combobox.Content>
                </Combobox.Root>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    const trigger = within(canvasElement).getByRole('button', {
      name: /filter by state/i
    });
    await userEvent.click(trigger);
    const input = await body.findByRole('combobox', {
      name: /search states/i
    });
    await userEvent.click(input);
    await body.findByRole('listbox');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveAttribute('data-state', 'closed'));
  }
}`,...Z.parameters?.docs?.source},description:{story:"Inside a `Popover`. Escape on the open list closes the list only, and the next\nEscape closes the popover.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: InsidePopover.render,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    const trigger = within(canvasElement).getByRole('button', {
      name: /filter by state/i
    });
    await userEvent.click(trigger);
    const input = await body.findByRole('combobox', {
      name: /search states/i
    });
    await userEvent.click(input);
    await userEvent.click(await body.findByRole('option', {
      name: 'Texas'
    }));
    await waitFor(() => expect(input).toHaveValue('Texas'));
    await userEvent.keyboard('{ArrowDown}');
    await body.findByRole('listbox');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(input).toHaveValue('Texas');
    await userEvent.keyboard('{Escape}');
    await expect(input).toHaveValue('');
    await expect(trigger).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveAttribute('data-state', 'closed'));
  }
}`,...Q.parameters?.docs?.source},description:{story:"Inside a `Popover`, with a value picked. Base UI clears the value on an Escape\nfrom the closed list, so it takes three: the list, the value, then the popover.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Assign agency</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Assign agency</Modal.Title>
                <Modal.Body>
                    <Combobox.Root items={STATES}>
                        <Combobox.Input placeholder="Search states" aria-label="Search states" />
                        <Combobox.Content>
                            <Combobox.List>
                                {(state: string) => <Combobox.Item key={state} value={state}>
                                        {state}
                                    </Combobox.Item>}
                            </Combobox.List>
                        </Combobox.Content>
                    </Combobox.Root>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: /assign agency/i
    }));
    const dialog = await body.findByRole('dialog', {
      name: /assign agency/i
    });
    const input = within(dialog).getByRole('combobox', {
      name: /search states/i
    });
    await userEvent.type(input, 'zzz');
    await expect(body.queryByRole('option')).not.toBeInTheDocument();
    await expect(document.querySelector('[data-slot="combobox-content"]')).not.toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...$.parameters?.docs?.source},description:{story:"Inside a `Modal`, with no `Empty`. When nothing matches there is no list to\nclose, so Base UI lets the first Escape through and it closes the modal.",...$.parameters?.docs?.description}}},me=[`Default`,`Plain`,`Select`,`SelectWithClear`,`Disabled`,`ReadOnly`,`DisabledOnInput`,`NoMatches`,`MultipleSelection`,`AsyncSearch`,`AsyncSearchWithLoading`,`InsideForm`,`SubmitOnEnter`,`InsideFieldText`,`InsideModal`,`InsidePopover`,`InsidePopoverWithValue`,`InsideModalWithoutEmpty`]})))()}he();export{H as AsyncSearch,W as AsyncSearchWithLoading,D as Default,j as Disabled,N as DisabledOnInput,Y as InsideFieldText,K as InsideForm,X as InsideModal,$ as InsideModalWithoutEmpty,Z as InsidePopover,Q as InsidePopoverWithValue,F as MultipleSelection,P as NoMatches,O as Plain,M as ReadOnly,k as Select,A as SelectWithClear,J as SubmitOnEnter,me as __namedExportsOrder,w as default};