import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import NavBar from "../Header/NavBar";
import Product from "../Product/Product";

const Shop = (props) => {
  return (
    <div>
      <Route path="/ok" component={AboutUs}></Route>
    </div>
  );
};

export default Shop;
