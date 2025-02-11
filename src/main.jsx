import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// Import Cursor Context Provider
import CursorProvider from "./context/CursorContext";

createRoot(document.getElementById("root")).render(
  <CursorProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CursorProvider>,
);
