import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { getMeteo } from "./api/openmeteoApi";

function App() {
  // const [count, setCount] = useState(0)
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

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
