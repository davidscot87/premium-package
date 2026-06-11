import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { availableCourses } from '../../data/lmsData'
import { CreditCard, Smartphone, Building2, Wallet, Lock, CheckCircle } from 'lucide-react'
import './Payment.css'

const CourseCheckout = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [processing, setProcessing] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    bankName: ''
  })

  useEffect(() => {
    const foundCourse = availableCourses.find(c => c.id === courseId)
    setCourse(foundCourse)
  }, [courseId])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePayment = async () => {
    setProcessing(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Save payment to localStorage
    const payment = {
      id: `pay-${Date.now()}`,
      courseTitle: course.title,
      amount: course.price,
      date: new Date().toISOString().split('T')[0],
      status: 'completed',
      method: paymentMethod,
      transactionId: `TXN${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    }
    
    const payments = JSON.parse(localStorage.getItem('paymentHistory') || '[]')
    payments.push(payment)
    localStorage.setItem('paymentHistory', JSON.stringify(payments))
    
    // Enroll in course
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]')
    enrolledCourses.push(courseId)
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses))
    
    setProcessing(false)
    navigate('/student-dashboard/lms/payment-success', { state: { payment, course } })
  }

  if (!course) return <div>Loading...</div>

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page">
        <div className="checkout-container">
          <div className="checkout-main">
            <h1>Complete Your Purchase</h1>
            
            <div className="payment-methods">
              <h3>Select Payment Method</h3>
              <div className="method-options">
                <div 
                  className={`method-card ${paymentMethod === 'card' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={24} />
                  <span>Credit/Debit Card</span>
                </div>
                <div 
                  className={`method-card ${paymentMethod === 'upi' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('upi')}
                >
                  <Smartphone size={24} />
                  <span>UPI</span>
                </div>
                <div 
                  className={`method-card ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('netbanking')}
                >
                  <Building2 size={24} />
                  <span>Net Banking</span>
                </div>
                <div 
                  className={`method-card ${paymentMethod === 'wallet' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('wallet')}
                >
                  <Wallet size={24} />
                  <span>Wallet</span>
                </div>
              </div>
            </div>

            <div className="payment-form">
              {paymentMethod === 'card' && (
                <div className="form-section">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      maxLength="19"
                    />
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="John Doe"
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        maxLength="5"
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength="3"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="form-section">
                  <div className="form-group">
                    <label>UPI ID</label>
                    <input
                      type="text"
                      name="upiId"
                      placeholder="yourname@upi"
                      value={formData.upiId}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="upi-apps">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Pay_Logo_%282020%29.svg" alt="GPay" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/PhonePe_Logo.png" alt="PhonePe" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" />
                  </div>
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="form-section">
                  <div className="form-group">
                    <label>Select Bank</label>
                    <select name="bankName" value={formData.bankName} onChange={handleInputChange}>
                      <option value="">Choose your bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                      <option value="kotak">Kotak Mahindra Bank</option>
                    </select>
                  </div>
                </div>
              )}

              {paymentMethod === 'wallet' && (
                <div className="form-section">
                  <div className="wallet-options">
                    <div className="wallet-option">Paytm Wallet</div>
                    <div className="wallet-option">PhonePe Wallet</div>
                    <div className="wallet-option">Amazon Pay</div>
                    <div className="wallet-option">Mobikwik</div>
                  </div>
                </div>
              )}
            </div>

            <div className="security-note">
              <Lock size={16} />
              <span>Your payment information is secure and encrypted</span>
            </div>

            <button 
              className="btn-pay" 
              onClick={handlePayment}
              disabled={processing}
            >
              {processing ? 'Processing...' : `Pay Rs.${course.price.toLocaleString()}`}
            </button>
          </div>

          <div className="checkout-sidebar">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="course-summary">
                <img src={course.thumbnail} alt={course.title} />
                <div>
                  <h4>{course.title}</h4>
                  <p>By {course.instructor}</p>
                </div>
              </div>
              <div className="price-breakdown">
                <div className="price-row">
                  <span>Course Price</span>
                  <span>Rs.{course.price.toLocaleString()}</span>
                </div>
                <div className="price-row">
                  <span>Discount</span>
                  <span className="discount">-Rs.0</span>
                </div>
                <div className="price-row total">
                  <span>Total</span>
                  <span>Rs.{course.price.toLocaleString()}</span>
                </div>
              </div>
              <div className="benefits">
                <h4>What you'll get:</h4>
                <ul>
                  <li><CheckCircle size={16} /> Lifetime access</li>
                  <li><CheckCircle size={16} /> Certificate of completion</li>
                  <li><CheckCircle size={16} /> Downloadable resources</li>
                  <li><CheckCircle size={16} /> Mobile and TV access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CourseCheckout
