import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const LOGO = 'https://aroysoi8.com/wp-content/uploads/2024/12/11.png'
const LINE_URL = 'https://line.me/R/ti/p/@soi888'

export default function Navbar() {
  const { lang, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/',          label: T.nav.home[lang] },
    { to: '/story',     label: T.nav.story[lang] },
    { to: '/products',  label: T.nav.products[lang] },
    { to: '/branches',  label: T.nav.branches[lang] },
    { to: '/wholesale', label: T.nav.wholesale[lang] },
    { to: '/contact',   label: T.nav.contact[lang] },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const LangToggle = ({ compact = false }) => (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className={`flex items-center gap-1 font-body text-xs tracking-widest transition-colors ${
        compact ? 'px-2 py-1' : 'px-3 py-1.5 border ' + (scrolled ? 'border-ink/20' : 'border-white/30')
      }`}
    >
      <span className={lang === 'th' ? 'text-gold' : (scrolled ? 'text-ink/40' : 'text-white/40')}>TH</span>
      <span className={scrolled ? 'text-ink/25' : 'text-white/25'}>·</span>
      <span className={lang === 'en' ? 'text-gold' : (scrolled ? 'text-ink/40' : 'text-white/40')}>EN</span>
    </button>
  )

  const LineSVG = (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <img src={LOGO} alt="อร่อยซอย 8" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-thai text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-gold'
                      : scrolled
                      ? 'text-ink hover:text-gold'
                      : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Language Toggle + LINE CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Toggle — desktop */}
            <LangToggle />

            {/* LINE CTA — desktop only */}
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-[#06C755] text-white text-sm font-thai font-medium px-4 py-2 rounded-full hover:bg-[#05b34c] transition-colors"
            >
              {LineSVG}
              LINE @soi888
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label="เปิดเมนู"
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-ivory shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-cream">
                <img src={LOGO} alt="อร่อยซอย 8" className="h-10 w-auto" />
                <div className="flex items-center gap-3">
                  {/* Language toggle in mobile drawer */}
                  <button
                    onClick={toggleLang}
                    className="flex items-center gap-1 font-body text-xs tracking-widest border border-ink/20 px-2.5 py-1"
                  >
                    <span className={lang === 'th' ? 'text-gold' : 'text-ink/40'}>TH</span>
                    <span className="text-ink/25">·</span>
                    <span className={lang === 'en' ? 'text-gold' : 'text-ink/40'}>EN</span>
                  </button>
                  <button onClick={() => setOpen(false)} className="p-2 text-ink">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <nav className="flex flex-col px-6 py-8 gap-6 flex-1">
                {links.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-thai text-base tracking-wide transition-colors ${
                        isActive ? 'text-gold' : 'text-ink hover:text-gold'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              <div className="px-6 pb-8">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#06C755] text-white font-thai font-medium py-3 rounded-full w-full hover:bg-[#05b34c] transition-colors"
                >
                  {LineSVG}
                  LINE @soi888
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
