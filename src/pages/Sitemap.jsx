import { Link } from 'react-router-dom'
import { Map, ChevronRight } from 'lucide-react'
import './PolicyPages.css'

const Sitemap = () => {
  const sitemapData = {
    'Main Pages': [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
      { path: '/faqs', label: 'FAQs' }
    ],
    'Academics': [
      { path: '/courses', label: 'Programs & Courses' },
      { path: '/admissions', label: 'Admissions' },
      { path: '/faculty', label: 'Faculty' },
      { path: '/achievements', label: 'Achievements' }
    ],
    'Student Life': [
      { path: '/events', label: 'Events' },
      { path: '/gallery', label: 'Gallery' },
      { path: '/blog', label: 'Blog' },
      { path: '/infrastructure', label: 'Infrastructure' }
    ],
    'Resources': [
      { path: '/library', label: 'Digital Library' },
      { path: '/research', label: 'Research' },
      { path: '/placements', label: 'Placements' },
      { path: '/alumni', label: 'Alumni' },
      { path: '/downloads', label: 'Downloads' }
    ],
    'Portals': [
      { path: '/student-login', label: 'Student Portal' },
      { path: '/teacher-login', label: 'Faculty Portal' },
      { path: '/admin-login', label: 'Admin Portal' }
    ],
    'Legal': [
      { path: '/privacy-policy', label: 'Privacy Policy' },
      { path: '/terms-conditions', label: 'Terms & Conditions' },
      { path: '/refund-policy', label: 'Refund Policy' }
    ]
  }

  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container-custom">
          <Map size={64} />
          <h1>Sitemap</h1>
          <p>Navigate through all pages of our website</p>
        </div>
      </section>

      <section className="sitemap-content">
        <div className="container-custom">
          <div className="sitemap-grid">
            {Object.entries(sitemapData).map(([category, links]) => (
              <div key={category} className="sitemap-section">
                <h2>{category}</h2>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>
                        <ChevronRight size={16} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sitemap
