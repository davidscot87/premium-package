import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { BookOpen, Users, Calendar, Clock, Bookmark } from 'lucide-react'
import { courses } from '../../data/mockData'
import '../student/StudentDashboard.css'

const TeacherClasses = () => {
  const myClasses = courses.filter(c => c.teacher === 'Dr. Meera Sharma')

  return (
    <DashboardLayout role="teacher">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><Bookmark size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>My Class Portfolios</h1>
               <p className="ent-welcome-sub">Manage course assets, schedules, and active students</p>
             </div>
          </div>
        </div>

        <div className="ent-main-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {myClasses.map((course) => (
            <div key={course.id} className="ent-card" style={{ padding: '24px' }}>
              <div className="ent-card-header" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <div style={{ 
                    width: '48px', height: '48px', borderRadius: '12px', 
                    background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)', 
                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                  }}>
                    <BookOpen size={24} />
                  </div>
                  <span style={{ background: '#e0e7ff', color: '#3730a3', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 600 }}>
                    {course.code}
                  </span>
                </div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: '0 0 16px 0' }}>{course.name}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                  <Users size={16} color="#0891b2" /> <span style={{ fontWeight: 600, color: '#1e293b' }}>{course.students} Active Students</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                  <Calendar size={16} color="#d97706" /> <span>{course.schedule}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                  <Clock size={16} color="#16a34a" /> <span>{course.credits} Academic Credits</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="ent-qa-btn primary" style={{ flex: 1, padding: '10px', justifyContent: 'center', fontSize: '14px' }}>
                  <Users size={16} /> Roster
                </button>
                <button className="ent-qa-btn secondary" style={{ flex: 1, padding: '10px', justifyContent: 'center', fontSize: '14px' }}>
                  <BookOpen size={16} /> Assets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TeacherClasses
