import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { availableCourses } from '../../data/lmsData'
import { Star, Clock, Users, TrendingUp, Search, Filter } from 'lucide-react'
import './LMS.css'

const CourseCatalog = () => {
  const navigate = useNavigate()
  const [courses, setCourses] = useState(availableCourses)
  const [filteredCourses, setFilteredCourses] = useState(availableCourses)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const categories = ['All', 'Technology', 'AI & ML', 'Design', 'Cloud', 'Mobile', 'Data Science', 'Marketing']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  useEffect(() => {
    let filtered = courses

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory)
    }

    if (selectedLevel !== 'All') {
      filtered = filtered.filter(course => course.level === selectedLevel)
    }

    setFilteredCourses(filtered)
  }, [searchTerm, selectedCategory, selectedLevel, courses])

  const handleEnroll = (courseId) => {
    navigate(`/student-dashboard/lms/checkout/${courseId}`)
  }

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page">
        <div className="page-header">
          <h1>Course Catalog</h1>
          <p>Explore and enroll in world-class courses</p>
        </div>

        <div className="catalog-filters">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <Filter size={18} />
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="catalog-course-card">
              <div className="course-thumbnail">
                <img src={course.thumbnail} alt={course.title} />
                <span className={`level-badge ${course.level.toLowerCase()}`}>
                  {course.level}
                </span>
              </div>
              <div className="course-content">
                <div className="course-category">{course.category}</div>
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-instructor">
                  <span>By {course.instructor}</span>
                </div>
                <div className="course-meta">
                  <div className="meta-item">
                    <Star size={16} fill="#ffc107" stroke="#ffc107" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="course-footer">
                  <div className="course-price">Rs.{course.price.toLocaleString()}</div>
                  <button className="btn-enroll" onClick={() => handleEnroll(course.id)}>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <p>No courses found matching your criteria</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default CourseCatalog
