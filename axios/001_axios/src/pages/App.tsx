import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Col, Form, FormControl, Row } from "react-bootstrap";
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

  const addPizza = () => {
    var blotty = new FormData(
      document.getElementById("addPizzaForm")! as HTMLFormElement,
    );
    const newPizza: Pizza = Object.fromEntries(
      blotty.entries(),
    ) as unknown as Pizza;
    apiClient
      .post("/pizzak", newPizza)
      .then(() => {
        setPizza([...pizza, newPizza]);
        toast.success("Sikeres hozzáadás!");
      })
      .catch(() =>
        toast.error("Hiba történt a pizza hozzáadásakor!", {
          autoClose: false,
        }),
      );
  };

  const putPizza = () => {
    const formData = new FormData(
      document.getElementById("putPizzaForm") as HTMLFormElement,
    );

    const pizzaData = {
      ...Object.fromEntries(formData.entries()),
      id: Number(formData.get("id")),
      ar: Number(formData.get("ar")),
    } as Pizza;

    const { id, ...pizzaWithoutId } = pizzaData;

    apiClient
      .put(`/pizzak/${id}`, pizzaWithoutId)
      .then(() => {
        setPizza((prevPizza) =>
          prevPizza.map((p) => (p.id === id ? pizzaData : p)),
        );

        toast.success("Sikeres módosítás!");
      })
      .catch((error) => {
        console.error("PUT hiba:", error.response?.data || error);

        toast.error("Hiba történt a pizza módosításakor!", {
          autoClose: false,
        });
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
      <hr />
      <div>
        <Row md={2} style={{ margin: "auto", padding: "20px" }}>
          <Col>
            <h2 style={{ textAlign: "center" }}>Pizza hozzáadása</h2>
            <Form
              id="addPizzaForm"
              style={{ width: "50%", margin: "auto", padding: "20px" }}
              onSubmit={() => {
                addPizza();
              }}
            >
              <FormControl
                name="nev"
                placeholder="Pizza neve"
                required
                type="text"
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <FormControl
                name="leiras"
                placeholder="Pizza leírása"
                required
                type="text"
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <FormControl
                name="ar"
                placeholder="Pizza ára"
                type="number"
                required
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <FormControl
                name="imageUrl"
                placeholder="Pizza kép URL"
                required
                type="text"
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <Button type="submit" variant="success" style={{ width: "100%" }}>
                Új pizza hozzáadása
              </Button>
            </Form>
          </Col>
          <Col>
            <h2 style={{ textAlign: "center" }}>Pizza módosítása</h2>
            <Form
              id="putPizzaForm"
              style={{ width: "50%", margin: "auto", padding: "20px" }}
              onSubmit={(e) => {
                e.preventDefault();
                putPizza();
              }}
            >
              <FormControl
                name="id"
                placeholder="Pizza azonosítója"
                required
                type="number"
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <FormControl
                name="nev"
                placeholder="Pizza neve"
                required
                type="text"
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <FormControl
                name="leiras"
                placeholder="Pizza leírása"
                required
                type="text"
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <FormControl
                name="ar"
                placeholder="Pizza ára"
                required
                type="number"
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <FormControl
                name="imageUrl"
                placeholder="Pizza kép URL"
                required
                type="text"
                style={{ marginBottom: "10px", width: "100%" }}
              />
              <Button type="submit" variant="success" style={{ width: "100%" }}>
                Pizza módosítása
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
