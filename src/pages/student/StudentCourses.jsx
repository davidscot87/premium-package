import { Link } from "react-router-dom"
import DashboardLayout from "../../components/DashboardLayout"
import { BookOpen, Clock, Play, Award, ChevronRight } from "lucide-react"
import "./StudentDashboard.css"

const courses = [
  { id: "cs301", title: "Machine Learning", instructor: "Dr. Meera Sharma", progress: 68, modules: 12, completed: 8, grade: "A", credits: 4, color: "#6366f1" },
  { id: "cs201", title: "Web Development", instructor: "Prof. Amit Shah", progress: 82, modules: 10, completed: 8, grade: "A+", credits: 4, color: "#10b981" },
  { id: "cs401", title: "Cloud Computing", instructor: "Dr. Priya Gupta", progress: 45, modules: 8, completed: 4, grade: "B+", credits: 3, color: "#f59e0b" },
  { id: "cs501", title: "Data Analytics", instructor: "Prof. Ravi Kumar", progress: 90, modules: 9, completed: 8, grade: "A", credits: 4, color: "#8b5cf6" },
  { id: "cs601", title: "Cyber Security", instructor: "Dr. Neha Patel", progress: 55, modules: 11, completed: 6, grade: "B+", credits: 3, color: "#3b82f6" },
  { id: "cs701", title: "Mobile App Dev", instructor: "Prof. Suresh Reddy", progress: 30, modules: 10, completed: 3, grade: "In Progress", credits: 4, color: "#ec4899" },
]

const StudentCourses = () => (
  <DashboardLayout role="student">
    <div className="ent-page">
      <div className="ent-welcome-banner">
        <div className="ent-welcome-left">
          <div className="ent-welcome-avatar"><BookOpen size={32} /></div>
          <div>
            <p className="ent-greeting">Academics</p>
            <h1 className="ent-welcome-name">My Courses</h1>
            <p className="ent-welcome-sub">Track your enrolled courses and academic progress</p>
          </div>
        </div>
        <div className="ent-welcome-right">
          <Link to="/student-dashboard/lms/catalog" className="ent-qa-btn primary"><Play size={16} /> Browse LMS</Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
        {courses.map((c, i) => (
          <div key={i} className="ent-card" style={{ borderTop: "3px solid " + c.color }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div>
                <h3 style={{ margin: "0 0 0.25rem", fontSize: "1rem", fontWeight: 700, color: "#0f172a" }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>{c.instructor}</p>
              </div>
              <span style={{ padding: "0.25rem 0.75rem", background: c.color + "18", color: c.color, borderRadius: "50px", fontSize: "0.72rem", fontWeight: 700 }}>{c.credits} Credits</span>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>Progress</span>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: c.color }}>{c.progress}%</span>
              </div>
              <div style={{ height: 8, background: "#f1f5f9", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: "100%", width: c.progress + "%", background: c.color, borderRadius: 4, transition: "width 0.6s ease" }} />
              </div>
              <p style={{ margin: "0.4rem 0 0", fontSize: "0.72rem", color: "#94a3b8" }}>{c.completed}/{c.modules} modules completed</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.82rem", fontWeight: 700, color: "#f59e0b" }}>
                <Award size={14} /> Grade: {c.grade}
              </div>
              <Link to={"/student-dashboard/lms/course/" + c.id} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.82rem", fontWeight: 700, color: c.color, textDecoration: "none" }}>
                Continue <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
)

export default StudentCourses
