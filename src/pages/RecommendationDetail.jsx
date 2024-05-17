import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './RecommendationDetail.css';  

function RecommendationDetail() {
  const { id } = useParams(); 
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`https://berlinbites-collective.adaptable.app/restaurants/${id}`)
      .then(response => response.json())
      .then(data => setRestaurant(data))
      .catch(error => console.error('Error fetching restaurant details:', error));
  }, [id]); 

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="restaurant-item">
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p><strong>Description:</strong> {restaurant.description}</p>
      <p><strong>Price Range:</strong> {restaurant.priceRange}</p>
      <p><strong>Outdoor Options:</strong> {restaurant.outdoorOptions}</p>
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Opening Hours:</strong> {restaurant.openingHours}</p>
      <p><strong>Website:</strong> <a href={restaurant.website} target="_blank" rel="noopener noreferrer">{restaurant.website}</a></p>
    </div>
  );
}

export default RecommendationDetail;
