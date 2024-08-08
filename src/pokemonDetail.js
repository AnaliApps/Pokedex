import createDetailUI from "./createDetailUI";
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
    img.src = allImages.slice(0,4)[0]
}
function displayStats(dts){
    let statContent = document.querySelector(".stats-content")
    dts.forEach(item=>{
        let para = document.createElement('p');
        para.innerHTML = `${capitalize(item.stat.name)}:<span>${item['base_stat']}</span>`
        statContent.appendChild(para)
    })
}
function capitalize(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}