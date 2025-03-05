using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Modelo;
using Modelo.Entitis;

namespace Logica
{
    public class UuarioController
    {
        public UsuarioEntity consultarUsuario()
        {
            BasedeDatos db = new BasedeDatos();
            UsuarioEntity usuario = db.MostarUsuarios();
            return usuario;
        }
    }
}
