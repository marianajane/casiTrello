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
  	var node = document.createElement("P");                 // Asignamos a una variable la creación de un nodo p
	var textnode = document.getElementById("creandoNuevaLista").value;  
	console.log(textnode); // Agrega texto a la lista <li>
	var noIdea = node.appendChild(textnode); // Crea texto node.appendChild(textnode); 
	console.log(noIdea);
	//var nuevoNodo= document.getElementById("listaNueva");
	//nuevoNodo.appendChild(node);
  }