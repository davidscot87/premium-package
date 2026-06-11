import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import DashboardLayout from '../../components/DashboardLayout'
import ProfilePictureUpload from '../../components/ProfilePictureUpload'
import { User, Mail, Phone, Award, BookOpen, Save, Camera, ShieldCheck, MapPin, Calendar } from 'lucide-react'
import '../student/StudentDashboard.css'

const TeacherProfile = () => {
  const { user } = useAuth()
  const [showUploadModal, setShowUploadModal] = useState(false)
  
  const getEmail = () => {
    const raw = user?.email || ''
    if (raw.includes('@')) return raw
    const name = user?.name || 'faculty'
    return name.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z.]/g, '') + '@premiercollege.edu'
  }

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: getEmail(),
    phone: '+1 (555) 123-4567',
    address: '123 Education Street, City, State 12345',
    department: 'Computer Science',
    qualification: 'Ph.D. in Computer Science',
    specialization: 'Artificial Intelligence & Machine Learning',
    experience: '12 years',
    joiningDate: '2012-08-15',
    subjects: 'Data Structures, Algorithms, Machine Learning',
    bio: 'Passionate educator with over a decade of experience in computer science education. Specialized in AI/ML and committed to fostering innovation in students.'
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Profile updated successfully!')
  }

  return (
    <DashboardLayout role="teacher">
      <div className="ent-page">
        {/* Faculty Header Banner */}
        <div className="ent-welcome-banner profile-header-mode">
          <div className="ent-welcome-left">
             <div className="ent-welcome-avatar profile-avatar-lg">
               <img 
                 src={user?.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'Teacher')}&size=300&background=1e1b4b&color=fff&bold=true&font-size=0.4`} 
                 alt={`${formData.name} profile`}
               />
               <button 
                 className="avatar-edit-btn"
                 onClick={() => setShowUploadModal(true)}
                 title="Change Profile Picture"
               >
                 <Camera size={18} />
               </button>
             </div>
             <div className="profile-header-info">
               <h1 className="ent-welcome-name">{formData.name || 'Faculty Member'}</h1>
               <div className="profile-header-badges">
                 <span className="profile-badge"><ShieldCheck size={14} /> {user?.employeeId || 'FCLT-2024'}</span>
               </div>
             </div>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="dashboard-grid-2 profile-layout-grid">
          
          {/* Overview Card */}
          <div className="fac-overview-card">
            {/* Stats row */}
            <div className="fac-stats-row">
              <div className="fac-stat">
                <span className="fac-stat-val">3</span>
                <span className="fac-stat-label">Courses</span>
              </div>
              <div className="fac-stat-divider" />
              <div className="fac-stat">
                <span className="fac-stat-val">245</span>
                <span className="fac-stat-label">Students</span>
              </div>
              <div className="fac-stat-divider" />
              <div className="fac-stat">
                <span className="fac-stat-val">12</span>
                <span className="fac-stat-label">Years Exp.</span>
              </div>
              <div className="fac-stat-divider" />
              <div className="fac-stat">
                <span className="fac-stat-val">4.9</span>
                <span className="fac-stat-label">Rating</span>
              </div>
            </div>

            {/* Contact details */}
            <div className="fac-info-list">
              <div className="fac-info-item">
                <div className="fac-info-icon"><Mail size={15} /></div>
                <div className="fac-info-body">
                  <span className="fac-info-label">Email</span>
                  <a href={`mailto:${formData.email}`} className="fac-info-val fac-email-link">{formData.email}</a>
                </div>
              </div>
              <div className="fac-info-item">
                <div className="fac-info-icon"><Phone size={15} /></div>
                <div className="fac-info-body">
                  <span className="fac-info-label">Phone</span>
                  <span className="fac-info-val">{formData.phone}</span>
                </div>
              </div>
              <div className="fac-info-item">
                <div className="fac-info-icon"><MapPin size={15} /></div>
                <div className="fac-info-body">
                  <span className="fac-info-label">Location</span>
                  <span className="fac-info-val">{formData.address}</span>
                </div>
              </div>
              <div className="fac-info-item">
                <div className="fac-info-icon"><Calendar size={15} /></div>
                <div className="fac-info-body">
                  <span className="fac-info-label">Joined</span>
                  <span className="fac-info-val">{formData.joiningDate}</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="fac-bio">
              <p className="fac-bio-label">About</p>
              <p className="fac-bio-text">{formData.bio}</p>
            </div>
          </div>

          {/* Edit Information Form */}
          <form onSubmit={handleSubmit} className="dashboard-card profile-main-card form-only-card">
             <div className="section-block">
               <div className="card-header border-none">
                 <div className="card-title-group">
                   <User size={20} />
                   <h2>Personal Details</h2>
                 </div>
               </div>
               <div className="form-grid-layout">
                 <div className="form-group">
                   <label>Full Name</label>
                   <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                 </div>
                 <div className="form-group">
                   <label>Phone Number</label>
                   <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                 </div>
                 <div className="form-group span-full">
                   <label>Address</label>
                   <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                 </div>
               </div>
             </div>
             
             <div className="section-block">
               <div className="card-header border-none">
                 <div className="card-title-group">
                   <Award size={20} />
                   <h2>Academic Credentials</h2>
                 </div>
               </div>
               <div className="form-grid-layout">
                 <div className="form-group">
                   <label>Department</label>
                   <select name="department" value={formData.department} onChange={handleChange}>
                     <option>Computer Science</option>
                     <option>Mathematics</option>
                     <option>Physics</option>
                   </select>
                 </div>
                 <div className="form-group">
                   <label>Qualification</label>
                   <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
                 </div>
                 <div className="form-group span-full">
                   <label>Subjects Teaching</label>
                   <input type="text" name="subjects" value={formData.subjects} onChange={handleChange} required />
                 </div>
               </div>
             </div>

            <div className="form-actions-row bg-soft">
              <button type="button" className="ent-qa-btn secondary">Discard Changes</button>
              <button type="submit" className="ent-qa-btn primary">
                <Save size={18} /> Save Master Profile
              </button>
            </div>
          </form>
        </div>
      </div>

      {showUploadModal && (
        <ProfilePictureUpload
          currentPicture={user?.profilePicture}
          onClose={() => setShowUploadModal(false)}
        />
      )}
    </DashboardLayout>
  )
}

export default TeacherProfile
