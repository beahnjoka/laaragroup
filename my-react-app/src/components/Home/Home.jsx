// src/Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch('http://localhost:3000/houses');
      const data = await response.json();
      setHouses(data);
    };

    fetchHouses();
  }, []);

  return (
    <div className="home-container">
      {houses.map(house => (
        <div key={house.id} className="house-card">
          <img src={house.image} alt={`House in ${house.location}`} />
          <div className="house-info">
            <h2>{house.location}</h2>
            <p>Type: {house.type}</p>
            <p>Distance: {house.distance}</p>
            <p>Price: {house.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
