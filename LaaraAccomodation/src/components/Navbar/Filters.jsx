// src/Filters.jsx
import React from 'react';
import './Filters.css';

const filters = [
  { name: 'Global', icon: 'https://cdn-icons-png.flaticon.com/128/9162/9162844.png' },
  { name: 'Near Me', icon: 'https://cdn-icons-png.flaticon.com/128/12328/12328925.png' },
  { name: 'Conference Hall', icon: 'https://cdn-icons-png.flaticon.com/128/3684/3684019.png' },
  { name: 'Wedding Reception', icon: 'https://cdn-icons-png.flaticon.com/128/15868/15868511.png' },
  { name: 'Party', icon: 'https://cdn-icons-png.flaticon.com/128/1997/1997669.png' },
  { name: 'Exhibition', icon: 'https://cdn-icons-png.flaticon.com/128/10607/10607335.png' },
  { name: 'Adventure', icon: 'https://cdn-icons-png.flaticon.com/128/2822/2822311.png' },
];

const Filters = () => {
  return (
    <div className="filters">
      {filters.map((filter, index) => (
        <div key={index} className="filter-item">
          <img src={filter.icon} alt={`${filter.name} icon`} className="filter-icon" />
          {filter.name}
        </div>
      ))}
    </div>
  );
};

export default Filters;
