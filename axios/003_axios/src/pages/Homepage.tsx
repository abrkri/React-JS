import { useEffect, useState } from "react";
import type { Champ } from "../types/C";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Carousel, CarouselItem, Col, Row } from "react-bootstrap";

const Homepage = () => {
  const [champs, useChamps] = useState<Array<Champ>>([]);

  useEffect(() => {
    apiClient.get("/champions").then((response) => {
      useChamps(response.data);
    });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>LoL Champs</h1>
      <hr />
      <Row md={3} lg={4} style={{ margin: "auto" }}>
        {champs.map((c) => (
          <Col style={{ marginBottom: "20px" }}>
            <Card style={{ width: "400px" }}>
              <Carousel interval={null}>
                {c.images.map((img) => (
                  <CarouselItem>
                    <img
                      src={`${BACKEND_URL}/images/${img}`}
                      style={{ width: "100%" }}
                    />
                  </CarouselItem>
                ))}
              </Carousel>
              <Card.Body style={{ height: "250px" }}>
                <Card.Title>{c.name}</Card.Title>
                <Card.Text>
                  <p>{c.description}</p>
                  <p>
                    <strong>Role: </strong>
                    {c.role}
                  </p>
                  <p>
                    <strong>Difficulty: </strong>
                    {c.difficulty}
                  </p>
                  <p>
                    <strong>Lane: </strong>
                    {c.lane}
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>{c.blue_essence} Blue Essence</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Homepage;
