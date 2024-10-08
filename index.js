function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    
    // Update icon based on theme
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}


//Exportar
function toggleModal() {
  const modal = document.getElementById('exportModal');  modal.classList.toggle('hidden'); // Alterna la clase 'hidden'
}

// Mostrar el modal
document.getElementById('exportModal').classList.remove('hidden');

// Ocultar el modal
document.getElementById('exportModal').classList.add('hidden');

    
function toggleImportModal() {
     const modal = document.getElementById('importModal');
     modal.classList.toggle('hidden');
   }


   function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function toggleButton(buttonId) {
    const recogerButton = document.getElementById('recogerButton');
    const entregarButton = document.getElementById('entregarButton');

    if (buttonId === 'recogerButton') {
        recogerButton.classList.add('bg-blue-500', 'text-white');
        recogerButton.classList.remove('bg-gray-200', 'text-black');
        entregarButton.classList.add('bg-gray-200', 'text-black');
        entregarButton.classList.remove('bg-blue-500', 'text-white');
    } else {
        entregarButton.classList.add('bg-blue-500', 'text-white');
        entregarButton.classList.remove('bg-gray-200', 'text-black');
        recogerButton.classList.add('bg-gray-200', 'text-black');
        recogerButton.classList.remove('bg-blue-500', 'text-white');
    }
}

//hamburguesa//

function Hamburguesa() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}
function toggleOptions() {
    const options = document.getElementById('additionalOptions');
    options.classList.toggle('hidden');
    
    
}

function saveTask() {
  const mensajero = document.getElementById('mensajero').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const taskTime = document.getElementById('taskTime').value;
  const taskDate = document.getElementById('taskDate').value;
  const taskEndTime = document.getElementById('taskEndTime').value;
  const taskEndDate = document.getElementById('taskEndDate').value;

  const taskHtml = `
      <div class="bg-blue-100 p-2 rounded">
          <span class="block text-gray-700">${taskDescription}</span>
          <span class="block text-gray-500">${taskDate} ${taskTime} - ${taskEndDate} ${taskEndTime}</span>
      </div>
  `;

  if (mensajero === "Seleccionar mensajer@") {
      document.getElementById('sinAsignarTasks').innerHTML += taskHtml;
  } else {
      document.getElementById('asignadasTasks').innerHTML += taskHtml;
  }
}

//Modal +
function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}



/* 
// Seleccionamos el botón que activa el menú desplegable
const botonMenu = document.querySelector('.bg-green-500');

// Seleccionamos el contenedor secundario que contiene las opciones del menú desplegable
const opcionesMenu = botonMenu.nextElementSibling;

// Agregamos un evento de clic al botón que activa el menú desplegable
botonMenu.addEventListener('click', () => {
  // Mostramos o ocultamos el contenedor secundario que contiene las opciones del menú desplegable
  opcionesMenu.classList.toggle('hidden');
}); no borrar */