import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Carousel, Col, Row } from "react-bootstrap";

const Homepage = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  useEffect(() => {
    apiClient.get("/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);
  return (
    <>
      <h1>csaooo</h1>
      <hr />
      <Row xsm={1} sm={2} md={3} lg={4} style={{ margin: "auto" }}>
        {movies.map((movie) => (
          <Col key={movie.id} style={{ marginBottom: "20px" }}>
            <Card style={{ width: "500px", margin: "auto" }}>
              <Carousel interval={null}>
                {movie.images.map((image) => (
                  <Carousel.Item>
                    <img
                      src={`${BACKEND_URL}/images/${image}`}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <p>Genre: {movie.genre}</p>
                  <p>Release Year: {movie.release_year}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>Price: ${movie.price}</strong>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
