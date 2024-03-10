import React from "react";
import Footerr from "../Components/Footerr";
import "../Components/Aboutuspage.css"

function Aboutuspage(){

    return(
        <div className="aboutdiv mt-5">
            

            
            <div className="banner">
                <img src="../Assets/aboutbanner.png" alt="About Banner" />
                <h2>We deliver things in minutes!</h2>
            </div>
            <div className="container mt-5">
            <div className="mission">
                <h2>Our Mission</h2>
                <h6 className="mt-4">Imagine needing something when you are at home and getting it before you have tied your shoelaces to step out. We are revolutionizing e-commerce by making the stuff most important to you, available to you in a blink of your eye.</h6>
                <h6 className="mt-3">We want our customers to focus on the more important things for themselves and not need to plan for the little things that life needs on an everyday basis. We are here to get your chores out of your way.  </h6>
                <h6 className="mt-3">Our mission is – “instant commerce indistinguishable from magic”. Using a backbone of technology, data sciences, and rich customer insights, we've built a dense and fast network of partner stores enabling lightning fast deliveries in minutes.</h6>
                <h6 className="mt-3">We are already one of the largest e-grocery companies in India. Our ambition however, is to be 100x this size in the next five years. </h6>
                <h6 className="mt-3">In order to become one of the most important e-retail companies of our generation, we need builders who can think on their feet, take extreme ownership and commit to making outcomes happen. If you are ambitious, smart, and don’t have an ego about it, we’d love to hear from you. </h6>
                <h6 className="mt-3">Opportunities to create $100 billion businesses in India are rare. We are on the way and looking for the hungry.</h6>
            </div>

            <div className="details mt-5">
                <h2>We are</h2>

                <div className="para1 mt-4">
                    <h3>#1 instant delivery service in India</h3>
                    <h6 className="mt-3">Shop on the go and get anything delivered in minutes. Buy everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics, baby care products and much more. We get it delivered at your doorstep in the fastest and the safest way possible.</h6>
                </div>
                <div className="para2 mt-4">
                    <h3>single place for all your daily needs</h3>
                    <h6 className="mt-3">Order thousands of products at just a tap - milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits & vegetables, spices, chocolates, chips, biscuits, Maggi, cold drinks, shampoos, soaps, body wash, pet food, diapers, electronics, other organic and gourmet products from your neighbourhood stores and a lot more.</h6>
                </div>
                <div className="para3 mt-4">
                    <h3>order online on this platform to enjoy instant delivery magic</h3>
                    <h6 className="mt-3">Cities we currently serve: Agra, Ahmedabad, Bengaluru, Bhopal, Chandigarh, Chennai, Dehradun, Delhi, Faridabad, Goa, Gurgaon, Indore, Hyderabad, Jaipur, Jalandhar, Kanpur, Kolkata, Lucknow, Ludhiana, Meerut, Mohali, Mumbai, Panchkula, Pune, UP-NCR, Vadodara, Zirakpur.</h6>
                </div>
            </div>

            <div className="contact mt-5">
                <h2 className="mt-4">Contact Us</h2>
                <h6>Email : ecom@helpdesk.com</h6>
                <h6>Ph no: 1800-856-3698, 1800-856-3656</h6>
                <h6>Bengaluru, Karnataka</h6>
            </div>
            </div>
            <Footerr/>
        </div>
    )
}


export default Aboutuspage