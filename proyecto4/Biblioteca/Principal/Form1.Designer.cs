namespace Principal
{
    partial class Form1
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
            lbContenido = new Label();
            lbTitulo = new Label();
            btLeerLibro = new Button();
            SuspendLayout();
            // 
            // lbContenido
            // 
            lbContenido.AutoSize = true;
            lbContenido.Location = new Point(80, 217);
            lbContenido.Name = "lbContenido";
            lbContenido.Size = new Size(0, 15);
            lbContenido.TabIndex = 0;
            // 
            // lbTitulo
            // 
            lbTitulo.AutoSize = true;
            lbTitulo.Location = new Point(80, 164);
            lbTitulo.Name = "lbTitulo";
            lbTitulo.Size = new Size(0, 15);
            lbTitulo.TabIndex = 1;
            // 
            // btLeerLibro
            // 
            btLeerLibro.Font = new Font("Segoe UI", 14.25F, FontStyle.Regular, GraphicsUnit.Point, 0);
            btLeerLibro.Location = new Point(68, 52);
            btLeerLibro.Name = "btLeerLibro";
            btLeerLibro.Size = new Size(95, 41);
            btLeerLibro.TabIndex = 2;
            btLeerLibro.Text = "Leer";
            btLeerLibro.UseVisualStyleBackColor = true;
            btLeerLibro.Click += btLeerLibro_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(btLeerLibro);
            Controls.Add(lbTitulo);
            Controls.Add(lbContenido);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lbContenido;
        private Label lbTitulo;
        private Button btLeerLibro;
    }
}