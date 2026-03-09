import { useState, useEffect } from "react";
import './App.css'
import { getMeteo } from "./api/openmeteoApi";

function App() {
  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMeteo = async () => {
      try {
        setLoading(true);
        const getData = await getMeteo();
        setMeteo(getData.current_weather);
      } catch (error) {
        console.error("Errore: " + error);
      } finally {
        setLoading(false);
      }
    };
    loadMeteo();
  }, []);

  if (loading) return <span>Carimento in corso</span>;

  return (
    <>
      {meteo ? <h1>{meteo.temperature}</h1> : <h1>Caricamento in corso....</h1>}
    </>
  );
}

export default App;
