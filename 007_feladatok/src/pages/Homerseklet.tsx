import { useRef, useState } from "react";

const Homerseklet = () => {
  // const [celsius, setCelsius] = useState<number>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [farenheit, setFarenheit] = useState<string>();
  const [kelvin, setKelvin] = useState<string>();
  return (
    <>
      <h2>Hőmérséklet</h2>

      <input ref={inputRef} type="number" placeholder="36 C°" />
      <button
        onClick={() => {
          setFarenheit(`${Number(inputRef.current.value) * 1.8 + 32} F`);
          setKelvin(`${Number(inputRef.current.value) + 273.15} K`);
        }}
      >
        Átváltás
      </button>
      <p>{kelvin}</p>
      <p>{farenheit}</p>
    </>
  );
};

export default Homerseklet;
