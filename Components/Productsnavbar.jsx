import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./Productsnavbar.css";

function Productsnavbar() {
  return (
    <div>
      <br />
      <br />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            E-Commerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Searchbar />
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3" id="navbarlist">
              <li className="nav-item me-3">
                <NavLink to="/products/electronics" className="text-dark text-decoration-none">
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="/products/groceries" className="text-dark text-decoration-none">
                  Groceries
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="/products/fashion" className="text-dark text-decoration-none">
                  Fashion
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Productsnavbar;
