import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyContextProvider from "./context/MyContext.jsx";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <MyContextProvider>
        <App />
        <ToastContainer/>
      </MyContextProvider>
    </BrowserRouter>
  </HelmetProvider>,
);
