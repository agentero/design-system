import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Cu-8_1HN.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-DAnh6UM_.js";import{a,c as o,i as s,n as ee,o as te,r as c,s as l,t as u}from"./combobox-BWWe_nJY.js";import{n as ne,t as d}from"./label-BiQJp1e8.js";import{n as re,t as f}from"./field-DWPaWNZY.js";import{n as p,t as m}from"./field-text-Cx9Wv_ip.js";import{n as ie,t as h}from"./modal-C0N53VJT.js";import{n as ae,t as oe}from"./tag-mRPYpn0V.js";import{n as se,t as g}from"./popover-BtV-4uDB.js";import{n as ce,t as le}from"./skeleton-DVVxKlZy.js";var _;function v(){return(v=e((()=>{o(),_={Root:te,Input:c,Content:u,List:a,Item:s,Empty:ee,Status:l}})))()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{y=t(),v(),r(),re(),p(),ne(),ie(),se(),ce(),ae(),b=n(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Combobox`,component:_.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:`Combobox is a text input that filters a list and writes the chosen option back
into itself. Focusing the input or typing opens the list; picking a row fills the
input and closes it. With \`multiple\` the rows become checkbox-like toggles and the
list stays open between picks. Built on Base UI, whose Combobox primitive owns
the filtering, the keyboard navigation and the \`role="combobox"\` wiring.`}}},decorators:[e=>(0,b.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,b.jsx)(e,{})})]},D=[`California`,`Colorado`,`Connecticut`,`Florida`,`Texas`,`Washington`],O=e=>{let t=e.querySelector(`[data-slot="combobox-field"]`).getBoundingClientRect(),n=document.body.querySelector(`[data-slot="combobox-content"]`).getBoundingClientRect();x(n.width).toBeCloseTo(t.width,0),x(n.left).toBeCloseTo(t.left,0)},k={render:()=>(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:/search states/i}),i=e.querySelector(`[data-slot="input-group-addon"] svg`);await x(i).toHaveAttribute(`aria-hidden`,`true`),await C.click(r),await w(()=>x(n.getAllByRole(`option`)).toHaveLength(D.length)),await w(()=>O(e)),await x(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await x(document.body.querySelector(`[data-slot="combobox-item-indicator"]`)).not.toBeInTheDocument(),await C.type(r,`co`),await w(()=>x(n.getAllByRole(`option`)).toHaveLength(2)),await x(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C.click(n.getByRole(`option`,{name:`Colorado`})),await w(()=>x(r).toHaveValue(`Colorado`)),await C.click(await t.findByRole(`button`,{name:/clear/i})),await w(()=>x(r).toHaveValue(``)),await x(r).toHaveFocus(),await C.keyboard(`{ArrowDown}`),await w(()=>x(n.getAllByRole(`option`)).toHaveLength(D.length)),await x(n.getByRole(`option`,{name:`Colorado`})).not.toHaveAttribute(`aria-selected`,`true`),await C.keyboard(`{Escape}`),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},A={render:()=>(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{variant:`plain`,placeholder:`State`,"aria-label":`State`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:`State`});await x(e.querySelector(`svg`)).not.toBeInTheDocument();let i=e.querySelector(`[data-slot="combobox-field"]`);await x(getComputedStyle(i).paddingLeft).toBe(`16px`),await C.type(r,`tex`),await w(()=>O(e)),await C.click(await n.findByRole(`option`,{name:`Texas`})),await w(()=>x(r).toHaveValue(`Texas`)),await x(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},j={render:()=>(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{variant:`select`,placeholder:`Choose a state`,"aria-label":`State`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await x(i).toHaveAttribute(`aria-expanded`,`false`),await C.click(i),await w(()=>x(n.getAllByRole(`option`)).toHaveLength(D.length)),await x(i).toHaveAttribute(`aria-expanded`,`true`),await w(()=>O(e)),await C.click(i),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await x(i).toHaveAttribute(`aria-expanded`,`false`),await C.click(i),await C.click(await n.findByRole(`option`,{name:`Florida`})),await w(()=>x(r).toHaveValue(`Florida`)),await x(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},M={render:()=>(0,b.jsxs)(_.Root,{items:D,defaultValue:`Florida`,children:[(0,b.jsx)(_.Input,{variant:`select`,showClear:!0,placeholder:`Choose a state`,"aria-label":`State`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`combobox`,{name:`State`}),r=e.querySelector(`[data-slot="combobox-trigger"]`);await x(r).not.toBeVisible(),await C.click(t.getByRole(`button`,{name:/clear/i})),await w(()=>x(n).toHaveValue(``)),await x(n).toHaveFocus(),await C.keyboard(`{Escape}`),await w(()=>x(T(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),await x(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await x(r).toBeVisible()}},N={render:()=>(0,b.jsxs)(_.Root,{items:D,defaultValue:`Florida`,disabled:!0,children:[(0,b.jsx)(_.Input,{variant:`select`,showClear:!0,"aria-label":`State`}),(0,b.jsx)(_.Content,{children:(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`button`,{name:`Show options`});await x(t.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`),await x(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await x(n).toBeVisible(),await x(n).toBeDisabled()}},P={render:()=>(0,b.jsxs)(m,{readOnly:!0,children:[(0,b.jsx)(d,{children:`State`}),(0,b.jsxs)(_.Root,{items:D,defaultValue:`Texas`,children:[(0,b.jsx)(_.Input,{variant:`select`,showClear:!0}),(0,b.jsx)(_.Content,{children:(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await x(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await x(i).toBeVisible(),await C.click(i),await w(()=>x(n.getByRole(`listbox`)).toBeInTheDocument()),await C.click(n.getByRole(`option`,{name:`Florida`})),await x(r).toHaveValue(`Texas`)}},F={tags:[`!manifest`],args:{onOpenChange:S()},render:e=>(0,b.jsxs)(_.Root,{items:D,defaultValue:`Florida`,onOpenChange:e.onOpenChange,children:[(0,b.jsx)(_.Input,{variant:`select`,showClear:!0,disabled:!0,"aria-label":`State`}),(0,b.jsx)(_.Content,{children:(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})})]}),play:async({args:e,canvasElement:t})=>{let n=T(t),r=n.getByRole(`button`,{name:`Show options`});await x(n.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await x(r).toBeVisible(),await x(r).toBeDisabled(),await C.click(r),await C.click(t.querySelector(`[data-slot="combobox-field"]`)),await x(e.onOpenChange).not.toHaveBeenCalled(),await x(n.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`)}},I={render:()=>(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body);await C.type(t.getByRole(`combobox`,{name:/search states/i}),`zzz`),await x(await n.findByText(/no matches found/i)).toBeInTheDocument(),await x(n.queryByRole(`option`)).not.toBeInTheDocument()}},L={render:()=>{let[e,t]=(0,y.useState)([]);return(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsxs)(_.Root,{items:D,multiple:!0,value:e,onValueChange:t,children:[(0,b.jsx)(_.Input,{placeholder:`Assign states`,"aria-label":`Assign states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{"aria-label":`States`,children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),e.length>0&&(0,b.jsx)(`ul`,{"aria-label":`Selected states`,className:`flex flex-wrap gap-2`,children:e.map(e=>(0,b.jsx)(`li`,{children:(0,b.jsx)(oe,{size:`sm`,children:e})},e))})]})},play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:/assign states/i});await C.type(r,`co`);let i=await n.findByRole(`listbox`,{name:`States`});await x(i).toHaveAttribute(`aria-multiselectable`,`true`),await w(()=>x(n.getAllByRole(`option`)).toHaveLength(2));let a=n.getByRole(`option`,{name:`Colorado`}),o=a.querySelector(`[data-slot="combobox-item-indicator"]`);await x(o).toBeInTheDocument(),await x(o).not.toHaveAttribute(`data-selected`),await x(a).toHaveAttribute(`aria-selected`,`false`),await C.keyboard(`{Enter}`),await w(()=>x(a).toHaveAttribute(`aria-selected`,`true`)),await x(o).toHaveAttribute(`data-selected`),await x(r).toHaveValue(`co`),await x(n.getByRole(`listbox`,{name:`States`})).toBeInTheDocument(),await x(T(t.getByRole(`list`,{name:/selected states/i})).getByText(`Colorado`)).toBeInTheDocument(),await C.click(n.getByRole(`option`,{name:`Connecticut`})),await w(()=>x(n.getByRole(`option`,{name:`Connecticut`})).toHaveAttribute(`aria-selected`,`true`)),await x(a).toHaveAttribute(`aria-selected`,`true`),await x(r).toHaveValue(`co`),await x(t.getAllByRole(`listitem`)).toHaveLength(2),await x(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await x(e.querySelector(`[data-slot="combobox-trigger"]`)).not.toBeInTheDocument(),await C.click(a),await w(()=>x(a).toHaveAttribute(`aria-selected`,`false`)),await x(o).not.toHaveAttribute(`data-selected`),await x(t.getAllByRole(`listitem`)).toHaveLength(1),await C.keyboard(`{Escape}`),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},R=[{id:`acme`,name:`Acme Insurance`},{id:`anchor`,name:`Anchor Brokers`},{id:`beacon`,name:`Beacon Risk`},{id:`cardinal`,name:`Cardinal Agency`}],z=e=>new Promise(t=>{setTimeout(()=>t(R.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),800)}),B=()=>(0,b.jsx)(`div`,{"data-slot":`combobox-skeleton`,className:`py-2`,"aria-hidden":`true`,children:[`w-28`,`w-36`,`w-32`].map(e=>(0,b.jsx)(`div`,{className:`mx-2 my-px flex items-center px-3 py-2`,children:(0,b.jsx)(le,{className:`h-5 ${e}`})},e))}),V=2,H={render:()=>{let[e,t]=(0,y.useState)([]),[n,r]=(0,y.useState)(!1),i=(0,y.useRef)(0);return(0,b.jsxs)(_.Root,{items:e,filteredItems:e,filter:null,minInputLength:V,loading:n,loadingLabel:`Searching agencies…`,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,onInputValueChange:async e=>{let n=++i.current;if(e.trim().length<V){t([]),r(!1);return}r(!0);let a=await z(e);n===i.current&&(t(a),r(!1))},children:[(0,b.jsx)(_.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,b.jsxs)(_.Content,{children:[n&&e.length===0&&(0,b.jsx)(B,{}),(0,b.jsx)(_.Empty,{children:`No agencies found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e.name},e.id)})]})]})},play:async({canvasElement:e})=>{let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=e.querySelector(`[data-slot="combobox-loading"]`);await x(i).toBeInTheDocument(),await x(i).toBeEmptyDOMElement(),await C.click(r),await C.type(r,`a`),await x(r).toHaveAttribute(`aria-expanded`,`false`),await x(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await C.type(r,`n`),await w(()=>x(i).toHaveTextContent(/searching agencies/i));let a=document.body.querySelector(`[data-slot="combobox-content"]`);await x(a).toHaveAttribute(`aria-busy`,`true`);let o=n.getAllByRole(`status`).filter(e=>e.textContent?.trim());await x(o).toHaveLength(1),await x(o).toEqual([i]),await x(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await x(n.queryByRole(`option`)).not.toBeInTheDocument(),await w(()=>x(n.getAllByRole(`option`).length).toBeGreaterThan(0)),await x(a).not.toHaveAttribute(`aria-busy`),await w(()=>x(n.getAllByRole(`option`)[0]).toHaveAttribute(`data-highlighted`)),await x(n.queryByText(/searching agencies/i)).not.toBeInTheDocument(),await x(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument();let s=n.getAllByRole(`option`).length;await C.type(r,`ch`),await x(a).toHaveAttribute(`aria-busy`,`true`),await w(()=>x(i).toHaveTextContent(/searching agencies/i)),await x(n.getAllByRole(`option`)).toHaveLength(s),await x(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument(),await w(()=>x(n.getAllByRole(`option`)).toHaveLength(1)),await x(a).not.toHaveAttribute(`aria-busy`),await C.type(r,`{Backspace}{Backspace}{Backspace}`),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await x(r).toHaveAttribute(`aria-expanded`,`false`),await x(r).toHaveValue(`a`),await C.type(r,`nch`),await C.click(await n.findByRole(`option`,{name:`Anchor Brokers`})),await w(()=>x(r).toHaveValue(`Anchor Brokers`)),await C.keyboard(`{Escape}`),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},U=S(),W={render:()=>(0,b.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,onSubmit:e=>{e.preventDefault(),U()},children:[(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`State`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),(0,b.jsx)(i,{type:`submit`,children:`Save`})]}),play:async({canvasElement:e})=>{U.mockClear();let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:`State`});await C.click(r),await w(()=>x(n.getByRole(`option`,{name:`California`})).toHaveAttribute(`data-highlighted`)),await C.type(r,`co`),await w(()=>x(n.getAllByRole(`option`)).toHaveLength(2)),await x(n.getByRole(`option`,{name:`Colorado`})).toHaveAttribute(`data-highlighted`),await C.keyboard(`{Enter}`),await w(()=>x(r).toHaveValue(`Colorado`)),await x(U).not.toHaveBeenCalled(),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C.keyboard(`{Enter}`),await x(U).toHaveBeenCalledTimes(1),await C.clear(r),await C.type(r,`zz`),await w(()=>x(n.getByText(`No matches found`)).toBeVisible()),await C.keyboard(`{Enter}`),await x(U).toHaveBeenCalledTimes(1),await x(r).toHaveValue(`zz`),await x(r).toHaveAttribute(`aria-expanded`,`true`),await C.keyboard(`{Escape}`),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},G=S(),K={render:()=>(0,b.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,onSubmit:e=>{e.preventDefault(),G()},children:[(0,b.jsxs)(_.Root,{items:D,autoHighlight:!1,children:[(0,b.jsx)(_.Input,{submitOnEnter:!0,placeholder:`Search states`,"aria-label":`State`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),(0,b.jsx)(i,{type:`submit`,children:`Save`})]}),play:async({canvasElement:e})=>{G.mockClear();let t=T(e),n=T(document.body),r=t.getByRole(`combobox`,{name:`State`});await C.click(r),await C.type(r,`co`),await w(()=>x(n.getAllByRole(`option`)).toHaveLength(2)),await C.keyboard(`{Enter}`),await x(G).toHaveBeenCalledTimes(1),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await x(r).not.toHaveValue(`Colorado`)}},q={render:()=>(0,b.jsxs)(m,{invalid:!0,required:!0,children:[(0,b.jsx)(d,{children:`Agency`}),(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{placeholder:`Search agencies`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]}),(0,b.jsx)(f.Description,{children:`The agency this agent will be added to.`}),(0,b.jsx)(f.Error,{errors:[{message:`Pick an agency from the list`}]})]}),play:async({canvasElement:e})=>{let t=T(e),n=t.getByRole(`combobox`,{name:`Agency`});await x(n).toHaveAttribute(`data-slot`,`combobox-input`),await x(n).toBeRequired(),await x(n).toHaveAttribute(`aria-invalid`,`true`),await x(n).toHaveAccessibleDescription(`The agency this agent will be added to. Pick an agency from the list`);let r=t.getByText(`Agency`).closest(`label`);await x(r).toHaveAttribute(`id`),await x(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await C.click(n),await T(document.body).findByRole(`listbox`),await x(n).toHaveAccessibleName(`Agency`),await C.keyboard(`{Escape}`),await w(()=>x(T(document.body).queryByRole(`listbox`)).not.toBeInTheDocument())}},J={render:()=>(0,b.jsxs)(h.Root,{children:[(0,b.jsx)(h.Trigger,{asChild:!0,children:(0,b.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,b.jsxs)(h.Content,{children:[(0,b.jsx)(h.Title,{children:`Assign agency`}),(0,b.jsx)(h.Body,{children:(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]})})]})]}),play:async({canvasElement:e})=>{let t=T(e),n=T(document.body);await C.click(t.getByRole(`button`,{name:/assign agency/i}));let r=await n.findByRole(`dialog`,{name:/assign agency/i}),i=T(r).getByRole(`combobox`,{name:/search states/i});await C.click(i),await C.type(i,`flo`);let a=await n.findByRole(`option`,{name:`Florida`});await C.click(a),await w(()=>x(i).toHaveValue(`Florida`)),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await x(r).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{ArrowDown}`),await n.findByRole(`listbox`),await C.keyboard(`{Escape}`),await w(()=>x(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await x(i).toHaveValue(`Florida`),await x(r).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{Escape}`),await x(i).toHaveValue(``),await x(r).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{Escape}`),await w(()=>x(r).toHaveAttribute(`data-state`,`closed`))}},Y={render:()=>(0,b.jsxs)(g.Root,{children:[(0,b.jsx)(g.Trigger,{asChild:!0,children:(0,b.jsx)(i,{variant:`secondary`,children:`Filter by state`})}),(0,b.jsx)(g.Content,{"aria-label":`Filter by state`,children:(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsxs)(_.Content,{children:[(0,b.jsx)(_.Empty,{children:`No matches found`}),(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})]})]})})]}),play:async({canvasElement:e})=>{let t=T(document.body),n=T(e).getByRole(`button`,{name:/filter by state/i});await C.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await C.click(r),await t.findByRole(`listbox`),await C.keyboard(`{Escape}`),await w(()=>x(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await x(n).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{Escape}`),await w(()=>x(n).toHaveAttribute(`data-state`,`closed`))}},X={render:Y.render,play:async({canvasElement:e})=>{let t=T(document.body),n=T(e).getByRole(`button`,{name:/filter by state/i});await C.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await C.click(r),await C.click(await t.findByRole(`option`,{name:`Texas`})),await w(()=>x(r).toHaveValue(`Texas`)),await C.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await C.keyboard(`{Escape}`),await w(()=>x(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await x(r).toHaveValue(`Texas`),await C.keyboard(`{Escape}`),await x(r).toHaveValue(``),await x(n).toHaveAttribute(`data-state`,`open`),await C.keyboard(`{Escape}`),await w(()=>x(n).toHaveAttribute(`data-state`,`closed`))}},Z={render:()=>(0,b.jsxs)(h.Root,{children:[(0,b.jsx)(h.Trigger,{asChild:!0,children:(0,b.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,b.jsxs)(h.Content,{children:[(0,b.jsx)(h.Title,{children:`Assign agency`}),(0,b.jsx)(h.Body,{children:(0,b.jsxs)(_.Root,{items:D,children:[(0,b.jsx)(_.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,b.jsx)(_.Content,{children:(0,b.jsx)(_.List,{children:e=>(0,b.jsx)(_.Item,{value:e,children:e},e)})})]})})]})]}),play:async({canvasElement:e})=>{let t=T(document.body);await C.click(T(e).getByRole(`button`,{name:/assign agency/i}));let n=await t.findByRole(`dialog`,{name:/assign agency/i}),r=T(n).getByRole(`combobox`,{name:/search states/i});await C.type(r,`zzz`),await x(t.queryByRole(`option`)).not.toBeInTheDocument(),await x(document.querySelector(`[data-slot="combobox-content"]`)).not.toBeVisible(),await C.keyboard(`{Escape}`),await w(()=>x(n).toHaveAttribute(`data-state`,`closed`))}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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

    // Keyboard: the first row is highlighted already, so Enter picks it. The list stays open and
    // the query stays put.
    await userEvent.keyboard('{Enter}');
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
here as tags.`,...L.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
    // Rows that arrive after the query are highlighted too, so Enter picks the first.
    await waitFor(() => expect(body.getAllByRole('option')[0]).toHaveAttribute('data-highlighted'));
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
}`,...H.parameters?.docs?.source},description:{story:'Options fetched from an API as you type: `filter={null}`, the rows arrive\nthrough `items` and `filteredItems`, and the data layer\'s `loading` flag goes\nto `Root`. That is all the wiring the wait needs:\n`Content` is marked busy, `loadingLabel` is announced once when the request\nstarts, and `Empty` holds back "no results" until the answer is in. Placeholder\nrows show only while there is nothing to show yet, hidden from assistive\ntechnology since the label already speaks for them; after that, the previous\nrows stay until the new ones replace them. A request that is no longer the\nlatest is dropped.\n\n`minInputLength` keeps the list shut until two characters are typed — focusing\nthe field opens nothing, and deleting back under the minimum closes it — and\nno request goes out for a shorter query either.\n\n@summary API search that waits for two characters and announces its loading state',...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => expect(body.getByRole('option', {
      name: 'California'
    })).toHaveAttribute('data-highlighted'));
    await userEvent.type(input, 'co');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));
    await expect(body.getByRole('option', {
      name: 'Colorado'
    })).toHaveAttribute('data-highlighted');
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
}`,...W.parameters?.docs?.source},description:{story:`Inside a form, Enter in an open list picks the highlighted row instead of
submitting. The first row is highlighted as soon as the list shows one, so
typing a search and pressing Enter picks the top match. With no match, Enter
does nothing. Once the list is closed, Enter submits the form as in any input.

@summary Enter picks the highlighted row while the list is open, submits once closed`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col items-start gap-4" onSubmit={event => {
    event.preventDefault();
    onSubmitOnEnter();
  }}>
            <Combobox.Root items={STATES} autoHighlight={false}>
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
}`,...K.parameters?.docs?.source},description:{story:`\`autoHighlight={false}\` on the root and \`submitOnEnter\` on the input bring
back Base UI's defaults: nothing is highlighted until the arrow keys or the
pointer move onto a row, and with no row highlighted, Enter closes the list,
drops the typed query and submits the form. A highlighted row is still picked.

@summary Enter submits the form when no row is highlighted`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    await expect(document.querySelector('[data-slot="combobox-content"]')).not.toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...Z.parameters?.docs?.source},description:{story:"Inside a `Modal`, with no `Empty`. When nothing matches there is no list to\nclose, so Base UI lets the first Escape through and it closes the modal.",...Z.parameters?.docs?.description}}},Q=[`Default`,`Plain`,`Select`,`SelectWithClear`,`Disabled`,`ReadOnly`,`DisabledOnInput`,`NoMatches`,`MultipleSelection`,`AsyncSearchWithLoading`,`InsideForm`,`SubmitOnEnter`,`InsideFieldText`,`InsideModal`,`InsidePopover`,`InsidePopoverWithValue`,`InsideModalWithoutEmpty`]})))()}$();export{H as AsyncSearchWithLoading,k as Default,N as Disabled,F as DisabledOnInput,q as InsideFieldText,W as InsideForm,J as InsideModal,Z as InsideModalWithoutEmpty,Y as InsidePopover,X as InsidePopoverWithValue,L as MultipleSelection,I as NoMatches,A as Plain,P as ReadOnly,j as Select,M as SelectWithClear,K as SubmitOnEnter,Q as __namedExportsOrder,E as default};