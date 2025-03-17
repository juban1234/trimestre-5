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
<<<<<<< HEAD
            cadenaConexion = "Server=localhost; Database=tiendadb; Uid=juanGrajales; Pwd=MiClaveSegura123;";
=======
            cadenaConexion = "Server=localhost; Database=tiendadb; Uid=root; Pwd=;";
>>>>>>> e6eebf877f071d9069d87c4c8dfed48bdcb50468
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
