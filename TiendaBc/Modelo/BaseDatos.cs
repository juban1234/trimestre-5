
using Modelo.Entity;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelo
{
    public class BaseDatos : ConexionMsql
    {
        public List<ProductoEntity> TraerProductos()
        {
            List<ProductoEntity> productos = new List<ProductoEntity>();

            // Usando un bloque using para asegurarse de que la conexión se cierre correctamente
            using (MySqlCommand cmd = GetConnection().CreateCommand())
            {
                // Llamamos al procedimiento almacenado
                cmd.CommandText = "ObtenerProductos";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                using (MySqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        ProductoEntity productoActual = new ProductoEntity();
                        productoActual.id = dr.GetInt32(0);         // id del producto
                        productoActual.nombre = dr.GetString(1);    // nombre del producto
                        productoActual.descripcion = dr.GetString(2);  // descripción
                        productoActual.precio = dr.GetDouble(3);    // precio
                        productoActual.cantidad = dr.GetInt32(4);   // cantidad

                        // Verificar si hay una imagen y cargarla
                        if (!dr.IsDBNull(5))
                        {
                            productoActual.imagen = (byte[])dr.GetValue(5);  // Convertir la imagen
                        }

                        productos.Add(productoActual);
                    }
                }
            }
            return productos;

        }
        public int GuardarProducto(ProductoEntity producto)
        {
            int resultado = 0;

            try
            {
                // Usamos parámetros para evitar inyección SQL
                using (MySqlCommand cmd = GetConnection().CreateCommand())
                {
                    // Llamamos al procedimiento almacenado GuardarProducto
                    cmd.CommandText = "GuardarProducto";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                    // Definir los parámetros
                    cmd.Parameters.AddWithValue("@p_nombre", producto.nombre);
                    cmd.Parameters.AddWithValue("@p_descripcion", producto.descripcion);
                    cmd.Parameters.AddWithValue("@p_precio", producto.precio);
                    cmd.Parameters.AddWithValue("@p_cantidad", producto.cantidad);

                    // Si la imagen no es null, agregarla como parámetro
                    if (producto.imagen != null)
                    {
                        cmd.Parameters.AddWithValue("@p_imagen", producto.imagen);
                    }
                    else
                    {
                        // Si no se proporciona una imagen, insertar un valor NULL
                        cmd.Parameters.AddWithValue("@p_imagen", DBNull.Value);
                    }

                    // Ejecutar el comando SQL
                    resultado = cmd.ExecuteNonQuery();
                }
            }
            catch (MySqlException ex)
            {
                Console.WriteLine("Error al guardar producto: " + ex.Message);
            }

            return resultado;
        }


    }
}

