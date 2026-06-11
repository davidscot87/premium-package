import { BookOpen, Users, Award, TrendingUp, FileText, ExternalLink, Search } from 'lucide-react'
import './Research.css'

const Research = () => {
  const researchAreas = [
    { title: 'Artificial Intelligence & Machine Learning', projects: 45, publications: 120 },
    { title: 'Data Science & Analytics', projects: 38, publications: 95 },
    { title: 'Cybersecurity & Blockchain', projects: 32, publications: 78 },
    { title: 'IoT & Embedded Systems', projects: 28, publications: 65 },
    { title: 'Cloud Computing & DevOps', projects: 25, publications: 58 },
    { title: 'Renewable Energy Systems', projects: 22, publications: 52 }
  ]

  const publications = [
    {
      title: 'Deep Learning Approaches for Medical Image Analysis',
      authors: 'Dr. Sarah Johnson, Prof. Michael Chen',
      journal: 'IEEE Transactions on Medical Imaging',
      year: 2024,
      citations: 156
    },
    {
      title: 'Blockchain-Based Supply Chain Management System',
      authors: 'Dr. Robert Smith, Dr. Emma Williams',
      journal: 'Journal of Computer Science',
      year: 2024,
      citations: 98
    },
    {
      title: 'Quantum Computing Applications in Cryptography',
      authors: 'Prof. David Lee, Dr. Lisa Anderson',
      journal: 'Nature Communications',
      year: 2023,
      citations: 245
    }
  ]

  return (
    <div className="research-page">
      <section className="research-hero">
        <div className="container-custom">
          <h1>Research & Publications</h1>
          <p>Advancing knowledge through cutting-edge research and innovation</p>
        </div>
      </section>

      <section className="research-stats">
        <div className="container-custom">
          <div className="stats-grid">
            <div className="stat-item">
              <FileText size={40} />
              <div className="stat-value">500+</div>
              <div className="stat-label">Research Papers</div>
            </div>
            <div className="stat-item">
              <Users size={40} />
              <div className="stat-value">150+</div>
              <div className="stat-label">Research Scholars</div>
            </div>
            <div className="stat-item">
              <Award size={40} />
              <div className="stat-value">50+</div>
              <div className="stat-label">Patents Filed</div>
            </div>
            <div className="stat-item">
              <TrendingUp size={40} />
              <div className="stat-value">₹10Cr+</div>
              <div className="stat-label">Research Funding</div>
            </div>
          </div>
        </div>
      </section>

      <section className="research-areas">
        <div className="container-custom">
          <h2>Research Focus Areas</h2>
          <div className="areas-grid">
            {researchAreas.map((area, index) => (
              <div key={index} className="area-card">
                <h3>{area.title}</h3>
                <div className="area-stats">
                  <span>{area.projects} Active Projects</span>
                  <span>{area.publications} Publications</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recent-publications">
        <div className="container-custom">
          <h2>Recent Publications</h2>
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card">
                <h3>{pub.title}</h3>
                <p className="authors">{pub.authors}</p>
                <div className="pub-meta">
                  <span>{pub.journal}</span>
                  <span>{pub.year}</span>
                  <span>{pub.citations} Citations</span>
                </div>
                <button className="btn-view">
                  View Paper <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Research
