import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HungApp from "./HungApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <HungApp></HungApp>
  </React.StrictMode>
);
