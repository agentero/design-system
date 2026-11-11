import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DuaohP_x.js";import{t as r}from"./react-dom-D2a7YOUV.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o,r as s,t as c}from"./dist-COTlpqSU.js";import{n as l,t as u}from"./dist-Kbp_jkti.js";import{n as d,t as f}from"./dist-CKgeh4bT.js";import{n as p,t as m}from"./dist-C8AlzbfS.js";import{n as h,t as g}from"./utils-nsk-j2e0.js";import{n as _,t as v}from"./button-DQvSZ0HF.js";import{i as y,n as b,r as x,t as S}from"./dist-B-TKZWzv.js";import{a as ee,i as te}from"./tooltip-3PHZx6JE.js";import{n as ne,t as C}from"./dist-tl2MC7y1.js";import{r as re,t as w}from"./dist-DG8aPgtu.js";import{i as T,n as E,r as ie,t as ae}from"./dist-DBtmbIBP.js";import{a as oe,i as se,n as ce,o as D,r as O,t as le}from"./dist-Ck4Xy8xm.js";import{a as ue,n as de,t as k}from"./field-BMFam3Zk.js";import{n as fe,r as pe}from"./input-BUF9tbDo.js";import{a as me,n as he,r as ge}from"./icons-CpPQxyMk.js";import{n as _e,t as ve}from"./modal-CpYFS2nG.js";import{a as ye,i as be,o as xe,r as Se}from"./combobox-escape-DVG74b6D.js";import{i as Ce,n as we,r as Te,t as Ee}from"./es2015-BrqwU5ru.js";import{n as De,t as Oe}from"./popover-DorXBAsO.js";import{n as ke,t as Ae}from"./dist-trPQEYvm.js";import{a as je,r as Me,t as Ne}from"./index.esm-BAGeq59l.js";import{n as Pe,t as Fe}from"./dist-DjLUJHRp.js";function Ie(e,[t,n]){return Math.min(n,Math.max(t,e))}function Le(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Re(...e){return t=>{let n=!1,r=e.map(e=>{let r=Le(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Le(e[t],null)}}}}function A(...e){return ze.useCallback(Re(...e),e)}var ze;function Be(){return(Be=t((()=>{ze=e(n(),1)})))()}function Ve(e){let t=j.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];Ge(r)&&typeof Qe==`function`&&(r=Qe(r._payload)),j.Children.forEach(r,e=>{if(We(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;Ge(n)&&typeof Qe==`function`&&(n=Qe(n._payload)),a=Je(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=j.cloneElement(a,void 0,s):!o&&j.Children.count(r)===1&&j.isValidElement(r)&&(a=r);let c=a?Ue(a):void 0,l=A(n,c);if(!a){if(r||r===0)throw Error(o?Ze(e):Xe(e));return r}let u=He(i,a.props??{});return a.type!==j.Fragment&&(u.ref=n?l:c),j.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function He(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function Ue(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function We(e){return j.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===qe}function Ge(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ye&&`_payload`in e&&Ke(e._payload)}function Ke(e){return typeof e==`object`&&!!e&&`then`in e}var j,qe,Je,Ye,Xe,Ze,Qe;function $e(){return($e=t((()=>{j=e(n(),1),Be(),qe=Symbol.for(`radix.slottable`),Je=(e,t)=>{if(`child`in e.props){let t=e.props.child;return j.isValidElement(t)?j.cloneElement(t,void 0,e.props.children(t.props.children)):null}return j.isValidElement(t)?t:null},Ye=Symbol.for(`react.lazy`),Xe=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Ze=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,Qe=j.use})))()}function et(e){let t=tt.useRef(e);return tt.useEffect(()=>{t.current=e}),tt.useMemo(()=>((...e)=>t.current?.(...e)),[])}var tt;function nt(){return(nt=t((()=>{tt=e(n(),1)})))()}function rt(e){let{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:a,value:s,defaultValue:c,onValueChange:u,dir:f,name:p,autoComplete:m,disabled:h,required:g,form:_,internal_do_not_use_render:v}=e,y=gt(t),[b,x]=M.useState(null),[S,ee]=M.useState(null),[te,ne]=M.useState(!1),C=d(f),[re,w]=o({prop:r,defaultProp:i??!1,onChange:a,caller:P}),[T,E]=o({prop:s,defaultProp:c,onChange:u,caller:P}),ie=M.useRef(null),ae=M.useRef(T);M.useEffect(()=>{let e=_?b?.ownerDocument.getElementById(_):b?.form;if(e instanceof HTMLFormElement){let t=()=>E(ae.current);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[_,b,E]);let oe=!b||!!_||!!b.closest(`form`),[ce,D]=M.useState(new Set),O=l(),le=Array.from(ce).map(e=>e.props.value).join(`;`),ue=M.useCallback(e=>{D(t=>new Set(t).add(e))},[]),de=M.useCallback(e=>{D(t=>{let n=new Set(t);return n.delete(e),n})},[]),k={required:g,trigger:b,onTriggerChange:x,valueNode:S,onValueNodeChange:ee,valueNodeHasChildren:te,onValueNodeHasChildrenChange:ne,contentId:O,value:T,onValueChange:E,open:re,onOpenChange:w,dir:C,triggerPointerDownPosRef:ie,disabled:h,name:p,autoComplete:m,form:_,nativeOptions:ce,nativeSelectKey:le,isFormControl:oe};return(0,N.jsx)(se,{...y,children:(0,N.jsx)(_t,{scope:t,...k,children:(0,N.jsx)(ft.Provider,{scope:t,children:(0,N.jsx)(vt,{scope:t,onNativeOptionAdd:ue,onNativeOptionRemove:de,children:it(v)?v(k):n})})})})}function it(e){return typeof e==`function`}function at(e){return e===``||e===void 0}function ot(e){let t=et(e),n=M.useRef(``),r=M.useRef(0),i=M.useCallback(e=>{let i=n.current+e;t(i),(function e(t){n.current=t,window.clearTimeout(r.current),t!==``&&(r.current=window.setTimeout(()=>e(``),1e3))})(i)},[t]),a=M.useCallback(()=>{n.current=``,window.clearTimeout(r.current)},[]);return M.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,i,a]}function st(e,t,n){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,i=n?e.indexOf(n):-1,a=ct(e,Math.max(i,0));r.length===1&&(a=a.filter(e=>e!==n));let o=a.find(e=>e.textValue.toLowerCase().startsWith(r.toLowerCase()));return o===n?void 0:o}function ct(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var M,lt,N,ut,dt,P,ft,pt,mt,F,ht,gt,_t,I,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,L,Mt,Nt,R,Pt,z,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n;function vn(){return(vn=t((()=>{M=e(n(),1),lt=e(r(),1),y(),Pe(),Be(),ne(),f(),T(),Se(),xe(),u(),D(),E(),b(),re(),$e(),nt(),c(),s(),Ae(),ee(),we(),Ce(),N=i(),ut=[` `,`Enter`,`ArrowUp`,`ArrowDown`],dt=[` `,`Enter`],P=`Select`,[ft,pt,mt]=Fe(P),[F,ht]=C(P,[mt,oe]),gt=oe(),[_t,I]=F(P),[vt,yt]=F(P),bt=`SelectProvider`,rt.displayName=bt,xt=e=>{let{__scopeSelect:t,children:n,...r}=e;return(0,N.jsx)(rt,{__scopeSelect:t,...r,internal_do_not_use_render:({isFormControl:e})=>(0,N.jsxs)(N.Fragment,{children:[n,e?(0,N.jsx)(_n,{__scopeSelect:t}):null]})})},xt.displayName=P,St=`SelectTrigger`,Ct=M.forwardRef((e,t)=>{let{__scopeSelect:n,disabled:r=!1,...i}=e,a=gt(n),o=I(St,n),s=o.disabled||r,c=A(t,o.onTriggerChange),l=pt(n),u=M.useRef(`touch`),[d,f,p]=ot(e=>{let t=l().filter(e=>!e.disabled),n=st(t,e,t.find(e=>e.value===o.value));n!==void 0&&o.onValueChange(n.value)}),m=e=>{s||(o.onOpenChange(!0),p()),e&&(o.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,N.jsx)(le,{asChild:!0,...a,children:(0,N.jsx)(w.button,{type:`button`,role:`combobox`,"aria-controls":o.open?o.contentId:void 0,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":`none`,dir:o.dir,"data-state":o.open?`open`:`closed`,disabled:s,"data-disabled":s?``:void 0,"data-placeholder":at(o.value)?``:void 0,...i,ref:c,onClick:x(i.onClick,e=>{e.currentTarget.focus(),u.current!==`mouse`&&m(e)}),onPointerDown:x(i.onPointerDown,e=>{u.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&e.ctrlKey===!1&&e.pointerType===`mouse`&&(m(e),e.preventDefault())}),onKeyDown:x(i.onKeyDown,e=>{let t=d.current!==``;!(e.ctrlKey||e.altKey||e.metaKey)&&e.key.length===1&&f(e.key),!(t&&e.key===` `)&&ut.includes(e.key)&&(m(),e.preventDefault())})})})}),Ct.displayName=St,wt=`SelectValue`,Tt=M.forwardRef((e,t)=>{let{__scopeSelect:n,className:r,style:i,children:o,placeholder:s=``,...c}=e,l=I(wt,n),{onValueNodeHasChildrenChange:u}=l,d=o!==void 0,f=A(t,l.onValueNodeChange);a(()=>{u(d)},[u,d]);let p=at(l.value);return(0,N.jsx)(w.span,{...c,asChild:!p&&c.asChild,ref:f,style:{pointerEvents:`none`},children:(0,N.jsx)(M.Fragment,{children:p?s:o},p?`placeholder`:`value`)})}),Tt.displayName=wt,Et=`SelectIcon`,Dt=M.forwardRef((e,t)=>{let{__scopeSelect:n,children:r,...i}=e;return(0,N.jsx)(w.span,{"aria-hidden":!0,...i,ref:t,children:r||`▼`})}),Dt.displayName=Et,Ot=`SelectPortal`,[kt,At]=F(Ot,{forceMount:void 0}),jt=e=>{let{__scopeSelect:t,forceMount:n,...r}=e;return(0,N.jsx)(kt,{scope:e.__scopeSelect,forceMount:n,children:(0,N.jsx)(ae,{asChild:!0,...r})})},jt.displayName=Ot,L=`SelectContent`,Mt=M.forwardRef((e,t)=>{let n=At(L,e.__scopeSelect),{forceMount:r=n.forceMount,...i}=e,o=I(L,e.__scopeSelect),[s,c]=M.useState();return a(()=>{c(new DocumentFragment)},[]),(0,N.jsx)(S,{present:r||o.open,children:({present:e})=>e?(0,N.jsx)(Lt,{...i,ref:t}):(0,N.jsx)(Nt,{...i,fragment:s})})}),Mt.displayName=L,Nt=M.forwardRef((e,t)=>{let{__scopeSelect:n,children:r,fragment:i}=e;return i?lt.createPortal((0,N.jsx)(Pt,{scope:n,children:(0,N.jsx)(ft.Slot,{scope:n,children:(0,N.jsx)(`div`,{ref:t,children:r})})}),i):null}),Nt.displayName=`SelectContentFragment`,R=10,[Pt,z]=F(L),Ft=`SelectContentImpl`,It=Ve(`SelectContent.RemoveScroll`),Lt=M.forwardRef((e,t)=>{let{__scopeSelect:n}=e,{position:r=`item-aligned`,onCloseAutoFocus:i,onEscapeKeyDown:a,onPointerDownOutside:o,side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g,..._}=e,v=I(L,n),[y,b]=M.useState(null),[S,ee]=M.useState(null),te=A(t,b),[ne,C]=M.useState(null),[re,w]=M.useState(null),T=pt(n),[E,ae]=M.useState(!1),oe=M.useRef(!1);M.useEffect(()=>{if(y)return Ee(y)},[y]),be();let se=M.useCallback(e=>{let[t,...n]=T().map(e=>e.ref.current),[r]=n.slice(-1),i=document.activeElement;for(let n of e)if(n===i||(n?.scrollIntoView({block:`nearest`}),n===t&&S&&(S.scrollTop=0),n===r&&S&&(S.scrollTop=S.scrollHeight),n?.focus(),document.activeElement!==i))return},[T,S]),ce=M.useCallback(()=>se([ne,y]),[se,ne,y]);M.useEffect(()=>{E&&ce()},[E,ce]);let{onOpenChange:D,triggerPointerDownPosRef:O}=v;M.useEffect(()=>{if(y){let e={x:0,y:0},t=t=>{e={x:Math.abs(Math.round(t.pageX)-(O.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(O.current?.y??0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():n.composedPath().includes(y)||D(!1),document.removeEventListener(`pointermove`,t),O.current=null};return O.current!==null&&(document.addEventListener(`pointermove`,t),document.addEventListener(`pointerup`,n,{capture:!0,once:!0})),()=>{document.removeEventListener(`pointermove`,t),document.removeEventListener(`pointerup`,n,{capture:!0})}}},[y,D,O]),M.useEffect(()=>{let e=()=>D(!1);return window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[D]);let[le,ue]=ot(e=>{let t=T().filter(e=>!e.disabled),n=st(t,e,t.find(e=>e.ref.current===document.activeElement));n&&setTimeout(()=>n.ref.current?.focus())}),de=M.useCallback((e,t,n)=>{let r=!oe.current&&!n;(v.value!==void 0&&v.value===t||r)&&(C(e),r&&(oe.current=!0))},[v.value]),k=M.useCallback(()=>y?.focus(),[y]),fe=M.useCallback((e,t,n)=>{let r=!oe.current&&!n;(v.value!==void 0&&v.value===t||r)&&w(e)},[v.value]),pe=r===`popper`?Vt:zt,me=pe===Vt?{side:s,sideOffset:c,align:l,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:p,sticky:m,hideWhenDetached:h,avoidCollisions:g}:{};return(0,N.jsx)(Pt,{scope:n,content:y,viewport:S,onViewportChange:ee,itemRefCallback:de,selectedItem:ne,onItemLeave:k,itemTextRefCallback:fe,focusSelectedItem:ce,selectedItemText:re,position:r,isPositioned:E,searchRef:le,children:(0,N.jsx)(Te,{as:It,allowPinchZoom:!0,children:(0,N.jsx)(ye,{asChild:!0,trapped:v.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:x(i,e=>{v.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,N.jsx)(ie,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:o,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>v.onOpenChange(!1),children:(0,N.jsx)(pe,{role:`listbox`,id:v.contentId,"data-state":v.open?`open`:`closed`,dir:v.dir,onContextMenu:e=>e.preventDefault(),..._,...me,onPlaced:()=>ae(!0),ref:te,style:{display:`flex`,flexDirection:`column`,outline:`none`,..._.style},onKeyDown:x(_.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if(e.key===`Tab`&&e.preventDefault(),!t&&e.key.length===1&&ue(e.key),[`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=T().filter(e=>!e.disabled).map(e=>e.ref.current);if([`ArrowUp`,`End`].includes(e.key)&&(t=t.slice().reverse()),[`ArrowUp`,`ArrowDown`].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>se(t)),e.preventDefault()}})})})})})})}),Lt.displayName=Ft,Rt=`SelectItemAlignedPosition`,zt=M.forwardRef((e,t)=>{let{__scopeSelect:n,onPlaced:r,...i}=e,o=I(L,n),s=z(L,n),[c,l]=M.useState(null),[u,d]=M.useState(null),f=A(t,d),p=pt(n),m=M.useRef(!1),h=M.useRef(!0),{viewport:g,selectedItem:_,selectedItemText:v,focusSelectedItem:y}=s,b=M.useCallback(()=>{if(o.trigger&&o.valueNode&&c&&u&&g&&_&&v){let e=o.trigger.getBoundingClientRect(),t=u.getBoundingClientRect(),n=o.valueNode.getBoundingClientRect(),i=v.getBoundingClientRect();if(o.dir!==`rtl`){let r=i.left-t.left,a=n.left-r,o=e.left-a,s=e.width+o,l=Math.max(s,t.width),u=window.innerWidth-R,d=Ie(a,[R,Math.max(R,u-l)]);c.style.minWidth=s+`px`,c.style.left=d+`px`}else{let r=t.right-i.right,a=window.innerWidth-n.right-r,o=window.innerWidth-e.right-a,s=e.width+o,l=Math.max(s,t.width),u=window.innerWidth-R,d=Ie(a,[R,Math.max(R,u-l)]);c.style.minWidth=s+`px`,c.style.right=d+`px`}let a=p(),s=window.innerHeight-R*2,l=g.scrollHeight,d=window.getComputedStyle(u),f=parseInt(d.borderTopWidth,10),h=parseInt(d.paddingTop,10),y=parseInt(d.borderBottomWidth,10),b=parseInt(d.paddingBottom,10),x=f+h+l+b+y,S=Math.min(_.offsetHeight*5,x),ee=window.getComputedStyle(g),te=parseInt(ee.paddingTop,10),ne=parseInt(ee.paddingBottom,10),C=e.top+e.height/2-R,re=s-C,w=_.offsetHeight/2,T=_.offsetTop+w,E=f+h+T,ie=x-E;if(E<=C){let e=a.length>0&&_===a[a.length-1].ref.current;c.style.bottom=`0px`;let t=u.clientHeight-g.offsetTop-g.offsetHeight,n=E+Math.max(re,w+(e?ne:0)+t+y);c.style.height=n+`px`}else{let e=a.length>0&&_===a[0].ref.current;c.style.top=`0px`;let t=Math.max(C,f+g.offsetTop+(e?te:0)+w)+ie;c.style.height=t+`px`,g.scrollTop=E-C+g.offsetTop}c.style.margin=`${R}px 0`,c.style.minHeight=S+`px`,c.style.maxHeight=s+`px`,r?.(),requestAnimationFrame(()=>m.current=!0)}},[p,o.trigger,o.valueNode,c,u,g,_,v,o.dir,r]);a(()=>b(),[b]);let[x,S]=M.useState();a(()=>{u&&S(window.getComputedStyle(u).zIndex)},[u]);let ee=M.useCallback(e=>{e&&h.current===!0&&(b(),y?.(),h.current=!1)},[b,y]);return(0,N.jsx)(Ht,{scope:n,contentWrapper:c,shouldExpandOnScrollRef:m,onScrollButtonChange:ee,children:(0,N.jsx)(`div`,{ref:l,style:{display:`flex`,flexDirection:`column`,position:`fixed`,zIndex:x},children:(0,N.jsx)(w.div,{...i,ref:f,style:{boxSizing:`border-box`,maxHeight:`100%`,...i.style}})})})}),zt.displayName=Rt,Bt=`SelectPopperPosition`,Vt=M.forwardRef((e,t)=>{let{__scopeSelect:n,align:r=`start`,collisionPadding:i=R,...a}=e,o=gt(n);return(0,N.jsx)(O,{...o,...a,ref:t,align:r,collisionPadding:i,style:{boxSizing:`border-box`,...a.style,"--radix-select-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-select-content-available-width":`var(--radix-popper-available-width)`,"--radix-select-content-available-height":`var(--radix-popper-available-height)`,"--radix-select-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-select-trigger-height":`var(--radix-popper-anchor-height)`}})}),Vt.displayName=Bt,[Ht,Ut]=F(L,{}),Wt=`SelectViewport`,Gt=M.forwardRef((e,t)=>{let{__scopeSelect:n,nonce:r,...i}=e,a=z(Wt,n),o=Ut(Wt,n),s=A(t,a.onViewportChange),c=M.useRef(0);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`},nonce:r}),(0,N.jsx)(ft.Slot,{scope:n,children:(0,N.jsx)(w.div,{"data-radix-select-viewport":``,role:`presentation`,...i,ref:s,style:{position:`relative`,flex:1,overflow:`hidden auto`,...i.style},onScroll:x(i.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=o;if(r?.current&&n){let e=Math.abs(c.current-t.scrollTop);if(e>0){let r=window.innerHeight-R*2,i=parseFloat(n.style.minHeight),a=parseFloat(n.style.height),o=Math.max(i,a);if(o<r){let i=o+e,a=Math.min(r,i),s=i-a;n.style.height=a+`px`,n.style.bottom===`0px`&&(t.scrollTop=s>0?s:0,n.style.justifyContent=`flex-end`)}}}c.current=t.scrollTop})})})]})}),Gt.displayName=Wt,Kt=`SelectGroup`,[qt,Jt]=F(Kt),Yt=M.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=l();return(0,N.jsx)(qt,{scope:n,id:i,children:(0,N.jsx)(w.div,{role:`group`,"aria-labelledby":i,...r,ref:t})})}),Yt.displayName=Kt,Xt=`SelectLabel`,Zt=M.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=Jt(Xt,n);return(0,N.jsx)(w.div,{id:i.id,...r,ref:t})}),Zt.displayName=Xt,Qt=`SelectItem`,[$t,en]=F(Qt),tn=M.forwardRef((e,t)=>{let{__scopeSelect:n,value:r,disabled:i=!1,textValue:a,...o}=e,s=I(Qt,n),c=z(Qt,n),u=s.value===r,[d,f]=M.useState(a??``),[p,m]=M.useState(!1),h=A(t,et(e=>c.itemRefCallback?.(e,r,i))),g=l(),_=M.useRef(`touch`),v=()=>{i||(s.onValueChange(r),s.onOpenChange(!1))};return(0,N.jsx)($t,{scope:n,value:r,disabled:i,textId:g,isSelected:u,onItemTextChange:M.useCallback(e=>{f(t=>t||(e?.textContent??``).trim())},[]),children:(0,N.jsx)(ft.ItemSlot,{scope:n,value:r,disabled:i,textValue:d,children:(0,N.jsx)(w.div,{role:`option`,"aria-labelledby":g,"data-highlighted":p?``:void 0,"aria-selected":u&&p,"data-state":u?`checked`:`unchecked`,"aria-disabled":i||void 0,"data-disabled":i?``:void 0,tabIndex:i?void 0:-1,...o,ref:h,onFocus:x(o.onFocus,()=>m(!0)),onBlur:x(o.onBlur,()=>m(!1)),onClick:x(o.onClick,()=>{_.current!==`mouse`&&v()}),onPointerUp:x(o.onPointerUp,()=>{_.current===`mouse`&&v()}),onPointerDown:x(o.onPointerDown,e=>{_.current=e.pointerType}),onPointerMove:x(o.onPointerMove,e=>{_.current=e.pointerType,i?c.onItemLeave?.():_.current===`mouse`&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:x(o.onPointerLeave,e=>{e.currentTarget===document.activeElement&&c.onItemLeave?.()}),onKeyDown:x(o.onKeyDown,e=>{i||e.target!==e.currentTarget||(c.searchRef?.current===``||e.key!==` `)&&(dt.includes(e.key)&&v(),e.key===` `&&e.preventDefault())})})})})}),tn.displayName=Qt,nn=`SelectItemText`,rn=M.forwardRef((e,t)=>{let{__scopeSelect:n,className:r,style:i,...o}=e,s=I(nn,n),c=z(nn,n),l=en(nn,n),u=yt(nn,n),[d,f]=M.useState(null),p=et(e=>c.itemTextRefCallback?.(e,l.value,l.disabled)),m=A(t,f,l.onItemTextChange,p),h=d?.textContent,g=M.useMemo(()=>(0,N.jsx)(`option`,{value:l.value,disabled:l.disabled,children:h},l.value),[l.disabled,l.value,h]),{onNativeOptionAdd:_,onNativeOptionRemove:v}=u;return a(()=>(_(g),()=>v(g)),[_,v,g]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(w.span,{id:l.textId,...o,ref:m}),l.isSelected&&s.valueNode&&!s.valueNodeHasChildren&&!at(s.value)?lt.createPortal(o.children,s.valueNode):null]})}),rn.displayName=nn,an=`SelectItemIndicator`,on=M.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e;return en(an,n).isSelected?(0,N.jsx)(w.span,{"aria-hidden":!0,...r,ref:t}):null}),on.displayName=an,sn=`SelectScrollUpButton`,cn=M.forwardRef((e,t)=>{let n=z(sn,e.__scopeSelect),r=Ut(sn,e.__scopeSelect),[i,o]=M.useState(!1),s=A(t,r.onScrollButtonChange);return a(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollTop>0;o(e)},t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,N.jsx)(dn,{...e,ref:s,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop-=t.offsetHeight)}}):null}),cn.displayName=sn,ln=`SelectScrollDownButton`,un=M.forwardRef((e,t)=>{let n=z(ln,e.__scopeSelect),r=Ut(ln,e.__scopeSelect),[i,o]=M.useState(!1),s=A(t,r.onScrollButtonChange);return a(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight,n=Math.ceil(t.scrollTop)<e;o(n)},t=n.viewport;return e(),t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)}},[n.viewport,n.isPositioned]),i?(0,N.jsx)(dn,{...e,ref:s,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop+=t.offsetHeight)}}):null}),un.displayName=ln,dn=M.forwardRef((e,t)=>{let{__scopeSelect:n,onAutoScroll:r,...i}=e,o=z(`SelectScrollButton`,n),s=M.useRef(null),c=pt(n),l=M.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return M.useEffect(()=>()=>l(),[l]),a(()=>{c().find(e=>e.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:`nearest`})},[c]),(0,N.jsx)(w.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:x(i.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(r,50))}),onPointerMove:x(i.onPointerMove,()=>{o.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(r,50))}),onPointerLeave:x(i.onPointerLeave,()=>{l()})})}),fn=`SelectSeparator`,pn=M.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e;return(0,N.jsx)(w.div,{"aria-hidden":!0,...r,ref:t})}),pn.displayName=fn,mn=`SelectArrow`,hn=M.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,i=gt(n);return z(mn,n).position===`popper`?(0,N.jsx)(ce,{...i,...r,ref:t}):null}),hn.displayName=mn,gn=`SelectBubbleInput`,_n=M.forwardRef(({__scopeSelect:e,...t},n)=>{let r=I(gn,e),{value:i,onValueChange:a,required:o,disabled:s,name:c,autoComplete:l,form:u}=r,{nativeOptions:d,nativeSelectKey:f}=r,p=M.useRef(null),m=A(n,p),h=i??``,g=ke(h),_=Array.from(d).some(e=>(e.props.value??``)===``);return M.useEffect(()=>{let e=p.current;if(!e)return;let t=window.HTMLSelectElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set;if(g!==h&&n){let t=new Event(`change`,{bubbles:!0});n.call(e,h),e.dispatchEvent(t)}},[g,h]),(0,N.jsxs)(w.select,{"aria-hidden":!0,required:o,tabIndex:-1,name:c,autoComplete:l,disabled:s,form:u,onChange:e=>a(e.target.value),...t,style:{...te,...t.style},ref:m,defaultValue:h,children:[at(i)&&!_?(0,N.jsx)(`option`,{value:``}):null,Array.from(d)]},f)}),_n.displayName=gn})))()}var B,yn,V,bn,xn,Sn,Cn,wn,Tn,En;function Dn(){return(Dn=t((()=>{vn(),m(),h(),me(),de(),fe(),B=i(),yn=p({slots:{trigger:[`flex cursor-pointer items-center gap-2 pe-3 text-start`,`data-[state=open]:border-border-input-focus data-[state=open]:outline-border-input-focus`,`data-[state=open]:outline-[0.125rem] data-[state=open]:outline-offset-[-0.0625rem]`,`aria-invalid:data-[state=open]:border-border-input-destructive`,`aria-invalid:data-[state=open]:outline-border-input-destructive`],value:`min-w-0 flex-1 truncate group-data-placeholder/select-trigger:text-text-input-placeholder`,icon:[`flex size-5 shrink-0 items-center justify-center transition-transform duration-150 motion-reduce:transition-none`,`[&_path]:fill-icon-input-default group-data-[state=open]/select-trigger:-rotate-180`,`group-disabled/select-trigger:[&_path]:fill-icon-input-disable`],content:[`relative z-(--z-index-top-layer) flex flex-col overflow-hidden outline-none`,`rounded-md border border-border-default-base-primary bg-bg-default-base-primary shadow-xl`],viewport:`scroll-py-1 py-1`,scrollButton:[`flex h-6 shrink-0 cursor-default items-center justify-center bg-bg-default-base-primary`,`[&_path]:fill-icon-input-default`],item:[`group/item relative mx-1 flex min-h-10 cursor-pointer items-center rounded-md py-2 ps-4`,`pe-10 text-sm text-text-default-base-primary outline-none select-none`,`data-highlighted:bg-bg-default-base-primary-hover`,`data-disabled:cursor-default data-disabled:text-text-default-base-tertiary`],trailing:`ms-3 shrink-0 text-xs text-text-default-base-tertiary`,indicator:[`pointer-events-none absolute end-2 flex size-5 items-center justify-center`,`text-icon-default-base-secondary group-data-disabled/item:text-text-default-base-tertiary`],groupLabel:`mx-1 px-3 py-1 text-xs text-text-default-base-tertiary`,separator:`my-2 h-px bg-border-default-base-primary`},variants:{trailing:{true:{item:`pe-2`,indicator:`static ms-2 shrink-0`}},position:{popper:{content:`w-(--radix-select-trigger-width) max-h-[min(18rem,var(--radix-select-content-available-height))]`},"item-aligned":{content:`max-h-72`}}}}),V=yn(),bn=({disabled:e,required:t,...n})=>{let r=ue();return(0,B.jsx)(xt,{...n,disabled:e??r?.disabled,required:t??r?.required})},bn.displayName=`Select.Root`,xn=({size:e=`md`,placeholder:t,children:n,className:r,...i})=>{let a=ue();return(0,B.jsxs)(Ct,{id:a?.controlId,"aria-describedby":a?.describedBy,"aria-invalid":a?.invalid||void 0,...i,"data-slot":`select-trigger`,"data-size":e,className:g(pe({size:e}),`group/select-trigger`,V.trigger(),r),children:[(0,B.jsx)(`span`,{"data-slot":`select-value`,className:V.value(),children:(0,B.jsx)(Tt,{placeholder:t,children:n})}),(0,B.jsx)(Dt,{"data-slot":`select-icon`,className:V.icon(),children:(0,B.jsx)(ge,{className:`size-5`})})]})},xn.displayName=`Select.Trigger`,Sn=({position:e=`popper`,side:t=`bottom`,align:n=`start`,sideOffset:r=8,collisionPadding:i=8,className:a,children:o,...s})=>{let c=ue(),l=s[`aria-label`]||s[`aria-labelledby`]?{}:c?{"aria-labelledby":c.labelId}:{"aria-label":`Options`};return(0,B.jsx)(jt,{children:(0,B.jsxs)(Mt,{...l,...s,position:e,side:t,align:n,sideOffset:r,collisionPadding:i,"data-slot":`select-content`,className:g(V.content({position:e}),a),children:[(0,B.jsx)(cn,{"data-slot":`select-scroll-up`,className:V.scrollButton(),children:(0,B.jsx)(ge,{className:`size-4 rotate-180`})}),(0,B.jsx)(Gt,{"data-slot":`select-list`,className:V.viewport(),children:o}),(0,B.jsx)(un,{"data-slot":`select-scroll-down`,className:V.scrollButton(),children:(0,B.jsx)(ge,{className:`size-4`})})]})})},Sn.displayName=`Select.Content`,Cn=({trailing:e,className:t,children:n,...r})=>{let i=yn({trailing:e!==void 0});return(0,B.jsxs)(tn,{...r,"data-slot":`select-item`,className:g(i.item(),t),children:[(0,B.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:(0,B.jsx)(rn,{children:n})}),e!==void 0&&(0,B.jsx)(`span`,{"data-slot":`select-item-trailing`,className:V.trailing(),children:e}),(0,B.jsx)(`span`,{className:i.indicator(),children:(0,B.jsx)(on,{"data-slot":`select-item-indicator`,className:`flex`,children:(0,B.jsx)(he,{className:`size-5`})})})]})},Cn.displayName=`Select.Item`,wn=e=>(0,B.jsx)(Yt,{...e,"data-slot":`select-group`}),wn.displayName=`Select.Group`,Tn=({className:e,...t})=>(0,B.jsx)(Zt,{...t,"data-slot":`select-group-label`,className:g(V.groupLabel(),e)}),Tn.displayName=`Select.GroupLabel`,En=({className:e,...t})=>(0,B.jsx)(pn,{...t,"data-slot":`select-separator`,className:g(V.separator(),e)}),En.displayName=`Select.Separator`;try{yn.displayName=`Select.Root`,yn.__docgenInfo={description:"Style recipe for Select. Slots: `trigger` (the closed field), `value`, `icon` (the chevron),\n`content` (the floating surface), `viewport` (the scrolling list), `scrollButton`, `item`,\n`trailing`, `indicator` (the check on the selected row), `groupLabel` and `separator`. The\ntrigger wears `Input`'s recipe.",displayName:`Select.Root`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{trailing:{defaultValue:null,description:``,name:`trailing`,required:!1,tags:{},type:{name:`boolean`}},position:{defaultValue:{value:`popper`},description:``,name:`position`,required:!1,tags:{},type:{name:`enum`,raw:`"popper" | "item-aligned"`,value:[{value:`"popper"`},{value:`"item-aligned"`}]}},class:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`ClassNameValue`}},className:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/tailwind-variants/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`ClassNameValue`}}},tags:{summary:`tailwind-variants recipe backing the Select trigger, surface and rows`}}}catch{}try{xn.displayName=`Select.Trigger`,xn.__docgenInfo={description:"The closed field: a button drawn as an `Input`, showing the picked option\n(or `placeholder`) and a chevron. Click, Enter, Space or the arrow keys\nopen the list. While the list is open the focus is on the options, and the\nfield keeps its focus ring.\n\nInside a `Field.Root` it takes the field's `id`, description and `invalid`,\nso the `Field.Label` names it, and its own props win. Outside one, give it an\n`aria-label` or point a `Label` at its `id`. Its `ref` reaches the button, so\na form library can focus the field on a failed submit.",displayName:`Select.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:"Control height, matching `Input`. Defaults to `'md'`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},placeholder:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Text shown while nothing is picked.`,name:`placeholder`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Renders the picked value. Defaults to the picked option's label.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Button drawn as an input, showing the picked option and a chevron`,dataAttribute:`{string} data-slot - Always set to "select-trigger"
{string} data-state - "open" while the list is open, "closed" otherwise
{string} data-placeholder - Present while nothing is picked`}}}catch{}try{Sn.displayName=`Select.Content`,Sn.__docgenInfo={description:'The floating list. By default (`position="popper"`) it opens below the\ntrigger, matches its width and caps its height to six rows or the room\navailable, so a long list scrolls, with arrows at the ends while there is\nmore to see. `position="item-aligned"` opens it over the trigger instead,\nwith the picked option on top of it.\n\nIt renders on Radix\'s layer stack, so inside a `Modal` or a `Popover` the\nfocus stays on the list and Escape closes the list first.\n\nInside a `Field.Root` the list is named after the `Field.Label`; otherwise it\nis named "Options". Pass `aria-label` or `aria-labelledby` to name it.',displayName:`Select.Content`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Floating surface holding the options`,dataAttribute:`{string} data-slot - Always set to "select-content"`}}}catch{}try{Cn.displayName=`Select.Item`,Cn.__docgenInfo={description:"One option. `value` is what the select stores and submits; the children are\nthe label shown in the row and in the trigger. The picked row carries a\ncheck at its end. A `disabled` row is greyed out and cannot be picked.",displayName:`Select.Item`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},trailing:{defaultValue:null,declarations:[{fileName:`design-system/src/select/select.tsx`,name:`TypeLiteral`}],description:`Short text at the end of the row, such as a code or a count. It does not show in the trigger.`,name:`trailing`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{summary:`Option row inside the list`,dataAttribute:`{string} data-slot - Always set to "select-item"
{string} data-state - "checked" on the picked row
{string} data-highlighted - Present on the row under the pointer or the keyboard`}}}catch{}try{wn.displayName=`Select.Group`,wn.__docgenInfo={description:"A section of options. Give it a `GroupLabel` as heading, and put a\n`Separator` between sections. A single section can carry a heading too.",displayName:`Select.Group`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Section of options under a heading`,dataAttribute:`{string} data-slot - Always set to "select-group"`}}}catch{}try{Tn.displayName=`Select.GroupLabel`,Tn.__docgenInfo={description:"Heading of a `Group`. It names the group and cannot be picked.",displayName:`Select.GroupLabel`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Heading of a section of options`,dataAttribute:`{string} data-slot - Always set to "select-group-label"`}}}catch{}try{En.displayName=`Select.Separator`,En.__docgenInfo={description:"Line between two `Group`s.",displayName:`Select.Separator`,filePath:`/home/runner/work/design-system/design-system/src/select/select.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Divider between sections of options`,dataAttribute:`{string} data-slot - Always set to "select-separator"`}}}catch{}})))()}var H;function On(){return(On=t((()=>{Dn(),H={Root:bn,Trigger:xn,Content:Sn,Item:Cn,Group:wn,GroupLabel:Tn,Separator:En}})))()}var kn,U,W,An,G,K,q,J,Y,jn,Mn,X,Nn,Z,Pn,Q,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,$,qn,Jn;function Yn(){return(Yn=t((()=>{kn=n(),Me(),On(),_(),de(),_e(),De(),U=i(),{expect:W,fn:An,screen:G,userEvent:K,waitFor:q,within:J}=__STORYBOOK_MODULE_TEST__,Y=[{value:`AZ`,label:`Arizona`},{value:`CA`,label:`California`},{value:`FL`,label:`Florida`},{value:`GA`,label:`Georgia`},{value:`NY`,label:`New York`},{value:`TX`,label:`Texas`}],jn=[{label:`North`,options:[{value:`AZ`,label:`Arizona`},{value:`MN`,label:`Minnesota`},{value:`FL`,label:`Florida`}]},{label:`West`,options:[{value:`CA`,label:`California`}]},{label:`South`,options:[{value:`TX`,label:`Texas`}]}],Mn={title:`Components/Select`,component:H.Root,tags:[`autodocs`],parameters:{docs:{story:{height:`320px`},description:{component:"Select is a button that opens a list of options and shows the one picked.\nUse it for a pick from a short, known list, where typing would add nothing.\nFor a long list or one the user searches, use Combobox; for a handful of\noptions that should all stay visible, use RadioGroup. `Root` owns the picked\nvalue; `Trigger` is the closed field and `Content` the list of `Item`s."}}},decorators:[e=>(0,U.jsx)(`div`,{className:`w-148 max-w-full p-4`,children:(0,U.jsx)(e,{})})],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:"Control height of the trigger, matching `Input`. Set on `Select.Trigger`."},placeholder:{control:`text`,description:"Text the trigger shows while nothing is picked. Set on `Select.Trigger`."},disabled:{control:`boolean`,description:"Blocks the whole select. Defaults to the surrounding `Field.Root`."},required:{control:`boolean`,description:"Blocks a native form submission until something is picked. Defaults to the surrounding `Field.Root`."},onValueChange:{action:`valueChange`,description:`Called with the picked value.`}},args:{size:`md`,placeholder:`Select a state`},render:({size:e,placeholder:t,...n})=>(0,U.jsxs)(H.Root,{...n,children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`,size:e,placeholder:t}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})},X=async e=>(await K.click(e),G.findByRole(`listbox`)),Nn=async()=>{await K.keyboard(`{Escape}`),await q(()=>W(G.queryByRole(`listbox`)).not.toBeInTheDocument())},Z={args:{onValueChange:An()},play:async({args:e,canvasElement:t})=>{let n=J(t).getByRole(`combobox`,{name:`State`});await W(n).toHaveTextContent(`Select a state`);let r=await X(n),i=r.querySelector(`[data-slot=select-list]`);await W(r).toHaveAccessibleName(`Options`),await W(i.scrollHeight).toBe(i.clientHeight),await K.click(J(r).getByRole(`option`,{name:`Florida`})),await q(()=>W(G.queryByRole(`listbox`)).not.toBeInTheDocument()),await W(n).toHaveTextContent(`Florida`),await W(e.onValueChange).toHaveBeenLastCalledWith(`FL`)}},Pn={render:()=>(0,U.jsx)(`div`,{className:`w-full`,children:(0,U.jsxs)(k.Root,{invalid:!0,required:!0,children:[(0,U.jsx)(k.Label,{children:`State`}),(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{placeholder:`Select a state`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]}),(0,U.jsx)(k.Description,{children:`Where the risk is located.`}),(0,U.jsx)(k.Error,{errors:[{message:`Choose a state`}]})]})}),play:async({canvasElement:e})=>{let t=J(e).getByRole(`combobox`,{name:/State/});await W(t).toHaveAttribute(`aria-invalid`,`true`),await W(t).toHaveAccessibleDescription(/located.*Choose a state|Choose a state.*located/),await W(t).toHaveStyle({borderColor:`rgb(217, 38, 38)`});let n=await X(t);await W(n).toHaveAccessibleName(/State/),await Nn()}},Q={args:{onValueChange:An()},render:e=>(0,U.jsxs)(H.Root,{...e,children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,disabled:e===`FL`,children:t},e))})]}),play:async({args:e,canvasElement:t})=>{let n=await X(J(t).getByRole(`combobox`,{name:`State`}));await W(J(n).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-disabled`,`true`),await K.click(J(n).getByRole(`option`,{name:`Florida`})),await W(e.onValueChange).not.toHaveBeenCalled(),J(n).getByRole(`option`,{name:`California`}).focus(),await K.keyboard(`{ArrowDown}`),await W(J(n).getByRole(`option`,{name:`Georgia`})).toHaveFocus(),await Nn()}},Fn={render:()=>{let[e,t]=(0,kn.useState)(`CA`);return(0,U.jsxs)(`div`,{className:`flex w-full flex-col items-start gap-6`,children:[(0,U.jsxs)(`div`,{className:`flex gap-3`,children:[(0,U.jsx)(v,{variant:`secondary`,size:`sm`,onClick:()=>t(``),children:`Clear`}),(0,U.jsx)(v,{variant:`secondary`,size:`sm`,onClick:()=>t(`NY`),children:`Choose New York`})]}),(0,U.jsx)(`div`,{className:`w-full`,children:(0,U.jsxs)(H.Root,{value:e,onValueChange:t,children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})}),(0,U.jsxs)(`output`,{className:`text-sm`,children:[`Selected: `,e||`none`]})]})},play:async({canvasElement:e})=>{let t=J(e),n=t.getByRole(`combobox`,{name:`State`});await K.click(t.getByRole(`button`,{name:`Choose New York`})),await W(n).toHaveTextContent(`New York`),await K.click(t.getByRole(`button`,{name:`Clear`})),await W(n).toHaveTextContent(`Select a state`),await W(t.getByRole(`status`)).toHaveTextContent(`Selected: none`)}},In={render:()=>{let[e,t]=(0,kn.useState)(null);return(0,U.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,U.jsx)(`div`,{className:`w-full`,children:(0,U.jsxs)(H.Root,{name:`state`,required:!0,children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})}),(0,U.jsx)(v,{type:`submit`,children:`Submit`}),e&&(0,U.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=J(e),n=e.querySelector(`form`);await W(n.checkValidity()).toBe(!1);let r=await X(t.getByRole(`combobox`,{name:`State`}));await K.click(J(r).getByRole(`option`,{name:`Georgia`})),await W(n.checkValidity()).toBe(!0),await K.click(t.getByRole(`button`,{name:`Submit`})),await W(await t.findByRole(`status`)).toHaveTextContent(`Submitted: GA`)}},Ln={render:()=>{let{control:e,handleSubmit:t}=je({defaultValues:{state:``}}),[n,r]=(0,kn.useState)(null);return(0,U.jsxs)(`form`,{noValidate:!0,className:`flex w-full flex-col items-start gap-6`,onSubmit:t(e=>r(e.state)),children:[(0,U.jsx)(Ne,{name:`state`,control:e,rules:{required:`Choose a state`},render:({field:e,fieldState:t})=>(0,U.jsxs)(k.Root,{invalid:t.invalid,required:!0,className:`w-full`,children:[(0,U.jsx)(k.Label,{children:`State`}),(0,U.jsxs)(H.Root,{value:e.value,onValueChange:e.onChange,children:[(0,U.jsx)(H.Trigger,{ref:e.ref,onBlur:e.onBlur,placeholder:`Select a state`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]}),(0,U.jsx)(k.Error,{errors:[t.error]})]})}),(0,U.jsx)(v,{type:`submit`,children:`Submit`}),n&&(0,U.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,n]})]})},play:async({canvasElement:e})=>{let t=J(e),n=t.getByRole(`combobox`,{name:/State/});await K.click(t.getByRole(`button`,{name:`Submit`})),await q(()=>W(n).toHaveFocus()),await q(()=>W(n).toHaveAccessibleDescription(`Choose a state`));let r=await X(n);await K.click(J(r).getByRole(`option`,{name:`Arizona`})),await K.click(t.getByRole(`button`,{name:`Submit`})),await W(await t.findByRole(`status`)).toHaveTextContent(`Submitted: AZ`)}},Rn={render:()=>(0,U.jsx)(`div`,{className:`w-60`,children:(0,U.jsxs)(H.Root,{defaultValue:`ho3`,children:[(0,U.jsx)(H.Trigger,{"aria-label":`Policy form`}),(0,U.jsx)(H.Content,{children:[{value:`ho3`,label:`Homeowners HO-3, special form, including dwelling and contents`},{value:`ho6`,label:`Condo unit owners HO-6`}].map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})}),play:async({canvasElement:e})=>{let t=J(e).getByRole(`combobox`,{name:`Policy form`}),n=t.querySelector(`[data-slot=select-value]`);await W(t.getBoundingClientRect().height).toBe(40),await q(()=>W(n.scrollWidth).toBeGreaterThan(n.clientWidth))}},zn=`Alabama.Alaska.Arizona.Arkansas.California.Colorado.Connecticut.Delaware.Florida.Georgia.Hawaii.Idaho.Illinois.Indiana.Iowa.Kansas.Kentucky.Louisiana.Maine.Maryland.Massachusetts.Michigan.Minnesota.Mississippi.Missouri.Montana.Nebraska.Nevada.New Hampshire.New Jersey.New Mexico.New York.North Carolina.North Dakota.Ohio.Oklahoma.Oregon.Pennsylvania.Rhode Island.South Carolina.South Dakota.Tennessee.Texas.Utah.Vermont.Virginia.Washington.West Virginia.Wisconsin.Wyoming`.split(`.`).map(e=>({value:e,label:e})),Bn={args:{defaultValue:`Ohio`},parameters:{docs:{story:{height:`400px`}}},render:e=>(0,U.jsxs)(H.Root,{...e,children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`,placeholder:`Select a state`}),(0,U.jsx)(H.Content,{children:zn.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=J(e).getByRole(`combobox`,{name:`State`}),n=await X(t),r=J(n).getByRole(`option`,{name:`Ohio`}),i=n.querySelector(`[data-slot=select-list]`),a=t.getBoundingClientRect(),o=n.getBoundingClientRect();await W(Math.round(o.width)).toBe(Math.round(a.width)),await W(Math.round(o.left)).toBe(Math.round(a.left)),await W(Math.round(o.top-a.bottom)).toBe(8),await W(i.scrollHeight).toBeGreaterThan(i.clientHeight),await W(r).toHaveAttribute(`aria-selected`,`true`),await q(()=>{W(n.querySelector(`[data-slot=select-scroll-up]`)).not.toBeNull(),W(n.querySelector(`[data-slot=select-scroll-down]`)).not.toBeNull()}),await q(()=>{let e=r.getBoundingClientRect(),t=i.getBoundingClientRect();W(e.top).toBeGreaterThanOrEqual(t.top),W(e.bottom).toBeLessThanOrEqual(t.bottom)}),await Nn()}},Vn={parameters:{docs:{story:{height:`360px`}}},render:()=>(0,U.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-6`,children:[(0,U.jsxs)(H.Root,{defaultValue:`FL`,children:[(0,U.jsx)(H.Trigger,{"aria-label":`Region`}),(0,U.jsx)(H.Content,{children:jn.map((e,t)=>(0,U.jsxs)(kn.Fragment,{children:[t>0&&(0,U.jsx)(H.Separator,{}),(0,U.jsxs)(H.Group,{children:[(0,U.jsx)(H.GroupLabel,{children:e.label}),e.options.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))]})]},e.label))})]}),(0,U.jsxs)(H.Root,{defaultValue:`CA`,children:[(0,U.jsx)(H.Trigger,{"aria-label":`Recent state`}),(0,U.jsx)(H.Content,{children:(0,U.jsxs)(H.Group,{children:[(0,U.jsx)(H.GroupLabel,{children:`Recently used`}),Y.slice(0,3).map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))]})})]})]}),play:async({canvasElement:e})=>{let t=await X(J(e).getByRole(`combobox`,{name:`Region`}));await W(J(t).getAllByRole(`group`)).toHaveLength(3),await W(J(J(t).getByRole(`group`,{name:`North`})).getByRole(`option`,{name:`Florida`})).toHaveAttribute(`aria-selected`,`true`),await Nn()}},Hn={render:()=>(0,U.jsxs)(H.Root,{defaultValue:`CA`,children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,trailing:e,children:t},e))})]}),play:async({canvasElement:e})=>{let t=J(e).getByRole(`combobox`,{name:`State`}),n=await X(t);await W(J(n).getByRole(`option`,{name:/Texas/})).toHaveTextContent(`TX`),await K.click(J(n).getByRole(`option`,{name:/Texas/})),await q(()=>W(t).toHaveTextContent(/^Texas$/))}},Un={parameters:{docs:{story:{height:`360px`}}},render:()=>(0,U.jsx)(`div`,{className:`pt-24`,children:(0,U.jsxs)(H.Root,{defaultValue:`FL`,children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`}),(0,U.jsx)(H.Content,{position:`item-aligned`,children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})}),play:async({canvasElement:e})=>{let t=J(e).getByRole(`combobox`,{name:`State`}),n=await X(t),r=t.getBoundingClientRect();await q(()=>{let e=J(n).getByRole(`option`,{name:`Florida`}).getBoundingClientRect();W(e.top).toBeLessThan(r.bottom),W(e.bottom).toBeGreaterThan(r.top)}),await Nn()}},Wn={render:()=>(0,U.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-6`,children:[[[`Placeholder`,{}],[`Filled`,{defaultValue:`TX`}],[`Disabled`,{defaultValue:`TX`,disabled:!0}]].map(([e,t])=>(0,U.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,U.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:e}),(0,U.jsxs)(H.Root,{...t,children:[(0,U.jsx)(H.Trigger,{"aria-label":e,placeholder:`Select a state`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})]},e)),(0,U.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,U.jsx)(`span`,{className:`text-xs text-text-input-placeholder`,children:`Invalid`}),(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{"aria-label":`Invalid`,"aria-invalid":!0,placeholder:`Select a state`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})]})]})},Gn={tags:[`!dev`,`!autodocs`,`!manifest`],args:{defaultValue:`CA`,onValueChange:An()},play:async({args:e,canvasElement:t})=>{let n=J(t).getByRole(`combobox`,{name:`State`}),r=`rgb(45, 48, 57)`;await K.tab(),await W(n).toHaveFocus(),await q(()=>W(n).toHaveStyle({borderColor:r})),await K.keyboard(`{ArrowDown}`);let i=await G.findByRole(`listbox`);await q(()=>W(J(i).getByRole(`option`,{name:`California`})).toHaveFocus()),await W(n).toHaveStyle({borderColor:r}),await K.keyboard(`{ArrowDown}{Enter}`),await q(()=>W(G.queryByRole(`listbox`)).not.toBeInTheDocument()),await W(n).toHaveTextContent(`Florida`),await W(e.onValueChange).toHaveBeenLastCalledWith(`FL`),await W(n).toHaveFocus(),await K.keyboard(`{Enter}`),await G.findByRole(`listbox`),await K.keyboard(`{Escape}`),await q(()=>W(G.queryByRole(`listbox`)).not.toBeInTheDocument()),await W(n).toHaveTextContent(`Florida`),await W(n).toHaveFocus()}},Kn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>{let[e,t]=(0,kn.useState)(null);return(0,U.jsxs)(`form`,{className:`flex w-full flex-col items-start gap-6`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`state`)))},children:[(0,U.jsx)(`div`,{className:`w-full`,children:(0,U.jsxs)(H.Root,{name:`state`,defaultValue:`CA`,children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})}),(0,U.jsxs)(`div`,{className:`flex gap-3`,children:[(0,U.jsx)(v,{type:`reset`,variant:`secondary`,children:`Reset`}),(0,U.jsx)(v,{type:`submit`,children:`Submit`})]}),e&&(0,U.jsxs)(`output`,{className:`text-sm`,children:[`Submitted: `,e]})]})},play:async({canvasElement:e})=>{let t=J(e),n=t.getByRole(`combobox`,{name:`State`}),r=await X(n);await K.click(J(r).getByRole(`option`,{name:`Georgia`})),await W(n).toHaveTextContent(`Georgia`),await K.click(t.getByRole(`button`,{name:`Reset`})),await q(()=>W(n).toHaveTextContent(`California`)),await K.click(t.getByRole(`button`,{name:`Submit`})),await W(await t.findByRole(`status`)).toHaveTextContent(`Submitted: CA`)}},$={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,U.jsxs)(ve.Root,{children:[(0,U.jsx)(ve.Trigger,{asChild:!0,children:(0,U.jsx)(v,{variant:`secondary`,children:`Edit address`})}),(0,U.jsxs)(ve.Content,{children:[(0,U.jsx)(ve.Title,{children:`Edit address`}),(0,U.jsx)(ve.Body,{children:(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})})]})]}),play:async({canvasElement:e})=>{let t=J(document.body);await K.click(J(e).getByRole(`button`,{name:`Edit address`}));let n=await t.findByRole(`dialog`,{name:`Edit address`}),r=J(n).getByRole(`combobox`,{name:`State`}),i=await X(r);await q(()=>W(i).toContainElement(document.activeElement)),await K.keyboard(`{Escape}`),await q(()=>W(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await W(n).toHaveAttribute(`data-state`,`open`),await K.click(J(await X(r)).getByRole(`option`,{name:`California`})),await q(()=>W(t.queryByRole(`listbox`)).not.toBeInTheDocument()),r.focus(),await K.keyboard(`{ArrowDown}`);let a=await t.findByRole(`listbox`);await q(()=>W(J(a).getByRole(`option`,{name:`California`})).toHaveFocus()),await K.keyboard(`{ArrowDown}`),await W(J(a).getByRole(`option`,{name:`Florida`})).toHaveFocus(),await K.keyboard(`{Escape}`),await q(()=>W(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await W(n).toHaveAttribute(`data-state`,`open`),await K.keyboard(`{Escape}`),await q(()=>W(n).toHaveAttribute(`data-state`,`closed`))}},qn={tags:[`!dev`,`!autodocs`,`!manifest`],render:()=>(0,U.jsxs)(Oe.Root,{children:[(0,U.jsx)(Oe.Trigger,{asChild:!0,children:(0,U.jsx)(v,{variant:`secondary`,children:`Filter`})}),(0,U.jsx)(Oe.Content,{className:`w-72`,children:(0,U.jsxs)(H.Root,{children:[(0,U.jsx)(H.Trigger,{"aria-label":`State`,placeholder:`Any state`}),(0,U.jsx)(H.Content,{children:Y.map(({value:e,label:t})=>(0,U.jsx)(H.Item,{value:e,children:t},e))})]})})]}),play:async({canvasElement:e})=>{let t=J(document.body),n=J(e).getByRole(`button`,{name:`Filter`});await K.click(n);let r=await t.findByRole(`combobox`,{name:`State`}),i=await X(r);await q(()=>W(i).toContainElement(document.activeElement)),await K.keyboard(`{Escape}`),await q(()=>W(t.queryByRole(`listbox`)).not.toBeInTheDocument()),await W(r.closest(`[data-slot=popover-content]`)).toHaveAttribute(`data-state`,`open`),await K.keyboard(`{Escape}`),await q(()=>W(t.queryByRole(`combobox`,{name:`State`})).not.toBeInTheDocument())}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`@summary Pick an option from the list`,...Z.parameters?.docs?.description}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
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
}`,...Pn.parameters?.docs?.source},description:{story:"Inside a `Field.Root`, the label, description, error, `invalid` and\n`required` reach the trigger with nothing wired by hand.\n\n@summary Wired to a surrounding Field",...Pn.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`\`disabled\` on one item leaves the rest selectable. It is announced as
disabled, a press does not pick it, and the arrow keys skip it.

@summary One option disabled`,...Q.parameters?.docs?.description}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
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
}`,...Fn.parameters?.docs?.source},description:{story:`@summary Controlled select whose value is set from outside`,...Fn.parameters?.docs?.description}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
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
}`,...In.parameters?.docs?.source},description:{story:"With `name`, the form submits `name=value`, and `required` blocks the\nsubmission until something is picked.\n\n@summary Native form submission",...In.parameters?.docs?.description}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`{
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
}`,...Ln.parameters?.docs?.source},description:{story:"With react-hook-form, wire the select through `Controller` and put\n`field.ref` on the trigger, so a failed submit focuses it.\n\n@summary React Hook Form through Controller",...Ln.parameters?.docs?.description}}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`{
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
}`,...Rn.parameters?.docs?.source},description:{story:`A long option label is cut with an ellipsis in the trigger and in its row,
and the chevron keeps its place.

@summary Long labels truncate`,...Rn.parameters?.docs?.description}}},Bn.parameters={...Bn.parameters,docs:{...Bn.parameters?.docs,source:{originalSource:`{
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
}`,...Bn.parameters?.docs?.source},description:{story:`With more options than fit, the list stops at six rows and scrolls, with an
arrow at each end while there is more to see, and it opens with the picked
option in view. It matches the trigger's width and opens 8px below it. Past
a few dozen options, or when
people know what they are looking for, a Combobox lets them type instead.

@summary Long list that scrolls`,...Bn.parameters?.docs?.description}}},Vn.parameters={...Vn.parameters,docs:{...Vn.parameters?.docs,source:{originalSource:`{
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
}`,...Vn.parameters?.docs?.source},description:{story:"Options grouped into sections: each `Group` has a `GroupLabel` as heading,\nwith a `Separator` between groups. A single group can carry a heading too.\n\n@summary Options in sections",...Vn.parameters?.docs?.description}}},Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`{
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
}`,...Hn.parameters?.docs?.source},description:{story:`\`trailing\` puts short text at the end of a row, such as a code. It stays in
the list: the trigger shows only the label.

@summary Text at the end of a row`,...Hn.parameters?.docs?.description}}},Un.parameters={...Un.parameters,docs:{...Un.parameters?.docs,source:{originalSource:`{
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
}`,...Un.parameters?.docs?.source},description:{story:'`position="item-aligned"` on `Content` opens the list over the trigger, with\nthe picked option on top of it, instead of below.\n\n@summary List opening on the picked option',...Un.parameters?.docs?.description}}},Wn.parameters={...Wn.parameters,docs:{...Wn.parameters?.docs,source:{originalSource:`{
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
}`,...Wn.parameters?.docs?.source},description:{story:`Every state of the trigger side by side, for checking against the design.

@summary Visual comparison of the trigger states`,...Wn.parameters?.docs?.description}}},Gn.parameters={...Gn.parameters,docs:{...Gn.parameters?.docs,source:{originalSource:`{
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
}`,...Gn.parameters?.docs?.source},description:{story:`Enter, Space or the arrow keys open the list; the arrows move, Enter picks
and Escape closes it, handing focus back to the trigger. The trigger keeps
its focus ring while the options hold the focus.

@summary Keyboard selection`,...Gn.parameters?.docs?.description}}},Kn.parameters={...Kn.parameters,docs:{...Kn.parameters?.docs,source:{originalSource:`{
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
}`,...Kn.parameters?.docs?.source},description:{story:`A native form reset puts an uncontrolled select back on its \`defaultValue\`,
on screen and in what the form submits.

@summary Native form reset`,...Kn.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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

@summary Focus and Escape inside a Modal`,...$.parameters?.docs?.description}}},qn.parameters={...qn.parameters,docs:{...qn.parameters?.docs,source:{originalSource:`{
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
}`,...qn.parameters?.docs?.source},description:{story:`Inside a \`Popover\`, Escape on the open list closes the list only; the next
one closes the popover.

@summary Escape inside a Popover`,...qn.parameters?.docs?.description}}},Jn=[`Default`,`InsideField`,`DisabledItem`,`Controlled`,`InForm`,`WithReactHookForm`,`LongLabel`,`ManyItems`,`Sections`,`TrailingText`,`OpensOnPickedOption`,`AllStates`,`Keyboard`,`FormReset`,`InsideModal`,`InsidePopover`]})))()}Yn();export{Wn as AllStates,Fn as Controlled,Z as Default,Q as DisabledItem,Kn as FormReset,In as InForm,Pn as InsideField,$ as InsideModal,qn as InsidePopover,Gn as Keyboard,Rn as LongLabel,Bn as ManyItems,Un as OpensOnPickedOption,Vn as Sections,Hn as TrailingText,Ln as WithReactHookForm,Jn as __namedExportsOrder,Mn as default};