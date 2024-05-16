import React, { useState } from 'react';
import RestaurantList from './RestaurantList';
import Filter from '../components/Filter'; // Import the Filter component from the correct path

function Home() {
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    outdoorOptions: ''
  });

  const handleApplyFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="home-container">
      <h2>Welcome to BerlinBites Collective</h2>
      <p>Discover the best restaurants in Berlin with our community-driven platform. Whether you're craving Italian pasta, Vietnamese pho, or classic German cuisine, we've got you covered.</p>
      <p>Join our community to share your favorite dining spots and explore hidden gems recommended by fellow food enthusiasts.</p>
      <Filter onApplyFilter={handleApplyFilter} /> {/* Pass onApplyFilter callback */}
      <RestaurantList filters={filters} /> {/* Pass filters as props */}
    </div>
  );
}

export default Home;
