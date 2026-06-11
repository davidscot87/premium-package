import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import { Bell, Plus, Edit3, Trash2, ToggleLeft, ToggleRight, TrendingUp } from "lucide-react"
import "../student/StudentDashboard.css"
import "./AdminCMS.css"

const initAnn = [
  { id: 1, title: "Admission Open 2026-27", body: "Applications are now open for all undergraduate and postgraduate programs.", audience: "All", type: "info", active: true, date: "2026-03-01", views: 2340 },
  { id: 2, title: "Mid-term Exam Schedule Released", body: "Check the student portal for your personalized exam timetable.", audience: "Students", type: "warning", active: true, date: "2026-03-10", views: 1890 },
  { id: 3, title: "Faculty Development Program", body: "All faculty members are invited to attend the 3-day FDP starting April 1.", audience: "Teachers", type: "info", active: false, date: "2026-04-01", views: 420 },
  { id: 4, title: "Annual Sports Day - April 15", body: "Register for your preferred sports events before April 10.", audience: "All", type: "success", active: false, date: "2026-04-15", views: 0 },
  { id: 5, title: "Library Extended Hours", body: "Library will remain open till 10 PM during exam week.", audience: "Students", type: "info", active: true, date: "2026-03-12", views: 980 },
]

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState(initAnn)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: "", body: "", audience: "All", type: "info" })

  const toggle = (id) => setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, active: !a.active } : a))
  const remove = (id) => setAnnouncements(prev => prev.filter(a => a.id !== id))
  const add = () => {
    if (!form.title.trim()) return
    setAnnouncements(prev => [...prev, { ...form, id: Date.now(), active: true, date: new Date().toISOString().split("T")[0], views: 0 }])
    setForm({ title: "", body: "", audience: "All", type: "info" })
    setShowForm(false)
  }

  const typeColor = { info: "#3b82f6", warning: "#f59e0b", success: "#10b981", danger: "#ef4444" }

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar"><Bell size={32} /></div>
            <div>
              <p className="ent-greeting">Content Management</p>
              <h1 className="ent-welcome-name">Announcements</h1>
              <p className="ent-welcome-sub">Broadcast important notices to students, faculty, and all users</p>
            </div>
          </div>
          <div className="ent-welcome-right">
            <button className="ent-qa-btn primary" onClick={() => setShowForm(!showForm)}><Plus size={16} /> New Announcement</button>
          </div>
        </div>

        {showForm && (
          <div className="ent-card">
            <h3 style={{ margin: "0 0 1.25rem", color: "#0f172a", fontSize: "1rem", fontWeight: 700 }}>Create Announcement</h3>
            <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div className="form-group" style={{ gridColumn: "1/-1" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Title</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Announcement title..." style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #e2e8f0", borderRadius: "10px", fontSize: "0.9rem", outline: "none" }} />
              </div>
              <div className="form-group" style={{ gridColumn: "1/-1" }}>
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Body</label>
                <textarea value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} rows={3} placeholder="Announcement details..." style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #e2e8f0", borderRadius: "10px", fontSize: "0.9rem", outline: "none", resize: "vertical" }} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Audience</label>
                <select value={form.audience} onChange={e => setForm({ ...form, audience: e.target.value })} style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #e2e8f0", borderRadius: "10px", fontSize: "0.9rem", outline: "none" }}>
                  <option>All</option><option>Students</option><option>Teachers</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Type</label>
                <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #e2e8f0", borderRadius: "10px", fontSize: "0.9rem", outline: "none" }}>
                  <option value="info">Info</option><option value="warning">Warning</option><option value="success">Success</option>
                </select>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button className="btn-primary" onClick={add}><Plus size={16} /> Publish</button>
              <button className="btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
            <div className="ent-card-title"><Bell size={18} /><h2>All Announcements ({announcements.length})</h2></div>
          </div>
          <div className="cms-table-wrap">
            <table className="cms-table">
              <thead><tr><th>Title</th><th>Audience</th><th>Type</th><th>Date</th><th>Views</th><th>Active</th><th>Actions</th></tr></thead>
              <tbody>
                {announcements.map(a => (
                  <tr key={a.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: "#0f172a" }}>{a.title}</div>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: 2 }}>{a.body.substring(0, 60)}...</div>
                    </td>
                    <td><span className="audience-badge">{a.audience}</span></td>
                    <td><span className="badge" style={{ background: typeColor[a.type] + "20", color: typeColor[a.type] }}>{a.type}</span></td>
                    <td className="cell-muted">{a.date}</td>
                    <td style={{ fontWeight: 600 }}>{a.views.toLocaleString()}</td>
                    <td>
                      <button onClick={() => toggle(a.id)} style={{ background: "none", border: "none", cursor: "pointer", color: a.active ? "#10b981" : "#94a3b8" }}>
                        {a.active ? <ToggleRight size={26} /> : <ToggleLeft size={26} />}
                      </button>
                    </td>
                    <td><div className="act-group"><button className="act-btn act-btn-edit"><Edit3 size={14} /></button><button className="act-btn act-btn-delete" onClick={() => remove(a.id)}><Trash2 size={14} /></button></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminAnnouncements
