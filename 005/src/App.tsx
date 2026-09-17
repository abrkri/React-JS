import "./App.css";
import Bemutatkozas from "./Bemutatkozas";

// https://prod.liveshare.vsengsaas.visualstudio.com/join?AABBE7F289DB297269984066F4D3A0270567

function App() {
  const id = 15;
  const nev = "Lucsok Péter Miklós";
  const kor = 67;

  return (
    <>
      <Bemutatkozas id={id} nev={nev} kor={kor} />
    </>
  );
}

export default App;
