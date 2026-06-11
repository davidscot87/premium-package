import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { Clock, AlertCircle, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { quizData } from '../../data/lmsData'
import './Quiz.css'

const QuizTaker = () => {
  const { quizId } = useParams()
  const navigate = useNavigate()
  const [quiz, setQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(null)
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  useEffect(() => {
    const foundQuiz = quizData.find(q => q.id === quizId)
    if (foundQuiz) {
      setQuiz(foundQuiz)
      setTimeRemaining(foundQuiz.duration * 60) // Convert to seconds
    }
  }, [quizId])

  useEffect(() => {
    if (quizStarted && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleSubmitQuiz()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [quizStarted, timeRemaining])

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
    // Auto-save to localStorage
    localStorage.setItem(`quiz-${quizId}-answers`, JSON.stringify({
      ...answers,
      [questionId]: answer
    }))
  }

  const handleSubmitQuiz = () => {
    if (!quiz) return

    let score = 0
    let totalPoints = 0

    quiz.questions.forEach(question => {
      totalPoints += question.points
      if (question.type === 'mcq') {
        if (answers[question.id] === question.correctAnswer) {
          score += question.points
        }
      } else if (question.type === 'true-false') {
        if (answers[question.id] === question.correctAnswer) {
          score += question.points
        }
      }
    })

    const result = {
      quizId: quiz.id,
      score,
      totalPoints,
      percentage: (score / totalPoints) * 100,
      answers,
      submittedAt: new Date().toISOString()
    }

    // Save result
    const results = JSON.parse(localStorage.getItem('quiz-results') || '[]')
    results.push(result)
    localStorage.setItem('quiz-results', JSON.stringify(results))

    // Clear saved answers
    localStorage.removeItem(`quiz-${quizId}-answers`)

    // Navigate to results
    navigate(`/student-dashboard/quiz/results/${quizId}`, { state: { result } })
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getAnsweredCount = () => {
    return Object.keys(answers).length
  }

  if (!quiz) {
    return (
      <DashboardLayout role="student">
        <div className="dashboard-page">
          <p>Loading quiz...</p>
        </div>
      </DashboardLayout>
    )
  }

  if (!quizStarted) {
    return (
      <DashboardLayout role="student">
        <div className="dashboard-page quiz-page">
          <div className="quiz-intro">
            <div className="quiz-intro-card">
              <h1>{quiz.title}</h1>
              <p className="quiz-description">{quiz.description}</p>
              
              <div className="quiz-info-grid">
                <div className="quiz-info-item">
                  <Clock size={24} />
                  <div>
                    <span className="info-label">Duration</span>
                    <span className="info-value">{quiz.duration} minutes</span>
                  </div>
                </div>
                <div className="quiz-info-item">
                  <AlertCircle size={24} />
                  <div>
                    <span className="info-label">Questions</span>
                    <span className="info-value">{quiz.totalQuestions}</span>
                  </div>
                </div>
                <div className="quiz-info-item">
                  <CheckCircle size={24} />
                  <div>
                    <span className="info-label">Passing Score</span>
                    <span className="info-value">{quiz.passingScore}%</span>
                  </div>
                </div>
              </div>

              <div className="quiz-instructions">
                <h3>Instructions:</h3>
                <ul>
                  <li>You have {quiz.duration} minutes to complete this quiz</li>
                  <li>All questions must be answered</li>
                  <li>You can navigate between questions</li>
                  <li>Your answers are auto-saved</li>
                  <li>Click Submit when you're done</li>
                </ul>
              </div>

              <button className="btn-primary btn-large" onClick={handleStartQuiz}>
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  const question = quiz.questions[currentQuestion]

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page quiz-page">
        {/* Quiz Header */}
        <div className="quiz-header">
          <div className="quiz-progress-info">
            <h2>{quiz.title}</h2>
            <div className="question-counter">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </div>
          </div>
          <div className="quiz-timer">
            <Clock size={20} />
            <span className={timeRemaining < 300 ? 'time-warning' : ''}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="quiz-progress-bar">
          <div 
            className="quiz-progress-fill"
            style={{width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`}}
          ></div>
        </div>

        {/* Question Card */}
        <div className="question-card">
          <div className="question-header">
            <span className="question-type">{question.type.toUpperCase()}</span>
            <span className="question-points">{question.points} points</span>
          </div>
          
          <h3 className="question-text">{question.question}</h3>

          {/* MCQ Options */}
          {question.type === 'mcq' && (
            <div className="options-list">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`option-item ${answers[question.id] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(question.id, index)}
                >
                  <div className="option-radio">
                    {answers[question.id] === index && <div className="radio-dot"></div>}
                  </div>
                  <span className="option-text">{option}</span>
                </div>
              ))}
            </div>
          )}

          {/* True/False Options */}
          {question.type === 'true-false' && (
            <div className="tf-options">
              <div
                className={`tf-option ${answers[question.id] === true ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(question.id, true)}
              >
                <CheckCircle size={24} />
                <span>True</span>
              </div>
              <div
                className={`tf-option ${answers[question.id] === false ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(question.id, false)}
              >
                <AlertCircle size={24} />
                <span>False</span>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="quiz-navigation">
          <button
            className="btn-secondary"
            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <div className="answered-status">
            {getAnsweredCount()} of {quiz.questions.length} answered
          </div>

          {currentQuestion < quiz.questions.length - 1 ? (
            <button
              className="btn-primary"
              onClick={() => setCurrentQuestion(prev => prev + 1)}
            >
              Next
              <ChevronRight size={20} />
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={() => setShowSubmitConfirm(true)}
            >
              Submit Quiz
            </button>
          )}
        </div>

        {/* Question Navigator */}
        <div className="question-navigator">
          <h4>Questions:</h4>
          <div className="question-grid">
            {quiz.questions.map((q, index) => (
              <button
                key={q.id}
                className={`question-nav-btn ${currentQuestion === index ? 'active' : ''} ${answers[q.id] !== undefined ? 'answered' : ''}`}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitConfirm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Submit Quiz?</h3>
              <p>You have answered {getAnsweredCount()} out of {quiz.questions.length} questions.</p>
              {getAnsweredCount() < quiz.questions.length && (
                <p className="warning-text">
                  <AlertCircle size={16} />
                  Some questions are unanswered. They will be marked as incorrect.
                </p>
              )}
              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setShowSubmitConfirm(false)}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleSubmitQuiz}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default QuizTaker
