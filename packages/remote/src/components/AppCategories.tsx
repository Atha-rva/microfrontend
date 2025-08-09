import React, { useState } from 'react';
import './AppCommon.css';

const AppCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    { name: "All", count: 124, icon: "🎯" },
    { name: "Productivity", count: 32, icon: "⚡" },
    { name: "Design", count: 18, icon: "🎨" },
    { name: "Development", count: 27, icon: "💻" },
    { name: "Marketing", count: 15, icon: "📈" },
    { name: "Analytics", count: 12, icon: "📊" },
    { name: "Health", count: 8, icon: "💚" },
    { name: "Finance", count: 12, icon: "💰" },
  ];

  return (
    <div className="app-categories">
      <div className="category-header">
        <h3>Categories</h3>
        <div className="category-glow"></div>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a 
              href="#"
              className={activeCategory === index ? 'active' : ''}
              onClick={() => setActiveCategory(index)}
            >
              <div className="category-content">
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </div>
              <div className="category-count-wrapper">
                <span className="category-count">{category.count}</span>
                <div className="count-pulse"></div>
              </div>
              <div className="category-hover-bg"></div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default AppCategories;