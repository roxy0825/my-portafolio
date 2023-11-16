import { pintarSilla } from "../helper/pintarSilla.js"

let asientos =[
    [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}]
]

//PINTAR DESDE JS MI SALA DE CINE 
let cinema=document.getElementById("salacinema")

//recorrer los asientos y aplicar traversing

pintarSilla(asientos,cinema)
let contadorseleccionado=0;

//evento de click en la sala de cine

cinema.addEventListener("click",function(evento){
    if(evento.target.tagName=="IMG"){
        let idAsintoSeleccionado=evento.target.id

        asientos.forEach(function(hilera){
            hilera.forEach(function(asientos){
                if(asientos.id==idAsintoSeleccionado){
                    //encontre el asiento donde el usuario se quiere sentar
                    if(asientos.estado==0){
                        asientos.estado=1
                        contadorseleccionado++;
                        evento.target.src="../../assets/img/silla3.png"

                    }else if(asientos.estado==1){
                        asientos.estado=0
                        contadorseleccionado--;
                        evento.target.src="../../assets/img/silla.png"

                    }
                }

            })
        })
    }
})
let validareserva= document.getElementById("validareserva");
let pelicula=JSON.parse(localStorage.getItem("peliculaSeleccionada"));
  let pintarreserva=document.getElementById("pintarreserva")
  validareserva.addEventListener("click",function () {
  let puesto= [];
  cinema.innerHTML="";
  pintarreserva.innerHTML='';

  asientos.forEach (function(hilera){
    hilera.forEach(function(asiento){
        if (asiento.estado==1) {
          asiento.estado=2
          puesto.push(asiento.id)
        }
    })
  })
  

  let headers=document.createElement("div");
  headers.classList.add("card-header", "bg-transparent", "border-success", "text-success")


  let divBody=document.createElement("div");
  divBody.classList.add("card-body", "text-success")

  let h1=document.createElement("h1");
  h1.classList.add("card-body");

  h1.textContent=pelicula.nombre;
  

  let mostrarpuesto="";
  mostrarpuesto = puesto.join(', ');


  let p=document.createElement("h3");
  p.classList.add("card-body");
  p.textContent ="PUESTOS SELECCIONADOS: "+ mostrarpuesto
  let precio=7000;

  let divPrecio=document.createElement("h3");
  divPrecio.classList.add("card-text");
  divPrecio.textContent ="PRECIO SILLA: "+ precio;

  let cantidad=document.createElement("h3");
  cantidad.classList.add("card-text");
  cantidad.textContent ="CANTIDAD SILLAS: "+ contadorseleccionado;

  let valortotal=document.createElement("h3");
  valortotal.classList.add("card-text");
  valortotal.textContent ="VALOR TOTAL RESERVA: "+(precio*contadorseleccionado);

  headers.appendChild(h1);
  divBody.appendChild(p);
  divBody.appendChild(divPrecio);
  divBody.appendChild(cantidad);
  divBody.appendChild(valortotal);
  pintarreserva.appendChild(headers);
  pintarreserva.appendChild(divBody);




pintarSilla(asientos,cinema)
 contadorseleccionado=0;

})

