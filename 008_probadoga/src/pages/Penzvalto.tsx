import { useState } from "react";
import "../styles/cucc.css";

const Penzvalto = () => {
  const [huf, setHuf] = useState<number>(0);
  const [penznem, setPenznem] = useState<string>("euro");
  const [eredmeny, setEredmeny] = useState<string>("");
  return (
    <>
      <h1>Pénzváltó</h1>
      <input
        onChange={(e) => setHuf(Number(e.target.value))}
        type="number"
        placeholder="500"
      />
      <select onChange={(e) => setPenznem(e.target.value)} defaultValue="euro">
        <option value="euro">Euró</option>
        <option value="dollar">Dollár</option>
      </select>
      <button
        onClick={() => {
          switch (penznem) {
            case "euro":
              setEredmeny(`${huf}Ft = ${(huf / 360).toFixed(2)}€`);
              break;
            case "dollar":
              setEredmeny(`${huf}Ft = ${(huf / 330).toFixed(2)}$`);
              break;
          }
        }}
      >
        Átváltás
      </button>
      <p>{eredmeny}</p>
    </>
  );
};

export default Penzvalto;
