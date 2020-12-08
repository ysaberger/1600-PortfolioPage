//Reusable function to fetch data
async function getAPIData(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
     console.error(error)
    }}

//cards loading with names
function loadPage() {
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`).then
    //console.log(apiResults)
    (async (data) => {
        for(const pokemon of data.results) {
            await getAPIData(pokemon.url).then((pokeData) => {
            populatePokeCard(pokeData)
        })
    }
    })
}

const pokemonGrid = document.querySelector('.pokemonGrid')

function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    let cardFront = document.createElement('div')
    let frontLabel = document.createElement('p')
    let frontImage = document.createElement('img')
    let cardBack = document.createElement('div')
    let backLabel = document.createElement('p')

    frontLabel.textContent = pokemon.name
    frontImage.src = `./images/00${pokemon.id}.png`
    backLabel.textContent = `Say hello to the back`
    cardFront.appendChild(frontImage)
    cardFront.appendChild(frontLabel)
    cardBack.appendChild(backLabel)
    pokeCard.appendChild(cardFront)
    pokeCard.appendChild(cardBack)
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)
}

loadPage()