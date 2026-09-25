import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap";
import Homerseklet from "./pages/Homerseklet";
import Szamologep from "./pages/Szamologep";
import BMI from "./pages/BMI_kalkulator";
import Penzszamito from "./pages/Penzszamito";
import NotFound from "./pages/NotFound";

// https://prod.liveshare.vsengsaas.visualstudio.com/join?2CB685D65033B018E82A54C1A8D408C70A96

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kezdolap />} />
        <Route path="/homerseklet" element={<Homerseklet />} />
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/penzszamito" element={<Penzszamito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
