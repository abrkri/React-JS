import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Homerseklet from "./pages/Homerseklet.tsx";
import Szamologep from "./pages/Szamologep.tsx";
import BMI from "./pages/BMI_kalkulator.tsx";
import Penzszamito from "./pages/Penzszamito.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Homerseklet /> */}
    {/* <Szamologep /> */}
    <BMI />
    {/* <Penzszamito /> */}
  </StrictMode>,
);
