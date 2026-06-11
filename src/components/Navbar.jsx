import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, GraduationCap, User, LogIn, LogOut, Globe, LayoutDashboard, UserCircle, Settings } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useSiteContent } from '../context/SiteContentContext'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [showLoginPortal, setShowLoginPortal] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const profileMenuRef = useRef(null)
  const topBarRef = useRef(null)
  const navbarRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, isAuthenticated } = useAuth()
  const { content } = useSiteContent()
  const { lang, setLang, t } = useLanguage()
  const collegeName = content?.navbar?.collegeName || 'Premier College'
  const tagline = content?.navbar?.tagline || 'of Excellence'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Check if scrolled for visual effects
      setIsScrolled(currentScrollY > 50)
      
      // Check if main navbar should be sticky
      if (topBarRef.current && navbarRef.current) {
        const topBarHeight = topBarRef.current.offsetHeight
        const navbarOffsetTop = topBarHeight
        
        // Make navbar sticky when it reaches the top
        if (currentScrollY >= navbarOffsetTop) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }
    
    // Initial check
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    setShowLoginPortal(false)
    setShowProfileMenu(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) {
        setShowProfileMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const navItems = [
    { path: '/about', label: 'About' },
    {
      label: 'Courses',
      dropdown: [
        { path: '/courses', label: 'All Programs' },
        { path: '/courses/undergraduate', label: 'Undergraduate Programs' },
        { path: '/courses/diploma', label: 'Diploma Programs' },
        { path: '/courses/certificate', label: 'Certificate Courses' },
        { path: '/courses/professional', label: 'Professional/Skill Courses' },
        { path: '/courses/online', label: 'Online Courses' },
        { path: '/academic-calendar', label: 'Academic Calendar' }
      ]
    },
    { path: '/admissions', label: 'Admissions' },
    {
      label: 'Events',
      dropdown: [
        { path: '/events', label: 'All Events' },
        { path: '/events?type=academic', label: 'Academic Events' },
        { path: '/events?type=cultural', label: 'Cultural Events' },
        { path: '/events?type=sports', label: 'Sports Events' },
        { path: '/events?type=workshops', label: 'Workshops' }
      ]
    },
    { path: '/gallery', label: 'Gallery' },
    {
      label: 'Resources',
      dropdown: [
        { path: '/library', label: 'Library' },
        { path: '/hostel', label: 'Hostel' },
        { path: '/transport', label: 'Transport' },
        { path: '/careers', label: 'Careers' },
        { path: '/downloads', label: 'Downloads' },
        { path: '/faq', label: 'FAQ' },
        { path: '/alumni', label: 'Alumni' },
        { path: '/alumni-portal', label: 'Alumni Portal' },
      ]
    },
    {
      label: 'Insights',
      dropdown: [
        { path: '/blog', label: 'All Articles' },
        { path: '/blog?category=news', label: 'News' },
        { path: '/blog?category=research', label: 'Research' },
        { path: '/blog?category=student-life', label: 'Student Life' },
        { path: '/blog?category=alumni', label: 'Alumni Stories' }
      ]
    },
  ]

  return (
    <>
      {/* Top Bar */}
      <div ref={topBarRef} className="top-bar">
        <div className="container-custom">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <span className="top-bar-text">Welcome to Premier College of Excellence</span>
            </div>
            <div className="top-bar-right">
              <button
                onClick={() => setLang(lang === 'en' ? 'ne' : 'en')}
                style={{
                  background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white',
                  padding: '4px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12,
                  display: 'flex', alignItems: 'center', gap: 4, marginRight: 12
                }}
                title="Toggle language"
              >
                <Globe size={14} />
                {lang === 'en' ? 'नेपाली' : 'English'}
              </button>
              {!isAuthenticated ? (
                <div className="login-portal-wrapper">
                  <button 
                    className="login-portal-btn"
                    onClick={() => setShowLoginPortal(!showLoginPortal)}
                  >
                    <User size={14} />
                    Login Portal
                    <ChevronDown size={14} className={showLoginPortal ? 'rotate' : ''} />
                  </button>
                  {showLoginPortal && (
                    <div className="login-portal-dropdown">
                      <Link to="/student-login" className="portal-link">
                        <User size={16} />
                        <div className="portal-info">
                          <span className="portal-title">Student Portal</span>
                          <span className="portal-desc">Access your courses & grades</span>
                        </div>
                      </Link>
                      <Link to="/teacher-login" className="portal-link">
                        <User size={16} />
                        <div className="portal-info">
                          <span className="portal-title">Teacher Portal</span>
                          <span className="portal-desc">Manage classes & students</span>
                        </div>
                      </Link>
                      <Link to="/admin-login" className="portal-link">
                        <LogIn size={16} />
                        <div className="portal-info">
                          <span className="portal-title">Admin Portal</span>
                          <span className="portal-desc">System administration</span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => {
                    logout()
                    navigate('/')
                  }} 
                  className="logout-btn-topbar"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Placeholder - Prevents content jump when navbar becomes fixed */}
      {isSticky && <div style={{ height: navbarRef.current?.offsetHeight || 80 }}></div>}

      {/* Main Navbar */}
      <nav ref={navbarRef} className={`navbar-custom ${isScrolled ? 'scrolled' : ''} ${isSticky ? 'sticky' : ''}`}>
        <div className="container-custom">
          <div className="navbar-content">
            <Link to="/" className="navbar-brand">
              <GraduationCap size={40} className="brand-icon" />
              <div className="brand-text">
                <span className="brand-name">{collegeName}</span>
                <span className="brand-tagline">{tagline}</span>
              </div>
            </Link>

            <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <ul className="navbar-nav">
                {navItems.map((item, index) => (
                  <li key={index} className="nav-item">
                    {item.dropdown ? (
                      <div 
                        className="dropdown"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button
                          className="nav-link dropdown-toggle"
                          onClick={() => toggleDropdown(item.label)}
                        >
                          {item.label}
                          <ChevronDown size={13} className={activeDropdown === item.label ? 'rotate' : ''} />
                        </button>
                        <div className={`dropdown-menu ${activeDropdown === item.label ? 'show' : ''}`}>
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="dropdown-item"
                            >
                              {subItem.icon && <span className="dropdown-icon">{subItem.icon}</span>}
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="navbar-actions">
              {/* Desktop: profile button with dropdown */}
              <div className="desktop-profile">
                {isAuthenticated ? (
                  <div className="profile-menu-wrapper" ref={profileMenuRef}>
                    <button
                      className="profile-btn"
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      title={`${user?.name || 'User'}`}
                    >
                      {user?.profilePicture ? (
                        <img
                          src={user.profilePicture}
                          alt={user.name || 'Profile'}
                          className="profile-avatar"
                        />
                      ) : (
                        <span className="profile-avatar profile-avatar-fallback">
                          {(user?.name || 'U').charAt(0).toUpperCase()}
                        </span>
                      )}
                      <ChevronDown size={14} className={`profile-chevron ${showProfileMenu ? 'rotate' : ''}`} />
                    </button>
                    {showProfileMenu && (
                      <div className="profile-dropdown">
                        <div className="profile-dropdown-header">
                          <span className="profile-dropdown-name">{user?.name || 'User'}</span>
                          <span className="profile-dropdown-role">{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || 'User'}</span>
                        </div>
                        <div className="profile-dropdown-items">
                          <Link
                            to={user?.role === 'student' ? '/student-dashboard' : user?.role === 'teacher' ? '/teacher-dashboard' : '/admin'}
                            className="profile-dropdown-item"
                          >
                            <LayoutDashboard size={16} />
                            Dashboard
                          </Link>
                          <Link
                            to={user?.role === 'student' ? '/student-dashboard/profile' : user?.role === 'teacher' ? '/teacher-dashboard/profile' : '/admin/settings'}
                            className="profile-dropdown-item"
                          >
                            <UserCircle size={16} />
                            My Profile
                          </Link>
                          <Link
                            to={user?.role === 'student' ? '/student-dashboard/fees' : '/admin/settings'}
                            className="profile-dropdown-item"
                          >
                            <Settings size={16} />
                            Settings
                          </Link>
                          <div className="profile-dropdown-divider" />
                          <button
                            className="profile-dropdown-item logout-item"
                            onClick={() => { logout(); navigate('/'); setShowProfileMenu(false) }}
                          >
                            <LogOut size={16} />
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/contact" className="btn-contact">
                    Contact Us
                  </Link>
                )}
              </div>
              {/* Mobile menu: show profile/contact and logout inside */}
              <div className={`mobile-menu-actions ${isMobileMenuOpen ? 'active' : ''}`}>
                {isAuthenticated ? (
                  <>
                    <Link to={user?.role === 'student' ? '/student-dashboard' : user?.role === 'teacher' ? '/teacher-dashboard' : '/admin'} className="mobile-menu-link">
                      <LayoutDashboard size={18} /> Dashboard
                    </Link>
                    <Link to={user?.role === 'student' ? '/student-dashboard/profile' : user?.role === 'teacher' ? '/teacher-dashboard/profile' : '/admin/settings'} className="mobile-menu-link">
                      <UserCircle size={18} /> My Profile
                    </Link>
                    <button className="mobile-menu-link logout-btn" onClick={() => { logout(); navigate('/') }}>
                      <LogOut size={18} /> Logout
                    </button>
                  </>
                ) : (
                  <Link to="/contact" className="mobile-menu-link contact-btn">
                    Contact Us
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile toggle button - always visible in header */}
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
