import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DngvwRgi.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./utils-nsk-j2e0.js";import{n as o,t as s}from"./button-BOb-7G0e.js";import{C as c,S as l,_ as u,a as d,b as f,c as ee,d as p,f as m,g as h,h as te,i as g,l as ne,m as re,n as _,p as ie,t as ae,u as oe,v as se,x as ce,y as le}from"./combobox-BOc0ZaML.js";import{n as ue,r as de,t as fe}from"./input-BJXkgVjt.js";import{n as pe,t as me}from"./input-group-CWBq5u89.js";import{n as he,t as ge}from"./loading-BddHiLKp.js";import{n as _e,t as ve}from"./label-DaM0HN3F.js";import{n as ye,t as be}from"./field-D127Hf0-.js";import{n as xe,t as Se}from"./field-text-49WlKsfp.js";import{n as Ce,t as v}from"./modal-_4iuCWCi.js";import{n as we,t as Te}from"./tag-CTUUfcvb.js";function Ee(e){let{openOnInputClick:t=!1,value:n,defaultValue:r,onValueChange:i,mode:a=`list`,itemToStringValue:o,...s}=e,c=(a===`inline`||a===`both`)&&!e.readOnly,l=a===`inline`||a===`none`,u=n!==void 0,[d,ee]=De.useState(r??``),[p,m]=De.useState(``);De.useEffect(()=>{(u||!c)&&m(``)},[n,u,c]);let h;h=c&&p!==``?p:u?n??``:d;let g=se({locale:s.locale}),ne=String((u?n:d)??``).trim(),re=l||s.filter===null?null:s.filter??g.contains;function _(e,t){m(``),u||ee(e),i?.(e,t)}function ie(t,n){e.onItemHighlighted?.(t,n),n.reason!==`pointer`&&m(c&&t!=null?f(t,o):``)}return(0,Oe.jsx)(te,{...s,itemToStringLabel:o,openOnInputClick:t,selectionMode:`none`,fillInputOnItemPress:!0,filter:re,filterQuery:a===`both`?ne:void 0,autoComplete:a,inputValue:h,defaultInputValue:r,onInputValueChange:_,onItemHighlighted:ie})}var De,Oe;function ke(){return(ke=t((()=>{De=e(n(),1),h(),u(),le(),c(),Oe=r()})))()}var Ae;function je(){return(je=t((()=>{m(),Ae=p})))()}function Me(){return l().filteredItems}function Ne(){return(Ne=t((()=>{ce()})))()}var y,b,x,Pe,S,C,Fe,Ie,w,T,E,D,O;function Le(){return(Le=t((()=>{y=n(),Ne(),ke(),je(),re(),i(),ee(),ne(),ue(),pe(),b=r(),x=(0,y.createContext)(null),Pe=({onChange:e})=>{let t=Me().length>0;return(0,y.useLayoutEffect)(()=>e(t),[t,e]),null},S=({value:e,defaultValue:t=``,onValueChange:n,open:r,defaultOpen:i=!1,onOpenChange:a,children:o,...s})=>{let[c,l]=(0,y.useState)(t),u=e??c,[d,f]=(0,y.useState)(i),[ee,p]=(0,y.useState)(!1),[m,h]=(0,y.useState)(0),te=s.items!==void 0||s.filteredItems!==void 0,g=r??(d&&(!te||ee||m>0)),ne=(e,t)=>{a?.(e,t),t.isCanceled||f(e)},re=(t,r)=>{if(r.reason===`escape-key`){r.cancel(),f(!1);return}n?.(t,r),e===void 0&&!r.isCanceled&&l(t)},_=(0,y.useRef)(g);_.current=g;let ie=(0,y.useMemo)(()=>({dismiss:()=>{_.current||f(!1)},registerEmpty:()=>(h(e=>e+1),()=>h(e=>e-1))}),[]);return(0,b.jsx)(x,{value:ie,children:(0,b.jsxs)(Ee,{...s,value:u,onValueChange:re,open:g,onOpenChange:ne,children:[o,te&&r===void 0&&(0,b.jsx)(Pe,{onChange:p})]})})},S.displayName=`Autocomplete.Root`,C=e=>e!=null&&e!==!1,Fe=e=>(e instanceof HTMLButtonElement||e instanceof HTMLInputElement)&&e.type===`submit`,Ie=e=>{let t=e.target;if(e.key!==`Enter`||e.defaultPrevented||e.nativeEvent.isComposing||!(t instanceof HTMLInputElement)||t.dataset.slot!==`autocomplete-input`||!t.form)return;e.preventDefault();let n=Array.from(t.form.elements).find(Fe);t.form.requestSubmit(n?.disabled?void 0:n)},w=({before:e,after:t,...n})=>{let{className:r,size:i=`md`,onBlur:o,...s}=oe(n),c=(0,y.use)(x),l=!C(e)&&!C(t);return(0,b.jsxs)(Ae,{render:(0,b.jsx)(me.Root,{}),"data-slot":`autocomplete-field`,onKeyDown:Ie,className:l?`px-4`:void 0,children:[C(e)&&(0,b.jsx)(me.Addon,{"data-slot":`autocomplete-before`,children:e}),(0,b.jsx)(ie,{"data-slot":`autocomplete-input`,"data-size":i,className:a(de({size:i}),r),onBlur:e=>{o?.(e),c?.dismiss()},...s}),C(t)&&(0,b.jsx)(me.Addon,{"data-slot":`autocomplete-after`,children:t})]})},w.displayName=`Autocomplete.Input`,T=e=>(0,b.jsx)(ae,{"data-slot":`autocomplete-content`,...e}),T.displayName=`Autocomplete.Content`,E=e=>(0,b.jsx)(d,{"data-slot":`autocomplete-list`,...e}),E.displayName=`Autocomplete.List`,D=e=>(0,b.jsx)(g,{"data-slot":`autocomplete-item`,...e}),D.displayName=`Autocomplete.Item`,O=e=>{let t=(0,y.use)(x);return(0,y.useLayoutEffect)(()=>t?.registerEmpty(),[t]),(0,b.jsx)(_,{"data-slot":`autocomplete-empty`,...e})},O.displayName=`Autocomplete.Empty`;try{S.displayName=`Autocomplete.Root`,S.__docgenInfo={description:"Root of an autocomplete: a text field whose value is the text itself, with a\nlist of suggestions below it. Nothing is selected. Leaving the field, closing\nthe list and pressing Escape all keep what was typed.\n\nUse it for a free-text field that suggests: a prompt with recent queries, a\nnumber field that offers what a lookup found. When the value must be one of\nthe options, use [Combobox](?path=/docs/components-combobox--docs) instead:\nit writes the picked option back and drops text that matches none.\n\nPass the suggestions as `items`. Base UI filters them against the text; set\n`filter={null}` when they are already the ones to show. With `items`, the\nlist opens only while it has a row to show, or an `Empty` message: a field\nwith nothing to suggest stays shut, and one whose suggestions arrive late (a\nlookup still running) opens when they do, if the user is still in the field.\n`autoHighlight` highlights the first row as the user types, and `'always'`\nhighlights it as soon as it renders, which suits a single suggestion.\n\nEvery Base UI root prop is accepted and forwarded: `value`, `defaultValue`,\n`onValueChange`, `items`, `filter`, `autoHighlight`, `openOnInputClick`,\n`submitOnItemClick` and so on. A controlled `open` is passed through as is,\nwithout the check for rows. Base UI empties the field on Escape while the\nlist is shut, as a native search input does; this root keeps the text\ninstead, and does not report that change. Inside a `Modal`, Escape on an open\nlist closes the list only, and the next one closes the dialog; the modal\nleaves an Escape from an expanded combobox to it.\n\nPicking a row and pressing Enter are told apart with Base UI's own events:\n\n- A pick, by pointer or by Enter on the highlighted row, fires the row's\n  `onClick` and then `onValueChange` with `eventDetails.reason` set to\n  `'item-press'`, carrying the row's text. Base UI stops that Enter, so the\n  form is not submitted as well. With `submitOnItemClick` the owning form is\n  submitted once, right after the pick.\n- Enter with no row highlighted closes the list and submits the owning form\n  once, through its default button when it has one. A form with no submit\n  button submits too, as a form with a single text field does.\n- A pick fills the field with the row's text. To keep the typed text, call\n  `eventDetails.cancel()` when the reason is `'item-press'`, or ignore that\n  change on a controlled `value`: the row's `onClick` can then write\n  elsewhere.",displayName:`Autocomplete.Root`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{},tags:{summary:`Free-text field with a list of suggestions below it`,see:`{@link https://base-ui.com/react/components/autocomplete Base UI Autocomplete}`,example:`\`\`\`tsx
import { Autocomplete } from '@agentero/design-system/autocomplete';

<form onSubmit={() => runPrompt(prompt)}>
  <Autocomplete.Root items={recentPrompts} value={prompt} onValueChange={setPrompt}>
    <Autocomplete.Input aria-label="Describe your filters" before={<IconEffects />} />
    <Autocomplete.Content>
      <Autocomplete.List>
        {(recent: string) => (
          <Autocomplete.Item key={recent} value={recent} onClick={() => runPrompt(recent)}>
            {recent}
          </Autocomplete.Item>
        )}
      </Autocomplete.List>
    </Autocomplete.Content>
  </Autocomplete.Root>
</form>
\`\`\``}}}catch{}try{w.displayName=`Autocomplete.Input`,w.__docgenInfo={description:"The text field. Typing opens the list, as does ArrowDown; a click opens it\nonly under `openOnInputClick`. A click on the field never closes it; Escape\nand a click outside do, and both keep the text.\n\nIt wears the same styling as `Input` and takes the same wiring from\n`InputContext`, so inside a `FieldText` the label, the hint and the error\npoint at it with nothing passed by hand. Its own props win over the context.\nInside a field it also names itself with `aria-labelledby` pointing at the\nlabel: while the list is open, Base UI hides everything but the input and\nthe list from assistive technology, and a `<label for>` alone stops naming\nit. Outside a field, give it `aria-label` or an `aria-labelledby` of your\nown.\n\nIt is drawn as an `InputGroup` frame, and the list anchors to that whole\nframe, so it is as wide as the field whatever sits in `before` and `after`.\n\nEvery native input attribute is accepted and forwarded to the `<input>`:\n`placeholder`, `readOnly`, `inputMode`. `className` styles the `<input>`.\nBase UI's `render` swaps the element: pass a function that spreads the props\nit receives onto a masked input, or onto a wrapper's `<input>` when the\nfield needs an overlay of its own.",displayName:`Autocomplete.Input`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxInputState) => CSSProperties)`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxInputState) => string)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxInputState>`}},size:{defaultValue:null,declarations:[{fileName:`design-system/src/autocomplete/autocomplete.tsx`,name:`TypeLiteral`}],description:"Control height, matching `Input`. Defaults to `'md'`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},before:{defaultValue:null,declarations:[{fileName:`design-system/src/autocomplete/autocomplete.tsx`,name:`TypeLiteral`}],description:`Content in front of the input, inside the frame: an icon, a spinner while
a request runs. Wrapped in an \`InputGroup.Addon\`, so an icon takes the
input's colour and size. Decoration: hide an icon from assistive
technology, and name a spinner.`,name:`before`,required:!1,tags:{},type:{name:`ReactNode`}},after:{defaultValue:null,declarations:[{fileName:`design-system/src/autocomplete/autocomplete.tsx`,name:`TypeLiteral`}],description:"Content after the input, inside the frame: a `Tag`, a unit, a button.\nWrapped in an `InputGroup.Addon`; a tag tucks into the frame's padding.",name:`after`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Text field inside a frame with optional content before and after`,dataAttribute:`{string} data-slot - Always set to "autocomplete-input"`}}}catch{}try{T.displayName=`Autocomplete.Content`,T.__docgenInfo={description:"The floating surface holding the suggestions. It portals to the body, is as\nwide as the field's frame, and caps its height to the space available. It\nworks inside a `Modal`.\n\nUnder a root with `items`, it opens only while the list has a row or an\n`Empty` message to show; see `Root`.\n\nAccepts the positioning props `side`, `align`, `sideOffset`, `alignOffset`,\n`anchor` and `collisionPadding`, with the same defaults as Combobox: below\nthe field, from its left edge, 12px away.",displayName:`Autocomplete.Content`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxPopupState) => CSSProperties)`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxPopupState) => string)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxPopupState>`}}},tags:{summary:`Floating surface under the field, holding the suggestions`,dataAttribute:`{string} data-slot - Always set to "autocomplete-content"`}}}catch{}try{E.displayName=`Autocomplete.List`,E.__docgenInfo={description:`Scrollable container for the suggestions. Give it a function as its child
to render one \`Item\` per entry of the root's \`items\`, or render the rows by
hand.

It carries a generic \`aria-label\`, "Suggestions". Name it after the field
when a page has more than one. It cannot borrow the input's name: a
reference to a text field resolves to its value.`,displayName:`Autocomplete.List`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxListState) => CSSProperties)`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxListState) => string)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxListState>`}}},tags:{summary:`Scrollable list of the suggestions`,dataAttribute:`{string} data-slot - Always set to "autocomplete-list"`}}}catch{}try{D.displayName=`Autocomplete.Item`,D.__docgenInfo={description:"A suggestion. `value` is what the root writes into the field when the row is\npicked: a string, an object of shape `{ value, label }`, or anything the\nroot's `itemToStringValue` turns into text.\n\n`onClick` fires on a pick by pointer and on Enter while the row is\nhighlighted, before the root's `onValueChange` reports `'item-press'`. Run\nthe suggestion there, or write it to another field and cancel the\n`'item-press'` change to leave the typed text alone.",displayName:`Autocomplete.Item`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxItemState) => CSSProperties)`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxItemState) => string)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxItemState>`}}},tags:{summary:`Suggestion row inside the list`,dataAttribute:`{string} data-slot - Always set to "autocomplete-item"
{string} data-highlighted - Present while the row is highlighted`}}}catch{}try{O.displayName=`Autocomplete.Empty`,O.__docgenInfo={description:`Shown in place of the rows when no suggestion matches the text, and
announced politely. It needs \`items\` on \`Root\` to know the list is empty,
and it must stay mounted: change its children rather than rendering it
conditionally. Leave it out when a field with nothing to suggest should show
nothing at all.`,displayName:`Autocomplete.Empty`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxEmptyState) => CSSProperties)`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxEmptyState) => string)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxEmptyState>`}}},tags:{summary:`Message shown when no suggestion matches the text`,dataAttribute:`{string} data-slot - Always set to "autocomplete-empty"`}}}catch{}})))()}var k;function Re(){return(Re=t((()=>{Le(),k={Root:S,Input:w,Content:T,List:E,Item:D,Empty:O}})))()}var A,j,M,N,P,F,ze,Be,Ve,I,He,L,R,z,B,V,H,Ue,U,W,G,K,q,J,We,Ge,Ke,qe,Y,X,Z,Q,Je,Ye,$,Xe;function Ze(){return(Ze=t((()=>{A=n(),Re(),o(),ye(),xe(),ue(),_e(),he(),Ce(),we(),j=r(),{expect:M,userEvent:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,ze={title:`Components/Autocomplete`,component:k.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:`Autocomplete is a free-text field with suggestions below it. The text is the
value: picking a suggestion writes its text into the field, and leaving the
field, closing the list or pressing Escape keeps whatever was typed. Built on
Base UI's Autocomplete, styled as the Combobox.`}}},decorators:[e=>(0,j.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,j.jsx)(e,{})})]},Be=e=>(0,j.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,j.jsx)(`path`,{d:`M9.52 15.615q-2.562 0-4.34-1.777Q3.405 12.062 3.405 9.5T5.18 5.162q1.776-1.777 4.338-1.777t4.339 1.777q1.777 1.776 1.777 4.338 0 1.071-.36 2.046a5.7 5.7 0 0 1-.96 1.696l5.754 5.754q.209.209.213.522a.7.7 0 0 1-.213.532.72.72 0 0 1-.527.217.72.72 0 0 1-.527-.217l-5.753-5.754q-.75.62-1.725.97t-2.018.35m0-1.5q1.933 0 3.273-1.341 1.342-1.34 1.342-3.274 0-1.932-1.342-3.274-1.34-1.341-3.274-1.341-1.932 0-3.274 1.34Q4.904 7.569 4.904 9.5q0 1.933 1.341 3.274 1.342 1.341 3.274 1.341`})}),Ve=e=>(0,j.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,j.jsx)(`path`,{d:`M12 14.7769L14.6211 16.7615C14.8019 16.8884 14.9843 16.8926 15.1682 16.774C15.3522 16.6554 15.4089 16.4891 15.3384 16.275L14.3461 12.9923L16.9065 11.1716C17.0944 11.0316 17.1515 10.8571 17.0778 10.6481C17.0041 10.4391 16.8573 10.3346 16.6374 10.3346H13.5038L12.4365 6.88658C12.36 6.67246 12.2146 6.5654 12.0003 6.5654C11.786 6.5654 11.6404 6.67246 11.5635 6.88658L10.4961 10.3346H7.36255C7.14265 10.3346 6.99584 10.4391 6.92212 10.6481C6.84841 10.8571 6.90551 11.0316 7.09343 11.1716L9.65383 12.9923L8.66153 16.275C8.59101 16.4891 8.64774 16.6554 8.83173 16.774C9.01569 16.8926 9.19806 16.8884 9.37883 16.7615L12 14.7769ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5766 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45271 3.248 8.29658C3.74667 7.14043 4.42342 6.13474 5.27825 5.27953C6.1331 4.42429 7.13834 3.74723 8.29398 3.24835C9.44959 2.74947 10.6844 2.50002 11.9983 2.50002C13.3122 2.50002 14.5473 2.74936 15.7034 3.24803C16.8596 3.74669 17.8652 4.42344 18.7205 5.27828C19.5757 6.13313 20.2527 7.13837 20.7516 8.294C21.2505 9.44962 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8653 18.7217 18.7205C17.8669 19.5757 16.8616 20.2528 15.706 20.7517C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2166 20 16.1041 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1041 4.77917 14.2166 4 12 4C9.78331 4 7.89581 4.77917 6.33748 6.3375C4.77914 7.89583 3.99998 9.78333 3.99998 12C3.99998 14.2167 4.77914 16.1042 6.33748 17.6625C7.89581 19.2208 9.78331 20 12 20Z`})}),I=[`Clearcover`,`Hippo`,`Lemonade`,`Openly`,`Progressive`,`Travelers`],He=()=>document.body.querySelector(`[data-slot="autocomplete-content"]`),L=e=>{let t=e.querySelector(`[data-slot="autocomplete-field"]`).getBoundingClientRect(),n=He().getBoundingClientRect();M(n.width).toBeCloseTo(t.width,0),M(n.left).toBeCloseTo(t.left,0)},R=()=>P(()=>M(F(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),z=()=>(0,j.jsx)(k.Content,{children:(0,j.jsx)(k.List,{children:e=>(0,j.jsx)(k.Item,{value:e,children:e},e)})}),B={render:()=>(0,j.jsxs)(k.Root,{items:I,children:[(0,j.jsx)(k.Input,{placeholder:`Carrier`,"aria-label":`Carrier`}),(0,j.jsx)(z,{})]}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await M(r).toHaveAttribute(`data-slot`,`autocomplete-input`),await N.type(r,`o`),await P(()=>M(n.getAllByRole(`option`)).toHaveLength(5)),await P(()=>L(e)),await M(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await N.type(r,`pen`),await P(()=>M(n.getAllByRole(`option`)).toHaveLength(1)),await N.click(n.getByRole(`option`,{name:`Openly`})),await P(()=>M(r).toHaveValue(`Openly`)),await R()}},V={render:()=>(0,j.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,j.jsxs)(k.Root,{items:I,children:[(0,j.jsx)(k.Input,{placeholder:`Carrier`,"aria-label":`Carrier`}),(0,j.jsx)(z,{})]}),(0,j.jsx)(s,{variant:`secondary`,children:`Next`})]}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await N.type(r,`Prog`),await n.findByRole(`option`,{name:`Progressive`}),await N.tab(),await R(),await M(r).toHaveValue(`Prog`),await N.click(r),await N.type(r,`ressive Direct`),await N.click(t.getByText(`Next`)),await R(),await M(r).toHaveValue(`Progressive Direct`)}},H={render:()=>(0,j.jsxs)(k.Root,{items:I,children:[(0,j.jsx)(k.Input,{placeholder:`Carrier`,"aria-label":`Carrier`}),(0,j.jsx)(z,{})]}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await N.type(r,`Lem`),await n.findByRole(`option`,{name:`Lemonade`}),await N.keyboard(`{Escape}`),await R(),await M(r).toHaveValue(`Lem`),await N.keyboard(`{Escape}`),await M(r).toHaveValue(`Lem`),await M(r).toHaveFocus()}},Ue=({submitOnItemClick:e=!1})=>{let[t,n]=(0,A.useState)([]),r=e=>n(t=>[...t,e]);return(0,j.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`carrier`);r(`submit: ${String(t)}`)},className:`flex flex-col gap-4`,children:[(0,j.jsxs)(k.Root,{items:I,submitOnItemClick:e,onValueChange:(e,t)=>{t.reason===`item-press`&&r(`item-press: ${e}`)},children:[(0,j.jsx)(k.Input,{name:`carrier`,placeholder:`Carrier`,"aria-label":`Carrier`}),(0,j.jsx)(k.Content,{children:(0,j.jsx)(k.List,{children:e=>(0,j.jsx)(k.Item,{value:e,onClick:()=>r(`click: ${e}`),children:e},e)})})]}),e&&(0,j.jsx)(s,{type:`submit`,variant:`secondary`,className:`self-start`,children:`Search`}),(0,j.jsx)(`ol`,{"aria-label":`Events`,className:`text-sm text-text-default-base-secondary`,children:t.map((e,t)=>(0,j.jsx)(`li`,{children:e},t))})]})},U=e=>F(F(e).getByRole(`list`,{name:`Events`})).queryAllByRole(`listitem`).map(e=>e.textContent),W={render:()=>(0,j.jsx)(Ue,{}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await N.type(r,`hip`),await N.click(await n.findByRole(`option`,{name:`Hippo`})),await P(()=>M(U(e)).toEqual([`click: Hippo`,`item-press: Hippo`])),await M(r).toHaveValue(`Hippo`),await R(),await N.clear(r),await N.type(r,`trav`),await n.findByRole(`option`,{name:`Travelers`}),await N.keyboard(`{ArrowDown}`),await P(()=>M(n.getByRole(`option`,{name:`Travelers`})).toHaveAttribute(`data-highlighted`)),await N.keyboard(`{Enter}`),await P(()=>M(r).toHaveValue(`Travelers`)),await M(U(e)).toEqual([`click: Hippo`,`item-press: Hippo`,`click: Travelers`,`item-press: Travelers`]),await R(),await N.clear(r),await N.type(r,`Trav`),await n.findByRole(`option`,{name:`Travelers`}),await N.keyboard(`{Enter}`),await P(()=>M(U(e)).toHaveLength(5)),await M(U(e).at(-1)).toBe(`submit: Trav`),await R(),await M(r).toHaveValue(`Trav`),await N.keyboard(`{Enter}`),await P(()=>M(U(e)).toHaveLength(6)),await M(U(e).at(-1)).toBe(`submit: Trav`)}},G={render:()=>(0,j.jsx)(Ue,{submitOnItemClick:!0}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await N.type(r,`clear`),await n.findByRole(`option`,{name:`Clearcover`}),await N.keyboard(`{ArrowDown}{Enter}`),await P(()=>M(U(e)).toEqual([`click: Clearcover`,`item-press: Clearcover`,`submit: Clearcover`])),await R(),await N.type(r,` Auto`),await N.keyboard(`{Enter}`),await P(()=>M(U(e)).toHaveLength(4)),await M(U(e).at(-1)).toBe(`submit: Clearcover Auto`),await new Promise(e=>setTimeout(e,100)),await M(U(e)).toHaveLength(4)}},K={render:()=>(0,j.jsxs)(k.Root,{items:I,children:[(0,j.jsx)(k.Input,{placeholder:`Carrier`,"aria-label":`Carrier`,before:(0,j.jsx)(Be,{"aria-hidden":`true`}),after:(0,j.jsx)(Te,{color:`informative`,children:`Beta`})}),(0,j.jsx)(z,{})]}),play:async({canvasElement:e})=>{let t=F(e).getByRole(`combobox`,{name:`Carrier`}),n=e.querySelector(`[data-slot="autocomplete-field"]`),r=n.querySelector(`[data-slot="autocomplete-before"]`),i=n.querySelector(`[data-slot="autocomplete-after"]`);await M(r).toHaveAttribute(`data-slot`,`autocomplete-before`),await M(F(i).getByText(`Beta`)).toBeInTheDocument(),await M(n.firstElementChild).toBe(r),await M(n.lastElementChild).toBe(i),await M(t.parentElement).toBe(n),await N.type(t,`l`),await F(document.body).findByRole(`option`,{name:`Clearcover`}),await P(()=>L(e))}},q={render:()=>(0,j.jsxs)(k.Root,{items:I,children:[(0,j.jsx)(k.Input,{placeholder:`Carrier`,"aria-label":`Carrier`}),(0,j.jsxs)(k.Content,{children:[(0,j.jsx)(k.Empty,{children:`No known carrier matches. Your text is kept as typed.`}),(0,j.jsx)(k.List,{children:e=>(0,j.jsx)(k.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await N.type(r,`Acme Mutual`),await M(await n.findByText(/No known carrier matches/)).toBeVisible(),await M(n.queryByRole(`option`)).not.toBeInTheDocument(),await N.keyboard(`{Escape}`),await P(()=>M(He()).not.toBeInTheDocument()),await M(r).toHaveValue(`Acme Mutual`)}},J={render:()=>(0,j.jsxs)(Se,{invalid:!0,required:!0,children:[(0,j.jsx)(ve,{children:`Carrier`}),(0,j.jsxs)(k.Root,{items:I,children:[(0,j.jsx)(k.Input,{placeholder:`Type a carrier`}),(0,j.jsx)(z,{})]}),(0,j.jsx)(be.Error,{errors:[{message:`Enter the carrier name`}]}),(0,j.jsx)(be.Description,{children:`The carrier that wrote the policy.`})]}),play:async({canvasElement:e})=>{let t=F(e),n=t.getByRole(`combobox`,{name:`Carrier`});await M(n).toBeRequired(),await M(n).toHaveAttribute(`aria-invalid`,`true`),await M(n).toHaveAccessibleDescription(`Enter the carrier name The carrier that wrote the policy.`);let r=t.getByText(`Carrier`).closest(`label`);await M(r).toHaveAttribute(`id`),await M(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await N.type(n,`hip`),await F(document.body).findByRole(`listbox`),await M(n).toHaveAccessibleName(`Carrier`),await N.keyboard(`{Escape}`),await R(),await M(n).toHaveValue(`hip`)}},We={"12-3456789":`Sunrise Insurance Group`,"98-7654321":`Harbor Point Agency`},Ge=e=>{let t=e.replace(/\D/g,``).slice(0,9);return t.length>2?`${t.slice(0,2)}-${t.slice(2)}`:t},Ke=({onChange:e,...t})=>(0,j.jsx)(`input`,{...t,inputMode:`numeric`,onChange:t=>{t.target.value=Ge(t.target.value),e?.(t)}}),qe=e=>{let[t,n]=(0,A.useState)(null);return(0,A.useEffect)(()=>{n(null);let t=setTimeout(()=>n(We[e]??null),150);return()=>clearTimeout(t)},[e]),t},Y=({locked:e=!1})=>{let[t,n]=(0,A.useState)(e?`12-3456789`:``),[r,i]=(0,A.useState)(``),a=qe(e?``:t);return(0,j.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,j.jsxs)(Se,{disabled:e,children:[(0,j.jsx)(ve,{children:`FEIN`}),(0,j.jsxs)(k.Root,{items:a?[a]:[],filter:null,autoHighlight:`always`,value:t,onValueChange:(e,t)=>{t.reason!==`item-press`&&n(e)},children:[(0,j.jsx)(k.Input,{placeholder:`XX-XXXXXXX`,render:e=>(0,j.jsx)(Ke,{...e})}),(0,j.jsx)(k.Content,{children:(0,j.jsx)(k.List,{children:e=>(0,j.jsx)(k.Item,{value:e,onClick:()=>i(e),children:(0,j.jsxs)(`div`,{className:`flex min-w-0 flex-col`,children:[(0,j.jsx)(`span`,{className:`truncate`,children:e}),(0,j.jsx)(`span`,{className:`truncate text-xs text-text-default-base-tertiary`,children:`Use this as agency name`})]})},e)})})]}),(0,j.jsx)(be.Description,{children:`The Federal Employer Identification Number of the agency.`})]}),(0,j.jsxs)(Se,{children:[(0,j.jsx)(ve,{children:`Agency name`}),(0,j.jsx)(fe,{value:r,onChange:e=>i(e.target.value)})]})]})},X={render:()=>(0,j.jsx)(Y,{}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body),r=t.getByRole(`combobox`,{name:`FEIN`}),i=t.getByRole(`textbox`,{name:`Agency name`});await M(r).toHaveAccessibleDescription(`The Federal Employer Identification Number of the agency.`),await N.type(r,`1234`),await M(r).toHaveValue(`12-34`),await new Promise(e=>setTimeout(e,250)),await M(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await M(n.queryByRole(`option`)).not.toBeInTheDocument(),await N.type(r,`56789`);let a=await n.findByRole(`option`,{name:/Sunrise Insurance Group/});await P(()=>M(a).toHaveAttribute(`data-highlighted`)),await P(()=>L(e)),await N.keyboard(`{Enter}`),await P(()=>M(i).toHaveValue(`Sunrise Insurance Group`)),await M(r).toHaveValue(`12-3456789`),await R(),await N.clear(i),await N.click(r),await N.keyboard(`{ArrowDown}`),await N.click(await n.findByRole(`option`,{name:/Sunrise Insurance Group/})),await P(()=>M(i).toHaveValue(`Sunrise Insurance Group`)),await M(r).toHaveValue(`12-3456789`),await R(),await N.clear(i),await N.click(r),await N.keyboard(`{ArrowDown}`),await P(()=>M(n.getByRole(`option`,{name:/Sunrise Insurance Group/})).toHaveAttribute(`data-highlighted`)),await N.tab(),await M(i).toHaveFocus(),await R(),await M(i).toHaveValue(``),await M(r).toHaveValue(`12-3456789`),await N.clear(r),await N.type(r,`123456780`),await M(r).toHaveValue(`12-3456780`),await new Promise(e=>setTimeout(e,250)),await M(n.queryByRole(`option`)).not.toBeInTheDocument()}},Z={render:()=>(0,j.jsx)(Y,{locked:!0}),play:async({canvasElement:e})=>{let t=F(e).getByRole(`combobox`,{name:`FEIN`});await M(t).toBeDisabled(),await M(t).toHaveValue(`12-3456789`),await N.click(t),await N.keyboard(`{ArrowDown}`),await M(F(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()}},Q={render:()=>(0,j.jsxs)(v.Root,{children:[(0,j.jsx)(v.Trigger,{asChild:!0,children:(0,j.jsx)(s,{variant:`secondary`,children:`Add agency`})}),(0,j.jsxs)(v.Content,{children:[(0,j.jsx)(v.Title,{children:`Add agency`}),(0,j.jsx)(v.Body,{children:(0,j.jsx)(Y,{})})]})]}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body);await N.click(t.getByRole(`button`,{name:`Add agency`}));let r=await n.findByRole(`dialog`,{name:`Add agency`}),i=F(r).getByRole(`combobox`,{name:`FEIN`}),a=F(r).getByRole(`textbox`,{name:`Agency name`});await N.type(i,`987654321`),await n.findByRole(`option`,{name:/Harbor Point Agency/}),await N.click(i),await M(n.getByRole(`listbox`)).toBeInTheDocument(),await N.click(n.getByRole(`option`,{name:/Harbor Point Agency/})),await P(()=>M(a).toHaveValue(`Harbor Point Agency`)),await M(i).toHaveValue(`98-7654321`),await R(),await M(r).toHaveAttribute(`data-state`,`open`),await N.click(i),await N.keyboard(`{ArrowDown}`),await n.findByRole(`option`,{name:/Harbor Point Agency/}),await N.keyboard(`{Escape}`),await R(),await M(r).toHaveAttribute(`data-state`,`open`),await M(i).toHaveValue(`98-7654321`),await N.keyboard(`{ArrowDown}`),await n.findByRole(`option`,{name:/Harbor Point Agency/}),await N.click(F(r).getByText(`Add agency`)),await R(),await M(r).toHaveAttribute(`data-state`,`open`),await M(i).toHaveValue(`98-7654321`),await N.click(i),await N.keyboard(`{Escape}`),await P(()=>M(r).toHaveAttribute(`data-state`,`closed`))}},Je=`Producers licensed in Texas with an expired E&O`,Ye=()=>{let[e,t]=(0,A.useState)(``),[n,r]=(0,A.useState)([`Agencies onboarded last week`,`Expired licenses`]),[i,a]=(0,A.useState)(!1),[o,s]=(0,A.useState)(``),c=(e,n)=>{let o=e.trim();o&&!i&&(a(!0),setTimeout(()=>{a(!1),s(`${o} (${n})`),r(e=>[o,...e.filter(e=>e!==o)]),t(``)},200))},l=e.trim(),u=l?[l]:n;return(0,j.jsxs)(`form`,{"aria-label":`AI filter`,className:`flex flex-col gap-4`,onSubmit:t=>{t.preventDefault(),c(e,`enter`)},children:[(0,j.jsxs)(k.Root,{items:u,filter:null,openOnInputClick:!0,value:e,onValueChange:t,children:[(0,j.jsx)(k.Input,{"aria-label":`Describe your filters`,readOnly:i,className:`read-only:cursor-wait`,before:i?(0,j.jsx)(ge,{size:`sm`,"aria-label":`Translating filters`}):(0,j.jsx)(Ve,{"aria-hidden":`true`}),after:(0,j.jsx)(Te,{color:`informative`,children:`Beta`}),render:t=>(0,j.jsxs)(`span`,{"data-slot":`ai-filter-prompt`,className:`relative flex min-w-0 flex-1`,children:[!e&&(0,j.jsx)(`span`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 flex items-center truncate text-sm text-text-input-placeholder`,children:Je}),(0,j.jsx)(`input`,{...t})]})}),(0,j.jsx)(k.Content,{children:(0,j.jsx)(k.List,{"aria-label":`AI filter suggestions`,children:e=>(0,j.jsx)(k.Item,{value:e,onClick:()=>c(e,`suggestion`),children:(0,j.jsxs)(`span`,{className:`truncate`,children:[(0,j.jsx)(`span`,{className:`text-text-default-base-tertiary`,children:`AI Filter `}),e]})},e)})})]}),(0,j.jsxs)(`p`,{className:`text-sm text-text-default-base-secondary`,children:[`Last run: `,(0,j.jsx)(`output`,{"aria-label":`Last run`,children:o})]})]})},$={render:()=>(0,j.jsx)(Ye,{}),play:async({canvasElement:e})=>{let t=F(e),n=F(document.body),r=t.getByRole(`combobox`,{name:`Describe your filters`}),i=t.getByRole(`status`,{name:`Last run`});await M(t.getByText(Je)).toHaveAttribute(`aria-hidden`,`true`),await N.click(r),await P(()=>M(n.getAllByRole(`option`)).toHaveLength(2)),await P(()=>L(e)),await N.click(n.getByRole(`option`,{name:/Expired licenses/})),await M(t.getByRole(`status`,{name:`Translating filters`})).toBeInTheDocument(),await M(r).toHaveAttribute(`readonly`),await P(()=>M(i).toHaveTextContent(`Expired licenses (suggestion)`)),await M(r).toHaveValue(``),await N.type(r,`Producers in Ohio`),await n.findByRole(`option`,{name:/Producers in Ohio/}),await N.keyboard(`{Enter}`),await P(()=>M(i).toHaveTextContent(`Producers in Ohio (enter)`)),await N.type(r,`Agencies in Utah`),await N.click(t.getByText(/Last run:/)),await R(),await M(r).toHaveValue(`Agencies in Utah`)}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Autocomplete.Root items={CARRIERS}>
            <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
            <CarrierList />
        </Autocomplete.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });
    await expect(input).toHaveAttribute('data-slot', 'autocomplete-input');
    await userEvent.type(input, 'o');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(5));
    await waitFor(() => expectListAlignedWithField(canvasElement));
    await expect(body.getByRole('listbox')).toHaveAccessibleName('Suggestions');
    await userEvent.type(input, 'pen');
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(1));
    await userEvent.click(body.getByRole('option', {
      name: 'Openly'
    }));
    await waitFor(() => expect(input).toHaveValue('Openly'));
    await waitForListClosed();
  }
}`,...B.parameters?.docs?.source},description:{story:`Suggestions from memory, filtered by Base UI against the text. Typing opens
the list; picking a row writes its text into the field. Any other text is
just as valid a value.

@summary Free-text field filtering an in-memory list of suggestions`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <Autocomplete.Root items={CARRIERS}>
                <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
                <CarrierList />
            </Autocomplete.Root>
            <Button variant="secondary">Next</Button>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });
    await userEvent.type(input, 'Prog');
    await body.findByRole('option', {
      name: 'Progressive'
    });
    await userEvent.tab();
    await waitForListClosed();
    await expect(input).toHaveValue('Prog');

    // A click outside closes the list as well, and keeps the text too.
    await userEvent.click(input);
    await userEvent.type(input, 'ressive Direct');
    // By text: while the list is open, Base UI hides the rest of the page from the role queries.
    await userEvent.click(canvas.getByText('Next'));
    await waitForListClosed();
    await expect(input).toHaveValue('Progressive Direct');
  }
}`,...V.parameters?.docs?.source},description:{story:`Leaving the field keeps the text, whether it matches a suggestion or not.
A Combobox would empty it here, since its value must be an option.

@summary Blurring the field keeps the typed text`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Autocomplete.Root items={CARRIERS}>
            <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
            <CarrierList />
        </Autocomplete.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });
    await userEvent.type(input, 'Lem');
    await body.findByRole('option', {
      name: 'Lemonade'
    });
    await userEvent.keyboard('{Escape}');
    await waitForListClosed();
    await expect(input).toHaveValue('Lem');
    await userEvent.keyboard('{Escape}');
    await expect(input).toHaveValue('Lem');
    await expect(input).toHaveFocus();
  }
}`,...H.parameters?.docs?.source},description:{story:`Escape closes the list and keeps the text. A second Escape, on a shut list,
keeps it as well: Base UI would empty the field there, as a native search
input does, and this field's text is its value.

@summary Escape closes the list and never empties the field`,...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <PickOrSubmitDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });

    // Click on a row.
    await userEvent.type(input, 'hip');
    await userEvent.click(await body.findByRole('option', {
      name: 'Hippo'
    }));
    await waitFor(() => expect(events(canvasElement)).toEqual(['click: Hippo', 'item-press: Hippo']));
    await expect(input).toHaveValue('Hippo');
    await waitForListClosed();

    // Enter on the highlighted row: the same two events, and no submit.
    await userEvent.clear(input);
    await userEvent.type(input, 'trav');
    await body.findByRole('option', {
      name: 'Travelers'
    });
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(body.getByRole('option', {
      name: 'Travelers'
    })).toHaveAttribute('data-highlighted'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(input).toHaveValue('Travelers'));
    await expect(events(canvasElement)).toEqual(['click: Hippo', 'item-press: Hippo', 'click: Travelers', 'item-press: Travelers']);
    await waitForListClosed();

    // Enter with the list open and nothing highlighted: one submit with the typed text.
    await userEvent.clear(input);
    await userEvent.type(input, 'Trav');
    await body.findByRole('option', {
      name: 'Travelers'
    });
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(events(canvasElement)).toHaveLength(5));
    await expect(events(canvasElement).at(-1)).toBe('submit: Trav');
    await waitForListClosed();
    await expect(input).toHaveValue('Trav');

    // Enter on a shut list submits too.
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(events(canvasElement)).toHaveLength(6));
    await expect(events(canvasElement).at(-1)).toBe('submit: Trav');
  }
}`,...W.parameters?.docs?.source},description:{story:`Telling a pick from a plain Enter, with Base UI's own events. A pick, by
click or by Enter on the highlighted row, fires the row's \`onClick\`, then
\`onValueChange\` with the reason \`'item-press'\`, and does not submit the form.
Enter with no row highlighted submits the form with the typed text. Each
fires once.

@summary Item onClick and item-press for a pick, form submit for Enter`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <PickOrSubmitDemo submitOnItemClick />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });
    await userEvent.type(input, 'clear');
    await body.findByRole('option', {
      name: 'Clearcover'
    });
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(events(canvasElement)).toEqual(['click: Clearcover', 'item-press: Clearcover', 'submit: Clearcover']));
    await waitForListClosed();
    await userEvent.type(input, ' Auto');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(events(canvasElement)).toHaveLength(4));
    await expect(events(canvasElement).at(-1)).toBe('submit: Clearcover Auto');
    // Nothing else lands after a moment: one submit per Enter.
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(events(canvasElement)).toHaveLength(4);
  }
}`,...G.parameters?.docs?.source},description:{story:`With \`submitOnItemClick\`, a pick also submits the owning form, once, with
the picked text already in the field. The row's \`onClick\` still fires first,
so a handler can still tell a pick from a plain Enter. This form has a submit
button, and a plain Enter still submits it once.

@summary A pick submits the owning form once, after the item events`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Autocomplete.Root items={CARRIERS}>
            <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" before={<IconSearch aria-hidden="true" />} after={<Tag color="informative">Beta</Tag>} />
            <CarrierList />
        </Autocomplete.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });
    const field = canvasElement.querySelector('[data-slot="autocomplete-field"]')!;
    const before = field.querySelector('[data-slot="autocomplete-before"]');
    const after = field.querySelector('[data-slot="autocomplete-after"]');
    await expect(before).toHaveAttribute('data-slot', 'autocomplete-before');
    await expect(within(after as HTMLElement).getByText('Beta')).toBeInTheDocument();
    // Reading order inside the one frame: icon, input, tag.
    await expect(field.firstElementChild).toBe(before);
    await expect(field.lastElementChild).toBe(after);
    await expect(input.parentElement).toBe(field);
    await userEvent.type(input, 'l');
    await within(document.body).findByRole('option', {
      name: 'Clearcover'
    });
    await waitFor(() => expectListAlignedWithField(canvasElement));
  }
}`,...K.parameters?.docs?.source},description:{story:"`before` and `after` place content inside the field's frame, each wrapped in\nan `InputGroup.Addon`: an icon in front, a tag after. The list still hangs\nfrom the whole frame.\n\n@summary Icon before and tag after the input, inside the same frame",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Autocomplete.Root items={CARRIERS}>
            <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
            <Autocomplete.Content>
                <Autocomplete.Empty>
                    No known carrier matches. Your text is kept as typed.
                </Autocomplete.Empty>
                <Autocomplete.List>
                    {(carrier: string) => <Autocomplete.Item key={carrier} value={carrier}>
                            {carrier}
                        </Autocomplete.Item>}
                </Autocomplete.List>
            </Autocomplete.Content>
        </Autocomplete.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });
    await userEvent.type(input, 'Acme Mutual');
    await expect(await body.findByText(/No known carrier matches/)).toBeVisible();
    await expect(body.queryByRole('option')).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(surface()).not.toBeInTheDocument());
    await expect(input).toHaveValue('Acme Mutual');
  }
}`,...q.parameters?.docs?.source},description:{story:`With an \`Empty\` message, the list opens even when nothing matches, to say
so. Without one, as in every other story, a field with nothing to suggest
stays shut. Either way the text stays as typed.

@summary Message shown in the list when no suggestion matches`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <FieldText invalid required>
            <Label>Carrier</Label>
            <Autocomplete.Root items={CARRIERS}>
                <Autocomplete.Input placeholder="Type a carrier" />
                <CarrierList />
            </Autocomplete.Root>
            <Field.Error errors={[{
      message: 'Enter the carrier name'
    }]} />
            <Field.Description>The carrier that wrote the policy.</Field.Description>
        </FieldText>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });
    await expect(input).toBeRequired();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('Enter the carrier name The carrier that wrote the policy.');
    const label = canvas.getByText('Carrier').closest('label');
    await expect(label).toHaveAttribute('id');
    await expect(input).toHaveAttribute('aria-labelledby', label?.getAttribute('id') ?? '');
    await userEvent.type(input, 'hip');
    await within(document.body).findByRole('listbox');
    await expect(input).toHaveAccessibleName('Carrier');
    await userEvent.keyboard('{Escape}');
    await waitForListClosed();
    await expect(input).toHaveValue('hip');
  }
}`,...J.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` the input takes the label, the description and the
error with nothing wired by hand, and points \`aria-labelledby\` at the label
so the name survives the list opening.

@summary Label, description and error wired from the surrounding FieldText`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <LookupDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'FEIN'
    });
    const name = canvas.getByRole('textbox', {
      name: 'Agency name'
    });
    await expect(input).toHaveAccessibleDescription('The Federal Employer Identification Number of the agency.');

    // No result for a partial number: nothing shows.
    await userEvent.type(input, '1234');
    await expect(input).toHaveValue('12-34');
    await new Promise(resolve => setTimeout(resolve, 250));
    await expect(body.queryByRole('listbox')).not.toBeInTheDocument();
    await expect(body.queryByRole('option')).not.toBeInTheDocument();

    // The full number finds an agency, offered highlighted.
    await userEvent.type(input, '56789');
    const option = await body.findByRole('option', {
      name: /Sunrise Insurance Group/
    });
    await waitFor(() => expect(option).toHaveAttribute('data-highlighted'));
    await waitFor(() => expectListAlignedWithField(canvasElement));

    // Enter picks it: the name is filled, the number is untouched.
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(name).toHaveValue('Sunrise Insurance Group'));
    await expect(input).toHaveValue('12-3456789');
    await waitForListClosed();

    // A click picks it the same way.
    await userEvent.clear(name);
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.click(await body.findByRole('option', {
      name: /Sunrise Insurance Group/
    }));
    await waitFor(() => expect(name).toHaveValue('Sunrise Insurance Group'));
    await expect(input).toHaveValue('12-3456789');
    await waitForListClosed();

    // Tab with the list open closes it and moves on to the next field, without picking.
    await userEvent.clear(name);
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(body.getByRole('option', {
      name: /Sunrise Insurance Group/
    })).toHaveAttribute('data-highlighted'));
    await userEvent.tab();
    await expect(name).toHaveFocus();
    await waitForListClosed();
    await expect(name).toHaveValue('');
    await expect(input).toHaveValue('12-3456789');

    // A number with no agency behind it: nothing shows.
    await userEvent.clear(input);
    await userEvent.type(input, '123456780');
    await expect(input).toHaveValue('12-3456780');
    await new Promise(resolve => setTimeout(resolve, 250));
    await expect(body.queryByRole('option')).not.toBeInTheDocument();
  }
}`,...X.parameters?.docs?.source},description:{story:`A lookup: the typed number is the value, and what a lookup finds for it is
offered as a single suggestion that starts highlighted (\`autoHighlight="always"\`).
Picking it, by click or Enter, fills another field from the row's \`onClick\`;
the controlled \`value\` ignores the \`'item-press'\` change, so the number stays
as typed. With no lookup result the list shows nothing. Tab closes the list
and moves to the next field without picking. The input is a
masked one, swapped in through \`render\`.

@summary Single highlighted lookup result that fills another field`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <LookupDemo locked />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'FEIN'
    });
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue('12-3456789');
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(document.body).queryByRole('listbox')).not.toBeInTheDocument();
  }
}`,...Z.parameters?.docs?.source},description:{story:`A locked lookup: the field is disabled, so the list never opens, even with a
number that a lookup would answer.

@summary Disabled lookup field that never opens its list`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Add agency</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Add agency</Modal.Title>
                <Modal.Body>
                    <LookupDemo />
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add agency'
    }));
    const dialog = await body.findByRole('dialog', {
      name: 'Add agency'
    });
    const input = within(dialog).getByRole('combobox', {
      name: 'FEIN'
    });
    const name = within(dialog).getByRole('textbox', {
      name: 'Agency name'
    });
    await userEvent.type(input, '987654321');
    await body.findByRole('option', {
      name: /Harbor Point Agency/
    });

    // A click on the field itself keeps the list open.
    await userEvent.click(input);
    await expect(body.getByRole('listbox')).toBeInTheDocument();
    await userEvent.click(body.getByRole('option', {
      name: /Harbor Point Agency/
    }));
    await waitFor(() => expect(name).toHaveValue('Harbor Point Agency'));
    await expect(input).toHaveValue('98-7654321');
    await waitForListClosed();
    await expect(dialog).toHaveAttribute('data-state', 'open');

    // Escape closes the list, not the dialog.
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}');
    await body.findByRole('option', {
      name: /Harbor Point Agency/
    });
    await userEvent.keyboard('{Escape}');
    await waitForListClosed();
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await expect(input).toHaveValue('98-7654321');

    // A click outside the field closes it too.
    await userEvent.keyboard('{ArrowDown}');
    await body.findByRole('option', {
      name: /Harbor Point Agency/
    });
    await userEvent.click(within(dialog).getByText('Add agency'));
    await waitForListClosed();
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await expect(input).toHaveValue('98-7654321');

    // With the list shut, Escape closes the dialog.
    await userEvent.click(input);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...Q.parameters?.docs?.source},description:{story:`The lookup inside a \`Modal\`. A click on the field keeps the list open, a
pick fills the other field without closing the dialog, and Escape or a click
outside close the list, keeping the number. Escape on the shut field then
closes the dialog.

@summary Lookup inside a Modal, dismissed by Escape or a click outside`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <PromptDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Describe your filters'
    });
    const lastRun = canvas.getByRole('status', {
      name: 'Last run'
    });
    await expect(canvas.getByText(PROMPT_EXAMPLE)).toHaveAttribute('aria-hidden', 'true');

    // A click opens the recent prompts.
    await userEvent.click(input);
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));
    await waitFor(() => expectListAlignedWithField(canvasElement));
    await userEvent.click(body.getByRole('option', {
      name: /Expired licenses/
    }));
    await expect(canvas.getByRole('status', {
      name: 'Translating filters'
    })).toBeInTheDocument();
    await expect(input).toHaveAttribute('readonly');
    await waitFor(() => expect(lastRun).toHaveTextContent('Expired licenses (suggestion)'));
    await expect(input).toHaveValue('');

    // Typing offers to run the text; Enter with nothing highlighted runs it through the form.
    await userEvent.type(input, 'Producers in Ohio');
    await body.findByRole('option', {
      name: /Producers in Ohio/
    });
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(lastRun).toHaveTextContent('Producers in Ohio (enter)'));

    // A click outside keeps an unsent prompt.
    await userEvent.type(input, 'Agencies in Utah');
    await userEvent.click(canvas.getByText(/Last run:/));
    await waitForListClosed();
    await expect(input).toHaveValue('Agencies in Utah');
  }
}`,...$.parameters?.docs?.source},description:{story:`A prompt field like the AI filter: an icon that turns into a spinner while
the prompt runs and a Beta tag, both inside the frame, and an example
overlaid on the empty input through \`render\`. The suggestion is "run what
you typed" or, with nothing typed, the recent prompts. A pick runs it from
the row's \`onClick\`; Enter with no row highlighted runs the typed text from
the form's submit.

@summary AI prompt with recent prompts, a spinner and a tag in the frame`,...$.parameters?.docs?.description}}},Xe=[`Default`,`KeepsTextOnBlur`,`KeepsTextOnEscape`,`PickOrSubmit`,`SubmitOnItemClick`,`WithBeforeAndAfter`,`WithEmptyMessage`,`InsideFieldText`,`Lookup`,`LookupLocked`,`LookupInsideModal`,`Prompt`]})))()}Ze();export{B as Default,J as InsideFieldText,V as KeepsTextOnBlur,H as KeepsTextOnEscape,X as Lookup,Q as LookupInsideModal,Z as LookupLocked,W as PickOrSubmit,$ as Prompt,G as SubmitOnItemClick,K as WithBeforeAndAfter,q as WithEmptyMessage,Xe as __namedExportsOrder,ze as default};