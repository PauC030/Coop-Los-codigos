const selectElement = document.getElementById('filterSelect');
const filterText = document.getElementById('filterText');

selectElement.addEventListener('change', function() {
  if (this.value === 'nuevo') {
    filterText.textContent = 'Lo más nuevo';
  } else {
    filterText.textContent = 'Lo más viejo';
  }
});

function setActiveTab(tab) {
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }
  
// Barra
  function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) { // Comenzar en 1 para omitir el encabezado
      const cells = rows[i].getElementsByTagName('td');
      let found = false;

      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];
        if (cell) {
          const textValue = cell.textContent || cell.innerText;
          if (textValue.toLowerCase().indexOf(filter) > -1) {
            found = true;
            break;
          }
        }
      }

      rows[i].style.display = found ? '' : 'none'; // Mostrar o ocultar la fila
    }
  }

// miodales
function addDelivery(event) {
  event.preventDefault(); // Evitar el envío del formulario

  const owner = document.getElementById('deliveryOwner').value;
  const status = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg>`;
  const route = document.getElementById('deliveryRoute').value;

  const tableBody = document.getElementById('deliveryTableBody');
  const newRow = tableBody.insertRow();

  newRow.innerHTML = `
      <td class="p-2">${deliveryId++}</td>
      <td class="p-2">${owner}</td>
      <td class="p-2">${status}</td>
      <td class="p-2">Entrega</td>
      <td class="p-2">Asignando...</td>
      <td class="p-2">Calculando...</td>
      <td class="p-2">Calculando...</td>
  `;

  // Limpiar el formulario
  document.getElementById('deliveryForm').reset();
  closeModal('createDeliveryModal'); // Cerrar el modal
}


  function toggleImportModal() {
      const modal = document.getElementById('importModal');
      modal.classList.toggle('hidden');
  }
  
  function toggleExportModal() {
      const modal = document.getElementById('exportModal');
      modal.classList.toggle('hidden');
  }
  
  function closeModal(modalId) {
      document.getElementById(modalId).classList.add('hidden');
  }
  
  // Cerrar el modal si se hace clic fuera de él
  window.onclick = function(event) {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
          if (event.target === modal) {
              closeModal(modal.id);
          }
      });
  }

  //xd
  let deliveryId = 1; // Inicializa un contador para las entregas
  let deletedDeliveries = []; // Almacena entregas eliminadas
  
  // Cargar entregas desde localStorage al cargar la página
  document.addEventListener('DOMContentLoaded', loadDeliveries);
  
  function toggleCreateDeliveryModal() {
      const modal = document.getElementById('createDeliveryModal');
      modal.classList.toggle('hidden');
  }
  
  function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.classList.add('hidden');
  }
  
  function addDelivery(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      const owner = document.getElementById('deliveryOwner').value;
      const route = document.getElementById('deliveryRoute').value;
      
      const delivery = {
          id: deliveryId,
          owner: owner,
          status: "Pendiente", // Estado por defecto
          route: route,
          messenger: "No asignado", // Mensajero por defecto
          deliveryTime: "N/A", // Tiempo de entrega por defecto
          price: "0" // Precio por defecto
      };
  
      // Agregar la entrega a la tabla
      addRowToTable(delivery);
      
      // Guardar entrega en localStorage
      saveDelivery(delivery);
  
      deliveryId++; // Incrementar el ID para la próxima entrega
      closeModal('createDeliveryModal'); // Cerrar el modal
      document.getElementById('deliveryForm').reset(); // Reiniciar el formulario
  }
  
  function addRowToTable(delivery) {
      const tableBody = document.getElementById('deliveryTableBody');
      const newRow = tableBody.insertRow();
  
      newRow.innerHTML = `
          <td class="p-2">${delivery.id}</td>
          <td class="p-2">${delivery.owner}</td>
          <td class="p-2">${delivery.status}</td>
          <td class="p-2">${delivery.route}</td>
          <td class="p-2">${delivery.messenger}</td>
          <td class="p-2">${delivery.deliveryTime}</td>
          <td class="p-2">${delivery.price}</td>
          <td class="p-2">
              <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="deleteDelivery(${delivery.id})">Eliminar</button>
          </td>
      `;
  }
  
  function saveDelivery(delivery) {
      let deliveries = JSON.parse(localStorage.getItem('deliveries')) || [];
      deliveries.push(delivery);
      localStorage.setItem('deliveries', JSON.stringify(deliveries));
  }
  
  function loadDeliveries() {
      let deliveries = JSON.parse(localStorage.getItem('deliveries')) || [];
      deliveries.forEach(delivery => {
          addRowToTable(delivery);
          deliveryId = Math.max(deliveryId, delivery.id + 1); // Actualiza el ID para nuevas entregas
      });
  }
  
  function deleteDelivery(id) {
      // Eliminar la fila de la tabla
      const tableBody = document.getElementById('deliveryTableBody');
      const rows = tableBody.getElementsByTagName('tr');
      for (let row of rows) {
          if (row.cells[0].innerText == id) {
              const delivery = {
                  id: id,
                  owner: row.cells[1].innerText,
                  status: row.cells[2].innerText,
                  route: row.cells[3].innerText,
                  messenger: row.cells[4].innerText,
                  deliveryTime: row.cells[5].innerText,
                  price: row.cells[6].innerText
              };
              deletedDeliveries.push(delivery); // Agregar a las entregas eliminadas
              tableBody.deleteRow(row.rowIndex - 1);
              break;
          }
      }
  
      // Actualizar localStorage
      updateLocalStorage();
  }
  
  function updateLocalStorage() {
      const deliveries = JSON.parse(localStorage.getItem('deliveries')) || [];
      const updatedDeliveries = deliveries.filter(delivery => !deletedDeliveries.some(d => d.id === delivery.id));
      localStorage.setItem('deliveries', JSON.stringify(updatedDeliveries));
  }
  
