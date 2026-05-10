import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const HERO_IMG = 'https://aroysoi8.com/wp-content/uploads/2025/07/784282_0.jpg'

export default function Wholesale() {
  const reduced = useReducedMotion()
  const { lang } = useLang()
  const wt = T.wholesale
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', volume: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    window.open('https://line.me/R/ti/p/@soi888', '_blank')
    setSent(true)
  }

  function FadeUp({ children, delay = 0, className = '' }) {
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
        label={wt.heroLabel[lang]}
        title={wt.heroTitle[lang]}
        titleEn={lang === 'th' ? wt.heroSub.en : null}
        overlay={0.65}
      />

      {/* Benefits */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-14">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{wt.benefitsTag[lang]}</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">{wt.benefitsTitle[lang]}</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {wt.benefits.map((b, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="border-t border-gold/25 pt-8">
                  <p className="font-serif text-4xl text-gold/25 font-light mb-5">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="font-thai font-semibold text-ink text-lg mb-3">
                    {lang === 'en' ? b.titleEn : b.titleTh}
                  </h3>
                  <p className="font-body text-ink/60 leading-relaxed">
                    {lang === 'en' ? b.descEn : b.descTh}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-cream py-20 px-6 border-t border-gold/15">
        <div className="max-w-2xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{wt.formTag[lang]}</p>
            <h2 className="font-serif font-light text-4xl text-ink">{wt.formTitle[lang]}</h2>
            <p className="font-body text-ink/55 mt-3">{wt.formDesc[lang]}</p>
          </FadeUp>

          {sent ? (
            <div className="text-center py-16">
              <p className="font-serif italic text-3xl text-gold mb-4">{wt.thankYou[lang]}</p>
              <p className="font-body text-ink/60">{wt.thankYouDesc[lang]}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {wt.fields.map(({ name, labelTh, labelEn, type, required }) => (
                <div key={name}>
                  <label className="block font-thai text-sm text-ink/70 mb-1.5">
                    {lang === 'en' ? labelEn : labelTh} {required && <span className="text-gold">*</span>}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    required={required}
                    className="w-full bg-ivory border border-ink/15 px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block font-thai text-sm text-ink/70 mb-1.5">{wt.msgLabel[lang]}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-ivory border border-ink/15 px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button type="submit" className="w-full bg-ink text-white font-thai py-4 hover:bg-ink/80 transition-colors">
                {wt.submitBtn[lang]}
              </button>
            </form>
          )}
        </div>
      </section>
    </motion.div>
  )
}
