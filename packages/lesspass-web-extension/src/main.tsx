import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { LessPassWebComponentInMemory } from "lesspass-web-component";
import "lesspass-web-component/dist/lesspass-web-component.css";
import { getSite } from "./url";

function LessPassWebComponentWithSite() {
  const [site, setSite] = useState<string | null>(null);

  useEffect(() => {
    getSite().then(setSite);
  }, []);

  if (site === null) return null;

  return (
    <LessPassWebComponentInMemory
      settings={{
        site,
        isWebExtensionContext: true,
      }}
    />
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LessPassWebComponentWithSite />
  </StrictMode>,
);
