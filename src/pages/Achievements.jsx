import React from 'react'
import { Trophy, Award, Star, TrendingUp } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    { year: "2025", title: "National Rank 1 in Engineering", description: "Student secured All India Rank 1 in competitive exam" },
    { year: "2025", title: "Best College Award", description: "Awarded Best College in the State by Education Ministry" },
    { year: "2024", title: "100% Placement Record", description: "All eligible students placed in top companies" },
    { year: "2024", title: "Research Excellence", description: "Published 50+ papers in international journals" },
    { year: "2023", title: "Sports Championship", description: "Won Inter-State Sports Championship" },
    { year: "2023", title: "Cultural Fest Winner", description: "First prize in National Cultural Competition" }
  ]

  return (
    <div style={{marginTop: '80px'}}>
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Our Achievements</h1>
            <p>A Legacy of Excellence</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="section-title">
            <h2>100+ Achievements & Counting</h2>
            <p>Celebrating success across academics, sports, and culture</p>
          </div>
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            {achievements.map((achievement, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Trophy size={40} color="var(--primary-color)" />
                </div>
                <div style={{flex: 1}}>
                  <div style={{fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: '600', marginBottom: '0.5rem'}}>{achievement.year}</div>
                  <h3 style={{fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '0.5rem'}}>{achievement.title}</h3>
                  <p style={{color: 'var(--text-light)', margin: 0}}>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements
