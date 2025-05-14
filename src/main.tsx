// Entry point for BuildWithAbdou, styled with the blue/teal theme
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./assets/index.css";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer
      className="pt-11 max-md:p-4"
      toastClassName="bg-teal-50 text-blue-900 border-teal-200"
      progressClassName="bg-teal-500"
    />
  </StrictMode>
);
