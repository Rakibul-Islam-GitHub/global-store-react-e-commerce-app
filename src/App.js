import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
