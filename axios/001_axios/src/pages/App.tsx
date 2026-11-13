import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

function App() {
  const [pizza, setPizza] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient.get("/pizzak").then((response) => {
      console.log(response.data);
      setPizza(response.data);
    });
  }, []);

  const deletePizza = (id: number | undefined) => {
    apiClient.delete(`/pizzak/${id}`).then(() => {
      setPizza(pizza.filter((v) => v.id != id));
      toast.success("Sikeres törlés!");
    });
  };
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
                  variant="danger"
                  style={{ float: "right" }}
                  onClick={() => {
                    deletePizza(p.id);
                  }}
                >
                  Törlés
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
