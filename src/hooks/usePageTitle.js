import { useEffect } from 'react'

const usePageTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} | Premier College` : 'Premier College of Excellence - Shaping Tomorrow\'s Leaders'
    
    return () => {
      document.title = prevTitle
    }
  }, [title])
}

export default usePageTitle
