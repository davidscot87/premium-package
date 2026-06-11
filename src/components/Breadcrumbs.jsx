import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  // Map segment names to readable labels if needed
  const labelMap = {
    'student-dashboard': 'Dashboard',
    'teacher-dashboard': 'Academy Portal',
    'admin': 'Control Center',
    'profile': 'Account Settings',
    'settings': 'Preferences',
    'lms': 'Learning Hub',
    'timetable': 'Schedule',
    'performance': 'Analytics'
  }

  if (pathnames.length === 0) return null

  return (
    <nav className="ent-breadcrumbs animate-fade-in" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link home-icon" title="Go Home">
            <Home size={14} />
          </Link>
        </li>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const label = labelMap[value] || value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ')

          return (
            <li key={to} className="breadcrumb-item">
              <ChevronRight size={14} className="breadcrumb-separator" />
              {last ? (
                <span className="breadcrumb-current" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link to={to} className="breadcrumb-link">
                  {label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .ent-breadcrumbs {
          margin-bottom: 20px;
          padding: 8px 0;
        }
        .breadcrumb-list {
          display: flex;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 8px;
        }
        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
        }
        .breadcrumb-link {
          color: #64748b;
          text-decoration: none;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }
        .breadcrumb-link:hover {
          color: #4338ca;
          transform: translateX(1px);
        }
        .breadcrumb-separator {
          color: #94a3b8;
          opacity: 0.6;
        }
        .breadcrumb-current {
          color: #1e293b;
          font-weight: 700;
          letter-spacing: -0.2px;
        }
        .home-icon {
          background: rgba(99, 102, 241, 0.1);
          padding: 4px;
          border-radius: 6px;
          color: #4338ca;
        }
        .home-icon:hover {
          background: rgba(99, 102, 241, 0.2);
        }
      `}} />
    </nav>
  )
}

export default Breadcrumbs
