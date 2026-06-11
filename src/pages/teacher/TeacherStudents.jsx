import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import { GraduationCap, Search, Eye, TrendingUp } from "lucide-react"
import "../student/StudentDashboard.css"
import "../admin/AdminCMS.css"

const students = [
  { id: "STU001", name: "Priya Sharma", course: "CSE-3A", cgpa: 8.9, attendance: 92, assignments: "8/10", status: "excellent" },
  { id: "STU002", name: "Rahul Kumar", course: "CSE-3B", cgpa: 8.5, attendance: 88, assignments: "7/10", status: "good" },
  { id: "STU003", name: "Ananya Singh", course: "CSE-4A", cgpa: 9.2, attendance: 95, assignments: "10/10", status: "excellent" },
  { id: "STU004", name: "Arjun Patel", course: "CSE-3A", cgpa: 7.8, attendance: 85, assignments: "6/10", status: "average" },
  { id: "STU005", name: "Sneha Reddy", course: "CSE-4A", cgpa: 9.0, attendance: 93, assignments: "9/10", status: "excellent" },
  { id: "STU006", name: "Vikram Mehta", course: "CSE-3B", cgpa: 7.5, attendance: 80, assignments: "5/10", status: "needs-attention" },
]

const statusColors = { excellent: "#10b981", good: "#6366f1", average: "#f59e0b", "needs-attention": "#ef4444" }

const TeacherStudents = () => {
  const [search, setSearch] = useState("")
  const filtered = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()))

  return (
    <DashboardLayout role="teacher">
      <div className="ent-page">
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar"><GraduationCap size={32} /></div>
            <div>
              <p className="ent-greeting">My Students</p>
              <h1 className="ent-welcome-name">Student Overview</h1>
              <p className="ent-welcome-sub">Track performance, attendance, and progress of your students</p>
            </div>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {[
            { label: "Total Students", value: students.length, color: "#6366f1", bg: "#eef2ff" },
            { label: "Excellent", value: students.filter(s => s.status === "excellent").length, color: "#10b981", bg: "#ecfdf5" },
            { label: "Needs Attention", value: students.filter(s => s.status === "needs-attention").length, color: "#ef4444", bg: "#fef2f2" },
            { label: "Avg CGPA", value: (students.reduce((a, s) => a + s.cgpa, 0) / students.length).toFixed(1), color: "#f59e0b", bg: "#fffbeb" },
          ].map((k, i) => (
            <div key={i} className="ent-kpi-card" style={{ "--kpi-color": k.color, "--kpi-bg": k.bg }}>
              <div className="ent-kpi-top"><div className="ent-kpi-icon"><TrendingUp size={22} /></div></div>
              <div className="ent-kpi-value">{k.value}</div>
              <div className="ent-kpi-label">{k.label}</div>
            </div>
          ))}
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
            <div className="ent-card-title"><GraduationCap size={18} /><h2>My Students</h2></div>
            <div style={{ position: "relative" }}>
              <Search size={15} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." style={{ paddingLeft: "2.25rem", padding: "0.55rem 0.75rem 0.55rem 2.25rem", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "0.85rem", outline: "none", width: 200 }} />
            </div>
          </div>
          <div className="cms-table-wrap">
            <table className="cms-table">
              <thead><tr><th>ID</th><th>Name</th><th>Class</th><th>CGPA</th><th>Attendance</th><th>Assignments</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                {filtered.map(s => (
                  <tr key={s.id}>
                    <td style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#64748b" }}>{s.id}</td>
                    <td style={{ fontWeight: 700, color: "#0f172a" }}>{s.name}</td>
                    <td className="cell-muted">{s.course}</td>
                    <td style={{ fontWeight: 800, color: s.cgpa >= 9 ? "#10b981" : s.cgpa >= 8 ? "#6366f1" : "#f59e0b" }}>{s.cgpa}</td>
                    <td style={{ fontWeight: 600 }}>{s.attendance}%</td>
                    <td style={{ fontWeight: 600 }}>{s.assignments}</td>
                    <td><span className="badge" style={{ background: statusColors[s.status] + "20", color: statusColors[s.status] }}>{s.status.replace("-", " ")}</span></td>
                    <td><button className="act-btn act-btn-view"><Eye size={14} /></button></td>
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

export default TeacherStudents
