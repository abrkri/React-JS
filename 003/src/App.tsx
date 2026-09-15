import "./App.css";
import type { Ember } from "./types/Ember";

function App() {
  const emberkek: Array<Ember> = [
    { nev: "Lucsok Péter", kor: 67, nem: "Férfi", el: true },
    { nev: "Mocsok Mihály", kor: 420, nem: "Férfi", el: false },
    { nev: "Plocsogó Pál", kor: 1, nem: "Férfi", el: true },
    { nev: "Flotyinczky Fatima", kor: 16, nem: "Nő", el: true },
  ];
  const generateRow = (e: Ember) => {
    return (
      <tr>
        <td>{e.nev}</td>
        <td>{e.kor}</td>
        <td>{e.nem}</td>
        <td>{e.el ? "Igen" : "Nem"}</td>
      </tr>
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Név</td>
            <td>Kor</td>
            <td>Nem</td>
            <td>Él</td>
          </tr>
        </thead>
        <tbody>{emberkek.map((i) => generateRow(i))}</tbody>
      </table>
    </>
  );
}

export default App;
