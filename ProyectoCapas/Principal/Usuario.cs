using Logica;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Principal
{
    public partial class Usuario : Form
    {
        public Usuario()
        {
            InitializeComponent();
        }

        private void btVer_Click(object sender, EventArgs e)
        {
            UsuarioController usuarioController = new UsuarioController();

            var usuarios = usuarioController.VerUsuario();

            string resultado = "";

            foreach (var usuarioActual in usuarios)
            {
                resultado += "nombre" + usuarioActual.Name + " - Descripcion: " + usuarioActual.Description + "\n";
            }

            lbVerUsuario.Text = resultado;
        }
    }
}
