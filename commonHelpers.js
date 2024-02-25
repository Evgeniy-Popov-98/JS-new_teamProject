import{a as y,i as k}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();async function m(e,t){const r="https://books-backend.p.goit.global/books/",n=`${e}`;let o;t&&(o={category:`${t}`});const s=`${r}${n}`,i=await y.get(s,{params:o});if(i.data.length===0)throw new Error("Error");return i.data}const h=document.querySelector(".switch-box"),c=document.querySelector(".switch-button");c.addEventListener("click",e=>{c.dataset.switch==="true"?(c.classList.remove("new-position"),h.classList.remove("new-background"),c.dataset.switch="false"):(c.classList.add("new-position"),h.classList.add("new-background"),c.dataset.switch="true")});const p={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title")};function l(e){k.error({title:"Error",message:e})}let a=window.innerWidth;window.addEventListener("resize",async()=>{const e=window.innerWidth;if(a>768||a<768&&e>=768||a>=768&&e<=1440&&(a<=768||e>=1439))try{const t=await m("top-books");p.galleryBooks.innerHTML="";for(const r of t)b(r),r.books.length>=1?g(r):l("Sorry, there are no items in this category")}catch(t){l(`Failed to render books:${t}`)}a=e});async function w(){try{const e=await m("top-books");for(const t of e)b(t),t.books.length>=1?g(t):l("Sorry, there are no items in this category")}catch(e){l(`Failed to render books:${e}`)}}function b(e){const t=`<li id="${e.list_name}" class="list-category-books">
    <h2 class="list-category-title">${e.list_name}</h2>
    <ul class="list-book">
     </ul>    
    </li>
    <button type="button" class="btn-more">See more</button>`;p.galleryBooks.insertAdjacentHTML("beforeend",t)}function L(e){const{book_image:t,author:r,title:n,_id:o,contributor:s,list_name:i}=e;if(i)return`
    <li class="card book-item" data-id="${o}">
    <img class="book-img" src="${t}" alt="${s} ${n}">
    <h3 class="title-book">${n}</h3>
    <p class="author">${r}</p>
    </li>
   `}function d(e){return e.map(L).join("")}function g(e){const t=B(e),r=e.list_name;document.getElementById(r).querySelector(".list-book").insertAdjacentHTML("afterbegin",t)}function B(e){let t;return window.innerWidth>=768&&window.innerWidth<=1439?t=d(e.books.slice(0,3)):window.innerWidth>=1440?t=d(e.books):t=d(e.books.slice(0,1)),t}const u=document.querySelector(".js-hhome"),f=document.querySelector(".js-hshopping");u.addEventListener("click",S);f.addEventListener("click",$);function S(e){e.preventDefault(),u.classList.add("hhome-btn"),f.classList.remove("hshopping-btn")}function $(e){e.preventDefault(),u.classList.remove("hhome-btn"),f.classList.add("hshopping-btn")}w();
//# sourceMappingURL=commonHelpers.js.map
