namespace Principal
{
    partial class AgregarP
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
            tbDescripcion = new TextBox();
            tbPrecio = new TextBox();
            tbCantidad = new TextBox();
            tbImagen = new TextBox();
            label1 = new Label();
            btAgregar = new Button();
            tbResultado = new Label();
            label2 = new Label();
            label3 = new Label();
            label4 = new Label();
            label5 = new Label();
            label6 = new Label();
            tbNombre = new TextBox();
            SuspendLayout();
            // 
            // tbDescripcion
            // 
            tbDescripcion.Location = new Point(39, 146);
            tbDescripcion.Name = "tbDescripcion";
            tbDescripcion.Size = new Size(278, 23);
            tbDescripcion.TabIndex = 1;
            // 
            // tbPrecio
            // 
            tbPrecio.Location = new Point(39, 187);
            tbPrecio.Name = "tbPrecio";
            tbPrecio.Size = new Size(278, 23);
            tbPrecio.TabIndex = 2;
            // 
            // tbCantidad
            // 
            tbCantidad.Location = new Point(39, 228);
            tbCantidad.Name = "tbCantidad";
            tbCantidad.Size = new Size(278, 23);
            tbCantidad.TabIndex = 3;
            // 
            // tbImagen
            // 
            tbImagen.Location = new Point(39, 268);
            tbImagen.Name = "tbImagen";
            tbImagen.Size = new Size(278, 23);
            tbImagen.TabIndex = 4;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(315, 14);
            label1.Name = "label1";
            label1.Size = new Size(101, 15);
            label1.TabIndex = 5;
            label1.Text = "Agregar producto";
            // 
            // btAgregar
            // 
            btAgregar.Location = new Point(39, 326);
            btAgregar.Name = "btAgregar";
            btAgregar.Size = new Size(278, 56);
            btAgregar.TabIndex = 6;
            btAgregar.Text = "Agregar";
            btAgregar.UseVisualStyleBackColor = true;
            btAgregar.Click += btAgregar_Click;
            // 
            // tbResultado
            // 
            tbResultado.AutoSize = true;
            tbResultado.Location = new Point(555, 187);
            tbResultado.Name = "tbResultado";
            tbResultado.Size = new Size(0, 15);
            tbResultado.TabIndex = 7;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(336, 102);
            label2.Name = "label2";
            label2.Size = new Size(49, 15);
            label2.TabIndex = 8;
            label2.Text = "nombre";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(336, 231);
            label3.Name = "label3";
            label3.Size = new Size(53, 15);
            label3.TabIndex = 9;
            label3.Text = "cantidad";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(336, 149);
            label4.Name = "label4";
            label4.Size = new Size(68, 15);
            label4.TabIndex = 9;
            label4.Text = "descripcion";
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(346, 190);
            label5.Name = "label5";
            label5.Size = new Size(39, 15);
            label5.TabIndex = 10;
            label5.Text = "presio";
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(338, 271);
            label6.Name = "label6";
            label6.Size = new Size(47, 15);
            label6.TabIndex = 11;
            label6.Text = "imagen";
            // 
            // tbNombre
            // 
            tbNombre.Location = new Point(39, 102);
            tbNombre.Name = "tbNombre";
            tbNombre.Size = new Size(278, 23);
            tbNombre.TabIndex = 12;
            // 
            // AgregarP
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(tbNombre);
            Controls.Add(label6);
            Controls.Add(label5);
            Controls.Add(label4);
            Controls.Add(label3);
            Controls.Add(label2);
            Controls.Add(tbResultado);
            Controls.Add(btAgregar);
            Controls.Add(label1);
            Controls.Add(tbImagen);
            Controls.Add(tbCantidad);
            Controls.Add(tbPrecio);
            Controls.Add(tbDescripcion);
            Name = "AgregarP";
            Text = "AgregarP";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private TextBox tbDescripcion;
        private TextBox tbPrecio;
        private TextBox tbCantidad;
        private TextBox tbImagen;
        private Label label1;
        private Button btAgregar;
        private Label tbResultado;
        private Label label2;
        private Label label3;
        private Label label4;
        private Label label5;
        private Label label6;
        private TextBox tbNombre;
    }
}