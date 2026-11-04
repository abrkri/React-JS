import { Card, Carousel, Col, Row } from "react-bootstrap";
import { character } from "./chainsmoker";

const App = () => {
  return (
    <>
      <h1>gyakorlok csak koszi de na</h1>
      <hr />
      <Row md={4} lg={4}>
        {character.map((c) => (
          <Col>
            <Card
              style={{ width: "18rem", margin: "auto", marginBottom: "20px" }}
            >
              <Carousel interval={null}>
                {c.img.map((img) => {
                  return (
                    <Carousel.Item>
                      <img
                        src={img}
                        style={{
                          width: "100%",
                          height: "18rem",
                          objectFit: "fill",
                        }}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <Card.Body>
                <Card.Title>{c.name}</Card.Title>
                <Card.Text>{c.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default App;
