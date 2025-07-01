import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Form } from "./components/Form/Form";
import "./styles/main.scss";
import { Slider } from "./components/Slider/Slider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Form />
    <Slider />
  </StrictMode>
);
