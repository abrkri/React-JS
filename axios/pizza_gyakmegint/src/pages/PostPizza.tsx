import { Button } from "react-bootstrap";
import type { Pizza } from "../types/Pizza";
import { useState } from "react";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const PostPizza = () => {
  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  const postPizza = () => {
    apiClient
      .post("/pizzak", pizza)
      .then(() => {
        toast.success("Pizza hozzáadva!");
      })
      .catch(() => {
        toast.error("Hiba történt a pizza hozzáadásakor!", {
          autoClose: false,
        });
      });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <h1 style={{ float: "left", marginLeft: "20px" }}>
          Új pizza hozzáadása
        </h1>
        <a href="/">
          <Button
            variant="primary"
            style={{ float: "right", marginRight: "20px" }}
          >
            Vissza a főoldalra
          </Button>
        </a>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: "50%",
          gap: "10px",
        }}
      >
        <label>Pizza neve:</label>
        <input
          type="text"
          onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
        />
        <label>Pizza leírása:</label>
        <input
          type="text"
          onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
        />
        <label>Pizza ára:</label>
        <input
          type="number"
          min="0"
          onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
        />
        <label>Pizza képe:</label>
        <input
          type="text"
          onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
        />
        <Button
          variant="success"
          style={{ marginTop: "10px" }}
          onClick={postPizza}
        >
          Pizza hozzáadása
        </Button>
      </div>
    </>
  );
};
export default PostPizza;
