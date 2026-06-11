import { createContext, useContext, useState } from 'react'

const QuizContext = createContext()

export const useQuiz = () => {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider')
  }
  return context
}

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([])
  const [currentQuiz, setCurrentQuiz] = useState(null)
  const [answers, setAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(null)
  const [quizResults, setQuizResults] = useState([])

  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz)
    setAnswers({})
    setTimeRemaining(quiz.duration * 60) // Convert minutes to seconds
  }

  const submitAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const submitQuiz = () => {
    if (!currentQuiz) return null

    let score = 0
    let totalQuestions = currentQuiz.questions.length
    
    currentQuiz.questions.forEach(question => {
      if (question.type === 'mcq' || question.type === 'true-false') {
        if (answers[question.id] === question.correctAnswer) {
          score += question.points || 1
        }
      }
    })

    const result = {
      quizId: currentQuiz.id,
      score,
      totalQuestions,
      percentage: (score / totalQuestions) * 100,
      answers,
      submittedAt: new Date().toISOString()
    }

    setQuizResults(prev => [...prev, result])
    return result
  }

  const value = {
    quizzes,
    setQuizzes,
    currentQuiz,
    startQuiz,
    answers,
    submitAnswer,
    timeRemaining,
    setTimeRemaining,
    submitQuiz,
    quizResults
  }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
