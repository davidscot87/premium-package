import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Shield, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import './Login.css'

const AdminLogin = () => {
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
        id: 'ADM001',
        name: 'Admin User',
        email: formData.username,
        adminId: 'ADMIN2024001',
        role: 'admin',
        accessLevel: 'full',
        department: 'Administration'
      }
      
      login(userData, 'admin')
      navigate('/admin')
    } else {
      setError('Please enter both username and password')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop&q=80" alt="Admin workspace" />
          <div className="login-overlay">
            <h2>Admin Control Panel</h2>
            <p>Manage college operations and system administration</p>
          </div>
        </div>
        <div className="login-form-container">
          <div className="login-header">
            <div className="login-icon admin">
              <Shield size={40} />
            </div>
            <h1>Admin Login</h1>
            <p>Enter your credentials to access the control panel</p>
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
              <label htmlFor="username">Admin ID / Email</label>
              <div className="input-with-icon">
                <Shield size={20} />
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  placeholder="Enter your admin ID or email"
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
            <button type="submit" className="btn-login-submit admin">
              <LogIn size={20} />
              Login to Control Panel
            </button>
          </form>
          <div className="login-footer">
            <div className="other-logins">
              <Link to="/student-login">Student Login</Link>
              <span>|</span>
              <Link to="/teacher-login">Teacher Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
