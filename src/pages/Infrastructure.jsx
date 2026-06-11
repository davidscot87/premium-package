import React from 'react'
import { Building2, Microscope, BookOpen, Wifi, Utensils, Home } from 'lucide-react'

const Infrastructure = () => {
  const facilities = [
    {
      icon: <Building2 size={40} />,
      title: "Modern Classrooms",
      description: "Smart classrooms equipped with latest audio-visual technology and comfortable seating"
    },
    {
      icon: <Microscope size={40} />,
      title: "Advanced Laboratories",
      description: "State-of-the-art labs for Computer Science, Physics, Chemistry, Biology, and Engineering"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Digital Library",
      description: "Extensive collection of 50,000+ books, journals, and digital resources"
    },
    {
      icon: <Wifi size={40} />,
      title: "High-Speed WiFi",
      description: "Campus-wide high-speed internet connectivity for seamless learning"
    },
    {
      icon: <Utensils size={40} />,
      title: "Cafeteria",
      description: "Hygienic cafeteria serving nutritious meals and snacks"
    },
    {
      icon: <Home size={40} />,
      title: "Hostel Facilities",
      description: "Comfortable accommodation with all modern amenities for outstation students"
    }
  ]

  return (
    <div style={{marginTop: '80px'}}>
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Infrastructure</h1>
            <p>World-Class Facilities</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="section-title">
            <h2>State-of-the-Art Infrastructure</h2>
            <p>Everything you need for an exceptional learning experience</p>
          </div>
          <div className="values-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="value-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="value-icon">{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Infrastructure
