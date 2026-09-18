import { useState } from "react";

const Szamologep = () => {
  const [elsoSzam, setElsoSzam] = useState<number>(0);
  const [masodikSzam, setMasodikSzam] = useState<number>(0);
  const [valasztott, setValasztott] = useState<string>("");
  const [eredmeny, setEredmeny] = useState<number>(0);
  return (
    <>
      <h2>Számológép</h2>

      <input
        onChange={(e) => setElsoSzam(Number(e.target.value))}
        type="number"
        placeholder="2"
      />
      <select onChange={(e) => setValasztott(e.target.value)}>
        <option selected value="+">
          +
        </option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        onChange={(e) => setMasodikSzam(Number(e.target.value))}
        type="number"
        placeholder="3"
      />
      <button
        onClick={() => {
          switch (valasztott) {
            case "+":
              setEredmeny(elsoSzam + masodikSzam);
              break;
            case "-":
              setEredmeny(elsoSzam - masodikSzam);
              break;
            case "*":
              setEredmeny(elsoSzam * masodikSzam);
              break;
            case "/":
              setEredmeny(elsoSzam / masodikSzam);
              break;
            default:
              setEredmeny(0);
              break;
          }
        }}
      >
        Számítás
      </button>
      <p>Eredmény: {eredmeny}</p>
    </>
  );
};

export default Szamologep;
