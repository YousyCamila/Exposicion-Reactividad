
// Selecciono elementos por su ID
const boton = document.getElementById('miBoton');
const parrafo = document.getElementById('miParrafo');

// Funcion de colores aleatorios hexadecimales
function getColorRandom(){
     const letras = '0123456789ABCDEF';
     let color = '#';
     
     for(let i = 0; i < 6; i++)
     {
        color += letras[Math.floor(Math.random()*16)];
     }
     return color;
}

boton.addEventListener('click', function(){
    parrafo.textContent = 'TEXTO CAMBIADO';
    parrafo.style.color = getColorRandom();
    document.body.style.backgroundColor =getColorRandom();  
})