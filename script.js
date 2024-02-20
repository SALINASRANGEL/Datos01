//pide al usuario que ingrese la informacion
const nombre=prompt("Ingresa tu nombre");
const apellido=prompt("Ingresa tu apellido");
const edad=prompt("Ingresa tu edad");
const lugarNacimiento=prompt("Ingresa tu lugar de nacimiento");
const fecha=prompt("Ingresa tu fecha de nacimiento");
const comidaFavorita=prompt("Ingresa tu comida favorita");
const carrera=prompt("Ingresa tu carrera");
const diaFavorito=prompt("Ingresa tu dia favorito");

//Construye una lista con la informacion solicitada
const lista=document.createElement("ul");

//Agrega cada dato como elemento de lista 
const agregarDAto=(etiqueta, valor)=>{
    const elementoLista=document.createElement("li")
    elementoLista.innerHTML=`<strong>${etiqueta}</strong> ${valor}`
    lista.appendChild(elementoLista);    
};

agregarDAto("Nombre",`${nombre} ${apellido}`);
agregarDAto("Edad",edad);
agregarDAto("Lugar De Nacimiento", lugarNacimiento);
agregarDAto("Fecha De Nacimiento", fecha);
agregarDAto("Comida Favorita", comidaFavorita);
agregarDAto("Carrera", carrera);
agregarDAto("Dia Favorito", diaFavorito);

//Crear un contenedor DIV para mostrar la lista

const resultadoDiv=document.createElement("Div");
resultadoDiv.appendChild(lista);

//Agregar el nuevo div al cuerpo del documento
document.body.appendChild(resultadoDiv);