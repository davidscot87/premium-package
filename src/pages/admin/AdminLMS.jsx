import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import {
  BookOpen, Users, Play, Award, Plus, Edit3, Trash2,
  Eye, Star, Clock, TrendingUp, Video, FileQuestion,
  MessageSquare, BarChart3, Download, CheckCircle
} from "lucide-react"
import "../student/StudentDashboard.css"
import "./AdminCMS.css"

const lmsCourses = [
  { id: 1, title: "Full Stack Web Development", instructor: "Dr. Meera Sharma", enrolled: 245, rating: 4.8, status: "active", revenue: "Rs.2,20,500", modules: 12, completion: 78 },
  { id: 2, title: "Machine Learning A-Z", instructor: "Prof. Rajesh Kumar", enrolled: 198, rating: 4.9, status: "active", revenue: "Rs.3,16,800", modules: 15, completion: 65 },
  { id: 3, title: "Digital Marketing Masterclass", instructor: "Dr. Anjali Verma", enrolled: 312, rating: 4.7, status: "active", revenue: "Rs.2,49,600", modules: 10, completion: 82 },
  { id: 4, title: "Data Analytics with Python", instructor: "Prof. Vikram Singh", enrolled: 167, rating: 4.6, status: "draft", revenue: "Rs.1,50,300", modules: 8, completion: 0 },
  { id: 5, title: "UI/UX Design Bootcamp", instructor: "Dr. Priya Gupta", enrolled: 143, rating: 4.8, status: "active", revenue: "Rs.1,57,300", modules: 9, completion: 71 },
]

const quizzes = [
  { title: "Data Structures Mid-Term", course: "CS101", questions: 30, attempts: 145, avgScore: "72%", status: "active" },
  { title: "Machine Learning Final", course: "CS301", questions: 50, attempts: 98, avgScore: "68%", status: "active" },
  { title: "Web Dev Practical Test", course: "CS201", questions: 25, attempts: 210, avgScore: "81%", status: "closed" },
  { title: "Digital Marketing Quiz 3", course: "MKT101", questions: 20, attempts: 312, avgScore: "76%", status: "active" },
]

const forums = [
  { name: "General Discussion", course: "All Courses", threads: 45, replies: 312, active: true },
  { name: "CS101 Help Desk", course: "Data Structures", threads: 28, replies: 189, active: true },
  { name: "ML Project Forum", course: "Machine Learning", threads: 19, replies: 143, active: true },
  { name: "Web Dev Q&A", course: "Web Development", threads: 34, replies: 267, active: true },
]

const AdminLMS = () => {
  const [activeTab, setActiveTab] = useState("courses")

  const tabs = [
    { id: "courses", label: "Video Courses", icon: Video },
    { id: "quizzes", label: "Assessments", icon: FileQuestion },
    { id: "forums", label: "Discussions", icon: MessageSquare },
    { id: "analytics", label: "LMS Analytics", icon: BarChart3 },
  ]

  const kpis = [
    { label: "Total Courses", value: "34", icon: BookOpen, color: "#3b82f6", bg: "#eff6ff", trend: "+4 this month", up: true },
    { label: "Active Learners", value: "1,065", icon: Users, color: "#10b981", bg: "#f0fdf4", trend: "+12% this week", up: true },
    { label: "Completion Rate", value: "78%", icon: Award, color: "#8b5cf6", bg: "#f5f3ff", trend: "+3% vs last month", up: true },
    { label: "LMS Revenue", value: "Rs.11.4L", icon: TrendingUp, color: "#f59e0b", bg: "#fffbeb", trend: "+18% this month", up: true },
  ]

  const statusBadge = (s) => {
    if (s === "active") return "badge badge-success"
    if (s === "draft") return "badge badge-warning"
    if (s === "closed") return "badge badge-gray"
    return "badge badge-info"
  }

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar"><Video size={32} /></div>
            <div>
              <p className="ent-greeting">Learning Management System</p>
              <h1 className="ent-welcome-name">LMS Control Center</h1>
              <p className="ent-welcome-sub">Manage eLearning curriculum, assessments, forums, and analytics</p>
            </div>
          </div>
          <div className="ent-welcome-right">
            <button className="ent-qa-btn secondary"><Download size={16} /> Export Data</button>
            <button className="ent-qa-btn primary"><Plus size={16} /> Create Course</button>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {kpis.map((k, i) => {
            const Icon = k.icon
            return (
              <div key={i} className="ent-kpi-card" style={{ "--kpi-color": k.color, "--kpi-bg": k.bg }}>
                <div className="ent-kpi-top">
                  <div className="ent-kpi-icon"><Icon size={22} /></div>
                  <div className={"ent-kpi-badge up"}><TrendingUp size={11} /> {k.trend}</div>
                </div>
                <div className="ent-kpi-value">{k.value}</div>
                <div className="ent-kpi-label">{k.label}</div>
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

        {activeTab === "courses" && (
          <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
            <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
              <div className="ent-card-title"><Video size={18} /><h2>Course Library</h2></div>
              <button className="ent-qa-btn primary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}><Plus size={16} /> Add Course</button>
            </div>
            <div className="cms-table-wrap">
              <table className="cms-table">
                <thead>
                  <tr>
                    <th>Course</th><th>Instructor</th><th>Enrolled</th>
                    <th>Completion</th><th>Rating</th><th>Revenue</th><th>Status</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lmsCourses.map(c => (
                    <tr key={c.id}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <div style={{ width: 38, height: 38, borderRadius: 8, background: "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Play size={16} color="#4338ca" />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.875rem" }}>{c.title}</div>
                            <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>{c.modules} modules</div>
                          </div>
                        </div>
                      </td>
                      <td className="cell-muted">{c.instructor}</td>
                      <td style={{ fontWeight: 700, color: "#1e1b4b" }}>{c.enrolled}</td>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <div className="prog-bar" style={{ width: 60 }}>
                            <div className="prog-fill" style={{ width: c.completion + "%", background: "#6366f1" }} />
                          </div>
                          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#475569" }}>{c.completion}%</span>
                        </div>
                      </td>
                      <td style={{ fontWeight: 700, color: "#f59e0b", display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}>
                        <Star size={13} fill="#f59e0b" color="#f59e0b" /> {c.rating}
                      </td>
                      <td style={{ fontWeight: 700, color: "#16a34a", fontSize: "0.85rem" }}>{c.revenue}</td>
                      <td><span className={statusBadge(c.status)}>{c.status}</span></td>
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

        {activeTab === "quizzes" && (
          <div className="quiz-grid">
            {quizzes.map((q, i) => (
              <div key={i} className="quiz-card">
                <div className="quiz-card-header">
                  <FileQuestion size={20} color="#6366f1" />
                  <span className={"badge " + (q.status === "active" ? "badge-success" : "badge-gray")}>{q.status}</span>
                </div>
                <h4>{q.title}</h4>
                <p className="cell-muted">{q.course}</p>
                <div className="quiz-stats">
                  <div><span className="qs-label">Questions</span><span className="qs-val">{q.questions}</span></div>
                  <div><span className="qs-label">Attempts</span><span className="qs-val">{q.attempts}</span></div>
                  <div><span className="qs-label">Avg Score</span><span className="qs-val" style={{ color: "#16a34a" }}>{q.avgScore}</span></div>
                </div>
                <div className="act-group">
                  <button className="act-btn act-btn-edit"><Edit3 size={14} /></button>
                  <button className="act-btn act-btn-view"><Eye size={14} /></button>
                  <button className="act-btn act-btn-delete"><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "forums" && (
          <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
            <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
              <div className="ent-card-title"><MessageSquare size={18} /><h2>Discussion Forums</h2></div>
              <button className="ent-qa-btn primary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}><Plus size={16} /> New Forum</button>
            </div>
            <div className="cms-table-wrap">
              <table className="cms-table">
                <thead><tr><th>Forum</th><th>Course</th><th>Threads</th><th>Replies</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {forums.map((f, i) => (
                    <tr key={i}>
                      <td><div className="cell-name"><MessageSquare size={16} /><span>{f.name}</span></div></td>
                      <td className="cell-muted">{f.course}</td>
                      <td style={{ fontWeight: 700 }}>{f.threads}</td>
                      <td style={{ fontWeight: 700 }}>{f.replies}</td>
                      <td><span className="badge badge-success">Active</span></td>
                      <td><div className="act-group"><button className="act-btn act-btn-edit"><Edit3 size={14} /></button><button className="act-btn act-btn-delete"><Trash2 size={14} /></button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="lms-analytics-grid">
            <div className="ent-card">
              <div className="ent-card-header"><div className="ent-card-title"><BarChart3 size={18} /><h2>Course Completion Rates</h2></div></div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {lmsCourses.filter(c => c.status === "active").map((c, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0f172a" }}>{c.title}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#6366f1" }}>{c.completion}%</span>
                    </div>
                    <div className="prog-bar"><div className="prog-fill" style={{ width: c.completion + "%", background: "#6366f1" }} /></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ent-card">
              <div className="ent-card-header"><div className="ent-card-title"><CheckCircle size={18} /><h2>Learner Engagement</h2></div></div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Daily Active Users", value: "342", pct: 32 },
                  { label: "Avg Session Duration", value: "48 min", pct: 65 },
                  { label: "Video Completion", value: "71%", pct: 71 },
                  { label: "Quiz Pass Rate", value: "84%", pct: 84 },
                  { label: "Certificates Issued", value: "189", pct: 55 },
                ].map((m, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0f172a" }}>{m.label}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#10b981" }}>{m.value}</span>
                    </div>
                    <div className="prog-bar"><div className="prog-fill" style={{ width: m.pct + "%", background: "#10b981" }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default AdminLMS
