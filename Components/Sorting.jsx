import React, { useState } from "react";
import "./Sorting.css";

function Sorting({ onFilterChange }) {
  const [priceFilter, setPriceFilter] = useState(null);
  const [colorFilter, setColorFilter] = useState(null);

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setPriceFilter(selectedPrice);
    onFilterChange({ price: selectedPrice, color: colorFilter });
  };

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    setColorFilter(selectedColor);
    onFilterChange({ price: priceFilter, color: selectedColor });
  };

  const clearFilters = () => {
    setPriceFilter(null);
    setColorFilter(null);
    onFilterChange({ price: null, color: null });
  };

  return (
    <div className="sorting">
      <form>
        <h4>Sorting by Price</h4>
        <label>
          <input type="radio" name="price" value={1000} onChange={handlePriceChange} />
          Rs.1000 and Below
        </label>

        <label>
          <input type="radio" name="price" value={1500} onChange={handlePriceChange} />
          Rs.1001 - Rs.1500
        </label>

        <label>
          <input type="radio" name="price" value={2000} onChange={handlePriceChange} />
          Rs.1501 - Rs.2000
        </label>

        <label>
          <input type="radio" name="price" value={2500} onChange={handlePriceChange} />
          Rs.2001 - Rs.2500
        </label>
      </form>

      <form>
        <h4>Sorting by Color</h4>
        <label>
          <input type="radio" name="color" value="Yellow" onChange={handleColorChange} />
          Yellow
        </label>

        <label>
          <input type="radio" name="color" value="Green" onChange={handleColorChange} />
          Green
        </label>

        <label>
          <input type="radio" name="color" value="Black" onChange={handleColorChange} />
          Black
        </label>

        <label>
          <input type="radio" name="color" value="Red" onChange={handleColorChange} />
          Red
        </label>
      </form>
      <br />
      <button onClick={clearFilters}>Clear Filter</button>
    </div>
  );
}

export default Sorting;
