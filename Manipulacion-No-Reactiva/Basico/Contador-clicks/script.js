
//Asingo a variables elementos del documento por su ID
const botonContador = document.getElementById('contadorBoton');
const parrafoContador = document.getElementById('contador');
let contador = 0;

//Funcion para contar los clicks
function contadorClick(){
    contador++;
    parrafoContador.textContent = 'Contador: ' + contador;
}
//Asigno un evento + funcion
botonContador.addEventListener('click', contadorClick);
