import { useState } from 'react'
import { 
  BookOpen, Search, Filter, Download, ExternalLink, 
  Clock, Users, Star, TrendingUp, Book, FileText,
  Video, Headphones, Globe, Award, ChevronRight
} from 'lucide-react'
import './Library.css'

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources', count: 5000 },
    { id: 'ebooks', name: 'E-Books', count: 2500 },
    { id: 'journals', name: 'Journals', count: 1200 },
    { id: 'videos', name: 'Video Lectures', count: 800 },
    { id: 'research', name: 'Research Papers', count: 500 }
  ]

  const featuredResources = [
    {
      title: 'Advanced Data Structures',
      author: 'Dr. Robert Smith',
      category: 'Computer Science',
      type: 'E-Book',
      rating: 4.8,
      downloads: 1250,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400'
    },
    {
      title: 'Machine Learning Fundamentals',
      author: 'Prof. Sarah Johnson',
      category: 'Artificial Intelligence',
      type: 'Video Course',
      rating: 4.9,
      downloads: 2100,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400'
    },
    {
      title: 'Digital Marketing Strategies',
      author: 'Emma Williams',
      category: 'Business',
      type: 'E-Book',
      rating: 4.7,
      downloads: 980,
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400'
    },
    {
      title: 'Quantum Physics Explained',
      author: 'Dr. Michael Chen',
      category: 'Physics',
      type: 'Journal',
      rating: 4.6,
      downloads: 750,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400'
    }
  ]

  const stats = [
    { icon: Book, label: 'Total Books', value: '50,000+' },
    { icon: FileText, label: 'E-Journals', value: '15,000+' },
    { icon: Video, label: 'Video Lectures', value: '5,000+' },
    { icon: Users, label: 'Active Users', value: '10,000+' }
  ]

  return (
    <div className="library-page">
      {/* Hero Section */}
      <section className="library-hero">
        <div className="container-custom">
          <div className="hero-content">
            <h1>Digital Library</h1>
            <p>Access thousands of books, journals, research papers, and multimedia resources</p>
            
            <div className="search-bar-large">
              <Search size={24} />
              <input 
                type="text"
                placeholder="Search for books, journals, authors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn-search">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="library-stats">
        <div className="container-custom">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon size={32} />
                <div className="stat-info">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="library-categories">
        <div className="container-custom">
          <div className="categories-list">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <span className="count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="featured-resources">
        <div className="container-custom">
          <div className="section-header">
            <h2>Featured Resources</h2>
            <button className="btn-view-all">
              View All <ChevronRight size={18} />
            </button>
          </div>

          <div className="resources-grid">
            {featuredResources.map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-image">
                  <img src={resource.image} alt={resource.title} />
                  <div className="resource-type">{resource.type}</div>
                </div>
                <div className="resource-content">
                  <div className="resource-category">{resource.category}</div>
                  <h3>{resource.title}</h3>
                  <p className="resource-author">by {resource.author}</p>
                  
                  <div className="resource-meta">
                    <div className="rating">
                      <Star size={16} fill="currentColor" />
                      {resource.rating}
                    </div>
                    <div className="downloads">
                      <Download size={16} />
                      {resource.downloads}
                    </div>
                  </div>

                  <div className="resource-actions">
                    <button className="btn-primary">
                      <BookOpen size={18} />
                      Read Now
                    </button>
                    <button className="btn-secondary">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="library-access">
        <div className="container-custom">
          <div className="access-card">
            <div className="access-content">
              <h2>24/7 Digital Access</h2>
              <p>Access our complete digital library anytime, anywhere. All resources are available to registered students and faculty members.</p>
              <button className="btn-access">Get Library Access</button>
            </div>
            <div className="access-features">
              <div className="feature">
                <Clock size={24} />
                <span>24/7 Availability</span>
              </div>
              <div className="feature">
                <Globe size={24} />
                <span>Remote Access</span>
              </div>
              <div className="feature">
                <Download size={24} />
                <span>Offline Reading</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Library
