import { DollarSign } from 'lucide-react'
import './PolicyPages.css'

const RefundPolicy = () => {
  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container-custom">
          <DollarSign size={64} />
          <h1>Refund Policy</h1>
          <p>Last updated: January 2024</p>
        </div>
      </section>

      <section className="policy-content">
        <div className="container-custom">
          <div className="policy-text">
            <h2>1. Admission Fee Refund</h2>
            <p>Admission fees are non-refundable once the admission process is completed and the student has been enrolled.</p>

            <h2>2. Tuition Fee Refund</h2>
            <p>Students who withdraw before the start of the semester are eligible for a full refund of tuition fees, minus processing charges.</p>

            <h3>Refund Schedule:</h3>
            <ul>
              <li>Before semester starts: 100% refund (minus processing fee)</li>
              <li>Within first week: 75% refund</li>
              <li>Within second week: 50% refund</li>
              <li>After second week: No refund</li>
            </ul>

            <h2>3. Hostel Fee Refund</h2>
            <p>Hostel fees are refundable on a pro-rata basis if the student vacates the hostel with proper notice of at least 30 days.</p>

            <h2>4. Examination Fee Refund</h2>
            <p>Examination fees are non-refundable once the examination form has been submitted.</p>

            <h2>5. Refund Process</h2>
            <p>Refund requests must be submitted in writing to the accounts department. Refunds will be processed within 30-45 working days from the date of approval.</p>

            <h2>6. Mode of Refund</h2>
            <p>Refunds will be made through the same payment method used for the original transaction or via bank transfer to the student's account.</p>

            <h2>7. Special Circumstances</h2>
            <p>In case of medical emergencies or other exceptional circumstances, the refund policy may be reviewed on a case-by-case basis by the management.</p>

            <h2>8. Contact for Refunds</h2>
            <p>For refund-related queries, please contact: accounts@premiercollege.edu or call +91 1800-XXX-XXXX</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RefundPolicy
