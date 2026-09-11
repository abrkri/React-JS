import "./App.css";
import type { Ember } from "./types/Ember";

function App() {
  const emberek: Array<Ember> = [
    { nev: "John Doe", kor: 30, varos: "New York" },
    { nev: "Jane Smith", kor: 25, varos: "Los Angeles" },
    { nev: "Alice Johnson", kor: 28, varos: "Chicago" },
  ];

  const generateRow = (e: Ember) => {
    return (
      <tr>
        <td>{e.nev}</td>
        <td>{e.kor}</td>
        <td>{e.varos}</td>
      </tr>
    );
  };

  emberek.push({ nev: "Szekeres Ádám", kor: 19, varos: "Makó" } as Ember);

  const nev: string = "Kristóf";

  return (
    <>
      <h1>Csaocsao</h1>
      <p>Az én nevem {nev} asszem</p>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Kor</th>
            <th>Város</th>
          </tr>
        </thead>
        <tbody>{emberek.map((i) => generateRow(i))}</tbody>
      </table>
    </>
  );
}

export default App;
