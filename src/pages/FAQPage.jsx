import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronDown, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const faqCategories = [
  {
    category: 'Admissions',
    icon: <HelpCircle size={20} />,
    questions: [
      { q: 'When do admissions open for the academic year?', a: 'Admissions for the 2026-27 academic year are now open. Applications are accepted from March 1st onwards. The entrance exam is scheduled for April 15-20, 2026.' },
      { q: 'What is the eligibility criteria for undergraduate programs?', a: 'Candidates must have completed 10+2 or equivalent with minimum 50% marks (45% for reserved categories) from a recognized board. Specific programs may have additional subject requirements.' },
      { q: 'Is there an entrance examination?', a: 'Yes, all applicants must appear for the Premier College Entrance Test (PCET). The test evaluates aptitude in English, Mathematics, and Logical Reasoning.' },
      { q: 'Can I apply for multiple programs?', a: 'Yes, you can apply for up to three programs in order of preference. Each program choice will be evaluated separately during the admission process.' },
      { q: 'What documents are required for admission?', a: 'You need: 10+2 mark sheet and certificate, character certificate, transfer certificate, passport-size photos, citizenship/birth certificate, and program-specific documents if applicable.' },
    ]
  },
  {
    category: 'Academics',
    icon: <HelpCircle size={20} />,
    questions: [
      { q: 'How is the academic calendar structured?', a: 'The academic year runs from August to May, divided into two semesters. Each semester includes 16 weeks of classes followed by examination weeks.' },
      { q: 'What is the attendance requirement?', a: 'A minimum of 75% attendance is mandatory for each subject to be eligible for semester examinations. Medical leaves require proper documentation.' },
      { q: 'How are grades calculated?', a: 'Grades are based on a 10-point GPA system. Continuous assessment (assignments, quizzes, projects) accounts for 40%, while semester-end exams account for 60%.' },
      { q: 'Are there remedial classes for weak students?', a: 'Yes, we offer free remedial classes and tutoring sessions for students who need additional academic support in specific subjects.' },
    ]
  },
  {
    category: 'Fees & Scholarships',
    icon: <HelpCircle size={20} />,
    questions: [
      { q: 'What is the fee structure for different programs?', a: 'Fee varies by program. Engineering programs: Rs. 1,20,000/year, Management: Rs. 80,000/year, Science: Rs. 90,000/year, Arts: Rs. 60,000/year. Hostel and transport fees are additional.' },
      { q: 'What scholarship opportunities are available?', a: 'We offer merit-based scholarships (up to 100% tuition waiver for top performers), need-based scholarships, sports scholarships, and special scholarships for economically disadvantaged students.' },
      { q: 'Can fees be paid in installments?', a: 'Yes, fees can be paid in two installments per semester. The first installment is due at the time of admission, and the second within 30 days.' },
      { q: 'What payment methods are accepted?', a: 'We accept payment via eSewa, Khalti, bank transfer, mobile banking, and demand draft. International students can pay via wire transfer.' },
    ]
  },
  {
    category: 'Hostel & Transport',
    icon: <HelpCircle size={20} />,
    questions: [
      { q: 'Is hostel accommodation mandatory?', a: 'Hostel accommodation is not mandatory but is highly recommended for out-of-town students. Day scholars are welcome to use hostel facilities on a fee basis.' },
      { q: 'What are the hostel facilities?', a: 'Hostels offer WiFi, 24/7 security, mess facilities, common rooms with TV, indoor games, gym access, and laundry services. Separate blocks for boys and girls.' },
      { q: 'How does the transport system work?', a: 'We operate 5 bus routes covering major areas within a 30km radius. Buses run from 6:30 AM to 5:30 PM. GPS tracking is available on all buses.' },
      { q: 'What is the transport fee?', a: 'Transport fee ranges from Rs. 8,000 to Rs. 18,000 per year depending on distance from the college.' },
    ]
  },
  {
    category: 'Student Life',
    icon: <HelpCircle size={20} />,
    questions: [
      { q: 'What extracurricular activities are available?', a: 'We have 30+ student clubs including debate, robotics, music, dance, sports, photography, and entrepreneurship. Annual cultural fest and tech fest are major highlights.' },
      { q: 'Is there a dress code?', a: 'Students are expected to maintain a neat and professional appearance. Uniform is required for laboratory sessions and specific programs.' },
      { q: 'What career support services are provided?', a: 'Our placement cell provides career counseling, resume workshops, mock interviews, industry visits, internship placements, and job placement assistance.' },
    ]
  },
]

const FAQPage = () => {
  const [search, setSearch] = useState('')
  const [openItems, setOpenItems] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')

  const toggleItem = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`
    setOpenItems(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key])
  }

  const allQuestions = faqCategories.flatMap((cat, ci) =>
    cat.questions.map((q, qi) => ({ ...q, catIdx: ci, qIdx: qi, category: cat.category }))
  )

  const filtered = allQuestions.filter(q => {
    const matchSearch = q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCategory === 'All' || q.category === activeCategory
    return matchSearch && matchCat
  })

  return (
    <div className="faq-page">
      <section className="page-hero" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        padding: '100px 0 60px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle at 30% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 70% 50%, #f59e0b 0%, transparent 50%)' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1 {...fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            <HelpCircle size={40} style={{ display: 'inline', marginRight: 12, verticalAlign: 'middle', color: '#f59e0b' }} />
            Frequently Asked Questions
          </motion.h1>
          <motion.p {...fadeUp} style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
            Find answers to common questions about our institution
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div style={{ maxWidth: 500, margin: '0 auto 2rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type="text" placeholder="Search questions..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '14px 14px 14px 44px', border: '1px solid #e2e8f0', borderRadius: 12, fontSize: 15 }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['All', ...faqCategories.map(c => c.category)].map((cat, i) => (
              <motion.button key={cat} whileHover={{ scale: 1.02 }} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px', borderRadius: 24, border: '1px solid #e2e8f0', cursor: 'pointer', fontSize: 13, fontWeight: 500,
                  background: activeCategory === cat ? '#1a237e' : 'white', color: activeCategory === cat ? 'white' : '#475569',
                  transition: 'all 0.2s', boxShadow: activeCategory === cat ? '0 2px 8px rgba(26,35,126,0.2)' : 'none'
                }}>
                {cat}
              </motion.button>
            ))}
          </div>

          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {filtered.map((item, i) => {
              const key = `${item.catIdx}-${item.qIdx}`
              const isOpen = openItems.includes(key)
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                  style={{
                    marginBottom: 8, borderRadius: 12, overflow: 'hidden',
                    border: `1px solid ${isOpen ? '#1a237e' : '#e2e8f0'}`,
                    background: isOpen ? '#f8fafc' : 'white',
                    transition: 'all 0.3s'
                  }}>
                  <button onClick={() => toggleItem(item.catIdx, item.qIdx)}
                    style={{
                      width: '100%', padding: '16px 20px', border: 'none', background: 'transparent',
                      display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textAlign: 'left',
                      fontSize: 15, fontWeight: 500, color: isOpen ? '#1a237e' : '#1e293b'
                    }}>
                    <span style={{ flex: 1 }}>{item.q}</span>
                    <ChevronDown size={18} style={{
                      color: '#94a3b8', transition: 'transform 0.3s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} />
                  </button>
                  <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    style={{ overflow: 'hidden', padding: isOpen ? '0 20px 16px' : '0 20px' }}>
                    <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7 }}>{item.a}</p>
                  </motion.div>
                </motion.div>
              )
            })}

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: 60, color: '#94a3b8' }}>
                <Search size={40} style={{ margin: '0 auto 12px', opacity: 0.5 }} />
                <p>No questions found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <motion.div {...fadeUp}>
            <MessageCircle size={32} style={{ color: '#f59e0b', marginBottom: 12 }} />
            <h2>Still Have Questions?</h2>
            <p style={{ color: '#64748b', marginBottom: 24 }}>We're here to help. Contact us directly.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+15551234567" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', color: '#475569', textDecoration: 'none', fontSize: 14 }}>
                <Phone size={16} style={{ color: '#1a237e' }} /> +1 (555) 123-4567
              </a>
              <a href="mailto:info@premiercollege.edu" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0', color: '#475569', textDecoration: 'none', fontSize: 14 }}>
                <Mail size={16} style={{ color: '#1a237e' }} /> info@premiercollege.edu
              </a>
              <a href="/contact" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: '#1a237e', borderRadius: 8, color: 'white', textDecoration: 'none', fontSize: 14 }}>
                <MessageCircle size={16} /> Contact Form
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
