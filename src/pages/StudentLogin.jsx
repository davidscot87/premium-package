import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import './Login.css'

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Demo credentials - in production, authenticate with backend
    if (formData.username && formData.password) {
      const userData = {
        id: 'STU001',
        name: 'John Doe',
        email: formData.username,
        studentId: 'STU2024001',
        course: 'Computer Science & Engineering',
        semester: '6th Semester',
        year: '3rd Year'
      }
      
      login(userData, 'student')
      navigate('/student-dashboard')
    } else {
      setError('Please enter both username and password')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=1000&fit=crop&q=80" alt="Students studying" />
          <div className="login-overlay">
            <h2>Welcome Back, Student!</h2>
            <p>Access your courses, grades, and campus resources</p>
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-header">
            <div className="login-icon">
              <User size={40} />
            </div>
            <h1>Student Login</h1>
            <p>Enter your credentials to access your account</p>
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message" style={{
                padding: '12px',
                background: '#fee2e2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                color: '#dc2626',
                marginBottom: '20px',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="username">Student ID / Email</label>
              <div className="input-with-icon">
                <User size={20} />
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  placeholder="Enter your student ID or email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn-login-submit">
              <LogIn size={20} />
              Login to Dashboard
            </button>
          </form>
          <div className="login-footer">
            <p>Don't have an account? <Link to="/admissions">Apply for Admission</Link></p>
            <div className="other-logins">
              <Link to="/teacher-login">Teacher Login</Link>
              <span>|</span>
              <Link to="/admin">Admin Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin
