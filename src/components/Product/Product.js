import React from "react";
import "./product.css";

function Product(props) {
  const { title, description, price, image, category, rating } = props.product;

  return (
    <div className="mb-2">
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="">
            <div className="card card-body">
              <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                <div className="mr-2 mb-3 mb-lg-0">
                  {" "}
                  <img src={image} width="180" height="180" alt="" />
                </div>
                <div className="media-body">
                  <h6 className="media-title font-weight-semibold">
                    {" "}
                    <a href="#" data-abc="true">
                      {title}
                    </a>{" "}
                  </h6>
                  <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                    <li className="list-inline-item">
                      <a href="#" className="text-muted" data-abc="true">
                        {category}
                      </a>
                    </li>
                  </ul>
                  <p className="mb-3 desc"> {description} </p>
                  <ul className="list-inline list-inline-dotted mb-0">
                    <li className="list-inline-item">
                      Total rating of {rating.rate} from {rating.count} vote
                    </li>
                  </ul>
                </div>
                <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                  <h3 className="mb-0 font-weight-semibold">${price}</h3>
                  <div>
                    {" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                    <i className="fa fa-star"></i>{" "}
                  </div>
                  <div className="text-muted"> {rating.count} reviews</div>

                  <button
                    type="button"
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn addtocartbtn mt-4 text-white"
                  >
                    <i className="icon-cart-add mr-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
