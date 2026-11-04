import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ReadingListProvider } from "./context/ReadingListContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReadingListProvider>
        <App />
      </ReadingListProvider>
    </BrowserRouter>
  </React.StrictMode>
);