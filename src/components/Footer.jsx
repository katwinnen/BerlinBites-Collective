import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <ul>
              <li><Link to="/imprint">Imprint</Link></li>
              <li><Link to="/privacy">Privacy Notice</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
