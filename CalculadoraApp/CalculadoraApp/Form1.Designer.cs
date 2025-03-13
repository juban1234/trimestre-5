namespace CalculadoraApp
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            label1 = new Label();
            button1 = new Button();
            button3 = new Button();
            button5 = new Button();
            button0 = new Button();
            button9 = new Button();
            button6 = new Button();
            button7 = new Button();
            button8 = new Button();
            button4 = new Button();
            button2 = new Button();
            buttonResultado = new Button();
            buttonCe = new Button();
            resta = new Button();
            multiplicacion = new Button();
            suma = new Button();
            divicion = new Button();
            resultados = new Label();
            label2 = new Label();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Segoe UI", 24F, FontStyle.Regular, GraphicsUnit.Point, 0);
            label1.Location = new Point(12, 9);
            label1.Name = "label1";
            label1.Size = new Size(181, 45);
            label1.TabIndex = 3;
            label1.Text = "calculadora";
            // 
            // button1
            // 
            button1.BackColor = Color.LightSeaGreen;
            button1.Location = new Point(17, 163);
            button1.Name = "button1";
            button1.Size = new Size(53, 41);
            button1.TabIndex = 4;
            button1.Text = "1";
            button1.UseVisualStyleBackColor = false;
            button1.Click += button1_Click;
            // 
            // button3
            // 
            button3.BackColor = Color.LightSeaGreen;
            button3.Location = new Point(135, 163);
            button3.Name = "button3";
            button3.Size = new Size(53, 41);
            button3.TabIndex = 5;
            button3.Text = "3";
            button3.UseVisualStyleBackColor = false;
            button3.Click += button3_Click;
            // 
            // button5
            // 
            button5.BackColor = Color.LightSeaGreen;
            button5.Location = new Point(76, 210);
            button5.Name = "button5";
            button5.Size = new Size(53, 41);
            button5.TabIndex = 6;
            button5.Text = "5";
            button5.UseVisualStyleBackColor = false;
            button5.Click += button5_Click;
            // 
            // button0
            // 
            button0.BackColor = Color.LightSeaGreen;
            button0.Location = new Point(76, 304);
            button0.Name = "button0";
            button0.Size = new Size(53, 41);
            button0.TabIndex = 7;
            button0.Text = "0";
            button0.UseVisualStyleBackColor = false;
            button0.Click += button0_Click;
            // 
            // button9
            // 
            button9.BackColor = Color.LightSeaGreen;
            button9.Location = new Point(135, 257);
            button9.Name = "button9";
            button9.Size = new Size(53, 41);
            button9.TabIndex = 8;
            button9.Text = "9";
            button9.UseVisualStyleBackColor = false;
            button9.Click += button9_Click;
            // 
            // button6
            // 
            button6.BackColor = Color.LightSeaGreen;
            button6.Location = new Point(135, 210);
            button6.Name = "button6";
            button6.Size = new Size(53, 41);
            button6.TabIndex = 9;
            button6.Text = "6";
            button6.UseVisualStyleBackColor = false;
            button6.Click += button6_Click;
            // 
            // button7
            // 
            button7.BackColor = Color.LightSeaGreen;
            button7.Location = new Point(17, 257);
            button7.Name = "button7";
            button7.Size = new Size(53, 41);
            button7.TabIndex = 10;
            button7.Text = "7";
            button7.UseVisualStyleBackColor = false;
            button7.Click += button7_Click;
            // 
            // button8
            // 
            button8.BackColor = Color.LightSeaGreen;
            button8.Location = new Point(76, 257);
            button8.Name = "button8";
            button8.Size = new Size(53, 41);
            button8.TabIndex = 11;
            button8.Text = "8";
            button8.UseVisualStyleBackColor = false;
            button8.Click += button8_Click;
            // 
            // button4
            // 
            button4.BackColor = Color.LightSeaGreen;
            button4.Location = new Point(17, 210);
            button4.Name = "button4";
            button4.Size = new Size(53, 41);
            button4.TabIndex = 12;
            button4.Text = "4";
            button4.UseVisualStyleBackColor = false;
            button4.Click += button4_Click;
            // 
            // button2
            // 
            button2.BackColor = Color.LightSeaGreen;
            button2.Location = new Point(76, 163);
            button2.Name = "button2";
            button2.Size = new Size(53, 41);
            button2.TabIndex = 13;
            button2.Text = "2";
            button2.UseVisualStyleBackColor = false;
            button2.Click += button2_Click;
            // 
            // buttonResultado
            // 
            buttonResultado.BackColor = SystemColors.ActiveCaption;
            buttonResultado.Location = new Point(135, 304);
            buttonResultado.Name = "buttonResultado";
            buttonResultado.Size = new Size(53, 41);
            buttonResultado.TabIndex = 14;
            buttonResultado.Text = "=";
            buttonResultado.UseVisualStyleBackColor = false;
            buttonResultado.Click += buttonResultado_Click;
            // 
            // buttonCe
            // 
            buttonCe.Location = new Point(17, 304);
            buttonCe.Name = "buttonCe";
            buttonCe.Size = new Size(53, 41);
            buttonCe.TabIndex = 15;
            buttonCe.Text = "CE";
            buttonCe.UseVisualStyleBackColor = true;
            buttonCe.Click += buttonCe_Click;
            // 
            // resta
            // 
            resta.BackColor = SystemColors.ActiveCaption;
            resta.Location = new Point(194, 257);
            resta.Name = "resta";
            resta.Size = new Size(53, 41);
            resta.TabIndex = 16;
            resta.Text = "-";
            resta.UseVisualStyleBackColor = false;
            resta.Click += resta_Click;
            // 
            // multiplicacion
            // 
            multiplicacion.BackColor = SystemColors.ActiveCaption;
            multiplicacion.Location = new Point(194, 210);
            multiplicacion.Name = "multiplicacion";
            multiplicacion.Size = new Size(53, 41);
            multiplicacion.TabIndex = 16;
            multiplicacion.Text = "x";
            multiplicacion.UseVisualStyleBackColor = false;
            multiplicacion.Click += multiplicacion_Click;
            // 
            // suma
            // 
            suma.BackColor = SystemColors.ActiveCaption;
            suma.Location = new Point(194, 304);
            suma.Name = "suma";
            suma.Size = new Size(53, 41);
            suma.TabIndex = 17;
            suma.Text = "+";
            suma.UseVisualStyleBackColor = false;
            suma.Click += suma_Click;
            // 
            // divicion
            // 
            divicion.BackColor = SystemColors.ActiveCaption;
            divicion.Location = new Point(194, 163);
            divicion.Name = "divicion";
            divicion.Size = new Size(53, 41);
            divicion.TabIndex = 18;
            divicion.Text = "/";
            divicion.UseVisualStyleBackColor = false;
            divicion.Click += divicion_Click;
            // 
            // resultados
            // 
            resultados.AutoSize = true;
            resultados.BackColor = Color.Transparent;
            resultados.Font = new Font("Segoe UI", 21.75F, FontStyle.Regular, GraphicsUnit.Point, 0);
            resultados.Location = new Point(30, 83);
            resultados.Name = "resultados";
            resultados.Size = new Size(33, 40);
            resultados.TabIndex = 19;
            resultados.Text = "0";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(185, 72);
            label2.Name = "label2";
            label2.Size = new Size(0, 15);
            label2.TabIndex = 20;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(263, 358);
            Controls.Add(label2);
            Controls.Add(resultados);
            Controls.Add(divicion);
            Controls.Add(suma);
            Controls.Add(multiplicacion);
            Controls.Add(resta);
            Controls.Add(buttonCe);
            Controls.Add(buttonResultado);
            Controls.Add(button2);
            Controls.Add(button4);
            Controls.Add(button8);
            Controls.Add(button7);
            Controls.Add(button6);
            Controls.Add(button9);
            Controls.Add(button0);
            Controls.Add(button5);
            Controls.Add(button3);
            Controls.Add(button1);
            Controls.Add(label1);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label label1;
        private Button button1;
        private Button button3;
        private Button button5;
        private Button button0;
        private Button button9;
        private Button button6;
        private Button button7;
        private Button button8;
        private Button button4;
        private Button button2;
        private Button buttonResultado;
        private Button buttonCe;
        private Button resta;
        private Button multiplicacion;
        private Button suma;
        private Button divicion;
        private Label resultados;
        private Label label2;
    }
}
