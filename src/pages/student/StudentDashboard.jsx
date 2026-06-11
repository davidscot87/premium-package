import { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import {
  BookOpen, Calendar, FileText, Award, Bell, TrendingUp,
  Clock, CheckCircle, ChevronRight, Play, DollarSign,
  BarChart3, Star, Zap, Target, ArrowUpRight, Activity,
  BookMarked, GraduationCap, Flame, Trophy
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import './StudentDashboard.css'

const StudentDashboard = () => {
  const { user } = useAuth()
  const firstName = user?.name?.split(' ')[0] || 'Student'
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'
  const [activeWeek, setActiveWeek] = useState(3)

  const kpis = [
    { icon: Award, label: 'CGPA', value: '8.9', sub: 'Semester 6', color: '#6366f1', bg: '#eef2ff', trend: '+0.2', up: true },
    { icon: Calendar, label: 'Attendance', value: '92%', sub: 'This semester', color: '#0891b2', bg: '#ecfeff', trend: '+3%', up: true },
    { icon: BookOpen, label: 'Active Courses', value: '6', sub: 'Enrolled', color: '#7c3aed', bg: '#f5f3ff', trend: null },
    { icon: FileText, label: 'Assignments Due', value: '3', sub: 'This week', color: '#dc2626', bg: '#fef2f2', trend: null },
    { icon: DollarSign, label: 'Fee Status', value: 'Rs.40K', sub: 'Due Apr 30', color: '#d97706', bg: '#fffbeb', trend: null },
    { icon: Star, label: 'Class Rank', value: '#12', sub: 'In class of 60', color: '#16a34a', bg: '#f0fdf4', trend: '+3', up: true },
  ]

  const todayClasses = [
    { subject: 'Machine Learning', time: '10:00 AM', room: 'Lab C-301', teacher: 'Dr. Meera Sharma', type: 'lab', color: '#6366f1' },
    { subject: 'Web Development', time: '2:00 PM', room: 'Lab A-101', teacher: 'Prof. Amit Shah', type: 'lab', color: '#0891b2' },
    { subject: 'Cloud Computing', time: '4:00 PM', room: 'Room B-205', teacher: 'Dr. Priya Gupta', type: 'lecture', color: '#7c3aed' },
  ]

  const assignments = [
    { title: 'Data Structures Lab Assignment', course: 'CS101', due: 'Mar 15', priority: 'high', done: false, points: 20 },
    { title: 'Algorithm Analysis Report', course: 'CS201', due: 'Mar 20', priority: 'medium', done: true, points: 20 },
    { title: 'ML Model Implementation', course: 'CS301', due: 'Mar 25', priority: 'high', done: false, points: 30 },
    { title: 'Cloud Architecture Design', course: 'CS401', due: 'Mar 28', priority: 'low', done: false, points: 25 },
  ]

  const recentGrades = [
    { subject: 'Data Structures', grade: 'A+', marks: 95, max: 100, color: '#16a34a' },
    { subject: 'Database Systems', grade: 'A', marks: 88, max: 100, color: '#0891b2' },
    { subject: 'Operating Systems', grade: 'A', marks: 86, max: 100, color: '#6366f1' },
    { subject: 'Computer Networks', grade: 'A+', marks: 92, max: 100, color: '#16a34a' },
  ]

  const announcements = [
    { title: 'Mid-term Exams Schedule Released', time: '2 hours ago', type: 'exam', urgent: true },
    { title: 'Library Extended Hours This Week', time: '1 day ago', type: 'info', urgent: false },
    { title: 'Sports Day Registration Open', time: '2 days ago', type: 'event', urgent: false },
    { title: 'Scholarship Applications Due April 1', time: '3 days ago', type: 'important', urgent: true },
  ]

  const annColors = { exam: '#dc2626', info: '#0891b2', event: '#7c3aed', important: '#d97706' }

  const attendanceSubjects = [
    { subject: 'Machine Learning', pct: 94, classes: 47, total: 50, color: '#6366f1' },
    { subject: 'Web Development', pct: 88, classes: 44, total: 50, color: '#0891b2' },
    { subject: 'Cloud Computing', pct: 92, classes: 46, total: 50, color: '#7c3aed' },
    { subject: 'Data Analytics', pct: 96, classes: 48, total: 50, color: '#16a34a' },
    { subject: 'Cyber Security', pct: 86, classes: 43, total: 50, color: '#d97706' },
    { subject: 'Mobile Dev', pct: 90, classes: 45, total: 50, color: '#dc2626' },
  ]

  const weekActivity = [
    { day: 'Mon', hours: 4.5 },
    { day: 'Tue', hours: 3.0 },
    { day: 'Wed', hours: 6.0 },
    { day: 'Thu', hours: 2.5 },
    { day: 'Fri', hours: 5.0 },
    { day: 'Sat', hours: 1.5 },
    { day: 'Sun', hours: 0.5 },
  ]
  const maxHours = Math.max(...weekActivity.map(d => d.hours))

  const quickLinks = [
    { label: 'LMS', icon: Play, to: '/student-dashboard/lms', color: '#6366f1', bg: '#eef2ff' },
    { label: 'Grades', icon: Trophy, to: '/student-dashboard/grades', color: '#16a34a', bg: '#f0fdf4' },
    { label: 'Fees', icon: DollarSign, to: '/student-dashboard/fees', color: '#d97706', bg: '#fffbeb' },
    { label: 'Library', icon: BookMarked, to: '/student-dashboard/library', color: '#0891b2', bg: '#ecfeff' },
    { label: 'Timetable', icon: Calendar, to: '/student-dashboard/timetable', color: '#7c3aed', bg: '#f5f3ff' },
    { label: 'Analytics', icon: BarChart3, to: '/student-dashboard/lms/analytics', color: '#dc2626', bg: '#fef2f2' },
  ]

  return (
    <DashboardLayout role="student">
      <div className="std-page">

        {/* ── HERO BANNER ── */}
        <div className="std-hero">
          <div className="std-hero-bg" />
          <div className="std-hero-content">
            <div className="std-hero-left">
              <div className="std-hero-avatar">
                {user?.profilePicture
                  ? <img src={user.profilePicture} alt={user.name} />
                  : <span>{firstName.charAt(0)}</span>
                }
                <div className="std-hero-streak">
                  <Flame size={12} />
                  <span>7</span>
                </div>
              </div>
              <div className="std-hero-info">
                <p className="std-hero-greeting">{greeting},</p>
                <h1 className="std-hero-name">{user?.name || firstName}</h1>
                <div className="std-hero-meta">
                  <span className="std-hero-chip">
                    <GraduationCap size={12} />
                    {user?.course || 'Computer Science & Engineering'}
                  </span>
                  <span className="std-hero-chip">Semester 6</span>
                  <span className="std-hero-chip">{user?.studentId || 'STU2024001'}</span>
                </div>
              </div>
            </div>
            <div className="std-hero-right">
              <div className="std-hero-progress-ring">
                <svg viewBox="0 0 80 80" className="std-ring-svg">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="white" strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 34 * 0.89} ${2 * Math.PI * 34}`}
                    strokeLinecap="round" transform="rotate(-90 40 40)" />
                </svg>
                <div className="std-ring-label">
                  <span className="std-ring-val">89%</span>
                  <span className="std-ring-sub">Overall</span>
                </div>
              </div>
              <div className="std-hero-actions">
                <Link to="/student-dashboard/lms" className="std-hero-btn primary">
                  <Play size={15} /> Continue Learning
                </Link>
                <Link to="/student-dashboard/timetable" className="std-hero-btn secondary">
                  <Calendar size={15} /> Timetable
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── KPI GRID ── */}
        <div className="std-kpi-grid">
          {kpis.map((k, i) => {
            const Icon = k.icon
            return (
              <div key={i} className="std-kpi" style={{ '--kc': k.color, '--kb': k.bg }}>
                <div className="std-kpi-top">
                  <div className="std-kpi-icon"><Icon size={20} /></div>
                  {k.trend && (
                    <div className={`std-kpi-trend ${k.up ? 'up' : 'down'}`}>
                      <ArrowUpRight size={11} /> {k.trend}
                    </div>
                  )}
                </div>
                <div className="std-kpi-val">{k.value}</div>
                <div className="std-kpi-label">{k.label}</div>
                <div className="std-kpi-sub">{k.sub}</div>
              </div>
            )
          })}
        </div>

        {/* ── QUICK LINKS ── */}
        <div className="std-quick-row">
          {quickLinks.map((q, i) => {
            const Icon = q.icon
            return (
              <Link key={i} to={q.to} className="std-quick-link" style={{ '--qc': q.color, '--qb': q.bg }}>
                <div className="std-quick-icon"><Icon size={20} /></div>
                <span>{q.label}</span>
              </Link>
            )
          })}
        </div>

        {/* ── MAIN GRID ── */}
        <div className="std-main-grid">

          {/* Today's Classes */}
          <div className="std-card">
            <div className="std-card-hdr">
              <div className="std-card-title"><Calendar size={17} /><h2>Today's Classes</h2></div>
              <Link to="/student-dashboard/timetable" className="std-card-link">View all <ChevronRight size={13} /></Link>
            </div>
            <div className="std-class-list">
              {todayClasses.map((c, i) => (
                <div key={i} className="std-class-item" style={{ '--cc': c.color }}>
                  <div className="std-class-stripe" />
                  <div className="std-class-time">
                    <Clock size={13} />
                    {c.time}
                  </div>
                  <div className="std-class-info">
                    <p className="std-class-name">{c.subject}</p>
                    <p className="std-class-meta">{c.room} &bull; {c.teacher}</p>
                  </div>
                  <span className="std-class-type">{c.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments */}
          <div className="std-card">
            <div className="std-card-hdr">
              <div className="std-card-title"><FileText size={17} /><h2>Assignments</h2></div>
              <Link to="/student-dashboard/assignments" className="std-card-link">View all <ChevronRight size={13} /></Link>
            </div>
            <div className="std-assign-list">
              {assignments.map((a, i) => (
                <div key={i} className={`std-assign-item ${a.done ? 'done' : ''}`}>
                  <div className={`std-assign-check ${a.done ? 'checked' : ''}`}>
                    {a.done ? <CheckCircle size={18} color="#16a34a" /> : <div className="std-assign-circle" />}
                  </div>
                  <div className="std-assign-info">
                    <p className="std-assign-title">{a.title}</p>
                    <p className="std-assign-meta">{a.course} &bull; Due {a.due} &bull; {a.points} pts</p>
                  </div>
                  <div className={`std-priority ${a.priority}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Grades */}
          <div className="std-card">
            <div className="std-card-hdr">
              <div className="std-card-title"><Award size={17} /><h2>Recent Grades</h2></div>
              <Link to="/student-dashboard/grades" className="std-card-link">View all <ChevronRight size={13} /></Link>
            </div>
            <div className="std-grades-list">
              {recentGrades.map((g, i) => (
                <div key={i} className="std-grade-item">
                  <div className="std-grade-info">
                    <p className="std-grade-subject">{g.subject}</p>
                    <div className="std-grade-bar-wrap">
                      <div className="std-grade-bar">
                        <div className="std-grade-fill" style={{ width: `${g.marks}%`, background: g.color }} />
                      </div>
                      <span className="std-grade-marks">{g.marks}/{g.max}</span>
                    </div>
                  </div>
                  <div className="std-grade-badge" style={{ color: g.color, background: g.color + '18' }}>{g.grade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="std-card">
            <div className="std-card-hdr">
              <div className="std-card-title"><Bell size={17} /><h2>Announcements</h2></div>
              <span className="std-badge-count">4</span>
            </div>
            <div className="std-ann-list">
              {announcements.map((a, i) => (
                <div key={i} className="std-ann-item">
                  <div className="std-ann-dot" style={{ background: annColors[a.type] }} />
                  <div className="std-ann-info">
                    <p className="std-ann-title">
                      {a.urgent && <span className="std-ann-urgent">URGENT</span>}
                      {a.title}
                    </p>
                    <p className="std-ann-time">{a.time}</p>
                  </div>
                  <ChevronRight size={13} className="std-ann-arrow" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="std-bottom-row">

          {/* Attendance Overview */}
          <div className="std-card std-att-card">
            <div className="std-card-hdr">
              <div className="std-card-title"><Activity size={17} /><h2>Attendance Overview</h2></div>
              <Link to="/student-dashboard/attendance" className="std-card-link">Details <ChevronRight size={13} /></Link>
            </div>
            <div className="std-att-grid">
              {attendanceSubjects.map((s, i) => (
                <div key={i} className="std-att-item">
                  <div className="std-att-hdr">
                    <span className="std-att-subject">{s.subject}</span>
                    <span className="std-att-pct" style={{ color: s.pct >= 90 ? '#16a34a' : s.pct >= 75 ? '#d97706' : '#dc2626' }}>
                      {s.pct}%
                    </span>
                  </div>
                  <div className="std-att-bar">
                    <div className="std-att-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                  </div>
                  <p className="std-att-count">{s.classes}/{s.total} classes</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Study Activity */}
          <div className="std-card">
            <div className="std-card-hdr">
              <div className="std-card-title"><Zap size={17} /><h2>Weekly Study Activity</h2></div>
              <span className="std-card-link">23.5 hrs total</span>
            </div>
            <div className="std-activity-chart">
              {weekActivity.map((d, i) => (
                <div key={i} className={`std-act-col ${i === activeWeek ? 'active' : ''}`} onClick={() => setActiveWeek(i)}>
                  <div className="std-act-bar-wrap">
                    <div className="std-act-bar" style={{ height: `${(d.hours / maxHours) * 100}%` }} />
                  </div>
                  <span className="std-act-day">{d.day}</span>
                  {i === activeWeek && <span className="std-act-tooltip">{d.hours}h</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Learning Progress */}
          <div className="std-card">
            <div className="std-card-hdr">
              <div className="std-card-title"><Target size={17} /><h2>Learning Progress</h2></div>
              <Link to="/student-dashboard/lms" className="std-card-link">LMS <ChevronRight size={13} /></Link>
            </div>
            <div className="std-progress-list">
              {[
                { name: 'Machine Learning', pct: 68, color: '#6366f1' },
                { name: 'Web Development', pct: 82, color: '#0891b2' },
                { name: 'Cloud Computing', pct: 45, color: '#7c3aed' },
                { name: 'Data Analytics', pct: 90, color: '#16a34a' },
              ].map((c, i) => (
                <div key={i} className="std-prog-item">
                  <div className="std-prog-hdr">
                    <span className="std-prog-name">{c.name}</span>
                    <span className="std-prog-pct" style={{ color: c.color }}>{c.pct}%</span>
                  </div>
                  <div className="std-prog-bar">
                    <div className="std-prog-fill" style={{ width: `${c.pct}%`, background: c.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}

export default StudentDashboard
