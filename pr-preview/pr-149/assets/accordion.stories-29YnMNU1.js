import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DsxI7nQI.js";import{t as r}from"./react-dom-DzEo4aW7.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o,r as s,t as c}from"./dist-bJ_SCxQ9.js";import{n as l,t as u}from"./dist-T-2xnIlV.js";import{n as d,t as f}from"./dist-CNGdk8J9.js";import{n as p,t as ee}from"./dist-C8AlzbfS.js";import{n as te,t as m}from"./utils-nsk-j2e0.js";import{n as ne,t as h}from"./icons-RRxAkzcP.js";function re(e,t=[]){let n=[];function r(t,r){let i=g.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=g.useMemo(()=>o,Object.values(o));return(0,ae.jsx)(s.Provider,{value:c,children:r})};o.displayName=t+`Provider`;function s(n,o){let s=o?.[e]?.[a]||i,c=g.useContext(s);if(c)return c;if(r!==void 0)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}return[o,s]}let i=()=>{let t=n.map(e=>g.createContext(e));return function(n){let r=n?.[e]||t;return g.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return i.scopeName=e,[r,ie(i,...t)]}function ie(...e){let t=e[0];if(e.length===1)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}var g,ae;function oe(){return(oe=t((()=>{g=e(n(),1),ae=i()})))()}function se(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function ce(...e){return t=>{let n=!1,r=e.map(e=>{let r=se(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():se(e[t],null)}}}}function le(...e){return ue.useCallback(ce(...e),e)}var ue;function de(){return(de=t((()=>{ue=e(n(),1)})))()}function fe(e){let t=_.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];ge(r)&&typeof v==`function`&&(r=v(r._payload)),_.Children.forEach(r,e=>{if(he(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;ge(n)&&typeof v==`function`&&(n=v(n._payload)),a=ye(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=_.cloneElement(a,void 0,s):!o&&_.Children.count(r)===1&&_.isValidElement(r)&&(a=r);let c=a?me(a):void 0,l=le(n,c);if(!a){if(r||r===0)throw Error(o?Se(e):xe(e));return r}let u=pe(i,a.props??{});return a.type!==_.Fragment&&(u.ref=n?l:c),_.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function pe(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function me(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function he(e){return _.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===ve}function ge(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===be&&`_payload`in e&&_e(e._payload)}function _e(e){return typeof e==`object`&&!!e&&`then`in e}var _,ve,ye,be,xe,Se,v;function Ce(){return(Ce=t((()=>{_=e(n(),1),de(),ve=Symbol.for(`radix.slottable`),ye=(e,t)=>{if(`child`in e.props){let t=e.props.child;return _.isValidElement(t)?_.cloneElement(t,void 0,e.props.children(t.props.children)):null}return _.isValidElement(t)?t:null},be=Symbol.for(`react.lazy`),xe=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,Se=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,v=_.use})))()}function we(e){let t=e+`CollectionProvider`,[n,r]=re(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=e=>{let{scope:t,children:n}=e,r=y.useRef(null),a=y.useRef(new Map).current;return(0,b.jsx)(i,{scope:t,itemMap:a,collectionRef:r,children:n})};o.displayName=t;let s=e+`CollectionSlot`,c=fe(s),l=y.forwardRef((e,t)=>{let{scope:n,children:r}=e,i=le(t,a(s,n).collectionRef);return(0,b.jsx)(c,{ref:i,children:r})});l.displayName=s;let u=e+`CollectionItemSlot`,d=`data-radix-collection-item`,f=fe(u),p=y.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,o=y.useRef(null),s=le(t,o),c=a(u,n);return y.useEffect(()=>(c.itemMap.set(o,{ref:o,...i}),()=>void c.itemMap.delete(o))),(0,b.jsx)(f,{[d]:``,ref:s,children:r})});p.displayName=u;function ee(t){let n=a(e+`CollectionConsumer`,t);return y.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])}return[{Provider:o,Slot:l,ItemSlot:p},ee,r]}var y,b;function Te(){return(Te=t((()=>{y=e(n(),1),oe(),de(),Ce(),b=i(),n(),i()})))()}function Ee(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}function De(){return(De=t((()=>{typeof window<`u`&&window.document&&window.document.createElement})))()}var Oe,ke,Ae;function je(){return(je=t((()=>{Oe=e(n(),1),r(),Ce(),ke=i(),Ae=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=fe(`Primitive.${t}`),r=Oe.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,ke.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})})))()}function Me(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}function Ne(){return(Ne=t((()=>{typeof window<`u`&&window.document&&window.document.createElement})))()}function Pe(e,t=[]){let n=[];function r(t,r){let i=x.createContext(r);i.displayName=t+`Context`;let a=n.length;n=[...n,r];let o=t=>{let{scope:n,children:r,...o}=t,s=n?.[e]?.[a]||i,c=x.useMemo(()=>o,Object.values(o));return(0,Ie.jsx)(s.Provider,{value:c,children:r})};o.displayName=t+`Provider`;function s(n,o){let s=o?.[e]?.[a]||i,c=x.useContext(s);if(c)return c;if(r!==void 0)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}return[o,s]}let i=()=>{let t=n.map(e=>x.createContext(e));return function(n){let r=n?.[e]||t;return x.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return i.scopeName=e,[r,Fe(i,...t)]}function Fe(...e){let t=e[0];if(e.length===1)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}var x,Ie;function Le(){return(Le=t((()=>{x=e(n(),1),Ie=i()})))()}function Re(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function ze(...e){return t=>{let n=!1,r=e.map(e=>{let r=Re(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Re(e[t],null)}}}}function Be(...e){return Ve.useCallback(ze(...e),e)}var Ve;function He(){return(He=t((()=>{Ve=e(n(),1)})))()}function Ue(e){let t=S.forwardRef((t,n)=>{let{children:r,...i}=t,a=null,o=!1,s=[];qe(r)&&typeof C==`function`&&(r=C(r._payload)),S.Children.forEach(r,e=>{if(Ke(e)){o=!0;let t=e,n=`child`in t.props?t.props.child:t.props.children;qe(n)&&typeof C==`function`&&(n=C(n._payload)),a=Xe(t,n),s.push(a?.props?.children)}else s.push(e)}),a?a=S.cloneElement(a,void 0,s):!o&&S.Children.count(r)===1&&S.isValidElement(r)&&(a=r);let c=a?Ge(a):void 0,l=Be(n,c);if(!a){if(r||r===0)throw Error(o?$e(e):Qe(e));return r}let u=We(i,a.props??{});return a.type!==S.Fragment&&(u.ref=n?l:c),S.cloneElement(a,u)});return t.displayName=`${e}.Slot`,t}function We(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{let t=a(...e);return i(...e),t}:i&&(n[r]=i):r===`style`?n[r]={...i,...a}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))}return{...e,...n}}function Ge(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ke(e){return S.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Ye}function qe(e){return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ze&&`_payload`in e&&Je(e._payload)}function Je(e){return typeof e==`object`&&!!e&&`then`in e}var S,Ye,Xe,Ze,Qe,$e,C;function et(){return(et=t((()=>{S=e(n(),1),He(),Ye=Symbol.for(`radix.slottable`),Xe=(e,t)=>{if(`child`in e.props){let t=e.props.child;return S.isValidElement(t)?S.cloneElement(t,void 0,e.props.children(t.props.children)):null}return S.isValidElement(t)?t:null},Ze=Symbol.for(`react.lazy`),Qe=e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,$e=e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,C=S.use})))()}var tt,nt,rt;function it(){return(it=t((()=>{tt=e(n(),1),r(),et(),nt=i(),rt=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{let n=Ue(`Primitive.${t}`),r=tt.forwardRef((e,r)=>{let{asChild:i,...a}=e,o=i?n:t;return typeof window<`u`&&(window[Symbol.for(`radix-ui`)]=!0),(0,nt.jsx)(o,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})})))()}function at(e,t){return ut.useReducer((e,n)=>t[e][n]??e,e)}function ot(e){let[t,n]=T.useState(),r=T.useRef(null),i=T.useRef(e),o=T.useRef(`none`),[s,c]=at(e?`mounted`:`unmounted`,{mounted:{UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`},unmountSuspended:{MOUNT:`mounted`,ANIMATION_END:`unmounted`},unmounted:{MOUNT:`mounted`}});return T.useEffect(()=>{let e=w(r.current);o.current=s===`mounted`?e:`none`},[s]),a(()=>{let t=r.current,n=i.current;if(n!==e){let r=o.current,a=w(t);e?c(`MOUNT`):a===`none`||t?.display===`none`?c(`UNMOUNT`):c(n&&r!==a?`ANIMATION_OUT`:`UNMOUNT`),i.current=e}},[e,c]),a(()=>{if(t){let e,n=t.ownerDocument.defaultView??window,a=a=>{let o=w(r.current).includes(CSS.escape(a.animationName));if(a.target===t&&o&&(c(`ANIMATION_END`),!i.current)){let r=t.style.animationFillMode;t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)})}},s=e=>{e.target===t&&(o.current=w(r.current))};return t.addEventListener(`animationstart`,s),t.addEventListener(`animationcancel`,a),t.addEventListener(`animationend`,a),()=>{n.clearTimeout(e),t.removeEventListener(`animationstart`,s),t.removeEventListener(`animationcancel`,a),t.removeEventListener(`animationend`,a)}}c(`ANIMATION_END`)},[t,c]),{isPresent:[`mounted`,`unmountSuspended`].includes(s),ref:T.useCallback(e=>{r.current=e?getComputedStyle(e):null,n(e)},[])}}function st(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function ct(...e){let t=T.useRef(e);return t.current=e,T.useCallback(e=>{let n=t.current,r=!1,i=n.map(t=>{let n=st(t,e);return!r&&typeof n==`function`&&(r=!0),n});if(r)return()=>{for(let e=0;e<i.length;e++){let t=i[e];typeof t==`function`?t():st(n[e],null)}}},[])}function w(e){return e?.animationName||`none`}function lt(e){let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var T,ut,dt;function ft(){return(ft=t((()=>{T=e(n(),1),s(),ut=e(n(),1),dt=e=>{let{present:t,children:n}=e,r=ot(t),i=typeof n==`function`?n({present:r.isPresent}):T.Children.only(n),a=ct(r.ref,lt(i));return typeof n==`function`||r.isPresent?T.cloneElement(i,{ref:a}):null},dt.displayName=`Presence`})))()}function pt(e){return e?`open`:`closed`}var E,D,O,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et;function Dt(){return(Dt=t((()=>{E=e(n(),1),Ne(),Le(),c(),s(),He(),it(),ft(),u(),D=i(),O=`Collapsible`,[mt,ht]=Pe(O),[gt,_t]=mt(O),vt=E.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:a,onOpenChange:s,...c}=e,[u,d]=o({prop:r,defaultProp:i??!1,onChange:s,caller:O});return(0,D.jsx)(gt,{scope:n,disabled:a,contentId:l(),open:u,onOpenToggle:E.useCallback(()=>d(e=>!e),[d]),children:(0,D.jsx)(rt.div,{"data-state":pt(u),"data-disabled":a?``:void 0,...c,ref:t})})}),vt.displayName=O,yt=`CollapsibleTrigger`,bt=E.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,i=_t(yt,n);return(0,D.jsx)(rt.button,{type:`button`,"aria-controls":i.open?i.contentId:void 0,"aria-expanded":i.open||!1,"data-state":pt(i.open),"data-disabled":i.disabled?``:void 0,disabled:i.disabled,...r,ref:t,onClick:Me(e.onClick,i.onOpenToggle)})}),bt.displayName=yt,xt=`CollapsibleContent`,St=E.forwardRef((e,t)=>{let{forceMount:n,...r}=e,i=_t(xt,e.__scopeCollapsible);return(0,D.jsx)(dt,{present:n||i.open,children:({present:e})=>(0,D.jsx)(Ct,{...r,ref:t,present:e})})}),St.displayName=xt,Ct=E.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:r,children:i,...o}=e,s=_t(xt,n),[c,l]=E.useState(r),u=E.useRef(null),d=Be(t,u),f=E.useRef(0),p=f.current,ee=E.useRef(0),te=ee.current,m=s.open||c,ne=E.useRef(m),h=E.useRef(void 0);return E.useEffect(()=>{let e=requestAnimationFrame(()=>ne.current=!1);return()=>cancelAnimationFrame(e)},[]),a(()=>{let e=u.current;if(e){h.current=h.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration=`0s`,e.style.animationName=`none`;let t=e.getBoundingClientRect();f.current=t.height,ee.current=t.width,ne.current||(e.style.transitionDuration=h.current.transitionDuration,e.style.animationName=h.current.animationName),l(r)}},[s.open,r]),(0,D.jsx)(rt.div,{"data-state":pt(s.open),"data-disabled":s.disabled?``:void 0,id:s.contentId,hidden:!m,...o,ref:d,style:{"--radix-collapsible-content-height":p?`${p}px`:void 0,"--radix-collapsible-content-width":te?`${te}px`:void 0,...e.style},children:m&&i})}),wt=vt,Tt=bt,Et=St})))()}function Ot(e){return e?`open`:`closed`}var k,A,j,kt,M,At,jt,N,Mt,P,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,F,Vt,I,Ht,L,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en;function tn(){return(tn=t((()=>{k=e(n(),1),oe(),Te(),de(),De(),c(),je(),Dt(),u(),f(),A=i(),j=`Accordion`,kt=[`Home`,`End`,`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`],[M,At,jt]=we(j),[N,Mt]=re(j,[jt,ht]),P=ht(),Nt=k.forwardRef((e,t)=>{let{type:n,...r}=e,i=r,a=r;return(0,A.jsx)(M.Provider,{scope:e.__scopeAccordion,children:n===`multiple`?(0,A.jsx)(zt,{...a,ref:t}):(0,A.jsx)(Rt,{...i,ref:t})})}),Nt.displayName=j,[Pt,Ft]=N(j),[It,Lt]=N(j,{collapsible:!1}),Rt=k.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:a=!1,...s}=e,[c,l]=o({prop:n,defaultProp:r??``,onChange:i,caller:j});return(0,A.jsx)(Pt,{scope:e.__scopeAccordion,value:k.useMemo(()=>c?[c]:[],[c]),onItemOpen:l,onItemClose:k.useCallback(()=>a&&l(``),[a,l]),children:(0,A.jsx)(It,{scope:e.__scopeAccordion,collapsible:a,children:(0,A.jsx)(Vt,{...s,ref:t})})})}),zt=k.forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:i=()=>{},...a}=e,[s,c]=o({prop:n,defaultProp:r??[],onChange:i,caller:j}),l=k.useCallback(e=>c((t=[])=>[...t,e]),[c]),u=k.useCallback(e=>c((t=[])=>t.filter(t=>t!==e)),[c]);return(0,A.jsx)(Pt,{scope:e.__scopeAccordion,value:s,onItemOpen:l,onItemClose:u,children:(0,A.jsx)(It,{scope:e.__scopeAccordion,collapsible:!0,children:(0,A.jsx)(Vt,{...a,ref:t})})})}),[Bt,F]=N(j),Vt=k.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:r,dir:i,orientation:a=`vertical`,...o}=e,s=le(k.useRef(null),t),c=At(n),l=d(i)===`ltr`,u=Ee(e.onKeyDown,e=>{if(!kt.includes(e.key))return;let t=e.target,n=c().filter(e=>!e.ref.current?.disabled),r=n.findIndex(e=>e.ref.current===t),i=n.length;if(r===-1)return;e.preventDefault();let o=r,s=i-1,u=()=>{o=r+1,o>s&&(o=0)},d=()=>{o=r-1,o<0&&(o=s)};switch(e.key){case`Home`:o=0;break;case`End`:o=s;break;case`ArrowRight`:a===`horizontal`&&(l?u():d());break;case`ArrowDown`:a===`vertical`&&u();break;case`ArrowLeft`:a===`horizontal`&&(l?d():u());break;case`ArrowUp`:a===`vertical`&&d()}n[o%i].ref.current?.focus()});return(0,A.jsx)(Bt,{scope:n,disabled:r,direction:i,orientation:a,children:(0,A.jsx)(M.Slot,{scope:n,children:(0,A.jsx)(Ae.div,{...o,"data-orientation":a,ref:s,onKeyDown:r?void 0:u})})})}),I=`AccordionItem`,[Ht,L]=N(I),Ut=k.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...i}=e,a=F(I,n),o=Ft(I,n),s=P(n),c=l(),u=r&&o.value.includes(r)||!1,d=a.disabled||e.disabled;return(0,A.jsx)(Ht,{scope:n,open:u,disabled:d,triggerId:c,children:(0,A.jsx)(wt,{"data-orientation":a.orientation,"data-state":Ot(u),...s,...i,ref:t,disabled:d,open:u,onOpenChange:e=>{e?o.onItemOpen(r):o.onItemClose(r)}})})}),Ut.displayName=I,Wt=`AccordionHeader`,Gt=k.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=F(j,n),a=L(Wt,n);return(0,A.jsx)(Ae.h3,{"data-orientation":i.orientation,"data-state":Ot(a.open),"data-disabled":a.disabled?``:void 0,...r,ref:t})}),Gt.displayName=Wt,Kt=`AccordionTrigger`,qt=k.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=F(j,n),a=L(Kt,n),o=Lt(Kt,n),s=P(n);return(0,A.jsx)(M.ItemSlot,{scope:n,children:(0,A.jsx)(Tt,{"aria-disabled":a.open&&!o.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...s,...r,ref:t})})}),qt.displayName=Kt,Jt=`AccordionContent`,Yt=k.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,i=F(j,n),a=L(Jt,n),o=P(n);return(0,A.jsx)(Et,{role:`region`,"aria-labelledby":a.triggerId,"data-orientation":i.orientation,...o,...r,ref:t,style:{"--radix-accordion-content-height":`var(--radix-collapsible-content-height)`,"--radix-accordion-content-width":`var(--radix-collapsible-content-width)`,...e.style}})}),Yt.displayName=Jt,Xt=Nt,Zt=Ut,Qt=Gt,$t=qt,en=Yt})))()}var R,nn,z,B,rn,V,H;function an(){return(an=t((()=>{tn(),ee(),te(),ne(),R=i(),nn=p({variants:{enclosed:{true:`rounded-lg border border-border-default-base-primary shadow-sm`}}}),z=({className:e,enclosed:t,...n})=>(0,R.jsx)(Xt,{"data-slot":`accordion-root`,className:m(nn({enclosed:t}),e),...n}),z.displayName=`Accordion.Root`,B=({className:e,...t})=>(0,R.jsx)(Zt,{"data-slot":`accordion-item`,className:m(`border-b border-border-default-base-primary last:border-b-0`,e),...t}),B.displayName=`Accordion.Item`,rn=({className:e,...t})=>(0,R.jsx)(Qt,{"data-slot":`accordion-header`,className:m(`flex`,e),...t}),rn.displayName=`Accordion.Header`,V=({className:e,children:t,asChild:n,...r})=>(0,R.jsx)(rn,{children:(0,R.jsx)($t,{"data-slot":`accordion-trigger`,asChild:n,className:m(`group flex flex-1 cursor-pointer items-center justify-between p-4 transition-colors hover:text-text-default-base-secondary`,`focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring-button-primary`,`data-disabled:cursor-not-allowed data-disabled:pointer-events-none data-disabled:text-text-default-disable-primary`,e),...r,children:n?t:(0,R.jsxs)(R.Fragment,{children:[t,(0,R.jsx)(h,{"aria-hidden":!0,className:`size-4 shrink-0 group-data-[state=open]:rotate-180 motion-safe:transition-transform motion-safe:duration-200`})]})})}),V.displayName=`Accordion.Trigger`,H=({className:e,children:t,...n})=>(0,R.jsx)(en,{"data-slot":`accordion-content`,className:m(`overflow-hidden px-4 text-sm`,`motion-safe:data-[state=open]:animate-accordion-down`,`motion-safe:data-[state=closed]:animate-accordion-up`,e),...n,children:(0,R.jsx)(`div`,{className:`pb-4`,children:t})}),H.displayName=`Accordion.Content`;try{z.displayName=`Accordion.Root`,z.__docgenInfo={description:'Stacked, collapsible sections built on Radix UI\'s Accordion, so keyboard nav\nand ARIA come for free. Compose `Root` with `Item`s, each holding a `Trigger`\nand `Content`. `type="single"` (optionally `collapsible`) opens one at a time;\n`type="multiple"` opens sections independently. `enclosed` renders the group\nas a bordered card.',displayName:`Accordion.Root`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}},enclosed:{defaultValue:null,description:``,name:`enclosed`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Root of a group of collapsible sections`,example:`\`\`\`tsx
import { Accordion } from '@agentero/design-system/accordion';

<Accordion.Root type="single" collapsible>
  <Accordion.Item value="coverages">
    <Accordion.Trigger>Coverages</Accordion.Trigger>
    <Accordion.Content>…</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
\`\`\``}}}catch{}try{B.displayName=`Accordion.Item`,B.__docgenInfo={description:``,displayName:`Accordion.Item`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{V.displayName=`Accordion.Trigger`,V.__docgenInfo={description:``,displayName:`Accordion.Trigger`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{H.displayName=`Accordion.Content`,H.__docgenInfo={description:``,displayName:`Accordion.Content`,filePath:`/home/runner/work/design-system/design-system/src/accordion/accordion.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-primitive/dist/index.d.mts`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var U;function on(){return(on=t((()=>{an(),U={Root:z,Item:B,Trigger:V,Content:H}})))()}var W,G,sn,cn,ln,K,q,J,Y,X,Z,Q,$,un;function dn(){return(dn=t((()=>{on(),ne(),W=i(),{expect:G,userEvent:sn,within:cn}=__STORYBOOK_MODULE_TEST__,ln={title:`Components/Accordion`,component:U.Root,tags:[`autodocs`],parameters:{docs:{description:{component:'Accordion is a compound built on Radix UI: `Root` holds the `Item`s, each\nwith a `Trigger` and a `Content`. `type="single"` (with optional\n`collapsible`) opens one section at a time; `type="multiple"` opens them\nindependently. `enclosed` renders the group as a bordered card.'}}}},K=[{value:`covered`,question:`What is covered?`,answer:`Your policy covers the dwelling, personal property, and liability up to the stated limits. Review your declarations page for exact figures.`},{value:`claim`,question:`How do I file a claim?`,answer:`Open a claim from the dashboard or call the carrier directly. You will need your policy number and the date of loss.`},{value:`payment`,question:`When is my payment due?`,answer:`Premiums are billed monthly on the policy anniversary day. You can switch to annual billing from the billing settings.`}],q={args:{type:`single`,collapsible:!0,enclosed:!1,disabled:!1},argTypes:{type:{control:`radio`,options:[`single`,`multiple`],description:`single = one item open at a time; multiple = items open independently`},collapsible:{control:`boolean`,description:`single only — allows closing the open item (reach an all-closed state)`},enclosed:{control:`boolean`,description:`Render the group as a bordered card`},disabled:{control:`boolean`,description:`Disable every item`}},render:e=>(0,W.jsx)(U.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,W.jsxs)(U.Item,{value:e,children:[(0,W.jsx)(U.Trigger,{children:t}),(0,W.jsx)(U.Content,{children:n})]},e))})},J={args:{type:`multiple`},render:()=>(0,W.jsx)(U.Root,{type:`multiple`,defaultValue:[`covered`,`payment`],children:K.map(({value:e,question:t,answer:n})=>(0,W.jsxs)(U.Item,{value:e,children:[(0,W.jsx)(U.Trigger,{children:t}),(0,W.jsx)(U.Content,{children:n})]},e))})},Y={args:{type:`multiple`},render:()=>(0,W.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,W.jsx)(U.Root,{type:`multiple`,defaultValue:[`covered`],children:K.map(({value:e,question:t,answer:n})=>(0,W.jsxs)(U.Item,{value:e,children:[(0,W.jsx)(U.Trigger,{children:t}),(0,W.jsx)(U.Content,{children:n})]},e))}),(0,W.jsx)(U.Root,{type:`multiple`,enclosed:!0,defaultValue:[`claim`],children:K.map(({value:e,question:t,answer:n})=>(0,W.jsxs)(U.Item,{value:e,children:[(0,W.jsx)(U.Trigger,{children:t}),(0,W.jsx)(U.Content,{children:n})]},e))})]})},X={args:{type:`single`,collapsible:!0},render:()=>(0,W.jsx)(U.Root,{type:`single`,collapsible:!0,defaultValue:`covered`,children:(0,W.jsxs)(U.Item,{value:`covered`,children:[(0,W.jsx)(U.Trigger,{asChild:!0,children:(0,W.jsxs)(`button`,{className:`group flex w-full items-center gap-2 py-4 text-left text-base font-semibold`,children:[(0,W.jsx)(h,{className:`size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180`}),`What is covered?`]})}),(0,W.jsx)(U.Content,{children:K[0].answer})]})})},Z={args:{type:`single`,collapsible:!0},render:e=>(0,W.jsx)(U.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,W.jsxs)(U.Item,{value:e,children:[(0,W.jsx)(U.Trigger,{children:(0,W.jsx)(`span`,{className:`text-lg font-bold`,children:t})}),(0,W.jsx)(U.Content,{children:n})]},e))})},Q={args:{type:`single`,collapsible:!0},render:e=>(0,W.jsx)(U.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,W.jsxs)(U.Item,{value:e,children:[(0,W.jsx)(U.Trigger,{children:t}),(0,W.jsx)(U.Content,{children:n})]},e))}),play:async({canvasElement:e})=>{let t=cn(e),n=t.getByRole(`button`,{name:/what is covered/i});await G(n).toHaveAttribute(`aria-expanded`,`false`),await sn.click(n),await G(n).toHaveAttribute(`aria-expanded`,`true`),await G(n).toHaveAttribute(`data-state`,`open`),await G(await t.findByText(/your policy covers the dwelling/i)).toBeVisible(),await sn.click(n),await G(n).toHaveAttribute(`aria-expanded`,`false`)}},$={args:{type:`single`,collapsible:!1,defaultValue:`covered`},render:e=>(0,W.jsx)(U.Root,{...e,children:K.map(({value:e,question:t,answer:n})=>(0,W.jsxs)(U.Item,{value:e,children:[(0,W.jsx)(U.Trigger,{children:t}),(0,W.jsx)(U.Content,{children:n})]},e))}),play:async({canvasElement:e})=>{let t=cn(e).getByRole(`button`,{name:/what is covered/i});await G(t).toHaveAttribute(`aria-expanded`,`true`),await sn.click(t),await G(t).toHaveAttribute(`aria-expanded`,`true`),await G(t).toHaveAttribute(`data-state`,`open`)}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    enclosed: false,
    disabled: false
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'single = one item open at a time; multiple = items open independently'
    },
    collapsible: {
      control: 'boolean',
      description: 'single only — allows closing the open item (reach an all-closed state)'
    },
    enclosed: {
      control: 'boolean',
      description: 'Render the group as a bordered card'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable every item'
    }
  },
  render: args => <Accordion.Root {...args}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>{question}</Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>
}`,...q.parameters?.docs?.source},description:{story:"Exclusive accordion: one item open at a time, `collapsible` lets it close.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: () => <Accordion.Root type="multiple" defaultValue={['covered', 'payment']}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>{question}</Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>
}`,...J.parameters?.docs?.source},description:{story:'`type="multiple"` lets several sections stay open at once.',...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: () => <div className="flex flex-col gap-8">
            <Accordion.Root type="multiple" defaultValue={['covered']}>
                {FAQS.map(({
        value,
        question,
        answer
      }) => <Accordion.Item key={value} value={value}>
                        <Accordion.Trigger>{question}</Accordion.Trigger>
                        <Accordion.Content>{answer}</Accordion.Content>
                    </Accordion.Item>)}
            </Accordion.Root>
            <Accordion.Root type="multiple" enclosed defaultValue={['claim']}>
                {FAQS.map(({
        value,
        question,
        answer
      }) => <Accordion.Item key={value} value={value}>
                        <Accordion.Trigger>{question}</Accordion.Trigger>
                        <Accordion.Content>{answer}</Accordion.Content>
                    </Accordion.Item>)}
            </Accordion.Root>
        </div>
}`,...Y.parameters?.docs?.source},description:{story:"`enclosed` wraps the group in a bordered card (default borderless on top).",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: () => <Accordion.Root type="single" collapsible defaultValue="covered">
            <Accordion.Item value="covered">
                <Accordion.Trigger asChild>
                    <button className="group flex w-full items-center gap-2 py-4 text-left text-base font-semibold">
                        <IconKeyboardArrowDown className="size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        What is covered?
                    </button>
                </Accordion.Trigger>
                <Accordion.Content>{FAQS[0].answer}</Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
}`,...X.parameters?.docs?.source},description:{story:"`asChild` delegates the trigger to a custom element; the built-in chevron is omitted.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: args => <Accordion.Root {...args}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>
                        <span className="text-lg font-bold">{question}</span>
                    </Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>
}`,...Z.parameters?.docs?.source},description:{story:"The consumer controls title weight/size via the children passed to `Trigger`.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true
  },
  render: args => <Accordion.Root {...args}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>{question}</Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /what is covered/i
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveAttribute('data-state', 'open');
    await expect(await canvas.findByText(/your policy covers the dwelling/i)).toBeVisible();
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  }
}`,...Q.parameters?.docs?.source},description:{story:"`collapsible` lets clicking the open item close it (reach an all-closed state).",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'covered'
  },
  render: args => <Accordion.Root {...args}>
            {FAQS.map(({
      value,
      question,
      answer
    }) => <Accordion.Item key={value} value={value}>
                    <Accordion.Trigger>{question}</Accordion.Trigger>
                    <Accordion.Content>{answer}</Accordion.Content>
                </Accordion.Item>)}
        </Accordion.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /what is covered/i
    });
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveAttribute('data-state', 'open');
  }
}`,...$.parameters?.docs?.source},description:{story:"Without `collapsible`, clicking the already-open item keeps it open.",...$.parameters?.docs?.description}}},un=[`Default`,`Multiple`,`Enclosed`,`CustomTrigger`,`StyledTitles`,`ExpandCollapse`,`NonCollapsible`]})))()}dn();export{X as CustomTrigger,q as Default,Y as Enclosed,Q as ExpandCollapse,J as Multiple,$ as NonCollapsible,Z as StyledTitles,un as __namedExportsOrder,ln as default};