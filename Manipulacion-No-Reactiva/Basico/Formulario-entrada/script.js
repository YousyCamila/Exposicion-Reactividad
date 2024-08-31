
//Selecciono elementos pos su ID
const inputNombre = document.getElementById('nombreInput');
const botonSaludar = document.getElementById('saludarBoton');
const parrafoSaludo = document.getElementById('saludo');

//Funcion mostrar nombre
function mostrarNombre(){
    const nombre = inputNombre.value;
    parrafoSaludo.textContent = '¡Hola, ' + nombre + '!';
}
//Asignacion de evento
botonSaludar.addEventListener('click', mostrarNombre);
