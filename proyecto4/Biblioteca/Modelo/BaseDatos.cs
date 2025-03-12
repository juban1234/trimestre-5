using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Modelo.Entity;

namespace Modelo
{
    public class BaseDatos
    {
        public EntityLibros LeerDatos()
        {
            EntityLibros libros = new EntityLibros();
            libros.ID_libro = 0;
            libros.Titulo = "makiabelo";
            libros.contenido = "ser o no ser cual es la cuestion";

            return libros;
        }
    }
}
