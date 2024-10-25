import React from 'react';
import '../styles/cart.css';

const Cart = ({ cartItems = [], removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Choose your style</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: Rs {item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
