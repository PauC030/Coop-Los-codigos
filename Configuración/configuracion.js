// Hora y Fecha
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB');
    const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('current-date').textContent = date;
    document.getElementById('current-time').textContent = time;
  }
  setInterval(updateDateTime, 1000);

  //Regitro de datos
  function updateFormData() {
    const formData = {
      companyName: document.getElementById('company-name').value,
      documentType: document.getElementById('document-type').value,
      documentNumber: document.getElementById('document-number').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value
    };

    document.getElementById('display-company-name').textContent = formData.companyName;
    document.getElementById('display-document-type').textContent = formData.documentType;
    document.getElementById('display-document-number').textContent = formData.documentNumber;
    document.getElementById('display-email').textContent = formData.email;
    document.getElementById('display-phone').textContent = formData.phone;
  }