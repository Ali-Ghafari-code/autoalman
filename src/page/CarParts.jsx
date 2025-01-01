import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import './CarParts.css';

const CarParts = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    fetch('api/car-parts.json') // مسیر فایل JSON محلی
      .then(response => response.json())
      .then(data => {
        setParts(data.car_parts);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching car parts');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="car-parts-container">
      <h1>Car Parts</h1>
      <div className="parts-list">
        {parts.map((part) => (
          <div
            key={part.id}
            className="part-item"
            onClick={() => setSelectedPart(part)}
          >
            <div className="part-name">{part.name}</div>
            <div className="part-manufacturer">{part.manufacturer}</div>
          </div>
        ))}
      </div>

      {selectedPart && (
        <ProductDetails part={selectedPart} onClose={() => setSelectedPart(null)} />
      )}
    </div>
  );
};

export default CarParts;