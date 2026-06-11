import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="contact-page">
      {/* Hero Section - Fixed Background */}
      <section 
        className="page-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&h=1600&fit=crop&q=85&auto=format)`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>We'd Love to Hear From You</p>
          </div>
        </div>
      </section>

      {/* Hero Spacer - Creates Scroll Space */}
      <div className="hero-spacer"></div>

      {/* Content Overlay - Slides Over Hero */}
      <div className="content-overlay">
        <section className="section-padding">
        <div className="container-custom">
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p>Have questions? We're here to help. Reach out to us through any of the following channels.</p>
              
              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={30} />
                  </div>
                  <div className="info-content">
                    <h3>Visit Us</h3>
                    <p>123 Education Street</p>
                    <p>Knowledge City, State - 123456</p>
                    <p>Country</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={30} />
                  </div>
                  <div className="info-content">
                    <h3>Call Us</h3>
                    <p>Main: +1 (555) 123-4567</p>
                    <p>Admissions: +1 (555) 765-4321</p>
                    <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={30} />
                  </div>
                  <div className="info-content">
                    <h3>Email Us</h3>
                    <p>info@premiercollege.edu</p>
                    <p>admissions@premiercollege.edu</p>
                    <p>support@premiercollege.edu</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Clock size={30} />
                  </div>
                  <div className="info-content">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h3>Connect With Us</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter size={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

        <section className="map-section">
          <div className="container-custom">
            <h2>Find Us on Map</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
