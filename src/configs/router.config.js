import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useToken from "../hooks/useToken";
import Navbar from "../components/Navbar";
import About from "../pages/base/About";
import Home from "../pages/base/Home";
import Login from "../pages/base/Login";
import Page404 from "../pages/base/Page404";

const Routes = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="*">
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
