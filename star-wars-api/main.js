import { films } from './data/films.js'
import { people } from './data/films.js'

const main = document.querySelector('main')

for (let step = 0; step < 7; step++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[step].title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    
    main.appendChild(newImg)
}


/*people.forEach(person => {
let newParagraph = document.body.appendChild(document.createElement('p'))
newParagraph.textContent = person.name
})*/

/*films.forEach(film => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = film.opening_crawl
})*/

/* <img src= "/images/star_wars_logo_PNG40.png"> */