import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, DollarSign, Users, CheckCircle, ChevronRight, Send, FileText, BookOpen, Award, Search } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const jobs = [
  { id: 1, title: 'Professor - Computer Science', department: 'Computer Science & Engineering', type: 'Full-time', location: 'Syangja, Nepal', posted: '2026-03-01', deadline: '2026-04-15', qualification: 'Ph.D. in CS/IT, 10+ years exp.', salary: 'Negotiable', description: 'We are seeking an experienced professor to lead our Computer Science department. The ideal candidate will have a strong research background and teaching experience.' },
  { id: 2, title: 'Associate Professor - Mathematics', department: 'Science & Humanities', type: 'Full-time', location: 'Syangja, Nepal', posted: '2026-03-05', deadline: '2026-04-20', qualification: 'Ph.D. in Mathematics, 8+ years exp.', salary: 'Negotiable', description: 'Looking for a dedicated mathematics professor to teach undergraduate and graduate courses.' },
  { id: 3, title: 'Assistant Professor - Business Administration', department: 'Management', type: 'Full-time', location: 'Syangja, Nepal', posted: '2026-03-10', deadline: '2026-04-25', qualification: 'MBA/Ph.D., 5+ years exp.', salary: 'Negotiable', description: 'Join our management faculty and help shape the next generation of business leaders.' },
  { id: 4, title: 'Lab Technician - Biotechnology', department: 'Biotechnology', type: 'Full-time', location: 'Syangja, Nepal', posted: '2026-03-08', deadline: '2026-04-10', qualification: 'M.Sc. in Biotech, 3+ years exp.', salary: 'Competitive', description: 'Manage and maintain our advanced biotechnology laboratory facilities.' },
  { id: 5, title: 'Administrative Officer', department: 'Administration', type: 'Full-time', location: 'Syangja, Nepal', posted: '2026-02-28', deadline: '2026-03-30', qualification: 'Bachelor\'s degree, 5+ years exp.', salary: 'Competitive', description: 'Handle administrative operations, coordination, and office management.' },
  { id: 6, title: 'Sports Coach', department: 'Physical Education', type: 'Part-time', location: 'Syangja, Nepal', posted: '2026-03-12', deadline: '2026-04-05', qualification: 'BPEd/MPEd, coaching certification', salary: 'Hourly basis', description: 'Coach and train students in various sports disciplines.' },
]

const benefits = [
  { icon: <Award size={24} />, title: 'Career Growth', desc: 'Regular promotions and professional development programs' },
  { icon: <BookOpen size={24} />, title: 'Research Support', desc: 'Funding for conferences, publications, and research projects' },
  { icon: <DollarSign size={24} />, title: 'Competitive Salary', desc: 'Attractive compensation package with annual increments' },
  { icon: <Users size={24} />, title: 'Collaborative Environment', desc: 'Work with talented colleagues in a supportive atmosphere' },
]

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedJob, setSelectedJob] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', coverLetter: '' })

  const filteredJobs = jobs.filter(j =>
    j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    j.department.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your application! We will review it and get back to you soon.')
    setShowForm(false)
    setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '' })
  }

  return (
    <div className="careers-page">
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
            <Briefcase size={40} style={{ display: 'inline', marginRight: 12, verticalAlign: 'middle', color: '#f59e0b' }} />
            Careers at Premier College
          </motion.h1>
          <motion.p {...fadeUp} style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
            Join our team of dedicated educators and professionals shaping the future of education
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div className="section-title" {...fadeUp}>
            <span className="badge-custom">Why Join Us</span>
            <h2>Benefits & Culture</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-custom" style={{ textAlign: 'center' }}>
                <div style={{ color: '#f59e0b', marginBottom: 12 }}>{b.icon}</div>
                <h3 style={{ fontSize: 18 }}>{b.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div className="section-title" {...fadeUp}>
            <span className="badge-custom">Openings</span>
            <h2>Current Job Openings</h2>
            <p>{jobs.length} positions available</p>
          </motion.div>

          <div style={{ maxWidth: 400, margin: '0 auto 2rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type="text" placeholder="Search positions..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }} />
            </div>
          </div>

          <div style={{ display: 'grid', gap: 16 }}>
            {filteredJobs.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="card-custom" style={{ cursor: 'pointer' }}
                onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 18, marginBottom: 4, color: '#1a237e' }}>{job.title}</h3>
                    <p style={{ color: '#64748b', fontSize: 14 }}>{job.department}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ background: '#dbeafe', color: '#1d4ed8', padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{job.type}</span>
                    <span style={{ background: '#fefce8', color: '#a16207', padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{job.salary}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap', fontSize: 13, color: '#64748b' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={14} /> {job.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={14} /> Posted: {job.posted}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><FileText size={14} /> Deadline: {job.deadline}</span>
                </div>

                {selectedJob?.id === job.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: 14, marginBottom: 8 }}>Job Description</h4>
                    <p style={{ fontSize: 14, color: '#475569', marginBottom: 12 }}>{job.description}</p>
                    <p style={{ fontSize: 14, color: '#475569', marginBottom: 16 }}><strong>Qualifications:</strong> {job.qualification}</p>
                    <button className="btn-primary-custom" onClick={(e) => { e.stopPropagation(); setShowForm(true) }}>
                      Apply Now <ChevronRight size={18} />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {showForm && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20
        }} onClick={() => setShowForm(false)}>
          <div style={{ background: 'white', borderRadius: 16, padding: 32, maxWidth: 500, width: '100%', maxHeight: '90vh', overflow: 'auto' }} onClick={e => e.stopPropagation()}>
            <h2 style={{ fontSize: 24, marginBottom: 8 }}>Apply for Position</h2>
            <p style={{ color: '#64748b', fontSize: 14, marginBottom: 24 }}>Fill in your details and we'll get back to you.</p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4, color: '#475569' }}>Full Name *</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4, color: '#475569' }}>Email *</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4, color: '#475569' }}>Phone *</label>
                <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4, color: '#475569' }}>Position *</label>
                <select required value={formData.position} onChange={e => setFormData({...formData, position: e.target.value})}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }}>
                  <option value="">Select position</option>
                  {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4, color: '#475569' }}>Cover Letter</label>
                <textarea rows={4} value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14, resize: 'vertical' }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4, color: '#475569' }}>Upload CV (Simulation)</label>
                <input type="file" accept=".pdf,.doc,.docx"
                  style={{ width: '100%', padding: '10px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }} />
              </div>
              <button type="submit" className="btn-primary-custom" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={18} /> Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="section-padding" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <motion.h2 {...fadeUp} style={{ color: '#f59e0b', marginBottom: 16 }}>Don't See the Right Role?</motion.h2>
          <motion.p {...fadeUp} style={{ color: '#94a3b8', maxWidth: 500, margin: '0 auto 24px' }}>
            We're always looking for talented individuals. Send us your CV and we'll keep you in mind for future opportunities.
          </motion.p>
          <motion.button {...fadeUp} className="btn-primary-custom" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a' }}
            onClick={() => window.location.href = '/contact'}
          >
            Send Open Application <ChevronRight size={18} />
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Careers
