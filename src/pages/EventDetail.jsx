import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2 } from 'lucide-react'

const EventDetail = () => {
  const { id } = useParams()

  const event = {
    title: "Annual Tech Symposium 2026",
    type: "academic",
    date: "March 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    attendees: "500+",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    description: "Join us for the most anticipated technology conference of the year! The Annual Tech Symposium brings together industry experts, researchers, and students for three days of learning, networking, and innovation.",
    agenda: [
      { day: "Day 1", activities: ["Keynote Speech by Industry Leaders", "Workshop: AI & Machine Learning", "Project Exhibitions"] },
      { day: "Day 2", activities: ["Panel Discussion: Future of Technology", "Hands-on Coding Sessions", "Startup Pitch Competition"] },
      { day: "Day 3", activities: ["Research Paper Presentations", "Networking Session", "Award Ceremony"] }
    ]
  }

  return (
    <div style={{marginTop: '80px'}}>
      <section className="page-hero" style={{backgroundImage: `url(${event.image})`}}>
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <span className="badge-custom">{event.type}</span>
            <h1 style={{marginTop: '1rem'}}>{event.title}</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <Link to="/events" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--primary-color)',
            fontWeight: '600',
            marginBottom: '2rem'
          }}>
            <ArrowLeft size={20} />
            Back to Events
          </Link>

          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem'}}>
            <div>
              <h2 style={{color: 'var(--primary-color)', marginBottom: '1.5rem'}}>About the Event</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '2rem'}}>
                {event.description}
              </p>

              <h3 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>Event Agenda</h3>
              {event.agenda.map((day, index) => (
                <div key={index} style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  marginBottom: '1rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <h4 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>{day.day}</h4>
                  <ul style={{paddingLeft: '1.5rem', color: 'var(--text-light)'}}>
                    {day.activities.map((activity, idx) => (
                      <li key={idx} style={{marginBottom: '0.5rem'}}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-md)',
                position: 'sticky',
                top: '100px'
              }}>
                <h3 style={{color: 'var(--primary-color)', marginBottom: '1.5rem'}}>Event Details</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem'}}>
                  <div style={{display: 'flex', gap: '1rem'}}>
                    <Calendar size={24} color="var(--primary-color)" style={{flexShrink: 0}} />
                    <div>
                      <strong>Date</strong>
                      <p style={{margin: 0, color: 'var(--text-light)'}}>{event.date}</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '1rem'}}>
                    <Clock size={24} color="var(--primary-color)" style={{flexShrink: 0}} />
                    <div>
                      <strong>Time</strong>
                      <p style={{margin: 0, color: 'var(--text-light)'}}>{event.time}</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '1rem'}}>
                    <MapPin size={24} color="var(--primary-color)" style={{flexShrink: 0}} />
                    <div>
                      <strong>Location</strong>
                      <p style={{margin: 0, color: 'var(--text-light)'}}>{event.location}</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', gap: '1rem'}}>
                    <Users size={24} color="var(--primary-color)" style={{flexShrink: 0}} />
                    <div>
                      <strong>Expected Attendees</strong>
                      <p style={{margin: 0, color: 'var(--text-light)'}}>{event.attendees}</p>
                    </div>
                  </div>
                </div>
                <button className="btn-primary-custom" style={{width: '100%', justifyContent: 'center'}}>
                  Register Now
                </button>
                <button style={{
                  width: '100%',
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'white',
                  border: '2px solid var(--primary-color)',
                  color: 'var(--primary-color)',
                  borderRadius: '50px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <Share2 size={18} />
                  Share Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventDetail
