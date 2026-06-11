import DashboardLayout from "../../components/DashboardLayout"
import { Calendar, Clock, MapPin, User } from "lucide-react"
import "./StudentDashboard.css"

const timetable = [
  { day: "Monday", slots: [
    { time: "9:00 AM", subject: "Machine Learning", room: "Lab C-301", teacher: "Dr. Meera Sharma", type: "lab" },
    { time: "11:00 AM", subject: "Web Development", room: "Lab A-101", teacher: "Prof. Amit Shah", type: "lab" },
    { time: "2:00 PM", subject: "Cloud Computing", room: "Room B-205", teacher: "Dr. Priya Gupta", type: "lecture" },
  ]},
  { day: "Tuesday", slots: [
    { time: "10:00 AM", subject: "Data Analytics", room: "Lab C-302", teacher: "Prof. Ravi Kumar", type: "lab" },
    { time: "1:00 PM", subject: "Cyber Security", room: "Room A-301", teacher: "Dr. Neha Patel", type: "lecture" },
    { time: "3:00 PM", subject: "Mobile App Dev", room: "Lab B-201", teacher: "Prof. Suresh Reddy", type: "lab" },
  ]},
  { day: "Wednesday", slots: [
    { time: "9:00 AM", subject: "Machine Learning", room: "Lab C-301", teacher: "Dr. Meera Sharma", type: "lab" },
    { time: "11:00 AM", subject: "Web Development", room: "Lab A-101", teacher: "Prof. Amit Shah", type: "lab" },
  ]},
  { day: "Thursday", slots: [
    { time: "10:00 AM", subject: "Data Analytics", room: "Lab C-302", teacher: "Prof. Ravi Kumar", type: "lab" },
    { time: "1:00 PM", subject: "Cyber Security", room: "Room A-301", teacher: "Dr. Neha Patel", type: "lecture" },
  ]},
  { day: "Friday", slots: [
    { time: "9:00 AM", subject: "Project Work", room: "Lab C-303", teacher: "Dr. Meera Sharma", type: "project" },
    { time: "2:00 PM", subject: "Seminar", room: "Auditorium", teacher: "Various", type: "seminar" },
  ]},
]

const typeColors = { lab: "#6366f1", lecture: "#10b981", project: "#f59e0b", seminar: "#8b5cf6" }
const dayColors = { Monday: "#6366f1", Tuesday: "#10b981", Wednesday: "#f59e0b", Thursday: "#8b5cf6", Friday: "#3b82f6" }

const StudentTimetable = () => (
  <DashboardLayout role="student">
    <div className="ent-page">
      <div className="ent-welcome-banner">
        <div className="ent-welcome-left">
          <div className="ent-welcome-avatar"><Calendar size={32} /></div>
          <div>
            <p className="ent-greeting">Academic Schedule</p>
            <h1 className="ent-welcome-name">My Timetable</h1>
            <p className="ent-welcome-sub">Your complete weekly class schedule for Semester 6</p>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {timetable.map((day, i) => (
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
                <div key={j} style={{ padding: "0.875rem", background: "#f8fafc", borderRadius: "10px", borderLeft: "3px solid " + typeColors[slot.type] }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.875rem" }}>{slot.subject}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.75rem", color: typeColors[slot.type], fontWeight: 700 }}><Clock size={12} /> {slot.time}</span>
                  </div>
                  <div style={{ display: "flex", gap: "1rem", fontSize: "0.72rem", color: "#64748b" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 3 }}><MapPin size={11} /> {slot.room}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 3 }}><User size={11} /> {slot.teacher}</span>
                  </div>
                  <span style={{ display: "inline-block", marginTop: "0.4rem", padding: "0.15rem 0.5rem", background: typeColors[slot.type] + "18", color: typeColors[slot.type], borderRadius: "50px", fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase" }}>{slot.type}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
)

export default StudentTimetable
