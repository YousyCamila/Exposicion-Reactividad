
//A variables le asigno elementos del documento
const tabla = document.getElementById('miTabla');
const botonAgregar = document.getElementById('agregarFila');


//Funcion para la tabla dinaminca
function tablaDinamica(){
    const nuevaFila = document.createElement('tr');

    const celdaNombre = document.createElement('td');
    const inputNombre = document.createElement('input');
    celdaNombre.appendChild(inputNombre);

    const celdaEdad = document.createElement('td');
    const inputEdad = document.createElement('input');
    celdaEdad.appendChild(inputEdad);

    const celdaAcciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    
    //Funcion interna para eliminar una fila
    botonEliminar.addEventListener('click', function() {
        nuevaFila.remove();
    });
    celdaAcciones.appendChild(botonEliminar);

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaEdad);
    nuevaFila.appendChild(celdaAcciones);

    tabla.querySelector('tbody').appendChild(nuevaFila);
}

botonAgregar.addEventListener('click', tablaDinamica);
