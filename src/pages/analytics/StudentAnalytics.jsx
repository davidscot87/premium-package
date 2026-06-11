import React, { useState, useEffect } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { studentAnalytics } from '../../data/lmsData'
import { TrendingUp, TrendingDown, Award, Clock, Target, Zap } from 'lucide-react'
import '../forum/Forum.css'

const StudentAnalytics = () => {
  const [analytics, setAnalytics] = useState(studentAnalytics)

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Learning Analytics</h1>
          <p>Track your progress and performance</p>
        </div>

        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>Overall Progress</h3>
            <div className="analytics-value">{analytics.overallProgress}%</div>
            <div className="analytics-trend">
              <TrendingUp size={16} />
              <span>+12% this month</span>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Courses Completed</h3>
            <div className="analytics-value">{analytics.coursesCompleted}</div>
            <div className="analytics-trend">
              <Award size={16} />
              <span>{analytics.certificates} certificates</span>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Total Hours</h3>
            <div className="analytics-value">{analytics.totalHoursLearned}h</div>
            <div className="analytics-trend">
              <Clock size={16} />
              <span>This week: 12h</span>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Average Score</h3>
            <div className="analytics-value">{analytics.averageScore}%</div>
            <div className="analytics-trend">
              <Target size={16} />
              <span>{analytics.quizzesTaken} quizzes taken</span>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Learning Streak</h3>
            <div className="analytics-value">{analytics.streak} days</div>
            <div className="analytics-trend">
              <Zap size={16} />
              <span>Keep it up!</span>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Courses In Progress</h3>
            <div className="analytics-value">{analytics.coursesInProgress}</div>
            <div className="analytics-trend">
              <TrendingUp size={16} />
              <span>Active learning</span>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <h3>Weekly Activity</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '15px', height: '300px', padding: '20px' }}>
            {analytics.weeklyActivity.map((day, index) => (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '100%',
                  height: `${(day.hours / 5) * 100}%`,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '8px 8px 0 0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: '10px',
                  color: 'white',
                  fontWeight: '600'
                }}>
                  {day.hours}h
                </div>
                <div style={{ fontWeight: '600', color: '#666' }}>{day.day}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h3>Performance by Category</h3>
          <div className="performance-list">
            {analytics.performanceByCategory.map((item, index) => (
              <div key={index} className="performance-item">
                <div>
                  <div className="performance-name">{item.category}</div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
                <div className="performance-score">{item.score}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h3>Learning Insights</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', background: '#e8f5e9', borderRadius: '8px' }}>
              <h4 style={{ color: '#2e7d32', marginBottom: '10px' }}>Strengths</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#666' }}>
                <li>v Consistent daily practice</li>
                <li>v High quiz scores</li>
                <li>v Active in discussions</li>
              </ul>
            </div>
            <div style={{ padding: '20px', background: '#fff3e0', borderRadius: '8px' }}>
              <h4 style={{ color: '#f57c00', marginBottom: '10px' }}>Areas to Improve</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#666' }}>
                <li>* Complete pending assignments</li>
                <li>* Review weak topics</li>
                <li>* Practice more coding</li>
              </ul>
            </div>
            <div style={{ padding: '20px', background: '#e3f2fd', borderRadius: '8px' }}>
              <h4 style={{ color: '#1976d2', marginBottom: '10px' }}>Recommendations</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#666' }}>
                <li>&#8594; Try advanced courses</li>
                <li>&#8594; Join study groups</li>
                <li>&#8594; Take certification exams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default StudentAnalytics
