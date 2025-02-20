const promesa3 = () => {
    return fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=-75.56359", {
      method: "GET",
      headers: {
        "User-Agent": "clima medellin/1.0 (tuemail@dominio.com)" // Este encabezado es requerido
      }
    })
    .then((response) => {
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error("Error en la solicitud a MET.no");
      }
      return response.json();
    })
    .then((data) => {
      // Acceder a la primera medición de la respuesta para obtener el estado del clima
      const currentWeather = data.properties.timeseries[0].data.instant.details;
  
      // Extraer un valor que sea útil para describir el clima (por ejemplo, temperature, weatherCode, etc.)
      // Si hay un "weatherCode" en la respuesta, lo usaremos para determinar el estado del clima
      const weatherCode = currentWeather.weatherCode;
  
      

      let weatherDescription = "";
  

      if (weatherCode >= 0 && weatherCode <= 3) {
        weatherDescription = "El clima está soleado";
      } else if (weatherCode >= 4 && weatherCode <= 7) {
        weatherDescription = "El clima está parcialmente nublado";
      } else if (weatherCode >= 8 && weatherCode <= 11) {
        weatherDescription = "El clima está nublado";
      } else if (weatherCode >= 12 && weatherCode <= 16) {
        weatherDescription = "Está lloviendo";
      } else if (weatherCode >= 17 && weatherCode <= 18) {
        weatherDescription = "Hay tormenta o lluvia fuerte";
      } else {
        weatherDescription = "El clima es incierto";
      }
  
      return weatherDescription;
    })
    .catch((error) => {
      console.error("Hubo un problema con la solicitud a MET.no: ", error);
    });
  };

  
Promise.race([promesa3()]).then((resultado) => {
    console.log( "la respuesta mas rapida del clima de medellin es ", resultado); 
    })
    .catch((error) => {
    console.error(error);
})
