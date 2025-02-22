import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import MenuContext from "./Context/MenuContext";
import { ResultProvider } from "./Context/AiContext/ResultProvider"; // تأكد من استخدام المسار الصحيح
import { ImageProvider } from "./Context/AiContext/ImageProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MenuContext>
      <ResultProvider>
        <ImageProvider>
          <Router>
            <App />
          </Router>
        </ImageProvider>
      </ResultProvider>
    </MenuContext>
  </React.StrictMode>
);

reportWebVitals();
