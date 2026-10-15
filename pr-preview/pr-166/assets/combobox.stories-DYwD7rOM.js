import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CGUHHY_g.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BcB5Iqbj.js";import{a,c as o,i as s,n as c,o as ee,r as te,s as ne,t as l}from"./combobox-BUZoA_qP.js";import{n as re,t as u}from"./label-BPYjJpr2.js";import{n as ie,t as d}from"./field-DxFmueJ3.js";import{n as ae,t as f}from"./field-text-0KWEfnIJ.js";import{n as oe,t as p}from"./modal-5wpguVYx.js";import{n as se,t as ce}from"./tag-DpgV7EL4.js";import{n as le,t as m}from"./popover-CC91J0I-.js";import{n as ue,t as de}from"./skeleton-DVVxKlZy.js";var h;function g(){return(g=e((()=>{o(),h={Root:ee,Input:te,Content:l,List:a,Item:s,Empty:c,Status:ne}})))()}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{_=t(),g(),r(),ie(),ae(),re(),oe(),le(),ue(),se(),v=n(),{configure:y,expect:b,fn:x,getConfig:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Combobox`,component:h.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:`Combobox is a text input that filters a list and writes the chosen option back
into itself. Focusing the input or typing opens the list; picking a row fills the
input and closes it. With \`multiple\` the rows become checkbox-like toggles and the
list stays open between picks. Built on Base UI, whose Combobox primitive owns
the filtering, the keyboard navigation and the \`role="combobox"\` wiring.`}}},decorators:[e=>(0,v.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,v.jsx)(e,{})})]},D=[`California`,`Colorado`,`Connecticut`,`Florida`,`Texas`,`Washington`],O=e=>{let t=e.querySelector(`[data-slot="combobox-field"]`).getBoundingClientRect(),n=document.body.querySelector(`[data-slot="combobox-content"]`).getBoundingClientRect();b(n.width).toBeCloseTo(t.width,0),b(n.left).toBeCloseTo(t.left,0)},k={render:()=>(0,v.jsxs)(h.Root,{items:D,children:[(0,v.jsx)(h.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:/search states/i}),i=e.querySelector(`[data-slot="input-group-addon"] svg`);await b(i).toHaveAttribute(`aria-hidden`,`true`),await C.click(r),await w(()=>b(n.getAllByRole(`option`)).toHaveLength(D.length)),await w(()=>O(e)),await b(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await b(document.body.querySelector(`[data-slot="combobox-item-indicator"]`)).not.toBeInTheDocument(),await C.type(r,`co`),await w(()=>b(n.getAllByRole(`option`)).toHaveLength(2)),await b(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C.click(n.getByRole(`option`,{name:`Colorado`})),await w(()=>b(r).toHaveValue(`Colorado`)),await C.click(await t.findByRole(`button`,{name:/clear/i})),await w(()=>b(r).toHaveValue(``)),await b(r).toHaveFocus(),await C.keyboard(`{ArrowDown}`),await w(()=>b(n.getAllByRole(`option`)).toHaveLength(D.length)),await b(n.getByRole(`option`,{name:`Colorado`})).not.toHaveAttribute(`aria-selected`,`true`),await C.keyboard(`{Escape}`),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},A={render:()=>(0,v.jsxs)(h.Root,{items:D,children:[(0,v.jsx)(h.Input,{variant:`plain`,placeholder:`State`,"aria-label":`State`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:`State`});await b(e.querySelector(`svg`)).not.toBeInTheDocument();let i=e.querySelector(`[data-slot="combobox-field"]`);await b(getComputedStyle(i).paddingLeft).toBe(`16px`),await C.type(r,`tex`),await w(()=>O(e)),await C.click(await n.findByRole(`option`,{name:`Texas`})),await w(()=>b(r).toHaveValue(`Texas`)),await b(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},j={render:()=>(0,v.jsxs)(h.Root,{items:D,children:[(0,v.jsx)(h.Input,{variant:`select`,placeholder:`Choose a state`,"aria-label":`State`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await b(i).toHaveAttribute(`aria-expanded`,`false`),await C.click(i),await w(()=>b(n.getAllByRole(`option`)).toHaveLength(D.length)),await b(i).toHaveAttribute(`aria-expanded`,`true`),await w(()=>O(e)),await C.click(i),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await b(i).toHaveAttribute(`aria-expanded`,`false`),await C.click(i),await C.click(await n.findByRole(`option`,{name:`Florida`})),await w(()=>b(r).toHaveValue(`Florida`)),await b(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},M={render:()=>(0,v.jsxs)(h.Root,{items:D,defaultValue:`Florida`,children:[(0,v.jsx)(h.Input,{variant:`select`,showClear:!0,placeholder:`Choose a state`,"aria-label":`State`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`combobox`,{name:`State`}),r=e.querySelector(`[data-slot="combobox-trigger"]`);await b(r).not.toBeVisible(),await C.click(t.getByRole(`button`,{name:/clear/i})),await w(()=>b(n).toHaveValue(``)),await b(n).toHaveFocus(),await C.keyboard(`{Escape}`),await w(()=>b(T(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),await b(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await b(r).toBeVisible()}},N={render:()=>(0,v.jsxs)(h.Root,{items:D,defaultValue:`Florida`,disabled:!0,children:[(0,v.jsx)(h.Input,{variant:`select`,showClear:!0,"aria-label":`State`}),(0,v.jsx)(h.Content,{children:(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`button`,{name:`Show options`});await b(t.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`),await b(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await b(n).toBeVisible(),await b(n).toBeDisabled()}},P={render:()=>(0,v.jsxs)(f,{readOnly:!0,children:[(0,v.jsx)(u,{children:`State`}),(0,v.jsxs)(h.Root,{items:D,defaultValue:`Texas`,children:[(0,v.jsx)(h.Input,{variant:`select`,showClear:!0}),(0,v.jsx)(h.Content,{children:(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await b(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await b(i).toBeVisible(),await C.click(i),await w(()=>b(n.getByRole(`listbox`)).toBeInTheDocument()),await C.click(n.getByRole(`option`,{name:`Florida`})),await b(r).toHaveValue(`Texas`)}},F={tags:[`!manifest`],args:{onOpenChange:x()},render:e=>(0,v.jsxs)(h.Root,{items:D,defaultValue:`Florida`,onOpenChange:e.onOpenChange,children:[(0,v.jsx)(h.Input,{variant:`select`,showClear:!0,disabled:!0,"aria-label":`State`}),(0,v.jsx)(h.Content,{children:(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})})]}),play:async({args:e,canvasElement:t})=>{let n=T(t),r=n.getByRole(`button`,{name:`Show options`});await b(n.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await b(r).toBeVisible(),await b(r).toBeDisabled(),await C.click(r),await C.click(t.querySelector(`[data-slot="combobox-field"]`)),await b(e.onOpenChange).not.toHaveBeenCalled(),await b(n.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`)}},I={render:()=>(0,v.jsxs)(h.Root,{items:D,children:[(0,v.jsx)(h.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body);await C.type(t.getByRole(`combobox`,{name:/search states/i}),`zzz`),await b(await n.findByText(/no matches found/i)).toBeInTheDocument(),await b(n.queryByRole(`option`)).not.toBeInTheDocument()}},L={render:()=>{let[e,t]=(0,_.useState)([]);return(0,v.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,v.jsxs)(h.Root,{items:D,multiple:!0,value:e,onValueChange:t,children:[(0,v.jsx)(h.Input,{placeholder:`Assign states`,"aria-label":`Assign states`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{"aria-label":`States`,children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]}),e.length>0&&(0,v.jsx)(`ul`,{"aria-label":`Selected states`,className:`flex flex-wrap gap-2`,children:e.map(e=>(0,v.jsx)(`li`,{children:(0,v.jsx)(ce,{size:`sm`,children:e})},e))})]})},play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:/assign states/i});await C.type(r,`co`);let i=await n.findByRole(`listbox`,{name:`States`});await b(i).toHaveAttribute(`aria-multiselectable`,`true`),await w(()=>b(n.getAllByRole(`option`)).toHaveLength(2));let a=n.getByRole(`option`,{name:`Colorado`}),o=a.querySelector(`[data-slot="combobox-item-indicator"]`);await b(o).toBeInTheDocument(),await b(o).not.toHaveAttribute(`data-selected`),await b(a).toHaveAttribute(`aria-selected`,`false`),await C.keyboard(`{ArrowDown}{Enter}`),await w(()=>b(a).toHaveAttribute(`aria-selected`,`true`)),await b(o).toHaveAttribute(`data-selected`),await b(r).toHaveValue(`co`),await b(n.getByRole(`listbox`,{name:`States`})).toBeInTheDocument(),await b(T(t.getByRole(`list`,{name:/selected states/i})).getByText(`Colorado`)).toBeInTheDocument(),await C.click(n.getByRole(`option`,{name:`Connecticut`})),await w(()=>b(n.getByRole(`option`,{name:`Connecticut`})).toHaveAttribute(`aria-selected`,`true`)),await b(a).toHaveAttribute(`aria-selected`,`true`),await b(r).toHaveValue(`co`),await b(t.getAllByRole(`listitem`)).toHaveLength(2),await b(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await b(e.querySelector(`[data-slot="combobox-trigger"]`)).not.toBeInTheDocument(),await C.click(a),await w(()=>b(a).toHaveAttribute(`aria-selected`,`false`)),await b(o).not.toHaveAttribute(`data-selected`),await b(t.getAllByRole(`listitem`)).toHaveLength(1),await C.keyboard(`{Escape}`),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},R=[{id:`acme`,name:`Acme Insurance`},{id:`anchor`,name:`Anchor Brokers`},{id:`beacon`,name:`Beacon Risk`},{id:`cardinal`,name:`Cardinal Agency`}],z=e=>new Promise(t=>{setTimeout(()=>t(R.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),800)}),B=()=>(0,v.jsx)(`div`,{"data-slot":`combobox-skeleton`,className:`py-2`,"aria-hidden":`true`,children:[`w-28`,`w-36`,`w-32`].map(e=>(0,v.jsx)(`div`,{className:`mx-2 my-px flex items-center px-3 py-2`,children:(0,v.jsx)(de,{className:`h-5 ${e}`})},e))}),V=new Map,H=e=>{let t=V.get(e);return t||(t=z(e),V.set(e,t)),t},U=({query:e})=>{let t=(0,_.use)(H(e));return t.length===0?(0,v.jsx)(`div`,{className:`mx-2 my-px px-3 py-2 text-sm text-text-default-base-tertiary`,children:`No agencies found`}):(0,v.jsx)(h.List,{children:t.map(e=>(0,v.jsx)(h.Item,{value:e,children:e.name},e.id))})},W={render:()=>{let[e,t]=(0,_.useState)(``),n=(0,_.useDeferredValue)(e),r=e!==n;return(0,v.jsxs)(h.Root,{filter:null,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,loading:r,loadingLabel:`Searching agencies…`,onInputValueChange:(e,{reason:n})=>{n!==`item-press`&&t(e)},children:[(0,v.jsx)(h.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,v.jsx)(h.Content,{children:(0,v.jsx)(_.Suspense,{fallback:(0,v.jsx)(B,{}),children:(0,v.jsx)(U,{query:n})})})]})},play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=()=>document.body.querySelector(`[data-slot="combobox-skeleton"]`),a=()=>document.body.querySelector(`[data-slot="combobox-content"]`);await C.click(r),await w(()=>b(i()).toBeInTheDocument()),await b(n.queryByRole(`option`)).not.toBeInTheDocument(),await w(()=>b(n.getAllByRole(`option`)).toHaveLength(4)),await b(a()).not.toHaveAttribute(`aria-busy`);let{eventWrapper:o}=S();y({eventWrapper:e=>e()});try{await C.type(r,`b`)}finally{y({eventWrapper:o})}await w(()=>b(a()).toHaveAttribute(`aria-busy`,`true`)),await w(()=>b(n.getByText(/searching agencies/i)).toBeInTheDocument()),await b(i()).not.toBeInTheDocument(),await b(n.getAllByRole(`option`)).toHaveLength(4),await w(()=>b(n.getAllByRole(`option`)).toHaveLength(2)),await b(a()).not.toHaveAttribute(`aria-busy`),await b(i()).not.toBeInTheDocument(),await C.keyboard(`{Escape}`),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},G=2,K={render:()=>{let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(!1),i=(0,_.useRef)(0);return(0,v.jsxs)(h.Root,{items:e,filteredItems:e,filter:null,minInputLength:G,loading:n,loadingLabel:`Searching agencies…`,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,onInputValueChange:async e=>{let n=++i.current;if(e.trim().length<G){t([]),r(!1);return}r(!0);let a=await z(e);n===i.current&&(t(a),r(!1))},children:[(0,v.jsx)(h.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,v.jsxs)(h.Content,{children:[n&&e.length===0&&(0,v.jsx)(B,{}),(0,v.jsx)(h.Empty,{children:`No agencies found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e.name},e.id)})]})]})},play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=e.querySelector(`[data-slot="combobox-loading"]`);await b(i).toBeInTheDocument(),await b(i).toBeEmptyDOMElement(),await C.click(r),await C.type(r,`a`),await b(r).toHaveAttribute(`aria-expanded`,`false`),await b(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await C.type(r,`n`),await w(()=>b(i).toHaveTextContent(/searching agencies/i));let a=document.body.querySelector(`[data-slot="combobox-content"]`);await b(a).toHaveAttribute(`aria-busy`,`true`);let o=n.getAllByRole(`status`).filter(e=>e.textContent?.trim());await b(o).toHaveLength(1),await b(o).toEqual([i]),await b(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await b(n.queryByRole(`option`)).not.toBeInTheDocument(),await w(()=>b(n.getAllByRole(`option`).length).toBeGreaterThan(0)),await b(a).not.toHaveAttribute(`aria-busy`),await b(n.queryByText(/searching agencies/i)).not.toBeInTheDocument(),await b(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument();let s=n.getAllByRole(`option`).length;await C.type(r,`ch`),await b(a).toHaveAttribute(`aria-busy`,`true`),await w(()=>b(i).toHaveTextContent(/searching agencies/i)),await b(n.getAllByRole(`option`)).toHaveLength(s),await b(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument(),await w(()=>b(n.getAllByRole(`option`)).toHaveLength(1)),await b(a).not.toHaveAttribute(`aria-busy`),await C.type(r,`{Backspace}{Backspace}{Backspace}`),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await b(r).toHaveAttribute(`aria-expanded`,`false`),await b(r).toHaveValue(`a`),await C.type(r,`nch`),await C.click(await n.findByRole(`option`,{name:`Anchor Brokers`})),await w(()=>b(r).toHaveValue(`Anchor Brokers`)),await C.keyboard(`{Escape}`),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},q={render:()=>(0,v.jsxs)(f,{invalid:!0,required:!0,children:[(0,v.jsx)(u,{children:`Agency`}),(0,v.jsxs)(h.Root,{items:D,children:[(0,v.jsx)(h.Input,{placeholder:`Search agencies`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]}),(0,v.jsx)(d.Description,{children:`The agency this agent will be added to.`}),(0,v.jsx)(d.Error,{errors:[{message:`Pick an agency from the list`}]})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`combobox`,{name:`Agency`});await b(n).toHaveAttribute(`data-slot`,`combobox-input`),await b(n).toBeRequired(),await b(n).toHaveAttribute(`aria-invalid`,`true`),await b(n).toHaveAccessibleDescription(`The agency this agent will be added to. Pick an agency from the list`);let r=t.getByText(`Agency`).closest(`label`);await b(r).toHaveAttribute(`id`),await b(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await C.click(n),await T(document.body).findByRole(`listbox`),await b(n).toHaveAccessibleName(`Agency`),await C.keyboard(`{Escape}`),await w(()=>b(T(document.body).queryByRole(`listbox`)).not.toBeInTheDocument())}},J={render:()=>(0,v.jsxs)(p.Root,{children:[(0,v.jsx)(p.Trigger,{asChild:!0,children:(0,v.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,v.jsxs)(p.Content,{children:[(0,v.jsx)(p.Title,{children:`Assign agency`}),(0,v.jsx)(p.Body,{children:(0,v.jsxs)(h.Root,{items:D,children:[(0,v.jsx)(h.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]})})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body);await C.click(t.getByRole(`button`,{name:/assign agency/i}));let r=await n.findByRole(`dialog`,{name:/assign agency/i}),i=T(r).getByRole(`combobox`,{name:/search states/i});await C.click(i),await C.type(i,`flo`);let a=await n.findByRole(`option`,{name:`Florida`});await C.click(a),await w(()=>b(i).toHaveValue(`Florida`)),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await b(r).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{ArrowDown}`),await n.findByRole(`listbox`),await C.keyboard(`{Escape}`),await w(()=>b(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await b(i).toHaveValue(`Florida`),await b(r).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{Escape}`),await b(i).toHaveValue(``),await b(r).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{Escape}`),await w(()=>b(r).toHaveAttribute(`data-state`,`closed`))}},Y={render:()=>(0,v.jsxs)(m.Root,{children:[(0,v.jsx)(m.Trigger,{asChild:!0,children:(0,v.jsx)(i,{variant:`secondary`,children:`Filter by state`})}),(0,v.jsx)(m.Content,{"aria-label":`Filter by state`,children:(0,v.jsxs)(h.Root,{items:D,children:[(0,v.jsx)(h.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,v.jsxs)(h.Content,{children:[(0,v.jsx)(h.Empty,{children:`No matches found`}),(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})]})]})})]}),play:async({canvasElement:e})=>{let t=T(document.body),n=T(e).getByRole(`button`,{name:/filter by state/i});await C.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await C.click(r),await t.findByRole(`listbox`),await C.keyboard(`{Escape}`),await w(()=>b(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await b(n).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{Escape}`),await w(()=>b(n).toHaveAttribute(`data-state`,`closed`))}},X={render:Y.render,play:async({canvasElement:e})=>{let t=T(document.body),n=T(e).getByRole(`button`,{name:/filter by state/i});await C.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await C.click(r),await C.click(await t.findByRole(`option`,{name:`Texas`})),await w(()=>b(r).toHaveValue(`Texas`)),await C.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await C.keyboard(`{Escape}`),await w(()=>b(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await b(r).toHaveValue(`Texas`),await C.keyboard(`{Escape}`),await b(r).toHaveValue(``),await b(n).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{Escape}`),await w(()=>b(n).toHaveAttribute(`data-state`,`closed`))}},Z={render:()=>(0,v.jsxs)(p.Root,{children:[(0,v.jsx)(p.Trigger,{asChild:!0,children:(0,v.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,v.jsxs)(p.Content,{children:[(0,v.jsx)(p.Title,{children:`Assign agency`}),(0,v.jsx)(p.Body,{children:(0,v.jsxs)(h.Root,{items:D,children:[(0,v.jsx)(h.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,v.jsx)(h.Content,{children:(0,v.jsx)(h.List,{children:e=>(0,v.jsx)(h.Item,{value:e,children:e},e)})})]})})]})]}),play:async({canvasElement:e})=>{let t=T(document.body);await C.click(T(e).getByRole(`button`,{name:/assign agency/i}));let n=await t.findByRole(`dialog`,{name:/assign agency/i}),r=T(n).getByRole(`combobox`,{name:/search states/i});await C.type(r,`zzz`),await b(t.queryByRole(`option`)).not.toBeInTheDocument(),await C.keyboard(`{Escape}`),await w(()=>b(n).toHaveAttribute(`data-state`,`closed`))}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`The common case: options are already in memory and Base UI filters them against
what you type. Selecting a row fills the input and closes the list. The field is
a search out of the box — a magnifier in front, a clear button once something is
picked — and the list hangs from the whole field. Clearing drops the picked option.

@summary Search field with a magnifier and clear button over an in-memory list`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`\`variant="plain"\`: the input alone, with no magnifier and no clear button, for a
field that needs no affordance — a FEIN lookup, a template name. The list still
matches the field's width.

@summary Bare input with no icon and no clear button`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`\`variant="select"\`: a chevron after the input opens and closes the list, for a
short known list the user may want to browse before typing. It has no clear
button by default. The chevron is out of the tab order — the input already
opens the list from the keyboard with the arrow keys.

@summary Field with a chevron that toggles the list, for short known lists`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"`showClear` overrides the variant's default: here it adds the clear button to a\n`select`, so a picked option can be removed without selecting the text and\ndeleting it. While there is a value it takes the chevron's place; clearing\nbrings the chevron back. Passing `false` drops it from `search`.\n\n@summary Select field with a clear button added through showClear",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"`disabled` goes on `Root`, or on the surrounding `FieldText`. The field keeps\nits value, shows no clear button, and its chevron is disabled, so the list\ncannot open.\n\n@summary Disabled field that keeps its value",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"`readOnly` goes on `Root`, or on the surrounding `FieldText` as here. It locks\nthe value, not the list: there is no clear button, but the chevron still\nopens the list to browse it, and picking a row leaves the value as it was.\n\n@summary Read-only field whose list can be browsed but not picked from",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: \`disabled\` passed to the input
alone, not to \`Root\`, still hides the clear button and disables the chevron,
and a press on the frame does not open the list, so the value cannot change.

@summary Chevron disabled when only the input is disabled`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"`Empty` stays mounted so screen readers announce the change; it renders its\nchildren only while nothing matches. It needs `items` on `Root` to know that.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`Several values from one list, the way Lines of Authority or locations are
assigned: each row leads with a checkbox-shaped indicator, picking a row toggles
it, and the list stays open with the query intact so the next pick is one click
away. The input never shows the selection; the field renders it alongside,
here as tags.`,...L.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Options fetched as you type, the way the apps load data: the rows are a component\nthat suspends on the request, so a `Suspense` boundary inside `Content` shows\nplaceholder rows until the first results land. The rows read a deferred copy of\nthe query, so a new search keeps the previous rows on screen while it loads, and\npassing that staleness as `loading` announces the wait and marks `Content` busy\nuntil they are replaced; the placeholders never come back. Nothing tracks a\nrequest by hand, and reading the data by query is what\nmakes out-of-order responses harmless. With react-query, drop a\n`useSuspenseQuery` where `use()` is, or use `placeholderData: keepPreviousData`\nwith a plain `useQuery` for the same behaviour.",...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:'The same search without Suspense, for a consumer that gets a `loading` flag from\nits data layer instead: `filter={null}`, the rows arrive through `filteredItems`,\nand the flag goes to `Root` as `loading`. That is all the wiring the wait needs:\n`Content` is marked busy, `loadingLabel` is announced once when the request\nstarts, and `Empty` holds back "no results" until the answer is in. Placeholder\nrows show only while there is nothing to show yet, hidden from assistive\ntechnology since the label already speaks for them; after that, the previous\nrows stay until the new ones replace them. A request that is no longer the\nlatest is dropped.\n\n`minInputLength` keeps the list shut until two characters are typed — focusing\nthe field opens nothing, and deleting back under the minimum closes it — and\nno request goes out for a shorter query either.\n\n@summary API search that waits for two characters and announces its loading state',...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:"Dropped into a `FieldText`, the input takes the label, the description and\nthe error from the field with nothing wired by hand: `Combobox.Input` reads the\nsame `InputContext` the plain `Input` does. It also points `aria-labelledby`\nat the label, so the name survives the list opening: Base UI then hides the\nrest of the page from assistive technology, label included, and a\n`<label for>` alone would stop naming the input.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Inside a \`Modal\`, which is a Radix Dialog. The surface portals to the body, so
this checks that the dialog's modal layer neither blocks pointer events on the
list nor treats a click in it as a click outside and closes. With a value
picked, Escape closes the list, then clears the value, then closes the modal.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:"Inside a `Popover`. Escape on the open list closes the list only, and the next\nEscape closes the popover.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"Inside a `Popover`, with a value picked. Base UI clears the value on an Escape\nfrom the closed list, so it takes three: the list, the value, then the popover.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...Z.parameters?.docs?.source},description:{story:"Inside a `Modal`, with no `Empty`. When nothing matches there is no list to\nclose, so Base UI lets the first Escape through and it closes the modal.",...Z.parameters?.docs?.description}}},Q=[`Default`,`Plain`,`Select`,`SelectWithClear`,`Disabled`,`ReadOnly`,`DisabledOnInput`,`NoMatches`,`MultipleSelection`,`AsyncSearch`,`AsyncSearchWithLoading`,`InsideFieldText`,`InsideModal`,`InsidePopover`,`InsidePopoverWithValue`,`InsideModalWithoutEmpty`]})))()}$();export{W as AsyncSearch,K as AsyncSearchWithLoading,k as Default,N as Disabled,F as DisabledOnInput,q as InsideFieldText,J as InsideModal,Z as InsideModalWithoutEmpty,Y as InsidePopover,X as InsidePopoverWithValue,L as MultipleSelection,I as NoMatches,A as Plain,P as ReadOnly,j as Select,M as SelectWithClear,Q as __namedExportsOrder,E as default};