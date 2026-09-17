import "./App.css";
import Bemutatkozas from "./Bemutatkozas";

// https://prod.liveshare.vsengsaas.visualstudio.com/join?AABBE7F289DB297269984066F4D3A0270567

function App() {
  const kor = 67;

  return (
    <>
      <h1>lucsok</h1>
      <Bemutatkozas nev={"Lucsok Péter Mihály"} kor={kor} />
    </>
  );
}

export default App;
