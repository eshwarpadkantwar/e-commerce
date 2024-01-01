import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Searchbar from "../Components/Searchbar";
import "../Components/Productsnavbar.css"
import Saleelectronics from "../Assets/Saleelectronics.png"
import Salegroceries from "../Assets/Salegroceries.png"
import Salefashion from "../Assets/Salefashion.png"


function Products() {

  const location = useLocation();

  // Defined an array of routes where we don't want to display the images
  const hiddenRoutes = ["/products/electronics", "/products/groceries", "/products/fashion"];


    // Check if the current route is in the hiddenRoutes array
    const shouldHideImages = hiddenRoutes.includes(location.pathname);

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
                <NavLink to="/products/electronics" target="_blank" className="text-dark text-decoration-none">
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="/products/groceries" target="_blank" className="text-dark text-decoration-none">
                  Groceries
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="/products/fashion" target="_blank" className="text-dark text-decoration-none">
                  Fashion
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

     



      {!shouldHideImages && (
        <div>
          <NavLink to="/products/fashion" target="_blank">
            <img className="img-fluid" src={Salefashion} alt="Fashion banner" />
          </NavLink>
          <NavLink to="/products/electronics" target="_blank">
            <img className="img-fluid" src={Saleelectronics} alt="Electronics Banner" />
          </NavLink>
          <NavLink to="/products/groceries" target="_blank">
            <img className="img-fluid" src={Salegroceries} alt="Groceries Banner" />
          </NavLink>
        </div>
      )}

      
      
      

    </div>
  )
}

export default Products