import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Upload, FileText, Download, Trash2, HardDrive } from 'lucide-react'
import '../student/StudentDashboard.css'

const TeacherResources = () => {
  const resources = [
    { id: 1, name: 'Data Structures Lecture Notes.pdf', course: 'CS101', size: '2.5 MB', date: '2026-03-01' },
    { id: 2, name: 'Algorithm Analysis Slides.pptx', course: 'CS201', size: '5.1 MB', date: '2026-03-05' },
    { id: 3, name: 'ML Tutorial Code.zip', course: 'CS301', size: '12.3 MB', date: '2026-03-07' },
  ]

  return (
    <DashboardLayout role="teacher">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><HardDrive size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Resource Drive</h1>
               <p className="ent-welcome-sub">Manage, upload, and distribute your course materials</p>
             </div>
          </div>
          <div className="ent-welcome-right">
             <button className="ent-qa-btn primary">
               <Upload size={16} /> Upload New Material
             </button>
          </div>
        </div>

        <div className="ent-main-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title">
                <FileText size={18} />
                <h2>Available Materials</h2>
              </div>
            </div>
            <div className="ent-class-list">
              {resources.map((resource) => (
                <div key={resource.id} className="ent-class-item" style={{ alignItems: 'center' }}>
                  <div className="ent-class-time" style={{ width: '48px', height: '64px', background: '#e0e7ff', color: '#4338ca', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <FileText size={20} />
                  </div>
                  <div className="ent-class-info" style={{ flex: 1, paddingLeft: '8px' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#0f172a' }}>{resource.name}</h4>
                    <div className="book-meta" style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#64748b' }}>
                      <span style={{ fontWeight: 600, color: '#1e293b' }}>{resource.course}</span>
                      <span>{resource.size}</span>
                      <span>Uploaded: {resource.date}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="ent-qa-btn secondary" style={{ padding: '8px 12px' }}><Download size={16} /></button>
                    <button className="ent-qa-btn secondary" style={{ padding: '8px 12px', color: '#ef4444', borderColor: '#fecaca', background: '#fef2f2' }}><Trash2 size={16} /></button>
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

export default TeacherResources
