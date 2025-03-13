namespace Principal
{
    partial class Usuario
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
            btVer = new Button();
            lbVerUsuario = new Label();
            SuspendLayout();
            // 
            // btVer
            // 
            btVer.Location = new Point(281, 32);
            btVer.Name = "btVer";
            btVer.Size = new Size(205, 89);
            btVer.TabIndex = 0;
            btVer.Text = "Ver Usuario";
            btVer.UseVisualStyleBackColor = true;
            btVer.Click += btVer_Click;
            // 
            // lbVerUsuario
            // 
            lbVerUsuario.AutoSize = true;
            lbVerUsuario.Location = new Point(281, 182);
            lbVerUsuario.Name = "lbVerUsuario";
            lbVerUsuario.Size = new Size(38, 15);
            lbVerUsuario.TabIndex = 1;
            lbVerUsuario.Text = "label1";
            // 
            // Usuario
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(lbVerUsuario);
            Controls.Add(btVer);
            Name = "Usuario";
            Text = "Usuario";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button btVer;
        private Label lbVerUsuario;
    }
}