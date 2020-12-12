import { films } from '../data/films.js'

const main = document.querySelector('main')


/*const films = ['3', '5', '4', '2', '7', '1', '6'];
films.sort();
c;*/

films.sort((a, b) => {
    console.log( a.episode_id, b.episode_id)
    return a.episode_id - b.episode_id
    })
    console.log(films)

/*let orderedFilms = [ 1, 5, 3, 4, 7, 2, 6]
let sortedFilms = (inputArr) => {
   for (let i = 1; i < length; i++) {
    while (j >= 0 && inputArr[j] > key) {
        inputArr[j + 1] = inputArr[j];
        j = j - 1;
    }
    inputArr[j + 1] = key;
   } 
   return inputArr
   orderedFilms.push (episode_id(sort))
};*/



for (let film of films) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = film.title

   

    if (film.episode_id === 1) {1
        figImg.src = `https://starwars-visualguide.com/assets/img/films/4.jpg`
    } else if (film.episode_id === 5) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/2.jpg`
         }   else if (film.episode_id === 4) {
            figImg.src = `https://starwars-visualguide.com/assets/img/films/1.jpg`
        } 
    else if (film.episode_id === 6) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/3.jpg`
    } else if (film.episode_id === 3) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/6.jpg`
    } else if (film.episode_id === 2) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/5.jpg`
    }  else if (film.episode_id === 7) {
        figImg.src = `https://starwars-visualguide.com/assets/img/films/7.jpg`
    }

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
}
