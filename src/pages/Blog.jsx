import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Calendar, User, ArrowRight, Search, TrendingUp, BookOpen, Award, Users as UsersIcon } from 'lucide-react'
import './Blog.css'

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Update selected category when URL query parameter changes
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    } else {
      setSelectedCategory('all')
    }
  }, [searchParams])

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen },
    { id: 'news', name: 'News', icon: TrendingUp },
    { id: 'research', name: 'Research', icon: Award },
    { id: 'student-life', name: 'Student Life', icon: UsersIcon },
    { id: 'alumni', name: 'Alumni', icon: Award }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Premier College Ranks Among Top 10 Institutions Nationally",
      category: "news",
      date: "March 1, 2026",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=85&auto=format",
      excerpt: "We are proud to announce that Premier College has been ranked among the top 10 educational institutions in the country...",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Breakthrough Research in Renewable Energy by Our Faculty",
      category: "research",
      date: "February 28, 2026",
      author: "Dr. Amit Patel",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80",
      excerpt: "Our research team has made significant progress in developing cost-effective solar panel technology...",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 3,
      title: "A Day in the Life of a Premier College Student",
      category: "student-life",
      date: "February 25, 2026",
      author: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop&q=80",
      excerpt: "From early morning classes to late-night study sessions, discover what makes student life at Premier College unique...",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Alumni Success Story: From Campus to Silicon Valley",
      category: "alumni",
      date: "February 20, 2026",
      author: "Rahul Verma",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
      excerpt: "Meet Ananya Reddy, Class of 2020, who now leads a team at a major tech company in Silicon Valley...",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "New State-of-the-Art AI Lab Inaugurated",
      category: "news",
      date: "February 15, 2026",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80",
      excerpt: "The college inaugurated a cutting-edge AI and Machine Learning laboratory equipped with the latest technology...",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Student Research Paper Published in International Journal",
      category: "research",
      date: "February 10, 2026",
      author: "Dr. Meera Sharma",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80",
      excerpt: "Final year students' groundbreaking research on quantum computing has been accepted for publication...",
      readTime: "6 min read"
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  const stats = [
    { value: "200+", label: "Articles" },
    { value: "50+", label: "Contributors" },
    { value: "10K+", label: "Readers" },
    { value: "5", label: "Categories" }
  ]

  return (
    <div className="blog-page">
      {/* Hero Section - Fixed Background */}
      <section 
        className="page-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=2400&h=1600&fit=crop&q=85&auto=format)`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Insights & News</h1>
            <p>Stay Updated with Latest Happenings</p>
          </div>
        </div>
      </section>

      {/* Spacer for scroll effect */}
      <div className="hero-spacer"></div>

      {/* Content that overlaps hero */}
      <div className="content-overlay">

      {/* Stats Section */}
      <section className="blog-stats-section">
        <div className="container-custom">
          <div className="stats-grid-blog">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-blog">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      {featuredPosts.length > 0 && (
        <section className="featured-blog-section section-padding bg-light">
          <div className="container-custom">
            <div className="section-title-blog">
              <h2>Featured Articles</h2>
              <p>Must-read stories from our community</p>
            </div>
            <div className="featured-blog-grid">
              {featuredPosts.map((post) => (
                <article key={post.id} className="featured-blog-card">
                  <div className="featured-blog-image">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="featured-badge-blog">Featured</span>
                  </div>
                  <div className="featured-blog-content">
                    <span className="blog-category-tag">{post.category.replace('-', ' ')}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="featured-blog-meta">
                      <div className="meta-item-blog">
                        <Calendar size={18} />
                        <span>{post.date}</span>
                      </div>
                      <div className="meta-item-blog">
                        <User size={18} />
                        <span>{post.author}</span>
                      </div>
                      <span className="read-time-featured">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="btn-featured-blog">
                      Read Article
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Section */}
      <section className="all-blog-section section-padding">
        <div className="container-custom">
          <div className="section-title-blog">
            <h2>All Articles</h2>
            <p>Explore our complete collection of insights and stories</p>
          </div>

          {/* Search and Filters */}
          <div className="blog-filter-section">
            <div className="search-box-blog">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="search-clear-blog"
                  onClick={() => setSearchTerm('')}
                >
                  x
                </button>
              )}
            </div>
            <div className="category-filters-blog">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn-blog ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <category.icon size={18} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-count-blog">
            <p>Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}</p>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card hover-lift">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="blog-category">{post.category.replace('-', ' ')}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><Calendar size={16} /> {post.date}</span>
                    <span><User size={16} /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="read-time">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="container-custom">
          <div className="cta-content-blog">
            <BookOpen size={60} />
            <h2>Want to Contribute?</h2>
            <p>Share your stories, research, and insights with our community</p>
            <a href="mailto:blog@premiercollege.edu" className="btn-cta-blog">
              Submit Article
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
      </div> {/* Close content-overlay */}
    </div>
  )
}

export default Blog
