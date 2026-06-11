import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import { Users, Search, Plus, Edit3, Trash2, Eye, Download, Star, TrendingUp } from "lucide-react"
import "../student/StudentDashboard.css"
import "./AdminCMS.css"

const teachers = [
  { id: "FAC001", name: "Dr. Meera Sharma", dept: "Computer Science", designation: "Professor", qual: "Ph.D.", exp: 15, courses: 3, students: 245, rating: 4.9, email: "meera@college.edu", status: "active" },
  { id: "FAC002", name: "Prof. Rajesh Kumar", dept: "Mechanical", designation: "Assoc. Professor", qual: "M.Tech", exp: 12, courses: 4, students: 320, rating: 4.8, email: "rajesh@college.edu", status: "active" },
  { id: "FAC003", name: "Dr. Anjali Verma", dept: "Electronics", designation: "Asst. Professor", qual: "Ph.D.", exp: 8, courses: 3, students: 210, rating: 4.7, email: "anjali@college.edu", status: "active" },
  { id: "FAC004", name: "Prof. Vikram Singh", dept: "Civil", designation: "Professor", qual: "Ph.D.", exp: 18, courses: 2, students: 180, rating: 4.6, email: "vikram@college.edu", status: "active" },
  { id: "FAC005", name: "Dr. Priya Gupta", dept: "Business", designation: "Assoc. Professor", qual: "MBA, Ph.D.", exp: 10, courses: 4, students: 290, rating: 4.8, email: "priya@college.edu", status: "active" },
  { id: "FAC006", name: "Prof. Suresh Nair", dept: "Physics", designation: "Asst. Professor", qual: "M.Sc, Ph.D.", exp: 6, courses: 3, students: 150, rating: 4.5, email: "suresh@college.edu", status: "on-leave" },
]

const AdminTeachers = () => {
  const [search, setSearch] = useState("")

  const filtered = teachers.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.dept.toLowerCase().includes(search.toLowerCase()) ||
    t.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar"><Users size={32} /></div>
            <div>
              <p className="ent-greeting">People Management</p>
              <h1 className="ent-welcome-name">Faculty Registry</h1>
              <p className="ent-welcome-sub">Manage all faculty members, departments, and performance</p>
            </div>
          </div>
          <div className="ent-welcome-right">
            <button className="ent-qa-btn secondary"><Download size={16} /> Export</button>
            <button className="ent-qa-btn primary"><Plus size={16} /> Add Faculty</button>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {[
            { label: "Total Faculty", value: teachers.length, color: "#6366f1", bg: "#eef2ff" },
            { label: "Active", value: teachers.filter(t => t.status === "active").length, color: "#10b981", bg: "#ecfdf5" },
            { label: "Avg Rating", value: (teachers.reduce((a, t) => a + t.rating, 0) / teachers.length).toFixed(1), color: "#f59e0b", bg: "#fffbeb" },
            { label: "Total Students", value: teachers.reduce((a, t) => a + t.students, 0), color: "#8b5cf6", bg: "#f5f3ff" },
          ].map((k, i) => (
            <div key={i} className="ent-kpi-card" style={{ "--kpi-color": k.color, "--kpi-bg": k.bg }}>
              <div className="ent-kpi-top"><div className="ent-kpi-icon"><Users size={22} /></div></div>
              <div className="ent-kpi-value">{k.value}</div>
              <div className="ent-kpi-label">{k.label}</div>
            </div>
          ))}
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
            <div className="ent-card-title"><Users size={18} /><h2>All Faculty ({filtered.length})</h2></div>
            <div style={{ position: "relative" }}>
              <Search size={15} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search faculty..." style={{ paddingLeft: "2.25rem", padding: "0.55rem 0.75rem 0.55rem 2.25rem", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "0.85rem", outline: "none", width: 220 }} />
            </div>
          </div>
          <div className="cms-table-wrap">
            <table className="cms-table">
              <thead><tr><th>ID</th><th>Name</th><th>Department</th><th>Designation</th><th>Experience</th><th>Courses</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                {filtered.map(t => (
                  <tr key={t.id}>
                    <td style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#64748b" }}>{t.id}</td>
                    <td>
                      <div style={{ fontWeight: 700, color: "#0f172a" }}>{t.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{t.qual}</div>
                    </td>
                    <td className="cell-muted">{t.dept}</td>
                    <td className="cell-muted">{t.designation}</td>
                    <td style={{ fontWeight: 600 }}>{t.exp} yrs</td>
                    <td style={{ fontWeight: 700, color: "#6366f1" }}>{t.courses}</td>
                    <td style={{ fontWeight: 700, color: "#f59e0b", display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}><Star size={13} fill="#f59e0b" color="#f59e0b" /> {t.rating}</td>
                    <td><span className={"badge " + (t.status === "active" ? "badge-success" : "badge-warning")}>{t.status}</span></td>
                    <td><div className="act-group"><button className="act-btn act-btn-edit"><Edit3 size={14} /></button><button className="act-btn act-btn-view"><Eye size={14} /></button><button className="act-btn act-btn-delete"><Trash2 size={14} /></button></div></td>
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

export default AdminTeachers
