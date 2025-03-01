import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LessPassWebComponent } from "./LessPassWebComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LessPassWebComponent />
  </StrictMode>,
);
