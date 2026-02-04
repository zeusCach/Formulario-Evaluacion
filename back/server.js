import express from "express"
import { supabase } from "./supabase.js";

const app = express();

//nos permite usar el json del body
app.use(express.json);

//endpoint de tipo post que permite consultar a la db para insertar el data
app.post("/api/contact", async (res, req) => {

    //extraemos los datos enviados desde el formulario
    const { firstName, lastName, email, queryType, message, consent } = req.body;

    //validacion, si esos datos son diferente de true, manda un error
    if (!firstName || !lastName || !email || !queryType || !message || consent !== true) {

        //faltando algun campo manda un error al front
        return res.status(400).json({ error: "Datos Invalidos" });
    }

    //insertar datos a la tabla formulario

    const { error } = await supabase.from("formulario").insert([{
        firstName: firstName,
        lastName: lastName,
        email: email,
        queryType: queryType,
        message: message,
        consent: consent
    }]);

    //si en la espera de la consulta insert de supabase falla, manda un error
    if (error) {
        return res.status(500).json({ error: "Error al guardar los datos" });
    }

    //si la respuesta fue exitosa

    res.json({
        success: true,
        message: "formulario enviado correctamente"
    });

});

app.listen(3000, () => {
    console.log("Servidor iniciando...")
})

