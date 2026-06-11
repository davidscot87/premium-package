import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import './Login.css'

const TeacherLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (formData.username && formData.password) {
      const userData = {
        id: 'TCH001',
        name: 'Dr. Sarah Johnson',
        email: formData.username,
        employeeId: 'EMP2024001',
        department: 'Computer Science',
        designation: 'Associate Professor',
        subjects: ['Data Structures', 'Algorithms', 'Database Systems'],
        classes: ['CSE-3A', 'CSE-3B', 'CSE-4A']
      }
      
      login(userData, 'teacher')
      navigate('/teacher-dashboard')
    } else {
      setError('Please enter both username and password')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=1000&fit=crop&q=80" alt="Teacher in classroom" />
          <div className="login-overlay">
            <h2>Welcome Back, Faculty!</h2>
            <p>Manage your classes, students, and academic resources</p>
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-header">
            <div className="login-icon teacher">
              <User size={40} />
            </div>
            <h1>Teacher Login</h1>
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
              <label htmlFor="username">Faculty ID / Email</label>
              <div className="input-with-icon">
                <User size={20} />
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  placeholder="Enter your faculty ID or email"
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
            <div className="other-logins">
              <Link to="/student-login">Student Login</Link>
              <span>|</span>
              <Link to="/admin">Admin Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherLogin
