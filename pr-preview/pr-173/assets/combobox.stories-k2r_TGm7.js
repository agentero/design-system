import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-B9CEYRyW.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-tiFD-YQK.js";import{a,c as o,i as s,n as ee,o as te,r as ne,s as re,t as ie}from"./combobox-PGbe7pPY.js";import{n as ae,t as c}from"./label-C3jSWw4M.js";import{n as oe,t as l}from"./field-DDIfLsxW.js";import{n as u,t as d}from"./field-text-CnxuO-gZ.js";import{n as f,t as p}from"./modal-BQyrtGJP.js";import{n as m,t as h}from"./tag-q9LvGGUh.js";import{n as g,t as _}from"./popover-Bo7ov_le.js";import{n as se,t as ce}from"./skeleton-DVVxKlZy.js";var v;function y(){return(y=e((()=>{o(),v={Root:te,Input:ne,Content:ie,List:a,Item:s,Empty:ee,Status:re}})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{b=t(),y(),r(),oe(),u(),ae(),f(),g(),se(),m(),x=n(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Combobox`,component:v.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:`Combobox is a text input that filters a list and writes the chosen option back
into itself. Focusing the input or typing opens the list; picking a row fills the
input and closes it. With \`multiple\` the rows become checkbox-like toggles and the
list stays open between picks. Built on Base UI, whose Combobox primitive owns
the filtering, the keyboard navigation and the \`role="combobox"\` wiring.`}}},decorators:[e=>(0,x.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,x.jsx)(e,{})})]},O=[`California`,`Colorado`,`Connecticut`,`Florida`,`Texas`,`Washington`],k=e=>{let t=e.querySelector(`[data-slot="combobox-field"]`).getBoundingClientRect(),n=document.body.querySelector(`[data-slot="combobox-content"]`).getBoundingClientRect();S(n.width).toBeCloseTo(t.width,0),S(n.left).toBeCloseTo(t.left,0)},A={render:()=>(0,x.jsxs)(v.Root,{items:O,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:/search states/i}),i=e.querySelector(`[data-slot="input-group-addon"] svg`);await S(i).toHaveAttribute(`aria-hidden`,`true`),await w.click(r),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(O.length)),await T(()=>k(e)),await S(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await S(document.body.querySelector(`[data-slot="combobox-item-indicator"]`)).not.toBeInTheDocument(),await w.type(r,`co`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(2)),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await w.click(n.getByRole(`option`,{name:`Colorado`})),await T(()=>S(r).toHaveValue(`Colorado`)),await w.click(await t.findByRole(`button`,{name:/clear/i})),await T(()=>S(r).toHaveValue(``)),await S(r).toHaveFocus(),await w.keyboard(`{ArrowDown}`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(O.length)),await S(n.getByRole(`option`,{name:`Colorado`})).not.toHaveAttribute(`aria-selected`,`true`),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},j={render:()=>(0,x.jsxs)(v.Root,{items:O,children:[(0,x.jsx)(v.Input,{variant:`plain`,placeholder:`State`,"aria-label":`State`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:`State`});await S(e.querySelector(`svg`)).not.toBeInTheDocument();let i=e.querySelector(`[data-slot="combobox-field"]`);await S(getComputedStyle(i).paddingLeft).toBe(`16px`),await w.type(r,`tex`),await T(()=>k(e)),await w.click(await n.findByRole(`option`,{name:`Texas`})),await T(()=>S(r).toHaveValue(`Texas`)),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},M={render:()=>(0,x.jsxs)(v.Root,{items:O,children:[(0,x.jsx)(v.Input,{variant:`select`,placeholder:`Choose a state`,"aria-label":`State`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await S(i).toHaveAttribute(`aria-expanded`,`false`),await w.click(i),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(O.length)),await S(i).toHaveAttribute(`aria-expanded`,`true`),await T(()=>k(e)),await w.click(i),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(i).toHaveAttribute(`aria-expanded`,`false`),await w.click(i),await w.click(await n.findByRole(`option`,{name:`Florida`})),await T(()=>S(r).toHaveValue(`Florida`)),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},N={render:()=>(0,x.jsxs)(v.Root,{items:O,defaultValue:`Florida`,children:[(0,x.jsx)(v.Input,{variant:`select`,showClear:!0,placeholder:`Choose a state`,"aria-label":`State`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`combobox`,{name:`State`}),r=e.querySelector(`[data-slot="combobox-trigger"]`);await S(r).not.toBeVisible(),await w.click(t.getByRole(`button`,{name:/clear/i})),await T(()=>S(n).toHaveValue(``)),await S(n).toHaveFocus(),await w.keyboard(`{Escape}`),await T(()=>S(E(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(r).toBeVisible()}},P={render:()=>(0,x.jsxs)(v.Root,{items:O,defaultValue:`Florida`,disabled:!0,children:[(0,x.jsx)(v.Input,{variant:`select`,showClear:!0,"aria-label":`State`}),(0,x.jsx)(v.Content,{children:(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`button`,{name:`Show options`});await S(t.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(n).toBeVisible(),await S(n).toBeDisabled()}},F={render:()=>(0,x.jsxs)(d,{readOnly:!0,children:[(0,x.jsx)(c,{children:`State`}),(0,x.jsxs)(v.Root,{items:O,defaultValue:`Texas`,children:[(0,x.jsx)(v.Input,{variant:`select`,showClear:!0}),(0,x.jsx)(v.Content,{children:(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`button`,{name:`Show options`});await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(i).toBeVisible(),await w.click(i),await T(()=>S(n.getByRole(`listbox`)).toBeInTheDocument()),await w.click(n.getByRole(`option`,{name:`Florida`})),await S(r).toHaveValue(`Texas`)}},I={tags:[`!manifest`],args:{onOpenChange:C()},render:e=>(0,x.jsxs)(v.Root,{items:O,defaultValue:`Florida`,onOpenChange:e.onOpenChange,children:[(0,x.jsx)(v.Input,{variant:`select`,showClear:!0,disabled:!0,"aria-label":`State`}),(0,x.jsx)(v.Content,{children:(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})})]}),play:async({args:e,canvasElement:t})=>{let n=E(t),r=n.getByRole(`button`,{name:`Show options`});await S(n.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(r).toBeVisible(),await S(r).toBeDisabled(),await w.click(r),await w.click(t.querySelector(`[data-slot="combobox-field"]`)),await S(e.onOpenChange).not.toHaveBeenCalled(),await S(n.getByRole(`combobox`,{name:`State`})).toHaveValue(`Florida`)}},L={render:()=>(0,x.jsxs)(v.Root,{items:O,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body);await w.type(t.getByRole(`combobox`,{name:/search states/i}),`zzz`),await S(await n.findByText(/no matches found/i)).toBeInTheDocument(),await S(n.queryByRole(`option`)).not.toBeInTheDocument()}},R={render:()=>{let[e,t]=(0,b.useState)([]);return(0,x.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,x.jsxs)(v.Root,{items:O,multiple:!0,value:e,onValueChange:t,children:[(0,x.jsx)(v.Input,{placeholder:`Assign states`,"aria-label":`Assign states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{"aria-label":`States`,children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),e.length>0&&(0,x.jsx)(`ul`,{"aria-label":`Selected states`,className:`flex flex-wrap gap-2`,children:e.map(e=>(0,x.jsx)(`li`,{children:(0,x.jsx)(h,{size:`sm`,children:e})},e))})]})},play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:/assign states/i});await w.type(r,`co`);let i=await n.findByRole(`listbox`,{name:`States`});await S(i).toHaveAttribute(`aria-multiselectable`,`true`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(2));let a=n.getByRole(`option`,{name:`Colorado`}),o=a.querySelector(`[data-slot="combobox-item-indicator"]`);await S(o).toBeInTheDocument(),await S(o).not.toHaveAttribute(`data-selected`),await S(a).toHaveAttribute(`aria-selected`,`false`),await w.keyboard(`{Enter}`),await T(()=>S(a).toHaveAttribute(`aria-selected`,`true`)),await S(o).toHaveAttribute(`data-selected`),await S(r).toHaveValue(`co`),await S(n.getByRole(`listbox`,{name:`States`})).toBeInTheDocument(),await S(E(t.getByRole(`list`,{name:/selected states/i})).getByText(`Colorado`)).toBeInTheDocument(),await w.click(n.getByRole(`option`,{name:`Connecticut`})),await T(()=>S(n.getByRole(`option`,{name:`Connecticut`})).toHaveAttribute(`aria-selected`,`true`)),await S(a).toHaveAttribute(`aria-selected`,`true`),await S(r).toHaveValue(`co`),await S(t.getAllByRole(`listitem`)).toHaveLength(2),await S(t.queryByRole(`button`,{name:/clear/i})).not.toBeInTheDocument(),await S(e.querySelector(`[data-slot="combobox-trigger"]`)).not.toBeInTheDocument(),await w.click(a),await T(()=>S(a).toHaveAttribute(`aria-selected`,`false`)),await S(o).not.toHaveAttribute(`data-selected`),await S(t.getAllByRole(`listitem`)).toHaveLength(1),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},z=[{id:`acme`,name:`Acme Insurance`},{id:`anchor`,name:`Anchor Brokers`},{id:`beacon`,name:`Beacon Risk`},{id:`cardinal`,name:`Cardinal Agency`}],B=e=>new Promise(t=>{setTimeout(()=>t(z.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),800)}),V=()=>(0,x.jsx)(`div`,{"data-slot":`combobox-skeleton`,className:`py-2`,"aria-hidden":`true`,children:[`w-28`,`w-36`,`w-32`].map(e=>(0,x.jsx)(`div`,{className:`mx-2 my-px flex items-center px-3 py-2`,children:(0,x.jsx)(ce,{className:`h-5 ${e}`})},e))}),H=2,U={render:()=>{let[e,t]=(0,b.useState)([]),[n,r]=(0,b.useState)(!1),i=(0,b.useRef)(0);return(0,x.jsxs)(v.Root,{items:e,filteredItems:e,filter:null,minInputLength:H,loading:n,loadingLabel:`Searching agencies…`,itemToStringLabel:e=>e.name,isItemEqualToValue:(e,t)=>e.id===t.id,onInputValueChange:async e=>{let n=++i.current;if(e.trim().length<H){t([]),r(!1);return}r(!0);let a=await B(e);n===i.current&&(t(a),r(!1))},children:[(0,x.jsx)(v.Input,{placeholder:`Search agencies`,"aria-label":`Search agencies`}),(0,x.jsxs)(v.Content,{children:[n&&e.length===0&&(0,x.jsx)(V,{}),(0,x.jsx)(v.Empty,{children:`No agencies found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e.name},e.id)})]})]})},play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:/search agencies/i}),i=e.querySelector(`[data-slot="combobox-loading"]`);await S(i).toBeInTheDocument(),await S(i).toBeEmptyDOMElement(),await w.click(r),await w.type(r,`a`),await S(r).toHaveAttribute(`aria-expanded`,`false`),await S(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await w.type(r,`n`),await T(()=>S(i).toHaveTextContent(/searching agencies/i));let a=document.body.querySelector(`[data-slot="combobox-content"]`);await S(a).toHaveAttribute(`aria-busy`,`true`);let o=n.getAllByRole(`status`).filter(e=>e.textContent?.trim());await S(o).toHaveLength(1),await S(o).toEqual([i]),await S(n.queryByText(/no agencies found/i)).not.toBeInTheDocument(),await S(n.queryByRole(`option`)).not.toBeInTheDocument(),await T(()=>S(n.getAllByRole(`option`).length).toBeGreaterThan(0)),await S(a).not.toHaveAttribute(`aria-busy`),await T(()=>S(n.getAllByRole(`option`)[0]).toHaveAttribute(`data-highlighted`)),await S(n.queryByText(/searching agencies/i)).not.toBeInTheDocument(),await S(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument();let s=n.getAllByRole(`option`).length;await w.type(r,`ch`),await S(a).toHaveAttribute(`aria-busy`,`true`),await T(()=>S(i).toHaveTextContent(/searching agencies/i)),await S(n.getAllByRole(`option`)).toHaveLength(s),await S(document.body.querySelector(`[data-slot="combobox-skeleton"]`)).not.toBeInTheDocument(),await S(n.getAllByRole(`option`)[0]).toHaveAttribute(`data-highlighted`),await w.keyboard(`{Enter}`),await S(r).toHaveValue(`anch`),await S(r).toHaveAttribute(`aria-expanded`,`true`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(1)),await S(a).not.toHaveAttribute(`aria-busy`),await w.type(r,`{Backspace}{Backspace}{Backspace}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(r).toHaveAttribute(`aria-expanded`,`false`),await S(r).toHaveValue(`a`),await w.type(r,`nch`),await w.click(await n.findByRole(`option`,{name:`Anchor Brokers`})),await T(()=>S(r).toHaveValue(`Anchor Brokers`)),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},W=()=>{let[e,t]=(0,b.useState)();return{onSubmit:e=>{e.preventDefault();let n=String(new FormData(e.currentTarget).get(`state`)??``);t(e=>({count:(e?.count??0)+1,state:n}))},status:e?`Submitted ${e.count}× — state: ${e.state||`none`}`:`Not submitted`}},G={render:()=>{let{onSubmit:e,status:t}=W();return(0,x.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,onSubmit:e,children:[(0,x.jsxs)(v.Root,{items:O,name:`state`,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`State`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),(0,x.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,x.jsx)(i,{type:`submit`,children:`Save`}),(0,x.jsx)(`p`,{role:`status`,className:`text-sm text-text-default-base-secondary`,children:t})]})]})},play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`status`);await w.click(r),await T(()=>S(n.getByRole(`option`,{name:`California`})).toHaveAttribute(`data-highlighted`)),await w.type(r,`co`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(2)),await S(n.getByRole(`option`,{name:`Colorado`})).toHaveAttribute(`data-highlighted`),await w.keyboard(`{Enter}`),await T(()=>S(r).toHaveValue(`Colorado`)),await S(i).toHaveTextContent(`Not submitted`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await w.keyboard(`{Enter}`),await S(i).toHaveTextContent(`Submitted 1× — state: Colorado`),await w.clear(r),await w.type(r,`zz`),await T(()=>S(n.getByText(`No matches found`)).toBeVisible()),await w.keyboard(`{Enter}`),await S(i).toHaveTextContent(`Submitted 1× — state: Colorado`),await S(r).toHaveValue(`zz`),await S(r).toHaveAttribute(`aria-expanded`,`true`),await w.keyboard(`{Meta>}{Enter}{/Meta}`),await S(i).toHaveTextContent(/Submitted 2×/),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument())}},K={render:()=>{let{onSubmit:e,status:t}=W();return(0,x.jsxs)(`form`,{className:`flex flex-col items-start gap-4`,onSubmit:e,children:[(0,x.jsxs)(v.Root,{items:O,name:`state`,autoHighlight:!1,children:[(0,x.jsx)(v.Input,{submitOnEnter:!0,placeholder:`Search states`,"aria-label":`State`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),(0,x.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,x.jsx)(i,{type:`submit`,children:`Save`}),(0,x.jsx)(`p`,{role:`status`,className:`text-sm text-text-default-base-secondary`,children:t})]})]})},play:async({canvasElement:e})=>{let t=E(e),n=E(document.body),r=t.getByRole(`combobox`,{name:`State`}),i=t.getByRole(`status`);await w.click(r),await w.type(r,`co`),await T(()=>S(n.getAllByRole(`option`)).toHaveLength(2)),await w.keyboard(`{Enter}`),await S(i).toHaveTextContent(`Submitted 1× — state: none`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(r).not.toHaveValue(`Colorado`)}},q={render:()=>(0,x.jsxs)(d,{invalid:!0,required:!0,children:[(0,x.jsx)(c,{children:`Agency`}),(0,x.jsxs)(v.Root,{items:O,children:[(0,x.jsx)(v.Input,{placeholder:`Search agencies`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]}),(0,x.jsx)(l.Description,{children:`The agency this agent will be added to.`}),(0,x.jsx)(l.Error,{errors:[{message:`Pick an agency from the list`}]})]}),play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`combobox`,{name:`Agency`});await S(n).toHaveAttribute(`data-slot`,`combobox-input`),await S(n).toBeRequired(),await S(n).toHaveAttribute(`aria-invalid`,`true`),await S(n).toHaveAccessibleDescription(`The agency this agent will be added to. Pick an agency from the list`);let r=t.getByText(`Agency`).closest(`label`);await S(r).toHaveAttribute(`id`),await S(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await w.click(n),await E(document.body).findByRole(`listbox`),await S(n).toHaveAccessibleName(`Agency`),await w.keyboard(`{Escape}`),await T(()=>S(E(document.body).queryByRole(`listbox`)).not.toBeInTheDocument())}},J={render:()=>(0,x.jsxs)(p.Root,{children:[(0,x.jsx)(p.Trigger,{asChild:!0,children:(0,x.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,x.jsxs)(p.Content,{children:[(0,x.jsx)(p.Title,{children:`Assign agency`}),(0,x.jsx)(p.Body,{children:(0,x.jsxs)(v.Root,{items:O,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]})})]})]}),play:async({canvasElement:e})=>{let t=E(e),n=E(document.body);await w.click(t.getByRole(`button`,{name:/assign agency/i}));let r=await n.findByRole(`dialog`,{name:/assign agency/i}),i=E(r).getByRole(`combobox`,{name:/search states/i});await w.click(i),await w.type(i,`flo`);let a=await n.findByRole(`option`,{name:`Florida`});await w.click(a),await T(()=>S(i).toHaveValue(`Florida`)),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(r).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{ArrowDown}`),await n.findByRole(`listbox`),await w.keyboard(`{Escape}`),await T(()=>S(n.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(i).toHaveValue(`Florida`),await S(r).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{Escape}`),await S(i).toHaveValue(``),await S(r).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{Escape}`),await T(()=>S(r).toHaveAttribute(`data-state`,`closed`))}},Y={render:()=>(0,x.jsxs)(_.Root,{children:[(0,x.jsx)(_.Trigger,{asChild:!0,children:(0,x.jsx)(i,{variant:`secondary`,children:`Filter by state`})}),(0,x.jsx)(_.Content,{"aria-label":`Filter by state`,children:(0,x.jsxs)(v.Root,{items:O,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsxs)(v.Content,{children:[(0,x.jsx)(v.Empty,{children:`No matches found`}),(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})]})]})})]}),play:async({canvasElement:e})=>{let t=E(document.body),n=E(e).getByRole(`button`,{name:/filter by state/i});await w.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await w.click(r),await t.findByRole(`listbox`),await w.keyboard(`{Escape}`),await T(()=>S(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(n).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{Escape}`),await T(()=>S(n).toHaveAttribute(`data-state`,`closed`))}},X={render:Y.render,play:async({canvasElement:e})=>{let t=E(document.body),n=E(e).getByRole(`button`,{name:/filter by state/i});await w.click(n);let r=await t.findByRole(`combobox`,{name:/search states/i});await w.click(r),await w.click(await t.findByRole(`option`,{name:`Texas`})),await T(()=>S(r).toHaveValue(`Texas`)),await w.keyboard(`{ArrowDown}`),await t.findByRole(`listbox`),await w.keyboard(`{Escape}`),await T(()=>S(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await S(r).toHaveValue(`Texas`),await w.keyboard(`{Escape}`),await S(r).toHaveValue(``),await S(n).toHaveAttribute(`data-state`,`open`),await w.keyboard(`{Escape}`),await T(()=>S(n).toHaveAttribute(`data-state`,`closed`))}},Z={render:()=>(0,x.jsxs)(p.Root,{children:[(0,x.jsx)(p.Trigger,{asChild:!0,children:(0,x.jsx)(i,{variant:`secondary`,children:`Assign agency`})}),(0,x.jsxs)(p.Content,{children:[(0,x.jsx)(p.Title,{children:`Assign agency`}),(0,x.jsx)(p.Body,{children:(0,x.jsxs)(v.Root,{items:O,children:[(0,x.jsx)(v.Input,{placeholder:`Search states`,"aria-label":`Search states`}),(0,x.jsx)(v.Content,{children:(0,x.jsx)(v.List,{children:e=>(0,x.jsx)(v.Item,{value:e,children:e},e)})})]})})]})]}),play:async({canvasElement:e})=>{let t=E(document.body);await w.click(E(e).getByRole(`button`,{name:/assign agency/i}));let n=await t.findByRole(`dialog`,{name:/assign agency/i}),r=E(n).getByRole(`combobox`,{name:/search states/i});await w.type(r,`zzz`),await S(t.queryByRole(`option`)).not.toBeInTheDocument(),await S(document.querySelector(`[data-slot="combobox-content"]`)).not.toBeVisible(),await w.keyboard(`{Escape}`),await T(()=>S(n).toHaveAttribute(`data-state`,`closed`))}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
here as tags.`,...R.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    // The highlighted row answers the previous query, so Enter waits for the new one.
    await expect(body.getAllByRole('option')[0]).toHaveAttribute('data-highlighted');
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
}`,...U.parameters?.docs?.source},description:{story:'Options fetched from an API as you type: `filter={null}`, the rows arrive\nthrough `items` and `filteredItems`, and the data layer\'s `loading` flag goes\nto `Root`. That is all the wiring the wait needs:\n`Content` is marked busy, `loadingLabel` is announced once when the request\nstarts, and `Empty` holds back "no results" until the answer is in. Placeholder\nrows show only while there is nothing to show yet, hidden from assistive\ntechnology since the label already speaks for them; after that, the previous\nrows stay until the new ones replace them. A request that is no longer the\nlatest is dropped.\n\n`minInputLength` keeps the list shut until two characters are typed — focusing\nthe field opens nothing, and deleting back under the minimum closes it — and\nno request goes out for a shorter query either.\n\n@summary API search that waits for two characters and announces its loading state',...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Inside a form, Enter in an open list picks the highlighted row instead of
submitting. The first row is highlighted as soon as the list shows one, so
typing a search and pressing Enter picks the top match. With no match, Enter
does nothing. Once the list is closed, Enter submits the form as in any input,
with no value if none was picked: mark the root \`required\` to block that.

@summary Enter picks the highlighted row while the list is open, submits once closed`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"Inside a `Modal`, with no `Empty`. When nothing matches there is no list to\nclose, so Base UI lets the first Escape through and it closes the modal.",...Z.parameters?.docs?.description}}},Q=[`Default`,`Plain`,`Select`,`SelectWithClear`,`Disabled`,`ReadOnly`,`DisabledOnInput`,`NoMatches`,`MultipleSelection`,`AsyncSearchWithLoading`,`InsideForm`,`SubmitOnEnter`,`InsideFieldText`,`InsideModal`,`InsidePopover`,`InsidePopoverWithValue`,`InsideModalWithoutEmpty`]})))()}$();export{U as AsyncSearchWithLoading,A as Default,P as Disabled,I as DisabledOnInput,q as InsideFieldText,G as InsideForm,J as InsideModal,Z as InsideModalWithoutEmpty,Y as InsidePopover,X as InsidePopoverWithValue,R as MultipleSelection,L as NoMatches,j as Plain,F as ReadOnly,M as Select,N as SelectWithClear,K as SubmitOnEnter,Q as __namedExportsOrder,D as default};