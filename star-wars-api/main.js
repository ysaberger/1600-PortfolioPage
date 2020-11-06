import { films } from './data/films.js'

//console.log(films[0])

people.forEach(person) => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = person.name
})


/*films.forEach(film => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = film.opening_crawl
})*/
