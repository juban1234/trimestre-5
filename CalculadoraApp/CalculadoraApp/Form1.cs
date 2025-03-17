using System.Diagnostics;
using System.Windows.Forms;

namespace CalculadoraApp
{
    public partial class Form1 : Form
    {
        private double num1 = 0;
        private double num2 = 0;
        private string operador = "";
        private bool operacionRealizada = false;
        public Form1()
        {
            InitializeComponent();
        }

        private void AgregarNumero(string numero)
        {
            if (resultados.Text == "0")
            {
                resultados.Text = numero;
                operacionRealizada = false;
            }
            else
            {
                resultados.Text += numero;
            }
        }

        private void Operacion(string operadorSeleccionado)
        {
            num1 = double.Parse(resultados.Text);
            operador = operadorSeleccionado;
            label2.Text = num1 + operadorSeleccionado;
            resultados.Text = "";


        }


        private void button1_Click(object sender, EventArgs e) => AgregarNumero("1");
        private void button2_Click(object sender, EventArgs e) => AgregarNumero("2");
        private void button3_Click(object sender, EventArgs e) => AgregarNumero("3");
        private void button4_Click(object sender, EventArgs e) => AgregarNumero("4");
        private void button5_Click(object sender, EventArgs e) => AgregarNumero("5");
        private void button6_Click(object sender, EventArgs e) => AgregarNumero("6");
        private void button7_Click(object sender, EventArgs e) => AgregarNumero("7");
        private void button8_Click(object sender, EventArgs e) => AgregarNumero("8");
        private void button9_Click(object sender, EventArgs e) => AgregarNumero("9");
        private void button0_Click(object sender, EventArgs e) => AgregarNumero("0");



        private void buttonCe_Click(object sender, EventArgs e)
        {
            num1 = num2 = 0;
            operador = "";
            resultados.Text = "0";
        }


        private void suma_Click(object sender, EventArgs e) => Operacion("+");

        private void resta_Click(object sender, EventArgs e) => Operacion("-");

        private void multiplicacion_Click(object sender, EventArgs e) => Operacion("x");

        private void divicion_Click(object sender, EventArgs e) => Operacion("/");

        private void buttonResultado_Click(object sender, EventArgs e)
        {

            if (double.TryParse(resultados.Text, out num2))
            {
                double resultadoFinal = 0;
                switch (operador)
                {
                    case "+":
                        
                        resultadoFinal = num1 + num2;
                        break;
                    case "-":
                        resultadoFinal = num1 - num2;
                        break;
                    case "x":
                        resultadoFinal = num1 * num2;
                        break;
                    case "/":
                        if (num2 != 0)
                        {
                            resultadoFinal = num1 / num2;
                        }
                        else
                        {
                            MessageBox.Show("No se puede dividir entre cero", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                            return;
                        }
                        break;

                    default:
                        break;
                }
                resultados.Text = resultadoFinal.ToString();
                num1 = resultadoFinal;
                operacionRealizada = true;
            }
            else
            {
                MessageBox.Show("Por favor ingresa números válidos", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
        
    }
}
