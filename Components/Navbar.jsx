import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Searchbar from "./Searchbar";
import "./Navbar.css";

function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Searchbar />
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3" id="navbarlist">
                            <li className="nav-item me-3">
                                <NavLink to="/" className="text-dark text-decoration-none" onClick={scrollToTop}>Home</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink to="/products" className="text-dark text-decoration-none" onClick={scrollToTop}>Products</NavLink>
                            </li>
                             {/* <li className="nav-item me-3">
                                <NavLink to="/accessories" className="text-dark text-decoration-none">Accessories</NavLink>
                            </li> */}
                            <li className="nav-item me-3">
                                <NavLink to="/about" className="text-dark text-decoration-none">About</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink to="/faq" className="text-dark text-decoration-none">FAQ</NavLink>
                            </li>

                            
                            <li><a href="#" onClick={scrollToTop}><FontAwesomeIcon icon={faShoppingCart} /></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
