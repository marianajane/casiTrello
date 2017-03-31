console.log("We can do this!");

function agregarL1() {
    var tareaNueva=document.getElementById("creandoPendiente").value;
    var li=document.createElement('li');
    li.id=tareaNueva;
    li.innerHTML=tareaNueva + " " + "<span onclick='eliminar(this);'> ✖ </span>";
    document.getElementById("lista1").appendChild(li);
        
    return false;
    }

function eliminar(elemento) {
        var id=elemento.parentNode.getAttribute("id");
        node=document.getElementById(id);
        node.parentNode.removeChild(node);
        // return false;
    }

function eliminarLista(creandoPendiente) {
        node=document.getElementById(id);
        node.parentNode.removeChild(node);
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

function borrarPendiente() {
    var list = document.getElementById("listaPendientes1");   // Get the <ul> element with id="myList"
    list.removeChild(list.childNodes[0]); // Remove <ul>'s first child node (index 0)
}
          