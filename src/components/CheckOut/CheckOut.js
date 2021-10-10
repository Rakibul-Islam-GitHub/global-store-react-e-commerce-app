import React, { useEffect, useState } from "react";
import { getCart, saveCartData } from "../Database/databaseManager";
import NavBar from "../Header/NavBar";
import "./checkout.css";
import CheckOutBody from "./CheckOutBody";
import Footer from "../Footer/Footer";

const CheckOut = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartData = getCart();
    setCart(JSON.parse(cartData));
  }, []);

  function cartRemove(product) {
    // console.log(product);
    const pd = product;
    const newCart = cart.filter((item) => {
      const pdLeft = item.id !== pd.id;
      return pdLeft;
    });

    // console.log(newCart);
    setCart(newCart);
    saveCartData(JSON.stringify(newCart));
  }

  let totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount = cart[i].price + totalAmount;
    totalAmount = Math.round(totalAmount);
  }

  return (
    <div className="container">
      <NavBar totalAmount={totalAmount} cartLength={cart.length}></NavBar>

      <div className="container checkoutbody">
        <CheckOutBody cart={cart} cartRemove={cartRemove} />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default CheckOut;
