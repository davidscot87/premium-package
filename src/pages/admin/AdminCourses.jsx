import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import { BookOpen, Search, Plus, Edit3, Trash2, Eye, Download, Users, Star, TrendingUp } from "lucide-react"
import "../student/StudentDashboard.css"
import "./AdminCMS.css"

const courses = [
  { id: "CS101", name: "Data Structures & Algorithms", dept: "Computer Science", teacher: "Dr. Meera Sharma", students: 60, credits: 4, semester: 3, status: "active", rating: 4.8 },
  { id: "CS201", name: "Web Development", dept: "Computer Science", teacher: "Prof. Amit Shah", students: 55, credits: 4, semester: 4, status: "active", rating: 4.7 },
  { id: "CS301", name: "Machine Learning", dept: "Computer Science", teacher: "Dr. Meera Sharma", students: 50, credits: 4, semester: 6, status: "active", rating: 4.9 },
  { id: "ME101", name: "Thermodynamics", dept: "Mechanical", teacher: "Prof. Rajesh Kumar", students: 65, credits: 3, semester: 3, status: "active", rating: 4.6 },
  { id: "EC101", name: "Digital Electronics", dept: "Electronics", teacher: "Dr. Anjali Verma", students: 58, credits: 4, semester: 3, status: "active", rating: 4.7 },
  { id: "CE101", name: "Structural Analysis", dept: "Civil", teacher: "Prof. Vikram Singh", students: 52, credits: 4, semester: 4, status: "active", rating: 4.5 },
  { id: "BBA101", name: "Business Management", dept: "Business", teacher: "Dr. Priya Gupta", students: 70, credits: 3, semester: 2, status: "active", rating: 4.8 },
  { id: "PH101", name: "Quantum Physics", dept: "Physics", teacher: "Prof. Suresh Nair", students: 40, credits: 3, semester: 5, status: "draft", rating: 4.4 },
]

const AdminCourses = () => {
  const [search, setSearch] = useState("")
  const [deptFilter, setDeptFilter] = useState("all")
  const depts = ["all", ...new Set(courses.map(c => c.dept))]

  const filtered = courses.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.id.toLowerCase().includes(search.toLowerCase())
    const matchDept = deptFilter === "all" || c.dept === deptFilter
    return matchSearch && matchDept
  })

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar"><BookOpen size={32} /></div>
            <div>
              <p className="ent-greeting">Academics Management</p>
              <h1 className="ent-welcome-name">Course Registry</h1>
              <p className="ent-welcome-sub">Manage all courses, curriculum, and academic programs</p>
            </div>
          </div>
          <div className="ent-welcome-right">
            <button className="ent-qa-btn secondary"><Download size={16} /> Export</button>
            <button className="ent-qa-btn primary"><Plus size={16} /> Add Course</button>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {[
            { label: "Total Courses", value: courses.length, color: "#6366f1", bg: "#eef2ff" },
            { label: "Active", value: courses.filter(c => c.status === "active").length, color: "#10b981", bg: "#ecfdf5" },
            { label: "Total Students", value: courses.reduce((a, c) => a + c.students, 0), color: "#f59e0b", bg: "#fffbeb" },
            { label: "Avg Rating", value: (courses.reduce((a, c) => a + c.rating, 0) / courses.length).toFixed(1), color: "#8b5cf6", bg: "#f5f3ff" },
          ].map((k, i) => (
            <div key={i} className="ent-kpi-card" style={{ "--kpi-color": k.color, "--kpi-bg": k.bg }}>
              <div className="ent-kpi-top"><div className="ent-kpi-icon"><BookOpen size={22} /></div></div>
              <div className="ent-kpi-value">{k.value}</div>
              <div className="ent-kpi-label">{k.label}</div>
            </div>
          ))}
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
            <div className="ent-card-title"><BookOpen size={18} /><h2>All Courses ({filtered.length})</h2></div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <div style={{ position: "relative" }}>
                <Search size={15} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..." style={{ paddingLeft: "2.25rem", padding: "0.55rem 0.75rem 0.55rem 2.25rem", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "0.85rem", outline: "none", width: 200 }} />
              </div>
              <select value={deptFilter} onChange={e => setDeptFilter(e.target.value)} style={{ padding: "0.55rem 0.75rem", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "0.85rem", outline: "none" }}>
                {depts.map(d => <option key={d} value={d}>{d === "all" ? "All Departments" : d}</option>)}
              </select>
            </div>
          </div>
          <div className="cms-table-wrap">
            <table className="cms-table">
              <thead><tr><th>Code</th><th>Course Name</th><th>Department</th><th>Instructor</th><th>Students</th><th>Credits</th><th>Rating</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                {filtered.map(c => (
                  <tr key={c.id}>
                    <td style={{ fontFamily: "monospace", fontWeight: 700, color: "#6366f1" }}>{c.id}</td>
                    <td style={{ fontWeight: 700, color: "#0f172a" }}>{c.name}</td>
                    <td className="cell-muted">{c.dept}</td>
                    <td className="cell-muted">{c.teacher}</td>
                    <td style={{ fontWeight: 700 }}>{c.students}</td>
                    <td style={{ fontWeight: 600 }}>{c.credits}</td>
                    <td style={{ fontWeight: 700, color: "#f59e0b", display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}><Star size={13} fill="#f59e0b" color="#f59e0b" /> {c.rating}</td>
                    <td><span className={"badge " + (c.status === "active" ? "badge-success" : "badge-warning")}>{c.status}</span></td>
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

export default AdminCourses
