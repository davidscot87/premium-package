import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Plus, FileText, Calendar, TrendingUp } from 'lucide-react'
import { assignments } from '../../data/mockData'
import '../student/StudentDashboard.css'

const TeacherAssignments = () => {
  const [activeTab, setActiveTab] = useState('all')
  const filteredAssignments = activeTab === 'all' 
    ? assignments 
    : assignments.filter(a => a.status === activeTab)

  return (
    <DashboardLayout role="teacher">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><FileText size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Assignment Control</h1>
               <p className="ent-welcome-sub">Create, broadcast, and evaluate student coursework</p>
             </div>
          </div>
          <div className="ent-welcome-right">
             <button className="ent-qa-btn primary">
               <Plus size={16} /> Create Assignment
             </button>
          </div>
        </div>

        <div className="ent-card" style={{ marginBottom: '24px', padding: '16px 24px' }}>
          <div className="assignments-tabs" style={{ marginBottom: 0, borderBottom: 'none', display: 'flex', gap: '16px' }}>
            {['all', 'active', 'graded'].map(tab => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: activeTab === tab ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  color: activeTab === tab ? '#4338ca' : '#64748b',
                  fontWeight: activeTab === tab ? 600 : 500
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

         <div className="ent-main-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          {filteredAssignments.map((assignment) => (
            <div key={assignment.id} className="ent-card" style={{ padding: '24px' }}>
              <div className="ent-card-header" style={{ marginBottom: '16px', borderBottom: 'none', paddingBottom: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <FileText size={20} color="#6366f1" />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#0f172a' }}>{assignment.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '13px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FileText size={14} /> {assignment.course}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Due: {assignment.dueDate}</span>
                    </div>
                  </div>
                </div>
                <span className="ent-class-badge" style={{ 
                  background: assignment.status === 'active' || assignment.status === 'pending' ? '#fef3c7' : '#d1fae5',
                  color: assignment.status === 'active' || assignment.status === 'pending' ? '#b45309' : '#065f46' 
                }}>
                  {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                </span>
              </div>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', margin: '0 0 24px 0' }}>
                {assignment.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: '#f8fafc', borderRadius: '12px', marginBottom: '20px' }}>
                 <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Total Marks</span>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#1e1b4b' }}>{assignment.totalMarks} Marks</span>
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span style={{ fontSize: '12px', color: '#64748b', display: 'flex', gap: '4px', alignItems: 'center' }}>
                       Submissions <TrendingUp size={12} color="#10b981"/>
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#1e1b4b' }}>14/45</span>
                 </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="ent-qa-btn primary" style={{ flex: '1', justifyContent: 'center' }}>
                  Evaluate
                </button>
                <button className="ent-qa-btn secondary" style={{ flex: '1', justifyContent: 'center' }}>
                  Edit Setup
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  )
}

export default TeacherAssignments
