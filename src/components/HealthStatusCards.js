import React from 'react';
import '../styles/HealthStatusCards.css';
import { healthStatusData } from '../data/healthStatusData';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthStatusData.map((card, index) => (
        <div key={index} className="health-status-card">
          <div className="status-indicator" style={{ backgroundColor: card.color }}></div>
          <div className="status-details">
            <h4>{card.title}</h4>
            <p>{card.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;