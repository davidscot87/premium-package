import DashboardLayout from "../../components/DashboardLayout"
import { Calendar, Clock, Users, MapPin } from "lucide-react"
import "../student/StudentDashboard.css"

const schedule = [
  { day: "Monday", slots: [
    { time: "9:00 AM", subject: "Data Structures", class: "CSE-3A", room: "Lab A-101", students: 60 },
    { time: "11:00 AM", subject: "Algorithms", class: "CSE-3B", room: "Room B-205", students: 55 },
    { time: "2:00 PM", subject: "Machine Learning", class: "CSE-4A", room: "Lab C-301", students: 50 },
  ]},
  { day: "Tuesday", slots: [
    { time: "10:00 AM", subject: "Data Structures", class: "CSE-3B", room: "Lab A-101", students: 60 },
    { time: "3:00 PM", subject: "Algorithms", class: "CSE-4A", room: "Room B-205", students: 55 },
  ]},
  { day: "Wednesday", slots: [
    { time: "9:00 AM", subject: "Machine Learning", class: "CSE-3A", room: "Lab C-301", students: 50 },
    { time: "11:00 AM", subject: "Data Structures", class: "CSE-4A", room: "Lab A-101", students: 60 },
    { time: "2:00 PM", subject: "Algorithms", class: "CSE-3A", room: "Room B-205", students: 55 },
  ]},
  { day: "Thursday", slots: [
    { time: "10:00 AM", subject: "Machine Learning", class: "CSE-3B", room: "Lab C-301", students: 50 },
  ]},
  { day: "Friday", slots: [
    { time: "9:00 AM", subject: "Data Structures", class: "CSE-3A", room: "Lab A-101", students: 60 },
    { time: "2:00 PM", subject: "Project Guidance", class: "CSE-4A", room: "Lab C-303", students: 25 },
  ]},
]

const dayColors = { Monday: "#6366f1", Tuesday: "#10b981", Wednesday: "#f59e0b", Thursday: "#8b5cf6", Friday: "#3b82f6" }

const TeacherSchedule = () => (
  <DashboardLayout role="teacher">
    <div className="ent-page">
      <div className="ent-welcome-banner">
        <div className="ent-welcome-left">
          <div className="ent-welcome-avatar"><Calendar size={32} /></div>
          <div>
            <p className="ent-greeting">Weekly Schedule</p>
            <h1 className="ent-welcome-name">My Timetable</h1>
            <p className="ent-welcome-sub">Your complete weekly teaching schedule and class assignments</p>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
        {schedule.map((day, i) => (
          <div key={i} className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title">
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: dayColors[day.day] }} />
                <h2>{day.day}</h2>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#94a3b8", fontWeight: 600 }}>{day.slots.length} classes</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {day.slots.map((slot, j) => (
                <div key={j} style={{ padding: "0.875rem", background: "#f8fafc", borderRadius: "10px", borderLeft: "3px solid " + dayColors[day.day] }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>{slot.subject}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.78rem", color: "#6366f1", fontWeight: 700 }}><Clock size={13} /> {slot.time}</span>
                  </div>
                  <div style={{ display: "flex", gap: "1rem", fontSize: "0.75rem", color: "#64748b" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={12} /> {slot.class} ({slot.students})</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={12} /> {slot.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
)

export default TeacherSchedule
