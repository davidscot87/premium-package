import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Award, Save, Download } from 'lucide-react'
import { courses, students } from '../../data/mockData'
import '../student/StudentDashboard.css'

const TeacherGrades = () => {
  const [selectedCourse, setSelectedCourse] = useState('CS101')
  const myClasses = courses.filter(c => c.teacher === 'Dr. Meera Sharma')
  const classStudents = students.filter(s => s.course === 'Computer Science').slice(0, 10)
  
  const [grades, setGrades] = useState(
    classStudents.reduce((acc, student) => ({ 
      ...acc, 
      [student.id]: { marks: '', grade: 'A' } 
    }), {})
  )

  const handleGradeChange = (studentId, field, value) => {
    setGrades(prev => ({
      ...prev,
      [studentId]: { ...prev[studentId], [field]: value }
    }))
  }

  return (
    <DashboardLayout role="teacher">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><Award size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Grade Entry Sheet</h1>
               <p className="ent-welcome-sub">Enter and distribute academic performance metrics</p>
             </div>
          </div>
          <div className="ent-welcome-right" style={{ display: 'flex', gap: '12px' }}>
             <button className="ent-qa-btn secondary">
               <Download size={16} /> Export Sheet
             </button>
             <button className="ent-qa-btn primary">
               <Save size={16} /> Commit Grades
             </button>
          </div>
        </div>

        <div className="ent-card" style={{ marginBottom: '24px', background: '#f8fafc', padding: '20px 24px' }}>
          <div className="form-group" style={{ margin: 0, width: '100%', maxWidth: '400px' }}>
            <label style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', marginBottom: '8px', display: 'block' }}>Active Course Module</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', outline: 'none' }} value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
              {myClasses.map(course => (
                <option key={course.id} value={course.id}>{course.name} ({course.code})</option>
              ))}
            </select>
          </div>
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="ent-card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0, background: 'white' }}>
            <div className="ent-card-title">
              <Award size={20} color="#1e1b4b" />
              <h2>Student Roster</h2>
            </div>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f8fafc', color: '#64748b', fontSize: '13px', textTransform: 'uppercase' }}>
                  <th style={{ padding: '16px 24px', fontWeight: 600 }}>Scholar</th>
                  <th style={{ padding: '16px 24px', fontWeight: 600, width: '150px' }}>Marks / 100</th>
                  <th style={{ padding: '16px 24px', fontWeight: 600, width: '150px' }}>Final Grade</th>
              </tr>
            </thead>
            <tbody>
              {classStudents.map((student) => (
                <tr key={student.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '16px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#e0e7ff', color: '#3730a3', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, color: '#0f172a' }}>{student.name}</div>
                          <div style={{ fontSize: '13px', color: '#64748b' }}>{student.id}</div>
                        </div>
                      </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                      <input
                        type="number"
                        placeholder="Ex: 85"
                        min="0"
                        max="100"
                        style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', width: '100px', fontWeight: 600, color: '#0f172a' }}
                        value={grades[student.id]?.marks || ''}
                        onChange={(e) => handleGradeChange(student.id, 'marks', e.target.value)}
                      />
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                      <select
                        style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', width: '100px', fontWeight: 600, color: '#0f172a', background: 'white' }}
                        value={grades[student.id]?.grade || 'A'}
                        onChange={(e) => handleGradeChange(student.id, 'grade', e.target.value)}
                      >
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                      </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div style={{ padding: '24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
             <button className="ent-qa-btn secondary">Discard Changes</button>
             <button className="ent-qa-btn primary">
               <Save size={16} /> Review & Submit
             </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TeacherGrades
