const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Login-psQUiExO.js","./Login-DzT4-vc-.css","./Register-Df_KTmA5.js","./Register-vKhJx8d6.css","./Home-SBaylV_P.js","./todo-BvIekaXJ.js","./modules-C0xT7xBj.js","./grade-B0nD5uCw.js","./leave-CikrIJQe.js","./Campus-CMylFfVm.js","./Campus-Cq9zMFzL.css","./OffCampus-DpecYGrg.js","./OffCampus-C8kFJVH3.css","./Profile-DRurLq6k.js","./Profile-CbpbLTKd.css","./AIDrafts-Zkca65kH.js","./AIDrafts-B29wZM9f.css","./LeaveApplyPage-Cf5XoAit.js","./LeaveApplyPage-vBs2K5ua.css","./TodoPage-BremhGUK.js","./TodoPage-DiYv7M5L.css","./TrainingPage-3FaD3Z1w.js","./TrainingPage-CBVw6w6-.css","./GradePage-BALXmZeR.js","./SchedulePage-CtnMMYfn.js","./ProfileInfoPage-Px7vLLSh.js","./NotificationPage-DMThTstP.js","./FeedbackPage-7dEePnHX.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ur(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const de={},nn=[],pt=()=>{},Bo=()=>!1,us=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fs=e=>e.startsWith("onUpdate:"),we=Object.assign,fr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,ae=(e,t)=>vl.call(e,t),$=Array.isArray,Ot=e=>Bn(e)==="[object Map]",Jt=e=>Bn(e)==="[object Set]",Mr=e=>Bn(e)==="[object Date]",q=e=>typeof e=="function",ge=e=>typeof e=="string",ht=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",jo=e=>(ce(e)||q(e))&&q(e.then)&&q(e.catch),Ho=Object.prototype.toString,Bn=e=>Ho.call(e),yl=e=>Bn(e).slice(8,-1),Uo=e=>Bn(e)==="[object Object]",dr=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vn=ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ds=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-\w/g,He=ds(e=>e.replace(bl,t=>t.slice(1).toUpperCase())),_l=/\B([A-Z])/g,Mt=ds(e=>e.replace(_l,"-$1").toLowerCase()),ps=ds(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ps=ds(e=>e?`on${ps(e)}`:""),dt=(e,t)=>!Object.is(e,t),zn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},$o=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},hs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},xl=e=>{const t=ge(e)?Number(e):NaN;return isNaN(t)?e:t};let Lr;const gs=()=>Lr||(Lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pr(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ge(s)?Cl(s):pr(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(ge(e)||ce(e))return e}const wl=/;(?![^(]*\))/g,Al=/:([^]+)/,El=/\/\*[^]*?\*\//g;function Cl(e){const t={};return e.replace(El,"").split(wl).forEach(n=>{if(n){const s=n.split(Al);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Se(e){let t="";if(ge(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const s=Se(e[n]);s&&(t+=s+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rl=ur(Sl);function Ko(e){return!!e||e===""}function Tl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Nt(e[s],t[s]);return n}function Vr(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),s=new Uint8Array(n.length);for(const r of e){let o=-1;for(let i=0;i<n.length;i++)if(!s[i]&&Nt(r,n[i])){o=i;break}if(o<0)return!1;s[o]=1}return!0}function Nt(e,t){if(e===t)return!0;let n=Mr(e),s=Mr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ht(e),s=ht(t),n||s)return e===t;if(n=$(e),s=$(t),n||s)return n&&s?Tl(e,t):!1;if(n=ce(e),s=ce(t),n||s){if(!n||!s)return!1;if(n=Ot(e),s=Ot(t),n||s||(n=Jt(e),s=Jt(t),n||s))return n&&s?Vr(e,t):!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const l=e.hasOwnProperty(i),a=t.hasOwnProperty(i);if(l&&!a||!l&&a||!Nt(e[i],t[i]))return!1}}return String(e)===String(t)}function Pl(e,t){return e.findIndex(n=>Nt(n,t))}const Go=e=>!!(e&&e.__v_isRef===!0),ze=e=>ge(e)?e:e==null?"":$(e)||ce(e)&&(e.toString===Ho||!q(e.toString))?Go(e)?ze(e.value):JSON.stringify(e,Wo,2):String(e),Wo=(e,t)=>Go(t)?Wo(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[Is(s,o)+" =>"]=r,n),{})}:Jt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Is(n))}:ht(t)?Is(t):ce(t)&&!$(t)&&!Uo(t)?String(t):t,Is=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class Il{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Re&&(Re.active?(this.parent=Re,this.index=(Re.scopes||(Re.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}const s=this.effects.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){if(this._on>0&&--this._on===0){if(Re===this)Re=this.prevScope;else{let t=Re;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,s=r.length;n<s;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ol(){return Re}let pe;const Os=new WeakSet;class qo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&(Re.active?Re.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Os.has(this)&&(Os.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fr(this),Yo(this);const t=pe,n=et;pe=this,et=!0;try{return this.fn()}finally{Qo(this),pe=t,et=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)mr(t);this.deps=this.depsTail=void 0,Fr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Os.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ws(this)&&this.run()}get dirty(){return Ws(this)}}let Xo=0,yn,bn;function zo(e,t=!1){if(e.flags|=8,t){e.next=bn,bn=e;return}e.next=yn,yn=e}function hr(){Xo++}function gr(){if(--Xo>0)return;if(bn){let t=bn;for(bn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;yn;){let t=yn;for(yn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Yo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qo(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),mr(s),Dl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Ws(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Jo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Jo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Sn)||(e.globalVersion=Sn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ws(e))))return;e.flags|=2;const t=e.dep,n=pe,s=et;pe=e,et=!0;try{Yo(e);const r=e.fn(e._value);(t.version===0||dt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{pe=n,et=s,Qo(e),e.flags&=-3}}function mr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)mr(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let et=!0;const Zo=[];function wt(){Zo.push(et),et=!1}function At(){const e=Zo.pop();et=e===void 0?!0:e}function Fr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=pe;pe=void 0;try{t()}finally{pe=n}}}let Sn=0;class Nl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!et||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new Nl(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,ei(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=s)}return n}trigger(t){this.version++,Sn++,this.notify(t)}notify(t){hr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gr()}}}function ei(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)ei(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qs=new WeakMap,qt=Symbol(""),Xs=Symbol(""),Rn=Symbol("");function Oe(e,t,n){if(et&&pe){let s=qs.get(e);s||qs.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new vr),r.map=s,r.key=n),r.track()}}function _t(e,t,n,s,r,o){const i=qs.get(e);if(!i){Sn++;return}const l=a=>{a&&a.trigger()};if(hr(),t==="clear")i.forEach(l);else{const a=$(e),u=a&&dr(n);if(a&&n==="length"){const c=Number(s);i.forEach((f,h)=>{(h==="length"||h===Rn||!ht(h)&&h>=c)&&l(f)})}else switch((n!==void 0||i.has(void 0))&&l(i.get(n)),u&&l(i.get(Rn)),t){case"add":a?u&&l(i.get("length")):(l(i.get(qt)),Ot(e)&&l(i.get(Xs)));break;case"delete":a||(l(i.get(qt)),Ot(e)&&l(i.get(Xs)));break;case"set":Ot(e)&&l(i.get(qt));break}}gr()}function Zt(e){const t=re(e);return t===e?t:(Oe(t,"iterate",Rn),Qe(e)?t:t.map(nt))}function ms(e){return Oe(e=re(e),"iterate",Rn),e}function ut(e,t){return Et(e)?on(Xt(e)?nt(t):t):nt(t)}const kl={__proto__:null,[Symbol.iterator](){return Ds(this,Symbol.iterator,e=>ut(this,e))},concat(...e){return Zt(this).concat(...e.map(t=>$(t)?Zt(t):t))},entries(){return Ds(this,"entries",e=>(e[1]=ut(this,e[1]),e))},every(e,t){return gt(this,"every",e,t,void 0,arguments)},filter(e,t){return gt(this,"filter",e,t,n=>n.map(s=>ut(this,s)),arguments)},find(e,t){return gt(this,"find",e,t,n=>ut(this,n),arguments)},findIndex(e,t){return gt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return gt(this,"findLast",e,t,n=>ut(this,n),arguments)},findLastIndex(e,t){return gt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return gt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ns(this,"includes",e)},indexOf(...e){return Ns(this,"indexOf",e)},join(e){return Zt(this).join(e)},lastIndexOf(...e){return Ns(this,"lastIndexOf",e)},map(e,t){return gt(this,"map",e,t,void 0,arguments)},pop(){return un(this,"pop")},push(...e){return un(this,"push",e)},reduce(e,...t){return Br(this,"reduce",e,t)},reduceRight(e,...t){return Br(this,"reduceRight",e,t)},shift(){return un(this,"shift")},some(e,t){return gt(this,"some",e,t,void 0,arguments)},splice(...e){return un(this,"splice",e)},toReversed(){return Zt(this).toReversed()},toSorted(e){return Zt(this).toSorted(e)},toSpliced(...e){return Zt(this).toSpliced(...e)},unshift(...e){return un(this,"unshift",e)},values(){return Ds(this,"values",e=>ut(this,e))}};function Ds(e,t,n){const s=ms(e),r=s[t]();return s!==e&&!Qe(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const Ml=Array.prototype;function gt(e,t,n,s,r,o){const i=ms(e),l=i!==e&&!Qe(e),a=i[t];if(a!==Ml[t]){const f=a.apply(e,o);return l?nt(f):f}let u=n;i!==e&&(l?u=function(f,h){return n.call(this,ut(e,f),h,e)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,e)}));const c=a.call(i,u,s);return l&&r?r(c):c}function Br(e,t,n,s){const r=ms(e),o=r!==e&&!Qe(e);let i=n,l=!1;r!==e&&(o?(l=s.length===0,i=function(u,c,f){return l&&(l=!1,u=ut(e,u)),n.call(this,u,ut(e,c),f,e)}):n.length>3&&(i=function(u,c,f){return n.call(this,u,c,f,e)}));const a=r[t](i,...s);return l?ut(e,a):a}function Ns(e,t,n){const s=re(e);Oe(s,"iterate",Rn);const r=s[t](...n);return(r===-1||r===!1)&&_r(n[0])?(n[0]=re(n[0]),s[t](...n)):r}function un(e,t,n=[]){wt(),hr();const s=re(e)[t].apply(e,n);return gr(),At(),s}const Ll=ur("__proto__,__v_isRef,__isVue"),ti=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Vl(e){ht(e)||(e=String(e));const t=re(this);return Oe(t,"has",e),t.hasOwnProperty(e)}class ni{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?ql:ii:o?oi:ri).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=$(t);if(!r){let a;if(i&&(a=kl[n]))return a;if(n==="hasOwnProperty")return Vl}const l=Reflect.get(t,n,ke(t)?t:s);if((ht(n)?ti.has(n):Ll(n))||(r||Oe(t,"get",n),o))return l;if(ke(l)){const a=i&&dr(n)?l:l.value;return r&&ce(a)?Ys(a):a}return ce(l)?r?Ys(l):vs(l):l}}class si extends ni{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];const i=$(t)&&dr(n);if(!this._isShallow){const u=Et(o);if(!Qe(s)&&!Et(s)&&(o=re(o),s=re(s)),!i&&ke(o)&&!ke(s))return u||(o.value=s),!0}const l=i?Number(n)<t.length:ae(t,n),a=Reflect.set(t,n,s,ke(t)?t:r);return t===re(r)&&a&&(l?dt(s,o)&&_t(t,"set",n,s):_t(t,"add",n,s)),a}deleteProperty(t,n){const s=ae(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&_t(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!ht(n)||!ti.has(n))&&Oe(t,"has",n),s}ownKeys(t){return Oe(t,"iterate",$(t)?"length":qt),Reflect.ownKeys(t)}}class Fl extends ni{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Bl=new si,jl=new Fl,Hl=new si(!0);const zs=e=>e,Un=e=>Reflect.getPrototypeOf(e);function Ul(e,t,n){return function(...s){const r=this.__v_raw,o=re(r),i=Ot(o),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,u=r[e](...s),c=n?zs:t?on:nt;return!t&&Oe(o,"iterate",a?Xs:qt),we(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:l?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function $n(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $l(e,t){const n={get(r){const o=this.__v_raw,i=re(o),l=re(r);e||(dt(r,l)&&Oe(i,"get",r),Oe(i,"get",l));const{has:a}=Un(i),u=t?zs:e?on:nt;if(a.call(i,r))return u(o.get(r));if(a.call(i,l))return u(o.get(l));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!e&&Oe(re(r),"iterate",qt),r.size},has(r){const o=this.__v_raw,i=re(o),l=re(r);return e||(dt(r,l)&&Oe(i,"has",r),Oe(i,"has",l)),r===l?o.has(r):o.has(r)||o.has(l)},forEach(r,o){const i=this,l=i.__v_raw,a=re(l),u=t?zs:e?on:nt;return!e&&Oe(a,"iterate",qt),l.forEach((c,f)=>r.call(o,u(c),u(f),i))}};return we(n,e?{add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear")}:{add(r){const o=re(this),i=Un(o),l=re(r),a=!t&&!Qe(r)&&!Et(r)?l:r;return i.has.call(o,a)||dt(r,a)&&i.has.call(o,r)||dt(l,a)&&i.has.call(o,l)||(o.add(a),_t(o,"add",a,a)),this},set(r,o){!t&&!Qe(o)&&!Et(o)&&(o=re(o));const i=re(this),{has:l,get:a}=Un(i);let u=l.call(i,r);u||(r=re(r),u=l.call(i,r));const c=a.call(i,r);return i.set(r,o),u?dt(o,c)&&_t(i,"set",r,o):_t(i,"add",r,o),this},delete(r){const o=re(this),{has:i,get:l}=Un(o);let a=i.call(o,r);a||(r=re(r),a=i.call(o,r)),l&&l.call(o,r);const u=o.delete(r);return a&&_t(o,"delete",r,void 0),u},clear(){const r=re(this),o=r.size!==0,i=r.clear();return o&&_t(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ul(r,e,t)}),n}function yr(e,t){const n=$l(e,t);return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,o)}const Kl={get:yr(!1,!1)},Gl={get:yr(!1,!0)},Wl={get:yr(!0,!1)};const ri=new WeakMap,oi=new WeakMap,ii=new WeakMap,ql=new WeakMap;function Xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vs(e){return Et(e)?e:br(e,!1,Bl,Kl,ri)}function li(e){return br(e,!1,Hl,Gl,oi)}function Ys(e){return br(e,!0,jl,Wl,ii)}function br(e,t,n,s,r){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=r.get(e);if(o)return o;const i=Xl(yl(e));if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Xt(e){return Et(e)?Xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Et(e){return!!(e&&e.__v_isReadonly)}function Qe(e){return!!(e&&e.__v_isShallow)}function _r(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function zl(e){return!ae(e,"__v_skip")&&Object.isExtensible(e)&&$o(e,"__v_skip",!0),e}const nt=e=>ce(e)?vs(e):e,on=e=>ce(e)?Ys(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function he(e){return ai(e,!1)}function Yl(e){return ai(e,!0)}function ai(e,t){return ke(e)?e:new Ql(e,t)}class Ql{constructor(t,n){this.dep=new vr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:nt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Qe(t)||Et(t);t=s?t:re(t),dt(t,n)&&(this._rawValue=t,this._value=s?t:nt(t),this.dep.trigger())}}function Dt(e){return ke(e)?e.value:e}const Jl={get:(e,t,n)=>t==="__v_raw"?e:Dt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ke(r)&&!ke(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function ci(e){return Xt(e)?e:new Proxy(e,Jl)}class Zl{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new vr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return zo(this,!0),!0}get value(){const t=this.dep.track();return Jo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ea(e,t,n=!1){let s,r;return q(e)?s=e:(s=e.get,r=e.set),new Zl(s,r,n)}const Kn={},Jn=new WeakMap;let jt;function ta(e,t=!1,n=jt){if(n){let s=Jn.get(n);s||Jn.set(n,s=[]),s.push(e)}}function na(e,t,n=de){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:l,call:a}=n,u=P=>r?P:Qe(P)||r===!1||r===0?xt(P,1):xt(P);let c,f,h,g,y=!1,x=!1;if(ke(e)?(f=()=>e.value,y=Qe(e)):Xt(e)?(f=()=>u(e),y=!0):$(e)?(x=!0,y=e.some(P=>Xt(P)||Qe(P)),f=()=>e.map(P=>{if(ke(P))return P.value;if(Xt(P))return u(P);if(q(P))return a?a(P,2):P()})):q(e)?t?f=a?()=>a(e,2):e:f=()=>{if(h){wt();try{h()}finally{At()}}const P=jt;jt=c;try{return a?a(e,3,[g]):e(g)}finally{jt=P}}:f=pt,t&&r){const P=f,W=r===!0?1/0:r;f=()=>xt(P(),W)}const L=Ol(),N=()=>{c.stop(),L&&L.active&&fr(L.effects,c)};if(o&&t){const P=t;t=(...W)=>{const X=P(...W);return N(),X}}let S=x?new Array(e.length).fill(Kn):Kn;const M=P=>{if(!(!(c.flags&1)||!c.dirty&&!P))if(t){const W=c.run();if(P||r||y||(x?W.some((X,B)=>dt(X,S[B])):dt(W,S))){h&&h();const X=jt;jt=c;try{const B=[W,S===Kn?void 0:x&&S[0]===Kn?[]:S,g];S=W,a?a(t,3,B):t(...B)}finally{jt=X}}}else c.run()};return l&&l(M),c=new qo(f),c.scheduler=i?()=>i(M,!1):M,g=P=>ta(P,!1,c),h=c.onStop=()=>{const P=Jn.get(c);if(P){if(a)a(P,4);else for(const W of P)W();Jn.delete(c)}},t?s?M(!0):S=c.run():i?i(M.bind(null,!0),!0):c.run(),N.pause=c.pause.bind(c),N.resume=c.resume.bind(c),N.stop=N,N}function xt(e,t=1/0,n){if(t<=0||!ce(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ke(e))xt(e.value,t,n);else if($(e))for(let s=0;s<e.length;s++)xt(e[s],t,n);else if(Jt(e)||Ot(e))e.forEach(s=>{xt(s,t,n)});else if(Uo(e)){for(const s in e)xt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&xt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jn(e,t,n,s){try{return s?e(...s):e()}catch(r){ys(r,t,n)}}function Je(e,t,n,s){if(q(e)){const r=jn(e,t,n,s);return r&&jo(r)&&r.catch(o=>{ys(o,t,n)}),r}if($(e)){const r=[];for(let o=0;o<e.length;o++)r.push(Je(e[o],t,n,s));return r}}function ys(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||de;if(t){let l=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const c=l.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,a,u)===!1)return}l=l.parent}if(o){wt(),jn(o,null,10,[e,a,u]),At();return}}sa(e,n,r,s,i)}function sa(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Be=[];let ct=-1;const sn=[];let Pt=null,en=0;const ui=Promise.resolve();let Zn=null;function Tn(e){const t=Zn||ui;return e?t.then(this?e.bind(this):e):t}function ra(e){let t=ct+1,n=Be.length;for(;t<n;){const s=t+n>>>1,r=Be[s],o=Pn(r);o<e||o===e&&r.flags&2?t=s+1:n=s}return t}function xr(e){if(!(e.flags&1)){const t=Pn(e),n=Be[Be.length-1];!n||!(e.flags&2)&&t>=Pn(n)?Be.push(e):Be.splice(ra(t),0,e),e.flags|=1,fi()}}function fi(){Zn||(Zn=ui.then(pi))}function oa(e){if(!$(e))Pt&&e.id===-1?Pt.splice(en+1,0,e):e.flags&1||(sn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)sn.push(e[t]);fi()}function jr(e,t,n=ct+1){for(;n<Be.length;n++){const s=Be[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Be.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function di(e){if(sn.length){const t=[...new Set(sn)].sort((n,s)=>Pn(n)-Pn(s));if(sn.length=0,Pt){for(let n=0;n<t.length;n++)Pt.push(t[n]);return}for(Pt=t,en=0;en<Pt.length;en++){const n=Pt[en];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pt=null,en=0}}const Pn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function pi(e){try{for(ct=0;ct<Be.length;ct++){const t=Be[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),jn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Be.length;ct++){const t=Be[ct];t&&(t.flags&=-2)}ct=-1,Be.length=0,di(),Zn=null,(Be.length||sn.length)&&pi()}}let We=null,hi=null;function es(e){const t=We;return We=e,hi=e&&e.type.__scopeId||null,t}function In(e,t=We,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&rs(-1);const o=es(t),i=Qt.length;let l;try{l=e(...r)}finally{for(let a=Qt.length;a>i;a--)qi();es(o),s._d&&rs(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function Ht(e,t){if(We===null)return e;const n=Cs(We),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,i,l,a=de]=t[r];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&xt(i),s.push({dir:o,instance:n,value:i,oldValue:void 0,arg:l,modifiers:a}))}return e}function Lt(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let a=l.dir[s];a&&(wt(),Je(a,n,8,[e.el,l,e,t]),At())}}function zt(e,t){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[e]=t}}function tt(e,t,n=!1){const s=Yi();if(s||rn){let r=rn?rn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&q(t)?t.call(s&&s.proxy):t}}const ia=Symbol.for("v-scx"),la=()=>tt(ia);function Yt(e,t,n){return gi(e,t,n)}function gi(e,t,n=de){const{immediate:s,deep:r,flush:o,once:i}=n,l=we({},n),a=t&&s||!t&&o!=="post";let u;if(Mn){if(o==="sync"){const g=la();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=pt,g.resume=pt,g.pause=pt,g}}const c=De;l.call=(g,y,x)=>Je(g,c,y,x);let f=!1;o==="post"?l.scheduler=g=>{Ve(g,c&&c.suspense)}:o!=="sync"&&(f=!0,l.scheduler=(g,y)=>{y?g():xr(g)}),l.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,c&&(g.id=c.uid,g.i=c))};const h=na(e,t,l);return Mn&&(u?u.push(h):a&&h()),h}function aa(e,t,n){const s=this.proxy,r=ge(e)?e.includes(".")?mi(s,e):()=>s[e]:e.bind(s,s);let o;q(t)?o=t:(o=t.handler,n=t);const i=Hn(this),l=gi(r,o.bind(s),n);return i(),l}function mi(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Tt=new WeakMap,vi=Symbol("_vte"),bs=e=>e.__isTeleport,Ut=e=>e&&(e.disabled||e.disabled===""),ca=e=>e&&(e.defer||e.defer===""),Hr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ur=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Qs=(e,t)=>{const n=e&&e.to;return ge(n)?t?t(n):null:n},ua={name:"Teleport",__isTeleport:!0,process(e,t,n,s,r,o,i,l,a,u){const{mc:c,pc:f,pbc:h,o:{insert:g,querySelector:y,createText:x,createComment:L,parentNode:N}}=u,S=Ut(t.props);let{dynamicChildren:M}=t;const P=(B,Q,F)=>{B.shapeFlag&16&&c(B.children,Q,F,r,o,i,l,a)},W=(B=t)=>{const Q=Ut(B.props),F=B.target=Qs(B.props,y),z=Js(F,B,x,g);F&&(i!=="svg"&&Hr(F)?i="svg":i!=="mathml"&&Ur(F)&&(i="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(F),Q||(P(B,F,z),hn(B,!1)))},X=B=>{const Q=()=>{if(Tt.get(B)===Q){if(Tt.delete(B),Ut(B.props)){const F=N(B.el)||n;P(B,F,B.anchor),hn(B,!0)}W(B)}};Tt.set(B,Q),Ve(Q,o)};if(e==null){const B=t.el=x(""),Q=t.anchor=x("");if(g(B,n,s),g(Q,n,s),ca(t.props)||o&&o.pendingBranch){X(t);return}S&&(P(t,n,Q),hn(t,!0)),W()}else{t.el=e.el;const B=t.anchor=e.anchor,Q=Tt.get(e);if(Q){Q.flags|=8,Tt.delete(e),X(t);return}t.targetStart=e.targetStart;const F=t.target=e.target,z=t.targetAnchor=e.targetAnchor,J=Ut(e.props),O=J?n:F,ee=J?B:z;if(i==="svg"||Hr(F)?i="svg":(i==="mathml"||Ur(F))&&(i="mathml"),M?(h(e.dynamicChildren,M,O,r,o,i,l),Er(e,t,!0)):a||f(e,t,O,ee,r,o,i,l,!1),S)J?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Gn(t,n,B,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const me=Qs(t.props,y);me&&(t.target=me,Gn(t,me,null,u,0))}else J&&Gn(t,F,z,u,1);hn(t,S)}},remove(e,t,n,{um:s,o:{remove:r}},o){const{shapeFlag:i,children:l,anchor:a,targetStart:u,targetAnchor:c,target:f,props:h}=e,g=Ut(h),y=o||!g,x=Tt.get(e);if(x&&(x.flags|=8,Tt.delete(e)),f&&(r(u),r(c)),o&&r(a),!x&&(g||f)&&i&16)for(let L=0;L<l.length;L++){const N=l[L];s(N,t,n,y,!!N.dynamicChildren)}},move:Gn,hydrate:fa};function Gn(e,t,n,{o:{insert:s},m:r},o=2){o===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:a,children:u,props:c}=e,f=o===2;if(f&&s(i,t,n),!Tt.has(e)&&(!f||Ut(c))&&a&16)for(let h=0;h<u.length;h++)r(u[h],t,n,2);f&&s(l,t,n)}function fa(e,t,n,s,r,o,{o:{nextSibling:i,parentNode:l,querySelector:a,insert:u,createText:c}},f){function h(L,N){let S=N;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")t.targetStart=S;else if(S.data==="teleport anchor"){t.targetAnchor=S,L._lpa=t.targetAnchor&&i(t.targetAnchor);break}}S=i(S)}}function g(L,N){N.anchor=f(i(L),N,l(L),n,s,r,o)}const y=t.target=Qs(t.props,a),x=Ut(t.props);if(y){const L=y._lpa||y.firstChild;t.shapeFlag&16&&(x?(g(e,t),h(y,L),t.targetAnchor||Js(y,t,c,u,l(e)===y?e:null)):(t.anchor=i(e),h(y,L),t.targetAnchor||Js(y,t,c,u),f(L&&i(L),t,y,n,s,r,o))),hn(t,x)}else x&&t.shapeFlag&16&&(g(e,t),t.targetStart=e,t.targetAnchor=i(e));return t.anchor&&i(t.anchor)}const da=ua;function hn(e,t){const n=e.ctx;if(n&&n.ut){let s,r;for(t?(s=e.el,r=e.anchor):(s=e.targetStart,r=e.targetAnchor);s&&s!==r;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function Js(e,t,n,s,r=null){const o=t.targetStart=n(""),i=t.targetAnchor=n("");return o[vi]=i,e&&(s(o,e,r),s(i,e,r)),i}const Ye=Symbol("_leaveCb"),fn=Symbol("_enterCb");function pa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ws(()=>{e.isMounted=!0}),Si(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],yi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},bi=e=>{const t=e.subTree;return t.component?bi(t.component):t},ha={name:"BaseTransition",props:yi,setup(e,{slots:t}){const n=Yi(),s=pa();return()=>{const r=t.default&&wi(t.default(),!0),o=r&&r.length?_i(r):n.subTree?Ae():void 0;if(!o)return;const i=re(e),{mode:l}=i;if(s.isLeaving)return ks(o);const a=ts(o);if(!a)return ks(o);let u=Zs(a,i,s,n,f=>u=f);a.type!==je&&On(a,u);let c=n.subTree&&ts(n.subTree);if(c&&c.type!==je&&!$t(c,a)&&bi(n).type!==je){let f=Zs(c,i,s,n);if(On(c,f),l==="out-in"&&a.type!==je)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},ks(o);l==="in-out"&&a.type!==je?f.delayLeave=(h,g,y)=>{const x=xi(s,c);x[String(c.key)]=c,h[Ye]=()=>{g(),h[Ye]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{y(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function _i(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==je){t=n;break}}return t}const ga=ha;function xi(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Zs(e,t,n,s,r){const{appear:o,mode:i,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:y,onLeaveCancelled:x,onBeforeAppear:L,onAppear:N,onAfterAppear:S,onAppearCancelled:M}=t,P=String(e.key),W=xi(n,e),X=(F,z)=>{F&&Je(F,s,9,z)},B=(F,z)=>{const J=z[1];X(F,z),$(F)?F.every(O=>O.length<=1)&&J():F.length<=1&&J()},Q={mode:i,persisted:l,beforeEnter(F){let z=a;if(!n.isMounted)if(o)z=L||a;else return;F[Ye]&&F[Ye](!0);const J=W[P];J&&$t(e,J)&&J.el[Ye]&&J.el[Ye](),X(z,[F])},enter(F){if(W[P]===e)return;let z=u,J=c,O=f;if(!n.isMounted)if(o)z=N||u,J=S||c,O=M||f;else return;let ee=!1;F[fn]=Me=>{ee||(ee=!0,Me?X(O,[F]):X(J,[F]),Q.delayedLeave&&Q.delayedLeave(),F[fn]=void 0)};const me=F[fn].bind(null,!1);z?B(z,[F,me]):me()},leave(F,z){const J=String(e.key);if(F[fn]&&F[fn](!0),n.isUnmounting)return z();X(h,[F]);let O=!1;F[Ye]=me=>{O||(O=!0,z(),me?X(x,[F]):X(y,[F]),F[Ye]=void 0,W[J]===e&&delete W[J])};const ee=F[Ye].bind(null,!1);W[J]=e,g?B(g,[F,ee]):ee()},clone(F){const z=Zs(F,t,n,s,r);return r&&r(z),z}};return Q}function ks(e){if(_s(e))return e=kt(e),e.children=null,e}function ts(e){if(!_s(e))return bs(e.type)&&e.children?_i(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&q(n.default))return n.default()}}function On(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;On(bs(n.type)&&ts(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wi(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===$e?(i.patchFlag&128&&r++,s=s.concat(wi(i.children,t,l))):(t||i.type!==je)&&s.push(l!=null?kt(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function Ai(e,t){return q(e)?we({name:e.name},t,{setup:e}):e}function Ei(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $r(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const ns=new WeakMap;function _n(e,t,n,s,r=!1){if($(e)){e.forEach((x,L)=>_n(x,t&&($(t)?t[L]:t),n,s,r));return}if(xn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&_n(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Cs(s.component):s.el,i=r?null:o,{i:l,r:a}=e,u=t&&t.r,c=l.refs===de?l.refs={}:l.refs,f=l.setupState,h=re(f),g=f===de?Bo:x=>$r(c,x)?!1:ae(h,x),y=(x,L)=>!(L&&$r(c,L));if(u!=null&&u!==a){if(Kr(t),ge(u))c[u]=null,g(u)&&(f[u]=null);else if(ke(u)){const x=t;y(u,x.k)&&(u.value=null),x.k&&(c[x.k]=null)}}if(q(a))jn(a,l,12,[i,c]);else{const x=ge(a),L=ke(a);if(x||L){const N=()=>{if(e.f){const S=x?g(a)?f[a]:c[a]:y()||!e.k?a.value:c[e.k];if(r)$(S)&&fr(S,o);else if($(S))S.includes(o)||S.push(o);else if(x)c[a]=[o],g(a)&&(f[a]=c[a]);else{const M=[o];y(a,e.k)&&(a.value=M),e.k&&(c[e.k]=M)}}else x?(c[a]=i,g(a)&&(f[a]=i)):L&&(y(a,e.k)&&(a.value=i),e.k&&(c[e.k]=i))};if(i){const S=()=>{N(),ns.delete(e)};S.id=-1,ns.set(e,S),Ve(S,n)}else Kr(e),N()}}}function Kr(e){const t=ns.get(e);t&&(t.flags|=8,ns.delete(e))}gs().requestIdleCallback;gs().cancelIdleCallback;const xn=e=>!!e.type.__asyncLoader,_s=e=>e.type.__isKeepAlive;function ma(e,t){Ci(e,"a",t)}function va(e,t){Ci(e,"da",t)}function Ci(e,t,n=De){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(xs(t,s,n),n){let r=n.parent;for(;r&&r.parent;)_s(r.parent.vnode)&&ya(s,t,n,r),r=r.parent}}function ya(e,t,n,s){const r=xs(t,e,s,!0);Ri(()=>{fr(s[t],r)},n)}function xs(e,t,n=De,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{wt();const l=Hn(n),a=Je(t,n,e,i);return l(),At(),a});return s?r.unshift(o):r.push(o),o}}const Ct=e=>(t,n=De)=>{(!Mn||e==="sp")&&xs(e,(...s)=>t(...s),n)},ba=Ct("bm"),ws=Ct("m"),_a=Ct("bu"),xa=Ct("u"),Si=Ct("bum"),Ri=Ct("um"),wa=Ct("sp"),Aa=Ct("rtg"),Ea=Ct("rtc");function Ca(e,t=De){xs("ec",e,t)}const Ti="components";function Sa(e,t){return Ii(Ti,e,!0,t)||e}const Pi=Symbol.for("v-ndc");function Ra(e){return ge(e)?Ii(Ti,e,!1)||e:e||Pi}function Ii(e,t,n=!0,s=!1){const r=We||De;if(r){const o=r.type;{const l=fc(o,!1);if(l&&(l===t||l===He(t)||l===ps(He(t))))return o}const i=Gr(r[e]||o[e],t)||Gr(r.appContext[e],t);return!i&&s?o:i}}function Gr(e,t){return e&&(e[t]||e[He(t)]||e[ps(He(t))])}function Wn(e,t,n,s){let r;const o=n,i=$(e);if(i||ge(e)){const l=i&&Xt(e);let a=!1,u=!1;l&&(a=!Qe(e),u=Et(e),e=ms(e)),r=new Array(e.length);for(let c=0,f=e.length;c<f;c++)r[c]=t(a?u?on(nt(e[c])):nt(e[c]):e[c],c,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,o)}else if(ce(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,o));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const c=l[a];r[a]=t(e[c],c,a,o)}}else r=[];return r}const er=e=>e?Qi(e)?Cs(e):er(e.parent):null,wn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>er(e.parent),$root:e=>er(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Di(e),$forceUpdate:e=>e.f||(e.f=()=>{xr(e.update)}),$nextTick:e=>e.n||(e.n=Tn.bind(e.proxy)),$watch:e=>aa.bind(e)}),Ms=(e,t)=>e!==de&&!e.__isScriptSetup&&ae(e,t),Ta={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:a}=e;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(Ms(s,t))return i[t]=1,s[t];if(r!==de&&ae(r,t))return i[t]=2,r[t];if(ae(o,t))return i[t]=3,o[t];if(n!==de&&ae(n,t))return i[t]=4,n[t];tr&&(i[t]=0)}}const u=wn[t];let c,f;if(u)return t==="$attrs"&&Oe(e.attrs,"get",""),u(e);if((c=l.__cssModules)&&(c=c[t]))return c;if(n!==de&&ae(n,t))return i[t]=4,n[t];if(f=a.config.globalProperties,ae(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return Ms(r,t)?(r[t]=n,!0):s!==de&&ae(s,t)?(s[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:o,type:i}},l){let a;return!!(n[l]||e!==de&&l[0]!=="$"&&ae(e,l)||Ms(t,l)||ae(o,l)||ae(s,l)||ae(wn,l)||ae(r.config.globalProperties,l)||(a=i.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Wr(e){return $(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let tr=!0;function Pa(e){const t=Di(e),n=e.proxy,s=e.ctx;tr=!1,t.beforeCreate&&qr(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:a,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:g,updated:y,activated:x,deactivated:L,beforeDestroy:N,beforeUnmount:S,destroyed:M,unmounted:P,render:W,renderTracked:X,renderTriggered:B,errorCaptured:Q,serverPrefetch:F,expose:z,inheritAttrs:J,components:O,directives:ee,filters:me}=t;if(u&&Ia(u,s,null),i)for(const oe in i){const se=i[oe];q(se)&&(s[oe]=se.bind(n))}if(r){const oe=r.call(n,n);ce(oe)&&(e.data=vs(oe))}if(tr=!0,o)for(const oe in o){const se=o[oe],Ze=q(se)?se.bind(n,n):q(se.get)?se.get.bind(n,n):pt,rt=!q(se)&&q(se.set)?se.set.bind(n):pt,Ke=Ne({get:Ze,set:rt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Ie=>Ke.value=Ie})}if(l)for(const oe in l)Oi(l[oe],s,n,oe);if(a){const oe=q(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(se=>{zt(se,oe[se])})}c&&qr(c,e,"c");function ve(oe,se){$(se)?se.forEach(Ze=>oe(Ze.bind(n))):se&&oe(se.bind(n))}if(ve(ba,f),ve(ws,h),ve(_a,g),ve(xa,y),ve(ma,x),ve(va,L),ve(Ca,Q),ve(Ea,X),ve(Aa,B),ve(Si,S),ve(Ri,P),ve(wa,F),$(z))if(z.length){const oe=e.exposed||(e.exposed={});z.forEach(se=>{Object.defineProperty(oe,se,{get:()=>n[se],set:Ze=>n[se]=Ze,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===pt&&(e.render=W),J!=null&&(e.inheritAttrs=J),O&&(e.components=O),ee&&(e.directives=ee),F&&Ei(e)}function Ia(e,t,n=pt){$(e)&&(e=nr(e));for(const s in e){const r=e[s];let o;ce(r)?"default"in r?o=tt(r.from||s,r.default,!0):o=tt(r.from||s):o=tt(r),ke(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function qr(e,t,n){Je($(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oi(e,t,n,s){let r=s.includes(".")?mi(n,s):()=>n[s];if(ge(e)){const o=t[e];q(o)&&Yt(r,o)}else if(q(e))Yt(r,e.bind(n));else if(ce(e))if($(e))e.forEach(o=>Oi(o,t,n,s));else{const o=q(e.handler)?e.handler.bind(n):t[e.handler];q(o)&&Yt(r,o,e)}}function Di(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(u=>ss(a,u,i,!0)),ss(a,t,i)),ce(t)&&o.set(t,a),a}function ss(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&ss(e,o,n,!0),r&&r.forEach(i=>ss(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Oa[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Oa={data:Xr,props:zr,emits:zr,methods:gn,computed:gn,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:gn,directives:gn,watch:Na,provide:Xr,inject:Da};function Xr(e,t){return t?e?function(){return we(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Da(e,t){return gn(nr(e),nr(t))}function nr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function gn(e,t){return e?we(Object.create(null),e,t):t}function zr(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:we(Object.create(null),Wr(e),Wr(t??{})):t}function Na(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const s in t)n[s]=Le(e[s],t[s]);return n}function Ni(){return{app:null,config:{isNativeTag:Bo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ka=0;function Ma(e,t){return function(s,r=null){q(s)||(s=we({},s)),r!=null&&!ce(r)&&(r=null);const o=Ni(),i=new WeakSet,l=[];let a=!1;const u=o.app={_uid:ka++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:pc,get config(){return o.config},set config(c){},use(c,...f){return i.has(c)||(c&&q(c.install)?(i.add(c),c.install(u,...f)):q(c)&&(i.add(c),c(u,...f))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,f){return f?(o.components[c]=f,u):o.components[c]},directive(c,f){return f?(o.directives[c]=f,u):o.directives[c]},mount(c,f,h){if(!a){const g=u._ceVNode||Ee(s,r);return g.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),e(g,c,h),a=!0,u._container=c,c.__vue_app__=u,Cs(g.component)}},onUnmount(c){l.push(c)},unmount(){a&&(Je(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return o.provides[c]=f,u},runWithContext(c){const f=rn;rn=u;try{return c()}finally{rn=f}}};return u}}let rn=null;const La=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${He(t)}Modifiers`]||e[`${Mt(t)}Modifiers`];function Va(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||de;let r=n;const o=t.startsWith("update:"),i=o&&La(s,t.slice(7));i&&(i.trim&&(r=n.map(c=>ge(c)?c.trim():c)),i.number&&(r=r.map(hs)));let l,a=s[l=Ps(t)]||s[l=Ps(He(t))];!a&&o&&(a=s[l=Ps(Mt(t))]),a&&Je(a,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Je(u,e,6,r)}}const Fa=new WeakMap;function ki(e,t,n=!1){const s=n?Fa:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!q(e)){const a=u=>{const c=ki(u,t,!0);c&&(l=!0,we(i,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(ce(e)&&s.set(e,null),null):($(o)?o.forEach(a=>i[a]=null):we(i,o),ce(e)&&s.set(e,i),i)}function As(e,t){return!e||!us(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,Mt(t))||ae(e,t))}function Yr(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:l,emit:a,render:u,renderCache:c,props:f,data:h,setupState:g,ctx:y,inheritAttrs:x}=e,L=es(e);let N,S;try{if(n.shapeFlag&4){const P=r||s,W=P;N=ft(u.call(W,P,c,f,g,h,y)),S=l}else{const P=t;N=ft(P.length>1?P(f,{attrs:l,slots:i,emit:a}):P(f,null)),S=t.props?l:Ba(l)}}catch(P){Qt.length=0,ys(P,e,1),N=Ee(je)}let M=N;if(S&&x!==!1){const P=Object.keys(S),{shapeFlag:W}=M;P.length&&W&7&&(o&&P.some(fs)&&(S=ja(S,o)),M=kt(M,S,!1,!0))}if(n.dirs&&(M=kt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition){const P=bs(M.type)&&ts(M)||M;On(P,n.transition)}return N=M,es(L),N}const Ba=e=>{let t;for(const n in e)(n==="class"||n==="style"||us(n))&&((t||(t={}))[n]=e[n]);return t},ja=(e,t)=>{const n={};for(const s in e)(!fs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ha(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:a}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Qr(s,i,u):!!i;if(a&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(Mi(i,s,h)&&!As(u,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?Qr(s,i,u):!0:!!i;return!1}function Qr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(Mi(t,e,o)&&!As(n,o))return!0}return!1}function Mi(e,t,n){const s=e[n],r=t[n];return n==="style"&&ce(s)&&ce(r)?!Nt(s,r):s!==r}function Ua({vnode:e,parent:t,suspense:n},s){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=s,e=r),r===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const Li={},Vi=()=>Object.create(Li),Fi=e=>Object.getPrototypeOf(e)===Li;function $a(e,t,n,s=!1){const r={},o=Vi();e.propsDefaults=Object.create(null),Bi(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:li(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Ka(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=re(r),[a]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(As(e.emitsOptions,h))continue;const g=t[h];if(a)if(ae(o,h))g!==o[h]&&(o[h]=g,u=!0);else{const y=He(h);r[y]=sr(a,l,y,g,e,!1)}else g!==o[h]&&(o[h]=g,u=!0)}}}else{Bi(e,t,r,o)&&(u=!0);let c;for(const f in l)(!t||!ae(t,f)&&((c=Mt(f))===f||!ae(t,c)))&&(a?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=sr(a,l,f,void 0,e,!0)):delete r[f]);if(o!==l)for(const f in o)(!t||!ae(t,f))&&(delete o[f],u=!0)}u&&_t(e.attrs,"set","")}function Bi(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(vn(a))continue;const u=t[a];let c;r&&ae(r,c=He(a))?!o||!o.includes(c)?n[c]=u:(l||(l={}))[c]=u:As(e.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,i=!0)}if(o){const a=re(n),u=l||de;for(let c=0;c<o.length;c++){const f=o[c];n[f]=sr(r,a,f,u[f],e,!ae(u,f))}}return i}function sr(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=ae(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&q(a)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const c=Hn(r);s=u[n]=a.call(null,t),c()}}else s=a;r.ce&&r.ce._setProp(n,s)}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===Mt(n))&&(s=!0))}return s}const Ga=new WeakMap;function ji(e,t,n=!1){const s=n?Ga:t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let a=!1;if(!q(e)){const c=f=>{a=!0;const[h,g]=ji(f,t,!0);we(i,h),g&&l.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!a)return ce(e)&&s.set(e,nn),nn;if($(o))for(let c=0;c<o.length;c++){const f=He(o[c]);Jr(f)&&(i[f]=de)}else if(o)for(const c in o){const f=He(c);if(Jr(f)){const h=o[c],g=i[f]=$(h)||q(h)?{type:h}:we({},h),y=g.type;let x=!1,L=!0;if($(y))for(let N=0;N<y.length;++N){const S=y[N],M=q(S)&&S.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(L=!1)}else x=q(y)&&y.name==="Boolean";g[0]=x,g[1]=L,(x||ae(g,"default"))&&l.push(f)}}const u=[i,l];return ce(e)&&s.set(e,u),u}function Jr(e){return e[0]!=="$"&&!vn(e)}const wr=e=>e==="_"||e==="_ctx"||e==="$stable",Ar=e=>$(e)?e.map(ft):[ft(e)],Wa=(e,t,n)=>{if(t._n)return t;const s=In((...r)=>Ar(t(...r)),n);return s._c=!1,s},Hi=(e,t,n)=>{const s=e._ctx;for(const r in e){if(wr(r))continue;const o=e[r];if(q(o))t[r]=Wa(r,o,s);else if(o!=null){const i=Ar(o);t[r]=()=>i}}},Ui=(e,t)=>{const n=Ar(t);e.slots.default=()=>n},$i=(e,t,n)=>{for(const s in t)(n||!wr(s))&&(e[s]=t[s])},qa=(e,t,n)=>{const s=e.slots=Vi();if(e.vnode.shapeFlag&32){const r=t._;r?($i(s,t,n),n&&$o(s,"_",r,!0)):Hi(t,s)}else t&&Ui(e,t)},Xa=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=de;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:$i(r,t,n):(o=!t.$stable,Hi(t,r)),i=t}else t&&(Ui(e,t),i={default:1});if(o)for(const l in r)!wr(l)&&i[l]==null&&delete r[l]},Ve=Za;function za(e){return Ya(e)}function Ya(e,t){const n=gs();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:a,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:g=pt,insertStaticContent:y}=e,x=(d,p,m,_=null,E=null,b=null,I=void 0,T=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!$t(d,p)&&(_=w(d),Ie(d,E,b,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:C,ref:K,shapeFlag:k}=p;switch(C){case Es:L(d,p,m,_);break;case je:N(d,p,m,_);break;case Yn:d==null&&S(p,m,_,I);break;case $e:O(d,p,m,_,E,b,I,T,R);break;default:k&1?W(d,p,m,_,E,b,I,T,R):k&6?ee(d,p,m,_,E,b,I,T,R):(k&64||k&128)&&C.process(d,p,m,_,E,b,I,T,R,H)}K!=null&&E?_n(K,d&&d.ref,b,p||d,!p):K==null&&d&&d.ref!=null&&_n(d.ref,null,b,d,!0)},L=(d,p,m,_)=>{if(d==null)s(p.el=l(p.children),m,_);else{const E=p.el=d.el;p.children!==d.children&&u(E,p.children)}},N=(d,p,m,_)=>{d==null?s(p.el=a(p.children||""),m,_):p.el=d.el},S=(d,p,m,_)=>{[d.el,d.anchor]=y(d.children,p,m,_,d.el,d.anchor)},M=({el:d,anchor:p},m,_)=>{let E;for(;d&&d!==p;)E=h(d),s(d,m,_),d=E;s(p,m,_)},P=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),r(d),d=m;r(p)},W=(d,p,m,_,E,b,I,T,R)=>{if(p.type==="svg"?I="svg":p.type==="math"&&(I="mathml"),d==null)X(p,m,_,E,b,I,T,R);else{const C=d.el&&d.el._isVueCE?d.el:null;try{C&&C._beginPatch(),F(d,p,E,b,I,T,R)}finally{C&&C._endPatch()}}},X=(d,p,m,_,E,b,I,T)=>{let R,C;const{props:K,shapeFlag:k,transition:U,dirs:G}=d;if(R=d.el=i(d.type,b,K&&K.is,K),k&8?c(R,d.children):k&16&&Q(d.children,R,null,_,E,Ls(d,b),I,T),G&&Lt(d,null,_,"created"),B(R,d,d.scopeId,I,_),K){for(const fe in K)fe!=="value"&&!vn(fe)&&o(R,fe,null,K[fe],b,_);"value"in K&&o(R,"value",null,K.value,b),(C=K.onVnodeBeforeMount)&&at(C,_,d)}G&&Lt(d,null,_,"beforeMount");const ne=Qa(E,U);ne&&U.beforeEnter(R),s(R,p,m),((C=K&&K.onVnodeMounted)||ne||G)&&Ve(()=>{try{C&&at(C,_,d),ne&&U.enter(R),G&&Lt(d,null,_,"mounted")}finally{}},E)},B=(d,p,m,_,E)=>{if(m&&g(d,m),_)for(let b=0;b<_.length;b++)g(d,_[b]);if(E){let b=E.subTree;if(p===b||Wi(b.type)&&(b.ssContent===p||b.ssFallback===p)){const I=E.vnode;B(d,I,I.scopeId,I.slotScopeIds,E.parent)}}},Q=(d,p,m,_,E,b,I,T,R=0)=>{for(let C=R;C<d.length;C++){const K=d[C]=T?bt(d[C]):ft(d[C]);x(null,K,p,m,_,E,b,I,T)}},F=(d,p,m,_,E,b,I)=>{const T=p.el=d.el;let{patchFlag:R,dynamicChildren:C,dirs:K}=p;R|=d.patchFlag&16;const k=d.props||de,U=p.props||de;let G;if(m&&Vt(m,!1),(G=U.onVnodeBeforeUpdate)&&at(G,m,p,d),K&&Lt(p,d,m,"beforeUpdate"),m&&Vt(m,!0),C&&(!d.dynamicChildren||d.dynamicChildren.length!==C.length)&&(R=0,I=!1,C=null),(k.innerHTML&&U.innerHTML==null||k.textContent&&U.textContent==null)&&c(T,""),C?z(d.dynamicChildren,C,T,m,_,Ls(p,E),b):I||se(d,p,T,null,m,_,Ls(p,E),b,!1),R>0){if(R&16)J(T,k,U,m,E);else if(R&2&&k.class!==U.class&&o(T,"class",null,U.class,E),R&4&&o(T,"style",k.style,U.style,E),R&8){const ne=p.dynamicProps;for(let fe=0;fe<ne.length;fe++){const ue=ne[fe],_e=k[ue],Ce=U[ue];(Ce!==_e||ue==="value")&&o(T,ue,_e,Ce,E,m)}}R&1&&d.children!==p.children&&c(T,p.children)}else!I&&C==null&&J(T,k,U,m,E);((G=U.onVnodeUpdated)||K)&&Ve(()=>{G&&at(G,m,p,d),K&&Lt(p,d,m,"updated")},_)},z=(d,p,m,_,E,b,I)=>{for(let T=0;T<p.length;T++){const R=d[T],C=p[T],K=R.el&&(R.type===$e||!$t(R,C)||R.shapeFlag&198)?f(R.el):m;x(R,C,K,null,_,E,b,I,!0)}},J=(d,p,m,_,E)=>{if(p!==m){if(p!==de)for(const b in p)!vn(b)&&!(b in m)&&o(d,b,p[b],null,E,_);for(const b in m){if(vn(b))continue;const I=m[b],T=p[b];I!==T&&b!=="value"&&o(d,b,T,I,E,_)}"value"in m&&o(d,"value",p.value,m.value,E)}},O=(d,p,m,_,E,b,I,T,R)=>{const C=p.el=d?d.el:l(""),K=p.anchor=d?d.anchor:l("");let{patchFlag:k,dynamicChildren:U,slotScopeIds:G}=p;G&&(T=T?T.concat(G):G),d==null?(s(C,m,_),s(K,m,_),Q(p.children||[],m,K,E,b,I,T,R)):k>0&&k&64&&U&&d.dynamicChildren&&d.dynamicChildren.length===U.length?(z(d.dynamicChildren,U,m,E,b,I,T),(p.key!=null||E&&p===E.subTree)&&Er(d,p,!0)):se(d,p,m,K,E,b,I,T,R)},ee=(d,p,m,_,E,b,I,T,R)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?E.ctx.activate(p,m,_,I,R):me(p,m,_,E,b,I,R):Me(d,p,R)},me=(d,p,m,_,E,b,I)=>{const T=d.component=ic(d,_,E);if(_s(d)&&(T.ctx.renderer=H),lc(T,!1,I),T.asyncDep){if(E&&E.registerDep(T,ve,I),!d.el){const R=T.subTree=Ee(je);N(null,R,p,m),d.placeholder=R.el}}else ve(T,d,p,m,E,b,I)},Me=(d,p,m)=>{const _=p.component=d.component;if(Ha(d,p,m))if(_.asyncDep&&!_.asyncResolved){oe(_,p,m);return}else _.next=p,_.update();else p.el=d.el,_.vnode=p},ve=(d,p,m,_,E,b,I)=>{const T=()=>{if(d.isMounted){let{next:k,bu:U,u:G,parent:ne,vnode:fe}=d;{const it=Ki(d);if(it){k&&(k.el=fe.el,oe(d,k,I)),it.asyncDep.then(()=>{Ve(()=>{d.isUnmounted||C()},E)});return}}let ue=k,_e;Vt(d,!1),k?(k.el=fe.el,oe(d,k,I)):k=fe,U&&zn(U),(_e=k.props&&k.props.onVnodeBeforeUpdate)&&at(_e,ne,k,fe),Vt(d,!0);const Ce=Yr(d),ot=d.subTree;d.subTree=Ce,x(ot,Ce,f(ot.el),w(ot),d,E,b),k.el=Ce.el,ue===null&&Ua(d,Ce.el),G&&Ve(G,E),(_e=k.props&&k.props.onVnodeUpdated)&&Ve(()=>at(_e,ne,k,fe),E)}else{let k;const{el:U,props:G}=p,{bm:ne,m:fe,parent:ue,root:_e,type:Ce}=d,ot=xn(p);Vt(d,!1),ne&&zn(ne),!ot&&(k=G&&G.onVnodeBeforeMount)&&at(k,ue,p),Vt(d,!0);{_e.ce&&_e.ce._hasShadowRoot()&&_e.ce._injectChildStyle(Ce,d.parent?d.parent.type:void 0);const it=d.subTree=Yr(d);x(null,it,m,_,d,E,b),p.el=it.el}if(fe&&Ve(fe,E),!ot&&(k=G&&G.onVnodeMounted)){const it=p;Ve(()=>at(k,ue,it),E)}(p.shapeFlag&256||ue&&xn(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&Ve(d.a,E),d.isMounted=!0,p=m=_=null}};d.scope.on();const R=d.effect=new qo(T);d.scope.off();const C=d.update=R.run.bind(R),K=d.job=R.runIfDirty.bind(R);K.i=d,K.id=d.uid,R.scheduler=()=>xr(K),Vt(d,!0),C()},oe=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,Ka(d,p.props,_,m),Xa(d,p.children,m),wt(),jr(d),At()},se=(d,p,m,_,E,b,I,T,R=!1)=>{const C=d&&d.children,K=d?d.shapeFlag:0,k=p.children,{patchFlag:U,shapeFlag:G}=p;if(U>0){if(U&128){rt(C,k,m,_,E,b,I,T,R);return}else if(U&256){Ze(C,k,m,_,E,b,I,T,R);return}}G&8?(K&16&&Ue(C,E,b),k!==C&&c(m,k)):K&16?G&16?rt(C,k,m,_,E,b,I,T,R):Ue(C,E,b,!0):(K&8&&c(m,""),G&16&&Q(k,m,_,E,b,I,T,R))},Ze=(d,p,m,_,E,b,I,T,R)=>{d=d||nn,p=p||nn;const C=d.length,K=p.length,k=Math.min(C,K);let U;for(U=0;U<k;U++){const G=p[U]=R?bt(p[U]):ft(p[U]);x(d[U],G,m,null,E,b,I,T,R)}C>K?Ue(d,E,b,!0,!1,k):Q(p,m,_,E,b,I,T,R,k)},rt=(d,p,m,_,E,b,I,T,R)=>{let C=0;const K=p.length;let k=d.length-1,U=K-1;for(;C<=k&&C<=U;){const G=d[C],ne=p[C]=R?bt(p[C]):ft(p[C]);if($t(G,ne))x(G,ne,m,null,E,b,I,T,R);else break;C++}for(;C<=k&&C<=U;){const G=d[k],ne=p[U]=R?bt(p[U]):ft(p[U]);if($t(G,ne))x(G,ne,m,null,E,b,I,T,R);else break;k--,U--}if(C>k){if(C<=U){const G=U+1,ne=G<K?p[G].el:_;for(;C<=U;)x(null,p[C]=R?bt(p[C]):ft(p[C]),m,ne,E,b,I,T,R),C++}}else if(C>U)for(;C<=k;)Ie(d[C],E,b,!0),C++;else{const G=C,ne=C,fe=new Map;for(C=ne;C<=U;C++){const Ge=p[C]=R?bt(p[C]):ft(p[C]);Ge.key!=null&&fe.set(Ge.key,C)}let ue,_e=0;const Ce=U-ne+1;let ot=!1,it=0;const cn=new Array(Ce);for(C=0;C<Ce;C++)cn[C]=0;for(C=G;C<=k;C++){const Ge=d[C];if(_e>=Ce){Ie(Ge,E,b,!0);continue}let lt;if(Ge.key!=null)lt=fe.get(Ge.key);else for(ue=ne;ue<=U;ue++)if(cn[ue-ne]===0&&$t(Ge,p[ue])){lt=ue;break}lt===void 0?Ie(Ge,E,b,!0):(cn[lt-ne]=C+1,lt>=it?it=lt:ot=!0,x(Ge,p[lt],m,null,E,b,I,T,R),_e++)}const Dr=ot?Ja(cn):nn;for(ue=Dr.length-1,C=Ce-1;C>=0;C--){const Ge=ne+C,lt=p[Ge],Nr=p[Ge+1],kr=Ge+1<K?Nr.el||Gi(Nr):_;cn[C]===0?x(null,lt,m,kr,E,b,I,T,R):ot&&(ue<0||C!==Dr[ue]?Ke(lt,m,kr,2):ue--)}}},Ke=(d,p,m,_,E=null)=>{const{el:b,type:I,transition:T,children:R,shapeFlag:C}=d;if(C&6){Ke(d.component.subTree,p,m,_);return}if(C&128){d.suspense.move(p,m,_);return}if(C&64){I.move(d,p,m,H);return}if(I===$e){s(b,p,m);for(let k=0;k<R.length;k++)Ke(R[k],p,m,_);s(d.anchor,p,m);return}if(I===Yn){M(d,p,m);return}if(_!==2&&C&1&&T)if(_===0)T.persisted&&!b[Ye]?s(b,p,m):(T.beforeEnter(b),s(b,p,m),Ve(()=>T.enter(b),E));else{const{leave:k,delayLeave:U,afterLeave:G}=T,ne=()=>{d.ctx.isUnmounted?r(b):s(b,p,m)},fe=()=>{const ue=b._isLeaving||!!b[Ye];b._isLeaving&&b[Ye](!0),T.persisted&&!ue?ne():k(b,()=>{ne(),G&&G()})};U?U(b,ne,fe):fe()}else s(b,p,m)},Ie=(d,p,m,_=!1,E=!1)=>{const{type:b,props:I,ref:T,children:R,dynamicChildren:C,shapeFlag:K,patchFlag:k,dirs:U,cacheIndex:G,memo:ne}=d;if(k===-2&&(E=!1),T!=null&&(wt(),_n(T,null,m,d,!0),At()),G!=null&&(p.renderCache[G]=void 0),K&256){p.ctx.deactivate(d);return}const fe=K&1&&U,ue=!xn(d);let _e;if(ue&&(_e=I&&I.onVnodeBeforeUnmount)&&at(_e,p,d),K&6)j(d.component,m,_);else{if(K&128){d.suspense.unmount(m,_);return}fe&&Lt(d,null,p,"beforeUnmount"),K&64?d.type.remove(d,p,m,H,_):C&&!C.hasOnce&&(b!==$e||k>0&&k&64)?Ue(C,p,m,!1,!0):(b===$e&&k&384||!E&&K&16)&&Ue(R,p,m),_&&Y(d)}const Ce=ne!=null&&G==null;(ue&&(_e=I&&I.onVnodeUnmounted)||fe||Ce)&&Ve(()=>{_e&&at(_e,p,d),fe&&Lt(d,null,p,"unmounted"),Ce&&(d.el=null)},m)},Y=d=>{const{type:p,el:m,anchor:_,transition:E}=d;if(p===$e){A(m,_);return}if(p===Yn){P(d);return}const b=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:I,delayLeave:T}=E,R=()=>I(m,b);T?T(d.el,b,R):R()}else b()},A=(d,p)=>{let m;for(;d!==p;)m=h(d),r(d),d=m;r(p)},j=(d,p,m)=>{const{bum:_,scope:E,job:b,subTree:I,um:T,m:R,a:C}=d;Zr(R),Zr(C),_&&zn(_),E.stop(),b&&(b.flags|=8,Ie(I,d,p,m)),T&&Ve(T,p),Ve(()=>{d.isUnmounted=!0},p)},Ue=(d,p,m,_=!1,E=!1,b=0)=>{for(let I=b;I<d.length;I++)Ie(d[I],p,m,_,E)},w=d=>{if(d.shapeFlag&6)return w(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[vi];return m?h(m):p};let V=!1;const D=(d,p,m)=>{let _;d==null?p._vnode&&(Ie(p._vnode,null,null,!0),_=p._vnode.component):x(p._vnode||null,d,p,null,null,null,m),p._vnode=d,V||(V=!0,jr(_),di(),V=!1)},H={p:x,um:Ie,m:Ke,r:Y,mt:me,mc:Q,pc:se,pbc:z,n:w,o:e};return{render:D,hydrate:void 0,createApp:Ma(D)}}function Ls({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Qa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Er(e,t,n=!1){const s=e.children,r=t.children;if($(s)&&$(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=bt(r[o]),l.el=i.el),!n&&l.patchFlag!==-2&&Er(i,l)),l.type===Es&&(l.patchFlag===-1&&(l=r[o]=bt(l)),l.el=i.el),l.type===je&&!l.el&&(l.el=i.el)}}function Ja(e){const t=e.slice(),n=[0];let s,r,o,i,l;const a=e.length;for(s=0;s<a;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<u?o=l+1:i=l;u<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function Ki(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ki(t)}function Zr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Gi(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Gi(t.subTree):null}const Wi=e=>e.__isSuspense;function Za(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):oa(e)}const $e=Symbol.for("v-fgt"),Es=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),Yn=Symbol.for("v-stc"),Qt=[];let qe=null;function Z(e=!1){Qt.push(qe=e?null:[])}function qi(){Qt.pop(),qe=Qt[Qt.length-1]||null}let Dn=1;function rs(e,t=!1){Dn+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function Xi(e){return e.dynamicChildren=Dn>0?qe||nn:null,qi(),Dn>0&&qe&&qe.push(e),e}function ie(e,t,n,s,r,o){return Xi(v(e,t,n,s,r,o,!0))}function Nn(e,t,n,s,r){return Xi(Ee(e,t,n,s,r,!0))}function os(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const zi=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||ke(e)||q(e)?{i:We,r:e,k:t,f:!!n}:e:null);function v(e,t=null,n=null,s=0,r=null,o=e===$e?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zi(t),ref:t&&Qn(t),scopeId:hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:We};return l?(is(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=ge(n)?8:16),Dn>0&&!i&&qe&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&qe.push(a),a}const Ee=ec;function ec(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Pi)&&(e=je),os(e)){const l=kt(e,t,!0);return n&&is(l,n),Dn>0&&!o&&qe&&(l.shapeFlag&6?qe[qe.indexOf(e)]=l:qe.push(l)),l.patchFlag=-2,l}if(dc(e)&&(e=e.__vccOpts),t){t=tc(t);let{class:l,style:a}=t;l&&!ge(l)&&(t.class=Se(l)),ce(a)&&(_r(a)&&!$(a)&&(a=we({},a)),t.style=pr(a))}const i=ge(e)?1:Wi(e)?128:bs(e)?64:ce(e)?4:q(e)?2:0;return v(e,t,n,s,r,i,o,!0)}function tc(e){return e?_r(e)||Fi(e)?we({},e):e:null}function kt(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:l,transition:a}=e,u=t?sc(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&zi(u),ref:t&&t.ref?n&&o?$(o)?o.concat(Qn(t)):[o,Qn(t)]:Qn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&On(c,a.clone(c)),c}function An(e=" ",t=0){return Ee(Es,null,e,t)}function nc(e,t){const n=Ee(Yn,null,e);return n.staticCount=t,n}function Ae(e="",t=!1){return t?(Z(),Nn(je,null,e)):Ee(je,null,e)}function ft(e){return e==null||typeof e=="boolean"?Ee(je):$(e)?Ee($e,null,e.slice()):os(e)?bt(e):Ee(Es,null,String(e))}function bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function is(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),is(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Fi(t)?t._ctx=We:r===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(q(t)){if(s&65){is(e,{default:t});return}t={default:t,_ctx:We},n=32}else t=String(t),s&64?(n=16,t=[An(t)]):n=8;e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Se([t.class,s.class]));else if(r==="style")t.style=pr([t.style,s.style]);else if(us(r)){const o=t[r],i=s[r];i&&o!==i&&!($(o)&&o.includes(i))?t[r]=o?[].concat(o,i):i:i==null&&o==null&&!fs(r)&&(t[r]=i)}else r!==""&&(t[r]=s[r])}return t}function at(e,t,n,s=null){Je(e,t,7,[n,s])}const rc=Ni();let oc=0;function ic(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||rc,o={uid:oc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ji(s,r),emitsOptions:ki(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Va.bind(null,o),e.ce&&e.ce(o),o}let De=null;const Yi=()=>De||We;let ls,kn;{const e=gs(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};ls=t("__VUE_INSTANCE_SETTERS__",n=>De=n),kn=t("__VUE_SSR_SETTERS__",n=>Mn=n)}const Hn=e=>{const t=De;return ls(e),e.scope.on(),()=>{e.scope.off(),ls(t)}},eo=()=>{De&&De.scope.off(),ls(null)};function Qi(e){return e.vnode.shapeFlag&4}let Mn=!1;function lc(e,t=!1,n=!1){t&&kn(t);const{props:s,children:r}=e.vnode,o=Qi(e);$a(e,s,o,t),qa(e,r,n||t);const i=o?ac(e,t):void 0;return t&&kn(!1),i}function ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ta);const{setup:s}=n;if(s){wt();const r=e.setupContext=s.length>1?uc(e):null,o=Hn(e),i=jn(s,e,0,[e.props,r]),l=jo(i);if(At(),o(),(l||e.sp)&&!xn(e)&&Ei(e),l){if(i.then(eo,eo),t)return i.then(a=>{kn(!0);try{to(e,a,t)}finally{kn(!1)}}).catch(a=>{ys(a,e,0)});e.asyncDep=i}else to(e,i)}else Ji(e)}function to(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=ci(t)),Ji(e)}function Ji(e,t,n){const s=e.type;e.render||(e.render=s.render||pt);{const r=Hn(e);wt();try{Pa(e)}finally{At(),r()}}}const cc={get(e,t){return Oe(e,"get",""),e[t]}};function uc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cc),slots:e.slots,emit:e.emit,expose:t}}function Cs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ci(zl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wn)return wn[n](e)},has(t,n){return n in t||n in wn}})):e.proxy}function fc(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function dc(e){return q(e)&&"__vccOpts"in e}const Ne=(e,t)=>ea(e,t,Mn);function Cr(e,t,n){try{rs(-1);const s=arguments.length;return s===2?ce(t)&&!$(t)?os(t)?Ee(e,null,[t]):Ee(e,t):Ee(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&os(n)&&(n=[n]),Ee(e,t,n))}finally{rs(1)}}const pc="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rr;const no=typeof window<"u"&&window.trustedTypes;if(no)try{rr=no.createPolicy("vue",{createHTML:e=>e})}catch{}const Zi=rr?e=>rr.createHTML(e):e=>e,hc="http://www.w3.org/2000/svg",gc="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,so=yt&&yt.createElement("template"),mc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?yt.createElementNS(hc,e):t==="mathml"?yt.createElementNS(gc,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{so.innerHTML=Zi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=so.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},St="transition",dn="animation",Ln=Symbol("_vtc"),el={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vc=we({},yi,el),yc=e=>(e.displayName="Transition",e.props=vc,e),Sr=yc((e,{slots:t})=>Cr(ga,bc(e),t)),Ft=(e,t=[])=>{$(e)?e.forEach(n=>n(...t)):e&&e(...t)},ro=e=>e?$(e)?e.some(t=>t.length>1):e.length>1:!1;function bc(e){const t={};for(const O in e)O in el||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=o,appearActiveClass:u=i,appearToClass:c=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,y=_c(r),x=y&&y[0],L=y&&y[1],{onBeforeEnter:N,onEnter:S,onEnterCancelled:M,onLeave:P,onLeaveCancelled:W,onBeforeAppear:X=N,onAppear:B=S,onAppearCancelled:Q=M}=t,F=(O,ee,me,Me)=>{O._enterCancelled=Me,Bt(O,ee?c:l),Bt(O,ee?u:i),me&&me()},z=(O,ee)=>{O._isLeaving=!1,Bt(O,f),Bt(O,g),Bt(O,h),ee&&ee()},J=O=>(ee,me)=>{const Me=O?B:S,ve=()=>F(ee,O,me);Ft(Me,[ee,ve]),oo(()=>{Bt(ee,O?a:o),mt(ee,O?c:l),ro(Me)||io(ee,s,x,ve)})};return we(t,{onBeforeEnter(O){Ft(N,[O]),mt(O,o),mt(O,i)},onBeforeAppear(O){Ft(X,[O]),mt(O,a),mt(O,u)},onEnter:J(!1),onAppear:J(!0),onLeave(O,ee){O._isLeaving=!0;const me=()=>z(O,ee);mt(O,f),O._enterCancelled?(mt(O,h),co(O)):(co(O),mt(O,h)),oo(()=>{O._isLeaving&&(Bt(O,f),mt(O,g),ro(P)||io(O,s,L,me))}),Ft(P,[O,me])},onEnterCancelled(O){F(O,!1,void 0,!0),Ft(M,[O])},onAppearCancelled(O){F(O,!0,void 0,!0),Ft(Q,[O])},onLeaveCancelled(O){z(O),Ft(W,[O])}})}function _c(e){if(e==null)return null;if(ce(e))return[Vs(e.enter),Vs(e.leave)];{const t=Vs(e);return[t,t]}}function Vs(e){return xl(e)}function mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ln]||(e[Ln]=new Set)).add(t)}function Bt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Ln];n&&(n.delete(t),n.size||(e[Ln]=void 0))}function oo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let xc=0;function io(e,t,n,s){const r=e._endId=++xc,o=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:l,propCount:a}=wc(e,t);if(!i)return s();const u=i+"end";let c=0;const f=()=>{e.removeEventListener(u,h),o()},h=g=>{g.target===e&&++c>=a&&f()};setTimeout(()=>{c<a&&f()},l+1),e.addEventListener(u,h)}function wc(e,t){const n=window.getComputedStyle(e),s=y=>(n[y]||"").split(", "),r=s(`${St}Delay`),o=s(`${St}Duration`),i=lo(r,o),l=s(`${dn}Delay`),a=s(`${dn}Duration`),u=lo(l,a);let c=null,f=0,h=0;t===St?i>0&&(c=St,f=i,h=o.length):t===dn?u>0&&(c=dn,f=u,h=a.length):(f=Math.max(i,u),c=f>0?i>u?St:dn:null,h=c?c===St?o.length:a.length:0);const g=c===St&&/\b(?:transform|all)(?:,|$)/.test(s(`${St}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:g}}function lo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>ao(n)+ao(e[s])))}function ao(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function co(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ac(e,t,n){const s=e[Ln];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const uo=Symbol("_vod"),Ec=Symbol("_vsh"),Cc=Symbol(""),Sc=/(?:^|;)\s*display\s*:/;function Rc(e,t,n){const s=e.style,r=ge(n);let o=!1;if(n&&!r){if(t)if(ge(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&mn(s,l,"")}else for(const i in t)n[i]==null&&mn(s,i,"");for(const i in n){i==="display"&&(o=!0);const l=n[i];l!=null?Pc(e,i,!ge(t)&&t?t[i]:void 0,l)||mn(s,i,l):mn(s,i,"")}}else if(r){if(t!==n){const i=s[Cc];i&&(n+=";"+i),s.cssText=n,o=Sc.test(n)}}else t&&e.removeAttribute("style");uo in e&&(e[uo]=o?s.display:"",e[Ec]&&(s.display="none"))}const qn=/\s*!important$/;function mn(e,t,n){if($(n))n.forEach(s=>mn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))qn.test(n)?e.setProperty(t,n.replace(qn,""),"important"):e.setProperty(t,n);else{const s=Tc(e,t);qn.test(n)?e.setProperty(Mt(s),n.replace(qn,""),"important"):e[s]=n}}const fo=["Webkit","Moz","ms"],Fs={};function Tc(e,t){const n=Fs[t];if(n)return n;let s=He(t);if(s!=="filter"&&s in e)return Fs[t]=s;s=ps(s);for(let r=0;r<fo.length;r++){const o=fo[r]+s;if(o in e)return Fs[t]=o}return t}function Pc(e,t,n,s){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ge(s)&&n===s}const po="http://www.w3.org/1999/xlink";function ho(e,t,n,s,r,o=Rl(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(po,t.slice(6,t.length)):e.setAttributeNS(po,t,n):n==null||o&&!Ko(n)?e.removeAttribute(t):e.setAttribute(t,o?"":ht(n)?String(n):n)}function go(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Zi(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ko(n):n==null&&l==="string"?(n="",i=!0):l==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(r||t)}function Kt(e,t,n,s){e.addEventListener(t,n,s)}function Ic(e,t,n,s){e.removeEventListener(t,n,s)}const mo=Symbol("_vei");function Oc(e,t,n,s,r=null){const o=e[mo]||(e[mo]={}),i=o[t];if(s&&i)i.value=s;else{const[l,a]=kc(t);if(s){const u=o[t]=Vc(s,r);Kt(e,l,u,a)}else i&&(Ic(e,l,i,a),o[t]=void 0)}}const Dc=/(Once|Passive|Capture)$/,Nc=/^on:?(?:Once|Passive|Capture)$/;function kc(e){let t,n;for(;(n=e.match(Dc))&&!Nc.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let Bs=0;const Mc=Promise.resolve(),Lc=()=>Bs||(Mc.then(()=>Bs=0),Bs=Date.now());function Vc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if($(r)){const o=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{o.call(s),s._stopped=!0};const i=r.slice(),l=[s];for(let a=0;a<i.length&&!s._stopped;a++){const u=i[a];u&&Je(u,t,5,l)}}else Je(r,t,5,[s])};return n.value=e,n.attached=Lc(),n}const vo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Fc=(e,t,n,s,r,o)=>{const i=r==="svg";t==="class"?Ac(e,s,i):t==="style"?Rc(e,n,s):us(t)?fs(t)||Oc(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bc(e,t,s,i))?(go(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ho(e,t,s,i,o,t!=="value")):e._isVueCE&&(jc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ge(s)))?go(e,He(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ho(e,t,s,i))};function Bc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&vo(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vo(t)&&ge(n)?!1:t in e}function jc(e,t){const n=e._def.props;if(!n)return!1;const s=He(t);return Array.isArray(n)?n.some(r=>He(r)===s):Object.keys(n).some(r=>He(r)===s)}const as=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>zn(t,n):t};function Hc(e){e.target.composing=!0}function yo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Gt=Symbol("_assign"),Xn=Symbol("_initialValue");function js(e,t,n){return t&&(e=e.trim()),n&&(e=hs(e)),e}const En={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e.parentNode&&(e.type==="text"?e[Xn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Xn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Gt]=as(r);const o=s||r.props&&r.props.type==="number";Kt(e,t?"change":"input",i=>{i.target.composing||e[Gt](js(e.value,n,o))}),(n||o)&&Kt(e,"change",()=>{e.value=js(e.value,n,o)}),t||(Kt(e,"compositionstart",Hc),Kt(e,"compositionend",yo),Kt(e,"change",yo))},mounted(e,{value:t,modifiers:{trim:n,number:s}}){const r=t??"",o=e[Xn];delete e[Xn],o!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==o?e[Gt](js(e.value,n,s)):e.value=r},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},i){if(e[Gt]=as(i),e.composing)return;const l=(o||e.type==="number")&&!/^0\d/.test(e.value)?hs(e.value):e.value,a=t??"";if(l===a)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===a)||(e.value=a)}},bo={deep:!0,created(e,{value:t,modifiers:{number:n}},s){e._modelValue=t,Kt(e,"change",()=>{const r=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?hs(cs(a)):cs(a)),o=e.multiple,i=o?Jt(e._modelValue)?new Set(r):r:r[0],l=e._pendingValue=[o,o?$(i)?r.slice():r:i];try{e[Gt](i)}finally{Tn(()=>{e._pendingValue===l&&(e._pendingValue=void 0)})}}),e[Gt]=as(s)},mounted(e,{value:t}){_o(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[Gt]=as(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Uc(t,n[1],n[0]))&&_o(e,t)}};function Uc(e,t,n){if(!n||$(e))return Nt(e,t);if(Jt(e)){if(e.size!==t.length)return!1;for(const s of t)if(!e.has(s))return!1;return!0}return!1}function _o(e,t){const n=e.multiple,s=$(t);if(!(n&&!s&&!Jt(t))){for(let r=0,o=e.options.length;r<o;r++){const i=e.options[r],l=cs(i);if(n)if(s){const a=typeof l;a==="string"||a==="number"?i.selected=t.some(u=>String(u)===String(l)):i.selected=Pl(t,l)>-1}else i.selected=t.has(l);else if(Nt(cs(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function cs(e){return"_value"in e?e._value:e.value}const $c=["ctrl","shift","alt","meta"],Kc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$c.some(n=>e[`${n}Key`]&&!t.includes(n))},Gc=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...o)=>{for(let i=0;i<t.length;i++){const l=Kc[t[i]];if(l&&l(r,t))return}return e(r,...o)})},Wc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},or=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const o=Mt(r.key);if(t.some(i=>i===o||Wc[i]===o))return e(r)})},qc=we({patchProp:Fc},mc);let xo;function Xc(){return xo||(xo=za(qc))}const zc=(...e)=>{const t=Xc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Qc(s);if(!r)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,Yc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function Yc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Qc(e){return ge(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const tn=typeof document<"u";function tl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Jc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&tl(e.default)}const le=Object.assign;function Hs(e,t){const n={};for(const s in t){const r=t[s];n[s]=st(r)?r.map(e):e(r)}return n}const Cn=()=>{},st=Array.isArray;function wo(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}const nl=/#/g,Zc=/&/g,eu=/\//g,tu=/=/g,nu=/\?/g,sl=/\+/g,su=/%5B/g,ru=/%5D/g,rl=/%5E/g,ou=/%60/g,ol=/%7B/g,iu=/%7C/g,il=/%7D/g,lu=/%20/g;function Rr(e){return e==null?"":encodeURI(""+e).replace(iu,"|").replace(su,"[").replace(ru,"]")}function au(e){return Rr(e).replace(ol,"{").replace(il,"}").replace(rl,"^")}function ir(e){return Rr(e).replace(sl,"%2B").replace(lu,"+").replace(nl,"%23").replace(Zc,"%26").replace(ou,"`").replace(ol,"{").replace(il,"}").replace(rl,"^")}function cu(e){return ir(e).replace(tu,"%3D")}function uu(e){return Rr(e).replace(nl,"%23").replace(nu,"%3F")}function fu(e){return uu(e).replace(eu,"%2F")}function Vn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const du=/\/$/,pu=e=>e.replace(du,"");function Us(e,t,n="/"){let s,r={},o="",i="";const l=t.indexOf("#");let a=t.indexOf("?");return a=l>=0&&a>l?-1:a,a>=0&&(s=t.slice(0,a),o=t.slice(a,l>0?l:t.length),r=e(o.slice(1))),l>=0&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=vu(s??t,n),{fullPath:s+o+i,path:s,query:r,hash:Vn(i)}}function hu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ao(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gu(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ln(t.matched[s],n.matched[r])&&ll(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ln(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ll(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!mu(e[n],t[n]))return!1;return!0}function mu(e,t){return st(e)?Eo(e,t):st(t)?Eo(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Eo(e,t){return st(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function vu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let lr=function(e){return e.pop="pop",e.push="push",e}({}),$s=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function yu(e){if(!e)if(tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pu(e)}const bu=/^[^#]+#/;function _u(e,t){return e.replace(bu,"#")+t}function xu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Ss=()=>({left:window.scrollX,top:window.scrollY});function wu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=xu(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Co(e,t){return(history.state?history.state.position-t:-1)+e}const ar=new Map;function Au(e,t){ar.set(e,t)}function Eu(e){const t=ar.get(e);return ar.delete(e),t}function Cu(e){return typeof e=="string"||e&&typeof e=="object"}function al(e){return typeof e=="string"||typeof e=="symbol"}let be=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const cl=Symbol("");be.MATCHER_NOT_FOUND+"",be.NAVIGATION_GUARD_REDIRECT+"",be.NAVIGATION_ABORTED+"",be.NAVIGATION_CANCELLED+"",be.NAVIGATION_DUPLICATED+"";function an(e,t){return le(new Error,{type:e,[cl]:!0},t)}function vt(e,t){return e instanceof Error&&cl in e&&(t==null||!!(e.type&t))}const Su=["params","query","hash"];function Ru(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Su)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Tu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(sl," "),o=r.indexOf("="),i=Vn(o<0?r:r.slice(0,o)),l=o<0?null:Vn(r.slice(o+1));if(i in t){let a=t[i];st(a)||(a=t[i]=[a]),a.push(l)}else t[i]=l}return t}function So(e){let t="";for(let n in e){const s=e[n];if(n=cu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(st(s)?s.map(r=>r&&ir(r)):[s&&ir(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Pu(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=st(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const Iu=Symbol(""),Ro=Symbol(""),Rs=Symbol(""),Tr=Symbol(""),cr=Symbol("");function pn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function It(e,t,n,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,a)=>{const u=h=>{h===!1?a(an(be.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?a(h):Cu(h)?a(an(be.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),l())},c=o(()=>e.call(s&&s.instances[r],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(h=>a(h))})}function Ks(e,t,n,s,r=o=>o()){const o=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(tl(a)){const u=(a.__vccOpts||a)[t];u&&o.push(It(u,n,s,i,l,r))}else{let u=a();o.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);const f=Jc(c)?c.default:c;i.mods[l]=c,i.components[l]=f;const h=(f.__vccOpts||f)[t];return h&&It(h,n,s,i,l,r)()}))}}return o}function Ou(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const l=t.matched[i];l&&(e.matched.find(u=>ln(u,l))?s.push(l):n.push(l));const a=e.matched[i];a&&(t.matched.find(u=>ln(u,a))||r.push(a))}return[n,s,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Du=()=>location.protocol+"//"+location.host;function ul(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let i=r.includes(e.slice(o))?e.slice(o).length:1,l=r.slice(i);return l[0]!=="/"&&(l="/"+l),Ao(l,"")}return Ao(n,e)+s+r}function Nu(e,t,n,s){let r=[],o=[],i=null;const l=({state:h})=>{const g=ul(e,location),y=n.value,x=t.value;let L=0;if(h){if(n.value=g,t.value=h,i&&i===y){i=null;return}L=x?h.position-x.position:0}else s(g);r.forEach(N=>{N(n.value,y,{delta:L,type:lr.pop,direction:L?L>0?$s.forward:$s.back:$s.unknown})})};function a(){i=n.value}function u(h){r.push(h);const g=()=>{const y=r.indexOf(h);y>-1&&r.splice(y,1)};return o.push(g),g}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(le({},h.state,{scroll:Ss()}),"")}}function f(){for(const h of o)h();o=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:a,listen:u,destroy:f}}function To(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Ss():null}}function ku(e){const{history:t,location:n}=window,s={value:ul(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(a,u,c){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:Du()+e+a;try{t[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function i(a,u){o(a,le({},t.state,To(r.value.back,a,r.value.forward,!0),u,{position:r.value.position}),!0),s.value=a}function l(a,u){const c=le({},r.value,t.state,{forward:a,scroll:Ss()});o(c.current,c,!0),o(a,le({},To(s.value,a,null),{position:c.position+1},u),!1),s.value=a}return{location:s,state:r,push:l,replace:i}}function Mu(e){e=yu(e);const t=ku(e),n=Nu(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=le({location:"",base:e,go:s,createHref:_u.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Lu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Mu(e)}let Wt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var xe=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(xe||{});const Vu={type:Wt.Static,value:""},Fu=/[a-zA-Z0-9_]/;function Bu(e){if(!e)return[[]];if(e==="/")return[[Vu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=xe.Static,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let l=0,a,u="",c="";function f(){u&&(n===xe.Static?o.push({type:Wt.Static,value:u}):n===xe.Param||n===xe.ParamRegExp||n===xe.ParamRegExpEnd?(o.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Wt.Param,value:u,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==xe.ParamRegExp){s=n,n=xe.EscapeNext;continue}switch(n){case xe.Static:a==="/"?(u&&f(),i()):a===":"?(f(),n=xe.Param):h();break;case xe.EscapeNext:h(),n=s;break;case xe.Param:a==="("?n=xe.ParamRegExp:Fu.test(a)?h():(f(),n=xe.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case xe.ParamRegExp:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=xe.ParamRegExpEnd:c+=a;break;case xe.ParamRegExpEnd:f(),n=xe.Static,a!=="*"&&a!=="?"&&a!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===xe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),r}const Po="[^/]+?",ju={sensitive:!1,strict:!1,start:!0,end:!0};var Fe=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Fe||{});const Hu=/[.+*?^${}()[\]/\\]/g;function Uu(e,t){const n=le({},ju,t),s=[];let r=n.start?"^":"";const o=[];for(const u of e){const c=u.length?[]:[Fe.Root];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let g=Fe.Segment+(n.sensitive?Fe.BonusCaseSensitive:0);if(h.type===Wt.Static)f||(r+="/"),r+=h.value.replace(Hu,"\\$&"),g+=Fe.Static;else if(h.type===Wt.Param){const{value:y,repeatable:x,optional:L,regexp:N}=h;o.push({name:y,repeatable:x,optional:L});const S=N||Po;if(S!==Po){g+=Fe.BonusCustomRegExp;try{`${S}`}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${S}): `+P.message)}}let M=x?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(M=L&&u.length<2?`(?:/${M})`:"/"+M),L&&(M+="?"),r+=M,g+=Fe.Dynamic,L&&(g+=Fe.BonusOptional),x&&(g+=Fe.BonusRepeatable),S===".*"&&(g+=Fe.BonusWildcard)}c.push(g)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=Fe.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function l(u){const c=u.match(i),f={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",y=o[h-1];f[y.name]=g&&y.repeatable?g.split("/"):g}return f}function a(u){let c="",f=!1;for(const h of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const g of h)if(g.type===Wt.Static)c+=g.value;else if(g.type===Wt.Param){const{value:y,repeatable:x,optional:L}=g,N=y in u?u[y]:"";if(st(N)&&!x)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const S=st(N)?N.join("/"):N;if(!S)if(L)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);c+=S}}return c||"/"}return{re:i,score:s,keys:o,parse:l,stringify:a}}function $u(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===Fe.Static+Fe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Fe.Static+Fe.Segment?1:-1:0}function fl(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=$u(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Io(s))return 1;if(Io(r))return-1}return r.length-s.length}function Io(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ku={strict:!1,end:!0,sensitive:!1};function Gu(e,t,n){const s=Uu(Bu(e.path),n),r=le(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Wu(e,t){const n=[],s=new Map;t=wo(Ku,t);function r(f){return s.get(f)}function o(f,h,g){const y=!g,x=Do(f);x.aliasOf=g&&g.record;const L=wo(t,f),N=[x];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of P)N.push(Do(le({},x,{components:g?g.record.components:x.components,path:W,aliasOf:g?g.record:x})))}let S,M;for(const P of N){const{path:W}=P;if(h&&W[0]!=="/"){const X=h.record.path,B=X[X.length-1]==="/"?"":"/";P.path=h.record.path+(W&&B+W)}if(S=Gu(P,h,L),g?g.alias.push(S):(M=M||S,M!==S&&M.alias.push(S),y&&f.name&&!No(S)&&i(f.name)),dl(S)&&a(S),x.children){const X=x.children;for(let B=0;B<X.length;B++)o(X[B],S,g&&g.children[B])}g=g||S}return M?()=>{i(M)}:Cn}function i(f){if(al(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function l(){return n}function a(f){const h=zu(f,n);n.splice(h,0,f),f.record.name&&!No(f)&&s.set(f.record.name,f)}function u(f,h){let g,y={},x,L;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw an(be.MATCHER_NOT_FOUND,{location:f});L=g.record.name,y=le(Oo(h.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&Oo(f.params,g.keys.map(M=>M.name))),x=g.stringify(y)}else if(f.path!=null)x=f.path,g=n.find(M=>M.re.test(x)),g&&(y=g.parse(x),L=g.record.name);else{if(g=h.name?s.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw an(be.MATCHER_NOT_FOUND,{location:f,currentLocation:h});L=g.record.name,y=le({},h.params,f.params),x=g.stringify(y)}const N=[];let S=g;for(;S;)N.unshift(S.record),S=S.parent;return{name:L,path:x,params:y,matched:N,meta:Xu(N)}}e.forEach(f=>o(f));function c(){n.length=0,s.clear()}return{addRoute:o,resolve:u,removeRoute:i,clearRoutes:c,getRoutes:l,getRecordMatcher:r}}function Oo(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Do(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:qu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function qu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function No(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xu(e){return e.reduce((t,n)=>le(t,n.meta),{})}function zu(e,t){let n=0,s=t.length;for(;n!==s;){const o=n+s>>1;fl(e,t[o])<0?s=o:n=o+1}const r=Yu(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function Yu(e){let t=e;for(;t=t.parent;)if(dl(t)&&fl(e,t)===0)return t}function dl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ko(e){const t=tt(Rs),n=tt(Tr),s=Ne(()=>{const a=Dt(e.to);return t.resolve(a)}),r=Ne(()=>{const{matched:a}=s.value,{length:u}=a,c=a[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(ln.bind(null,c));if(h>-1)return h;const g=Mo(a[u-2]);return u>1&&Mo(c)===g&&f[f.length-1].path!==g?f.findIndex(ln.bind(null,a[u-2])):h}),o=Ne(()=>r.value>-1&&tf(n.params,s.value.params)),i=Ne(()=>r.value>-1&&r.value===n.matched.length-1&&ll(n.params,s.value.params));function l(a={}){if(ef(a)){const u=t[Dt(e.replace)?"replace":"push"](Dt(e.to)).catch(Cn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Ne(()=>s.value.href),isActive:o,isExactActive:i,navigate:l}}function Qu(e){return e.length===1?e[0]:e}const Ju=Ai({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ko,setup(e,{slots:t}){const n=vs(ko(e)),{options:s}=tt(Rs),r=Ne(()=>({[Lo(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Lo(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Qu(t.default(n));return e.custom?o:Cr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),Zu=Ju;function ef(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function tf(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!st(r)||r.length!==s.length||s.some((o,i)=>o.valueOf()!==r[i].valueOf()))return!1}return!0}function Mo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lo=(e,t,n)=>e??t??n,nf=Ai({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=tt(cr),r=Ne(()=>e.route||s.value),o=tt(Ro,0),i=Ne(()=>{let u=Dt(o);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),l=Ne(()=>r.value.matched[i.value]);zt(Ro,Ne(()=>i.value+1)),zt(Iu,l),zt(cr,r);const a=he();return Yt(()=>[a.value,l.value,e.name],([u,c,f],[h,g,y])=>{c&&(c.instances[f]=u,g&&g!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),u&&c&&(!g||!ln(c,g)||!h)&&(c.enterCallbacks[f]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,f=l.value,h=f&&f.components[c];if(!h)return Vo(n.default,{Component:h,route:u});const g=f.props[c],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,L=Cr(h,le({},y,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(f.instances[c]=null)},ref:a}));return Vo(n.default,{Component:L,route:u})||L}}});function Vo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sf=nf;function rf(e){const t=Wu(e.routes,e),n=e.parseQuery||Tu,s=e.stringifyQuery||So,r=e.history,o=pn(),i=pn(),l=pn(),a=Yl(Rt);let u=Rt;tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Hs.bind(null,w=>""+w),f=Hs.bind(null,fu),h=Hs.bind(null,Vn);function g(w,V){let D,H;return al(w)?(D=t.getRecordMatcher(w),H=V):H=w,t.addRoute(H,D)}function y(w){const V=t.getRecordMatcher(w);V&&t.removeRoute(V)}function x(){return t.getRoutes().map(w=>w.record)}function L(w){return!!t.getRecordMatcher(w)}function N(w,V){if(V=le({},V||a.value),typeof w=="string"){const m=Us(n,w,V.path),_=t.resolve({path:m.path},V),E=r.createHref(m.fullPath);return le(m,_,{params:h(_.params),hash:Vn(m.hash),redirectedFrom:void 0,href:E})}let D;if(w.path!=null)D=le({},w,{path:Us(n,w.path,V.path).path});else{const m=le({},w.params);for(const _ in m)m[_]==null&&delete m[_];D=le({},w,{params:f(m)}),V.params=f(V.params)}const H=t.resolve(D,V),te=w.hash||"";H.params=c(h(H.params));const d=hu(s,le({},w,{hash:au(te),path:H.path})),p=r.createHref(d);return le({fullPath:d,hash:te,query:s===So?Pu(w.query):w.query||{}},H,{redirectedFrom:void 0,href:p})}function S(w){return typeof w=="string"?Us(n,w,a.value.path):le({},w)}function M(w,V){if(u!==w)return an(be.NAVIGATION_CANCELLED,{from:V,to:w})}function P(w){return B(w)}function W(w){return P(le(S(w),{replace:!0}))}function X(w,V){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:H}=D;let te=typeof H=="function"?H(w,V):H;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=S(te):{path:te},te.params={}),le({query:w.query,hash:w.hash,params:te.path!=null?{}:w.params},te)}}function B(w,V){const D=u=N(w),H=a.value,te=w.state,d=w.force,p=w.replace===!0,m=X(D,H);if(m)return B(le(S(m),{state:typeof m=="object"?le({},te,m.state):te,force:d,replace:p}),V||D);const _=D;_.redirectedFrom=V;let E;return!d&&gu(s,H,D)&&(E=an(be.NAVIGATION_DUPLICATED,{to:_,from:H}),Ke(H,H,!0,!1)),(E?Promise.resolve(E):z(_,H)).catch(b=>vt(b)?vt(b,be.NAVIGATION_GUARD_REDIRECT)?b:rt(b):se(b,_,H)).then(b=>{if(b){if(vt(b,be.NAVIGATION_GUARD_REDIRECT))return B(le({replace:p},S(b.to),{state:typeof b.to=="object"?le({},te,b.to.state):te,force:d}),V||_)}else b=O(_,H,!0,p,te);return J(_,H,b),b})}function Q(w,V){const D=M(w,V);return D?Promise.reject(D):Promise.resolve()}function F(w){const V=A.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(w):w()}function z(w,V){let D;const[H,te,d]=Ou(w,V);D=Ks(H.reverse(),"beforeRouteLeave",w,V);for(const m of H)m.leaveGuards.forEach(_=>{D.push(It(_,w,V))});const p=Q.bind(null,w,V);return D.push(p),Ue(D).then(()=>{D=[];for(const m of o.list())D.push(It(m,w,V));return D.push(p),Ue(D)}).then(()=>{D=Ks(te,"beforeRouteUpdate",w,V);for(const m of te)m.updateGuards.forEach(_=>{D.push(It(_,w,V))});return D.push(p),Ue(D)}).then(()=>{D=[];for(const m of d)if(m.beforeEnter)if(st(m.beforeEnter))for(const _ of m.beforeEnter)D.push(It(_,w,V));else D.push(It(m.beforeEnter,w,V));return D.push(p),Ue(D)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),D=Ks(d,"beforeRouteEnter",w,V,F),D.push(p),Ue(D))).then(()=>{D=[];for(const m of i.list())D.push(It(m,w,V));return D.push(p),Ue(D)}).catch(m=>vt(m,be.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function J(w,V,D){l.list().forEach(H=>F(()=>H(w,V,D)))}function O(w,V,D,H,te){const d=M(w,V);if(d)return d;const p=V===Rt,m=tn?history.state:{};D&&(H||p?r.replace(w.fullPath,le({scroll:p&&m&&m.scroll},te)):r.push(w.fullPath,te)),a.value=w,Ke(w,V,D,p),rt()}let ee;function me(){ee||(ee=r.listen((w,V,D)=>{if(!j.listening)return;const H=N(w),te=X(H,j.currentRoute.value);if(te){B(le(te,{replace:!0,force:!0}),H).catch(Cn);return}u=H;const d=a.value;tn&&Au(Co(d.fullPath,D.delta),Ss()),z(H,d).catch(p=>vt(p,be.NAVIGATION_ABORTED|be.NAVIGATION_CANCELLED)?p:vt(p,be.NAVIGATION_GUARD_REDIRECT)?(B(le(S(p.to),{force:!0}),H).then(m=>{vt(m,be.NAVIGATION_ABORTED|be.NAVIGATION_DUPLICATED)&&!D.delta&&D.type===lr.pop&&r.go(-1,!1)}).catch(Cn),Promise.reject()):(D.delta&&r.go(-D.delta,!1),se(p,H,d))).then(p=>{p=p||O(H,d,!1),p&&(D.delta&&!vt(p,be.NAVIGATION_CANCELLED)?r.go(-D.delta,!1):D.type===lr.pop&&vt(p,be.NAVIGATION_ABORTED|be.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),J(H,d,p)}).catch(Cn)}))}let Me=pn(),ve=pn(),oe;function se(w,V,D){rt(w);const H=ve.list();return H.length?H.forEach(te=>te(w,V,D)):console.error(w),Promise.reject(w)}function Ze(){return oe&&a.value!==Rt?Promise.resolve():new Promise((w,V)=>{Me.add([w,V])})}function rt(w){return oe||(oe=!w,me(),Me.list().forEach(([V,D])=>w?D(w):V()),Me.reset()),w}function Ke(w,V,D,H){const{scrollBehavior:te}=e;if(!tn||!te)return Promise.resolve();const d=!D&&Eu(Co(w.fullPath,0))||(H||!D)&&history.state&&history.state.scroll||null;return Tn().then(()=>te(w,V,d)).then(p=>p&&wu(p)).catch(p=>se(p,w,V))}const Ie=w=>r.go(w);let Y;const A=new Set,j={currentRoute:a,listening:!0,addRoute:g,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:L,getRoutes:x,resolve:N,options:e,push:P,replace:W,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:i.add,afterEach:l.add,onError:ve.add,isReady:Ze,install(w){w.component("RouterLink",Zu),w.component("RouterView",sf),w.config.globalProperties.$router=j,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(a)}),tn&&!Y&&a.value===Rt&&(Y=!0,P(r.location).catch(H=>{}));const V={};for(const H in Rt)Object.defineProperty(V,H,{get:()=>a.value[H],enumerable:!0});w.provide(Rs,j),w.provide(Tr,li(V)),w.provide(cr,a);const D=w.unmount;A.add(w),w.unmount=function(){A.delete(w),A.size<1&&(u=Rt,ee&&ee(),ee=null,a.value=Rt,Y=!1,oe=!1),D()}}};function Ue(w){return w.reduce((V,D)=>V.then(()=>F(D)),Promise.resolve())}return j}function of(){return tt(Rs)}function lf(e){return tt(Tr)}const pl="zhixueshu_";function Gs(e){return pl+e}const Pe={get(e,t=null){try{const n=localStorage.getItem(Gs(e));return n===null?t:JSON.parse(n)}catch(n){return console.warn("storage get error:",e,n),t}},set(e,t){try{return localStorage.setItem(Gs(e),JSON.stringify(t)),!0}catch(n){return console.warn("storage set error:",e,n),!1}},remove(e){try{return localStorage.removeItem(Gs(e)),!0}catch(t){return console.warn("storage remove error:",e,t),!1}},clearAll(){try{const e=[];for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);n&&n.startsWith(pl)&&e.push(n)}return e.forEach(t=>localStorage.removeItem(t)),!0}catch(e){return console.warn("storage clearAll error:",e),!1}}};function Te(){return Date.now().toString(36)+Math.random().toString(36).substr(2,9)}function yd(e,t="YYYY-MM-DD HH:mm"){const n=new Date(e),s=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),o=String(n.getDate()).padStart(2,"0"),i=String(n.getHours()).padStart(2,"0"),l=String(n.getMinutes()).padStart(2,"0");return t.replace("YYYY",s).replace("MM",r).replace("DD",o).replace("HH",i).replace("mm",l)}function bd(){const e=new Date().getHours();return e<6?"凌晨好":e<9?"早上好":e<12?"上午好":e<14?"中午好":e<17?"下午好":e<19?"傍晚好":"晚上好"}const hl="users",Pr="currentUser";function Fn(){return Pe.get(hl,[])}function Ir(e){Pe.set(hl,e)}function af(e){return Fn().find(n=>n.username===e)}const cf=["student","teacher"];function _d(e,t,n="student"){if(!cf.includes(n))return{success:!1,message:"不支持的角色类型"};const s=Fn();if(s.find(o=>o.username===e))return{success:!1,message:"账号已存在"};const r={id:Te(),username:e,password:t,role:n,nickname:e,createdAt:Date.now()};return s.push(r),Ir(s),{success:!0,message:"注册成功",user:r}}function xd(){const e=Ts();return(e==null?void 0:e.role)==="teacher"||(e==null?void 0:e.role)==="admin"}function wd(){const e=Ts();return(e==null?void 0:e.role)==="admin"}function uf(e,t){const n=af(e);if(!n)return{success:!1,message:"账号不存在"};if(n.password!==t)return{success:!1,message:"密码错误"};const s={id:n.id,username:n.username,nickname:n.nickname,role:n.role,token:"token_"+Te(),loginTime:Date.now()};return Pe.set(Pr,s),{success:!0,message:"登录成功",user:s}}function Ad(){Pe.remove(Pr)}function Ts(){return Pe.get(Pr,null)}function ff(){return!!Ts()}function Ed(e,t,n){const s=Fn(),r=s.findIndex(o=>o.id===e);return r===-1?{success:!1,message:"用户不存在"}:s[r].password!==t?{success:!1,message:"原密码错误"}:(s[r].password=n,Ir(s),{success:!0,message:"密码修改成功"})}function Cd(e){return/^[a-zA-Z0-9_]{4,16}$/.test(e)}function Sd(e){return/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/.test(e)}function df(){const t=Fn().some(o=>o.id&&o.id.includes("_user_")),n=Pe.get("schema_version",0);if((t||n<3)&&(console.log("[initMockData] 检测到旧数据格式，清理全部重新初始化"),Pe.clearAll(),Pe.set("schema_version",3)),Fn().length===0){const o=[{id:"admin",username:"admin",password:"admin123",role:"admin",nickname:"系统管理员",createdAt:Date.now()-2592e6},{id:"teacher",username:"teacher",password:"teacher123",role:"teacher",nickname:"李老师",createdAt:Date.now()-1728e6},{id:"student",username:"student",password:"student123",role:"student",nickname:"小明同学",createdAt:Date.now()-864e6}];Ir(o),console.log("已初始化示例账号: admin/admin123, teacher/teacher123, student/student123");const i=[{id:"leave_001",studentId:"student",studentName:"小明同学",teacherId:"teacher",type:"病假",startDate:"2026-09-15",endDate:"2026-09-16",days:2,reason:"因感冒发烧，身体不适，需回家休息治疗，特请假2天。",status:"pending",createdAt:Date.now()-36e5*5},{id:"leave_002",studentId:"student",studentName:"小明同学",teacherId:"teacher",type:"事假",startDate:"2026-09-10",endDate:"2026-09-10",days:1,reason:"家中有事，需回家处理，请假一天。",status:"approved",approveRemark:"同意，注意返校后及时补交作业。",approvedAt:Date.now()-864e5*3,createdAt:Date.now()-864e5*4},{id:"leave_003",studentId:"student",studentName:"小明同学",teacherId:"teacher",type:"其他",startDate:"2026-09-01",endDate:"2026-09-02",days:2,reason:"个人事务请假2天。",status:"rejected",approveRemark:"请假事由不充分，请补充详细说明后重新申请。",approvedAt:Date.now()-864e5*10,createdAt:Date.now()-864e5*12}];Pe.set("leaves_student",i),console.log("已初始化示例请假数据")}if(Pe.get("announcements",null)===null){const o=[{id:Te(),title:"【重要】2026-2027学年期末考试安排通知",content:`各位同学：

本学期期末考试将于第18周（1月5日-1月9日）正式开始。请各位同学提前做好复习准备，按时参加考试。

📅 考试时间：第18周 周一至周五
📍 考试地点：各教学楼考场（具体考场请查看教务系统）
⚠️ 注意事项：
1. 请携带学生证或身份证参加考试
2. 严禁携带手机等电子设备进入考场
3. 考试迟到15分钟以上不得入场
4. 请遵守考场纪律，诚信考试

祝大家考试顺利，取得理想成绩！`,authorId:"system",authorName:"教务处",important:!0,createdAt:Date.now()-864e5},{id:Te(),title:"关于开展校园安全文明月活动的通知",content:`为进一步加强校园安全管理，提升全体师生的安全意识，学校决定自本月起开展"校园安全文明月"活动。

活动内容包括：
• 安全知识讲座（每周三下午 3:00 大礼堂）
• 消防演练（本月底前分批进行）
• 宿舍安全大检查
• 防诈骗主题班会

请各班级积极组织参与，共建平安校园！`,authorId:"system",authorName:"学生工作处",important:!0,createdAt:Date.now()-1728e5},{id:Te(),title:"校园招聘会即将举办，50+企业齐聚体育馆",content:`2026年秋季校园双选会将于本周五在学校体育馆举办，届时将有来自省内外的50+知名企业到场招聘。

🕐 时间：本周五 9:00 - 16:00
📍 地点：学校体育馆
🎓 覆盖岗位：大数据、软件开发、测试、产品运营、市场营销等

💡 温馨提示：
• 请提前准备好纸质简历和电子简历
• 建议穿着得体
• 可先登录学校就业网查看参会企业名单

预祝大家都能找到心仪的工作！`,authorId:"system",authorName:"就业指导中心",createdAt:Date.now()-2592e5},{id:Te(),title:"智学书新版本发布：新增失物招领与快递代取功能",content:`各位同学，智学书平台 V2.0 版本已正式上线！本次更新新增以下功能：

🆕 失物招领：校园失物一键发布，快速找回丢失物品
📦 快递代取：填楼号即可预约代取快递
📝 请假流程优化：支持 AI 生成请假理由
📚 成绩多学期查看：支持 5 学期成绩切换
📅 完整周课表：周一至周五全部课程一览

欢迎同学们体验使用，有任何建议欢迎在"意见反馈"中提交！`,authorId:"system",authorName:"智学书团队",createdAt:Date.now()-3456e5},{id:Te(),title:"关于2027年普通专升本考试报名的通知",content:`山东省2027年普通高等教育专升本考试报名工作即将开始，请有意向的同学及时关注。

📋 报名条件：
• 山东省内高校应届专科毕业生
• 思想政治品德良好
• 身体状况符合要求

📝 报名时间：预计 2026年12月中下旬
📚 考试时间：预计 2027年3月中下旬

具体政策请咨询辅导员或关注山东省教育招生考试院官网。智学书平台也将持续更新相关资讯和备考资源。`,authorId:"system",authorName:"教务处",createdAt:Date.now()-432e6},{id:Te(),title:"图书馆2026年秋季开放时间调整通知",content:`为更好地服务广大师生学习，图书馆自即日起开放时间调整如下：

📅 周一至周五：7:30 - 22:30
📅 周六至周日：8:00 - 22:00

电子阅览室和自习室同步开放。

请同学们文明借阅，爱护书籍，保持安静的学习环境。`,authorId:"system",authorName:"图书馆",createdAt:Date.now()-5184e5},{id:Te(),title:"关于举办第十届校园编程大赛的通知",content:`为提升同学们的编程能力和创新意识，学校将举办第十届校园编程大赛。

🏆 比赛奖项：
• 一等奖（2名）：5000元奖金 + 实习推荐
• 二等奖（5名）：2000元奖金
• 三等奖（10名）：800元奖金
• 优秀奖（若干）：精美纪念品

📝 报名截止：2026年11月30日
🕐 比赛时间：2026年12月10日 9:00-12:00
📍 比赛地点：实训楼305机房

欢迎各位编程爱好者踊跃报名参加！`,authorId:"system",authorName:"计算机学院",createdAt:Date.now()-6912e5},{id:Te(),title:"冬季体育活动月开始啦！篮球、足球、羽毛球赛报名中",content:`为丰富同学们的课余生活，增强体质，学校决定举办冬季体育活动月。

🏀 比赛项目：篮球联赛、足球联赛、羽毛球团体赛、乒乓球赛
📝 报名方式：以班级为单位报名，上报至学生会体育部
🕐 比赛时间：11月下旬 - 12月中旬（每周六、日）
📍 比赛地点：学校体育馆、室外体育场

欢迎同学们积极参与，展现青春活力！`,authorId:"system",authorName:"校团委",createdAt:Date.now()-864e6},{id:Te(),title:"关于实训登记工作的重要提醒",content:`各位同学：

请尚未完成本学期实训登记的同学尽快在智学书平台上登记。实训登记是教学计划的重要组成部分，将计入实践教学成绩。

📌 注意事项：
• 实训公司名称、岗位需填写完整
• 开始和结束日期要准确
• 实训内容描述请详细撰写
• 每周至少记录1条实训日志

如遇问题，请联系辅导员或实训指导教师。`,authorId:"system",authorName:"教务处",createdAt:Date.now()-10368e5},{id:Te(),title:"智学书AI助手使用指南：让学习更高效",content:`智学书AI 智能助手已经上线一段时间了，不少同学还不知道怎么用，来看看它能帮你做什么：

🤖 核心能力：
• 智能问答：学习中遇到问题随时提问
• 请假理由生成：一句话帮你写出规范的请假理由
• 简历润色：求职简历一键优化
• 学习规划：根据你的目标制定学习计划

💡 使用方法：
点击首页右下角的蓝色圆形按钮即可打开 AI 助手面板，支持连续对话。

快去试试吧！`,authorId:"system",authorName:"智学书团队",createdAt:Date.now()-1296e6},{id:Te(),title:"关于防范校园电信网络诈骗的提醒",content:`近期学校周边出现多起电信网络诈骗案例，请同学们提高警惕！

🚨 常见诈骗手段：
1. 冒充老师、辅导员要求转账
2. 虚假刷单返利
3. 虚假网贷、校园贷
4. 冒充快递员发送钓鱼链接
5. 游戏账号虚假交易

✅ 防骗要点：
• 不轻信陌生来电
• 不点击可疑链接
• 不向陌生人转账
• 遇到可疑情况立即报警或联系辅导员

保护好自己的钱袋子！`,authorId:"system",authorName:"保卫处",important:!0,createdAt:Date.now()-1728e6},{id:Te(),title:"校园快递驿站迁移通知",content:`各位同学：

因校园规划调整，校园快递驿站将于11月25日正式搬迁至新食堂西侧一楼大厅。

📍 新驿站位置：新食堂西侧一楼（原临时超市位置）
🕐 营业时间：周一至周日 9:00 - 20:00

菜鸟、京东、顺丰、中通、圆通等快递将统一迁入新驿站。

搬迁期间（11月23-24日）快递可能有短暂延迟，敬请谅解！`,authorId:"system",authorName:"后勤管理处",createdAt:Date.now()-216e7}];Pe.set("announcements",o)}}const pf=[{keywords:["请假","请假流程","怎么请假","如何请假"],answer:`请假流程如下：

1. 登录智学书，进入「校园服务」-「请假申请」
2. 选择请假类型（事假/病假/公假/其他）
3. 填写开始时间和结束时间
4. 详细填写请假事由
5. 提交后等待辅导员审批

⚠️ 注意事项：
• 病假超过3天需附医院证明
• 请假需提前1天申请
• 节假日前后请假需额外审批

需要我帮你生成请假理由吗？`},{keywords:["实训","实习","实训登记","实习登记"],answer:`实训登记指南：

1. 进入「校园服务」-「实训登记」
2. 点击「新增实训」
3. 填写实训单位、岗位、时间
4. 填写指导老师姓名
5. 记录实训内容和总结

📝 实训要求：
• 每周至少记录1次实训心得
• 实训结束后提交完整报告
• 需指导老师签字确认`},{keywords:["奖学金","助学金","申请奖学金"],answer:`奖学金申请指南：

🏆 国家奖学金（8000元/年）
• 成绩专业前5%
• 社会实践突出

📚 国家励志奖学金（5000元/年）
• 家庭经济困难
• 成绩专业前20%

💰 国家助学金
• 一等：4400元/年
• 二等：3300元/年
• 三等：2200元/年

⏰ 申请时间：每年9-10月
📍 申请地点：辅导员办公室`},{keywords:["校园卡","饭卡","校园卡丢失","补办"],answer:`校园卡相关问题：

🔄 补办流程：
1. 先到食堂一楼自助机挂失
2. 携带身份证到卡务中心补办
3. 缴纳工本费20元
4. 立等可取

📍 卡务中心位置：行政楼1楼
⏰ 工作时间：周一至周五 8:30-17:00

💡 小贴士：
• 校园卡丢失请立即挂失
• 可绑定微信/支付宝充值
• 门禁功能需单独开通`},{keywords:["选课","选课系统","怎么选课"],answer:`选课指南：

📅 选课时间：
• 正选：每学期期末第16周
• 补退选：开学前两周

📱 选课方式：
1. 登录教务系统
2. 进入「学生选课」
3. 选择课程并确认
4. 检查选课结果

⚠️ 注意事项：
• 注意选课优先级（高年级优先）
• 选修课有学分要求
• 选课前看好上课时间，避免冲突
• 体育课需选择具体项目`},{keywords:["成绩","查成绩","成绩单"],answer:`成绩查询方式：

1️⃣ 教务系统查询
• 登录学校教务管理系统
• 进入「成绩查询」
• 选择学期查看

2️⃣ 智学书快捷查看
• （功能开发中，敬请期待）

📝 关于绩点：
• 90-100分 = 4.0绩点
• 85-89分 = 3.7绩点
• 82-84分 = 3.3绩点
• 78-81分 = 3.0绩点
• 75-77分 = 2.7绩点
• 72-74分 = 2.3绩点
• 68-71分 = 2.0绩点
• 64-67分 = 1.5绩点
• 60-63分 = 1.0绩点
• <60分 = 0绩点`},{keywords:["图书馆","借书","图书馆开放时间"],answer:`图书馆使用指南：

⏰ 开放时间：
• 周一至周日：8:00 - 22:00
• 节假日：9:00 - 17:00

📖 借阅规则：
• 本科生可借20册
• 借期30天，可续借1次
• 超期罚款0.1元/天

📍 楼层分布：
• 1楼：大厅、自助借还机
• 2楼：文学、历史类
• 3楼：科技、计算机类
• 4楼：自习室、电子阅览室

💡 小贴士：考试周位置紧张，建议早去！`},{keywords:["食堂","饭堂","吃饭","美食"],answer:`校园美食指南：

🍽️ 第一食堂
• 位置：教学楼附近
• 特色：家常菜、自选餐
• 人均：10-15元

🍜 第二食堂
• 位置：宿舍区
• 特色：各地风味小吃
• 人均：8-12元

☕ 咖啡厅
• 位置：图书馆1楼
• 特色：咖啡、简餐、学习空间
• 人均：15-25元

⏰ 供餐时间：
• 早餐：6:30-9:00
• 午餐：11:00-13:00
• 晚餐：17:00-19:00
• 夜宵：19:00-21:30（二食堂）`},{keywords:["宿舍","寝室","宿舍管理","报修"],answer:`宿舍生活指南：

🔧 设施报修：
• 线上：智学书「后勤报修」（即将上线）
• 电话：拨打后勤服务热线

⏰ 作息时间：
• 宿舍开门：6:00
• 宿舍关门：23:00
• 熄灯时间：23:30（周五六24:00）

📶 网络服务：
• 校园WiFi：EDU-Student
• 运营商：移动/电信/联通
• 办理地点：校园营业厅

⚠️ 注意：
• 严禁使用大功率电器
• 注意防火防盗
• 保持宿舍卫生`}],hf=[{keywords:["专升本","统招专升本","专升本怎么准备"],answer:`专升本备考全攻略：

📅 时间线：
• 大二上：了解政策，确定目标
• 大二下：开始基础复习
• 大三上：强化提升
• 大三下：冲刺+考试

📚 考试科目：
• 公共课：英语 + 政治/高数
• 专业课：根据专业不同

🏫 院校选择建议：
1. 根据自身实力合理定位
2. 参考历年分数线
3. 考虑城市、专业排名
4. 关注招生计划变化

💡 备考建议：
• 英语是拉分大户，早准备
• 专业课重在理解和记忆
• 真题很重要，多刷几遍

需要我帮你制定学习计划吗？`},{keywords:["简历","简历怎么写","简历模板"],answer:`优秀简历的秘诀：

📄 简历基本结构：
1. 个人信息（姓名、电话、邮箱、求职意向）
2. 教育经历（学校、专业、绩点、获奖）
3. 实习/工作经历（重点！）
4. 项目经历
5. 技能证书
6. 自我评价（可选）

✍️ 经历撰写 STAR 法则：
• S - Situation 背景
• T - Task 任务
• A - Action 行动
• R - Result 结果（量化！）

❌ 简历避坑：
• 不要写"精通"，写"熟练使用"
• 不要一份简历投所有岗位
• 不要有错别字
• 照片要正式

需要我帮你生成简历片段或润色吗？`},{keywords:["面试","面试技巧","面试常见问题"],answer:`面试通关指南：

🎯 面试前准备：
1. 了解公司和岗位
2. 准备自我介绍（1-3分钟版）
3. 熟悉简历内容
4. 准备3-5个问题问面试官
5. 提前10-15分钟到达

❓ 常见问题及思路：

Q: 请自我介绍一下
A: 基本信息+核心优势+为什么适合

Q: 你的优缺点是什么？
A: 优点结合岗位说，缺点说正在改进的

Q: 为什么选择我们公司？
A: 夸公司+匹配自己的规划

Q: 你有什么问题要问我吗？
A: 团队、培训、岗位挑战等

💡 小贴士：
• 保持微笑和眼神交流
• 语速适中，不要太急
• 真诚最重要，不要套模板`},{keywords:["求职","找工作","招聘","秋招","春招"],answer:`求职时间线与渠道：

📅 求职黄金期：
• 秋招：9-11月（机会最多！）
• 春招：2-4月（补招）
• 暑期实习：5-7月

🔍 求职渠道：
1. 校园招聘（最推荐）
2. 招聘网站：BOSS直聘、智联、前程无忧
3. 企业官网校招页面
4. 内推（效率最高）

📝 求职材料：
• 针对性简历（不同岗位不同版本）
• 作品集（设计/技术类）
• 成绩单复印件
• 证书复印件

💡 建议：
• 海投是基础，但要有重点
• 每次面试后做总结
• 不要只看薪资，看成长空间`},{keywords:["职业规划","未来发展","方向选择"],answer:`职业规划小贴士：

🤔 自我探索：
• 我喜欢做什么？（兴趣）
• 我擅长做什么？（能力）
• 我看重什么？（价值观）

🛤️ 职业路径参考（以计算机为例）：

技术路线：
初级 → 中级 → 高级 → 架构师 → 技术总监

管理路线：
工程师 → 组长 → 经理 → 总监 → CTO

产品路线：
运营/开发 → 产品经理 → 产品总监 → CPO

💡 探索方法：
• 实习体验（最有效）
• 和学长学姐交流
• 看招聘JD了解要求
• 尝试做副业/项目

记住：职业规划不是一成不变的，是动态调整的！`},{keywords:["考研","考研怎么准备","考研和专升本"],answer:`考研备考指南：

📅 考研时间线：
• 大三上：确定目标院校专业
• 大三下-暑假：基础复习
• 大四上9-10月：强化冲刺
• 12月底：全国统考
• 次年2-3月：出分、复试

📚 考试科目：
• 政治（100分）
• 英语一/二（100分）
• 数学一/二/三 或 专业课一（150分）
• 专业课二（150分）

🎯 院校选择：
• 冲：比本科高1-2档的学校
• 稳：和本科相当的学校
• 保：比本科稍低的学校

💡 专升本后考研：
• 和普通本科考研完全一样
• 部分院校可能有加试（很少）
• 建议专升本期间就开始准备英语`},{keywords:["公务员","考公","考编","事业单位"],answer:`考公/考编指南：

📋 考试类型：
• 国考：每年10月报名，12月考试
• 省考：每年2-3月报名，3-4月考试
• 事业单位：各省市时间不同
• 选调生：仅限应届毕业生

📚 考试内容：
• 行测：言语、数量、判断、资料、常识
• 申论：阅读理解、综合分析、大作文
• 公基：法律、政治、经济、文史等（事业单位）

🏛️ 岗位选择：
• 限制条件越多，竞争越小
• 专业限制 > 学历限制 > 应届生
• 关注报录比

💡 备考建议：
• 行测先学方法再刷题
• 申论要动手写，不要只看
• 真题是最好的资料
• 可以同时准备国考+省考`},{keywords:["兼职","打工","副业","赚钱"],answer:`大学生兼职/副业指南：

✅ 推荐的兼职类型：

1. 校园兼职
• 图书馆管理员
• 助教/助研
• 校园大使
• 优点：安全、方便、不坑

2. 技能变现
• 设计接单（PS/海报）
• 文案写作
• 编程开发
• 翻译
• 优点：单价高、锻炼能力

3. 自媒体/内容创作
• 小红书/抖音/B站
• 需要长期投入
• 天花板高

❌ 避坑提醒：
• 先交钱的都是骗子
• 刷单违法且易被骗
• 不要泄露个人信息
• 小心传销陷阱

💡 建议：优先选能提升能力的兼职！`}];function gf(e,t="campus"){const n=t==="campus"?pf:hf,s=e.toLowerCase();let r=null,o=0;for(const i of n){let l=0;for(const a of i.keywords)s.includes(a.toLowerCase())&&l++;l>o&&(o=l,r=i)}return r}function mf(e,t){const n=["你好","您好","hi","hello","在吗","在不"];for(const r of n)if(e.toLowerCase().includes(r.toLowerCase()))return`你好呀！我是 智学书AI 助手 👋

我可以帮你解答${t==="campus"?"校园办事相关问题":"校外升学求职问题"}，也可以帮你：

📝 生成请假理由
📄 生成简历片段
📚 生成专升本学习计划

有什么我能帮到你的吗？`;const s=["谢谢","感谢","多谢","thx","thanks"];for(const r of s)if(e.toLowerCase().includes(r.toLowerCase()))return`不客气～能帮到你我很开心！😊

如果还有其他问题，随时问我哦～`;return`抱歉，我暂时没有找到关于「${e}」的相关信息 😅

你可以试试问我：
${t==="campus"?`• 请假流程
• 奖学金申请
• 校园卡补办
• 图书馆开放时间`:`• 专升本怎么准备
• 简历怎么写
• 面试技巧
• 职业规划`}

或者点击下方的快捷问题按钮，快速提问！`}function vf(e="事假",t=1){const n={事假:[`因家中有急事需要处理，特请假${t}天（${t===1?"今天":"共"+t+"天"}）。期间我会安排好学业，请假结束后及时补交作业。恳请批准！`,`家中长辈身体不适，需回家陪同就医。特请假${t}天，预计${t}日后返校。请假期间我会保持联系，如有重要事项请通过手机联系我。望批准！`,`需参加家庭重要事务（如直系亲属婚礼等），特请假${t}天。我已和同学做好笔记交接，不会耽误课程学习。恳请辅导员批准！`],病假:[`因身体不适（感冒发烧/急性肠胃炎），医生建议休息${t}天。特申请病假${t}天，附医院诊断证明。康复后我会尽快补上落下的课程。望批准！`,`昨日突发身体不适，前往医院检查后医生建议卧床休息${t}天。特申请病假，期间我会自学课程内容，如有问题及时向老师和同学请教。请批准！`,`因长期疲劳导致身体状态不佳，需要${t}天调理恢复。为避免影响学习效率，特申请病假${t}天。我会在休息同时保持学习进度。望批准！`],公假:[`代表学校参加${t===1?"省级":"全国"}大学生竞赛，特申请公假${t}天。参赛期间我会合理安排时间，尽量不影响学业。返校后补交相关证明。望批准！`,`因参加学校组织的社会实践/志愿服务活动，需请假${t}天。此活动为学校认可的公假事项，相关证明材料已提交。请批准！`],其他:[`因个人特殊原因，需请假${t}天。具体事由已与辅导员当面沟通说明。请假期间我会关注学习动态，不耽误学业。恳请批准！`,`因预约了重要事务办理（证件/手续等），特请假${t}天。事情处理完后立即返校学习。请批准！`]},s=n[e]||n.事假,r=Math.floor(Math.random()*s.length);return s[r]}function yf(e="前端开发",t=""){const n={前端开发:{title:"前端开发工程师 - 实习经历描述",content:`【公司名称】科技有限公司 | 前端开发实习生
202X.XX - 202X.XX

• 参与公司核心产品的前端开发工作，使用 Vue3 + TypeScript + Element Plus 技术栈，独立完成 3+ 业务模块开发
• 优化页面加载性能，通过代码分割、图片懒加载等手段将首屏加载时间从 3.2s 优化至 1.5s，提升 53%
• 封装 10+ 通用业务组件，提升团队开发效率约 30%
• 参与前端工程化建设，搭建项目脚手架，完善 CI/CD 流程
• 与后端、产品团队紧密协作，参与需求评审和技术方案讨论，确保项目按时交付`},后端开发:{title:"后端开发工程师 - 项目经历描述",content:`校园二手交易平台 | 项目负责人 & 后端开发
202X.XX - 202X.XX

• 从 0 到 1 搭建校园二手交易平台后端服务，使用 Spring Boot + MySQL + Redis 技术栈
• 设计并实现用户、商品、订单、消息等核心模块，数据库表设计 20+ 张
• 使用 Redis 实现商品缓存和热门商品排行榜，接口响应时间降低 60%
• 实现基于 JWT 的用户认证体系，支持 token 刷新和单点登录
• 项目上线后累计注册用户 500+，日均访问量 2000+，运行稳定无重大故障`},产品经理:{title:"产品经理 - 实习经历描述",content:`【公司名称】互联网公司 | 产品实习生
202X.XX - 202X.XX

• 参与公司核心产品的需求分析和产品设计，独立负责 2 个功能模块从 0 到 1 的落地
• 深入用户调研，访谈 20+ 目标用户，输出用户画像和需求文档，为产品决策提供数据支撑
• 撰写 PRD 文档 10+ 篇，绘制产品原型 30+ 页面，协调设计、开发、测试团队确保项目按计划推进
• 跟踪产品数据，通过数据分析提出 5+ 优化建议，上线后核心转化率提升 15%
• 参与竞品分析和市场调研，输出竞品分析报告，帮助团队把握产品方向`},运营:{title:"运营专员 - 实习经历描述",content:`【公司名称】新媒体运营实习生
202X.XX - 202X.XX

• 负责公司微信公众号、小红书、抖音等多平台内容运营，独立完成选题、写作、排版全流程
• 实习期间产出 50+ 篇原创内容，其中 10W+ 爆款文章 3 篇，公众号粉丝增长 20000+
• 策划并执行 3 场线上活动，累计参与人数 50000+，新增用户 8000+
• 建立数据看板，每日跟踪内容数据表现，优化内容策略，平均阅读量提升 40%
• 协助搭建用户社群 5 个，社群活跃度维持在 30% 以上，促进用户转化`},UI设计:{title:"UI 设计师 - 项目经历描述",content:`校园 APP UI 重设计项目 | 主设计师
202X.XX - 202X.XX

• 主导校园服务 APP 的 UI 全面升级改版，负责整体视觉风格定义和设计规范制定
• 设计完整的设计系统，包含 100+ 组件、色彩体系、字体规范，提升设计和开发协作效率
• 完成 50+ 页面的高保真设计稿，输出交互原型，交付开发后还原度达 95% 以上
• 可用性测试邀请 20 位目标用户，收集反馈并迭代优化 3 个版本，用户满意度从 65% 提升至 88%
• 设计作品获校级设计大赛三等奖`}};let s=n[e]||n.前端开发;return t&&t.trim()&&(s={...s,content:s.content+`

个人特点：${t.trim()}
（以上内容已根据您的特点进行优化调整，突出相关能力和经验）`}),s}function bf(e="计算机",t="3个月"){const n={计算机:{"3个月":`📚 计算机专升本 3 个月学习计划

═══════════════════════════

🎯 目标：高效备考，冲刺高分

📅 第 1 个月：基础夯实阶段

【英语】（每天 2h）
• 单词：每天 100 个，用艾宾浩斯复习
• 语法：系统学习语法书，每天 1 章
• 阅读：每天 2 篇精读，分析长难句

【高数】（每天 2.5h）
• 通读教材，理解概念
• 每节课后习题必做
• 整理错题本，定期回顾

【专业课】（每天 1.5h）
• C语言/数据结构基础概念
• 理解为主，配合简单代码练习

📅 第 2 个月：强化提升阶段

【英语】（每天 2h）
• 真题阅读一天 2 篇，精做精析
• 开始练习翻译和写作
• 单词二轮复习，重点背高频词

【高数】（每天 2.5h）
• 刷专项习题，按章节攻克
• 建立知识框架，形成体系
• 错题本二刷，查漏补缺

【专业课】（每天 2h）
• 深入学习重点章节
• 大量刷题，总结题型
• 开始做历年真题

📅 第 3 个月：冲刺模拟阶段

【全科】（每天 6-8h）
• 每周 2 套全真模拟，严格计时
• 真题反复做，至少刷 3 遍
• 查漏补缺，回归基础
• 调整作息，保持良好状态

💡 每日时间表建议：
上午 8:00-10:00 高数（头脑最清醒）
上午 10:30-12:00 专业课
下午 14:00-16:00 英语
下午 16:30-18:00 高数/专业课刷题
晚上 19:30-21:30 复习+错题整理
晚上 22:00-22:30 背单词

⚠️ 注意事项：
• 每周休息 1 天，劳逸结合
• 坚持最重要，不要间断
• 定期模考，检验学习效果
• 保持良好心态，相信自己！`,"6个月":`📚 计算机专升本 6 个月学习计划

═══════════════════════════

🎯 目标：系统复习，稳扎稳打拿高分

📅 第 1-2 个月：基础入门阶段

【英语】（每天 1.5h）
• 单词：从基础词汇开始，每天 80 个
• 语法：系统学习，打好基础
• 每日精读 1 篇文章，培养语感

【高数】（每天 2h）
• 从教材第一页开始，逐章学习
• 概念理解 + 课后练习双管齐下
• 打好微积分基础（高数上是重点）

【专业课】（每天 1h）
• 入门学习，理解基本概念
• C语言：配合写简单代码加深理解
• 数据结构：先弄懂各种数据结构特点

📅 第 3-4 个月：系统强化阶段

【英语】（每天 2h）
• 单词二轮：重点记忆高频考点词
• 真题阅读开始做，一天 1-2 篇
• 翻译和作文开始练习

【高数】（每天 2.5h）
• 一轮复习完，开始专项突破
• 大量刷题，总结题型方法
• 错题本认真整理，定期回顾

【专业课】（每天 2h）
• 深入学习各个章节
• 做配套练习题，巩固知识点
• 开始接触真题，了解出题风格

📅 第 5 个月：真题实战阶段

【全科】（每天 6-7h）
• 近 10 年真题逐套精做
• 每套做完认真分析总结
• 发现薄弱环节重点突破
• 真题至少刷 2 遍以上

📅 第 6 个月：冲刺模拟阶段

【全科】（每天 7-8h）
• 全真模拟，严格按照考试时间
• 查漏补缺，回归课本基础
• 错题本最后一轮复习
• 调整作息，保持最佳状态
• 考前一周：轻松复习，树立信心

💡 学习方法建议：
• 费曼学习法：用自己的话讲出来
• 思维导图：建立知识体系框架
• 艾宾浩斯：科学复习对抗遗忘
• 番茄工作法：25分钟专注+5分钟休息

加油！6个月足够创造奇迹！💪`},管理学:{"3个月":`📚 管理学专升本 3 个月学习计划

═══════════════════════════

🎯 目标：高效记忆 + 理解运用

📅 第 1 个月：基础理解阶段

【英语】（每天 2h）
• 单词：每天 100 个，快速过一遍
• 语法：重点语法系统学习
• 阅读：每天 2 篇，培养语感

【管理学】（每天 3h）
• 通读教材 1 遍，理解为主
• 画出思维导图，建立框架
• 标记重点概念和理论

【大学语文/政治】（每天 1h）
• 熟悉考纲和教材内容
• 开始第一轮基础知识学习

📅 第 2 个月：强化记忆阶段

【英语】（每天 2h）
• 真题阅读精做，一天 2 篇
• 开始作文和翻译练习
• 高频单词二轮复习

【管理学】（每天 3.5h）
• 二轮复习，开始背诵重点
• 整理背诵笔记，用口诀记忆
• 做章节练习题，巩固知识点
• 研究真题，把握出题规律

【大学语文/政治】（每天 1.5h）
• 重点知识背诵
• 配套习题练习

📅 第 3 个月：冲刺提分阶段

【全科】（每天 7-8h）
• 历年真题反复做（至少 3 遍）
• 背诵笔记反复过（至少 5 遍）
• 全真模拟考试，训练答题速度
• 查漏补缺，重点攻克薄弱环节
• 整理答题模板和万能素材

💡 文科背诵技巧：
• 口诀记忆法：编成顺口溜
• 思维导图法：建立知识网络
• 艾宾浩斯法：科学间隔复习
• 费曼学习法：讲出来检验
• 关键词法：先记关键词再扩展

📝 答题技巧：
• 简答题：分点作答，条理清晰
• 论述题：总-分-总结构，结合实际
• 案例分析：理论 + 结合材料分析

加油！记忆类科目只要肯下功夫，一定能考好！💪`},会计学:{"3个月":`📚 会计学专升本 3 个月学习计划

═══════════════════════════

🎯 目标：理解原理 + 熟练做题

📅 第 1 个月：基础夯实阶段

【英语】（每天 2h）
• 单词：每天 100 个
• 语法：系统学习
• 阅读：每天 2 篇精读

【基础会计/财务会计】（每天 2.5h）
• 从会计基础概念开始
• 理解会计恒等式、借贷记账法
• 逐章学习，配合做练习题
• 会计分录一定要动手写

【高数/经济学】（每天 1.5h）
• 数学：打好基础，概念+习题
• 经济学：理解基本概念和理论

📅 第 2 个月：强化提升阶段

【英语】（每天 2h）
• 真题阅读精做精析
• 翻译写作开始练习
• 单词二轮复习

【财务会计/成本会计】（每天 3h）
• 深入学习重点章节
• 大量做业务题，熟能生巧
• 整理各种业务处理的会计分录
• 错题本认真整理，定期回顾

【高数/经济学】（每天 1.5h）
• 刷题提升，总结题型
• 真题开始做，了解难度

📅 第 3 个月：冲刺模拟阶段

【全科】（每天 7-8h）
• 历年真题全真模拟（计时做）
• 真题至少刷 3 遍，分析出题规律
• 错题本最后一轮扫荡
• 会计分录大全反复看
• 查漏补缺，回归基础
• 调整作息，保持最佳状态

💡 会计学学习技巧：
• 理解"有借必有贷，借贷必相等"
• 多写分录，熟能生巧
• 做T型账户帮助理解
• 各类业务处理分类总结
• 计算题步骤要写清楚

📝 考试答题技巧：
• 选择题：排除法 + 第一感觉
• 判断题：注意绝对化表述
• 业务题：分录一步一步写
• 计算题：写出计算公式和过程

加油！会计是越学越有规律的！💪`}},s=n[e]||n.计算机;return s[t]||s["3个月"]}const Or=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},_f={key:0,class:"ai-panel fixed inset-0 z-50 flex flex-col max-w-full mx-auto bg-white"},xf={class:"flex border-b border-gray-100 px-2 shrink-0"},wf={key:0,class:"absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"},Af={key:0,class:"absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"},Ef={key:0,class:"absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"},Cf={key:0,class:"flex-1 flex flex-col overflow-hidden"},Sf={class:"flex gap-1 p-2 border-b border-gray-50 shrink-0"},Rf={key:0,class:"text-center py-8"},Tf={key:1,class:"text-center text-xs text-gray-400 py-1"},Pf={key:2,class:"flex justify-start"},If={key:0,class:"px-3 pb-2 shrink-0"},Of={class:"flex flex-wrap gap-2"},Df=["onClick"],Nf={class:"flex items-center gap-2 p-3 border-t border-gray-100 shrink-0"},kf=["disabled"],Mf={key:1,class:"flex-1 overflow-y-auto p-4"},Lf={class:"flex gap-2 mb-4"},Vf={key:0,class:"space-y-4"},Ff={class:"grid grid-cols-4 gap-2"},Bf=["onClick"],jf={class:"flex items-center gap-2"},Hf={class:"flex-1 text-center font-medium"},Uf={key:1,class:"space-y-4"},$f={key:2,class:"space-y-4"},Kf={class:"grid grid-cols-2 gap-2"},Gf={key:3,class:"mt-4"},Wf={class:"bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto"},qf={key:2,class:"flex-1 overflow-y-auto p-4"},Xf={key:0,class:"text-center py-12 text-gray-400"},zf={key:1,class:"space-y-2"},Yf={class:"flex items-center justify-between mb-1"},Qf={class:"text-xs px-2 py-0.5 bg-primary-100 text-primary-600 rounded-full"},Jf={class:"text-sm font-medium text-gray-700 truncate"},Zf={class:"text-xs text-gray-500 mt-1 line-clamp-2"},ed={class:"space-y-3"},td={class:"flex gap-2"},nd={__name:"AIPanel",props:{visible:{type:Boolean,default:!1},activeTab:{type:String,default:"chat"}},emits:["update:visible","update:activeTab"],setup(e,{emit:t}){const n=e,s=t,r=Ne(()=>Ts()),o=he(null),i=he(""),l=he([]),a=he(!1),u=he("campus"),c=he("chat");Yt(()=>n.activeTab,Y=>{c.value=Y},{immediate:!0});function f(Y){c.value=Y,s("update:activeTab",Y)}const h=Ne(()=>{var Y;return`aiChats_${(Y=r.value)==null?void 0:Y.id}`}),g=Ne(()=>{var Y;return`aiDrafts_${(Y=r.value)==null?void 0:Y.id}`}),y=Ne(()=>u.value==="campus"?["请假流程是怎样的？","奖学金怎么申请？","校园卡丢了怎么办？","图书馆开放时间","成绩怎么查询？","宿舍报修怎么弄？"]:["专升本怎么准备？","简历怎么写才好？","面试有什么技巧？","职业规划怎么做？","考研还是考公？","有什么兼职推荐？"]),x=he("leaveReason"),L=he("事假"),N=he(1),S=he("前端开发"),M=he(""),P=he("计算机"),W=he("3个月"),X=he(""),B=he(""),Q=he(!1);ws(()=>{F()}),Yt(()=>n.visible,Y=>{Y&&(F(),Tn(()=>J()))});function F(){r.value&&(l.value=Pe.get(h.value,[]))}function z(){r.value&&Pe.set(h.value,l.value)}function J(){Tn(()=>{o.value&&(o.value.scrollTop=o.value.scrollHeight)})}function O(Y){const A=Y||i.value.trim();A&&(l.value.push({id:Te(),role:"user",content:A,timestamp:Date.now()}),i.value="",z(),J(),ee(A))}function ee(Y){a.value=!0,setTimeout(()=>{let A="";if(c.value==="chat"){const j=gf(Y,u.value);j?A=j.answer:A=mf(Y,u.value)}l.value.push({id:Te(),role:"assistant",content:A,timestamp:Date.now()}),a.value=!1,z(),J()},800+Math.random()*700)}function me(Y){O(Y)}function Me(){confirm("确定要清空对话记录吗？")&&(l.value=[],z())}function ve(){s("update:visible",!1)}function oe(){if(x.value==="leaveReason")X.value=vf(L.value,N.value);else if(x.value==="resume"){const A=yf(S.value,M.value);X.value=A.content,B.value=A.title;return}else x.value==="studyPlan"&&(X.value=bf(P.value,W.value));const Y={leaveReason:"请假理由",resume:"简历片段",studyPlan:"学习计划"};B.value=`${Y[x.value]} - ${new Date().toLocaleDateString()}`}function se(){var Y;X.value&&((Y=navigator.clipboard)==null||Y.writeText(X.value),alert("已复制到剪贴板"))}function Ze(){if(!X.value){alert("请先生成内容");return}Q.value=!0}function rt(){if(!B.value.trim()){alert("请输入草稿标题");return}const Y=Pe.get(g.value,[]);Y.unshift({id:Te(),title:B.value.trim(),category:x.value,content:X.value,createdAt:Date.now()}),Pe.set(g.value,Y),Q.value=!1,alert("已保存到草稿箱")}function Ke(Y){u.value=Y}function Ie(){ve(),window.location.hash="#/ai-drafts"}return(Y,A)=>(Z(),Nn(Sr,{name:"slide-up"},{default:In(()=>[e.visible?(Z(),ie("div",_f,[v("div",{class:"flex items-center justify-between px-4 h-12 border-b border-gray-100 shrink-0"},[A[23]||(A[23]=v("div",{class:"flex items-center gap-2"},[v("div",{class:"w-7 h-7 bg-gradient-to-br from-primary-500 to-campus-500 rounded-lg flex items-center justify-center"},[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[v("path",{d:"M12 8V4H8"}),v("rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}),v("path",{d:"M2 14h2"}),v("path",{d:"M20 14h2"}),v("path",{d:"M15 13v2"}),v("path",{d:"M9 13v2"})])]),v("span",{class:"font-semibold text-gray-800"},"智学书AI 助手")],-1)),v("button",{class:"w-8 h-8 flex items-center justify-center text-gray-400 btn-active",onClick:ve},[...A[22]||(A[22]=[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[v("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])])]),v("div",xf,[v("button",{class:Se(["flex-1 h-10 text-sm font-medium transition-colors relative",c.value==="chat"?"text-primary-500":"text-gray-500"]),onClick:A[0]||(A[0]=j=>f("chat"))},[A[24]||(A[24]=An(" 智能问答 ",-1)),c.value==="chat"?(Z(),ie("div",wf)):Ae("",!0)],2),v("button",{class:Se(["flex-1 h-10 text-sm font-medium transition-colors relative",c.value==="generate"?"text-primary-500":"text-gray-500"]),onClick:A[1]||(A[1]=j=>f("generate"))},[A[25]||(A[25]=An(" AI 生成 ",-1)),c.value==="generate"?(Z(),ie("div",Af)):Ae("",!0)],2),v("button",{class:Se(["flex-1 h-10 text-sm font-medium transition-colors relative",c.value==="drafts"?"text-primary-500":"text-gray-500"]),onClick:A[2]||(A[2]=j=>f("drafts"))},[A[26]||(A[26]=An(" 草稿箱 ",-1)),c.value==="drafts"?(Z(),ie("div",Ef)):Ae("",!0)],2)]),c.value==="chat"?(Z(),ie("div",Cf,[v("div",Sf,[v("button",{class:Se(["flex-1 h-8 text-xs rounded-lg transition-all",u.value==="campus"?"bg-campus-500 text-white":"bg-gray-100 text-gray-600"]),onClick:A[3]||(A[3]=j=>Ke("campus"))}," 🏫 校园办事 ",2),v("button",{class:Se(["flex-1 h-8 text-xs rounded-lg transition-all",u.value==="offcampus"?"bg-offcampus-500 text-white":"bg-gray-100 text-gray-600"]),onClick:A[4]||(A[4]=j=>Ke("offcampus"))}," 🎯 升学求职 ",2)]),v("div",{ref_key:"chatContainer",ref:o,class:"flex-1 overflow-y-auto p-3 space-y-3"},[l.value.length===0?(Z(),ie("div",Rf,[...A[27]||(A[27]=[v("div",{class:"w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-campus-100 rounded-2xl flex items-center justify-center"},[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#3B82F6","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[v("path",{d:"M12 8V4H8"}),v("rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}),v("path",{d:"M2 14h2"}),v("path",{d:"M20 14h2"}),v("path",{d:"M15 13v2"}),v("path",{d:"M9 13v2"})])],-1),v("h3",{class:"font-medium text-gray-800"},"你好，我是 智学书AI",-1),v("p",{class:"text-sm text-gray-500 mt-1"},"点击下方问题快速开始",-1)])])):Ae("",!0),l.value.length>0?(Z(),ie("div",Tf," 对话记录已本地保存 ")):Ae("",!0),(Z(!0),ie($e,null,Wn(l.value,j=>(Z(),ie("div",{key:j.id,class:Se(["flex",j.role==="user"?"justify-end":"justify-start"])},[v("div",{class:Se(["max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",j.role==="user"?"bg-primary-500 text-white rounded-br-md":"bg-gray-100 text-gray-700 rounded-bl-md"])},ze(j.content),3)],2))),128)),a.value?(Z(),ie("div",Pf,[...A[28]||(A[28]=[v("div",{class:"bg-gray-100 text-gray-500 px-4 py-2.5 rounded-2xl rounded-bl-md"},[v("div",{class:"flex gap-1"},[v("span",{class:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{"animation-delay":"0ms"}}),v("span",{class:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{"animation-delay":"150ms"}}),v("span",{class:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",style:{"animation-delay":"300ms"}})])],-1)])])):Ae("",!0)],512),l.value.length===0?(Z(),ie("div",If,[A[29]||(A[29]=v("p",{class:"text-xs text-gray-400 mb-2"},"快捷提问",-1)),v("div",Of,[(Z(!0),ie($e,null,Wn(y.value,j=>(Z(),ie("button",{key:j,class:"px-3 py-1.5 text-xs bg-gray-50 text-gray-600 rounded-full border border-gray-100 btn-active",onClick:Ue=>me(j)},ze(j),9,Df))),128))])])):Ae("",!0),v("div",Nf,[v("button",{class:"w-9 h-9 flex items-center justify-center text-gray-400 btn-active",title:"清空对话",onClick:Me},[...A[30]||(A[30]=[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[v("path",{d:"M3 6h18"}),v("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),v("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})],-1)])]),Ht(v("input",{"onUpdate:modelValue":A[5]||(A[5]=j=>i.value=j),type:"text",placeholder:"输入你的问题...",class:"flex-1 h-9 px-4 bg-gray-100 rounded-full text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-200 transition-all",onKeyup:A[6]||(A[6]=or(j=>O(),["enter"]))},null,544),[[En,i.value]]),v("button",{class:"w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center text-white btn-active disabled:opacity-50",disabled:!i.value.trim()||a.value,onClick:A[7]||(A[7]=j=>O())},[...A[31]||(A[31]=[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[v("path",{d:"m22 2-7 20-4-9-9-4Z"}),v("path",{d:"M22 2 11 13"})],-1)])],8,kf)])])):c.value==="generate"?(Z(),ie("div",Mf,[v("div",Lf,[v("button",{class:Se(["flex-1 h-10 text-sm rounded-xl transition-all",x.value==="leaveReason"?"bg-campus-500 text-white":"bg-gray-100 text-gray-600"]),onClick:A[8]||(A[8]=j=>x.value="leaveReason")}," 📝 请假理由 ",2),v("button",{class:Se(["flex-1 h-10 text-sm rounded-xl transition-all",x.value==="resume"?"bg-blue-500 text-white":"bg-gray-100 text-gray-600"]),onClick:A[9]||(A[9]=j=>x.value="resume")}," 📄 简历片段 ",2),v("button",{class:Se(["flex-1 h-10 text-sm rounded-xl transition-all",x.value==="studyPlan"?"bg-offcampus-500 text-white":"bg-gray-100 text-gray-600"]),onClick:A[10]||(A[10]=j=>x.value="studyPlan")}," 📚 学习计划 ",2)]),x.value==="leaveReason"?(Z(),ie("div",Vf,[v("div",null,[A[32]||(A[32]=v("label",{class:"block text-sm text-gray-600 mb-1.5"},"请假类型",-1)),v("div",Ff,[(Z(),ie($e,null,Wn(["事假","病假","公假","其他"],j=>v("button",{key:j,class:Se(["h-9 text-xs rounded-lg border transition-all",L.value===j?"border-campus-500 bg-campus-50 text-campus-600":"border-gray-200 text-gray-600"]),onClick:Ue=>L.value=j},ze(j),11,Bf)),64))])]),v("div",null,[A[33]||(A[33]=v("label",{class:"block text-sm text-gray-600 mb-1.5"},"请假天数",-1)),v("div",jf,[v("button",{class:"w-10 h-9 bg-gray-100 rounded-lg btn-active",onClick:A[11]||(A[11]=j=>N.value=Math.max(1,N.value-1))}," - "),v("span",Hf,ze(N.value)+" 天",1),v("button",{class:"w-10 h-9 bg-gray-100 rounded-lg btn-active",onClick:A[12]||(A[12]=j=>N.value=Math.min(30,N.value+1))}," + ")])])])):x.value==="resume"?(Z(),ie("div",Uf,[v("div",null,[A[35]||(A[35]=v("label",{class:"block text-sm text-gray-600 mb-1.5"},"岗位类型",-1)),Ht(v("select",{"onUpdate:modelValue":A[13]||(A[13]=j=>S.value=j),class:"w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"},[...A[34]||(A[34]=[v("option",{value:"前端开发"},"前端开发",-1),v("option",{value:"后端开发"},"后端开发",-1),v("option",{value:"产品经理"},"产品经理",-1),v("option",{value:"运营"},"运营",-1),v("option",{value:"UI设计"},"UI 设计",-1)])],512),[[bo,S.value]])]),v("div",null,[A[36]||(A[36]=v("label",{class:"block text-sm text-gray-600 mb-1.5"},"个人特点/关键词（选填）",-1)),Ht(v("input",{"onUpdate:modelValue":A[14]||(A[14]=j=>M.value=j),type:"text",placeholder:"如：细心负责、有团队协作经验",class:"w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"},null,512),[[En,M.value]])])])):x.value==="studyPlan"?(Z(),ie("div",$f,[v("div",null,[A[38]||(A[38]=v("label",{class:"block text-sm text-gray-600 mb-1.5"},"目标专业方向",-1)),Ht(v("select",{"onUpdate:modelValue":A[15]||(A[15]=j=>P.value=j),class:"w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"},[...A[37]||(A[37]=[v("option",{value:"计算机"},"计算机 / 软件工程",-1),v("option",{value:"管理学"},"管理学 / 工商管理",-1),v("option",{value:"会计学"},"会计学 / 财务管理",-1)])],512),[[bo,P.value]])]),v("div",null,[A[39]||(A[39]=v("label",{class:"block text-sm text-gray-600 mb-1.5"},"备考周期",-1)),v("div",Kf,[v("button",{class:Se(["h-10 text-sm rounded-lg border transition-all",W.value==="3个月"?"border-offcampus-500 bg-offcampus-50 text-offcampus-600":"border-gray-200 text-gray-600"]),onClick:A[16]||(A[16]=j=>W.value="3个月")}," 3 个月（冲刺） ",2),v("button",{class:Se(["h-10 text-sm rounded-lg border transition-all",W.value==="6个月"?"border-offcampus-500 bg-offcampus-50 text-offcampus-600":"border-gray-200 text-gray-600"]),onClick:A[17]||(A[17]=j=>W.value="6个月")}," 6 个月（稳扎） ",2)])])])):Ae("",!0),v("button",{class:"w-full h-11 mt-4 bg-gradient-to-r from-primary-500 to-campus-500 text-white rounded-xl font-medium btn-active",onClick:oe}," ✨ 立即生成 "),X.value?(Z(),ie("div",Gf,[v("div",{class:"flex items-center justify-between mb-2"},[A[40]||(A[40]=v("span",{class:"text-sm font-medium text-gray-700"},"生成结果",-1)),v("div",{class:"flex gap-2"},[v("button",{class:"text-xs text-primary-500 btn-active",onClick:se},"复制"),v("button",{class:"text-xs text-campus-500 btn-active",onClick:Ze},"保存草稿")])]),v("div",Wf,ze(X.value),1)])):Ae("",!0)])):c.value==="drafts"?(Z(),ie("div",qf,[v("div",{class:"flex items-center justify-between mb-3"},[A[41]||(A[41]=v("span",{class:"text-sm font-medium text-gray-700"},"我的草稿",-1)),v("button",{class:"text-xs text-primary-500 btn-active",onClick:Ie},"查看全部 →")]),Dt(Pe).get(g.value,[]).length===0?(Z(),ie("div",Xf,[...A[42]||(A[42]=[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"mx-auto mb-2"},[v("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),v("polyline",{points:"14 2 14 8 20 8"})],-1),v("p",{class:"text-sm"},"暂无草稿",-1),v("p",{class:"text-xs mt-1"},"在「AI 生成」中生成内容后保存",-1)])])):(Z(),ie("div",zf,[(Z(!0),ie($e,null,Wn(Dt(Pe).get(g.value,[]).slice(0,5),j=>(Z(),ie("div",{key:j.id,class:"p-3 bg-gray-50 rounded-xl"},[v("div",Yf,[v("span",Qf,ze(j.category==="leaveReason"?"请假理由":j.category==="resume"?"简历片段":"学习计划"),1)]),v("p",Jf,ze(j.title),1),v("p",Zf,ze(j.content),1)]))),128))]))])):Ae("",!0),Q.value?(Z(),ie("div",{key:3,class:"absolute inset-0 bg-black/50 flex items-center justify-center p-4",onClick:A[21]||(A[21]=j=>Q.value=!1)},[v("div",{class:"bg-white rounded-2xl p-5 w-full max-w-sm",onClick:A[20]||(A[20]=Gc(()=>{},["stop"]))},[A[44]||(A[44]=v("h3",{class:"font-semibold text-gray-800 mb-4"},"保存到草稿箱",-1)),v("div",ed,[v("div",null,[A[43]||(A[43]=v("label",{class:"block text-sm text-gray-600 mb-1.5"},"草稿标题",-1)),Ht(v("input",{"onUpdate:modelValue":A[18]||(A[18]=j=>B.value=j),type:"text",placeholder:"请输入标题",class:"w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"},null,512),[[En,B.value]])]),v("div",td,[v("button",{class:"flex-1 h-10 text-sm text-gray-500 border border-gray-200 rounded-lg btn-active",onClick:A[19]||(A[19]=j=>Q.value=!1)}," 取消 "),v("button",{class:"flex-1 h-10 text-sm text-white bg-primary-500 rounded-lg btn-active",onClick:rt}," 保存 ")])])])])):Ae("",!0)])):Ae("",!0)]),_:1}))}},sd=Or(nd,[["__scopeId","data-v-84010416"]]),rd={class:"w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"},od={key:0,class:"px-5 pt-3"},id={class:"text-xs text-amber-600 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2"},ld={class:"px-5 py-4 space-y-3"},ad={key:0,class:"text-xs text-red-500 bg-red-50 rounded px-2.5 py-1.5 border border-red-100"},cd=["disabled"],ud={__name:"LoginModal",props:{visible:Boolean,reason:{type:String,default:""}},emits:["update:visible","authed"],setup(e,{emit:t}){const n=e,s=t,r=of(),o=he(""),i=he(""),l=he(!1),a=he("");Yt(()=>n.visible,g=>{g&&(o.value="",i.value="",a.value="")});function u(){s("update:visible",!1)}function c(){if(a.value="",!o.value.trim()){a.value="请输入账号";return}if(!i.value){a.value="请输入密码";return}l.value=!0,setTimeout(()=>{const g=uf(o.value.trim(),i.value);l.value=!1,g.success?(s("update:visible",!1),s("authed")):a.value=g.message},300)}function f(){u(),r.push("/register")}function h(g){g.target===g.currentTarget&&u()}return(g,y)=>(Z(),Nn(da,{to:"body"},[Ee(Sr,{name:"modal"},{default:In(()=>[e.visible?(Z(),ie("div",{key:0,class:"fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4",onClick:h},[v("div",rd,[v("div",{class:"bg-gradient-to-r from-primary-500 to-campus-600 px-5 py-4 text-white relative"},[y[3]||(y[3]=v("h3",{class:"font-semibold text-base"},"登录智学书",-1)),y[4]||(y[4]=v("p",{class:"text-primary-100 text-xs mt-0.5"},"登录后解锁全部功能",-1)),v("button",{onClick:u,class:"absolute right-3 top-3 w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition"},[...y[2]||(y[2]=[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[v("path",{d:"M18 6 6 18"}),v("path",{d:"m6 6 12 12"})],-1)])])]),e.reason?(Z(),ie("div",od,[v("div",id," 🔐 "+ze(e.reason),1)])):Ae("",!0),v("div",ld,[v("div",null,[y[5]||(y[5]=v("label",{class:"block text-xs text-gray-500 mb-1"},"账号",-1)),Ht(v("input",{"onUpdate:modelValue":y[0]||(y[0]=x=>o.value=x),type:"text",placeholder:"请输入账号",class:"w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm transition",onKeyup:or(c,["enter"])},null,544),[[En,o.value]])]),v("div",null,[y[6]||(y[6]=v("label",{class:"block text-xs text-gray-500 mb-1"},"密码",-1)),Ht(v("input",{"onUpdate:modelValue":y[1]||(y[1]=x=>i.value=x),type:"password",placeholder:"请输入密码",class:"w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 text-sm transition",onKeyup:or(c,["enter"])},null,544),[[En,i.value]])]),a.value?(Z(),ie("div",ad,ze(a.value),1)):Ae("",!0),v("button",{onClick:c,disabled:l.value,class:"w-full h-10 bg-gradient-to-r from-primary-500 to-campus-600 text-white rounded-lg font-medium btn-active disabled:opacity-50 text-sm"},ze(l.value?"登录中...":"立即登录"),9,cd),v("div",{class:"text-center text-xs text-gray-400 pt-1"},[y[7]||(y[7]=An(" 还没有账号？",-1)),v("span",{class:"text-primary-500 cursor-pointer font-medium",onClick:f},"去注册")])]),y[8]||(y[8]=v("div",{class:"px-5 pb-4"},[v("div",{class:"text-[10px] text-gray-400 text-center space-y-0.5"},[v("p",null,"student / student123  ·  teacher / teacher123"),v("p",null,"admin / admin123")])],-1))])])):Ae("",!0)]),_:1})]))}},fd=Or(ud,[["__scopeId","data-v-4a7ba085"]]),dd={class:"page-content"},pd={__name:"App",setup(e){const t=lf(),n=Ne(()=>{const f=t.path;return f==="/login"||f==="/register"||f==="/404"}),s=he(!1),r=he("chat"),o=he(!1),i=he("");function l(){s.value=!s.value}function a(f){r.value=f,s.value=!0}function u(f=""){i.value=f,o.value=!0}function c(){o.value=!1}return zt("toggleAIPanel",l),zt("openAIPanelWithTab",a),zt("openLogin",u),ws(()=>{window.__openLogin=f=>u(f)}),(f,h)=>{const g=Sa("router-view");return Z(),ie("div",{class:Se(n.value?"app-container--full":"app-container")},[v("div",dd,[Ee(g,null,{default:In(({Component:y})=>[Ee(Sr,{name:"fade",mode:"out-in"},{default:In(()=>[(Z(),Nn(Ra(y)))]),_:2},1024)]),_:1})]),n.value?Ae("",!0):(Z(),ie("button",{key:0,class:"ai-float-btn fixed bottom-6 right-4 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-campus-500 text-white shadow-lg flex items-center justify-center btn-active",onClick:l},[...h[3]||(h[3]=[nc('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-28528164><path d="M12 8V4H8" data-v-28528164></path><rect width="16" height="12" x="4" y="8" rx="2" data-v-28528164></rect><path d="M2 14h2" data-v-28528164></path><path d="M20 14h2" data-v-28528164></path><path d="M15 13v2" data-v-28528164></path><path d="M9 13v2" data-v-28528164></path></svg><span class="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse" data-v-28528164></span>',2)])])),n.value?Ae("",!0):(Z(),Nn(sd,{key:1,visible:s.value,"onUpdate:visible":h[0]||(h[0]=y=>s.value=y),"active-tab":r.value,"onUpdate:activeTab":h[1]||(h[1]=y=>r.value=y)},null,8,["visible","active-tab"])),Ee(fd,{visible:o.value,"onUpdate:visible":h[2]||(h[2]=y=>o.value=y),reason:i.value,onAuthed:c},null,8,["visible","reason"])],2)}}},hd=Or(pd,[["__scopeId","data-v-28528164"]]),gd="modulepreload",md=function(e,t){return new URL(e,t).href},Fo={},ye=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=md(u,s),u in Fo)return;Fo[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(!!s)for(let y=i.length-1;y>=0;y--){const x=i[y];if(x.href===u&&(!c||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":gd,c||(g.as="script"),g.crossOrigin="",g.href=u,a&&g.setAttribute("nonce",a),document.head.appendChild(g),c)return new Promise((y,x)=>{g.addEventListener("load",y),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return r.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};df();const vd=[{path:"/login",name:"Login",component:()=>ye(()=>import("./Login-psQUiExO.js"),__vite__mapDeps([0,1]),import.meta.url),meta:{requiresAuth:!1,title:"登录"}},{path:"/register",name:"Register",component:()=>ye(()=>import("./Register-Df_KTmA5.js"),__vite__mapDeps([2,3]),import.meta.url),meta:{requiresAuth:!1,title:"注册"}},{path:"/",name:"Home",component:()=>ye(()=>import("./Home-SBaylV_P.js"),__vite__mapDeps([4,5,6,7,8]),import.meta.url),meta:{requiresAuth:!1,title:"首页",tab:"home"}},{path:"/campus",name:"Campus",component:()=>ye(()=>import("./Campus-CMylFfVm.js"),__vite__mapDeps([9,8,10]),import.meta.url),meta:{requiresAuth:!1,title:"校园服务",tab:"campus"}},{path:"/off-campus",name:"OffCampus",component:()=>ye(()=>import("./OffCampus-DpecYGrg.js"),__vite__mapDeps([11,12]),import.meta.url),meta:{requiresAuth:!1,title:"校外工具箱",tab:"offcampus"}},{path:"/profile",name:"Profile",component:()=>ye(()=>import("./Profile-DRurLq6k.js"),__vite__mapDeps([13,14]),import.meta.url),meta:{requiresAuth:!0,title:"我的",tab:"profile"}},{path:"/announcement/:id",name:"AnnouncementDetail",component:()=>ye(()=>import("./AnnouncementDetail-BspPvdkv.js"),[],import.meta.url),meta:{requiresAuth:!1,title:"公告详情"}},{path:"/ai-drafts",name:"AIDrafts",component:()=>ye(()=>import("./AIDrafts-Zkca65kH.js"),__vite__mapDeps([15,16]),import.meta.url),meta:{requiresAuth:!0,title:"AI 草稿箱"}},{path:"/campus/leave",name:"LeaveApplyPage",component:()=>ye(()=>import("./LeaveApplyPage-Cf5XoAit.js"),__vite__mapDeps([17,8,6,7,18]),import.meta.url),meta:{requiresAuth:!0,title:"请假申请"}},{path:"/campus/todo",name:"TodoPage",component:()=>ye(()=>import("./TodoPage-BremhGUK.js"),__vite__mapDeps([19,5,20]),import.meta.url),meta:{requiresAuth:!0,title:"待办备忘录"}},{path:"/campus/training",name:"TrainingPage",component:()=>ye(()=>import("./TrainingPage-3FaD3Z1w.js"),__vite__mapDeps([21,6,7,22]),import.meta.url),meta:{requiresAuth:!0,title:"实训登记"}},{path:"/campus/grade",name:"GradePage",component:()=>ye(()=>import("./GradePage-BALXmZeR.js"),__vite__mapDeps([23,7]),import.meta.url),meta:{requiresAuth:!0,title:"成绩查询"}},{path:"/campus/schedule",name:"SchedulePage",component:()=>ye(()=>import("./SchedulePage-CtnMMYfn.js"),__vite__mapDeps([24,6,7]),import.meta.url),meta:{requiresAuth:!0,title:"课表查询"}},{path:"/campus/lost-found",name:"LostFoundPage",component:()=>ye(()=>import("./LostFoundPage-DzUpnWPt.js"),[],import.meta.url),meta:{requiresAuth:!1,title:"失物招领"}},{path:"/campus/express",name:"ExpressPage",component:()=>ye(()=>import("./ExpressPage-BD_ISBnc.js"),[],import.meta.url),meta:{requiresAuth:!1,title:"快递代取"}},{path:"/off-campus/job",name:"JobRecommendPage",component:()=>ye(()=>import("./JobRecommendPage-B6pTBlaM.js"),[],import.meta.url),meta:{requiresAuth:!0,title:"求职内推"}},{path:"/off-campus/certificate",name:"CertificatePage",component:()=>ye(()=>import("./CertificatePage-Bw61BQHz.js"),[],import.meta.url),meta:{requiresAuth:!0,title:"考证日历"}},{path:"/off-campus/resources",name:"ResourcePage",component:()=>ye(()=>import("./ResourcePage-DWGLfCaw.js"),[],import.meta.url),meta:{requiresAuth:!1,title:"学习资源库"}},{path:"/profile/info",name:"ProfileInfoPage",component:()=>ye(()=>import("./ProfileInfoPage-Px7vLLSh.js"),__vite__mapDeps([25,6,7]),import.meta.url),meta:{requiresAuth:!0,title:"个人信息"}},{path:"/profile/notifications",name:"NotificationPage",component:()=>ye(()=>import("./NotificationPage-DMThTstP.js"),__vite__mapDeps([26,6,7]),import.meta.url),meta:{requiresAuth:!0,title:"消息通知"}},{path:"/profile/feedback",name:"FeedbackPage",component:()=>ye(()=>import("./FeedbackPage-7dEePnHX.js"),__vite__mapDeps([27,6,7]),import.meta.url),meta:{requiresAuth:!0,title:"意见反馈"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>ye(()=>import("./NotFound-D63C8wnB.js"),[],import.meta.url),meta:{requiresAuth:!1,title:"页面未找到"}}],gl=rf({history:Lu(),routes:vd});gl.beforeEach((e,t,n)=>{document.title=e.meta.title?`${e.meta.title} - 智学书`:"智学书";const s=ff();if(e.meta.requiresAuth===!1){s&&(e.path==="/login"||e.path==="/register")?n("/"):n();return}s?n():(typeof window.__openLogin=="function"&&window.__openLogin(),n(!1))});const ml=zc(hd);ml.use(gl);ml.mount("#app");export{bd as A,Pe as B,Yt as C,Gc as D,Te as E,$e as F,xd as G,wd as H,Ed as I,Fn as J,Or as _,v as a,nc as b,ie as c,Ae as d,or as e,An as f,Cd as g,of as h,Sd as i,_d as j,ws as k,uf as l,Dt as m,Se as n,Z as o,Wn as p,Ne as q,he as r,tt as s,ze as t,lf as u,En as v,Ht as w,Ad as x,yd as y,Ts as z};
