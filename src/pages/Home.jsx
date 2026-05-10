import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { categories } from '../data/products'
import { branches } from '../data/branches'
import BranchCard from '../components/BranchCard'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const HERO_SLIDES = [
  'https://aroysoi8.com/wp-content/uploads/2025/07/782830_0.jpg',
  'https://aroysoi8.com/wp-content/uploads/2025/07/784282_0.jpg',
  'https://aroysoi8.com/wp-content/uploads/2025/07/779033.jpg',
]
const LOGO = 'https://aroysoi8.com/wp-content/uploads/2024/12/11.png'
const SEVEN_LOGO = '/seven-eleven.svg'
const HERITAGE_IMG = 'https://aroysoi8.com/wp-content/uploads/2025/07/S__6586378_0-1024x498.jpg'

const featuredCategoryIds = ['pia-yai-talak', 'pia-kai-bum', 'cake']

const sevenCards = [
  { key: 'sevenCard1', img: 'https://aroysoi8.com/wp-content/uploads/2025/11/11-300x300.png' },
  { key: 'sevenCard2', img: 'https://aroysoi8.com/wp-content/uploads/2025/07/779033.jpg' },
  { key: 'sevenCard3', img: 'https://aroysoi8.com/wp-content/uploads/2025/08/be9f736b-5247-4404-889a-343211c913f4.jpg' },
]

const whyIcons = [
  <svg key="time" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="star" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  <svg key="store" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>,
  <svg key="check" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
]
const whyKeys = ['years', 'recipe', 'seven', 'halal']
const whySubs = ['EST. 1985', 'Original Recipe', 'At 7-Eleven', 'Halal Certified']

function FadeUp({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const reduced = useReducedMotion()
  const { lang } = useLang()
  const ht = T.home

  const featuredCategories = categories
    .filter((c) => featuredCategoryIds.includes(c.id))
    .sort((a, b) => featuredCategoryIds.indexOf(a.id) - featuredCategoryIds.indexOf(b.id))

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduced ? {} : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* 1. Hero Banner — Ken Burns slideshow + centered logo */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-ink">
        {HERO_SLIDES.map((src, i) => {
          const total = HERO_SLIDES.length
          const cycle = total * 6 // seconds per full cycle
          // Each slide is fully visible for ~5s, fades over ~1s, then waits its turn
          return (
            <motion.img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center"
              // First slide starts visible to avoid blank hero on initial paint
              initial={{ opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.06 }}
              animate={reduced ? { opacity: i === 0 ? 1 : 0 } : {
                opacity: [0, 1, 1, 0, 0],
                scale: [1.06, 1.0, 1.08, 1.08, 1.06],
              }}
              transition={reduced ? {} : {
                duration: cycle,
                times: [0, 0.06, 1 / total - 0.02, 1 / total + 0.02, 1],
                delay: i * 6 - (i === 0 ? 0 : 0),
                repeat: Infinity,
                repeatDelay: 0,
                ease: 'easeInOut',
              }}
            />
          )
        })}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/80" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-thai text-xs uppercase tracking-widest text-gold/90 mb-8"
          >
            {ht.heroTag[lang]}
          </motion.p>

          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.4, ease: 'easeOut' }}
            className="mb-6 flex justify-center"
          >
            <img
              src={LOGO}
              alt={ht.heroTitle[lang]}
              className="h-40 md:h-56 lg:h-64 w-auto drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              style={{ filter: 'brightness(1.05) contrast(1.05)' }}
            />
          </motion.div>

          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-serif italic text-xl md:text-2xl text-white/75 mb-10"
          >
            {ht.heroSub[lang]}
          </motion.p>

          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products" className="inline-block border border-white/70 text-white font-thai text-sm tracking-wide px-8 py-3.5 hover:bg-white hover:text-ink transition-all duration-300">
              {ht.heroCta1[lang]}
            </Link>
            <Link to="/story" className="inline-block text-white/70 font-thai text-sm tracking-wide px-8 py-3.5 hover:text-white transition-colors duration-300 underline underline-offset-4">
              {ht.heroCta2[lang]}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-thai text-xs tracking-widest text-white/40 uppercase">{ht.scrollDown[lang]}</span>
          <motion.div animate={reduced ? {} : { y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}>
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Brand Statement Strip */}
      <section className="bg-cream py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-serif italic text-2xl md:text-3xl text-ink/80 leading-relaxed">
              {ht.tagline[lang]}
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-thai text-xs uppercase tracking-widest text-gold mt-4">
              {ht.company[lang]}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 3. Why Us */}
      <section className="bg-ivory py-16 px-6 border-y border-gold/15">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {whyKeys.map((key, i) => (
            <FadeUp key={key} delay={i * 0.08}>
              <div className="text-center">
                <div className="flex justify-center text-gold mb-4">{whyIcons[i]}</div>
                <p className="font-thai font-medium text-ink mb-1">{ht.whyItems[key].label[lang]}</p>
                <p className="font-body text-xs text-ink/40 tracking-widest uppercase">{whySubs[i]}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 4. Featured Categories */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{ht.specLabel[lang]}</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">{ht.specTitle[lang]}</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredCategories.map((cat, i) => (
              <FadeUp key={cat.id} delay={i * 0.1}>
                <Link to={`/products#${cat.id}`} className="group block relative overflow-hidden aspect-[3/4]">
                  <img src={cat.image || cat.heroImage} alt={lang === 'en' ? cat.nameEn : cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="font-thai text-xs uppercase tracking-widest text-gold/90 mb-2">{cat.nameEn}</p>
                    <h3 className="font-serif text-2xl text-white leading-snug">
                      {lang === 'en' ? cat.nameEn : cat.name}
                    </h3>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="text-center mt-10">
            <Link to="/products" className="inline-block font-thai text-sm text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors">
              {ht.viewAllArrow[lang]}
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 5. Heritage Teaser */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <motion.img src={HERITAGE_IMG} alt="สาขาอ่างทอง" className="w-full h-full object-cover object-center" initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
          </div>

          <FadeUp className="flex flex-col justify-center px-10 py-16 md:py-20">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-5">{ht.storyLabel[lang]}</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-snug mb-6 whitespace-pre-line">
              {ht.storyTitle[lang]}
            </h2>
            <p className="font-body text-ink/65 leading-relaxed mb-3">{ht.storyP1[lang]}</p>
            <p className="font-body text-ink/65 leading-relaxed mb-8">{ht.storyP2[lang]}</p>
            <Link to="/story" className="inline-flex items-center gap-2 font-thai text-sm text-gold hover:gap-3 transition-all duration-200">
              {ht.readStory[lang]}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 6. Branches Preview */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{ht.findUsLabel[lang]}</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">{ht.branchesTitle[lang]}</h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b) => (
              <BranchCard key={b.id} branch={b} />
            ))}
          </div>

          <FadeUp delay={0.2} className="text-center mt-10">
            <Link to="/branches" className="inline-block font-thai text-sm text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors">
              {ht.viewBranches[lang]}
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 7. 7-Eleven Showcase — real logo + product cards */}
      <section className="bg-ink py-20 px-6 border-y border-gold/15">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex flex-col items-center gap-4 mb-6">
              <img
                src={SEVEN_LOGO}
                alt="7-Eleven"
                className="h-12 md:h-14 w-auto"
                style={{ filter: 'drop-shadow(0 2px 12px rgba(250,100,50,0.25))' }}
              />
              <span className="font-thai text-[11px] uppercase tracking-[0.3em] text-white/40">{ht.nowAvailable[lang]}</span>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-white mb-5 leading-snug">
              {ht.sevenTitle[lang]}
            </h2>
            <p className="font-body text-white/60 leading-relaxed max-w-2xl mx-auto">{ht.sevenDesc[lang]}</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mt-10">
            {sevenCards.map((card, i) => (
              <FadeUp key={card.key} delay={i * 0.1}>
                <Link
                  to="/products#at-7eleven"
                  className="group block bg-ink/60 border border-white/10 hover:border-[#fa6432]/60 transition-colors duration-300 h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-white/5 relative">
                    <img
                      src={card.img}
                      alt={ht[card.key + 'Title'][lang]}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 shadow-md">
                      <img src={SEVEN_LOGO} alt="7-Eleven" className="h-4 w-auto" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-thai text-[10px] uppercase tracking-widest text-[#fa6432] mb-2">
                      {String(i + 1).padStart(2, '0')} · {ht.nowAvailable[lang]}
                    </p>
                    <h3 className="font-serif text-2xl text-white mb-2 leading-snug">
                      {ht[card.key + 'Title'][lang]}
                    </h3>
                    <p className="font-body text-sm text-white/55 leading-relaxed">
                      {ht[card.key + 'Desc'][lang]}
                    </p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.35} className="text-center mt-12">
            <Link
              to="/products#at-7eleven"
              className="inline-flex items-center gap-2 border border-white/30 text-white/80 font-thai text-sm tracking-wide px-8 py-3 hover:border-[#fa6432] hover:text-white hover:bg-[#fa6432]/10 transition-all"
            >
              {ht.sevenViewAll[lang]}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </section>
    </motion.div>
  )
}
