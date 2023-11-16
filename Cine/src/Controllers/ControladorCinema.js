//Declarando arreglos en JS. Un arreglo es una variable especial que me permite almacenar multiples datos es una sola variable.

// let numeros = [5,4,2,3]
// console.log(numeros[2])

// let nombres=Array("rosa","yessica","andres")
// console.log(nombres[0])

//Un objeto es una variable especial que permite que yo almacene multiples datos en una sola variable
// let persona = {
//     nombre:"juan",
//     profesion:"Ingeniero",
//     edad :33,
//     hinchasDelMejor:true,
//     materiasDictadas:["web2","avanzada","nuevas tecnologias"],
//     equiposFavoritos:["nacional", "liverpool"],
//     comida:{
//         nombres:"Bandeja paisa",
//         precio: 25000
//     }
// }
// console.log(persona.edad)
// console.log(persona.materiasDictadas[0])
// console.log(persona.equiposFavoritos[1])
// console.log(persona.comida.precio)

import { peliculas } from "../helper/baseDatos.js"
import {peliculasNuevas } from "../helper/basedatosNueva.js"
import {pintarPeliculas } from "../helper/pintarPeliculas.js"

//Recorriendo un arreglo en js 

let fila = document.getElementById("fila")
let fila2=document.getElementById("fila2")
//Llamo a la funcion pintarPeliculas
pintarPeliculas(peliculas,fila)
pintarPeliculas(peliculasNuevas,fila2)


//Detectando seleccion de una pelicula
let peliculaSeleccionada={}

fila.addEventListener("click",function(evento){
    console.log(evento.target.parentElement)
    peliculaSeleccionada.poster=(evento.target.parentElement.querySelector('img').src)
    peliculaSeleccionada.nombre=(evento.target.parentElement.querySelector('h3').textContent)//nombre
    peliculaSeleccionada.genero=(evento.target.parentElement.querySelectorAll('p')[0].textContent)
    peliculaSeleccionada.idioma=(evento.target.parentElement.querySelectorAll('p')[1].textContent)
    peliculaSeleccionada.sinopsis=(evento.target.parentElement.querySelectorAll('p')[2].textContent)
    peliculaSeleccionada.duracion=(evento.target.parentElement.querySelectorAll('p')[3].textContent)
    peliculaSeleccionada.actores=(evento.target.parentElement.querySelectorAll('p')[4].textContent)
    peliculaSeleccionada.director=(evento.target.parentElement.querySelectorAll('p')[5].textContent)
    peliculaSeleccionada.clasificacion=(evento.target.parentElement.querySelectorAll('p')[6].textContent)


    //LLAMANDO A LA MEMORIA DEL NAVEGADOR
    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada)) 

    //rederirecciona a otra vista
   window.location.href="./src/views/ampliarInfoPelicula.html"

  
})



fila2.addEventListener("click",function(evento){
    console.log(evento.target.parentElement)
    peliculaSeleccionada.poster=(evento.target.parentElement.querySelector('img').src)
    peliculaSeleccionada.nombre=(evento.target.parentElement.querySelector('h3').textContent)
    peliculaSeleccionada.genero=(evento.target.parentElement.querySelectorAll('p')[0].textContent)
    peliculaSeleccionada.sipnosis=(evento.target.parentElement.querySelectorAll('p')[1].textContent)
    peliculaSeleccionada.duracion=(evento.target.parentElement.querySelectorAll('p')[2].textContent)
    peliculaSeleccionada.actores=(evento.target.parentElement.querySelectorAll('p')[3].textContent)
    peliculaSeleccionada.director=(evento.target.parentElement.querySelectorAll('p')[4].textContent)
    peliculaSeleccionada.clasificacion=(evento.target.parentElement.querySelectorAll('p')[5].textContent)
    peliculaSeleccionada.idioma=(evento.target.parentElement.querySelector('p').textContent)
    console.log(peliculaSeleccionada)

    //llamando a la memoria del navegador

    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))

//  Redireccionaa otra vista
    window.location.href="./src/views/ampliarinfopelicula.html"
})