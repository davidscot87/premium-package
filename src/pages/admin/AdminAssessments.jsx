import { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import {
  FileQuestion, Plus, Edit3, Trash2, Eye, Award,
  Users, TrendingUp, CheckCircle, Clock, BarChart3, Download, Calendar
} from 'lucide-react'
import '../student/StudentDashboard.css'
import './AdminCMS.css'

const assessments = [
  { id: 1, title: 'Data Structures Mid-Term', type: 'Exam', course: 'CS101', date: '2026-03-15', duration: '90 min', totalMarks: 100, students: 145, avgScore: 72, passRate: 88, status: 'completed' },
  { id: 2, title: 'Machine Learning Final Exam', type: 'Exam', course: 'CS301', date: '2026-03-20', duration: '120 min', totalMarks: 100, students: 98, avgScore: 68, passRate: 82, status: 'upcoming' },
  { id: 3, title: 'Web Dev Practical Assignment', type: 'Assignment', course: 'CS201', date: '2026-03-18', duration: 'Take-home', totalMarks: 50, students: 210, avgScore: 40, passRate: 94, status: 'active' },
  { id: 4, title: 'Digital Marketing Quiz 3', type: 'Quiz', course: 'MKT101', date: '2026-03-12', duration: '30 min', totalMarks: 30, students: 312, avgScore: 23, passRate: 91, status: 'completed' },
  { id: 5, title: 'Cloud Computing Lab Test', type: 'Lab', course: 'CS401', date: '2026-03-25', duration: '60 min', totalMarks: 50, students: 78, avgScore: 0, passRate: 0, status: 'upcoming' },
]

const typeColors = { Exam: '#1e1b4b', Quiz: '#7c3aed', Assignment: '#0ea5e9', Lab: '#16a34a' }

const AdminAssessments = () => {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? assessments : assessments.filter(a => a.status === filter)

  const kpis = [
    { icon: FileQuestion, label: 'Total Assessments', value: assessments.length, sub: 'Active modules', color: '#3b82f6', bg: '#eff6ff', trend: null },
    { icon: CheckCircle, label: 'Completed', value: assessments.filter(a => a.status === 'completed').length, sub: 'Results ready', color: '#10b981', bg: '#f0fdf4', trend: null },
    { icon: Clock, label: 'Upcoming', value: assessments.filter(a => a.status === 'upcoming').length, sub: 'Scheduled modules', color: '#8b5cf6', bg: '#f5f3ff', trend: null },
    { icon: TrendingUp, label: 'Avg Pass Rate', value: '88%', sub: 'Global average', color: '#f59e0b', bg: '#fffbeb', trend: '+2%', up: true },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><FileQuestion size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Assessment Center</h1>
               <p className="ent-welcome-sub">Manage exams, assignments, and curriculum evaluations</p>
             </div>
          </div>
          <div className="ent-welcome-right" style={{ display: 'flex', gap: '12px' }}>
            <button className="ent-qa-btn secondary"><Download size={16} /> Export Data</button>
            <button className="ent-qa-btn primary"><Plus size={16} /> Build Assessment</button>
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

        <div className="ent-card" style={{ marginBottom: '24px', padding: '16px 24px' }}>
          <div className="assignments-tabs" style={{ marginBottom: 0, borderBottom: 'none', display: 'flex', gap: '16px' }}>
            {['all', 'active', 'upcoming', 'completed'].map(f => (
              <button 
                key={f}
                className={`tab-btn ${filter === f ? 'active' : ''}`}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: filter === f ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  color: filter === f ? '#4338ca' : '#64748b',
                  fontWeight: filter === f ? 600 : 500
                }}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="ent-main-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          {filtered.map(a => (
            <div key={a.id} className="ent-card" style={{ padding: '24px' }}>
              <div className="ent-card-header" style={{ marginBottom: '16px', borderBottom: 'none', paddingBottom: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: typeColors[a.type] + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <FileQuestion size={20} color={typeColors[a.type]} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#0f172a' }}>{a.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '13px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>{a.course}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {a.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                  <span className="ent-class-badge" style={{ background: typeColors[a.type] + '20', color: typeColors[a.type] }}>
                    {a.type}
                  </span>
                  <span className="ent-class-badge" style={{ 
                    background: a.status === 'completed' ? '#d1fae5' : (a.status === 'upcoming' ? '#f3e8ff' : '#fef3c7'),
                    color: a.status === 'completed' ? '#065f46' : (a.status === 'upcoming' ? '#6b21a8' : '#b45309')
                  }}>
                    {a.status}
                  </span>
                  <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto', color: '#64748b', fontSize: '13px', alignItems: 'center' }}>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14}/> {a.duration}</span>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Award size={14}/> {a.totalMarks} Ttl</span>
                     <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={14}/> {a.students} Pax</span>
                  </div>
              </div>

              {a.status === 'completed' ? (
                <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>Average Score</span>
                      <span style={{ fontSize: '15px', fontWeight: 600, color: '#1e1b4b' }}>{a.avgScore}/{a.totalMarks}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>Pass Rate</span>
                      <span style={{ fontSize: '15px', fontWeight: 600, color: '#10b981' }}>{a.passRate}%</span>
                    </div>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${a.passRate}%`, background: 'linear-gradient(90deg, #34d399, #10b981)', borderRadius: '4px' }}></div>
                  </div>
                </div>
              ) : (
                <div style={{ marginBottom: '24px' }}></div>
              )}

              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <button className="ent-qa-btn secondary" style={{ padding: '6px 12px' }}><Edit3 size={16} /></button>
                <button className="ent-qa-btn secondary" style={{ padding: '6px 12px' }}><Eye size={16} /></button>
                {a.status === 'completed' && (
                  <button className="ent-qa-btn primary" style={{ padding: '6px 12px' }}><BarChart3 size={16} /> Results</button>
                )}
                <button className="ent-qa-btn secondary" style={{ padding: '6px 12px', color: '#ef4444', borderColor: '#fecaca', background: '#fef2f2' }}><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminAssessments
