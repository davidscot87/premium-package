import { Link } from 'react-router-dom'
import { 
  GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, 
  Instagram, Linkedin, Youtube, Send, ArrowRight, Award,
  Users, BookOpen, TrendingUp, Clock, Shield, Target,
  CheckCircle, ExternalLink, Heart
} from 'lucide-react'
import { useSiteContent } from '../context/SiteContentContext'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { content } = useSiteContent()
  const footerTagline = content?.footer?.tagline || "Shaping Tomorrow's Leaders Today"
  const footerCopyright = content?.footer?.copyright || `${currentYear} Premier College of Excellence. All Rights Reserved.`
  const contactPhone = content?.contact?.phone || '+91 98765 43210'
  const contactEmail = content?.contact?.email || 'info@premiercollege.edu'
  const contactAddress = content?.contact?.address || '123 Education Street, Knowledge City'

  const academics = [
    { path: '/courses', label: 'Programs & Courses' },
    { path: '/admissions', label: 'Admissions 2026-27' },
    { path: '/faculty', label: 'Our Faculty' },
    { path: '/about', label: 'Academic Calendar' },
    { path: '/achievements', label: 'Rankings & Awards' }
  ]

  const students = [
    { path: '/student-login', label: 'Student Portal' },
    { path: '/events', label: 'Campus Life & Events' },
    { path: '/gallery', label: 'Photo Gallery' },
    { path: '/infrastructure', label: 'Facilities & Labs' },
    { path: '/blog', label: 'Student Resources' }
  ]

  const quickAccess = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact & Directions' },
    { path: '/careers', label: 'Careers at Premier' },
    { path: '/faqs', label: 'FAQs' },
    { path: '/teacher-login', label: 'Faculty Portal' },
    { path: '/admin-login', label: 'Admin Portal' },
    { path: '/blog', label: 'News & Updates' }
  ]

  const resources = [
    { path: '/library', label: 'Digital Library' },
    { path: '/hostel', label: 'Hostel Management' },
    { path: '/transport', label: 'Transport Services' },
    { path: '/research', label: 'Research & Publications' },
    { path: '/placements', label: 'Placement Cell' },
    { path: '/alumni', label: 'Alumni Network' },
    { path: '/downloads', label: 'Downloads & Forms' }
  ]

  const whyChooseUs = [
    { icon: <Award size={18} />, text: 'NAAC A++ Accredited' },
    { icon: <TrendingUp size={18} />, text: '100% Placement Support' },
    { icon: <Users size={18} />, text: '50+ Expert Faculty' },
    { icon: <Shield size={18} />, text: '50 Years Legacy' }
  ]

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container-custom">
          <div className="footer-grid">
            {/* About Column - Full Width First Row */}
            <div className="footer-col footer-about">
              <Link to="/" className="footer-brand">
                <GraduationCap size={42} />
                <div>
                  <h3>Premier College</h3>
                  <p>of Excellence</p>
                </div>
              </Link>
              <p className="footer-tagline">
                {footerTagline}
              </p>
              <p className="footer-description">
                India's leading institution for higher education, committed to academic excellence, 
                innovation, and holistic development. Empowering students to become global leaders 
                and change-makers.
              </p>
              
              <div className="why-choose">
                <h4>Why Choose Us?</h4>
                <div className="features-list">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="feature-item">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="social-section">
                <h4>Connect With Us</h4>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* 2x2 Grid for Links - Second Row */}
            <div className="footer-links-grid">
              {/* Academics Column */}
              <div className="footer-col">
                <h4 className="footer-title">Academics</h4>
                <ul className="footer-links">
                  {academics.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>
                        <ArrowRight size={16} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Students Column */}
              <div className="footer-col">
                <h4 className="footer-title">For Students</h4>
                <ul className="footer-links">
                  {students.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>
                        <ArrowRight size={16} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div className="footer-col">
                <h4 className="footer-title">Resources</h4>
                <ul className="footer-links">
                  {resources.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>
                        <ArrowRight size={16} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Access Column */}
              <div className="footer-col">
                <h4 className="footer-title">Quick Access</h4>
                <ul className="footer-links">
                  {quickAccess.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>
                        <ArrowRight size={16} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact & Newsletter Column - Full Width Third Row */}
            <div className="footer-col footer-contact-newsletter">
              <h4 className="footer-title">Get In Touch</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={20} />
                  <div>
                    <strong>Campus Address</strong>
                    <p>123 Education Street, Knowledge City</p>
                    <p>State - 123456, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <div>
                    <strong>Call Us</strong>
                    <p>Admissions: +91 1800-XXX-XXXX</p>
                    <p>General: +91 1800-YYY-YYYY</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <div>
                    <strong>Email Us</strong>
                    <p>admissions@premiercollege.edu</p>
                    <p>info@premiercollege.edu</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock size={20} />
                  <div>
                    <strong>Office Hours</strong>
                    <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="newsletter-section">
                <h4 className="newsletter-title">Stay Updated</h4>
                <p className="newsletter-desc">Subscribe for latest news, events, and opportunities</p>
                <form className="newsletter-form">
                  <div className="input-group">
                    <Mail size={20} />
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      required 
                    />
                  </div>
                  <button type="submit" className="btn-subscribe">
                    <Send size={18} />
                    Subscribe Now
                  </button>
                </form>
                <p className="newsletter-note">
                  <CheckCircle size={14} />
                  Join 5000+ subscribers. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Accreditation & Certifications */}
          <div className="footer-accreditation">
            <div className="accreditation-content">
              <h4>Accreditations & Certifications</h4>
              <div className="accreditation-badges">
                <div className="badge-item">
                  <Award size={24} />
                  <span>NAAC A++</span>
                </div>
                <div className="badge-item">
                  <Award size={24} />
                  <span>NBA Approved</span>
                </div>
                <div className="badge-item">
                  <Award size={24} />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="badge-item">
                  <Award size={24} />
                  <span>UGC Recognized</span>
                </div>
                <div className="badge-item">
                  <Award size={24} />
                  <span>AICTE Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container-custom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; {footerCopyright}
              </p>
              <p className="made-with">
                Made with <Heart size={14} fill="currentColor" /> for Students
              </p>
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>*</span>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <span>*</span>
              <Link to="/refund-policy">Refund Policy</Link>
              <span>*</span>
              <Link to="/faqs">FAQs</Link>
              <span>*</span>
              <Link to="/careers">Careers</Link>
              <span>*</span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
