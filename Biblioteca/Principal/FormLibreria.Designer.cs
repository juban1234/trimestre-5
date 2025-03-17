namespace Principal
{
    partial class FormLibreria
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
            SuspendLayout();
            // 
            // btUsuario
            // 
            btUsuario.Font = new Font("Segoe UI", 14.25F, FontStyle.Regular, GraphicsUnit.Point, 0);
            btUsuario.Location = new Point(52, 79);
            btUsuario.Name = "btUsuario";
            btUsuario.Size = new Size(91, 48);
            btUsuario.TabIndex = 0;
            btUsuario.Text = "usuario";
            btUsuario.UseVisualStyleBackColor = true;
            btUsuario.Click += btUsuario_Click;
            // 
            // FormLibreria
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(btUsuario);
            Name = "FormLibreria";
            Text = "FormLibreria";
            ResumeLayout(false);
        }

        #endregion

        private Button btUsuario;
    }
}