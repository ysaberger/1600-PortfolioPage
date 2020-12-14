//Reusable function to fetch data
async function getAPIData(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
     console.error(error)
    }}

//you almost can add more cards!!!! you can do it!!
const pokemonGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('button')
const newButton = document.querySelector('#newPokemon')

loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.diabled = true
})

newButton.addEventListener('click', () =>  {
    let pokeName = prompt("What's your new Pokemon's name")
    populatePokeCard(createNewPokemon(pokeName))
})

function Pokemon(name, abilities, move){
    this.name = name
    this.abilities = abilities
    this.move = move

}
function createNewPokemon(name) {
  return new Pokemon(name, 450, 200, ['gorge', 'sleep', 'cough'], ['thunder', 'dance'])
}

function removeChildren(container) {
    while (container.firstChild) { 
container.removeChild(container.firstChild)
}
}

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

function populatePokeCard(pokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })

    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))

    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = `card__face card__face--front`
    let frontLabel = document.createElement('p')
    let frontImage = document.createElement('img')
    frontLabel.textContent = pokemon.name
    frontImage.src = `./images/${getImageFileName(pokemon)}.png`
    cardFront.appendChild(frontImage)
    cardFront.appendChild(frontLabel)
    return cardFront
}


function populateCardBack(pokemon){
    let cardBack = document.createElement('div')
    cardBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('h3')
    backLabel.textContent = 'Abilities:'
    let abilityList = document.createElement('ul')
   // I've tried so hard to fix this bug but nothing works :'(
    pokemon.abilities.forEach(ability => {
        let abilityName = document.createElement('li')
        abilityName.textContent = ability.ability.name
        abilityList.appendChild(abilityName)
    })
    let movesLabel = document.createElement('h4')
    movesLabel.textContent = 'Most Accurate Move:'
    let moveAccuracy = document.createElement('h5')
    const mostAccurateMove = getBestAccuracy(pokemon.moves)
    console.log(mostAccurateMove.move)
    moveAccuracy.textContent = `${mostAccurateMove.move.name}`
    cardBack.appendChild(backLabel)
    cardBack.appendChild(abilityList)
    cardBack.appendChild(movesLabel)
    cardBack.appendChild(moveAccuracy)
    return cardBack
}

function getBestAccuracy(pokemoves) {
    return pokemoves.reduce((mostAccurate, move) => {
        console.log(move)
        return mostAccurate.accuracy > move.accuracy ? mostAccurate : move;
    }, {});
}
function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 99) {
        return `0${pokemon.id}`
    }
}

loadPage()

//theme song music player functions

document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
var player;

play.addEventListener('click', () => {
    player.play();
})

pause.addEventListener('click', () => {
    player.pause();
})

vol.addEventListener('click', () => {
    player.volume=document.getElementById("vol").value;
})
function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}

