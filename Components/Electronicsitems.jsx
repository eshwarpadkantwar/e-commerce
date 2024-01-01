import React from "react";
import "./Electronicsitems.css";
import hplaptop15s from "../Assets/Electronic Items/hplaptop15s.jpg"
import asusvivobook15 from "../Assets/Electronic Items/asusvivobook15.jpg"
import boatrockerz255pro from "../Assets/Electronic Items/boatrockerz255pro.jpg"
import boatrockerz450 from "../Assets/Electronic Items/boatrockerz450.jpg"
import fossilgen6 from "../Assets/Electronic Items/fossilgen6.jpg"
import iphone15promax from "../Assets/Electronic Items/iphone15promax.jpg"
import iqoo125gmob from "../Assets/Electronic Items/iqoo125gmob.jpg"
import lenovogamingideapad from "../Assets/Electronic Items/lenovogamingideapad.jpg"
import noisetwistwatch from "../Assets/Electronic Items/noisetwistwatch.jpg"
import oneplusnordbuds2r from "../Assets/Electronic Items/oneplusnordbuds2r.jpg"
import ps5 from "../Assets/Electronic Items/ps5.jpg"
import samsungwashingmach from "../Assets/Electronic Items/samsungwashingmach.jpg"

const Electronicsitems = () => {
  return (
    <div className="mt-5">
      {/* <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <a className="navbar-brand ml-2 font-weight-bold" href="#">
          FORCEPAUSED
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor"
          aria-controls="navbarColor"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Women's
              </a>{" "}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Men's
              </a>{" "}
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Home
              </a>{" "}
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Sale
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="filter">
        <button
          className="btn btn-default"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobile-filter"
          aria-expanded="false"
          aria-controls="mobile-filter"
        >
          Filters<span className="fa fa-filter pl-1"></span>
        </button>
      </div>
      <div id="mobile-filter" className="collapse">
        <div>
          <h6 className="p-1 border-bottom">Home Furniture</h6>
          <ul>
            <li>
              <a href="#">Living</a>
            </li>
            <li>
              <a href="#">Dining</a>
            </li>
            <li>
              <a href="#">Office</a>
            </li>
            <li>
              <a href="#">Bedroom</a>
            </li>
            <li>
              <a href="#">Kitchen</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="p-1 border-bottom">Filter By</h6>
          <p className="mb-2">Color</p>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action mb-2 rounded">
              <a href="#">
                <span className="fa fa-circle pr-1" id="red"></span>Red
              </a>
            </li>
            <li className="list-group-item list-group-item-action mb-2 rounded">
              <a href="#">
                <span className="fa fa-circle pr-1" id="teal"></span>Teal
              </a>
            </li>
            <li className="list-group-item list-group-item-action mb-2 rounded">
              <a href="#">
                <span className="fa fa-circle pr-1" id="blue"></span>Blue
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Type</h6>
          <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="boring" />
              <label htmlFor="boring" className="pl-1 pt-sm-0 pt-1">
                Boring
              </label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="ugly" />
              <label htmlFor="ugly" className="pl-1 pt-sm-0 pt-1">
                Ugly
              </label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
              <input type="radio" name="type" id="notugly" />
              <label htmlFor="notugly" className="pl-1 pt-sm-0 pt-1">
                Not Ugly
              </label>
            </div>
          </form>
        </div>
      </div>
      <section id="sidebar">
        <div>
          <h6 className="p-1 border-bottom">Home Furniture</h6>
          <ul>
            <li>
              <a href="#">Living</a>
            </li>
            <li>
              <a href="#">Dining</a>
            </li>
            <li>
              <a href="#">Office</a>
            </li>
            <li>
              <a href="#">Bedroom</a>
            </li>
            <li>
              <a href="#">Kitchen</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="p-1 border-bottom">Filter By</h6>
          <p className="mb-2">Color</p>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action mb-2 rounded">
              <a href="#">
                <span className="fa fa-circle pr-1" id="red"></span>Red
              </a>
            </li>
            <li className="list-group-item list-group-item-action mb-2 rounded">
              <a href="#">
                <span className="fa fa-circle pr-1" id="teal"></span>Teal
              </a>
            </li>
            <li className="list-group-item list-group-item-action mb-2 rounded">
              <a href="#">
                <span className="fa fa-circle pr-1" id="blue"></span>Blue
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Type</h6>
          <form className="ml-md-2">
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="boring" />
              <label htmlFor="boring" className="pl-1 pt-sm-0 pt-1">
                Boring
              </label>
            </div>
            <div className="form-inline border rounded p-sm-2 my-2">
              <input type="radio" name="type" id="ugly" />
              <label htmlFor="ugly" className="pl-1 pt-sm-0 pt-1">
                Ugly
              </label>
            </div>
            <div className="form-inline border rounded p-md-2 p-sm-1">
              <input type="radio" name="type" id="notugly" />
              <label htmlFor="notugly" className="pl-1 pt-sm-0 pt-1">
                Not Ugly
              </label>
            </div>
          </form>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={hplaptop15s}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">HP Laptop 15s</p>
                  <p>₹36,690</p>
                  <button className="btn btn-success border rounded mt-n5">Add to Cart</button>

                  <span className="fa fa-circle" id="red"></span>
                  <span className="fa fa-circle" id="teal"></span>
                  <span className="fa fa-circle" id="blue"></span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={asusvivobook15} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">ASUS Vivobook 15</p>
                  <p>₹39,990</p>
                  <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={boatrockerz255pro} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">boAt Rockerz 255 Pro+</p>
                  <p>₹1,299</p>
                  <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={boatrockerz450} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">boAt Rockerz 450</p>
                  <p>₹1,699</p>
                  <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
            </div>
        </div>
            
    </div>
    <div class="row mt-3">
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={fossilgen6} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Fossil Gen 6 Watch</p>
                  <p>₹19,996</p>
                   <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={iphone15promax} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">iPhone 15 Pro Max</p>
                  <p>₹1,56,900</p>
                   <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={iqoo125gmob} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">iQOO 12 5G</p>
                  <p>₹52,999</p>
                   <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={lenovogamingideapad} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Lenovo Legion 5 Pro</p>
                  <p>₹1,12,900</p>
                   <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
            </div>
        </div>

        <div class="row mt-3">
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={noisetwistwatch} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Noise Twist Watch</p>
                  <p>₹1,399</p>
                   <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={oneplusnordbuds2r} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">OnePlus Nord Buds 2r</p>
                  <p>₹2,199</p>
                   <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={ps5} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Playstation 5</p>
                  <p>₹44,990</p>
                   <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top img-fluid" src={samsungwashingmach} alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Samsung Washing Mach</p>
                  <p>₹34,990</p>
                   <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
                  <span class="fa fa-circle" id="red"></span>        
                  <span class="fa fa-circle" id="teal"></span>        
                  <span class="fa fa-circle" id="blue"></span>        
                </div>
            </div>
        </div>
        </div>
        

          </div>
          {/* Additional rows for more products */}
        </div>
      </section>
    </div>
  );
};

export default Electronicsitems;
