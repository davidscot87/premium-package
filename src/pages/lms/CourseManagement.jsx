import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { Plus, Trash2, GripVertical, Video, FileText, Link as LinkIcon, Save, ArrowLeft } from 'lucide-react'
import './LMS.css'

const CourseManagement = () => {
  const navigate = useNavigate()
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: 'Technology',
    level: 'Beginner',
    duration: '',
    price: '',
    thumbnail: '',
    modules: []
  })

  const [currentModule, setCurrentModule] = useState({
    title: '',
    lessons: []
  })

  const categories = ['Technology', 'Business', 'Design', 'Marketing', 'Data Science', 'AI & ML']
  const levels = ['Beginner', 'Intermediate', 'Advanced']

  const handleAddLesson = () => {
    const lesson = {
      id: `lesson-${Date.now()}`,
      title: 'New Lesson',
      type: 'video',
      duration: '00:00',
      content: ''
    }
    setCurrentModule({
      ...currentModule,
      lessons: [...currentModule.lessons, lesson]
    })
  }

  const handleAddModule = () => {
    if (currentModule.title && currentModule.lessons.length > 0) {
      setCourseData({
        ...courseData,
        modules: [...courseData.modules, { ...currentModule, id: `module-${Date.now()}` }]
      })
      setCurrentModule({ title: '', lessons: [] })
    }
  }

  const handleSaveCourse = () => {
    // Save to localStorage
    const courses = JSON.parse(localStorage.getItem('teacherCourses') || '[]')
    const newCourse = {
      ...courseData,
      id: `course-${Date.now()}`,
      createdAt: new Date().toISOString(),
      students: 0,
      published: false
    }
    courses.push(newCourse)
    localStorage.setItem('teacherCourses', JSON.stringify(courses))
    
    alert('Course saved successfully!')
    navigate('/teacher-dashboard/lms')
  }

  const handlePublishCourse = () => {
    handleSaveCourse()
    alert('Course published successfully!')
  }

  return (
    <DashboardLayout role="teacher">
      <div className="dashboard-page">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="page-header">
          <h1>Create New Course</h1>
          <p>Build an engaging learning experience</p>
        </div>

        <div className="course-builder">
          <div className="builder-section">
            <h3>Course Information</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Course Title *</label>
                <input
                  type="text"
                  placeholder="e.g., Advanced Web Development"
                  value={courseData.title}
                  onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
                />
              </div>
              <div className="form-group full-width">
                <label>Description *</label>
                <textarea
                  rows="4"
                  placeholder="Describe what students will learn..."
                  value={courseData.description}
                  onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <select value={courseData.category} onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Level *</label>
                <select value={courseData.level} onChange={(e) => setCourseData({ ...courseData, level: e.target.value })}>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  placeholder="e.g., 8 weeks"
                  value={courseData.duration}
                  onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Price (Rs.)</label>
                <input
                  type="number"
                  placeholder="e.g., 4999"
                  value={courseData.price}
                  onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
                />
              </div>
              <div className="form-group full-width">
                <label>Thumbnail URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  value={courseData.thumbnail}
                  onChange={(e) => setCourseData({ ...courseData, thumbnail: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="builder-section">
            <h3>Course Content</h3>
            
            {courseData.modules.length > 0 && (
              <div className="modules-list">
                {courseData.modules.map((module, index) => (
                  <div key={module.id} className="module-item">
                    <div className="module-header">
                      <GripVertical size={20} />
                      <h4>Module {index + 1}: {module.title}</h4>
                      <button className="btn-icon" onClick={() => {
                        const newModules = courseData.modules.filter(m => m.id !== module.id)
                        setCourseData({ ...courseData, modules: newModules })
                      }}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="lessons-count">{module.lessons.length} lessons</div>
                  </div>
                ))}
              </div>
            )}

            <div className="module-builder">
              <h4>Add New Module</h4>
              <div className="form-group">
                <label>Module Title</label>
                <input
                  type="text"
                  placeholder="e.g., Introduction to React"
                  value={currentModule.title}
                  onChange={(e) => setCurrentModule({ ...currentModule, title: e.target.value })}
                />
              </div>

              {currentModule.lessons.length > 0 && (
                <div className="lessons-list">
                  {currentModule.lessons.map((lesson, index) => (
                    <div key={lesson.id} className="lesson-item">
                      <div className="lesson-icon">
                        {lesson.type === 'video' ? <Video size={18} /> : <FileText size={18} />}
                      </div>
                      <input
                        type="text"
                        value={lesson.title}
                        onChange={(e) => {
                          const newLessons = [...currentModule.lessons]
                          newLessons[index].title = e.target.value
                          setCurrentModule({ ...currentModule, lessons: newLessons })
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Duration"
                        value={lesson.duration}
                        onChange={(e) => {
                          const newLessons = [...currentModule.lessons]
                          newLessons[index].duration = e.target.value
                          setCurrentModule({ ...currentModule, lessons: newLessons })
                        }}
                        style={{ width: '100px' }}
                      />
                      <button className="btn-icon" onClick={() => {
                        const newLessons = currentModule.lessons.filter(l => l.id !== lesson.id)
                        setCurrentModule({ ...currentModule, lessons: newLessons })
                      }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="module-actions">
                <button className="btn-secondary" onClick={handleAddLesson}>
                  <Plus size={18} />
                  Add Lesson
                </button>
                <button 
                  className="btn-primary" 
                  onClick={handleAddModule}
                  disabled={!currentModule.title || currentModule.lessons.length === 0}
                >
                  <Plus size={18} />
                  Add Module to Course
                </button>
              </div>
            </div>
          </div>

          <div className="builder-actions">
            <button className="btn-secondary" onClick={handleSaveCourse}>
              <Save size={20} />
              Save as Draft
            </button>
            <button className="btn-primary" onClick={handlePublishCourse}>
              Publish Course
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CourseManagement
