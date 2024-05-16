import React, { useState } from 'react';

function Filter({ onApplyFilter }) {
  const [filters, setFilters] = useState({
    cuisine: '',
    priceRange: '',
    outdoorOptions: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log('Selected Filter:', name, value); 
    setFilters(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleApplyFilter = () => {
    console.log('Filters applied:', filters); 
    onApplyFilter(filters);
  };

  return (
    <div className="restaurant-list">
      <h2>Filter Restaurants</h2>
      {/* Cuisine filter */}
      <div>
        <label>Cuisine:</label>
        <select
          name="cuisine"
          value={filters.cuisine}
          onChange={handleFilterChange}
        >
          <option value="">Select Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="German">German</option>
          {/* Add more cuisine options as needed */}
        </select>
      </div>
      {/* Price Range filter */}
      <div>
        <label>Price Range:</label>
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleFilterChange}
        >
          <option value="">Select Price Range</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
      </div>
      {/* Outdoor Options filter */}
      <div>
        <label>Outdoor Options:</label>
        <select
          name="outdoorOptions"
          value={filters.outdoorOptions}
          onChange={handleFilterChange}
        >
          <option value="">Select Outdoor Options</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {/* Apply Filter button */}
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
}

export default Filter;
