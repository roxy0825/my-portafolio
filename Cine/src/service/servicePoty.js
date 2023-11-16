//consumir datos del api spotify

//1. URI = URL+EP
const URI="https://api.spotify.com/v1/artists/1KCSPY1glIKqW2TotWuXOR/top-tracks?market=us"

//2. TOKEN
const TOKEN="Bearer BQDgQfy9g3miTvrAr8mCgObB00xyB2mnPJIEUxMJ-GvA0J0YdNlBVO814wf2VA3yd7h-mfkcQIxy85TydZIrCGnk_IQYudgi9u-2rGk1HI0S8-Ffso0HTyPEdhz8_SL5kZ5PMMVMyCKe-RvdQeNU8cRYes1WoYEc5MdwH6r0sVda5eUpksjTSoudit--vQvFJMU"


//3. PETICION
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},
    
}
let fila=document.getElementById("fila")

//4.usamos la promesa fetch para consumir el api

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
   let canciones=respuesta.tracks
   canciones.forEach(function(cancion){
    console.log(cancion.name)
    console.log(cancion.preview_url)

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    let audio=document.createElement("audio")
    audio.setAttribute("controls","controls")
    audio.src=cancion.preview_url

    let nombre=document.createElement("h1")
    nombre.classList.add("text-center")
    nombre.textContent=cancion.name

    tarjeta.appendChild(nombre)
    tarjeta.appendChild(audio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

   })
    
   })


.catch(function(error){
    console.log(error)
})
