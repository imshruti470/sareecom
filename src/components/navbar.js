import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Skriti</h1>
        <p className="navbar-tagline">Saree Sanskriti</p>
      </div>
      <ul className="navbar-links">
        <li><a href="#new-arrivals">New Arrivals</a></li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="#saree" className="dropdown-toggle">Saree</a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#option1">Option 1</a></li>
              <li><a href="#option2">Option 2</a></li>
            </ul>
          )}
        </li>
        <li><a href="#my-orders">My Orders</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
