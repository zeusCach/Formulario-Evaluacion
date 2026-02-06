// Validar email
export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function validateForm(form) {
    const errors = [];

    // Validar First Name
    if (!form.firstName.value.trim()) {
        errors.push({ field: form.firstName, message: 'First name is required' });
    }

    // Validar Last Name
    if (!form.lastName.value.trim()) {
        errors.push({ field: form.lastName, message: 'Last name is required' });
    }

    // Validar Email
    if (!form.email.value.trim()) {
        errors.push({ field: form.email, message: 'Email is required' });
    } else if (!isValidEmail(form.email.value.trim())) {
        errors.push({ field: form.email, message: 'Please enter a valid email' });
    }

    // Validar Query Type
    if (!form.query.value) {
        errors.push({
            containerId: 'queryTypeContainer',
            message: 'Please select a query type'
        });
    }

    // Validar Message
    if (!form.message.value.trim()) {
        errors.push({ field: form.message, message: 'Message is required' });
    }

    // Validar Consent
    if (!form.consent.checked) {
        errors.push({
            containerId: 'consentContainer',
            message: 'You must consent to being contacted'
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