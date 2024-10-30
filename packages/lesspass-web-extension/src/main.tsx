import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "lesspass-web-component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
