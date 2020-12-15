//example api async function
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

let pokemonData = [];
let pageSet = true;
let pokemonCount = 25;
let maxPokemon = 200;

document.getElementById("newPokeCard").addEventListener("change", () => { 
    console.log(document.getElementById("newPokeCard").value)
    newPokeCard(document.getElementById("newPokeCard").value)
}); 

async function loadCards() {
    let apiResults = await getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}`);
    //console.log(apiResults)
    for(let entry of apiResults) {
        //console.log(entry.name);
        let stats = await getPokemonStats(entry);
        let newPokemon = {
            name: entry.name,
            url: entry.url,
            stats: stats
        }
        pokemonData.push(newPokemon);
        populatePokeCard(newPokemon);
    }
    pageSet = false;
}

async function newPokeCard(pokemonName) {
    let apiResults = await getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemon}`);
    for(let entry of apiResults) {
        if(entry.name == pokemonName.toLowerCase()) { 
            let stats = await getPokemonStats(entry);
            let newPokemon = {
                name: entry.name,
                url: entry.url,
                stats: stats
            }
            pokemonData.push(newPokemon);
            populatePokeCard(newPokemon);
            pageSet = false;
        }
    }
 
}

//Basic Javascript- good use of array
function populatePokeCard(pokemon) {
    let parentDiv = document.getElementById("pokemonGrid");
    parentDiv.innerHTML += `
    <div class="scene">
        <div id="${pokemon.name}Card" class="card">
            <div id="${pokemon.name}Front" class="card-face card-is-front">
                <p id="${pokemon.name}CardTitle" class="cardText">${pokemon.name} </p>
                <img id="${pokemon.name}Image" class="image" src="./images/${pokemon.name}.png">
            </div>
            <div id="${pokemon.name}Back" class="card-face card-is-back">
                <p id="${pokemon.name}Stats" class="cardText"> Stats </p>
                <p class="statText"> ${pokemon.stats[0]} </p>
                <p class="statText"> ${pokemon.stats[1]} </p>
                <p class="statText"> ${pokemon.stats[2]} </p>
                <p class="statText"> ${pokemon.stats[3]} </p>
                <p class="statText"> ${pokemon.stats[4]} </p>
                <p class="statText"> ${pokemon.stats[5]} </p>
            </div>
        </div>
    </div>`
}

//Basic Data Structures- objects with key values
async function getPokemonStats(pokemon) {
    await fetch(pokemon.url)
    .then(response => response.json())
    .then(data => output = data.stats);
    //console.log(output);
    return output.map((item) => {
        //console.log(item);
        return `${item.stat.name}: ${item.base_stat}`;
    });
}

document.getElementById("hoverArea").addEventListener('mouseover', () => {
    if (!pageSet) {
        console.log("set");
        pageSet = true;
        for(let pokemon of pokemonData) {
            //console.log(pokemon.name);
            let card = document.getElementById(`${pokemon.name}Card`);
            card.addEventListener( 'click', function() {
                card.classList.toggle('is-flipped');
            });
        }
    }
});

document.getElementById("pokemonCount").addEventListener('change', function() {
    pokemonCount = document.getElementById("pokemonCount").value;
    document.getElementById("pokemonGrid").innerHTML = "";
    pokemonData = [];
    loadCards();
})

document.body.onload = loadCards;
