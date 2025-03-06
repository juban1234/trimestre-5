fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      history: [
        { role: 'user', parts: 'Hola, ¿cómo estás?' },
        { role: 'model', parts: '¡Hola! Estoy bien, gracias.' },
      ],
      question: '¿Qué tal tu día?'
    }),
  })
    .then(response => response.json())
    .then(data => console.log('Respuesta:', data))
    .catch(error => console.error('Error:', error));