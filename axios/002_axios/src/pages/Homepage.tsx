import { useEffect, useState } from "react";
import type { Film } from "../types/Film";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import apiClient, { BACKEND_URL } from "../api/apiClient";

const Homepage = () => {
  const [filmek, setFilmek] = useState<Array<Film>>([]);

  useEffect(() => {
    apiClient.get("/movies").then((response) => {
      setFilmek(response.data);
    });
  }, []);
  return (
    <>
      <h1>Filmek</h1>
      <Row md={4} lg={4} sm={2} xl={2} style={{ margin: "auto" }}>
        {filmek.map((film) => (
          <Col style={{ width: "300px", margin: "auto" }}>
            <Card>
              <Carousel interval={null}>
                {film.images.map((image) => (
                  <Carousel.Item>
                    <img
                      src={`${BACKEND_URL}/images/${image}`}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Text>
                  {film.genre} - {film.release_year}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
