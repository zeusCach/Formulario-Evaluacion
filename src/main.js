import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="flex items-center justify-center min-h-screen " >
      <div class="  bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 class="text-2xl font-bold text-slate-700 mb-6">Contact Us</h1>
        <form id="contactForm" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
            <label class="block text-sm text-slate-600 mb-1">First Name <span class="text-emerald-600">*</span></label>
            <input name="firstName" type="text" class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
          <div>
          <label class="block text-sm text-slate-600 mb-1">Last Name <span class="text-emerald-600">*</span></label>
          <input name="lastName" type="text" class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          </div>
    
        <div>
        <label class="block text-sm text-slate-600 mb-1">Email Address <span class="text-emerald-600">*</span></label>
        <input name="email" type="email" class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        </div>
    
        <div id="queryTypeContainer">
          <label class="block text-sm text-slate-600 mb-2">Query Type <span class="text-emerald-600">*</span></label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label class="flex items-center gap-3 border border-slate-300 rounded-lg p-3 cursor-pointer hover:border-emerald-400">
            <input type="radio" name="query" value="General" class="accent-emerald-600" />
            <span class="text-sm">General Enquiry</span>
            </label>
            <label class="flex items-center gap-3 border border-slate-300 rounded-lg p-3 cursor-pointer hover:border-emerald-400">
            <input type="radio" name="query" value="Support" class="accent-emerald-600" />
            <span class="text-sm">Support Request</span>
            </label>
           </div>
        </div>
        
        <div>
          <label class="block text-sm text-slate-600 mb-1">Message <span class="text-emerald-600">*</span></label>
          <textarea name="message" rows="5" class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"></textarea>
        </div>

        <div id="consentContainer">
          <label class="flex items-center gap-3 text-sm text-slate-600">
            <input name="consent" type="checkbox" class="accent-emerald-600" />
            I consent to being contacted by the team <span class="text-emerald-600">*</span>
          </label>
        </div>
   
        <button type="submit" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-semibold transition">
          Submit
        </button>
    </form>
    </div>
  </div>
`

const form = document.getElementById("contactForm");

// Función para mostrar error
function showError(input, message) {
  const parent = input.parentElement;

  // Remover error anterior si existe
  const oldError = parent.querySelector('.error-message');
  if (oldError) oldError.remove();

  // Añadir borde rojo
  input.classList.add('border-red-500', 'focus:ring-red-400');
  input.classList.remove('border-slate-300', 'focus:ring-emerald-400');

  // Crear mensaje de error
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message text-red-500 text-sm mt-1';
  errorDiv.textContent = message;
  parent.appendChild(errorDiv);
}

// Función para limpiar error
function clearError(input) {
  const parent = input.parentElement;
  const errorMsg = parent.querySelector('.error-message');
  if (errorMsg) errorMsg.remove();

  input.classList.remove('border-red-500', 'focus:ring-red-400');
  input.classList.add('border-slate-300', 'focus:ring-emerald-400');
}

// Función para mostrar error en contenedor (query type y consent)
function showContainerError(containerId, message) {
  const container = document.getElementById(containerId);
  const oldError = container.querySelector('.error-message');
  if (oldError) oldError.remove();

  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message text-red-500 text-sm mt-1';
  errorDiv.textContent = message;
  container.appendChild(errorDiv);
}

// Función para limpiar error de contenedor
function clearContainerError(containerId) {
  const container = document.getElementById(containerId);
  const errorMsg = container.querySelector('.error-message');
  if (errorMsg) errorMsg.remove();
}

// Validar email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Limpiar errores en tiempo real cuando el usuario escribe
form.firstName.addEventListener('input', () => clearError(form.firstName));
form.lastName.addEventListener('input', () => clearError(form.lastName));
form.email.addEventListener('input', () => clearError(form.email));
form.message.addEventListener('input', () => clearError(form.message));

// Limpiar error cuando selecciona un query type
form.querySelectorAll('[name="query"]').forEach(radio => {
  radio.addEventListener('change', () => clearContainerError('queryTypeContainer'));
});

// Limpiar error cuando marca el consent
form.consent.addEventListener('change', () => clearContainerError('consentContainer'));

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Limpiar todos los errores previos
  form.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), textarea').forEach(clearError);
  clearContainerError('queryTypeContainer');
  clearContainerError('consentContainer');

  let hasErrors = false;

  // Validar First Name
  if (!form.firstName.value.trim()) {
    showError(form.firstName, 'First name is required');
    hasErrors = true;
  }

  // Validar Last Name
  if (!form.lastName.value.trim()) {
    showError(form.lastName, 'Last name is required');
    hasErrors = true;
  }

  // Validar Email
  if (!form.email.value.trim()) {
    showError(form.email, 'Email is required');
    hasErrors = true;
  } else if (!isValidEmail(form.email.value.trim())) {
    showError(form.email, 'Please enter a valid email');
    hasErrors = true;
  }

  // Validar Query Type
  if (!form.query.value) {
    showContainerError('queryTypeContainer', 'Please select a query type');
    hasErrors = true;
  }

  // Validar Message
  if (!form.message.value.trim()) {
    showError(form.message, 'Message is required');
    hasErrors = true;
  }

  // Validar Consent
  if (!form.consent.checked) {
    showContainerError('consentContainer', 'You must consent to being contacted');
    hasErrors = true;
  }

  // Si hay errores, detener el envío
  if (hasErrors) {
    return;
  }

  // Preparar datos para enviar
  const data = {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    email: form.email.value.trim(),
    queryType: form.query.value,
    message: form.message.value.trim(),
    consent: form.consent.checked
  };

  try {

    const API_URL = window.location.hostname === 'localhost'
      ? 'http://localhost:3000/api/contact'
      : '/netlify/functions/contact.js';

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.error);
    } else {
      alert("Formulario enviado correctamente");
      form.reset();
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
  }
});
