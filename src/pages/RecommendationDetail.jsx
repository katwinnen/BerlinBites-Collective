import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h2>{restaurant.name}</h2>
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p><strong>Description:</strong> {restaurant.description}</p>
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Opening Hours:</strong> {restaurant.openingHours}</p>
      <p><strong>Website:</strong> <a href={restaurant.website}>{restaurant.website}</a></p>
    </div>
  );
}

export default RecommendationDetail;
