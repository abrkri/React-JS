import "./App.css";

function App() {
  return (
    <>
      <h1>Csaocsaocsao</h1>

      <button onClick={() => alert("Megnyomva 1!")}>Nyomj meg</button>
      <button
        onClick={() => {
          alert("Megnyomva 2!");
        }}
      >
        Nyomj meg
      </button>
    </>
  );
}

export default App;
