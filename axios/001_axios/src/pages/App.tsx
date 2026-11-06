import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Col, Row } from "react-bootstrap";

function App() {
  const [pizza, setPizza] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient.get("/pizzak").then((response) => {
      console.log(response.data);
      setPizza(response.data);
    });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>huu de ehes vagyok</h1>
      <hr />
      <Row md={4} style={{ margin: "auto", padding: "20px" }}>
        {pizza.map((p) => (
          <Col style={{ marginBottom: "20px" }}>
            <Card>
              <Card.Img
                variant="top"
                src={`${BACKEND_URL}/kepek/${p.imageUrl}`}
              />
              <Card.Body style={{ height: "150px" }}>
                <Card.Title>{p.nev}</Card.Title>
                <Card.Text>{p.leiras}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <b>{p.ar} Ft</b>
                <Button
                  variant="success"
                  style={{ float: "right" }}
                  onClick={() => {
                    alert("hat ez nincs megcsinalva ocsipok");
                  }}
                >
                  Kosárba
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default App;
