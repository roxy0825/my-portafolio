//PREGUNTANDO POR UN DATO QUE ESTA ALMACENADO EN MEMORIA

let datosPeliculasSeleccionada=JSON.parse(localStorage.getItem("peliculaSeleccionada"))

console.log(datosPeliculasSeleccionada)

let poster=datosPeliculasSeleccionada.poster
let nombre=datosPeliculasSeleccionada.nombre
let genero=datosPeliculasSeleccionada.genero
let sinopsis=datosPeliculasSeleccionada.sinopsis
let duracion=datosPeliculasSeleccionada.duracion
let actor=datosPeliculasSeleccionada.actores
let clasificacion=datosPeliculasSeleccionada.clasificacion
let idioma=datosPeliculasSeleccionada.idioma
let director=datosPeliculasSeleccionada.director

//CARGANDO DATOS
let foto=document.getElementById("foto")
foto.src=datosPeliculasSeleccionada.poster

let titulo=document.getElementById("titulo")
titulo.textContent=nombre

let sinopsisPelicula=document.getElementById("sinopsis")
sinopsisPelicula.textContent=sinopsis

let generoPelicula=document.getElementById("generoPelicula")
generoPelicula.textContent=genero

let duracionPelicula=document.getElementById("duracionPelicula")
duracionPelicula.textContent=duracion

let actorPelicula = document.getElementById("actorPelicula")
actorPelicula.textContent=actor

let clasifipelicula=document.getElementById("clasifiPelicula")
clasifipelicula.textContent=clasificacion

let idiomaPelicula = document.getElementById("idiomaPelicula")
idiomaPelicula.textContent=idioma

let directorPelicula = document.getElementById("directorPelicula")
directorPelicula.textContent=director


