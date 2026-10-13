import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-CXw-q4Fw.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./label-C8gjF60-.js";import{n as o,t as s}from"./field-3vyrVkPL.js";import{a as c,i as l,n as u,o as d,t as f}from"./input-D5T1dqkS.js";import{n as p,t as m}from"./input-group-CWBq5u89.js";import{n as h,t as g}from"./field-text-B89ppS11.js";import{i as _,n as v}from"./index.esm-CzdbSTAF.js";function ee(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function y(){}function b(e){var t,n=void 0;return function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];return t&&r.length===t.length&&r.every(function(e,n){return e===t[n]})?n:(t=r,n=e.apply(void 0,r),n)}}function te(e){return!!(e||``).match(/\d/)}function x(e){return e==null}function S(e){return typeof e==`number`&&isNaN(e)}function ne(e){return x(e)||S(e)||typeof e==`number`&&!isFinite(e)}function C(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,`\\$&`)}function w(e){switch(e){case`lakh`:return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case`wan`:return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}function T(e,t,n){var r=w(n),i=e.search(/[1-9]/);return i=i===-1?e.length:i,e.substring(0,i)+e.substring(i,e.length).replace(r,`$1`+t)}function E(e){var t=(0,P.useRef)(e);return t.current=e,(0,P.useRef)(function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return t.current.apply(t,e)}).current}function D(e,t){t===void 0&&(t=!0);var n=e[0]===`-`,r=n&&t;e=e.replace(`-`,``);var i=e.split(`.`);return{beforeDecimal:i[0],afterDecimal:i[1]||``,hasNegation:n,addNegation:r}}function re(e){if(!e)return e;var t=e[0]===`-`;t&&(e=e.substring(1,e.length));var n=e.split(`.`),r=n[0].replace(/^0+/,``)||`0`,i=n[1]||``;return(t?`-`:``)+r+(i?`.`+i:``)}function O(e,t,n){for(var r=``,i=n?`0`:``,a=0;a<=t-1;a++)r+=e[a]||i;return r}function k(e,t){return Array(t+1).join(e)}function ie(e){var t=e+``,n=t[0]===`-`?`-`:``;n&&(t=t.substring(1));var r=t.split(/[eE]/g),i=r[0],a=r[1];if(a=Number(a),!a)return n+i;i=i.replace(`.`,``);var o=1+a,s=i.length;return o<0?i=`0.`+k(`0`,Math.abs(o))+i:o>=s?i+=k(`0`,o-s):i=(i.substring(0,o)||`0`)+`.`+i.substring(o),n+i}function ae(e,t,n){if([``,`-`].indexOf(e)!==-1)return e;var r=(e.indexOf(`.`)!==-1||n)&&t,i=D(e),a=i.beforeDecimal,o=i.afterDecimal,s=i.hasNegation,c=parseFloat(`0.`+(o||`0`)),l=(o.length<=t?`0.`+o:c.toFixed(t)).split(`.`),u=a;a&&Number(l[0])&&(u=a.split(``).reverse().reduce(function(e,t,n){return e.length>n?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e},l[0]));var d=O(l[1]||``,t,n),f=s?`-`:``,p=r?`.`:``;return``+f+u+p+d}function A(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var n=e.createTextRange();return n.move(`character`,t),n.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function oe(e,t,n){return Math.min(Math.max(e,t),n)}function se(e){return Math.max(e.selectionStart,e.selectionEnd)}function ce(){return typeof navigator<`u`&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function j(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:``}}function le(e){var t=e.currentValue,n=e.formattedValue,r=e.currentValueIndex,i=e.formattedValueIndex;return t[r]===n[i]}function ue(e,t,n,r,i,a,o){o===void 0&&(o=le);var s=i.findIndex(function(e){return e}),c=e.slice(0,s);!t&&!n.startsWith(c)&&(t=c,n=c+n,r+=c.length);for(var l=n.length,u=e.length,d={},f=Array(l),p=0;p<l;p++){f[p]=-1;for(var m=0,h=u;m<h;m++)if(o({currentValue:n,lastValue:t,formattedValue:e,currentValueIndex:p,formattedValueIndex:m})&&d[m]!==!0){f[p]=m,d[m]=!0;break}}for(var g=r;g<l&&(f[g]===-1||!a(n[g]));)g++;var _=g===l||f[g]===-1?u:f[g];for(g=r-1;g>0&&f[g]===-1;)g--;var v=g===-1||f[g]===-1?0:f[g]+1;return v>_?_:r-v<_-r?v:_}function de(e,t,n,r){var i=e.length;if(t=oe(t,0,i),r===`left`){for(;t>=0&&!n[t];)t--;t===-1&&(t=n.indexOf(!0))}else{for(;t<=i&&!n[t];)t++;t>i&&(t=n.lastIndexOf(!0))}return t===-1&&(t=i),t}function fe(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),n=0,r=t.length;n<r;n++)t[n]=!!(te(e[n])||te(e[n-1]));return t}function pe(e,t,n,r,i,a){a===void 0&&(a=y);var o=E(function(e,t){var n,a;return ne(e)?(a=``,n=``):typeof e==`number`||t?(a=typeof e==`number`?ie(e):e,n=r(a)):(a=i(e,void 0),n=r(a)),{formattedValue:n,numAsString:a}}),s=(0,P.useState)(function(){return o(x(e)?t:e,n)}),c=s[0],l=s[1],u=E(function(e,t){e.formattedValue!==c.formattedValue&&l({formattedValue:e.formattedValue,numAsString:e.value}),a(e,t)}),d=e,f=n;x(e)&&(d=c.numAsString,f=!0);var p=o(d,f);return(0,P.useMemo)(function(){l(p)},[p.formattedValue]),(0,P.useEffect)(function(){if(!x(t)&&x(e)&&c.formattedValue!==``){var n=parseFloat(c.numAsString);u({formattedValue:c.formattedValue,value:c.numAsString,floatValue:isNaN(n)?void 0:n},{event:void 0,source:Te.props})}},[]),[c,u]}function me(e){return e.replace(/[^0-9]/g,``)}function he(e){return e}function ge(e){var t=e.type;t===void 0&&(t=`text`);var n=e.displayType;n===void 0&&(n=`input`);var r=e.customInput,i=e.renderText,a=e.getInputRef,o=e.format;o===void 0&&(o=he);var s=e.removeFormatting;s===void 0&&(s=me);var c=e.defaultValue,l=e.valueIsNumericString,u=e.onValueChange,d=e.isAllowed,f=e.onChange;f===void 0&&(f=y);var p=e.onKeyDown;p===void 0&&(p=y);var m=e.onMouseUp;m===void 0&&(m=y);var h=e.onFocus;h===void 0&&(h=y);var g=e.onBlur;g===void 0&&(g=y);var _=e.value,v=e.getCaretBoundary;v===void 0&&(v=fe);var b=e.isValidInputCharacter;b===void 0&&(b=te);var x=e.isCharacterSame,S=ee(e,[`type`,`displayType`,`customInput`,`renderText`,`getInputRef`,`format`,`removeFormatting`,`defaultValue`,`valueIsNumericString`,`onValueChange`,`isAllowed`,`onChange`,`onKeyDown`,`onMouseUp`,`onFocus`,`onBlur`,`value`,`getCaretBoundary`,`isValidInputCharacter`,`isCharacterSame`]),ne=pe(_,c,!!l,o,s,u),C=ne[0],w=C.formattedValue,T=C.numAsString,E=ne[1],D=(0,P.useRef)(),re=(0,P.useRef)({formattedValue:w,numAsString:T}),O=function(e,t){re.current={formattedValue:e.formattedValue,numAsString:e.value},E(e,t)},k=(0,P.useState)(!1),ie=k[0],ae=k[1],oe=(0,P.useRef)(null),j=(0,P.useRef)({setCaretTimeout:null,focusTimeout:null});(0,P.useEffect)(function(){return ae(!0),function(){clearTimeout(j.current.setCaretTimeout),clearTimeout(j.current.focusTimeout)}},[]);var le=o,ge=function(e,t){var n=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(n)?void 0:n}},M=function(e,t,n){(e.selectionStart!==0||e.selectionEnd!==e.value.length)&&(A(e,t),j.current.setCaretTimeout=setTimeout(function(){e.value===n&&e.selectionStart!==t&&A(e,t)},0))},N=function(e,t,n){return de(e,t,v(e),n)},_e=function(e,t,n){var r=v(t),i=ue(t,w,e,n,r,b,x);return i=de(t,i,r),i},ve=function(e){var t=e.formattedValue;t===void 0&&(t=``);var n=e.input,r=e.source,i=e.event,a=e.numAsString,o;if(n){var s=e.inputValue||n.value,c=se(n);n.value=t,o=_e(s,t,c),o!==void 0&&M(n,o,t)}t!==w&&O(ge(t,a),{event:i,source:r})};(0,P.useEffect)(function(){var e=re.current,t=e.formattedValue,n=e.numAsString;(w!==t||T!==n)&&O(ge(w,T),{event:void 0,source:Te.props})},[w,T]);var ye=oe.current?se(oe.current):void 0;(typeof window<`u`?P.useLayoutEffect:P.useEffect)(function(){var e=oe.current;if(w!==re.current.formattedValue&&e){var t=_e(re.current.formattedValue,w,ye);e.value=w,M(e,t,w)}},[w]);var be=function(e,t,n){var r=t.target,i=D.current?De(D.current,r.selectionEnd):Ee(w,e),a=Object.assign(Object.assign({},i),{lastValue:w}),o=s(e,a),c=le(o);if(o=s(c,void 0),d&&!d(ge(c,o))){var l=t.target,u=_e(e,w,se(l));return l.value=w,M(l,u,w),!1}return ve({formattedValue:c,numAsString:o,inputValue:e,event:t,source:n,input:t.target}),!0},xe=function(e,t){t===void 0&&(t=0),D.current={selectionStart:e.selectionStart,selectionEnd:e.selectionEnd+t}},Se=function(e){var t=e.target.value;be(t,e,Te.event)&&f(e),D.current=void 0},Ce=function(e){var t=e.target,n=e.key,r=t.selectionStart,i=t.selectionEnd,a=t.value;a===void 0&&(a=``);var o;n===`ArrowLeft`||n===`Backspace`?o=Math.max(r-1,0):n===`ArrowRight`?o=Math.min(r+1,a.length):n===`Delete`&&(o=r);var s=0;n===`Delete`&&r===i&&(s=1);var c=n===`ArrowLeft`||n===`ArrowRight`;if(o===void 0||r!==i&&!c){p(e),xe(t,s);return}var l=o;c?(l=N(a,o,n===`ArrowLeft`?`left`:`right`),l!==o&&e.preventDefault()):n===`Delete`&&!b(a[o])?l=N(a,o,`right`):n===`Backspace`&&!b(a[o])&&(l=N(a,o,`left`)),l!==o&&M(t,l,a),p(e),xe(t,s)},we=function(e){var t=e.target,n=function(){var e=t.selectionStart,n=t.selectionEnd,r=t.value;if(r===void 0&&(r=``),e===n){var i=N(r,e);i!==e&&M(t,i,r)}};n(),requestAnimationFrame(function(){n()}),m(e),xe(t)},Oe=function(e){e.persist&&e.persist();var t=e.target,n=e.currentTarget;oe.current=t,j.current.focusTimeout=setTimeout(function(){var r=t.selectionStart,i=t.selectionEnd,a=t.value;a===void 0&&(a=``);var o=N(a,r);o!==r&&(r!==0||i!==a.length)&&M(t,o,a),h(Object.assign(Object.assign({},e),{currentTarget:n}))},0)},ke=function(e){oe.current=null,clearTimeout(j.current.focusTimeout),clearTimeout(j.current.setCaretTimeout),g(e)},Ae=ie&&ce()?`numeric`:void 0,F=Object.assign({inputMode:Ae},S,{type:t,value:w,onChange:Se,onKeyDown:Ce,onMouseUp:we,onFocus:Oe,onBlur:ke});if(n===`text`)return i?P.createElement(P.Fragment,null,i(w,S)||null):P.createElement(`span`,Object.assign({},S,{ref:a}),w);if(r){var je=r;return P.createElement(je,Object.assign({},F,{ref:a}))}return P.createElement(`input`,Object.assign({},F,{ref:a}))}function M(e,t){var n=t.decimalScale,r=t.fixedDecimalScale,i=t.prefix;i===void 0&&(i=``);var a=t.suffix;a===void 0&&(a=``);var o=t.allowNegative,s=t.thousandsGroupStyle;if(s===void 0&&(s=`thousand`),e===``||e===`-`)return e;var c=N(t),l=c.thousandSeparator,u=c.decimalSeparator,d=n!==0&&e.indexOf(`.`)!==-1||n&&r,f=D(e,o),p=f.beforeDecimal,m=f.afterDecimal,h=f.addNegation;return n!==void 0&&(m=O(m,n,!!r)),l&&(p=T(p,l,s)),i&&(p=i+p),a&&(m+=a),h&&(p=`-`+p),e=p+(d&&u||``)+m,e}function N(e){var t=e.decimalSeparator;t===void 0&&(t=`.`);var n=e.thousandSeparator,r=e.allowedDecimalSeparators;return n===!0&&(n=`,`),r||=[t,`.`],{decimalSeparator:t,thousandSeparator:n,allowedDecimalSeparators:r}}function _e(e,t){e===void 0&&(e=``);var n=RegExp(`(-)`),r=RegExp(`(-)(.)*(-)`),i=n.test(e),a=r.test(e);return e=e.replace(/-/g,``),i&&!a&&t&&(e=`-`+e),e}function ve(e,t){return RegExp(`(^-)|[0-9]|`+C(e),t?`g`:void 0)}function ye(e,t,n){return e===``||!t?.match(/\d/)&&!n?.match(/\d/)&&typeof e==`string`&&!isNaN(Number(e))}function be(e,t,n){var r;t===void 0&&(t=j(e));var i=n.allowNegative,a=n.prefix;a===void 0&&(a=``);var o=n.suffix;o===void 0&&(o=``);var s=n.decimalScale,c=t.from,l=t.to,u=l.start,d=l.end,f=N(n),p=f.allowedDecimalSeparators,m=f.decimalSeparator,h=e[d]===m;if(te(e)&&(e===a||e===o)&&t.lastValue===``)return e;if(d-u===1&&p.indexOf(e[u])!==-1){var g=s===0?``:m;e=e.substring(0,u)+g+e.substring(u+1,e.length)}var _=function(e,t,n){var r=!1,i=!1;a.startsWith(`-`)?r=!1:e.startsWith(`--`)?(r=!1,i=!0):o.startsWith(`-`)&&e.length===o.length?r=!1:e[0]===`-`&&(r=!0);var s=+!!r;return i&&(s=2),s&&(e=e.substring(s),t-=s,n-=s),{value:e,start:t,end:n,hasNegation:r}},v=_(e,u,d),ee=v.hasNegation;r=v,e=r.value,u=r.start,d=r.end;var y=_(t.lastValue,c.start,c.end),b=y.start,x=y.end,S=y.value,ne=e.substring(u,d);e.length&&S.length&&(b>S.length-o.length||x<a.length)&&!(ne&&o.startsWith(ne))&&(e=S);var w=0;e.startsWith(a)?w+=a.length:u<a.length&&(w=u),e=e.substring(w),d-=w;var T=e.length,E=e.length-o.length;e.endsWith(o)?T=E:(d>E||d>e.length-o.length)&&(T=d),e=e.substring(0,T),e=_e(ee?`-`+e:e,i),e=(e.match(ve(m,!0))||[]).join(``);var re=e.indexOf(m);e=e.replace(new RegExp(C(m),`g`),function(e,t){return t===re?`.`:``});var O=D(e,i),k=O.beforeDecimal,ie=O.afterDecimal,ae=O.addNegation;return l.end-l.start<c.end-c.start&&k===``&&h&&!parseFloat(ie)&&(e=ae?`-`:``),e}function xe(e,t){var n=t.prefix;n===void 0&&(n=``);var r=t.suffix;r===void 0&&(r=``);var i=Array.from({length:e.length+1}).map(function(){return!0}),a=e[0]===`-`;i.fill(!1,0,Math.min(n.length+ +!!a,e.length));var o=e.length;return i.fill(!1,o-r.length+1,o+1),i}function Se(e){var t=N(e),n=t.thousandSeparator,r=t.decimalSeparator,i=e.prefix;i===void 0&&(i=``);var a=e.allowNegative;if(a===void 0&&(a=!0),n===r)throw Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+n+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+r+` (default value for decimalSeparator is .)
     `);return i.startsWith(`-`)&&a&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+i+`
      allowNegative: `+a+`
    `),a=!1),Object.assign(Object.assign({},e),{allowNegative:a})}function Ce(e){e=Se(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,n=e.allowNegative,r=e.allowLeadingZeros,i=e.onKeyDown;i===void 0&&(i=y);var a=e.onBlur;a===void 0&&(a=y);var o=e.thousandSeparator,s=e.decimalScale,c=e.fixedDecimalScale,l=e.prefix;l===void 0&&(l=``);var u=e.defaultValue,d=e.value,f=e.valueIsNumericString,p=e.onValueChange,m=ee(e,[`decimalSeparator`,`allowedDecimalSeparators`,`thousandsGroupStyle`,`suffix`,`allowNegative`,`allowLeadingZeros`,`onKeyDown`,`onBlur`,`thousandSeparator`,`decimalScale`,`fixedDecimalScale`,`prefix`,`defaultValue`,`value`,`valueIsNumericString`,`onValueChange`]),h=N(e),g=h.decimalSeparator,_=h.allowedDecimalSeparators,v=function(t){return M(t,e)},b=function(t,n){return be(t,n,e)},S=x(d)?u:d,C=f??ye(S,l,t);x(d)?x(u)||(C||=typeof u==`number`):C||=typeof d==`number`;var w=function(e){return ne(e)?e:(typeof e==`number`&&(e=ie(e)),C&&typeof s==`number`?ae(e,s,!!c):e)},T=pe(w(d),w(u),!!C,v,b,p),E=T[0],D=E.numAsString,O=E.formattedValue,k=T[1];return Object.assign(Object.assign({},m),{value:O,valueIsNumericString:!1,isValidInputCharacter:function(e){return e===g||te(e)},isCharacterSame:function(e){var t=e.currentValue,n=e.lastValue,r=e.formattedValue,i=e.currentValueIndex,a=e.formattedValueIndex,o=t[i],u=r[a],f=Ee(n,t).to,p=function(e){return b(e).indexOf(`.`)+l.length};return d===0&&c&&s&&t[f.start]===g&&p(t)<i&&p(r)>a?!1:i>=f.start&&i<f.end&&_&&_.includes(o)&&u===g?!0:o===u},onValueChange:k,format:v,removeFormatting:b,getCaretBoundary:function(t){return xe(t,e)},onKeyDown:function(e){var t=e.target,r=e.key,a=t.selectionStart,u=t.selectionEnd,d=t.value;if(d===void 0&&(d=``),(r===`Backspace`||r===`Delete`)&&u<l.length&&d!==`-`){e.preventDefault();return}if(a!==u){i(e);return}r===`Backspace`&&d[0]===`-`&&a===l.length+1&&n&&A(t,1),s&&c&&(r===`Backspace`&&d[a-1]===g?(A(t,a-1),e.preventDefault()):r===`Delete`&&d[a]===g&&e.preventDefault()),_?.includes(r)&&d[a]===g&&A(t,a+1);var f=o===!0?`,`:o;r===`Backspace`&&d[a-1]===f&&A(t,a-1),r===`Delete`&&d[a]===f&&A(t,a+1),i(e)},onBlur:function(t){var n=D;n.match(/\d/g)||(n=``),r||(n=re(n)),c&&s&&(n=ae(n,s,c)),n!==D&&k({formattedValue:M(n,e),value:n,floatValue:parseFloat(n)},{event:t,source:Te.event}),a(t)}})}function we(e){var t=Ce(e);return P.createElement(ge,Object.assign({},t))}var P,Te,Ee,De;function Oe(){return(Oe=t((()=>{P=e(n()),(function(e){e.event=`event`,e.props=`prop`})(Te||={}),Ee=b(function(e,t){for(var n=0,r=0,i=e.length,a=t.length;e[n]===t[n]&&n<i;)n++;for(;e[i-1-r]===t[a-1-r]&&a-r>n&&i-r>n;)r++;return{from:{start:n,end:i-r},to:{start:n,end:a-r}}}),De=function(e,t){var n=Math.min(e.selectionStart,t);return{from:{start:n,end:e.selectionEnd},to:{start:n,end:t}}}})))()}var ke,Ae,F;function je(){return(je=t((()=>{Oe(),u(),c(),ke=r(),Ae=e=>(0,ke.jsx)(l,{value:null,children:(0,ke.jsx)(f,{"data-slot":`input-number`,...e})}),F=e=>{let{ref:t,maxNumber:n,thousandSeparator:r=!1,allowLeadingZeros:i=!0,onChange:a,...o}=d(e);return(0,ke.jsx)(we,{...o,customInput:Ae,getInputRef:t,thousandSeparator:r,allowLeadingZeros:i,allowNegative:!1,onChange:a,onValueChange:({formattedValue:e},{event:t,source:n})=>{if(n!==`event`||t?.type!==`blur`)return;let r=t.target;r.value=e,a?.(Object.assign(Object.create(t),{type:`change`}))},isAllowed:({floatValue:e})=>n===void 0||e===void 0||e<=n})},F.displayName=`InputNumber`;try{F.displayName=`InputNumber`,F.__docgenInfo={description:'InputNumber is a text field that only takes digits and a decimal point and\nformats them as the user types: a thousands separator when\n`thousandSeparator` is set, leading zeros kept unless `allowLeadingZeros` is\noff, no sign, no decimal rounding.\nAnything that is not a digit or the decimal point is ignored, and\n`maxNumber` drops any edit that would exceed it. `onChange` fires with the\nformatted text in `event.target.value` (`"1,234"`, not `1234`), which is\nwhat a form library stores; parse it where the number is consumed.\n\nIt is an [Input](?path=/docs/components-input--docs) driven by\n`react-number-format`, so it keeps the caret in place while it reformats\nand takes its wiring from a surrounding `FieldText` as a plain `Input`\ndoes. Every standard `<input>` attribute is accepted and forwarded, such as\n`placeholder`, `required`, `maxLength` or `aria-invalid`; `type` is limited\nto `text`, `tel` and `password`, and `value` and `defaultValue` also take a\nnumber or `null`. The invalid state comes from `aria-invalid`, which paints\nthe destructive border. Place it inside an\n[InputGroup](?path=/docs/components-inputgroup--docs) to show a currency or\nunit affix.\n\nDo not use it for a phone number, which is formatted by `InputTel`, nor for\nfree text with some digits in it, which is a plain `Input`. It is not a\n`type="number"` input on purpose: that one drops leading zeros and cannot\nshow separators, which identifiers and amounts both need.',displayName:`InputNumber`,filePath:`/home/runner/work/design-system/design-system/src/input-number/input-number.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/input/input.tsx`,name:`TypeLiteral`}],description:"Control height. Defaults to `'md'`.\n- `sm` (32px) — dense layouts where vertical space is tight.\n- `md` (40px) — standard form density.\n- `lg` (48px) — low-density forms and larger touch targets. Also raises\n  the text to `base` and the corner radius to `lg`.",name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`InputSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},maxNumber:{defaultValue:null,declarations:[{fileName:`design-system/src/input-number/input-number.tsx`,name:`TypeLiteral`}],description:`Highest value the field accepts. A keystroke or paste that would take
the number above it is dropped before it reaches the field, so \`onChange\`
is not called for it. No limit by default.`,name:`maxNumber`,required:!1,tags:{},type:{name:`number`}},thousandSeparator:{defaultValue:null,declarations:[{fileName:`design-system/src/input-number/input-number.tsx`,name:`TypeLiteral`}],description:"Groups the integer part in thousands with a comma as the user types\n(`1,234,567`). The separators are part of `event.target.value`. Defaults\nto `false`.",name:`thousandSeparator`,required:!1,tags:{},type:{name:`boolean`}},allowLeadingZeros:{defaultValue:null,declarations:[{fileName:`design-system/src/input-number/input-number.tsx`,name:`TypeLiteral`}],description:"Keeps zeros typed in front of the number (`007`), which an identifier\nsuch as an NPN or a ZIP code needs. Set it to `false` for an amount, so\n`007` becomes `7` once the field loses focus, and `onChange` fires with\nthe trimmed value. Defaults to `true`.",name:`allowLeadingZeros`,required:!1,tags:{},type:{name:`boolean`}},type:{defaultValue:null,declarations:[{fileName:`design-system/src/input-number/input-number.tsx`,name:`TypeLiteral`}],description:"The underlying `<input>` type. Defaults to `'text'`.\n- `text` — the general case.\n- `tel` — brings up the numeric keypad on phones, for codes and\n  identifiers that are digits only.\n- `password` — masks the digits, for a PIN.",name:`type`,required:!1,tags:{},type:{name:`enum`,raw:`"text" | "tel" | "password"`,value:[{value:`"text"`},{value:`"tel"`},{value:`"password"`}]}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/input-number/input-number.tsx`,name:`TypeLiteral`}],description:"The number to show, as a number or as a string of digits. It is displayed\nformatted according to `thousandSeparator`. `null` and `''` both clear the\nfield.",name:`value`,required:!1,tags:{},type:{name:`string | number | null`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/input-number/input-number.tsx`,name:`TypeLiteral`}],description:"Initial value of an uncontrolled field, in the same forms as `value`.",name:`defaultValue`,required:!1,tags:{},type:{name:`string | number | null`}}},tags:{summary:`Numeric input formatting as you type, built on react-number-format`,dataAttribute:`{string} data-slot - Always set to "input-number"`,example:`<FieldText>
  <Label>Annual premium</Label>
  <InputNumber name="premium" thousandSeparator allowLeadingZeros={false} />
</FieldText>`}}}catch{}})))()}var Me,I,L,Ne,R,z,Pe,B,Fe,V,H,U,W,G,K,q,J,Y,X,Z,Ie,Q,Le,Re,$,ze;function Be(){return(Be=t((()=>{Me=n(),v(),o(),h(),c(),p(),i(),je(),I=r(),{expect:L,fn:Ne,userEvent:R,within:z}=__STORYBOOK_MODULE_TEST__,Pe={title:`Components/InputNumber`,component:F,tags:[`autodocs`],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},type:{control:`radio`,options:[`text`,`tel`,`password`]},thousandSeparator:{control:`boolean`},allowLeadingZeros:{control:`boolean`},maxNumber:{control:`number`},placeholder:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},"aria-invalid":{control:`boolean`}},args:{"aria-label":`Premium`,onChange:Ne(e=>e.target.value)},decorators:[e=>(0,I.jsx)(`div`,{style:{maxWidth:`24rem`},children:(0,I.jsx)(e,{})})],parameters:{docs:{description:{component:"InputNumber is a text field that only takes digits and a decimal point and\nformats them as the user types: thousands separators on request, leading\nzeros kept unless turned off, no sign. `onChange` fires with the formatted text in\n`event.target.value`. It is an `Input` driven by `react-number-format`, so\nit takes its label, messages and states from a surrounding `FieldText`."}}}},B=e=>e.mock.results.at(-1)?.value,Fe=(0,Me.createRef)(),V={render:e=>(0,I.jsx)(F,{...e,ref:Fe}),play:async({args:e,canvasElement:t})=>{let n=z(t).getByRole(`textbox`,{name:`Premium`});await R.type(n,`12abc34-`),await L(n).toHaveValue(`1234`),await L(B(e.onChange)).toBe(`1234`),await L(Fe.current).toBe(n)}},H={args:{type:`tel`,"aria-label":`NPN`},play:async({canvasElement:e})=>{let t=z(e).getByRole(`textbox`,{name:`NPN`});await L(t).toHaveAttribute(`type`,`tel`),await R.type(t,`2a9`),await L(t).toHaveValue(`29`)}},U={args:{thousandSeparator:!0},play:async({args:e,canvasElement:t})=>{let n=z(t).getByRole(`textbox`,{name:`Premium`});await R.type(n,`1234567`),await L(n).toHaveValue(`1,234,567`),await L(B(e.onChange)).toBe(`1,234,567`)}},W={args:{maxNumber:100,"aria-label":`Commission rate`},play:async({args:e,canvasElement:t})=>{let n=z(t).getByRole(`textbox`,{name:`Commission rate`});await R.type(n,`1000`),await L(n).toHaveValue(`100`),await L(B(e.onChange)).toBe(`100`),await L(e.onChange.mock.calls).toHaveLength(3)}},G={render:e=>(0,I.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,I.jsx)(F,{...e,"aria-label":`ZIP code`}),(0,I.jsx)(F,{...e,"aria-label":`Amount`,allowLeadingZeros:!1})]}),play:async({args:e,canvasElement:t})=>{let n=z(t),r=n.getByRole(`textbox`,{name:`ZIP code`}),i=n.getByRole(`textbox`,{name:`Amount`});await R.type(r,`007`),await R.type(i,`007`),await R.tab(),await L(r).toHaveValue(`007`),await L(i).toHaveValue(`7`),await L(B(e.onChange)).toBe(`7`)}},K={args:{thousandSeparator:!0},render:function(e){let[t,n]=(0,Me.useState)(1234);return(0,I.jsx)(F,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})},play:async({canvasElement:e})=>{let t=z(e).getByRole(`textbox`,{name:`Premium`});await L(t).toHaveValue(`1,234`),await R.type(t,`5`),await L(t).toHaveValue(`12,345`)}},q={args:{thousandSeparator:!0,allowLeadingZeros:!1,placeholder:`0`},render:e=>(0,I.jsxs)(m.Root,{children:[(0,I.jsx)(m.Text,{children:`$`}),(0,I.jsx)(F,{...e})]}),play:async({canvasElement:e})=>{let t=z(e),n=t.getByRole(`textbox`,{name:`Premium`});await R.type(n,`2500`),await L(n).toHaveValue(`2,500`),await L(t.getByText(`$`)).toBeInTheDocument()}},J={render:()=>(0,I.jsxs)(`div`,{style:{display:`grid`,gap:`1.5rem`},children:[(0,I.jsxs)(g,{required:!0,children:[(0,I.jsx)(a,{children:`NPN`}),(0,I.jsx)(F,{type:`tel`}),(0,I.jsx)(s.Description,{children:`The 7 to 10 digit National Producer Number.`})]}),(0,I.jsxs)(g,{invalid:!0,children:[(0,I.jsx)(a,{children:`Years in business`}),(0,I.jsx)(F,{defaultValue:150}),(0,I.jsx)(s.Error,{errors:[{message:`Enter at most 100 years.`}]})]}),(0,I.jsxs)(g,{disabled:!0,children:[(0,I.jsx)(a,{children:`Agency code`}),(0,I.jsx)(F,{defaultValue:`00412`})]})]}),play:async({canvasElement:e})=>{let t=z(e),n=t.getByLabelText(/^NPN/),r=t.getByLabelText(`Years in business`),i=t.getByLabelText(`Agency code`);await L(n).toBeRequired(),await L(n).toHaveAccessibleDescription(`The 7 to 10 digit National Producer Number.`),await L(r).toHaveAttribute(`aria-invalid`,`true`),await L(r).toHaveAccessibleDescription(`Enter at most 100 years.`),await L(getComputedStyle(r).borderColor).not.toBe(getComputedStyle(n).borderColor),await L(i).toBeDisabled(),await L(i).toHaveValue(`00412`)}},Y={args:{disabled:!0,thousandSeparator:!0,defaultValue:12500},play:async({canvasElement:e})=>{let t=z(e).getByRole(`textbox`,{name:`Premium`});await L(t).toBeDisabled(),await L(t).toHaveValue(`12,500`)}},X={args:{"aria-invalid":!0,defaultValue:0},play:async({canvasElement:e})=>{let t=z(e).getByRole(`textbox`,{name:`Premium`});await L(t).toHaveAttribute(`aria-invalid`,`true`)}},Z={args:{thousandSeparator:!0,defaultValue:1234},render:e=>(0,I.jsxs)(`div`,{style:{display:`grid`,gap:`1rem`},children:[(0,I.jsx)(F,{...e,size:`sm`,"aria-label":`Small`}),(0,I.jsx)(F,{...e,size:`md`,"aria-label":`Medium`}),(0,I.jsx)(F,{...e,size:`lg`,"aria-label":`Large`})]}),play:async({canvasElement:e})=>{let t=z(e).getAllByRole(`textbox`).map(e=>e.getBoundingClientRect().height);await L(t).toEqual([32,40,48])}},Q={tags:[`!manifest`],render:function(e){let{register:t,getValues:n}=_({defaultValues:{npn:``}});return Ie=n,(0,I.jsx)(F,{"aria-label":e[`aria-label`],thousandSeparator:!0,...t(`npn`)})},play:async({canvasElement:e})=>{let t=z(e).getByRole(`textbox`);await R.type(t,`1234`),await L(t).toHaveValue(`1,234`),await L(Ie().npn).toBe(`1,234`)}},Le=(0,Me.createRef)(),Re=Ne(e=>e.target.value),$={tags:[`!manifest`],args:{thousandSeparator:!0},render:e=>(0,I.jsx)(l,{value:{onChange:Re,ref:Le},children:(0,I.jsx)(F,{...e,ref:Fe})}),play:async({args:e,canvasElement:t})=>{Re.mockClear();let n=z(t).getByRole(`textbox`,{name:`Premium`});await R.type(n,`1234`),await L(n).toHaveValue(`1,234`),await L(B(Re)).toBe(`1,234`),await L(Re.mock.calls).toHaveLength(4),await L(B(e.onChange)).toBe(`1,234`),await L(Le.current).toBe(n),await L(Fe.current).toBe(n)}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <InputNumber {...args} ref={inputRef} />,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await userEvent.type(input, '12abc34-');
    await expect(input).toHaveValue('1234');
    await expect(lastValue(args.onChange)).toBe('1234');
    await expect(inputRef.current).toBe(input);
  }
}`,...V.parameters?.docs?.source},description:{story:"Only digits and a decimal point make it into the field: letters and a minus\nsign are ignored as they are typed. `onChange` reports the text as it is shown, and the `ref`\npoints at the `<input>` element.\n\n@summary Numeric field that ignores letters and signs",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tel',
    'aria-label': 'NPN'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'NPN'
    });
    await expect(input).toHaveAttribute('type', 'tel');
    await userEvent.type(input, '2a9');
    await expect(input).toHaveValue('29');
  }
}`,...H.parameters?.docs?.source},description:{story:`\`type="tel"\` brings up the numeric keypad on phones. The field still
formats and filters the same way; only the underlying input type changes.

@summary Numeric keypad on phones through the tel input type`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    thousandSeparator: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await userEvent.type(input, '1234567');
    await expect(input).toHaveValue('1,234,567');
    await expect(lastValue(args.onChange)).toBe('1,234,567');
  }
}`,...U.parameters?.docs?.source},description:{story:"With `thousandSeparator` the integer part is grouped with commas as the\nuser types, and the commas are part of what `onChange` reports.\n\n@summary Thousands grouped with commas as the user types",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    maxNumber: 100,
    'aria-label': 'Commission rate'
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Commission rate'
    });
    await userEvent.type(input, '1000');
    await expect(input).toHaveValue('100');
    await expect(lastValue(args.onChange)).toBe('100');
    await expect((args.onChange as ReturnType<typeof fn>).mock.calls).toHaveLength(3);
  }
}`,...W.parameters?.docs?.source},description:{story:`\`maxNumber\` caps the value: a keystroke that would push the number above
it is dropped, so the field keeps its previous value and \`onChange\` is not
called for it.

@summary Keystrokes that would exceed a maximum are dropped`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <InputNumber {...args} aria-label="ZIP code" />
            <InputNumber {...args} aria-label="Amount" allowLeadingZeros={false} />
        </div>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const zip = canvas.getByRole('textbox', {
      name: 'ZIP code'
    });
    const amount = canvas.getByRole('textbox', {
      name: 'Amount'
    });
    await userEvent.type(zip, '007');
    await userEvent.type(amount, '007');
    await userEvent.tab();
    await expect(zip).toHaveValue('007');
    await expect(amount).toHaveValue('7');
    await expect(lastValue(args.onChange)).toBe('7');
  }
}`,...G.parameters?.docs?.source},description:{story:`Leading zeros are kept by default, as an NPN or a ZIP code needs. With
\`allowLeadingZeros\` off they are dropped once the field loses focus, which
is what an amount wants, and \`onChange\` reports the trimmed value.

@summary Leading zeros kept by default, dropped on blur when turned off`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    thousandSeparator: true
  },
  render: function Render(args) {
    const [premium, setPremium] = useState<number | string>(1234);
    return <InputNumber {...args} value={premium} onChange={event => {
      setPremium(event.target.value);
      args.onChange?.(event);
    }} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await expect(input).toHaveValue('1,234');
    await userEvent.type(input, '5');
    await expect(input).toHaveValue('12,345');
  }
}`,...K.parameters?.docs?.source},description:{story:"A controlled field takes `value` as a number and shows it formatted. The\nstate keeps what `onChange` reports, so it holds the formatted text.\n\n@summary Controlled field showing a numeric value formatted",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    thousandSeparator: true,
    allowLeadingZeros: false,
    placeholder: '0'
  },
  render: args => <InputGroup.Root>
            <InputGroup.Text>$</InputGroup.Text>
            <InputNumber {...args} />
        </InputGroup.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await userEvent.type(input, '2500');
    await expect(input).toHaveValue('2,500');
    await expect(canvas.getByText('$')).toBeInTheDocument();
  }
}`,...q.parameters?.docs?.source},description:{story:`Inside an \`InputGroup\` the field sits behind a currency affix and the
frame takes its focus, disabled and invalid states from the input.

@summary Amount with a currency prefix inside an input group`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1.5rem'
  }}>
            <FieldText required>
                <Label>NPN</Label>
                <InputNumber type="tel" />
                <Field.Description>The 7 to 10 digit National Producer Number.</Field.Description>
            </FieldText>
            <FieldText invalid>
                <Label>Years in business</Label>
                <InputNumber defaultValue={150} />
                <Field.Error errors={[{
        message: 'Enter at most 100 years.'
      }]} />
            </FieldText>
            <FieldText disabled>
                <Label>Agency code</Label>
                <InputNumber defaultValue="00412" />
            </FieldText>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const npn = canvas.getByLabelText(/^NPN/);
    const years = canvas.getByLabelText('Years in business');
    const code = canvas.getByLabelText('Agency code');
    await expect(npn).toBeRequired();
    await expect(npn).toHaveAccessibleDescription('The 7 to 10 digit National Producer Number.');
    await expect(years).toHaveAttribute('aria-invalid', 'true');
    await expect(years).toHaveAccessibleDescription('Enter at most 100 years.');
    await expect(getComputedStyle(years).borderColor).not.toBe(getComputedStyle(npn).borderColor);
    await expect(code).toBeDisabled();
    await expect(code).toHaveValue('00412');
  }
}`,...J.parameters?.docs?.source},description:{story:"Inside a `FieldText` the input takes its label, description and states from\nthe field. `invalid` on the field sets `aria-invalid`, which paints the\ndestructive border, and `disabled` reaches the input the same way.\n\n@summary Label, messages and states reaching the input from a FieldText",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    thousandSeparator: true,
    defaultValue: 12500
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue('12,500');
  }
}`,...Y.parameters?.docs?.source},description:{story:`A disabled field keeps its formatted value and takes no input.

@summary Disabled field with a formatted value`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-invalid': true,
    defaultValue: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
  }
}`,...X.parameters?.docs?.source},description:{story:"`aria-invalid` paints the destructive border, the same way it does on a\nplain `Input`.\n\n@summary Invalid state driven by aria-invalid",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    thousandSeparator: true,
    defaultValue: 1234
  },
  render: args => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
            <InputNumber {...args} size="sm" aria-label="Small" />
            <InputNumber {...args} size="md" aria-label="Medium" />
            <InputNumber {...args} size="lg" aria-label="Large" />
        </div>,
  play: async ({
    canvasElement
  }) => {
    const heights = within(canvasElement).getAllByRole('textbox').map(input => input.getBoundingClientRect().height);
    await expect(heights).toEqual([32, 40, 48]);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The three sizes match Input's: 32, 40 or 48px tall.

@summary The three sizes side by side`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: function Render(args) {
    const {
      register,
      getValues
    } = useForm<AgencyValues>({
      defaultValues: {
        npn: ''
      }
    });
    readForm = getValues;
    return <InputNumber aria-label={args['aria-label']} thousandSeparator {...register('npn')} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, '1234');
    await expect(input).toHaveValue('1,234');
    await expect(readForm().npn).toBe('1,234');
  }
}`,...Q.parameters?.docs?.source},description:{story:"Regression check, kept out of the manifest: react-hook-form's `register`\nhands over `ref`, `onChange` and `onBlur`, and the form stores the\nformatted text that `onChange` reports.\n\n@summary Register storing the formatted text through onChange",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  args: {
    thousandSeparator: true
  },
  render: args => <InputContext value={{
    onChange: contextOnChange,
    ref: contextRef
  }}>
            <InputNumber {...args} ref={inputRef} />
        </InputContext>,
  play: async ({
    args,
    canvasElement
  }) => {
    contextOnChange.mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Premium'
    });
    await userEvent.type(input, '1234');
    await expect(input).toHaveValue('1,234');
    await expect(lastValue(contextOnChange)).toBe('1,234');
    await expect(contextOnChange.mock.calls).toHaveLength(4);
    await expect(lastValue(args.onChange)).toBe('1,234');
    await expect(contextRef.current).toBe(input);
    await expect(inputRef.current).toBe(input);
  }
}`,...$.parameters?.docs?.source},description:{story:"Regression check, kept out of the manifest: a container's `InputContext`\nis merged once, before the formatting, so a context `onChange` runs once\nper keystroke with the formatted value, and the context `ref` reaches the\n`<input>` alongside the field's own.\n\n@summary Context handlers merged once, before the formatting",...$.parameters?.docs?.description}}},ze=[`Default`,`TypeTel`,`ThousandSeparator`,`MaxNumber`,`LeadingZeros`,`Controlled`,`InsideInputGroup`,`InsideFieldText`,`Disabled`,`Invalid`,`AllSizes`,`WithReactHookForm`,`WithInputContext`]})))()}Be();export{Z as AllSizes,K as Controlled,V as Default,Y as Disabled,J as InsideFieldText,q as InsideInputGroup,X as Invalid,G as LeadingZeros,W as MaxNumber,U as ThousandSeparator,H as TypeTel,$ as WithInputContext,Q as WithReactHookForm,ze as __namedExportsOrder,Pe as default};