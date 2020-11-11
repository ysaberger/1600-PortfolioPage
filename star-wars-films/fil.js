import { films } from '../data/films.js'

const main = document.querySelector('main')

for (let film of films) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = film.title

    var episode_id = [1, 2, 3, 4, 5, 6, 7];
episode_id.sort(function(a, b){return a-b});

    if (film.episode_id === 1) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/4.jpg`
    } else if (film.episode_id === 5) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/2.jpg`
         }   else if (film.episode_id === 4) {
            figImg.src = `https://starwars-visualguide.com/assets/img/films/1.jpg`
        } 
    else if (film.episode_id === 6) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/3.jpg`
    } else if (film.episode_id === 3) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/4.jpg`
    } else if (film.episode_id === 2) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/5.jpg`
    }  else if (film.episode_id === 7) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/7.jpg`
    }

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
}
