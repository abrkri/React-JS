import { useEffect, useState } from "react";
import type { Movie } from "../types/Movie";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Card, Carousel, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const OneMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    apiClient.get(`/movies/${id}`).then((response) => {
      setMovie(response.data);
    });
  }, []);
  return (
    <>
      <h1>csaooo</h1>
      <hr />
      <Card style={{ width: "800px", margin: "auto" }}>
        <Carousel interval={null}>
          {movie?.images.map((image) => (
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
          <Card.Title>{movie?.title}</Card.Title>
          <Card.Text>
            <p>Genre: {movie?.genre}</p>
            <p>Release Year: {movie?.release_year}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong>Price: ${movie?.price}</strong>
        </Card.Footer>
      </Card>
    </>
  );
};

export default OneMovie;
