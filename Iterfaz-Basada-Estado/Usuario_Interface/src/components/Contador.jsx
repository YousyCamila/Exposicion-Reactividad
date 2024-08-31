


import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Contador: {contador}</h1>
            <button onClick={decrementar} style={{ marginRight: '10px' }}>Decrementar</button>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
};
export default Contador;