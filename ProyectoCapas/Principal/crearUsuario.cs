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
            // Validar si los campos no están vacíos
            if (string.IsNullOrEmpty(tbNombre.Text) || string.IsNullOrEmpty(tbDescriptcion.Text))
            {
                lbResultado.Text = "Por favor complete todos los campos.";
                lbResultado.ForeColor = Color.Red; // Cambiar el color del texto para error
                return;
            }

            // Crear el controlador para guardar el usuario
            UsuarioController controller = new UsuarioController();

            // Llamar al método GuardarUsuario de tu controlador
            string resultado = controller.GuardarUsuario(tbNombre.Text, tbDescriptcion.Text);

            // Mostrar el resultado de la operación
            lbResultado.Text = resultado;
            lbResultado.ForeColor = Color.Green; // Cambiar el color para indicar éxito
        }
    }
}
