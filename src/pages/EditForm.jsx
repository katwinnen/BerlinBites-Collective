import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './RestaurantList.css';

function EditForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    description: '',
    address: '',
    openingHours: '',
    website: '',
    image: '',
    priceRange: '€',
    outdoorOptions: 'Yes'
  });

  useEffect(() => {
    fetch(`https://berlinbites-collective.adaptable.app/restaurants/${id}`)
      .then(response => response.json())
      .then(data => {
        setFormData(data);
      })
      .catch(error => console.error('Error fetching restaurant data:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://berlinbites-collective.adaptable.app/restaurants/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Restaurant updated successfully');
        window.location.href = '/restaurantlist';
      } else {
        console.error('Failed to update restaurant');
      }
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  return (
    <div className="edit-form">
      <h2>Edit Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cuisine">Cuisine:</label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="priceRange">Price Range:</label>
          <select id="priceRange" name="priceRange" value={formData.priceRange} onChange={handleChange}>
            <option value="€">€</option>
            <option value="€€">€€</option>
            <option value="€€€">€€€</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="outdoorOptions">Outdoor Options:</label>
          <select id="outdoorOptions" name="outdoorOptions" value={formData.outdoorOptions} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="openingHours">Opening Hours:</label>
          <input
            type="text"
            id="openingHours"
            name="openingHours"
            value={formData.openingHours}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <button className="btn" type="submit">Update</button>
        <Link className="link" to="/restaurantlist">Cancel</Link>
      </form>
    </div>
  );
}

export default EditForm;
