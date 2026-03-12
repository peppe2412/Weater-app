import { useState, useEffect } from "react";
import { getMeteoByCity } from "./api/openmeteoApi";
import Header from "./components/Header/Header";
// import Heading from "./components/Heading/Heading";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  const loadMeteoSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const getData = await getMeteoByCity(city);
      setMeteo(getData);
      setCity("");
    } catch (error) {
      console.error("Errore: " + error);
    } finally {
      setLoading(false);
    }
  };
  // loadMeteoSearch();
  // }, []);

  if (loading) return <span>Carimento in corso</span>;

  return (
    <>
      <Header />
      {/* {meteo ? <h1>{meteo.temperature}</h1> : <h1>Caricamento in corso....</h1>} */}

      <main>
        {/* <Heading /> */}
        <section className="heading-section">
          <h1>How's the sky looking today?</h1>
          <div className="input-container">
            <object
              className="icon-search"
              data="./assets/images/icon-search.svg"
              type="image/svg+xml"
            >
              Icon search
            </object>
            <form method="post" onSubmit={loadMeteoSearch}>
              <input
                onChange={(e) => setCity(e.target.value)}
                name="searchMeteo"
                type="text"
                value={city}
                placeholder="Search for a place..."
              />
              <button type="submit" className="button-search">
                Search
              </button>
            </form>
          </div>
        </section>

        <div>
          {meteo &&
            !loading &&(
              <>
                <p>{meteo.city}</p>
                <p>{meteo.weather.temperature} C°</p>
              </>
            )}
        </div>
      </main>
    </>
  );
}

export default App;
