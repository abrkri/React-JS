import { useState } from "react";
import "../styles/cucc.css";

const Szamologep = () => {
  const [szam1, setSzam1] = useState<number>(0);
  const [szam2, setSzam2] = useState<number>(0);
  const [valasztott, setValasztott] = useState<string>("+");
  const [eredmeny, setEredmeny] = useState<string>("");
  return (
    <>
      <h1>Számológép</h1>
      <input
        onChange={(e) => setSzam1(Number(e.target.value))}
        type="number"
        placeholder="2"
      />
      <select onChange={(e) => setValasztott(e.target.value)} defaultValue="+">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        onChange={(e) => setSzam2(Number(e.target.value))}
        type="number"
        placeholder="3"
      />
      <button
        onClick={() => {
          switch (valasztott) {
            case "+":
              setEredmeny(`${szam1 + szam2}`);
              break;
            case "-":
              setEredmeny(`${szam1 - szam2}`);
              break;
            case "*":
              setEredmeny(`${szam1 * szam2}`);
              break;
            case "/":
              setEredmeny(`${(szam1 / szam2).toFixed(2)}`);
              break;
          }
        }}
      >
        Számít
      </button>
      <p>{eredmeny}</p>
    </>
  );
};

export default Szamologep;
