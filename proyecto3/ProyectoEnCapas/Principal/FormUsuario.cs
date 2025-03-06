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
    public partial class FormUsuario : Form
    {
        public FormUsuario()
        {
            InitializeComponent();
        }

        private void btUsuario_Click(object sender, EventArgs e)
        {
            UuarioController controller = new UuarioController();
            var usuario = controller.consultarUsuario();
            lbUsuario.Text = "nombre: " + usuario.Name + " - cargo: " + usuario.descripcion;

        }

    }
}
