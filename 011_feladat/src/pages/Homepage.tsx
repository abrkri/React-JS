import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { pizzak } from "../data/Pizza";
import { useRef, useState } from "react";
import type { Pizza } from "../types/Pizza";

const Homepage = () => {
  const pizzaHozzaadas = () => {
    const ujpizza: Pizza = {
      nev: pnevRef.current?.value,
      leiras: pleirRef.current?.value,
      ar: Number(parRef.current?.value),
      img: pimgRef.current?.value,
    };
    setOsszPizza([...osszPizza, ujpizza]);
  };

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
                <Card.Footer style={{ height: 60, fontWeight: "bold" }}>
                  {p.ar} Ft{" "}
                  <Button
                    variant="danger"
                    style={{ float: "right" }}
                    onClick={() => {
                      const ujPizzaLista = osszPizza.filter(
                        (_, i) => i != osszPizza.indexOf(p),
                      );
                      setOsszPizza(ujPizzaLista);
                    }}
                  >
                    Törlés
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
        ;
      </Row>
      <hr />

      <div>
        <h2 style={{ textAlign: "center" }}>Pizza hozzáadása</h2>
        <hr />

        <Form
          style={{ width: "80%", margin: "auto" }}
          onSubmit={(e) => {
            e.preventDefault();
            pizzaHozzaadas();
          }}
        >
          <Form.Control
            style={{ margin: "10px" }}
            type="text"
            placeholder="Pizza neve"
            ref={pnevRef}
            required
          />
          <Form.Control
            style={{ margin: "10px" }}
            type="text"
            placeholder="Pizza leírása"
            ref={pleirRef}
            required
          />
          <Form.Control
            style={{ margin: "10px" }}
            type="number"
            placeholder="Pizza ára"
            ref={parRef}
            min={0}
            required
          />
          <Form.Control
            style={{ margin: "10px" }}
            type="text"
            placeholder="Pizza képe"
            ref={pimgRef}
            required
          />
          <Button type="submit" style={{ margin: "10px" }} variant="success">
            Hozzáadás
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Homepage;
