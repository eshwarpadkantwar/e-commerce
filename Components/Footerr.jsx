import React from "react";
import "./Footerr.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faXTwitter, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

const Footerr = () => {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (

        <div>

            <div className="backtop mt-5" onClick={scrollToTop}>
                <h6>Back to top</h6>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-xs-12">
                            <div className="single_footer">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Simply dummy text</a></li>
                                    <li><a href="#">The printing and typesetting </a></li>
                                    <li><a href="#">Standard dummy text</a></li>
                                    <li><a href="#">Type specimen book</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="single_footer single_footer_address">
                                <h4>Page Link</h4>
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Simply dummy text</a></li>
                                    <li><a href="#">The printing and typesetting </a></li>
                                    <li><a href="#">Standard dummy text</a></li>
                                    <li><a href="#">Type specimen book</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="single_footer single_footer_address">
                                <h4>Subscribe today</h4>
                                <div className="signup_form">
                                    <form action="#" className="subscribe">
                                        <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                                        <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="social_profile">
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <p className="copyright">Copyright © 2024 <a href="#"></a>.</p>
                            <p style={{textAlign:"center",color:"white"}}>Designed by Eshwar with ❤️</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Footerr;
