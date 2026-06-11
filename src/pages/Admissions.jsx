import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, Calendar, CheckCircle, ArrowRight, User, Mail, Phone, 
  MapPin, GraduationCap, Upload, BookOpen, Users, Award, 
  AlertCircle, Download, Clock, IndianRupee
} from 'lucide-react'
import './Admissions.css'

const Admissions = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    alternatePhone: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    
    // Academic Information
    course: '',
    previousSchool: '',
    boardName: '',
    passingYear: '',
    percentage: '',
    subjects: '',
    
    // Parent/Guardian Information
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    
    // Documents
    photo: null,
    marksheet: null,
    transferCertificate: null,
    aadharCard: null,
    casteCertificate: null
  })

  const courses = [
    { id: 1, name: 'Computer Science & Engineering', duration: '4 Years', category: 'Engineering' },
    { id: 2, name: 'Business Administration', duration: '3 Years', category: 'Commerce' },
    { id: 3, name: 'Biotechnology', duration: '4 Years', category: 'Science' },
    { id: 4, name: 'Arts & Humanities', duration: '3 Years', category: 'Arts' },
    { id: 5, name: 'Mechanical Engineering', duration: '4 Years', category: 'Engineering' },
    { id: 6, name: 'Civil Engineering', duration: '4 Years', category: 'Engineering' },
    { id: 7, name: 'Electronics & Communication', duration: '4 Years', category: 'Engineering' },
    { id: 8, name: 'MBA', duration: '2 Years', category: 'Management' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Application submitted successfully! We will contact you soon.')
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="admissions-page">
      {/* Hero Section - Fixed Background */}
      <section 
        className="page-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=2400&h=1600&fit=crop&q=85&auto=format)`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Admissions 2026-27</h1>
            <p>Begin Your Journey to Excellence</p>
            <div className="hero-stats">
              <div className="stat-item">
                <Users size={32} />
                <strong>1200+</strong>
                <span>Students Enrolled</span>
              </div>
              <div className="stat-item">
                <GraduationCap size={32} />
                <strong>15+</strong>
                <span>Programs Offered</span>
              </div>
              <div className="stat-item">
                <Award size={32} />
                <strong>100%</strong>
                <span>Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Spacer - Creates Scroll Space */}
      <div className="hero-spacer"></div>

      {/* Content Overlay - Slides Over Hero */}
      <div className="content-overlay">
        {/* Important Dates */}
        <section className="important-dates section-padding bg-light">
        <div className="container-custom">
          <div className="section-title">
            <span className="badge-custom">Timeline</span>
            <h2>Important Dates</h2>
          </div>
          <div className="dates-grid">
            <div className="date-card">
              <Calendar size={40} />
              <h3>Application Start</h3>
              <p className="date">January 15, 2026</p>
              <span className="status open">Open Now</span>
            </div>
            <div className="date-card">
              <Calendar size={40} />
              <h3>Application Deadline</h3>
              <p className="date">June 30, 2026</p>
              <span className="status upcoming">Upcoming</span>
            </div>
            <div className="date-card">
              <Calendar size={40} />
              <h3>Entrance Exam</h3>
              <p className="date">July 15, 2026</p>
              <span className="status upcoming">Upcoming</span>
            </div>
            <div className="date-card">
              <Calendar size={40} />
              <h3>Results Announcement</h3>
              <p className="date">July 30, 2026</p>
              <span className="status upcoming">Upcoming</span>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="eligibility section-padding">
        <div className="container-custom">
          <div className="eligibility-wrapper">
            <div className="eligibility-content">
              <span className="badge-custom">Requirements</span>
              <h2>Eligibility Criteria</h2>
              <div className="criteria-list">
                <div className="criteria-item">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Academic Qualification</h4>
                    <p>Minimum 60% in 10+2 or equivalent examination</p>
                  </div>
                </div>
                <div className="criteria-item">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Age Limit</h4>
                    <p>Candidates should be between 17-25 years of age</p>
                  </div>
                </div>
                <div className="criteria-item">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Entrance Exam</h4>
                    <p>Qualify in college entrance test or national level exams</p>
                  </div>
                </div>
                <div className="criteria-item">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Documents Required</h4>
                    <p>Valid ID proof, academic certificates, and photographs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="eligibility-image">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=1000&fit=crop&q=85&auto=format" alt="Students" />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-form section-padding bg-light">
        <div className="container-custom">
          <div className="section-title">
            <span className="badge-custom">Apply Now</span>
            <h2>Online Application Form</h2>
            <p>Fill in your details to start your admission process</p>
          </div>

          {/* Progress Steps */}
          <div className="form-progress">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
              <div className="step-circle">
                {currentStep > 1 ? <CheckCircle size={24} /> : '1'}
              </div>
              <span>Personal Info</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
              <div className="step-circle">
                {currentStep > 2 ? <CheckCircle size={24} /> : '2'}
              </div>
              <span>Academic Details</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
              <div className="step-circle">
                {currentStep > 3 ? <CheckCircle size={24} /> : '3'}
              </div>
              <span>Parent/Guardian</span>
            </div>
            <div className="progress-line"></div>
            <div className={`progress-step ${currentStep >= 4 ? 'active' : ''}`}>
              <div className="step-circle">4</div>
              <span>Documents</span>
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleSubmit} className="admission-form">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <h3 className="step-title">
                  <User size={24} />
                  Personal Information
                </h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Middle Name</label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      placeholder="Enter middle name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter last name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth <span className="required">*</span></label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender <span className="required">*</span></label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Email Address <span className="required">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label>Alternate Phone</label>
                    <input
                      type="tel"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Address <span className="required">*</span></label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="Enter complete address"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>City <span className="required">*</span></label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter city"
                    />
                  </div>
                  <div className="form-group">
                    <label>State <span className="required">*</span></label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter state"
                    />
                  </div>
                  <div className="form-group">
                    <label>Pincode <span className="required">*</span></label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter pincode"
                    />
                  </div>
                  <div className="form-group">
                    <label>Country <span className="required">*</span></label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Academic Information */}
            {currentStep === 2 && (
              <div className="form-step">
                <h3 className="step-title">
                  <BookOpen size={24} />
                  Academic Information
                </h3>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Select Course <span className="required">*</span></label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose your program</option>
                      {courses.map(course => (
                        <option key={course.id} value={course.name}>
                          {course.name} ({course.duration}) - {course.category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label>Previous School/College Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter institution name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Board/University <span className="required">*</span></label>
                    <input
                      type="text"
                      name="boardName"
                      value={formData.boardName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., CBSE, ICSE, State Board"
                    />
                  </div>
                  <div className="form-group">
                    <label>Year of Passing <span className="required">*</span></label>
                    <input
                      type="number"
                      name="passingYear"
                      value={formData.passingYear}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., 2025"
                      min="2015"
                      max="2026"
                    />
                  </div>
                  <div className="form-group">
                    <label>Percentage/CGPA <span className="required">*</span></label>
                    <input
                      type="text"
                      name="percentage"
                      value={formData.percentage}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., 85% or 8.5 CGPA"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>Subjects Studied <span className="required">*</span></label>
                    <input
                      type="text"
                      name="subjects"
                      value={formData.subjects}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Physics, Chemistry, Mathematics, English"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Parent/Guardian Information */}
            {currentStep === 3 && (
              <div className="form-step">
                <h3 className="step-title">
                  <Users size={24} />
                  Parent/Guardian Information
                </h3>
                <div className="form-grid">
                  <h4 className="subsection-title">Father's Details</h4>
                  <div className="form-group">
                    <label>Father's Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter father's name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Occupation <span className="required">*</span></label>
                    <input
                      type="text"
                      name="fatherOccupation"
                      value={formData.fatherOccupation}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter occupation"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      name="fatherPhone"
                      value={formData.fatherPhone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <h4 className="subsection-title">Mother's Details</h4>
                  <div className="form-group">
                    <label>Mother's Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter mother's name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Occupation <span className="required">*</span></label>
                    <input
                      type="text"
                      name="motherOccupation"
                      value={formData.motherOccupation}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter occupation"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      name="motherPhone"
                      value={formData.motherPhone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <h4 className="subsection-title">Guardian Details (If Applicable)</h4>
                  <div className="form-group">
                    <label>Guardian's Name</label>
                    <input
                      type="text"
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleInputChange}
                      placeholder="Enter guardian's name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Relation</label>
                    <input
                      type="text"
                      name="guardianRelation"
                      value={formData.guardianRelation}
                      onChange={handleInputChange}
                      placeholder="e.g., Uncle, Aunt"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Document Upload */}
            {currentStep === 4 && (
              <div className="form-step">
                <h3 className="step-title">
                  <Upload size={24} />
                  Upload Documents
                </h3>
                <div className="upload-info">
                  <AlertCircle size={20} />
                  <p>Please upload clear scanned copies or photos of the following documents (PDF, JPG, PNG - Max 2MB each)</p>
                </div>
                <div className="form-grid">
                  <div className="form-group upload-group">
                    <label>Passport Size Photo <span className="required">*</span></label>
                    <div className="file-upload">
                      <input
                        type="file"
                        name="photo"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                        id="photo"
                      />
                      <label htmlFor="photo" className="file-label">
                        <Upload size={20} />
                        {formData.photo ? formData.photo.name : 'Choose file'}
                      </label>
                    </div>
                  </div>
                  <div className="form-group upload-group">
                    <label>10th/12th Marksheet <span className="required">*</span></label>
                    <div className="file-upload">
                      <input
                        type="file"
                        name="marksheet"
                        onChange={handleFileChange}
                        accept=".pdf,image/*"
                        required
                        id="marksheet"
                      />
                      <label htmlFor="marksheet" className="file-label">
                        <Upload size={20} />
                        {formData.marksheet ? formData.marksheet.name : 'Choose file'}
                      </label>
                    </div>
                  </div>
                  <div className="form-group upload-group">
                    <label>Transfer Certificate <span className="required">*</span></label>
                    <div className="file-upload">
                      <input
                        type="file"
                        name="transferCertificate"
                        onChange={handleFileChange}
                        accept=".pdf,image/*"
                        required
                        id="transferCertificate"
                      />
                      <label htmlFor="transferCertificate" className="file-label">
                        <Upload size={20} />
                        {formData.transferCertificate ? formData.transferCertificate.name : 'Choose file'}
                      </label>
                    </div>
                  </div>
                  <div className="form-group upload-group">
                    <label>Aadhar Card <span className="required">*</span></label>
                    <div className="file-upload">
                      <input
                        type="file"
                        name="aadharCard"
                        onChange={handleFileChange}
                        accept=".pdf,image/*"
                        required
                        id="aadharCard"
                      />
                      <label htmlFor="aadharCard" className="file-label">
                        <Upload size={20} />
                        {formData.aadharCard ? formData.aadharCard.name : 'Choose file'}
                      </label>
                    </div>
                  </div>
                  <div className="form-group upload-group">
                    <label>Caste Certificate (If Applicable)</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        name="casteCertificate"
                        onChange={handleFileChange}
                        accept=".pdf,image/*"
                        id="casteCertificate"
                      />
                      <label htmlFor="casteCertificate" className="file-label">
                        <Upload size={20} />
                        {formData.casteCertificate ? formData.casteCertificate.name : 'Choose file'}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="declaration">
                  <input type="checkbox" id="declaration" required />
                  <label htmlFor="declaration">
                    I hereby declare that all the information provided above is true and correct to the best of my knowledge.
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="btn-secondary-custom">
                  Previous
                </button>
              )}
              {currentStep < 4 ? (
                <button type="button" onClick={nextStep} className="btn-primary-custom">
                  Next Step
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button type="submit" className="btn-primary-custom">
                  Submit Application
                  <CheckCircle size={20} />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="fee-structure section-padding">
        <div className="container-custom">
          <div className="section-title">
            <span className="badge-custom">Fees</span>
            <h2>Fee Structure 2026-27</h2>
            <p>Transparent and affordable education for all</p>
          </div>
          <div className="fee-grid">
            <div className="fee-card">
              <h3>Engineering Programs</h3>
              <div className="fee-amount">
                <IndianRupee size={28} />
                <span>1,20,000</span>
              </div>
              <p className="fee-period">Per Year</p>
              <ul className="fee-includes">
                <li><CheckCircle size={16} /> Tuition Fees</li>
                <li><CheckCircle size={16} /> Lab Facilities</li>
                <li><CheckCircle size={16} /> Library Access</li>
                <li><CheckCircle size={16} /> Sports & Activities</li>
              </ul>
            </div>
            <div className="fee-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Management Programs</h3>
              <div className="fee-amount">
                <IndianRupee size={28} />
                <span>1,50,000</span>
              </div>
              <p className="fee-period">Per Year</p>
              <ul className="fee-includes">
                <li><CheckCircle size={16} /> Tuition Fees</li>
                <li><CheckCircle size={16} /> Industry Visits</li>
                <li><CheckCircle size={16} /> Internship Support</li>
                <li><CheckCircle size={16} /> Placement Assistance</li>
              </ul>
            </div>
            <div className="fee-card">
              <h3>Arts & Science</h3>
              <div className="fee-amount">
                <IndianRupee size={28} />
                <span>80,000</span>
              </div>
              <p className="fee-period">Per Year</p>
              <ul className="fee-includes">
                <li><CheckCircle size={16} /> Tuition Fees</li>
                <li><CheckCircle size={16} /> Lab Facilities</li>
                <li><CheckCircle size={16} /> Library Access</li>
                <li><CheckCircle size={16} /> Cultural Activities</li>
              </ul>
            </div>
          </div>
          <div className="fee-note">
            <AlertCircle size={20} />
            <p>Scholarships available for meritorious students. Hostel and transportation charges are separate.</p>
          </div>
        </div>
      </section>

        {/* Contact CTA */}
        <section className="admission-cta section-padding bg-light">
          <div className="container-custom">
            <div className="cta-content">
              <h2>Need Help with Your Application?</h2>
              <p>Our admissions team is here to assist you throughout the process</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn-primary-custom">
                  Contact Admissions Office
                  <ArrowRight size={20} />
                </Link>
                <a href="#" className="btn-secondary-custom">
                  <Download size={20} />
                  Download Prospectus
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Admissions
