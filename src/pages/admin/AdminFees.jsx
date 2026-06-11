import { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import DataTable from '../../components/dashboard/DataTable'
import { 
  DollarSign, TrendingUp, AlertCircle, CheckCircle, Search, 
  Download, Upload, Mail, Bell, Calendar,
  CreditCard, TrendingDown, Eye, Send, Printer, BarChart3, X
} from 'lucide-react'
import '../student/StudentDashboard.css'

const AdminFees = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterClass, setFilterClass] = useState('all')
  const [selectedStudent, setSelectedStudent] = useState(null)

  const feeStats = [
    { icon: DollarSign, label: 'Total Collected', value: 'Rs.2,450,000', sub: '+12% from last month', color: '#10b981', bg: '#f0fdf4', trend: '+12%', up: true },
    { icon: AlertCircle, label: 'Pending Fees', value: 'Rs.350,000', sub: '155 students', color: '#f59e0b', bg: '#fffbeb', trend: null },
    { icon: TrendingUp, label: 'Collection Rate', value: '87.5%', sub: '+3% improvement', color: '#3b82f6', bg: '#eff6ff', trend: '+3%', up: true },
    { icon: CheckCircle, label: 'Paid Students', value: '1,245', sub: 'Out of 1,400 total', color: '#8b5cf6', bg: '#f5f3ff', trend: null },
  ]

  const feeRecords = [
    { id: 1, studentId: 'STU2024001', name: 'John Doe', class: 'CS-3A', amount: 120000, paid: 120000, balance: 0, status: 'Paid', date: '2024-01-15' },
    { id: 2, studentId: 'STU2024002', name: 'Jane Smith', class: 'CS-3B', amount: 120000, paid: 80000, balance: 40000, status: 'Partial', date: '2024-01-10' },
    { id: 3, studentId: 'STU2024003', name: 'Mike Johnson', class: 'CS-2A', amount: 100000, paid: 0, balance: 100000, status: 'Pending', date: '-' },
    { id: 4, studentId: 'STU2024004', name: 'Sarah Williams', class: 'CS-3A', amount: 120000, paid: 120000, balance: 0, status: 'Paid', date: '2024-01-20' },
  ]

  const columns = [
    { header: 'Student ID', accessor: 'studentId', render: (val) => <span style={{ fontFamily: 'monospace', color: '#64748b' }}>{val}</span> },
    { header: 'Student Name', accessor: 'name', render: (val) => <span style={{ fontWeight: 600, color: '#0f172a' }}>{val}</span> },
    { header: 'Class', accessor: 'class' },
    { 
      header: 'Total Amount',
      accessor: 'amount',
      render: (value) => `Rs.${value.toLocaleString()}`
    },
    { 
      header: 'Paid',
      accessor: 'paid',
      render: (value) => <span style={{ color: '#10b981', fontWeight: '600' }}>Rs.{value.toLocaleString()}</span>
    },
    { 
      header: 'Balance',
      accessor: 'balance',
      render: (value) => <span style={{ color: value > 0 ? '#ef4444' : '#64748b', fontWeight: '600' }}>Rs.{value.toLocaleString()}</span>
    },
    { 
      header: 'Status',
      accessor: 'status',
      render: (value) => (
        <span className="ent-class-badge" style={{ 
            background: value === 'Paid' ? '#d1fae5' : (value === 'Partial' ? '#fef3c7' : '#fee2e2'),
            color: value === 'Paid' ? '#065f46' : (value === 'Partial' ? '#b45309' : '#b91c1c')
        }}>
          {value}
        </span>
      )
    },
    { header: 'Last Payment', accessor: 'date' },
  ]

  const actions = (row) => (
     <div style={{ display: 'flex', gap: '8px' }}>
       {row.balance > 0 ? (
         <button className="ent-qa-btn primary" style={{ padding: '6px' }} title="Record Payment" onClick={() => setSelectedStudent(row)}><CreditCard size={16} /></button>
       ) : (
         <button className="ent-qa-btn secondary" style={{ padding: '6px' }} title="Print Receipt"><Printer size={16} /></button>
       )}
       {row.balance > 0 && (
         <button className="ent-qa-btn secondary" style={{ padding: '6px', color: '#b45309', borderColor: '#fde68a', background: '#fffbeb' }} title="Send Reminder"><Send size={16} /></button>
       )}
     </div>
  )

  const filteredRecords = feeRecords.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || record.status.toLowerCase() === filterStatus
    const matchesClass = filterClass === 'all' || record.class.includes(filterClass)
    return matchesSearch && matchesStatus && matchesClass
  })

  // Calculate statistics
  const totalStudents = 1400
  const paidStudents = 1245
  const partialStudents = 55
  const pendingStudents = 100
  const totalAmount = 2800000
  const totalPaid = 2450000
  const totalBalance = 350000

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><DollarSign size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Student Finance</h1>
               <p className="ent-welcome-sub">Manage fee collections, outstanding balances, and financial records</p>
             </div>
          </div>
          <div className="ent-welcome-right" style={{ display: 'flex', gap: '12px' }}>
             <button className="ent-qa-btn secondary"><Bell size={16} /> Bulk Remind</button>
             <button className="ent-qa-btn secondary"><Download size={16} /> Export CSV</button>
             <button className="ent-qa-btn primary"><BarChart3 size={16} /> Generate Report</button>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {feeStats.map((k, i) => {
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

        <div className="ent-card" style={{ padding: '24px', marginBottom: '24px' }}>
          <div className="ent-card-header" style={{ marginBottom: '24px', borderBottom: 'none', paddingBottom: 0 }}>
            <div className="ent-card-title">
              <TrendingUp size={18} color="#10b981" />
              <h2>Collection Overview</h2>
            </div>
            <span style={{ fontWeight: 600, color: '#10b981', background: '#d1fae5', padding: '6px 16px', borderRadius: '16px', fontSize: '14px' }}>
              {((totalPaid / totalAmount) * 100).toFixed(1)}% Collected
            </span>
          </div>
          <div style={{ width: '100%', height: '12px', background: '#f8fafc', borderRadius: '6px', overflow: 'hidden', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <div style={{ height: '100%', width: `${(totalPaid / totalAmount) * 100}%`, background: 'linear-gradient(90deg, #34d399, #10b981)' }}></div>
          </div>
          <div className="ent-kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
               <h4 style={{ margin: 0, fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={14} color="#10b981" /> Fully Paid</h4>
               <span style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>{paidStudents}</span>
               <span style={{ color: '#10b981', fontSize: '13px', fontWeight: 600 }}>{((paidStudents / totalStudents) * 100).toFixed(1)}%</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
               <h4 style={{ margin: 0, fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}><AlertCircle size={14} color="#f59e0b" /> Partial</h4>
               <span style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>{partialStudents}</span>
               <span style={{ color: '#f59e0b', fontSize: '13px', fontWeight: 600 }}>{((partialStudents / totalStudents) * 100).toFixed(1)}%</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
               <h4 style={{ margin: 0, fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}><TrendingDown size={14} color="#ef4444" /> Pending</h4>
               <span style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>{pendingStudents}</span>
               <span style={{ color: '#ef4444', fontSize: '13px', fontWeight: 600 }}>{((pendingStudents / totalStudents) * 100).toFixed(1)}%</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '16px', borderLeft: '1px solid #e2e8f0' }}>
               <h4 style={{ margin: 0, fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}><DollarSign size={14} color="#8b5cf6" /> Outstanding</h4>
               <span style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>Rs.{totalBalance.toLocaleString()}</span>
               <span style={{ color: '#8b5cf6', fontSize: '13px', fontWeight: 600 }}>{((totalBalance / totalAmount) * 100).toFixed(1)}% limit</span>
            </div>
          </div>
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="ent-card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0 }}>
            <div className="ent-card-title">
              <CreditCard size={18} color="#1e1b4b" />
              <h2>Fee Ledger</h2>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', background: 'white' }}>
                 <option value="all">Status: All</option>
                 <option value="paid">Paid</option>
                 <option value="partial">Partial</option>
                 <option value="pending">Pending</option>
              </select>
            </div>
          </div>
          <div style={{ padding: '24px' }}>
            <DataTable 
              columns={columns} 
              data={filteredRecords}
              actions={actions}
            />
          </div>
        </div>

      </div>

      {selectedStudent && (
        <div className="ent-modal-overlay" onClick={() => setSelectedStudent(null)}>
          <div className="ent-modal-content" onClick={e => e.stopPropagation()}>
            <div className="ent-modal-header">
              <h2><CreditCard size={20} color="#4338ca"/> Record Payment</h2>
              <button className="ent-modal-close" onClick={() => setSelectedStudent(null)}><X size={20}/></button>
            </div>
            <div className="ent-modal-body">
               <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                   <span style={{ color: '#64748b', fontSize: '14px' }}>Student</span>
                   <span style={{ fontWeight: 600, color: '#0f172a' }}>{selectedStudent.name} ({selectedStudent.studentId})</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                   <span style={{ color: '#64748b', fontSize: '14px' }}>Class / Program</span>
                   <span style={{ fontWeight: 600, color: '#0f172a' }}>{selectedStudent.class}</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '8px', marginTop: '4px' }}>
                   <span style={{ color: '#64748b', fontSize: '14px' }}>Pending Balance</span>
                   <span style={{ fontWeight: 800, color: '#ef4444', fontSize: '18px' }}>Rs.{selectedStudent.balance.toLocaleString()}</span>
                 </div>
               </div>

               <div className="ent-form-group">
                  <label>Payment Amount (Rs.)</label>
                  <input type="number" className="ent-form-input" defaultValue={selectedStudent.balance} max={selectedStudent.balance} />
               </div>
               
               <div className="ent-form-group">
                  <label>Payment Method</label>
                  <select className="ent-form-select">
                    <option>UPI</option>
                    <option>Credit / Debit Card</option>
                    <option>Net Banking</option>
                    <option>Cash</option>
                  </select>
               </div>

               <div className="ent-form-group" style={{ marginBottom: 0 }}>
                  <label>Transaction ID / Reference</label>
                  <input type="text" className="ent-form-input" placeholder="e.g. TXN123456789" />
               </div>
            </div>
            <div className="ent-modal-footer">
               <button className="ent-qa-btn secondary" onClick={() => setSelectedStudent(null)}>Cancel</button>
               <button className="ent-qa-btn primary" onClick={() => { alert('Payment Recorded Successfully'); setSelectedStudent(null); }}><CheckCircle size={16}/> Confirm Payment</button>
            </div>
          </div>
        </div>
      )}

    </DashboardLayout>
  )
}

export default AdminFees
