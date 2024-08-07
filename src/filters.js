export default function filters(){
    let filterWrapper = document.createElement('div');
    filterWrapper.setAttribute('class','filter-wrapper')
    let para = document.createElement('p');
    para.textContent = 'Sort by:'
    let filterWrap = document.createElement('div');
    filterWrap.setAttribute('class','filter-wrap')
    let inputNumberDiv = document.createElement('div');
    inputNumberDiv.innerHTML = `
        <input type="radio" name="filters" id="number" value="number" checked/>
        <label for="number">Number</label>
    `

    let inputNameDiv = document.createElement('div');
    inputNameDiv.innerHTML = `
            <input type="radio" name="filters" id="name" value="name"/>
            <label for="name">Name</label>
    `
    filterWrap.appendChild(inputNumberDiv)
    filterWrap.appendChild(inputNameDiv)
    filterWrapper.appendChild(para);
    filterWrapper.appendChild(filterWrap);
    return filterWrapper;
}