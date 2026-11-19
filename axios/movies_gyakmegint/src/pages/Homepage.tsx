import {
  Button,
  Card,
  Carousel,
  CarouselItem,
  Col,
  Row,
} from "react-bootstrap";
import type { Movie } from "../types/movie";
import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";

const Homepage = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    apiClient
      .get("/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        toast.error("Error fetching movies:");
        console.error("Error fetching movies:", error);
      });
  }, []);

  const deleteMovie = (id: number | undefined) => {
    apiClient.delete(`/movies/${id}`).then(() => {
      setMovies(movies.filter((movie) => movie.id !== id));
      toast.success("Movie deleted successfully!");
    });
  };
  return (
    <>
      <h1>Movies</h1>
      <hr />

      <Row md={4} style={{ margin: "auto" }}>
        {movies.map((m) => (
          <Col style={{ marginBottom: "20px" }}>
            <Card>
              <Carousel interval={null}>
                {m.images.map((img) => (
                  <CarouselItem>
                    <img
                      src={`${BACKEND_URL}/images/${img}`}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                      }}
                    />
                  </CarouselItem>
                ))}
              </Carousel>
              <Card.Body style={{ height: "200px" }}>
                <Card.Title>{m.title}</Card.Title>
                <Card.Text>Genre: {m.genre}</Card.Text>
                <Card.Text>Release Year: {m.release_year}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {m.price} Ft
                <Button
                  variant="danger"
                  onClick={() => deleteMovie(m.id)}
                  style={{ float: "right" }}
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
export default Homepage;
