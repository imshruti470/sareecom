import React, { useState } from 'react';
import '../styles/cardgrid.css';

const CardGridWithFilter = () => {
  // Sample data for cards
  const cardData = [
    { id: 1, name: 'Saree 1', price: 1500, imageUrl: 'https://via.placeholder.com/200', fabric: 'cotton', color: 'red' },
    { id: 2, name: 'Saree 2', price: 2000, imageUrl: 'https://via.placeholder.com/200', fabric: 'silk', color: 'blue' },
    { id: 3, name: 'Saree 3', price: 2500, imageUrl: 'https://via.placeholder.com/200', fabric: 'chiffon', color: 'green' },
    { id: 4, name: 'Saree 4', price: 1800, imageUrl: 'https://via.placeholder.com/200', fabric: 'georgette', color: 'red' },
    { id: 5, name: 'Saree 5', price: 2200, imageUrl: 'https://via.placeholder.com/200', fabric: 'cotton', color: 'yellow' },
    { id: 6, name: 'Saree 6', price: 3000, imageUrl: 'https://via.placeholder.com/200', fabric: 'silk', color: 'blue' },
    { id: 7, name: 'Saree 7', price: 2700, imageUrl: 'https://via.placeholder.com/200', fabric: 'chiffon', color: 'green' },
    { id: 8, name: 'Saree 8', price: 3500, imageUrl: 'https://via.placeholder.com/200', fabric: 'georgette', color: 'red' },
    { id: 9, name: 'Saree 9', price: 4000, imageUrl: 'https://via.placeholder.com/200', fabric: 'cotton', color: 'blue' },
  ];

  // State for filter criteria
  const [priceRange, setPriceRange] = useState([100, 10000]);
  const [selectedFabric, setSelectedFabric] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Filtered card data
  const filteredCards = cardData.filter(card => {
    const isInPriceRange = card.price >= priceRange[0] && card.price <= priceRange[1];
    const isFabricMatch = selectedFabric ? card.fabric === selectedFabric : true;
    const isColorMatch = selectedColor ? card.color === selectedColor : true;
    return isInPriceRange && isFabricMatch && isColorMatch;
  });

  return (
    <div className="container">
      {/* Filter Component */}
      <div className="filter-component">
        <h3>Filter</h3>
        <div className="filter-section">
          <label>Price Range</label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
          <span>Max Price: Rs {priceRange[1]}</span>
        </div>
        <div className="filter-section">
          <label>Fabric</label>
          <select onChange={(e) => setSelectedFabric(e.target.value)} value={selectedFabric}>
            <option value="">All Fabrics</option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="chiffon">Chiffon</option>
            <option value="georgette">Georgette</option>
          </select>
        </div>
        <div className="filter-section">
          <label>Color</label>
          <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
            <option value="">All Colors</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
        </div>
      </div>

      {/* Card Grid */}
      <div className="card-grid">
        {filteredCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.name} />
            <h4>{card.name}</h4>
            <p>Price: Rs {card.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGridWithFilter;
