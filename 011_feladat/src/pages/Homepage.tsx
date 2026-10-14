import { Button, Card, Col, Row } from "react-bootstrap";
import { pizzak } from "../data/Pizza";
import { useRef, useState } from "react";
import type { Pizza } from "../types/Pizza";

const Homepage = () => {
  const pnevRef = useRef<HTMLInputElement>(null);
  const pleirRef = useRef<HTMLInputElement>(null);
  const parRef = useRef<HTMLInputElement>(null);
  const pimgRef = useRef<HTMLInputElement>(null);
  const [osszPizza, setOsszPizza] = useState<Array<Pizza>>(pizzak);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pizzák</h1>
      <hr />
      <Row md={4} xs={1} sm={2} xl={4}>
        {osszPizza.map((p) => (
          <Col key={p.nev}>
            <Card style={{ margin: "auto", width: 400, marginBottom: 20 }}>
              <Card.Img src={p.img} height={300} />
              <Card.Body>
                <Card.Title>{p.nev}</Card.Title>
                <Card.Text>{p.leiras}</Card.Text>
                <Card.Footer>
                  {p.ar} Ft{" "}
                  {/* <Button
                    variant="success"
                    style={{ position: "absolute", right: "15%" }}
                  >
                    Kosárba
                  </Button> */}
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />

      <div style={{ margin: "auto" }}>
        <h2 style={{ textAlign: "center" }}>Pizza hozzáadása</h2>
        <hr />
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="Pizza neve"
          ref={pnevRef}
        />
        <br />
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="Pizza leírása"
          ref={pleirRef}
        />
        <br />
        <input
          style={{ margin: "10px" }}
          type="number"
          placeholder="Pizza ára"
          ref={parRef}
          min={0}
        />
        <br />
        <input
          style={{ margin: "10px" }}
          type="text"
          placeholder="Pizza képe"
          ref={pimgRef}
        />
        <br />
        <Button
          style={{ margin: "10px" }}
          variant="success"
          onClick={() => {
            const ujpizza: Pizza = {
              nev: pnevRef.current?.value,
              leiras: pleirRef.current?.value,
              ar: Number(parRef.current?.value),
              img: pimgRef.current?.value,
            };
            setOsszPizza([...osszPizza, ujpizza]);
          }}
        >
          Hozzáadás
        </Button>
      </div>
    </>
  );
};

export default Homepage;
