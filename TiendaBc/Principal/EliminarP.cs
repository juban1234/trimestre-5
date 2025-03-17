using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using logica;

namespace Principal
{
    public partial class EliminarP : Form
    {
        public EliminarP()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            UsuarioController controller = new UsuarioController();
            string resultado = controller.El
        }
    }
}
