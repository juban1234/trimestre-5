namespace Principal
{
    partial class crearUsuario
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            btGuardar = new Button();
            lbResultado = new Label();
            tbNombre = new TextBox();
            tbDescriptcion = new TextBox();
            SuspendLayout();
            // 
            // btGuardar
            // 
            btGuardar.Location = new Point(85, 265);
            btGuardar.Name = "btGuardar";
            btGuardar.Size = new Size(120, 42);
            btGuardar.TabIndex = 0;
            btGuardar.Text = "agregar usuario";
            btGuardar.UseVisualStyleBackColor = true;
            btGuardar.Click += btGuardar_Click;
            // 
            // lbResultado
            // 
            lbResultado.AutoSize = true;
            lbResultado.Location = new Point(101, 373);
            lbResultado.Name = "lbResultado";
            lbResultado.Size = new Size(38, 15);
            lbResultado.TabIndex = 1;
            lbResultado.Text = "label1";
            // 
            // tbNombre
            // 
            tbNombre.Location = new Point(85, 136);
            tbNombre.Name = "tbNombre";
            tbNombre.Size = new Size(166, 23);
            tbNombre.TabIndex = 2;
            // 
            // tbDescriptcion
            // 
            tbDescriptcion.Location = new Point(85, 212);
            tbDescriptcion.Name = "tbDescriptcion";
            tbDescriptcion.Size = new Size(166, 23);
            tbDescriptcion.TabIndex = 3;
            // 
            // crearUsuario
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(tbDescriptcion);
            Controls.Add(tbNombre);
            Controls.Add(lbResultado);
            Controls.Add(btGuardar);
            Name = "crearUsuario";
            Text = "crearUsuario";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button btGuardar;
        private Label lbResultado;
        private TextBox tbNombre;
        private TextBox tbDescriptcion;
    }
}