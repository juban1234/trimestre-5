"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)()
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 10101;
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
app.get("/productos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield config_1.default.execute("SELECT * FROM productos");
        res.json(rows); // Aquí res debe ser válido
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener los productos" });
    }
}));
// INSERT
app.post("/insetar", (req, res) => {
    const { nombres, descripcion, precio, cantidad, imagen } = req.body;
    const insertQuery = 'INSERT INTO productos (nombre, descripcion, precio,cantidad,imagen) VALUES (?, ?, ?, ?, ?)';
    const insertValues = [nombres, descripcion, precio, cantidad, imagen];
    config_1.default.execute(insertQuery, insertValues)
        .then(([result]) => {
        console.log('Inserción exitosa. ID del nuevo registro:', result.insertId);
    })
        .catch((err) => {
        console.error('Error al insertar:', err.message);
    });
    res.status(200).json({
        "Status": "producto agregado",
        nombres: nombres
    });
});
// UPDATE
app.put("/actualizar", (req, res) => {
    const { nombres, descripcion, precio, cantidad, imagen } = req.body;
    const updateQuery = 'UPDATE productos SET descripcion = ?, precio = ?, cantidad = ? , imagen = ?  WHERE nombre = ?';
    const updateValues = [descripcion, precio, cantidad, imagen, nombres];
    config_1.default.execute(updateQuery, updateValues)
        .then(([result]) => {
        console.log('Actualización exitosa. Filas afectadas:', result.affectedRows);
    })
        .catch((err) => {
        console.error('Error al actualizar:', err.message);
    });
    res.status(200).json({
        "Status": "producto actualizado",
        nombres: nombres
    });
});
// // DELETE
app.delete("/eliminar", (req, res) => {
    const { nombres } = req.body;
    const deleteQuery = 'DELETE FROM productos WHERE nombre = ?';
    const deleteValues = [nombres];
    config_1.default.execute(deleteQuery, deleteValues)
        .then(([result]) => {
        console.log('Eliminación exitosa. Filas afectadas:', result.affectedRows);
    })
        .catch((err) => {
        console.error('Error al eliminar:', err.message);
    });
    res.status(200).json({
        "Status": "producto eliminado",
        nombres: nombres
    });
});
