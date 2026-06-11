import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Library, Search, Calendar, User, BookOpen, AlertCircle, TrendingUp } from 'lucide-react'
import { library } from '../../data/mockData'
import '../student/StudentDashboard.css'

const StudentLibrary = () => {
  const kpis = [
    { icon: Library, label: 'Books Issued', value: '3', sub: 'Current limit: 5', color: '#1a237e', bg: '#eff6ff', trend: null },
    { icon: AlertCircle, label: 'Due Soon', value: '1', sub: 'Within 3 days', color: '#f59e0b', bg: '#fffbeb', trend: null },
    { icon: TrendingUp, label: 'Total Read', value: '24', sub: 'This academic year', color: '#10b981', bg: '#d1fae5', trend: null },
  ]

  return (
    <DashboardLayout role="student">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><Library size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Digital Library</h1>
               <p className="ent-welcome-sub">Manage your issued books and search the campus catalog</p>
             </div>
          </div>
          <div className="ent-welcome-right" style={{ display: 'flex', alignItems: 'center' }}>
             <div className="header-search" style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '12px' }}>
               <Search size={16} color="white" />
               <input type="text" placeholder="Search title, ISBN..." style={{ color: 'white' }} />
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
              </div>
            )
          })}
        </div>

        <div className="ent-main-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title">
                <BookOpen size={18} />
                <h2>My Issued Books</h2>
              </div>
            </div>
            <div className="ent-class-list">
              {library.map((book) => (
                <div key={book.id} className="ent-class-item" style={{ alignItems: 'center' }}>
                  <div className="ent-class-time" style={{ width: '48px', height: '64px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={20} color="#64748b" />
                  </div>
                  <div className="ent-class-info" style={{ flex: 1, paddingLeft: '8px' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#0f172a' }}>{book.title}</h4>
                    <div className="book-meta" style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#64748b' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {book.author}</span>
                      <span>ISBN: {book.isbn}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Issued: {book.issueDate}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Due: {book.dueDate}</span>
                      {book.fine > 0 && <span style={{color: '#ef4444', fontWeight: 600}}>Fine: Rs.{book.fine}</span>}
                    </div>
                  </div>
                  <span className="ent-class-badge" style={{ 
                    background: book.status === 'issued' ? '#d1fae5' : '#fee2e2',
                    color: book.status === 'issued' ? '#065f46' : '#b91c1c'
                  }}>
                    {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default StudentLibrary
