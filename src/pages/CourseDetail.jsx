import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Clock, Users, Award, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'

const CourseDetail = () => {
  const { id } = useParams()

  const course = {
    title: "Computer Science & Engineering",
    duration: "4 Years",
    seats: "120",
    fees: "$5,000/year",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    description: "Our Computer Science & Engineering program is designed to provide comprehensive knowledge in software development, artificial intelligence, data science, and emerging technologies. Students gain hands-on experience through industry projects and internships.",
    highlights: [
      "Industry-aligned curriculum",
      "100% Placement assistance",
      "State-of-the-art computer labs",
      "Expert faculty with industry experience",
      "Internship opportunities with top companies",
      "Research and innovation projects"
    ],
    eligibility: "10+2 with Mathematics and Physics (Minimum 60%)",
    careerOptions: [
      "Software Developer",
      "Data Scientist",
      "AI/ML Engineer",
      "Full Stack Developer",
      "Cloud Architect",
      "Cybersecurity Analyst"
    ]
  }

  return (
    <div style={{marginTop: '80px'}}>
      <section className="page-hero" style={{backgroundImage: `url(${course.image})`}}>
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>{course.title}</h1>
            <p>{course.duration} * {course.seats} Seats Available</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem'}}>
            <div>
              <h2 style={{color: 'var(--primary-color)', marginBottom: '1.5rem'}}>About the Program</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '2rem'}}>
                {course.description}
              </p>

              <h3 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>Program Highlights</h3>
              <ul className="check-list" style={{marginBottom: '2rem'}}>
                {course.highlights.map((highlight, index) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    {highlight}
                  </li>
                ))}
              </ul>

              <h3 style={{color: 'var(--primary-color)', marginBottom: '1rem'}}>Career Opportunities</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}}>
                {course.careerOptions.map((career, index) => (
                  <div key={index} style={{
                    padding: '1rem',
                    background: 'var(--bg-light)',
                    borderRadius: '10px',
                    fontWeight: '500'
                  }}>
                    {career}
                  </div>
                ))}
              </div>
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
                <h3 style={{color: 'var(--primary-color)', marginBottom: '1.5rem'}}>Course Details</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <Clock size={24} color="var(--primary-color)" />
                    <div>
                      <strong>Duration</strong>
                      <p style={{margin: 0, color: 'var(--text-light)'}}>{course.duration}</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <Users size={24} color="var(--primary-color)" />
                    <div>
                      <strong>Seats</strong>
                      <p style={{margin: 0, color: 'var(--text-light)'}}>{course.seats}</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <Award size={24} color="var(--primary-color)" />
                    <div>
                      <strong>Fees</strong>
                      <p style={{margin: 0, color: 'var(--text-light)'}}>{course.fees}</p>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <BookOpen size={24} color="var(--primary-color)" />
                    <div>
                      <strong>Eligibility</strong>
                      <p style={{margin: 0, color: 'var(--text-light)'}}>{course.eligibility}</p>
                    </div>
                  </div>
                </div>
                <Link to="/admissions" className="btn-primary-custom" style={{width: '100%', justifyContent: 'center'}}>
                  Apply Now
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail
