import { Users, Award, Briefcase, GraduationCap, MapPin, Linkedin } from 'lucide-react'
import './Alumni.css'

const Alumni = () => {
  const notableAlumni = [
    { name: 'Rajesh Kumar', batch: '2015', position: 'CEO, Tech Startup', company: 'InnovateTech', image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=200&background=1a237e&color=fff' },
    { name: 'Priya Sharma', batch: '2016', position: 'Senior Manager', company: 'Google', image: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=200&background=1a237e&color=fff' },
    { name: 'Amit Patel', batch: '2014', position: 'Data Scientist', company: 'Microsoft', image: 'https://ui-avatars.com/api/?name=Amit+Patel&size=200&background=1a237e&color=fff' },
    { name: 'Sneha Reddy', batch: '2017', position: 'Product Manager', company: 'Amazon', image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&size=200&background=1a237e&color=fff' }
  ]

  return (
    <div className="alumni-page">
      <section className="alumni-hero">
        <div className="container-custom">
          <h1>Alumni Network</h1>
          <p>Connecting generations of excellence</p>
        </div>
      </section>

      <section className="alumni-stats">
        <div className="container-custom">
          <div className="stats-grid">
            <div className="stat-item"><Users size={40} /><div className="stat-value">10,000+</div><div className="stat-label">Alumni Worldwide</div></div>
            <div className="stat-item"><Briefcase size={40} /><div className="stat-value">500+</div><div className="stat-label">Companies</div></div>
            <div className="stat-item"><MapPin size={40} /><div className="stat-value">50+</div><div className="stat-label">Countries</div></div>
            <div className="stat-item"><Award size={40} /><div className="stat-value">100+</div><div className="stat-label">Industry Leaders</div></div>
          </div>
        </div>
      </section>

      <section className="notable-alumni">
        <div className="container-custom">
          <h2>Notable Alumni</h2>
          <div className="alumni-grid">
            {notableAlumni.map((alumni, index) => (
              <div key={index} className="alumni-card">
                <img src={alumni.image} alt={alumni.name} />
                <h3>{alumni.name}</h3>
                <p className="batch">Batch of {alumni.batch}</p>
                <p className="position">{alumni.position}</p>
                <p className="company">{alumni.company}</p>
                <button className="btn-connect"><Linkedin size={18} /> Connect</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Alumni
