import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
