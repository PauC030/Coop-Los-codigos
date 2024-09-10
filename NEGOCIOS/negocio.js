
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('hidden');
}
// Función para seleccionar el botón activo
function selectBoton(link) {
    document.querySelectorAll('.menu-button').forEach(button => {
        button.classList.remove('selected-link');
    });
    link.classList.add('selected-link');
}

// Controlador de eventos para los enlaces de la barra lateral
document.getElementById('generalLink').addEventListener('click', function (e) {
    e.preventDefault();
    selectBoton(this);

    document.getElementById('general').classList.remove('hidden');
    document.getElementById('options').classList.add('hidden');
    document.getElementById('ejecucion').classList.add('hidden');
    document.getElementById('terminos').classList.add('hidden');
});

document.getElementById('opcionesLink').addEventListener('click', function (e) {
    e.preventDefault();
    selectBoton(this);

    document.getElementById('general').classList.add('hidden');
    document.getElementById('options').classList.remove('hidden');
    document.getElementById('ejecucion').classList.add('hidden');
    document.getElementById('terminos').classList.add('hidden');
});

document.getElementById('ejecucionLink').addEventListener('click', function (e) {
    e.preventDefault();
    selectBoton(this);

    document.getElementById('general').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');
    document.getElementById('ejecucion').classList.remove('hidden');
    document.getElementById('terminos').classList.add('hidden');
});

document.getElementById('terminosLink').addEventListener('click', function (e) {
    e.preventDefault();
    selectBoton(this);

    document.getElementById('general').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');
    document.getElementById('ejecucion').classList.add('hidden');
    document.getElementById('terminos').classList.remove('hidden');
});

