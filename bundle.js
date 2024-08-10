(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(354),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,"*{\n    padding:0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: red;\n}\n.mainContainer{\n    margin: 10px;\n    max-width: 100vw;\n    width:95vw;\n    margin: 0 auto;\n}\n.header,.search-wrapper,.filter-wrapper,.filter-wrap{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    font-size: 1.2em;\n}\n.header,.search-wrapper{\n    flex-direction: column;\n}\n.filter-wrapper > p{\n    font-size: 1.2em;\n    font-weight: bolder;\n}\n.search-wrapper{\n    width: 80vw;\n    margin: 0 auto;\n}\n.search-input{\n    width: 80%;\n    margin: 0 auto;\n    padding: 10px;\n    font-size: 1em;\n}\n.close{\n    border-style: none;\n    border-radius: 5px;\n    font-size: 1em;\n    padding: 11px;\n}\n.close:hover{\n    background-color: rgb(192, 162, 162);\n}\n.content{\n    background-color: white;\n    max-width: 300px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.list-wrap{\n    width: 90px; \n    padding: 20px; \n}\n@media only screen and (min-width:768px){\n    .mainContainer{\n        width:100vw;\n    }\n    .content{\n        max-width: 760px;\n        margin: 0 auto;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n    }\n    .list-wrap{\n        width: 150px; \n        padding: 20px; \n    }\n    .search-wrapper{\n        min-width: 768px;\n    }\n    .search-input{\n        width: 500px;\n    }\n}\n@media only screen and (min-width:1000px){\n    .content{\n        width: 1000px;\n        min-width: 1000px;\n        margin: 0 auto;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n    }\n    .list-wrap{\n        width: 150px; \n        padding: 5px; \n    }\n    .search-wrapper{\n        min-width: 1000px;\n    }\n    .search-input{\n        width: 800px;\n    }\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,cAAc;AAClB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,cAAc;AAClB;AACA;IACI,UAAU;IACV,cAAc;IACd,aAAa;IACb,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,aAAa;AACjB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,eAAe;IACf,8BAA8B;AAClC;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI;QACI,WAAW;IACf;IACA;QACI,gBAAgB;QAChB,cAAc;QACd,aAAa;QACb,eAAe;QACf,uBAAuB;QACvB,mBAAmB;IACvB;IACA;QACI,YAAY;QACZ,aAAa;IACjB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,YAAY;IAChB;AACJ;AACA;IACI;QACI,aAAa;QACb,iBAAiB;QACjB,cAAc;QACd,aAAa;QACb,eAAe;QACf,uBAAuB;QACvB,mBAAmB;IACvB;IACA;QACI,YAAY;QACZ,YAAY;IAChB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,YAAY;IAChB;AACJ",sourcesContent:["*{\n    padding:0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: red;\n}\n.mainContainer{\n    margin: 10px;\n    max-width: 100vw;\n    width:95vw;\n    margin: 0 auto;\n}\n.header,.search-wrapper,.filter-wrapper,.filter-wrap{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    font-size: 1.2em;\n}\n.header,.search-wrapper{\n    flex-direction: column;\n}\n.filter-wrapper > p{\n    font-size: 1.2em;\n    font-weight: bolder;\n}\n.search-wrapper{\n    width: 80vw;\n    margin: 0 auto;\n}\n.search-input{\n    width: 80%;\n    margin: 0 auto;\n    padding: 10px;\n    font-size: 1em;\n}\n.close{\n    border-style: none;\n    border-radius: 5px;\n    font-size: 1em;\n    padding: 11px;\n}\n.close:hover{\n    background-color: rgb(192, 162, 162);\n}\n.content{\n    background-color: white;\n    max-width: 300px;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n.list-wrap{\n    width: 90px; \n    padding: 20px; \n}\n@media only screen and (min-width:768px){\n    .mainContainer{\n        width:100vw;\n    }\n    .content{\n        max-width: 760px;\n        margin: 0 auto;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n    }\n    .list-wrap{\n        width: 150px; \n        padding: 20px; \n    }\n    .search-wrapper{\n        min-width: 768px;\n    }\n    .search-input{\n        width: 500px;\n    }\n}\n@media only screen and (min-width:1000px){\n    .content{\n        width: 1000px;\n        min-width: 1000px;\n        margin: 0 auto;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n    }\n    .list-wrap{\n        width: 150px; \n        padding: 5px; \n    }\n    .search-wrapper{\n        min-width: 1000px;\n    }\n    .search-input{\n        width: 800px;\n    }\n}\n"],sourceRoot:""}]);const c=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(o[p]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var p=n[c],s=r.base?p[0]+r.base:p[0],d=i[s]||0,A="".concat(s," ").concat(d);i[s]=d+1;var l=t(A),u={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var m=a(u,r);r.byIndex=c,e.splice(c,0,{identifier:A,updater:m,references:1})}o.push(A)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var p=r(n,a),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=p}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var r=t(72),a=t.n(r),i=t(825),o=t.n(i),c=t(659),p=t.n(c),s=t(56),d=t.n(s),A=t(540),l=t.n(A),u=t(113),m=t.n(u),h=t(208),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=p().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),a()(h.A,f),h.A&&h.A.locals&&h.A.locals;const C=t.p+"3ca6252a9e3e1f20f793.svg";t.p;const w=t.p+"28a8d6d11746fd2c724f.svg";let v=document.createElement("div");v.setAttribute("class","mainContainer");let g=document.createElement("div");g.setAttribute("class","header-content");let x=document.createElement("div");x.setAttribute("class","search-filter"),x.appendChild(function(){let n=document.createElement("div");n.setAttribute("class","search-wrapper");let e=document.createElement("div");e.className="search-wrap";let t=document.createElement("input");t.className="search-input",t.setAttribute("placeholder","Search");let r=document.createElement("button");r.setAttribute("class","close");let a=new Image;return a.src=w,a.alt="cross icon",a.className="search-close-icon",r.appendChild(a),e.appendChild(t),e.appendChild(r),n.appendChild(e),n}()),x.appendChild(function(){let n=document.createElement("div");n.setAttribute("class","filter-wrapper");let e=document.createElement("p");e.textContent="Sort by:";let t=document.createElement("div");t.setAttribute("class","filter-wrap");let r=document.createElement("div");r.innerHTML='\n        <input type="radio" name="filters" id="number" value="number" checked/>\n        <label for="number">Number</label>\n    ';let a=document.createElement("div");return a.innerHTML='\n            <input type="radio" name="filters" id="name" value="name"/>\n            <label for="name">Name</label>\n    ',t.appendChild(r),t.appendChild(a),n.appendChild(e),n.appendChild(t),n}()),g.appendChild(function(){let n=document.createElement("div");n.setAttribute("class","header");let e=new Image;e.src=C,e.alt="pokeball",e.className="pokeIcon";let t=document.createElement("h1");return t.innerHTML="Pokedex",n.appendChild(e),n.appendChild(t),n}()),g.appendChild(x),v.appendChild(g),v.appendChild(function(){let n=document.createElement("div");n.setAttribute("class","content");let e=document.createElement("div");return e.setAttribute("id","error-div"),e.innerHTML="\n        <h1>No pokemon found</h1>\n    ",n.appendChild(e),n}()),document.body.appendChild(v);let I=[];function b(n){let e=document.querySelector(".content");e.innerHTML="",n.forEach((n=>{let t=n.url.split("/")[6],r=document.createElement("div");r.className="list-item",r.innerHTML=`\n            <div class='list-wrap'>\n                    <div class ="number-wrap">\n                        <p>${t}</p>\n                    </div>\n                    <div class="img-wrap">\n                        <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${t}.svg" alt=${n.name}" width='50' height='50'/>\n                    </div>\n                    <div class="name-wrap">\n                        <p>${n.name}</p>\n                    </div>\n            </div>\n            `,r.addEventListener("click",(async()=>{await async function(n){try{const[e]=await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then((n=>n.json()))]);return!0}catch(n){console.error("Failed to fetch pokemon data before redirect")}}(t)&&(window.location.href=`./detail.html?id=${t}`)})),e.appendChild(r)}))}fetch("https://pokeapi.co/api/v2/pokemon?limit=251").then((n=>n.json())).then((n=>{I=n.results,b(I),console.log(I)}));let B=document.querySelector(".search-input"),y=document.querySelector("#name"),k=document.querySelector("#number");B.addEventListener("keyup",(function(){let n,e=document.querySelector(".content"),t=B.value.toLowerCase();if(n=k.checked?I.filter((n=>n.url.split("/")[6].startsWith(t))):y.checked?I.filter((n=>n.name.startsWith(t))):I,b(n),0===n.length){let n=document.createElement("div");n.setAttribute("id","error"),n.innerHTML="<p>No pokemon found..</p>",e.appendChild(n)}})),document.querySelector(".close").addEventListener("click",(function(){B.value="",b(I)}))})();
//# sourceMappingURL=bundle.js.map