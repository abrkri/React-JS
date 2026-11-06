import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";

function EgyPizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    apiClient.get(`/pizzak/${id}`).then((response) => {
      console.log(response.data);
      setPizza(response.data);
    });
  }, [id]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{id}. pizza</h1>
      <Card style={{ margin: "auto", width: "700px" }}>
        <Card.Img
          variant="top"
          src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`}
        />
        <Card.Body>
          <Card.Title>{pizza?.nev}</Card.Title>
          <Card.Text>{pizza?.leiras}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <b>{pizza?.ar} Ft</b>
          <Button variant="success" style={{ float: "right" }}>
            Kosárba
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default EgyPizza;
