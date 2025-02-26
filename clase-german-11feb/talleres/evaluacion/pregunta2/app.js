function llamarGemini(prompt) {
    const API_KEY = 'AIzaSyDV7uAe2ZvVmlb4JX1YFzOkwcTN_akVfxY';
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
  
    return fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt }
          ]
        }]
      })
    })
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then(datos => {
      const textoGenerado = datos.candidates[0].content.parts[0].text;
      
      console.log(textoGenerado);
      return textoGenerado;
    })
    .catch(error => {
      console.error('Error al llamar a la API de Gemini:', error);
    });
  }


  const texto1 = new Promise((resolve) => {
    resolve(llamarGemini(  ` puedes resumirme este texto :
      Comparativa entre diseño  de arquitectura  y diseño de softwareDiseño de Arquitectura: 
      Se enfoca en la estructura global del Sistema; busca que el sistema sea escalable, seguro y mantenible a largo plazo.
       Su objetivo es asegurar que el sistema crezca y evolucione sin problemas.Diseño de Software: Se centra en cómo organizar
        el código dentro de la arquitectura, utiliza patrones de diseño y asegura que el código sea modular, reusable y fácil de mantener.
         Se preocupa por detalles como legibilidad, mantenibilidad y eficiencia del código.
`))
  })

  const texto2 = new Promise((resolve) => {
    resolve(llamarGemini(`puedes resumirme este texto :
      El sobre, amarillento con el paso del tiempo, yacía olvidado en un rincón del desván.  
  Dentro, una letra cursiva, apenas legible, contaba una historia de amores perdidos y sueños rotos.  
  Una historia silenciada, esperando ser descubierta.`))
  }) 

  const texto3 = new Promise((resolve) => {
    resolve(llamarGemini( `puedes resumirme este texto :
      El viento salado azotaba su rostro mientras caminaba por la playa.  
  El sonido de las olas rompiendo en la orilla era un constante susurro. 
  El sabor del mar, intenso y fresco, permanecía en sus labios, un recuerdo imborrable del día.`))
  }) 


  Promise.all([texto1,texto2,texto3])    
  .then(respuesta => {
    if (respuesta) {
    }
  });


