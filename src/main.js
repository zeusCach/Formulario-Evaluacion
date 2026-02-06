import { FormComponent } from './components/form';
import { validateForm, getFormData } from './utils/validation.js';
import { submitContactForm } from './services/api.js';
import {
  showError,
  showContainerError,
  clearError,
  clearContainerError,
  clearAllErrors
} from './utils/errorHandler';


//renderiza nuestro componente Formulario
document.querySelector('#app').innerHTML = FormComponent;

//obtiene id en referencia al formulario
const form = document.getElementById("contactForm");


//limpia el error en inputs
function setupRealtimeValidation() {

  // Inputs de texto
  form.firstName.addEventListener('input', () => clearError(form.firstName));
  form.lastName.addEventListener('input', () => clearError(form.lastName));
  form.email.addEventListener('input', () => clearError(form.email));
  form.message.addEventListener('input', () => clearError(form.message));

  // Botones check (query type)
  form.querySelectorAll('[name="query"]').forEach(radio => {
    radio.addEventListener('change', () => clearContainerError('queryTypeContainer'));
  });

  // Checkbox (consent)
  form.consent.addEventListener('change', () => clearContainerError('consentContainer'));
}


//funcion que se encarga del send de nuestro formulario
async function handleSubmit(e) {
  e.preventDefault();

  clearAllErrors(form);


  const errors = validateForm(form);


  if (errors.length > 0) {

    errors.forEach(error => {
      if (error.field) {
        showError(error.field, error.message);
      } else if (error.containerId) {
        showContainerError(error.containerId, error.message);
      }
    });
    return;
  }


  const formData = getFormData(form);

  const result = await submitContactForm(formData);


  if (result.success) {
    alert('Formulario enviado correctamente');
    form.reset();
  } else {
    alert(result.error);
  }
}

setupRealtimeValidation();
form.addEventListener('submit', handleSubmit);
