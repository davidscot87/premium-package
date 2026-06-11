import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { FileText, Calendar, Award, Upload, Download, CheckCircle, Clock } from 'lucide-react'
import { assignments } from '../../data/mockData'
import '../student/StudentDashboard.css'

const StudentAssignments = () => {
  const [activeTab, setActiveTab] = useState('all')

  const filteredAssignments = activeTab === 'all' 
    ? assignments 
    : assignments.filter(a => a.status === activeTab)

  return (
    <DashboardLayout role="student">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><FileText size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Assignments</h1>
               <p className="ent-welcome-sub">View, submit, and track your coursework</p>
             </div>
          </div>
        </div>

        <div className="ent-card" style={{ marginBottom: '24px', padding: '16px 24px' }}>
          <div className="assignments-tabs" style={{ marginBottom: 0, borderBottom: 'none', display: 'flex', gap: '16px' }}>
            {['all', 'pending', 'submitted', 'graded'].map(tab => (
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

        <div className="ent-main-grid" style={{ gridTemplateColumns: '1fr' }}>
          {filteredAssignments.map((assignment) => (
            <div key={assignment.id} className="ent-card" style={{ padding: '24px' }}>
              <div className="ent-card-header" style={{ marginBottom: '16px', borderBottom: 'none', paddingBottom: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className={`ent-assign-check ${assignment.status === 'completed' || assignment.status === 'graded' ? 'checked' : ''}`}>
                    {assignment.status === 'completed' || assignment.status === 'graded' ? <CheckCircle size={20} color="#16a34a" /> : <Clock size={20} color="#f59e0b" />}
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#0f172a' }}>{assignment.title}</h3>
                    <div style={{ display: 'flex', gap: '16px', color: '#64748b', fontSize: '14px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FileText size={14} /> {assignment.course}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Due: {assignment.dueDate}</span>
                      {assignment.marks !== null && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#059669', fontWeight: 600 }}>
                          <Award size={14} /> {assignment.marks}/{assignment.totalMarks} marks
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="ent-class-badge" style={{ 
                  background: assignment.status === 'pending' ? '#fef3c7' : '#d1fae5',
                  color: assignment.status === 'pending' ? '#b45309' : '#065f46' 
                }}>
                  {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                </span>
              </div>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.5', margin: '0 0 20px 48px' }}>
                {assignment.description}
              </p>
              <div style={{ display: 'flex', gap: '12px', marginLeft: '48px' }}>
                {assignment.status === 'pending' && (
                  <button className="ent-qa-btn primary" style={{ padding: '8px 16px', minWidth: '140px', justifyContent: 'center' }}>
                    <Upload size={16} /> Submit
                  </button>
                )}
                <button className="ent-qa-btn secondary" style={{ padding: '8px 16px', minWidth: '140px', justifyContent: 'center' }}>
                  <Download size={16} /> Instructions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default StudentAssignments
