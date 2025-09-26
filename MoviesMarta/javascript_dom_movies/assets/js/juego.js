/**
 * Vamos a crear dos montones de tarjetas, uno de películas y otro de recursos relacionados:
 * 
 */
const NMOVIES = 5
const NELEMENTSPMOVIE = 3
const getMoviesDeck = () => {
    let movieDeck = []
    for(let i = 1; i <= NMOVIES; i++) {
        movieDeck.push("0"+i+"M")
    }
    //Barajamos con un método dela librería Underscore. Esta librería ofrece muchas funciones,
    //en este caso uso shuffle que recibe un arrayy lo devuelve de forma aleatoria
    movieDeck = _.shuffle(movieDeck)
    return movieDeck;
}

const getElementsDeck = () => {
    let elementDeck = []
    for(let i = 1; i <= NMOVIES; i++) {
        for(let j = 0; j < NELEMENTSPMOVIE; j++) {
            elementDeck.push("0"+i+"C"+j)
        } 
    }
    //Barajamos
    elementDeck = _.shuffle(elementDeck) 
    return elementDeck;
}

let movieDeck = getMoviesDeck()
let elementDeck = getElementsDeck()

const getMovie = function(){
    let randomIndex = Math.floor(Math.random() * movieDeck.length)
    return movieDeck[randomIndex]
}

const getRecurso = () => {
  if(elementDeck.length === 0){
      return null;
  }
  let index = Math.floor(Math.random() * elementDeck.length);
  return elementDeck.splice(index, 1)[0];
}


let btNuevoJuego = document.getElementById('btNuevoJuego');
let btAdivina = document.getElementById('btAdivina');
let contenedorImagen = document.getElementById('pelicula-caratula');
let contenedorRecursos = document.getElementById('elementos-pelicula');
let contadorRecursos = 0;

btNuevoJuego.addEventListener('click', function(event) {
    contadorRecursos = 0;
    let movie = getMovie()
    contenedorImagen.innerHTML = ` <img class="elemento" src="assets/movies/${movie}.jpg" alt="Carátula">`
    contenedorRecursos.innerHTML =  
    event.stopPropagation();
});

btAdivina.addEventListener('click', function(event) {
    let recurso = getRecurso()
    contadorRecursos++
    if((NELEMENTSPMOVIE)*(NMOVIES) > contadorRecursos){
        contenedorRecursos.innerHTML += 
        `<img class="elemento" src="assets/characters/${recurso}.jpg" alt="Recurso">`
         event.stopPropagation();
    }
   
});





  



 


