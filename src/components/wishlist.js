import React from 'react';
import '../styles/wishlist.css';

const Wishlist = ({ wishlistItems = [], removeFromWishlist, addToCart }) => {
  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="wishlist-item-details">
                <h4>{item.name}</h4>
                <p>Price: Rs {item.price}</p>
              </div>
              <button onClick={() => addToCart(item)} className="add-to-cart-button">Add to Cart</button>
              <button onClick={() => removeFromWishlist(item.id)} className="remove-button">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
