import { FileText } from 'lucide-react'
import './PolicyPages.css'

const TermsConditions = () => {
  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container-custom">
          <FileText size={64} />
          <h1>Terms & Conditions</h1>
          <p>Last updated: January 2024</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container-custom">
          <div className="policy-text">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Premier College's website for personal, non-commercial transitory viewing only.</p>

            <h2>3. Disclaimer</h2>
            <p>The materials on Premier College's website are provided on an 'as is' basis. Premier College makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2>4. Limitations</h2>
            <p>In no event shall Premier College or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Premier College's website.</p>

            <h2>5. Accuracy of Materials</h2>
            <p>The materials appearing on Premier College's website could include technical, typographical, or photographic errors. Premier College does not warrant that any of the materials on its website are accurate, complete or current.</p>

            <h2>6. Links</h2>
            <p>Premier College has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.</p>

            <h2>7. Modifications</h2>
            <p>Premier College may revise these terms of service for its website at any time without notice.</p>

            <h2>8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsConditions
