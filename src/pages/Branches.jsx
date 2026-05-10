import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import BranchCard from '../components/BranchCard'
import { branches } from '../data/branches'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const HERO_IMG = 'https://aroysoi8.com/wp-content/uploads/2025/07/S__6586378_0-1024x498.jpg'

export default function Branches() {
  const reduced = useReducedMotion()
  const { lang } = useLang()
  const bt = T.branches

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
        label={bt.heroLabel[lang]}
        title={bt.heroTitle[lang]}
        titleEn={lang === 'th' ? bt.heroSub.en : null}
        overlay={0.6}
      />

      <section className="bg-ivory py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{bt.hours[lang]}</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">{bt.subtitle[lang]}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b) => (
              <BranchCard key={b.id} branch={b} />
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale nudge */}
      <section className="bg-cream py-14 px-6 border-t border-gold/15">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{bt.wholesaleTag[lang]}</p>
          <h2 className="font-serif font-light text-3xl text-ink mb-4">{bt.wholesaleTitle[lang]}</h2>
          <p className="font-body text-ink/60 mb-8">{bt.wholesaleDesc[lang]}</p>
          <Link to="/wholesale" className="inline-block border border-gold/50 text-gold font-thai text-sm px-8 py-3 hover:bg-gold hover:text-white transition-all duration-200">
            {bt.wholesaleBtn[lang]}
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
