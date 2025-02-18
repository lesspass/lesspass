import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LessPassWebComponent from "lesspass-web-component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LessPassWebComponent />
  </StrictMode>,
);
