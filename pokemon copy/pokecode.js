//Reusable function to fetch data
async function getAPIData(url) {
try {
  const respond = await fetch(url)
  const data = await response.json()
} catch (error) {
 console.error(error)
}}

//cards loading with names
async function loadCards() {
    let apiResults = await getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`);
    //console.log(apiResults)
    for(let entry of apiResults) {
        console.log(entry.name);
        populatePokeCard(entry.name);
    }
}

async function getAPIData(url) {
    try {
        let output;
        await fetch(url)
        .then(response => response.json())
        .then(data => output = data.results)
        //.then(() => console.log(output));
        return output;
    } catch (error) {
        console.error(error);
    }
}

function populatePokeCard(pokemon) {
    let parentDiv = document.getElementById("pokemonGrid");
    parentDiv.innerHTML += `
    <div id="${pokemon}Card" class="card"> 
    <p id="${pokemon}CardTitle" class="cardText">${pokemon} </p> 
    </div>`
}

document.body.onload = loadCards;
