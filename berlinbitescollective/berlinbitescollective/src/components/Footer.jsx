// Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <ul>
              <li><a href="#">Imprint</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Notice</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} BerlinBites Collective. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
