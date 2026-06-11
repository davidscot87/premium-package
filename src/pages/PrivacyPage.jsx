import { Shield, Lock, Eye, FileText } from 'lucide-react'
import './PolicyPages.css'

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container-custom">
          <Shield size={64} />
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2024</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container-custom">
          <div className="policy-text">
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including name, email address, phone number, academic records, and other personal information necessary for admission and academic purposes.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process admissions, communicate with students and parents, and comply with legal obligations.</p>

            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business.</p>

            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.</p>

            <h2>6. Cookies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve user experience.</p>

            <h2>7. Children's Privacy</h2>
            <p>Our services are not directed to individuals under 13. We do not knowingly collect personal information from children under 13.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

            <h2>9. Contact Us</h2>
            <p>If you have questions about this privacy policy, please contact us at privacy@premiercollege.edu</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
