
const campoBusqueda = document.getElementById('campoBusqueda');
const elementos = document.querySelectorAll('#miLista li');

campoBusqueda.addEventListener('input', function() {
    const valorBusqueda = this.value.toLowerCase();

    elementos.forEach(function(elemento) {
        if (elemento.textContent.toLowerCase().includes(valorBusqueda)) {
            elemento.style.display = 'list-item';
        } else {
            elemento.style.display = 'none';
        }
    });
});
