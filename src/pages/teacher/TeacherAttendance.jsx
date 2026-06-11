import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Calendar, Check, X, Download, ShieldCheck, UserCheck } from 'lucide-react'
import { courses, students } from '../../data/mockData'
import '../student/StudentDashboard.css'

const TeacherAttendance = () => {
  const [selectedCourse, setSelectedCourse] = useState('CS101')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  
  const myClasses = courses.filter(c => c.teacher === 'Dr. Meera Sharma')
  const classStudents = students.filter(s => s.course === 'Computer Science').slice(0, 10)
  
  const [attendance, setAttendance] = useState(
    classStudents.reduce((acc, student) => ({ ...acc, [student.id]: 'present' }), {})
  )

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }))
  }

  const handleSubmit = () => {
    alert('Attendance marked successfully!')
  }

  return (
    <DashboardLayout role="teacher">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><UserCheck size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Attendance Log</h1>
               <p className="ent-welcome-sub">Record and review student attendance dynamically</p>
             </div>
          </div>
          <div className="ent-welcome-right">
             <button className="ent-qa-btn secondary">
               <Download size={16} /> Export Report
             </button>
          </div>
        </div>

        <div className="ent-card" style={{ marginBottom: '24px', display: 'flex', gap: '24px', background: '#f8fafc' }}>
          <div className="form-group" style={{ flex: 1, margin: 0 }}>
            <label style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', marginBottom: '8px', display: 'block' }}>Course Section</label>
            <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', outline: 'none' }} value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
              {myClasses.map(course => (
                <option key={course.id} value={course.id}>{course.name} ({course.code})</option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{ flex: 1, margin: 0 }}>
            <label style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', marginBottom: '8px', display: 'block' }}>Date</label>
            <input 
              type="date" 
              value={selectedDate} 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', outline: 'none' }}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <div className="ent-main-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="ent-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="ent-card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0, background: 'white' }}>
              <div className="ent-card-title">
                <Calendar size={20} color="#1e1b4b" />
                <h2>Student Roster</h2>
              </div>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f8fafc', color: '#64748b', fontSize: '13px', textTransform: 'uppercase' }}>
                   <th style={{ padding: '16px 24px', fontWeight: 600 }}>Student</th>
                   <th style={{ padding: '16px 24px', fontWeight: 600, width: '200px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {classStudents.map((student) => (
                  <tr key={student.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '16px 24px' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                           {student.name.charAt(0)}
                         </div>
                         <div>
                           <div style={{ fontWeight: 600, color: '#0f172a' }}>{student.name}</div>
                           <div style={{ fontSize: '13px', color: '#64748b' }}>{student.id}</div>
                         </div>
                       </div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                       <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '8px', overflow: 'hidden', width: 'fit-content' }}>
                         <button 
                           onClick={() => handleAttendanceChange(student.id, 'present')}
                           style={{ 
                             display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', border: 'none', cursor: 'pointer',
                             background: attendance[student.id] === 'present' ? '#10b981' : 'transparent',
                             color: attendance[student.id] === 'present' ? 'white' : '#64748b',
                             fontWeight: 600, fontSize: '13px', transition: 'all 0.2s'
                           }}
                         >
                           <Check size={14} /> Present
                         </button>
                         <button 
                           onClick={() => handleAttendanceChange(student.id, 'absent')}
                           style={{ 
                             display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', border: 'none', cursor: 'pointer',
                             background: attendance[student.id] === 'absent' ? '#ef4444' : 'transparent',
                             color: attendance[student.id] === 'absent' ? 'white' : '#64748b',
                             fontWeight: 600, fontSize: '13px', transition: 'all 0.2s'
                           }}
                         >
                           <X size={14} /> Absent
                         </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px', background: '#f8fafc' }}>
              <button className="ent-qa-btn secondary">Discard Changes</button>
              <button className="ent-qa-btn primary" onClick={handleSubmit}>
                 <ShieldCheck size={16} /> Save Master Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TeacherAttendance
