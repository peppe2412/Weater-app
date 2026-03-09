import { useState, useEffect } from "react";
import { getMeteo } from "./api/openmeteoApi";
import Header from "./components/Header/Header";
// import Heading from "./components/Heading/Heading";
import "./App.css";

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
            <input
              name="searchMeteo"
              type="text"
              placeholder="Search for a place..."
            />
            <button className="button-search">Search</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
