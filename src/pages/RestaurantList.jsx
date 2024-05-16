import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantList.css';
import EditForm from './EditForm'; 

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [editRestaurant, setEditRestaurant] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    description: '',
    address: '',
    openingHours: '',
    website: ''
  });

  useEffect(() => {
    fetch('https://berlinbites-collective.adaptable.app/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://berlinbites-collective.adaptable.app/restaurants/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
      } else {
        console.error('Failed to delete restaurant');
      }
    })
    .catch(error => {
      console.error('Error deleting restaurant:', error);
    });
  };

  const handleEdit = (restaurant) => {
    setEditRestaurant(restaurant);
    setFormData({
      name: restaurant.name,
      cuisine: restaurant.cuisine,
      description: restaurant.description,
      address: restaurant.address,
      openingHours: restaurant.openingHours,
      website: restaurant.website
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send PUT request to update the restaurant details
    fetch(`https://berlinbites-collective.adaptable.app/restaurants/${editRestaurant.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // Update restaurant details in the UI
        setRestaurants(restaurants.map(restaurant =>
          restaurant.id === editRestaurant.id ? formData : restaurant
        ));
        setEditRestaurant(null); // Close the edit form
      } else {
        console.error('Failed to update restaurant');
      }
    })
    .catch(error => {
      console.error('Error updating restaurant:', error);
    });
  };

  return (
    <div className="restaurant-list">
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id} className="restaurant-item">
            <h3>{restaurant.name}</h3>
            <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
            <p><strong>Description:</strong> {restaurant.description}</p>
            <p><strong>Address:</strong> {restaurant.address}</p>
            <p><strong>Opening Hours:</strong> {restaurant.openingHours}</p>
            <p><strong>Website:</strong> <a href={restaurant.website}>{restaurant.website}</a></p>
            <Link to={`/restaurant/${restaurant.id}`}>View Details</Link>
            {/* Buttons for deleting and editing the restaurant */}
            <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
            <Link to={`/editform/${restaurant.id}`}>Edit</Link> {/* Link to EditForm */}
          </li>
        ))}
      </ul>
      <Link to="/addrecommendation" className="add-recommendation-button">Add Recommendation</Link>
      {editRestaurant && (
        <div className="edit-form">
          <h2>Edit Restaurant</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Restaurant</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Cuisine:</label>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Opening Hours:</label>
              <input
                type="text"
                name="openingHours"
                value={formData.openingHours}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Website:</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default RestaurantList;
