import { useState } from 'react';
import './AppCommon.css';

const AppSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <div className="app-search">
      <div className="hero-section">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Amazing
            <br />
            {/* <span className="gradient-text">Micro Apps</span> */}
          </h1>
          <p className="hero-subtitle">
            Powerful tools at your fingertips. Find the perfect micro app to boost your productivity and creativity.
          </p>
          <div className={`search-container ${focused ? 'focused' : ''}`}>
            <div className="search-glow"></div>
            <input
              type="text"
              placeholder="Search for micro apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="search-input"
            />
            <button className="search-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>
          <div className="search-filters">
            <span>Popular:</span>
            {['Productivity', 'Design', 'Development', 'AI Tools'].map((tag, i) => (
              <button key={i} className="filter-tag">
                {tag}
                <div className="tag-glow"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSearch;