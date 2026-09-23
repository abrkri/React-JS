import { useState } from "react";

const Penzszamito = () => {
  const [f, useF] = useState<number>(0);
  const [pnem, usePnem] = useState<string>("euro");
  const [eredmeny, useEredmeny] = useState<string>("");
  return (
    <>
      <input
        onChange={(e) => useF(Number(e.target.value))}
        type="number"
        placeholder="67"
      />
      <select onChange={(e) => usePnem(e.target.value)}>
        <option selected value="euro">
          Euró
        </option>
        <option value="dollar">Dollár</option>
      </select>
      <button
        onClick={() => {
          switch (pnem) {
            case "euro":
              useEredmeny(`${f}Ft = ${(f / 380).toFixed(2)}€`);
              break;
            case "dollar":
              useEredmeny(`${f}Ft = ${(f / 360).toFixed(2)}$`);
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

export default Penzszamito;
