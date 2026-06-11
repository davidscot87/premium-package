import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import DataTable from '../../components/dashboard/DataTable'
import { CheckCircle, XCircle, Eye, Users, ShieldCheck, Mail, Database } from 'lucide-react'
import { admissions } from '../../data/mockData'
import '../student/StudentDashboard.css'

const AdminAdmissions = () => {
  const columns = [
    { header: 'Applicant ID', accessor: 'id' },
    { header: 'Full Name', accessor: 'name', render: (value) => <span style={{ fontWeight: 600, color: '#0f172a' }}>{value}</span> },
    { header: 'Email Address', accessor: 'email' },
    { header: 'Course', accessor: 'course' },
    { header: 'Marks', accessor: 'marks', render: (value) => `${value}%` },
    { header: 'Applied Date', accessor: 'appliedDate' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (value) => (
        <span className="ent-class-badge" style={{ 
            background: value === 'pending' ? '#fef3c7' : (value === 'approved' ? '#d1fae5' : '#fee2e2'),
            color: value === 'pending' ? '#b45309' : (value === 'approved' ? '#065f46' : '#b91c1c') 
        }}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
  ]

  const actions = (row) => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button className="ent-qa-btn secondary" style={{ padding: '6px' }} title="View Details"><Eye size={16} /></button>
      {row.status === 'pending' && (
        <>
          <button className="ent-qa-btn primary" style={{ padding: '6px', background: '#10b981', borderColor: '#10b981' }} title="Approve"><CheckCircle size={16} /></button>
          <button className="ent-qa-btn secondary" style={{ padding: '6px', color: '#ef4444', borderColor: '#fecaca', background: '#fef2f2' }} title="Reject"><XCircle size={16} /></button>
        </>
      )}
    </div>
  )

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><ShieldCheck size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Admissions Console</h1>
               <p className="ent-welcome-sub">Review, process, and manage incoming applications</p>
             </div>
          </div>
          <div className="ent-welcome-right" style={{ display: 'flex', gap: '12px' }}>
             <button className="ent-qa-btn secondary">
               <Database size={16} /> Export Data
             </button>
             <button className="ent-qa-btn primary">
               <Mail size={16} /> Send Decisions
             </button>
          </div>
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="ent-card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0 }}>
             <div className="ent-card-title">
               <Users size={18} color="#1e1b4b" />
               <h2>Applicant Queue</h2>
             </div>
          </div>
          <div style={{ padding: '24px' }}>
             <DataTable columns={columns} data={admissions} actions={actions} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminAdmissions
