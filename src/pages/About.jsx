import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Award, Target, Eye, ArrowRight, Sparkles, ShieldCheck, Globe2, Zap, Users, Music, Trophy, Briefcase, BookOpen, Heart } from 'lucide-react'
import './About.css'

const About = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Handle hash-based navigation
    const hash = location.hash
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(`${id}-section`)
        if (element) {
          const offset = 100 // Account for navbar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])
  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      qualification: "Ph.D. in Education Management",
      experience: "25+ years"
    },
    {
      name: "Prof. Meera Sharma",
      position: "Vice Principal (Academics)",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      qualification: "Ph.D. in Computer Science",
      experience: "20+ years"
    },
    {
      name: "Dr. Amit Patel",
      position: "Vice Principal (Administration)",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      qualification: "Ph.D. in Business Administration",
      experience: "18+ years"
    },
    {
      name: "Dr. Sunita Reddy",
      position: "Dean of Students",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      qualification: "Ph.D. in Psychology",
      experience: "15+ years"
    },
    {
      name: "Prof. Vikram Singh",
      position: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      qualification: "Ph.D. in Mechanical Engineering",
      experience: "22+ years"
    },
    {
      name: "Dr. Priya Desai",
      position: "Head of Science Department",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
      qualification: "Ph.D. in Biotechnology",
      experience: "16+ years"
    },
    {
      name: "Prof. Arjun Mehta",
      position: "Head of Commerce",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      qualification: "Ph.D. in Economics",
      experience: "19+ years"
    },
    {
      name: "Dr. Kavita Nair",
      position: "Head of Arts & Humanities",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      qualification: "Ph.D. in English Literature",
      experience: "17+ years"
    }
  ]

  const scrollLeadership = (direction) => {
    const container = document.querySelector('.leadership-grid')
    const scrollAmount = 320
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const achievementsData = [
    { 
      year: "2025", 
      title: "National Rank 1 in Engineering", 
      description: "Student secured All India Rank 1 in competitive exam",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&q=85&auto=format"
    },
    { 
      year: "2025", 
      title: "Best College Award", 
      description: "Awarded Best College in the State by Education Ministry",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=600&fit=crop&q=75&auto=format"
    },
    { 
      year: "2024", 
      title: "100% Placement Record", 
      description: "All eligible students placed in top companies",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&q=75&auto=format"
    },
    { 
      year: "2024", 
      title: "Research Excellence", 
      description: "Published 50+ papers in international journals",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=600&fit=crop&q=75&auto=format"
    },
    { 
      year: "2023", 
      title: "Sports Championship", 
      description: "Won Inter-State Sports Championship",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop&q=75&auto=format"
    },
    { 
      year: "2023", 
      title: "Cultural Fest Winner", 
      description: "First prize in National Cultural Competition",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&q=75&auto=format"
    }
  ]

  const infrastructureData = [
    {
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=400&fit=crop&q=75&auto=format",
      title: "Modern Classrooms",
      description: "Smart classrooms equipped with latest audio-visual technology and comfortable seating"
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=400&fit=crop&q=75&auto=format",
      title: "Advanced Laboratories",
      description: "State-of-the-art labs for Computer Science, Physics, Chemistry, Biology, and Engineering"
    },
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop&q=75&auto=format",
      title: "Digital Library",
      description: "Extensive collection of 50,000+ books, journals, and digital resources"
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=400&fit=crop&q=75&auto=format",
      title: "High-Speed WiFi",
      description: "Campus-wide high-speed internet connectivity for seamless learning"
    },
    {
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop&q=75&auto=format",
      title: "Cafeteria",
      description: "Hygienic cafeteria serving nutritious meals and snacks"
    },
    {
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop&q=75&auto=format",
      title: "Hostel Facilities",
      description: "Comfortable accommodation with all modern amenities for outstation students"
    }
  ]

  const milestones = [
    { year: "1970", event: "College Established", description: "Founded with a vision to provide quality education" },
    { year: "1985", event: "NAAC Accreditation", description: "Received first NAAC accreditation with A grade" },
    { year: "1995", event: "Research Center", description: "Established state-of-the-art research facilities" },
    { year: "2005", event: "International Tie-ups", description: "Partnered with 10+ international universities" },
    { year: "2015", event: "NAAC A++ Grade", description: "Achieved highest accreditation rating" },
    { year: "2020", event: "Digital Campus", description: "Transformed into fully digital smart campus" }
  ]

  const values = [
    {
      icon: <Sparkles size={64} strokeWidth={1.5} />,
      title: "Excellence",
      tagline: "Pursue Greatness",
      description: "We don't just meet standards--we set them. Every lesson, every interaction, every achievement reflects our unwavering commitment to brilliance.",
      primaryColor: "#1a237e",
      secondaryColor: "#0d47a1",
      accentColor: "#1565c0",
      glowColor: "rgba(26, 35, 126, 0.3)",
      gradient: "linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #1565c0 100%)",
      iconColor: "#1a237e"
    },
    {
      icon: <ShieldCheck size={64} strokeWidth={1.5} />,
      title: "Integrity",
      tagline: "Lead with Honor",
      description: "Trust is earned through action. We champion honesty, transparency, and ethical leadership in everything we do.",
      primaryColor: "#1a237e",
      secondaryColor: "#0d47a1",
      accentColor: "#1565c0",
      glowColor: "rgba(13, 71, 161, 0.3)",
      gradient: "linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #1565c0 100%)",
      iconColor: "#1a237e"
    },
    {
      icon: <Globe2 size={64} strokeWidth={1.5} />,
      title: "Inclusion",
      tagline: "Celebrate Diversity",
      description: "Every voice matters. Every perspective enriches us. We create a community where differences become our greatest strength.",
      primaryColor: "#1a237e",
      secondaryColor: "#0d47a1",
      accentColor: "#1565c0",
      glowColor: "rgba(26, 35, 126, 0.3)",
      gradient: "linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #1565c0 100%)",
      iconColor: "#1a237e"
    },
    {
      icon: <Zap size={64} strokeWidth={1.5} />,
      title: "Innovation",
      tagline: "Shape Tomorrow",
      description: "Bold ideas change the world. We empower creative thinkers and problem-solvers to pioneer solutions that matter.",
      primaryColor: "#1a237e",
      secondaryColor: "#0d47a1",
      accentColor: "#1565c0",
      glowColor: "rgba(13, 71, 161, 0.3)",
      gradient: "linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #1565c0 100%)",
      iconColor: "#1a237e"
    }
  ]

  return (
    <div className="about-page">
      {/* Hero Section - Fixed Background */}
      <section 
        className="page-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1562774053-701939374585?w=2400&h=1600&fit=crop&q=85&auto=format)`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>About Premier College</h1>
            <p>Shaping Futures Since 1970</p>
          </div>
        </div>
      </section>

      {/* Spacer for scroll effect */}
      <div className="hero-spacer"></div>

      {/* Content that overlaps hero */}
      <div className="content-overlay">

      <section className="section-padding" id="overview-section">
        <div className="container-custom">
          <div className="about-intro">
            <div className="about-intro-content">
              <span className="badge-custom">Our Story</span>
              <h2>50+ Years of Academic Excellence</h2>
              <p>
                Premier College of Excellence was established in 1970 with a vision to provide world-class 
                education and create future leaders. Over the past five decades, we have grown into one of 
                the most prestigious institutions in the region, known for our commitment to academic 
                excellence, innovative teaching methods, and holistic student development.
              </p>
              <p>
                With 50+ highly qualified faculty members, state-of-the-art infrastructure, and a vibrant 
                community of 1200+ students, we continue to set new benchmarks in education. Our graduates 
                have gone on to become successful professionals, entrepreneurs, and leaders in various fields, 
                making significant contributions to society.
              </p>
              <div className="stats-row">
                <div className="stat-box">
                  <h3>50+</h3>
                  <p>Years of Legacy</p>
                </div>
                <div className="stat-box">
                  <h3>1200+</h3>
                  <p>Active Students</p>
                </div>
                <div className="stat-box">
                  <h3>50+</h3>
                  <p>Expert Faculty</p>
                </div>
                <div className="stat-box">
                  <h3>100+</h3>
                  <p>Achievements</p>
                </div>
              </div>
            </div>
            <div className="about-intro-image">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=1000&fit=crop" alt="Campus" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="section-title">
            <h2>Our Vision & Mission</h2>
          </div>
          <div className="vision-mission-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <Eye size={50} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a globally recognized institution of higher learning, fostering innovation, 
                research, and holistic development, while preparing students to become responsible 
                global citizens and leaders who contribute positively to society.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">
                <Target size={50} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide quality education through innovative teaching methodologies, promote 
                research and development, nurture ethical values, and create an inclusive learning 
                environment that empowers students to achieve their full potential and excel in 
                their chosen fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="section-title">
            <span className="badge-custom">What Drives Us</span>
            <h2>Our Core Values</h2>
            <p>The unwavering principles that define who we are and guide everything we do</p>
          </div>
          <div className="values-grid-vertical">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card-vertical fade-in-up" 
                style={{
                  animationDelay: `${index * 0.15}s`,
                  '--primary-color': value.primaryColor,
                  '--secondary-color': value.secondaryColor,
                  '--accent-color': value.accentColor,
                  '--glow-color': value.glowColor,
                  '--icon-color': value.iconColor
                }}
              >
                <div 
                  className="value-icon-wrapper" 
                  style={{background: value.gradient}}
                >
                  <div className="value-icon-bg-pattern"></div>
                  <div className="value-icon-glow"></div>
                  <div className="value-icon-circle">
                    <div className="icon-inner-glow"></div>
                    <div className="icon-outer-ring"></div>
                    {value.icon}
                  </div>
                </div>
                <div className="value-content">
                  <div className="value-header">
                    <h3>{value.title}</h3>
                    <span className="value-tagline">{value.tagline}</span>
                  </div>
                  <p>{value.description}</p>
                  <div className="value-footer">
                    <div className="value-accent-line"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="section-title" id="history-section">
            <h2>Our Journey Through Time</h2>
            <p>Milestones that shaped our legacy</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="section-title" id="leadership-section">
            <h2>Leadership Team</h2>
            <p>Meet the visionaries guiding our institution</p>
          </div>
          <div className="leadership-container">
            <button className="scroll-btn scroll-btn-left" onClick={() => scrollLeadership('left')} aria-label="Scroll left">
              <ArrowRight size={24} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <div className="leadership-grid">
              {leadership.map((leader, index) => (
                <div key={index} className="leader-card hover-lift">
                  <div className="leader-image">
                    <img src={leader.image} alt={leader.name} />
                  </div>
                  <div className="leader-info">
                    <h3>{leader.name}</h3>
                    <p className="leader-position">{leader.position}</p>
                    <p className="leader-qualification">{leader.qualification}</p>
                    <p className="leader-experience">
                      <Award size={16} />
                      {leader.experience} Experience
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-btn scroll-btn-right" onClick={() => scrollLeadership('right')} aria-label="Scroll right">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="accreditation-section">
            <h2>Accreditations & Affiliations</h2>
            <p className="section-subtitle">Recognized by leading educational bodies</p>
            <div className="accreditation-scroll-wrapper">
              <div className="scroll-progress-bar">
                <div className="scroll-progress-fill"></div>
              </div>
              <div className="accreditation-scroll-container">
                <div className="accreditation-grid">
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="3"/>
                        <path d="M100 40L115 75L155 80L127.5 107L135 147L100 129L65 147L72.5 107L45 80L85 75L100 40Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
                        <text x="100" y="175" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">NAAC</text>
                        <text x="100" y="195" fontSize="16" fontWeight="bold" fill="#fbbf24" textAnchor="middle" fontFamily="Arial, sans-serif">A++</text>
                      </svg>
                    </div>
                    <h3>NAAC A++</h3>
                    <p>National Assessment and Accreditation Council</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="180" height="180" rx="20" fill="#059669" stroke="#10b981" strokeWidth="3"/>
                        <path d="M60 100L85 125L140 70" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                        <text x="100" y="170" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">NBA</text>
                        <text x="100" y="35" fontSize="14" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">APPROVED</text>
                      </svg>
                    </div>
                    <h3>NBA Approved</h3>
                    <p>National Board of Accreditation</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#dc2626" stroke="#ef4444" strokeWidth="3"/>
                        <circle cx="100" cy="100" r="75" fill="none" stroke="white" strokeWidth="4"/>
                        <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="4"/>
                        <text x="100" y="105" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">ISO</text>
                        <text x="100" y="135" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">9001</text>
                        <text x="100" y="160" fontSize="14" fontWeight="600" fill="#fbbf24" textAnchor="middle" fontFamily="Arial, sans-serif">2015</text>
                      </svg>
                    </div>
                    <h3>ISO 9001:2015</h3>
                    <p>Quality Management System</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#7c3aed" stroke="#8b5cf6" strokeWidth="3"/>
                        <path d="M100 30L60 70L60 130L100 170L140 130L140 70L100 30Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3"/>
                        <text x="100" y="110" fontSize="36" fontWeight="bold" fill="#7c3aed" textAnchor="middle" fontFamily="Arial, sans-serif">UGC</text>
                        <text x="100" y="25" fontSize="12" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">RECOGNIZED</text>
                      </svg>
                    </div>
                    <h3>UGC Recognized</h3>
                    <p>University Grants Commission</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="15" width="170" height="170" rx="25" fill="#ea580c" stroke="#f97316" strokeWidth="3"/>
                        <path d="M100 50L60 80V120L100 150L140 120V80L100 50Z" fill="white" stroke="#ea580c" strokeWidth="2"/>
                        <path d="M100 70L80 85V115L100 130L120 115V85L100 70Z" fill="#ea580c"/>
                        <text x="100" y="180" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">AICTE</text>
                      </svg>
                    </div>
                    <h3>AICTE Approved</h3>
                    <p>All India Council for Technical Education</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#0891b2" stroke="#06b6d4" strokeWidth="3"/>
                        <path d="M100 35L110 70L145 75L120 100L127 135L100 117L73 135L80 100L55 75L90 70L100 35Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
                        <text x="100" y="170" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">NIRF</text>
                        <text x="100" y="192" fontSize="14" fontWeight="600" fill="#fbbf24" textAnchor="middle" fontFamily="Arial, sans-serif">RANKED</text>
                      </svg>
                    </div>
                    <h3>NIRF Ranked</h3>
                    <p>National Institutional Ranking</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#4f46e5" stroke="#6366f1" strokeWidth="3"/>
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#fbbf24" strokeWidth="3"/>
                        <path d="M100 40L85 70L50 75L75 100L70 135L100 120L130 135L125 100L150 75L115 70L100 40Z" fill="#fbbf24"/>
                        <text x="100" y="105" fontSize="18" fontWeight="bold" fill="#4f46e5" textAnchor="middle" fontFamily="Arial, sans-serif">STATE</text>
                        <text x="100" y="125" fontSize="16" fontWeight="bold" fill="#4f46e5" textAnchor="middle" fontFamily="Arial, sans-serif">UNIV</text>
                        <text x="100" y="175" fontSize="12" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">AFFILIATED</text>
                      </svg>
                    </div>
                    <h3>State University</h3>
                    <p>Affiliated & Recognized</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#2563eb" stroke="#3b82f6" strokeWidth="3"/>
                        <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="3" strokeDasharray="8 4"/>
                        <path d="M100 50L110 80L140 85L115 110L120 140L100 125L80 140L85 110L60 85L90 80L100 50Z" fill="white"/>
                        <circle cx="100" cy="100" r="25" fill="#fbbf24"/>
                        <text x="100" y="107" fontSize="20" fontWeight="bold" fill="#2563eb" textAnchor="middle" fontFamily="Arial, sans-serif">10+</text>
                        <text x="100" y="180" fontSize="14" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">INTERNATIONAL</text>
                        <text x="100" y="195" fontSize="12" fontWeight="600" fill="#fbbf24" textAnchor="middle" fontFamily="Arial, sans-serif">PARTNERSHIPS</text>
                      </svg>
                    </div>
                    <h3>International Tie-ups</h3>
                    <p>Global Academic Partnerships</p>
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="3"/>
                        <path d="M100 40L115 75L155 80L127.5 107L135 147L100 129L65 147L72.5 107L45 80L85 75L100 40Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
                        <text x="100" y="175" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">NAAC</text>
                        <text x="100" y="195" fontSize="16" fontWeight="bold" fill="#fbbf24" textAnchor="middle" fontFamily="Arial, sans-serif">A++</text>
                      </svg>
                    </div>
                    <h3>NAAC A++</h3>
                    <p>National Assessment and Accreditation Council</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="180" height="180" rx="20" fill="#059669" stroke="#10b981" strokeWidth="3"/>
                        <path d="M60 100L85 125L140 70" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                        <text x="100" y="170" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">NBA</text>
                        <text x="100" y="35" fontSize="14" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">APPROVED</text>
                      </svg>
                    </div>
                    <h3>NBA Approved</h3>
                    <p>National Board of Accreditation</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#dc2626" stroke="#ef4444" strokeWidth="3"/>
                        <circle cx="100" cy="100" r="75" fill="none" stroke="white" strokeWidth="4"/>
                        <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="4"/>
                        <text x="100" y="105" fontSize="32" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">ISO</text>
                        <text x="100" y="135" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">9001</text>
                        <text x="100" y="160" fontSize="14" fontWeight="600" fill="#fbbf24" textAnchor="middle" fontFamily="Arial, sans-serif">2015</text>
                      </svg>
                    </div>
                    <h3>ISO 9001:2015</h3>
                    <p>Quality Management System</p>
                  </div>
                  <div className="accreditation-card">
                    <div className="accreditation-logo-wrapper">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" fill="#7c3aed" stroke="#8b5cf6" strokeWidth="3"/>
                        <path d="M100 30L60 70L60 130L100 170L140 130L140 70L100 30Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3"/>
                        <text x="100" y="110" fontSize="36" fontWeight="bold" fill="#7c3aed" textAnchor="middle" fontFamily="Arial, sans-serif">UGC</text>
                        <text x="100" y="25" fontSize="12" fontWeight="600" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">RECOGNIZED</text>
                      </svg>
                    </div>
                    <h3>UGC Recognized</h3>
                    <p>University Grants Commission</p>
                  </div>
                </div>
              </div>
              <div className="scroll-fade scroll-fade-left"></div>
              <div className="scroll-fade scroll-fade-right"></div>
            </div>
            <div className="accreditation-info">
              <p className="info-text">
                <span className="info-icon"></span>
                Hover over cards to pause * Scroll automatically continues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-light" id="achievements-section">
        <div className="container-custom">
          <div className="section-title">
            <h2>Our Achievements</h2>
            <p>100+ Achievements Celebrating Success Across All Domains</p>
          </div>
          <div className="collage-grid">
            {achievementsData.map((achievement, index) => (
              <div key={index} className={`collage-item collage-item-${index + 1} fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="collage-inner">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="collage-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="collage-overlay">
                    <div className="collage-content">
                      <span className="achievement-badge">{achievement.year}</span>
                      <h3>{achievement.title}</h3>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section-padding" id="infrastructure-section">
        <div className="container-custom">
          <div className="section-title">
            <h2>World-Class Infrastructure</h2>
            <p>State-of-the-Art Facilities for Exceptional Learning Experience</p>
          </div>
          <div className="infrastructure-grid">
            {infrastructureData.map((facility, index) => (
              <div key={index} className="infrastructure-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="infrastructure-image-wrapper">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="infrastructure-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="infrastructure-overlay"></div>
                </div>
                <div className="infrastructure-content">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life & Activities Section */}
      <section className="student-life-section section-padding bg-light">
        <div className="container-custom">
          {/* Section Header */}
          <div className="section-title-student-life">
            <span className="badge-custom">Beyond Academics</span>
            <h2>Student Life & Activities</h2>
            <p className="section-subtitle-life">
              Education extends far beyond textbooks and lectures. At Premier College, we cultivate well-rounded individuals through diverse experiences, collaborative opportunities, and meaningful community engagement that shape tomorrow's leaders.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="activities-grid">
            {/* Activity 1: Student Clubs */}
            <div className="activity-card fade-in-up" style={{animationDelay: '0s'}}>
              <div className="activity-icon-wrapper">
                <Users size={32} />
              </div>
              <h3>Student Clubs & Organizations</h3>
              <p>
                Join 30+ active student clubs spanning technology, arts, literature, and social causes. Connect with like-minded peers, develop leadership skills, and pursue your passions beyond the classroom.
              </p>
              <ul className="activity-highlights">
                <li>Tech clubs, coding communities, and innovation labs</li>
                <li>Literary societies, debate forums, and creative writing groups</li>
                <li>Environmental clubs and social awareness initiatives</li>
              </ul>
            </div>

            {/* Activity 2: Cultural Events */}
            <div className="activity-card fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="activity-icon-wrapper">
                <Music size={32} />
              </div>
              <h3>Cultural Events & Festivals</h3>
              <p>
                Experience vibrant cultural celebrations, annual festivals, and artistic performances that showcase talent and diversity. From traditional festivals to modern concerts, our campus comes alive with creativity.
              </p>
              <ul className="activity-highlights">
                <li>Annual cultural fest with 5,000+ participants</li>
                <li>Music, dance, drama, and fashion shows</li>
                <li>Inter-college competitions and talent showcases</li>
              </ul>
            </div>

            {/* Activity 3: Sports */}
            <div className="activity-card fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="activity-icon-wrapper">
                <Trophy size={32} />
              </div>
              <h3>Sports & Physical Activities</h3>
              <p>
                Stay active with state-of-the-art sports facilities and professional coaching. Compete at district, state, and national levels while building teamwork, discipline, and physical fitness.
              </p>
              <ul className="activity-highlights">
                <li>Cricket, football, basketball, and athletics</li>
                <li>Indoor games: table tennis, badminton, chess</li>
                <li>Annual sports meet and inter-college tournaments</li>
              </ul>
            </div>

            {/* Activity 4: Leadership */}
            <div className="activity-card fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="activity-icon-wrapper">
                <Briefcase size={32} />
              </div>
              <h3>Leadership & Student Committees</h3>
              <p>
                Develop essential leadership qualities through student council, event management committees, and peer mentoring programs. Take charge, make decisions, and create lasting impact on campus.
              </p>
              <ul className="activity-highlights">
                <li>Student council and class representatives</li>
                <li>Event organizing and management teams</li>
                <li>Peer mentoring and buddy programs</li>
              </ul>
            </div>

            {/* Activity 5: Academic Competitions */}
            <div className="activity-card fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="activity-icon-wrapper">
                <BookOpen size={32} />
              </div>
              <h3>Academic Competitions & Workshops</h3>
              <p>
                Sharpen your skills through hackathons, case study competitions, research symposiums, and skill development workshops. Learn from industry experts and compete with the best minds.
              </p>
              <ul className="activity-highlights">
                <li>National-level hackathons and coding competitions</li>
                <li>Business case studies and model UN conferences</li>
                <li>Research paper presentations and innovation challenges</li>
              </ul>
            </div>

            {/* Activity 6: Community Engagement */}
            <div className="activity-card fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="activity-icon-wrapper">
                <Heart size={32} />
              </div>
              <h3>Community Engagement & Social Initiatives</h3>
              <p>
                Make a difference through social outreach programs, environmental campaigns, and community service projects. Develop empathy, social responsibility, and a commitment to positive change.
              </p>
              <ul className="activity-highlights">
                <li>Rural education and literacy programs</li>
                <li>Blood donation camps and health awareness drives</li>
                <li>Tree plantation and sustainability initiatives</li>
              </ul>
            </div>
          </div>

          {/* Campus Life Highlights Strip */}
          <div className="life-highlights-strip">
            <div className="highlight-item">
              <div className="highlight-number">30+</div>
              <div className="highlight-label">Active Clubs</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">50+</div>
              <div className="highlight-label">Annual Events</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">100%</div>
              <div className="highlight-label">Student Participation</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">15+</div>
              <div className="highlight-label">Sports Facilities</div>
            </div>
          </div>

          {/* Closing Paragraph */}
          <div className="student-life-closing">
            <p>
              These experiences transform students into confident, capable, and socially responsible individuals ready to lead in a global society. Through collaboration, creativity, and community engagement, our students don't just prepare for careers--they prepare for life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container-custom">
          <div className="cta-content">
            <h2>Want to Learn More?</h2>
            <p>Explore our programs, faculty, and achievements</p>
            <div className="cta-actions">
              <Link to="/courses" className="btn-primary-custom">
                View Courses
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary-custom">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div> {/* Close content-overlay */}
    </div>
  )
}

export default About
