

const API_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000/api/contact'
    : '/.netlify/functions/contact';


export async function submitContactForm(data) {

    try {

        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: result.error || 'Error al enviar el formulario'
            }
        }

        return {
            success: true,
            data: result
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
    }
}