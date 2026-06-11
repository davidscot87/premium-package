// Mock LMS Data for Demo

export const lmsCourses = [
  {
    id: 'lms-1',
    title: 'Advanced Web Development',
    instructor: 'Dr. Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    duration: '12 weeks',
    level: 'Advanced',
    enrolled: 245,
    rating: 4.8,
    progress: 65,
    category: 'Technology',
    description: 'Master modern web development with React, Node.js, and cloud deployment',
    modules: [
      {
        id: 'm1',
        title: 'Introduction to Modern Web',
        lessons: [
          { id: 'l1', title: 'Course Overview', type: 'video', duration: '15:30', completed: true },
          { id: 'l2', title: 'Setting Up Environment', type: 'video', duration: '22:45', completed: true },
          { id: 'l3', title: 'HTML5 & CSS3 Basics', type: 'video', duration: '35:20', completed: false }
        ]
      },
      {
        id: 'm2',
        title: 'React Fundamentals',
        lessons: [
          { id: 'l4', title: 'Components & Props', type: 'video', duration: '28:15', completed: false },
          { id: 'l5', title: 'State Management', type: 'video', duration: '32:40', completed: false },
          { id: 'l6', title: 'Hooks Deep Dive', type: 'video', duration: '45:30', completed: false }
        ]
      }
    ]
  },
  {
    id: 'lms-2',
    title: 'Data Science with Python',
    instructor: 'Prof. Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    duration: '10 weeks',
    level: 'Intermediate',
    enrolled: 189,
    rating: 4.9,
    progress: 0,
    category: 'Data Science',
    description: 'Learn data analysis, visualization, and machine learning with Python',
    modules: [
      {
        id: 'm1',
        title: 'Python Basics',
        lessons: [
          { id: 'l1', title: 'Introduction to Python', type: 'video', duration: '18:20', completed: false },
          { id: 'l2', title: 'Data Types & Structures', type: 'video', duration: '25:15', completed: false }
        ]
      }
    ]
  },
  {
    id: 'lms-3',
    title: 'Digital Marketing Mastery',
    instructor: 'Emma Williams',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    duration: '8 weeks',
    level: 'Beginner',
    enrolled: 312,
    rating: 4.7,
    progress: 30,
    category: 'Marketing',
    description: 'Complete guide to digital marketing, SEO, and social media strategies',
    modules: [
      {
        id: 'm1',
        title: 'Marketing Fundamentals',
        lessons: [
          { id: 'l1', title: 'What is Digital Marketing?', type: 'video', duration: '12:30', completed: true },
          { id: 'l2', title: 'Market Research', type: 'video', duration: '20:45', completed: false }
        ]
      }
    ]
  }
]

export const availableCourses = [
  {
    id: 'course-1',
    title: 'Machine Learning A-Z',
    instructor: 'Dr. Alex Kumar',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    price: 4999,
    duration: '15 weeks',
    level: 'Advanced',
    students: 1250,
    rating: 4.9,
    category: 'AI & ML',
    description: 'Comprehensive machine learning course from basics to advanced algorithms'
  },
  {
    id: 'course-2',
    title: 'UI/UX Design Bootcamp',
    instructor: 'Jessica Martinez',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    price: 3499,
    duration: '8 weeks',
    level: 'Intermediate',
    students: 890,
    rating: 4.8,
    category: 'Design',
    description: 'Learn user interface and experience design with industry tools'
  },
  {
    id: 'course-3',
    title: 'Cloud Computing with AWS',
    instructor: 'Robert Taylor',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
    price: 5999,
    duration: '12 weeks',
    level: 'Advanced',
    students: 756,
    rating: 4.7,
    category: 'Cloud',
    description: 'Master AWS services and cloud architecture patterns'
  },
  {
    id: 'course-4',
    title: 'Mobile App Development',
    instructor: 'Lisa Anderson',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
    price: 4499,
    duration: '10 weeks',
    level: 'Intermediate',
    students: 1120,
    rating: 4.8,
    category: 'Mobile',
    description: 'Build iOS and Android apps with React Native'
  }
]

export const quizData = [
  {
    id: 'quiz-1',
    courseId: 'lms-1',
    title: 'React Fundamentals Quiz',
    description: 'Test your knowledge of React basics',
    duration: 30,
    totalQuestions: 10,
    passingScore: 70,
    attempts: 3,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        question: 'What is React?',
        options: [
          'A JavaScript library for building user interfaces',
          'A programming language',
          'A database',
          'An operating system'
        ],
        correctAnswer: 0,
        points: 10
      },
      {
        id: 'q2',
        type: 'mcq',
        question: 'Which hook is used for side effects?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        correctAnswer: 1,
        points: 10
      },
      {
        id: 'q3',
        type: 'true-false',
        question: 'React components must return JSX',
        correctAnswer: true,
        points: 10
      }
    ]
  }
]

export const forumThreads = [
  {
    id: 'thread-1',
    courseId: 'lms-1',
    title: 'How to optimize React performance?',
    author: 'John Doe',
    authorAvatar: 'JD',
    createdAt: '2024-03-05T10:30:00',
    replies: 12,
    views: 145,
    upvotes: 23,
    tags: ['React', 'Performance', 'Optimization'],
    content: 'I\'m working on a large React application and noticing some performance issues...',
    solved: true
  },
  {
    id: 'thread-2',
    courseId: 'lms-1',
    title: 'Best practices for state management',
    author: 'Jane Smith',
    authorAvatar: 'JS',
    createdAt: '2024-03-06T14:20:00',
    replies: 8,
    views: 98,
    upvotes: 15,
    tags: ['React', 'State Management'],
    content: 'What are the current best practices for managing state in React applications?',
    solved: false
  }
]

export const studentAnalytics = {
  overallProgress: 65,
  coursesCompleted: 3,
  coursesInProgress: 2,
  totalHoursLearned: 45,
  quizzesTaken: 12,
  averageScore: 85,
  certificates: 3,
  streak: 7,
  weeklyActivity: [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.2 },
    { day: 'Wed', hours: 1.8 },
    { day: 'Thu', hours: 4.1 },
    { day: 'Fri', hours: 2.9 },
    { day: 'Sat', hours: 3.5 },
    { day: 'Sun', hours: 2.0 }
  ],
  performanceByCategory: [
    { category: 'Technology', score: 88 },
    { category: 'Design', score: 82 },
    { category: 'Business', score: 90 },
    { category: 'Marketing', score: 85 }
  ]
}

export const teacherCourses = [
  {
    id: 'tc-1',
    title: 'Advanced Web Development',
    students: 245,
    completionRate: 68,
    averageScore: 85,
    activeStudents: 198,
    modules: 8,
    assignments: 12,
    quizzes: 6
  },
  {
    id: 'tc-2',
    title: 'React Masterclass',
    students: 189,
    completionRate: 72,
    averageScore: 88,
    activeStudents: 156,
    modules: 6,
    assignments: 10,
    quizzes: 5
  }
]

export const paymentHistory = [
  {
    id: 'pay-1',
    courseTitle: 'Machine Learning A-Z',
    amount: 4999,
    date: '2024-02-15',
    status: 'completed',
    method: 'Credit Card',
    transactionId: 'TXN123456789'
  },
  {
    id: 'pay-2',
    courseTitle: 'UI/UX Design Bootcamp',
    amount: 3499,
    date: '2024-01-20',
    status: 'completed',
    method: 'UPI',
    transactionId: 'TXN987654321'
  }
]
