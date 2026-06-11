import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import {
  Users, BookOpen, Calendar, TrendingUp, GraduationCap, DollarSign,
  RefreshCw, Download, BarChart3, Activity, UserCheck, Award,
  Target, Clock, ArrowUpRight, ArrowDownRight, ChevronRight,
  Bell, FileText, Settings, Globe, Star, Zap, Shield
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import '../student/StudentDashboard.css'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const { user } = useAuth()
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [period, setPeriod] = useState('month')

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'

  useEffect(() => {
    const interval = setInterval(() => setLastUpdated(new Date()), 30000)
    return () => clearInterval(interval)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => { setLastUpdated(new Date()); setIsRefreshing(false) }, 1000)
  }

  // ── KPI DATA ──────────────────────────────────────────────────────────────
  const kpis = [
    { icon: GraduationCap, label: 'Total Students', value: '1,400', change: '+6.1%', up: true, color: '#6366f1', bg: '#eef2ff', sub: 'Active enrollments' },
    { icon: Users, label: 'Faculty Members', value: '58', change: '+8', up: true, color: '#10b981', bg: '#ecfdf5', sub: 'Across departments' },
    { icon: BookOpen, label: 'Active Courses', value: '34', change: '+4', up: true, color: '#f59e0b', bg: '#fffbeb', sub: 'This semester' },
    { icon: DollarSign, label: 'Revenue', value: 'Rs.19.2M', change: '+18%', up: true, color: '#3b82f6', bg: '#eff6ff', sub: '88.7% collected' },
    { icon: UserCheck, label: 'Attendance Rate', value: '89.2%', change: '+4.7%', up: true, color: '#8b5cf6', bg: '#f5f3ff', sub: 'Above 85% target' },
    { icon: Award, label: 'Pass Rate', value: '92.3%', change: '+2.2%', up: true, color: '#ec4899', bg: '#fdf2f8', sub: 'Academic performance' },
  ]

  // ── ENROLLMENT TREND ─────────────────────────────────────────────────────
  const enrollmentData = [
    { month: 'Sep', students: 980, target: 1000 },
    { month: 'Oct', students: 1050, target: 1100 },
    { month: 'Nov', students: 1120, target: 1150 },
    { month: 'Dec', students: 1180, target: 1200 },
    { month: 'Jan', students: 1250, target: 1250 },
    { month: 'Feb', students: 1320, target: 1300 },
    { month: 'Mar', students: 1400, target: 1400 },
  ]
  const maxEnroll = Math.max(...enrollmentData.map(d => Math.max(d.students, d.target)))

  // ── REVENUE TREND ────────────────────────────────────────────────────────
  const revenueData = [
    { month: 'Sep', value: 2.1 },
    { month: 'Oct', value: 2.3 },
    { month: 'Nov', value: 2.5 },
    { month: 'Dec', value: 2.8 },
    { month: 'Jan', value: 3.1 },
    { month: 'Feb', value: 3.4 },
    { month: 'Mar', value: 3.6 },
  ]
  const maxRevenue = Math.max(...revenueData.map(d => d.value))

  // ── DEPARTMENTS ──────────────────────────────────────────────────────────
  const departments = [
    { name: 'Computer Science', students: 420, pct: 30, color: '#6366f1' },
    { name: 'Business Admin', students: 350, pct: 25, color: '#3b82f6' },
    { name: 'Engineering', students: 280, pct: 20, color: '#10b981' },
    { name: 'Arts & Humanities', students: 210, pct: 15, color: '#f59e0b' },
    { name: 'Sciences', students: 140, pct: 10, color: '#ec4899' },
  ]

  // ── TOP COURSES ──────────────────────────────────────────────────────────
  const topCourses = [
    { name: 'Data Science', enrolled: 245, cap: 250, rating: 4.8, trend: '+12%', up: true },
    { name: 'Web Development', enrolled: 230, cap: 240, rating: 4.7, trend: '+8%', up: true },
    { name: 'Machine Learning', enrolled: 210, cap: 220, rating: 4.9, trend: '+15%', up: true },
    { name: 'Digital Marketing', enrolled: 195, cap: 200, rating: 4.6, trend: '+5%', up: true },
    { name: 'Cloud Computing', enrolled: 180, cap: 200, rating: 4.7, trend: '+10%', up: true },
  ]

  // ── RECENT ACTIVITY ──────────────────────────────────────────────────────
  const recentActivity = [
    { type: 'admission', text: 'New admission: Priya Sharma - B.Tech CSE', time: '5 min ago', icon: GraduationCap, color: '#6366f1' },
    { type: 'payment', text: 'Fee payment received: Rs.40,000 - Rahul Kumar', time: '12 min ago', icon: DollarSign, color: '#10b981' },
    { type: 'course', text: 'New course published: Advanced ML Techniques', time: '1 hr ago', icon: BookOpen, color: '#f59e0b' },
    { type: 'alert', text: 'Attendance below 75%: 12 students flagged', time: '2 hr ago', icon: Bell, color: '#ef4444' },
    { type: 'report', text: 'Monthly report generated for March 2026', time: '3 hr ago', icon: FileText, color: '#8b5cf6' },
  ]

  // ── PERFORMANCE METRICS ──────────────────────────────────────────────────
  const metrics = [
    { label: 'Attendance', current: 89.2, target: 90, prev: 85.0 },
    { label: 'Pass Rate', current: 92.3, target: 95, prev: 90.1 },
    { label: 'Fee Collection', current: 88.7, target: 95, prev: 82.5 },
    { label: 'Satisfaction', current: 84.0, target: 90, prev: 80.0 },
  ]

  // ── QUICK ACTIONS ────────────────────────────────────────────────────────
  const quickActions = [
    { label: 'Add Student', icon: GraduationCap, to: '/admin/students', color: '#6366f1' },
    { label: 'New Course', icon: BookOpen, to: '/admin/courses', color: '#10b981' },
    { label: 'View Reports', icon: BarChart3, to: '/admin/reports', color: '#f59e0b' },
    { label: 'Manage Fees', icon: DollarSign, to: '/admin/fees', color: '#3b82f6' },
    { label: 'Announcements', icon: Bell, to: '/admin/announcements', color: '#8b5cf6' },
    { label: 'Settings', icon: Settings, to: '/admin/settings', color: '#64748b' },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="adm-page">

        {/* ── WELCOME BANNER ── */}
        <div className="adm-banner">
          <div className="adm-banner-left">
            <div className="adm-banner-avatar">
              {user?.profilePicture
                ? <img src={user.profilePicture} alt={user?.name || 'Admin'} />
                : <span>{(user?.name || 'A').charAt(0).toUpperCase()}</span>
              }
              <div className="adm-online-dot" />
            </div>
            <div className="adm-banner-info">
              <p className="adm-greeting">{greeting},</p>
              <div className="adm-meta adm-meta-stacked">
                <span className="adm-role-chip">System Administrator</span>
                <span className="adm-live">
                  <span className="adm-live-dot" />
                  Live &bull; {lastUpdated.toLocaleTimeString()}
                </span>
              </div>
              <h1 className="adm-name">{user?.name || 'Administrator'}</h1>
            </div>
          </div>
          <div className="adm-banner-right">
            <select className="adm-period-select" value={period} onChange={e => setPeriod(e.target.value)}>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className={`adm-btn-refresh ${isRefreshing ? 'spinning' : ''}`} onClick={handleRefresh}>
              <RefreshCw size={16} />
              Sync
            </button>
            <button className="adm-btn-export">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        {/* ── KPI GRID ── */}
        <div className="adm-kpi-grid">
          {kpis.map((k, i) => {
            const Icon = k.icon
            return (
              <div key={i} className="adm-kpi-card" style={{ '--kc': k.color, '--kb': k.bg }}>
                <div className="adm-kpi-top">
                  <div className="adm-kpi-icon"><Icon size={22} /></div>
                  <div className={`adm-kpi-badge ${k.up ? 'up' : 'down'}`}>
                    {k.up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                    {k.change}
                  </div>
                </div>
                <div className="adm-kpi-value">{k.value}</div>
                <div className="adm-kpi-label">{k.label}</div>
                <div className="adm-kpi-sub">{k.sub}</div>
              </div>
            )
          })}
        </div>

        {/* ── CHARTS ROW ── */}
        <div className="adm-charts-row">

          {/* Enrollment Bar Chart */}
          <div className="adm-card adm-chart-card">
            <div className="adm-card-header">
              <div className="adm-card-title">
                <BarChart3 size={18} />
                <h2>Enrollment Trend</h2>
              </div>
              <div className="adm-chart-legend">
                <span className="adm-legend-dot" style={{ background: '#6366f1' }} />Actual
                <span className="adm-legend-dot" style={{ background: '#fbbf24', marginLeft: '1rem' }} />Target
              </div>
            </div>
            <div className="adm-bar-chart">
              {enrollmentData.map((d, i) => (
                <div key={i} className="adm-bar-group">
                  <div className="adm-bar-pair">
                    <div
                      className="adm-bar adm-bar-actual"
                      style={{ height: `${(d.students / maxEnroll) * 160}px` }}
                      title={`${d.students} students`}
                    />
                    <div
                      className="adm-bar adm-bar-target"
                      style={{ height: `${(d.target / maxEnroll) * 160}px` }}
                      title={`Target: ${d.target}`}
                    />
                  </div>
                  <span className="adm-bar-label">{d.month}</span>
                </div>
              ))}
            </div>
            <div className="adm-chart-insight">
              <TrendingUp size={14} />
              +42.9% growth over 7 months &bull; 100% target achievement
            </div>
          </div>

          {/* Revenue Area Chart */}
          <div className="adm-card adm-chart-card">
            <div className="adm-card-header">
              <div className="adm-card-title">
                <Activity size={18} />
                <h2>Revenue Growth</h2>
              </div>
              <span className="adm-chart-unit">in Crores (Rs.)</span>
            </div>
            <div className="adm-area-chart">
              <svg viewBox="0 0 420 160" className="adm-svg">
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3].map(i => (
                  <line key={i} x1="30" y1={140 - i * 40} x2="410" y2={140 - i * 40}
                    stroke="#f1f5f9" strokeWidth="1" />
                ))}
                <path
                  d={`M30,140 ${revenueData.map((d, i) => `L${30 + i * 60},${140 - (d.value / maxRevenue) * 120}`).join(' ')} L${30 + 6 * 60},140 Z`}
                  fill="url(#revGrad)"
                />
                <path
                  d={revenueData.map((d, i) => `${i === 0 ? 'M' : 'L'}${30 + i * 60},${140 - (d.value / maxRevenue) * 120}`).join(' ')}
                  fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                />
                {revenueData.map((d, i) => (
                  <g key={i}>
                    <circle cx={30 + i * 60} cy={140 - (d.value / maxRevenue) * 120} r="4"
                      fill="#10b981" stroke="white" strokeWidth="2" />
                    <text x={30 + i * 60} y={140 - (d.value / maxRevenue) * 120 - 10}
                      textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="700">
                      {d.value}Cr
                    </text>
                    <text x={30 + i * 60} y="155" textAnchor="middle" fill="#94a3b8" fontSize="10">
                      {d.month}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="adm-chart-insight">
              <TrendingUp size={14} />
              +71.4% revenue growth &bull; Rs.3.6Cr in March 2026
            </div>
          </div>
        </div>

        {/* ── MIDDLE ROW ── */}
        <div className="adm-mid-row">

          {/* Department Distribution */}
          <div className="adm-card">
            <div className="adm-card-header">
              <div className="adm-card-title">
                <Target size={18} />
                <h2>Department Distribution</h2>
              </div>
              <span className="adm-total-badge">1,400 total</span>
            </div>
            <div className="adm-dept-list">
              {departments.map((d, i) => (
                <div key={i} className="adm-dept-item">
                  <div className="adm-dept-header">
                    <span className="adm-dept-name">{d.name}</span>
                    <span className="adm-dept-count">{d.students} <span className="adm-dept-pct">({d.pct}%)</span></span>
                  </div>
                  <div className="adm-dept-bar">
                    <div className="adm-dept-fill" style={{ width: `${d.pct}%`, background: d.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="adm-card">
            <div className="adm-card-header">
              <div className="adm-card-title">
                <Zap size={18} />
                <h2>Performance Metrics</h2>
              </div>
            </div>
            <div className="adm-metrics-list">
              {metrics.map((m, i) => {
                const pct = (m.current / m.target) * 100
                const change = (m.current - m.prev).toFixed(1)
                return (
                  <div key={i} className="adm-metric-item">
                    <div className="adm-metric-header">
                      <span className="adm-metric-label">{m.label}</span>
                      <div className="adm-metric-right">
                        <span className="adm-metric-val">{m.current}%</span>
                        <span className="adm-metric-change up">+{change}%</span>
                      </div>
                    </div>
                    <div className="adm-metric-bar">
                      <div
                        className="adm-metric-fill"
                        style={{
                          width: `${Math.min(pct, 100)}%`,
                          background: pct >= 95 ? '#10b981' : pct >= 80 ? '#6366f1' : '#f59e0b'
                        }}
                      />
                    </div>
                    <div className="adm-metric-footer">
                      <span>Target: {m.target}%</span>
                      <span>{pct.toFixed(0)}% achieved</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="adm-card">
            <div className="adm-card-header">
              <div className="adm-card-title">
                <Clock size={18} />
                <h2>Recent Activity</h2>
              </div>
              <span className="adm-badge-new">Live</span>
            </div>
            <div className="adm-activity-list">
              {recentActivity.map((a, i) => {
                const Icon = a.icon
                return (
                  <div key={i} className="adm-activity-item">
                    <div className="adm-activity-icon" style={{ background: a.color + '18', color: a.color }}>
                      <Icon size={16} />
                    </div>
                    <div className="adm-activity-info">
                      <p className="adm-activity-text">{a.text}</p>
                      <span className="adm-activity-time">{a.time}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── TOP COURSES ── */}
        <div className="adm-card">
          <div className="adm-card-header">
            <div className="adm-card-title">
              <Star size={18} />
              <h2>Top Performing Courses</h2>
            </div>
            <Link to="/admin/courses" className="adm-view-all">View all <ChevronRight size={14} /></Link>
          </div>
          <div className="adm-courses-table">
            <div className="adm-table-head">
              <span>Rank</span>
              <span>Course</span>
              <span>Enrollment</span>
              <span>Capacity</span>
              <span>Rating</span>
              <span>Trend</span>
            </div>
            {topCourses.map((c, i) => (
              <div key={i} className="adm-table-row">
                <span className="adm-rank">#{i + 1}</span>
                <span className="adm-course-name">{c.name}</span>
                <div className="adm-enroll-cell">
                  <div className="adm-enroll-bar">
                    <div className="adm-enroll-fill" style={{ width: `${(c.enrolled / c.cap) * 100}%` }} />
                  </div>
                  <span>{c.enrolled}/{c.cap}</span>
                </div>
                <span className="adm-cap-pct">{((c.enrolled / c.cap) * 100).toFixed(0)}%</span>
                <span className="adm-rating">
                  <Star size={13} fill="#f59e0b" color="#f59e0b" />
                  {c.rating}
                </span>
                <span className={`adm-trend ${c.up ? 'up' : 'down'}`}>
                  {c.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {c.trend}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── QUICK ACTIONS ── */}
        <div className="adm-card">
          <div className="adm-card-header">
            <div className="adm-card-title">
              <Shield size={18} />
              <h2>Quick Actions</h2>
            </div>
          </div>
          <div className="adm-quick-grid">
            {quickActions.map((a, i) => {
              const Icon = a.icon
              return (
                <Link key={i} to={a.to} className="adm-quick-btn" style={{ '--qc': a.color }}>
                  <div className="adm-quick-icon"><Icon size={22} /></div>
                  <span>{a.label}</span>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}

export default AdminDashboard
