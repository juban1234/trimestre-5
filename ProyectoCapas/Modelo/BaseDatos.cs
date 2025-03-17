using Modelo.Entities;
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
        public List<UsuarioEntity> TraerUsuario()
        {
            List<UsuarioEntity> usuarios = new List<UsuarioEntity>();

            // Usando un bloque using para asegurarse de que la conexión se cierre correctamente
            using (MySqlCommand cmd = GetConnection().CreateCommand())
            {
                cmd.CommandText = "SELECT * FROM users";
                using (MySqlDataReader dr = cmd.ExecuteReader())
                {
                    while (dr.Read())
                    {
                        UsuarioEntity usuarioActual = new UsuarioEntity();
                        usuarioActual.ID = dr.GetInt32(0);
                        usuarioActual.Name = dr.GetString(1);
                        usuarioActual.Description = dr.GetString(2);
                        usuarios.Add(usuarioActual);
                    }
                }
            }
            return usuarios;
        }

        public int GuardarUsuario(string name, string description)
        {
            int resultado = 0;

            // Usamos parámetros para evitar inyección SQL
            using (MySqlCommand cmd = GetConnection().CreateCommand())
            {
                cmd.CommandText = "INSERT INTO users ( Name, Description) VALUES (@name, @description)";

                // Definir los parámetros
                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@description", description);

                // Ejecutar el comando SQL
                resultado = cmd.ExecuteNonQuery();
            }

            return resultado;
        }


    }
}


