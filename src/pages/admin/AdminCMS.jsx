import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import { useSiteContent } from "../../context/SiteContentContext"
import {
  Globe, Edit3, Image, FileText, Layout, Bell,
  Eye, Save, Plus, Trash2, Home, BookOpen, Users,
  Phone, ChevronRight, Check, TrendingUp, BarChart3,
  Monitor, Megaphone, RotateCcw, ToggleLeft, ToggleRight
} from "lucide-react"
import "../student/StudentDashboard.css"
import "./AdminCMS.css"

const pages = [
  { id: "home", name: "Homepage", status: "published", lastEdited: "2 hours ago", views: 12450, seo: 98 },
  { id: "about", name: "About Us", status: "published", lastEdited: "1 day ago", views: 3820, seo: 92 },
  { id: "courses", name: "Courses", status: "published", lastEdited: "3 hours ago", views: 8910, seo: 95 },
  { id: "admissions", name: "Admissions", status: "published", lastEdited: "5 hours ago", views: 5640, seo: 88 },
  { id: "contact", name: "Contact", status: "published", lastEdited: "2 days ago", views: 2100, seo: 90 },
  { id: "events", name: "Events", status: "draft", lastEdited: "30 min ago", views: 1890, seo: 75 },
  { id: "gallery", name: "Gallery", status: "published", lastEdited: "1 week ago", views: 4320, seo: 85 },
  { id: "blog", name: "Blog", status: "published", lastEdited: "4 hours ago", views: 6780, seo: 94 },
]

const mediaFiles = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
]

const siteStats = [
  { label: "Total Page Views", value: "45,910", icon: BarChart3, color: "#6366f1", bg: "#eef2ff", change: "+12%", up: true },
  { label: "Published Pages", value: "7", icon: Globe, color: "#10b981", bg: "#ecfdf5", change: null },
  { label: "Active Announcements", value: "2", icon: Bell, color: "#f59e0b", bg: "#fffbeb", change: null },
  { label: "Media Files", value: "48", icon: Image, color: "#8b5cf6", bg: "#f5f3ff", change: "+6 this week", up: true },
]

const AdminCMS = () => {
  const { content, updateSection, updateAnnouncement, addAnnouncement, deleteAnnouncement, resetToDefaults } = useSiteContent()
  const [activeTab, setActiveTab] = useState("pages")
  const [editingSection, setEditingSection] = useState(null)
  const [saved, setSaved] = useState(false)
  const [newAnn, setNewAnn] = useState({ text: "", type: "info", active: true })
  const [showNewAnn, setShowNewAnn] = useState(false)

  // Local draft state for each section
  const [heroDraft, setHeroDraft] = useState(content.hero)
  const [aboutDraft, setAboutDraft] = useState(content.about)
  const [contactDraft, setContactDraft] = useState(content.contact)
  const [admissionsDraft, setAdmissionsDraft] = useState(content.admissions)
  const [footerDraft, setFooterDraft] = useState(content.footer)
  const [navbarDraft, setNavbarDraft] = useState(content.navbar)

  const handleSave = (section, draft) => {
    updateSection(section, draft)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (window.confirm("Reset all content to defaults? This cannot be undone.")) {
      resetToDefaults()
      setHeroDraft(content.hero)
      setAboutDraft(content.about)
      setContactDraft(content.contact)
      setAdmissionsDraft(content.admissions)
      setFooterDraft(content.footer)
      setNavbarDraft(content.navbar)
    }
  }

  const tabs = [
    { id: "pages", label: "Pages", icon: Layout },
    { id: "content", label: "Content Editor", icon: Edit3 },
    { id: "announcements", label: "Announcements", icon: Megaphone },
    { id: "media", label: "Media Library", icon: Image },
  ]

  const sections = [
    { id: "hero", label: "Hero Section", icon: Home, page: "Homepage" },
    { id: "navbar", label: "Navbar / Brand", icon: Monitor, page: "Global" },
    { id: "about", label: "About Section", icon: Users, page: "Homepage" },
    { id: "contact", label: "Contact Info", icon: Phone, page: "Global" },
    { id: "admissions", label: "Admissions Banner", icon: FileText, page: "Admissions" },
    { id: "footer", label: "Footer Content", icon: Layout, page: "Global" },
  ]

  const statusBadge = (s) => {
    if (s === "published") return "badge badge-success"
    if (s === "draft") return "badge badge-warning"
    if (s === "scheduled") return "badge badge-info"
    if (s === "active") return "badge badge-success"
    return "badge badge-gray"
  }

  const renderEditor = () => {
    if (!editingSection) {
      return (
        <div className="editor-placeholder">
          <Edit3 size={48} />
          <p>Select a section from the left to edit its content</p>
          <p style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Changes are saved to localStorage and reflected live on the website</p>
        </div>
      )
    }

    if (editingSection === "hero") return (
      <div className="editor-form">
        <h3 style={{ margin: "0 0 1.25rem", color: "#0f172a" }}>Hero Section</h3>
        <div className="form-group"><label>Main Heading</label>
          <input value={heroDraft.heading} onChange={e => setHeroDraft({ ...heroDraft, heading: e.target.value })} />
        </div>
        <div className="form-group"><label>Sub Heading</label>
          <input value={heroDraft.subheading} onChange={e => setHeroDraft({ ...heroDraft, subheading: e.target.value })} />
        </div>
        <div className="form-group"><label>Primary CTA Text</label>
          <input value={heroDraft.ctaPrimary} onChange={e => setHeroDraft({ ...heroDraft, ctaPrimary: e.target.value })} />
        </div>
        <div className="form-group"><label>Secondary CTA Text</label>
          <input value={heroDraft.ctaSecondary} onChange={e => setHeroDraft({ ...heroDraft, ctaSecondary: e.target.value })} />
        </div>
        <div className="form-group"><label>Background Image URL</label>
          <input value={heroDraft.backgroundImage} onChange={e => setHeroDraft({ ...heroDraft, backgroundImage: e.target.value })} />
        </div>
        {heroDraft.backgroundImage && (
          <img src={heroDraft.backgroundImage} alt="preview" style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 8, marginBottom: 8 }} />
        )}
        <button className="btn-primary" onClick={() => handleSave("hero", heroDraft)}>
          {saved ? <><Check size={16} /> Saved!</> : <><Save size={16} /> Save Hero</>}
        </button>
      </div>
    )

    if (editingSection === "navbar") return (
      <div className="editor-form">
        <h3 style={{ margin: "0 0 1.25rem", color: "#0f172a" }}>Navbar / Brand</h3>
        <div className="form-group"><label>College Name</label>
          <input value={navbarDraft.collegeName} onChange={e => setNavbarDraft({ ...navbarDraft, collegeName: e.target.value })} />
        </div>
        <div className="form-group"><label>Tagline</label>
          <input value={navbarDraft.tagline} onChange={e => setNavbarDraft({ ...navbarDraft, tagline: e.target.value })} />
        </div>
        <button className="btn-primary" onClick={() => handleSave("navbar", navbarDraft)}>
          {saved ? <><Check size={16} /> Saved!</> : <><Save size={16} /> Save Navbar</>}
        </button>
      </div>
    )

    if (editingSection === "about") return (
      <div className="editor-form">
        <h3 style={{ margin: "0 0 1.25rem", color: "#0f172a" }}>About Section</h3>
        <div className="form-group"><label>Heading</label>
          <input value={aboutDraft.heading} onChange={e => setAboutDraft({ ...aboutDraft, heading: e.target.value })} />
        </div>
        <div className="form-group"><label>Sub Heading</label>
          <input value={aboutDraft.subheading} onChange={e => setAboutDraft({ ...aboutDraft, subheading: e.target.value })} />
        </div>
        <div className="form-group"><label>Description</label>
          <textarea rows={4} value={aboutDraft.description} onChange={e => setAboutDraft({ ...aboutDraft, description: e.target.value })} style={{ resize: "vertical" }} />
        </div>
        <button className="btn-primary" onClick={() => handleSave("about", aboutDraft)}>
          {saved ? <><Check size={16} /> Saved!</> : <><Save size={16} /> Save About</>}
        </button>
      </div>
    )

    if (editingSection === "contact") return (
      <div className="editor-form">
        <h3 style={{ margin: "0 0 1.25rem", color: "#0f172a" }}>Contact Info</h3>
        <div className="form-group"><label>Address</label>
          <input value={contactDraft.address} onChange={e => setContactDraft({ ...contactDraft, address: e.target.value })} />
        </div>
        <div className="form-group"><label>Phone</label>
          <input value={contactDraft.phone} onChange={e => setContactDraft({ ...contactDraft, phone: e.target.value })} />
        </div>
        <div className="form-group"><label>Email</label>
          <input value={contactDraft.email} onChange={e => setContactDraft({ ...contactDraft, email: e.target.value })} />
        </div>
        <button className="btn-primary" onClick={() => handleSave("contact", contactDraft)}>
          {saved ? <><Check size={16} /> Saved!</> : <><Save size={16} /> Save Contact</>}
        </button>
      </div>
    )

    if (editingSection === "admissions") return (
      <div className="editor-form">
        <h3 style={{ margin: "0 0 1.25rem", color: "#0f172a" }}>Admissions Banner</h3>
        <div className="form-group"><label>Heading</label>
          <input value={admissionsDraft.heading} onChange={e => setAdmissionsDraft({ ...admissionsDraft, heading: e.target.value })} />
        </div>
        <div className="form-group"><label>Sub Heading</label>
          <input value={admissionsDraft.subheading} onChange={e => setAdmissionsDraft({ ...admissionsDraft, subheading: e.target.value })} />
        </div>
        <div className="form-group"><label>Application Deadline</label>
          <input value={admissionsDraft.deadline} onChange={e => setAdmissionsDraft({ ...admissionsDraft, deadline: e.target.value })} />
        </div>
        <div className="form-group"><label>CTA Button Text</label>
          <input value={admissionsDraft.ctaText} onChange={e => setAdmissionsDraft({ ...admissionsDraft, ctaText: e.target.value })} />
        </div>
        <button className="btn-primary" onClick={() => handleSave("admissions", admissionsDraft)}>
          {saved ? <><Check size={16} /> Saved!</> : <><Save size={16} /> Save Admissions</>}
        </button>
      </div>
    )

    if (editingSection === "footer") return (
      <div className="editor-form">
        <h3 style={{ margin: "0 0 1.25rem", color: "#0f172a" }}>Footer Content</h3>
        <div className="form-group"><label>Tagline</label>
          <input value={footerDraft.tagline} onChange={e => setFooterDraft({ ...footerDraft, tagline: e.target.value })} />
        </div>
        <div className="form-group"><label>Copyright Text</label>
          <input value={footerDraft.copyright} onChange={e => setFooterDraft({ ...footerDraft, copyright: e.target.value })} />
        </div>
        <button className="btn-primary" onClick={() => handleSave("footer", footerDraft)}>
          {saved ? <><Check size={16} /> Saved!</> : <><Save size={16} /> Save Footer</>}
        </button>
      </div>
    )
  }

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar"><Monitor size={32} /></div>
            <div>
              <p className="ent-greeting">Content Management System</p>
              <h1 className="ent-welcome-name">Website CMS</h1>
              <p className="ent-welcome-sub">Edit content live - changes reflect instantly on the public website</p>
            </div>
          </div>
          <div className="ent-welcome-right">
            <button className="ent-qa-btn secondary" onClick={handleReset}>
              <RotateCcw size={16} /> Reset Defaults
            </button>
            <a href="/" target="_blank" rel="noreferrer" className="ent-qa-btn secondary">
              <Eye size={16} /> Preview Site
            </a>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {siteStats.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="ent-kpi-card" style={{ "--kpi-color": s.color, "--kpi-bg": s.bg }}>
                <div className="ent-kpi-top">
                  <div className="ent-kpi-icon"><Icon size={22} /></div>
                  {s.change && <div className={"ent-kpi-badge up"}><TrendingUp size={11} /> {s.change}</div>}
                </div>
                <div className="ent-kpi-value">{s.value}</div>
                <div className="ent-kpi-label">{s.label}</div>
              </div>
            )
          })}
        </div>

        <div className="cms-tabs">
          {tabs.map(t => {
            const Icon = t.icon
            return (
              <button key={t.id} className={"cms-tab " + (activeTab === t.id ? "active" : "")} onClick={() => setActiveTab(t.id)}>
                <Icon size={16} /> {t.label}
              </button>
            )
          })}
        </div>

        {activeTab === "pages" && (
          <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
            <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
              <div className="ent-card-title"><Globe size={18} /><h2>All Pages</h2></div>
              <button className="ent-qa-btn primary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}><Plus size={16} /> New Page</button>
            </div>
            <div className="cms-table-wrap">
              <table className="cms-table">
                <thead><tr><th>Page Name</th><th>Status</th><th>Last Edited</th><th>Views</th><th>SEO Score</th><th>Actions</th></tr></thead>
                <tbody>
                  {pages.map(page => (
                    <tr key={page.id}>
                      <td><div className="cell-name"><Globe size={16} /><span>{page.name}</span></div></td>
                      <td><span className={statusBadge(page.status)}>{page.status}</span></td>
                      <td className="cell-muted">{page.lastEdited}</td>
                      <td style={{ fontWeight: 600, color: "#0f172a" }}>{page.views.toLocaleString()}</td>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <div className="prog-bar" style={{ width: 60 }}>
                            <div className="prog-fill" style={{ width: page.seo + "%", background: page.seo >= 90 ? "#10b981" : page.seo >= 75 ? "#f59e0b" : "#ef4444" }} />
                          </div>
                          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569" }}>{page.seo}</span>
                        </div>
                      </td>
                      <td>
                        <div className="act-group">
                          <button className="act-btn act-btn-edit"><Edit3 size={14} /></button>
                          <button className="act-btn act-btn-view"><Eye size={14} /></button>
                          <button className="act-btn act-btn-delete"><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "content" && (
          <div className="cms-sections-layout">
            <div className="ent-card sections-list">
              <h2>Page Sections</h2>
              <p style={{ fontSize: "0.78rem", color: "#94a3b8", marginBottom: "1rem" }}>Click a section to edit its live content</p>
              {sections.map(sec => {
                const Icon = sec.icon
                return (
                  <div key={sec.id} className={"section-item " + (editingSection === sec.id ? "active" : "")} onClick={() => setEditingSection(sec.id)}>
                    <div className="section-item-left">
                      <Icon size={18} />
                      <div>
                        <p className="section-name">{sec.label}</p>
                        <p className="section-page">{sec.page}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} />
                  </div>
                )
              })}
            </div>
            <div className="ent-card section-editor">{renderEditor()}</div>
          </div>
        )}

        {activeTab === "announcements" && (
          <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
            <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
              <div className="ent-card-title"><Bell size={18} /><h2>Announcements</h2></div>
              <button className="ent-qa-btn primary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }} onClick={() => setShowNewAnn(!showNewAnn)}>
                <Plus size={16} /> New Announcement
              </button>
            </div>

            {showNewAnn && (
              <div style={{ padding: "1.5rem", background: "#f8fafc", borderBottom: "1px solid #f1f5f9", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "flex-end" }}>
                <div className="form-group" style={{ flex: 2, minWidth: 200 }}>
                  <label>Announcement Text</label>
                  <input value={newAnn.text} onChange={e => setNewAnn({ ...newAnn, text: e.target.value })} placeholder="Enter announcement..." />
                </div>
                <div className="form-group" style={{ flex: 1, minWidth: 120 }}>
                  <label>Type</label>
                  <select value={newAnn.type} onChange={e => setNewAnn({ ...newAnn, type: e.target.value })} style={{ padding: "0.75rem 1rem", border: "1.5px solid #e2e8f0", borderRadius: 10, background: "#f8fafc", outline: "none" }}>
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                    <option value="success">Success</option>
                  </select>
                </div>
                <button className="btn-primary" style={{ marginBottom: "0.4rem" }} onClick={() => { if (newAnn.text.trim()) { addAnnouncement(newAnn); setNewAnn({ text: "", type: "info", active: true }); setShowNewAnn(false) } }}>
                  <Plus size={16} /> Add
                </button>
              </div>
            )}

            <div className="cms-table-wrap">
              <table className="cms-table">
                <thead><tr><th>Announcement</th><th>Type</th><th>Active</th><th>Actions</th></tr></thead>
                <tbody>
                  {content.announcements.map(ann => (
                    <tr key={ann.id}>
                      <td style={{ fontWeight: 600, color: "#0f172a", maxWidth: 400 }}>{ann.text}</td>
                      <td><span className={"badge " + (ann.type === "info" ? "badge-info" : ann.type === "warning" ? "badge-warning" : "badge-success")}>{ann.type}</span></td>
                      <td>
                        <button
                          onClick={() => updateAnnouncement(ann.id, { active: !ann.active })}
                          style={{ background: "none", border: "none", cursor: "pointer", color: ann.active ? "#10b981" : "#94a3b8" }}
                        >
                          {ann.active ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                        </button>
                      </td>
                      <td>
                        <div className="act-group">
                          <button className="act-btn act-btn-delete" onClick={() => deleteAnnouncement(ann.id)}><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "media" && (
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title"><Image size={18} /><h2>Media Library</h2></div>
              <button className="ent-qa-btn primary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}><Plus size={16} /> Upload Media</button>
            </div>
            <div className="media-grid">
              {mediaFiles.map((src, i) => (
                <div key={i} className="media-item">
                  <img src={src} alt={"Media " + (i + 1)} />
                  <div className="media-overlay">
                    <button className="act-btn act-btn-edit"><Edit3 size={14} /></button>
                    <button className="act-btn act-btn-delete"><Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default AdminCMS
