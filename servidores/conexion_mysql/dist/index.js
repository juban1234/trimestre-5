"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)()
    .use(express_1.default.json());
const PORT = process.env.PORT || 10101;
app.PORT('/users', (request, response) => {
    config_1.default.execute('SELECT * FROM productos')
        .then(([result]) => {
        res.json(result);
    })
        .catch((e) => {
        res.status(500).json({ message: e.message });
    });
});
// // SELECT
// db.execute('SELECT * FROM users')
//   .then(([result]) => {
//     console.log(result);
//   })
//   .catch((e: Error) => console.error(e));
/*
// INSERT
const insertQuery = 'INSERT INTO nombre_tabla (columna1, columna2, columna3) VALUES (?, ?, ?)';
const insertValues = ['valor1', 'valor2', 'valor3'];

db.execute(insertQuery, insertValues)
  .then(([result]: any) => {
    console.log('Inserción exitosa. ID del nuevo registro:', result.insertId);
  })
  .catch((err: Error) => {
    console.error('Error al insertar:', err.message);
  });

// UPDATE
const updateQuery = 'UPDATE table_name SET columna1 = ?, columna2 = ? WHERE condicion = ?';
const updateValues = ['nuevo_valor1', 'nuevo_valor2', 'alguna_condicion'];

db.execute(updateQuery, updateValues)
  .then(([result]: any) => {
    console.log('Actualización exitosa. Filas afectadas:', result.affectedRows);
  })
  .catch((err: Error) => {
    console.error('Error al actualizar:', err.message);
  });

// DELETE
const deleteQuery = 'DELETE FROM table_name WHERE condicion = ?';
const deleteValues = ['alguna_condicion'];

db.execute(deleteQuery, deleteValues)
  .then(([result]: any) => {
    console.log('Eliminación exitosa. Filas afectadas:', result.affectedRows);
  })
  .catch((err: Error) => {
    console.error('Error al eliminar:', err.message);
  });
*/ 
