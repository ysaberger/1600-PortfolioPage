import { films } from './data/films.js'

//console.log(films[0])

const filmList = document.querySelector('.filmList')

films.forEach(element => {
    console.log(element.title)
    filmList.textContent = element.title
})
