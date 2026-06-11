import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Calendar, TrendingUp, AlertCircle, CheckCircle, BarChart3, Clock } from 'lucide-react'
import { attendance } from '../../data/mockData'
import '../student/StudentDashboard.css'

const StudentAttendance = () => {
  const totalClasses = 120
  const attended = 110
  const percentage = ((attended / totalClasses) * 100).toFixed(1)

  const kpis = [
    { icon: BarChart3, label: 'Overall Attendance', value: `${percentage}%`, sub: 'This semester', color: '#1a237e', bg: '#eff6ff', trend: '+2%', up: true },
    { icon: CheckCircle, label: 'Classes Attended', value: attended, sub: `Out of ${totalClasses}`, color: '#16a34a', bg: '#f0fdf4', trend: null },
    { icon: AlertCircle, label: 'Classes Missed', value: totalClasses - attended, sub: 'This semester', color: '#dc2626', bg: '#fef2f2', trend: null },
    { icon: Calendar, label: 'Required %', value: '75%', sub: 'Minimum required', color: '#d97706', bg: '#fffbeb', trend: null },
  ]

  return (
    <DashboardLayout role="student">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><Calendar size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Attendance Hub</h1>
               <p className="ent-welcome-sub">Track your academic presence and maintain standing</p>
             </div>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {kpis.map((k, i) => {
            const Icon = k.icon
            return (
              <div key={i} className="ent-kpi-card" style={{ '--kpi-color': k.color, '--kpi-bg': k.bg }}>
                <div className="ent-kpi-icon">
                  <Icon size={22} />
                </div>
                <div className="ent-kpi-body">
                  <p className="ent-kpi-label">{k.label}</p>
                  <h3 className="ent-kpi-value">{k.value}</h3>
                  <p className="ent-kpi-sub">{k.sub}</p>
                </div>
                {k.trend && (
                  <div className={`ent-kpi-trend ${k.up ? 'up' : 'down'}`}>
                    <TrendingUp size={12} /> {k.trend}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="ent-main-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title">
                <Clock size={18} />
                <h2>Recent Attendance Log</h2>
              </div>
            </div>
            <div className="ent-class-list">
              {attendance.map((record, index) => (
                <div key={index} className="ent-class-item">
                  <div className="ent-class-time" style={{ minWidth: '140px' }}>
                    <Calendar size={14} />
                    {record.date} 
                  </div>
                  <div className="ent-class-info" style={{ flex: 1 }}>
                    <p className="ent-class-name">{record.course}</p>
                    <p className="ent-class-meta" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={12} /> {record.time}
                    </p>
                  </div>
                  <div className={`ent-class-badge ${record.status === 'present' ? '' : 'upcoming'}`} style={
                    record.status === 'present' 
                      ? { background: '#d1fae5', color: '#065f46' } 
                      : { background: '#fee2e2', color: '#991b1b' }
                  }>
                    {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
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

export default StudentAttendance
