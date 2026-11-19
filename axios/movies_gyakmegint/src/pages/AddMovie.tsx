import { Button } from "react-bootstrap";
import type { Movie } from "../types/movie";
import { useState } from "react";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const AddMoviePage = () => {
  const [movie, setMovie] = useState<Movie>({
    title: "",
    genre: "",
    release_year: 0,
    price: 0,
    images: ["wednesday_1.jpg", "wednesday_2.jpg"],
  });
  const AddMovie = () => {
    console.log(movie);
    apiClient
      .post("/movies", movie)
      .then(() => {
        toast.success("Movie added successfully!");
      })
      .catch((error) => {
        toast.error("Error adding movie", { autoClose: false });
        console.error("Error adding movie:", error);
      });
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Add Movie</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "800px",
          margin: "auto",
          marginTop: "50px",
          border: "1px solid black",
          padding: "20px",
          borderRadius: "10px",
          fontSize: "20px",
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />
        <br />
        <label>Genre:</label>
        <input
          type="text"
          placeholder="Genre"
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
        />
        <br />
        <label>Release Year:</label>
        <input
          type="number"
          placeholder="Release Year"
          onChange={(e) =>
            setMovie({ ...movie, release_year: Number(e.target.value) })
          }
        />
        <br />
        <label>Price:</label>
        <input
          type="number"
          placeholder="Price"
          min={0}
          onChange={(e) =>
            setMovie({ ...movie, price: Number(e.target.value) })
          }
        />

        <Button
          variant="success"
          style={{ marginTop: "10px", marginBottom: "10px" }}
          onClick={AddMovie}
        >
          Add Movie
        </Button>
      </div>
    </>
  );
};

export default AddMoviePage;
