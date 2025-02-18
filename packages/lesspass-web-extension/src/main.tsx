import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LessPass } from "lesspass-web-component";
import "lesspass-web-component/dist/lesspass-web-component.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LessPass />
  </StrictMode>,
);
