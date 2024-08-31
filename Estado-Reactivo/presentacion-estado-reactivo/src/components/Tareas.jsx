import React, { useState } from 'react';

const Tareas = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
            setNuevaTarea('');
        }
    };

    const marcarCompletada = (index) => {
        const tareasActualizadas = [...tareas];
        tareasActualizadas[index].completada = !tareasActualizadas[index].completada;
        setTareas(tareasActualizadas);
    };

    const eliminarTarea = (index) => {
        const tareasActualizadas = [...tareas];
        tareasActualizadas.splice(index, 1);
        setTareas(tareasActualizadas);
    };

    const manejarCambio = (event) => {
        setNuevaTarea(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Lista de Tareas</h1>
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={nuevaTarea} 
                    onChange={manejarCambio} 
                    placeholder="Ingresa una nueva tarea" 
                    style={{ marginRight: '10px' }}
                />
                <button onClick={agregarTarea}>Agregar</button>
            </div>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                        <input 
                            type="checkbox" 
                            checked={tarea.completada} 
                            onChange={() => marcarCompletada(index)} 
                            style={{ marginRight: '10px' }}
                        />
                        {tarea.texto}
                        <button onClick={() => eliminarTarea(index)} style={{ marginLeft: '10px' }}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tareas;