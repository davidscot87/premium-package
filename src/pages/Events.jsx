import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users, ArrowRight, TrendingUp, Star, Award } from 'lucide-react'
import './Events.css'

const Events = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedType, setSelectedType] = useState('all')

  // Update selected type when URL query parameter changes
  useEffect(() => {
    const typeParam = searchParams.get('type')
    if (typeParam) {
      setSelectedType(typeParam)
    } else {
      setSelectedType('all')
    }
  }, [searchParams])

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  const eventTypes = [
    { id: 'all', name: 'All Events', icon: Star },
    { id: 'academic', name: 'Academic', icon: Award },
    { id: 'cultural', name: 'Cultural', icon: TrendingUp },
    { id: 'sports', name: 'Sports', icon: TrendingUp },
    { id: 'workshops', name: 'Workshops', icon: Award }
  ]

  const eventsData = [
    {
      id: 1,
      title: "Annual Tech Symposium 2026",
      type: "academic",
      date: "March 15-17, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
      description: "Three-day technology conference featuring industry experts, workshops, and project exhibitions",
      attendees: "500+",
      featured: true
    },
    {
      id: 2,
      title: "Cultural Fest - Kaleidoscope",
      type: "cultural",
      date: "April 5-7, 2026",
      time: "10:00 AM - 8:00 PM",
      location: "College Campus",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80",
      description: "Annual cultural extravaganza with music, dance, drama, and art competitions",
      attendees: "1000+",
      featured: true
    },
    {
      id: 3,
      title: "Inter-College Sports Meet",
      type: "sports",
      date: "March 20-22, 2026",
      time: "7:00 AM - 6:00 PM",
      location: "Sports Complex",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&q=80",
      description: "Annual sports championship featuring athletics, cricket, football, and more",
      attendees: "800+"
    },
    {
      id: 4,
      title: "AI & Machine Learning Workshop",
      type: "workshops",
      date: "March 25, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab A",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80",
      description: "Hands-on workshop on AI fundamentals and practical ML applications",
      attendees: "100"
    },
    {
      id: 5,
      title: "Science Exhibition",
      type: "academic",
      date: "April 10-12, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Science Block",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80",
      description: "Student research projects and innovative science experiments showcase",
      attendees: "600+"
    },
    {
      id: 6,
      title: "Entrepreneurship Summit",
      type: "workshops",
      date: "April 15, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Conference Hall",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80",
      description: "Learn from successful entrepreneurs and pitch your startup ideas",
      attendees: "200+"
    }
  ]

  const filteredEvents = eventsData.filter(event => 
    selectedType === 'all' || event.type === selectedType
  )

  const featuredEvents = eventsData.filter(event => event.featured)
  const upcomingEvents = eventsData.filter(event => !event.featured).slice(0, 3)

  const stats = [
    { value: "50+", label: "Annual Events" },
    { value: "5000+", label: "Participants" },
    { value: "100+", label: "Workshops" },
    { value: "20+", label: "Competitions" }
  ]

  return (
    <div className="events-page">
      {/* Hero Section - Fixed Background */}
      <section 
        className="page-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2400&h=1600&fit=crop&q=85&auto=format)`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Events & Activities</h1>
            <p>Stay Updated with Campus Happenings</p>
          </div>
        </div>
      </section>

      {/* Spacer for scroll effect */}
      <div className="hero-spacer"></div>

      {/* Content that overlaps hero */}
      <div className="content-overlay">

      {/* Stats Section */}
      <section className="events-stats-section">
        <div className="container-custom">
          <div className="stats-grid-events">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-events">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      {featuredEvents.length > 0 && (
        <section className="featured-events-section section-padding bg-light">
          <div className="container-custom">
            <div className="section-title-events">
              <h2>Featured Events</h2>
              <p>Don't miss these exciting upcoming events</p>
            </div>
            <div className="featured-events-grid">
              {featuredEvents.map((event) => (
                <div key={event.id} className="featured-event-card">
                  <div className="featured-event-image">
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <span className="featured-badge">Featured</span>
                  </div>
                  <div className="featured-event-content">
                    <span className="event-type-tag">{event.type}</span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div className="featured-event-meta">
                      <div className="meta-item-events">
                        <Calendar size={18} />
                        <span>{event.date}</span>
                      </div>
                      <div className="meta-item-events">
                        <MapPin size={18} />
                        <span>{event.location}</span>
                      </div>
                      <div className="meta-item-events">
                        <Users size={18} />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    <Link to={`/events/${event.id}`} className="btn-featured-event">
                      View Details
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events Section */}
      <section className="all-events-section section-padding">
        <div className="container-custom">
          <div className="section-title-events">
            <h2>All Events</h2>
            <p>Explore our complete calendar of events and activities</p>
          </div>

          {/* Event Filters */}
          <div className="event-filters">
            {eventTypes.map(type => (
              <button
                key={type.id}
                className={`filter-btn-events ${selectedType === type.id ? 'active' : ''}`}
                onClick={() => setSelectedType(type.id)}
              >
                <type.icon size={18} />
                <span>{type.name}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="results-count">
            <p>Showing <strong>{filteredEvents.length}</strong> {filteredEvents.length === 1 ? 'event' : 'events'}</p>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className="event-card hover-lift">
                <div className="event-image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  <span className="event-type-badge">{event.type}</span>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="event-details">
                    <div className="detail-item">
                      <Calendar size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={18} />
                      <span>{event.time}</span>
                    </div>
                    <div className="detail-item">
                      <MapPin size={18} />
                      <span>{event.location}</span>
                    </div>
                    <div className="detail-item">
                      <Users size={18} />
                      <span>{event.attendees} Expected</span>
                    </div>
                  </div>
                  <Link to={`/events/${event.id}`} className="btn-event-details">
                    View Details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta-section">
        <div className="container-custom">
          <div className="cta-content-events">
            <h2>Want to Organize an Event?</h2>
            <p>Get in touch with our events team to plan your next campus event</p>
            <Link to="/contact" className="btn-cta-events">
              Contact Events Team
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      </div> {/* Close content-overlay */}
    </div>
  )
}

export default Events
