const promesa1 = () => {
    return fetch("https://wttr.in/Medell%C3%ADn?format=j1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        // Extraemos la condición actual y la traducimos a algo más entendible
        const condition = data.current_condition[0].lang_es[0].value;
        return ` respuesta de la api "wttr.in": El clima en Medellín es: ${condition}`; // Mensaje claro
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud a wttr.in: ", error);
      });
  };
  
  const promesa2 = () => {
    return fetch("https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=true")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        const currentWeather = data.current_weather;
        const temperature = currentWeather.temperature;
        const weatherCode = currentWeather.weathercode;
  
        // Transformamos el código de clima en algo entendible
        let weatherDescription = '';
        switch (weatherCode) {
          case 0:
            weatherDescription = 'Soleado';
            break;
          case 1:
          case 2:
          case 3:
            weatherDescription = 'Parcialmente nublado';
            break;
          case 45:
          case 48:
            weatherDescription = 'Niebla';
            break;
          case 51:
          case 53:
          case 55:
            weatherDescription = 'Lluvia ligera';
            break;
          default:
            weatherDescription = 'Clima desconocido';
        }
  
        return ` respuesta de la api "Open-Meteo": La temperatura es de ${temperature}°C y el clima es: ${weatherDescription}`;
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud a Open-Meteo: ", error);
      });
  };
  
  const promesa3 = () => {
    return fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=-75.56359", {
      method: "GET",
      headers: {
        "User-Agent": "clima medellin/1.0 (tuemail@dominio.com)" // Este encabezado es requerido
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud a MET.no");
        }
        return response.json();
      })
      .then((data) => {

        const currentWeather = data.properties.timeseries[0].data.instant.details;
        const temperature = currentWeather.air_temperature;
        const weatherCode = currentWeather.weatherCode;
  
        let weatherDescription = "";
        if (weatherCode >= 0 && weatherCode <= 3) {
          weatherDescription = "Soleado";
        } else if (weatherCode >= 4 && weatherCode <= 7) {
          weatherDescription = "Parcialmente nublado";
        } else if (weatherCode >= 8 && weatherCode <= 11) {
          weatherDescription = "Nublado";
        } else {
          weatherDescription = "Clima desconocido";
        }
  
        return ` respuesta de la api "MET.no": La temperatura es de ${temperature}°C y el clima es: ${weatherDescription}`;
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud a MET.no: ", error);
      });
  };

  // Usamos Promise.race para obtener la respuesta más rápida de las 3 promesas
  Promise.race([promesa1(), promesa2(), promesa3()])
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error("Hubo un problema: ", error);
    });
  