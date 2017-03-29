console.log("We can do this!");

function agregarL1() {
    var listaPendientes1= document.getElementById("lista1").value;
    console.log (listaPendientes1);
    var laLista = "<li>" + listaPendientes1 + "</li>";
    document.getElementById("listaPendientes1").innerHTML += laLista;
  }

function agregarL2() {
    var listaPendientes2= document.getElementById("lista2").value;
    console.log (listaPendientes2);
    var laLista = "<li>" + listaPendientes2 + "</li>";
    document.getElementById("listaPendientes2").innerHTML += laLista;
  }

  function crearLista() {
  	var listaNueva= document.getElementById("creandoNuevaLista").value;
    console.log (listaNueva);
    var laLista = "<h3>" + listaNueva + "</h3>";
    document.getElementById("listaNueva").innerHTML += laLista;
    
    var aqui = document.createElement("LI");
    var cuadrito = document.createElement("INPUT");
    	cuadrito.setAttribute("type", "text");
    	cuadrito.setAttribute("id", "otroPendiente");
    	cuadrito.setAttribute("list", "li");
    document.body.appendChild(cuadrito);
    var boton = document.createElement("INPUT");
    	boton.setAttribute("type", "button");
    	boton.setAttribute("onclick", "agregarPendiente();");
    	boton.setAttribute("name", "Crear pendiente");
    	boton.setAttribute("value", "Crear pendiente");
    document.body.appendChild(boton);
  }

function agregarPendiente() {
	var listaPendientesN= document.getElementById("otroPendiente").value;
    console.log (listaPendientesN);
    var laLista = "<li>" + listaPendientesN + "</li>";
    document.getElementById("listaPendientesN").innerHTML += laLista;
}
    //Me hace falta crear nueva etiquea por cada vez que se crea nueva lista