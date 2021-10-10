import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import { getCart, saveCartData } from "../Database/databaseManager";
import "./checkout.css";

const CheckOutBody = (props) => {
  //   console.log(carts);

  const carts = props.cart;

  //   const [carts, setCarts] = useState([]);

  //   useEffect(() => {
  //     const cartData = getCart();
  //     setCarts(JSON.parse(cartData));
  //   }, []);

  let totalAmount = 0;
  for (let i = 0; i < carts.length; i++) {
    totalAmount = carts[i].price + totalAmount;
    totalAmount = Math.round(totalAmount);
  }
  let tax = (totalAmount * 0.1).toFixed(2);
  tax = tax * 1;
  let grandTotalAmount = totalAmount + tax;
  return (
    <div id="checkout" className="row panel-wrapper mt-5">
      <div className="col-md-8">
        <div className="col-12 panel-header basket-header">
          <div className="row">
            <div className="col-6 basket-title">
              <span className="emphasized">Cart Summary</span>
              <br />
              <span className="emphasized text-muted">
                Ordered Items: {carts.length}
              </span>
            </div>
            <div className="col-6 order-number align-right">
              <span className="description">order #</span>
              <br />
              <span className="emphasized">A001</span>
            </div>
          </div>
          <div className="row column-titles padding-top-10">
            <div className="col-2 align-center">
              <span>Photo</span>
            </div>
            <div className="col-5 align-center">
              <span>Name</span>
            </div>
            <div className="col-2 align-center">
              <span>Quantity</span>
            </div>
            <div className="col-3 align-right">
              <span>Price</span>
            </div>
          </div>
        </div>
        <div className="col-12 panel-body basket-body">
          {carts.map((pd) => {
            return (
              <div key={pd.id * Math.random()} className="row product">
                <div className="col-2 product-image">
                  <button
                    onClick={() => props.cartRemove(pd)}
                    className="pdremovebtn"
                  >
                    <span className="removebtn">
                      <FontAwesomeIcon
                        style={{ fontSize: "13px" }}
                        icon={faTimes}
                      />
                    </span>
                  </button>
                  <img src={pd.image} alt="product-img" />
                </div>

                <div className="col-5">
                  <p style={{ fontSize: "15px" }}>{pd.title}</p>
                  <br />
                </div>
                <div className="col-2 align-right">
                  <span className="sub">unit</span>
                  quantity
                </div>
                <div className="col-3 align-right">
                  <p style={{ fontSize: "15px" }}>${pd.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-12 panel-footer basket-footer">
          <hr />
          <div className="row">
            <div className="col-8 align-right description">
              <div className="dive">Subtotal</div>
            </div>
            <div className="col-4 align-right">
              <span className="emphasized">${totalAmount}</span>
            </div>
            <div className="col-8 align-right description">
              <div className="dive">Taxes(10%)</div>
            </div>
            <div className="col-4 align-right">
              <span className="emphasized">${tax}</span>
            </div>
            <div className="col-8 align-right description">
              <div className="dive">Shipping</div>
            </div>
            <div className="col-4 align-right">
              <span className="emphasized">Free</span>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-8 align-right description">
              <div className="dive">Total</div>
            </div>
            <div className="col-4 align-right">
              <span className="very emphasized">${grandTotalAmount}</span>
            </div>

            <div className="confirmbtn">
              <button>Confirm Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutBody;
