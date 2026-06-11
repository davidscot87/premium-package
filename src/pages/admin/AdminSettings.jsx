import { useState, useEffect } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import ProfilePictureUpload from '../../components/ProfilePictureUpload'
import { 
  Settings, Bell, Shield, Database, Save, Camera, User, AlertTriangle, 
  Monitor, ShieldCheck, Mail, Globe, Server, Lock, Key, Users, 
  FileText, Zap, Cloud, HardDrive, Activity, BarChart3, Code, 
  Palette, Languages, DollarSign, CreditCard, Webhook, Terminal,
  GitBranch, Package, Cpu, MemoryStick, Wifi, Eye, EyeOff,
  CheckCircle, XCircle, AlertCircle, Info, Download, Upload,
  RefreshCw, Trash2, Copy, ExternalLink, Search, Filter,
  Calendar, Clock, MapPin, Phone, Building2, Briefcase
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import '../student/StudentDashboard.css'
import './AdminSettings.css'

const AdminSettings = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('general')
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [saveStatus, setSaveStatus] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  
  // General Settings
  const [generalSettings, setGeneralSettings] = useState({
    institutionName: 'Premier College of Excellence',
    institutionCode: 'PCE2024',
    tagline: 'Shaping Tomorrow\'s Leaders',
    email: 'admin@premiercollege.edu',
    phone: '+1 (555) 123-4567',
    alternatePhone: '+1 (555) 123-4568',
    fax: '+1 (555) 123-4569',
    address: '123 Education Street',
    city: 'Knowledge City',
    state: 'California',
    zipCode: '90210',
    country: 'United States',
    website: 'www.premiercollege.edu',
    timezone: 'America/Los_Angeles',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    currency: 'USD',
    language: 'en',
    academicYear: '2024-2025',
    semesterSystem: 'semester',
    establishedYear: '1985',
    accreditation: 'NAAC A++',
    affiliatedUniversity: 'State University'
  })

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    inAppNotifications: true,
    desktopNotifications: false,
    attendanceAlerts: true,
    feeReminders: true,
    gradeUpdates: true,
    admissionAlerts: true,
    examScheduleAlerts: true,
    holidayAnnouncements: true,
    emergencyAlerts: true,
    maintenanceNotifications: true,
    digestFrequency: 'daily',
    quietHoursStart: '22:00',
    quietHoursEnd: '08:00',
    emailDigest: true,
    weeklyReport: true,
    monthlyReport: true
  })

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    biometricAuth: false,
    ssoEnabled: false,
    sessionTimeout: '30',
    passwordExpiry: '90',
    passwordMinLength: '8',
    passwordComplexity: 'high',
    loginAttempts: '5',
    lockoutDuration: '30',
    ipWhitelist: false,
    geoBlocking: false,
    allowedCountries: ['US', 'CA', 'UK'],
    vpnDetection: true,
    deviceTracking: true,
    auditLogging: true,
    encryptionLevel: 'AES-256',
    sslCertificate: 'valid',
    firewallEnabled: true,
    ddosProtection: true,
    rateLimiting: true,
    corsEnabled: true,
    allowedOrigins: 'https://premiercollege.edu'
  })

  // System Settings
  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    debugMode: false,
    cacheEnabled: true,
    cacheDuration: '3600',
    compressionEnabled: true,
    cdnEnabled: true,
    cdnProvider: 'cloudflare',
    backupFrequency: 'daily',
    backupRetention: '30',
    autoBackup: true,
    backupLocation: 's3',
    logLevel: 'info',
    logRetention: '90',
    performanceMonitoring: true,
    errorTracking: true,
    analyticsEnabled: true,
    uptimeMonitoring: true
  })

  // Integration Settings
  const [integrationSettings, setIntegrationSettings] = useState({
    paymentGateway: 'stripe',
    stripePublicKey: 'pk_test_...',
    stripeSecretKey: '••••••••',
    paypalEnabled: false,
    smsProvider: 'twilio',
    twilioAccountSid: 'AC...',
    twilioAuthToken: '••••••••',
    emailProvider: 'sendgrid',
    sendgridApiKey: '••••••••',
    storageProvider: 's3',
    awsAccessKey: 'AKIA...',
    awsSecretKey: '••••••••',
    awsRegion: 'us-east-1',
    awsBucket: 'premier-college-storage',
    googleAnalyticsId: 'UA-...',
    facebookPixelId: '',
    zoomApiKey: '',
    googleMeetEnabled: false,
    slackWebhook: '',
    discordWebhook: ''
  })

  // Appearance Settings
  const [appearanceSettings, setAppearanceSettings] = useState({
    primaryColor: '#1a237e',
    secondaryColor: '#0d47a1',
    accentColor: '#ffd700',
    darkMode: false,
    compactMode: false,
    sidebarCollapsed: false,
    fontFamily: 'Poppins',
    fontSize: 'medium',
    borderRadius: 'medium',
    animationsEnabled: true,
    logoUrl: '/logo.png',
    faviconUrl: '/favicon.svg',
    loginBackground: 'gradient',
    dashboardLayout: 'modern'
  })

  // API Settings
  const [apiSettings, setApiSettings] = useState({
    apiEnabled: true,
    apiVersion: 'v1',
    apiRateLimit: '1000',
    apiRateLimitWindow: '3600',
    webhooksEnabled: true,
    webhookSecret: '••••••••',
    corsEnabled: true,
    allowedOrigins: '*',
    apiDocumentation: true,
    graphqlEnabled: false,
    restEnabled: true,
    apiKeys: [
      { id: 1, name: 'Mobile App', key: 'pk_live_...', created: '2024-01-15', lastUsed: '2024-04-02', status: 'active' },
      { id: 2, name: 'Third Party Integration', key: 'pk_live_...', created: '2024-02-20', lastUsed: '2024-03-28', status: 'active' }
    ]
  })

  // Advanced Settings
  const [advancedSettings, setAdvancedSettings] = useState({
    customCSS: '',
    customJS: '',
    headerScripts: '',
    footerScripts: '',
    robotsTxt: 'User-agent: *\nAllow: /',
    sitemapEnabled: true,
    seoEnabled: true,
    metaTitle: 'Premier College of Excellence',
    metaDescription: 'Leading institution for higher education',
    metaKeywords: 'college, education, courses',
    ogImage: '/og-image.jpg',
    structuredData: true,
    customDomain: '',
    redirectRules: [],
    customHeaders: {},
    environmentVariables: {}
  })

  const handleGeneralChange = (e) => {
    setGeneralSettings({ ...generalSettings, [e.target.name]: e.target.value })
  }

  const handleNotificationChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setNotificationSettings({ ...notificationSettings, [e.target.name]: value })
  }

  const handleSecurityChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setSecuritySettings({ ...securitySettings, [e.target.name]: value })
  }

  const handleSystemChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setSystemSettings({ ...systemSettings, [e.target.name]: value })
  }

  const handleIntegrationChange = (e) => {
    setIntegrationSettings({ ...integrationSettings, [e.target.name]: e.target.value })
  }

  const handleAppearanceChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setAppearanceSettings({ ...appearanceSettings, [e.target.name]: value })
  }

  const handleApiChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setApiSettings({ ...apiSettings, [e.target.name]: value })
  }

  const handleAdvancedChange = (e) => {
    setAdvancedSettings({ ...advancedSettings, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    setSaveStatus('saving')
    setTimeout(() => {
      setSaveStatus('success')
      setTimeout(() => setSaveStatus(null), 3000)
    }, 1000)
  }

  const handleExportConfig = () => {
    const config = {
      general: generalSettings,
      notifications: notificationSettings,
      security: securitySettings,
      system: systemSettings,
      integrations: integrationSettings,
      appearance: appearanceSettings,
      api: apiSettings,
      advanced: advancedSettings
    }
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `config-${new Date().toISOString()}.json`
    a.click()
  }

  const tabs = [
    { id: 'general', label: 'General', icon: Settings, color: '#1976d2' },
    { id: 'notifications', label: 'Notifications', icon: Bell, color: '#f57c00' },
    { id: 'security', label: 'Security', icon: Shield, color: '#d32f2f' },
    { id: 'system', label: 'System', icon: Server, color: '#7b1fa2' },
    { id: 'integrations', label: 'Integrations', icon: Zap, color: '#0288d1' },
    { id: 'appearance', label: 'Appearance', icon: Palette, color: '#c2185b' },
    { id: 'api', label: 'API & Webhooks', icon: Code, color: '#00796b' },
    { id: 'database', label: 'Database', icon: Database, color: '#5d4037' },
    { id: 'advanced', label: 'Advanced', icon: Terminal, color: '#455a64' }
  ]

  return (
    <>
    <DashboardLayout role="admin">
      <div className="ent-page">
        {/* Enterprise Header */}
        <div className="ent-welcome-banner profile-header-mode settings-header">
          <div className="ent-welcome-left">
             <div className="ent-welcome-avatar profile-avatar-lg">
               <img 
                 src={user?.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'Admin')}&size=300&background=1e40af&color=fff&bold=true`} 
                 alt="Admin profile"
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
               <h1 className="ent-welcome-name">{user?.name || 'System Administrator'}</h1>
               <p className="profile-subtitle">Enterprise Configuration Center • Last modified: 2 hours ago</p>
             </div>
          </div>
          <div className="ent-welcome-right header-actions-mode">
            <div className="settings-search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search settings..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="ent-qa-btn secondary" onClick={handleExportConfig}>
              <Download size={18} /> Export Config
            </button>
            <button 
              className={`ent-qa-btn primary ${saveStatus === 'saving' ? 'loading' : ''}`} 
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
            >
              {saveStatus === 'saving' ? (
                <><RefreshCw size={18} className="spin" /> Saving...</>
              ) : saveStatus === 'success' ? (
                <><CheckCircle size={18} /> Saved!</>
              ) : (
                <><Save size={18} /> Save All Changes</>
              )}
            </button>
          </div>
        </div>

        {/* Settings Layout */}
        <div className="settings-layout-container enterprise">
          
          {/* Advanced Tabs Navigation */}
          <div className="dashboard-card settings-tabs-card enterprise">
            <div className="settings-tab-list vertical">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                   <button 
                    key={tab.id}
                    className={`settings-tab-btn enterprise ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{ '--tab-color': tab.color }}
                  >
                    <div className="tab-icon-wrapper">
                      <Icon size={20} />
                    </div>
                    <div className="tab-label-wrapper">
                      <span className="tab-label">{tab.label}</span>
                      <span className="tab-indicator"></span>
                    </div>
                  </button>
                )
              })}
            </div>
            
            {/* System Status Card */}
            <div className="system-status-mini">
              <h4><Activity size={16} /> System Health</h4>
              <div className="status-metrics">
                <div className="metric">
                  <Cpu size={14} />
                  <span>CPU: 34%</span>
                </div>
                <div className="metric">
                  <MemoryStick size={14} />
                  <span>RAM: 2.1GB</span>
                </div>
                <div className="metric">
                  <HardDrive size={14} />
                  <span>Disk: 45%</span>
                </div>
                <div className="metric">
                  <Wifi size={14} />
                  <span>Uptime: 99.9%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="dashboard-card settings-content-card enterprise">
            {/* GENERAL SETTINGS */}
            {activeTab === 'general' && (
               <div className="settings-pane animate-fade-in">
                  <div className="card-header enterprise">
                    <div className="card-title-group">
                      <div className="icon-badge" style={{background: '#1976d2'}}>
                        <Settings size={24} />
                      </div>
                      <div>
                        <h2>General Configuration</h2>
                        <p className="card-subtitle">Core institution settings and basic information</p>
                      </div>
                    </div>
                  </div>

                  {/* Institution Identity */}
                  <div className="settings-section">
                    <div className="section-header">
                      <Building2 size={18} />
                      <h3>Institution Identity</h3>
                    </div>
                    <div className="form-grid-layout col-1">
                      <div className="form-group">
                        <label>Institution Name <span className="required">*</span></label>
                        <input type="text" name="institutionName" value={generalSettings.institutionName} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Institution Code <span className="required">*</span></label>
                        <input type="text" name="institutionCode" value={generalSettings.institutionCode} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Tagline</label>
                        <input type="text" name="tagline" value={generalSettings.tagline} onChange={handleGeneralChange} placeholder="Your institution's motto" />
                      </div>
                      <div className="form-group">
                        <label>Established Year</label>
                        <input type="number" name="establishedYear" value={generalSettings.establishedYear} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Accreditation</label>
                        <input type="text" name="accreditation" value={generalSettings.accreditation} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Affiliated University</label>
                        <input type="text" name="affiliatedUniversity" value={generalSettings.affiliatedUniversity} onChange={handleGeneralChange} />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="settings-section">
                    <div className="section-header">
                      <Phone size={18} />
                      <h3>Contact Information</h3>
                    </div>
                    <div className="form-grid-layout col-1">
                      <div className="form-group">
                        <label>Primary Email <span className="required">*</span></label>
                        <input type="email" name="email" value={generalSettings.email} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Primary Phone <span className="required">*</span></label>
                        <input type="tel" name="phone" value={generalSettings.phone} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Alternate Phone</label>
                        <input type="tel" name="alternatePhone" value={generalSettings.alternatePhone} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Fax Number</label>
                        <input type="tel" name="fax" value={generalSettings.fax} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Website URL</label>
                        <input type="url" name="website" value={generalSettings.website} onChange={handleGeneralChange} />
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="settings-section">
                    <div className="section-header">
                      <MapPin size={18} />
                      <h3>Physical Address</h3>
                    </div>
                    <div className="form-grid-layout col-1">
                      <div className="form-group">
                        <label>Street Address <span className="required">*</span></label>
                        <input type="text" name="address" value={generalSettings.address} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>City <span className="required">*</span></label>
                        <input type="text" name="city" value={generalSettings.city} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>State/Province <span className="required">*</span></label>
                        <input type="text" name="state" value={generalSettings.state} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>ZIP/Postal Code <span className="required">*</span></label>
                        <input type="text" name="zipCode" value={generalSettings.zipCode} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Country <span className="required">*</span></label>
                        <select name="country" value={generalSettings.country} onChange={handleGeneralChange}>
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="India">India</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Regional & Academic Settings */}
                  <div className="settings-section">
                    <div className="section-header">
                      <Globe size={18} />
                      <h3>Regional & Academic Configuration</h3>
                    </div>
                    <div className="form-grid-layout col-1">
                      <div className="form-group">
                        <label>Timezone <span className="required">*</span></label>
                        <select name="timezone" value={generalSettings.timezone} onChange={handleGeneralChange}>
                          <option value="America/New_York">Eastern Time (ET)</option>
                          <option value="America/Chicago">Central Time (CT)</option>
                          <option value="America/Denver">Mountain Time (MT)</option>
                          <option value="America/Los_Angeles">Pacific Time (PT)</option>
                          <option value="Europe/London">London (GMT)</option>
                          <option value="Asia/Kolkata">India (IST)</option>
                          <option value="Asia/Tokyo">Tokyo (JST)</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Date Format</label>
                        <select name="dateFormat" value={generalSettings.dateFormat} onChange={handleGeneralChange}>
                          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Time Format</label>
                        <select name="timeFormat" value={generalSettings.timeFormat} onChange={handleGeneralChange}>
                          <option value="12h">12 Hour</option>
                          <option value="24h">24 Hour</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Currency</label>
                        <select name="currency" value={generalSettings.currency} onChange={handleGeneralChange}>
                          <option value="USD">USD - US Dollar</option>
                          <option value="EUR">EUR - Euro</option>
                          <option value="GBP">GBP - British Pound</option>
                          <option value="INR">INR - Indian Rupee</option>
                          <option value="CAD">CAD - Canadian Dollar</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Language</label>
                        <select name="language" value={generalSettings.language} onChange={handleGeneralChange}>
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                          <option value="hi">Hindi</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Academic Year</label>
                        <input type="text" name="academicYear" value={generalSettings.academicYear} onChange={handleGeneralChange} />
                      </div>
                      <div className="form-group">
                        <label>Semester System</label>
                        <div className="radio-group">
                          <label className="radio-label">
                            <input type="radio" name="semesterSystem" value="semester" checked={generalSettings.semesterSystem === 'semester'} onChange={handleGeneralChange} />
                            <span>Semester (2 terms/year)</span>
                          </label>
                          <label className="radio-label">
                            <input type="radio" name="semesterSystem" value="trimester" checked={generalSettings.semesterSystem === 'trimester'} onChange={handleGeneralChange} />
                            <span>Trimester (3 terms/year)</span>
                          </label>
                          <label className="radio-label">
                            <input type="radio" name="semesterSystem" value="quarter" checked={generalSettings.semesterSystem === 'quarter'} onChange={handleGeneralChange} />
                            <span>Quarter (4 terms/year)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            )}

            {/* NOTIFICATION SETTINGS */}
            {activeTab === 'notifications' && (
              <div className="settings-pane animate-fade-in">
                 <div className="card-header enterprise">
                   <div className="card-title-group">
                     <div className="icon-badge" style={{background: '#f57c00'}}>
                       <Bell size={24} />
                     </div>
                     <div>
                       <h2>Notification Management</h2>
                       <p className="card-subtitle">Configure system-wide notification channels and preferences</p>
                     </div>
                   </div>
                 </div>

                 {/* Notification Channels */}
                 <div className="settings-section">
                   <div className="section-header">
                     <Mail size={18} />
                     <h3>Communication Channels</h3>
                   </div>
                   <div className="toggle-grid">
                     {[
                       { key: 'emailNotifications', label: 'Email Notifications', desc: 'Send notifications via email' },
                       { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Send notifications via SMS' },
                       { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser push notifications' },
                       { key: 'inAppNotifications', label: 'In-App Notifications', desc: 'Show notifications in dashboard' },
                       { key: 'desktopNotifications', label: 'Desktop Notifications', desc: 'Native desktop notifications' }
                     ].map(item => (
                       <div key={item.key} className="toggle-card">
                         <div className="toggle-info">
                           <h4>{item.label}</h4>
                           <p>{item.desc}</p>
                         </div>
                         <label className="toggle-switch">
                           <input 
                             type="checkbox" 
                             name={item.key} 
                             checked={notificationSettings[item.key]} 
                             onChange={handleNotificationChange} 
                           />
                           <span className="toggle-slider"></span>
                         </label>
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* Alert Types */}
                 <div className="settings-section">
                   <div className="section-header">
                     <AlertTriangle size={18} />
                     <h3>Alert Categories</h3>
                   </div>
                   <div className="checkbox-grid">
                     {[
                       { key: 'attendanceAlerts', label: 'Attendance Alerts', icon: CheckCircle },
                       { key: 'feeReminders', label: 'Fee Reminders', icon: DollarSign },
                       { key: 'gradeUpdates', label: 'Grade Updates', icon: BarChart3 },
                       { key: 'admissionAlerts', label: 'Admission Alerts', icon: Users },
                       { key: 'examScheduleAlerts', label: 'Exam Schedule', icon: Calendar },
                       { key: 'holidayAnnouncements', label: 'Holiday Announcements', icon: Calendar },
                       { key: 'emergencyAlerts', label: 'Emergency Alerts', icon: AlertCircle },
                       { key: 'maintenanceNotifications', label: 'Maintenance Notices', icon: Settings }
                     ].map(item => {
                       const Icon = item.icon
                       return (
                         <label key={item.key} className="checkbox-card">
                           <input 
                             type="checkbox" 
                             name={item.key} 
                             checked={notificationSettings[item.key]} 
                             onChange={handleNotificationChange} 
                           />
                           <div className="checkbox-content">
                             <Icon size={20} />
                             <span>{item.label}</span>
                           </div>
                           <div className="checkbox-indicator"></div>
                         </label>
                       )
                     })}
                   </div>
                 </div>

                 {/* Digest & Reports */}
                 <div className="settings-section">
                   <div className="section-header">
                     <FileText size={18} />
                     <h3>Digest & Reporting</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Digest Frequency</label>
                       <select name="digestFrequency" value={notificationSettings.digestFrequency} onChange={handleNotificationChange}>
                         <option value="realtime">Real-time</option>
                         <option value="hourly">Hourly</option>
                         <option value="daily">Daily</option>
                         <option value="weekly">Weekly</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Quiet Hours</label>
                       <div className="time-range">
                         <input type="time" name="quietHoursStart" value={notificationSettings.quietHoursStart} onChange={handleNotificationChange} />
                         <span>to</span>
                         <input type="time" name="quietHoursEnd" value={notificationSettings.quietHoursEnd} onChange={handleNotificationChange} />
                       </div>
                     </div>
                     <div className="form-group">
                       <div className="checkbox-list horizontal">
                         <label className="checkbox-item">
                           <input type="checkbox" name="emailDigest" checked={notificationSettings.emailDigest} onChange={handleNotificationChange} />
                           <span>Email Digest</span>
                         </label>
                         <label className="checkbox-item">
                           <input type="checkbox" name="weeklyReport" checked={notificationSettings.weeklyReport} onChange={handleNotificationChange} />
                           <span>Weekly Report</span>
                         </label>
                         <label className="checkbox-item">
                           <input type="checkbox" name="monthlyReport" checked={notificationSettings.monthlyReport} onChange={handleNotificationChange} />
                           <span>Monthly Report</span>
                         </label>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            )}

            {/* SECURITY SETTINGS */}
            {activeTab === 'security' && (
              <div className="settings-pane animate-fade-in">
                 <div className="card-header enterprise">
                   <div className="card-title-group">
                     <div className="icon-badge" style={{background: '#d32f2f'}}>
                       <Shield size={24} />
                     </div>
                     <div>
                       <h2>Security & Access Control</h2>
                       <p className="card-subtitle">Enterprise-grade security configuration and authentication</p>
                     </div>
                   </div>
                 </div>

                 {/* Authentication Methods */}
                 <div className="settings-section">
                   <div className="section-header">
                     <Key size={18} />
                     <h3>Authentication Methods</h3>
                   </div>
                   <div className="toggle-grid">
                     {[
                       { key: 'twoFactorAuth', label: 'Two-Factor Authentication', desc: 'Require 2FA for all admin accounts', badge: 'Recommended' },
                       { key: 'biometricAuth', label: 'Biometric Authentication', desc: 'Enable fingerprint/face recognition', badge: 'Beta' },
                       { key: 'ssoEnabled', label: 'Single Sign-On (SSO)', desc: 'Enable SAML/OAuth SSO integration', badge: 'Enterprise' }
                     ].map(item => (
                       <div key={item.key} className="toggle-card featured">
                         <div className="toggle-info">
                           <div className="toggle-header">
                             <h4>{item.label}</h4>
                             {item.badge && <span className="badge-mini">{item.badge}</span>}
                           </div>
                           <p>{item.desc}</p>
                         </div>
                         <label className="toggle-switch">
                           <input 
                             type="checkbox" 
                             name={item.key} 
                             checked={securitySettings[item.key]} 
                             onChange={handleSecurityChange} 
                           />
                           <span className="toggle-slider"></span>
                         </label>
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* Password Policy */}
                 <div className="settings-section">
                   <div className="section-header">
                     <Lock size={18} />
                     <h3>Password Policy</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Minimum Length</label>
                       <input type="number" name="passwordMinLength" value={securitySettings.passwordMinLength} onChange={handleSecurityChange} min="6" max="32" />
                     </div>
                     <div className="form-group">
                       <label>Password Expiry (days)</label>
                       <input type="number" name="passwordExpiry" value={securitySettings.passwordExpiry} onChange={handleSecurityChange} />
                     </div>
                     <div className="form-group">
                       <label>Complexity Level</label>
                       <select name="passwordComplexity" value={securitySettings.passwordComplexity} onChange={handleSecurityChange}>
                         <option value="low">Low (Letters only)</option>
                         <option value="medium">Medium (Letters + Numbers)</option>
                         <option value="high">High (Letters + Numbers + Symbols)</option>
                       </select>
                     </div>
                   </div>
                 </div>

                 {/* Session Management */}
                 <div className="settings-section">
                   <div className="section-header">
                     <Clock size={18} />
                     <h3>Session Management</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Session Timeout (minutes)</label>
                       <input type="number" name="sessionTimeout" value={securitySettings.sessionTimeout} onChange={handleSecurityChange} />
                     </div>
                     <div className="form-group">
                       <label>Max Login Attempts</label>
                       <input type="number" name="loginAttempts" value={securitySettings.loginAttempts} onChange={handleSecurityChange} />
                     </div>
                     <div className="form-group">
                       <label>Lockout Duration (minutes)</label>
                       <input type="number" name="lockoutDuration" value={securitySettings.lockoutDuration} onChange={handleSecurityChange} />
                     </div>
                   </div>
                 </div>

                 {/* Advanced Security */}
                 <div className="settings-section">
                   <div className="section-header">
                     <ShieldCheck size={18} />
                     <h3>Advanced Security Features</h3>
                   </div>
                   <div className="checkbox-grid">
                     {[
                       { key: 'ipWhitelist', label: 'IP Whitelisting', icon: Globe },
                       { key: 'geoBlocking', label: 'Geo-blocking', icon: MapPin },
                       { key: 'vpnDetection', label: 'VPN Detection', icon: Wifi },
                       { key: 'deviceTracking', label: 'Device Tracking', icon: Monitor },
                       { key: 'auditLogging', label: 'Audit Logging', icon: FileText },
                       { key: 'firewallEnabled', label: 'Web Application Firewall', icon: Shield },
                       { key: 'ddosProtection', label: 'DDoS Protection', icon: Shield },
                       { key: 'rateLimiting', label: 'Rate Limiting', icon: Activity }
                     ].map(item => {
                       const Icon = item.icon
                       return (
                         <label key={item.key} className="checkbox-card">
                           <input 
                             type="checkbox" 
                             name={item.key} 
                             checked={securitySettings[item.key]} 
                             onChange={handleSecurityChange} 
                           />
                           <div className="checkbox-content">
                             <Icon size={20} />
                             <span>{item.label}</span>
                           </div>
                           <div className="checkbox-indicator"></div>
                         </label>
                       )
                     })}
                   </div>
                 </div>

                 {/* Encryption */}
                 <div className="settings-section">
                   <div className="section-header">
                     <Lock size={18} />
                     <h3>Encryption & Certificates</h3>
                   </div>
                   <div className="info-grid">
                     <div className="info-card success">
                       <Lock size={24} />
                       <div>
                         <h4>Encryption Level</h4>
                         <p className="value">{securitySettings.encryptionLevel}</p>
                       </div>
                     </div>
                     <div className="info-card success">
                       <CheckCircle size={24} />
                       <div>
                         <h4>SSL Certificate</h4>
                         <p className="value">Valid until Dec 2024</p>
                       </div>
                     </div>
                     <div className="info-card info">
                       <Shield size={24} />
                       <div>
                         <h4>Security Score</h4>
                         <p className="value">A+ (98/100)</p>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            )}

            {/* SYSTEM SETTINGS */}
            {activeTab === 'system' && (
              <div className="settings-pane animate-fade-in">
                 <div className="card-header enterprise">
                   <div className="card-title-group">
                     <div className="icon-badge" style={{background: '#7b1fa2'}}>
                       <Server size={24} />
                     </div>
                     <div>
                       <h2>System Configuration</h2>
                       <p className="card-subtitle">Performance, caching, and system-level settings</p>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Activity size={18} />
                     <h3>System Status & Maintenance</h3>
                   </div>
                   <div className="toggle-grid">
                     <div className="toggle-card alert">
                       <div className="toggle-info">
                         <h4>Maintenance Mode</h4>
                         <p>Put system in maintenance mode (users will see maintenance page)</p>
                       </div>
                       <label className="toggle-switch">
                         <input type="checkbox" name="maintenanceMode" checked={systemSettings.maintenanceMode} onChange={handleSystemChange} />
                         <span className="toggle-slider"></span>
                       </label>
                     </div>
                     <div className="toggle-card">
                       <div className="toggle-info">
                         <h4>Debug Mode</h4>
                         <p>Enable detailed error messages and logging</p>
                       </div>
                       <label className="toggle-switch">
                         <input type="checkbox" name="debugMode" checked={systemSettings.debugMode} onChange={handleSystemChange} />
                         <span className="toggle-slider"></span>
                       </label>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Zap size={18} />
                     <h3>Performance Optimization</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Cache Duration (seconds)</label>
                       <input type="number" name="cacheDuration" value={systemSettings.cacheDuration} onChange={handleSystemChange} />
                     </div>
                     <div className="form-group">
                       <label>CDN Provider</label>
                       <select name="cdnProvider" value={systemSettings.cdnProvider} onChange={handleSystemChange}>
                         <option value="cloudflare">Cloudflare</option>
                         <option value="aws">AWS CloudFront</option>
                         <option value="fastly">Fastly</option>
                       </select>
                     </div>
                   </div>
                   <div className="checkbox-list horizontal">
                     <label className="checkbox-item">
                       <input type="checkbox" name="cacheEnabled" checked={systemSettings.cacheEnabled} onChange={handleSystemChange} />
                       <span>Enable Caching</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="compressionEnabled" checked={systemSettings.compressionEnabled} onChange={handleSystemChange} />
                       <span>Enable Compression</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="cdnEnabled" checked={systemSettings.cdnEnabled} onChange={handleSystemChange} />
                       <span>Enable CDN</span>
                     </label>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <HardDrive size={18} />
                     <h3>Backup Configuration</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Backup Frequency</label>
                       <select name="backupFrequency" value={systemSettings.backupFrequency} onChange={handleSystemChange}>
                         <option value="hourly">Hourly</option>
                         <option value="daily">Daily</option>
                         <option value="weekly">Weekly</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Retention Period (days)</label>
                       <input type="number" name="backupRetention" value={systemSettings.backupRetention} onChange={handleSystemChange} />
                     </div>
                     <div className="form-group">
                       <label>Backup Location</label>
                       <select name="backupLocation" value={systemSettings.backupLocation} onChange={handleSystemChange}>
                         <option value="s3">Amazon S3</option>
                         <option value="gcs">Google Cloud Storage</option>
                         <option value="azure">Azure Blob Storage</option>
                       </select>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <FileText size={18} />
                     <h3>Logging & Monitoring</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Log Level</label>
                       <select name="logLevel" value={systemSettings.logLevel} onChange={handleSystemChange}>
                         <option value="error">Error Only</option>
                         <option value="warn">Warning</option>
                         <option value="info">Info</option>
                         <option value="debug">Debug</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Log Retention (days)</label>
                       <input type="number" name="logRetention" value={systemSettings.logRetention} onChange={handleSystemChange} />
                     </div>
                   </div>
                   <div className="checkbox-list horizontal">
                     <label className="checkbox-item">
                       <input type="checkbox" name="performanceMonitoring" checked={systemSettings.performanceMonitoring} onChange={handleSystemChange} />
                       <span>Performance Monitoring</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="errorTracking" checked={systemSettings.errorTracking} onChange={handleSystemChange} />
                       <span>Error Tracking</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="analyticsEnabled" checked={systemSettings.analyticsEnabled} onChange={handleSystemChange} />
                       <span>Analytics</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="uptimeMonitoring" checked={systemSettings.uptimeMonitoring} onChange={handleSystemChange} />
                       <span>Uptime Monitoring</span>
                     </label>
                   </div>
                 </div>
              </div>
            )}

            {/* INTEGRATIONS */}
            {activeTab === 'integrations' && (
              <div className="settings-pane animate-fade-in">
                 <div className="card-header enterprise">
                   <div className="card-title-group">
                     <div className="icon-badge" style={{background: '#0288d1'}}>
                       <Zap size={24} />
                     </div>
                     <div>
                       <h2>Third-Party Integrations</h2>
                       <p className="card-subtitle">Connect external services and APIs</p>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <CreditCard size={18} />
                     <h3>Payment Gateway</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Payment Provider</label>
                       <select name="paymentGateway" value={integrationSettings.paymentGateway} onChange={handleIntegrationChange}>
                         <option value="stripe">Stripe</option>
                         <option value="paypal">PayPal</option>
                         <option value="razorpay">Razorpay</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Stripe Public Key</label>
                       <input type="text" name="stripePublicKey" value={integrationSettings.stripePublicKey} onChange={handleIntegrationChange} />
                     </div>
                     <div className="form-group">
                       <label>Stripe Secret Key</label>
                       <div className="input-with-icon">
                         <input type="password" name="stripeSecretKey" value={integrationSettings.stripeSecretKey} onChange={handleIntegrationChange} />
                         <Eye size={18} />
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Mail size={18} />
                     <h3>Email & SMS Services</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Email Provider</label>
                       <select name="emailProvider" value={integrationSettings.emailProvider} onChange={handleIntegrationChange}>
                         <option value="sendgrid">SendGrid</option>
                         <option value="mailgun">Mailgun</option>
                         <option value="ses">Amazon SES</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>SendGrid API Key</label>
                       <input type="password" name="sendgridApiKey" value={integrationSettings.sendgridApiKey} onChange={handleIntegrationChange} />
                     </div>
                     <div className="form-group">
                       <label>SMS Provider</label>
                       <select name="smsProvider" value={integrationSettings.smsProvider} onChange={handleIntegrationChange}>
                         <option value="twilio">Twilio</option>
                         <option value="nexmo">Nexmo</option>
                         <option value="sns">Amazon SNS</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Twilio Account SID</label>
                       <input type="text" name="twilioAccountSid" value={integrationSettings.twilioAccountSid} onChange={handleIntegrationChange} />
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Cloud size={18} />
                     <h3>Cloud Storage</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Storage Provider</label>
                       <select name="storageProvider" value={integrationSettings.storageProvider} onChange={handleIntegrationChange}>
                         <option value="s3">Amazon S3</option>
                         <option value="gcs">Google Cloud Storage</option>
                         <option value="azure">Azure Blob Storage</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>AWS Region</label>
                       <input type="text" name="awsRegion" value={integrationSettings.awsRegion} onChange={handleIntegrationChange} />
                     </div>
                     <div className="form-group">
                       <label>AWS Access Key</label>
                       <input type="text" name="awsAccessKey" value={integrationSettings.awsAccessKey} onChange={handleIntegrationChange} />
                     </div>
                     <div className="form-group">
                       <label>S3 Bucket Name</label>
                       <input type="text" name="awsBucket" value={integrationSettings.awsBucket} onChange={handleIntegrationChange} />
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <BarChart3 size={18} />
                     <h3>Analytics & Tracking</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Google Analytics ID</label>
                       <input type="text" name="googleAnalyticsId" value={integrationSettings.googleAnalyticsId} onChange={handleIntegrationChange} placeholder="UA-XXXXXXXXX-X" />
                     </div>
                     <div className="form-group">
                       <label>Facebook Pixel ID</label>
                       <input type="text" name="facebookPixelId" value={integrationSettings.facebookPixelId} onChange={handleIntegrationChange} />
                     </div>
                   </div>
                 </div>
              </div>
            )}

            {/* APPEARANCE */}
            {activeTab === 'appearance' && (
              <div className="settings-pane animate-fade-in">
                 <div className="card-header enterprise">
                   <div className="card-title-group">
                     <div className="icon-badge" style={{background: '#c2185b'}}>
                       <Palette size={24} />
                     </div>
                     <div>
                       <h2>Appearance & Branding</h2>
                       <p className="card-subtitle">Customize the look and feel of your platform</p>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Palette size={18} />
                     <h3>Color Scheme</h3>
                   </div>
                   <div className="color-picker-grid">
                     <div className="color-picker-item">
                       <label>Primary Color</label>
                       <div className="color-input-group">
                         <input type="color" name="primaryColor" value={appearanceSettings.primaryColor} onChange={handleAppearanceChange} />
                         <input type="text" value={appearanceSettings.primaryColor} onChange={handleAppearanceChange} name="primaryColor" />
                       </div>
                     </div>
                     <div className="color-picker-item">
                       <label>Secondary Color</label>
                       <div className="color-input-group">
                         <input type="color" name="secondaryColor" value={appearanceSettings.secondaryColor} onChange={handleAppearanceChange} />
                         <input type="text" value={appearanceSettings.secondaryColor} onChange={handleAppearanceChange} name="secondaryColor" />
                       </div>
                     </div>
                     <div className="color-picker-item">
                       <label>Accent Color</label>
                       <div className="color-input-group">
                         <input type="color" name="accentColor" value={appearanceSettings.accentColor} onChange={handleAppearanceChange} />
                         <input type="text" value={appearanceSettings.accentColor} onChange={handleAppearanceChange} name="accentColor" />
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Monitor size={18} />
                     <h3>Display Preferences</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Font Family</label>
                       <select name="fontFamily" value={appearanceSettings.fontFamily} onChange={handleAppearanceChange}>
                         <option value="Poppins">Poppins</option>
                         <option value="Inter">Inter</option>
                         <option value="Roboto">Roboto</option>
                         <option value="Open Sans">Open Sans</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Font Size</label>
                       <select name="fontSize" value={appearanceSettings.fontSize} onChange={handleAppearanceChange}>
                         <option value="small">Small</option>
                         <option value="medium">Medium</option>
                         <option value="large">Large</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Border Radius</label>
                       <select name="borderRadius" value={appearanceSettings.borderRadius} onChange={handleAppearanceChange}>
                         <option value="none">None</option>
                         <option value="small">Small</option>
                         <option value="medium">Medium</option>
                         <option value="large">Large</option>
                       </select>
                     </div>
                   </div>
                   <div className="checkbox-list horizontal">
                     <label className="checkbox-item">
                       <input type="checkbox" name="darkMode" checked={appearanceSettings.darkMode} onChange={handleAppearanceChange} />
                       <span>Dark Mode</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="compactMode" checked={appearanceSettings.compactMode} onChange={handleAppearanceChange} />
                       <span>Compact Mode</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="animationsEnabled" checked={appearanceSettings.animationsEnabled} onChange={handleAppearanceChange} />
                       <span>Enable Animations</span>
                     </label>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Building2 size={18} />
                     <h3>Branding Assets</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Logo URL</label>
                       <div className="input-with-button">
                         <input type="text" name="logoUrl" value={appearanceSettings.logoUrl} onChange={handleAppearanceChange} />
                         <button className="btn-icon"><Upload size={16} /></button>
                       </div>
                     </div>
                     <div className="form-group">
                       <label>Favicon URL</label>
                       <div className="input-with-button">
                         <input type="text" name="faviconUrl" value={appearanceSettings.faviconUrl} onChange={handleAppearanceChange} />
                         <button className="btn-icon"><Upload size={16} /></button>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            )}

            {/* API & WEBHOOKS */}
            {activeTab === 'api' && (
              <div className="settings-pane animate-fade-in">
                 <div className="card-header enterprise">
                   <div className="card-title-group">
                     <div className="icon-badge" style={{background: '#00796b'}}>
                       <Code size={24} />
                     </div>
                     <div>
                       <h2>API & Webhooks</h2>
                       <p className="card-subtitle">Manage API keys, webhooks, and developer settings</p>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Key size={18} />
                     <h3>API Configuration</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>API Version</label>
                       <select name="apiVersion" value={apiSettings.apiVersion} onChange={handleApiChange}>
                         <option value="v1">v1 (Current)</option>
                         <option value="v2">v2 (Beta)</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Rate Limit (requests/hour)</label>
                       <input type="number" name="apiRateLimit" value={apiSettings.apiRateLimit} onChange={handleApiChange} />
                     </div>
                   </div>
                   <div className="checkbox-list horizontal">
                     <label className="checkbox-item">
                       <input type="checkbox" name="apiEnabled" checked={apiSettings.apiEnabled} onChange={handleApiChange} />
                       <span>Enable API</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="webhooksEnabled" checked={apiSettings.webhooksEnabled} onChange={handleApiChange} />
                       <span>Enable Webhooks</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="apiDocumentation" checked={apiSettings.apiDocumentation} onChange={handleApiChange} />
                       <span>Public Documentation</span>
                     </label>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Key size={18} />
                     <h3>API Keys</h3>
                     <button className="btn-primary-sm"><Key size={14} /> Generate New Key</button>
                   </div>
                   <div className="api-keys-table">
                     <table>
                       <thead>
                         <tr>
                           <th>Name</th>
                           <th>Key</th>
                           <th>Created</th>
                           <th>Last Used</th>
                           <th>Status</th>
                           <th>Actions</th>
                         </tr>
                       </thead>
                       <tbody>
                         {apiSettings.apiKeys.map(key => (
                           <tr key={key.id}>
                             <td>{key.name}</td>
                             <td><code>{key.key}</code></td>
                             <td>{key.created}</td>
                             <td>{key.lastUsed}</td>
                             <td><span className="badge-success">{key.status}</span></td>
                             <td>
                               <button className="btn-icon-sm" title="Copy"><Copy size={14} /></button>
                               <button className="btn-icon-sm" title="Delete"><Trash2 size={14} /></button>
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
              </div>
            )}

            {/* DATABASE */}
            {activeTab === 'database' && (
              <div className="settings-pane animate-fade-in">
                 <div className="card-header enterprise">
                   <div className="card-title-group">
                     <div className="icon-badge" style={{background: '#5d4037'}}>
                       <Database size={24} />
                     </div>
                     <div>
                       <h2>Database Management</h2>
                       <p className="card-subtitle">Backup, restore, and optimize database operations</p>
                     </div>
                   </div>
                 </div>

                 <div className="database-actions-grid">
                   <div className="action-card primary">
                     <Database size={32} />
                     <h3>Create Backup</h3>
                     <p>Generate a complete snapshot of the database</p>
                     <button className="btn-action"><Download size={16} /> Backup Now</button>
                   </div>
                   <div className="action-card secondary">
                     <Upload size={32} />
                     <h3>Restore Database</h3>
                     <p>Upload and restore from a backup file</p>
                     <button className="btn-action"><Upload size={16} /> Select File</button>
                   </div>
                   <div className="action-card success">
                     <RefreshCw size={32} />
                     <h3>Optimize Tables</h3>
                     <p>Optimize and defragment database tables</p>
                     <button className="btn-action"><Zap size={16} /> Optimize</button>
                   </div>
                   <div className="action-card warning">
                     <Trash2 size={32} />
                     <h3>Clear Cache</h3>
                     <p>Clear all cached data and temporary files</p>
                     <button className="btn-action"><Trash2 size={16} /> Clear Cache</button>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Activity size={18} />
                     <h3>Database Statistics</h3>
                   </div>
                   <div className="stats-grid">
                     <div className="stat-card">
                       <HardDrive size={24} />
                       <div>
                         <h4>Database Size</h4>
                         <p className="stat-value">2.4 GB</p>
                       </div>
                     </div>
                     <div className="stat-card">
                       <FileText size={24} />
                       <div>
                         <h4>Total Records</h4>
                         <p className="stat-value">1,247,893</p>
                       </div>
                     </div>
                     <div className="stat-card">
                       <Clock size={24} />
                       <div>
                         <h4>Last Backup</h4>
                         <p className="stat-value">2 hours ago</p>
                       </div>
                     </div>
                     <div className="stat-card">
                       <CheckCircle size={24} />
                       <div>
                         <h4>Health Status</h4>
                         <p className="stat-value">Excellent</p>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            )}

            {/* ADVANCED */}
            {activeTab === 'advanced' && (
              <div className="settings-pane animate-fade-in">
                 <div className="card-header enterprise">
                   <div className="card-title-group">
                     <div className="icon-badge" style={{background: '#455a64'}}>
                       <Terminal size={24} />
                     </div>
                     <div>
                       <h2>Advanced Settings</h2>
                       <p className="card-subtitle">Custom code, SEO, and developer options</p>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Code size={18} />
                     <h3>Custom Code Injection</h3>
                   </div>
                   <div className="code-editor-grid">
                     <div className="form-group">
                       <label>Custom CSS</label>
                       <textarea name="customCSS" value={advancedSettings.customCSS} onChange={handleAdvancedChange} rows="6" placeholder="/* Your custom CSS */" className="code-textarea"></textarea>
                     </div>
                     <div className="form-group">
                       <label>Custom JavaScript</label>
                       <textarea name="customJS" value={advancedSettings.customJS} onChange={handleAdvancedChange} rows="6" placeholder="// Your custom JavaScript" className="code-textarea"></textarea>
                     </div>
                   </div>
                 </div>

                 <div className="settings-section">
                   <div className="section-header">
                     <Search size={18} />
                     <h3>SEO Configuration</h3>
                   </div>
                   <div className="form-grid-layout col-1">
                     <div className="form-group">
                       <label>Meta Title</label>
                       <input type="text" name="metaTitle" value={advancedSettings.metaTitle} onChange={handleAdvancedChange} />
                     </div>
                     <div className="form-group">
                       <label>Meta Description</label>
                       <textarea name="metaDescription" value={advancedSettings.metaDescription} onChange={handleAdvancedChange} rows="3"></textarea>
                     </div>
                     <div className="form-group">
                       <label>Meta Keywords</label>
                       <input type="text" name="metaKeywords" value={advancedSettings.metaKeywords} onChange={handleAdvancedChange} />
                     </div>
                   </div>
                   <div className="checkbox-list horizontal">
                     <label className="checkbox-item">
                       <input type="checkbox" name="sitemapEnabled" checked={advancedSettings.sitemapEnabled} onChange={handleAdvancedChange} />
                       <span>Enable Sitemap</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="seoEnabled" checked={advancedSettings.seoEnabled} onChange={handleAdvancedChange} />
                       <span>SEO Optimization</span>
                     </label>
                     <label className="checkbox-item">
                       <input type="checkbox" name="structuredData" checked={advancedSettings.structuredData} onChange={handleAdvancedChange} />
                       <span>Structured Data</span>
                     </label>
                   </div>
                 </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </DashboardLayout>

    {showUploadModal && (
      <ProfilePictureUpload
        currentPicture={user?.profilePicture}
        onClose={() => setShowUploadModal(false)}
      />
    )}
    </>
  )
}

export default AdminSettings
