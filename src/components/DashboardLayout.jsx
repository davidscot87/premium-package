import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  Menu, X, Home, BookOpen, Calendar, FileText,
  DollarSign, Library, User, Settings, LogOut,
  Users, GraduationCap, ClipboardList, BarChart,
  Bell, MessageSquare, Upload, Award, Globe,
  Search, ChevronRight
} from 'lucide-react'
import './DashboardLayout.css'

const DashboardLayout = ({ children, role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const studentMenuItems = [
    { path: '/student-dashboard', icon: Home, label: 'Dashboard' },
    { path: '/student-dashboard/courses', icon: BookOpen, label: 'My Courses' },
    { path: '/student-dashboard/attendance', icon: Calendar, label: 'Attendance' },
    { path: '/student-dashboard/assignments', icon: FileText, label: 'Assignments' },
    { path: '/student-dashboard/grades', icon: Award, label: 'Grades' },
    { path: '/student-dashboard/timetable', icon: ClipboardList, label: 'Timetable' },
    { path: '/student-dashboard/fees', icon: DollarSign, label: 'Fee Payment' },
    { path: '/student-dashboard/library', icon: Library, label: 'Library' },
    { path: '/student-dashboard/lms', icon: Globe, label: 'LMS' },
    { path: '/student-dashboard/profile', icon: User, label: 'Profile' },
  ]

  const teacherMenuItems = [
    { path: '/teacher-dashboard', icon: Home, label: 'Dashboard' },
    { path: '/teacher-dashboard/classes', icon: Users, label: 'My Classes' },
    { path: '/teacher-dashboard/attendance', icon: Calendar, label: 'Attendance' },
    { path: '/teacher-dashboard/grades', icon: Award, label: 'Grade Entry' },
    { path: '/teacher-dashboard/assignments', icon: FileText, label: 'Assignments' },
    { path: '/teacher-dashboard/students', icon: GraduationCap, label: 'Students' },
    { path: '/teacher-dashboard/resources', icon: Upload, label: 'Resources' },
    { path: '/teacher-dashboard/schedule', icon: ClipboardList, label: 'Schedule' },
    { path: '/teacher-dashboard/lms', icon: Globe, label: 'LMS' },
    { path: '/teacher-dashboard/profile', icon: User, label: 'Profile' },
  ]

  const adminMenuItems = [
    { path: '/admin', icon: Home, label: 'Dashboard' },
    { label: 'PEOPLE', divider: true },
    { path: '/admin/students', icon: GraduationCap, label: 'Students' },
    { path: '/admin/teachers', icon: Users, label: 'Teachers' },
    { path: '/admin/admissions', icon: FileText, label: 'Registrations' },
    { label: 'ACADEMICS', divider: true },
    { path: '/admin/courses', icon: BookOpen, label: 'Courses' },
    { path: '/admin/lms', icon: Award, label: 'LMS Control' },
    { path: '/admin/assessments', icon: ClipboardList, label: 'Assessments' },
    { path: '/admin/attendance', icon: Calendar, label: 'Attendance' },
    { label: 'FINANCE', divider: true },
    { path: '/admin/fees', icon: DollarSign, label: 'Fees' },
    { path: '/admin/payments', icon: BarChart, label: 'Payments' },
    { label: 'CONTENT', divider: true },
    { path: '/admin/cms', icon: Globe, label: 'Website CMS' },
    { path: '/admin/announcements', icon: Bell, label: 'Announcements' },
    { label: 'INSIGHTS', divider: true },
    { path: '/admin/reports', icon: BarChart, label: 'Analytics' },
    { label: 'SYSTEM', divider: true },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ]

  const menuItems = role === 'student' ? studentMenuItems
    : role === 'teacher' ? teacherMenuItems
    : adminMenuItems

  const handleLogout = () => setShowLogoutModal(true)
  const confirmLogout = () => { logout(); navigate('/'); setShowLogoutModal(false) }
  const cancelLogout = () => setShowLogoutModal(false)

  const currentItem = menuItems.find(i => !i.divider && i.path === location.pathname)
  const pageLabel = currentItem?.label || 'Dashboard'
  const roleLabel = role === 'student' ? 'Student' : role === 'teacher' ? 'Faculty' : 'Administrator'
  const profilePic = user?.profilePicture

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-brand" title="Go to Homepage">
            <div className="brand-logo-wrap">
              <GraduationCap size={22} />
            </div>
            {sidebarOpen && (
              <div className="brand-text-wrap">
                <span className="brand-name">Premier College</span>
                <span className="brand-tagline">of Excellence</span>
              </div>
            )}
          </Link>
        </div>

        <nav className="sidebar-nav">
          {/* Profile section — scrolls with nav */}
          {sidebarOpen ? (
            <div className="sidebar-user">
              <div className="sidebar-user-inner">
                <div className="user-avatar-wrap">
                  <div className="user-avatar">
                    {profilePic
                      ? <img src={profilePic} alt={user?.name || 'User'} className="avatar-image" />
                      : <span className="avatar-fallback">{(user?.name || 'U').charAt(0).toUpperCase()}</span>
                    }
                  </div>
                  <div className="user-online-dot" />
                </div>
                <div className="user-info-wrap">
                  <div className="user-role-badge">{roleLabel}</div>
                  <p className="user-name">{user?.name || 'User'}</p>
                  <p className="user-id-text">
                    {role === 'student' ? user?.studentId
                      : role === 'teacher' ? user?.employeeId
                      : user?.adminId || 'ADMIN'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="sidebar-user-collapsed">
              <div className="user-avatar-sm">
                {profilePic
                  ? <img src={profilePic} alt={user?.name} />
                  : <span>{(user?.name || 'U').charAt(0).toUpperCase()}</span>
                }
              </div>
            </div>
          )}

          {menuItems.map((item, idx) => {
            if (item.divider) {
              return sidebarOpen
                ? <div key={idx} className="nav-divider">{item.label}</div>
                : <div key={idx} className="nav-divider-line" />
            }
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                title={!sidebarOpen ? item.label : ''}
              >
                <Icon size={18} />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn" title={!sidebarOpen ? 'Sign Out' : ''}>
            <LogOut size={18} />
            {sidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="dashboard-main">
        {showLogoutModal && (
          <div className="logout-modal-overlay" onClick={cancelLogout}>
            <div className="logout-modal-card" onClick={e => e.stopPropagation()}>
              <div className="logout-modal-icon"><LogOut size={32} /></div>
              <h3>Sign Out</h3>
              <p>Are you sure you want to end your session, {user?.name?.split(' ')[0] || 'User'}?</p>
              <div className="logout-modal-actions">
                <button className="btn-cancel" onClick={cancelLogout}>Stay</button>
                <button className="btn-confirm" onClick={confirmLogout}>Sign Out</button>
              </div>
            </div>
          </div>
        )}

        <header className="dashboard-header">
          <div className="header-left">
            <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="header-breadcrumb">
              <span>{roleLabel} Portal</span>
              <ChevronRight size={14} />
              <span>{pageLabel}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="header-search">
              <Search size={15} />
              <input type="text" placeholder="Search..." />
            </div>
            <button className="header-icon-btn" title="Notifications">
              <Bell size={18} />
              <span className="notification-badge">3</span>
            </button>
            <button className="header-icon-btn" title="Messages">
              <MessageSquare size={18} />
            </button>
            <Link
              to={role === 'student' ? '/student-dashboard/profile'
                : role === 'teacher' ? '/teacher-dashboard/profile'
                : '/admin/settings'}
              className="header-user-chip"
            >
              {profilePic
                ? <img src={profilePic} alt={user?.name} />
                : <div className="chip-avatar">{(user?.name || 'U').charAt(0).toUpperCase()}</div>
              }
              <span>{user?.name?.split(' ')[0] || 'User'}</span>
            </Link>
          </div>
        </header>

        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
