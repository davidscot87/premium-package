import React from 'react'

function TestApp() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#1a237e', fontSize: '48px' }}>🎓 Website is Working!</h1>
      <p style={{ fontSize: '24px', color: '#666' }}>
        If you can see this, React is rendering correctly.
      </p>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        The server is running on <strong>http://localhost:3001</strong>
      </p>
      <div style={{ marginTop: '40px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Next Steps:</h2>
        <p>The main app should load now. If you're seeing this test page, switch back to the main App.jsx</p>
      </div>
    </div>
  )
}

export default TestApp
