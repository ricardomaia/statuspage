var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(){return d("")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}let $;function b(t){$=t}function v(){if(!$)throw new Error("Function called outside component initialization");return $}const y=[],_=[],w=[],x=[],k=Promise.resolve();let j=!1;function N(t){w.push(t)}let E=!1;const S=new Set;function C(){if(!E){E=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];b(e),P(e.$$)}for(b(null),y.length=0;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];S.has(e)||(S.add(e),e())}w.length=0}while(y.length);for(;x.length;)x.pop()();j=!1,E=!1,S.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const A=new Set;let R;function q(t,e){t&&t.i&&(A.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(A.has(t))return;A.add(t),R.c.push((()=>{A.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function L(t,e){const n=e.token={};function o(t,o,s,a){if(e.token!==n)return;e.resolved=a;let c=e.ctx;void 0!==s&&(c=c.slice(),c[s]=a);const l=t&&(e.current=t)(c);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(R={r:0,c:[],p:R},B(t,1,1,(()=>{e.blocks[n]=null})),R.r||r(R.c),R=R.p)})):e.block.d(1),l.c(),q(l,1),l.m(e.mount(),e.anchor),i=!0),e.block=l,e.blocks&&(e.blocks[o]=l),i&&C()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const n=v();if(t.then((t=>{b(n),o(e.then,1,e.value,t),b(null)}),(t=>{if(b(n),o(e.catch,2,e.error,t),b(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var s}function z(t){t&&t.c()}function O(t,n,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(n,s),N((()=>{const n=c.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(N)}function T(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(y.push(t),j||(j=!0,k.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,o,s,a,c,i,u=[-1]){const d=$;b(e);const f=o.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let m=!1;if(p.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),m&&I(e,t)),n})):[],p.update(),m=!0,r(p.before_update),p.fragment=!!a&&a(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();o.intro&&q(e.$$.fragment),O(e,o.target,o.anchor),C()}b(d)}class F{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var H={component:"component",incident:"incident",service_status:"Service Status",past_incidents:"Past incidents",loading:"loading",error:"error",operational:"operational","performance issues":"performance issues","major outage":"major outage","partial outage":"partial outage",registered:"registered",updated:"updated",closed:"closed","rate limit exceeded":"API rate limit exceeded.",reset_time:"You can try again at: "},M={component:"componente",incident:"incidente",service_status:"Status dos Serviços",past_incidents:"Incidentes anteriores",loading:"carregando",error:"erro",operational:"operacional","performance issues":"problemas de desempenho","major outage":"indisponível","partial outage":"parcialmente indisponível",registered:"registrado",updated:"atualizado",closed:"fechado","rate limit exceeded":"Limite de uso da API excedido.",reset_time:"Você poderá tentar novamente em: "},G={en:H,pt_BR:M},V=Object.freeze({__proto__:null,en:H,pt_BR:M,default:G});const X=function(){const t=navigator.language||navigator.userLanguage;return["en","pt-BR"].includes(t)?t:"en"}().replace("-","_");function Y(t){return V[X][t]}function J(t){return null==t||""==t?"--":(t=new Date(t)).toLocaleString("pt-BR")}function K(e){let n,r,o;return{c(){n=u("div"),r=d(e[0]),m(n,"class",o="alert alert-"+e[1]),m(n,"role","alert")},m(t,e){c(t,n,e),a(n,r)},p(t,[e]){1&e&&g(r,t[0]),2&e&&o!==(o="alert alert-"+t[1])&&m(n,"class",o)},i:t,o:t,d(t){t&&l(n)}}}function Q(t,e,n){let{message:r=""}=e,{type:o="primary"}=e;return t.$$set=t=>{"message"in t&&n(0,r=t.message),"type"in t&&n(1,o=t.type)},[r,o]}class U extends F{constructor(t){super(),D(this,t,Q,K,s,{message:0,type:1})}}function W(t,e,n){const r=t.slice();return r[4]=e[n],r}function Z(t,e,n){const r=t.slice();return r[1]=e[n],r}function tt(t){let e,n,r,o,s,i,p,$=t[1].title+"",b=t[4].name+"";return{c(){e=u("div"),n=u("div"),r=d($),o=f(),s=u("div"),i=d(b),p=f(),m(n,"class","col-md-8"),m(s,"class","col-md-4 label  svelte-1m34x7f"),h(s,"background","#"+t[4].color),m(e,"class","row component svelte-1m34x7f")},m(t,l){c(t,e,l),a(e,n),a(n,r),a(e,o),a(e,s),a(s,i),a(e,p)},p(t,e){1&e&&$!==($=t[1].title+"")&&g(r,$),1&e&&b!==(b=t[4].name+"")&&g(i,b),1&e&&h(s,"background","#"+t[4].color)},d(t){t&&l(e)}}}function et(t){let e,n=("operational"==t[4].name||"performance issues"==t[4].name||"major outage"==t[4].name||"partial outage"==t[4].name)&&tt(t);return{c(){n&&n.c(),e=p()},m(t,r){n&&n.m(t,r),c(t,e,r)},p(t,r){"operational"==t[4].name||"performance issues"==t[4].name||"major outage"==t[4].name||"partial outage"==t[4].name?n?n.p(t,r):(n=tt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&l(e)}}}function nt(t){let e,n=t[1].labels,r=[];for(let e=0;e<n.length;e+=1)r[e]=et(W(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=p()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);c(t,e,n)},p(t,o){if(1&o){let s;for(n=t[1].labels,s=0;s<n.length;s+=1){const a=W(t,n,s);r[s]?r[s].p(a,o):(r[s]=et(a),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){i(r,t),t&&l(e)}}}function rt(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=nt(Z(e,r,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=p()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);c(t,n,e)},p(t,[e]){if(1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const a=Z(t,r,s);o[s]?o[s].p(a,e):(o[s]=nt(a),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:t,o:t,d(t){i(o,t),t&&l(n)}}}function ot(t,e,n){let{issues:r}=e;return t.$$set=t=>{"issues"in t&&n(0,r=t.issues)},[r]}class st extends F{constructor(t){super(),D(this,t,ot,rt,s,{issues:0})}}function at(t,e,n){const r=t.slice();return r[4]=e[n],r}function ct(t,e,n){const r=t.slice();return r[1]=e[n],r}function lt(t){let e,n,r,o,s,i,p,h,$,b,v,y,_,w,x,k,j,N,E,S,C,P,A,R=t[1].title+"",q=t[1].body+"",B=Y("registered")+"",L=J(t[1].created_at)+"",z=Y("updated")+"",O=J(t[1].updated_at)+"",T=Y("closed")+"",I=J(t[1].closed_at)+"";return{c(){e=u("div"),n=u("div"),r=d(R),o=f(),s=u("div"),i=u("div"),p=d(q),h=f(),$=u("div"),b=u("div"),v=d(B),y=d(":\r\n          "),_=d(L),w=d("\r\n          -\r\n          "),x=d(z),k=d(":\r\n          "),j=d(O),N=d("\r\n          -\r\n          "),E=d(T),S=d(":\r\n          "),C=d(I),P=f(),A=u("hr"),m(n,"class","col-md-12 incident-title svelte-1lsnqto"),m(e,"class","row incident"),m(i,"class","col-md-12"),m(s,"class","row"),m(b,"class","col-md-12"),m($,"class","row incident-update svelte-1lsnqto")},m(t,l){c(t,e,l),a(e,n),a(n,r),c(t,o,l),c(t,s,l),a(s,i),a(i,p),c(t,h,l),c(t,$,l),a($,b),a(b,v),a(b,y),a(b,_),a(b,w),a(b,x),a(b,k),a(b,j),a(b,N),a(b,E),a(b,S),a(b,C),c(t,P,l),c(t,A,l)},p(t,e){1&e&&R!==(R=t[1].title+"")&&g(r,R),1&e&&q!==(q=t[1].body+"")&&g(p,q),1&e&&L!==(L=J(t[1].created_at)+"")&&g(_,L),1&e&&O!==(O=J(t[1].updated_at)+"")&&g(j,O),1&e&&I!==(I=J(t[1].closed_at)+"")&&g(C,I)},d(t){t&&l(e),t&&l(o),t&&l(s),t&&l(h),t&&l($),t&&l(P),t&&l(A)}}}function it(t){let e,n="incident"==t[4].name&&lt(t);return{c(){n&&n.c(),e=p()},m(t,r){n&&n.m(t,r),c(t,e,r)},p(t,r){"incident"==t[4].name?n?n.p(t,r):(n=lt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&l(e)}}}function ut(t){let e,n=t[1].labels,r=[];for(let e=0;e<n.length;e+=1)r[e]=it(at(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=p()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);c(t,e,n)},p(t,o){if(1&o){let s;for(n=t[1].labels,s=0;s<n.length;s+=1){const a=at(t,n,s);r[s]?r[s].p(a,o):(r[s]=it(a),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(t){i(r,t),t&&l(e)}}}function dt(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=ut(ct(e,r,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=p()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);c(t,n,e)},p(t,[e]){if(1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const a=ct(t,r,s);o[s]?o[s].p(a,e):(o[s]=ut(a),o[s].c(),o[s].m(n.parentNode,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:t,o:t,d(t){i(o,t),t&&l(n)}}}function ft(t,e,n){let{issues:r}=e;return t.$$set=t=>{"issues"in t&&n(0,r=t.issues)},[r]}class pt extends F{constructor(t){super(),D(this,t,ft,dt,s,{issues:0})}}function mt(e){let n,r;return n=new U({props:{type:"danger",message:e[2]}}),{c(){z(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p:t,i(t){r||(q(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){T(n,t)}}}function gt(e){let n,r,o,s,a,i,d,p;return o=new st({props:{issues:e[1]}}),d=new pt({props:{issues:e[1]}}),{c(){n=u("div"),n.textContent=""+Y("component"),r=f(),z(o.$$.fragment),s=f(),a=u("div"),a.textContent=""+Y("incident"),i=f(),z(d.$$.fragment),m(n,"class","row section svelte-1oyxeyu"),m(a,"class","row section svelte-1oyxeyu")},m(t,e){c(t,n,e),c(t,r,e),O(o,t,e),c(t,s,e),c(t,a,e),c(t,i,e),O(d,t,e),p=!0},p:t,i(t){p||(q(o.$$.fragment,t),q(d.$$.fragment,t),p=!0)},o(t){B(o.$$.fragment,t),B(d.$$.fragment,t),p=!1},d(t){t&&l(n),t&&l(r),T(o,t),t&&l(s),t&&l(a),t&&l(i),T(d,t)}}}function ht(e){let n,r;return n=new U({props:{type:"primary",message:Y("loading")+"..."}}),{c(){z(n.$$.fragment)},m(t,e){O(n,t,e),r=!0},p:t,i(t){r||(q(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){T(n,t)}}}function $t(t){let e,n,r,o={ctx:t,current:null,token:null,hasCatch:!0,pending:ht,then:gt,catch:mt,value:1,error:2,blocks:[,,,]};return L(n=t[0],o),{c(){e=p(),o.block.c()},m(t,n){c(t,e,n),o.block.m(t,o.anchor=n),o.mount=()=>e.parentNode,o.anchor=e,r=!0},p(e,[n]){{const r=(t=e).slice();r[1]=r[2]=o.resolved,o.block.p(r,n)}},i(t){r||(q(o.block),r=!0)},o(t){for(let t=0;t<3;t+=1){B(o.blocks[t])}r=!1},d(t){t&&l(e),o.block.d(t),o.token=null,o=null}}}function bt(t){var e;e=async()=>{},v().$$.on_mount.push(e);return[(async()=>{const t=await fetch("https://api.github.com/repos/ricardomaia/statuspage/issues?state=all");if(t.ok)return t.json();if("404"==t.status)throw Error("Network error");if("403"==t.status){let e=J(new Date(1e3*t.headers.get("X-RateLimit-Reset")));throw Error(`${Y(t.statusText)} ${Y("reset_time")} ${e}`)}})()]}class vt extends F{constructor(t){super(),D(this,t,bt,$t,s,{})}}function yt(e){let n;return{c(){n=u("div"),n.textContent="logo",m(n,"class","logo svelte-m506fv")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class _t extends F{constructor(t){super(),D(this,t,null,yt,s,{})}}function wt(e){let n,r,o,s;return r=new _t({}),{c(){n=u("div"),z(r.$$.fragment),o=u("span"),o.textContent=""+Y("service_status"),m(o,"class","app-title svelte-oh5hlr"),m(n,"class","row")},m(t,e){c(t,n,e),O(r,n,null),a(n,o),s=!0},p:t,i(t){s||(q(r.$$.fragment,t),s=!0)},o(t){B(r.$$.fragment,t),s=!1},d(t){t&&l(n),T(r)}}}class xt extends F{constructor(t){super(),D(this,t,null,wt,s,{})}}function kt(e){let n;return{c(){n=u("div"),n.innerHTML='<div class="col"><a class="github-button" href="https://github.com/ricardomaia" data-size="large" data-show-count="true" aria-label="Follow @ricardomaia on GitHub">@ricardomaia</a></div> \n  <div class="col powered svelte-1y2kqgw">Powered by\n    <a href="https://github.com/ricardomaia/statuspage" target="_blank">Status Page</a></div>',m(n,"class","row")},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class jt extends F{constructor(t){super(),D(this,t,null,kt,s,{})}}function Nt(e){let n,r,o,s,i,d,p,g,h,$;return i=new xt({}),p=new vt({}),h=new jt({}),{c(){n=u("script"),o=f(),s=u("div"),z(i.$$.fragment),d=f(),z(p.$$.fragment),g=f(),z(h.$$.fragment),n.async=!0,n.defer=!0,n.src!==(r="https://buttons.github.io/buttons.js")&&m(n,"src","https://buttons.github.io/buttons.js"),m(s,"id","wrapper"),m(s,"class","svelte-trf69a")},m(t,e){a(document.head,n),c(t,o,e),c(t,s,e),O(i,s,null),a(s,d),O(p,s,null),a(s,g),O(h,s,null),$=!0},p:t,i(t){$||(q(i.$$.fragment,t),q(p.$$.fragment,t),q(h.$$.fragment,t),$=!0)},o(t){B(i.$$.fragment,t),B(p.$$.fragment,t),B(h.$$.fragment,t),$=!1},d(t){l(n),t&&l(o),t&&l(s),T(i),T(p),T(h)}}}return new class extends F{constructor(t){super(),D(this,t,null,Nt,s,{})}}({target:document.querySelector("#app")})}();
//# sourceMappingURL=bundle.js.map