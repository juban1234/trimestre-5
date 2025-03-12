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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

        }

        private void btLeerLibro_Click(object sender, EventArgs e)
        {
            BibliotecaController controller = new BibliotecaController();
            var usuario = controller.consultarLibro();
            lbTitulo.Text = usuario.Titulo;
            lbContenido.Text = usuario.contenido;
        }
    }
}
