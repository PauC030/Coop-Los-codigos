/*Ver Pedidos*/
let currentFilter = 'Todos';

        function toggleFilter() {
            const rows = document.querySelectorAll('tbody tr');
            const button = document.getElementById('filterButton');

            if (currentFilter === 'Todos') {
                currentFilter = 'Rechazado';
                button.textContent = 'Ver pedidos entregados';
            } else if (currentFilter === 'Rechazado') {
                currentFilter = 'Entregado';
                button.textContent = 'Ver todos los pedidos';
            } else {
                currentFilter = 'Todos';
                button.textContent = 'Ver pedidos cancelados';
            }

            rows.forEach(row => {
                const orderStatus = row.querySelector('td:nth-child(3) span').textContent.trim();
                if (currentFilter === 'Todos') {
                    row.classList.remove('hidden');
                } else {
                    if (orderStatus === currentFilter) {
                        row.classList.remove('hidden');
                    } else {
                        row.classList.add('hidden');
                    }
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
