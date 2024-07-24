
function emailValidation() {
    const form = document.getElementById('form');
    const emailEscrito = document.getElementById('email');
    const emailIncorrecto = document.getElementById('email_confirm');
    const error = document.getElementById('error-row');
    const Message = document.getElementById('error-message');

    emailIncorrecto.addEventListener('input', () => {
        if (emailEscrito.value !== emailIncorrecto.value) {
          Message.textContent = "El email no coincide";
          error.style.display = 'table-row';
          emailIncorrecto.classList.add('email_error');
        } else {
          Message.textContent = "";
          error.style.display = 'none';
          emailIncorrecto.classList.remove('email_error');
        }
    });
    
      form.addEventListener('submit', e => {
        if (emailEscrito.value !== emailIncorrecto.value) {
          e.preventDefault();
          Message.textContent = "El email no coincide";
          error.style.display = 'table-row';
          emailIncorrecto.classList.add('email_error');
        } else {
          Message.textContent = "";
          error.style.display = 'none';
          emailIncorrecto.classList.remove('email_error');
          form.submit();
        }
    });
};
    
    window.onload = emailValidation;  