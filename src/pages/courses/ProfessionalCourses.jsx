import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock, Users, Award, CheckCircle, ArrowRight, Grid, List, Briefcase } from 'lucide-react'
import { professionalCourses } from '../../data/coursesData'
import './CourseCategories.css'

const ProfessionalCourses = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('title')
  const [filterCategory, setFilterCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ['all', ...new Set(professionalCourses.map(p => p.category))]

  const filteredCourses = professionalCourses
    .filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = filterCategory === 'all' || course.category === filterCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      if (sortBy === 'duration') return a.duration.localeCompare(b.duration)
      if (sortBy === 'fees') return parseInt(a.fees.replace(/[^0-9]/g, '')) - parseInt(b.fees.replace(/[^0-9]/g, ''))
      return 0
    })

  const totalSeats = professionalCourses.reduce((sum, c) => sum + c.seats, 0)

  return (
    <div className="category-page">
      <section 
        className="category-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=2400&h=1600&fit=crop&q=85)`
        }}
      >
        <div className="container-custom">
          <div className="category-hero-content">
            <div className="category-icon"></div>
            <h1>Professional & Skill Courses</h1>
            <p>Master in-demand skills with expert-led training programs designed for career advancement and professional excellence</p>
            <div className="category-stats">
              <div className="category-stat">
                <span className="category-stat-value">{professionalCourses.length}</span>
                <span className="category-stat-label">Courses</span>
              </div>
              <div className="category-stat">
                <span className="category-stat-value">{totalSeats}</span>
                <span className="category-stat-label">Total Seats</span>
              </div>
              <div className="category-stat">
                <span className="category-stat-value">100%</span>
                <span className="category-stat-label">Job Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category-filters">
        <div className="container-custom">
          <div className="filter-controls">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search professional courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-group">
              <label>Category:</label>
              <select 
                className="filter-select"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort by:</label>
              <select 
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="title">Name</option>
                <option value="duration">Duration</option>
                <option value="fees">Fees</option>
              </select>
            </div>

            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={18} />
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="category-content">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <div className={viewMode === 'grid' ? 'courses-grid' : 'courses-list'}>
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} loading="lazy" />
                    <div className="course-badge">Industry Ready</div>
                  </div>
                  <div className="course-body">
                    <div className="course-category-tag">{course.category}</div>
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    
                    <div className="course-highlights">
                      {course.highlights.map((highlight, idx) => (
                        <div key={idx} className="highlight-item">
                          <CheckCircle size={16} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="course-meta">
                      <div className="meta-item">
                        <Clock size={18} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="meta-item">
                        <Users size={18} />
                        <span>{course.seats} Seats</span>
                      </div>
                      <div className="meta-item">
                        <Award size={18} />
                        <span>{course.eligibility}</span>
                      </div>
                      <div className="meta-item">
                        <Briefcase size={18} />
                        <span>{course.modules?.length || course.technologies?.length} Topics</span>
                      </div>
                    </div>

                    <div className="course-footer">
                      <div className="course-price">{course.fees}</div>
                      <Link to="/admissions" className="btn-enroll">
                        <span>Enroll Now</span>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <Search size={48} />
              </div>
              <h3>No courses found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}

          <div className="category-cta">
            <div className="cta-content">
              <h2>Advance Your Professional Career</h2>
              <p>Learn from industry experts and get job-ready skills</p>
              <div className="cta-buttons">
                <Link to="/admissions" className="btn-cta-primary">
                  <span>Enroll Now</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn-cta-secondary">
                  <span>Talk to Expert</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfessionalCourses
