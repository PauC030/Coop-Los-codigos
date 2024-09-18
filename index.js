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

function saveTask() {
    // Obtener los valores de los campos
    const titulo = document.getElementById('titulo').value;
    const direccion = document.getElementById('direccion').value;
    const nombre = document.getElementById('nombre').value;
    const nombreContacto = document.getElementById('nombreContacto').value;
    const telefono = document.getElementById('telefono').value;
    const instrucciones = document.getElementById('instrucciones').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskTime = document.getElementById('taskTime').value;
    const taskEndDate = document.getElementById('taskEndDate').value;
    const taskEndTime = document.getElementById('taskEndTime').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const mensajero = document.getElementById('mensajero').value;

    // Crear un nuevo elemento para la tarea
    const taskItem = document.createElement('div');
    taskItem.className = 'border p-2 rounded-md mb-2';
    taskItem.innerHTML = `
        <p class="font-bold">${titulo}</p>
        <p>Dirección: ${direccion}</p>
        <p>Nombre: ${nombre}</p>
        <p>Nombre de Contacto: ${nombreContacto}</p>
        <p>Teléfono: ${telefono}</p>
        <p>Instrucciones: ${instrucciones}</p>
        <p>Fecha: ${taskDate} ${taskTime} - ${taskEndDate} ${taskEndTime}</p>
        <p>Comentarios: ${taskDescription}</p>
        <p>Mensajero/a: ${mensajero}</p>
        <button class="bg-red-500 text-white px-2 py-1 rounded mt-2" onclick="deleteTask(this)">Eliminar</button>
    `;

    // Agregar el nuevo elemento a la lista de tareas
    document.getElementById('taskList').appendChild(taskItem);

    // Cerrar el modal
    closeModal('modalSinAsignar');
}

function deleteTask(button) {
    // Eliminar el elemento de la tarea
    const taskItem = button.parentElement;
    taskItem.remove();
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}