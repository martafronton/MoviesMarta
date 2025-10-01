/**
 * Vamos a crear dos montones de tarjetas, uno de películas y otro de recursos relacionados:
 */
const NMOVIES = 5
const NELEMENTSPMOVIE = 3

const getMoviesDeck = () => {
    let movieDeck = []
    for (let i = 1; i <= NMOVIES; i++) {
        movieDeck.push("0" + i + "M")
    }
    movieDeck = _.shuffle(movieDeck)
    return movieDeck;
};

const getElementsDeck = () => {
    let elementDeck = []

    for(let i = 1; i <= NMOVIES; i++) {
        for(let j = 1; j <= NELEMENTSPMOVIE; j++) {
            elementDeck.push("0"+i+"C"+j)
        } 
}
    elementDeck = _.shuffle(elementDeck)
    return elementDeck
};

let movieDeck = getMoviesDeck()
let elementDeck = getElementsDeck()

const getMovie = function () {
    let randomIndex = Math.floor(Math.random() * movieDeck.length)
    return movieDeck[randomIndex]
};





btNuevoJuego.addEventListener('click', function(event) {
    let movie = getMovie()
    contenedorImagen.innerHTML = ` <img class="elemento" src="assets/movies/${movie}.jpg" alt="Carátula">    `
    event.stopPropagation();
});

const getRecurso = () => {
    if (elementDeck.length === 0) {
        return null;
    }
    let index = Math.floor(Math.random() * elementDeck.length);
    return elementDeck.splice(index, 1)[0];
};

let btNuevoJuego = document.getElementById('btNuevoJuego')
let btAdivina = document.getElementById('btAdivina')
let contenedorImagen = document.getElementById('pelicula-caratula')
let contenedorRecursos = document.getElementById('elementos-pelicula')
let contadorRecursos = 0


let draggedElement = null;

btNuevoJuego.addEventListener('click', function (event) {
    let movie = getMovie()
    contenedorImagen.innerHTML = `<img class="elemento" src="assets/movies/${movie}.jpg" alt="Carátula">`;
    contenedorRecursos.innerHTML = ""
    contadorRecursos = 0
    event.stopPropagation()
});

btAdivina.addEventListener('click', function (event) {
    let recurso = getRecurso();
    if (recurso) {
        contadorRecursos++
        if (contadorRecursos <= (NELEMENTSPMOVIE * NMOVIES)) {
            let recursoDiv = document.createElement('img')
            recursoDiv.src = `assets/characters/${recurso}.jpg`
            recursoDiv.className = 'elemento draggable'
            recursoDiv.draggable = true

            
            recursoDiv.addEventListener('dragstart', (e) => {
                recursoDiv.classList.add('dragging')
                draggedElement = recursoDiv;
                e.dataTransfer.effectAllowed = "move"
            });
            recursoDiv.addEventListener('dragend', () => {
                recursoDiv.classList.remove('dragging')
                draggedElement = null;
            });

            contenedorRecursos.appendChild(recursoDiv)
        } else {
            alert("No hay más opciones")
        }
    }
});


const containers = document.querySelectorAll('.drop')

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault()
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault()
        if (draggedElement) {
           
            if (container.children.length === 0) {
                container.appendChild(draggedElement)
        
            draggedElement.style.left = "0"
            draggedElement.style.margin = "0 auto"
            draggedElement.style.display = "block"
            } 
            draggedElement.classList.remove('dragging')
            draggedElement = null
        }
    });
});



  




 


