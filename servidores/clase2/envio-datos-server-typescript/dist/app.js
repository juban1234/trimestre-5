"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)()
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 10101;
//ruta que recibe un formulario de registro
app.post('/register', function (request, response) {
    let password = request.body.password;
    let email = request.body.email;
    let nombres = request.body.nombres;
    let apellidos = request.body.apellidos;
    let ciudad = request.body.ciudad;
    return response.status(200).json({
        "Status": "ok registrado",
        nombres: nombres, apellidos: apellidos
    });
});
//ruta que recibe un objeto json para registro
app.post('/registerjson', function (request, response) {
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
app.get('/parametros-consulta', function (request, response) {
    let nombres = request.query.nombres;
    let apellidos = request.query.apellidos;
    console.log("----", nombres, apellidos);
    return response.status(200).json({
        "Status": "ok registrado con params",
        nombres: nombres, apellidos: apellidos
    });
});
//ruta que recibe parametros de ruta para registro
app.get('/parametros-ruta/:id', function (request, response) {
    let id = request.params.id;
    return response.status(200).json({
        "Status": "ok params",
        id: id
    });
});
//ruta que recibe cabecera
app.get('/cabeceras', function (request, response) {
    let cabecera = request.header("Authorization");
    return response.status(200).json({
        "Status": "ok cabecera",
        cabecera: cabecera
    });
});
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
