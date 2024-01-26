import React, { useState } from "react";
import "./Fashionitems.css";
import filteredProducts from "./Fitems";

function Fashionitems() {
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
      <div className="fsorting">
        <form>
          <h4>Sort by Price</h4>
          <label>
            <input
              type="radio"
              name="price"
              value="0-500"
              checked={priceFilter.max === "0-500"}
              onChange={handlePriceChange}
            />
            Rs.500 and Below
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="501-1000"
              checked={priceFilter.max === "501-1000"}
              onChange={handlePriceChange}
            />
            Rs.501 - Rs.1000
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="1001-2000"
              checked={priceFilter.max === "1001-2000"}
              onChange={handlePriceChange}
            />
            Rs.1001 - Rs.2000
          </label>

          <label>
            <input
              type="radio"
              name="price"
              value="2001-999999"
              checked={priceFilter.max === "2001-999999"}
              onChange={handlePriceChange}
            />
            Rs.2001 - More
          </label>
          <button type="button" onClick={clearFilter}>
            Clear Filter
          </button>
        </form>
      </div>

      <section id="fproducts">
        <div className="container" id="container">
          <div className="row" id="#row">
            {displayedProducts.map((product, index) => (
              <div key={product.id} className="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
                <div className="card" id="card">
                  <img className="card-img-top img-fluid" id="card-img-top" src={product.image} alt="Card image cap" />
                  <div className="card-body" id="card-body">
                    <p className="card-text" id="card-text">{product.name}</p>
                    <p value={product.price}>₹{product.price}</p>
                    <button className="btn btn-success border rounded mt-n5" id="btn">Add to Cart</button>
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
