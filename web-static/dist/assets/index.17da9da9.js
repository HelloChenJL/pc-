import{p as e,a as t,r as o,o as n,c as r,b as s,t as l,F as a,d as i,e as u,f as c}from"./vendor.2a126f78.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();e("data-v-3d3c9e2e");const d=s("p",null,[i(" Recommended IDE setup: "),s("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),i(" + "),s("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1),p=s("p",null,[s("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),i(" | "),s("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1),m=s("p",null,[i(" Edit "),s("code",null,"components/HelloWorld.vue"),i(" to test hot module replacement. ")],-1);t();const f={props:{msg:String},setup(e){const t=o(0);return(o,i)=>(n(),r(a,null,[s("h1",null,l(e.msg),1),d,p,s("button",{type:"button",onClick:i[0]||(i[0]=e=>t.value++)},"count is: "+l(t.value),1),m],64))},__scopeId:"data-v-3d3c9e2e"};const g=s("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);c({setup:e=>(e,t)=>(n(),r(a,null,[g,u(f,{msg:"Hello Vue 3 + Vite"})],64))}).mount("#app");
