import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Bawpz-A2.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CZgnbmDe.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p}from"./combobox-DuiY74gU.js";import{n as m,t as h}from"./label-DXHM6niJ.js";import{n as ee,t as g}from"./field-C7kHQk6M.js";import{n as te,t as _}from"./skeleton-DVVxKlZy.js";import{n as ne,t as re}from"./field-text-CPdUHWWR.js";import{n as ie,t as v}from"./modal-BuPsWf_b.js";import{n as ae,t as oe}from"./tag-BsogvH0A.js";import{n as se,t as ce}from"./avatar-CRgKTGCE.js";import{n as le,t as y}from"./popover-DHzgyyU4.js";var b;function ue(){return(ue=e((()=>{c(),b={Root:u,Input:d,Content:p,List:a,Item:s,Skeleton:f,Empty:l,Status:o}})))()}var x,S,C,w,T,E,D,de,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,fe;function pe(){return(pe=e((()=>{x=t(),ue(),se(),r(),ee(),ne(),m(),ie(),le(),te(),ae(),S=n(),{expect:C,fn:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,de={title:`Components/Combobox`,component:b.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:`Combobox is a text input that filters a list and writes the chosen option back
into itself. Focusing the input or typing opens the list; picking a row fills the
input and closes it. With \`multiple\` the rows become checkbox-like toggles and the
list stays open between picks. Built on Base UI, whose Combobox primitive owns
the filtering, the keyboard navigation and the \`role="combobox"\` wiring.`}}},decorators:[e=>(0,S.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,S.jsx)(e,{})})]},O=[`California`,`Colorado`,`Connecticut`,`Florida`,`Texas`,`Washington`],k=e=>{let t=e.querySelector(`[data-slot="combobox-field"]`).getBoundingClientRect(),n=document.body.querySelector(`[data-slot="combobox-content"]`).getBoundingClientRect();C(n.width).toBeCloseTo(t.width,0),C(n.left).toBeCloseTo(t.left,0)},A={render:()=>(0,S.jsxs)(b.Root,{items:O,children:[(0,S.jsx)(b.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/search states/i}),i=e.querySelector(`[data-slot="input-group-addon"] svg`);await C(i).toHaveAttribute(`aria-hidden`,`true`),await T.click(r),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(O.length)),await E(()=>k(e)),await C(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await C(document.body.querySelector(`[data-slot="combobox-item-indicator"]`)).not.toBeInTheDocument(),await T.type(r,`co`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(2)),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await T.click(n.getByRole(`option`,{name:`Colorado`})),await E(()=>C(r).toHaveValue(`Colorado`)),await T.click(await t.findByRole(`button`,{name:/clear/i})),await E(()=>C(r).toHaveValue(``)),await C(r).toHaveFocus(),await T.keyboard(`{ArrowDown}`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(O.length)),await C(n.getByRole(`option`,{name:`Colorado`})).not.toHaveAttribute(`aria-selected`,`true`),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},j={render:()=>(0,S.jsxs)(b.Root,{items:O,children:[(0,S.jsx)(b.Input,{variant:`plain`,placeholder:`State`,"aria-label":`State`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:`State`});await C(e.querySelector(`svg`)).not.toBeInTheDocument();let i=e.querySelector(`[data-slot="combobox-field"]`);await C(getComputedStyle(i).paddingLeft).toBe(`16px`),await T.type(r,`tex`),await E(()=>k(e)),await T.click(await n.findByRole(`option`,{name:`Texas`})),await E(()=>C(r).toHaveValue(`Texas`)),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},M={render:()=>(0,S.jsxs)(b.Root,{items:O,children:[(0,S.jsx)(b.Input,{variant:`select`,placeholder:`Choose a state`,"aria-label":`State`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await C(i).toHaveAttribute(`aria-expanded`,`false`),await T.click(i),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(O.length)),await C(i).toHaveAttribute(`aria-expanded`,`true`),await E(()=>k(e)),await T.click(i),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(i).toHaveAttribute(`aria-expanded`,`false`),await T.click(i),await T.click(await n.findByRole(`option`,{name:`Florida`})),await E(()=>C(r).toHaveValue(`Florida`)),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},N={render:()=>(0,S.jsxs)(b.Root,{items:O,defaultValue:`Florida`,children:[(0,S.jsx)(b.Input,{variant:`select`,showClear:!0,placeholder:`Choose a state`,"aria-label":`State`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`combobox`,{name:`State`}),r=e.querySelector(`[data-slot="combobox-trigger"]`);await C(r).not.toBeVisible(),await T.click(t.getByRole(`button`,{name:/clear/i})),await E(()=>C(n).toHaveValue(``)),await C(n).toHaveFocus(),await T.keyboard(`{Escape}`),await E(()=>C(D(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C(r).toBeVisible()}},P={render:()=>(0,S.jsxs)(b.Root,{items:O,defaultValue:`Florida`,disabled:!0,children:[(0,S.jsx)(b.Input,{variant:`select`,showClear:!0,"aria-label":`State`}),(0,S.jsx)(b.Content,{children:(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`button`,{name:`Show options`});await C(t.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C(n).toBeVisible(),await C(n).toBeDisabled()}},F={render:()=>(0,S.jsxs)(re,{readOnly:!0,children:[(0,S.jsx)(h,{children:`State`}),(0,S.jsxs)(b.Root,{items:O,defaultValue:`Texas`,children:[(0,S.jsx)(b.Input,{variant:`select`,showClear:!0}),(0,S.jsx)(b.Content,{children:(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C(i).toBeVisible(),await T.click(i),await E(()=>C(n.getByRole(`listbox`)).toBeInTheDocument()),await T.click(n.getByRole(`option`,{name:`Florida`})),await C(r).toHaveValue(`Texas`)}},I={tags:[`!manifest`],args:{onOpenChange:w()},render:e=>(0,S.jsxs)(b.Root,{items:O,defaultValue:`Florida`,onOpenChange:e.onOpenChange,children:[(0,S.jsx)(b.Input,{variant:`select`,showClear:!0,disabled:!0,"aria-label":`State`}),(0,S.jsx)(b.Content,{children:(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})})]}),play:async({args:e,canvasElement:t})=>{let n=D(t),r=n.getByRole(`button`,{name:`Show options`});await C(n.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C(r).toBeVisible(),await C(r).toBeDisabled(),await T.click(r),await T.click(t.querySelector(`[data-slot="combobox-field"]`)),await C(e.onOpenChange).not.toHaveBeenCalled(),await C(n.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`)}},L={render:()=>(0,S.jsxs)(b.Root,{items:O,children:[(0,S.jsx)(b.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body);await T.type(t.getByRole(`combobox`,{name:/search states/i}),`zzz`),await C(await n.findByText(/no matches found/i)).toBeInTheDocument(),await C(n.queryByRole(`option`)).not.toBeInTheDocument()}},R={render:()=>{let[e,t]=(0,x.useState)([]);return(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsxs)(b.Root,{items:O,multiple:!0,value:e,onValueChange:t,children:[(0,S.jsx)(b.Input,{placeholder:`Assign states`,"aria-label":`Assign states`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{"aria-label":`States`,children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),e.length>0&&(0,S.jsx)(`ul`,{"aria-label":`Selected states`,className:`flex flex-wrap gap-2`,children:e.map(e=>(0,S.jsx)(`li`,{children:(0,S.jsx)(oe,{size:`sm`,children:e})},e))})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/assign states/i});await T.type(r,`co`);let i=await n.findByRole(`listbox`,{name:`States`});await C(i).toHaveAttribute(`aria-multiselectable`,`true`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(2));let a=n.getByRole(`option`,{name:`Colorado`}),o=a.querySelector(`[data-slot="combobox-item-indicator"]`);await C(o).toBeInTheDocument(),await C(o).not.toHaveAttribute(`data-selected`),await C(a).toHaveAttribute(`aria-selected`,`false`),await T.keyboard(`{Enter}`),await E(()=>C(a).toHaveAttribute(`aria-selected`,`true`)),await C(o).toHaveAttribute(`data-selected`),await C(r).toHaveValue(`co`),await C(n.getByRole(`listbox`,{name:`States`})).toBeInTheDocument(),await C(D(t.getByRole(`list`,{name:/selected states/i})).getByText(`Colorado`)).toBeInTheDocument(),await T.click(n.getByRole(`option`,{name:`Connecticut`})),await E(()=>C(n.getByRole(`option`,{name:`Connecticut`})).toHaveAttribute(`aria-selected`,`true`)),await C(a).toHaveAttribute(`aria-selected`,`true`),await C(r).toHaveValue(`co`),await C(t.getAllByRole(`listitem`)).toHaveLength(2),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C(e.querySelector(`[data-slot="combobox-trigger"]`)).not.toBeInTheDocument(),await T.click(a),await E(()=>C(a).toHaveAttribute(`aria-selected`,`false`)),await C(o).not.toHaveAttribute(`data-selected`),await C(t.getAllByRole(`listitem`)).toHaveLength(1),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},z=[{id:`acme`,name:`Acme Insurance`,state:`CA`},{id:`anchor`,name:`Anchor Brokers`,state:`TX`},{id:`beacon`,name:`Beacon Risk`,state:`NY`},{id:`cardinal`,name:`Cardinal Agency`,state:`FL`}],B=e=>new Promise(t=>{setTimeout(()=>t(z.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),800)}),V=2,H={render:()=>{let[e,t]=(0,x.useState)([]),[n,r]=(0,x.useState)(!1),i=(0,x.useRef)(0),a=(0,x.useRef)(null);return(0,S.jsxs)(b.Root,{items:e,filteredItems:e,filter:null,minInputLength:V,loading:n,loadingLabel:`Searching agencies…`,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,onInputValueChange:async(e,{reason:n})=>{let o=++i.current;if(e.trim().length<V){t([]),r(!1),a.current=null;return}let s=e.toLowerCase(),c=n===`input-change`;if(c&&a.current!==null&&s.includes(a.current)){t([]),r(!1);return}r(!0);let l=await B(e);o===i.current&&(c&&l.length===0&&(a.current=s),t(l),r(!1))},onOpenChange:e=>{e||(a.current=null)},children:[(0,S.jsx)(b.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Skeleton,{}),(0,S.jsx)(b.Empty,{children:`No agencies found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e.name},e.id)})]})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=e.querySelector(`[data-slot="combobox-loading"]`);await C(i).toBeInTheDocument(),await C(i).toBeEmptyDOMElement(),await T.click(r),await T.type(r,`a`),await C(r).toHaveAttribute(`aria-expanded`,`false`),await C(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await T.type(r,`n`);let a=(await E(()=>{let e=document.body.querySelector(`[data-slot="combobox-skeleton"] > div`);return C(e).toBeInTheDocument(),e}))?.getBoundingClientRect().height;await E(()=>C(i).toHaveTextContent(/searching agencies/i));let o=document.body.querySelector(`[data-slot="combobox-content"]`);await C(o).toHaveAttribute(`aria-busy`,`true`);let s=n.getAllByRole(`status`).filter(e=>e.textContent?.trim());await C(s).toHaveLength(1),await C(s).toEqual([i]),await C(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await C(n.queryByRole(`option`)).not.toBeInTheDocument(),await E(()=>C(n.getAllByRole(`option`).length).toBeGreaterThan(0)),await C(n.getAllByRole(`option`)[0]?.getBoundingClientRect().height).toBe(a),await C(o).not.toHaveAttribute(`aria-busy`),await E(()=>C(n.getAllByRole(`option`)[0]).toHaveAttribute(`data-highlighted`)),await C(n.queryByText(/searching agencies/i)).not.toBeInTheDocument(),await C(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument();let c=n.getAllByRole(`option`).length;await T.type(r,`ch`),await C(o).toHaveAttribute(`aria-busy`,`true`),await E(()=>C(i).toHaveTextContent(/searching agencies/i)),await C(n.getAllByRole(`option`)).toHaveLength(c),await C(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument(),await C(n.getAllByRole(`option`)[0]).toHaveAttribute(`data-highlighted`),await T.keyboard(`{Enter}`),await C(r).toHaveValue(`anch`),await C(r).toHaveAttribute(`aria-expanded`,`true`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(1)),await C(o).not.toHaveAttribute(`aria-busy`);let l=[],u=new MutationObserver(e=>{for(let{target:t,addedNodes:n}of e)if(t instanceof Element&&t.closest(`[data-slot="combobox-empty"]`))for(let e of n)e.textContent&&l.push(e.textContent)});u.observe(document.body,{childList:!0,subtree:!0}),await T.type(r,`{Backspace}{Backspace}{Backspace}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),u.disconnect(),await C(l).toEqual([]),await C(r).toHaveAttribute(`aria-expanded`,`false`),await C(r).toHaveValue(`a`),await T.type(r,`zz`);let d=document.body.querySelector(`[data-slot="combobox-content"]`),f=()=>document.body.querySelector(`[data-slot="combobox-skeleton"]`);await C(d).toHaveAttribute(`aria-busy`,`true`),await C(f()).toBeInTheDocument(),await C(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await C(await n.findByText(/no agencies found/i,{},{timeout:2e3})).toBeVisible(),await C(d).not.toHaveAttribute(`aria-busy`);let p=document.body.querySelector(`[data-slot="combobox-empty"]`),m=p?.firstChild;await T.type(r,`x`),await C(d).not.toHaveAttribute(`aria-busy`),await C(n.getByText(/no agencies found/i)).toBeVisible(),await C(p?.firstChild).toBe(m),await T.type(r,`{Backspace}{Backspace}`),await C(r).toHaveValue(`az`),await C(d).toHaveAttribute(`aria-busy`,`true`),await C(n.getByText(/no agencies found/i)).toBeVisible(),await C(f()).not.toBeInTheDocument(),await C(p?.firstChild).toBe(m),await E(()=>C(d).not.toHaveAttribute(`aria-busy`),{timeout:2e3}),await C(n.getByText(/no agencies found/i)).toBeVisible(),await C(p?.firstChild).not.toBe(m),await T.type(r,`{Backspace}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await T.type(r,`nch`),await T.click(await n.findByRole(`option`,{name:`Anchor Brokers`})),await E(()=>C(r).toHaveValue(`Anchor Brokers`)),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},U={render:()=>{let[e,t]=(0,x.useState)([]),[n,r]=(0,x.useState)(!1),i=(0,x.useRef)(0);return(0,S.jsxs)(b.Root,{items:e,filteredItems:e,filter:null,minInputLength:V,loading:n,loadingLabel:`Searching agencies…`,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,onInputValueChange:async e=>{let n=++i.current;if(e.trim().length<V){t([]),r(!1);return}r(!0);let a=await B(e);n===i.current&&(t(a),r(!1))},children:[(0,S.jsx)(b.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Skeleton,{children:e=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{className:`size-6 shrink-0 rounded-[38.5%]`}),(0,S.jsx)(_,{className:e%2==0?`h-4 w-2/5`:`h-4 w-3/5`}),(0,S.jsx)(_,{className:`ml-auto h-3 w-6 shrink-0`})]})}),(0,S.jsx)(b.Empty,{children:`No agencies found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsxs)(b.Item,{value:e,className:`gap-2`,children:[(0,S.jsx)(ce,{fallback:e.name.split(` `).map(e=>e[0]).join(``),size:`xs`,variant:`pillow`,"aria-hidden":`true`}),(0,S.jsx)(`span`,{className:`truncate`,children:e.name}),(0,S.jsx)(`span`,{className:`ml-auto text-xs text-text-default-base-secondary`,children:e.state})]},e.id)})]})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i});await T.type(r,`an`);let i=await E(()=>{let e=document.body.querySelectorAll(`[data-slot="combobox-skeleton"] > div`);return C(e).toHaveLength(5),e});await C(i[0]?.children).toHaveLength(3);let a=i[0]?.getBoundingClientRect().height,o=await n.findByRole(`option`,{name:/acme insurance/i},{timeout:2e3});await C(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument(),await C(o.getBoundingClientRect().height).toBe(a),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},W={tags:[`!manifest`],render:()=>{let[e,t]=(0,x.useState)([]),[n,r]=(0,x.useState)(!1),i=(0,x.useRef)(void 0),a=(0,x.useRef)(0),o=(0,x.useRef)(new Map);return(0,S.jsxs)(b.Root,{items:e,filteredItems:e,filter:null,minInputLength:V,loading:n,itemToStringLabel:e=>e.name,onInputValueChange:e=>{let n=++a.current;clearTimeout(i.current);let s=o.current.get(e);if(e.trim().length<V||s){t(s??[]),r(!1);return}i.current=setTimeout(async()=>{t([]),r(!0);let i=await B(e);n===a.current&&(o.current.set(e,i),t(i),r(!1))},300)},children:[(0,S.jsx)(b.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Skeleton,{}),(0,S.jsx)(b.Empty,{children:`No agencies found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e.name},e.id)})]})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=()=>document.body.querySelector(`[data-slot="combobox-content"][aria-busy="true"]`),a=()=>document.body.querySelector(`[data-slot="combobox-skeleton"]`);await T.type(r,`an`),await E(()=>C(i()).toBeInTheDocument()),await C(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await C(a()).toBeInTheDocument(),await E(()=>C(n.getAllByRole(`option`).length).toBeGreaterThan(0),{timeout:2e3}),await T.type(r,`zz`),await C(n.getAllByRole(`option`).length).toBeGreaterThan(0),await E(()=>C(i()).toBeInTheDocument()),await C(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await C(a()).toBeInTheDocument(),await C(await n.findByText(/no agencies found/i,{},{timeout:2e3})).toBeVisible(),await T.type(r,`{Backspace}{Backspace}`),await E(()=>C(n.getAllByRole(`option`).length).toBeGreaterThan(0)),await C(i()).not.toBeInTheDocument(),await T.type(r,`c`),await E(()=>C(i()).toBeInTheDocument()),await C(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await C(a()).toBeInTheDocument(),await E(()=>C(n.getAllByRole(`option`).length).toBeGreaterThan(0),{timeout:2e3}),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},G=()=>{let[e,t]=(0,x.useState)();return{onSubmit:e=>{e.preventDefault();let n=String(new FormData(e.currentTarget).get(`state`)??``);t(e=>({count:(e?.count??0)+1,state:n}))},status:e?`Submitted ${e.count}× — state: ${e.state||`none`}`:`Not submitted`}},K={render:()=>{let{onSubmit:e,status:t}=G();return(0,S.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,onSubmit:e,children:[(0,S.jsxs)(b.Root,{items:O,name:`state`,children:[(0,S.jsx)(b.Input,{placeholder:`Search states`,"aria-label":`State`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),(0,S.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,S.jsx)(i,{type:`submit`,children:`Save`}),(0,S.jsx)(`p`,{role:`status`,className:`text-sm text-text-default-base-secondary`,children:t})]})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`status`);await T.click(r),await E(()=>C(n.getByRole(`option`,{name:`California`})).toHaveAttribute(`data-highlighted`)),await T.type(r,`co`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(2)),await C(n.getByRole(`option`,{name:`Colorado`})).toHaveAttribute(`data-highlighted`),await T.keyboard(`{Enter}`),await E(()=>C(r).toHaveValue(`Colorado`)),await C(i).toHaveTextContent(`Not submitted`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await T.keyboard(`{Enter}`),await C(i).toHaveTextContent(`Submitted 1× — state: Colorado`),await T.clear(r),await T.type(r,`zz`),await E(()=>C(n.getByText(`No matches found`)).toBeVisible()),await T.keyboard(`{Enter}`),await C(i).toHaveTextContent(`Submitted 1× — state: Colorado`),await C(r).toHaveValue(`zz`),await C(r).toHaveAttribute(`aria-expanded`,`true`),await T.keyboard(`{Meta>}{Enter}{/Meta}`),await C(i).toHaveTextContent(/Submitted 2×/),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},q={render:()=>{let{onSubmit:e,status:t}=G();return(0,S.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,onSubmit:e,children:[(0,S.jsxs)(b.Root,{items:O,name:`state`,autoHighlight:!1,children:[(0,S.jsx)(b.Input,{submitOnEnter:!0,placeholder:`Search states`,"aria-label":`State`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),(0,S.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,S.jsx)(i,{type:`submit`,children:`Save`}),(0,S.jsx)(`p`,{role:`status`,className:`text-sm text-text-default-base-secondary`,children:t})]})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`status`);await T.click(r),await T.type(r,`co`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(2)),await T.keyboard(`{Enter}`),await C(i).toHaveTextContent(`Submitted 1× — state: none`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(r).not.toHaveValue(`Colorado`)}},J={render:()=>(0,S.jsxs)(re,{invalid:!0,required:!0,children:[(0,S.jsx)(h,{children:`Agency`}),(0,S.jsxs)(b.Root,{items:O,children:[(0,S.jsx)(b.Input,{placeholder:`Search agencies`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]}),(0,S.jsx)(g.Description,{children:`The agency this agent will be added to.`}),(0,S.jsx)(g.Error,{errors:[{message:`Pick an agency from the list`}]})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`combobox`,{name:`Agency`});await C(n).toHaveAttribute(`data-slot`,`combobox-input`),await C(n).toBeRequired(),await C(n).toHaveAttribute(`aria-invalid`,`true`),await C(n).toHaveAccessibleDescription(`The agency this agent will be added to. Pick an agency from the list`);let r=t.getByText(`Agency`).closest(`label`);await C(r).toHaveAttribute(`id`),await C(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await T.click(n),await D(document.body).findByRole(`listbox`),await C(n).toHaveAccessibleName(`Agency`),await T.keyboard(`{Escape}`),await E(()=>C(D(document.body).queryByRole(`listbox`)).not.toBeInTheDocument())}},Y={render:e=>(0,S.jsxs)(v.Root,{children:[(0,S.jsx)(v.Trigger,{asChild:!0,children:(0,S.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,S.jsxs)(v.Content,{children:[(0,S.jsx)(v.Title,{children:`Assign agency`}),(0,S.jsx)(v.Body,{children:(0,S.jsxs)(b.Root,{...e,items:O,children:[(0,S.jsx)(b.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]})})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body);await T.click(t.getByRole(`button`,{name:/assign agency/i}));let r=await n.findByRole(`dialog`,{name:/assign agency/i}),i=D(r).getByRole(`combobox`,{name:/search states/i});await T.click(i),await T.type(i,`flo`);let a=await n.findByRole(`option`,{name:`Florida`});await T.click(a),await E(()=>C(i).toHaveValue(`Florida`)),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(r).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{ArrowDown}`),await n.findByRole(`listbox`),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(i).toHaveValue(`Florida`),await C(r).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await C(i).toHaveValue(``),await C(r).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await E(()=>C(r).toHaveAttribute(`data-state`,`closed`))}},X={...Y,tags:[`!manifest`],args:{multiple:!0,defaultValue:[`Colorado`,`Texas`],minInputLength:2,onValueChange:w()},play:async({args:e,canvasElement:t})=>{let n=D(t),r=D(document.body);await T.click(n.getByRole(`button`,{name:/assign agency/i}));let i=await r.findByRole(`dialog`,{name:/assign agency/i}),a=D(i).getByRole(`combobox`,{name:/search states/i});await T.type(a,`c`),await C(r.queryByRole(`listbox`)).not.toBeInTheDocument(),await T.keyboard(`{Escape}`),await C(a).toHaveValue(``),await C(i).toHaveAttribute(`data-state`,`open`),await T.type(a,`xas`),await C(await r.findByRole(`option`,{name:`Texas`})).toHaveAttribute(`aria-selected`,`true`),await T.keyboard(`{Escape}`),await E(()=>C(r.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(i).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await E(()=>C(i).toHaveAttribute(`data-state`,`closed`)),await C(e.onValueChange).not.toHaveBeenCalled()}},Z={render:()=>(0,S.jsxs)(y.Root,{children:[(0,S.jsx)(y.Trigger,{asChild:!0,children:(0,S.jsx)(i,{variant:`secondary`,children:`Filter by state`})}),(0,S.jsx)(y.Content,{"aria-label":`Filter by state`,children:(0,S.jsxs)(b.Root,{items:O,children:[(0,S.jsx)(b.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,S.jsxs)(b.Content,{children:[(0,S.jsx)(b.Empty,{children:`No matches found`}),(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})]})]})})]}),play:async({canvasElement:e})=>{let t=D(document.body),n=D(e).getByRole(`button`,{name:/filter by state/i});await T.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await T.click(r),await t.findByRole(`listbox`),await T.keyboard(`{Escape}`),await E(()=>C(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(n).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await E(()=>C(n).toHaveAttribute(`data-state`,`closed`))}},Q={render:Z.render,play:async({canvasElement:e})=>{let t=D(document.body),n=D(e).getByRole(`button`,{name:/filter by state/i});await T.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await T.click(r),await T.click(await t.findByRole(`option`,{name:`Texas`})),await E(()=>C(r).toHaveValue(`Texas`)),await T.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await T.keyboard(`{Escape}`),await E(()=>C(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(r).toHaveValue(`Texas`),await T.keyboard(`{Escape}`),await C(r).toHaveValue(``),await C(n).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await E(()=>C(n).toHaveAttribute(`data-state`,`closed`))}},$={render:()=>(0,S.jsxs)(v.Root,{children:[(0,S.jsx)(v.Trigger,{asChild:!0,children:(0,S.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,S.jsxs)(v.Content,{children:[(0,S.jsx)(v.Title,{children:`Assign agency`}),(0,S.jsx)(v.Body,{children:(0,S.jsxs)(b.Root,{items:O,children:[(0,S.jsx)(b.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,S.jsx)(b.Content,{children:(0,S.jsx)(b.List,{children:e=>(0,S.jsx)(b.Item,{value:e,children:e},e)})})]})})]})]}),play:async({canvasElement:e})=>{let t=D(document.body);await T.click(D(e).getByRole(`button`,{name:/assign agency/i}));let n=await t.findByRole(`dialog`,{name:/assign agency/i}),r=D(n).getByRole(`combobox`,{name:/search states/i});await T.type(r,`zzz`),await C(t.queryByRole(`option`)).not.toBeInTheDocument(),await C(document.querySelector(`[data-slot="combobox-content"]`)).not.toBeVisible(),await T.keyboard(`{Escape}`),await E(()=>C(n).toHaveAttribute(`data-state`,`closed`))}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"`disabled` goes on `Root`, or on the surrounding `FieldText`. The field keeps\nits value, shows no clear button, and its chevron is disabled, so the list\ncannot open.\n\n@summary Disabled field that keeps its value",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"`readOnly` goes on `Root`, or on the surrounding `FieldText` as here. It locks\nthe value, not the list: there is no clear button, but the chevron still\nopens the list to browse it, and picking a row leaves the value as it was.\n\n@summary Read-only field whose list can be browsed but not picked from",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: \`disabled\` passed to the input
alone, not to \`Root\`, still hides the clear button and disables the chevron,
and a press on the frame does not open the list, so the value cannot change.

@summary Chevron disabled when only the input is disabled`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"`Empty` stays mounted so screen readers announce the change; it renders its\nchildren only while nothing matches. It needs `items` on `Root` to know that.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Several values from one list, the way Lines of Authority or locations are
assigned: each row leads with a checkbox-shaped indicator, picking a row toggles
it, and the list stays open with the query intact so the next pick is one click
away. The input never shows the selection; the field renders it alongside,
here as tags.`,...R.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [results, setResults] = useState<Agency[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    // Only the latest request may land; fast typing returns responses out of order.
    const latestRequest = useRef(0);
    // The last query that came back with no rows, while the list stays open. This search matches
    // substrings, so a query that contains it has none either and is not sent. A search that
    // corrects typos, such as an address lookup, can find rows for a longer query and has to ask
    // every time.
    const noRowsFor = useRef<string | null>(null);
    const onInputValueChange = async (query: string, {
      reason
    }: {
      reason: string;
    }) => {
      const request = ++latestRequest.current;
      if (query.trim().length < MIN_QUERY_LENGTH) {
        setResults([]);
        setIsLoading(false);
        noRowsFor.current = null;
        return;
      }

      // Compared as sent, case aside: the search does not trim, so \`risk \` can come back empty
      // while \`risk\` finds Beacon Risk. Only what the user types counts; the label written back
      // after a pick is not a search of theirs.
      const term = query.toLowerCase();
      const typed = reason === 'input-change';
      if (typed && noRowsFor.current !== null && term.includes(noRowsFor.current)) {
        setResults([]);
        setIsLoading(false);
        return;
      }

      // The previous answer stays through the wait, marked busy, rather than blinking out and back.
      setIsLoading(true);
      const agencies = await searchAgencies(query);
      if (request !== latestRequest.current) return;
      if (typed && agencies.length === 0) noRowsFor.current = term;
      setResults(agencies);
      setIsLoading(false);
    };
    return (
      // \`filter={null}\` hands filtering to the server; \`filteredItems\` is what came back.
      <Combobox.Root items={results} filteredItems={results} filter={null} minInputLength={MIN_QUERY_LENGTH} loading={isLoading} loadingLabel="Searching agencies…" itemToStringLabel={(agency: Agency) => agency.name} isItemEqualToValue={(a: Agency, b: Agency) => a.id === b.id} onInputValueChange={onInputValueChange} onOpenChange={open => {
        if (!open) noRowsFor.current = null;
      }}>
                <Combobox.Input placeholder="Search agencies" aria-label="Search agencies" />
                <Combobox.Content>
                    <Combobox.Skeleton />
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
    const placeholder = await waitFor(() => {
      const row = document.body.querySelector('[data-slot="combobox-skeleton"] > div');
      expect(row).toBeInTheDocument();
      return row;
    });
    const placeholderHeight = placeholder?.getBoundingClientRect().height;

    // One live region speaks for the wait; the placeholder rows and \`Empty\` stay silent.
    await waitFor(() => expect(region).toHaveTextContent(/searching agencies/i));
    const content = document.body.querySelector('[data-slot="combobox-content"]');
    await expect(content).toHaveAttribute('aria-busy', 'true');
    const speaking = body.getAllByRole('status').filter(status => status.textContent?.trim());
    await expect(speaking).toHaveLength(1);
    await expect(speaking).toEqual([region]);
    await expect(body.queryByText(/no agencies found/i)).not.toBeInTheDocument();
    await expect(body.queryByRole('option')).not.toBeInTheDocument();
    // The placeholder rows are as tall as the rows that replace them.
    await waitFor(() => expect(body.getAllByRole('option').length).toBeGreaterThan(0));
    await expect(body.getAllByRole('option')[0]?.getBoundingClientRect().height).toBe(placeholderHeight);
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
    // The highlighted row answers the previous query, so Enter waits for the new one.
    await expect(body.getAllByRole('option')[0]).toHaveAttribute('data-highlighted');
    await userEvent.keyboard('{Enter}');
    await expect(input).toHaveValue('anch');
    await expect(input).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
    await expect(content).not.toHaveAttribute('aria-busy');

    // Deleting back under the minimum closes the list. The search clears its rows on that same
    // keystroke, and the closing list never says "no agencies found" on its way out.
    // From the records, not the live DOM: text added and cleared before the callback runs counts too.
    const emptyShown: string[] = [];
    const watcher = new MutationObserver(records => {
      for (const {
        target,
        addedNodes
      } of records) {
        if (!(target instanceof Element) || !target.closest('[data-slot="combobox-empty"]')) continue;
        for (const node of addedNodes) if (node.textContent) emptyShown.push(node.textContent);
      }
    });
    watcher.observe(document.body, {
      childList: true,
      subtree: true
    });
    await userEvent.type(input, '{Backspace}{Backspace}{Backspace}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    watcher.disconnect();
    await expect(emptyShown).toEqual([]);
    await expect(input).toHaveAttribute('aria-expanded', 'false');
    // What is left of the query stays: the user is still typing it.
    await expect(input).toHaveValue('a');

    // An answer with no rows still says so, once it lands. It is the first answer since the list
    // opened, so the placeholder rows hold the wait.
    await userEvent.type(input, 'zz');
    const surface = document.body.querySelector('[data-slot="combobox-content"]');
    const skeleton = () => document.body.querySelector('[data-slot="combobox-skeleton"]');
    await expect(surface).toHaveAttribute('aria-busy', 'true');
    await expect(skeleton()).toBeInTheDocument();
    await expect(body.queryByText(/no agencies found/i)).not.toBeInTheDocument();
    await expect(await body.findByText(/no agencies found/i, {}, {
      timeout: 2000
    })).toBeVisible();
    await expect(surface).not.toHaveAttribute('aria-busy');
    const empty = document.body.querySelector('[data-slot="combobox-empty"]');
    const message = empty?.firstChild;

    // A query that contains one with no rows has none either, so it is not sent: nothing waits.
    await userEvent.type(input, 'x');
    await expect(surface).not.toHaveAttribute('aria-busy');
    await expect(body.getByText(/no agencies found/i)).toBeVisible();
    await expect(empty?.firstChild).toBe(message);

    // One that does not contain it is sent. The message stays through the wait, marked busy, with
    // no placeholder rows. Once the answer lands it is written in again, so the live region reads
    // it out again.
    await userEvent.type(input, '{Backspace}{Backspace}');
    await expect(input).toHaveValue('az');
    await expect(surface).toHaveAttribute('aria-busy', 'true');
    await expect(body.getByText(/no agencies found/i)).toBeVisible();
    await expect(skeleton()).not.toBeInTheDocument();
    await expect(empty?.firstChild).toBe(message);
    await waitFor(() => expect(surface).not.toHaveAttribute('aria-busy'), {
      timeout: 2000
    });
    await expect(body.getByText(/no agencies found/i)).toBeVisible();
    await expect(empty?.firstChild).not.toBe(message);
    await userEvent.type(input, '{Backspace}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await userEvent.type(input, 'nch');
    await userEvent.click(await body.findByRole('option', {
      name: 'Anchor Brokers'
    }));
    await waitFor(() => expect(input).toHaveValue('Anchor Brokers'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...H.parameters?.docs?.source},description:{story:'Options fetched from an API as you type: `filter={null}`, the rows arrive\nthrough `items` and `filteredItems`, and the data layer\'s `loading` flag goes\nto `Root`. That is all the wiring the wait needs:\n`Content` is marked busy, `loadingLabel` is announced once when the request\nstarts, and `Empty` holds back "no results" until the answer is in.\n`Skeleton` draws placeholder rows while there is nothing else to show, hidden\nfrom assistive technology since the label already speaks for them. After the\nfirst answer, the previous one stays until the next replaces it, whether it\nhad rows or none. A request that is no longer the latest is dropped.\n\nThis search matches substrings, so a query that contains one with no rows is\nnot sent: it cannot find any either. Leave that out for a search that\ncorrects typos, such as an address lookup.\n\n`minInputLength` keeps the list shut until two characters are typed — focusing\nthe field opens nothing, and deleting back under the minimum closes it — and\nno request goes out for a shorter query either.\n\n@summary API search that waits for two characters and announces its loading state',...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [results, setResults] = useState<Agency[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const latestRequest = useRef(0);
    const onInputValueChange = async (query: string) => {
      const request = ++latestRequest.current;
      if (query.trim().length < MIN_QUERY_LENGTH) {
        setResults([]);
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      const agencies = await searchAgencies(query);
      if (request !== latestRequest.current) return;
      setResults(agencies);
      setIsLoading(false);
    };
    return <Combobox.Root items={results} filteredItems={results} filter={null} minInputLength={MIN_QUERY_LENGTH} loading={isLoading} loadingLabel="Searching agencies…" itemToStringLabel={(agency: Agency) => agency.name} isItemEqualToValue={(a: Agency, b: Agency) => a.id === b.id} onInputValueChange={onInputValueChange}>
                <Combobox.Input placeholder="Search agencies" aria-label="Search agencies" />
                <Combobox.Content>
                    <Combobox.Skeleton>
                        {index => <>
                                <Skeleton className="size-6 shrink-0 rounded-[38.5%]" />
                                <Skeleton className={index % 2 === 0 ? 'h-4 w-2/5' : 'h-4 w-3/5'} />
                                <Skeleton className="ml-auto h-3 w-6 shrink-0" />
                            </>}
                    </Combobox.Skeleton>
                    <Combobox.Empty>No agencies found</Combobox.Empty>
                    <Combobox.List>
                        {(agency: Agency) => <Combobox.Item key={agency.id} value={agency} className="gap-2">
                                <Avatar fallback={agency.name.split(' ').map(word => word[0]).join('')} size="xs" variant="pillow" aria-hidden="true" />
                                <span className="truncate">{agency.name}</span>
                                <span className="ml-auto text-xs text-text-default-base-secondary">
                                    {agency.state}
                                </span>
                            </Combobox.Item>}
                    </Combobox.List>
                </Combobox.Content>
            </Combobox.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: /search agencies/i
    });

    // While the first search runs, each placeholder row holds an avatar, a name and a state.
    await userEvent.type(input, 'an');
    const rows = await waitFor(() => {
      const placeholders = document.body.querySelectorAll('[data-slot="combobox-skeleton"] > div');
      expect(placeholders).toHaveLength(5);
      return placeholders;
    });
    await expect(rows[0]?.children).toHaveLength(3);
    const rowHeight = rows[0]?.getBoundingClientRect().height;

    // The agency rows replace them at the same height.
    const acme = await body.findByRole('option', {
      name: /acme insurance/i
    }, {
      timeout: 2000
    });
    await expect(document.body.querySelector('[data-slot="combobox-skeleton"]')).not.toBeInTheDocument();
    await expect(acme.getBoundingClientRect().height).toBe(rowHeight);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...U.parameters?.docs?.source},description:{story:`Placeholder rows shaped like the rows that replace them. Each agency row
shows an avatar, the name and its state, so \`Skeleton\` gets the same three
pieces as its children; as a function, it receives the row's index to vary
the name's width. Its rows take an item's padding, so they come out as tall as
the agency rows and the surface keeps its size when the results land.

@summary Placeholder rows shaped like the results they stand in for`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => {
    const [results, setResults] = useState<Agency[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const pending = useRef<ReturnType<typeof setTimeout>>(undefined);
    const latestRequest = useRef(0);
    const cache = useRef(new Map<string, Agency[]>());
    const onInputValueChange = (query: string) => {
      const request = ++latestRequest.current;
      clearTimeout(pending.current);
      const cached = cache.current.get(query);
      if (query.trim().length < MIN_QUERY_LENGTH || cached) {
        setResults(cached ?? []);
        setIsLoading(false);
        return;
      }
      pending.current = setTimeout(async () => {
        setResults([]);
        setIsLoading(true);
        const agencies = await searchAgencies(query);
        if (request !== latestRequest.current) return;
        cache.current.set(query, agencies);
        setResults(agencies);
        setIsLoading(false);
      }, 300);
    };
    return <Combobox.Root items={results} filteredItems={results} filter={null} minInputLength={MIN_QUERY_LENGTH} loading={isLoading} itemToStringLabel={(agency: Agency) => agency.name} onInputValueChange={onInputValueChange}>
                <Combobox.Input placeholder="Search agencies" aria-label="Search agencies" />
                <Combobox.Content>
                    <Combobox.Skeleton />
                    <Combobox.Empty>No agencies found</Combobox.Empty>
                    <Combobox.List>
                        {(agency: Agency) => <Combobox.Item key={agency.id} value={agency}>
                                {agency.name}
                            </Combobox.Item>}
                    </Combobox.List>
                </Combobox.Content>
            </Combobox.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: /search agencies/i
    });
    const busy = () => document.body.querySelector('[data-slot="combobox-content"][aria-busy="true"]');
    const skeleton = () => document.body.querySelector('[data-slot="combobox-skeleton"]');

    // The first request starts after the list has opened; its wait says nothing.
    await userEvent.type(input, 'an');
    await waitFor(() => expect(busy()).toBeInTheDocument());
    await expect(body.queryByText(/no agencies found/i)).not.toBeInTheDocument();
    await expect(skeleton()).toBeInTheDocument();
    await waitFor(() => expect(body.getAllByRole('option').length).toBeGreaterThan(0), {
      timeout: 2000
    });

    // The next one clears the rows that answered once it starts: still nothing to say while it
    // runs. Until then, the rows stay. Its answer has none, and says so.
    await userEvent.type(input, 'zz');
    await expect(body.getAllByRole('option').length).toBeGreaterThan(0);
    await waitFor(() => expect(busy()).toBeInTheDocument());
    await expect(body.queryByText(/no agencies found/i)).not.toBeInTheDocument();
    await expect(skeleton()).toBeInTheDocument();
    await expect(await body.findByText(/no agencies found/i, {}, {
      timeout: 2000
    })).toBeVisible();

    // Back to a query already answered: the cache puts its rows back, with no request. A request
    // that clears them says nothing either, though the last answer that landed had no rows.
    await userEvent.type(input, '{Backspace}{Backspace}');
    await waitFor(() => expect(body.getAllByRole('option').length).toBeGreaterThan(0));
    await expect(busy()).not.toBeInTheDocument();
    await userEvent.type(input, 'c');
    await waitFor(() => expect(busy()).toBeInTheDocument());
    await expect(body.queryByText(/no agencies found/i)).not.toBeInTheDocument();
    await expect(skeleton()).toBeInTheDocument();
    await waitFor(() => expect(body.getAllByRole('option').length).toBeGreaterThan(0), {
      timeout: 2000
    });
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...W.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: a search that waits out a
debounce before it asks, then clears its rows and flags \`loading\` together,
and answers a query it has already asked from a cache, with no request.
\`Empty\` keeps "no results" back while each request runs over rows cleared
for it, the first request included, whatever answer came before, and
\`Skeleton\` holds the place instead.

@summary No "no results" while a request runs over rows cleared for it`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      onSubmit,
      status
    } = useSubmissions();
    return <form className="flex flex-col items-start gap-4" onSubmit={onSubmit}>
                <Combobox.Root items={STATES} name="state">
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
                <div className="flex items-center gap-4">
                    <Button type="submit">Save</Button>
                    <p role="status" className="text-sm text-text-default-base-secondary">
                        {status}
                    </p>
                </div>
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'State'
    });
    const status = canvas.getByRole('status');
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
    await expect(status).toHaveTextContent('Not submitted');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());

    // With the list closed, Enter is the form's again.
    await userEvent.keyboard('{Enter}');
    await expect(status).toHaveTextContent('Submitted 1× — state: Colorado');

    // Nothing to pick: Enter leaves the query and the list as they are.
    await userEvent.clear(input);
    await userEvent.type(input, 'zz');
    await waitFor(() => expect(body.getByText('No matches found')).toBeVisible());
    await userEvent.keyboard('{Enter}');
    await expect(status).toHaveTextContent('Submitted 1× — state: Colorado');
    await expect(input).toHaveValue('zz');
    await expect(input).toHaveAttribute('aria-expanded', 'true');

    // A modifier leaves Enter to the form, as Base UI does with a row highlighted.
    await userEvent.keyboard('{Meta>}{Enter}{/Meta}');
    await expect(status).toHaveTextContent(/Submitted 2×/);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
  }
}`,...K.parameters?.docs?.source},description:{story:`Inside a form, Enter in an open list picks the highlighted row instead of
submitting. The first row is highlighted as soon as the list shows one, so
typing a search and pressing Enter picks the top match. With no match, Enter
does nothing. Once the list is closed, Enter submits the form as in any input,
with no value if none was picked: mark the root \`required\` to block that.

@summary Enter picks the highlighted row while the list is open, submits once closed`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      onSubmit,
      status
    } = useSubmissions();
    return <form className="flex flex-col items-start gap-4" onSubmit={onSubmit}>
                <Combobox.Root items={STATES} name="state" autoHighlight={false}>
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
                <div className="flex items-center gap-4">
                    <Button type="submit">Save</Button>
                    <p role="status" className="text-sm text-text-default-base-secondary">
                        {status}
                    </p>
                </div>
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'State'
    });
    const status = canvas.getByRole('status');
    await userEvent.click(input);
    await userEvent.type(input, 'co');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));

    // The typed query is not a value: the form goes out with no state.
    await userEvent.keyboard('{Enter}');
    await expect(status).toHaveTextContent('Submitted 1× — state: none');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(input).not.toHaveValue('Colorado');
  }
}`,...q.parameters?.docs?.source},description:{story:`\`autoHighlight={false}\` on the root and \`submitOnEnter\` on the input bring
back Base UI's defaults: nothing is highlighted until the arrow keys or the
pointer move onto a row, and with no row highlighted, Enter closes the list,
drops the typed query and submits the form. A highlighted row is still picked.

@summary Enter submits the form when no row is highlighted`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:"Dropped into a `FieldText`, the input takes the label, the description and\nthe error from the field with nothing wired by hand: `Combobox.Input` reads the\nsame `InputContext` the plain `Input` does. It also points `aria-labelledby`\nat the label, so the name survives the list opening: Base UI then hides the\nrest of the page from assistive technology, label included, and a\n`<label for>` alone would stop naming the input.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Assign agency</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Assign agency</Modal.Title>
                <Modal.Body>
                    <Combobox.Root {...args} items={STATES}>
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
}`,...Y.parameters?.docs?.source},description:{story:`Inside a \`Modal\`, which is a Radix Dialog. The surface portals to the body, so
this checks that the dialog's modal layer neither blocks pointer events on the
list nor treats a click in it as a click outside and closes. With a value
picked, Escape closes the list, then clears the value, then closes the modal.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  ...InsideModal,
  tags: ['!manifest'],
  args: {
    multiple: true,
    defaultValue: ['Colorado', 'Texas'],
    minInputLength: 2,
    onValueChange: fn()
  },
  play: async ({
    args,
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

    // One character is under the minimum, so the list stays shut with text in the field.
    await userEvent.type(input, 'c');
    await expect(body.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(input).toHaveValue('');
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.type(input, 'xas');
    await expect(await body.findByRole('option', {
      name: 'Texas'
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...X.parameters?.docs?.source},description:{story:`Regression check, kept out of the manifest: a multi-select inside a \`Modal\`.
Escape on the closed list clears a short query and stops there; on the empty
field it closes the modal. Neither touches the selection or calls
\`onValueChange\`.

@summary Escape on a closed multi-select keeps the selection`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Inside a `Modal`, with no `Empty`. When nothing matches there is no list to\nclose, so Base UI lets the first Escape through and it closes the modal.",...$.parameters?.docs?.description}}},fe=[`Default`,`Plain`,`Select`,`SelectWithClear`,`Disabled`,`ReadOnly`,`DisabledOnInput`,`NoMatches`,`MultipleSelection`,`AsyncSearchWithLoading`,`SkeletonShapedLikeTheRows`,`AsyncSearchThatClearsItsRows`,`InsideForm`,`SubmitOnEnter`,`InsideFieldText`,`InsideModal`,`InsideModalMultiple`,`InsidePopover`,`InsidePopoverWithValue`,`InsideModalWithoutEmpty`]})))()}pe();export{W as AsyncSearchThatClearsItsRows,H as AsyncSearchWithLoading,A as Default,P as Disabled,I as DisabledOnInput,J as InsideFieldText,K as InsideForm,Y as InsideModal,X as InsideModalMultiple,$ as InsideModalWithoutEmpty,Z as InsidePopover,Q as InsidePopoverWithValue,R as MultipleSelection,L as NoMatches,j as Plain,F as ReadOnly,M as Select,N as SelectWithClear,U as SkeletonShapedLikeTheRows,q as SubmitOnEnter,fe as __namedExportsOrder,de as default};