import React from "react";
import "../../App.css";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { cart } = props.cart;
  console.log(cart);
  return (
    <div className="container">
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

        <a className="navbar-brand ml-2 ml-sm-auto" href="/">
          Global Store
        </a>
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
            <h6 style={{ color: "#DE1F56" }}>Total Amount : $222</h6>
            <div className="d-flex justify-content-center">
              <button className="btn btn-warning btncart">Check out</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
