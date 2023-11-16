export function pintarSilla(asientos,cinema){
asientos.forEach(function(hilera){
    let fila=document.createElement("div")
    fila.classList.add("row")


hilera.forEach(function(asientos){
    let columna =document.createElement("div")
    columna.classList.add("col-3")

    let fotoSilla=document.createElement("img")
    fotoSilla.classList.add("img-fluid", "w-100")
    fotoSilla.setAttribute("id", asientos.id)

    if(asientos.estado==0){
        fotoSilla.src="../../assets/img/silla.png"
    }else if(asientos.estado==1){
        fotoSilla.src="../../assets/img/silla3.png"
    }else{
        fotoSilla.src="../../assets/img/silla2.png"
    }


   

    //padres e hijos

    columna.appendChild(fotoSilla)
    fila.appendChild(columna)

    })
    cinema.appendChild(fila)

})
}