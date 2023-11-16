export function pintarPeliculas(peliculas,fila){

    peliculas.forEach(function(pelicula){
        //console.log(peliculas)

    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
    console.log(pelicula.director)
    console.log(pelicula.actor)

    // // TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)
    // let poster=document.createElement("img")
    // poster.src=pelicula.poster
  

    // let nombre=document.createElement("h3")
    // nombre.textContent=pelicula.nombre

    // // padres e hijos
    // fila.appendChild(poster)
    // fila.appendChild(nombre)
    
    
        //1. creamos una columna para cada pelicula
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //2. creamos una tarjeta para cada pelicula
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
    
        //3. creamos una foto para cada pelicula
        let poster=document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.poster
    
        //4. Creamos el nombre de la pelicula
        let nombre = document.createElement('h3')
        nombre.classList.add('card-title','text-center')
        nombre.textContent = pelicula.nombre
    
        //5. Creamos el genero de cada pelicula
        let genero = document.createElement("p")
        genero.classList.add("text-start")
        genero.textContent = "Genero: "+pelicula.genero
    
        //6. Creamos el idioma de cada pelicula
        let idioma=document.createElement("p")
        idioma.classList.add("fw-bold")
        idioma.textContent="Idioma: "+pelicula.idioma
    
        //7. Creamos la sinopsis
        let sinopsis=document.createElement("p")
        sinopsis.classList.add("d-none")
        sinopsis.textContent="Sinopsis: "+pelicula.sinopsis


        //8. crear la duracion
        let duracion=document.createElement("P")
        duracion.classList.add("text-left","tamano")
         duracion.textContent="Duracion: "+pelicula.duracion

         // 9. crear acores
     let actores=document.createElement("P")
     actores.classList.add("text-left","tamano")
     actores.textContent="Actores: "+pelicula.actores

         //10 creamos director

     let director=document.createElement("P")
     director.classList.add("text-left","tamano")
     director.textContent="Director: "+pelicula.director
     
     //11. clasificacion
      
     let clasificacion=document.createElement("P")
     clasificacion.classList.add("text-left","tamano","fw-bold")
     clasificacion.textContent="Clasificacion: "+pelicula.clasificacion

    
        //Padres e Hijos
        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(sinopsis)
        tarjeta.appendChild(duracion)
        tarjeta.appendChild(actores)
        tarjeta.appendChild(director)
        tarjeta.appendChild(clasificacion)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    
    
    })

}