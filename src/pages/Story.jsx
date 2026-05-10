import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import Timeline from '../components/Timeline'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const HERO_IMG = 'https://aroysoi8.com/wp-content/uploads/2025/07/S__6586378_0-1024x498.jpg'
const CINEMATIC_IMG = 'https://aroysoi8.com/wp-content/uploads/2025/07/782830_0.jpg'
const GALLERY = [
  'https://aroysoi8.com/wp-content/uploads/2025/07/S__6586378_0-1024x498.jpg',
  'https://aroysoi8.com/wp-content/uploads/2025/07/782830_0.jpg',
  'https://aroysoi8.com/wp-content/uploads/2025/07/S__6586377_0-1024x768.jpg',
  'https://aroysoi8.com/wp-content/uploads/2025/07/S__6586374_0-1024x576.jpg',
]

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

export default function Story() {
  const reduced = useReducedMotion()
  const { lang } = useLang()
  const st = T.story

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduced ? {} : { opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* 1. Hero */}
      <HeroBanner
        image={HERO_IMG}
        height="60vh"
        label={st.heroLabel[lang]}
        title={st.heroTitle[lang]}
        titleEn={lang === 'th' ? st.heroSub.en : null}
        overlay={0.6}
      />

      {/* 2. Drop-cap editorial */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <p className="font-body text-ink/70 text-lg leading-loose first-letter:font-serif first-letter:text-7xl first-letter:font-light first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-gold first-letter:leading-none">
              {st.p1[lang]}
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="font-body text-ink/60 leading-loose mt-6">{st.p2[lang]}</p>
          </FadeUp>
        </div>
      </section>

      {/* 3. Full-bleed cinematic image */}
      <section className="overflow-hidden" style={{ height: '70vh' }}>
        <motion.img src={CINEMATIC_IMG} alt="ขนมเปี๊ยะอร่อยซอย 8" className="w-full h-full object-cover object-center" initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
      </section>

      {/* 4. Timeline */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{st.timelineLabel[lang]}</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">{st.timelineTitle[lang]}</h2>
          </FadeUp>
          <Timeline />
        </div>
      </section>

      {/* 5. Pull quote — burgundy */}
      <section className="bg-burgundy py-24 px-6">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <span className="block font-serif text-gold/60 text-6xl leading-none mb-6">"</span>
          <blockquote className="font-serif italic text-3xl md:text-4xl text-white/90 leading-snug mb-8">
            {st.quoteMain[lang]}
            {lang === 'th' && (
              <span className="block text-xl md:text-2xl text-white/60 not-italic font-light mt-2">
                {st.quoteSub.en}
              </span>
            )}
          </blockquote>
          <p className="font-thai text-xs uppercase tracking-widest text-gold/60">{st.quoteAttr[lang]}</p>
        </FadeUp>
      </section>

      {/* 6. Values */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{st.valuesLabel[lang]}</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">{st.valuesTitle[lang]}</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {st.values.map((v, i) => (
              <FadeUp key={v.th} delay={i * 0.1}>
                <div className="border-t border-gold/30 pt-8">
                  <p className="font-serif text-5xl font-light text-gold/30 mb-4">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className={`font-serif text-3xl text-ink ${lang === 'th' ? 'mb-1' : 'mb-5'}`}>
                    {lang === 'en' ? v.en : v.th}
                  </h3>
                  {lang === 'th' && (
                    <p className="font-thai text-xs uppercase tracking-widest text-gold/60 mb-5">{v.en}</p>
                  )}
                  <p className="font-body text-ink/60 leading-relaxed">{lang === 'en' ? v.descEn : v.descTh}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{st.galleryLabel[lang]}</p>
            <h2 className="font-serif font-light text-4xl text-ink">{st.galleryTitle[lang]}</h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`overflow-hidden bg-cream ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '1/1' : '4/3' }}
              >
                <img src={src} alt={`${st.galleryAlt[lang]} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Certifications */}
      <section className="bg-cream py-12 px-6 border-y border-gold/15">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-10">
          {[
            { code: lang === 'en' ? 'FDA' : 'อย.', full: T.story.fda[lang] },
            { code: lang === 'en' ? 'Halal' : 'ฮาลาล', full: 'Halal Certified' },
            { code: 'GMP', full: 'Good Manufacturing Practice' },
          ].map(({ code, full }) => (
            <FadeUp key={code}>
              <div className="text-center">
                <p className="font-serif text-2xl text-gold/70 mb-1">{code}</p>
                <p className="font-body text-xs text-ink/40">{full}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 9. CTA Strip */}
      <section className="bg-ink py-20 px-6">
        <FadeUp className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-light text-4xl md:text-5xl text-white mb-5 leading-snug">
            {st.ctaTitle[lang]}
          </h2>
          <p className="font-body text-white/50 leading-relaxed mb-10">{st.ctaDesc[lang]}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="inline-block bg-gold text-white font-thai text-sm tracking-wide px-8 py-3.5 hover:bg-gold/90 transition-colors">
              {st.ctaBtn1[lang]}
            </Link>
            <a href="https://line.me/R/ti/p/@soi888" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/30 text-white/80 font-thai text-sm tracking-wide px-8 py-3.5 hover:border-white hover:text-white transition-all">
              {st.ctaBtn2[lang]}
            </a>
          </div>
        </FadeUp>
      </section>
    </motion.div>
  )
}
