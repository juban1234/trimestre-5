using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Modelo;
using Modelo.Entity;

namespace Logica
{
    public class BibliotecaController
    {
        public EntityLibros consultarLibro()
        {
            BaseDatos db = new BaseDatos();
            EntityLibros libros = db.LeerDatos();
            return libros;
        }

        
    }
}
