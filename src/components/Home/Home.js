import React, { useEffect, useState } from "react";
import "../../App.css";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";
import Product from "../Product/Product";
import { Link, useLocation, Route } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import NavBar from "../Header/NavBar";
import { getCart, saveCartData } from "../Database/databaseManager";

const Home = (props) => {
  let location = useLocation();

  let marginstyle = { marginTop: "120px" };
  if (location.pathname === "/shop") {
    marginstyle = { marginTop: "20px" };
  }

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    const cartData = getCart();
    setCart(JSON.parse(cartData));
  }, []);

  function handleAddToCart(product) {
    console.log("from add to cart button", product);
    const newCart = [...cart, product];
    setCart(newCart);
    saveCartData(JSON.stringify(newCart));
  }

  // cart calculation
  let totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount = cart[i].price + totalAmount;
    totalAmount = Math.round(totalAmount);
  }
  // console.log(totalAmount);

  return (
    <div className="container">
      {/* <NavBar totalAmount={totalAmount} cartLength={cart.length}></NavBar> */}
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>

        <Link className="navbar-brand ml-2 ml-sm-auto" to="/">
          Global Store
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                <Link to="/shop">Shop</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/checkout">
                <Link to="/checkout">Check out</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <Link to="/about">About</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="cart cart-btn">
          <button className="btn btn-outline-dark " type="submit">
            <FontAwesomeIcon icon={faShoppingCart} />
            <h6 style={{ display: "inline-block" }}>Cart</h6>
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {cart.length}
            </span>
          </button>
          <div className="shopping-cart">
            <p>Oedered Items: {cart.length}</p>
            <h6 style={{ color: "#DE1F56" }}>Total Amount : ${totalAmount}</h6>
            <div className="d-flex justify-content-center">
              <button className="btn btn-warning btncart">
                <Link style={{ color: "white" }} to="/checkout">
                  {" "}
                  Check out
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* conditional rendering, if it's shop route then it won't display header component */}
      {props.page === undefined ? (
        <div className="row header-card">
          <Header></Header>
        </div>
      ) : (
        ""
      )}

      <div style={marginstyle} id="product" className="product">
        <h2 className="text-center  mb-3">All Products</h2>

        {products.map((pd) => {
          return (
            <Product
              handleAddToCart={handleAddToCart}
              product={pd}
              key={pd.id}
            ></Product>
          );
        })}
      </div>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            {" "}
            &copy;
            <a href="https://www.linkedin.com/in/rakibul21">
              {" "}
              Design & developed by Rakibul - 2021{" "}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
