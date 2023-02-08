import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/reset.scss";
import "./assets/styles/custom.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
