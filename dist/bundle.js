(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"h1{\n    color:white;\n}\nbody{\n    background-color: red;\n}\n.content{\n    width: 95vw;\n    background-color: white;\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n.list-wrap{\n    width: 15vw;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n.pokeIcon{\n    margin-right: 2em;\n}\n.search-wrapper{\n    margin: 1em;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n.search-input{\n    padding: 0.5em;\n    border: 0.5px solid lightgray;\n    border-radius: 5px;\n}\n.close,.search{\n    padding: 0.5em;\n    background-color: white;\n    border: 0px solid white;\n    border-radius: 5px;\n    margin: 0px 0.1em 0px 0.1em\n}\n\n.search:hover{\n    background-color:lightgreen;\n}\n.close:hover{\n    background-color: lightcoral;\n}\n.filter-wrapper{\n    display: flex;\n    justify-content: flex-end;\n    position: absolute;\n    top:0;\n    right:0;\n    width: 20vw;\n}\n.filter-wrap>div>label,.filter-wrapper>p{\n    color: white;\n    font-size: 1em;\n    font-weight: bold;\n}\n#error{\n    font-size: 1.2em;\n    font-weight: bold;\n}\n\n.mainContainer{\n    container-type: inline-size;\n}\n@container (max-width: 500px){\n    .mainContainer{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    .filter-wrapper{\n        width: 100vw;\n    }\n    .search-wrapper,.header{\n        width: 100vw;\n    }\n    \n    .list-wrap{\n        width:30vw;\n    }\n    \n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=o[s]||0,p="".concat(s," ").concat(d);o[s]=d+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var l=r(e,a),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),c=n(659),l=n.n(c),s=n(56),d=n.n(s),p=n(540),u=n.n(p),m=n(113),f=n.n(m),h=n(208),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),a()(h.A,v),h.A&&h.A.locals&&h.A.locals;const b=n.p+"3ca6252a9e3e1f20f793.svg",g=n.p+"fdc11deaf2ea660e8f93.svg",w=n.p+"28a8d6d11746fd2c724f.svg";let y=document.createElement("div");y.setAttribute("class","mainContainer"),y.appendChild(function(){let e=document.createElement("div");e.setAttribute("class","header");let t=new Image;t.src=b,t.alt="pokeball",t.className="pokeIcon";let n=document.createElement("h1");return n.innerHTML="Pokedex",e.appendChild(t),e.appendChild(n),e}()),y.appendChild(function(){let e=document.createElement("div");e.setAttribute("class","search-wrapper");let t=document.createElement("div");t.className="search-wrap";let n=document.createElement("button");n.setAttribute("class","search");let r=new Image;r.src=g,r.alt="search icon";let a=document.createElement("input");a.className="search-input",a.setAttribute("placeholder","Search");let o=document.createElement("button");o.setAttribute("class","close");let i=new Image;return i.src=w,i.alt="cross icon",i.className="search-close-icon",o.appendChild(i),n.appendChild(r),t.appendChild(n),t.appendChild(a),t.appendChild(o),e.appendChild(t),e}()),y.appendChild(function(){let e=document.createElement("div");e.setAttribute("class","filter-wrapper");let t=document.createElement("p");t.textContent="Sort by:";let n=document.createElement("div");n.setAttribute("class","filter-wrap");let r=document.createElement("div");r.innerHTML='\n        <input type="radio" name="filters" id="number" value="number" checked/>\n        <label for="number">Number</label>\n    ';let a=document.createElement("div");return a.innerHTML='\n            <input type="radio" name="filters" id="name" value="name"/>\n            <label for="name">Name</label>\n    ',n.appendChild(r),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),y.appendChild(function(){let e=document.createElement("div");e.setAttribute("class","content");let t=document.createElement("div");return t.setAttribute("id","error-div"),t.innerHTML="\n        <h1>No pokemon found</h1>\n    ",e.appendChild(t),e}()),document.body.appendChild(y);let x=[];function C(e){let t=document.querySelector(".content");t.innerHTML="",e.forEach((e=>{let n=e.url.split("/")[6],r=document.createElement("div");r.className="list-item",r.innerHTML=`\n            <div class='list-wrap'>\n                    <div class ="number-wrap">\n                        <p>${n}</p>\n                    </div>\n                    <div class="img-wrap">\n                        <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${n}.svg" alt=${e.name}" width='50' height='50'/>\n                    </div>\n                    <div class="name-wrap">\n                        <p>${e.name}</p>\n                    </div>\n            </div>\n            `,r.addEventListener("click",(async()=>{await async function(e){try{const[t]=await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${e}`).then((e=>e.json()))]);return!0}catch(e){console.error("Failed to fetch pokemon data before redirect")}}(n)&&(window.location.href=`./detail.html?id=${n}`)})),t.appendChild(r)}))}fetch("https://pokeapi.co/api/v2/pokemon?limit=251").then((e=>e.json())).then((e=>{x=e.results,C(x),console.log(x)}));let E=document.querySelector(".search-input"),k=document.querySelector("#name"),A=document.querySelector("#number");E.addEventListener("keyup",(function(){let e,t=document.querySelector(".content"),n=E.value.toLowerCase();if(e=A.checked?x.filter((e=>e.url.split("/")[6].startsWith(n))):k.checked?x.filter((e=>e.name.startsWith(n))):x,C(e),0===e.length){let e=document.createElement("div");e.setAttribute("id","error"),e.innerHTML="<p>No pokemon found..</p>",t.appendChild(e)}})),document.querySelector(".close").addEventListener("click",(function(){E.value="",C(x)}))})();