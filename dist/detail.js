(()=>{"use strict";document.body.appendChild(function(){let e=document.createElement("div"),t=document.createElement("div");t.setAttribute("class","stats-content");let n=document.createElement("img");n.setAttribute("class","sprite-img");let o=document.createElement("h2");return o.innerHTML="Pokemon Character Stats Details",t.appendChild(n),t.appendChild(o),e.appendChild(t),e}());let e=[],t=[],n=window.location.href.split("=")[1];fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then((e=>e.json())).then((n=>{e=n.stats,t=n.sprites,function(e){let t=document.querySelector(".stats-content");e.forEach((e=>{let n=document.createElement("p");var o;n.innerHTML=`${o=e.stat.name,o[0].toUpperCase()+o.slice(1).toLowerCase()}:<span>${e.base_stat}</span>`,t.appendChild(n)}))}(e),function(e){let t=[];for(let n of Object.values(e))null!==n&&t.push(n);console.log(t.slice(0,4)),document.querySelector(".sprite-img").src=t.slice(0,4)[0]}(t),console.log("stats",e),console.log("sprites",t)})).catch((e=>console.error(`Failed to fetch data ${e}`)))})();