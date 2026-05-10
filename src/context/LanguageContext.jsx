import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('th')
  const toggleLang = () => {
    setLang((l) => (l === 'th' ? 'en' : 'th'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
