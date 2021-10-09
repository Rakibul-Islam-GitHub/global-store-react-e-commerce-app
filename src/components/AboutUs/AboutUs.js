import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
      </nav>
      <h1 className="text-center mt-5">About Us</h1>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nulla
        incidunt, quos dolorem reprehenderit odit sunt aspernatur fugit
        distinctio itaque soluta, aliquam pariatur id. Reiciendis saepe vel
        tenetur, nobis labore distinctio, tempora nam corporis commodi
        repellendus consequatur, unde minus laboriosam hic. Quidem sint nam
        doloribus officia, architecto id tenetur aspernatur. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Amet eaque ut obcaecati
        distinctio vel corrupti ipsa voluptatibus quam incidunt nemo, laborum
        aperiam tempore! Corporis, quisquam! Ea vel asperiores inventore
        impedit, assumenda explicabo voluptate deserunt sapiente. Exercitationem
        ullam, rem, dolorum voluptatum ab hic adipisci dolore et quam nihil
        repudiandae expedita laboriosam.
      </p>
    </div>
  );
};

export default AboutUs;
