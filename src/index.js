import './style.css';
import headerUI from './headerUI';
import searchUI from './searchUI';
import contentUI from './contentUI';
let h1 = document.createElement('h1');
h1.innerHTML = 'Hello THere'

document.body.appendChild(headerUI());
document.body.appendChild(searchUI());
document.body.appendChild(contentUI())