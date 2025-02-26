const nodemailer = require('nodemailer');

// Crear un transportador usando el servicio de Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jubanlivennatalurver@gmail.com', // Tu correo Gmail
    pass: 'sydt kmaw egid dpxf' // Contraseña de aplicación generada en caso de tener 2FA activada
  }
});

// Función para enviar correos
const sendMassEmail = (emails) => {
  emails.forEach(email => {
    const mailOptions = {
      from: 'gjuanesteban413@gmail.com',  // El remitente
      to: email,                      // Destinatario
      subject: 'Asunto del correo',   // Asunto del correo
      text: 'hola como estas',  // Cuerpo del correo
      html: '<b>Este es el cuerpo del hola como esrta HTML</b>'  // Si deseas enviar en HTML
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`Error al enviar correo a ${email}:`, error);
      } else {
        console.log(`Correo enviado a ${email}: ${info.response}`);
      }
    });
  });
};

// Lista de correos a los que se enviarán los mensajes
const emailsList = ['jubanlivennatalurver@gmail.com', 'jubanlivennatalurver@gmail.com'];
sendMassEmail(emailsList);
