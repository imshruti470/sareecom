import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Skriti</h1>
        <p className="navbar-tagline">
          <Link to="/">Saree Sanskriti</Link>
        </p>
      </div>
      <ul className="navbar-links">
        <li><Link to="/new-arrivals">New Arrivals</Link></li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link to="/saree" className="dropdown-toggle">Saree</Link>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/saree/option1">Option 1</Link></li>
              <li><Link to="/saree/option2">Option 2</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/order">My Orders</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
