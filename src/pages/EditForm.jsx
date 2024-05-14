// Import the necessary modules
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function EditForm() {
  // Retrieve the restaurant object from the location state
  const location = useLocation();
  const { restaurant } = location.state;

  // Initialize form state with restaurant data
  const [formData, setFormData] = useState(restaurant);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (e.g., update restaurant data)
  };

  return (
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
        {/* Repeat for other form fields */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditForm;
