namespace Principal
{
    partial class FormUsuario
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
            lbUsuario = new Label();
            SuspendLayout();
            // 
            // btUsuario
            // 
            btUsuario.Location = new Point(273, 94);
            btUsuario.Name = "btUsuario";
            btUsuario.Size = new Size(154, 67);
            btUsuario.TabIndex = 0;
            btUsuario.Text = "Ver usuario";
            btUsuario.UseVisualStyleBackColor = true;
            btUsuario.Click += btUsuario_Click;
            // 
            // lbUsuario
            // 
            lbUsuario.AutoSize = true;
            lbUsuario.Location = new Point(294, 237);
            lbUsuario.Name = "lbUsuario";
            lbUsuario.Size = new Size(38, 15);
            lbUsuario.TabIndex = 1;
            lbUsuario.Text = "label1";
            // 
            // FormUsuario
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(lbUsuario);
            Controls.Add(btUsuario);
            Name = "FormUsuario";
            Text = "FormUsuario";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button btUsuario;
        private Label lbUsuario;
    }
}