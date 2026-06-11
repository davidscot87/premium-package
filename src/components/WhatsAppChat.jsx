import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open('https://wa.me/9779800000000?text=Hello%20Premier%20College%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs.', '_blank')
  }

  return (
    <div className="whatsapp-chat-container">
      <div className={`whatsapp-popup ${isOpen ? 'open' : ''}`}>
        <div className="whatsapp-popup-header">
          <MessageCircle size={20} />
          <span>Chat with us</span>
          <button onClick={() => setIsOpen(false)} className="whatsapp-close-btn">
            <X size={16} />
          </button>
        </div>
        <div className="whatsapp-popup-body">
          <div className="whatsapp-message">
            <p>Hello! How can we help you today?</p>
            <span className="whatsapp-time">Just now</span>
          </div>
          <button onClick={handleWhatsApp} className="whatsapp-start-btn">
            <MessageCircle size={18} />
            Start Chat on WhatsApp
          </button>
        </div>
      </div>

      <button
        className={`whatsapp-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      <style>{`
        .whatsapp-chat-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }
        .whatsapp-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: whatsappPulse 2s infinite;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
        }
        .whatsapp-btn.active {
          animation: none;
        }
        @keyframes whatsappPulse {
          0% { box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 4px 24px rgba(37, 211, 102, 0.7); }
          100% { box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4); }
        }
        .whatsapp-popup {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          width: 320px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: bottom right;
        }
        .whatsapp-popup.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }
        .whatsapp-popup-header {
          background: #075E54;
          color: white;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 14px;
        }
        .whatsapp-close-btn {
          margin-left: auto;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          opacity: 0.8;
          padding: 4px;
        }
        .whatsapp-close-btn:hover { opacity: 1; }
        .whatsapp-popup-body {
          padding: 16px;
        }
        .whatsapp-message {
          background: #f0f0f0;
          padding: 12px 16px;
          border-radius: 12px 12px 12px 4px;
          margin-bottom: 12px;
        }
        .whatsapp-message p {
          font-size: 14px;
          margin: 0 0 4px;
          color: #333;
        }
        .whatsapp-time {
          font-size: 11px;
          color: #999;
        }
        .whatsapp-start-btn {
          width: 100%;
          padding: 12px;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 24px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.2s;
          font-size: 14px;
        }
        .whatsapp-start-btn:hover {
          background: #128C7E;
        }
        @media (max-width: 480px) {
          .whatsapp-popup {
            width: calc(100vw - 48px);
            max-width: 320px;
          }
        }
      `}</style>
    </div>
  )
}

export default WhatsAppChat
