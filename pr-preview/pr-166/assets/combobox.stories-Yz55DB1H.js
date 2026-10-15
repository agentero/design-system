import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CVwp7NOn.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BInVfovN.js";import{a,c as o,i as s,n as ee,o as c,r as te,s as ne,t as l}from"./combobox-BCMFV4qv.js";import{n as u,t as d}from"./label-DGfR0cnE.js";import{n as re,t as f}from"./field-B-uwYDJ8.js";import{n as ie,t as p}from"./field-text-L06euKbY.js";import{n as m,t as h}from"./modal-BL71Tbpk.js";import{n as ae,t as oe}from"./tag-DHdjgzXK.js";import{n as se,t as g}from"./popover-DW3ITgfA.js";import{n as ce,t as le}from"./skeleton-DVVxKlZy.js";var _;function v(){return(v=e((()=>{o(),_={Root:c,Input:te,Content:l,List:a,Item:s,Empty:ee,Status:ne}})))()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{y=t(),v(),r(),re(),ie(),u(),m(),se(),ce(),ae(),b=n(),{configure:x,expect:S,getConfig:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Combobox`,component:_.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:`Combobox is a text input that filters a list and writes the chosen option back
into itself. Focusing the input or typing opens the list; picking a row fills the
input and closes it. With \`multiple\` the rows become checkbox-like toggles and the
list stays open between picks. Built on Base UI, whose Combobox primitive owns
the filtering, the keyboard navigation and the \`role="combobox"\` wiring.`}}},decorators:[e=>(0,b.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,b.jsx)(e,{})})]},O=[`California`,`Colorado`,`Connecticut`,`Florida`,`Texas`,`Washington`],k=e=>{let t=e.querySelector(`[data-slot="combobox-field"]`).getBoundingClientRect(),n=document.body.querySelector(`[data-slot="combobox-content"]`).getBoundingClientRect();S(n.width).toBeCloseTo(t.width,0),S(n.left).toBeCloseTo(t.left,0)},A={render:()=>(0,b.jsxs)(_.Root,{items:O,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:/search states/i}),i=e.querySelector(`[data-slot="input-group-addon"] svg`);await S(i).toHaveAttribute(`aria-hidden`,`true`),await w.click(r),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(O.length)),await T(()=>k(e)),await S(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await S(document.body.querySelector(`[data-slot="combobox-item-indicator"]`)).not.toBeInTheDocument(),await w.type(r,`co`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(2)),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await w.click(n.getByRole(`option`,{name:`Colorado`})),await T(()=>S(r).toHaveValue(`Colorado`)),await w.click(await t.findByRole(`button`,{name:/clear/i})),await T(()=>S(r).toHaveValue(``)),await S(r).toHaveFocus(),await w.keyboard(`{ArrowDown}`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(O.length)),await S(n.getByRole(`option`,{name:`Colorado`})).not.toHaveAttribute(`aria-selected`,`true`),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},j={render:()=>(0,b.jsxs)(_.Root,{items:O,children:[(0,b.jsx)(_.Input,{variant:`plain`,placeholder:`State`,"aria-label":`State`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:`State`});await S(e.querySelector(`svg`)).not.toBeInTheDocument();let i=e.querySelector(`[data-slot="combobox-field"]`);await S(getComputedStyle(i).paddingLeft).toBe(`16px`),await w.type(r,`tex`),await T(()=>k(e)),await w.click(await n.findByRole(`option`,{name:`Texas`})),await T(()=>S(r).toHaveValue(`Texas`)),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},M={render:()=>(0,b.jsxs)(_.Root,{items:O,children:[(0,b.jsx)(_.Input,{variant:`select`,placeholder:`Choose a state`,"aria-label":`State`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await S(i).toHaveAttribute(`aria-expanded`,`false`),await w.click(i),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(O.length)),await S(i).toHaveAttribute(`aria-expanded`,`true`),await T(()=>k(e)),await w.click(i),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(i).toHaveAttribute(`aria-expanded`,`false`),await w.click(i),await w.click(await n.findByRole(`option`,{name:`Florida`})),await T(()=>S(r).toHaveValue(`Florida`)),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},N={render:()=>(0,b.jsxs)(_.Root,{items:O,defaultValue:`Florida`,children:[(0,b.jsx)(_.Input,{variant:`select`,showClear:!0,placeholder:`Choose a state`,"aria-label":`State`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`combobox`,{name:`State`}),r=e.querySelector(`[data-slot="combobox-trigger"]`);await S(r).not.toBeVisible(),await w.click(t.getByRole(`button`,{name:/clear/i})),await T(()=>S(n).toHaveValue(``)),await S(n).toHaveFocus(),await w.keyboard(`{Escape}`),await T(()=>S(E(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(r).toBeVisible()}},P={render:()=>{let e=(0,b.jsx)(_.Content,{children:(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})});return(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsxs)(_.Root,{items:O,defaultValue:`Florida`,disabled:!0,children:[(0,b.jsx)(_.Input,{variant:`select`,showClear:!0,"aria-label":`Disabled state`}),e]}),(0,b.jsxs)(p,{readOnly:!0,children:[(0,b.jsx)(d,{children:`Read-only state`}),(0,b.jsxs)(_.Root,{items:O,defaultValue:`Texas`,children:[(0,b.jsx)(_.Input,{variant:`select`,showClear:!0}),e]})]})]})},play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),[r,i]=t.getAllByRole(`button`,{name:`Show options`});await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(t.getByRole(`combobox`,{name:`Disabled state`})).toHaveValue(`Florida`),await S(r).toBeVisible(),await S(i).toBeVisible(),await S(r).toBeDisabled();let a=t.getByRole(`combobox`,{name:`Read-only state`});await w.click(i),await T(()=>S(n.getByRole(`listbox`)).toBeInTheDocument()),await w.click(n.getByRole(`option`,{name:`Florida`})),await S(a).toHaveValue(`Texas`)}},F={tags:[`!manifest`],render:()=>(0,b.jsxs)(_.Root,{items:O,defaultValue:`Florida`,children:[(0,b.jsx)(_.Input,{variant:`select`,showClear:!0,disabled:!0,"aria-label":`State`}),(0,b.jsx)(_.Content,{children:(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`button`,{name:`Show options`});await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(n).toBeVisible(),await S(n).toBeDisabled(),await w.click(n),await S(E(document.body).queryByRole(`listbox`)).not.toBeInTheDocument(),await S(t.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`)}},I={render:()=>(0,b.jsxs)(_.Root,{items:O,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body);await w.type(t.getByRole(`combobox`,{name:/search states/i}),`zzz`),await S(await n.findByText(/no matches found/i)).toBeInTheDocument(),await S(n.queryByRole(`option`)).not.toBeInTheDocument()}},L={render:()=>{let[e,t]=(0,y.useState)([]);return(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsxs)(_.Root,{items:O,multiple:!0,value:e,onValueChange:t,children:[(0,b.jsx)(_.Input,{placeholder:`Assign states`,"aria-label":`Assign states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{"aria-label":`States`,children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),e.length>0&&(0,b.jsx)(`ul`,{"aria-label":`Selected states`,className:`flex flex-wrap gap-2`,children:e.map(e=>(0,b.jsx)(`li`,{children:(0,b.jsx)(oe,{size:`sm`,children:e})},e))})]})},play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:/assign states/i});await w.type(r,`co`);let i=await n.findByRole(`listbox`,{name:`States`});await S(i).toHaveAttribute(`aria-multiselectable`,`true`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(2));let a=n.getByRole(`option`,{name:`Colorado`}),o=a.querySelector(`[data-slot="combobox-item-indicator"]`);await S(o).toBeInTheDocument(),await S(o).not.toHaveAttribute(`data-selected`),await S(a).toHaveAttribute(`aria-selected`,`false`),await w.keyboard(`{ArrowDown}{Enter}`),await T(()=>S(a).toHaveAttribute(`aria-selected`,`true`)),await S(o).toHaveAttribute(`data-selected`),await S(r).toHaveValue(`co`),await S(n.getByRole(`listbox`,{name:`States`})).toBeInTheDocument(),await S(E(t.getByRole(`list`,{name:/selected states/i})).getByText(`Colorado`)).toBeInTheDocument(),await w.click(n.getByRole(`option`,{name:`Connecticut`})),await T(()=>S(n.getByRole(`option`,{name:`Connecticut`})).toHaveAttribute(`aria-selected`,`true`)),await S(a).toHaveAttribute(`aria-selected`,`true`),await S(r).toHaveValue(`co`),await S(t.getAllByRole(`listitem`)).toHaveLength(2),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(e.querySelector(`[data-slot="combobox-trigger"]`)).not.toBeInTheDocument(),await w.click(a),await T(()=>S(a).toHaveAttribute(`aria-selected`,`false`)),await S(o).not.toHaveAttribute(`data-selected`),await S(t.getAllByRole(`listitem`)).toHaveLength(1),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},R=[{id:`acme`,name:`Acme Insurance`},{id:`anchor`,name:`Anchor Brokers`},{id:`beacon`,name:`Beacon Risk`},{id:`cardinal`,name:`Cardinal Agency`}],z=e=>new Promise(t=>{setTimeout(()=>t(R.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),800)}),B=()=>(0,b.jsx)(`div`,{"data-slot":`combobox-skeleton`,className:`py-2`,"aria-hidden":`true`,children:[`w-28`,`w-36`,`w-32`].map(e=>(0,b.jsx)(`div`,{className:`mx-2 my-px flex items-center px-3 py-2`,children:(0,b.jsx)(le,{className:`h-5 ${e}`})},e))}),V=new Map,H=e=>{let t=V.get(e);return t||(t=z(e),V.set(e,t)),t},U=({query:e})=>{let t=(0,y.use)(H(e));return t.length===0?(0,b.jsx)(`div`,{className:`mx-2 my-px px-3 py-2 text-sm text-text-default-base-tertiary`,children:`No agencies found`}):(0,b.jsx)(_.List,{children:t.map(e=>(0,b.jsx)(_.Item,{value:e,children:e.name},e.id))})},W={render:()=>{let[e,t]=(0,y.useState)(``),n=(0,y.useDeferredValue)(e),r=e!==n;return(0,b.jsxs)(_.Root,{filter:null,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,loading:r,loadingLabel:`Searching agencies…`,onInputValueChange:(e,{reason:n})=>{n!==`item-press`&&t(e)},children:[(0,b.jsx)(_.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,b.jsx)(_.Content,{children:(0,b.jsx)(y.Suspense,{fallback:(0,b.jsx)(B,{}),children:(0,b.jsx)(U,{query:n})})})]})},play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=()=>document.body.querySelector(`[data-slot="combobox-skeleton"]`),a=()=>document.body.querySelector(`[data-slot="combobox-content"]`);await w.click(r),await T(()=>S(i()).toBeInTheDocument()),await S(n.queryByRole(`option`)).not.toBeInTheDocument(),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(4)),await S(a()).not.toHaveAttribute(`aria-busy`);let{eventWrapper:o}=C();x({eventWrapper:e=>e()});try{await w.type(r,`b`)}finally{x({eventWrapper:o})}await T(()=>S(a()).toHaveAttribute(`aria-busy`,`true`)),await T(()=>S(n.getByText(/searching agencies/i)).toBeInTheDocument()),await S(i()).not.toBeInTheDocument(),await S(n.getAllByRole(`option`)).toHaveLength(4),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(2)),await S(a()).not.toHaveAttribute(`aria-busy`),await S(i()).not.toBeInTheDocument(),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},G=2,K={render:()=>{let[e,t]=(0,y.useState)([]),[n,r]=(0,y.useState)(!1),i=(0,y.useRef)(0);return(0,b.jsxs)(_.Root,{items:e,filteredItems:e,filter:null,minInputLength:G,loading:n,loadingLabel:`Searching agencies…`,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,onInputValueChange:async e=>{let n=++i.current;if(e.trim().length<G){t([]),r(!1);return}r(!0);let a=await z(e);n===i.current&&(t(a),r(!1))},children:[(0,b.jsx)(_.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,b.jsxs)(_.Content,{children:[n&&e.length===0&&(0,b.jsx)(B,{}),(0,b.jsx)(_.Empty,{children:`No agencies found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e.name},e.id)})]})]})},play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=e.querySelector(`[data-slot="combobox-loading"]`);await S(i).toBeInTheDocument(),await S(i).toBeEmptyDOMElement(),await w.click(r),await w.type(r,`a`),await S(r).toHaveAttribute(`aria-expanded`,`false`),await S(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await w.type(r,`n`),await T(()=>S(i).toHaveTextContent(/searching agencies/i));let a=document.body.querySelector(`[data-slot="combobox-content"]`);await S(a).toHaveAttribute(`aria-busy`,`true`);let o=n.getAllByRole(`status`).filter(e=>e.textContent?.trim());await S(o).toHaveLength(1),await S(o).toEqual([i]),await S(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await S(n.queryByRole(`option`)).not.toBeInTheDocument(),await T(()=>S(n.getAllByRole(`option`).length).toBeGreaterThan(0)),await S(a).not.toHaveAttribute(`aria-busy`),await S(n.queryByText(/searching agencies/i)).not.toBeInTheDocument(),await S(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument();let s=n.getAllByRole(`option`).length;await w.type(r,`ch`),await S(a).toHaveAttribute(`aria-busy`,`true`),await T(()=>S(i).toHaveTextContent(/searching agencies/i)),await S(n.getAllByRole(`option`)).toHaveLength(s),await S(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument(),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(1)),await S(a).not.toHaveAttribute(`aria-busy`),await w.type(r,`{Backspace}{Backspace}{Backspace}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(r).toHaveAttribute(`aria-expanded`,`false`),await S(r).toHaveValue(`a`),await w.type(r,`nch`),await w.click(await n.findByRole(`option`,{name:`Anchor Brokers`})),await T(()=>S(r).toHaveValue(`Anchor Brokers`)),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},q={render:()=>(0,b.jsxs)(p,{invalid:!0,required:!0,children:[(0,b.jsx)(d,{children:`Agency`}),(0,b.jsxs)(_.Root,{items:O,children:[(0,b.jsx)(_.Input,{placeholder:`Search agencies`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),(0,b.jsx)(f.Description,{children:`The agency this agent will be added to.`}),(0,b.jsx)(f.Error,{errors:[{message:`Pick an agency from the list`}]})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`combobox`,{name:`Agency`});await S(n).toHaveAttribute(`data-slot`,`combobox-input`),await S(n).toBeRequired(),await S(n).toHaveAttribute(`aria-invalid`,`true`),await S(n).toHaveAccessibleDescription(`The agency this agent will be added to. Pick an agency from the list`);let r=t.getByText(`Agency`).closest(`label`);await S(r).toHaveAttribute(`id`),await S(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await w.click(n),await E(document.body).findByRole(`listbox`),await S(n).toHaveAccessibleName(`Agency`),await w.keyboard(`{Escape}`),await T(()=>S(E(document.body).queryByRole(`listbox`)).not.toBeInTheDocument())}},J={render:()=>(0,b.jsxs)(h.Root,{children:[(0,b.jsx)(h.Trigger,{asChild:!0,children:(0,b.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,b.jsxs)(h.Content,{children:[(0,b.jsx)(h.Title,{children:`Assign agency`}),(0,b.jsx)(h.Body,{children:(0,b.jsxs)(_.Root,{items:O,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]})})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body);await w.click(t.getByRole(`button`,{name:/assign agency/i}));let r=await n.findByRole(`dialog`,{name:/assign agency/i}),i=E(r).getByRole(`combobox`,{name:/search states/i});await w.click(i),await w.type(i,`flo`);let a=await n.findByRole(`option`,{name:`Florida`});await w.click(a),await T(()=>S(i).toHaveValue(`Florida`)),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(r).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{ArrowDown}`),await n.findByRole(`listbox`),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(i).toHaveValue(`Florida`),await S(r).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{Escape}`),await S(i).toHaveValue(``),await S(r).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{Escape}`),await T(()=>S(r).toHaveAttribute(`data-state`,`closed`))}},Y={render:()=>(0,b.jsxs)(g.Root,{children:[(0,b.jsx)(g.Trigger,{asChild:!0,children:(0,b.jsx)(i,{variant:`secondary`,children:`Filter by state`})}),(0,b.jsx)(g.Content,{"aria-label":`Filter by state`,children:(0,b.jsxs)(_.Root,{items:O,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]})})]}),play:async({canvasElement:e})=>{let t=E(document.body),n=E(e).getByRole(`button`,{name:/filter by state/i});await w.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await w.click(r),await t.findByRole(`listbox`),await w.keyboard(`{Escape}`),await T(()=>S(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(n).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{Escape}`),await T(()=>S(n).toHaveAttribute(`data-state`,`closed`))}},X={render:Y.render,play:async({canvasElement:e})=>{let t=E(document.body),n=E(e).getByRole(`button`,{name:/filter by state/i});await w.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await w.click(r),await w.click(await t.findByRole(`option`,{name:`Texas`})),await T(()=>S(r).toHaveValue(`Texas`)),await w.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await w.keyboard(`{Escape}`),await T(()=>S(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(r).toHaveValue(`Texas`),await w.keyboard(`{Escape}`),await S(r).toHaveValue(``),await S(n).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{Escape}`),await T(()=>S(n).toHaveAttribute(`data-state`,`closed`))}},Z={render:()=>(0,b.jsxs)(h.Root,{children:[(0,b.jsx)(h.Trigger,{asChild:!0,children:(0,b.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,b.jsxs)(h.Content,{children:[(0,b.jsx)(h.Title,{children:`Assign agency`}),(0,b.jsx)(h.Body,{children:(0,b.jsxs)(_.Root,{items:O,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsx)(_.Content,{children:(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})})]})})]})]}),play:async({canvasElement:e})=>{let t=E(document.body);await w.click(E(e).getByRole(`button`,{name:/assign agency/i}));let n=await t.findByRole(`dialog`,{name:/assign agency/i}),r=E(n).getByRole(`combobox`,{name:/search states/i});await w.type(r,`zzz`),await S(t.queryByRole(`option`)).not.toBeInTheDocument(),await w.keyboard(`{Escape}`),await T(()=>S(n).toHaveAttribute(`data-state`,`closed`))}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`The common case: options are already in memory and Base UI filters them against
what you type. Selecting a row fills the input and closes the list. The field is
a search out of the box — a magnifier in front, a clear button once something is
picked — and the list hangs from the whole field. Clearing drops the picked option.

@summary Search field with a magnifier and clear button over an in-memory list`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`\`variant="plain"\`: the input alone, with no magnifier and no clear button, for a
field that needs no affordance — a FEIN lookup, a template name. The list still
matches the field's width.

@summary Bare input with no icon and no clear button`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`\`variant="select"\`: a chevron after the input opens and closes the list, for a
short known list the user may want to browse before typing. It has no clear
button by default. The chevron is out of the tab order — the input already
opens the list from the keyboard with the arrow keys.

@summary Field with a chevron that toggles the list, for short known lists`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:"`showClear` overrides the variant's default: here it adds the clear button to a\n`select`, so a picked option can be removed without selecting the text and\ndeleting it. While there is a value it takes the chevron's place; clearing\nbrings the chevron back. Passing `false` drops it from `search`.\n\n@summary Select field with a clear button added through showClear",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = <Combobox.Content>
                <Combobox.List>
                    {(state: string) => <Combobox.Item key={state} value={state}>
                            {state}
                        </Combobox.Item>}
                </Combobox.List>
            </Combobox.Content>;
    return <div className="flex flex-col gap-4">
                <Combobox.Root items={STATES} defaultValue="Florida" disabled>
                    <Combobox.Input variant="select" showClear aria-label="Disabled state" />
                    {options}
                </Combobox.Root>
                <FieldText readOnly>
                    <Label>Read-only state</Label>
                    <Combobox.Root items={STATES} defaultValue="Texas">
                        <Combobox.Input variant="select" showClear />
                        {options}
                    </Combobox.Root>
                </FieldText>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const [disabledTrigger, readOnlyTrigger] = canvas.getAllByRole('button', {
      name: 'Show options'
    });
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole('combobox', {
      name: 'Disabled state'
    })).toHaveValue('Florida');
    // With no clear button to stand in for it, the chevron stays in place.
    await expect(disabledTrigger).toBeVisible();
    await expect(readOnlyTrigger).toBeVisible();
    await expect(disabledTrigger).toBeDisabled();
    const readOnly = canvas.getByRole('combobox', {
      name: 'Read-only state'
    });
    await userEvent.click(readOnlyTrigger!);
    await waitFor(() => expect(body.getByRole('listbox')).toBeInTheDocument());
    await userEvent.click(body.getByRole('option', {
      name: 'Florida'
    }));
    await expect(readOnly).toHaveValue('Texas');
  }
}`,...P.parameters?.docs?.source},description:{story:"`disabled` and `readOnly` go on `Root`; inside a `FieldText` it takes them from\nthe field. A disabled field keeps its value with no clear button and a disabled\nchevron. A read-only one has no clear button either, but its chevron still\nopens the list to browse it; picking a row leaves the value as it was.\n\n@summary Disabled and read-only fields keep their value",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => <Combobox.Root items={STATES} defaultValue="Florida">
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
    await expect(within(document.body).queryByRole('listbox')).not.toBeInTheDocument();
    await expect(canvas.getByRole('combobox', {
      name: 'State'
    })).toHaveValue('Florida');
  }
}`,...F.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: \`disabled\` passed to the input
alone, not to \`Root\`, still hides the clear button and disables the chevron,
so the list cannot open to change the value.

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
}`,...Z.parameters?.docs?.source},description:{story:"Inside a `Modal`, with no `Empty`. When nothing matches there is no list to\nclose, so Base UI lets the first Escape through and it closes the modal.",...Z.parameters?.docs?.description}}},Q=[`Default`,`Plain`,`Select`,`SelectWithClear`,`DisabledAndReadOnly`,`DisabledOnInput`,`NoMatches`,`MultipleSelection`,`AsyncSearch`,`AsyncSearchWithLoading`,`InsideFieldText`,`InsideModal`,`InsidePopover`,`InsidePopoverWithValue`,`InsideModalWithoutEmpty`]})))()}$();export{W as AsyncSearch,K as AsyncSearchWithLoading,A as Default,P as DisabledAndReadOnly,F as DisabledOnInput,q as InsideFieldText,J as InsideModal,Z as InsideModalWithoutEmpty,Y as InsidePopover,X as InsidePopoverWithValue,L as MultipleSelection,I as NoMatches,j as Plain,M as Select,N as SelectWithClear,Q as __namedExportsOrder,D as default};