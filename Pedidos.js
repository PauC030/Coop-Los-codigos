let showCancelled = false;

function toggleOrders() {
    showCancelled = !showCancelled;
    const rows = document.querySelectorAll('#ordersTable tbody tr');
    rows.forEach(row => {
        const state = row.querySelector('td:nth-child(3) span').textContent.trim();
        if (showCancelled) {
            if (state === 'Rechazado') {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        } else {
            row.style.display = '';
        }
    });
}

function searchOrders() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('#ordersTable tbody tr');
    rows.forEach(row => {
        const code = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
        const client = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (code.includes(filter) || client.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
/*Pedidos*/
   

     function toggleModal() {
      const modal = document.getElementById('exportModal');
      modal.classList.toggle('hidden');
    }
    // Mostrar el modal
    document.getElementById('exportModal').classList.remove('hidden');

    // Ocultar el modal
    document.getElementById('exportModal').classList.add('hidden');
