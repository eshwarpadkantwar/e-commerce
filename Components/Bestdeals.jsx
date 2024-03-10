import React from "react";
import "./Bestdeals.css";
import blaupunktheadset from "../Assets/Electronic Deals/blaupunktheadset.jpg";
import hplaptop from "../Assets/Electronic Deals/hplaptop.jpg";
import fireboltarmourwatch from "../Assets/Electronic Deals/fireboltarmourwatch.jpg";
import iqoo125g from "../Assets/Electronic Deals/iqoo125g.jpg";
import pasta from "../Assets/Groceries Deals/pasta.jpg";
import fruitnutbics from "../Assets/Groceries Deals/fruitnutbics.jpg";
import strawberries from "../Assets/Groceries Deals/strawberries.jpg";
import honeysupersaverpack from "../Assets/Groceries Deals/honeysupersaverpack.jpg";
import Casuallinedjacket from "../Assets/Fashion Deals/Casuallinedjacket.jpg";
import casiowatch from "../Assets/Fashion Deals/casiowatch.jpg";
import AnarkaliKurta from "../Assets/Fashion Deals/AnarkaliKurta.jpg";
import handbag from "../Assets/Fashion Deals/handbag.jpg";

function Bestdeals() {
    return (
        <div>
            <div className="dealsheading mt-5">
                <div className="dealsheading-container">
                    <h1>Best deals in Electronics</h1>
                </div>
            </div>

            <div className="eleccards mt-5 col">
                <div className="one">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={blaupunktheadset} className="card-img-top" alt="..." />
                        <div className="card-body">

                            <p className="card-text">Blaupunkt On Ear Headphones</p>
                            <div className="price">
                                <div class="row">
                                    <div class="col-6">
                                        <p className="card-price">₹2999</p>
                                    </div>
                                    <div class="col-6">
                                        <p className="card-oldprice">₹5999</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={hplaptop} className="card-img-top" alt="..." />
                        <div className="card-body">

                            <p className="card-text">HP Laptop 15s 8GB RAM, 512GB SSD </p>
                            <div className="price">
                                <div class="row">
                                    <div class="col-6">
                                        <p className="card-price">₹39990</p>
                                    </div>
                                    <div class="col-6">
                                        <p className="card-oldprice">₹56261</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={iqoo125g} className="card-img-top" alt="..." />
                        <div className="card-body">

                            <p className="card-text">iQOO 12 5G 12GB RAM, 256GB Storage</p>
                            <div className="price">
                                <div class="row">
                                    <div class="col-6">
                                        <p className="card-price">₹52999</p>
                                    </div>
                                    <div class="col-6">
                                        <p className="card-oldprice">₹59999</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={fireboltarmourwatch} className="card-img-top" alt="..." />
                        <div className="card-body">

                            <p className="card-text">Fire-Boltt Armour Smart watch</p>
                            <div className="price">
                                <div class="row">
                                    <div class="col-6">
                                        <p className="card-price">₹1499</p>
                                    </div>
                                    <div class="col-6">
                                        <p className="card-oldprice">₹8999</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>


            {/* -----------Groceries Deals ---------------------------------------------------------------- */}


            <div className="dealsheading2 mt-5">
                <div className="dealsheading2-container">
                    <h1>Best deals in Groceries</h1>
                </div>
            </div>

            <div className="eleccards mt-5 col">
                <div className="one">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={pasta} className="card-img-top" alt="..." />
                        <div className="card-body">

                            <p className="card-text">Macaroni Pasta</p>
                            <div className="price">
                                <div class="row">
                                    <div class="col-6">
                                        <p className="card-price">₹31</p>
                                    </div>
                                    <div class="col-6">
                                        <p className="card-oldprice">₹42</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={fruitnutbics} className="card-img-top" alt="..." />
                        <div className="card-body">

                            <p className="card-text">Karachi Fruit & Nut Cookies</p>
                            <div className="price">
                                <div class="row">
                                    <div class="col-6">
                                        <p className="card-price">₹90</p>
                                    </div>
                                    <div class="col-6">
                                        <p className="card-oldprice">₹180</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={strawberries} className="card-img-top" alt="..." />
                        <div className="card-body">

                            <p className="card-text">Fresh Strawberry</p>
                            <div className="price">
                                <div class="row">
                                    <div class="col-6">
                                        <p className="card-price">₹80</p>
                                    </div>
                                    <div class="col-6">
                                        <p className="card-oldprice">₹145</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: "18rem" }}>
                        <img src={honeysupersaverpack} className="card-img-top" alt="..." />
                        <div className="card-body">

                            <p className="card-text">Fresh Honey (Pack of 2)</p>
                            <div className="price">
                                <div class="row">
                                    <div class="col-6">
                                        <p className="card-price">₹274</p>
                                    </div>
                                    <div class="col-6">
                                        <p className="card-oldprice">₹399</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

                {/* -------------------------Fashion------------------------------- */}

                

                <div className="dealsheading3 mt-5">
                    <div className="dealsheading3-container">
                        <h1>Best deals in Fashion</h1>
                    </div>
                </div>

                <div className="eleccards mt-5 row">
                    <div className="one">
                        
                        <div className="card" style={{ width: "18rem", height:"auto" }}>
                            <img src={Casuallinedjacket} className="card-img-top" alt="Casual Lined Jacket" />
                            <div className="card-body">
                                <p className="card-text">Men's Casual Lined Jacket</p>
                                <div className="price">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="card-price">₹1179</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="card-oldprice">₹3299</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="card" style={{ width: "18rem", height:"auto" }}>
                            <img src={casiowatch} className="card-img-top" alt="Casio Vintage Digital Watch" />
                            <div className="card-body">
                                <p className="card-text">Casio Vintage Digital Watch</p>
                                <div className="price">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="card-price">₹1695</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="card-oldprice">₹3100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="card" style={{ width: "18rem", height:"auto" }}>
                            <img src={AnarkaliKurta} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Women's Anarkali Kurta</p>
                                <div className="price">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="card-price">₹749</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="card-oldprice">₹2499</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem", height:"auto" }}>
                            <img src={handbag} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Women's Faux Leather Handbag</p>
                                <div className="price">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="card-price">₹1496</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="card-oldprice">₹2999</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


























            </div>

        </div>
    );
}

export default Bestdeals;
