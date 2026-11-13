import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Champ } from "../types/C";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Carousel, CarouselItem } from "react-bootstrap";

const OneC = () => {
  const { id } = useParams();

  const [champ, useChamp] = useState<Champ>();
  useEffect(() => {
    apiClient.get(`/champions/${id}`).then((response) => {
      useChamp(response.data);
    });
  }, [id]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{champ?.name}</h1>
      <hr />
      <Card style={{ margin: "auto", width: "750px" }}>
        <Carousel interval={null}>
          {champ?.images.map((img) => (
            <CarouselItem>
              <img
                src={`${BACKEND_URL}/images/${img}`}
                style={{ width: "100%" }}
              />
            </CarouselItem>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{champ?.name}</Card.Title>
          <Card.Text>
            <p>{champ?.description}</p>
            <p>
              <strong>Role: </strong>
              {champ?.role}
            </p>
            <p>
              <strong>Difficulty: </strong>
              {champ?.difficulty}
            </p>
            <p>
              <strong>Lane: </strong>
              {champ?.lane}
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>{champ?.blue_essence} Blue Essence</Card.Footer>
      </Card>
    </>
  );
};

export default OneC;
