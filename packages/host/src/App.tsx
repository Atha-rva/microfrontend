import { useState } from 'react'
import './App.css'
import AppCard from 'remoteApp/AppCard';
import AppSearch from 'remoteApp/AppSearch';
import AppCategories from 'remoteApp/AppCategories';
import AppHeader from 'remoteApp/AppHeader';

function App() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const [apps] = useState([
    {
      id: 1,
      name: "TaskFlow Pro",
      description: "Advanced task management with AI-powered scheduling and team collaboration features.",
      rating: 4.8,
      category: "Productivity",
      icon: "📋",
      featured: true
    },
    {
      id: 2,
      name: "ColorPalette Generator",
      description: "Create stunning color schemes with AI assistance and export to all major design tools.",
      rating: 4.9,
      category: "Design",
      icon: "🎨"
    },
    {
      id: 3,
      name: "CodeSnippet Manager",
      description: "Organize, search, and share your code snippets with syntax highlighting and team sync.",
      rating: 4.7,
      category: "Development",
      icon: "💻"
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      description: "Real-time data visualization with customizable charts and automated reporting.",
      rating: 4.6,
      category: "Analytics",
      icon: "📊"
    },
    {
      id: 5,
      name: "Social Media Scheduler",
      description: "Schedule posts across all platforms with AI-powered content optimization.",
      rating: 4.8,
      category: "Marketing",
      icon: "📱"
    },
    {
      id: 6,
      name: "Expense Tracker Pro",
      description: "Smart expense tracking with receipt scanning and automatic categorization.",
      rating: 4.5,
      category: "Finance",
      icon: "💰",
      featured: true
    },
    {
      id: 7,
      name: "Health Monitor",
      description: "Track your wellness journey with comprehensive health metrics and insights.",
      rating: 4.6,
      category: "Health",
      icon: "❤️"
    },
    {
      id: 8,
      name: "AI Content Writer",
      description: "Generate high-quality content with advanced AI writing assistance.",
      rating: 4.9,
      category: "Productivity",
      icon: "✍️",
      featured: true
    }
  ]);

  // Filter apps based on selected category
  const filteredApps = selectedCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  const handleCategoryChange = (category:any) => {
    setSelectedCategory(category);
  };

  const handleViewModeChange = (mode:any) => {
    setViewMode(mode);
  };

  return (
    <div className="micro-app-store">
      <AppHeader />
      <AppSearch />
      <hr />
      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            <aside className="sidebar" >
              <AppCategories 
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
              
              <div className="featured-section">
                <h3>🔥 Trending</h3>
                <div className="trending-apps">
                  <div className="trending-item">
                    <span className="trending-icon">🚀</span>
                    <div>
                      <div className="trending-name">AI Writer</div>
                      <div className="trending-desc">+127% this week</div>
                    </div>
                  </div>
                  <div className="trending-item">
                    <span className="trending-icon">📈</span>
                    <div>
                      <div className="trending-name">Data Viz</div>
                      <div className="trending-desc">+89% this week</div>
                    </div>
                  </div>
                  <div className="trending-item">
                    <span className="trending-icon">💻</span>
                    <div>
                      <div className="trending-name">Code Assistant</div>
                      <div className="trending-desc">+156% this week</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stats-section">
                <h3>📊 Quick Stats</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">{apps.length}</div>
                    <div className="stat-label">Total Apps</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">{apps.filter(app => app.featured).length}</div>
                    <div className="stat-label">Featured</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">{Math.round(apps.reduce((sum, app) => sum + app.rating, 0) / apps.length * 10) / 10}</div>
                    <div className="stat-label">Avg Rating</div>
                  </div>
                </div>
              </div>
            </aside>
            
            <div className="apps-section">
              <div className="section-header">
                <div className="header-content">
                  <h2>
                    {selectedCategory === 'All' ? 'All Apps' : `${selectedCategory} Apps`}
                    <span className="app-count">({filteredApps.length})</span>
                  </h2>
                  <p className="section-subtitle">
                    Discover powerful micro apps to enhance your productivity
                  </p>
                </div>
                <div className="view-toggle">
                  <button 
                    className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => handleViewModeChange('grid')}
                  >
                    <span className="toggle-icon">⊞</span>
                    Grid
                  </button>
                  <button 
                    className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => handleViewModeChange('list')}
                  >
                    <span className="toggle-icon">☰</span>
                    List
                  </button>
                </div>
              </div>
              
              {/* Featured Apps Section */}
              {selectedCategory === 'All' && (
                <div className="featured-apps-section">
                  <h3 className="featured-title">⭐ Featured Apps</h3>
                  <div className="featured-apps-grid">
                    {apps.filter(app => app.featured).map(app => (
                      <AppCard
                        key={`featured-${app.id}`}
                        name={app.name}
                        description={app.description}
                        rating={app.rating}
                        category={app.category}
                        icon={app.icon}
                        featured={app.featured}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* All Apps Section */}
              <div className="all-apps-section">
                {selectedCategory !== 'All' && (
                  <h3 className="section-title">
                    All {selectedCategory} Apps
                  </h3>
                )}
                <div className={`apps-grid ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
                  {filteredApps.map(app => (
                    <AppCard
                      key={app.id}
                      name={app.name}
                      description={app.description}
                      rating={app.rating}
                      category={app.category}
                      icon={app.icon}
                      featured={app.featured}
                    />
                  ))}
                </div>
                
                {filteredApps.length === 0 && (
                  <div className="empty-state">
                    <div className="empty-icon">🔍</div>
                    <h3>No apps found</h3>
                    <p>Try selecting a different category or check back later for new apps.</p>
                  </div>
                )}
              </div>

              {/* Load More Section */}
              <div className="load-more-section">
                <button className="load-more-btn">
                  <span>Load More Apps</span>
                  <div className="load-more-spinner"></div>
                </button>
                <p className="load-more-text">
                  Showing {filteredApps.length} of {apps.length} apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>MicroApp Store</h4>
            <p>Discover amazing micro apps for every need</p>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Productivity</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MicroApp Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App