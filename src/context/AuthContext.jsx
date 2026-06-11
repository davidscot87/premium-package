import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsed = JSON.parse(storedUser)
      // Backfill profile picture for existing sessions that don't have one
      if (!parsed.profilePicture && parsed.role) {
        const profilePictures = {
          student: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80',
          ],
          teacher: [
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80',
          ],
          admin: [
            'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80',
            'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&q=80',
          ]
        }
        const pool = profilePictures[parsed.role] || profilePictures.student
        parsed.profilePicture = pool[Math.floor(Math.random() * pool.length)]
        localStorage.setItem('user', JSON.stringify(parsed))
      }
      setUser(parsed)
    }
    setLoading(false)
  }, [])

  const login = (userData, role) => {
    // Use professional single-person photos from Unsplash
    const profilePictures = {
      student: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&q=80'
      ],
      teacher: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80'
      ],
      admin: [
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&q=80',
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&q=80'
      ]
    }
    
    // Select random professional photo based on role
    const pictures = profilePictures[role] || profilePictures.student
    const randomIndex = Math.floor(Math.random() * pictures.length)
    const profilePicture = pictures[randomIndex]
    
    const userWithRole = { ...userData, role, profilePicture }
    setUser(userWithRole)
    localStorage.setItem('user', JSON.stringify(userWithRole))
  }

  const updateProfilePicture = (newPictureUrl) => {
    if (user) {
      const updatedUser = { ...user, profilePicture: newPictureUrl }
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    logout,
    updateProfilePicture,
    loading,
    isAuthenticated: !!user,
    isStudent: user?.role === 'student',
    isTeacher: user?.role === 'teacher',
    isAdmin: user?.role === 'admin'
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
