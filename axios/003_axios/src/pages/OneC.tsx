import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Champ } from "../types/C";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Button, Card, Carousel, CarouselItem } from "react-bootstrap";
import { toast } from "react-toastify";
import PageNotFound from "./PageNotFound";

const OneC = () => {
  const { id } = useParams();

  const [champ, useChamp] = useState<Champ>();
  useEffect(() => {
    apiClient
      .get(`/champions/${id}`)
      .then((response) => {
        useChamp(response.data);
      })
      .catch(() =>
        toast.error("An error occurred while fetching the champion.", {
          autoClose: false,
        }),
      );
  }, [id]);
  return (
    <>
      {champ ? (
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
            <Card.Footer>
              {champ?.blue_essence} Blue Essence
              <Button variant="danger" style={{ float: "right" }}>
                Delete
              </Button>
            </Card.Footer>
          </Card>
        </>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default OneC;
