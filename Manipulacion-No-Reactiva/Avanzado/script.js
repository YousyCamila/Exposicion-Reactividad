
//Asigno a variables elementos del documento
const nombreTareaInput = document.getElementById('nombreTarea');
const prioridadTareaSelect = document.getElementById('prioridadTarea');
const botonAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');


//Funcion tarea
function tareaGestor(){
    const nombreTarea = nombreTareaInput.value.trim();
    const prioridadTarea = prioridadTareaSelect.value;

    if (nombreTarea === '') {
        alert('Por favor, ingresa un nombre para la tarea.');
        return;
    }

    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = nombreTarea;
    nuevaTarea.classList.add(prioridadTarea);

    // Botón para completar la tarea
    const botonCompletar = document.createElement('button');
    botonCompletar.textContent = 'Completar';
    botonCompletar.addEventListener('click', function() {
        nuevaTarea.classList.toggle('completada');
    });

    // Botón para eliminar la tarea
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function() {
        nuevaTarea.remove();
    });

    nuevaTarea.appendChild(botonCompletar);
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);

    // Limpiar los campos de entrada
    nombreTareaInput.value = '';
    prioridadTareaSelect.value = 'baja';
}

botonAgregar.addEventListener('click',tareaGestor);
