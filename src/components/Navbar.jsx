import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for navbar styling

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurantlist">Restaurant List</Link>
        </li>
        <li>
          <Link to="/addrecommendation">Add Recommendation</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
