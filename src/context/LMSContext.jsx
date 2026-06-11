import { createContext, useContext, useState, useEffect } from 'react'

const LMSContext = createContext()

export const useLMS = () => {
  const context = useContext(LMSContext)
  if (!context) {
    throw new Error('useLMS must be used within LMSProvider')
  }
  return context
}

export const LMSProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([])
  const [currentCourse, setCurrentCourse] = useState(null)
  const [progress, setProgress] = useState({})
  const [bookmarks, setBookmarks] = useState([])
  const [notes, setNotes] = useState([])

  // Load data from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('lms_progress')
    const savedBookmarks = localStorage.getItem('lms_bookmarks')
    const savedNotes = localStorage.getItem('lms_notes')
    
    if (savedProgress) setProgress(JSON.parse(savedProgress))
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks))
    if (savedNotes) setNotes(JSON.parse(savedNotes))
  }, [])

  // Save progress
  const updateProgress = (courseId, lessonId, progressData) => {
    const newProgress = {
      ...progress,
      [courseId]: {
        ...progress[courseId],
        [lessonId]: progressData
      }
    }
    setProgress(newProgress)
    localStorage.setItem('lms_progress', JSON.stringify(newProgress))
  }

  // Add bookmark
  const addBookmark = (courseId, lessonId, timestamp, title) => {
    const newBookmark = {
      id: Date.now(),
      courseId,
      lessonId,
      timestamp,
      title,
      createdAt: new Date().toISOString()
    }
    const newBookmarks = [...bookmarks, newBookmark]
    setBookmarks(newBookmarks)
    localStorage.setItem('lms_bookmarks', JSON.stringify(newBookmarks))
  }

  // Add note
  const addNote = (courseId, lessonId, content, timestamp) => {
    const newNote = {
      id: Date.now(),
      courseId,
      lessonId,
      content,
      timestamp,
      createdAt: new Date().toISOString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
    localStorage.setItem('lms_notes', JSON.stringify(newNotes))
  }

  const value = {
    enrolledCourses,
    setEnrolledCourses,
    currentCourse,
    setCurrentCourse,
    progress,
    updateProgress,
    bookmarks,
    addBookmark,
    notes,
    addNote
  }

  return <LMSContext.Provider value={value}>{children}</LMSContext.Provider>
}
