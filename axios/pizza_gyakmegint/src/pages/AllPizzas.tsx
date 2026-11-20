import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const AllPizzas = () => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([]);
  useEffect(() => {
    apiClient.get("/pizzak").then((resp) => {
      setPizzas(resp.data);
    });
  }, []);

  const deletePizza = (id: number | undefined) => {
    apiClient
      .delete(`/pizzak/${id}`)
      .then(() => {
        setPizzas(pizzas.filter((pizza) => pizza.id !== id));
        toast.success("Pizza törölve!");
      })
      .catch(() => {
        toast.error("Hiba történt a pizza törlésekor!", { autoClose: false });
      });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <h1 style={{ float: "left", marginLeft: "20px" }}>Összes Pizza</h1>
        <a href="/post">
          <Button
            variant="primary"
            style={{ float: "right", marginRight: "20px" }}
          >
            Új Pizza
          </Button>
        </a>
      </div>
      <hr />
      <Row md={5} style={{ margin: "auto" }}>
        {pizzas.map((pizza) => (
          <Col style={{ marginBottom: "20px" }} key={pizza.id}>
            <Card>
              <Card.Img src={`${BACKEND_URL}/kepek/${pizza.imageUrl}`} />
              <Card.Body style={{ height: "150px", overflow: "hidden" }}>
                <Card.Title>{pizza.nev}</Card.Title>
                <Card.Text>{pizza.leiras}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {pizza.ar} Ft
                <Button
                  variant="danger"
                  style={{ float: "right" }}
                  onClick={() => deletePizza(pizza.id)}
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
};
export default AllPizzas;
