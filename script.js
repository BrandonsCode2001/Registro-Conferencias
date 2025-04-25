// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form         = document.getElementById('registration-form');
    const modal        = document.getElementById('modal');
    const closeModal   = document.getElementById('close-modal');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Campos
      const nombre      = form.nombre;
      const email       = form.email;
      const carrera     = form.carrera;
      const conferencias = Array.from(form.querySelectorAll('[name="conferencias"]'));
  
      let valid = true;
      // Limpiar errores
      [nombre, email, carrera].forEach(f => f.classList.remove('error'));
      conferencias.forEach(cb => cb.classList.remove('error'));
  
      // Validaciones
      if (!nombre.value.trim()) {
        nombre.classList.add('error');
        valid = false;
      }
  
      if (!/^[^\s@]+@uamv\.edu\.ni$/i.test(email.value.trim())) {
        email.classList.add('error');
        valid = false;
      }
  
      if (!carrera.value) {
        carrera.classList.add('error');
        valid = false;
      }
  
      const selected = conferencias.filter(cb => cb.checked);
      if (selected.length === 0) {
        conferencias.forEach(cb => cb.classList.add('error'));
        valid = false;
      }
  
      if (!valid) return;
  
      // Mostrar modal
      modal.classList.add('show');
    });
  
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
      form.reset();
    });
  });
  