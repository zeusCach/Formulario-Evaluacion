import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL || "https://ylajisfpzyuxtlkcknxu.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsYWppc2Zwenl1eHRsa2Nrbnh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNjY1NzMsImV4cCI6MjA4NTc0MjU3M30.v-qrjBBqTcWwUmb-A47tNKGQ6O9q5t4a1XMzq6VDSOk";

const supabase = createClient(supabaseUrl, supabaseKey);

// Handler de Netlify
export async function handler(event) {

    // Solo permitir POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Extraer datos del body desde nuestro fomr 
        const { firstName, lastName, email, queryType, message, consent } = JSON.parse(event.body);

        // Validación 
        if (!firstName || !lastName || !email || !queryType || !message || consent !== true) {
            return {
                statusCode: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: "Datos Invalidos" })
            };
        }

        // Insert a Supabase de manera remota
        const { error } = await supabase.from("formulario").insert([{
            first_name: firstName,
            last_name: lastName,
            email: email,
            query_type: queryType,
            message: message,
            consent: consent
        }]);

        if (error) {
            console.error("SUPABASE ERROR:", error);
            return {
                statusCode: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ error: "Error al guardar los datos" })
            };
        }

        //si existe respuesta con el servidor
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: true,
                message: "formulario enviado correctamente"
            })
        };

    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: "Error interno del servidor" })
        };
    }
}