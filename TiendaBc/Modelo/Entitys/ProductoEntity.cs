﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Modelo.Entity
{
    public class ProductoEntity
    {
       public int id { get; set; }
       public string nombre {  get; set; }
       public string descripcion {  get; set; } 
        public double precio {  get; set; } 
        public int cantidad {  get; set; }
        public byte[] imagen { get; set; } 
        public DateTime fecha_agregado { get; set; }
    }
}
