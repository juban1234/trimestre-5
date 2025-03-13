namespace Principal
{
    partial class Menu
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
            btUsuario = new Button();
            btCrear = new Button();
            SuspendLayout();
            // 
            // btUsuario
            // 
            btUsuario.Location = new Point(163, 131);
            btUsuario.Name = "btUsuario";
            btUsuario.Size = new Size(153, 90);
            btUsuario.TabIndex = 0;
            btUsuario.Text = "Usuarios";
            btUsuario.UseVisualStyleBackColor = true;
            btUsuario.Click += btUsuario_Click;
            // 
            // btCrear
            // 
            btCrear.Location = new Point(408, 131);
            btCrear.Name = "btCrear";
            btCrear.Size = new Size(153, 90);
            btCrear.TabIndex = 1;
            btCrear.Text = "guardar usuario";
            btCrear.UseVisualStyleBackColor = true;
            btCrear.Click += btCrear_Click;
            // 
            // Menu
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(btCrear);
            Controls.Add(btUsuario);
            Name = "Menu";
            Text = "Menu";
            ResumeLayout(false);
        }

        #endregion

        private Button btUsuario;
        private Button btCrear;
    }
}