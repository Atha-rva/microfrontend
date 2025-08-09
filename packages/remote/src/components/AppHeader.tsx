import { useEffect, useState } from 'react';
import './AppCommon.css';

const AppHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
          <span className="logo-icon">⚡</span>
        <nav className="nav-links">
          <a href="#" className="nav-link">
            <span>Discover</span>
            <div className="nav-underline"></div>
          </a>
          <a href="#" className="nav-link">
            <span>Categories</span>
            <div className="nav-underline"></div>
          </a>
          <a href="#" className="nav-link">
            <span>My Apps</span>
            <div className="nav-underline"></div>
          </a>
          <a href="#" className="nav-link">
            <span>My Activated Apps</span>
            <div className="nav-underline"></div>
          </a>
        </nav>
        <div className="user-actions">
          <button className="btn-ghost">Log In</button>
          <button className="btn-primary">
            <span>Get Started</span>
            <div className="btn-shine"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;