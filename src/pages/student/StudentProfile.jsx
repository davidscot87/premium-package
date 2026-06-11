import { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import ProfilePictureUpload from '../../components/ProfilePictureUpload'
import { 
  User, Mail, Phone, MapPin, Calendar, BookOpen, Camera, ShieldCheck, 
  Award, TrendingUp, Clock, Target, Edit3, Save, X, Lock, 
  GraduationCap, Users, Globe, Briefcase, Heart, Star, CheckCircle,
  Activity, BarChart3, FileText, Settings, Bell, Shield
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import './StudentProfile.css'

const StudentProfile = () => {
  const { user } = useAuth()
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  
  const student = {
    name: user?.name || 'Student Name',
    id: user?.studentId || 'STU2024001',
    email: (() => {
      const raw = user?.email || ''
      if (raw.includes('@')) return raw
      const name = user?.name || 'student'
      return name.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z.]/g, '') + '@premiercollege.edu'
    })(),
    phone: '9876543210',
    dob: '2003-05-15',
    address: 'Mumbai, Maharashtra',
    course: 'Computer Science & Engineering',
    semester: 6,
    cgpa: 8.9,
    enrollmentDate: '2021-08-15',
    bloodGroup: 'O+',
    nationality: 'Indian',
    gender: 'Male',
    guardianName: 'Parent Name',
    guardianPhone: '9876543211',
    emergencyContact: '9876543212'
  }

  const achievements = [
    { icon: Award, title: 'Dean\'s List', description: '3 Consecutive Semesters', color: '#f59e0b' },
    { icon: Star, title: 'Top Performer', description: 'Academic Excellence', color: '#8b5cf6' },
    { icon: Target, title: 'Perfect Attendance', description: '95% This Semester', color: '#10b981' },
    { icon: Users, title: 'Team Leader', description: 'Project Management', color: '#3b82f6' }
  ]

  const stats = [
    { label: 'Overall CGPA', value: student.cgpa, icon: TrendingUp, color: '#10b981', trend: '+0.3' },
    { label: 'Credits Earned', value: '120/180', icon: BookOpen, color: '#3b82f6', trend: '67%' },
    { label: 'Attendance', value: '95%', icon: CheckCircle, color: '#8b5cf6', trend: '+2%' },
    { label: 'Assignments', value: '48/50', icon: FileText, color: '#f59e0b', trend: '96%' }
  ]

  const activities = [
    { action: 'Completed Assignment', course: 'Data Structures', time: '2 hours ago', icon: CheckCircle, color: '#10b981' },
    { action: 'Attended Lecture', course: 'Machine Learning', time: '5 hours ago', icon: BookOpen, color: '#3b82f6' },
    { action: 'Quiz Submitted', course: 'Web Development', time: '1 day ago', icon: FileText, color: '#8b5cf6' },
    { action: 'Project Milestone', course: 'Final Year Project', time: '2 days ago', icon: Award, color: '#f59e0b' }
  ]

  return (
    <DashboardLayout role="student">
      <div className="profile-page-container">
        
        {/* Hero Header with Cover */}
        <div className="profile-hero-section">
          <div className="profile-cover-image">
            <div className="cover-gradient"></div>
          </div>
          
          <div className="profile-hero-content">
            <div className="profile-avatar-section">
              <div className="profile-avatar-wrapper">
                <img 
                  src={user?.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&size=400&background=1a237e&color=fff&bold=true&font-size=0.35`} 
                  alt={student.name}
                  className="profile-avatar-image"
                />
                <button 
                  className="avatar-camera-btn"
                  onClick={() => setShowUploadModal(true)}
                  title="Change Profile Picture"
                >
                  <Camera size={20} />
                </button>
                <div className="avatar-status-indicator"></div>
              </div>
            </div>

            <div className="profile-hero-info">
              <div className="profile-name-section">
                <h1 className="profile-name">{student.name}</h1>
                <div className="profile-verification-badge">
                  <Shield size={16} />
                  <span>Verified Student</span>
                </div>
              </div>
              
              <div className="profile-meta-tags">
                <span className="meta-tag primary">
                  <ShieldCheck size={14} />
                  {student.id}
                </span>
                <span className="meta-tag secondary">
                  <GraduationCap size={14} />
                  {student.course}
                </span>
                <span className="meta-tag tertiary">
                  <BookOpen size={14} />
                  Semester {student.semester}
                </span>
              </div>

              <div className="profile-quick-actions">
                <button className="quick-action-btn primary" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? <><X size={18} /> Cancel</> : <><Edit3 size={18} /> Edit Profile</>}
                </button>
                <button className="quick-action-btn secondary">
                  <Settings size={18} />
                  Settings
                </button>
                <button className="quick-action-btn secondary">
                  <Bell size={18} />
                  Notifications
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview Cards */}
        <div className="profile-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="profile-stat-card">
              <div className="stat-card-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
                <stat.icon size={24} />
              </div>
              <div className="stat-card-content">
                <div className="stat-card-label">{stat.label}</div>
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-trend" style={{ color: stat.color }}>
                  <TrendingUp size={14} />
                  {stat.trend}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="profile-tabs-container">
          <div className="profile-tabs">
            <button 
              className={`profile-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <User size={18} />
              Overview
            </button>
            <button 
              className={`profile-tab ${activeTab === 'academic' ? 'active' : ''}`}
              onClick={() => setActiveTab('academic')}
            >
              <BookOpen size={18} />
              Academic Info
            </button>
            <button 
              className={`profile-tab ${activeTab === 'activity' ? 'active' : ''}`}
              onClick={() => setActiveTab('activity')}
            >
              <Activity size={18} />
              Recent Activity
            </button>
            <button 
              className={`profile-tab ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              <Award size={18} />
              Achievements
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="profile-content-grid">
          
          {/* Main Content */}
          <div className="profile-main-content">
            
            {activeTab === 'overview' && (
              <>
                {/* Personal Information */}
                <div className="profile-section-card">
                  <div className="section-card-header">
                    <div className="section-title">
                      <User size={20} />
                      <h2>Personal Information</h2>
                    </div>
                    {!isEditing && (
                      <button className="icon-btn" onClick={() => setIsEditing(true)}>
                        <Edit3 size={18} />
                      </button>
                    )}
                  </div>

                  <div className="profile-info-grid">
                    <div className="info-field">
                      <label><Mail size={16} /> Email Address</label>
                      {isEditing ? (
                        <input type="email" defaultValue={student.email} className="profile-input" />
                      ) : (
                        <div className="info-value">{student.email}</div>
                      )}
                    </div>

                    <div className="info-field">
                      <label><Phone size={16} /> Phone Number</label>
                      {isEditing ? (
                        <input type="tel" defaultValue={student.phone} className="profile-input" />
                      ) : (
                        <div className="info-value">+91 {student.phone}</div>
                      )}
                    </div>

                    <div className="info-field">
                      <label><Calendar size={16} /> Date of Birth</label>
                      {isEditing ? (
                        <input type="date" defaultValue={student.dob} className="profile-input" />
                      ) : (
                        <div className="info-value">{new Date(student.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      )}
                    </div>

                    <div className="info-field">
                      <label><Heart size={16} /> Blood Group</label>
                      {isEditing ? (
                        <input type="text" defaultValue={student.bloodGroup} className="profile-input" />
                      ) : (
                        <div className="info-value">{student.bloodGroup}</div>
                      )}
                    </div>

                    <div className="info-field">
                      <label><Globe size={16} /> Nationality</label>
                      {isEditing ? (
                        <input type="text" defaultValue={student.nationality} className="profile-input" />
                      ) : (
                        <div className="info-value">{student.nationality}</div>
                      )}
                    </div>

                    <div className="info-field">
                      <label><User size={16} /> Gender</label>
                      {isEditing ? (
                        <select defaultValue={student.gender} className="profile-input">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      ) : (
                        <div className="info-value">{student.gender}</div>
                      )}
                    </div>

                    <div className="info-field full-width">
                      <label><MapPin size={16} /> Address</label>
                      {isEditing ? (
                        <textarea defaultValue={student.address} className="profile-input" rows="2"></textarea>
                      ) : (
                        <div className="info-value">{student.address}</div>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="section-actions">
                      <button className="action-btn secondary" onClick={() => setIsEditing(false)}>
                        <X size={18} />
                        Cancel
                      </button>
                      <button className="action-btn primary" onClick={() => setIsEditing(false)}>
                        <Save size={18} />
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>

                {/* Emergency Contact */}
                <div className="profile-section-card">
                  <div className="section-card-header">
                    <div className="section-title">
                      <Users size={20} />
                      <h2>Emergency Contact</h2>
                    </div>
                  </div>

                  <div className="profile-info-grid">
                    <div className="info-field">
                      <label><User size={16} /> Guardian Name</label>
                      <div className="info-value">{student.guardianName}</div>
                    </div>

                    <div className="info-field">
                      <label><Phone size={16} /> Guardian Phone</label>
                      <div className="info-value">+91 {student.guardianPhone}</div>
                    </div>

                    <div className="info-field">
                      <label><Phone size={16} /> Emergency Contact</label>
                      <div className="info-value">+91 {student.emergencyContact}</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'academic' && (
              <div className="profile-section-card">
                <div className="section-card-header">
                  <div className="section-title">
                    <GraduationCap size={20} />
                    <h2>Academic Information</h2>
                  </div>
                </div>

                <div className="profile-info-grid">
                  <div className="info-field">
                    <label><Lock size={16} /> Student ID</label>
                    <div className="info-value locked">{student.id}</div>
                  </div>

                  <div className="info-field">
                    <label><BookOpen size={16} /> Course</label>
                    <div className="info-value locked">{student.course}</div>
                  </div>

                  <div className="info-field">
                    <label><Calendar size={16} /> Enrollment Date</label>
                    <div className="info-value">{new Date(student.enrollmentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  </div>

                  <div className="info-field">
                    <label><TrendingUp size={16} /> Current Semester</label>
                    <div className="info-value">Semester {student.semester}</div>
                  </div>

                  <div className="info-field">
                    <label><Award size={16} /> Overall CGPA</label>
                    <div className="info-value highlight">{student.cgpa} / 10.0</div>
                  </div>

                  <div className="info-field">
                    <label><Target size={16} /> Academic Status</label>
                    <div className="info-value">
                      <span className="status-badge success">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="profile-section-card">
                <div className="section-card-header">
                  <div className="section-title">
                    <Activity size={20} />
                    <h2>Recent Activity</h2>
                  </div>
                </div>

                <div className="activity-timeline">
                  {activities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-icon" style={{ background: `${activity.color}15`, color: activity.color }}>
                        <activity.icon size={18} />
                      </div>
                      <div className="activity-content">
                        <div className="activity-title">{activity.action}</div>
                        <div className="activity-course">{activity.course}</div>
                        <div className="activity-time">
                          <Clock size={12} />
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon" style={{ background: `${achievement.color}15`, color: achievement.color }}>
                      <achievement.icon size={32} />
                    </div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="profile-sidebar">
            
            {/* Quick Stats */}
            <div className="sidebar-card">
              <div className="sidebar-card-header">
                <BarChart3 size={18} />
                <h3>Performance Overview</h3>
              </div>
              <div className="performance-chart">
                <div className="performance-item">
                  <div className="performance-label">Academic</div>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{ width: '89%', background: '#10b981' }}></div>
                  </div>
                  <div className="performance-value">89%</div>
                </div>
                <div className="performance-item">
                  <div className="performance-label">Attendance</div>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{ width: '95%', background: '#3b82f6' }}></div>
                  </div>
                  <div className="performance-value">95%</div>
                </div>
                <div className="performance-item">
                  <div className="performance-label">Assignments</div>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{ width: '96%', background: '#8b5cf6' }}></div>
                  </div>
                  <div className="performance-value">96%</div>
                </div>
              </div>
            </div>

            {/* Achievements Preview */}
            <div className="sidebar-card">
              <div className="sidebar-card-header">
                <Award size={18} />
                <h3>Recent Achievements</h3>
              </div>
              <div className="achievements-list">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <div className="achievement-mini-icon" style={{ background: `${achievement.color}15`, color: achievement.color }}>
                      <achievement.icon size={16} />
                    </div>
                    <div className="achievement-mini-content">
                      <div className="achievement-mini-title">{achievement.title}</div>
                      <div className="achievement-mini-desc">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {showUploadModal && (
        <ProfilePictureUpload
          currentPicture={user?.profilePicture}
          onClose={() => setShowUploadModal(false)}
        />
      )}
    </DashboardLayout>
  )
}

export default StudentProfile
