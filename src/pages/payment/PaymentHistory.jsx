import React, { useState, useEffect } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Download, CheckCircle, Clock, XCircle } from 'lucide-react'
import './Payment.css'

const PaymentHistory = () => {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    const storedPayments = JSON.parse(localStorage.getItem('paymentHistory') || '[]')
    setPayments(storedPayments)
  }, [])

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} className="status-icon success" />
      case 'pending':
        return <Clock size={20} className="status-icon pending" />
      case 'failed':
        return <XCircle size={20} className="status-icon failed" />
      default:
        return null
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Payment History</h1>
          <p>View all your transactions and download invoices</p>
        </div>

        <div className="payment-history-container">
          {payments.length === 0 ? (
            <div className="no-payments">
              <p>No payment history found</p>
            </div>
          ) : (
            <div className="payments-table">
              <table>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Course</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map(payment => (
                    <tr key={payment.id}>
                      <td className="transaction-id">{payment.transactionId}</td>
                      <td>{payment.courseTitle}</td>
                      <td className="amount">Rs.{payment.amount.toLocaleString()}</td>
                      <td>{new Date(payment.date).toLocaleDateString()}</td>
                      <td>{payment.method.toUpperCase()}</td>
                      <td>
                        <span className={`status-badge ${payment.status}`}>
                          {getStatusIcon(payment.status)}
                          {payment.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn-icon" title="Download Invoice">
                          <Download size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PaymentHistory
