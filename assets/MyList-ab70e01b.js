import{r as d,j as r}from"./index-3b1b2ad8.js";import{G as l}from"./GameThumbnail-6b24fd07.js";const c="myFavList";function m(){const[s,a]=d.useState(()=>{const t=JSON.parse(window.localStorage.getItem(c));return t||[]}),n=(()=>{const t={};if(Array.isArray(s)&&s.length)for(const e of s)t[e.id]=!0;return t})();function o(t){if(t.id in n){const e=s.filter(i=>i.id!==t.id);return window.localStorage.setItem(c,JSON.stringify(e)),a(e)}else a(e=>{const i=[...e,t];return window.localStorage.setItem(c,JSON.stringify(i)),i})}return[s,n,o]}function f(){const[s,a,n]=m(),[o,t]=d.useState(!1);return d.useEffect(()=>{t(!0)},[s]),r.jsxs("main",{className:"py-40 px-20",children:[r.jsx("h1",{children:"My games"}),o?s.length?r.jsx(l,{gameList:s,addToMyFav:n,myFavId:a}):r.jsx("p",{children:"Not in My List"}):null]})}export{f as Component,f as default};