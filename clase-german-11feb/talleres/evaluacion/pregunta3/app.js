// Función para medir el tiempo de respuesta de una API
async function medirVelocidadApi(url, nombreApi) {
    const startTime = performance.now(); // Registrar el tiempo de inicio
  
    try {
      const response = await fetch(url);  // Hacer la solicitud
      await response.json();  // Esperar a que se convierta a JSON (no usamos los datos en este caso, solo medimos el tiempo)
  
      const endTime = performance.now();  // Registrar el tiempo de fin
      const timeTaken = endTime - startTime;  // Calcular el tiempo de respuesta en milisegundos
  
      console.log(`${nombreApi} - Tiempo de respuesta: ${timeTaken.toFixed(2)} ms`);
  
      return {
        api: nombreApi,
        tiempo: timeTaken,
        url: url  // Agregar la URL de la API para poder usarla luego
      };
    } catch (error) {
      console.error(`${nombreApi} - Error al obtener los datos:`, error);
      return {
        api: nombreApi,
        tiempo: Infinity,  // Si hubo un error, el tiempo se considera infinito
        url: null
      };
    }
  }
  



  // Función para obtener los datos del clima de la API más rápida
  async function obtenerClimaDeLaApiMasRapida() {
    const apis = [
      { url: 'https://wttr.in/Medellín?format=j1', nombre: 'wttr.in' },
    //   { url: 'https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=true', nombre: 'WeatherAPI' },
    //   { url: 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=-75.56359', nombre: 'OpenWeather' }
    ];
  
    const resultados = [];
  
    // Hacemos la solicitud a todas las APIs
    for (const api of apis) {
      const resultado = await medirVelocidadApi(api.url, api.nombre);
      resultados.push(resultado);
    }
  
    // Encontramos la API más rápida
    const apiMasRapida = resultados.reduce((prev, curr) => (prev.tiempo < curr.tiempo ? prev : curr));
  
    console.log(`La API más rápida es: ${apiMasRapida.api} con un tiempo de ${apiMasRapida.tiempo.toFixed(2)} ms`);
  
    // Si la API más rápida tiene una URL válida, obtenemos los datos
    if (apiMasRapida.url) {
      // Llamamos a la API más rápida y obtenemos los datos del clima
      const response = await fetch(apiMasRapida.url);
      const data = await response.json();
  
      // Procesamos y mostramos los datos
      mostrarClima(data, apiMasRapida.api);
    } else {
      document.getElementById('resultado').innerHTML = 'Error: No se pudo obtener información de ninguna API.';
    }
  }
  






  // Función para mostrar el clima en la página
  function mostrarClima(data, nombreApi) {
    let temperatura, humedad, descripcionClima, velocidadViento;
  
    if (nombreApi === 'wttr.in') {
      // Datos de wttr.in
      const currentWeather = data.current_condition[0];
      temperatura = currentWeather.temp_C;
      humedad = currentWeather.humidity;
      descripcionClima = currentWeather.weatherDesc[0].value;
      velocidadViento = currentWeather.windspeedKmph;
    } else if (nombreApi === 'WeatherAPI') {
      // Datos de WeatherAPI
      const currentWeather = data.current;
      temperatura = currentWeather.temp_c;
      humedad = currentWeather.humidity;
      descripcionClima = currentWeather.condition.text;
      velocidadViento = currentWeather.wind_kph;
    } else if (nombreApi === 'OpenWeather') {
      // Datos de OpenWeather
      const currentWeather = data.main;
      temperatura = currentWeather.temp;
      humedad = currentWeather.humidity;
      descripcionClima = data.weather[0].description;
      velocidadViento = data.wind.speed;
    }
  
    // Mostrar los datos en la página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <p><strong>API más rápida:</strong> ${nombreApi}</p>
      <p><strong>Temperatura:</strong> ${temperatura}°C</p>
      <p><strong>Humedad:</strong> ${humedad}%</p>
      <p><strong>Condición del Clima:</strong> ${descripcionClima}</p>
      <p><strong>Velocidad del Viento:</strong> ${velocidadViento} km/h</p>
    `;
  }
  
  // Llamamos a la función para obtener y mostrar el clima de la API más rápida
  document.addEventListener('DOMContentLoaded', obtenerClimaDeLaApiMasRapida);
  