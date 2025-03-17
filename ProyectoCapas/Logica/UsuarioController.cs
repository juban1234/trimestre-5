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

        public string GuardarUsuario(string name, string description)
        {
            // Llamada al método de la capa de lógica de negocios o base de datos.
            BaseDatos baseDatos = new BaseDatos();
            int resultado = baseDatos.GuardarUsuario(name, description);

            // Retornar un mensaje basado en el resultado
            if (resultado > 0)
            {
                return "Usuario guardado con éxito.";
            }
            else
            {
                return "Error al guardar el usuario.";
            }
        }



    }
}
