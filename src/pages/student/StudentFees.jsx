import { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { 
  DollarSign, Calendar, Download, CreditCard, CheckCircle, 
  AlertCircle, Clock, FileText, Receipt, Printer, Mail,
  TrendingUp, X, ChevronRight
} from 'lucide-react'
import { fees } from '../../data/mockData'
import './StudentDashboard.css'

const StudentFees = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedInstallment, setSelectedInstallment] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [paymentProcessing, setPaymentProcessing] = useState(false)

  const feeStats = [
    { 
      label: 'Total Fees', 
      value: `Rs.${fees.totalFees.toLocaleString()}`, 
      icon: DollarSign, 
      sub: 'Annual', 
      color: '#3b82f6',
      bg: '#eff6ff',
      trend: null
    },
    { 
      label: 'Paid Amount', 
      value: `Rs.${fees.paidAmount.toLocaleString()}`, 
      icon: CheckCircle, 
      sub: `${((fees.paidAmount / fees.totalFees) * 100).toFixed(1)}%`, 
      color: '#10b981',
      bg: '#f0fdf4',
      trend: '+15%',
      up: true
    },
    { 
      label: 'Due Amount', 
      value: `Rs.${fees.dueAmount.toLocaleString()}`, 
      icon: AlertCircle, 
      sub: `Due: ${fees.dueDate}`, 
      color: '#ef4444',
      bg: '#fef2f2',
      trend: null
    },
    { 
      label: 'Next Payment', 
      value: `Rs.${fees.installments.find(i => i.status === 'pending')?.amount.toLocaleString() || '0'}`, 
      icon: Clock, 
      sub: fees.installments.find(i => i.status === 'pending')?.dueDate || 'N/A', 
      color: '#f59e0b',
      bg: '#fffbeb',
      trend: null
    },
  ]

  const handlePayNow = (installment) => {
    setSelectedInstallment(installment)
    setShowPaymentModal(true)
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    setPaymentProcessing(true)
    setTimeout(() => {
      setPaymentProcessing(false)
      setShowPaymentModal(false)
      alert(`Payment of Rs.${selectedInstallment.amount.toLocaleString()} processed successfully!\n\nReceipt will be sent to your email.`)
      setSelectedInstallment(null)
    }, 2000)
  }

  const handleDownloadReceipt = (installment) => {
    alert(`Downloading receipt ${installment.receipt} for Rs.${installment.amount.toLocaleString()}`)
  }

  const handlePrintReceipt = (installment) => {
    alert(`Printing receipt ${installment.receipt}`)
  }

  const handleEmailReceipt = (installment) => {
    alert(`Receipt ${installment.receipt} sent to your registered email`)
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'paid': return '#10b981'
      case 'pending': return '#f59e0b'
      case 'overdue': return '#ef4444'
      default: return '#6b7280'
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="ent-page">
        <div className="ent-welcome-banner" style={{ marginBottom: '32px' }}>
          <div className="ent-welcome-left" style={{ gap: '20px' }}>
             <div className="ent-welcome-avatar" style={{ width: '60px', height: '60px', padding: '2px' }}>
               <span style={{ fontSize: '24px' }}><DollarSign size={28} /></span>
             </div>
             <div>
               <h1 className="ent-welcome-name" style={{ fontSize: '32px' }}>Fee Portal</h1>
               <p className="ent-welcome-sub">Manage payments, invoices, and your financial standing</p>
             </div>
          </div>
          <div className="ent-welcome-right" style={{ display: 'flex', gap: '12px' }}>
            <button className="ent-qa-btn secondary">
              <FileText size={16} /> Fee Structure
            </button>
            <button className="ent-qa-btn primary">
              <Download size={16} /> Summary PDF
            </button>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {feeStats.map((k, i) => {
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

        <div className="ent-main-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))' }}>
          <div className="ent-card" style={{ padding: '0', overflow: 'hidden' }}>
            <div className="ent-card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0 }}>
              <div className="ent-card-title">
                 <CreditCard size={20} color="#1e1b4b" />
                 <h2>Installments Breakdown</h2>
              </div>
            </div>
            <div className="installments-list" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {fees.installments.map((installment) => (
                <div key={installment.id} className="installment-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${getStatusColor(installment.status)}20`, color: getStatusColor(installment.status), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {installment.status === 'paid' ? <CheckCircle size={24} /> : <Clock size={24} />}
                    </div>
                    <div>
                      <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#0f172a' }}>Installment {installment.id}</h3>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#64748b' }}>
                        <span>Amount: <strong style={{color: '#1e1b4b'}}>Rs.{installment.amount.toLocaleString()}</strong></span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Due: {installment.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <span className="ent-class-badge" style={{ 
                      background: installment.status === 'paid' ? '#d1fae5' : '#fef3c7',
                      color: installment.status === 'paid' ? '#065f46' : '#b45309'
                    }}>
                      {installment.status.charAt(0).toUpperCase() + installment.status.slice(1)}
                    </span>
                    {installment.status === 'pending' && (
                      <button 
                        className="ent-qa-btn primary" 
                        style={{ padding: '6px 12px', fontSize: '13px' }}
                        onClick={() => handlePayNow(installment)}
                      >
                         Pay Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && selectedInstallment && (
          <div className="modal-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }} onClick={() => !paymentProcessing && setShowPaymentModal(false)}>
            <div className="modal-content" style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '500px', padding: '32px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} onClick={(e) => e.stopPropagation()}>
              <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 800, margin: 0, color: '#1e1b4b' }}>Payment Gateway</h2>
                <button 
                  className="modal-close"
                  onClick={() => !paymentProcessing && setShowPaymentModal(false)}
                  disabled={paymentProcessing}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b' }}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="modal-body">
                <div className="payment-details" style={{ marginBottom: '24px', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#0f172a' }}>Payment Detail</h3>
                  <div className="payment-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div className="payment-info-item" style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>Installment</span>
                      <strong style={{ fontSize: '14px', color: '#1e1b4b' }}>Installment {selectedInstallment.id}</strong>
                    </div>
                    <div className="payment-info-item" style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>Amount</span>
                      <strong style={{ fontSize: '14px', color: '#10b981' }}>Rs.{selectedInstallment.amount.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                <form onSubmit={handlePaymentSubmit} className="payment-form">
                  <div className="form-group" style={{ marginBottom: '24px' }}>
                     <p style={{ margin: '0 0 12px 0', fontWeight: 600, color: '#0f172a' }}>Pay via Credit/Debit</p>
                     <input type="text" placeholder="Card Number" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '12px' }} />
                     <div style={{ display: 'flex', gap: '12px' }}>
                        <input type="text" placeholder="MM/YY" required style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                        <input type="text" placeholder="CVV" required style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                     </div>
                  </div>
                  <button 
                    type="submit" 
                    className="ent-qa-btn primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '16px' }}
                    disabled={paymentProcessing}
                  >
                    {paymentProcessing ? 'Processing Payment...' : ` Pay Rs.${selectedInstallment.amount.toLocaleString()}`}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default StudentFees
