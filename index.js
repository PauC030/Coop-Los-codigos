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
    const modal = document.getElementById('exportModal');
    // Alternar la clase "hidden" para mostrar u ocultar el modal
    modal.classList.toggle('hidden');
  }

// Mostrar el modal
document.getElementById('exportModal').classList.remove('hidden');

// Ocultar el modal
document.getElementById('exportModal').classList.add('hidden');

    
function toggleImportModal() {
     const modal = document.getElementById('importModal');
     modal.classList.toggle('hidden');
   }