import axios from "axios";

export async function getMeteo() {
  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        longitude: 12.55,
        latitude: 38.02,
        current_weather: true,
        timezone: "auto",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Errore: " + error);
    throw error
  }
}
