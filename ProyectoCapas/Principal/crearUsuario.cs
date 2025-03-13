using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Logica;

namespace Principal
{
    public partial class crearUsuario : Form
    {
        public crearUsuario()
        {
            InitializeComponent();
        }

        private void btGuardar_Click(object sender, EventArgs e)
        {
            UsuarioController controller = new UsuarioController();
            string resultado = controller.GuardarUsuario(tbNombre.Text,tbDescriptcion.Text);
            lbResultado.Text = resultado;
        }
    }
}
