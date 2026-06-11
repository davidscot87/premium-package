import { useState, useEffect } from 'react'
import { ChevronDown, Search, HelpCircle, BookOpen, Users, CreditCard, Calendar, Award } from 'lucide-react'
import './FAQs.css'

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFAQ, setOpenFAQ] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: 'all', name: 'All FAQs', icon: HelpCircle },
    { id: 'admissions', name: 'Admissions', icon: BookOpen },
    { id: 'academics', name: 'Academics', icon: Award },
    { id: 'fees', name: 'Fees & Payment', icon: CreditCard },
    { id: 'campus', name: 'Campus Life', icon: Users },
    { id: 'placements', name: 'Placements', icon: Calendar }
  ]

  const faqs = [
    // Admissions FAQs
    {
      id: 1,
      category: 'admissions',
      question: 'What are the eligibility criteria for admission?',
      answer: 'Eligibility varies by program. For undergraduate programs, students must have completed 10+2 with minimum 50% marks. For postgraduate programs, a relevant bachelor\'s degree with 55% marks is required. Specific programs may have additional requirements.'
    },
    {
      id: 2,
      category: 'admissions',
      question: 'When does the admission process start?',
      answer: 'Admissions for the 2026-27 academic year typically begin in March and continue through July. Early applications are encouraged as seats fill quickly. Check our admissions page for exact dates and deadlines.'
    },
    {
      id: 3,
      category: 'admissions',
      question: 'Is there an entrance exam for admission?',
      answer: 'Yes, we conduct entrance exams for most programs. However, we also accept national-level exam scores like JEE, NEET, CAT, etc. Merit-based admissions are available for exceptional students.'
    },
    {
      id: 4,
      category: 'admissions',
      question: 'Can I apply for multiple courses?',
      answer: 'Yes, you can apply for up to 3 different programs in a single application. However, you must meet the eligibility criteria for each program you apply to.'
    },

    // Academics FAQs
    {
      id: 5,
      category: 'academics',
      question: 'What is the duration of undergraduate programs?',
      answer: 'Most undergraduate programs are 3 years (BA, BSc, BCom) or 4 years (BTech, BArch). Professional courses may have different durations as per regulatory requirements.'
    },
    {
      id: 6,
      category: 'academics',
      question: 'Are there any scholarship opportunities?',
      answer: 'Yes, we offer merit-based scholarships, need-based financial aid, sports scholarships, and special category scholarships. Up to 100% tuition fee waiver is available for exceptional students.'
    },
    {
      id: 7,
      category: 'academics',
      question: 'What is the student-faculty ratio?',
      answer: 'We maintain an excellent student-faculty ratio of 15:1, ensuring personalized attention and quality education. Our faculty members are highly qualified with PhDs and industry experience.'
    },

    // Fees FAQs
    {
      id: 8,
      category: 'fees',
      question: 'What is the fee structure?',
      answer: 'Fee structure varies by program. Undergraduate programs range from $3,000-$5,500 per year. Detailed fee structure is available on our admissions page. Payment plans and installment options are available.'
    },
    {
      id: 9,
      category: 'fees',
      question: 'Are there any additional charges?',
      answer: 'Apart from tuition fees, there are minimal charges for library, sports, and student activities. Hostel and transportation are optional and charged separately. Total additional charges are approximately $500-800 per year.'
    },

    // Campus Life FAQs
    {
      id: 10,
      category: 'campus',
      question: 'What facilities are available on campus?',
      answer: 'Our campus features modern classrooms, advanced laboratories, a library with 50,000+ books, computer labs, sports complex, cafeteria, medical center, and hostel facilities. We also have 30+ student clubs and regular cultural events.'
    },
    {
      id: 11,
      category: 'campus',
      question: 'Is hostel accommodation available?',
      answer: 'Yes, we provide separate hostel facilities for boys and girls with modern amenities including WiFi, mess, laundry, and 24/7 security. Hostel admission is on a first-come, first-served basis.'
    },

    // Placements FAQs
    {
      id: 12,
      category: 'placements',
      question: 'What is the placement record?',
      answer: 'We have a 100% placement record for eligible students. Our students are placed in top companies like Google, Microsoft, Amazon, TCS, Infosys, and many more with competitive salary packages.'
    },
    {
      id: 13,
      category: 'placements',
      question: 'Does the college provide internship opportunities?',
      answer: 'Yes, we have tie-ups with 500+ companies for internships. Students are encouraged to complete internships during summer breaks. Our placement cell actively facilitates internship opportunities.'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="faqs-page">
      {/* Hero Section */}
      <section className="faqs-hero">
        <div className="container-custom">
          <div className="hero-content">
            <HelpCircle size={64} className="hero-icon" />
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about admissions, academics, and campus life</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="faqs-content section-padding">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="search-container">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <category.icon size={20} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQs List */}
          <div className="faqs-list">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map(faq => (
                <div
                  key={faq.id}
                  className={`faq-item ${openFAQ === faq.id ? 'active' : ''}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={24}
                      className={`chevron ${openFAQ === faq.id ? 'rotate' : ''}`}
                    />
                  </button>
                  <div className={`faq-answer ${openFAQ === faq.id ? 'show' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <HelpCircle size={48} />
                <h3>No FAQs found</h3>
                <p>Try adjusting your search or filter to find what you're looking for</p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="faqs-contact">
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Our admissions team is here to help.</p>
            <div className="contact-buttons">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="tel:+911800XXXXXX" className="btn-secondary">Call: +91 1800-XXX-XXXX</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQs
