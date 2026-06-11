import { Briefcase, TrendingUp, Users, Award, Building2, DollarSign } from 'lucide-react'
import './Placements.css'

const Placements = () => {
  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Adobe', 'Oracle',
    'IBM', 'Cisco', 'Intel', 'Samsung', 'Accenture', 'Deloitte', 'TCS', 'Infosys'
  ]

  const stats = [
    { icon: Users, label: 'Students Placed', value: '95%' },
    { icon: Building2, label: 'Companies Visited', value: '200+' },
    { icon: DollarSign, label: 'Highest Package', value: '₹45 LPA' },
    { icon: TrendingUp, label: 'Average Package', value: '₹12 LPA' }
  ]

  return (
    <div className="placements-page">
      <section className="placements-hero">
        <div className="container-custom">
          <h1>Placement Cell</h1>
          <p>Building careers, shaping futures</p>
        </div>
      </section>

      <section className="placement-stats">
        <div className="container-custom">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon size={40} />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="recruiters">
        <div className="container-custom">
          <h2>Our Recruiters</h2>
          <div className="companies-grid">
            {companies.map((company, index) => (
              <div key={index} className="company-card">{company}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Placements
