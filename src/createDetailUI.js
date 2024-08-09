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
    let leftDiv = document.createElement('div');
    leftDiv.setAttribute('class',"leftDiv")
    let leftBtn = document.createElement('button');
    leftBtn.setAttribute('class',"left")
    leftBtn.textContent = '<'
    leftDiv.appendChild(leftBtn);
    let rightDiv = document.createElement('div');
    rightDiv.setAttribute('class',"rightDiv")
    let rightBtn = document.createElement('button');
    rightBtn.setAttribute('class',"right")
    rightBtn.textContent = '>'
    rightDiv.appendChild(rightBtn)
    let header2Div = document.createElement('div');
    header2Div.setAttribute('class','header2Div')
    let h2 = document.createElement('h2');
    h2.innerHTML = `Pokemon Character Stats Details`
    let allBtnsImgs = document.createElement('div');
    allBtnsImgs.setAttribute('class','allbtnsimg')
    header2Div.appendChild(h2)
    allBtnsImgs.appendChild(leftDiv)
    allBtnsImgs.appendChild(imgDiv)
    allBtnsImgs.appendChild(rightDiv)
    statsContent.appendChild(allBtnsImgs)
    mainStats.appendChild(header2Div)
    mainStats.appendChild(statsContent)
    return mainStats
}