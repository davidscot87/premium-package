import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

const en = {
  nav: { home: 'Home', about: 'About', courses: 'Courses', admissions: 'Admissions', events: 'Events', gallery: 'Gallery', blog: 'Blog', contact: 'Contact', faculty: 'Faculty', hostel: 'Hostel', transport: 'Transport', library: 'Library', careers: 'Careers', downloads: 'Downloads', faq: 'FAQ', alumni: 'Alumni', results: 'Results', fees: 'Fees', studentPortal: 'Student Portal', teacherPortal: 'Teacher Portal', adminPortal: 'Admin Portal' },
  hero: { title: 'Premier College of Excellence', subtitle: 'Shaping Tomorrow\'s Leaders Today', cta: 'Explore Programs', cta2: 'Contact Us' },
  about: { legacy: '50+ Years of Academic Excellence', mission: 'To provide world-class education that transforms students into global leaders and innovators.', vision: 'To be the premier institution of higher learning, recognized globally for academic excellence, research innovation, and holistic student development.' },
  stats: { students: 'Students', faculty: 'Expert Faculty', programs: 'Programs', achievements: 'Achievements', years: 'Years of Excellence', graduates: 'Successful Graduates', partners: 'Industry Partners' },
  common: { learnMore: 'Learn More', applyNow: 'Apply Now', viewAll: 'View All', readMore: 'Read More', submit: 'Submit', send: 'Send', search: 'Search', filter: 'Filter', all: 'All', noResults: 'No results found', loading: 'Loading...', welcome: 'Welcome to Premier College of Excellence', copyright: '© 2026 Premier College of Excellence. All rights reserved.' }
}

const ne = {
  nav: { home: 'गृहपृष्ठ', about: 'हाम्रो बारे', courses: 'पाठ्यक्रम', admissions: 'भर्ना', events: 'कार्यक्रम', gallery: 'ग्यालरी', blog: 'ब्लग', contact: 'सम्पर्क', faculty: 'शिक्षकहरू', hostel: 'छात्रावास', transport: 'यातायात', library: 'पुस्तकालय', careers: 'करियर', downloads: 'डाउनलोड', faq: 'सोधिने प्रश्नहरू', alumni: 'पूर्व विद्यार्थी', results: 'नतिजा', fees: 'शुल्क', studentPortal: 'विद्यार्थी पोर्टल', teacherPortal: 'शिक्षक पोर्टल', adminPortal: 'प्रशासन पोर्टल' },
  hero: { title: 'प्रिमियर कलेज अफ एक्सिलेन्स', subtitle: 'आजका नेताहरूको भोलिको निर्माण', cta: 'पाठ्यक्रम हेर्नुहोस्', cta2: 'सम्पर्क गर्नुहोस्' },
  about: { legacy: '५०+ वर्षको शैक्षिक उत्कृष्टता', mission: 'विश्वस्तरीय शिक्षा प्रदान गरी विद्यार्थीलाई विश्वव्यापी नेता र नवप्रवर्तक बनाउने।', vision: 'शैक्षिक उत्कृष्टता, अनुसन्धान नवप्रवर्तन र सर्वाङ्गीण विद्यार्थी विकासका लागि विश्वव्यापी रूपमा मान्यता प्राप्त प्रमुख संस्था बन्ने।' },
  stats: { students: 'विद्यार्थी', faculty: 'विज्ञ शिक्षक', programs: 'पाठ्यक्रम', achievements: 'उपलब्धिहरू', years: 'वर्षको उत्कृष्टता', graduates: 'सफल स्नातक', partners: 'उद्योग साझेदार' },
  common: { learnMore: 'थप जान्नुहोस्', applyNow: 'अहिले नै आवेदन दिनुहोस्', viewAll: 'सबै हेर्नुहोस्', readMore: 'थप पढ्नुहोस्', submit: 'पेश गर्नुहोस्', send: 'पठाउनुहोस्', search: 'खोज्नुहोस्', filter: 'फिल्टर', all: 'सबै', noResults: 'कुनै परिणाम फेला परेन', loading: 'लोड हुँदै...', welcome: 'प्रिमियर कलेज अफ एक्सिलेन्समा स्वागत छ', copyright: '© २०२६ प्रिमियर कलेज अफ एक्सिलेन्स। सर्वाधिकार सुरक्षित।' }
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const translations = lang === 'ne' ? ne : en

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (key) => {
    const keys = key.split('.')
    let val = translations
    for (const k of keys) {
      if (val?.[k] !== undefined) val = val[k]
      else return key
    }
    return val
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
