var listas = [];

//Constructor de ObjetosLista
function ObjetoLista(titulo, id){
  this.titulo = titulo;
  this.id = id;
  this.pendiestesDeLista = [];
}

// Función para crear Lista
function crearLista(){

  var tituloLista = document.getElementById("creandoLista");
  var idLista = Date.now();
  var listaCreada = new ObjetoLista(tituloLista.value, idLista);
  mostrarEnHTML(listaCreada);
  listas.push(listaCreada);
  document.getElementById("creandoLista").value = "";
}

// Función para Mostrar Lista creada en HTML
function mostrarEnHTML(listaNueva){
  // se agregan las listas
  var seccionArticulo = document.createElement("article");
  seccionArticulo.id = listaNueva.id;
  document.getElementById("contenedor").appendChild(seccionArticulo);
  // Borrar Lista
  var textoBoton = "Borrar Lista";
  var botonBorrarLista = crearBoton(textoBoton, seccionArticulo.id, borrarLista);
  document.getElementById(seccionArticulo.id).appendChild(botonBorrarLista);
  // Agregar Título de la Lista
  var titulo = agregandoTitulo(listaNueva);
  document.getElementById(seccionArticulo.id).appendChild(titulo);

  // molde
  var molde = moldePendientes(seccionArticulo.id);
  molde.forEach(function(elemento){
    document.getElementById(seccionArticulo.id).appendChild(elemento);
  });
}

// título de la lista
function agregandoTitulo(listaNueva){
  var tituloH1 = document.createElement("h1");
  var tituloTexto = document.createTextNode(listaNueva.titulo);
  tituloH1.appendChild(tituloTexto);
  return tituloH1;
}

// Función boton
function crearBoton(texto, articuloId, funcion){
  var boton = document.createElement("button");
  boton.className = 'btn';
  var botonTexto = document.createTextNode(texto);
  boton.appendChild(botonTexto);
  boton.value = articuloId;
  boton.onclick = funcion;
  return boton;
}

// Se crean los elementos base de la lista
function moldePendientes(articuloId){
  var pendientesPlantilla = [];
  // id ul: "ul" + seccionArticulo.id
  var ul = document.createElement("ul");
  ul.id = "ul" + articuloId;
  // titulo (h3: Agregar Pendiente)
  var tituloH3 = document.createElement("h3");
  var tituloTexto = document.createTextNode("Agregar Pendiente");
  tituloH3.appendChild(tituloTexto);
  // id input: "texto" + seccionArticulo.id
  var inputPendiente = document.createElement("input");
  inputPendiente.placeholder = "Enviar Proyecto";
  inputPendiente.id = "input" + articuloId;
  // boton.value: seccionArticulo.id
  var texto = "Agregar";
  var botonAgregarPendiente = crearBoton(texto, articuloId, liPendientes);

  pendientesPlantilla.push(ul);
  pendientesPlantilla.push(tituloH3);
  pendientesPlantilla.push(inputPendiente);
  pendientesPlantilla.push(botonAgregarPendiente);
  return pendientesPlantilla;
}

// Función Borrar Lista
function borrarLista(){
  var idBoton = this.getAttribute("value");
  var elementoBorrar = document.getElementById(idBoton);
  document.getElementById("contenedor").removeChild(elementoBorrar);
}

// Función Borrar Pendiente
function borrarLi(){
  var idBoton = this.getAttribute("value");
  idLi = "li" + idBoton;
  var elementoBorrar = document.getElementById(idLi);
  document.getElementById("ul" + idBoton).removeChild(elementoBorrar);
}

// Función para crear los pendientes en formato <li>
function liPendientes(){
  var articuloId = this.getAttribute("value");
  // id li: "li" + seccionArticulo.id
  var li = document.createElement("li");
  li.id = "li" + articuloId;
  var textoLi = document.getElementById("input" + articuloId);
  var texto = document.createTextNode(textoLi.value);
  li.appendChild(texto);

  // boton.value: seccionArticulo.id
  var texto = "X"
  var botonBorrarLi = crearBoton(texto, articuloId, borrarLi);
  li.appendChild(botonBorrarLi);
  textoLi.value = "";
  document.getElementById("ul" + articuloId).appendChild(li);
}

//Funciones para caso "muestra"
function borrarTodo(valorId){
  var elementoBorrar = document.getElementById(valorId);
  document.getElementById("contenedor").removeChild(elementoBorrar);
}

function crearPendiente(inputId){
  // agregar elementos li + boton de boorar pendiente
  var entradaTexto = document.getElementById(inputId);
  var li = document.createElement("li");
  li.id = Date.now();
  var texto = document.createTextNode(entradaTexto.value);
  var boton = document.createElement("button");
  boton.className = 'btn';
  titulo = document.createTextNode("X");
  boton.appendChild(titulo);
  boton.value = li.id ;
  boton.onclick = function(){
    var elementoBorrar = document.getElementById(this.value);
    document.getElementById("bodd2").removeChild(elementoBorrar);
  }
  li.appendChild(texto);
  li.appendChild(boton);

  var nuevoElemento = document.getElementById(inputId+2);
  entradaTexto.value = "";
  nuevoElemento.appendChild(li);
}

function borrarPendiente(valorId){
  var elementoBorrar = document.getElementById(valorId);
  document.getElementById("bodd2").removeChild(elementoBorrar);
}
