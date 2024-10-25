import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'; // Import the Home component
import Wishlist from './components/wishlist';
import Cart from './components/cart';
import Login from './components/login';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CardGridWithFilter from './components/cardgrid'; // Assuming your card grid is here
import Carousel from './components/carousel';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (card) => {
    if (!cartItems.some(item => item.id === card.id)) {
      setCartItems(prevItems => [...prevItems, card]);
    }
  };

  const addToWishlist = (card) => {
    if (!wishlistItems.some(item => item.id === card.id)) {
      setWishlistItems(prevItems => [...prevItems, card]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
         <> <Carousel/>
          <CardGridWithFilter 
            cartItems={cartItems}
            wishlistItems={wishlistItems}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            removeFromCart={removeFromCart}
            removeFromWishlist={removeFromWishlist}
          /></>} 
        />
        <Route path="/wishlist" element={<Wishlist 
            wishlistItems={wishlistItems}
            removeFromWishlist={removeFromWishlist}
            addToCart={addToCart}
          />} 
        />
        <Route path="/cart" element={<Cart 
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />} 
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
