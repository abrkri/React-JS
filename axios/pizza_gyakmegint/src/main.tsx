import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPizzas from "./pages/AllPizzas";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import PostPizza from "./pages/PostPizza";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizzas />} />
        <Route path="/post" element={<PostPizza />} />a
      </Routes>
    </BrowserRouter>
    <ToastContainer
      theme="colored"
      closeOnClick={true}
      position="bottom-right"
    />
  </StrictMode>,
);
