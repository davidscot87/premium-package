import { createContext, useContext, useState } from 'react'

const defaultContent = {
  hero: {
    heading: "Shaping Tomorrow's Leaders Today",
    subheading: 'Premier College of Excellence - Where Innovation Meets Education',
    ctaPrimary: 'Explore Programs',
    ctaSecondary: 'Apply Now',
    backgroundImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=2400&h=1600&fit=crop&q=85',
  },
  about: {
    heading: 'About Premier College',
    subheading: 'A Legacy of Academic Excellence Since 1985',
    description: 'Premier College of Excellence is a leading institution committed to providing world-class education. With state-of-the-art facilities, distinguished faculty, and a vibrant campus life, we prepare students for global careers.',
    stats: [
      { label: 'Students Enrolled', value: '15,000+' },
      { label: 'Expert Faculty', value: '500+' },
      { label: 'Programs Offered', value: '120+' },
      { label: 'Years of Excellence', value: '40+' },
    ],
  },
  contact: {
    address: '123 Education Street, Knowledge City, State 400001',
    phone: '+91 98765 43210',
    email: 'info@premiercollege.edu',
    mapEmbed: '',
  },
  admissions: {
    heading: 'Begin Your Journey With Us',
    subheading: 'Applications open for 2026-27 academic year',
    deadline: 'June 30, 2026',
    ctaText: 'Apply Now',
  },
  footer: {
    tagline: 'Shaping Tomorrow\'s Leaders Today',
    copyright: '2026 Premier College of Excellence. All rights reserved.',
  },
  navbar: {
    collegeName: 'Premier College',
    tagline: 'of Excellence',
  },
  announcements: [
    { id: 1, text: 'Admissions Open 2026-27 - Apply Now!', active: true, type: 'info' },
    { id: 2, text: 'Mid-term Exam Schedule Released', active: true, type: 'warning' },
    { id: 3, text: 'Annual Sports Day - April 15, 2026', active: false, type: 'success' },
  ],
}

const SiteContentContext = createContext(null)

export const useSiteContent = () => {
  const ctx = useContext(SiteContentContext)
  if (!ctx) throw new Error('useSiteContent must be used within SiteContentProvider')
  return ctx
}

export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState(() => {
    try {
      const stored = localStorage.getItem('siteContent')
      return stored ? JSON.parse(stored) : defaultContent
    } catch {
      return defaultContent
    }
  })

  const updateSection = (section, data) => {
    setContent(prev => {
      const updated = { ...prev, [section]: { ...prev[section], ...data } }
      localStorage.setItem('siteContent', JSON.stringify(updated))
      return updated
    })
  }

  const updateAnnouncement = (id, data) => {
    setContent(prev => {
      const updated = {
        ...prev,
        announcements: prev.announcements.map(a => a.id === id ? { ...a, ...data } : a)
      }
      localStorage.setItem('siteContent', JSON.stringify(updated))
      return updated
    })
  }

  const addAnnouncement = (ann) => {
    setContent(prev => {
      const newId = Math.max(...prev.announcements.map(a => a.id), 0) + 1
      const updated = { ...prev, announcements: [...prev.announcements, { ...ann, id: newId }] }
      localStorage.setItem('siteContent', JSON.stringify(updated))
      return updated
    })
  }

  const deleteAnnouncement = (id) => {
    setContent(prev => {
      const updated = { ...prev, announcements: prev.announcements.filter(a => a.id !== id) }
      localStorage.setItem('siteContent', JSON.stringify(updated))
      return updated
    })
  }

  const resetToDefaults = () => {
    setContent(defaultContent)
    localStorage.setItem('siteContent', JSON.stringify(defaultContent))
  }

  return (
    <SiteContentContext.Provider value={{
      content, updateSection, updateAnnouncement,
      addAnnouncement, deleteAnnouncement, resetToDefaults
    }}>
      {children}
    </SiteContentContext.Provider>
  )
}
