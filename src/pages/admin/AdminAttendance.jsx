import { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import DataTable from '../../components/dashboard/DataTable'
import { Calendar, TrendingUp, Users, AlertTriangle, Search, Activity, Download } from 'lucide-react'
import '../student/StudentDashboard.css'

const AdminAttendance = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterClass, setFilterClass] = useState('all')
  const [selectedMonth, setSelectedMonth] = useState('2024-03')

  const kpis = [
    { icon: TrendingUp, label: 'Overall Attendance', value: '87.5%', sub: '+2.5% vs last month', color: '#10b981', bg: '#f0fdf4', trend: '+2.5%', up: true },
    { icon: Users, label: 'Present Today', value: '1,245', sub: '89% of threshold', color: '#3b82f6', bg: '#eff6ff', trend: null },
    { icon: AlertTriangle, label: 'Absent Today', value: '155', sub: '11% missing', color: '#dc2626', bg: '#fef2f2', trend: null },
    { icon: Activity, label: 'Total Students', value: '1,400', sub: 'Active registry', color: '#8b5cf6', bg: '#f5f3ff', trend: null },
  ]

  const classAttendance = [
    { id: 1, class: 'CS-3A', totalStudents: 45, present: 42, absent: 3, percentage: 93.3, trend: '+2%' },
    { id: 2, class: 'CS-3B', totalStudents: 48, present: 40, absent: 8, percentage: 83.3, trend: '-3%' },
    { id: 3, class: 'CS-2A', totalStudents: 50, present: 45, absent: 5, percentage: 90.0, trend: '+1%' },
    { id: 4, class: 'CS-2B', totalStudents: 47, present: 41, absent: 6, percentage: 87.2, trend: '0%' },
    { id: 5, class: 'CS-1A', totalStudents: 52, present: 48, absent: 4, percentage: 92.3, trend: '+4%' },
    { id: 6, class: 'CS-1B', totalStudents: 49, present: 43, absent: 6, percentage: 87.8, trend: '-1%' },
    { id: 7, class: 'BBA-3A', totalStudents: 40, present: 35, absent: 5, percentage: 87.5, trend: '+2%' },
    { id: 8, class: 'BBA-2A', totalStudents: 42, present: 38, absent: 4, percentage: 90.5, trend: '+3%' },
  ]

  const columns = [
    { header: 'Class Code', accessor: 'class', render: (val) => <span style={{ fontWeight: 600, color: '#1e1b4b', background: '#e0e7ff', padding: '4px 8px', borderRadius: '6px' }}>{val}</span> },
    { header: 'Total Students', accessor: 'totalStudents' },
    { 
      header: 'Present',
      accessor: 'present',
      render: (value) => <span style={{ color: '#065f46', background: '#d1fae5', padding: '4px 8px', borderRadius: '6px', fontWeight: '600' }}>{value}</span>
    },
    { 
      header: 'Absent',
      accessor: 'absent',
      render: (value) => <span style={{ color: '#b91c1c', background: '#fee2e2', padding: '4px 8px', borderRadius: '6px', fontWeight: '600' }}>{value}</span>
    },
    { 
      header: 'Attendance %',
      accessor: 'percentage',
      render: (value) => (
        <span className="ent-class-badge" style={{ 
          background: value >= 90 ? '#d1fae5' : value >= 80 ? '#fef3c7' : '#fee2e2',
          color: value >= 90 ? '#065f46' : value >= 80 ? '#b45309' : '#b91c1c'
        }}>
          {value.toFixed(1)}%
        </span>
      )
    },
    { 
      header: 'Trend',
      accessor: 'trend',
      render: (value) => (
        <span style={{ fontWeight: 600, color: value.startsWith('+') ? '#10b981' : value.startsWith('-') ? '#ef4444' : '#6b7280' }}>
          {value}
        </span>
      )
    },
  ]

  const filteredData = classAttendance.filter(record => {
    const matchesSearch = record.class.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterClass === 'all' || record.class.includes(filterClass)
    return matchesSearch && matchesFilter
  })

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><Calendar size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Attendance Analytics</h1>
               <p className="ent-welcome-sub">Monitor global student engagement and presence</p>
             </div>
          </div>
          <div className="ent-welcome-right" style={{ display: 'flex', gap: '12px' }}>
             <input 
               type="month" 
               value={selectedMonth}
               onChange={(e) => setSelectedMonth(e.target.value)}
               className="date-input"
               style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '12px', padding: '8px 16px', outline: 'none' }}
             />
             <button className="ent-qa-btn primary">
               <Download size={16} /> Export
             </button>
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

        <div className="ent-main-grid" style={{ gridTemplateColumns: 'minmax(500px, 3fr) minmax(300px, 1fr)' }}>
          <div className="ent-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="ent-card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0 }}>
              <div className="ent-card-title">
                <Users size={18} color="#1e1b4b" />
                <h2>Class-wise Records</h2>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                   <Search size={16} color="#64748b" style={{ marginRight: '8px' }}/>
                   <input type="text" placeholder="Search class..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ border: 'none', background: 'transparent', outline: 'none', width: '120px' }} />
                 </div>
                 <select value={filterClass} onChange={(e) => setFilterClass(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', background: 'white' }}>
                    <option value="all">All</option>
                    <option value="CS">CS</option>
                    <option value="BBA">BBA</option>
                 </select>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <DataTable 
                columns={columns} 
                data={filteredData}
                actions={(row) => (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="ent-qa-btn secondary" style={{ padding: '6px 12px', fontSize: '13px' }}>Profile</button>
                    <button className="ent-qa-btn primary" style={{ padding: '6px 12px', fontSize: '13px' }}>Logs</button>
                  </div>
                )}
              />
            </div>
          </div>

          <div className="ent-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             <div className="ent-card-header" style={{ marginBottom: 0 }}>
               <div className="ent-card-title">
                 <Activity size={18} color="#1e1b4b" />
                 <h2>Insights</h2>
               </div>
             </div>
             
             <div style={{ padding: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
               <h3 style={{ fontSize: '13px', color: '#166534', margin: '0 0 8px 0', textTransform: 'uppercase', fontWeight: 600 }}>Best Performing Class</h3>
               <div style={{ fontSize: '24px', fontWeight: 700, color: '#14532d' }}>CS-3A</div>
               <div style={{ fontSize: '13px', color: '#15803d', marginTop: '4px' }}>93.3% attendance rate</div>
             </div>
             
             <div style={{ padding: '16px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
               <h3 style={{ fontSize: '13px', color: '#991b1b', margin: '0 0 8px 0', textTransform: 'uppercase', fontWeight: 600 }}>Needs Attention</h3>
               <div style={{ fontSize: '24px', fontWeight: 700, color: '#7f1d1d' }}>CS-3B</div>
               <div style={{ fontSize: '13px', color: '#b91c1c', marginTop: '4px' }}>83.3% attendance rate</div>
             </div>

             <div style={{ padding: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
               <h3 style={{ fontSize: '13px', color: '#475569', margin: '0 0 8px 0', textTransform: 'uppercase', fontWeight: 600 }}>Monthly Average</h3>
               <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>87.5%</div>
               <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Across all segments</div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminAttendance
