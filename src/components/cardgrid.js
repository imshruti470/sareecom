import React, { useState, useEffect } from 'react';
import '../styles/cardgrid.css';
import Cart from './cart';
import Wishlist from './wishlist';

const CardGridWithFilter = ({ cartItems, wishlistItems, addToCart, addToWishlist, removeFromCart, removeFromWishlist }) => {
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

  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedFabric, setSelectedFabric] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [view, setView] = useState('products'); // To control visibility of components

  // Filtering function
  const filteredCards = cardData.filter(card => {
    const isInPriceRange = card.price <= maxPrice; // Adjusted for single slider
    const isFabricMatch = selectedFabric ? card.fabric === selectedFabric : true;
    const isColorMatch = selectedColor ? card.color === selectedColor : true;
    return isInPriceRange && isFabricMatch && isColorMatch;
  });

  // Debugging state changes
  useEffect(() => {
    console.log("Cart Items Updated:", cartItems);
    console.log("Wishlist Items Updated:", wishlistItems);
  }, [cartItems, wishlistItems]);

  return (
    <div className="container">
      {/* Navbar for switching between views */}
     

      {/* Filter Component */}
      {view === 'products' && (
        <div className="filter-component">
          <h3>Filters</h3>
          <div className="price-slider">
            <label>Max Price: </label>
            <div>
              <input
                type="range"
                min="100"
                max="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(+e.target.value)}
                step="100"
              />
            </div>
            <p>Price: Rs 100 - Rs {maxPrice}</p>
          </div>
          <div>
            <label>Fabric: </label>
            <select onChange={(e) => setSelectedFabric(e.target.value)} value={selectedFabric}>
              <option value="">All</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="chiffon">Chiffon</option>
              <option value="georgette">Georgette</option>
            </select>
          </div>
          <div>
            <label>Color: </label>
            <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>
        </div>
      )}

      {/* Card Grid */}
      {view === 'products' && (
        <div className="card-grid">
          {filteredCards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.imageUrl} alt={card.name} />
              <h4>{card.name}</h4>
              <p>Price: Rs {card.price}</p>
              <button onClick={() => addToCart(card)}>Add to Cart</button>
              <button onClick={() => addToWishlist(card)}>Add to Wishlist</button>
            </div>
          ))}
        </div>
      )}

      {/* Cart and Wishlist Components */}
      {view === 'cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
      {view === 'wishlist' && <Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} addToCart={addToCart} />}
    </div>
  );
};

export default CardGridWithFilter;
