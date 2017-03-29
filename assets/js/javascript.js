console.log("Go bitches!");

function agregarL1(){
	var node = document.createElement("LI");                 // Crea un nodo <li>
	var textnode = document.createTextNode("Hacer un Trello bebé");         // Crea texto
	node.appendChild(textnode);                              // Agrega texto a la lista <li>
	document.getElementById("listaPendientes1").appendChild(node);  

}
