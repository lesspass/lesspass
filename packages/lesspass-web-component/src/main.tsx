import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LessPassWebComponentInMemory } from "./LessPassWebComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{ width: "481px", height: "600px", border: "1px solid red" }}>
      <LessPassWebComponentInMemory
        settings={{
          site: "www.example.org",
          isWebExtensionContext: true,
        }}
      />
    </div>
  </StrictMode>,
);
