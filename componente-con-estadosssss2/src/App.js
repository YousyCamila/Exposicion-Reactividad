import React, { useState } from 'react';
import Contador from './Contador';

function App() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <div>
            <Contador contador={contador} />
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default App;
