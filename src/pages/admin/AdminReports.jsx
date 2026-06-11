import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import { BarChart3, TrendingUp, Users, DollarSign, Award, Download, Calendar, Activity } from "lucide-react"
import "../student/StudentDashboard.css"
import "./AdminCMS.css"
import "./AdminDashboard.css"

const AdminReports = () => {
  const [period, setPeriod] = useState("month")

  const kpis = [
    { label: "Total Students", value: "1,400", change: "+6.1%", up: true, color: "#6366f1", bg: "#eef2ff", icon: Users },
    { label: "Revenue Collected", value: "Rs.19.2M", change: "+18%", up: true, color: "#10b981", bg: "#ecfdf5", icon: DollarSign },
    { label: "Pass Rate", value: "92.3%", change: "+2.2%", up: true, color: "#f59e0b", bg: "#fffbeb", icon: Award },
    { label: "Attendance Rate", value: "89.2%", change: "+4.7%", up: true, color: "#8b5cf6", bg: "#f5f3ff", icon: Activity },
  ]

  const deptData = [
    { name: "Computer Science", students: 420, revenue: "Rs.6.3M", passRate: 94, attendance: 92 },
    { name: "Business Admin", students: 350, revenue: "Rs.4.2M", passRate: 91, attendance: 88 },
    { name: "Engineering", students: 280, revenue: "Rs.4.2M", passRate: 90, attendance: 87 },
    { name: "Arts & Humanities", students: 210, revenue: "Rs.2.1M", passRate: 93, attendance: 89 },
    { name: "Sciences", students: 140, revenue: "Rs.2.4M", passRate: 88, attendance: 86 },
  ]

  const monthlyData = [
    { month: "Sep", students: 980, revenue: 2.1, attendance: 85.2 },
    { month: "Oct", students: 1050, revenue: 2.3, attendance: 86.5 },
    { month: "Nov", students: 1120, revenue: 2.5, attendance: 84.8 },
    { month: "Dec", students: 1180, revenue: 2.8, attendance: 87.1 },
    { month: "Jan", students: 1250, revenue: 3.1, attendance: 88.3 },
    { month: "Feb", students: 1320, revenue: 3.4, attendance: 87.9 },
    { month: "Mar", students: 1400, revenue: 3.6, attendance: 89.2 },
  ]
  const maxStudents = Math.max(...monthlyData.map(d => d.students))

  return (
    <DashboardLayout role="admin">
      <div className="ent-page">
        <div className="ent-welcome-banner">
          <div className="ent-welcome-left">
            <div className="ent-welcome-avatar"><BarChart3 size={32} /></div>
            <div>
              <p className="ent-greeting">Insights & Analytics</p>
              <h1 className="ent-welcome-name">Detailed Reports</h1>
              <p className="ent-welcome-sub">Comprehensive analytics across all departments and metrics</p>
            </div>
          </div>
          <div className="ent-welcome-right">
            <select value={period} onChange={e => setPeriod(e.target.value)} className="adm-period-select">
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className="ent-qa-btn primary"><Download size={16} /> Export PDF</button>
          </div>
        </div>

        <div className="ent-kpi-grid">
          {kpis.map((k, i) => { const Icon = k.icon; return (
            <div key={i} className="ent-kpi-card" style={{ "--kpi-color": k.color, "--kpi-bg": k.bg }}>
              <div className="ent-kpi-top">
                <div className="ent-kpi-icon"><Icon size={22} /></div>
                <div className={"ent-kpi-badge " + (k.up ? "up" : "down")}><TrendingUp size={11} /> {k.change}</div>
              </div>
              <div className="ent-kpi-value">{k.value}</div>
              <div className="ent-kpi-label">{k.label}</div>
            </div>
          )})}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title"><BarChart3 size={18} /><h2>Enrollment Trend</h2></div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem", height: 160, paddingBottom: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: "0.75rem" }}>
              {monthlyData.map((d, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                  <div style={{ width: "100%", background: "#6366f1", borderRadius: "4px 4px 0 0", height: (d.students / maxStudents) * 130 + "px", minHeight: 4, transition: "height 0.6s ease" }} title={d.students + " students"} />
                  <span style={{ fontSize: "0.65rem", color: "#94a3b8", fontWeight: 600 }}>{d.month}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#10b981", fontWeight: 600 }}>
              <TrendingUp size={14} /> +42.9% growth over 7 months
            </div>
          </div>

          <div className="ent-card">
            <div className="ent-card-header">
              <div className="ent-card-title"><Activity size={18} /><h2>Attendance Trend</h2></div>
            </div>
            <svg viewBox="0 0 380 140" style={{ width: "100%", height: 160 }}>
              <defs>
                <linearGradient id="attGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              {[0,1,2,3].map(i => <line key={i} x1="20" y1={120 - i*35} x2="370" y2={120 - i*35} stroke="#f1f5f9" strokeWidth="1" />)}
              <path d={"M20,120 " + monthlyData.map((d,i) => "L" + (20 + i*52) + "," + (120 - ((d.attendance - 83) / 7) * 100)).join(" ") + " L" + (20+6*52) + ",120 Z"} fill="url(#attGrad)" />
              <path d={monthlyData.map((d,i) => (i===0?"M":"L") + (20+i*52) + "," + (120 - ((d.attendance-83)/7)*100)).join(" ")} fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {monthlyData.map((d,i) => (
                <g key={i}>
                  <circle cx={20+i*52} cy={120-((d.attendance-83)/7)*100} r="4" fill="#6366f1" stroke="white" strokeWidth="2" />
                  <text x={20+i*52} y="135" textAnchor="middle" fill="#94a3b8" fontSize="10">{d.month}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        <div className="ent-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="ent-card-header" style={{ padding: "1.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: 0 }}>
            <div className="ent-card-title"><Users size={18} /><h2>Department-wise Report</h2></div>
            <button className="ent-qa-btn secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}><Download size={16} /> Export</button>
          </div>
          <div className="cms-table-wrap">
            <table className="cms-table">
              <thead><tr><th>Department</th><th>Students</th><th>Revenue</th><th>Pass Rate</th><th>Attendance</th><th>Performance</th></tr></thead>
              <tbody>
                {deptData.map((d, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 700, color: "#0f172a" }}>{d.name}</td>
                    <td style={{ fontWeight: 700, color: "#6366f1" }}>{d.students}</td>
                    <td style={{ fontWeight: 700, color: "#10b981" }}>{d.revenue}</td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{ flex: 1, height: 6, background: "#f1f5f9", borderRadius: 3, overflow: "hidden", maxWidth: 80 }}>
                          <div style={{ height: "100%", width: d.passRate + "%", background: "#10b981" }} />
                        </div>
                        <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>{d.passRate}%</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{ flex: 1, height: 6, background: "#f1f5f9", borderRadius: 3, overflow: "hidden", maxWidth: 80 }}>
                          <div style={{ height: "100%", width: d.attendance + "%", background: "#6366f1" }} />
                        </div>
                        <span style={{ fontSize: "0.78rem", fontWeight: 700 }}>{d.attendance}%</span>
                      </div>
                    </td>
                    <td><span className={"badge " + (d.passRate >= 92 ? "badge-success" : "badge-info")}>
                      {d.passRate >= 92 ? "Excellent" : "Good"}
                    </span></td>
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

export default AdminReports
