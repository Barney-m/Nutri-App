import React from "react";
import ReactDOM from "react-dom";
import Home from "../Home";
import About from "../About";
import Page_404 from "../404_Page";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Page_404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
