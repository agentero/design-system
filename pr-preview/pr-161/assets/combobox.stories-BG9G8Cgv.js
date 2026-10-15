import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Ca7s8WsR.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BiRK7bei.js";import{a,c as o,i as s,n as ee,o as te,r as ne,s as c,t as l}from"./combobox-lSdkti0M.js";import{n as u,t as d}from"./label-Bk7Zw2Tr.js";import{n as f,t as p}from"./field-yGcxREnz.js";import{n as m,t as h}from"./field-text-Co_ZE4f0.js";import{n as re,t as g}from"./modal-DLkzhjiA.js";import{n as ie,t as ae}from"./tag-BtFGLGrS.js";import{n as oe,t as _}from"./popover-DPgkkV1C.js";import{n as se,t as ce}from"./skeleton-DVVxKlZy.js";var v;function y(){return(y=e((()=>{o(),v={Root:te,Input:ne,Content:l,List:a,Item:s,Empty:ee,Status:c}})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{b=t(),y(),r(),f(),m(),u(),re(),oe(),se(),ie(),x=n(),{configure:S,expect:C,getConfig:w,userEvent:T,waitFor:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/Combobox`,component:v.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:`Combobox is a text input that filters a list and writes the chosen option back
into itself. Focusing the input or typing opens the list; picking a row fills the
input and closes it. With \`multiple\` the rows become checkbox-like toggles and the
list stays open between picks. Built on Base UI, whose Combobox primitive owns
the filtering, the keyboard navigation and the \`role="combobox"\` wiring.`}}},decorators:[e=>(0,x.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,x.jsx)(e,{})})]},k=[`California`,`Colorado`,`Connecticut`,`Florida`,`Texas`,`Washington`],A=e=>{let t=e.querySelector(`[data-slot="combobox-field"]`).getBoundingClientRect(),n=document.body.querySelector(`[data-slot="combobox-content"]`).getBoundingClientRect();C(n.width).toBeCloseTo(t.width,0),C(n.left).toBeCloseTo(t.left,0)},j={render:()=>(0,x.jsxs)(v.Root,{items:k,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/search states/i}),i=e.querySelector(`[data-slot="input-group-addon"] svg`);await C(i).toHaveAttribute(`aria-hidden`,`true`),await T.click(r),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(k.length)),await E(()=>A(e)),await C(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await C(document.body.querySelector(`[data-slot="combobox-item-indicator"]`)).not.toBeInTheDocument(),await T.type(r,`co`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(2)),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await T.click(n.getByRole(`option`,{name:`Colorado`})),await E(()=>C(r).toHaveValue(`Colorado`)),await T.click(await t.findByRole(`button`,{name:/clear/i})),await E(()=>C(r).toHaveValue(``)),await C(r).toHaveFocus(),await T.keyboard(`{ArrowDown}`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(k.length)),await C(n.getByRole(`option`,{name:`Colorado`})).not.toHaveAttribute(`aria-selected`,`true`),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},M={render:()=>(0,x.jsxs)(v.Root,{items:k,children:[(0,x.jsx)(v.Input,{variant:`plain`,placeholder:`State`,"aria-label":`State`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:`State`});await C(e.querySelector(`svg`)).not.toBeInTheDocument();let i=e.querySelector(`[data-slot="combobox-field"]`);await C(getComputedStyle(i).paddingLeft).toBe(`16px`),await T.type(r,`tex`),await E(()=>A(e)),await T.click(await n.findByRole(`option`,{name:`Texas`})),await E(()=>C(r).toHaveValue(`Texas`)),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},N={render:()=>(0,x.jsxs)(v.Root,{items:k,children:[(0,x.jsx)(v.Input,{variant:`select`,placeholder:`Choose a state`,"aria-label":`State`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await C(i).toHaveAttribute(`aria-expanded`,`false`),await T.click(i),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(k.length)),await C(i).toHaveAttribute(`aria-expanded`,`true`),await E(()=>A(e)),await T.click(i),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(i).toHaveAttribute(`aria-expanded`,`false`),await T.click(i),await T.click(await n.findByRole(`option`,{name:`Florida`})),await E(()=>C(r).toHaveValue(`Florida`)),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},P={render:()=>(0,x.jsxs)(v.Root,{items:k,defaultValue:`Florida`,children:[(0,x.jsx)(v.Input,{variant:`select`,showClear:!0,placeholder:`Choose a state`,"aria-label":`State`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`combobox`,{name:`State`}),r=e.querySelector(`[data-slot="combobox-trigger"]`);await C(r).not.toBeVisible(),await T.click(t.getByRole(`button`,{name:/clear/i})),await E(()=>C(n).toHaveValue(``)),await C(n).toHaveFocus(),await T.keyboard(`{Escape}`),await E(()=>C(D(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C(r).toBeVisible()}},F={render:()=>(0,x.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,x.jsx)(v.Root,{items:k,defaultValue:`Florida`,children:(0,x.jsx)(v.Input,{disabled:!0,"aria-label":`Search state`})}),(0,x.jsx)(v.Root,{items:k,defaultValue:`Texas`,children:(0,x.jsx)(v.Input,{variant:`select`,showClear:!0,readOnly:!0,"aria-label":`State`})})]}),play:async({canvasElement:e})=>{let t=D(e);await C(t.getByRole(`combobox`,{name:`Search state`})).toHaveValue(`Florida`),await C(t.getByRole(`combobox`,{name:`State`})).toHaveValue(`Texas`),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C(e.querySelector(`[data-slot="combobox-trigger"]`)).toBeVisible()}},I={render:()=>(0,x.jsxs)(v.Root,{items:k,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body);await T.type(t.getByRole(`combobox`,{name:/search states/i}),`zzz`),await C(await n.findByText(/no matches found/i)).toBeInTheDocument(),await C(n.queryByRole(`option`)).not.toBeInTheDocument()}},L={render:()=>{let[e,t]=(0,b.useState)([]);return(0,x.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,x.jsxs)(v.Root,{items:k,multiple:!0,value:e,onValueChange:t,children:[(0,x.jsx)(v.Input,{placeholder:`Assign states`,"aria-label":`Assign states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{"aria-label":`States`,children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),e.length>0&&(0,x.jsx)(`ul`,{"aria-label":`Selected states`,className:`flex flex-wrap gap-2`,children:e.map(e=>(0,x.jsx)(`li`,{children:(0,x.jsx)(ae,{size:`sm`,children:e})},e))})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/assign states/i});await T.type(r,`co`);let i=await n.findByRole(`listbox`,{name:`States`});await C(i).toHaveAttribute(`aria-multiselectable`,`true`),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(2));let a=n.getByRole(`option`,{name:`Colorado`}),o=a.querySelector(`[data-slot="combobox-item-indicator"]`);await C(o).toBeInTheDocument(),await C(o).not.toHaveAttribute(`data-selected`),await C(a).toHaveAttribute(`aria-selected`,`false`),await T.keyboard(`{ArrowDown}{Enter}`),await E(()=>C(a).toHaveAttribute(`aria-selected`,`true`)),await C(o).toHaveAttribute(`data-selected`),await C(r).toHaveValue(`co`),await C(n.getByRole(`listbox`,{name:`States`})).toBeInTheDocument(),await C(D(t.getByRole(`list`,{name:/selected states/i})).getByText(`Colorado`)).toBeInTheDocument(),await T.click(n.getByRole(`option`,{name:`Connecticut`})),await E(()=>C(n.getByRole(`option`,{name:`Connecticut`})).toHaveAttribute(`aria-selected`,`true`)),await C(a).toHaveAttribute(`aria-selected`,`true`),await C(r).toHaveValue(`co`),await C(t.getAllByRole(`listitem`)).toHaveLength(2),await C(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await C(e.querySelector(`[data-slot="combobox-trigger"]`)).not.toBeInTheDocument(),await T.click(a),await E(()=>C(a).toHaveAttribute(`aria-selected`,`false`)),await C(o).not.toHaveAttribute(`data-selected`),await C(t.getAllByRole(`listitem`)).toHaveLength(1),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},R=[{id:`acme`,name:`Acme Insurance`},{id:`anchor`,name:`Anchor Brokers`},{id:`beacon`,name:`Beacon Risk`},{id:`cardinal`,name:`Cardinal Agency`}],z=e=>new Promise(t=>{setTimeout(()=>t(R.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),800)}),B=()=>(0,x.jsx)(`div`,{"data-slot":`combobox-skeleton`,className:`py-2`,"aria-hidden":`true`,children:[`w-28`,`w-36`,`w-32`].map(e=>(0,x.jsx)(`div`,{className:`mx-2 my-px flex items-center px-3 py-2`,children:(0,x.jsx)(ce,{className:`h-5 ${e}`})},e))}),V=new Map,H=e=>{let t=V.get(e);return t||(t=z(e),V.set(e,t)),t},U=({query:e})=>{let t=(0,b.use)(H(e));return t.length===0?(0,x.jsx)(`div`,{className:`mx-2 my-px px-3 py-2 text-sm text-text-default-base-tertiary`,children:`No agencies found`}):(0,x.jsx)(v.List,{children:t.map(e=>(0,x.jsx)(v.Item,{value:e,children:e.name},e.id))})},W={render:()=>{let[e,t]=(0,b.useState)(``),n=(0,b.useDeferredValue)(e),r=e!==n;return(0,x.jsxs)(v.Root,{filter:null,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,loading:r,loadingLabel:`Searching agencies…`,onInputValueChange:(e,{reason:n})=>{n!==`item-press`&&t(e)},children:[(0,x.jsx)(v.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,x.jsx)(v.Content,{children:(0,x.jsx)(b.Suspense,{fallback:(0,x.jsx)(B,{}),children:(0,x.jsx)(U,{query:n})})})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=()=>document.body.querySelector(`[data-slot="combobox-skeleton"]`),a=()=>document.body.querySelector(`[data-slot="combobox-content"]`);await T.click(r),await E(()=>C(i()).toBeInTheDocument()),await C(n.queryByRole(`option`)).not.toBeInTheDocument(),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(4)),await C(a()).not.toHaveAttribute(`aria-busy`);let{eventWrapper:o}=w();S({eventWrapper:e=>e()});try{await T.type(r,`b`)}finally{S({eventWrapper:o})}await E(()=>C(a()).toHaveAttribute(`aria-busy`,`true`)),await E(()=>C(n.getByText(/searching agencies/i)).toBeInTheDocument()),await C(i()).not.toBeInTheDocument(),await C(n.getAllByRole(`option`)).toHaveLength(4),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(2)),await C(a()).not.toHaveAttribute(`aria-busy`),await C(i()).not.toBeInTheDocument(),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},G=2,K={render:()=>{let[e,t]=(0,b.useState)([]),[n,r]=(0,b.useState)(!1),i=(0,b.useRef)(0);return(0,x.jsxs)(v.Root,{items:e,filteredItems:e,filter:null,minInputLength:G,loading:n,loadingLabel:`Searching agencies…`,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,onInputValueChange:async e=>{let n=++i.current;if(e.trim().length<G){t([]),r(!1);return}r(!0);let a=await z(e);n===i.current&&(t(a),r(!1))},children:[(0,x.jsx)(v.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,x.jsxs)(v.Content,{children:[n&&e.length===0&&(0,x.jsx)(B,{}),(0,x.jsx)(v.Empty,{children:`No agencies found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e.name},e.id)})]})]})},play:async({canvasElement:e})=>{let t=D(e),n=D(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=e.querySelector(`[data-slot="combobox-loading"]`);await C(i).toBeInTheDocument(),await C(i).toBeEmptyDOMElement(),await T.click(r),await T.type(r,`a`),await C(r).toHaveAttribute(`aria-expanded`,`false`),await C(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await T.type(r,`n`),await E(()=>C(i).toHaveTextContent(/searching agencies/i));let a=document.body.querySelector(`[data-slot="combobox-content"]`);await C(a).toHaveAttribute(`aria-busy`,`true`);let o=n.getAllByRole(`status`).filter(e=>e.textContent?.trim());await C(o).toHaveLength(1),await C(o).toEqual([i]),await C(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await C(n.queryByRole(`option`)).not.toBeInTheDocument(),await E(()=>C(n.getAllByRole(`option`).length).toBeGreaterThan(0)),await C(a).not.toHaveAttribute(`aria-busy`),await C(n.queryByText(/searching agencies/i)).not.toBeInTheDocument(),await C(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument();let s=n.getAllByRole(`option`).length;await T.type(r,`ch`),await C(a).toHaveAttribute(`aria-busy`,`true`),await E(()=>C(i).toHaveTextContent(/searching agencies/i)),await C(n.getAllByRole(`option`)).toHaveLength(s),await C(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument(),await E(()=>C(n.getAllByRole(`option`)).toHaveLength(1)),await C(a).not.toHaveAttribute(`aria-busy`),await T.type(r,`{Backspace}{Backspace}{Backspace}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(r).toHaveAttribute(`aria-expanded`,`false`),await C(r).toHaveValue(`a`),await T.type(r,`nch`),await T.click(await n.findByRole(`option`,{name:`Anchor Brokers`})),await E(()=>C(r).toHaveValue(`Anchor Brokers`)),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},q={render:()=>(0,x.jsxs)(h,{invalid:!0,required:!0,children:[(0,x.jsx)(d,{children:`Agency`}),(0,x.jsxs)(v.Root,{items:k,children:[(0,x.jsx)(v.Input,{placeholder:`Search agencies`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),(0,x.jsx)(p.Description,{children:`The agency this agent will be added to.`}),(0,x.jsx)(p.Error,{errors:[{message:`Pick an agency from the list`}]})]}),play:async({canvasElement:e})=>{let t=D(e),n=t.getByRole(`combobox`,{name:`Agency`});await C(n).toHaveAttribute(`data-slot`,`combobox-input`),await C(n).toBeRequired(),await C(n).toHaveAttribute(`aria-invalid`,`true`),await C(n).toHaveAccessibleDescription(`The agency this agent will be added to. Pick an agency from the list`);let r=t.getByText(`Agency`).closest(`label`);await C(r).toHaveAttribute(`id`),await C(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await T.click(n),await D(document.body).findByRole(`listbox`),await C(n).toHaveAccessibleName(`Agency`),await T.keyboard(`{Escape}`),await E(()=>C(D(document.body).queryByRole(`listbox`)).not.toBeInTheDocument())}},J={render:()=>(0,x.jsxs)(g.Root,{children:[(0,x.jsx)(g.Trigger,{asChild:!0,children:(0,x.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,x.jsxs)(g.Content,{children:[(0,x.jsx)(g.Title,{children:`Assign agency`}),(0,x.jsx)(g.Body,{children:(0,x.jsxs)(v.Root,{items:k,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]})})]})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(document.body);await T.click(t.getByRole(`button`,{name:/assign agency/i}));let r=await n.findByRole(`dialog`,{name:/assign agency/i}),i=D(r).getByRole(`combobox`,{name:/search states/i});await T.click(i),await T.type(i,`flo`);let a=await n.findByRole(`option`,{name:`Florida`});await T.click(a),await E(()=>C(i).toHaveValue(`Florida`)),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(r).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{ArrowDown}`),await n.findByRole(`listbox`),await T.keyboard(`{Escape}`),await E(()=>C(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(i).toHaveValue(`Florida`),await C(r).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await C(i).toHaveValue(``),await C(r).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await E(()=>C(r).toHaveAttribute(`data-state`,`closed`))}},Y={render:()=>(0,x.jsxs)(_.Root,{children:[(0,x.jsx)(_.Trigger,{asChild:!0,children:(0,x.jsx)(i,{variant:`secondary`,children:`Filter by state`})}),(0,x.jsx)(_.Content,{"aria-label":`Filter by state`,children:(0,x.jsxs)(v.Root,{items:k,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]})})]}),play:async({canvasElement:e})=>{let t=D(document.body),n=D(e).getByRole(`button`,{name:/filter by state/i});await T.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await T.click(r),await t.findByRole(`listbox`),await T.keyboard(`{Escape}`),await E(()=>C(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(n).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await E(()=>C(n).toHaveAttribute(`data-state`,`closed`))}},X={render:Y.render,play:async({canvasElement:e})=>{let t=D(document.body),n=D(e).getByRole(`button`,{name:/filter by state/i});await T.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await T.click(r),await T.click(await t.findByRole(`option`,{name:`Texas`})),await E(()=>C(r).toHaveValue(`Texas`)),await T.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await T.keyboard(`{Escape}`),await E(()=>C(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await C(r).toHaveValue(`Texas`),await T.keyboard(`{Escape}`),await C(r).toHaveValue(``),await C(n).toHaveAttribute(`data-state`,`open`),await T.keyboard(`{Escape}`),await E(()=>C(n).toHaveAttribute(`data-state`,`closed`))}},Z={render:()=>(0,x.jsxs)(g.Root,{children:[(0,x.jsx)(g.Trigger,{asChild:!0,children:(0,x.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,x.jsxs)(g.Content,{children:[(0,x.jsx)(g.Title,{children:`Assign agency`}),(0,x.jsx)(g.Body,{children:(0,x.jsxs)(v.Root,{items:k,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsx)(v.Content,{children:(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})})]})})]})]}),play:async({canvasElement:e})=>{let t=D(document.body);await T.click(D(e).getByRole(`button`,{name:/assign agency/i}));let n=await t.findByRole(`dialog`,{name:/assign agency/i}),r=D(n).getByRole(`combobox`,{name:/search states/i});await T.type(r,`zzz`),await C(t.queryByRole(`option`)).not.toBeInTheDocument(),await T.keyboard(`{Escape}`),await E(()=>C(n).toHaveAttribute(`data-state`,`closed`))}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`The common case: options are already in memory and Base UI filters them against
what you type. Selecting a row fills the input and closes the list. The field is
a search out of the box — a magnifier in front, a clear button once something is
picked — and the list hangs from the whole field. Clearing drops the picked option.

@summary Search field with a magnifier and clear button over an in-memory list`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`\`variant="plain"\`: the input alone, with no magnifier and no clear button, for a
field that needs no affordance — a FEIN lookup, a template name. The list still
matches the field's width.

@summary Bare input with no icon and no clear button`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source},description:{story:`\`variant="select"\`: a chevron after the input opens and closes the list, for a
short known list the user may want to browse before typing. It has no clear
button by default. The chevron is out of the tab order — the input already
opens the list from the keyboard with the arrow keys.

@summary Field with a chevron that toggles the list, for short known lists`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:"`showClear` overrides the variant's default: here it adds the clear button to a\n`select`, so a picked option can be removed without selecting the text and\ndeleting it. While there is a value it takes the chevron's place; clearing\nbrings the chevron back. Passing `false` drops it from `search`.\n\n@summary Select field with a clear button added through showClear",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <Combobox.Root items={STATES} defaultValue="Florida">
                <Combobox.Input disabled aria-label="Search state" />
            </Combobox.Root>
            <Combobox.Root items={STATES} defaultValue="Texas">
                <Combobox.Input variant="select" showClear readOnly aria-label="State" />
            </Combobox.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox', {
      name: 'Search state'
    })).toHaveValue('Florida');
    await expect(canvas.getByRole('combobox', {
      name: 'State'
    })).toHaveValue('Texas');
    await expect(canvas.queryByRole('button', {
      name: /clear/i
    })).not.toBeInTheDocument();
    await expect(canvasElement.querySelector<HTMLElement>('[data-slot="combobox-trigger"]')).toBeVisible();
  }
}`,...F.parameters?.docs?.source},description:{story:"A `disabled` or `readOnly` input keeps its picked option but loses the clear\nbutton, which would otherwise empty a field the user cannot edit. On a `select`\nthe chevron stays in its place.\n\n@summary Disabled field keeps its value without a clear button",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"Inside a `Modal`, with no `Empty`. When nothing matches there is no list to\nclose, so Base UI lets the first Escape through and it closes the modal.",...Z.parameters?.docs?.description}}},Q=[`Default`,`Plain`,`Select`,`SelectWithClear`,`Disabled`,`NoMatches`,`MultipleSelection`,`AsyncSearch`,`AsyncSearchWithLoading`,`InsideFieldText`,`InsideModal`,`InsidePopover`,`InsidePopoverWithValue`,`InsideModalWithoutEmpty`]})))()}$();export{W as AsyncSearch,K as AsyncSearchWithLoading,j as Default,F as Disabled,q as InsideFieldText,J as InsideModal,Z as InsideModalWithoutEmpty,Y as InsidePopover,X as InsidePopoverWithValue,L as MultipleSelection,I as NoMatches,M as Plain,N as Select,P as SelectWithClear,Q as __namedExportsOrder,O as default};