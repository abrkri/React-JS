import { useState } from "react";

const Homerseklet = () => {
    const [cels, setCels] = useState<number>(0);
    const [valasztott, setValasztott] = useState<string>("Fahrenheit");
    const [eredmeny, setEredmeny] = useState<string>("");
  return (<>
    <h1>Hőmérséklet átváltó</h1>
    <input
      onChange={(e) => setCels(Number(e.target.value))}
      type="number" 
      placeholder= "67"
      />
      <select onChange={(e) => setValasztott(e.target.value)} defaultValue="Fahrenheit">
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <button onClick={() => {
        if (valasztott === "Fahrenheit") {
          setEredmeny(`Eredmény: ${(cels * 1.8) + 32} °F`);
        } else if (valasztott === "Kelvin") {
          setEredmeny(`Eredmény: ${cels + 273.15} K`);
        }
      }}>Átváltás</button>
      <p>{eredmeny}</p>
  </>);
}
export default Homerseklet;