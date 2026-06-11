import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Award, Download, BookOpen, Star, TrendingUp } from 'lucide-react'
import { grades } from '../../data/mockData'
import '../student/StudentDashboard.css'

const StudentGrades = () => {
  const [selectedSemester, setSelectedSemester] = useState(5)

  const semesterGrades = grades.filter(g => g.semester === selectedSemester)
  const totalCredits = semesterGrades.reduce((sum, g) => sum + g.credits, 0)
  const totalGradePoints = semesterGrades.reduce((sum, g) => sum + (g.gradePoint * g.credits), 0)
  const sgpa = (totalGradePoints / totalCredits).toFixed(2)

  const kpis = [
    { icon: Award, label: 'Current SGPA', value: sgpa, sub: `Semester ${selectedSemester}`, color: '#1a237e', bg: '#eff6ff', trend: '+0.4', up: true },
    { icon: Star, label: 'Cumulative CGPA', value: '8.9', sub: 'Overall performance', color: '#16a34a', bg: '#f0fdf4', trend: '+0.2', up: true },
    { icon: BookOpen, label: 'Total Credits', value: String(totalCredits), sub: 'Earned this sem', color: '#0891b2', bg: '#ecfeff', trend: null },
  ]

  return (
    <DashboardLayout role="student">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><Award size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Grades & Results</h1>
               <p className="ent-welcome-sub">View your academic performance and download marksheets</p>
             </div>
          </div>
          <div className="ent-welcome-right">
             <button className="ent-qa-btn primary">
               <Download size={16} /> Marksheet
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

        <div className="ent-card" style={{ marginBottom: '24px', padding: '16px 24px' }}>
          <div className="assignments-tabs" style={{ marginBottom: 0, borderBottom: 'none', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5, 6].map(sem => (
              <button 
                key={sem}
                className={`tab-btn ${selectedSemester === sem ? 'active' : ''}`}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: selectedSemester === sem ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  color: selectedSemester === sem ? '#4338ca' : '#64748b',
                  fontWeight: selectedSemester === sem ? 600 : 500
                }}
                onClick={() => setSelectedSemester(sem)}
              >
                Semester {sem}
              </button>
            ))}
          </div>
        </div>

        <div className="ent-main-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title">
                <BookOpen size={18} />
                <h2>Course Breakdown</h2>
              </div>
            </div>
            <div className="pivot-table" style={{ width: '100%', overflowX: 'auto' }}>
              <table className="analytics-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', fontSize: '13px', textTransform: 'uppercase' }}>
                    <th style={{ padding: '16px 12px' }}>Course</th>
                    <th style={{ padding: '16px 12px' }}>Credits</th>
                    <th style={{ padding: '16px 12px' }}>Marks</th>
                    <th style={{ padding: '16px 12px' }}>Grade</th>
                    <th style={{ padding: '16px 12px' }}>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {semesterGrades.map((grade, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '16px 12px' }}>
                        <div style={{ fontWeight: 600, color: '#1e293b' }}>{grade.course}</div>
                        <div style={{ fontSize: '13px', color: '#64748b' }}>{grade.courseName}</div>
                      </td>
                      <td style={{ padding: '16px 12px', color: '#475569', fontWeight: 500 }}>{grade.credits}</td>
                      <td style={{ padding: '16px 12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                           <span style={{ fontWeight: 600 }}>{grade.marks}</span><span style={{ color: '#94a3b8', fontSize: '12px' }}>/100</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 12px' }}>
                        <span className="ent-class-badge" style={{ 
                          background: grade.grade.includes('A') ? '#d1fae5' : (grade.grade.includes('B') ? '#fef3c7' : '#e0e7ff'),
                          color: grade.grade.includes('A') ? '#065f46' : (grade.grade.includes('B') ? '#b45309' : '#3730a3')
                        }}>
                          {grade.grade}
                        </span>
                      </td>
                      <td style={{ padding: '16px 12px', fontWeight: 700, color: '#0f172a' }}>{grade.gradePoint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default StudentGrades
