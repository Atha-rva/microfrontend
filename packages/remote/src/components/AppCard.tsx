import React, { useState } from 'react';
import './AppCommon.css';

interface AppCardProps {
  name: string;
  description: string;
  rating: number;
  category: string;
  icon: string;
  featured?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ name, description, rating, category, icon, featured = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div 
        className={`app-card ${featured ? 'featured' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="card-glow"></div>
        <div className="app-icon">
          <span className="icon-emoji">{icon}</span>
          <div className="icon-ripple"></div>
        </div>
        <div className="app-info">
          <h3>{name}</h3>
          <p className="app-description">{description}</p>
          <div className="app-meta">
            <div className="app-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">{rating}</span>
            </div>
            <span className="app-category">{category}</span>
          </div>
        </div>
        <button className={`app-action ${hovered ? 'hovered' : ''}`}>
          <span>Add to Dashboard</span>
          <div className="button-shine"></div>
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>
      </>
  )}

export default AppCard;