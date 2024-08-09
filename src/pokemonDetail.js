import createDetailUI from "./createDetailUI";
import './detailsStyle.css'
document.body.appendChild(createDetailUI());
let stats = []
let sprites = []
let id = window.location.href.split('=')[1];
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res)=>res.json()).then(data=>{
    stats = data.stats
    sprites = data.sprites
    displayStats(stats);
    displaySprites(sprites)
    console.log('stats',stats)
    console.log('sprites',sprites)
}).catch(err=>console.error(`Failed to fetch data ${err}`))

function displaySprites(sp){
    let allImages = []
    for(let value of Object.values(sp)){
        if(value !== null){
            allImages.push(value)
        }
    }
    console.log(allImages.slice(0,4))
    let img = document.querySelector(".sprite-img");
    let position = 0;
    img.src = allImages.slice(0,4)[0]
    let leftBtn = document.querySelector('.left')
    let rightBtn = document.querySelector('.right')
    
    leftBtn.addEventListener('click',()=>{
        if(position === 0){
            position = allImages.slice(0,4).length-1;
        }else{
            position--;
        }

        img.src = allImages.slice(0,4)[position]
    });

    rightBtn.addEventListener('click',()=>{
        if(position === allImages.slice(0,4).length-1){
            position = 0
        }else{
            position++;
        }

        img.src = allImages.slice(0,4)[position]
    });

}

function displayStats(dts){
    let contentWrapper = document.querySelector(".content-wrapper")
    dts.forEach(item=>{
        let para = document.createElement('p');
        para.innerHTML = `${capitalize(item.stat.name)}:<span class="progress-span"><progress value=${item['base_stat'].toString()} max="100">${item['base_stat']}%</progress></span>`
        contentWrapper.appendChild(para)
    })
}
function capitalize(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}