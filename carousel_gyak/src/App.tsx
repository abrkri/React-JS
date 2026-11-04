import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { character } from "./chainsmoker";
import { useRef, useState } from "react";
import type { Character } from "./types/Character";
import { toast } from "react-toastify";

const App = () => {
  const [characters, setCharacters] = useState<Array<Character>>(character);
  const nevRef = useRef<HTMLInputElement>(null);
  const leirasRef = useRef<HTMLInputElement>(null);
  const kep1Ref = useRef<HTMLInputElement>(null);
  const kep2Ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1>gyakorlok csak koszi de na</h1>
      <hr />
      <Row md={4} lg={4}>
        {characters.map((c) => (
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
              <Card.Footer>
                szex
                <Button
                  variant="danger"
                  style={{ float: "right" }}
                  onClick={() => {
                    const filteredCharacters = characters.filter(
                      (_, i) => i !== characters.indexOf(c),
                    );
                    setCharacters(filteredCharacters);
                    toast.error("Character deleted!", { autoClose: false });
                  }}
                >
                  Igen
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <h1>Karakter hozzáadása</h1>
      <div style={{ padding: "20px" }}>
        <input type="text" placeholder="Név" ref={nevRef} required />
        <br />
        <input type="text" placeholder="Leírás" ref={leirasRef} required />
        <br />

        <input type="text" placeholder="Kép1 URL" ref={kep1Ref} required />
        <br />

        <input type="text" placeholder="Kép2 URL" ref={kep2Ref} required />
        <br />

        <Button
          variant="success"
          onClick={() => {
            if (
              nevRef.current &&
              leirasRef.current &&
              kep1Ref.current &&
              kep2Ref.current
            ) {
              const newCharacter: Character = {
                id: characters.length + 1,
                name: nevRef.current.value,
                desc: leirasRef.current.value,
                img: [kep1Ref.current.value, kep2Ref.current.value],
              };
              setCharacters([...characters, newCharacter]);
              toast.success("Character added!");
              nevRef.current.value = "";
              leirasRef.current.value = "";
              kep1Ref.current.value = "";
              kep2Ref.current.value = "";
            }
          }}
        >
          Hozzáadás
        </Button>
      </div>
    </>
  );
};

export default App;
