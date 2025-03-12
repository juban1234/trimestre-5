using Modelo.Entities;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modelo
{
    public class BaseDatos:ConexionMsql
    {
        public List<UsuarioEntity> TraerUsuario()
        {
            List<UsuarioEntity>usuarios = new List<UsuarioEntity>();

            MySqlCommand cmd = GetConnection().CreateCommand();
            cmd.CommandText = "select * from users";
            MySqlDataReader dr = cmd.ExecuteReader();

            while (dr.Read())
            {
                UsuarioEntity usuarioActual = new UsuarioEntity();
                usuarioActual.ID = dr.GetInt32(0);
                usuarioActual.Name = dr.GetString(1);
                usuarioActual.Description = dr.GetString(2);
                usuarios.Add(usuarioActual);
            }


            return usuarios;
        }

        public int GuardarUsuario(string name ,string description)
        {
            int resultado = 0;

            MySqlCommand cmd = GetConnection().CreateCommand();
            cmd.CommandText = "inser into users(nombre,descripcion) values(' " + name +"','" +description+ " ')";
            resultado = cmd.ExecuteNonQuery();

            return resultado;
        }
    }
}
