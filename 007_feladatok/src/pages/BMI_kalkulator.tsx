import { useState } from "react";

const BMI = () => {
  const [testsuly, setTestsuly] = useState<number>(0);
  const [magassag, setMagassag] = useState<number>(0);
  const [bmiIndex, setBmiIndex] = useState<string>("");
  const [szoveg, setSzoveg] = useState<string>("");
  return (
    <>
      <h2>BMI kalkulátor</h2>
      <input
        onChange={(e) => setTestsuly(Number(e.target.value))}
        type="number"
        placeholder="70"
      />
      <input
        onChange={(e) => setMagassag(Number(e.target.value))}
        type="number"
        placeholder="178"
      />
      <button
        onClick={() => {
          const er = testsuly / (magassag / 100) ** 2;
          if (er < 16) {
            setSzoveg("Az állapotod: Súlyos soványság");
          } else if (er >= 16 && er < 17) {
            setSzoveg("Az állapotod: Mérsékelt soványság");
          } else if (er >= 17 && er < 18.5) {
            setSzoveg("Az állapotod: Enyhe soványság");
          } else if (er >= 18.5 && er < 25) {
            setSzoveg("Az állapotod: Normál testsúly");
          } else if (er >= 25 && er < 30) {
            setSzoveg("Az állapotod: Túlsúlyos");
          } else if (er >= 30 && er < 35) {
            setSzoveg("Az állapotod: Elhízott (I. fokú)");
          } else if (er >= 35 && er < 40) {
            setSzoveg("Az állapotod: Elhízott (II. fokú)");
          } else if (er >= 40) {
            setSzoveg("Az állapotod: Súlyosan elhízott (III. fokú)");
          } else {
            setSzoveg("Az állapotod: Hibás adat!");
          }
          setBmiIndex(`(BMI: ${er.toFixed(2)})`);
        }}
      >
        Számítás
      </button>
      <p>{szoveg}</p>
      <p>{bmiIndex}</p>
    </>
  );
};

export default BMI;
