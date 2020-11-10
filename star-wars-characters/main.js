import { people } from '../data/people.js'

const mainContent= document.querySelector('main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)


const maleCharacters = people.filter((person) => person.gender === 'male')
console.log(maleCharacters)

maleButton.addEventListener('click', (event) => {
    maleCharacters.forEach((element) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
    let charNum = getLastNumber(element.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    charImg.addEventListener('error', () => cgarImg.hidden = true)
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = element.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainContent.appendChild(charFigure)
    })
})


const femaleCharacters = people.filter((person) => person.gender === 'female')
console.log(femaleCharacters)

femaleButton.addEventListener('click', (event) => {
    femaleCharacters.forEach((element) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
    let charNum = getLastNumber(element.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    charImg.addEventListener('error', () => cgarImg.hidden = true)
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = element.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainContent.appendChild(charFigure)
    })
})


const otherCharacters = people.filter((person) => person.gender === 'other')
console.log(otherCharacters)

otherButton.addEventListener('click', (event) => {
    otherCharacters.forEach((element) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
    let charNum = getLastNumber(element.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    charImg.addEventListener('error', () => cgarImg.hidden = true)
    const charCaption = document.createElement('figcaption')
    charCaption.textContent = element.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainContent.appendChild(charFigure)
    })
})
//let theUrl = "https://swapi.co/api/people/2/"
//let theUrl2 = "https://swapi.co/api/people/"

function getLastNumber(url) {
let end = url.lastIndexOf('/')
let start = end - 2
if (url.charAt(start) === '/') { start++
}
return url.slice(start, end)
}