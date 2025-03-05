using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Modelo.Entitis;

namespace Modelo
{
    public class BasedeDatos
        
    {
        public UsuarioEntity MostarUsuarios()
        {
            UsuarioEntity usuario = new UsuarioEntity();
            usuario.ID = 1;
            usuario.Name = "juan esteban";
            usuario.descripcion = "Developez";

            return usuario;
        }
    }
}
