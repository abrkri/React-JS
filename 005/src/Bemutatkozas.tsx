type Props = {
  id?: number;
  nev: string;
  kor: number;
};

const Bemutatkozas = (props: Props) => {
  return (
    <>
      <h1>Azonosító: {props.id ?? <>N/A</>}</h1>
      {props.id ? <>Azonosító: {props.id}</> : <>N/A</>}
      <h1>Hello {props.nev}!</h1>
      <h2>Te {props.kor} éves vagy!</h2>
      {props.kor > 18 ? (
        <p style={{ color: "green" }}>Te nagykorú vagy!</p>
      ) : (
        <p style={{ color: "red" }}>Te fiatalkorú vagy!</p>
      )}
    </>
  );
};

export default Bemutatkozas;
