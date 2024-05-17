import React, { useState } from 'react';
import RestaurantList from './RestaurantList';
import Filter from '../components/Filter'; // Import the Filter component from the correct path

function Home() {
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    outdoorOptions: ''
  });

  // State variable to manage the visibility of the dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleApplyFilter = (newFilters) => {
    setFilters(newFilters);
  };

  // Function to toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    console.log("Dropdown toggled"); // Add this line for debugging
    setDropdownVisible(!dropdownVisible);
  };
  

  return (
    <div className="home-container">
      <h2>Welcome to BerlinBites Collective</h2>
      <p>Discover the best restaurants in Berlin with our community-driven platform. Whether you're craving Italian pasta, Vietnamese pho, or classic German cuisine, we've got you covered.</p>
      <p>Join our community to share your favorite dining spots and explore hidden gems recommended by fellow food enthusiasts.</p>
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
     {/* <Filter onApplyFilter={handleApplyFilter} />  */}
      <RestaurantList filters={filters} /> {/* Pass filters as props */}
    </div>
  );
}

export default Home;
