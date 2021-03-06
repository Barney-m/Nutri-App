import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./public/css/styles.less";
import App from "./pages/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
