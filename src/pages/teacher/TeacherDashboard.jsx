import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import {
  BookOpen, Users, FileText, Calendar, TrendingUp,
  Clock, CheckCircle, ChevronRight, Award, BarChart3,
  MessageSquare, Bell, Star, ArrowRight
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import '../student/StudentDashboard.css'

const TeacherDashboard = () => {
  const { user } = useAuth()
  const firstName = user?.name?.split(' ')[0] || 'Faculty'
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'

  const kpis = [
    { icon: BookOpen, label: 'Active Courses', value: '6', sub: 'This semester', color: '#1a237e', bg: '#eff6ff' },
    { icon: Users, label: 'Total Students', value: '320', sub: 'Across all courses', color: '#0891b2', bg: '#ecfeff' },
    { icon: FileText, label: 'Pending Evaluations', value: '12', sub: 'Assignments to grade', color: '#dc2626', bg: '#fef2f2' },
    { icon: Calendar, label: 'Classes Today', value: '3', sub: 'Scheduled', color: '#7c3aed', bg: '#f5f3ff' },
    { icon: Award, label: 'Avg Class Rating', value: '4.8', sub: 'Student feedback', color: '#d97706', bg: '#fffbeb' },
    { icon: TrendingUp, label: 'Pass Rate', value: '94%', sub: 'This semester', color: '#16a34a', bg: '#f0fdf4' },
  ]

  const todayClasses = [
    { subject: 'Data Structures', time: '10:00 AM', class: 'CSE-3A', students: 60, room: 'Lab A-101', status: 'upcoming' },
    { subject: 'Algorithms', time: '2:00 PM', class: 'CSE-3B', students: 55, room: 'Room B-205', status: 'upcoming' },
    { subject: 'Machine Learning', time: '4:00 PM', class: 'CSE-4A', students: 50, room: 'Lab C-301', status: 'upcoming' },
  ]

  const pendingTasks = [
    { title: 'Grade DS Lab Assignment', course: 'CS101', count: 45, due: 'Today', priority: 'high' },
    { title: 'Upload ML Lecture Notes', course: 'CS301', count: null, due: 'Tomorrow', priority: 'medium' },
    { title: 'Review Project Submissions', course: 'CS201', count: 38, due: 'Mar 18', priority: 'medium' },
    { title: 'Prepare Mid-term Paper', course: 'CS101', count: null, due: 'Mar 20', priority: 'low' },
  ]

  const recentStudents = [
    { name: 'Priya Sharma', course: 'CS101', score: 95, grade: 'A+', pic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop' },
    { name: 'Rahul Kumar', course: 'CS301', score: 88, grade: 'A', pic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop' },
    { name: 'Ananya Singh', course: 'CS201', score: 92, grade: 'A+', pic: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop' },
    { name: 'Arjun Patel', course: 'CS101', score: 78, grade: 'B+', pic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop' },
  ]

  const coursePerformance = [
    { name: 'Data Structures', students: 60, avgScore: 82, passRate: 95, rating: 4.9 },
    { name: 'Algorithms', students: 55, avgScore: 78, passRate: 91, rating: 4.7 },
    { name: 'Machine Learning', students: 50, avgScore: 85, passRate: 96, rating: 4.8 },
  ]

  const gradeColor = (g) => {
    if (g.startsWith('A')) return '#16a34a'
    if (g.startsWith('B')) return '#0891b2'
    return '#7c3aed'
  }

  return (
    <DashboardLayout role="teacher">
      <div className="ent-page">

        {/* Welcome Banner */}
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar">
              {user?.profilePicture
                ? <img src={user.profilePicture} alt={user.name} />
                : <span>{firstName.charAt(0)}</span>
              }
            </div>
            <div>
              <p className="ent-greeting">{greeting},</p>
              <h1 className="ent-welcome-name">{user?.name || 'Faculty'} </h1>
              <p className="ent-welcome-sub">
                {user?.department || 'Computer Science'} &nbsp;.&nbsp; {user?.designation || 'Associate Professor'} &nbsp;.&nbsp; {user?.employeeId || 'EMP2024001'}
              </p>
            </div>
          </div>
          <div className="ent-welcome-right">
            <div className="ent-quick-action">
              <Link to="/teacher-dashboard/grades" className="ent-qa-btn primary">
                <Award size={16} /> Grade Assignments
              </Link>
              <Link to="/teacher-dashboard/classes" className="ent-qa-btn secondary">
                <Users size={16} /> My Classes
              </Link>
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="ent-kpi-grid">
          {kpis.map((k, i) => {
            const Icon = k.icon
            return (
              <div key={i} className="ent-kpi-card" style={{ '--kpi-color': k.color, '--kpi-bg': k.bg }}>
                <div className="ent-kpi-icon"><Icon size={22} /></div>
                <div className="ent-kpi-body">
                  <p className="ent-kpi-label">{k.label}</p>
                  <h3 className="ent-kpi-value">{k.value}</h3>
                  <p className="ent-kpi-sub">{k.sub}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Grid */}
        <div className="ent-main-grid">

          {/* Today's Schedule */}
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title"><Calendar size={18} /><h2>Today's Schedule</h2></div>
              <Link to="/teacher-dashboard/schedule" className="ent-card-link">Full schedule <ChevronRight size={14} /></Link>
            </div>
            <div className="ent-class-list">
              {todayClasses.map((cls, i) => (
                <div key={i} className="ent-class-item">
                  <div className="ent-class-time"><Clock size={14} />{cls.time}</div>
                  <div className="ent-class-info">
                    <p className="ent-class-name">{cls.subject}</p>
                    <p className="ent-class-meta">{cls.class} &nbsp;.&nbsp; {cls.students} students &nbsp;.&nbsp; {cls.room}</p>
                  </div>
                  <div className="ent-class-badge upcoming">Upcoming</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title"><FileText size={18} /><h2>Pending Tasks</h2></div>
              <span className="ent-badge-count">{pendingTasks.length}</span>
            </div>
            <div className="ent-assign-list">
              {pendingTasks.map((t, i) => (
                <div key={i} className="ent-assign-item">
                  <div className="ent-assign-circle" />
                  <div className="ent-assign-info">
                    <p className="ent-assign-title">{t.title}</p>
                    <p className="ent-assign-meta">
                      {t.course}{t.count ? ` . ${t.count} submissions` : ''} &nbsp;.&nbsp; Due {t.due}
                    </p>
                  </div>
                  <div className={`ent-priority-dot ${t.priority}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Student Performance */}
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title"><Users size={18} /><h2>Recent Submissions</h2></div>
              <Link to="/teacher-dashboard/grades" className="ent-card-link">Grade all <ChevronRight size={14} /></Link>
            </div>
            <div className="tch-student-list">
              {recentStudents.map((s, i) => (
                <div key={i} className="tch-student-row">
                  <img src={s.pic} alt={s.name} className="tch-student-pic" />
                  <div className="tch-student-info">
                    <p className="tch-student-name">{s.name}</p>
                    <p className="tch-student-course">{s.course}</p>
                  </div>
                  <div className="tch-student-score">
                    <span className="tch-score-val">{s.score}/100</span>
                    <span className="tch-grade-badge" style={{ color: gradeColor(s.grade), background: gradeColor(s.grade) + '18' }}>
                      {s.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title"><Bell size={18} /><h2>Announcements</h2></div>
              <span className="ent-badge-count">3</span>
            </div>
            <div className="ent-ann-list">
              {[
                { title: 'Faculty Meeting -- Friday 3 PM', time: '1 hour ago', type: 'high' },
                { title: 'Mid-term Exam Schedule Released', time: '3 hours ago', type: 'medium' },
                { title: 'New LMS Features Available', time: '1 day ago', type: 'low' },
              ].map((a, i) => (
                <div key={i} className="ent-ann-item">
                  <div className="ent-ann-dot" style={{ background: a.type === 'high' ? '#dc2626' : a.type === 'medium' ? '#f59e0b' : '#10b981' }} />
                  <div className="ent-ann-info">
                    <p className="ent-ann-title">{a.title}</p>
                    <p className="ent-ann-time">{a.time}</p>
                  </div>
                  <ChevronRight size={14} className="ent-ann-arrow" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Performance */}
        <div className="ent-card">
          <div className="ent-card-header">
            <div className="ent-card-title"><BarChart3 size={18} /><h2>Course Performance Overview</h2></div>
            <Link to="/teacher-dashboard/classes" className="ent-card-link">View all <ChevronRight size={14} /></Link>
          </div>
          <div className="tch-course-perf-grid">
            {coursePerformance.map((c, i) => (
              <div key={i} className="tch-course-perf-card">
                <div className="tch-cp-header">
                  <h4>{c.name}</h4>
                  <div className="tch-cp-rating">
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <span>{c.rating}</span>
                  </div>
                </div>
                <div className="tch-cp-stats">
                  <div className="tch-cp-stat">
                    <span className="tch-cp-label">Students</span>
                    <span className="tch-cp-val">{c.students}</span>
                  </div>
                  <div className="tch-cp-stat">
                    <span className="tch-cp-label">Avg Score</span>
                    <span className="tch-cp-val">{c.avgScore}%</span>
                  </div>
                  <div className="tch-cp-stat">
                    <span className="tch-cp-label">Pass Rate</span>
                    <span className="tch-cp-val" style={{ color: '#16a34a' }}>{c.passRate}%</span>
                  </div>
                </div>
                <div className="tch-cp-bar">
                  <div className="tch-cp-fill" style={{ width: `${c.avgScore}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}

export default TeacherDashboard
