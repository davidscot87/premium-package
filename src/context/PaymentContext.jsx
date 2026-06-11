import React, { createContext, useContext, useState, useEffect } from 'react'

const PaymentContext = createContext()

export const usePayment = () => {
  const context = useContext(PaymentContext)
  if (!context) {
    throw new Error('usePayment must be used within PaymentProvider')
  }
  return context
}

export const PaymentProvider = ({ children }) => {
  const [paymentHistory, setPaymentHistory] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPaymentHistory()
  }, [])

  const loadPaymentHistory = () => {
    const stored = localStorage.getItem('paymentHistory')
    if (stored) {
      setPaymentHistory(JSON.parse(stored))
    }
  }

  const processPayment = async (paymentData) => {
    setLoading(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const payment = {
      id: `pay-${Date.now()}`,
      ...paymentData,
      date: new Date().toISOString().split('T')[0],
      status: 'completed',
      transactionId: `TXN${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    }
    
    const updatedHistory = [...paymentHistory, payment]
    setPaymentHistory(updatedHistory)
    localStorage.setItem('paymentHistory', JSON.stringify(updatedHistory))
    
    setLoading(false)
    return payment
  }

  const getPaymentById = (id) => {
    return paymentHistory.find(p => p.id === id)
  }

  const value = {
    paymentHistory,
    loading,
    processPayment,
    getPaymentById,
    loadPaymentHistory
  }

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  )
}

export default PaymentContext
