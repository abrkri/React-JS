import { useState } from "react";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState<number>();
  const [farenheit, setFarenheit] = useState<string>();
  const [kelvin, setKelvin] = useState<string>();
  return (
    <>
      <h1>Hőmérséklet</h1>

      <input
        onChange={(e) => setCelsius(Number(e.target.value))}
        type="number"
        placeholder="36 C°"
      />
      <button
        onClick={() => {
          setFarenheit(String(celsius * 1.8 + 32) + " F");
          setKelvin(String(celsius + 273.15) + " K");
        }}
      >
        Átváltás
      </button>
      <p>{kelvin}</p>
      <p>{farenheit}</p>
    </>
  );
}

export default App;
