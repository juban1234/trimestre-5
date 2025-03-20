import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express()
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 10101;


//ruta que recibe un formulario de registro
app.post('/register', function (request: Request, response: Response) {
    let password = request.body.password;
    let email = request.body.email;
    let nombres = request.body.nombres;
    let apellidos = request.body.apellidos;
    let ciudad = request.body.ciudad;
    return response.status(200).json({
        "Status": "ok registrado",
        nombres: nombres, apellidos: apellidos
<<<<<<< HEAD
    
=======
>>>>>>> 83bfe1f91c57302b8d6c8ba54a2236182410fe8e
    });
});


//ruta que recibe un objeto json para registro
app.post('/registerjson', function (request: Request, response: Response) {
    let password = request.body.password;
    let email = request.body.email;
    let nombres = request.body.nombres;
    let apellidos = request.body.apellidos;
    let ciudad = request.body.ciudad;
    return response.status(200).json({
        "Status": "ok registrado con json",
        nombres: nombres, apellidos: apellidos
    });
});


//ruta que recibe string query para registro
app.get('/parametros-consulta', function (request: Request, response: Response) {
    let nombres = request.query.nombres;
    let apellidos = request.query.apellidos;
    console.log("----", nombres, apellidos)
    return response.status(200).json({
        "Status": "ok registrado con params",
        nombres: nombres, apellidos: apellidos
    });
});


//ruta que recibe parametros de ruta para registro
app.get('/parametros-ruta/:id', function (request: Request, response: Response) {
    let id = request.params.id;
    return response.status(200).json({
        "Status": "ok params",
        id: id
    });
});


//ruta que recibe cabecera
app.get('/cabeceras', function (request: Request, response: Response) {
    let cabecera = request.header("Authorization");
    return response.status(200).json({
        "Status": "ok cabecera",
        cabecera: cabecera
    });
});


app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error: any) => {
    throw new Error(error.message);
});
