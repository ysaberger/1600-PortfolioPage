import { films } from './data/films.js'
import { people } from './data/films.js'

//console.log(films[0])

/*people.forEach(person) => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = person.name
})*/


const main = document.querySelector('main')

for (let step = 0; step < 7; step++) {
    //Runs 5 times, with values of step 0 through 6.
    let newImg = document.createElement('img') // new image yo
    newImg.src = 'http://starwars-visualguide.com/assets/img/films/' + (step +1) + 
'.jpg' //source
//image appended
    main.appendChild(newImg)
    console.log(films[step].title);
}

/*for (const film of films) {
    
}*/

/*people.forEach(person => {
let newParagraph = document.body.appendChild(document.createElement('p'))
newParagraph.textContent = person.name
})*/

/*films.forEach(film => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = film.opening_crawl
})*/
