import React, { useState } from "react";
import "./Groceriesitems.css";
import filteredProducts from "../Gitems";
import { useCart } from "react-use-cart";


function Fashionitems(props) {
  const [priceFilter, setPriceFilter] = useState({ max: null });

  const { addItem }= useCart();

  const handlePriceChange = (event) => {
    const priceRange = event.target.value;
    setPriceFilter({ max: priceRange });
  };

  const clearFilter = () => {
    setPriceFilter({ max: null });
  };

  let displayedProducts = filteredProducts;

  // Apply filtering based on selected price range
  if (priceFilter.max) {
    const [minPrice, maxPrice] = priceFilter.max.split('-').map(Number);

    displayedProducts = displayedProducts
      .filter((product) => product.price >= minPrice && product.price <= maxPrice)
      .sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      <div className="fsorting mt-2">
        <form>
          <h4>Sort by Price</h4>
          <label>
            <input
              type="radio"
              name="price"
              value="0-30"
              checked={priceFilter.max === "0-30"}
              onChange={handlePriceChange}
            />
            Rs.30 and Below
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="31-50"
              checked={priceFilter.max === "31-50"}
              onChange={handlePriceChange}
            />
            Rs.31 - Rs.50
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="51-100"
              checked={priceFilter.max === "51-100"}
              onChange={handlePriceChange}
            />
            Rs.51 - Rs.100
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="101-999999"
              checked={priceFilter.max === "101-999999"}
              onChange={handlePriceChange}
            />
            Rs.101 - More
          </label>
          <button type="button" onClick={clearFilter}>
            Clear Filter
          </button>
        </form>
      </div>

      <section id="fproducts">
        <div className="container" id="gcontainer">
          <div className="row" id="grow">
            {displayedProducts.map((product, index) => (
              <div key={product.id} className="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div className="card" id="gcard">
                  <img className="card-img-top img-fluid" id="gcard-img-top" src={product.image} alt="Card image cap" />
                  <div className="card-body" id="gcard-body">
                    <p className="card-text" id="card-text">{product.name}</p>
                    <p value={product.price}>₹{product.price}</p>
                    { <button className="btn btn-success border rounded mt-n5" id="gbtn" >Add to Cart</button> /*onClick={()=>addItem(props.Gitem)} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
    
  );
}

export default Fashionitems;
