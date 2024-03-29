import React, { useState } from "react";
import "./Electronicsitems.css";
import filteredProducts from "../Eitems";

function Electronicsitems() {
  const [priceFilter, setPriceFilter] = useState({ max: null });

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
      <div className="sorting">
        <form>
          <h4>Sort by Price</h4>
          <label>
            <input
              type="radio"
              name="price"
              value="0-1000"
              checked={priceFilter.max === "0-1000"}
              onChange={handlePriceChange}
            />
            Rs.1000 and Below
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="1001-10000"
              checked={priceFilter.max === "1001-10000"}
              onChange={handlePriceChange}
            />
            Rs.1001 - Rs.10000
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="10001-30000"
              checked={priceFilter.max === "10001-30000"}
              onChange={handlePriceChange}
            />
            Rs.10001 - Rs.30000
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="20001-999999"
              checked={priceFilter.max === "20001-999999"}
              onChange={handlePriceChange}
            />
            Rs.20001 - More
          </label>
          <button type="button" onClick={clearFilter}>
            Clear Filter
          </button>
        </form>
      </div>

      <section id="products">
        <div className="container">
          <div className="row">
            {displayedProducts.map((product, index) => (
              <div key={product.id} className="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div className="card">
                  <img className="card-img-top img-fluid" src={product.image} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <p value={product.price}>₹{product.price}</p>
                    <button className="btn btn-success border rounded mt-n5">Add to Cart</button>
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

export default Electronicsitems;
