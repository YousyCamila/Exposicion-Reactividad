
//Selecciono elementos pos su ID
const botonAgregar = document.getElementById('agregarElemento');
const lista = document.getElementById('miLista');
//Creo una variable
let contador = 1;

//Funcion para crear un nuevo elemento
function crearELemento(){
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = 'Elemento ' + contador;
    lista.appendChild(nuevoElemento);
    contador++;
}
//asigno un evento
botonAgregar.addEventListener('click', crearELemento);

