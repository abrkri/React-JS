import { useState } from "react";
import "./App.css";
import Gomb from "./Gomb";

function App() {
  // console.log(new Date());
  const [szoveg, setSzoveg] = useState<string>("");
  const [eredmeny, setEredmeny] = useState<string>("");
  const [valasztott, setValasztott] = useState<string>("");

  return (
    <>
      {/* egy nagy lucsok egyenlore */}
      <Gomb />
      <h2>{eredmeny}</h2>
      <h2>{szoveg}</h2>

      <input
        onChange={(e) => setSzoveg(e.target.value)}
        type="text"
        placeholder="Írj be valamit..."
      />

      <select onChange={(e) => setValasztott(e.target.value)}>
        <option value="">Válassz egy opciót</option>
        <option value="Első opció">Válassz egy opciót</option>
        <option value="Második opció">Válassz egy opciót</option>
        <option value="Harmadik opció">Válassz egy opciót</option>
      </select>

      <button
        onClick={() => {
          setEredmeny(`A megadott szöveg: ${szoveg} | ${valasztott}`);
        }}
      >
        Print
      </button>
    </>
  );
}

export default App;
