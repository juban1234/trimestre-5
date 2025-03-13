using Modelo;
using Modelo.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logica
{
    public class UsuarioController
    {
        public List< UsuarioEntity> VerUsuario()
        {
            BaseDatos db = new BaseDatos();

            List< UsuarioEntity> usuarios= db.TraerUsuario();

            return usuarios;

        }

        public string GuardarUsuario(string name ,string description)
        {
            string resultado = "";

            BaseDatos db = new BaseDatos();
            int filasAfectadas = db.GuardarUsuario(name, description);

            if (filasAfectadas > 0)
            {
                resultado = "Guardado";

            }
            else
            {
                resultado = "No guardado";
            }

            return resultado;
        }
    }
}
