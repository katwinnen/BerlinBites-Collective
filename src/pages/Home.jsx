import React, { useState } from 'react';
import RestaurantList from './RestaurantList';
import Filter from '../components/Filter'; 

function Home() {
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    outdoorOptions: ''
  });

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleApplyFilter = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleDropdown = () => {
    console.log("Dropdown toggled"); 
    setDropdownVisible(!dropdownVisible);
  };
  

  return (
    <div className="home-container">
      <h1>Welcome to BerlinBites Collective</h1>
      <p><italic>Discover the best restaurants in Berlin with our community-driven platform. Whether you're craving Italian pasta, Vietnamese pho, or classic German cuisine, we've got you covered. Join our community to share your favorite dining spots and explore hidden gems recommended by fellow food enthusiasts.</italic></p>
      <div className="dropdown-container">
        <div className="burger-menu-icon" onClick={toggleDropdown}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/addrecommendation">Add Recommendation</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        )}
      </div>
      <RestaurantList filters={filters} /> 
    </div>
  );
}

export default Home;
