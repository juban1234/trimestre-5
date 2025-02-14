require('dotenv').config(); // Cargar las variables de entorno

const fetch = require('node-fetch'); // Necesitamos node-fetch para hacer las solicitudes HTTP

const API_KEY = process.env.API_KEY;  // Cargar la API Key desde el archivo .env
const MODEL_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// Función que hace la solicitud a la API para generar el resumen
async function generarResumen(texto) {
  const data = {
    contents: [{
      parts: [{
        text: `Summarize the following text: ${texto}`
      }]
    }]
  };

  try {
    // Hacer la solicitud a la API de Gemini
    const response = await fetch(MODEL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Procesar la respuesta JSON
    const result = await response.json();
    
    // Verificar si la estructura de la respuesta es la esperada
    if (result && result.contents && result.contents[0] && result.contents[0].parts[0].text) {
      return result.contents[0].parts[0].text;  // Regresa el texto del resumen
    } else {
      throw new Error('La respuesta de la API no tiene la estructura esperada');
    }
  } catch (error) {
    console.error('Error al generar resumen:', error);
    return null; // Regresar null si hubo un error
  }
}

// Función principal que procesa un conjunto de textos
async function procesarTextos(textos) {
  const tareas = textos.map(texto => generarResumen(texto)); // Genera un array de promesas

  // Esperamos que todas las tareas (resúmenes) se resuelvan
  const resúmenes = await Promise.all(tareas);

  // Imprimimos los resúmenes generados
  resúmenes.forEach((resumen, index) => {
    if (resumen) {
      console.log(`Resumen ${index + 1}:`, resumen);
    } else {
      console.log(`Resumen ${index + 1}: Error al generar el resumen`);
    }
  });
}

// Ejemplo de textos que se desean resumir
const textos = [
  "Artificial intelligence is a branch of computer science that deals with the creation of machines that can perform tasks that would normally require human intelligence. AI has many applications in areas such as robotics, language processing, and computer vision.",
  "Quantum computing is an area of study focused on the development of computers that use quantum bits, or qubits, to perform calculations. It is expected that quantum computers will be able to solve certain types of problems much faster than classical computers."
];

// Ejecutamos la función para procesar los textos
procesarTextos(textos);
