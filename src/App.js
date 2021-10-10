import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import CheckOut from "./components/CheckOut/CheckOut";

import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Home page="shop"></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/checkout">
          <CheckOut></CheckOut>
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
