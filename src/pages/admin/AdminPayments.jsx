import { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import {
  DollarSign, TrendingUp, CheckCircle, Clock, AlertCircle,
  Download, Search, RefreshCw, CreditCard,
  Smartphone, Building2
} from 'lucide-react'
import '../student/StudentDashboard.css'

const transactions = [
  { id: 'TXN001', student: 'Priya Sharma', type: 'Tuition Fee', amount: 40000, method: 'UPI', date: '2026-03-10', status: 'success' },
  { id: 'TXN002', student: 'Rahul Kumar', type: 'LMS Course', amount: 8999, method: 'Card', date: '2026-03-11', status: 'success' },
  { id: 'TXN003', student: 'Ananya Singh', type: 'Hostel Fee', amount: 25000, method: 'Net Banking', date: '2026-03-11', status: 'success' },
  { id: 'TXN004', student: 'Arjun Patel', type: 'Tuition Fee', amount: 40000, method: 'UPI', date: '2026-03-12', status: 'pending' },
  { id: 'TXN005', student: 'Sneha Reddy', type: 'Lab Fee', amount: 5000, method: 'Card', date: '2026-03-12', status: 'failed' },
  { id: 'TXN006', student: 'Vikram Singh', type: 'LMS Course', amount: 12999, method: 'UPI', date: '2026-03-13', status: 'success' },
  { id: 'TXN007', student: 'Meera Patel', type: 'Exam Fee', amount: 2500, method: 'Net Banking', date: '2026-03-13', status: 'success' },
  { id: 'TXN008', student: 'Karan Mehta', type: 'Tuition Fee', amount: 40000, method: 'Card', date: '2026-03-14', status: 'pending' },
]

const methodIcons = {
  'UPI': Smartphone,
  'Card': CreditCard,
  'Net Banking': Building2,
}

const AdminPayments = () => {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filtered = transactions.filter(t => {
    const matchSearch = t.student.toLowerCase().includes(search.toLowerCase()) ||
                        t.id.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || t.status === statusFilter
    return matchSearch && matchStatus
  })

  const totalRevenue = transactions.filter(t => t.status === 'success').reduce((s, t) => s + t.amount, 0)
  const pendingAmount = transactions.filter(t => t.status === 'pending').reduce((s, t) => s + t.amount, 0)

  const stats = [
    { label: 'Total Settled', value: `Rs.${(totalRevenue / 1000).toFixed(1)}K`, icon: DollarSign, color: '#10b981', bg: '#f0fdf4', trend: '+18% this month', up: true },
    { label: 'Pending Auth', value: `Rs.${(pendingAmount / 1000).toFixed(1)}K`, icon: Clock, color: '#f59e0b', bg: '#fffbeb', trend: null },
    { label: 'Failed Txns', value: transactions.filter(t => t.status === 'failed').length, icon: AlertCircle, color: '#ef4444', bg: '#fef2f2', trend: null },
    { label: 'Success Rate', value: '91%', icon: TrendingUp, color: '#8b5cf6', bg: '#f5f3ff', trend: '+2% vs last month', up: true },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px', background: 'linear-gradient(135deg, #10b981, #059669)' }}>
               <span style={{ fontSize: '24px' }}><CreditCard size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Payment Processing</h1>
               <p className="ent-welcome-sub">Monitor all live transactions, settlements, and payment gateways</p>
             </div>
          </div>
          <div className="ent-welcome-right" style={{ display: 'flex', gap: '12px' }}>
             <button className="ent-qa-btn secondary"><Download size={16} /> Export Txns</button>
             <button className="ent-qa-btn primary"><RefreshCw size={16} /> Refresh Log</button>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {stats.map((k, i) => {
            const Icon = k.icon
            return (
              <div key={i} className="ent-kpi-card" style={{ '--kpi-color': k.color, '--kpi-bg': k.bg }}>
                <div className="ent-kpi-icon">
                  <Icon size={22} />
                </div>
                <div className="ent-kpi-body">
                  <p className="ent-kpi-label">{k.label}</p>
                  <h3 className="ent-kpi-value">{k.value}</h3>
                </div>
                {k.trend && (
                   <div className={`ent-kpi-trend ${k.up ? 'up' : 'down'}`}>
                     {k.up && <TrendingUp size={12} />} {k.trend}
                   </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="ent-main-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="ent-card">
            <div className="ent-card-header" style={{ marginBottom: '24px', borderBottom: 'none', paddingBottom: 0 }}>
               <div className="ent-card-title">
                 <Building2 size={18} color="#1e1b4b" />
                 <h2>Revenue by Gateway</h2>
               </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0 8px' }}>
               {[
                 { method: 'UPI', amount: 88999, pct: 52 },
                 { method: 'Card', amount: 53998, pct: 31 },
                 { method: 'Net Banking', amount: 27500, pct: 17 },
               ].map((m, i) => {
                 const Icon = methodIcons[m.method]
                 return (
                   <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 600 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569' }}><Icon size={16} color="#6366f1" /> {m.method}</span>
                        <span style={{ color: '#0f172a' }}>Rs.{(m.amount / 1000).toFixed(1)}K</span>
                     </div>
                     <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${m.pct}%`, background: 'linear-gradient(90deg, #6366f1, #4338ca)' }}></div>
                     </div>
                   </div>
                 )
               })}
            </div>
          </div>

          <div className="ent-card">
            <div className="ent-card-header" style={{ marginBottom: '24px', borderBottom: 'none', paddingBottom: 0 }}>
               <div className="ent-card-title">
                 <DollarSign size={18} color="#1e1b4b" />
                 <h2>Source Breakdown</h2>
               </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0 8px' }}>
               {[
                 { label: 'Tuition Fees', collected: 88, color: '#10b981' },
                 { label: 'Hostel Fees', collected: 72, color: '#0891b2' },
                 { label: 'LMS Courses', collected: 100, color: '#8b5cf6' },
                 { label: 'Lab & Exam Fees', collected: 65, color: '#f59e0b' },
               ].map((f, i) => (
                 <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 600 }}>
                      <span style={{ color: '#475569' }}>{f.label}</span>
                      <span style={{ color: '#0f172a' }}>{f.collected}%</span>
                   </div>
                   <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${f.collected}%`, background: f.color }}></div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: 'hidden', marginTop: '24px' }}>
          <div className="ent-card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0 }}>
            <div className="ent-card-title">
              <Clock size={18} color="#1e1b4b" />
              <h2>Real-time Txn Log</h2>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
               <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', background: 'white' }}>
                 <option value="all">Status: All</option>
                 <option value="success">Success</option>
                 <option value="pending">Pending</option>
                 <option value="failed">Failed</option>
               </select>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#64748b', fontSize: '13px', textTransform: 'uppercase' }}>
                 <th style={{ padding: '16px 24px', fontWeight: 600 }}>Txn ID</th>
                 <th style={{ padding: '16px 24px', fontWeight: 600 }}>Payer</th>
                 <th style={{ padding: '16px 24px', fontWeight: 600 }}>Classification</th>
                 <th style={{ padding: '16px 24px', fontWeight: 600 }}>Amount</th>
                 <th style={{ padding: '16px 24px', fontWeight: 600 }}>Method</th>
                 <th style={{ padding: '16px 24px', fontWeight: 600 }}>Date</th>
                 <th style={{ padding: '16px 24px', fontWeight: 600 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(t => {
                const Icon = methodIcons[t.method] || CreditCard
                return (
                  <tr key={t.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '16px 24px', fontFamily: 'monospace', fontSize: '13px', color: '#64748b' }}>{t.id}</td>
                    <td style={{ padding: '16px 24px', fontWeight: 600, color: '#0f172a' }}>{t.student}</td>
                    <td style={{ padding: '16px 24px', color: '#475569', fontSize: '14px' }}>{t.type}</td>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: '#1e1b4b' }}>Rs.{t.amount.toLocaleString()}</td>
                    <td style={{ padding: '16px 24px', color: '#64748b', fontSize: '14px' }}><span style={{display: 'flex', alignItems: 'center', gap: '6px'}}><Icon size={14} color="#6366f1" /> {t.method}</span></td>
                    <td style={{ padding: '16px 24px', color: '#64748b', fontSize: '14px' }}>{t.date}</td>
                    <td style={{ padding: '16px 24px' }}>
                      <span className="ent-class-badge" style={{ 
                        background: t.status === 'success' ? '#d1fae5' : (t.status === 'pending' ? '#fef3c7' : '#fee2e2'),
                        color: t.status === 'success' ? '#065f46' : (t.status === 'pending' ? '#b45309' : '#b91c1c') 
                      }}>{t.status.toUpperCase()}</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminPayments
