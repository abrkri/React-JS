import { useRef, useState } from "react";

const Penzszamito = () => {
  // const [f, useF] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const pnemRef = useRef<HTMLSelectElement>(null);
  const [eredmeny, useEredmeny] = useState<string>("");
  return (
    <>
      <input ref={inputRef} type="number" placeholder="67" />
      <select ref={pnemRef}>
        <option value="euro">Euró</option>
        <option value="dollar">Dollár</option>
      </select>
      <button
        onClick={() => {
          switch (pnemRef.current?.value) {
            case "euro":
              useEredmeny(
                `${inputRef.current?.value}Ft = ${(Number(inputRef.current?.value) / 380).toFixed(2)}€`,
              );
              break;
            case "dollar":
              useEredmeny(
                `${inputRef.current?.value}Ft = ${(Number(inputRef.current?.value) / 360).toFixed(2)}$`,
              );
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
