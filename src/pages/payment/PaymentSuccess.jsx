import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { CheckCircle, Download, ArrowRight } from 'lucide-react'
import './Payment.css'

const PaymentSuccess = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { payment, course } = location.state || {}

  if (!payment || !course) {
    navigate('/student-dashboard/lms')
    return null
  }

  const handleDownloadInvoice = () => {
    // Simulate invoice download
    alert('Invoice downloaded successfully!')
  }

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page">
        <div className="payment-success-container">
          <div className="success-card">
            <div className="success-icon">
              <CheckCircle size={80} />
            </div>
            <h1>Payment Successful!</h1>
            <p className="success-message">
              You have successfully enrolled in {course.title}
            </p>

            <div className="transaction-details">
              <h3>Transaction Details</h3>
              <div className="detail-row">
                <span>Transaction ID</span>
                <span className="detail-value">{payment.transactionId}</span>
              </div>
              <div className="detail-row">
                <span>Amount Paid</span>
                <span className="detail-value">Rs.{payment.amount.toLocaleString()}</span>
              </div>
              <div className="detail-row">
                <span>Payment Method</span>
                <span className="detail-value">{payment.method.toUpperCase()}</span>
              </div>
              <div className="detail-row">
                <span>Date</span>
                <span className="detail-value">{new Date(payment.date).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="success-actions">
              <button className="btn-primary" onClick={() => navigate('/student-dashboard/lms')}>
                Go to My Courses
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary" onClick={handleDownloadInvoice}>
                <Download size={18} />
                Download Invoice
              </button>
            </div>

            <div className="next-steps">
              <h4>What's Next?</h4>
              <ul>
                <li>Start learning immediately from your dashboard</li>
                <li>Download course materials and resources</li>
                <li>Join the course discussion forum</li>
                <li>Track your progress and earn certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PaymentSuccess
