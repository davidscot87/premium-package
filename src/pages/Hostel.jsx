import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, MapPin, Shield, Wifi, Coffee, Utensils, Dumbbell, ChevronRight, CheckCircle, Phone, Mail, AlertCircle, Search, X } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const buildings = [
  { id: 1, name: 'A-Block (Boys)', floors: 4, rooms: 40, capacity: 80, occupied: 72, warden: 'Mr. Ram Sharma', phone: '9800000001', email: 'ablock@premier.edu' },
  { id: 2, name: 'B-Block (Boys)', floors: 3, rooms: 30, capacity: 60, occupied: 55, warden: 'Mr. Suresh Thapa', phone: '9800000002', email: 'bblock@premier.edu' },
  { id: 3, name: 'C-Block (Girls)', floors: 4, rooms: 36, capacity: 72, occupied: 68, warden: 'Ms. Anju Poudel', phone: '9800000003', email: 'cblock@premier.edu' },
  { id: 4, name: 'D-Block (Girls)', floors: 3, rooms: 24, capacity: 48, occupied: 42, warden: 'Ms. Sunita Rai', phone: '9800000004', email: 'dblock@premier.edu' },
]

const amenities = [
  { icon: <Wifi size={24} />, title: 'High-Speed WiFi', desc: '24/7 internet connectivity across all blocks' },
  { icon: <Shield size={24} />, title: '24/7 Security', desc: 'CCTV surveillance and security personnel' },
  { icon: <Coffee size={24} />, title: 'Common Room', desc: 'Recreation area with TV and games' },
  { icon: <Utensils size={24} />, title: 'Mess Facility', desc: 'Nutritious meals three times a day' },
  { icon: <Dumbbell size={24} />, title: 'Gym & Sports', desc: 'Indoor gym and outdoor sports facilities' },
  { icon: <MapPin size={24} />, title: 'Prime Location', desc: 'Within walking distance to academic blocks' },
]

const fees = [
  { item: 'Hostel Admission Fee', amount: 'Rs. 5,000' },
  { item: 'Room Rent (per year)', amount: 'Rs. 40,000' },
  { item: 'Mess Fee (per month)', amount: 'Rs. 5,000' },
  { item: 'Security Deposit (refundable)', amount: 'Rs. 10,000' },
  { item: 'Utility Charges (per year)', amount: 'Rs. 8,000' },
]

const rules = [
  'Students must maintain discipline and follow hostel timings (6:00 PM curfew)',
  'Visitors allowed only in common rooms with prior warden permission',
  'No overnight guests without written parental consent',
  'Consumption of alcohol, tobacco, or any intoxicants is strictly prohibited',
  'Students are responsible for their personal belongings',
  'Quiet hours from 10:00 PM to 6:00 AM must be observed',
  'Room allocation is done by the hostel administration',
  'Any damage to hostel property will be recovered from the concerned student',
]

const Hostel = () => {
  const [selectedBlock, setSelectedBlock] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBuildings = buildings.filter(b =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="hostel-page">
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
            <Building2 size={40} style={{ display: 'inline', marginRight: 12, verticalAlign: 'middle', color: '#f59e0b' }} />
            Hostel Management
          </motion.h1>
          <motion.p {...fadeUp} style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
            Safe, comfortable, and affordable accommodation for all students
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div className="section-title" {...fadeUp}>
            <span className="badge-custom">Overview</span>
            <h2>Hostel Blocks</h2>
            <p>Choose from our well-maintained hostel blocks</p>
          </motion.div>

          <div style={{ maxWidth: 400, margin: '0 auto 2rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search blocks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }}
              />
            </div>
          </div>

          <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {filteredBuildings.map((block, i) => (
              <motion.div key={block.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-custom" style={{ cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => setSelectedBlock(selectedBlock?.id === block.id ? null : block)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: 20, marginBottom: 4 }}>{block.name}</h3>
                    <p style={{ color: '#64748b', fontSize: 14 }}>{block.floors} Floors | {block.rooms} Rooms</p>
                  </div>
                  <div style={{
                    background: block.occupied / block.capacity > 0.9 ? '#fee2e2' : '#dcfce7',
                    color: block.occupied / block.capacity > 0.9 ? '#dc2626' : '#16a34a',
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600
                  }}>
                    {block.capacity - block.occupied} Vacant
                  </div>
                </div>
                <div style={{ background: '#f8fafc', borderRadius: 8, padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: '#64748b' }}>Capacity: {block.capacity} students</span>
                    <span style={{ fontSize: 13, color: '#64748b' }}>Occupied: {block.occupied}</span>
                  </div>
                  <div style={{ height: 8, background: '#e2e8f0', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(block.occupied / block.capacity) * 100}%`, background: 'linear-gradient(90deg, #1a237e, #f59e0b)', borderRadius: 4, transition: 'width 0.5s' }} />
                  </div>
                </div>
                <div style={{ marginTop: 12, fontSize: 13, color: '#64748b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <Users size={14} /> Warden: {block.warden}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Phone size={14} /> {block.phone}
                  </div>
                </div>
                {selectedBlock?.id === block.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #e2e8f0' }}>
                    <p style={{ fontSize: 14, color: '#64748b', marginBottom: 8 }}><Mail size={14} style={{ marginRight: 6 }} />{block.email}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 8 }}>
                      {Array.from({ length: block.floors }, (_, f) => (
                        <div key={f} style={{
                          padding: '8px 12px', background: '#f1f5f9', borderRadius: 6, textAlign: 'center', fontSize: 12
                        }}>
                          Floor {f + 1}: {block.rooms / block.floors} rooms
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div className="section-title" {...fadeUp}>
            <span className="badge-custom">Amenities</span>
            <h2>Facilities We Provide</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {amenities.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="card-custom" style={{ textAlign: 'center' }}>
                <div style={{ color: '#f59e0b', marginBottom: 12 }}>{a.icon}</div>
                <h3 style={{ fontSize: 18 }}>{a.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 40 }}>
            <motion.div {...fadeUp}>
              <div className="section-title" style={{ textAlign: 'left', marginBottom: 24 }}>
                <span className="badge-custom">Fee Structure</span>
                <h2>Hostel Fees</h2>
              </div>
              <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                {fees.map((f, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', padding: '14px 20px',
                    borderBottom: i < fees.length - 1 ? '1px solid #e2e8f0' : 'none',
                    background: i === 0 ? '#f8fafc' : 'white'
                  }}>
                    <span style={{ fontSize: 14, color: '#475569' }}>{f.item}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#1a237e' }}>{f.amount}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <div className="section-title" style={{ textAlign: 'left', marginBottom: 24 }}>
                <span className="badge-custom">Rules</span>
                <h2>Hostel Guidelines</h2>
              </div>
              <div style={{ background: '#fefce8', borderRadius: 12, padding: 24, border: '1px solid #fde68a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <AlertCircle size={20} style={{ color: '#f59e0b' }} />
                  <h3 style={{ fontSize: 16, margin: 0 }}>Important Rules & Regulations</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {rules.map((r, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, padding: '6px 0', fontSize: 13, color: '#475569', borderBottom: i < rules.length - 1 ? '1px dashed #fde68a' : 'none' }}>
                      <CheckCircle size={16} style={{ color: '#f59e0b', flexShrink: 0, marginTop: 2 }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <motion.h2 {...fadeUp} style={{ color: '#f59e0b', marginBottom: 16 }}>Apply for Hostel</motion.h2>
          <motion.p {...fadeUp} style={{ color: '#94a3b8', maxWidth: 500, margin: '0 auto 24px' }}>
            Fill out the online hostel application form. Our team will contact you within 24 hours.
          </motion.p>
          <motion.button {...fadeUp} className="btn-primary-custom" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', border: 'none' }}
            onClick={() => window.location.href = '/admissions'}
          >
            Apply for Hostel <ChevronRight size={18} />
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Hostel
