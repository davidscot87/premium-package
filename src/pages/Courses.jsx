import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  Users, Clock, Award, Search, TrendingUp, Star, 
  CheckCircle, ArrowRight, Sparkles, Target, Zap,
  GraduationCap, Briefcase, Globe
} from 'lucide-react'
import './Courses.css'

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState(null)
  const statsRef = useRef(null)

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  // Update selected category when URL query parameter changes
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    } else {
      setSelectedCategory('all')
    }
  }, [searchParams])

  const categories = [
    { id: 'all', name: 'All Programs', icon: Globe },
    { id: 'engineering', name: 'Engineering', icon: Zap },
    { id: 'science', name: 'Science', icon: Target },
    { id: 'arts', name: 'Arts', icon: Sparkles },
    { id: 'commerce', name: 'Commerce', icon: TrendingUp }
  ]

  const coursesData = [
    {
      id: 1,
      title: "Computer Science & Engineering",
      category: "engineering",
      duration: "4 Years",
      seats: "120",
      fees: "$5,000/year",
      rating: 4.9,
      students: "2,500+",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80",
      description: "Master the art of software development, artificial intelligence, and cutting-edge technologies that shape our digital future.",
      highlights: ["AI & Machine Learning", "Cloud Computing", "Full-Stack Development"],
      badge: "Most Popular",
      outcomes: ["100% Placement", "Top Tech Companies", "Startup Incubation"]
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      category: "engineering",
      duration: "4 Years",
      seats: "100",
      fees: "$4,800/year",
      rating: 4.7,
      students: "1,800+",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80",
      description: "Design, analyze, and innovate mechanical systems with hands-on experience in robotics and advanced manufacturing.",
      highlights: ["Robotics Lab", "CAD/CAM Mastery", "Industry Projects"],
      badge: "High Demand",
      outcomes: ["Global Opportunities", "Research Excellence", "Innovation Hub"]
    },
    {
      id: 3,
      title: "Electrical Engineering",
      category: "engineering",
      duration: "4 Years",
      seats: "90",
      fees: "$4,700/year",
      rating: 4.8,
      students: "1,600+",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80",
      description: "Power the future with expertise in renewable energy, smart grids, and next-generation electrical systems.",
      highlights: ["Smart Grid Tech", "Renewable Energy", "Power Systems"],
      badge: "Future Ready",
      outcomes: ["Green Energy Focus", "Industry Leaders", "Patent Support"]
    },
    {
      id: 4,
      title: "Biotechnology",
      category: "science",
      duration: "4 Years",
      seats: "60",
      fees: "$5,200/year",
      rating: 4.9,
      students: "1,200+",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&q=80",
      description: "Revolutionize healthcare and agriculture through genetic engineering and pharmaceutical innovation.",
      highlights: ["Gene Editing", "Drug Discovery", "Research Labs"],
      badge: "Cutting Edge",
      outcomes: ["Research Grants", "Pharma Partnerships", "Innovation Awards"]
    },
    {
      id: 5,
      title: "Physics",
      category: "science",
      duration: "3 Years",
      seats: "50",
      fees: "$3,500/year",
      rating: 4.6,
      students: "900+",
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop&q=80",
      description: "Explore the fundamental laws of nature with advanced laboratory facilities and research opportunities.",
      highlights: ["Quantum Physics", "Astrophysics", "Research Focus"],
      badge: "Research Intensive",
      outcomes: ["PhD Pathways", "International Collaborations", "Publications"]
    },
    {
      id: 6,
      title: "Chemistry",
      category: "science",
      duration: "3 Years",
      seats: "55",
      fees: "$3,600/year",
      rating: 4.7,
      students: "950+",
      image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=600&fit=crop&q=80",
      description: "Transform matter and create solutions through organic, inorganic, and analytical chemistry expertise.",
      highlights: ["Advanced Labs", "Industrial Chemistry", "Green Chemistry"],
      badge: "Industry Ready",
      outcomes: ["Industry Placements", "Research Projects", "Lab Excellence"]
    },
    {
      id: 7,
      title: "Business Administration",
      category: "commerce",
      duration: "3 Years",
      seats: "100",
      fees: "$4,000/year",
      rating: 4.8,
      students: "2,200+",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
      description: "Lead the business world with strategic thinking, entrepreneurship, and global management skills.",
      highlights: ["Startup Incubation", "Global Exposure", "Leadership Training"],
      badge: "Career Focused",
      outcomes: ["Top Recruiters", "Entrepreneurship", "Global Networks"]
    },
    {
      id: 8,
      title: "Commerce & Accounting",
      category: "commerce",
      duration: "3 Years",
      seats: "80",
      fees: "$3,800/year",
      rating: 4.6,
      students: "1,500+",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
      description: "Master financial management, taxation, and business analytics for a thriving career in finance.",
      highlights: ["CPA Preparation", "Financial Analytics", "Tax Expertise"],
      badge: "Professional Path",
      outcomes: ["Big 4 Placements", "Certifications", "Industry Connect"]
    },
    {
      id: 9,
      title: "English Literature",
      category: "arts",
      duration: "3 Years",
      seats: "70",
      fees: "$3,200/year",
      rating: 4.7,
      students: "1,100+",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=80",
      description: "Immerse yourself in literary excellence, creative writing, and critical analysis of world literature.",
      highlights: ["Creative Writing", "Literary Criticism", "Publishing Opportunities"],
      badge: "Creative Excellence",
      outcomes: ["Publishing Success", "Media Careers", "Academic Excellence"]
    },
    {
      id: 10,
      title: "Psychology",
      category: "arts",
      duration: "3 Years",
      seats: "60",
      fees: "$3,500/year",
      rating: 4.8,
      students: "1,300+",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&h=600&fit=crop&q=80",
      description: "Understand human behavior and mental processes through clinical, counseling, and organizational psychology.",
      highlights: ["Clinical Training", "Counseling Center", "Research Labs"],
      badge: "High Impact",
      outcomes: ["Clinical Practice", "Counseling Careers", "Research Opportunities"]
    },
    {
      id: 11,
      title: "Fine Arts",
      category: "arts",
      duration: "3 Years",
      seats: "40",
      fees: "$3,300/year",
      rating: 4.9,
      students: "800+",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop&q=80",
      description: "Express your creativity through painting, sculpture, digital art, and contemporary art forms.",
      highlights: ["Art Gallery", "Exhibitions", "Master Classes"],
      badge: "Creative Hub",
      outcomes: ["Gallery Exhibitions", "Art Careers", "Creative Industry"]
    },
    {
      id: 12,
      title: "Data Science",
      category: "engineering",
      duration: "4 Years",
      seats: "80",
      fees: "$5,500/year",
      rating: 5.0,
      students: "1,900+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      description: "Unlock insights from data with machine learning, big data analytics, and AI-powered solutions.",
      highlights: ["Big Data Analytics", "ML & AI", "Cloud Platforms"],
      badge: "Trending",
      outcomes: ["Top Salaries", "Tech Giants", "Startup Opportunities"]
    }
  ]

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const stats = [
    { icon: GraduationCap, value: "12+", label: "Premium Programs" },
    { icon: Users, value: "18,000+", label: "Active Students" },
    { icon: Award, value: "95%", label: "Placement Rate" },
    { icon: Briefcase, value: "500+", label: "Industry Partners" }
  ]

  return (
    <div className="courses-page-premium">
      {/* Hero Section - Fixed Background */}
      <section 
        className="page-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=2400&h=1600&fit=crop&q=85&auto=format)`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Our Courses</h1>
            <p>Discover Your Path to Excellence</p>
          </div>
        </div>
      </section>

      {/* Spacer for scroll effect */}
      <div className="hero-spacer"></div>

      {/* Content that overlaps hero */}
      <div className="content-overlay">

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container-custom">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="stat-icon">
                  <stat.icon size={28} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
                <div className="stat-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container-custom">
          <div className="filter-container">
            {/* Search Bar */}
            <div className="search-container-premium">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search programs by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input-premium"
              />
              {searchTerm && (
                <button 
                  className="search-clear"
                  onClick={() => setSearchTerm('')}
                >
                  x
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="category-filters-premium">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn-premium ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <cat.icon size={18} />
                  <span>{cat.name}</span>
                  {selectedCategory === cat.id && (
                    <div className="active-indicator"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-info">
            <p>
              Showing <strong>{filteredCourses.length}</strong> {filteredCourses.length === 1 ? 'program' : 'programs'}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="container-custom">
          <div className="courses-grid-premium">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="course-card-premium"
                style={{animationDelay: `${index * 0.05}s`}}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Badge */}
                {course.badge && (
                  <div className="course-badge-premium">
                    <Star size={12} />
                    <span>{course.badge}</span>
                  </div>
                )}

                {/* Image Container */}
                <div className="course-image-container">
                  <img src={course.image} alt={course.title} loading="lazy" />
                  <div className="image-overlay-premium"></div>
                  
                  {/* Hover Quick Info */}
                  <div className={`quick-info ${hoveredCard === course.id ? 'visible' : ''}`}>
                    <div className="quick-info-item">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="quick-info-item">
                      <Users size={16} />
                      <span>{course.students}</span>
                    </div>
                    <div className="quick-info-item">
                      <Star size={16} />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="course-card-content">
                  {/* Category Tag */}
                  <div className="category-tag">
                    {categories.find(c => c.id === course.category)?.name}
                  </div>

                  {/* Title */}
                  <h3 className="course-title-premium">{course.title}</h3>

                  {/* Description */}
                  <p className="course-description-premium">{course.description}</p>

                  {/* Highlights */}
                  <div className="course-highlights-premium">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="highlight-item">
                        <CheckCircle size={14} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div className="course-outcomes">
                    {course.outcomes.map((outcome, idx) => (
                      <span key={idx} className="outcome-badge">
                        {outcome}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="course-card-footer">
                    <div className="course-meta-premium">
                      <div className="meta-item-premium">
                        <Award size={16} />
                        <span>{course.fees}</span>
                      </div>
                      <div className="meta-item-premium">
                        <Users size={16} />
                        <span>{course.seats} Seats</span>
                      </div>
                    </div>
                    <Link to={`/courses/${course.id}`} className="btn-view-premium">
                      <span>Explore</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="card-border-glow"></div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="no-results-premium">
              <div className="no-results-icon">
                <Search size={48} />
              </div>
              <h3>No programs found</h3>
              <p>Try adjusting your search or filter to find what you're looking for</p>
              <button 
                className="btn-reset-filters"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-premium">
        <div className="container-custom">
          <div className="cta-content-premium">
            <div className="cta-text">
              <h2>Ready to Start Your Journey?</h2>
              <p>Join thousands of successful students who transformed their careers with us</p>
            </div>
            <div className="cta-actions">
              <Link to="/admissions" className="btn-cta-primary">
                <span>Apply Now</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-cta-secondary">
                <span>Talk to Counselor</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div> {/* Close content-overlay */}
    </div>
  )
}

export default Courses
