import searchIcon from './search.svg'
import crossIcon from './cross.svg'
export default function searchUI(){
    let searchWrapper = document.createElement('div');
     searchWrapper.setAttribute('class','search-wrapper')
    let searchWrap = document.createElement('div');
    searchWrap.className = 'search-wrap';
    let searchButton = document.createElement('button');
    searchButton.setAttribute('class','search')
    let searchImg = new Image()
    searchImg.src = searchIcon;
    searchImg.alt = 'search icon';
    let searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.setAttribute('placeholder','Search');
    let closeButton = document.createElement('button')
    closeButton.setAttribute('class','close')
    let closeIcon = new Image();
    closeIcon.src = crossIcon;
    closeIcon.alt = 'cross icon';
    closeIcon.className = 'search-close-icon'
    closeButton.appendChild(closeIcon)
    searchButton.appendChild(searchImg)
    searchWrap.appendChild(searchButton)
    searchWrap.appendChild(searchInput)
    searchWrap.appendChild(closeButton);
    searchWrapper.appendChild(searchWrap)
    return searchWrapper;
}