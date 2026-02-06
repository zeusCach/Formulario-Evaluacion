// Función para mostrar error
export function showError(input, message) {
    const parent = input.parentElement;

    // Remueve error anterior si existe
    const oldError = parent.querySelector('.error-message');
    if (oldError) oldError.remove();

    // Añade borde rojo
    input.classList.add('border-red-500', 'focus:ring-red-400');
    input.classList.remove('border-slate-300', 'focus:ring-emerald-400');

    // Crea mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    parent.appendChild(errorDiv);
}

// Función para limpiar error
export function clearError(input) {
    const parent = input.parentElement;
    const errorMsg = parent.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();

    input.classList.remove('border-red-500', 'focus:ring-red-400');
    input.classList.add('border-slate-300', 'focus:ring-emerald-400');
}

// Función para mostrar error en contenedor (query type y consent)
export function showContainerError(containerId, message) {
    const container = document.getElementById(containerId);
    const oldError = container.querySelector('.error-message');
    if (oldError) oldError.remove();

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
}

// Función para limpiar error de contenedor
export function clearContainerError(containerId) {
    const container = document.getElementById(containerId);
    const errorMsg = container.querySelector('.error-message');
    if (errorMsg) errorMsg.remove();
}

export function clearAllErrors(form) {
    form.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), textarea')
        .forEach(clearError);
    clearContainerError('queryTypeContainer');
    clearContainerError('consentContainer');
}
