import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { LMSProvider } from './context/LMSContext'
import { QuizProvider } from './context/QuizContext'
import { PaymentProvider } from './context/PaymentContext'
import { SiteContentProvider } from './context/SiteContentContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import UndergraduatePrograms from './pages/courses/UndergraduatePrograms'
import DiplomaPrograms from './pages/courses/DiplomaPrograms'
import CertificateCourses from './pages/courses/CertificateCourses'
import ProfessionalCourses from './pages/courses/ProfessionalCourses'
import OnlineCourses from './pages/courses/OnlineCourses'
import AcademicCalendar from './pages/courses/AcademicCalendar'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Admissions from './pages/Admissions'
import Faculty from './pages/Faculty'
import Achievements from './pages/Achievements'
import Infrastructure from './pages/Infrastructure'
import FAQs from './pages/FAQs'
import StudentLogin from './pages/StudentLogin'
import TeacherLogin from './pages/TeacherLogin'
import AdminLogin from './pages/AdminLogin'
// New Pages
import Library from './pages/Library'
import Research from './pages/Research'
import Placements from './pages/Placements'
import Alumni from './pages/Alumni'
import Downloads from './pages/Downloads'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import RefundPage from './pages/RefundPage'
import Sitemap from './pages/Sitemap'
// Elite Package Pages
import Hostel from './pages/Hostel'
import Transport from './pages/Transport'
import Careers from './pages/Careers'
import FAQPage from './pages/FAQPage'
import AlumniPortal from './pages/AlumniPortal'
import LibraryCatalog from './pages/library/LibraryCatalog'
// Elite Package Components
import WhatsAppChat from './components/WhatsAppChat'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
// Student Pages
import StudentDashboard from './pages/student/StudentDashboard'
import StudentCourses from './pages/student/StudentCourses'
import StudentAttendance from './pages/student/StudentAttendance'
import StudentAssignments from './pages/student/StudentAssignments'
import StudentGrades from './pages/student/StudentGrades'
import StudentTimetable from './pages/student/StudentTimetable'
import StudentFees from './pages/student/StudentFees'
import StudentLibrary from './pages/student/StudentLibrary'
import StudentProfile from './pages/student/StudentProfile'

// Teacher Pages
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import TeacherClasses from './pages/teacher/TeacherClasses'
import TeacherStudents from './pages/teacher/TeacherStudents'
import TeacherAttendance from './pages/teacher/TeacherAttendance'
import TeacherGrades from './pages/teacher/TeacherGrades'
import TeacherAssignments from './pages/teacher/TeacherAssignments'
import TeacherResources from './pages/teacher/TeacherResources'
import TeacherSchedule from './pages/teacher/TeacherSchedule'
import TeacherProfile from './pages/teacher/TeacherProfile'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminStudents from './pages/admin/AdminStudents'
import AdminTeachers from './pages/admin/AdminTeachers'
import AdminCourses from './pages/admin/AdminCourses'
import AdminAdmissions from './pages/admin/AdminAdmissions'
import AdminAnnouncements from './pages/admin/AdminAnnouncements'
import AdminFees from './pages/admin/AdminFees'
import AdminAttendance from './pages/admin/AdminAttendance'
import AdminReports from './pages/admin/AdminReports'
import AdminSettings from './pages/admin/AdminSettings'
import AdminCMS from './pages/admin/AdminCMS'
import AdminLMS from './pages/admin/AdminLMS'
import AdminAssessments from './pages/admin/AdminAssessments'
import AdminPayments from './pages/admin/AdminPayments'
import CourseDetail from './pages/CourseDetail'
import BlogDetail from './pages/BlogDetail'
import EventDetail from './pages/EventDetail'

// LMS Pages
import StudentLMS from './pages/lms/StudentLMS'
import CoursePlayer from './pages/lms/CoursePlayer'
import CourseCatalog from './pages/lms/CourseCatalog'
import TeacherLMS from './pages/lms/TeacherLMS'
import CourseManagement from './pages/lms/CourseManagement'
import CreateQuiz from './pages/lms/CreateQuiz'

// Quiz Pages
import QuizTaker from './pages/quiz/QuizTaker'
import QuizResults from './pages/quiz/QuizResults'

// Payment Pages
import CourseCheckout from './pages/payment/CourseCheckout'
import PaymentSuccess from './pages/payment/PaymentSuccess'
import PaymentHistory from './pages/payment/PaymentHistory'

// Forum Pages
import ForumBoard from './pages/forum/ForumBoard'
import ThreadView from './pages/forum/ThreadView'

// Analytics Pages
import StudentAnalytics from './pages/analytics/StudentAnalytics'

import './styles/animations.css'

// Scroll to top component -- skips dashboard routes (they manage their own scroll)
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const isDashboard = pathname.startsWith('/student-dashboard') ||
                        pathname.startsWith('/teacher-dashboard') ||
                        pathname.startsWith('/admin')
    if (!isDashboard) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

// Dynamic page title component
function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'Premier College of Excellence - Shaping Tomorrow\'s Leaders',
      '/about': 'About Us | Premier College',
      '/courses': 'Courses & Programs | Premier College',
      '/events': 'Events & Activities | Premier College',
      '/gallery': 'Photo Gallery | Premier College',
      '/blog': 'News & Blog | Premier College',
      '/contact': 'Contact Us | Premier College',
      '/admissions': 'Admissions | Premier College',
      '/faqs': 'FAQs | Premier College',
      '/student-login': 'Student Login | Premier College',
      '/teacher-login': 'Teacher Login | Premier College',
      '/admin-login': 'Admin Login | Premier College',
      '/student-dashboard': 'Student Dashboard | Premier College',
      '/teacher-dashboard': 'Teacher Dashboard | Premier College',
      '/admin': 'Admin Dashboard | Premier College',
    }

    // Check for exact match first
    if (titles[pathname]) {
      document.title = titles[pathname]
    } 
    // Check for partial matches
    else if (pathname.startsWith('/student-dashboard')) {
      document.title = 'Student Dashboard | Premier College'
    } else if (pathname.startsWith('/teacher-dashboard')) {
      document.title = 'Teacher Dashboard | Premier College'
    } else if (pathname.startsWith('/admin')) {
      document.title = 'Admin Dashboard | Premier College'
    } else if (pathname.startsWith('/courses/')) {
      document.title = 'Course Details | Premier College'
    } else if (pathname.startsWith('/events/')) {
      document.title = 'Event Details | Premier College'
    } else if (pathname.startsWith('/blog/')) {
      document.title = 'Blog Post | Premier College'
    } else {
      document.title = 'Premier College of Excellence - Shaping Tomorrow\'s Leaders'
    }
  }, [pathname])

  return null
}

// Conditional Footer component
function ConditionalFooter() {
  const { pathname } = useLocation()
  const isDashboardRoute = pathname.startsWith('/student-dashboard') || 
                          pathname.startsWith('/teacher-dashboard') || 
                          pathname.startsWith('/admin')
  
  return !isDashboardRoute ? <Footer /> : null
}

// Conditional Navbar component
function ConditionalNavbar() {
  const { pathname } = useLocation()
  const isDashboardRoute = pathname.startsWith('/student-dashboard') || 
                          pathname.startsWith('/teacher-dashboard') || 
                          pathname.startsWith('/admin')
  
  return !isDashboardRoute ? <Navbar /> : null
}

function App() {
  useEffect(() => {
    // Service worker completely disabled - causes issues with Vite dev server
    // Re-enable in production if needed
  }, [])

  return (
    <Router>
      <LanguageProvider>
      <AuthProvider>
        <SiteContentProvider>
        <LMSProvider>
          <QuizProvider>
            <PaymentProvider>
              <ScrollToTop />
              <PageTitle />
              <div className="app">
                <ConditionalNavbar />
                <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/undergraduate" element={<UndergraduatePrograms />} />
            <Route path="/courses/diploma" element={<DiplomaPrograms />} />
            <Route path="/courses/certificate" element={<CertificateCourses />} />
            <Route path="/courses/professional" element={<ProfessionalCourses />} />
            <Route path="/courses/online" element={<OnlineCourses />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faqs" element={<FAQs />} />
            
            {/* New Resource Pages */}
            <Route path="/library" element={<Library />} />
            <Route path="/library/catalog" element={<LibraryCatalog />} />
            <Route path="/research" element={<Research />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/alumni-portal" element={<AlumniPortal />} />
            <Route path="/downloads" element={<Downloads />} />
            
            {/* Elite Package Pages */}
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQPage />} />
            
            {/* Policy Pages */}
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPage />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Login Routes */}
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/teacher-login" element={<TeacherLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            
            {/* Protected Student Dashboard Routes */}
            <Route 
              path="/student-dashboard" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/courses" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentCourses />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/attendance" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentAttendance />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/assignments" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentAssignments />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/grades" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentGrades />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/timetable" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentTimetable />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/fees" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentFees />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/library" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentLibrary />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/profile" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentProfile />
                </ProtectedRoute>
              } 
            />

            {/* LMS Routes */}
            <Route 
              path="/student-dashboard/lms" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentLMS />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/catalog" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <CourseCatalog />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/course/:courseId" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <CoursePlayer />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/quiz/:quizId" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <QuizTaker />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/quiz/:quizId/results" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <QuizResults />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/checkout/:courseId" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <CourseCheckout />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/payment-success" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <PaymentSuccess />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/payment-history" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <PaymentHistory />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/forum" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <ForumBoard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/forum/:threadId" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <ThreadView />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/student-dashboard/lms/analytics" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentAnalytics />
                </ProtectedRoute>
              } 
            />

            {/* Protected Teacher Dashboard Routes */}
            <Route 
              path="/teacher-dashboard" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/classes" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherClasses />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/attendance" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherAttendance />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/grades" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherGrades />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/assignments" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherAssignments />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/students" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherStudents />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/resources" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherResources />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/schedule" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherSchedule />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/profile" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherProfile />
                </ProtectedRoute>
              } 
            />

            {/* Teacher LMS Routes */}
            <Route 
              path="/teacher-dashboard/lms" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherLMS />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/lms/create-course" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <CourseManagement />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/teacher-dashboard/lms/create-quiz" 
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <CreateQuiz />
                </ProtectedRoute>
              } 
            />

            {/* Protected Admin Dashboard Routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/students" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminStudents />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/teachers" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminTeachers />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/courses" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminCourses />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/admissions" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminAdmissions />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/fees" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminFees />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/attendance" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminAttendance />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/reports" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminReports />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/announcements" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminAnnouncements />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/settings" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminSettings />
                </ProtectedRoute>
              } 
            />
            <Route path="/admin/cms" element={<ProtectedRoute allowedRoles={['admin']}><AdminCMS /></ProtectedRoute>} />
            <Route path="/admin/lms" element={<ProtectedRoute allowedRoles={['admin']}><AdminLMS /></ProtectedRoute>} />
            <Route path="/admin/assessments" element={<ProtectedRoute allowedRoles={['admin']}><AdminAssessments /></ProtectedRoute>} />
            <Route path="/admin/payments" element={<ProtectedRoute allowedRoles={['admin']}><AdminPayments /></ProtectedRoute>} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <ConditionalFooter />
          <WhatsAppChat />
        </div>
      </PaymentProvider>
    </QuizProvider>
  </LMSProvider>
</SiteContentProvider>
</AuthProvider>
</LanguageProvider>
    </Router>
  )
}

export default App
