using System;
using System.Collections.Generic;
using Modelo;
using Modelo.Entity;

namespace logica
{
    public class UsuarioController
    {
        // Método para ver productos
        public List<ProductoEntity> VerProductos()
        {
            BaseDatos db = new BaseDatos();
            List<ProductoEntity> productos = db.TraerProductos();  // Corrigiendo el nombre del método

            return productos;
        }


        public string GuardarProducto(string nombre, string descripcion, string precio, string cantidad, string imagen)
        {
            // Crear un objeto ProductoEntity
            ProductoEntity producto = new ProductoEntity
            {
                nombre = nombre,
                descripcion = descripcion,
                precio = Convert.ToDouble(precio),  
                cantidad = Convert.ToInt32(cantidad),  
                imagen = Convert.FromBase64String(imagen)  
            };

            BaseDatos db = new BaseDatos();
            int resultado = db.GuardarProducto(producto);

            if (resultado > 0)
            {
                return "Producto guardado con éxito.";
            }
            else
            {
                return "Error al guardar el producto.";
            }
        }

<<<<<<< HEAD
        public string EliminarProducto(string nombre)
        {

        }
=======

>>>>>>> e6eebf877f071d9069d87c4c8dfed48bdcb50468
    }
}

