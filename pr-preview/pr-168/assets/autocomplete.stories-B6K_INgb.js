import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BLdgkCmp.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./utils-nsk-j2e0.js";import{n as o,t as s}from"./button-gi2sl-z7.js";import{C as c,S as l,_ as u,a as d,b as ee,c as te,d as f,f as p,g as m,h as ne,i as re,l as ie,m as ae,n as oe,p as se,t as ce,u as le,v as ue,x as de,y as fe}from"./combobox-Bs8gFsEP.js";import{n as pe,t as h}from"./label-BYao1Rje.js";import{n as me,t as g}from"./field-DJmQD8uh.js";import{n as he,r as ge,t as _e}from"./input-BBJwF7Ec.js";import{n as ve,t as ye}from"./input-group-2nonZMVI.js";import{n as be,t as xe}from"./checkbox-QYuGXvgB.js";import{n as Se,t as _}from"./field-text-DlZa1zp7.js";import{n as Ce,t as we}from"./loading-Bm4_fV8c.js";import{n as Te,t as v}from"./modal-BVC-CiJD.js";import{n as Ee,t as De}from"./tag-Bt5ADmJp.js";function Oe(e){let{openOnInputClick:t=!1,value:n,defaultValue:r,onValueChange:i,mode:a=`list`,itemToStringValue:o,...s}=e,c=(a===`inline`||a===`both`)&&!e.readOnly,l=a===`inline`||a===`none`,u=n!==void 0,[d,te]=y.useState(r??``),[f,p]=y.useState(``);y.useEffect(()=>{(u||!c)&&p(``)},[n,u,c]);let m;m=c&&f!==``?f:u?n??``:d;let re=ue({locale:s.locale}),ie=String((u?n:d)??``).trim(),ae=l||s.filter===null?null:s.filter??re.contains;function oe(e,t){p(``),u||te(e),i?.(e,t)}function se(t,n){e.onItemHighlighted?.(t,n),n.reason!==`pointer`&&p(c&&t!=null?ee(t,o):``)}return(0,ke.jsx)(ne,{...s,itemToStringLabel:o,openOnInputClick:t,selectionMode:`none`,fillInputOnItemPress:!0,filter:ae,filterQuery:a===`both`?ie:void 0,autoComplete:a,inputValue:m,defaultInputValue:r,onInputValueChange:oe,onItemHighlighted:se})}var y,ke;function Ae(){return(Ae=t((()=>{y=e(n(),1),m(),u(),fe(),c(),ke=r()})))()}var je;function Me(){return(Me=t((()=>{p(),je=f})))()}function Ne(){return l().filteredItems}function Pe(){return(Pe=t((()=>{de()})))()}var b,x,S,Fe,C,w,Ie,Le,Re,ze,Be,T,E,D,O,k;function Ve(){return(Ve=t((()=>{b=n(),Pe(),Ae(),Me(),ae(),i(),te(),ie(),he(),ve(),x=r(),S=(0,b.createContext)(null),Fe=({onChange:e})=>{let t=Ne().length>0;return(0,b.useLayoutEffect)(()=>e(t),[t,e]),null},C=({value:e,defaultValue:t=``,onValueChange:n,children:r,...i})=>{let[a,o]=(0,b.useState)(t),s=e??a,[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!1),[ee,te]=(0,b.useState)(!1),f=i.items!==void 0||i.filteredItems!==void 0,p=c&&(!f||u||ee),m=(0,b.useRef)(p);(0,b.useLayoutEffect)(()=>{m.current=p},[p]);let ne=(t,r)=>{if(r.reason===`escape-key`){r.cancel(),c?(l(!1),r.event.stopPropagation()):r.allowPropagation();return}n?.(t,r),e===void 0&&!r.isCanceled&&o(t)},re=(0,b.useMemo)(()=>({setHasEmpty:te,dismiss:()=>{m.current||l(!1)}}),[]);return(0,x.jsx)(S,{value:re,children:(0,x.jsxs)(Oe,{...i,value:s,onValueChange:ne,open:p,onOpenChange:l,children:[r,f&&(0,x.jsx)(Fe,{onChange:d})]})})},C.displayName=`Autocomplete.Root`,w=e=>e!=null&&e!==!1,Ie=e=>(e instanceof HTMLButtonElement||e instanceof HTMLInputElement)&&e.type===`submit`,Le=new Set([`text`,`search`,`url`,`tel`,`email`,`password`,`date`,`month`,`week`,`time`,`datetime-local`,`number`]),Re=e=>e instanceof HTMLInputElement&&Le.has(e.type)&&(e.tabIndex!==-1||e.getAttribute(`aria-hidden`)!==`true`),ze=e=>{let t=Array.from(e.elements).find(Ie);if(t){t.click();return}Array.from(e.elements).filter(Re).length<=1&&e.requestSubmit()},Be=e=>{let t=e.target;e.key!==`Enter`||e.defaultPrevented||e.nativeEvent.isComposing||t instanceof HTMLInputElement&&t.dataset.slot===`autocomplete-input`&&t.form&&(e.preventDefault(),ze(t.form))},T=({before:e,after:t,...n})=>{let{className:r,size:i=`md`,onBlur:o,...s}=le(n),c=(0,b.use)(S),l=!w(e)&&!w(t);return(0,x.jsxs)(je,{render:(0,x.jsx)(ye.Root,{}),"data-slot":`autocomplete-field`,onKeyDown:Be,className:l?`px-4`:void 0,children:[w(e)&&(0,x.jsx)(ye.Addon,{"data-slot":`autocomplete-before`,children:e}),(0,x.jsx)(se,{"data-slot":`autocomplete-input`,"data-size":i,className:a(ge({size:i}),r),onBlur:e=>{o?.(e),c?.dismiss()},...s}),w(t)&&(0,x.jsx)(ye.Addon,{"data-slot":`autocomplete-after`,children:t})]})},T.displayName=`Autocomplete.Input`,E=e=>{let t=(0,b.use)(S)?.setHasEmpty,n=b.Children.toArray(e.children).some(e=>(0,b.isValidElement)(e)&&e.type===k);return(0,b.useLayoutEffect)(()=>(t?.(n),()=>t?.(!1)),[t,n]),(0,x.jsx)(ce,{"data-slot":`autocomplete-content`,...e})},E.displayName=`Autocomplete.Content`,D=e=>(0,x.jsx)(d,{"data-slot":`autocomplete-list`,...e}),D.displayName=`Autocomplete.List`,O=e=>(0,x.jsx)(re,{"data-slot":`autocomplete-item`,...e}),O.displayName=`Autocomplete.Item`,k=e=>(0,x.jsx)(oe,{"data-slot":`autocomplete-empty`,...e}),k.displayName=`Autocomplete.Empty`;try{C.displayName=`Autocomplete.Root`,C.__docgenInfo={description:"Root of an autocomplete: a text field whose value is the text itself, with a\nlist of suggestions below it. Nothing is selected. Leaving the field, closing\nthe list and pressing Escape all keep what was typed.\n\nUse it for a free-text field that suggests: a prompt with recent queries, a\nnumber field that offers what a lookup found. When the value must be one of\nthe options, use [Combobox](?path=/docs/components-combobox--docs) instead:\nit writes the picked option back and drops text that matches none.\n\nPass the suggestions as `items`. Base UI filters them against the text; set\n`filter={null}` when they are already the ones to show. With `items`, the\nlist opens only while it has a row to show, or always when it holds an\n`Empty` message: a field with nothing to suggest stays shut, and one whose\nsuggestions arrive late (a lookup still running) opens when they do, if the\nuser is still in the field.\n`autoHighlight` highlights the first row as the user types, and `'always'`\nhighlights it as soon as it renders, which suits a single suggestion.\n\nEvery Base UI root prop is accepted and forwarded: `value`, `defaultValue`,\n`onValueChange`, `items`, `filter`, `autoHighlight`, `openOnInputClick`\nand so on, except two. The open state (`open`, `defaultOpen`,\n`onOpenChange`) is left out, since the root decides when the list shows.\n`submitOnItemClick` is left out too: to submit on a pick, run the submit\nfrom the row's `onClick` with the row's value. Base UI empties the field on Escape while the\nlist is shut, as a native search input does; this root keeps the text\ninstead, and does not report that change. Escape while the list waits for\nlate suggestions drops the wait, so they no longer open it. Inside a `Modal`\nor `Popover`, Escape on an open list closes the list only, and the next one\ncloses the layer.\n\nPicking a row and pressing Enter are told apart with Base UI's own events:\n\n- A pick, by pointer or by Enter on the highlighted row, fires the row's\n  `onClick` and then `onValueChange` with `eventDetails.reason` set to\n  `'item-press'`, carrying the row's text. Base UI stops that Enter, so the\n  form is not submitted as well.\n- Enter with no row highlighted closes the list and submits the owning form\n  once, as the browser would: by clicking its default button, so the\n  button's `onClick` runs, and not while that button is disabled. With no submit button the form submits only when\n  this is its one text field.\n- A pick fills the field with the row's text. To keep the typed text, call\n  `eventDetails.cancel()` when the reason is `'item-press'`, or ignore that\n  change on a controlled `value`: the row's `onClick` can then write\n  elsewhere.",displayName:`Autocomplete.Root`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{},tags:{summary:`Free-text field with a list of suggestions below it`,see:`{@link https://base-ui.com/react/components/autocomplete Base UI Autocomplete}`,example:`\`\`\`tsx
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
\`\`\``}}}catch{}try{T.displayName=`Autocomplete.Input`,T.__docgenInfo={description:"The text field. Typing opens the list, as does ArrowDown; a click opens it\nonly under `openOnInputClick`. A click on the field never closes it; Escape\nand a click outside do, and both keep the text.\n\nIt wears the same styling as `Input` and takes the same wiring from\n`InputContext`, so inside a `FieldText` the label, the hint and the error\npoint at it with nothing passed by hand. Its own props win over the context.\nA `value`, `defaultValue` or `onChange` in the context is ignored: the text\nis the root's, so bind it through `Root`'s `value` and `onValueChange`.\nInside a field it also names itself with `aria-labelledby` pointing at the\nlabel: while the list is open, Base UI hides everything but the input and\nthe list from assistive technology, and a `<label for>` alone stops naming\nit. Outside a field, give it `aria-label` or an `aria-labelledby` of your\nown.\n\nIt is drawn as an `InputGroup` frame, and the list anchors to that whole\nframe, so it is as wide as the field whatever sits in `before` and `after`.\n\nEvery native input attribute is accepted and forwarded to the `<input>`:\n`placeholder`, `readOnly`, `inputMode`. `className` styles the `<input>`.\nBase UI's `render` swaps the element: pass a function that spreads the props\nit receives onto a masked input, or onto a wrapper's `<input>` when the\nfield needs an overlay of its own.",displayName:`Autocomplete.Input`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxInputState) => string)`}},style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxInputState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxInputState>`}},size:{defaultValue:null,declarations:[{fileName:`design-system/src/autocomplete/autocomplete.tsx`,name:`TypeLiteral`}],description:"Control height, matching `Input`. Defaults to `'md'`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},before:{defaultValue:null,declarations:[{fileName:`design-system/src/autocomplete/autocomplete.tsx`,name:`TypeLiteral`}],description:`Content in front of the input, inside the frame: an icon, a spinner while
a request runs. Wrapped in an \`InputGroup.Addon\`, so an icon takes the
input's colour and size. Decoration: hide an icon from assistive
technology, and name a spinner.`,name:`before`,required:!1,tags:{},type:{name:`ReactNode`}},after:{defaultValue:null,declarations:[{fileName:`design-system/src/autocomplete/autocomplete.tsx`,name:`TypeLiteral`}],description:"Content after the input, inside the frame: a `Tag`, a unit, a button.\nWrapped in an `InputGroup.Addon`; a tag tucks into the frame's padding.",name:`after`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Text field inside a frame with optional content before and after`,dataAttribute:`{string} data-slot - Always set to "autocomplete-input"`}}}catch{}try{E.displayName=`Autocomplete.Content`,E.__docgenInfo={description:"The floating surface holding the suggestions. It portals to the body, is as\nwide as the field's frame, and caps its height to the space available. It\nworks inside a `Modal`.\n\nUnder a root with `items`, it opens only while the list has a row, unless\nit holds an `Empty` message as a direct child; see `Root`.\n\nAccepts the positioning props `side`, `align`, `sideOffset`, `alignOffset`,\n`anchor` and `collisionPadding`, with the same defaults as Combobox: below\nthe field, from its left edge, 12px away.",displayName:`Autocomplete.Content`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxPopupState) => string)`}},style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxPopupState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxPopupState>`}}},tags:{summary:`Floating surface under the field, holding the suggestions`,dataAttribute:`{string} data-slot - Always set to "autocomplete-content"`}}}catch{}try{D.displayName=`Autocomplete.List`,D.__docgenInfo={description:`Scrollable container for the suggestions. Give it a function as its child
to render one \`Item\` per entry of the root's \`items\`, or render the rows by
hand.

It carries a generic \`aria-label\`, "Suggestions". Name it after the field
when a page has more than one. It cannot borrow the input's name: a
reference to a text field resolves to its value.`,displayName:`Autocomplete.List`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxListState) => string)`}},style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxListState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxListState>`}}},tags:{summary:`Scrollable list of the suggestions`,dataAttribute:`{string} data-slot - Always set to "autocomplete-list"`}}}catch{}try{O.displayName=`Autocomplete.Item`,O.__docgenInfo={description:"A suggestion. `value` is what the root writes into the field when the row is\npicked: a string, an object of shape `{ value, label }`, or anything the\nroot's `itemToStringValue` turns into text.\n\n`onClick` fires on a pick by pointer and on Enter while the row is\nhighlighted, before the root's `onValueChange` reports `'item-press'`. Run\nthe suggestion there, or write it to another field and cancel the\n`'item-press'` change to leave the typed text alone.",displayName:`Autocomplete.Item`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxItemState) => string)`}},style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxItemState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxItemState>`}}},tags:{summary:`Suggestion row inside the list`,dataAttribute:`{string} data-slot - Always set to "autocomplete-item"
{string} data-highlighted - Present while the row is highlighted`}}}catch{}try{k.displayName=`Autocomplete.Empty`,k.__docgenInfo={description:"Shown in place of the rows when no suggestion matches the text, and\nannounced politely. It needs `items` on `Root` to know the list is empty,\nand it must be a direct child of `Content`, which reads it there.\nLeave it out when a field with nothing to suggest should show nothing at\nall.",displayName:`Autocomplete.Empty`,filePath:`/home/runner/work/design-system/design-system/src/autocomplete/autocomplete.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`CSS class applied to the element, or a function that
returns a class based on the component's state.`,name:`className`,required:!1,tags:{},type:{name:`string | ((state: ComboboxEmptyState) => string)`}},style:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Style applied to the element, or a function that
returns a style object based on the component's state.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | ((state: ComboboxEmptyState) => CSSProperties)`}},render:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@base-ui/react/internals/types.d.mts`,name:`TypeLiteral`}],description:`Allows you to replace the component's HTML element
with a different tag, or compose it with another component.

Accepts a \`ReactElement\` or a function that returns the element to render.`,name:`render`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxEmptyState>`}}},tags:{summary:`Message shown when no suggestion matches the text`,dataAttribute:`{string} data-slot - Always set to "autocomplete-empty"`}}}catch{}})))()}var A;function He(){return(He=t((()=>{Ve(),A={Root:C,Input:T,Content:E,List:D,Item:O,Empty:k}})))()}var j,M,N,P,Ue,F,I,L,We,Ge,Ke,R,qe,z,B,V,H,U,W,G,K,q,J,Y,Je,Ye,Xe,X,Z,Q,$,Ze;function Qe(){return(Qe=t((()=>{j=n(),He(),o(),be(),me(),Se(),he(),pe(),Ce(),Te(),Ee(),M=r(),{expect:N,fn:P,mocked:Ue,userEvent:F,waitFor:I,within:L}=__STORYBOOK_MODULE_TEST__,We={title:`Components/Autocomplete`,component:A.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`}}},decorators:[e=>(0,M.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,M.jsx)(e,{})})]},Ge=e=>(0,M.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,M.jsx)(`path`,{d:`M9.52 15.615q-2.562 0-4.34-1.777Q3.405 12.062 3.405 9.5T5.18 5.162q1.776-1.777 4.338-1.777t4.339 1.777q1.777 1.776 1.777 4.338 0 1.071-.36 2.046a5.7 5.7 0 0 1-.96 1.696l5.754 5.754q.209.209.213.522a.7.7 0 0 1-.213.532.72.72 0 0 1-.527.217.72.72 0 0 1-.527-.217l-5.753-5.754q-.75.62-1.725.97t-2.018.35m0-1.5q1.933 0 3.273-1.341 1.342-1.34 1.342-3.274 0-1.932-1.342-3.274-1.34-1.341-3.274-1.341-1.932 0-3.274 1.34Q4.904 7.569 4.904 9.5q0 1.933 1.341 3.274 1.342 1.341 3.274 1.341`})}),Ke=e=>(0,M.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,M.jsx)(`path`,{d:`M12 14.7769L14.6211 16.7615C14.8019 16.8884 14.9843 16.8926 15.1682 16.774C15.3522 16.6554 15.4089 16.4891 15.3384 16.275L14.3461 12.9923L16.9065 11.1716C17.0944 11.0316 17.1515 10.8571 17.0778 10.6481C17.0041 10.4391 16.8573 10.3346 16.6374 10.3346H13.5038L12.4365 6.88658C12.36 6.67246 12.2146 6.5654 12.0003 6.5654C11.786 6.5654 11.6404 6.67246 11.5635 6.88658L10.4961 10.3346H7.36255C7.14265 10.3346 6.99584 10.4391 6.92212 10.6481C6.84841 10.8571 6.90551 11.0316 7.09343 11.1716L9.65383 12.9923L8.66153 16.275C8.59101 16.4891 8.64774 16.6554 8.83173 16.774C9.01569 16.8926 9.19806 16.8884 9.37883 16.7615L12 14.7769ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5766 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45271 3.248 8.29658C3.74667 7.14043 4.42342 6.13474 5.27825 5.27953C6.1331 4.42429 7.13834 3.74723 8.29398 3.24835C9.44959 2.74947 10.6844 2.50002 11.9983 2.50002C13.3122 2.50002 14.5473 2.74936 15.7034 3.24803C16.8596 3.74669 17.8652 4.42344 18.7205 5.27828C19.5757 6.13313 20.2527 7.13837 20.7516 8.294C21.2505 9.44962 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8653 18.7217 18.7205C17.8669 19.5757 16.8616 20.2528 15.706 20.7517C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2166 20 16.1041 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1041 4.77917 14.2166 4 12 4C9.78331 4 7.89581 4.77917 6.33748 6.3375C4.77914 7.89583 3.99998 9.78333 3.99998 12C3.99998 14.2167 4.77914 16.1042 6.33748 17.6625C7.89581 19.2208 9.78331 20 12 20Z`})}),R=[`Clearcover`,`Hippo`,`Lemonade`,`Openly`,`Progressive`,`Travelers`],qe=()=>document.body.querySelector(`[data-slot="autocomplete-content"]`),z=e=>{let t=e.querySelector(`[data-slot="autocomplete-field"]`).getBoundingClientRect(),n=qe().getBoundingClientRect();N(n.width).toBeCloseTo(t.width,0),N(n.left).toBeCloseTo(t.left,0)},B=()=>I(()=>N(L(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()),V={render:()=>(0,M.jsxs)(A.Root,{items:R,children:[(0,M.jsx)(A.Input,{placeholder:`Carrier`,"aria-label":`Carrier`}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=L(e),n=L(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await N(r).toHaveAttribute(`data-slot`,`autocomplete-input`),await F.type(r,`o`),await I(()=>N(n.getAllByRole(`option`)).toHaveLength(5)),await I(()=>z(e)),await N(n.getByRole(`listbox`)).toHaveAccessibleName(`Suggestions`),await F.type(r,`pen`),await I(()=>N(n.getAllByRole(`option`)).toHaveLength(1)),await F.click(n.getByRole(`option`,{name:`Openly`})),await I(()=>N(r).toHaveValue(`Openly`)),await B()}},H={render:()=>(0,M.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,M.jsxs)(A.Root,{items:R,children:[(0,M.jsx)(A.Input,{placeholder:`Carrier`,"aria-label":`Carrier`}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})})]}),(0,M.jsx)(s,{variant:`secondary`,children:`Next`})]}),play:async({canvasElement:e})=>{let t=L(e),n=L(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await F.type(r,`Prog`),await n.findByRole(`option`,{name:`Progressive`}),await F.tab(),await B(),await N(r).toHaveValue(`Prog`),await F.click(r),await F.type(r,`ressive Direct`),await F.click(t.getByText(`Next`)),await B(),await N(r).toHaveValue(`Progressive Direct`)}},U={render:()=>(0,M.jsxs)(A.Root,{items:R,children:[(0,M.jsx)(A.Input,{placeholder:`Carrier`,"aria-label":`Carrier`}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=L(e),n=L(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await F.type(r,`Lem`),await n.findByRole(`option`,{name:`Lemonade`}),await F.keyboard(`{Escape}`),await B(),await N(r).toHaveValue(`Lem`),await F.keyboard(`{Escape}`),await N(r).toHaveValue(`Lem`),await N(r).toHaveFocus()}},W={args:{onValueChange:P(),onPick:P(),onSearch:P()},render:({onValueChange:e,onPick:t,onSearch:n})=>{let[r,i]=(0,j.useState)(``);return(0,M.jsxs)(`form`,{"aria-label":`Carrier search`,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault();let t=String(new FormData(e.currentTarget).get(`carrier`));n?.(t),i(`Searched for ${t}`)},children:[(0,M.jsxs)(A.Root,{items:R,onValueChange:e,children:[(0,M.jsx)(A.Input,{name:`carrier`,placeholder:`Carrier`,"aria-label":`Carrier`}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,onClick:()=>{t?.(e),i(`Picked ${e}`)},children:e},e)})})]}),(0,M.jsx)(`output`,{className:`text-sm text-text-default-base-secondary`,children:r})]})},play:async({args:e,canvasElement:t})=>{let n=L(t),r=L(document.body),i=n.getByRole(`combobox`,{name:`Carrier`}),a=t=>N(e.onValueChange).toHaveBeenLastCalledWith(t,N.objectContaining({reason:`item-press`}));await F.type(i,`hip`),await F.click(await r.findByRole(`option`,{name:`Hippo`})),await I(()=>N(e.onPick).toHaveBeenCalledTimes(1)),await N(e.onPick).toHaveBeenLastCalledWith(`Hippo`),await a(`Hippo`),await N(Ue(e.onPick).mock.invocationCallOrder[0]).toBeLessThan(Ue(e.onValueChange).mock.invocationCallOrder.at(-1)),await N(n.getByText(`Picked Hippo`)).toBeVisible(),await N(i).toHaveValue(`Hippo`),await B(),await F.clear(i),await F.type(i,`trav`),await r.findByRole(`option`,{name:`Travelers`}),await F.keyboard(`{ArrowDown}`),await I(()=>N(r.getByRole(`option`,{name:`Travelers`})).toHaveAttribute(`data-highlighted`)),await F.keyboard(`{Enter}`),await I(()=>N(i).toHaveValue(`Travelers`)),await N(e.onPick).toHaveBeenCalledTimes(2),await N(e.onPick).toHaveBeenNthCalledWith(2,`Travelers`),await a(`Travelers`),await N(e.onSearch).not.toHaveBeenCalled(),await B(),await F.clear(i),await F.type(i,`Trav`),await r.findByRole(`option`,{name:`Travelers`}),await F.keyboard(`{Enter}`),await I(()=>N(e.onSearch).toHaveBeenCalledTimes(1)),await N(e.onSearch).toHaveBeenNthCalledWith(1,`Trav`),await N(n.getByText(`Searched for Trav`)).toBeVisible(),await B(),await N(i).toHaveValue(`Trav`),await F.keyboard(`{Enter}`),await I(()=>N(e.onSearch).toHaveBeenCalledTimes(2)),await N(e.onSearch).toHaveBeenNthCalledWith(2,`Trav`),await N(e.onPick).toHaveBeenCalledTimes(2)}},G={args:{onSearch:P(),onSubmitClick:P()},render:({onSearch:e,onSubmitClick:t})=>{let[n,r]=(0,j.useState)(!1),[i,a]=(0,j.useState)(``);return(0,M.jsxs)(`form`,{"aria-label":`Carrier search`,className:`flex flex-col gap-3`,onSubmit:t=>{t.preventDefault();let n=String(new FormData(t.currentTarget).get(`carrier`));e?.(n),a(`Searched for ${n}`)},children:[(0,M.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,M.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,M.jsxs)(A.Root,{items:R,children:[(0,M.jsx)(A.Input,{name:`carrier`,placeholder:`Carrier`,"aria-label":`Carrier`}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})})]})}),(0,M.jsx)(s,{type:`submit`,variant:`secondary`,disabled:!n,onClick:t,children:`Search`})]}),(0,M.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,M.jsx)(xe,{id:`personal-lines`,checked:n,onCheckedChange:e=>r(e===!0)}),(0,M.jsx)(h,{htmlFor:`personal-lines`,children:`Personal lines only`})]}),(0,M.jsx)(`output`,{className:`text-sm text-text-default-base-secondary`,children:i})]})},play:async({args:e,canvasElement:t})=>{let n=L(t),r=L(document.body),i=n.getByRole(`combobox`,{name:`Carrier`});await F.type(i,`Trav`),await r.findByRole(`option`,{name:`Travelers`}),await F.keyboard(`{Enter}`),await B(),await F.keyboard(`{Enter}`),await new Promise(e=>setTimeout(e,100)),await N(e.onSearch).not.toHaveBeenCalled(),await N(e.onSubmitClick).not.toHaveBeenCalled(),await F.click(n.getByRole(`checkbox`,{name:`Personal lines only`})),await F.click(i),await F.keyboard(`{Enter}`),await I(()=>N(e.onSearch).toHaveBeenCalledTimes(1)),await N(e.onSearch).toHaveBeenLastCalledWith(`Trav`),await N(e.onSubmitClick).toHaveBeenCalledTimes(1)}},K={tags:[`!manifest`],args:{onSearch:P()},render:({onSearch:e})=>(0,M.jsxs)(`form`,{"aria-label":`Agency search`,className:`flex flex-col gap-3`,onSubmit:t=>{t.preventDefault(),e?.(String(new FormData(t.currentTarget).get(`carrier`)))},children:[(0,M.jsxs)(A.Root,{items:R,children:[(0,M.jsx)(A.Input,{name:`carrier`,placeholder:`Carrier`,"aria-label":`Carrier`}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})})]}),(0,M.jsx)(_e,{name:`agency`,placeholder:`Agency`,"aria-label":`Agency`})]}),play:async({args:e,canvasElement:t})=>{let n=L(t).getByRole(`combobox`,{name:`Carrier`});await F.type(n,`Trav`),await L(document.body).findByRole(`option`,{name:`Travelers`}),await F.keyboard(`{Enter}`),await B(),await F.keyboard(`{Enter}`),await new Promise(e=>setTimeout(e,100)),await N(e.onSearch).not.toHaveBeenCalled()}},q={render:()=>(0,M.jsxs)(A.Root,{items:R,children:[(0,M.jsx)(A.Input,{placeholder:`Carrier`,"aria-label":`Carrier`,before:(0,M.jsx)(Ge,{"aria-hidden":`true`}),after:(0,M.jsx)(De,{color:`informative`,children:`Beta`})}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})})]}),play:async({canvasElement:e})=>{let t=L(e).getByRole(`combobox`,{name:`Carrier`}),n=e.querySelector(`[data-slot="autocomplete-field"]`),r=n.querySelector(`[data-slot="autocomplete-before"]`),i=n.querySelector(`[data-slot="autocomplete-after"]`);await N(r).toHaveAttribute(`data-slot`,`autocomplete-before`),await N(L(i).getByText(`Beta`)).toBeInTheDocument(),await N(n.firstElementChild).toBe(r),await N(n.lastElementChild).toBe(i),await N(t.parentElement).toBe(n),await F.type(t,`l`),await L(document.body).findByRole(`option`,{name:`Clearcover`}),await I(()=>z(e))}},J={render:()=>(0,M.jsxs)(A.Root,{items:R,children:[(0,M.jsx)(A.Input,{placeholder:`Carrier`,"aria-label":`Carrier`}),(0,M.jsxs)(A.Content,{children:[(0,M.jsx)(A.Empty,{children:`No known carrier matches. Your text is kept as typed.`}),(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})]})]}),play:async({canvasElement:e})=>{let t=L(e),n=L(document.body),r=t.getByRole(`combobox`,{name:`Carrier`});await F.type(r,`Zurich`),await N(await n.findByText(/No known carrier matches/)).toBeVisible(),await N(n.queryByRole(`option`)).not.toBeInTheDocument(),await F.keyboard(`{Escape}`),await I(()=>N(qe()).not.toBeInTheDocument()),await N(r).toHaveValue(`Zurich`),await F.type(r,` Mutual`),await N(await n.findByText(/No known carrier matches/)).toBeVisible(),await N(r).toHaveValue(`Zurich Mutual`)}},Y={render:()=>(0,M.jsxs)(_,{invalid:!0,required:!0,children:[(0,M.jsx)(h,{children:`Carrier`}),(0,M.jsxs)(A.Root,{items:R,children:[(0,M.jsx)(A.Input,{placeholder:`Type a carrier`}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})})]}),(0,M.jsx)(g.Description,{children:`The carrier that wrote the policy.`}),(0,M.jsx)(g.Error,{errors:[{message:`Enter the carrier name`}]})]}),play:async({canvasElement:e})=>{let t=L(e),n=t.getByRole(`combobox`,{name:`Carrier`});await N(n).toBeRequired(),await N(n).toHaveAttribute(`aria-invalid`,`true`),await N(n).toHaveAccessibleDescription(`The carrier that wrote the policy. Enter the carrier name`);let r=t.getByText(`Carrier`).closest(`label`);await N(r).toHaveAttribute(`id`),await N(n).toHaveAttribute(`aria-labelledby`,r?.getAttribute(`id`)??``),await F.type(n,`hip`),await L(document.body).findByRole(`listbox`),await N(n).toHaveAccessibleName(`Carrier`),await F.keyboard(`{Escape}`),await B(),await N(n).toHaveValue(`hip`)}},Je={"12-3456789":`Sunrise Insurance Group`,"98-7654321":`Harbor Point Agency`},Ye=e=>{let t=e.replace(/\D/g,``).slice(0,9);return t.length>2?`${t.slice(0,2)}-${t.slice(2)}`:t},Xe=e=>{let[t,n]=(0,j.useState)(null);return(0,j.useEffect)(()=>{n(null);let t=setTimeout(()=>n(Je[e]??null),150);return()=>clearTimeout(t)},[e]),t},X={render:()=>{let[e,t]=(0,j.useState)(``),[n,r]=(0,j.useState)(``),i=Xe(e);return(0,M.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,M.jsxs)(_,{children:[(0,M.jsx)(h,{children:`FEIN`}),(0,M.jsxs)(A.Root,{items:i?[i]:[],filter:null,autoHighlight:`always`,value:e,onValueChange:(e,n)=>{n.reason!==`item-press`&&t(e)},children:[(0,M.jsx)(A.Input,{placeholder:`XX-XXXXXXX`,render:e=>(0,M.jsx)(`input`,{...e,inputMode:`numeric`,onChange:t=>{t.target.value=Ye(t.target.value),e.onChange?.(t)}})}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,onClick:()=>r(e),children:(0,M.jsxs)(`div`,{className:`flex min-w-0 flex-col`,children:[(0,M.jsx)(`span`,{className:`truncate`,children:e}),(0,M.jsx)(`span`,{className:`truncate text-xs text-text-default-base-tertiary`,children:`Use this as agency name`})]})},e)})})]}),(0,M.jsx)(g.Description,{children:`The Federal Employer Identification Number of the agency.`})]}),(0,M.jsxs)(_,{children:[(0,M.jsx)(h,{children:`Agency name`}),(0,M.jsx)(_e,{value:n,onChange:e=>r(e.target.value)})]})]})},play:async({canvasElement:e})=>{let t=L(e),n=L(document.body),r=t.getByRole(`combobox`,{name:`FEIN`}),i=t.getByRole(`textbox`,{name:`Agency name`});await N(r).toHaveAccessibleDescription(`The Federal Employer Identification Number of the agency.`),await F.type(r,`1234`),await N(r).toHaveValue(`12-34`),await new Promise(e=>setTimeout(e,250)),await N(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await N(n.queryByRole(`option`)).not.toBeInTheDocument(),await F.type(r,`56789`);let a=await n.findByRole(`option`,{name:/Sunrise Insurance Group/});await I(()=>N(a).toHaveAttribute(`data-highlighted`)),await I(()=>z(e)),await F.keyboard(`{Enter}`),await I(()=>N(i).toHaveValue(`Sunrise Insurance Group`)),await N(r).toHaveValue(`12-3456789`),await B(),await F.clear(i),await F.click(r),await F.keyboard(`{ArrowDown}`),await F.click(await n.findByRole(`option`,{name:/Sunrise Insurance Group/})),await I(()=>N(i).toHaveValue(`Sunrise Insurance Group`)),await N(r).toHaveValue(`12-3456789`),await B(),await F.clear(i),await F.click(r),await F.keyboard(`{ArrowDown}`),await I(()=>N(n.getByRole(`option`,{name:/Sunrise Insurance Group/})).toHaveAttribute(`data-highlighted`)),await F.tab(),await N(i).toHaveFocus(),await B(),await N(i).toHaveValue(``),await N(r).toHaveValue(`12-3456789`),await F.clear(r),await F.type(r,`123456780`),await N(r).toHaveValue(`12-3456780`),await new Promise(e=>setTimeout(e,250)),await N(n.queryByRole(`option`)).not.toBeInTheDocument()}},Z={render:()=>(0,M.jsxs)(_,{disabled:!0,children:[(0,M.jsx)(h,{children:`FEIN`}),(0,M.jsxs)(A.Root,{items:[`Sunrise Insurance Group`],defaultValue:`12-3456789`,children:[(0,M.jsx)(A.Input,{placeholder:`XX-XXXXXXX`}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,children:e},e)})})]})]}),play:async({canvasElement:e})=>{let t=L(e).getByRole(`combobox`,{name:`FEIN`});await N(t).toBeDisabled(),await N(t).toHaveValue(`12-3456789`),await F.click(t),await F.keyboard(`{ArrowDown}`),await N(L(document.body).queryByRole(`listbox`)).not.toBeInTheDocument()}},Q={render:()=>{let[e,t]=(0,j.useState)(``),[n,r]=(0,j.useState)(``),i=Xe(e);return(0,M.jsxs)(v.Root,{children:[(0,M.jsx)(v.Trigger,{asChild:!0,children:(0,M.jsx)(s,{variant:`secondary`,children:`Add agency`})}),(0,M.jsxs)(v.Content,{children:[(0,M.jsx)(v.Title,{children:`Add agency`}),(0,M.jsxs)(v.Body,{className:`flex flex-col gap-4`,children:[(0,M.jsxs)(_,{children:[(0,M.jsx)(h,{children:`FEIN`}),(0,M.jsxs)(A.Root,{items:i?[i]:[],filter:null,autoHighlight:`always`,value:e,onValueChange:(e,n)=>{n.reason!==`item-press`&&t(e)},children:[(0,M.jsx)(A.Input,{placeholder:`XX-XXXXXXX`,render:e=>(0,M.jsx)(`input`,{...e,inputMode:`numeric`,onChange:t=>{t.target.value=Ye(t.target.value),e.onChange?.(t)}})}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{children:e=>(0,M.jsx)(A.Item,{value:e,onClick:()=>r(e),children:(0,M.jsxs)(`div`,{className:`flex min-w-0 flex-col`,children:[(0,M.jsx)(`span`,{className:`truncate`,children:e}),(0,M.jsx)(`span`,{className:`truncate text-xs text-text-default-base-tertiary`,children:`Use this as agency name`})]})},e)})})]}),(0,M.jsx)(g.Description,{children:`The Federal Employer Identification Number of the agency.`})]}),(0,M.jsxs)(_,{children:[(0,M.jsx)(h,{children:`Agency name`}),(0,M.jsx)(_e,{value:n,onChange:e=>r(e.target.value)})]})]})]})]})},play:async({canvasElement:e})=>{let t=L(e),n=L(document.body);await F.click(t.getByRole(`button`,{name:`Add agency`}));let r=await n.findByRole(`dialog`,{name:`Add agency`}),i=L(r).getByRole(`combobox`,{name:`FEIN`}),a=L(r).getByRole(`textbox`,{name:`Agency name`});await F.type(i,`987654321`),await F.keyboard(`{Escape}`),await new Promise(e=>setTimeout(e,300)),await N(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await N(r).toHaveAttribute(`data-state`,`open`),await F.keyboard(`{ArrowDown}`),await n.findByRole(`option`,{name:/Harbor Point Agency/}),await F.click(i),await N(n.getByRole(`listbox`)).toBeInTheDocument(),await F.click(n.getByRole(`option`,{name:/Harbor Point Agency/})),await I(()=>N(a).toHaveValue(`Harbor Point Agency`)),await N(i).toHaveValue(`98-7654321`),await B(),await N(r).toHaveAttribute(`data-state`,`open`),await F.click(i),await F.keyboard(`{ArrowDown}`),await n.findByRole(`option`,{name:/Harbor Point Agency/}),await F.keyboard(`{Escape}`),await B(),await N(r).toHaveAttribute(`data-state`,`open`),await N(i).toHaveValue(`98-7654321`),await F.keyboard(`{ArrowDown}`),await n.findByRole(`option`,{name:/Harbor Point Agency/}),await F.click(L(r).getByText(`Add agency`)),await B(),await N(r).toHaveAttribute(`data-state`,`open`),await N(i).toHaveValue(`98-7654321`),await F.click(i),await F.keyboard(`{Escape}`),await I(()=>N(r).toHaveAttribute(`data-state`,`closed`))}},$={args:{onSearch:P()},render:({onSearch:e})=>{let[t,n]=(0,j.useState)(``),[r,i]=(0,j.useState)([`Agencies onboarded last week`,`Expired licenses`]),[a,o]=(0,j.useState)(!1),[s,c]=(0,j.useState)(``),l=t=>{let r=t.trim();r&&!a&&(e?.(r),o(!0),setTimeout(()=>{o(!1),c(r),i(e=>[r,...e.filter(e=>e!==r)]),n(``)},200))},u=t.trim();return(0,M.jsxs)(`form`,{"aria-label":`AI filter`,className:`flex flex-col gap-3`,onSubmit:e=>{e.preventDefault(),l(t)},children:[(0,M.jsxs)(A.Root,{items:u?[u]:r,filter:null,openOnInputClick:!0,value:t,onValueChange:n,children:[(0,M.jsx)(A.Input,{"aria-label":`Describe your filters`,readOnly:a,className:`read-only:cursor-wait`,before:a?(0,M.jsx)(we,{size:`sm`,"aria-label":`Translating filters`}):(0,M.jsx)(Ke,{"aria-hidden":`true`}),after:(0,M.jsx)(De,{color:`informative`,children:`Beta`}),render:e=>(0,M.jsxs)(`span`,{className:`relative flex min-w-0 flex-1`,children:[!t&&(0,M.jsx)(`span`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 flex items-center truncate text-sm text-text-input-placeholder`,children:`Producers licensed in Texas with an expired E&O`}),(0,M.jsx)(`input`,{...e})]})}),(0,M.jsx)(A.Content,{children:(0,M.jsx)(A.List,{"aria-label":`AI filter suggestions`,children:e=>(0,M.jsx)(A.Item,{value:e,onClick:()=>l(e),children:(0,M.jsxs)(`span`,{className:`truncate`,children:[(0,M.jsx)(`span`,{className:`text-text-default-base-tertiary`,children:`AI Filter `}),e]})},e)})})]}),(0,M.jsx)(`output`,{className:`text-sm text-text-default-base-secondary`,children:s&&`Filtered by "${s}"`})]})},play:async({args:e,canvasElement:t})=>{let n=L(t),r=L(document.body),i=n.getByRole(`combobox`,{name:`Describe your filters`});await N(n.getByText(`Producers licensed in Texas with an expired E&O`)).toHaveAttribute(`aria-hidden`,`true`),await F.click(i),await I(()=>N(r.getAllByRole(`option`)).toHaveLength(2)),await I(()=>z(t)),await F.click(r.getByRole(`option`,{name:/Expired licenses/})),await N(e.onSearch).toHaveBeenCalledTimes(1),await N(e.onSearch).toHaveBeenNthCalledWith(1,`Expired licenses`),await N(n.getByRole(`status`,{name:`Translating filters`})).toBeInTheDocument(),await N(i).toHaveAttribute(`readonly`),await N(await n.findByText(`Filtered by "Expired licenses"`)).toBeVisible(),await N(i).toHaveValue(``),await F.type(i,`Producers in Ohio`),await r.findByRole(`option`,{name:/Producers in Ohio/}),await F.keyboard(`{Enter}`),await N(await n.findByText(`Filtered by "Producers in Ohio"`)).toBeVisible(),await N(e.onSearch).toHaveBeenCalledTimes(2),await N(e.onSearch).toHaveBeenNthCalledWith(2,`Producers in Ohio`),await F.type(i,`Agencies in Utah`),await F.click(n.getByText(`Filtered by "Producers in Ohio"`)),await B(),await N(i).toHaveValue(`Agencies in Utah`),await N(e.onSearch).toHaveBeenCalledTimes(2)}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Autocomplete.Root items={CARRIERS}>
            <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
            <Autocomplete.Content>
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
}`,...V.parameters?.docs?.source},description:{story:`Suggestions from memory, filtered by Base UI against the text. Typing opens
the list; picking a row writes its text into the field. Any other text is
just as valid a value.

@summary Free-text field filtering an in-memory list of suggestions`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <Autocomplete.Root items={CARRIERS}>
                <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
                <Autocomplete.Content>
                    <Autocomplete.List>
                        {(carrier: string) => <Autocomplete.Item key={carrier} value={carrier}>
                                {carrier}
                            </Autocomplete.Item>}
                    </Autocomplete.List>
                </Autocomplete.Content>
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
}`,...H.parameters?.docs?.source},description:{story:`Leaving the field keeps the text, whether it matches a suggestion or not.
A Combobox would empty it here, since its value must be an option.

@summary Blurring the field keeps the typed text`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Autocomplete.Root items={CARRIERS}>
            <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" />
            <Autocomplete.Content>
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
}`,...U.parameters?.docs?.source},description:{story:`Escape closes the list and keeps the text. A second Escape, on a shut list,
keeps it as well: Base UI would empty the field there, as a native search
input does, and this field's text is its value.

@summary Escape closes the list and never empties the field`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn(),
    onPick: fn(),
    onSearch: fn()
  },
  render: ({
    onValueChange,
    onPick,
    onSearch
  }) => {
    const [outcome, setOutcome] = useState('');
    return <form aria-label="Carrier search" className="flex flex-col gap-3" onSubmit={event => {
      event.preventDefault();
      const query = String(new FormData(event.currentTarget).get('carrier'));
      onSearch?.(query);
      setOutcome(\`Searched for \${query}\`);
    }}>
                <Autocomplete.Root items={CARRIERS} onValueChange={onValueChange}>
                    <Autocomplete.Input name="carrier" placeholder="Carrier" aria-label="Carrier" />
                    <Autocomplete.Content>
                        <Autocomplete.List>
                            {(carrier: string) => <Autocomplete.Item key={carrier} value={carrier} onClick={() => {
              onPick?.(carrier);
              setOutcome(\`Picked \${carrier}\`);
            }}>
                                    {carrier}
                                </Autocomplete.Item>}
                        </Autocomplete.List>
                    </Autocomplete.Content>
                </Autocomplete.Root>
                <output className="text-sm text-text-default-base-secondary">{outcome}</output>
            </form>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });
    const itemPress = (value: string) => expect(args.onValueChange).toHaveBeenLastCalledWith(value, expect.objectContaining({
      reason: 'item-press'
    }));

    // Click on a row: the row's onClick, then item-press, and no submit.
    await userEvent.type(input, 'hip');
    await userEvent.click(await body.findByRole('option', {
      name: 'Hippo'
    }));
    await waitFor(() => expect(args.onPick).toHaveBeenCalledTimes(1));
    await expect(args.onPick).toHaveBeenLastCalledWith('Hippo');
    await itemPress('Hippo');
    await expect(mocked(args.onPick!).mock.invocationCallOrder[0]).toBeLessThan(mocked(args.onValueChange!).mock.invocationCallOrder.at(-1)!);
    await expect(canvas.getByText('Picked Hippo')).toBeVisible();
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
    await expect(args.onPick).toHaveBeenCalledTimes(2);
    await expect(args.onPick).toHaveBeenNthCalledWith(2, 'Travelers');
    await itemPress('Travelers');
    await expect(args.onSearch).not.toHaveBeenCalled();
    await waitForListClosed();

    // Enter with the list open and nothing highlighted: one submit with the typed text.
    await userEvent.clear(input);
    await userEvent.type(input, 'Trav');
    await body.findByRole('option', {
      name: 'Travelers'
    });
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(args.onSearch).toHaveBeenCalledTimes(1));
    await expect(args.onSearch).toHaveBeenNthCalledWith(1, 'Trav');
    await expect(canvas.getByText('Searched for Trav')).toBeVisible();
    await waitForListClosed();
    await expect(input).toHaveValue('Trav');

    // Enter on a shut list submits too, once.
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(args.onSearch).toHaveBeenCalledTimes(2));
    await expect(args.onSearch).toHaveBeenNthCalledWith(2, 'Trav');
    await expect(args.onPick).toHaveBeenCalledTimes(2);
  }
}`,...W.parameters?.docs?.source},description:{story:`Telling a pick from a plain Enter, with Base UI's own events. A pick, by
click or by Enter on the highlighted row, fires the row's \`onClick\`, then
\`onValueChange\` with the reason \`'item-press'\`, and does not submit the form.
Enter with no row highlighted submits the form with the typed text. Each
fires once.

@summary Item onClick and item-press for a pick, form submit for Enter`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    onSearch: fn(),
    onSubmitClick: fn()
  },
  render: ({
    onSearch,
    onSubmitClick
  }) => {
    const [confirmed, setConfirmed] = useState(false);
    const [outcome, setOutcome] = useState('');
    return <form aria-label="Carrier search" className="flex flex-col gap-3" onSubmit={event => {
      event.preventDefault();
      const query = String(new FormData(event.currentTarget).get('carrier'));
      onSearch?.(query);
      setOutcome(\`Searched for \${query}\`);
    }}>
                <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                        <Autocomplete.Root items={CARRIERS}>
                            <Autocomplete.Input name="carrier" placeholder="Carrier" aria-label="Carrier" />
                            <Autocomplete.Content>
                                <Autocomplete.List>
                                    {(carrier: string) => <Autocomplete.Item key={carrier} value={carrier}>
                                            {carrier}
                                        </Autocomplete.Item>}
                                </Autocomplete.List>
                            </Autocomplete.Content>
                        </Autocomplete.Root>
                    </div>
                    <Button type="submit" variant="secondary" disabled={!confirmed} onClick={onSubmitClick}>
                        Search
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="personal-lines" checked={confirmed} onCheckedChange={checked => setConfirmed(checked === true)} />
                    <Label htmlFor="personal-lines">Personal lines only</Label>
                </div>
                <output className="text-sm text-text-default-base-secondary">{outcome}</output>
            </form>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Carrier'
    });

    // Enter with nothing highlighted, on an open list and on a shut one: no submit.
    await userEvent.type(input, 'Trav');
    await body.findByRole('option', {
      name: 'Travelers'
    });
    await userEvent.keyboard('{Enter}');
    await waitForListClosed();
    await userEvent.keyboard('{Enter}');
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(args.onSearch).not.toHaveBeenCalled();
    await expect(args.onSubmitClick).not.toHaveBeenCalled();

    // Once the button is enabled, Enter clicks it: its \`onClick\` runs and the form submits.
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Personal lines only'
    }));
    await userEvent.click(input);
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(args.onSearch).toHaveBeenCalledTimes(1));
    await expect(args.onSearch).toHaveBeenLastCalledWith('Trav');
    await expect(args.onSubmitClick).toHaveBeenCalledTimes(1);
  }
}`,...G.parameters?.docs?.source},description:{story:`Submission follows the form's submit button, as in the browser: while it is
disabled, Enter submits nothing, and once enabled Enter clicks it, so its
\`onClick\` runs as well as the form's \`onSubmit\`. Here
the search waits for the scope to be confirmed.

@summary Nothing submits while the form's submit button is disabled`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  args: {
    onSearch: fn()
  },
  render: ({
    onSearch
  }) => <form aria-label="Agency search" className="flex flex-col gap-3" onSubmit={event => {
    event.preventDefault();
    onSearch?.(String(new FormData(event.currentTarget).get('carrier')));
  }}>
            <Autocomplete.Root items={CARRIERS}>
                <Autocomplete.Input name="carrier" placeholder="Carrier" aria-label="Carrier" />
                <Autocomplete.Content>
                    <Autocomplete.List>
                        {(carrier: string) => <Autocomplete.Item key={carrier} value={carrier}>
                                {carrier}
                            </Autocomplete.Item>}
                    </Autocomplete.List>
                </Autocomplete.Content>
            </Autocomplete.Root>
            <Input name="agency" placeholder="Agency" aria-label="Agency" />
        </form>,
  play: async ({
    args,
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('combobox', {
      name: 'Carrier'
    });

    // With the list open, Base UI marks the rest of the page \`aria-hidden\`; still not one field.
    await userEvent.type(input, 'Trav');
    await within(document.body).findByRole('option', {
      name: 'Travelers'
    });
    await userEvent.keyboard('{Enter}');
    await waitForListClosed();
    await userEvent.keyboard('{Enter}');
    await new Promise(resolve => setTimeout(resolve, 100));
    await expect(args.onSearch).not.toHaveBeenCalled();
  }
}`,...K.parameters?.docs?.source},description:{story:`In a form with several text fields and no submit button, Enter in the field
submits nothing, as in any other input of that form. The form submits from
its own controls.

@summary Enter does not submit a form with several fields and no button`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Autocomplete.Root items={CARRIERS}>
            <Autocomplete.Input placeholder="Carrier" aria-label="Carrier" before={<IconSearch aria-hidden="true" />} after={<Tag color="informative">Beta</Tag>} />
            <Autocomplete.Content>
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
}`,...q.parameters?.docs?.source},description:{story:"`before` and `after` place content inside the field's frame, each wrapped in\nan `InputGroup.Addon`: an icon in front, a tag after. The list still hangs\nfrom the whole frame.\n\n@summary Icon before and tag after the input, inside the same frame",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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

    // The first keystroke already matches nothing.
    await userEvent.type(input, 'Zurich');
    await expect(await body.findByText(/No known carrier matches/)).toBeVisible();
    await expect(body.queryByRole('option')).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(surface()).not.toBeInTheDocument());
    await expect(input).toHaveValue('Zurich');

    // Typing on after Escape opens it again.
    await userEvent.type(input, ' Mutual');
    await expect(await body.findByText(/No known carrier matches/)).toBeVisible();
    await expect(input).toHaveValue('Zurich Mutual');
  }
}`,...J.parameters?.docs?.source},description:{story:`With an \`Empty\` message, the list opens even when nothing matches, to say
so, from the first keystroke and again after Escape. Without one, as in
every other story, a field with nothing to suggest stays shut. Either way
the text stays as typed.

@summary Message shown in the list when no suggestion matches`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <FieldText invalid required>
            <Label>Carrier</Label>
            <Autocomplete.Root items={CARRIERS}>
                <Autocomplete.Input placeholder="Type a carrier" />
                <Autocomplete.Content>
                    <Autocomplete.List>
                        {(carrier: string) => <Autocomplete.Item key={carrier} value={carrier}>
                                {carrier}
                            </Autocomplete.Item>}
                    </Autocomplete.List>
                </Autocomplete.Content>
            </Autocomplete.Root>
            <Field.Description>The carrier that wrote the policy.</Field.Description>
            <Field.Error errors={[{
      message: 'Enter the carrier name'
    }]} />
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
    await expect(input).toHaveAccessibleDescription('The carrier that wrote the policy. Enter the carrier name');
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
}`,...Y.parameters?.docs?.source},description:{story:`Inside a \`FieldText\` the input takes the label, the description and the
error with nothing wired by hand, and points \`aria-labelledby\` at the label
so the name survives the list opening.

@summary Label, description and error wired from the surrounding FieldText`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [fein, setFein] = useState('');
    const [name, setName] = useState('');
    const agency = useAgencyLookup(fein);
    return <div className="flex flex-col gap-4">
                <FieldText>
                    <Label>FEIN</Label>
                    <Autocomplete.Root items={agency ? [agency] : []} filter={null} autoHighlight="always" value={fein} onValueChange={(value, eventDetails) => {
          // A pick fills the agency name, not this field.
          if (eventDetails.reason === 'item-press') return;
          setFein(value);
        }}>
                        <Autocomplete.Input placeholder="XX-XXXXXXX" render={inputProps => <input {...inputProps} inputMode="numeric" onChange={event => {
            event.target.value = formatFein(event.target.value);
            inputProps.onChange?.(event);
          }} />} />
                        <Autocomplete.Content>
                            <Autocomplete.List>
                                {(agencyName: string) => <Autocomplete.Item key={agencyName} value={agencyName} onClick={() => setName(agencyName)}>
                                        <div className="flex min-w-0 flex-col">
                                            <span className="truncate">{agencyName}</span>
                                            <span className="truncate text-xs text-text-default-base-tertiary">
                                                Use this as agency name
                                            </span>
                                        </div>
                                    </Autocomplete.Item>}
                            </Autocomplete.List>
                        </Autocomplete.Content>
                    </Autocomplete.Root>
                    <Field.Description>
                        The Federal Employer Identification Number of the agency.
                    </Field.Description>
                </FieldText>
                <FieldText>
                    <Label>Agency name</Label>
                    <Input value={name} onChange={event => setName(event.target.value)} />
                </FieldText>
            </div>;
  },
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
  render: () => <FieldText disabled>
            <Label>FEIN</Label>
            <Autocomplete.Root items={['Sunrise Insurance Group']} defaultValue="12-3456789">
                <Autocomplete.Input placeholder="XX-XXXXXXX" />
                <Autocomplete.Content>
                    <Autocomplete.List>
                        {(agencyName: string) => <Autocomplete.Item key={agencyName} value={agencyName}>
                                {agencyName}
                            </Autocomplete.Item>}
                    </Autocomplete.List>
                </Autocomplete.Content>
            </Autocomplete.Root>
        </FieldText>,
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
suggestion ready for the number in it.

@summary Disabled lookup field that never opens its list`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [fein, setFein] = useState('');
    const [name, setName] = useState('');
    const agency = useAgencyLookup(fein);
    return <Modal.Root>
                <Modal.Trigger asChild>
                    <Button variant="secondary">Add agency</Button>
                </Modal.Trigger>
                <Modal.Content>
                    <Modal.Title>Add agency</Modal.Title>
                    <Modal.Body className="flex flex-col gap-4">
                        <FieldText>
                            <Label>FEIN</Label>
                            <Autocomplete.Root items={agency ? [agency] : []} filter={null} autoHighlight="always" value={fein} onValueChange={(value, eventDetails) => {
              // A pick fills the agency name, not this field.
              if (eventDetails.reason === 'item-press') return;
              setFein(value);
            }}>
                                <Autocomplete.Input placeholder="XX-XXXXXXX" render={inputProps => <input {...inputProps} inputMode="numeric" onChange={event => {
                event.target.value = formatFein(event.target.value);
                inputProps.onChange?.(event);
              }} />} />
                                <Autocomplete.Content>
                                    <Autocomplete.List>
                                        {(agencyName: string) => <Autocomplete.Item key={agencyName} value={agencyName} onClick={() => setName(agencyName)}>
                                                <div className="flex min-w-0 flex-col">
                                                    <span className="truncate">{agencyName}</span>
                                                    <span className="truncate text-xs text-text-default-base-tertiary">
                                                        Use this as agency name
                                                    </span>
                                                </div>
                                            </Autocomplete.Item>}
                                    </Autocomplete.List>
                                </Autocomplete.Content>
                            </Autocomplete.Root>
                            <Field.Description>
                                The Federal Employer Identification Number of the agency.
                            </Field.Description>
                        </FieldText>
                        <FieldText>
                            <Label>Agency name</Label>
                            <Input value={name} onChange={event => setName(event.target.value)} />
                        </FieldText>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>;
  },
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

    // The lookup answers 150ms after the last keystroke. An Escape before that drops the wait.
    await userEvent.type(input, '987654321');
    await userEvent.keyboard('{Escape}');
    await new Promise(resolve => setTimeout(resolve, 300));
    await expect(body.queryByRole('listbox')).not.toBeInTheDocument();
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{ArrowDown}');
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
outside close the list, keeping the number. Escape before the lookup answers
drops the wait, so the late result does not open the list, and the dialog
stays. Escape on the shut field then closes the dialog.

@summary Lookup inside a Modal, dismissed by Escape or a click outside`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    onSearch: fn()
  },
  render: ({
    onSearch
  }) => {
    const [prompt, setPrompt] = useState('');
    const [recents, setRecents] = useState(['Agencies onboarded last week', 'Expired licenses']);
    const [pending, setPending] = useState(false);
    const [applied, setApplied] = useState('');
    const run = (query: string) => {
      const trimmed = query.trim();
      if (!trimmed || pending) return;
      onSearch?.(trimmed);
      setPending(true);
      // Stands in for the request that translates the prompt into filters.
      setTimeout(() => {
        setPending(false);
        setApplied(trimmed);
        setRecents(entries => [trimmed, ...entries.filter(entry => entry !== trimmed)]);
        setPrompt('');
      }, 200);
    };
    const trimmed = prompt.trim();
    return <form aria-label="AI filter" className="flex flex-col gap-3" onSubmit={event => {
      event.preventDefault();
      run(prompt);
    }}>
                <Autocomplete.Root items={trimmed ? [trimmed] : recents} filter={null} openOnInputClick value={prompt} onValueChange={setPrompt}>
                    <Autocomplete.Input aria-label="Describe your filters" readOnly={pending} className="read-only:cursor-wait" before={pending ? <Loading size="sm" aria-label="Translating filters" /> : <IconStar aria-hidden="true" />} after={<Tag color="informative">Beta</Tag>} render={inputProps => <span className="relative flex min-w-0 flex-1">
                                {!prompt && <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center truncate text-sm text-text-input-placeholder">
                                        Producers licensed in Texas with an expired E&O
                                    </span>}
                                <input {...inputProps} />
                            </span>} />
                    <Autocomplete.Content>
                        <Autocomplete.List aria-label="AI filter suggestions">
                            {(query: string) => <Autocomplete.Item key={query} value={query} onClick={() => run(query)}>
                                    <span className="truncate">
                                        <span className="text-text-default-base-tertiary">AI Filter </span>
                                        {query}
                                    </span>
                                </Autocomplete.Item>}
                        </Autocomplete.List>
                    </Autocomplete.Content>
                </Autocomplete.Root>
                <output className="text-sm text-text-default-base-secondary">
                    {applied && \`Filtered by "\${applied}"\`}
                </output>
            </form>;
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox', {
      name: 'Describe your filters'
    });
    await expect(canvas.getByText('Producers licensed in Texas with an expired E&O')).toHaveAttribute('aria-hidden', 'true');

    // A click opens the recent prompts; picking one runs it.
    await userEvent.click(input);
    await waitFor(() => expect(body.getAllByRole('option')).toHaveLength(2));
    await waitFor(() => expectListAlignedWithField(canvasElement));
    await userEvent.click(body.getByRole('option', {
      name: /Expired licenses/
    }));
    await expect(args.onSearch).toHaveBeenCalledTimes(1);
    await expect(args.onSearch).toHaveBeenNthCalledWith(1, 'Expired licenses');
    await expect(canvas.getByRole('status', {
      name: 'Translating filters'
    })).toBeInTheDocument();
    await expect(input).toHaveAttribute('readonly');
    await expect(await canvas.findByText('Filtered by "Expired licenses"')).toBeVisible();
    await expect(input).toHaveValue('');

    // Typing offers to run the text; Enter with nothing highlighted runs it once, through the form.
    await userEvent.type(input, 'Producers in Ohio');
    await body.findByRole('option', {
      name: /Producers in Ohio/
    });
    await userEvent.keyboard('{Enter}');
    await expect(await canvas.findByText('Filtered by "Producers in Ohio"')).toBeVisible();
    await expect(args.onSearch).toHaveBeenCalledTimes(2);
    await expect(args.onSearch).toHaveBeenNthCalledWith(2, 'Producers in Ohio');

    // A click outside keeps an unsent prompt.
    await userEvent.type(input, 'Agencies in Utah');
    await userEvent.click(canvas.getByText('Filtered by "Producers in Ohio"'));
    await waitForListClosed();
    await expect(input).toHaveValue('Agencies in Utah');
    await expect(args.onSearch).toHaveBeenCalledTimes(2);
  }
}`,...$.parameters?.docs?.source},description:{story:`A prompt field like the AI filter: an icon that turns into a spinner while
the prompt runs and a Beta tag, both inside the frame, and an example
overlaid on the empty input through \`render\`. The suggestion is "run what
you typed" or, with nothing typed, the recent prompts. A pick runs it from
the row's \`onClick\`; Enter with no row highlighted runs the typed text from
the form's submit.

@summary AI prompt with recent prompts, a spinner and a tag in the frame`,...$.parameters?.docs?.description}}},Ze=[`Default`,`KeepsTextOnBlur`,`KeepsTextOnEscape`,`PickOrSubmit`,`DisabledSubmitButton`,`SeveralFieldsWithoutButton`,`WithBeforeAndAfter`,`WithEmptyMessage`,`InsideFieldText`,`Lookup`,`LookupLocked`,`LookupInsideModal`,`Prompt`]})))()}Qe();export{V as Default,G as DisabledSubmitButton,Y as InsideFieldText,H as KeepsTextOnBlur,U as KeepsTextOnEscape,X as Lookup,Q as LookupInsideModal,Z as LookupLocked,W as PickOrSubmit,$ as Prompt,K as SeveralFieldsWithoutButton,q as WithBeforeAndAfter,J as WithEmptyMessage,Ze as __namedExportsOrder,We as default};