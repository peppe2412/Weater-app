import axios from "axios";

export async function getCoordinates(city) {
  try {
    const response = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
      params: {
        name: city,
        count: 1,
        language: "it",
        format: "json",
      },
    });

    if(!response.data.results || response.data.results.length === 0){
      throw new Error("Città non trovata!")
    }

    const {latitude, longitude, name, admin1} = response.data.results[0]
    return {latitude, longitude, name, region: admin1}
  } catch (error) {
    console.error("Errore: " + error);
    throw error;
  }
}

export async function getMeteoByCity(city) {
  try {
    const getData = await getCoordinates(city)
    console.log("Dati di: " + getData.name);
    

    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: getData.latitude,
        longitude: getData.longitude,
        current_weather: true,
        timezone: "auto",
      },
    });
    return {
      city: getData.name,
      weather: response.data.current_weather
    };
  } catch (error) {
    console.error("Errore: " + error);
    throw error
  }
}
