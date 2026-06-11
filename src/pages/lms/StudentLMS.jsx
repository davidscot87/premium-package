import { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { Play, Clock, Award, BookOpen, TrendingUp, ShoppingCart, MessageSquare, BarChart3, History } from 'lucide-react'
import { lmsCourses, studentAnalytics } from '../../data/lmsData'
import './LMS.css'

const StudentLMS = () => {
  const [activeTab, setActiveTab] = useState('learning')

  const stats = [
    { icon: BookOpen, label: 'Courses In Progress', value: studentAnalytics.coursesInProgress, color: 'blue' },
    { icon: Award, label: 'Certificates Earned', value: studentAnalytics.certificates, color: 'green' },
    { icon: Clock, label: 'Hours Learned', value: studentAnalytics.totalHoursLearned, color: 'purple' },
    { icon: TrendingUp, label: 'Average Score', value: `${studentAnalytics.averageScore}%`, color: 'orange' },
  ]

  const quickLinks = [
    { icon: ShoppingCart, title: 'Browse Courses', description: 'Explore new courses', link: '/student-dashboard/lms/catalog' },
    { icon: MessageSquare, title: 'Discussion Forum', description: 'Ask questions & connect', link: '/student-dashboard/lms/forum' },
    { icon: BarChart3, title: 'My Analytics', description: 'Track your progress', link: '/student-dashboard/lms/analytics' },
    { icon: History, title: 'Payment History', description: 'View transactions', link: '/student-dashboard/lms/payment-history' },
  ]

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page lms-page">
        <div className="page-header">
          <div>
            <h1>My Learning</h1>
            <p>Continue your learning journey</p>
          </div>
          <Link to="/student-dashboard/lms/catalog" className="btn-primary">
            Browse Courses
          </Link>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className={`stat-card stat-card-${stat.color}`}>
                <div className="stat-icon">
                  <Icon size={28} />
                </div>
                <div className="stat-content">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="content-card" style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '20px', color: '#1a237e' }}>Quick Access</h2>
          <div className="quick-links-grid">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link key={index} to={link.link} className="quick-link-card">
                  <div className="quick-link-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="lms-tabs">
          <button
            className={`lms-tab ${activeTab === 'learning' ? 'active' : ''}`}
            onClick={() => setActiveTab('learning')}
          >
            My Courses
          </button>
          <button
            className={`lms-tab ${activeTab === 'path' ? 'active' : ''}`}
            onClick={() => setActiveTab('path')}
          >
            Learning Path
          </button>
        </div>

        {activeTab === 'learning' && (
          <div className="courses-grid">
            {lmsCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-thumbnail">
                  <img src={course.thumbnail} alt={course.title} />
                  <div className="course-overlay">
                    <Link to={`/student-dashboard/lms/course/${course.id}`} className="play-button">
                      <Play size={32} fill="white" />
                    </Link>
                  </div>
                </div>
                <div className="course-info">
                  <div className="course-category">{course.category}</div>
                  <h3>{course.title}</h3>
                  <p className="course-instructor">By {course.instructor}</p>
                  <div className="course-meta">
                    <span><Clock size={14} /> {course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="progress-section">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <span className="progress-text">{course.progress}% Complete</span>
                  </div>
                  <Link to={`/student-dashboard/lms/course/${course.id}`} className="btn-continue">
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'path' && (
          <div className="learning-path">
            <div className="path-card">
              <div className="path-header">
                <TrendingUp size={32} />
                <div>
                  <h3>Full Stack Developer Path</h3>
                  <p>Master web development from frontend to backend</p>
                </div>
              </div>
              <div className="path-progress">
                <div className="path-progress-bar">
                  <div className="path-progress-fill" style={{ width: '45%' }}></div>
                </div>
                <span>45% Complete</span>
              </div>
              <div className="path-courses">
                <div className="path-course completed">
                  <div className="path-course-icon">v</div>
                  <div>
                    <h4>HTML & CSS Fundamentals</h4>
                    <p>Completed</p>
                  </div>
                </div>
                <div className="path-course active">
                  <div className="path-course-icon">&#8594;</div>
                  <div>
                    <h4>JavaScript Essentials</h4>
                    <p>In Progress</p>
                  </div>
                </div>
                <div className="path-course">
                  <div className="path-course-icon"></div>
                  <div>
                    <h4>React Development</h4>
                    <p>Locked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default StudentLMS
