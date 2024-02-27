import"./assets/storage-a5e3f761.js";import{a as z,i as U}from"./assets/vendor-8cce9181.js";async function k(e,o){const i="https://books-backend.p.goit.global/books/",n=`${e}`;let r;o&&(r={category:`${o}`});const l=`${i}${n}`,d=await z.get(l,{params:r});if(d.data.length===0)throw new Error("Error");return d.data}const v="TASKS_KEY";function _(e,o){localStorage.setItem(e,JSON.stringify(o))}function C(e){return JSON.parse(localStorage.getItem(e))}function P(e){if(e.target.nodeName!=="BUTTON")return;const o=e.target.getAttribute("id");let i=[];const n=C(v);for(const r of n)r.constID!==o&&i.push(r);_(v,i)}const j=document.querySelector(".js-hhome"),B=document.querySelector(".js-hshopping");document.addEventListener("DOMContentLoaded",I);j.addEventListener("click",I);B.addEventListener("click",R);function I(){j.classList.add("hhome-btn"),B.classList.remove("hshopping-btn")}function R(e){e.homeBtn.classList.remove("hhome-btn"),B.classList.add("hshopping-btn")}const Y=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}];let T=document.querySelector(".plus-btn"),$=document.querySelector(".second-btn");const x=document.querySelectorAll(".header-link");document.querySelectorAll(".header-item");for(let e=0;e<x.length;e++)x[e].setAttribute("href",`${Y[e].url}`);T.addEventListener("click",function(){T.style.display="none",$.style.display="flex";const e=document.querySelectorAll(".header-item");for(let o=0;o<3;o++)e[o].style.display="none"});$.addEventListener("click",function(){T.style.display="flex",$.style.display="none";const e=document.querySelectorAll(".header-item");for(let o=0;o<3;o++)e[o].style.display="flex"});const D=document.querySelector("body"),a=document.querySelector(".modal"),w=document.querySelector(".backdrop"),H=document.querySelector(".modal-close-btn"),c=document.querySelector(".modal-list-btn-add"),p=document.querySelector(".modal-list-btn-remove"),L=document.querySelector(".modal-list-container");let A;async function O(e){p.setAttribute("id",`${e}`),A=e,document.addEventListener("keydown",W);const o=await k(A);F(o);try{const i=C(v);for(const n of i)n.constID===e&&(c.style.display="none",p.style.display="flex",L.innerText="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",window.innerWidth<=768?a.style.height="806px":a.style.height="501px")}catch{}c.addEventListener("click",S),p.addEventListener("click",E)}function F(e){var l,d;w.style.display="flex",D.style.overflow="hidden";const o=((l=e.buy_links.find(t=>t.name==="Amazon"))==null?void 0:l.url)||"",i=((d=e.buy_links.find(t=>t.name==="Apple Books"))==null?void 0:d.url)||"",n=e.description?e.description:"With our diverse range of titles, you're sure to find the perfect companion for cozy nights in. Treat yourself to the joy of reading and explore the endless possibilities that await within the pages of our books.",r=`
  <ul class="buy-links-list">
    <li>
      <img class="img-amazon" src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${o}">
    </li>
    <li>
      <img class="img-apple" src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${i}">
    </li>
  </ul>
`;a.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description-modal">${n}</p>
      ${r}
    </div>  
  </div>
`,a.appendChild(H),a.appendChild(c),a.appendChild(p),a.appendChild(L),a.querySelectorAll(".platform-image").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.url;s?window.open(s,"_blank"):console.error("Platform URL not found.")})})}document.addEventListener("DOMContentLoaded",function(){H.addEventListener("click",function(){M()}),w.addEventListener("click",function(e){e.target===w&&M()})});c.addEventListener("click",function(){L.innerText="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",window.innerWidth<=768?a.style.height="806px":a.style.height="501px",c.removeEventListener("click",this)});p.addEventListener("click",function(){L.innerText="",window.innerWidth<=768?a.style.height="762px":a.style.height="465px",p.removeEventListener("click",this)});function W(e){e.key==="Escape"&&(M(),document.removeEventListener("keydown",W))}function M(){a.classList.add("closing"),setTimeout(function(){w.style.display="none",a.classList.remove("closing")},500),c.removeEventListener("click",S),c.removeEventListener("click",E),D.style.overflow="auto",c.style.display="flex",p.style.display="none"}function S(){const e=C(v)||[];e.push({constID:A}),_(v,e),c.style.display="none",p.style.display="flex",c.removeEventListener("click",S),p.addEventListener("click",E)}function E(e){P(e),c.style.display="flex",p.style.display="none",c.removeEventListener("click",E),c.addEventListener("click",S)}const K="category";async function N(e){const o=document.querySelector(".js-booksgallery");o.innerHTML="";try{const n=await k(K,e);J(n),Q(e)}catch(n){console.error("Failed to fetch books:",n)}document.querySelectorAll(".cat-book-image-overlay").forEach(n=>{n.addEventListener("click",r=>{const l=r.target.closest(".booksgallery-item");if(l){const d=l.dataset.id;O(d)}})})}function J(e){const o=document.querySelector(".booksgallery"),i=e.map(n=>`
      <li class="booksgallery-item cardCategory book-hover" data-id="${n._id}">
	  <div class="wrapper-overlay">
          <img class="gallery-image" src="${n.book_image}" alt="${n.description}">          
			<div class="cat-book-image-overlay">
				<p class="book-image-overlay-text quick-view-trigger">Quick view</p>
			</div>
		</div>
		<h3 class="name-book">${n.title}</h3>
          <p class="author-book">${n.author}</p>
      </li>`).join("");o.insertAdjacentHTML("beforeend",i)}function Q(e){const o=document.querySelector(".selected-title"),i=e.split(" "),n=i[i.length-1];i.pop(),o.innerHTML=`${i.join(" ")} <span class="selected-color">${n} </span>`}const h={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item"),scrollTop:document.getElementById("scrollTop")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const o=await k("category-list");let i='<li data-category="top-books" class="category-books-item">All categories</li>';o.forEach(l=>{i+=`<li class="category-books-item" data-category="${l.list_name}">${l.list_name}</li>`}),h.allListCategories.insertAdjacentHTML("beforeend",i),document.querySelectorAll(".category-books-item").forEach(l=>{l.addEventListener("click",r)});function r(l){l.preventDefault();const d=document.querySelector(".js-home-pg"),t=document.querySelector(".js-selected-page"),s=l.target.innerHTML;for(const m of o)m.list_name===s&&(d.style.display="none",t.style.display="block",N(s));s==="All categories"&&(d.style.display="block",t.style.display="none")}}e()});function b(e){U.error({title:"Error",message:e})}document.addEventListener("DOMContentLoaded",()=>{let e=window.innerWidth;window.addEventListener("resize",async()=>{const t=window.innerWidth;if(e>768||e<768&&t>=768||e>=768&&t<=1440&&(e<=768||t>=1439))try{const s=await k("top-books");h.galleryBooks.innerHTML="";for(const m of s)i(m),m.books.length>=1?l(m):b("Sorry, there are no items in this category")}catch(s){b(`Failed to render books:${s}`)}e=t});async function o(){try{let y=function(u){const f=document.querySelector(".js-home-pg"),g=document.querySelector(".js-selected-page"),q=u.srcElement.dataset.id;f.style.display="none",g.style.display="block",N(q)};const t=await k("top-books");for(const u of t)i(u),u.books.length>=1?l(u):b("Sorry, there are no items in this category");document.querySelectorAll(".book-image-overlay").forEach(u=>{u.addEventListener("click",f=>{const g=f.target.closest(".card");if(g){const q=g.dataset.id;O(q)}})}),document.querySelectorAll(".btn-more").forEach(u=>{u.addEventListener("click",y)})}catch(t){b(`Failed to render books:${t}`)}}function i(t){const s=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${t.list_name}">See more</button>`;h.galleryBooks.insertAdjacentHTML("beforeend",s)}function n(t){const{book_image:s,author:m,title:y,_id:u,contributor:f,list_name:g}=t;if(g)return`
    <li class="card book-item book-hover" data-id="${u}">
       <div class="wrapper-overlay">
        <img class="book-img-home" src="${s}" alt="${f} ${y}">
        <div class="book-image-overlay" aria-label="${y}">
            <p class="book-image-overlay-text quick-view-trigger">Quick view</p>
        </div>
       </div>
    <h3 class="title-book">${y}</h3>
    <p class="author">${m}</p>
    </li>
    `}function r(t){return t.map(n).join("")}function l(t){const s=d(t),m=t.list_name;document.getElementById(m).querySelector(".list-book").insertAdjacentHTML("afterbegin",s)}function d(t){let s;return window.innerWidth>=768&&window.innerWidth<=1439?s=r(t.books.slice(0,3)):window.innerWidth>=1440?s=r(t.books):s=r(t.books.slice(0,1)),s}o()});window.onscroll=()=>{window.scrollY>400?h.scrollTop.classList.remove("isShowScroll_hide"):window.scrollY<400&&h.scrollTop.classList.add("isShowScroll_hide")};h.scrollTop.addEventListener("click",()=>window.scrollTo(0,0));document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-hhome a"),o=document.querySelector(".hshopping-link");window.location.pathname==="/index.html"||window.location.pathname==="/"?(e.classList.add("active"),o.classList.remove("active")):(o.classList.add("active"),e.classList.remove("active"))});
//# sourceMappingURL=commonHelpers.js.map