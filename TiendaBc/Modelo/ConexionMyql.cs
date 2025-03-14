using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Modelo
{
    public class ConexionMsql
    {
        public MySqlConnection connection;
        private string cadenaConexion;
        
        public ConexionMsql()
        {
            cadenaConexion = "Server=localhost; Database=tiendadb; Uid=root; Pwd=;";
            connection = new MySqlConnection(cadenaConexion);
        }

        public MySqlConnection GetConnection()
        {

            try
            {
                if (connection.State != System.Data.ConnectionState.Open)
                {
                    connection.Open();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return connection;
            }
        }
}
