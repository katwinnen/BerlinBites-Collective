import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddRecommendation.css';

function AddRecommendation() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://berlinbites-collective.adaptable.app/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        toast.success("Your recommendation has been successfully added to the list of BerlinBites Collective. Thank you for your contribution.", { autoClose: 2000 });
        console.log('Recommendation added successfully');
        window.location.href = '/restaurantlist';
      } else {
        console.error('Failed to add recommendation');
      }
    })
    .catch(error => {
      console.error('Error adding recommendation:', error);
    });
  };

  return (
    <div className="add-recommendation">
      <h2>Add Recommendation</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Restaurant name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
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
          <label>Price Range:</label>
          <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
            <option value="€">€</option>
            <option value="€€">€€</option>
            <option value="€€€">€€€</option>
          </select>
        </div>
        <div className="form-group">
          <label>Outdoor Options:</label>
          <select name="outdoorOptions" value={formData.outdoorOptions} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
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
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddRecommendation;
