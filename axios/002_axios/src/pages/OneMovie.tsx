import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import type { Film } from "../types/Film";
import { Card, Carousel } from "react-bootstrap";

const OneMovie = () => {
  const [film, setFilm] = useState<Film>();
  const { id } = useParams();
  useEffect(() => {
    apiClient.get(`/movies/${id}`).then((response) => {
      setFilm(response.data);
    });
  }, []);

  return (
    <>
      <h1>{film?.title}</h1>
      <Card style={{ width: "800px", margin: "auto" }}>
        <Carousel interval={null}>
          {film?.images.map((image) => (
            <Carousel.Item>
              <img
                src={`${BACKEND_URL}/images/${image}`}
                style={{
                  width: "800px",
                  height: "400px",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{film?.title}</Card.Title>
          <Card.Text>
            {film?.genre} - {film?.release_year}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default OneMovie;
