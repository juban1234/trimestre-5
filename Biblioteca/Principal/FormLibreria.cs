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
using static System.Windows.Forms.DataFormats;

namespace Principal
{
    public partial class FormLibreria : Form
    {
        public FormLibreria()
        {
            InitializeComponent();
        }

        private void btUsuario_Click(object sender, EventArgs e)
        {
            Form1 US = new Form1();
            US.ShowDialog();
        }
    }
}
