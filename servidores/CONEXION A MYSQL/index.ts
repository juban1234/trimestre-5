import db from './config';
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express()
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error: any) => {
  throw new Error(error.message);
});


app.get("/productos", (res: Response) => {
  db.execute('SELECT * FROM productos')
    .then(([result]: any) => {
      res.json(result);
    }
    )
    .catch((e: Error) => {
      console.error(e);
      res.status(500).json({ message: 'Error al obtener los productos' });
    }
    );
});

// INSERT
app.post("/insetar",(req: Request, res: Response) => {

  const {nombres, descripcion, precio,cantidad,imagen} = req.body
  
const insertQuery = 'INSERT INTO productos (nombre, descripcion, precio,cantidad,imagen) VALUES (?, ?, ?, ?, ?)';
const insertValues = [nombres, descripcion, precio,cantidad,imagen];

db.execute(insertQuery, insertValues)
  .then(([result]: any) => {
    console.log('Inserción exitosa. ID del nuevo registro:', result.insertId);
  })
  .catch((err: Error) => {
    console.error('Error al insertar:', err.message);
  });

  res.status(200).json({
    "Status": "producto agregado",
    nombres: nombres
});

});


  // UPDATE
app.put("/actualizar",(req: Request, res: Response) => {

  const {nombres, descripcion, precio,cantidad,imagen} = req.body

const updateQuery = 'UPDATE productos SET descripcion = ?, precio = ?, cantidad = ? , imagen = ?  WHERE nombre = ?';
const updateValues = [descripcion, precio, cantidad , imagen , nombres];

  db.execute(updateQuery, updateValues)
  .then(([result]: any) => {
    console.log('Actualización exitosa. Filas afectadas:', result.affectedRows);
  })
  .catch((err: Error) => {
    console.error('Error al actualizar:', err.message);
  });

  res.status(200).json({
    "Status": "producto actualizado",
    nombres: nombres
});

});


// // DELETE
app.delete("/eliminar",(req: Request, res: Response) => {

  const {nombres} = req.body

  const deleteQuery = 'DELETE FROM productos WHERE nombre = ?';
  const deleteValues = [nombres];

  db.execute(deleteQuery, deleteValues)
    .then(([result]: any) => {
      console.log('Eliminación exitosa. Filas afectadas:', result.affectedRows);
    })
    .catch((err: Error) => {
      console.error('Error al eliminar:', err.message);
    });

    res.status(200).json({
      "Status": "producto eliminado",
      nombres: nombres
    });

});