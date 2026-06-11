import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Briefcase, MapPin, Calendar, Linkedin, Mail, Phone, Search, ChevronRight, GraduationCap, Heart, BookOpen, Globe, Star, MessageCircle } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const alumniData = [
  { id: 1, name: 'Rajesh Kumar', batch: 2015, program: 'Computer Science', position: 'CEO & Founder', company: 'InnovateTech Nepal', location: 'Kathmandu, Nepal', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', linkedin: '#', email: 'rajesh@example.com', achievements: 'Founded a tech startup with 50+ employees' },
  { id: 2, name: 'Priya Sharma', batch: 2016, program: 'Business Administration', position: 'Senior Product Manager', company: 'Google', location: 'Bangalore, India', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop', linkedin: '#', email: 'priya@example.com', achievements: 'Led product launch reaching 10M+ users' },
  { id: 3, name: 'Amit Patel', batch: 2014, program: 'Data Science', position: 'Data Science Lead', company: 'Microsoft', location: 'Seattle, USA', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', linkedin: '#', email: 'amit@example.com', achievements: 'Published 3 research papers in top AI conferences' },
  { id: 4, name: 'Sneha Reddy', batch: 2017, program: 'Biotechnology', position: 'Research Scientist', company: 'Biotech Corp', location: 'Hyderabad, India', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop', linkedin: '#', email: 'sneha@example.com', achievements: 'Patent holder for novel drug delivery system' },
  { id: 5, name: 'Arjun Singh', batch: 2013, program: 'Mechanical Engineering', position: 'Engineering Director', company: 'Tesla', location: 'Austin, USA', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop', linkedin: '#', email: 'arjun@example.com', achievements: 'Led team developing next-gen battery technology' },
  { id: 6, name: 'Divya Krishnan', batch: 2018, program: 'Psychology', position: 'Clinical Psychologist', company: 'MindCare Center', location: 'Chennai, India', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop', linkedin: '#', email: 'divya@example.com', achievements: 'Opened 3 mental health clinics across India' },
  { id: 7, name: 'Vikram Malhotra', batch: 2012, program: 'Business Administration', position: 'Managing Partner', company: 'Malhotra Ventures', location: 'Mumbai, India', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop', linkedin: '#', email: 'vikram@example.com', achievements: 'Investment portfolio worth $50M+' },
  { id: 8, name: 'Ananya Patel', batch: 2019, program: 'Arts & Humanities', position: 'Creative Director', company: 'Studio Ananya', location: 'New York, USA', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop', linkedin: '#', email: 'ananya@example.com', achievements: 'Featured in Forbes 30 Under 30' },
]

const successStories = [
  { name: 'Rajesh Kumar', story: 'From a small town in Syangja to founding a tech startup that now employs 50+ people across Nepal. Premier College gave me the foundation to dream big.', year: '2015 Batch' },
  { name: 'Priya Sharma', story: 'The practical learning approach and industry connections at Premier College helped me land my dream job at Google. Forever grateful!', year: '2016 Batch' },
  { name: 'Dr. Amit Patel', story: 'The research culture at Premier College ignited my passion for data science. Today, I lead teams at Microsoft working on cutting-edge AI solutions.', year: '2014 Batch' },
]

const events = [
  { title: 'Annual Alumni Meet 2026', date: 'June 15, 2026', location: 'College Campus', type: 'Reunion' },
  { title: 'Career Talk Series', date: 'April 20, 2026', location: 'Online', type: 'Webinar' },
  { title: 'Mentorship Program Launch', date: 'May 1, 2026', location: 'College Campus', type: 'Networking' },
  { title: 'Fundraising Gala', date: 'August 10, 2026', location: 'Kathmandu', type: 'Fundraiser' },
]

const jobs = [
  { title: 'Senior Software Engineer', company: 'TechCorp', location: 'Kathmandu', type: 'Full-time' },
  { title: 'Product Manager', company: 'Ecom Solutions', location: 'Remote', type: 'Full-time' },
  { title: 'Research Associate', company: 'BioLab Nepal', location: 'Lalitpur', type: 'Contract' },
]

const AlumniPortal = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [batchFilter, setBatchFilter] = useState('All')
  const [selectedAlumni, setSelectedAlumni] = useState(null)
  const [activeTab, setActiveTab] = useState('directory')

  const filteredAlumni = alumniData.filter(a => {
    const matchSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase()) || a.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchBatch = batchFilter === 'All' || a.batch.toString() === batchFilter
    return matchSearch && matchBatch
  })

  const batches = ['All', ...new Set(alumniData.map(a => a.batch.toString()))].sort()

  return (
    <div className="alumni-portal-page">
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
            <Users size={40} style={{ display: 'inline', marginRight: 12, verticalAlign: 'middle', color: '#f59e0b' }} />
            Alumni Network
          </motion.h1>
          <motion.p {...fadeUp} style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
            Connecting generations of excellence across the globe
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            <motion.div {...fadeUp} className="card-custom" style={{ textAlign: 'center' }}>
              <Users size={32} style={{ color: '#f59e0b' }} />
              <div style={{ fontSize: 28, fontWeight: 700, color: '#1a237e', margin: '8px 0' }}>10,000+</div>
              <div style={{ fontSize: 13, color: '#64748b' }}>Alumni Worldwide</div>
            </motion.div>
            <motion.div {...fadeUp} className="card-custom" style={{ textAlign: 'center' }}>
              <Briefcase size={32} style={{ color: '#f59e0b' }} />
              <div style={{ fontSize: 28, fontWeight: 700, color: '#1a237e', margin: '8px 0' }}>500+</div>
              <div style={{ fontSize: 13, color: '#64748b' }}>Companies</div>
            </motion.div>
            <motion.div {...fadeUp} className="card-custom" style={{ textAlign: 'center' }}>
              <MapPin size={32} style={{ color: '#f59e0b' }} />
              <div style={{ fontSize: 28, fontWeight: 700, color: '#1a237e', margin: '8px 0' }}>50+</div>
              <div style={{ fontSize: 13, color: '#64748b' }}>Countries</div>
            </motion.div>
            <motion.div {...fadeUp} className="card-custom" style={{ textAlign: 'center' }}>
              <Award size={32} style={{ color: '#f59e0b' }} />
              <div style={{ fontSize: 28, fontWeight: 700, color: '#1a237e', margin: '8px 0' }}>100+</div>
              <div style={{ fontSize: 13, color: '#64748b' }}>Industry Leaders</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div style={{ display: 'flex', gap: 12, marginBottom: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['directory', 'stories', 'events', 'jobs'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 24px', borderRadius: 24, border: '1px solid #e2e8f0', cursor: 'pointer', fontSize: 14, fontWeight: 500,
                  background: activeTab === tab ? '#1a237e' : 'white', color: activeTab === tab ? 'white' : '#475569',
                  display: 'flex', alignItems: 'center', gap: 8, textTransform: 'capitalize'
                }}>
                {tab === 'directory' && <Users size={16} />}
                {tab === 'stories' && <Star size={16} />}
                {tab === 'events' && <Calendar size={16} />}
                {tab === 'jobs' && <Briefcase size={16} />}
                {tab === 'directory' ? 'Alumni Directory' : tab === 'stories' ? 'Success Stories' : tab === 'events' ? 'Events & Reunions' : 'Job Board'}
              </button>
            ))}
          </div>

          {activeTab === 'directory' && (
            <>
              <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 250, position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input type="text" placeholder="Search alumni..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                    style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }} />
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {batches.map(b => (
                    <button key={b} onClick={() => setBatchFilter(b)}
                      style={{
                        padding: '8px 14px', borderRadius: 20, border: '1px solid #e2e8f0', cursor: 'pointer', fontSize: 13,
                        background: batchFilter === b ? '#1a237e' : 'white', color: batchFilter === b ? 'white' : '#475569'
                      }}>{b}</button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                {filteredAlumni.map((alumni, i) => (
                  <motion.div key={alumni.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="card-custom" style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedAlumni(selectedAlumni?.id === alumni.id ? null : alumni)}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
                      <img src={alumni.image} alt={alumni.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }} />
                      <div>
                        <h3 style={{ fontSize: 16, marginBottom: 2 }}>{alumni.name}</h3>
                        <p style={{ fontSize: 13, color: '#64748b' }}>{alumni.position}</p>
                        <p style={{ fontSize: 12, color: '#94a3b8' }}>{alumni.company}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#94a3b8' }}>
                      <span><GraduationCap size={12} /> Batch {alumni.batch}</span>
                      <span><MapPin size={12} /> {alumni.location}</span>
                    </div>
                    {selectedAlumni?.id === alumni.id && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
                        <p style={{ fontSize: 13, color: '#475569', marginBottom: 8 }}><Award size={14} style={{ marginRight: 4 }} /> {alumni.achievements}</p>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <a href={alumni.linkedin} className="btn-primary-custom" style={{ padding: '6px 14px', fontSize: 12 }}><Linkedin size={14} /> Connect</a>
                          <a href={`mailto:${alumni.email}`} style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none', color: '#475569' }}><Mail size={14} /> Email</a>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'stories' && (
            <div style={{ display: 'grid', gap: 20, maxWidth: 800, margin: '0 auto' }}>
              {successStories.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="card-custom" style={{ position: 'relative', paddingLeft: 80 }}>
                  <div style={{ position: 'absolute', left: 24, top: 24, color: '#f59e0b' }}>
                    <Heart size={32} />
                  </div>
                  <p style={{ fontSize: 15, color: '#475569', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 12 }}>"{s.story}"</p>
                  <div>
                    <strong style={{ fontSize: 14, color: '#1a237e' }}>{s.name}</strong>
                    <span style={{ fontSize: 12, color: '#94a3b8', marginLeft: 8 }}>{s.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {events.map((e, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="card-custom">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div style={{ background: '#fefce8', padding: '8px 12px', borderRadius: 8, textAlign: 'center', minWidth: 60 }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: '#f59e0b' }}>{e.date.split(' ')[1]?.replace(',', '')}</div>
                      <div style={{ fontSize: 12, color: '#a16207' }}>{e.date.split(' ')[0]}</div>
                    </div>
                    <span style={{ background: '#dbeafe', color: '#1d4ed8', padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{e.type}</span>
                  </div>
                  <h3 style={{ fontSize: 16 }}>{e.title}</h3>
                  <p style={{ fontSize: 13, color: '#64748b' }}><MapPin size={13} /> {e.location}</p>
                  <button className="btn-primary-custom" style={{ marginTop: 12, padding: '8px 16px', fontSize: 13 }}>RSVP <ChevronRight size={14} /></button>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'jobs' && (
            <div style={{ maxWidth: 600, margin: '0 auto' }}>
              <p style={{ color: '#64748b', fontSize: 14, marginBottom: 16 }}>Job postings shared by alumni for fellow alumni</p>
              {jobs.map((j, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="card-custom" style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: 16 }}>{j.title}</h3>
                      <p style={{ fontSize: 13, color: '#64748b' }}>{j.company}</p>
                    </div>
                    <span style={{ background: '#f0fdf4', color: '#16a34a', padding: '4px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{j.type}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 8 }}><MapPin size={13} /> {j.location}</p>
                  <button className="btn-primary-custom" style={{ marginTop: 8, padding: '6px 14px', fontSize: 12 }}>Apply Now</button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <motion.h2 {...fadeUp} style={{ color: '#f59e0b', marginBottom: 16 }}>Stay Connected</motion.h2>
          <motion.p {...fadeUp} style={{ color: '#94a3b8', maxWidth: 500, margin: '0 auto 24px' }}>
            Register to join the alumni network and stay updated with events, opportunities, and fellow alumni.
          </motion.p>
          <motion.div {...fadeUp} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary-custom" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a' }}
              onClick={() => window.location.href = '/contact'}>
              <Mail size={18} /> Register as Alumni
            </button>
            <button style={{ padding: '12px 24px', background: 'transparent', border: '2px solid #f59e0b', color: '#f59e0b', borderRadius: 50, fontWeight: 600, cursor: 'pointer' }}>
              <MessageCircle size={18} style={{ marginRight: 8 }} /> Join WhatsApp Group
            </button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div className="section-title" {...fadeUp}>
            <span className="badge-custom">Give Back</span>
            <h2>Alumni Contributions</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <motion.div {...fadeUp} className="card-custom" style={{ textAlign: 'center' }}>
              <Heart size={40} style={{ color: '#f59e0b', marginBottom: 12 }} />
              <h3 style={{ fontSize: 18 }}>Mentorship Program</h3>
              <p style={{ fontSize: 14, color: '#64748b' }}>Guide current students and recent graduates in their career journey</p>
            </motion.div>
            <motion.div {...fadeUp} className="card-custom" style={{ textAlign: 'center' }}>
              <BookOpen size={40} style={{ color: '#f59e0b', marginBottom: 12 }} />
              <h3 style={{ fontSize: 18 }}>Guest Lectures</h3>
              <p style={{ fontSize: 14, color: '#64748b' }}>Share your expertise through guest lectures and workshops</p>
            </motion.div>
            <motion.div {...fadeUp} className="card-custom" style={{ textAlign: 'center' }}>
              <Star size={40} style={{ color: '#f59e0b', marginBottom: 12 }} />
              <h3 style={{ fontSize: 18 }}>Scholarship Fund</h3>
              <p style={{ fontSize: 14, color: '#64748b' }}>Support deserving students through alumni-funded scholarships</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AlumniPortal
