import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import CategorySection from '../components/CategorySection'
import { categories } from '../data/products'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const HERO_IMG = 'https://aroysoi8.com/wp-content/uploads/2025/07/784282_0.jpg'

export default function Products() {
  const reduced = useReducedMotion()
  const { lang } = useLang()
  const pt = T.products
  const [activeTab, setActiveTab] = useState(0)
  const sectionRefs = useRef([])
  const tabBarRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target)
            if (idx !== -1) setActiveTab(idx)
          }
        })
      },
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    )
    sectionRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (idx) => {
    const el = sectionRefs.current[idx]
    if (!el) return
    const tabBarHeight = tabBarRef.current?.offsetHeight ?? 56
    const navHeight = 80
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - tabBarHeight - 8
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveTab(idx)
  }

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduced ? {} : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroBanner
        image={HERO_IMG}
        height="40vh"
        label={pt.heroLabel[lang]}
        title={pt.heroTitle[lang]}
        overlay={0.6}
      />

      {/* Sticky Tab Bar */}
      <div ref={tabBarRef} className="sticky top-20 z-40 bg-ivory/95 backdrop-blur-sm border-b border-gold/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-0 min-w-max">
            {categories.map((cat, i) => {
              const tabLabel = pt.tabLabels[cat.id]
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(i)}
                  className={`font-thai text-sm px-5 py-4 border-b-2 transition-all duration-200 whitespace-nowrap ${
                    activeTab === i
                      ? 'border-gold text-gold'
                      : 'border-transparent text-ink/50 hover:text-ink hover:border-ink/20'
                  }`}
                >
                  {tabLabel ? tabLabel[lang] : cat.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        {categories.map((cat, i) => (
          <CategorySection
            key={cat.id}
            category={cat}
            innerRef={(el) => { sectionRefs.current[i] = el }}
          />
        ))}
      </div>

      {/* Bottom CTA — Where to Buy */}
      <section className="bg-cream py-16 px-6 border-t border-gold/15">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-thai text-xs uppercase tracking-widest text-gold mb-4">{pt.findBranchLabel[lang]}</p>
          <h2 className="font-serif font-light text-3xl text-ink mb-5">{pt.findBranchTitle[lang]}</h2>
          <p className="font-body text-ink/60 mb-8 leading-relaxed">{pt.findBranchDesc[lang]}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/branches"
              className="inline-flex items-center justify-center gap-2 bg-ink text-white font-thai px-6 py-3 hover:bg-ink/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {pt.findBranchBtn[lang]}
            </Link>
            <a
              href="#at-7eleven"
              onClick={(e) => {
                e.preventDefault()
                const idx = categories.findIndex((c) => c.id === 'at-7eleven')
                if (idx !== -1) scrollToSection(idx)
              }}
              className="inline-flex items-center justify-center gap-2 border border-[#fa6432]/50 text-[#fa6432] font-thai px-6 py-3 hover:bg-[#fa6432] hover:text-white transition-all"
            >
              <span className="font-serif font-bold">7</span>
              {pt.sevenBtn[lang]}
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
