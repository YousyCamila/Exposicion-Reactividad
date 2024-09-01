let estado = { contador: 0, items: Array(10000000).fill(0) };

console.time("Mutable");
estado.contador += 1;
console.timeEnd("Mutable");

console.time("Inmutable");
let nuevoEstado = { ...estado, contador: estado.contador + 1 };
console.timeEnd("Inmutable");
