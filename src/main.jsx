import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home.jsx";
import Map from "./components/Map.jsx";
import Level from "./pages/Level.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Level></Level>
  </StrictMode>,
);
