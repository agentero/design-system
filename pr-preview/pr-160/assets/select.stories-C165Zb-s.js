import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-DLbE3c8I.js";import{t as r}from"./react-dom-pLGMVEAw.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./createLucideIcon-CN2KYYMV.js";import{n as s,t as c}from"./check-CAiqVzi3.js";import{n as l,t as u}from"./chevron-down-ykLeG40W.js";import{n as d,t as f}from"./dist-BYOc_0UM.js";import{n as p,r as m}from"./dist-BIeoWISX.js";import{a as h,r as g}from"./dist-Da1CnNXT.js";import{n as _,t as v}from"./dist-BaEIim2k.js";import{a as y,n as b,r as x,t as S}from"./dist-C9OnFLGn.js";import{i as ee,n as te,r as C,t as w}from"./dist-FCLvnMlN.js";import{r as ne,t as T}from"./dist-BzdyLrEz.js";import{n as re,t as E}from"./dist-D50D3yZ1.js";import{n as D,t as ie}from"./dist-B48QB6KV.js";import{n as ae,t as oe}from"./dist-Dsj2rsW0.js";import{n as se,t as O}from"./utils-BL6AXtr8.js";import{n as ce,t as k}from"./button-CyBxJQ3t.js";import{a as A,i as le,n as ue,o as de,t as fe}from"./dist-DweoAnHT.js";import{n as pe,t as me}from"./dist-DaIZOdiv.js";import{a as he,c as ge,l as _e,n as ve,r as ye,t as be}from"./dist-BYSlvj1Z.js";import{a as xe,i as Se}from"./tooltip-DZftVYI0.js";import{a as Ce,n as we,t as j}from"./field-BYd3bFac.js";import{n as Te,r as Ee}from"./input-D_nYPsRP.js";import{a as De,i as Oe,n as ke,o as Ae,r as je,t as Me}from"./es2015-BIelXxJY.js";import{n as Ne,t as Pe}from"./modal-BhGdvMsZ.js";import{n as Fe,t as Ie}from"./popover-DAOJJi4d.js";import{a as Le,r as Re,t as ze}from"./index.esm-P6v1x-z5.js";var Be,Ve;function He(){return(He=t((()=>{a(),Be={name:`chevron-up`,size:24,node:[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]},Be.node,Ve=o(Be)})))()}function Ue(e,[t,n]){return Math.min(n,Math.max(t,e))}var We,Ge;function Ke(){return(Ke=t((()=>{We=Object.defineProperty,Ge=(e,t)=>We(e,`name`,{value:t,configurable:!0}),Ge(Ue,`clamp`)})))()}function qe(e){let{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:a,value:o,defaultValue:s,onValueChange:c,dir:l,name:u,autoComplete:d,disabled:f,required:p,form:m,internal_do_not_use_render:h}=e,g=lt(t),[_,v]=M.useState(null),[y,x]=M.useState(null),[S,ee]=M.useState(!1),C=b(l),[w,ne]=te({prop:r,defaultProp:i??!1,onChange:a,caller:F}),[T,re]=te({prop:o,defaultProp:s,onChange:c,caller:F}),E=M.useRef(null),ie=M.useRef(!1),[ae,oe]=M.useState(null),se=P(e=>{oe({value:e,hasConsumerStoppedPropagation:ie.current}),re(e)},`handleUserSelect`),O=M.useRef(T);M.useEffect(()=>{let e=m?_?.ownerDocument.getElementById(m):_?.form;if(e instanceof HTMLFormElement){let t=P(()=>re(O.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[m,_,re]);let ce=!_||!!m||!!_.closest(`form`),[k,A]=M.useState(new Set),le=D(),ue=Array.from(k).map(e=>e.props.value).join(`;`),de=M.useCallback(e=>{A(t=>new Set(t).add(e))},[]),pe=M.useCallback(e=>{A(t=>{let n=new Set(t);return n.delete(e),n})},[]),me={required:p,trigger:_,onTriggerChange:v,valueNode:y,onValueNodeChange:x,valueNodeHasChildren:S,onValueNodeHasChildrenChange:ee,contentId:le,value:T,onValueChange:re,hasConsumerStoppedPropagationRef:ie,userSelection:ae,onUserSelect:se,open:w,onOpenChange:ne,dir:C,triggerPointerDownPosRef:E,disabled:f,name:u,autoComplete:d,form:m,nativeOptions:k,nativeSelectKey:ue,isFormControl:ce};return(0,N.jsx)(fe,{...g,children:(0,N.jsx)(ut,{scope:t,...me,children:(0,N.jsx)(at.Provider,{scope:t,children:(0,N.jsx)(dt,{scope:t,onNativeOptionAdd:de,onNativeOptionRemove:pe,children:Je(h)?h(me):n})})})})}function Je(e){return typeof e==`function`}function Ye(e){return e===``||e===void 0}function Xe(e){let t=pe(e),n=M.useRef(``),r=M.useRef(0),i=M.useCallback(e=>{let i=n.current+e;t(i);function a(e){n.current=e,window.clearTimeout(r.current),e!==``&&(r.current=window.setTimeout(()=>a(``),1e3))}P(a,`updateSearch`),a(i)},[t]),a=M.useCallback(()=>{n.current=``,window.clearTimeout(r.current)},[]);return M.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,a]}function Ze(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=Qe(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.textValue.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}function Qe(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var M,$e,N,et,P,tt,nt,rt,it,F,at,ot,st,I,ct,lt,ut,L,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,R,St,Ct,z,wt,B,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t;function en(){return(en=t((()=>{M=e(n(),1),$e=e(r(),1),Ke(),ee(),y(),p(),d(),S(),_e(),De(),he(),ie(),de(),ve(),re(),ne(),h(),me(),w(),v(),xe(),ke(),Oe(),N=i(),et=Object.defineProperty,P=(e,t)=>et(e,`name`,{value:t,configurable:!0}),tt={ItemAligned:`item-aligned`,Popper:`popper`},nt={LTR:`ltr`,RTL:`rtl`},rt=[` `,`Enter`,`ArrowUp`,`ArrowDown`],it=[` `,`Enter`],F=`Select`,[at,ot,st]=x(F),[I,ct]=f(F,[st,A]),lt=A(),[ut,L]=I(F),[dt,ft]=I(F),P(qe,`SelectProvider`),pt=P(e=>{let{__scopeSelect:t,children:n,...r}=e;return(0,N.jsx)(qe,{__scopeSelect:t,...r,internal_do_not_use_render:({isFormControl:e})=>(0,N.jsxs)(N.Fragment,{children:[n,e?(0,N.jsx)($t,{__scopeSelect:t}):null]})})},`Select`),mt=`SelectTrigger`,ht=M.forwardRef(P(function(e,t){let{__scopeSelect:n,disabled:r=!1,...i}=e,a=lt(n),o=L(mt,n),s=o.disabled||r,c=m(t,o.onTriggerChange),l=ot(n),u=M.useRef(`touch`),[d,f,p]=Xe(e=>{let t=l().filter(e=>!e.disabled),n=Ze(t,e,t.find(e=>e.value===o.value));n!==void 0&&o.onUserSelect(n.value)}),h=P(e=>{s||(o.onOpenChange(!0),p()),e&&(o.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})},`handleOpen`);return(0,N.jsx)(ue,{asChild:!0,...a,children:(0,N.jsx)(T.button,{type:`button`,role:`combobox`,"aria-controls":o.open?o.contentId:void 0,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":`none`,dir:o.dir,"data-state":o.open?`open`:`closed`,disabled:s,"data-disabled":s?``:void 0,"data-placeholder":Ye(o.value)?``:void 0,...i,ref:c,onClick:C(i.onClick,e=>{e.currentTarget.focus(),u.current!==`mouse`&&h(e)}),onPointerDown:C(i.onPointerDown,e=>{u.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&e.ctrlKey===!1&&e.pointerType===`mouse`&&(h(e),e.preventDefault())}),onKeyDown:C(i.onKeyDown,e=>{let t=d.current!==``;!(e.ctrlKey||e.altKey||e.metaKey)&&e.key.length===1&&(o.hasConsumerStoppedPropagationRef.current=e.isPropagationStopped(),f(e.key)),t&&e.key===` `||rt.includes(e.key)&&(h(),e.preventDefault())})})})},`SelectTrigger`)),gt=`SelectValue`,_t=M.forwardRef(P(function(e,t){let{__scopeSelect:n,className:r,style:i,children:a,placeholder:o=``,...s}=e,c=L(gt,n),{onValueNodeHasChildrenChange:l}=c,u=a!==void 0,d=m(t,c.onValueNodeChange);_(()=>{l(u)},[l,u]);let f=Ye(c.value);return(0,N.jsx)(T.span,{...s,asChild:!f&&s.asChild,ref:d,style:{pointerEvents:`none`},children:(0,N.jsx)(M.Fragment,{children:f?o:a},f?`placeholder`:`value`)})},`SelectValue`)),vt=M.forwardRef(P(function(e,t){let{__scopeSelect:n,children:r,...i}=e;return(0,N.jsx)(T.span,{"aria-hidden":!0,...i,ref:t,children:r||`▼`})},`SelectIcon`)),[yt,bt]=I(`SelectPortal`,{forceMount:void 0}),xt=P(e=>{let{__scopeSelect:t,forceMount:n,...r}=e;return(0,N.jsx)(yt,{scope:e.__scopeSelect,forceMount:n,children:(0,N.jsx)(be,{asChild:!0,...r})})},`SelectPortal`),R=`SelectContent`,St=M.forwardRef(P(function(e,t){let n=bt(R,e.__scopeSelect),{forceMount:r=n.forceMount,...i}=e,a=L(R,e.__scopeSelect),[o,s]=M.useState();return _(()=>{s(new DocumentFragment)},[]),(0,N.jsx)(E,{present:r||a.open,children:({present:e})=>e?(0,N.jsx)(Et,{...i,ref:t}):(0,N.jsx)(Ct,{...i,fragment:o})})},`SelectContent`)),Ct=M.forwardRef(P(function(e,t){let{__scopeSelect:n,children:r,fragment:i}=e;return i?$e.createPortal((0,N.jsx)(wt,{scope:n,children:(0,N.jsx)(at.Slot,{scope:n,children:(0,N.jsx)(`div`,{ref:t,children:r})})}),i):null},`SelectContentFragment`)),z=10,[wt,B]=I(R),Tt=g(`SelectContent.RemoveScroll`),Et=M.forwardRef(P(function(e,t){let{__scopeSelect:n}=e,{position:r=tt.ItemAligned,onCloseAutoFocus:i,onEscapeKeyDown:a,onPointerDownOutside:o,side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:h,hideWhenDetached:g,avoidCollisions:_,...v}=e,y=L(R,n),[b,x]=M.useState(null),[S,ee]=M.useState(null),te=m(t,x),[w,ne]=M.useState(null),[T,re]=M.useState(null),E=ot(n),[D,ie]=M.useState(!1),ae=M.useRef(!1),oe=M.useRef(!1),se=M.useRef(!1);M.useEffect(()=>{if(b)return Me(b)},[b]),Ae();let O=M.useCallback(e=>{let[t,...n]=E().map(e=>e.ref.current),[r]=n.slice(-1),i=document.activeElement;for(let n of e)if(n===i||(n?.scrollIntoView({block:`nearest`}),n===t&&S&&(S.scrollTop=0),n===r&&S&&(S.scrollTop=S.scrollHeight),n?.focus(),document.activeElement!==i))return},[E,S]),ce=M.useCallback(()=>O([w,b]),[O,w,b]);M.useEffect(()=>{D&&ce()},[D,ce]);let{onOpenChange:k,triggerPointerDownPosRef:A}=y;M.useEffect(()=>{if(b){let e={x:0,y:0},t=P(t=>{e={x:Math.abs(Math.round(t.pageX)-(A.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(A.current?.y??0))}},`handlePointerMove`),n=P(n=>{e.x<=10&&e.y<=10?n.preventDefault():n.composedPath().includes(b)||k(!1),document.removeEventListener(`pointermove`,t),A.current=null},`handlePointerUp`);return A.current!==null&&(document.addEventListener(`pointermove`,t),document.addEventListener(`pointerup`,n,{capture:!0,once:!0})),()=>{document.removeEventListener(`pointermove`,t),document.removeEventListener(`pointerup`,n,{capture:!0})}}},[b,k,A]),M.useEffect(()=>{let e=P(()=>k(!1),`close`);return window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[k]);let[le,ue]=Xe(e=>{let t=E().filter(e=>!e.disabled),n=Ze(t,e,t.find(e=>e.ref.current===document.activeElement));n&&setTimeout(()=>n.ref.current?.focus())}),de=M.useCallback((e,t,n)=>{let r=!oe.current;r&&(oe.current=!0);let i=!ae.current&&!n;y.value!==void 0&&y.value===t||i?(ne(e),i&&(ae.current=!0)):r&&ne(e)},[y.value]),fe=M.useCallback(()=>b?.focus(),[b]),pe=M.useCallback((e,t,n)=>{if(!e)return;let r=!se.current;r&&(se.current=!0);let i=!ae.current&&!n;(y.value!==void 0&&y.value===t||i||r)&&re(e)},[y.value]),me=r===tt.Popper?Ot:Dt,he=me===Ot?{side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:h,hideWhenDetached:g,avoidCollisions:_}:{};return(0,N.jsx)(wt,{scope:n,content:b,viewport:S,onViewportChange:ee,itemRefCallback:de,selectedItem:w,onItemLeave:fe,itemTextRefCallback:pe,focusSelectedItem:ce,selectedItemText:T,position:r,isPositioned:D,searchRef:le,children:(0,N.jsx)(je,{as:Tt,allowPinchZoom:!0,children:(0,N.jsx)(ye,{asChild:!0,trapped:y.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:C(i,e=>{y.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,N.jsx)(ge,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>y.onOpenChange(!1),children:(0,N.jsx)(me,{role:`listbox`,id:y.contentId,"data-state":y.open?`open`:`closed`,dir:y.dir,onContextMenu:e=>e.preventDefault(),...v,...he,onPlaced:()=>ie(!0),ref:te,style:{display:`flex`,flexDirection:`column`,outline:`none`,...v.style},onKeyDown:C(v.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if(e.key===`Tab`&&e.preventDefault(),!t&&e.key.length===1&&ue(e.key),[`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=E().filter(e=>!e.disabled).map(e=>e.ref.current);if([`ArrowUp`,`End`].includes(e.key)&&(t=t.slice().reverse()),[`ArrowUp`,`ArrowDown`].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>O(t)),e.preventDefault()}})})})})})})},`SelectContentImpl`)),Dt=M.forwardRef(P(function(e,t){let{__scopeSelect:n,onPlaced:r,...i}=e,a=L(R,n),o=B(R,n),[s,c]=M.useState(null),[l,u]=M.useState(null),d=m(t,u),f=ot(n),p=M.useRef(!1),h=M.useRef(!0),{viewport:g,selectedItem:v,selectedItemText:y,focusSelectedItem:b}=o,x=M.useCallback(()=>{if(a.trigger&&a.valueNode&&s&&l&&g&&v&&y){let e=a.trigger.getBoundingClientRect(),t=l.getBoundingClientRect(),n=a.valueNode.getBoundingClientRect(),i=y.getBoundingClientRect();if(a.dir!==nt.RTL){let r=i.left-t.left,a=n.left-r,o=e.left-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-z,d=Ue(a,[z,Math.max(z,u-l)]);s.style.minWidth=c+`px`,s.style.left=d+`px`}else{let r=t.right-i.right,a=window.innerWidth-n.right-r,o=window.innerWidth-e.right-a,c=e.width+o,l=Math.max(c,t.width),u=window.innerWidth-z,d=Ue(a,[z,Math.max(z,u-l)]);s.style.minWidth=c+`px`,s.style.right=d+`px`}let o=f(),c=window.innerHeight-z*2,u=g.scrollHeight,d=window.getComputedStyle(l),m=parseInt(d.borderTopWidth,10),h=parseInt(d.paddingTop,10),_=parseInt(d.borderBottomWidth,10),b=parseInt(d.paddingBottom,10),x=m+h+u+b+_,S=Math.min(v.offsetHeight*5,x),ee=window.getComputedStyle(g),te=parseInt(ee.paddingTop,10),C=parseInt(ee.paddingBottom,10),w=e.top+e.height/2-z,ne=c-w,T=v.offsetHeight/2,re=v.offsetTop+T,E=m+h+re,D=x-E;if(E<=w){let e=o.length>0&&v===o[o.length-1].ref.current;s.style.bottom=`0px`;let t=l.clientHeight-g.offsetTop-g.offsetHeight,n=E+Math.max(ne,T+(e?C:0)+t+_);s.style.height=n+`px`}else{let e=o.length>0&&v===o[0].ref.current;s.style.top=`0px`;let t=Math.max(w,m+g.offsetTop+(e?te:0)+T)+D;s.style.height=t+`px`,g.scrollTop=E-w+g.offsetTop}s.style.margin=`${z}px 0`,s.style.minHeight=S+`px`,s.style.maxHeight=c+`px`,r?.(),requestAnimationFrame(()=>p.current=!0)}},[f,a.trigger,a.valueNode,s,l,g,v,y,a.dir,r]);_(()=>x(),[x]);let[S,ee]=M.useState();_(()=>{l&&ee(window.getComputedStyle(l).zIndex)},[l]);let te=M.useCallback(e=>{e&&h.current===!0&&(x(),b?.(),h.current=!1)},[x,b]);return(0,N.jsx)(kt,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:p,onScrollButtonChange:te,children:(0,N.jsx)(`div`,{ref:c,style:{display:`flex`,flexDirection:`column`,position:`fixed`,zIndex:S},children:(0,N.jsx)(T.div,{...i,ref:d,style:{boxSizing:`border-box`,maxHeight:`100%`,...i.style}})})})},`SelectItemAlignedPosition`)),Ot=M.forwardRef(P(function(e,t){let{__scopeSelect:n,align:r=`start`,collisionPadding:i=z,...a}=e,o=lt(n);return(0,N.jsx)(le,{...o,...a,ref:t,align:r,collisionPadding:i,style:{boxSizing:`border-box`,...a.style,"--radix-select-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-select-content-available-width":`var(--radix-popper-available-width)`,"--radix-select-content-available-height":`var(--radix-popper-available-height)`,"--radix-select-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-select-trigger-height":`var(--radix-popper-anchor-height)`}})},`SelectPopperPosition`)),[kt,At]=I(R,{}),jt=`SelectViewport`,Mt=M.forwardRef(P(function(e,t){let{__scopeSelect:n,nonce:r,...i}=e,a=B(jt,n),o=At(jt,n),s=m(t,a.onViewportChange),c=M.useRef(0);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`},nonce:r}),(0,N.jsx)(at.Slot,{scope:n,children:(0,N.jsx)(T.div,{"data-radix-select-viewport":``,role:`presentation`,...i,ref:s,style:{position:`relative`,flex:1,overflow:`hidden auto`,...i.style},onScroll:C(i.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=o;if(r?.current&&n){let e=Math.abs(c.current-t.scrollTop);if(e>0){let r=window.innerHeight-z*2,i=parseFloat(n.style.minHeight),a=parseFloat(n.style.height),o=Math.max(i,a);if(o<r){let i=o+e,a=Math.min(r,i),s=i-a;n.style.height=a+`px`,n.style.bottom===`0px`&&(t.scrollTop=s>0?s:0,n.style.justifyContent=`flex-end`)}}}c.current=t.scrollTop})})})]})},`SelectViewport`)),[Nt,Pt]=I(`SelectGroup`),Ft=M.forwardRef(P(function(e,t){let{__scopeSelect:n,...r}=e,i=D();return(0,N.jsx)(Nt,{scope:n,id:i,children:(0,N.jsx)(T.div,{role:`group`,"aria-labelledby":i,...r,ref:t})})},`SelectGroup`)),It=`SelectLabel`,Lt=M.forwardRef(P(function(e,t){let{__scopeSelect:n,...r}=e,i=Pt(It,n);return(0,N.jsx)(T.div,{id:i.id,...r,ref:t})},`SelectLabel`)),Rt=`SelectItem`,[zt,Bt]=I(Rt),Vt=M.forwardRef(P(function(e,t){let{__scopeSelect:n,value:r,disabled:i=!1,textValue:a,...o}=e,s=L(Rt,n),c=B(Rt,n),l=s.value===r,[u,d]=M.useState(a??``),[f,p]=M.useState(!1),h=pe(e=>c.itemRefCallback?.(e,r,i)),g=m(t,h),_=D(),v=M.useRef(`touch`);function y(e){s.hasConsumerStoppedPropagationRef.current=e.isPropagationStopped(),s.onUserSelect(r),s.onOpenChange(!1)}return P(y,`handleSelect`),(0,N.jsx)(zt,{scope:n,value:r,disabled:i,textId:_,isSelected:l,onItemTextChange:M.useCallback(e=>{d(t=>t||(e?.textContent??``).trim())},[]),children:(0,N.jsx)(at.ItemSlot,{scope:n,value:r,disabled:i,textValue:u,children:(0,N.jsx)(T.div,{role:`option`,"aria-labelledby":_,"data-highlighted":f?``:void 0,"aria-selected":l&&f,"data-state":l?`checked`:`unchecked`,"aria-disabled":i||void 0,"data-disabled":i?``:void 0,tabIndex:i?void 0:-1,...o,ref:g,onFocus:C(o.onFocus,()=>p(!0)),onBlur:C(o.onBlur,()=>p(!1)),onClick:C(o.onClick,e=>{i||v.current!==`mouse`&&y(e)}),onPointerUp:C(o.onPointerUp,e=>{i||v.current===`mouse`&&y(e)}),onPointerDown:C(o.onPointerDown,e=>{v.current=e.pointerType}),onPointerMove:C(o.onPointerMove,e=>{v.current=e.pointerType,i?c.onItemLeave?.():v.current===`mouse`&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:C(o.onPointerLeave,e=>{e.currentTarget===document.activeElement&&c.onItemLeave?.()}),onKeyDown:C(o.onKeyDown,e=>{i||e.target!==e.currentTarget||(c.searchRef?.current===``||e.key!==` `)&&(it.includes(e.key)&&y(e),e.key===` `&&e.preventDefault())})})})})},`SelectItem`)),Ht=`SelectItemText`,Ut=M.forwardRef(P(function(e,t){let{__scopeSelect:n,className:r,style:i,...a}=e,o=L(Ht,n),s=B(Ht,n),c=Bt(Ht,n),l=ft(Ht,n),[u,d]=M.useState(null),f=pe(e=>s.itemTextRefCallback?.(e,c.value,c.disabled)),p=m(t,d,c.onItemTextChange,f),h=u?.textContent,g=M.useMemo(()=>(0,N.jsx)(`option`,{value:c.value,disabled:c.disabled,children:h},c.value),[c.disabled,c.value,h]),{onNativeOptionAdd:v,onNativeOptionRemove:y}=l;return _(()=>(v(g),()=>y(g)),[v,y,g]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(T.span,{id:c.textId,...a,ref:p}),c.isSelected&&o.valueNode&&!o.valueNodeHasChildren&&!Ye(o.value)?$e.createPortal(a.children,o.valueNode):null]})},`SelectItemText`)),Wt=`SelectItemIndicator`,Gt=M.forwardRef(P(function(e,t){let{__scopeSelect:n,...r}=e;return Bt(Wt,n).isSelected?(0,N.jsx)(T.span,{"aria-hidden":!0,...r,ref:t}):null},`SelectItemIndicator`)),Kt=`SelectScrollUpButton`,qt=M.forwardRef(P(function(e,t){let n=B(Kt,e.__scopeSelect),r=At(Kt,e.__scopeSelect),[i,a]=M.useState(!1),o=m(t,r.onScrollButtonChange);return _(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollTop>0;a(e)};P(e,`handleScroll`);let t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,N.jsx)(Xt,{...e,ref:o,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop-=t.offsetHeight)}}):null},`SelectScrollUpButton`)),Jt=`SelectScrollDownButton`,Yt=M.forwardRef(P(function(e,t){let n=B(Jt,e.__scopeSelect),r=At(Jt,e.__scopeSelect),[i,a]=M.useState(!1),o=m(t,r.onScrollButtonChange);return _(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight,n=Math.ceil(t.scrollTop)<e;a(n)};P(e,`handleScroll`);let t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,N.jsx)(Xt,{...e,ref:o,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop+=t.offsetHeight)}}):null},`SelectScrollDownButton`)),Xt=M.forwardRef(P(function(e,t){let{__scopeSelect:n,onAutoScroll:r,...i}=e,a=B(`SelectScrollButton`,n),o=M.useRef(null),s=ot(n),c=M.useCallback(()=>{o.current!==null&&(window.clearInterval(o.current),o.current=null)},[]);return M.useEffect(()=>()=>c(),[c]),_(()=>{s().find(e=>e.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:`nearest`})},[s]),(0,N.jsx)(T.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:C(i.onPointerDown,()=>{o.current===null&&(o.current=window.setInterval(r,50))}),onPointerMove:C(i.onPointerMove,()=>{a.onItemLeave?.(),o.current===null&&(o.current=window.setInterval(r,50))}),onPointerLeave:C(i.onPointerLeave,()=>{c()})})},`SelectScrollButtonImpl`)),Zt=M.forwardRef(P(function(e,t){let{__scopeSelect:n,...r}=e;return(0,N.jsx)(T.div,{"aria-hidden":!0,...r,ref:t})},`SelectSeparator`)),Qt=`SelectBubbleInput`,$t=M.forwardRef(P(function({__scopeSelect:e,...t},n){let r=L(Qt,e),{value:i,onValueChange:a,required:o,disabled:s,name:c,autoComplete:l,form:u,userSelection:d}=r,{nativeOptions:f,nativeSelectKey:p}=r,h=M.useRef(null),g=m(n,h),_=i??``,v=M.useRef(_),y=M.useRef(d),b=M.useRef(!1),x=Array.from(f).some(e=>(e.props.value??``)===``);return M.useEffect(()=>{let e=h.current;if(!e)return;let t=window.HTMLSelectElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set,r=d!==null&&d!==y.current;y.current=d;let i=v.current!==_;v.current=_;let a=r&&i;if(r&&!i&&d.value!==_&&!d.hasConsumerStoppedPropagation&&n){b.current=!0;try{n.call(e,d.value),e.dispatchEvent(new Event(`change`,{bubbles:!0}))}finally{b.current=!1,n.call(e,_)}return}let o=a&&!d.hasConsumerStoppedPropagation;if(i&&n){let t=new Event(`change`,{bubbles:o});n.call(e,_),e.dispatchEvent(t)}},[_,d]),(0,N.jsxs)(T.select,{"aria-hidden":!0,required:o,tabIndex:-1,name:c,autoComplete:l,disabled:s,form:u,onChange:e=>{b.current||a(e.target.value)},...t,style:{...Se,...t.style},ref:g,defaultValue:_,children:[Ye(i)&&!x?(0,N.jsx)(`option`,{value:``}):null,Array.from(f)]},p)},`SelectBubbleInput`)),P(Je,`isFunction`),P(Ye,`shouldShowPlaceholder`),P(Xe,`useTypeaheadSearch`),P(Ze,`findNextItem`),P(Qe,`wrapArray`)})))()}var V,tn,H,nn,rn,an,on,sn,cn,ln;function un(){return(un=t((()=>{en(),s(),l(),He(),oe(),se(),we(),Te(),V=i(),tn=ae({slots:{trigger:[`flex cursor-pointer items-center gap-2 pe-3 text-start`,`data-[state=open]:border-border-input-focus data-[state=open]:outline-border-input-focus`,`data-[state=open]:outline-[0.125rem] data-[state=open]:outline-offset-[-0.0625rem]`,`aria-invalid:data-[state=open]:border-border-input-destructive`,`aria-invalid:data-[state=open]:outline-border-input-destructive`],value:`min-w-0 flex-1 truncate group-data-placeholder/select-trigger:text-text-input-placeholder`,icon:[`flex size-5 shrink-0 items-center justify-center transition-transform duration-150 motion-reduce:transition-none`,`text-icon-input-default group-data-[state=open]/select-trigger:-rotate-180`,`group-disabled/select-trigger:text-icon-input-disable`],content:[`relative z-(--z-index-top-layer) flex flex-col overflow-hidden outline-none`,`rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-xl`],viewport:`scroll-py-1 py-1`,scrollButton:[`flex h-6 shrink-0 cursor-default items-center justify-center bg-bg-default-base-primary`,`text-icon-input-default`],item:[`group/item relative mx-1 flex min-h-10 cursor-pointer items-center rounded-md py-2 ps-4`,`pe-10 text-sm text-text-default-base-primary outline-none select-none`,`data-highlighted:bg-bg-default-base-primary-hover`,`data-disabled:cursor-default data-disabled:text-text-default-base-tertiary`],trailing:`ms-3 shrink-0 text-xs text-text-default-base-tertiary`,indicator:[`pointer-events-none absolute end-2 flex size-5 items-center justify-center`,`text-icon-default-base-secondary group-data-disabled/item:text-text-default-base-tertiary`],groupLabel:`mx-1 px-3 py-1 text-xs text-text-default-base-tertiary`,separator:`my-2 h-px bg-border-default-base-primary`},variants:{trailing:{true:{item:`pe-2`,indicator:`static ms-2 shrink-0`}},position:{popper:{content:`w-(--radix-select-trigger-width) max-h-[min(18rem,var(--radix-select-content-available-height))]`},"item-aligned":{content:`max-h-72`}}}}),H=tn(),nn=({disabled:e,required:t,...n})=>{let r=Ce();return(0,V.jsx)(pt,{...n,disabled:e??r?.disabled,required:t??r?.required})},nn.displayName=`Select.Root`,rn=({size:e=`md`,placeholder:t,children:n,className:r,...i})=>{let a=Ce();return(0,V.jsxs)(ht,{id:a?.controlId,"aria-describedby":a?.describedBy,"aria-invalid":a?.invalid||void 0,...i,"data-slot":`select-trigger`,"data-size":e,className:O(Ee({size:e}),`group/select-trigger`,H.trigger(),r),children:[(0,V.jsx)(`span`,{"data-slot":`select-value`,className:H.value(),children:(0,V.jsx)(_t,{placeholder:t,children:n})}),(0,V.jsx)(vt,{"data-slot":`select-icon`,className:H.icon(),children:(0,V.jsx)(u,{className:`size-5`})})]})},rn.displayName=`Select.Trigger`,an=({position:e=`popper`,side:t=`bottom`,align:n=`start`,sideOffset:r=8,collisionPadding:i=8,className:a,children:o,...s})=>{let c=Ce(),l=s[`aria-label`]||s[`aria-labelledby`]?{}:{"aria-labelledby":c?.labelId,"aria-label":`Options`};return(0,V.jsx)(xt,{children:(0,V.jsxs)(St,{...l,...s,position:e,side:t,align:n,sideOffset:r,collisionPadding:i,"data-slot":`select-content`,className:O(H.content({position:e}),a),children:[(0,V.jsx)(qt,{"data-slot":`select-scroll-up`,className:H.scrollButton(),children:(0,V.jsx)(Ve,{className:`size-4`})}),(0,V.jsx)(Mt,{"data-slot":`select-list`,className:H.viewport(),children:o}),(0,V.jsx)(Yt,{"data-slot":`select-scroll-down`,className:H.scrollButton(),children:(0,V.jsx)(u,{className:`size-4`})})]})})},an.displayName=`Select.Content`,on=({trailing:e,className:t,children:n,...r})=>{let i=e!=null&&e!==!1,a=tn({trailing:i});return(0,V.jsxs)(Vt,{...r,"data-slot":`select-item`,className:O(a.item(),t),children:[(0,V.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:(0,V.jsx)(Ut,{children:n})}),i&&(0,V.jsx)(`span`,{"data-slot":`select-item-trailing`,className:H.trailing(),children:e}),(0,V.jsx)(`span`,{className:a.indicator(),children:(0,V.jsx)(Gt,{"data-slot":`select-item-indicator`,className:`flex`,children:(0,V.jsx)(c,{className:`size-5`})})})]})},on.displayName=`Select.Item`,sn=e=>(0,V.jsx)(Ft,{...e,"data-slot":`select-group`}),sn.displayName=`Select.Group`,cn=({className:e,...t})=>(0,V.jsx)(Lt,{...t,"data-slot":`select-group-label`,className:O(H.groupLabel(),e)}),cn.displayName=`Select.GroupLabel`,ln=({className:e,...t})=>(0,V.jsx)(Zt,{...t,"data-slot":`select-separator`,className:O(H.separator(),e)}),ln.displayName=`Select.Separator`;try{tn.displayName=`Select.Root`,tn.__docgenInfo={description:"Style recipe for Select. Slots: `trigger` (the closed field), `value`, `icon` (the chevron),\n`content` (the floating surface), `viewport` (the scrolling list), `scrollButton`, `item`,\n`trailing`, `indicator` (the check on the selected row), `groupLabel` and `separator`. The\ntrigger wears `Input`'s recipe.",displayName:`Select.Root`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{trailing:{defaultValue:null,description:``,name:`trailing`,required:!1,tags:{},type:{name:`boolean`}},position:{defaultValue:{value:`popper`},description:``,name:`position`,required:!1,tags:{},type:{name:`enum`,raw:`"popper" | "item-aligned"`,value:[{value:`"popper"`},{value:`"item-aligned"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/.pnpm/tailwind-variants@3.3.1_tailwind-merge@3.7.0_tailwindcss@4.3.5/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the Select trigger, surface and rows`}}}catch{}try{rn.displayName=`Select.Trigger`,rn.__docgenInfo={description:"The closed field: a button drawn as an `Input`, showing the picked option\n(or `placeholder`) and a chevron. Click, Enter, Space or the arrow keys\nopen the list. While the list is open the focus is on the options, and the\nfield keeps its focus ring.\n\nInside a `Field.Root` it takes the field's `id`, description and `invalid`,\nso the `Field.Label` names it, and its own props win. Outside one, give it an\n`aria-label` or point a `Label` at its `id`. Its `ref` reaches the button, so\na form library can focus the field on a failed submit.",displayName:`Select.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Control height, matching `Input`. Defaults to `'md'`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},placeholder:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Text shown while nothing is picked.`,name:`placeholder`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Renders the picked value. Defaults to the picked option's label.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Button drawn as an input, showing the picked option and a chevron`,dataAttribute:`{string} data-slot - Always set to "select-trigger"
{string} data-state - "open" while the list is open, "closed" otherwise
{string} data-placeholder - Present while nothing is picked`}}}catch{}try{an.displayName=`Select.Content`,an.__docgenInfo={description:'The floating list. By default (`position="popper"`) it opens below the\ntrigger, matches its width and caps its height to six rows or the room\navailable, so a long list scrolls, with arrows at the ends while there is\nmore to see. `position="item-aligned"` opens it over the trigger instead,\nwith the picked option on top of it.\n\nIt renders on Radix\'s layer stack, so inside a `Modal` or a `Popover` the\nfocus stays on the list and Escape closes the list first.\n\nInside a `Field.Root` the list is named after the `Field.Label`; otherwise it\nis named "Options". Pass `aria-label` or `aria-labelledby` to name it.',displayName:`Select.Content`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Floating surface holding the options`,dataAttribute:`{string} data-slot - Always set to "select-content"`}}}catch{}try{on.displayName=`Select.Item`,on.__docgenInfo={description:"One option. `value` is what the select stores and submits; the children are\nthe label shown in the row and in the trigger. The picked row carries a\ncheck at its end. A `disabled` row is greyed out and cannot be picked.",displayName:`Select.Item`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},trailing:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Short text at the end of the row, such as a code or a count. It does not show in the trigger.`,name:`trailing`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Option row inside the list`,dataAttribute:`{string} data-slot - Always set to "select-item"
{string} data-state - "checked" on the picked row
{string} data-highlighted - Present on the row under the pointer or the keyboard`}}}catch{}try{sn.displayName=`Select.Group`,sn.__docgenInfo={description:"A section of options. Give it a `GroupLabel` as heading, and put a\n`Separator` between sections. A single section can carry a heading too.",displayName:`Select.Group`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Section of options under a heading`,dataAttribute:`{string} data-slot - Always set to "select-group"`}}}catch{}try{cn.displayName=`Select.GroupLabel`,cn.__docgenInfo={description:"Heading of a `Group`. It names the group and cannot be picked.",displayName:`Select.GroupLabel`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Heading of a section of options`,dataAttribute:`{string} data-slot - Always set to "select-group-label"`}}}catch{}try{ln.displayName=`Select.Separator`,ln.__docgenInfo={description:"Line between two `Group`s.",displayName:`Select.Separator`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/.pnpm/@radix-ui+react-primitive@2.2.0_@types+react-dom@19.3.0_@types+react@19.3.0__@types+rea_8110221bfe749bbb617b2ef4d8402995/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Divider between sections of options`,dataAttribute:`{string} data-slot - Always set to "select-separator"`}}}catch{}})))()}var U;function dn(){return(dn=t((()=>{un(),U={Root:nn,Trigger:rn,Content:an,Item:on,Group:sn,GroupLabel:cn,Separator:ln}})))()}var fn,W,G,pn,K,q,J,Y,X,mn,hn,Z,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,Q,An,jn,$,Mn,Nn;function Pn(){return(Pn=t((()=>{fn=n(),Re(),dn(),ce(),we(),Ne(),Fe(),W=i(),{expect:G,fn:pn,screen:K,userEvent:q,waitFor:J,within:Y}=__STORYBOOK_MODULE_TEST__,X=[{value:`AZ`,label:`Arizona`},{value:`CA`,label:`California`},{value:`FL`,label:`Florida`},{value:`GA`,label:`Georgia`},{value:`NY`,label:`New York`},{value:`TX`,label:`Texas`}],mn=[{label:`North`,options:[{value:`AZ`,label:`Arizona`},{value:`MN`,label:`Minnesota`},{value:`FL`,label:`Florida`}]},{label:`West`,options:[{value:`CA`,label:`California`}]},{label:`South`,options:[{value:`TX`,label:`Texas`}]}],hn={title:`Components/Select`,component:U.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:"Select is a button that opens a list of options and shows the one picked.\nUse it for a pick from a short, known list, where typing would add nothing.\nFor a long list or one the user searches, use Combobox; for a handful of\noptions that should all stay visible, use RadioGroup. `Root` owns the picked\nvalue; `Trigger` is the closed field and `Content` the list of `Item`s."}}},decorators:[e=>(0,W.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,W.jsx)(e,{})})],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:"Control height of the trigger, matching `Input`. Set on `Select.Trigger`."},placeholder:{control:`text`,description:"Text the trigger shows while nothing is picked. Set on `Select.Trigger`."},disabled:{control:`boolean`,description:"Blocks the whole select. Defaults to the surrounding `Field.Root`."},required:{control:`boolean`,description:"Blocks a native form submission until something is picked. Defaults to the surrounding `Field.Root`."},onValueChange:{action:`valueChange`,description:`Called with the picked value.`}},args:{size:`md`,placeholder:`Select a state`},render:({size:e,placeholder:t,...n})=>(0,W.jsxs)(U.Root,{...n,children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`,size:e,placeholder:t}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})},Z=async e=>(await q.click(e),K.findByRole(`listbox`)),gn=async()=>{await q.keyboard(`{Escape}`),await J(()=>G(K.queryByRole(`listbox`)).not.toBeInTheDocument())},_n={args:{onValueChange:pn()},play:async({args:e,canvasElement:t})=>{let n=Y(t).getByRole(`combobox`,{name:`State`});await G(n).toHaveTextContent(`Select a state`);let r=await Z(n),i=r.querySelector(`[data-slot=select-list]`);await G(r).toHaveAccessibleName(`Options`),await G(i.scrollHeight).toBe(i.clientHeight),await q.click(Y(r).getByRole(`option`,{name:`Florida`})),await J(()=>G(K.queryByRole(`listbox`)).not.toBeInTheDocument()),await G(n).toHaveTextContent(`Florida`),await G(e.onValueChange).toHaveBeenLastCalledWith(`FL`)}},vn={render:()=>(0,W.jsx)(`div`,{className:`w-full`,children:(0,W.jsxs)(j.Root,{invalid:!0,required:!0,children:[(0,W.jsx)(j.Label,{children:`State`}),(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]}),(0,W.jsx)(j.Description,{children:`Where the risk is located.`}),(0,W.jsx)(j.Error,{errors:[{message:`Choose a state`}]})]})}),play:async({canvasElement:e})=>{let t=Y(e).getByRole(`combobox`,{name:/State/});await G(t).toHaveAttribute(`aria-invalid`,`true`),await G(t).toHaveAccessibleDescription(/located.*Choose a state|Choose a state.*located/),await G(t).toHaveStyle({borderColor:`rgb(217, 38, 38)`});let n=await Z(t);await G(n).toHaveAccessibleName(/State/),await gn()}},yn={render:()=>(0,W.jsx)(`div`,{className:`w-full`,children:(0,W.jsx)(j.Root,{children:(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})})}),play:async({canvasElement:e})=>{let t=await Z(Y(e).getByRole(`combobox`,{name:`State`}));await G(t).toHaveAccessibleName(`Options`),await gn()}},bn={args:{onValueChange:pn()},render:e=>(0,W.jsxs)(U.Root,{...e,children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,disabled:e===`FL`,children:t},e))})]}),play:async({args:e,canvasElement:t})=>{let n=await Z(Y(t).getByRole(`combobox`,{name:`State`}));await G(Y(n).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-disabled`,`true`),await q.click(Y(n).getByRole(`option`,{name:`Florida`})),await G(e.onValueChange).not.toHaveBeenCalled(),Y(n).getByRole(`option`,{name:`California`}).focus(),await q.keyboard(`{ArrowDown}`),await G(Y(n).getByRole(`option`,{name:`Georgia`})).toHaveFocus(),await gn()}},xn={render:()=>{let[e,t]=(0,fn.useState)(`CA`);return(0,W.jsxs)(`div`,{className:`flex w-full flex-col items-start gap-6`,children:[(0,W.jsxs)(`div`,{className:`flex gap-3`,children:[(0,W.jsx)(k,{variant:`secondary`,size:`sm`,onClick:()=>t(``),children:`Clear`}),(0,W.jsx)(k,{variant:`secondary`,size:`sm`,onClick:()=>t(`NY`),children:`Choose New York`})]}),(0,W.jsx)(`div`,{className:`w-full`,children:(0,W.jsxs)(U.Root,{value:e,onValueChange:t,children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})}),(0,W.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e||`none`]})]})},play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`combobox`,{name:`State`});await q.click(t.getByRole(`button`,{name:`Choose New York`})),await G(n).toHaveTextContent(`New York`),await q.click(t.getByRole(`button`,{name:`Clear`})),await G(n).toHaveTextContent(`Select a state`),await G(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},Sn={render:()=>{let[e,t]=(0,fn.useState)(null);return(0,W.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,W.jsx)(`div`,{className:`w-full`,children:(0,W.jsxs)(U.Root,{name:`state`,required:!0,children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})}),(0,W.jsx)(k,{type:`submit`,children:`Submit`}),e&&(0,W.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Y(e),n=e.querySelector(`form`);await G(n.checkValidity()).toBe(!1);let r=await Z(t.getByRole(`combobox`,{name:`State`}));await q.click(Y(r).getByRole(`option`,{name:`Georgia`})),await G(n.checkValidity()).toBe(!0),await q.click(t.getByRole(`button`,{name:`Submit`})),await G(await t.findByRole(`status`)).toHaveTextContent(`Submitted: GA`)}},Cn={render:()=>{let{control:e,handleSubmit:t}=Le({defaultValues:{state:``}}),[n,r]=(0,fn.useState)(null);return(0,W.jsxs)(`form`,{noValidate:!0,className:`flex w-full flex-col items-start gap-6`,onSubmit:t(e=>r(e.state)),children:[(0,W.jsx)(ze,{name:`state`,control:e,rules:{required:`Choose a state`},render:({field:e,fieldState:t})=>(0,W.jsxs)(j.Root,{invalid:t.invalid,required:!0,className:`w-full`,children:[(0,W.jsx)(j.Label,{children:`State`}),(0,W.jsxs)(U.Root,{value:e.value,onValueChange:e.onChange,children:[(0,W.jsx)(U.Trigger,{ref:e.ref,onBlur:e.onBlur,placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]}),(0,W.jsx)(j.Error,{errors:[t.error]})]})}),(0,W.jsx)(k,{type:`submit`,children:`Submit`}),n&&(0,W.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`combobox`,{name:/State/});await q.click(t.getByRole(`button`,{name:`Submit`})),await J(()=>G(n).toHaveFocus()),await J(()=>G(n).toHaveAccessibleDescription(`Choose a state`));let r=await Z(n);await q.click(Y(r).getByRole(`option`,{name:`Arizona`})),await q.click(t.getByRole(`button`,{name:`Submit`})),await G(await t.findByRole(`status`)).toHaveTextContent(`Submitted: AZ`)}},wn={render:()=>(0,W.jsx)(`div`,{className:`w-60`,children:(0,W.jsxs)(U.Root,{defaultValue:`ho3`,children:[(0,W.jsx)(U.Trigger,{"aria-label":`Policy form`}),(0,W.jsx)(U.Content,{children:[{value:`ho3`,label:`Homeowners HO-3, special form, including dwelling and contents`},{value:`ho6`,label:`Condo unit owners HO-6`}].map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})}),play:async({canvasElement:e})=>{let t=Y(e).getByRole(`combobox`,{name:`Policy form`}),n=t.querySelector(`[data-slot=select-value]`);await G(t.getBoundingClientRect().height).toBe(40),await J(()=>G(n.scrollWidth).toBeGreaterThan(n.clientWidth))}},Tn=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`).map(e=>({value:e,label:e})),En={args:{defaultValue:`Ohio`},parameters:{docs:{story:{height:`400px`}}},render:e=>(0,W.jsxs)(U.Root,{...e,children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:Tn.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=Y(e).getByRole(`combobox`,{name:`State`}),n=await Z(t),r=Y(n).getByRole(`option`,{name:`Ohio`}),i=n.querySelector(`[data-slot=select-list]`),a=t.getBoundingClientRect(),o=n.getBoundingClientRect();await G(Math.round(o.width)).toBe(Math.round(a.width)),await G(Math.round(o.left)).toBe(Math.round(a.left)),await G(Math.round(o.top-a.bottom)).toBe(8),await G(i.scrollHeight).toBeGreaterThan(i.clientHeight),await G(r).toHaveAttribute(`aria-selected`,`true`),await J(()=>{G(n.querySelector(`[data-slot=select-scroll-up]`)).not.toBeNull(),G(n.querySelector(`[data-slot=select-scroll-down]`)).not.toBeNull()}),await J(()=>{let e=r.getBoundingClientRect(),t=i.getBoundingClientRect();G(e.top).toBeGreaterThanOrEqual(t.top),G(e.bottom).toBeLessThanOrEqual(t.bottom)}),await gn()}},Dn={parameters:{docs:{story:{height:`360px`}}},render:()=>(0,W.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-6`,children:[(0,W.jsxs)(U.Root,{defaultValue:`FL`,children:[(0,W.jsx)(U.Trigger,{"aria-label":`Region`}),(0,W.jsx)(U.Content,{children:mn.map((e,t)=>(0,W.jsxs)(fn.Fragment,{children:[t>0&&(0,W.jsx)(U.Separator,{}),(0,W.jsxs)(U.Group,{children:[(0,W.jsx)(U.GroupLabel,{children:e.label}),e.options.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))]})]},e.label))})]}),(0,W.jsxs)(U.Root,{defaultValue:`CA`,children:[(0,W.jsx)(U.Trigger,{"aria-label":`Recent state`}),(0,W.jsx)(U.Content,{children:(0,W.jsxs)(U.Group,{children:[(0,W.jsx)(U.GroupLabel,{children:`Recently used`}),X.slice(0,3).map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))]})})]})]}),play:async({canvasElement:e})=>{let t=await Z(Y(e).getByRole(`combobox`,{name:`Region`}));await G(Y(t).getAllByRole(`group`)).toHaveLength(3),await G(Y(Y(t).getByRole(`group`,{name:`North`})).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-selected`,`true`),await gn()}},On={render:()=>(0,W.jsxs)(U.Root,{defaultValue:`CA`,children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,trailing:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=Y(e).getByRole(`combobox`,{name:`State`}),n=await Z(t);await G(Y(n).getByRole(`option`,{name:/Texas/})).toHaveTextContent(`TX`),await q.click(Y(n).getByRole(`option`,{name:/Texas/})),await J(()=>G(t).toHaveTextContent(/^Texas$/))}},kn={parameters:{docs:{story:{height:`360px`}}},render:()=>(0,W.jsx)(`div`,{className:`pt-24`,children:(0,W.jsxs)(U.Root,{defaultValue:`FL`,children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`}),(0,W.jsx)(U.Content,{position:`item-aligned`,children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})}),play:async({canvasElement:e})=>{let t=Y(e).getByRole(`combobox`,{name:`State`}),n=await Z(t),r=t.getBoundingClientRect();await J(()=>{let e=Y(n).getByRole(`option`,{name:`Florida`}).getBoundingClientRect();G(e.top).toBeLessThan(r.bottom),G(e.bottom).toBeGreaterThan(r.top)}),await gn()}},Q={render:()=>(0,W.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-6`,children:[[[`Placeholder`,{}],[`Filled`,{defaultValue:`TX`}],[`Disabled`,{defaultValue:`TX`,disabled:!0}]].map(([e,t])=>(0,W.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,W.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,W.jsxs)(U.Root,{...t,children:[(0,W.jsx)(U.Trigger,{"aria-label":e,placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})]},e)),(0,W.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,W.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:`Invalid`}),(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{"aria-label":`Invalid`,"aria-invalid":!0,placeholder:`Select a state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})]})]})},An={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:`CA`,onValueChange:pn()},play:async({args:e,canvasElement:t})=>{let n=Y(t).getByRole(`combobox`,{name:`State`}),r=`rgb(45, 48, 57)`;await q.tab(),await G(n).toHaveFocus(),await J(()=>G(n).toHaveStyle({borderColor:r})),await q.keyboard(`{ArrowDown}`);let i=await K.findByRole(`listbox`);await J(()=>G(Y(i).getByRole(`option`,{name:`California`})).toHaveFocus()),await G(n).toHaveStyle({borderColor:r}),await q.keyboard(`{ArrowDown}{Enter}`),await J(()=>G(K.queryByRole(`listbox`)).not.toBeInTheDocument()),await G(n).toHaveTextContent(`Florida`),await G(e.onValueChange).toHaveBeenLastCalledWith(`FL`),await G(n).toHaveFocus(),await q.keyboard(`{Enter}`),await K.findByRole(`listbox`),await q.keyboard(`{Escape}`),await J(()=>G(K.queryByRole(`listbox`)).not.toBeInTheDocument()),await G(n).toHaveTextContent(`Florida`),await G(n).toHaveFocus()}},jn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,fn.useState)(null);return(0,W.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,W.jsx)(`div`,{className:`w-full`,children:(0,W.jsxs)(U.Root,{name:`state`,defaultValue:`CA`,children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})}),(0,W.jsxs)(`div`,{className:`flex gap-3`,children:[(0,W.jsx)(k,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,W.jsx)(k,{type:`submit`,children:`Submit`})]}),e&&(0,W.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`combobox`,{name:`State`}),r=await Z(n);await q.click(Y(r).getByRole(`option`,{name:`Georgia`})),await G(n).toHaveTextContent(`Georgia`),await q.click(t.getByRole(`button`,{name:`Reset`})),await J(()=>G(n).toHaveTextContent(`California`)),await q.click(t.getByRole(`button`,{name:`Submit`})),await G(await t.findByRole(`status`)).toHaveTextContent(`Submitted: CA`)}},$={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,W.jsxs)(Pe.Root,{children:[(0,W.jsx)(Pe.Trigger,{asChild:!0,children:(0,W.jsx)(k,{variant:`secondary`,children:`Edit address`})}),(0,W.jsxs)(Pe.Content,{children:[(0,W.jsx)(Pe.Title,{children:`Edit address`}),(0,W.jsx)(Pe.Body,{children:(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})})]})]}),play:async({canvasElement:e})=>{let t=Y(document.body);await q.click(Y(e).getByRole(`button`,{name:`Edit address`}));let n=await t.findByRole(`dialog`,{name:`Edit address`}),r=Y(n).getByRole(`combobox`,{name:`State`}),i=await Z(r);await J(()=>G(i).toContainElement(document.activeElement)),await q.keyboard(`{Escape}`),await J(()=>G(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await G(n).toHaveAttribute(`data-state`,`open`),await q.click(Y(await Z(r)).getByRole(`option`,{name:`California`})),await J(()=>G(t.queryByRole(`listbox`)).not.toBeInTheDocument()),r.focus(),await q.keyboard(`{ArrowDown}`);let a=await t.findByRole(`listbox`);await J(()=>G(Y(a).getByRole(`option`,{name:`California`})).toHaveFocus()),await q.keyboard(`{ArrowDown}`),await G(Y(a).getByRole(`option`,{name:`Florida`})).toHaveFocus(),await q.keyboard(`{Escape}`),await J(()=>G(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await G(n).toHaveAttribute(`data-state`,`open`),await q.keyboard(`{Escape}`),await J(()=>G(n).toHaveAttribute(`data-state`,`closed`))}},Mn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,W.jsxs)(Ie.Root,{children:[(0,W.jsx)(Ie.Trigger,{asChild:!0,children:(0,W.jsx)(k,{variant:`secondary`,children:`Filter`})}),(0,W.jsx)(Ie.Content,{className:`w-72`,children:(0,W.jsxs)(U.Root,{children:[(0,W.jsx)(U.Trigger,{"aria-label":`State`,placeholder:`Any state`}),(0,W.jsx)(U.Content,{children:X.map(({value:e,label:t})=>(0,W.jsx)(U.Item,{value:e,children:t},e))})]})})]}),play:async({canvasElement:e})=>{let t=Y(document.body),n=Y(e).getByRole(`button`,{name:`Filter`});await q.click(n);let r=await t.findByRole(`combobox`,{name:`State`}),i=await Z(r);await J(()=>G(i).toContainElement(document.activeElement)),await q.keyboard(`{Escape}`),await J(()=>G(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await G(r.closest(`[data-slot=popover-content]`)).toHaveAttribute(`data-state`,`open`),await q.keyboard(`{Escape}`),await J(()=>G(t.queryByRole(`combobox`,{name:`State`})).not.toBeInTheDocument())}},Nn=[`Default`,`InsideField`,`InsideFieldWithoutLabel`,`DisabledItem`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`ManyItems`,`Sections`,`TrailingText`,`OpensOnPickedOption`,`AllStates`,`Keyboard`,`FormReset`,`InsideModal`,`InsidePopover`],_n.parameters={..._n.parameters,docs:{..._n.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', {
      name: 'State'
    });
    await expect(trigger).toHaveTextContent('Select a state');
    const list = await open(trigger);
    const viewport = list.querySelector<HTMLElement>('[data-slot=select-list]')!;
    await expect(list).toHaveAccessibleName('Options');
    await expect(viewport.scrollHeight).toBe(viewport.clientHeight);
    await userEvent.click(within(list).getByRole('option', {
      name: 'Florida'
    }));
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('FL');
  }
}`,..._n.parameters?.docs?.source},description:{story:`@summary Pick an option from the list`,..._n.parameters?.docs?.description}}},vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full">
            <Field.Root invalid required>
                <Field.Label>State</Field.Label>
                <Select.Root>
                    <Select.Trigger placeholder="Select a state" />
                    <Select.Content>
                        {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
                <Field.Description>Where the risk is located.</Field.Description>
                <Field.Error errors={[{
        message: 'Choose a state'
      }]} />
            </Field.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: /State/
    });
    await expect(trigger).toHaveAttribute('aria-invalid', 'true');
    await expect(trigger).toHaveAccessibleDescription(/located.*Choose a state|Choose a state.*located/);
    await expect(trigger).toHaveStyle({
      borderColor: 'rgb(217, 38, 38)'
    });
    const list = await open(trigger);
    await expect(list).toHaveAccessibleName(/State/);
    await close();
  }
}`,...vn.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, the label, description, error, `invalid` and\n`required` reach the trigger with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...vn.parameters?.docs?.description}}},yn.parameters={...yn.parameters,docs:{...yn.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full">
            <Field.Root>
                <Select.Root>
                    <Select.Trigger aria-label="State" placeholder="Select a state" />
                    <Select.Content>
                        {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </Field.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const list = await open(within(canvasElement).getByRole('combobox', {
      name: 'State'
    }));
    await expect(list).toHaveAccessibleName('Options');
    await close();
  }
}`,...yn.parameters?.docs?.source},description:{story:"A `Field.Root` without a `Field.Label` still gives the list a name.\n\n@summary Inside a Field with no label",...yn.parameters?.docs?.description}}},bn.parameters={...bn.parameters,docs:{...bn.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: fn()
  },
  render: args => <Select.Root {...args}>
            <Select.Trigger aria-label="State" placeholder="Select a state" />
            <Select.Content>
                {STATES.map(({
        value,
        label
      }) => <Select.Item key={value} value={value} disabled={value === 'FL'}>
                        {label}
                    </Select.Item>)}
            </Select.Content>
        </Select.Root>,
  play: async ({
    args,
    canvasElement
  }) => {
    const list = await open(within(canvasElement).getByRole('combobox', {
      name: 'State'
    }));
    await expect(within(list).getByRole('option', {
      name: 'Florida'
    })).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(within(list).getByRole('option', {
      name: 'Florida'
    }));
    await expect(args.onValueChange).not.toHaveBeenCalled();
    within(list).getByRole('option', {
      name: 'California'
    }).focus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(list).getByRole('option', {
      name: 'Georgia'
    })).toHaveFocus();
    await close();
  }
}`,...bn.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest selectable. It is announced as
disabled, a press does not pick it, and the arrow keys skip it.

@summary One option disabled`,...bn.parameters?.docs?.description}}},xn.parameters={...xn.parameters,docs:{...xn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState('CA');
    return <div className="flex w-full flex-col items-start gap-6">
                <div className="flex gap-3">
                    <Button variant="secondary" size="sm" onClick={() => setState('')}>
                        Clear
                    </Button>
                    <Button variant="secondary" size="sm" onClick={() => setState('NY')}>
                        Choose New York
                    </Button>
                </div>
                <div className="w-full">
                    <Select.Root value={state} onValueChange={setState}>
                        <Select.Trigger aria-label="State" placeholder="Select a state" />
                        <Select.Content>
                            {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </div>
                <output className="text-sm">Selected: {state || 'none'}</output>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', {
      name: 'State'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Choose New York'
    }));
    await expect(trigger).toHaveTextContent('New York');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear'
    }));
    await expect(trigger).toHaveTextContent('Select a state');
    await expect(canvas.getByRole('status')).toHaveTextContent('Selected: none');
  }
}`,...xn.parameters?.docs?.source},description:{story:`@summary Controlled select whose value is set from outside`,...xn.parameters?.docs?.description}}},Sn.parameters={...Sn.parameters,docs:{...Sn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex w-full flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('state')));
    }}>
                <div className="w-full">
                    <Select.Root name="state" required>
                        <Select.Trigger aria-label="State" placeholder="Select a state" />
                        <Select.Content>
                            {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </div>
                <Button type="submit">Submit</Button>
                {submitted && <output className="text-sm">Submitted: {submitted}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const form = canvasElement.querySelector('form')!;
    await expect(form.checkValidity()).toBe(false);
    const list = await open(canvas.getByRole('combobox', {
      name: 'State'
    }));
    await userEvent.click(within(list).getByRole('option', {
      name: 'Georgia'
    }));
    await expect(form.checkValidity()).toBe(true);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: GA');
  }
}`,...Sn.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value`, and `required` blocks the\nsubmission until something is picked.\n\n@summary Native form submission",...Sn.parameters?.docs?.description}}},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control,
      handleSubmit
    } = useForm<{
      state: string;
    }>({
      defaultValues: {
        state: ''
      }
    });
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form noValidate className="flex w-full flex-col items-start gap-6" onSubmit={handleSubmit(data => setSubmitted(data.state))}>
                <Controller name="state" control={control} rules={{
        required: 'Choose a state'
      }} render={({
        field,
        fieldState
      }) => <Field.Root invalid={fieldState.invalid} required className="w-full">
                            <Field.Label>State</Field.Label>
                            <Select.Root value={field.value} onValueChange={field.onChange}>
                                <Select.Trigger ref={field.ref} onBlur={field.onBlur} placeholder="Select a state" />
                                <Select.Content>
                                    {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                            {label}
                                        </Select.Item>)}
                                </Select.Content>
                            </Select.Root>
                            <Field.Error errors={[fieldState.error]} />
                        </Field.Root>} />
                <Button type="submit">Submit</Button>
                {submitted && <output className="text-sm">Submitted: {submitted}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', {
      name: /State/
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await waitFor(() => expect(trigger).toHaveFocus());
    await waitFor(() => expect(trigger).toHaveAccessibleDescription('Choose a state'));
    const list = await open(trigger);
    await userEvent.click(within(list).getByRole('option', {
      name: 'Arizona'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: AZ');
  }
}`,...Cn.parameters?.docs?.source},description:{story:"With react-hook-form, wire the select through `Controller` and put\n`field.ref` on the trigger, so a failed submit focuses it.\n\n@summary React Hook Form through Controller",...Cn.parameters?.docs?.description}}},wn.parameters={...wn.parameters,docs:{...wn.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      value: 'ho3',
      label: 'Homeowners HO-3, special form, including dwelling and contents'
    }, {
      value: 'ho6',
      label: 'Condo unit owners HO-6'
    }];
    return <div className="w-60">
                <Select.Root defaultValue="ho3">
                    <Select.Trigger aria-label="Policy form" />
                    <Select.Content>
                        {items.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'Policy form'
    });
    const value = trigger.querySelector('[data-slot=select-value]')!;
    await expect(trigger.getBoundingClientRect().height).toBe(40);
    await waitFor(() => expect(value.scrollWidth).toBeGreaterThan(value.clientWidth));
  }
}`,...wn.parameters?.docs?.source},description:{story:`A long option label is cut with an ellipsis in the trigger and in its row,
and the chevron keeps its place.

@summary Long labels truncate`,...wn.parameters?.docs?.description}}},En.parameters={...En.parameters,docs:{...En.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Ohio'
  },
  parameters: {
    docs: {
      story: {
        height: '400px'
      }
    }
  },
  render: args => <Select.Root {...args}>
            <Select.Trigger aria-label="State" placeholder="Select a state" />
            <Select.Content>
                {US_STATES.map(({
        value,
        label
      }) => <Select.Item key={value} value={value}>
                        {label}
                    </Select.Item>)}
            </Select.Content>
        </Select.Root>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    const picked = within(list).getByRole('option', {
      name: 'Ohio'
    });
    const viewport = list.querySelector<HTMLElement>('[data-slot=select-list]')!;
    const box = trigger.getBoundingClientRect();
    const panel = list.getBoundingClientRect();
    await expect(Math.round(panel.width)).toBe(Math.round(box.width));
    await expect(Math.round(panel.left)).toBe(Math.round(box.left));
    await expect(Math.round(panel.top - box.bottom)).toBe(8);
    await expect(viewport.scrollHeight).toBeGreaterThan(viewport.clientHeight);
    await expect(picked).toHaveAttribute('aria-selected', 'true');
    await waitFor(() => {
      expect(list.querySelector('[data-slot=select-scroll-up]')).not.toBeNull();
      expect(list.querySelector('[data-slot=select-scroll-down]')).not.toBeNull();
    });
    await waitFor(() => {
      const row = picked.getBoundingClientRect();
      const view = viewport.getBoundingClientRect();
      expect(row.top).toBeGreaterThanOrEqual(view.top);
      expect(row.bottom).toBeLessThanOrEqual(view.bottom);
    });
    await close();
  }
}`,...En.parameters?.docs?.source},description:{story:`With more options than fit, the list stops at six rows and scrolls, with an
arrow at each end while there is more to see, and it opens with the picked
option in view. It matches the trigger's width and opens 8px below it. Past
a few dozen options, or when
people know what they are looking for, a Combobox lets them type instead.

@summary Long list that scrolls`,...En.parameters?.docs?.description}}},Dn.parameters={...Dn.parameters,docs:{...Dn.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        height: '360px'
      }
    }
  },
  render: () => <div className="grid w-full grid-cols-2 gap-6">
            <Select.Root defaultValue="FL">
                <Select.Trigger aria-label="Region" />
                <Select.Content>
                    {REGIONS.map((region, index) => <Fragment key={region.label}>
                            {index > 0 && <Select.Separator />}
                            <Select.Group>
                                <Select.GroupLabel>{region.label}</Select.GroupLabel>
                                {region.options.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                        {label}
                                    </Select.Item>)}
                            </Select.Group>
                        </Fragment>)}
                </Select.Content>
            </Select.Root>
            <Select.Root defaultValue="CA">
                <Select.Trigger aria-label="Recent state" />
                <Select.Content>
                    <Select.Group>
                        <Select.GroupLabel>Recently used</Select.GroupLabel>
                        {STATES.slice(0, 3).map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const list = await open(within(canvasElement).getByRole('combobox', {
      name: 'Region'
    }));
    await expect(within(list).getAllByRole('group')).toHaveLength(3);
    await expect(within(within(list).getByRole('group', {
      name: 'North'
    })).getByRole('option', {
      name: 'Florida'
    })).toHaveAttribute('aria-selected', 'true');
    await close();
  }
}`,...Dn.parameters?.docs?.source},description:{story:"Options grouped into sections: each `Group` has a `GroupLabel` as heading,\nwith a `Separator` between groups. A single group can carry a heading too.\n\n@summary Options in sections",...Dn.parameters?.docs?.description}}},On.parameters={...On.parameters,docs:{...On.parameters?.docs,source:{originalSource:`{
  render: () => <Select.Root defaultValue="CA">
            <Select.Trigger aria-label="State" />
            <Select.Content>
                {STATES.map(({
        value,
        label
      }) => <Select.Item key={value} value={value} trailing={value}>
                        {label}
                    </Select.Item>)}
            </Select.Content>
        </Select.Root>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    await expect(within(list).getByRole('option', {
      name: /Texas/
    })).toHaveTextContent('TX');
    await userEvent.click(within(list).getByRole('option', {
      name: /Texas/
    }));
    await waitFor(() => expect(trigger).toHaveTextContent(/^Texas$/));
  }
}`,...On.parameters?.docs?.source},description:{story:`\`trailing\` puts short text at the end of a row, such as a code. It stays in
the list: the trigger shows only the label.

@summary Text at the end of a row`,...On.parameters?.docs?.description}}},kn.parameters={...kn.parameters,docs:{...kn.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        height: '360px'
      }
    }
  },
  render: () => <div className="pt-24">
            <Select.Root defaultValue="FL">
                <Select.Trigger aria-label="State" />
                <Select.Content position="item-aligned">
                    {STATES.map(({
          value,
          label
        }) => <Select.Item key={value} value={value}>
                            {label}
                        </Select.Item>)}
                </Select.Content>
            </Select.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    const box = trigger.getBoundingClientRect();
    await waitFor(() => {
      const row = within(list).getByRole('option', {
        name: 'Florida'
      }).getBoundingClientRect();
      expect(row.top).toBeLessThan(box.bottom);
      expect(row.bottom).toBeGreaterThan(box.top);
    });
    await close();
  }
}`,...kn.parameters?.docs?.source},description:{story:'`position="item-aligned"` on `Content` opens the list over the trigger, with\nthe picked option on top of it, instead of below.\n\n@summary List opening on the picked option',...kn.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full grid-cols-2 gap-6">
            {([['Placeholder', {}], ['Filled', {
      defaultValue: 'TX'
    }], ['Disabled', {
      defaultValue: 'TX',
      disabled: true
    }]] as const).map(([title, props]) => <div key={title} className="flex flex-col gap-2">
                    <span className="text-xs text-text-input-placeholder">{title}</span>
                    <Select.Root {...props}>
                        <Select.Trigger aria-label={title} placeholder="Select a state" />
                        <Select.Content>
                            {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </div>)}
            <div className="flex flex-col gap-2">
                <span className="text-xs text-text-input-placeholder">Invalid</span>
                <Select.Root>
                    <Select.Trigger aria-label="Invalid" aria-invalid placeholder="Select a state" />
                    <Select.Content>
                        {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
}`,...Q.parameters?.docs?.source},description:{story:`Every state of the trigger side by side, for checking against the design.

@summary Visual comparison of the trigger states`,...Q.parameters?.docs?.description}}},An.parameters={...An.parameters,docs:{...An.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  args: {
    defaultValue: 'CA',
    onValueChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('combobox', {
      name: 'State'
    });
    const focusBorder = 'rgb(45, 48, 57)';
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    await waitFor(() => expect(trigger).toHaveStyle({
      borderColor: focusBorder
    }));
    await userEvent.keyboard('{ArrowDown}');
    const list = await screen.findByRole('listbox');
    await waitFor(() => expect(within(list).getByRole('option', {
      name: 'California'
    })).toHaveFocus());
    await expect(trigger).toHaveStyle({
      borderColor: focusBorder
    });
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('FL');
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await screen.findByRole('listbox');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger).toHaveTextContent('Florida');
    await expect(trigger).toHaveFocus();
  }
}`,...An.parameters?.docs?.source},description:{story:`Enter, Space or the arrow keys open the list; the arrows move, Enter picks
and Escape closes it, handing focus back to the trigger. The trigger keeps
its focus ring while the options hold the focus.

@summary Keyboard selection`,...An.parameters?.docs?.description}}},jn.parameters={...jn.parameters,docs:{...jn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return <form className="flex w-full flex-col items-start gap-6" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('state')));
    }}>
                <div className="w-full">
                    <Select.Root name="state" defaultValue="CA">
                        <Select.Trigger aria-label="State" />
                        <Select.Content>
                            {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </div>
                <div className="flex gap-3">
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                    <Button type="submit">Submit</Button>
                </div>
                {submitted && <output className="text-sm">Submitted: {submitted}</output>}
            </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    await userEvent.click(within(list).getByRole('option', {
      name: 'Georgia'
    }));
    await expect(trigger).toHaveTextContent('Georgia');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(trigger).toHaveTextContent('California'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Submit'
    }));
    await expect(await canvas.findByRole('status')).toHaveTextContent('Submitted: CA');
  }
}`,...jn.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled select back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...jn.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Modal.Root>
            <Modal.Trigger asChild>
                <Button variant="secondary">Edit address</Button>
            </Modal.Trigger>
            <Modal.Content>
                <Modal.Title>Edit address</Modal.Title>
                <Modal.Body>
                    <Select.Root>
                        <Select.Trigger aria-label="State" />
                        <Select.Content>
                            {STATES.map(({
              value,
              label
            }) => <Select.Item key={value} value={value}>
                                    {label}
                                </Select.Item>)}
                        </Select.Content>
                    </Select.Root>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Edit address'
    }));
    const dialog = await body.findByRole('dialog', {
      name: 'Edit address'
    });
    const trigger = within(dialog).getByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    await waitFor(() => expect(list).toContainElement(document.activeElement as HTMLElement));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.click(within(await open(trigger)).getByRole('option', {
      name: 'California'
    }));
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const options = await body.findByRole('listbox');
    await waitFor(() => expect(within(options).getByRole('option', {
      name: 'California'
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await expect(within(options).getByRole('option', {
      name: 'Florida'
    })).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(dialog).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog).toHaveAttribute('data-state', 'closed'));
  }
}`,...$.parameters?.docs?.source},description:{story:`Inside a \`Modal\`, the list sits on top of the dialog in Radix's layer stack,
so focus moves to it. Escape closes the list first and the modal on the next
press.

@summary Focus and Escape inside a Modal`,...$.parameters?.docs?.description}}},Mn.parameters={...Mn.parameters,docs:{...Mn.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!manifest'],
  render: () => <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="secondary">Filter</Button>
            </Popover.Trigger>
            <Popover.Content className="w-72">
                <Select.Root>
                    <Select.Trigger aria-label="State" placeholder="Any state" />
                    <Select.Content>
                        {STATES.map(({
            value,
            label
          }) => <Select.Item key={value} value={value}>
                                {label}
                            </Select.Item>)}
                    </Select.Content>
                </Select.Root>
            </Popover.Content>
        </Popover.Root>,
  play: async ({
    canvasElement
  }) => {
    const body = within(document.body);
    const button = within(canvasElement).getByRole('button', {
      name: 'Filter'
    });
    await userEvent.click(button);
    const trigger = await body.findByRole('combobox', {
      name: 'State'
    });
    const list = await open(trigger);
    await waitFor(() => expect(list).toContainElement(document.activeElement as HTMLElement));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).not.toBeInTheDocument());
    await expect(trigger.closest('[data-slot=popover-content]')).toHaveAttribute('data-state', 'open');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('combobox', {
      name: 'State'
    })).not.toBeInTheDocument());
  }
}`,...Mn.parameters?.docs?.source},description:{story:`Inside a \`Popover\`, Escape on the open list closes the list only; the next
one closes the popover.

@summary Escape inside a Popover`,...Mn.parameters?.docs?.description}}}})))()}Pn();export{Q as AllStates,xn as Controlled,_n as Default,bn as DisabledItem,jn as FormReset,Sn as InForm,vn as InsideField,yn as InsideFieldWithoutLabel,$ as InsideModal,Mn as InsidePopover,An as Keyboard,wn as LongLabel,En as ManyItems,kn as OpensOnPickedOption,Dn as Sections,On as TrailingText,Cn as WithReactHookForm,Nn as __namedExportsOrder,hn as default};