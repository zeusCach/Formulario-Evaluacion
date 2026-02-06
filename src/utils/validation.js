// Validar email
export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function validateForm(form) {
    const errors = [];

    // Validar First Name
    if (!form.firstName.value.trim()) {
        errors.push({ field: form.firstName, message: 'Nombre es requerido' });
    }

    // Validar Last Name
    if (!form.lastName.value.trim()) {
        errors.push({ field: form.lastName, message: 'Apellido es requerido' });
    }

    // Validar Email
    if (!form.email.value.trim()) {
        errors.push({ field: form.email, message: 'Correo es requerido' });
    } else if (!isValidEmail(form.email.value.trim())) {
        errors.push({ field: form.email, message: 'Preciona enter para validar correo' });
    }

    // Validar Query Type
    if (!form.query.value) {
        errors.push({
            containerId: 'queryTypeContainer',
            message: 'Por favor, seleccione un tipo de consulta'
        });
    }

    // Validar Message
    if (!form.message.value.trim()) {
        errors.push({ field: form.message, message: 'Mensaje es requerido' });
    }

    // Validar Consent
    if (!form.consent.checked) {
        errors.push({
            containerId: 'consentContainer',
            message: 'Debes dar tu consentimiento para que te contacten'
        });
    }

    return errors;
}


//Captura datos del formulario
export function getFormData(form) {
    return {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        email: form.email.value.trim(),
        queryType: form.query.value,
        message: form.message.value.trim(),
        consent: form.consent.checked
    };
}