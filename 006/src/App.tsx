import "./App.css";

function App() {
  const submit = () => {
    alert("Megnyomva 3!");
  };

  const submit2 = (szoveg: string) => {
    alert("Megnyomva 5!");
  };

  return (
    <>
      <h1>Csaocsaocsao</h1>

      <button onClick={() => alert("Megnyomva 1!")}>Nyomj meg 1</button>
      <button
        onClick={() => {
          alert("Megnyomva 2!");
        }}
      >
        Nyomj meg 2
      </button>
      <button onClick={() => submit()}>Nyomj meg 3</button>
      <button onClick={submit}>Nyomj meg 4</button>
      <button onClick={() => submit2("Megnyomva 5!")}>Nyomj meg 5</button>
    </>
  );
}

export default App;
