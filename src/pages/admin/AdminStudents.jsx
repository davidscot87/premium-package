import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import { GraduationCap, Search, Plus, Edit3, Trash2, Eye, Download, Filter, TrendingUp } from "lucide-react"
import "../student/StudentDashboard.css"
import "./AdminCMS.css"

const students = [
  { id: "STU001", name: "Priya Sharma", course: "B.Tech CSE", semester: 6, cgpa: 8.9, attendance: 92, status: "active", email: "priya@college.edu", phone: "9876543210" },
  { id: "STU002", name: "Rahul Kumar", course: "B.Tech ME", semester: 4, cgpa: 8.5, attendance: 88, status: "active", email: "rahul@college.edu", phone: "9876543211" },
  { id: "STU003", name: "Ananya Singh", course: "B.Tech ECE", semester: 6, cgpa: 9.2, attendance: 95, status: "active", email: "ananya@college.edu", phone: "9876543212" },
  { id: "STU004", name: "Arjun Patel", course: "B.Tech Civil", semester: 2, cgpa: 7.8, attendance: 85, status: "active", email: "arjun@college.edu", phone: "9876543213" },
  { id: "STU005", name: "Sneha Reddy", course: "B.Tech CSE", semester: 8, cgpa: 9.0, attendance: 93, status: "active", email: "sneha@college.edu", phone: "9876543214" },
  { id: "STU006", name: "Vikram Mehta", course: "BBA", semester: 4, cgpa: 7.5, attendance: 80, status: "inactive", email: "vikram@college.edu", phone: "9876543215" },
  { id: "STU007", name: "Meera Nair", course: "B.Sc Physics", semester: 3, cgpa: 8.1, attendance: 89, status: "active", email: "meera@college.edu", phone: "9876543216" },
  { id: "STU008", name: "Karan Joshi", course: "BCA", semester: 5, cgpa: 8.7, attendance: 91, status: "active", email: "karan@college.edu", phone: "9876543217" },
]

const AdminStudents = () => {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filtered = students.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()) || s.course.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === "all" || s.status === statusFilter
    return matchSearch && matchStatus
  })

  const kpis = [
    { label: "Total Students", value: students.length, icon: GraduationCap, color: "#6366f1", bg: "#eef2ff" },
    { label: "Active", value: students.filter(s => s.status === "active").length, icon: TrendingUp, color: "#10b981", bg: "#ecfdf5" },
    { label: "Avg CGPA", value: (students.reduce((a, s) => a + s.cgpa, 0) / students.length).toFixed(1), icon: TrendingUp, color: "#f59e0b", bg: "#fffbeb" },
    { label: "Avg Attendance", value: Math.round(students.reduce((a, s) => a + s.attendance, 0) / students.length) + "%", icon: TrendingUp, color: "#8b5cf6", bg: "#f5f3ff" },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar"><GraduationCap size={32} /></div>
            <div>
              <p className="ent-greeting">People Management</p>
              <h1 className="ent-welcome-name">Student Registry</h1>
              <p className="ent-welcome-sub">Manage all enrolled students, records, and academic data</p>
            </div>
          </div>
          <div className="ent-welcome-right">
            <button className="ent-qa-btn secondary"><Download size={16} /> Export</button>
            <button className="ent-qa-btn primary"><Plus size={16} /> Add Student</button>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {kpis.map((k, i) => { const Icon = k.icon; return (
            <div key={i} className="ent-kpi-card" style={{ "--kpi-color": k.color, "--kpi-bg": k.bg }}>
              <div className="ent-kpi-top"><div className="ent-kpi-icon"><Icon size={22} /></div></div>
              <div className="ent-kpi-value">{k.value}</div>
              <div className="ent-kpi-label">{k.label}</div>
            </div>
          )})}
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
            <div className="ent-card-title"><GraduationCap size={18} /><h2>All Students ({filtered.length})</h2></div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                <Search size={15} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search students..." style={{ paddingLeft: "2.25rem", padding: "0.55rem 0.75rem 0.55rem 2.25rem", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "0.85rem", outline: "none", width: 200 }} />
              </div>
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ padding: "0.55rem 0.75rem", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "0.85rem", outline: "none" }}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="cms-table-wrap">
            <table className="cms-table">
              <thead><tr><th>Student ID</th><th>Name</th><th>Course</th><th>Semester</th><th>CGPA</th><th>Attendance</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                {filtered.map(s => (
                  <tr key={s.id}>
                    <td style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#64748b" }}>{s.id}</td>
                    <td>
                      <div style={{ fontWeight: 700, color: "#0f172a" }}>{s.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{s.email}</div>
                    </td>
                    <td className="cell-muted">{s.course}</td>
                    <td style={{ fontWeight: 600 }}>Sem {s.semester}</td>
                    <td style={{ fontWeight: 800, color: s.cgpa >= 9 ? "#10b981" : s.cgpa >= 8 ? "#6366f1" : "#f59e0b" }}>{s.cgpa}</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div className="prog-bar" style={{ width: 50 }}><div className="prog-fill" style={{ width: s.attendance + "%", background: s.attendance >= 90 ? "#10b981" : s.attendance >= 75 ? "#f59e0b" : "#ef4444" }} /></div>
                        <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>{s.attendance}%</span>
                      </div>
                    </td>
                    <td><span className={"badge " + (s.status === "active" ? "badge-success" : "badge-gray")}>{s.status}</span></td>
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

export default AdminStudents
