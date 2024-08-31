//Seleccionar el boton por su id
const boton = document.getElementById('miBoton');
//Arrow function
const functionClick = () =>{
    alert(`¡Has hecho clic en el boton!`);
}


//Añade un manejador para el evento 'clic'
boton.addEventListener('click', functionClick)






//Selecciono el input por su ID
const input = document.getElementById('miInput');


//Añade el evento
input.addEventListener('input', function(){
    const inputValue = input.value;
    console.log('valor de input:'+ inputValue);
});