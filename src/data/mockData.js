// Mock Data for Dashboard System

export const students = [
  { id: 'STU2024001', name: 'Priya Sharma', email: 'priya@college.edu', course: 'Computer Science', semester: 6, cgpa: 8.9, attendance: 92, phone: '9876543210', dob: '2003-05-15', address: 'Mumbai, Maharashtra', profilePicture: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80' },
  { id: 'STU2024002', name: 'Rahul Kumar', email: 'rahul@college.edu', course: 'Mechanical Engineering', semester: 4, cgpa: 8.5, attendance: 88, phone: '9876543211', dob: '2004-03-20', address: 'Delhi, India', profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80' },
  { id: 'STU2024003', name: 'Ananya Singh', email: 'ananya@college.edu', course: 'Electronics', semester: 6, cgpa: 9.2, attendance: 95, phone: '9876543212', dob: '2003-07-10', address: 'Bangalore, Karnataka', profilePicture: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80' },
  { id: 'STU2024004', name: 'Arjun Patel', email: 'arjun@college.edu', course: 'Civil Engineering', semester: 2, cgpa: 7.8, attendance: 85, phone: '9876543213', dob: '2005-01-25', address: 'Ahmedabad, Gujarat', profilePicture: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80' },
  { id: 'STU2024005', name: 'Sneha Reddy', email: 'sneha@college.edu', course: 'Computer Science', semester: 8, cgpa: 9.0, attendance: 93, phone: '9876543214', dob: '2002-11-30', address: 'Hyderabad, Telangana', profilePicture: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80' },
]

export const teachers = [
  { id: 'FAC2020015', name: 'Dr. Meera Sharma', email: 'meera@college.edu', department: 'Computer Science', designation: 'Professor', qualification: 'Ph.D.', experience: 15, phone: '9876543220', specialization: 'Machine Learning, AI', profilePicture: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80' },
  { id: 'FAC2019008', name: 'Prof. Rajesh Kumar', email: 'rajesh@college.edu', department: 'Mechanical', designation: 'Associate Professor', qualification: 'M.Tech', experience: 12, phone: '9876543221', specialization: 'Thermodynamics', profilePicture: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80' },
  { id: 'FAC2021003', name: 'Dr. Anjali Verma', email: 'anjali@college.edu', department: 'Electronics', designation: 'Assistant Professor', qualification: 'Ph.D.', experience: 8, phone: '9876543222', specialization: 'VLSI Design', profilePicture: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80' },
  { id: 'FAC2018012', name: 'Prof. Vikram Singh', email: 'vikram@college.edu', department: 'Civil', designation: 'Professor', qualification: 'Ph.D.', experience: 18, phone: '9876543223', specialization: 'Structural Engineering', profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80' },
]

export const courses = [
  { id: 'CS101', name: 'Data Structures', code: 'CS101', credits: 4, semester: 3, department: 'Computer Science', teacher: 'Dr. Meera Sharma', students: 60, schedule: 'Mon, Wed, Fri 10:00 AM' },
  { id: 'CS201', name: 'Algorithms', code: 'CS201', credits: 4, semester: 4, department: 'Computer Science', teacher: 'Dr. Meera Sharma', students: 55, schedule: 'Tue, Thu 2:00 PM' },
  { id: 'CS301', name: 'Machine Learning', code: 'CS301', credits: 4, semester: 6, department: 'Computer Science', teacher: 'Dr. Meera Sharma', students: 50, schedule: 'Mon, Wed 4:00 PM' },
  { id: 'ME101', name: 'Thermodynamics', code: 'ME101', credits: 3, semester: 3, department: 'Mechanical', teacher: 'Prof. Rajesh Kumar', students: 65, schedule: 'Tue, Thu, Fri 11:00 AM' },
  { id: 'EC101', name: 'Digital Electronics', code: 'EC101', credits: 4, semester: 3, department: 'Electronics', teacher: 'Dr. Anjali Verma', students: 58, schedule: 'Mon, Wed, Fri 9:00 AM' },
  { id: 'CE101', name: 'Structural Analysis', code: 'CE101', credits: 4, semester: 4, department: 'Civil', teacher: 'Prof. Vikram Singh', students: 52, schedule: 'Tue, Thu 3:00 PM' },
]

export const assignments = [
  { id: 'ASG001', title: 'Data Structures Lab Assignment', course: 'CS101', dueDate: '2026-03-15', status: 'pending', marks: null, totalMarks: 20, description: 'Implement Binary Search Tree operations' },
  { id: 'ASG002', title: 'Algorithm Analysis Report', course: 'CS201', dueDate: '2026-03-20', status: 'submitted', marks: 18, totalMarks: 20, description: 'Analyze time complexity of sorting algorithms' },
  { id: 'ASG003', title: 'ML Model Implementation', course: 'CS301', dueDate: '2026-03-25', status: 'pending', marks: null, totalMarks: 30, description: 'Build and train a classification model' },
  { id: 'ASG004', title: 'Thermodynamics Problem Set', course: 'ME101', dueDate: '2026-03-18', status: 'graded', marks: 25, totalMarks: 30, description: 'Solve heat transfer problems' },
]

export const attendance = [
  { date: '2026-03-01', course: 'CS101', status: 'present', time: '10:00 AM' },
  { date: '2026-03-01', course: 'CS201', status: 'present', time: '2:00 PM' },
  { date: '2026-03-02', course: 'CS301', status: 'absent', time: '4:00 PM' },
  { date: '2026-03-03', course: 'CS101', status: 'present', time: '10:00 AM' },
  { date: '2026-03-04', course: 'CS201', status: 'present', time: '2:00 PM' },
]

export const grades = [
  { semester: 5, course: 'CS101', courseName: 'Data Structures', credits: 4, grade: 'A+', gradePoint: 10, marks: 95 },
  { semester: 5, course: 'CS102', courseName: 'Database Systems', credits: 4, grade: 'A', gradePoint: 9, marks: 88 },
  { semester: 5, course: 'CS103', courseName: 'Operating Systems', credits: 3, grade: 'A', gradePoint: 9, marks: 86 },
  { semester: 4, course: 'CS104', courseName: 'Computer Networks', credits: 4, grade: 'A+', gradePoint: 10, marks: 92 },
  { semester: 4, course: 'CS105', courseName: 'Software Engineering', credits: 3, grade: 'A', gradePoint: 9, marks: 87 },
]

export const timetable = [
  { day: 'Monday', slots: [
    { time: '9:00 AM', subject: 'Machine Learning', room: 'Lab C-301', teacher: 'Dr. Meera Sharma' },
    { time: '11:00 AM', subject: 'Web Development', room: 'Lab A-101', teacher: 'Prof. Amit Shah' },
    { time: '2:00 PM', subject: 'Cloud Computing', room: 'Room B-205', teacher: 'Dr. Priya Gupta' },
  ]},
  { day: 'Tuesday', slots: [
    { time: '10:00 AM', subject: 'Data Analytics', room: 'Lab C-302', teacher: 'Prof. Ravi Kumar' },
    { time: '1:00 PM', subject: 'Cyber Security', room: 'Room A-301', teacher: 'Dr. Neha Patel' },
    { time: '3:00 PM', subject: 'Mobile App Development', room: 'Lab B-201', teacher: 'Prof. Suresh Reddy' },
  ]},
  { day: 'Wednesday', slots: [
    { time: '9:00 AM', subject: 'Machine Learning', room: 'Lab C-301', teacher: 'Dr. Meera Sharma' },
    { time: '11:00 AM', subject: 'Web Development', room: 'Lab A-101', teacher: 'Prof. Amit Shah' },
  ]},
  { day: 'Thursday', slots: [
    { time: '10:00 AM', subject: 'Data Analytics', room: 'Lab C-302', teacher: 'Prof. Ravi Kumar' },
    { time: '1:00 PM', subject: 'Cyber Security', room: 'Room A-301', teacher: 'Dr. Neha Patel' },
  ]},
  { day: 'Friday', slots: [
    { time: '9:00 AM', subject: 'Project Work', room: 'Lab C-303', teacher: 'Dr. Meera Sharma' },
    { time: '2:00 PM', subject: 'Seminar', room: 'Auditorium', teacher: 'Various' },
  ]},
]

export const fees = {
  totalFees: 120000,
  paidAmount: 80000,
  dueAmount: 40000,
  dueDate: '2026-04-30',
  installments: [
    { id: 1, amount: 40000, dueDate: '2025-08-15', status: 'paid', paidDate: '2025-08-10', receipt: 'RCP001' },
    { id: 2, amount: 40000, dueDate: '2025-12-15', status: 'paid', paidDate: '2025-12-12', receipt: 'RCP002' },
    { id: 3, amount: 40000, dueDate: '2026-04-30', status: 'pending', paidDate: null, receipt: null },
  ],
  breakdown: [
    { item: 'Tuition Fee', amount: 80000 },
    { item: 'Lab Fee', amount: 15000 },
    { item: 'Library Fee', amount: 5000 },
    { item: 'Sports Fee', amount: 5000 },
    { item: 'Development Fee', amount: 10000 },
    { item: 'Exam Fee', amount: 5000 },
  ]
}

export const library = [
  { id: 'BK001', title: 'Introduction to Algorithms', author: 'Cormen', isbn: '978-0262033848', issueDate: '2026-02-15', dueDate: '2026-03-15', status: 'issued', fine: 0 },
  { id: 'BK002', title: 'Clean Code', author: 'Robert Martin', isbn: '978-0132350884', issueDate: '2026-02-20', dueDate: '2026-03-20', status: 'issued', fine: 0 },
  { id: 'BK003', title: 'Design Patterns', author: 'Gang of Four', isbn: '978-0201633610', issueDate: '2026-01-10', dueDate: '2026-02-10', status: 'returned', fine: 50 },
]

export const admissions = [
  { id: 'ADM2026001', name: 'Amit Verma', email: 'amit@email.com', phone: '9876543230', course: 'Computer Science', status: 'pending', appliedDate: '2026-02-15', marks: 92 },
  { id: 'ADM2026002', name: 'Pooja Sharma', email: 'pooja@email.com', phone: '9876543231', course: 'Electronics', status: 'approved', appliedDate: '2026-02-10', marks: 88 },
  { id: 'ADM2026003', name: 'Karan Singh', email: 'karan@email.com', phone: '9876543232', course: 'Mechanical', status: 'rejected', appliedDate: '2026-02-20', marks: 65 },
  { id: 'ADM2026004', name: 'Neha Gupta', email: 'neha@email.com', phone: '9876543233', course: 'Civil', status: 'pending', appliedDate: '2026-02-25', marks: 85 },
]

export const announcements = [
  { id: 'ANN001', title: 'Mid-term Exams Schedule Released', content: 'Check your exam timetable in the portal', date: '2026-03-05', priority: 'high', audience: 'all' },
  { id: 'ANN002', title: 'Library Extended Hours', content: 'Library will remain open till 10 PM this week', date: '2026-03-06', priority: 'medium', audience: 'students' },
  { id: 'ANN003', title: 'Faculty Meeting', content: 'All faculty members are requested to attend the meeting on Friday', date: '2026-03-04', priority: 'high', audience: 'teachers' },
  { id: 'ANN004', title: 'Sports Day Registration', content: 'Register for annual sports day events by March 15', date: '2026-03-03', priority: 'low', audience: 'students' },
]

export const reports = {
  academic: {
    totalStudents: 1200,
    passPercentage: 92,
    averageCGPA: 8.2,
    toppers: [
      { name: 'Sneha Reddy', cgpa: 9.5, course: 'Computer Science' },
      { name: 'Ananya Singh', cgpa: 9.2, course: 'Electronics' },
      { name: 'Priya Sharma', cgpa: 8.9, course: 'Computer Science' },
    ]
  },
  financial: {
    totalRevenue: 144000000,
    collected: 120000000,
    pending: 24000000,
    expenses: 80000000,
  },
  attendance: {
    overall: 89,
    byDepartment: [
      { department: 'Computer Science', percentage: 92 },
      { department: 'Electronics', percentage: 90 },
      { department: 'Mechanical', percentage: 87 },
      { department: 'Civil', percentage: 85 },
    ]
  }
}
