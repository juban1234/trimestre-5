
// Crear una app que muestre el clima de Medellín lo más rápido posible. 
// Para esto use dos o tres apis externas para consultar por el clima 
// de Medellín y use Promise.race



//api 1

fetch('https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=true')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    })

//api 2

fetch('https://wttr.in/Medellín?format=j1')
    .then(response => response.json())
    .then(data => {

        const currentWeather = data.current_condition[0];  
        const temperature = currentWeather.temp_C;  
        const humidity = currentWeather.humidity;  
        const weatherDesc = currentWeather.weatherDesc[0].value;  
        const windSpeed = currentWeather.windspeedKmph;  

        console.log(`La temperatura en Medellín es ${temperature}°C`);
        console.log(`Humedad: ${humidity}%`);
        console.log(`Condición del clima: ${weatherDesc}`);
        console.log(`Velocidad del viento: ${windSpeed} km/h`);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });


// //api 3
fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=-75.56359')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });


