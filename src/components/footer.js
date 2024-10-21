import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Skriti - Celebrating Saree Sanskriti with elegance and tradition.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#saree">Sarees</a></li>
            <li><a href="#my-orders">My Orders</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            <a href="#facebook">Facebook</a> | 
            <a href="#instagram"> Instagram</a> | 
            <a href="#twitter"> Twitter</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Skriti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
