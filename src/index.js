import './style.css';
import headerUI from './headerUI';
import searchUI from './searchUI';
import contentUI from './contentUI';
import filters from './filters';
let mainContainer = document.createElement('div');
mainContainer.setAttribute('class','mainContainer');
let headerContent = document.createElement('div');
headerContent.setAttribute('class','header-content')
let searchFilter = document.createElement('div');
searchFilter.setAttribute('class','search-filter');
searchFilter.appendChild(searchUI())
searchFilter.appendChild(filters())
headerContent.appendChild(headerUI())
headerContent.appendChild(searchFilter)
mainContainer.appendChild(headerContent)
mainContainer.appendChild(contentUI())
document.body.appendChild(mainContainer);
const MAX_POKEMON = 251;
let allPokemons = [];
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
    .then(response=>response.json())
    .then(data=>{
        allPokemons = data.results;
        displayPokemons(allPokemons)
        console.log(allPokemons)
    })
    async function fetchBeforeRedirect(id){
        try{
            const [pokemon] = await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res)=>res.json())])
            return true;
        }catch(error){
            console.error('Failed to fetch pokemon data before redirect');
        }

    }
    function displayPokemons(pokemons){
        let content = document.querySelector('.content')
        content.innerHTML = '';
        pokemons.forEach((pokemon)=>{
            let pokemonID = pokemon.url.split("/")[6];
            let listItem = document.createElement('div');
            listItem.className = 'list-item'
            listItem.innerHTML = `
            <div class='list-wrap'>
                    <div class ="number-wrap">
                        <p>${pokemonID}</p>
                    </div>
                    <div class="img-wrap">
                        <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg" alt=${pokemon.name}" width='50' height='50'/>
                    </div>
                    <div class="name-wrap">
                        <p>${pokemon.name}</p>
                    </div>
            </div>
            `
            listItem.addEventListener('click',async()=>{
                const success = await fetchBeforeRedirect(pokemonID)
                if(success){
                    window.location.href = `./detail.html?id=${pokemonID}`
                }
            })
            content.appendChild(listItem)
        })
    
    }

let searchInput = document.querySelector(".search-input");
let nameFilter = document.querySelector("#name")
let numberFilter = document.querySelector("#number");
searchInput.addEventListener("keyup",handleSearch);

function handleSearch(){
    let content = document.querySelector('.content')
    let searchQuery = searchInput.value.toLowerCase();
    let filteredPokemons;
    if(numberFilter.checked){
        filteredPokemons = allPokemons.filter((pokemon) =>{
            const pokemonID = pokemon.url.split("/")[6];
            return pokemonID.startsWith(searchQuery)
        })
    }else if(nameFilter.checked){
        filteredPokemons = allPokemons.filter(pokemon=>{
          return pokemon.name.startsWith(searchQuery)
     })
     }else{
        filteredPokemons = allPokemons
    }
    displayPokemons(filteredPokemons);
    if(filteredPokemons.length === 0){
        let errorDiv = document.createElement('div');
        errorDiv.setAttribute('id','error')
        errorDiv.innerHTML = `<p>No pokemon found..</p>`
        content.appendChild(errorDiv)}
}
let close = document.querySelector(".close");
close.addEventListener('click',clearSearch)
function clearSearch(){
    searchInput.value = ''
    displayPokemons(allPokemons);
}