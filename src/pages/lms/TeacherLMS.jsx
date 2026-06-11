import { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { BookOpen, Users, TrendingUp, Award, Plus, Edit, Eye, BarChart3 } from 'lucide-react'
import { teacherCourses } from '../../data/lmsData'
import './LMS.css'

const TeacherLMS = () => {
  const [activeTab, setActiveTab] = useState('courses')

  const stats = [
    { icon: BookOpen, label: 'Total Courses', value: teacherCourses.length, color: 'blue' },
    { icon: Users, label: 'Total Students', value: teacherCourses.reduce((sum, c) => sum + c.students, 0), color: 'green' },
    { icon: TrendingUp, label: 'Avg Completion', value: `${Math.round(teacherCourses.reduce((sum, c) => sum + c.completionRate, 0) / teacherCourses.length)}%`, color: 'purple' },
    { icon: Award, label: 'Avg Score', value: `${Math.round(teacherCourses.reduce((sum, c) => sum + c.averageScore, 0) / teacherCourses.length)}%`, color: 'orange' },
  ]

  return (
    <DashboardLayout role="teacher">
      <div className="dashboard-page lms-page">
        <div className="page-header">
          <div>
            <h1>Course Management</h1>
            <p>Manage your courses and track student progress</p>
          </div>
          <Link to="/teacher-dashboard/lms/create-course" className="btn-primary">
            <Plus size={20} />
            Create New Course
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

        <div className="quick-links-grid" style={{ marginBottom: '30px' }}>
          <Link to="/teacher-dashboard/lms/create-course" className="quick-link-card">
            <div className="quick-link-icon">
              <Plus size={28} />
            </div>
            <h3>Create Course</h3>
            <p>Build a new course</p>
          </Link>
          <Link to="/teacher-dashboard/lms/create-quiz" className="quick-link-card">
            <div className="quick-link-icon">
              <Edit size={28} />
            </div>
            <h3>Create Quiz</h3>
            <p>Add assessments</p>
          </Link>
          <Link to="/teacher-dashboard/lms/analytics" className="quick-link-card">
            <div className="quick-link-icon">
              <BarChart3 size={28} />
            </div>
            <h3>Analytics</h3>
            <p>View insights</p>
          </Link>
          <Link to="/teacher-dashboard/lms/students" className="quick-link-card">
            <div className="quick-link-icon">
              <Users size={28} />
            </div>
            <h3>Students</h3>
            <p>Monitor progress</p>
          </Link>
        </div>

        <div className="lms-tabs">
          <button 
            className={`lms-tab ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            My Courses
          </button>
          <button 
            className={`lms-tab ${activeTab === 'drafts' ? 'active' : ''}`}
            onClick={() => setActiveTab('drafts')}
          >
            Drafts
          </button>
        </div>

        {activeTab === 'courses' && (
          <div className="teacher-courses-grid">
            {teacherCourses.map(course => (
              <div key={course.id} className="teacher-course-card">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <div className="course-actions">
                    <Link to={`/teacher-dashboard/lms/course/${course.id}/edit`} className="btn-icon" title="Edit">
                      <Edit size={18} />
                    </Link>
                    <Link to={`/teacher-dashboard/lms/course/${course.id}/preview`} className="btn-icon" title="Preview">
                      <Eye size={18} />
                    </Link>
                    <Link to={`/teacher-dashboard/lms/course/${course.id}/analytics`} className="btn-icon" title="Analytics">
                      <BarChart3 size={18} />
                    </Link>
                  </div>
                </div>
                
                <div className="course-stats-grid">
                  <div className="stat-item">
                    <Users size={20} />
                    <div>
                      <div className="stat-value">{course.students}</div>
                      <div className="stat-label">Students</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <TrendingUp size={20} />
                    <div>
                      <div className="stat-value">{course.completionRate}%</div>
                      <div className="stat-label">Completion</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <Award size={20} />
                    <div>
                      <div className="stat-value">{course.averageScore}%</div>
                      <div className="stat-label">Avg Score</div>
                    </div>
                  </div>
                  <div className="stat-item">
                    <Users size={20} />
                    <div>
                      <div className="stat-value">{course.activeStudents}</div>
                      <div className="stat-label">Active</div>
                    </div>
                  </div>
                </div>

                <div className="course-content-stats">
                  <span>{course.modules} Modules</span>
                  <span>{course.assignments} Assignments</span>
                  <span>{course.quizzes} Quizzes</span>
                </div>

                <div className="course-progress-bar">
                  <div className="progress-fill" style={{ width: `${course.completionRate}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'drafts' && (
          <div className="empty-state">
            <BookOpen size={64} />
            <h3>No Draft Courses</h3>
            <p>Create a new course to get started</p>
            <Link to="/teacher-dashboard/lms/create-course" className="btn-primary">
              <Plus size={20} />
              Create Course
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default TeacherLMS
