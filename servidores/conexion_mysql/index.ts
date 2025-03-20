import db from './config';
import express from 'express';


const app = express()
  .use(express.json());

  const PORT = process.env.PORT || 10101;

app.PORT('/users', (request: Request, response: Response) => {
  db.execute('SELECT * FROM productos')
    .then(([result]) => {
      res.json(result);
    })
    .catch((e: Error) => {
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