import { useRef, useState } from "react";

const Szamologep = () => {
  // const [elsoSzam, setElsoSzam] = useState<number>(0);
  const elsoRef = useRef<HTMLInputElement>(null);
  // const [masodikSzam, setMasodikSzam] = useState<number>(0);
  const masodikRef = useRef<HTMLInputElement>(null);
  const [valasztott, setValasztott] = useState<string>("+");
  const [eredmeny, setEredmeny] = useState<number>(0);
  return (
    <>
      <h2>Számológép</h2>

      <input ref={elsoRef} type="number" placeholder="2" />
      <select onChange={(e) => setValasztott(e.target.value)}>
        <option selected value="+">
          +
        </option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input ref={masodikRef} type="number" placeholder="3" />
      <button
        onClick={() => {
          switch (valasztott) {
            case "+":
              setEredmeny(
                Number(elsoRef.current.value) +
                  Number(masodikRef.current.value),
              );
              break;
            case "-":
              setEredmeny(
                Number(elsoRef.current.value) -
                  Number(masodikRef.current.value),
              );
              break;
            case "*":
              setEredmeny(
                Number(elsoRef.current.value) *
                  Number(masodikRef.current.value),
              );
              break;
            case "/":
              setEredmeny(
                Number(elsoRef.current.value) /
                  Number(masodikRef.current.value),
              );
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
