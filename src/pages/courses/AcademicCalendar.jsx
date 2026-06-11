import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, BookOpen, AlertCircle, ArrowRight } from 'lucide-react'
import { academicCalendar } from '../../data/coursesData'
import './CourseCategories.css'

const AcademicCalendar = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getEventIcon = (type) => {
    switch(type) {
      case 'exam': return ''
      case 'holiday': return ''
      case 'event': return ''
      case 'registration': return ''
      case 'academic': return ''
      default: return ''
    }
  }

  return (
    <div className="category-page">
      <section 
        className="category-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=2400&h=1600&fit=crop&q=85)`
        }}
      >
        <div className="container-custom">
          <div className="category-hero-content">
            <div className="category-icon"></div>
            <h1>Academic Calendar</h1>
            <p>Plan your academic year with our comprehensive calendar featuring important dates, events, and examination schedules</p>
            <div className="category-stats">
              <div className="category-stat">
                <span className="category-stat-value">{academicCalendar.currentYear}</span>
                <span className="category-stat-label">Academic Year</span>
              </div>
              <div className="category-stat">
                <span className="category-stat-value">{academicCalendar.semesters.length}</span>
                <span className="category-stat-label">Semesters</span>
              </div>
              <div className="category-stat">
                <span className="category-stat-value">{academicCalendar.importantDates.length}</span>
                <span className="category-stat-label">Key Dates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="category-content">
        <div className="container-custom">
          {/* Semester Cards */}
          <div className="calendar-container">
            {academicCalendar.semesters.map((semester, index) => (
              <div key={index} className="semester-card">
                <div className="semester-header">
                  <div className="semester-icon">
                    <Calendar size={28} />
                  </div>
                  <div className="semester-info">
                    <h3>{semester.name}</h3>
                    <p className="semester-dates">
                      {semester.startDate} - {semester.endDate}
                    </p>
                  </div>
                </div>

                <div className="calendar-events">
                  {semester.events.map((event, idx) => (
                    <div key={idx} className={`calendar-event type-${event.type}`}>
                      <div className="event-date">
                        <span>{getEventIcon(event.type)}</span> {event.date}
                      </div>
                      <div className="event-details">
                        <div className="event-name">{event.event}</div>
                        <div className="event-type">{event.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Important Dates Section */}
          <div className="important-dates-section">
            <h2>
              <AlertCircle size={32} style={{display: 'inline', marginRight: '1rem'}} />
              Important Dates & Deadlines
            </h2>
            <div className="important-dates-grid">
              {academicCalendar.importantDates.map((item, index) => (
                <div key={index} className="important-date-card">
                  <div className="event-date">
                    {getEventIcon(item.type)} {item.date}
                  </div>
                  <div className="event-details">
                    <div className="event-name">{item.event}</div>
                    <div className="event-type">{item.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: '#f8fafc',
            borderRadius: '16px',
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{width: '4px', height: '30px', background: 'var(--primary-color)', borderRadius: '2px'}}></div>
              <span style={{fontWeight: 600, color: '#475569'}}> Academic</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{width: '4px', height: '30px', background: '#dc2626', borderRadius: '2px'}}></div>
              <span style={{fontWeight: 600, color: '#475569'}}> Examinations</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{width: '4px', height: '30px', background: '#16a34a', borderRadius: '2px'}}></div>
              <span style={{fontWeight: 600, color: '#475569'}}> Holidays</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{width: '4px', height: '30px', background: '#ea580c', borderRadius: '2px'}}></div>
              <span style={{fontWeight: 600, color: '#475569'}}> Events</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="category-cta">
            <div className="cta-content">
              <h2>Ready to Join Us?</h2>
              <p>Start your academic journey with Premier College of Excellence</p>
              <div className="cta-buttons">
                <Link to="/admissions" className="btn-cta-primary">
                  <span>Apply Now</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn-cta-secondary">
                  <span>Download Calendar PDF</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AcademicCalendar
