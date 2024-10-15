import React, { useState } from 'react';
import Collapsible from 'react-collapsible';  // Collapsible component
import Slider from 'rc-slider';               // Slider component for range selection
import 'rc-slider/assets/index.css';          // CSS for rc-slider
import '../styles/Filter.css';                        // Custom CSS for the filter

const Filter = () => {
  const [priceRange, setPriceRange] = useState([0, 83000]);

  const handleCheckboxChange = (e) => {
    console.log(`${e.target.name} checked: ${e.target.checked}`);
  };

  return (
    <div className="filter-container">
      {/* Price Filter */}
      <div className="filter-section">
        <Collapsible trigger="Price Range">
          <div className="price-range">
            <Slider.Range
              min={0}
              max={83000}
              defaultValue={priceRange}
              onChange={(value) => setPriceRange(value)}
            />
            <div className="price-display">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </div>
          </div>
        </Collapsible>
      </div>

      {/* Product Category */}
      <div className="filter-section">
        <Collapsible trigger="Product Category">
          <div className="filter-options">
            <label>
              <input type="checkbox" name="category1" onChange={handleCheckboxChange} /> Category 1
            </label>
            <label>
              <input type="checkbox" name="category2" onChange={handleCheckboxChange} /> Category 2
            </label>
            <label>
              <input type="checkbox" name="category3" onChange={handleCheckboxChange} /> Category 3
            </label>
          </div>
        </Collapsible>
      </div>

      {/* Color */}
      <div className="filter-section">
        <Collapsible trigger="Color">
          <div className="filter-options">
            <label>
              <input type="checkbox" name="red" onChange={handleCheckboxChange} /> Red
            </label>
            <label>
              <input type="checkbox" name="blue" onChange={handleCheckboxChange} /> Blue
            </label>
            <label>
              <input type="checkbox" name="green" onChange={handleCheckboxChange} /> Green
            </label>
          </div>
        </Collapsible>
      </div>

      {/* Fabric */}
      <div className="filter-section">
        <Collapsible trigger="Fabric">
          <div className="filter-options">
            <label>
              <input type="checkbox" name="cotton" onChange={handleCheckboxChange} /> Cotton
            </label>
            <label>
              <input type="checkbox" name="silk" onChange={handleCheckboxChange} /> Silk
            </label>
            <label>
              <input type="checkbox" name="wool" onChange={handleCheckboxChange} /> Wool
            </label>
          </div>
        </Collapsible>
      </div>

      {/* Occasion */}
      <div className="filter-section">
        <Collapsible trigger="Occasion">
          <div className="filter-options">
            <label>
              <input type="checkbox" name="casual" onChange={handleCheckboxChange} /> Casual
            </label>
            <label>
              <input type="checkbox" name="formal" onChange={handleCheckboxChange} /> Formal
            </label>
            <label>
              <input type="checkbox" name="party" onChange={handleCheckboxChange} /> Party
            </label>
          </div>
        </Collapsible>
      </div>

      {/* Work */}
      <div className="filter-section">
        <Collapsible trigger="Work">
          <div className="filter-options">
            <label>
              <input type="checkbox" name="embroidery" onChange={handleCheckboxChange} /> Embroidery
            </label>
            <label>
              <input type="checkbox" name="print" onChange={handleCheckboxChange} /> Print
            </label>
            <label>
              <input type="checkbox" name="handcrafted" onChange={handleCheckboxChange} /> Handcrafted
            </label>
          </div>
        </Collapsible>
      </div>

      {/* Size */}
      <div className="filter-section">
        <Collapsible trigger="Size">
          <div className="filter-options">
            <label>
              <input type="checkbox" name="small" onChange={handleCheckboxChange} /> Small
            </label>
            <label>
              <input type="checkbox" name="medium" onChange={handleCheckboxChange} /> Medium
            </label>
            <label>
              <input type="checkbox" name="large" onChange={handleCheckboxChange} /> Large
            </label>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default Filter;
