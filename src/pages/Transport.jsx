import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bus, MapPin, Clock, Users, Shield, ChevronRight, Phone, DollarSign, Route, Search, CheckCircle } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const routes = [
  { id: 1, name: 'Route A: Syangja Bazaar', stops: ['College Main Gate', 'Syangja Bus Park', 'Old Bazaar', 'Hospital Chowk', 'Lakeside'], timing: '7:30 AM - 5:00 PM', buses: 3, driver: 'Ram Bahadur', phone: '9800000101' },
  { id: 2, name: 'Route B: Pokhara Highway', stops: ['College Main Gate', 'Prithvi Chowk', 'Baglung Bus Park', 'Seti Bridge', 'Mahendra Pul'], timing: '7:00 AM - 5:30 PM', buses: 4, driver: 'Shyam Thapa', phone: '9800000102' },
  { id: 3, name: 'Route C: Waling Area', stops: ['College Main Gate', 'Waling Bazaar', 'Chapakot', 'Bhirkot', 'Kabilas'], timing: '7:15 AM - 4:45 PM', buses: 2, driver: 'Hari Adhikari', phone: '9800000103' },
  { id: 4, name: 'Route D: Putalibazar', stops: ['College Main Gate', 'Putalibazar Chowk', 'Chandrakot', 'Paleni', 'Shreenagar'], timing: '7:00 AM - 5:00 PM', buses: 3, driver: 'Krishna Rai', phone: '9800000104' },
  { id: 5, name: 'Route E: Tansen Corridor', stops: ['College Main Gate', 'Tansen Bus Stop', 'Ridi Bazaar', 'Satyawati', 'Rampur'], timing: '6:45 AM - 5:30 PM', buses: 2, driver: 'Mohan Gurung', phone: '9800000105' },
]

const safetyFeatures = [
  'GPS tracking on all buses',
  'CCTV cameras installed',
  'Female conductors on all routes',
  'Speed governors for safety',
  'Regular vehicle maintenance',
  'Emergency contact system',
]

const Transport = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeRoute, setActiveRoute] = useState(null)

  const filteredRoutes = routes.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.stops.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="transport-page">
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
            <Bus size={40} style={{ display: 'inline', marginRight: 12, verticalAlign: 'middle', color: '#f59e0b' }} />
            Transport Management
          </motion.h1>
          <motion.p {...fadeUp} style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
            Safe, reliable, and punctual transportation for all students and staff
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div className="section-title" {...fadeUp}>
            <span className="badge-custom">Routes</span>
            <h2>Bus Routes & Schedules</h2>
            <p>Comprehensive coverage across the region</p>
          </motion.div>

          <div style={{ maxWidth: 400, margin: '0 auto 2rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search routes or stops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 24 }}>
            {filteredRoutes.map((route, i) => (
              <motion.div key={route.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-custom" style={{ cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => setActiveRoute(activeRoute?.id === route.id ? null : route)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 18, marginBottom: 4 }}>{route.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 13 }}>
                      <Bus size={14} /> {route.buses} Buses
                    </div>
                  </div>
                  <div style={{ background: '#dbeafe', color: '#1d4ed8', padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} /> {route.timing}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', borderRadius: 8, padding: 12, marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, color: '#64748b', fontSize: 12 }}>
                    <MapPin size={14} /> Route Stops:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {route.stops.map((stop, si) => (
                      <span key={si} style={{
                        background: 'white', padding: '4px 10px', borderRadius: 20, fontSize: 12,
                        border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 4
                      }}>
                        {stop}
                        {si < route.stops.length - 1 && <ChevronRight size={10} style={{ color: '#94a3b8' }} />}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#64748b' }}>
                  <Users size={14} /> Driver: {route.driver}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#64748b', marginTop: 4 }}>
                  <Phone size={14} /> {route.phone}
                </div>

                {activeRoute?.id === route.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
                    <div style={{ background: '#fefce8', borderRadius: 8, padding: 12, border: '1px solid #fde68a' }}>
                      <h4 style={{ fontSize: 14, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Route size={14} style={{ color: '#f59e0b' }} /> Route Map Simulation
                      </h4>
                      <div style={{ position: 'relative', paddingLeft: 20 }}>
                        {route.stops.map((stop, si) => (
                          <div key={si} style={{ position: 'relative', padding: '4px 0 4px 16px', fontSize: 12, color: '#475569' }}>
                            <div style={{ position: 'absolute', left: 0, top: 8, width: 8, height: 8, borderRadius: '50%', background: si === 0 ? '#16a34a' : si === route.stops.length - 1 ? '#dc2626' : '#f59e0b' }} />
                            {si < route.stops.length - 1 && (
                              <div style={{ position: 'absolute', left: 3.5, top: 16, width: 1, height: 20, background: '#e2e8f0' }} />
                            )}
                            {stop} {si === 0 ? '(Start)' : si === route.stops.length - 1 ? '(End)' : ''}
                          </div>
                        ))}
                      </div>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 40 }}>
            <motion.div {...fadeUp}>
              <div className="section-title" style={{ textAlign: 'left', marginBottom: 24 }}>
                <span className="badge-custom">Safety</span>
                <h2>Safety & Security</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                {safetyFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 12, background: 'white', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                    <Shield size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
                    <span style={{ fontSize: 13 }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <div className="section-title" style={{ textAlign: 'left', marginBottom: 24 }}>
                <span className="badge-custom">Fees</span>
                <h2>Transport Fee</h2>
              </div>
              <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Distance</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Annual Fee</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: 14 }}>Up to 5 km</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#1a237e' }}>Rs. 8,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: 14 }}>5 - 15 km</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#1a237e' }}>Rs. 12,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px' }}>
                  <span style={{ fontSize: 14 }}>Above 15 km</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#1a237e' }}>Rs. 18,000</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <motion.h2 {...fadeUp} style={{ color: '#f59e0b', marginBottom: 16 }}>Need Transport Services?</motion.h2>
          <motion.p {...fadeUp} style={{ color: '#94a3b8', maxWidth: 500, margin: '0 auto 24px' }}>
            Register for transport services during admission or contact our transport department.
          </motion.p>
          <motion.button {...fadeUp} className="btn-primary-custom" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a' }}
            onClick={() => window.location.href = '/contact'}
          >
            Contact Transport Dept <ChevronRight size={18} />
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default Transport
