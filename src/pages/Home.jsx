import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Award, Users, BookOpen, 
  Star, CheckCircle, ChevronRight,
  GraduationCap, Building2, Trophy, ChevronLeft,
  Mail, Phone, Clock, Send, Shield, Target, Heart,
  Monitor, Library, Dumbbell, Microscope,
  Briefcase, Globe, Zap, Medal, Bell, Calendar,
  FileText, Download, ExternalLink, AlertCircle, Info
} from 'lucide-react'
import { useSiteContent } from '../context/SiteContentContext'
import { useLanguage } from '../context/LanguageContext'
import './Home.css'

const Home = () => {
  const [currentHero, setCurrentHero] = useState(0)
  const coursesScrollRef = useRef(null)
  const { content } = useSiteContent()
  const { t } = useLanguage()

  const fadeUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-50px' }, transition: { duration: 0.6 } }
  const fadeLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }
  const fadeRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }
  const stagger = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }

  const heroSlides = [
    {
      title: content.hero.heading,
      subtitle: content.hero.subheading,
      image: content.hero.backgroundImage || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop&q=80',
      cta: content.hero.ctaPrimary,
      link: '/courses'
    },
    {
      title: 'World-Class Faculty & Infrastructure',
      subtitle: 'Learn from 50+ expert educators with state-of-the-art facilities',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop&q=80',
      cta: 'Meet Our Faculty',
      link: '/about/faculty'
    },
    {
      title: 'Innovation Meets Tradition',
      subtitle: '50+ years of academic excellence and groundbreaking achievements',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop&q=80',
      cta: 'Our Achievements',
      link: '/achievements'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollCourses = (direction) => {
    if (coursesScrollRef.current) {
      const container = coursesScrollRef.current
      const cardWidth = container.offsetWidth / 3 // Width of one card (1/3 of container)
      const scrollAmount = direction === 'left' ? -(cardWidth * 3) : (cardWidth * 3) // Scroll 3 cards
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: <GraduationCap size={40} />,
      title: "50+ Expert Faculty",
      description: "Highly qualified, student-friendly educators dedicated to your success",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
    },
    {
      icon: <Users size={40} />,
      title: "1200+ Students",
      description: "Vibrant community of learners from diverse backgrounds",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
    },
    {
      icon: <Building2 size={40} />,
      title: "World-Class Infrastructure",
      description: "Modern labs, smart classrooms, and cutting-edge facilities",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
    },
    {
      icon: <Trophy size={40} />,
      title: "100+ Achievements",
      description: "Record-breaking toppers and national-level recognitions",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop"
    }
  ]

  const courses = [
    {
      id: 1,
      title: "Computer Science & Engineering",
      duration: "4 Years",
      seats: "120",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      category: "Engineering",
      campusImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
      campusTitle: "Tech Innovation Hub",
      campusDesc: "State-of-the-art computer labs, AI research center, and collaborative coding spaces where innovation meets creativity."
    },
    {
      id: 2,
      title: "Business Administration",
      duration: "3 Years",
      seats: "100",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      category: "Commerce",
      campusImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
      campusTitle: "Business Incubation Center",
      campusDesc: "Modern seminar halls, startup incubation labs, and industry interaction zones fostering entrepreneurial spirit."
    },
    {
      id: 3,
      title: "Biotechnology",
      duration: "4 Years",
      seats: "60",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
      category: "Science",
      campusImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80",
      campusTitle: "Advanced Research Labs",
      campusDesc: "Cutting-edge biotechnology labs, research facilities, and collaborative spaces for groundbreaking scientific discoveries."
    },
    {
      id: 4,
      title: "Arts & Humanities",
      duration: "3 Years",
      seats: "80",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
      category: "Arts",
      campusImage: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop&q=85&auto=format",
      campusTitle: "Creative Arts Center",
      campusDesc: "Inspiring studios, performance theaters, and exhibition spaces nurturing artistic expression and cultural excellence."
    },
    {
      id: 5,
      title: "Mechanical Engineering",
      duration: "4 Years",
      seats: "100",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=85&auto=format",
      category: "Engineering",
      campusImage: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=800&h=600&fit=crop&q=85&auto=format",
      campusTitle: "Engineering Workshop",
      campusDesc: "Advanced manufacturing labs, robotics center, and CAD/CAM facilities for hands-on engineering excellence."
    },
    {
      id: 6,
      title: "Data Science",
      duration: "4 Years",
      seats: "80",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=85&auto=format",
      category: "Engineering",
      campusImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=85&auto=format",
      campusTitle: "Data Analytics Lab",
      campusDesc: "High-performance computing clusters, big data platforms, and AI research facilities for data-driven innovation."
    },
    {
      id: 7,
      title: "Psychology",
      duration: "3 Years",
      seats: "60",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&h=600&fit=crop&q=85&auto=format",
      category: "Arts",
      campusImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&q=85&auto=format",
      campusTitle: "Counseling Center",
      campusDesc: "Clinical training facilities, research labs, and counseling centers for comprehensive psychology education."
    },
    {
      id: 8,
      title: "Commerce & Accounting",
      duration: "3 Years",
      seats: "90",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=85&auto=format",
      category: "Commerce",
      campusImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=85&auto=format",
      campusTitle: "Finance Hub",
      campusDesc: "Modern trading simulation labs, accounting software suites, and financial analytics centers for commerce excellence."
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Graduate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "The faculty's dedication and state-of-the-art labs helped me secure a position at a top tech company. Forever grateful!"
    },
    {
      name: "Rahul Verma",
      role: "Business Administration Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "The practical approach to learning and industry connections have been invaluable for my career growth."
    },
    {
      name: "Ananya Patel",
      role: "Biotechnology Researcher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "World-class research facilities and mentorship from expert faculty made my academic journey exceptional."
    },
    {
      name: "Arjun Singh",
      role: "Mechanical Engineering Graduate",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      text: "The hands-on training and industry exposure prepared me perfectly for my dream job in automotive engineering."
    },
    {
      name: "Sneha Reddy",
      role: "Arts & Humanities Student",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      text: "The creative environment and supportive faculty helped me discover my passion and develop my artistic skills."
    },
    {
      name: "Vikram Malhotra",
      role: "MBA Graduate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      text: "The business incubation center and mentorship program gave me the confidence to start my own venture."
    },
    {
      name: "Divya Krishnan",
      role: "Civil Engineering Student",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      text: "The infrastructure projects and site visits provided real-world experience that textbooks can't teach."
    },
    {
      name: "Karthik Iyer",
      role: "Data Science Graduate",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      text: "The AI and machine learning labs equipped me with cutting-edge skills that employers are looking for."
    }
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentHero ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="container-custom">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-actions">
                  <Link to={slide.link} className="btn-primary-custom">
                    {slide.cta}
                    <ArrowRight size={20} />
                  </Link>
                  <Link to="/contact" className="btn-secondary-custom">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentHero ? 'active' : ''}`}
              onClick={() => setCurrentHero(index)}
            />
          ))}
        </div>
      </section>

      <section className="features-section section-padding">
        <div className="container-custom">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card-image fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <img src={feature.image} alt={feature.title} className="feature-bg-image" />
                <div className="feature-overlay">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <motion.section {...fadeUp} className="about-preview section-padding bg-light">
        <div className="container-custom">
          <div className="about-preview-grid">
            <motion.div {...fadeLeft} className="about-preview-content">
              <span className="badge-custom">About Us</span>
              <h2>50+ Years of Academic Excellence</h2>
              <p>
                Premier College of Excellence has been at the forefront of education since its establishment. 
                With a rich history of producing industry leaders, innovators, and change-makers, we continue 
                to set benchmarks in quality education.
              </p>
              <ul className="check-list">
                <li><CheckCircle size={20} /> NAAC A++ Accredited Institution</li>
                <li><CheckCircle size={20} /> NBA Approved Programs</li>
                <li><CheckCircle size={20} /> 100% Placement Assistance</li>
                <li><CheckCircle size={20} /> International Collaborations</li>
              </ul>
              <Link to="/about" className="btn-primary-custom">
                Learn More
                <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div {...fadeRight} className="about-preview-image">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=1000&fit=crop" alt="Campus" />
              <div className="image-badge">
                <Award size={30} />
                <div>
                  <strong>50+</strong>
                  <span>Years Legacy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="courses-section section-padding">
        <div className="container-custom">
          <div className="section-title">
            <span className="badge-custom">Our Programs</span>
            <h2>Explore Our Courses</h2>
            <p>Choose from our wide range of industry-relevant programs</p>
          </div>
          <div className="courses-carousel-wrapper">
            <button className="carousel-nav-btn prev" onClick={() => scrollCourses('left')} aria-label="Previous course">
              <ChevronLeft size={28} />
            </button>
            <div className="courses-grid" ref={coursesScrollRef}>
              {courses.map((course, index) => (
                <div key={course.id} className="course-flip-card" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="course-flip-inner">
                    {/* Front Side - Course Info */}
                    <div className="course-flip-front">
                      <div className="course-image">
                        <img src={course.image} alt={course.title} />
                        <div className="course-overlay"></div>
                        <span className="course-category">{course.category}</span>
                      </div>
                      <div className="course-content">
                        <h3>{course.title}</h3>
                        <div className="course-meta">
                          <span><BookOpen size={16} /> {course.duration}</span>
                          <span><Users size={16} /> {course.seats} Seats</span>
                        </div>
                        <div className="flip-hint">
                          <span>Hover to see campus life</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Side - Campus Life */}
                    <div className="course-flip-back">
                      <div className="campus-image">
                        <img src={course.campusImage} alt={course.campusTitle} />
                        <div className="campus-overlay"></div>
                      </div>
                      <div className="campus-content">
                        <h3>{course.campusTitle}</h3>
                        <p>{course.campusDesc}</p>
                        <Link to={`/courses/${course.id}`} className="campus-link">
                          Explore Program
                          <ChevronRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-nav-btn next" onClick={() => scrollCourses('right')} aria-label="Next course">
              <ChevronRight size={28} />
            </button>
          </div>
          <div className="text-center" style={{marginTop: '3rem'}}>
            <Link to="/courses" className="btn-primary-custom">
              View All Courses
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Principal's Message Section - Premium Redesign */}
      <motion.section {...fadeUp} className="principal-message-section section-padding">
        <div className="container-custom">
          {/* Section Header */}
          <div className="principal-section-header">
            <span className="badge-custom">Leadership</span>
            <h2>Message from Our Principal</h2>
            <p>Inspiring Excellence, Shaping Futures</p>
          </div>

          {/* Main Content Grid */}
          <div className="principal-content-grid">
            {/* Left Column - Principal Profile Card */}
            <div className="principal-profile-card">
              <div className="profile-image-wrapper">
                <div className="profile-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&q=85" 
                    alt="Dr. Rajesh Kumar - Principal" 
                    className="principal-photo"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="profile-badge">
                  <Award size={20} />
                  <span>Principal</span>
                </div>
              </div>
              
              <div className="profile-info">
                <h3>Dr. Rajesh Kumar</h3>
                <p className="designation">Principal & Academic Director</p>
                <p className="qualification">Ph.D. in Education Management, M.Ed., B.Ed.</p>
                
                <div className="profile-stats">
                  <div className="stat-item">
                    <strong>25+</strong>
                    <span>Years Experience</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <strong>50+</strong>
                    <span>Awards & Honors</span>
                  </div>
                </div>
              </div>

              {/* Contact Information Card - Compact */}
              <div className="principal-contact-card">
                <div className="contact-header">
                  <Mail size={18} />
                  <h4>Get in Touch</h4>
                </div>
                <div className="contact-items">
                  <div className="contact-item">
                    <Mail size={16} />
                    <a href="mailto:principal@premiercollege.edu" className="contact-value">
                      principal@premiercollege.edu
                    </a>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} />
                    <a href="tel:+15551234567" className="contact-value">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="contact-item">
                    <Clock size={16} />
                    <span className="contact-value">Mon-Fri: 9AM - 5PM</span>
                  </div>
                </div>
                <Link to="/contact" className="contact-cta-btn">
                  <Send size={16} />
                  <span>Schedule Meeting</span>
                </Link>
              </div>

              {/* Leadership Vision Card - Compact */}
              <div className="leadership-vision-card">
                <div className="vision-header">
                  <Building2 size={20} />
                  <h4>Leadership Vision</h4>
                </div>
                <p>
                  "Creating an educational ecosystem that empowers every student through 
                  innovation, inclusivity, and excellence."
                </p>
                <div className="vision-stats">
                  <div className="vision-stat">
                    <strong>15+</strong>
                    <span>Publications</span>
                  </div>
                  <div className="vision-stat">
                    <strong>30+</strong>
                    <span>Conferences</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Message Content */}
            <div className="principal-message-content">
              {/* Quote Card */}
              <div className="message-quote-card">
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M10 20C10 15 12 10 18 8V12C14 13 12 16 12 18H18V28H10V20ZM24 20C24 15 26 10 32 8V12C28 13 26 16 26 18H32V28H24V20Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="quote-text">
                  Education is not just about acquiring knowledge; it's about transforming lives, 
                  igniting passions, and empowering individuals to become architects of their own destiny.
                </p>
              </div>

              {/* Message Text */}
              <div className="message-body">
                <h3>Welcome to Premier College of Excellence</h3>
                <p>
                  It gives me immense pleasure to welcome you to our esteemed institution, where we have been 
                  nurturing minds and shaping futures for over five decades. At Premier College, we believe that 
                  education transcends textbooks and classrooms--it's a transformative journey that molds character, 
                  cultivates creativity, and develops critical thinking.
                </p>
                
                <p>
                  Our commitment to academic excellence is matched only by our dedication to holistic development. 
                  We provide a vibrant ecosystem where students don't just learn--they discover their potential, 
                  explore their passions, and prepare for the challenges of tomorrow. With our distinguished faculty, 
                  cutting-edge infrastructure, and strong industry partnerships, we ensure every student receives 
                  personalized attention and practical exposure.
                </p>

                <div className="message-highlights-grid">
                  <div className="highlight-card">
                    <div className="highlight-icon">
                      <GraduationCap size={24} />
                    </div>
                    <h4>Academic Excellence</h4>
                    <p>World-class curriculum with industry-aligned programs</p>
                  </div>
                  
                  <div className="highlight-card">
                    <div className="highlight-icon">
                      <Users size={24} />
                    </div>
                    <h4>Holistic Development</h4>
                    <p>Focus on character, leadership, and life skills</p>
                  </div>
                  
                  <div className="highlight-card">
                    <div className="highlight-icon">
                      <Trophy size={24} />
                    </div>
                    <h4>Proven Success</h4>
                    <p>100% placement record with top companies</p>
                  </div>
                </div>

                <p>
                  As we continue our journey of excellence, I invite you to become part of our vibrant academic 
                  community. Together, let us create a future where knowledge meets opportunity, innovation meets 
                  tradition, and dreams transform into reality. Your success is our mission, and your growth is 
                  our greatest achievement.
                </p>

                <div className="message-closing">
                  <p className="closing-text">
                    I look forward to welcoming you to our campus and witnessing your journey of transformation 
                    and success.
                  </p>
                  <div className="signature-section">
                    <div className="signature-line">
                      <span className="signature-text">Dr. Rajesh Kumar</span>
                    </div>
                    <p className="signature-title">Principal & Academic Director</p>
                    <p className="signature-subtitle">Premier College of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Banner */}
          <div className="principal-stats-banner">
            <div className="stats-banner-content">
              <div className="banner-stat">
                <CheckCircle size={24} />
                <div>
                  <strong>50+ Years</strong>
                  <span>Academic Legacy</span>
                </div>
              </div>
              <div className="banner-divider"></div>
              <div className="banner-stat">
                <CheckCircle size={24} />
                <div>
                  <strong>1200+ Students</strong>
                  <span>Currently Enrolled</span>
                </div>
              </div>
              <div className="banner-divider"></div>
              <div className="banner-stat">
                <CheckCircle size={24} />
                <div>
                  <strong>100% Placement</strong>
                  <span>Track Record</span>
                </div>
              </div>
              <div className="banner-divider"></div>
              <div className="banner-stat">
                <CheckCircle size={24} />
                <div>
                  <strong>National Recognition</strong>
                  <span>NAAC A+ Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Facilities & Campus Life Section */}
      <motion.section {...fadeUp} className="facilities-campus-section section-padding">
        <div className="container-custom">
          {/* Section Header */}
          <div className="section-title-facilities">
            <span className="badge-custom">World-Class Infrastructure</span>
            <h2>Facilities & Campus Life</h2>
            <p>Experience learning in an environment designed for excellence, innovation, and holistic growth</p>
          </div>

          {/* Facilities Grid */}
          <div className="facilities-grid">
            {/* Modern Classrooms */}
            <div className="facility-card">
              <div className="facility-image">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&q=85&auto=format" 
                  alt="Modern Classrooms"
                  loading="lazy"
                />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <BookOpen size={32} />
                </div>
                <h3>Modern Classrooms</h3>
                <ul className="facility-highlights">
                  <li><CheckCircle size={16} /> Interactive digital boards & projectors</li>
                  <li><CheckCircle size={16} /> Acoustically optimized for clarity</li>
                  <li><CheckCircle size={16} /> Flexible seating for group activities</li>
                </ul>
              </div>
            </div>

            {/* Advanced Laboratories */}
            <div className="facility-card">
              <div className="facility-image">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=85&auto=format" 
                  alt="Advanced Laboratories"
                  loading="lazy"
                />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <Microscope size={32} />
                </div>
                <h3>Advanced Laboratories</h3>
                <ul className="facility-highlights">
                  <li><CheckCircle size={16} /> Latest equipment & technology</li>
                  <li><CheckCircle size={16} /> Safety-certified environments</li>
                  <li><CheckCircle size={16} /> Research-grade instrumentation</li>
                </ul>
              </div>
            </div>

            {/* Library & Learning Resources */}
            <div className="facility-card">
              <div className="facility-image">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&q=85&auto=format" 
                  alt="Library & Learning Resources"
                  loading="lazy"
                />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <Library size={32} />
                </div>
                <h3>Library & Learning Resources</h3>
                <ul className="facility-highlights">
                  <li><CheckCircle size={16} /> 50,000+ books & journals</li>
                  <li><CheckCircle size={16} /> Digital library with global access</li>
                  <li><CheckCircle size={16} /> Dedicated research assistance</li>
                </ul>
              </div>
            </div>

            {/* Computer & Technology Center */}
            <div className="facility-card">
              <div className="facility-image">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=85&auto=format" 
                  alt="Computer & Technology Center"
                  loading="lazy"
                />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <Monitor size={32} />
                </div>
                <h3>Computer & Technology Center</h3>
                <ul className="facility-highlights">
                  <li><CheckCircle size={16} /> 500+ high-spec workstations</li>
                  <li><CheckCircle size={16} /> Campus-wide high-speed WiFi</li>
                  <li><CheckCircle size={16} /> Industry-standard software suites</li>
                </ul>
              </div>
            </div>

            {/* Sports & Recreation */}
            <div className="facility-card">
              <div className="facility-image">
                <img 
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&q=85&auto=format" 
                  alt="Sports & Recreation"
                  loading="lazy"
                />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <Dumbbell size={32} />
                </div>
                <h3>Sports & Recreation</h3>
                <ul className="facility-highlights">
                  <li><CheckCircle size={16} /> Multi-sport indoor & outdoor arenas</li>
                  <li><CheckCircle size={16} /> Professional coaching available</li>
                  <li><CheckCircle size={16} /> Modern gym & wellness center</li>
                </ul>
              </div>
            </div>

            {/* Student Clubs & Campus Activities */}
            <div className="facility-card">
              <div className="facility-image">
                <img 
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop&q=85&auto=format" 
                  alt="Student Clubs & Campus Activities"
                  loading="lazy"
                />
                <div className="facility-overlay"></div>
              </div>
              <div className="facility-content">
                <div className="facility-icon">
                  <Users size={32} />
                </div>
                <h3>Student Clubs & Campus Activities</h3>
                <ul className="facility-highlights">
                  <li><CheckCircle size={16} /> 30+ active student clubs</li>
                  <li><CheckCircle size={16} /> Year-round cultural & tech events</li>
                  <li><CheckCircle size={16} /> Leadership development programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Campus Life Highlight Strip */}
          <div className="campus-highlights-strip">
            <div className="highlight-item">
              <div className="highlight-icon">
                <Shield size={28} />
              </div>
              <div className="highlight-content">
                <h4>Safe Learning Environment</h4>
                <p>24/7 security with CCTV surveillance</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <Award size={28} />
              </div>
              <div className="highlight-content">
                <h4>Experienced Faculty</h4>
                <p>50+ PhD holders & industry experts</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <Target size={28} />
              </div>
              <div className="highlight-content">
                <h4>Practical Learning Approach</h4>
                <p>Industry projects & internships</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <Heart size={28} />
              </div>
              <div className="highlight-content">
                <h4>Active Student Community</h4>
                <p>1200+ students from diverse backgrounds</p>
              </div>
            </div>
          </div>

          {/* Emotional Campus Life Paragraph */}
          <div className="campus-life-story">
            <div className="story-ticker">
              <div className="ticker-label">Your Journey Begins Here:</div>
              <div className="ticker-wrapper">
                <div className="ticker-content">
                  <span className="ticker-text">
                    Imagine waking up to a campus buzzing with energy--where every corridor echoes with ideas, every classroom sparks curiosity, and every corner offers a chance to discover something new. At Premier College, you're not just attending classes; you're joining a vibrant community of dreamers, innovators, and future leaders. From late-night study sessions in our modern library to celebrating victories on the sports field, from collaborating on groundbreaking research to performing at cultural festivals--this is where friendships are forged, passions are discovered, and futures are built. This is more than education; this is your transformation story waiting to unfold.
                  </span>
                  <span className="ticker-text">
                    Imagine waking up to a campus buzzing with energy--where every corridor echoes with ideas, every classroom sparks curiosity, and every corner offers a chance to discover something new. At Premier College, you're not just attending classes; you're joining a vibrant community of dreamers, innovators, and future leaders. From late-night study sessions in our modern library to celebrating victories on the sports field, from collaborating on groundbreaking research to performing at cultural festivals--this is where friendships are forged, passions are discovered, and futures are built. This is more than education; this is your transformation story waiting to unfold.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements & Statistics Section */}
      <motion.section {...fadeUp} className="achievements-stats-section section-padding bg-light">
        <div className="container-custom">
          {/* Section Header */}
          <div className="section-title-achievements">
            <span className="badge-custom">Our Impact & Excellence</span>
            <h2>Achievements That Define Us</h2>
            <p>Five decades of academic excellence, innovation, and transforming lives through education</p>
          </div>

          {/* Statistics Counters Grid */}
          <div className="stats-counters-grid">
            {/* Stat 1: Years of Excellence */}
            <div className="stat-counter-card">
              <div className="stat-icon-wrapper">
                <Trophy size={36} />
              </div>
              <div className="stat-number">50+</div>
              <h3 className="stat-title">Years of Excellence</h3>
              <p className="stat-description">Five decades of academic leadership and innovation</p>
            </div>

            {/* Stat 2: Total Graduates */}
            <div className="stat-counter-card">
              <div className="stat-icon-wrapper">
                <GraduationCap size={36} />
              </div>
              <div className="stat-number">25,000+</div>
              <h3 className="stat-title">Successful Graduates</h3>
              <p className="stat-description">Alumni making impact across 50+ countries worldwide</p>
            </div>

            {/* Stat 3: Expert Faculty */}
            <div className="stat-counter-card">
              <div className="stat-icon-wrapper">
                <Award size={36} />
              </div>
              <div className="stat-number">50+</div>
              <h3 className="stat-title">Expert Faculty</h3>
              <p className="stat-description">PhD holders and industry veterans guiding students</p>
            </div>

            {/* Stat 4: Academic Programs */}
            <div className="stat-counter-card">
              <div className="stat-icon-wrapper">
                <BookOpen size={36} />
              </div>
              <div className="stat-number">12+</div>
              <h3 className="stat-title">Premium Programs</h3>
              <p className="stat-description">Diverse courses across Engineering, Science, Arts & Commerce</p>
            </div>

            {/* Stat 5: Current Students */}
            <div className="stat-counter-card">
              <div className="stat-icon-wrapper">
                <Users size={36} />
              </div>
              <div className="stat-number">1,200+</div>
              <h3 className="stat-title">Active Students</h3>
              <p className="stat-description">Vibrant community from diverse backgrounds and cultures</p>
            </div>

            {/* Stat 6: Industry Partners */}
            <div className="stat-counter-card">
              <div className="stat-icon-wrapper">
                <Briefcase size={36} />
              </div>
              <div className="stat-number">500+</div>
              <h3 className="stat-title">Industry Partners</h3>
              <p className="stat-description">Global collaborations for internships and placements</p>
            </div>
          </div>

          {/* Achievements Showcase */}
          <div className="achievements-showcase">
            <h3 className="showcase-title">Recent Milestones & Recognition</h3>
            
            <div className="achievements-grid">
              {/* Achievement 1 */}
              <div className="achievement-card">
                <div className="achievement-badge">
                  <Medal size={28} />
                </div>
                <h4>NAAC A++ Accreditation</h4>
                <p>
                  Achieved the highest accreditation grade from National Assessment and Accreditation Council, 
                  recognizing our commitment to quality education, infrastructure, and student outcomes.
                </p>
                <div className="achievement-impact">
                  <CheckCircle size={16} />
                  <span>Ensures world-class education standards</span>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="achievement-card">
                <div className="achievement-badge">
                  <Zap size={28} />
                </div>
                <h4>National Rank 1 Achievement</h4>
                <p>
                  Our student secured All India Rank 1 in national competitive examinations, demonstrating 
                  the excellence of our academic training and faculty mentorship.
                </p>
                <div className="achievement-impact">
                  <CheckCircle size={16} />
                  <span>Proves academic excellence and rigor</span>
                </div>
              </div>

              {/* Achievement 4 */}
              <div className="achievement-card">
                <div className="achievement-badge">
                  <Globe size={28} />
                </div>
                <h4>International Research Collaborations</h4>
                <p>
                  Partnerships with 10+ international universities for student exchange programs, joint research 
                  projects, and global learning opportunities.
                </p>
                <div className="achievement-impact">
                  <CheckCircle size={16} />
                  <span>Opens doors to global opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Block */}
          <div className="achievements-cta-block">
            <div className="cta-content-achievements">
              <h2>Be Part of Our Success Story</h2>
              <p>
                Join 1,200+ students who are already building their future with us. Your journey to 
                excellence starts here.
              </p>
              <div className="cta-buttons-achievements">
                <Link to="/admissions" className="btn-primary-achievements">
                  <span>Apply Now</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/courses" className="btn-secondary-achievements">
                  <span>Explore Programs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* News & Notices Section */}
      <motion.section {...fadeUp} className="news-notices-section section-padding">
        <div className="container-custom">
          <div className="section-header-inline">
            <Bell size={24} />
            <h2>Latest Updates</h2>
          </div>
          <div className="news-list">
            <div className="news-item">
              <span className="news-badge new">New</span>
              <div className="news-content">
                <h4>Admissions Open for 2026-27 Academic Year</h4>
                <p>Applications are now being accepted for all undergraduate and postgraduate programs.</p>
                <div className="news-meta">
                  <Calendar size={14} />
                  <span>March 5, 2026</span>
                </div>
              </div>
            </div>

            <div className="news-item">
              <span className="news-badge important">Important</span>
              <div className="news-content">
                <h4>Entrance Exam Schedule Released</h4>
                <p>Check the official schedule for entrance examinations across all programs.</p>
                <div className="news-meta">
                  <Calendar size={14} />
                  <span>March 3, 2026</span>
                </div>
              </div>
            </div>

            <div className="news-item">
              <div className="news-content">
                <h4>Scholarship Applications Now Open</h4>
                <p>Merit-based and need-based scholarships available for eligible students.</p>
                <div className="news-meta">
                  <Calendar size={14} />
                  <span>March 1, 2026</span>
                </div>
              </div>
            </div>

            <div className="news-item">
              <div className="news-content">
                <h4>Campus Tour Registration Available</h4>
                <p>Schedule your personalized campus visit and explore our world-class facilities.</p>
                <div className="news-meta">
                  <Calendar size={14} />
                  <span>Feb 28, 2026</span>
                </div>
              </div>
            </div>

            <div className="news-item">
              <div className="news-content">
                <h4>New International Collaboration Announced</h4>
                <p>Partnership with leading universities for student exchange programs.</p>
                <div className="news-meta">
                  <Calendar size={14} />
                  <span>Feb 25, 2026</span>
                </div>
              </div>
            </div>
          </div>
          <Link to="/events" className="view-all-link">
            View All Updates
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>

      {/* Admission Information Section */}
      <motion.section {...fadeUp} className="admission-info-section section-padding bg-light">
        <div className="container-custom">
          <div className="section-header-inline">
            <FileText size={24} />
            <h2>Admission Information</h2>
          </div>
          
          <div className="admission-content-grid">
            <div className="admission-card highlight">
              <div className="admission-icon">
                <Download size={28} />
              </div>
              <h3>Download Prospectus</h3>
              <p>Get complete information about programs, fees, and admission process.</p>
              <button className="btn-download">
                <Download size={18} />
                <span>Download PDF</span>
              </button>
            </div>

            <div className="admission-quick-info">
              <div className="info-item">
                <div className="info-icon">
                  <Calendar size={20} />
                </div>
                <div className="info-text">
                  <h4>Application Deadline</h4>
                  <p>July 31, 2026</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FileText size={20} />
                </div>
                <div className="info-text">
                  <h4>Entrance Exam</h4>
                  <p>April 15-20, 2026</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <AlertCircle size={20} />
                </div>
                <div className="info-text">
                  <h4>Results Announcement</h4>
                  <p>May 10, 2026</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Info size={20} />
                </div>
                <div className="info-text">
                  <h4>Counseling Dates</h4>
                  <p>May 20-30, 2026</p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/admissions" className="btn-admission-full">
            Complete Admission Guide
            <ExternalLink size={18} />
          </Link>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="testimonials-section section-padding bg-light">
        <div className="container-custom">
          <div className="section-title">
            <span className="badge-custom">Testimonials</span>
            <h2>What Our Students Say</h2>
            <p>Hear from our successful alumni and current students</p>
          </div>
          <div className="testimonials-scroll-wrapper">
            <div className="testimonials-grid">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--accent-color)" color="var(--accent-color)" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="cta-section">
        <div className="container-custom">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join us and become part of a legacy of excellence</p>
            <div className="cta-actions">
              <Link to="/admissions" className="btn-primary-custom">
                Apply Now
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary-custom">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
