# Dashboard System - Quick Start Guide

## 🚀 Getting Started

### 1. Start Development Server
```bash
npm run dev
```

### 2. Access Dashboards

#### Student Dashboard
- **Login**: Navigate to `/student-login`
- **Credentials**: Any email/password (mock authentication)
- **Dashboard**: Automatically redirected to `/student-dashboard`

#### Teacher Dashboard
- **Login**: Navigate to `/teacher-login`
- **Credentials**: Any email/password (mock authentication)
- **Dashboard**: Automatically redirected to `/teacher-dashboard`

#### Admin Dashboard
- **Login**: Navigate to `/admin-login`
- **Credentials**: Any email/password (mock authentication)
- **Dashboard**: Automatically redirected to `/admin`

---

## 📱 Available Pages

### Student (9 Pages)
| Page | Route | Features |
|------|-------|----------|
| Dashboard | `/student-dashboard` | Stats, classes, grades, announcements |
| Courses | `/student-dashboard/courses` | Enrolled courses, materials |
| Attendance | `/student-dashboard/attendance` | Attendance %, history |
| Assignments | `/student-dashboard/assignments` | Submit, track assignments |
| Grades | `/student-dashboard/grades` | Semester grades, CGPA |
| Timetable | `/student-dashboard/timetable` | Weekly schedule |
| Fees | `/student-dashboard/fees` | Payment, installments |
| Library | `/student-dashboard/library` | Issued books |
| Profile | `/student-dashboard/profile` | Edit profile |

### Teacher (3 Pages)
| Page | Route | Features |
|------|-------|----------|
| Dashboard | `/teacher-dashboard` | Stats, today's schedule |
| Classes | `/teacher-dashboard/classes` | Assigned courses |
| Students | `/teacher-dashboard/students` | Student list |

### Admin (6 Pages)
| Page | Route | Features |
|------|-------|----------|
| Dashboard | `/admin` | College statistics |
| Students | `/admin/students` | Student CRUD |
| Teachers | `/admin/teachers` | Teacher CRUD |
| Courses | `/admin/courses` | Course management |
| Admissions | `/admin/admissions` | Application review |
| Announcements | `/admin/announcements` | Create announcements |

---

## 🎨 Key Features

### Navigation
- **Sidebar**: Collapsible menu with all pages
- **Active State**: Current page highlighted
- **Icons**: Visual indicators for each section
- **Logout**: Available in sidebar footer

### Data Display
- **Stat Cards**: Key metrics at a glance
- **Data Tables**: Searchable, paginated tables
- **Cards**: Information organized in cards
- **Lists**: Structured data presentation

### Interactions
- **Search**: Filter table data
- **Pagination**: Navigate large datasets
- **Tabs**: Organize related content
- **Buttons**: Action triggers (View/Edit/Delete)
- **Forms**: Input and edit data

---

## 🔧 Customization

### Change Colors
Edit CSS files to update:
- Primary: `#1a237e`
- Secondary: `#0d47a1`

### Add New Page
1. Create component in appropriate folder
2. Import in `App.jsx`
3. Add route with `ProtectedRoute`
4. Add menu item in `DashboardLayout.jsx`

### Modify Mock Data
Edit `src/data/mockData.js` to change:
- Student records
- Course information
- Assignments
- Grades
- Any other data

---

## 📊 Components

### Reusable Components
- **DashboardLayout**: Main layout wrapper
- **StatCard**: Statistics display
- **DataTable**: Advanced table with features

### Usage Example
```jsx
import DashboardLayout from '../../components/DashboardLayout'
import StatCard from '../../components/dashboard/StatCard'
import { BookOpen } from 'lucide-react'

const MyPage = () => {
  return (
    <DashboardLayout role="student">
      <div className="dashboard-page-content">
        <StatCard 
          icon={BookOpen}
          title="Total Courses"
          value="6"
          color="blue"
        />
      </div>
    </DashboardLayout>
  )
}
```

---

## 🐛 Troubleshooting

### Page Not Loading
- Check route is added in `App.jsx`
- Verify component import path
- Ensure ProtectedRoute wraps component

### Sidebar Not Showing
- Check DashboardLayout is wrapping content
- Verify role prop is passed correctly

### Data Not Displaying
- Check mock data import
- Verify data structure matches component expectations

---

## 📝 File Locations

### Components
- Layout: `src/components/DashboardLayout.jsx`
- Reusable: `src/components/dashboard/`

### Pages
- Student: `src/pages/student/`
- Teacher: `src/pages/teacher/`
- Admin: `src/pages/admin/`

### Data
- Mock Data: `src/data/mockData.js`

### Styles
- Dashboard: `src/components/DashboardLayout.css`
- Components: `src/components/dashboard/*.css`
- Pages: `src/pages/student/StudentDashboard.css` (shared)

---

## ✅ Testing Checklist

- [ ] All login pages work
- [ ] Redirects to correct dashboard
- [ ] Sidebar navigation functional
- [ ] All pages load without errors
- [ ] Data displays correctly
- [ ] Search works in tables
- [ ] Pagination works
- [ ] Logout returns to homepage
- [ ] Responsive on mobile
- [ ] No console errors

---

## 🎯 Quick Tips

1. **Mock Authentication**: Any credentials work for testing
2. **Role-Based**: Each role sees different sidebar menu
3. **Protected Routes**: Can't access other role's pages
4. **Shared Styles**: Student CSS used across all dashboards
5. **Centralized Data**: All mock data in one file

---

## 📚 Documentation

- **Full Details**: See `DASHBOARD_SYSTEM_COMPLETE.md`
- **Summary**: See `DASHBOARD_IMPLEMENTATION_SUMMARY.md`
- **This Guide**: Quick reference for daily use

---

## 🎉 You're Ready!

Start the dev server and explore all 18 dashboard pages. Everything is fully functional and ready to use!

```bash
npm run dev
```

Then visit:
- http://localhost:5173/student-login
- http://localhost:5173/teacher-login
- http://localhost:5173/admin-login

Happy coding! 🚀
