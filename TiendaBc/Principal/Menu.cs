namespace Principal
{
    public partial class Menu : Form
    {
        public Menu()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            AgregarP agregarP = new AgregarP();
            agregarP.ShowDialog();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Inventario inventario = new Inventario();
            inventario.ShowDialog();
        }

        private void button4_Click(object sender, EventArgs e)
        {

        }


    }
}
