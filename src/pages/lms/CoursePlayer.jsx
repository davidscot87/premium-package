import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { 
  Play, Pause, Volume2, VolumeX, Maximize, ChevronRight, 
  CheckCircle, Circle, BookOpen, MessageSquare, Download,
  Bookmark, FileText
} from 'lucide-react'
import { lmsCourses } from '../../data/lmsData'
import './LMS.css'

const CoursePlayer = () => {
  const { courseId } = useParams()
  const [course, setCourse] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showNotes, setShowNotes] = useState(false)
  const [notes, setNotes] = useState('')
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const foundCourse = lmsCourses.find(c => c.id === courseId)
    if (foundCourse) {
      setCourse(foundCourse)
      if (foundCourse.modules[0]?.lessons[0]) {
        setCurrentLesson(foundCourse.modules[0].lessons[0])
      }
    }
  }, [courseId])

  const handleLessonSelect = (lesson) => {
    setCurrentLesson(lesson)
    setIsPlaying(false)
    setProgress(0)
  }

  const handleAddBookmark = () => {
    const newBookmark = {
      id: Date.now(),
      lessonId: currentLesson.id,
      timestamp: progress,
      title: currentLesson.title,
      note: notes
    }
    setBookmarks([...bookmarks, newBookmark])
    alert('Bookmark added!')
  }

  const handleSaveNotes = () => {
    localStorage.setItem(`notes-${courseId}-${currentLesson?.id}`, notes)
    alert('Notes saved!')
  }

  if (!course) {
    return (
      <DashboardLayout role="student">
        <div className="dashboard-page">
          <p>Loading course...</p>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout role="student">
      <div className="course-player-page">
        <div className="player-container">
          {/* Video Player */}
          <div className="video-player">
            <div className="video-screen">
              <img 
                src={course.thumbnail} 
                alt={currentLesson?.title}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
              <div className="video-overlay">
                <button 
                  className="play-pause-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={48} /> : <Play size={48} />}
                </button>
              </div>
            </div>
            
            {/* Video Controls */}
            <div className="video-controls">
              <div className="progress-bar-container">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progress}
                  onChange={(e) => setProgress(e.target.value)}
                  className="video-progress"
                />
              </div>
              <div className="controls-row">
                <div className="controls-left">
                  <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <span className="time-display">
                    {currentLesson?.duration || '00:00'}
                  </span>
                </div>
                <div className="controls-right">
                  <button onClick={handleAddBookmark} title="Add Bookmark">
                    <Bookmark size={20} />
                  </button>
                  <button title="Fullscreen">
                    <Maximize size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="lesson-info">
            <h2>{currentLesson?.title}</h2>
            <p>{course.title} * {course.instructor}</p>
            <div className="lesson-actions">
              <button className="btn-primary" onClick={() => setShowNotes(!showNotes)}>
                <FileText size={16} />
                {showNotes ? 'Hide Notes' : 'Take Notes'}
              </button>
              <button className="btn-secondary">
                <Download size={16} />
                Download Resources
              </button>
              <button className="btn-secondary">
                <MessageSquare size={16} />
                Ask Question
              </button>
            </div>
          </div>

          {/* Notes Panel */}
          {showNotes && (
            <div className="notes-panel">
              <h3>My Notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Take notes here..."
                rows="6"
              />
              <button className="btn-primary" onClick={handleSaveNotes}>
                Save Notes
              </button>
            </div>
          )}
        </div>

        {/* Sidebar - Course Content */}
        <div className="course-sidebar">
          <div className="sidebar-header">
            <h3>Course Content</h3>
            <span className="completion-badge">
              {course.progress}% Complete
            </span>
          </div>

          <div className="modules-list">
            {course.modules.map((module, moduleIndex) => (
              <div key={module.id} className="module-section">
                <div className="module-header">
                  <BookOpen size={18} />
                  <span>Module {moduleIndex + 1}: {module.title}</span>
                </div>
                <div className="lessons-list">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`lesson-item ${currentLesson?.id === lesson.id ? 'active' : ''}`}
                      onClick={() => handleLessonSelect(lesson)}
                    >
                      <div className="lesson-status">
                        {lesson.completed ? (
                          <CheckCircle size={18} className="completed-icon" />
                        ) : (
                          <Circle size={18} />
                        )}
                      </div>
                      <div className="lesson-details">
                        <span className="lesson-title">{lesson.title}</span>
                        <span className="lesson-duration">{lesson.duration}</span>
                      </div>
                      {currentLesson?.id === lesson.id && (
                        <ChevronRight size={18} className="active-indicator" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bookmarks */}
          {bookmarks.length > 0 && (
            <div className="bookmarks-section">
              <h4>My Bookmarks</h4>
              {bookmarks.map(bookmark => (
                <div key={bookmark.id} className="bookmark-item">
                  <Bookmark size={14} />
                  <span>{bookmark.title} - {bookmark.timestamp}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CoursePlayer
