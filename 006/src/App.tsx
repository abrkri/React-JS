import { useState } from "react";
import "./App.css";
import Gomb from "./Gomb";

function App() {
  // console.log(new Date());
  const [szoveg, setSzoveg] = useState<string>("");
  const [eredmeny, setEredmeny] = useState<string>("");

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
      <button
        onClick={() => {
          setEredmeny(`A megadott szöveg: ${szoveg}`);
        }}
      >
        Print
      </button>
    </>
  );
}

export default App;
