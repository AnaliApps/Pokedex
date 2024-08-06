import headerIcon from './pokeball.svg'
export default function headerUI(){
    // Header section
    let headerDiv = document.createElement('div');
    headerDiv.setAttribute('class','header')
    let headerimg = new Image()
    headerimg.src = headerIcon
    headerimg.alt = 'pokeball';
    headerimg.className = 'pokeIcon'
    let headerText = document.createElement('h1');
    headerText.innerHTML = 'Pokedex';
    headerDiv.appendChild(headerimg);
    headerDiv.appendChild(headerText);
    return headerDiv;
}