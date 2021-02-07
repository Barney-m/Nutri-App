import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, Switch } from "react-router";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById("root")
);
