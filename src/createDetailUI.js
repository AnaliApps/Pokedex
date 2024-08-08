export default function createDetailUI(){
    let mainStats = document.createElement('div');
    let statsContent = document.createElement('div');
    statsContent.setAttribute('class','stats-content');
    let img = document.createElement('img');
    img.setAttribute('class','sprite-img')
    let h2 = document.createElement('h2');
    h2.innerHTML = `Pokemon Character Stats Details`
    statsContent.appendChild(img)
    statsContent.appendChild(h2);
    mainStats.appendChild(statsContent)
    return mainStats
}