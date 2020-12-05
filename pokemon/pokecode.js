//Reusable function to fetch data
async function getAPIData(url) {
try {
    const respond = await fetch(url)
    const data = await response.json()
} catch (error) {
    console.error(error)
}

}

//example
function loadPage () {
    getAPIData(`https://pokeapi.co/api/v2/pokemon`).then
    (async (data) => {
for (const pokemon of data.results) {
    await getAPIData(pokemon.url).then((pokeData) => {
        populatePokeCard(pokeData)
    })
}
    })
}

const pokemonGrid = pocument.querySelector('.pokemonGrid')

function populatePokeCard(pokemon) {
    let cardFront = document.createElement('div')
    let frontLabel = document.createElement('p')

    frontLabel.textConent = pokemon.name
    cardFront.appendChild(frontLabel)
    pokemonGrid.appendChild(cardFront)
}

loadPage()