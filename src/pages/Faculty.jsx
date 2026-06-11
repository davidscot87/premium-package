import React from 'react'
import { Award, BookOpen, Users } from 'lucide-react'

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Principal",
      department: "Administration",
      qualification: "Ph.D. in Education Management",
      experience: "25+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Prof. Meera Sharma",
      designation: "Professor",
      department: "Computer Science",
      qualification: "Ph.D. in Computer Science",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Amit Patel",
      designation: "Associate Professor",
      department: "Mechanical Engineering",
      qualification: "Ph.D. in Mechanical Engineering",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Sunita Reddy",
      designation: "Professor",
      department: "Biotechnology",
      qualification: "Ph.D. in Biotechnology",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    }
  ]

  return (
    <div style={{marginTop: '80px'}}>
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Our Faculty</h1>
            <p>Meet Our Expert Educators</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="section-title">
            <h2>50+ Highly Qualified Faculty Members</h2>
            <p>Dedicated to excellence in teaching and research</p>
          </div>
          <div className="leadership-grid">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="leader-card hover-lift">
                <div className="leader-image">
                  <img src={faculty.image} alt={faculty.name} />
                </div>
                <div className="leader-info">
                  <h3>{faculty.name}</h3>
                  <p className="leader-position">{faculty.designation}</p>
                  <p className="leader-qualification">{faculty.department}</p>
                  <p className="leader-qualification">{faculty.qualification}</p>
                  <p className="leader-experience">
                    <Award size={16} />
                    {faculty.experience} Experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faculty
