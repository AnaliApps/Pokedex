export default function createDetailUI(){
    let mainStats = document.createElement('div');
    mainStats.setAttribute('class','main-stats')
    let statsContent = document.createElement('div');
    statsContent.setAttribute('class','stats-content');
    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('class','img-div')
    let img = document.createElement('img');
    img.setAttribute('class','sprite-img')
    imgDiv.appendChild(img)
    let leftBtn = document.createElement('button');
    leftBtn.setAttribute('class',"left")
    leftBtn.textContent = '<'
    let rightBtn = document.createElement('button');
    rightBtn.setAttribute('class',"right")
    rightBtn.textContent = '>'
    let h2 = document.createElement('h2');
    h2.innerHTML = `Pokemon Character Stats Details`
    statsContent.appendChild(imgDiv)
    statsContent.appendChild(leftBtn)
    statsContent.appendChild(rightBtn)
    statsContent.appendChild(h2);
    mainStats.appendChild(statsContent)
    return mainStats
}