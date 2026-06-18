const buscador = document.getElementById('buscador');
const enlaces = document.querySelectorAll('.btn-enlace');

buscador.addEventListener('input', function(evento) {
    const textoUsuario = evento.target.value.toLowerCase();

    enlaces.forEach(enlace => {
        const textoEnlace = enlace.textContent.toLowerCase();

        if (textoEnlace.includes(textoUsuario)) {
            enlace.style.display = "block";
        } else {
            enlace.style.display = "none";
        }
    });
});