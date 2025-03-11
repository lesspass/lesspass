import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LessPassWebComponentInMemory } from "./LessPassWebComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LessPassWebComponentInMemory
      settings={{
        site: "www.example.org",
        isWebExtensionContext: true,
      }}
    />
  </StrictMode>,
);
