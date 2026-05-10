import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

const HERO_IMG = 'https://aroysoi8.com/wp-content/uploads/2025/07/S__6586374_0-1024x576.jpg'

const CONTACTS = [
  { label: { th: 'สาขาใหญ่ อ่างทอง', en: 'Main Branch — Ang Thong' }, phone: '081-564-9899', href: 'tel:0815649899' },
  { label: { th: 'สาขา สายใต้ใหม่ / วังน้อย', en: 'Sai Tai Mai / Wang Noi Branch' }, phone: '061-939-9396', href: 'tel:0619399396' },
  { label: { th: 'สาขา สิงห์บุรี / โรจนะ / นครปฐม', en: 'Sing Buri / Rojana / Nakhon Pathom' }, phone: '099-653-5989', href: 'tel:0996535989' },
]

const SOCIALS = [
  {
    name: 'LINE OA', handle: '@soi888', href: 'https://line.me/R/ti/p/@soi888',
    icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>,
  },
  {
    name: 'Facebook', handle: 'Aroisoieight', href: 'https://www.facebook.com/Aroisoieight',
    icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  },
  {
    name: 'TikTok', handle: '@aroysoi8', href: 'https://www.tiktok.com/@aroysoi8',
    icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>,
  },
]

export default function Contact() {
  const reduced = useReducedMotion()
  const { lang } = useLang()
  const ct = T.contact
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
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
        transition={{ duration: 0.6, delay }}
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
        label={ct.heroLabel[lang]}
        title={ct.heroTitle[lang]}
        titleEn={lang === 'th' ? ct.heroSub.en : null}
        overlay={0.6}
      />

      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <div>
            <FadeUp>
              <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{ct.phoneTag[lang]}</p>
              <h2 className="font-serif font-light text-4xl text-ink mb-8">{ct.phoneTitle[lang]}</h2>
            </FadeUp>

            <div className="space-y-6 mb-12">
              {CONTACTS.map(({ label, phone, href }, i) => (
                <FadeUp key={phone} delay={i * 0.08}>
                  <div className="border-b border-gold/15 pb-6">
                    <p className="font-thai text-xs text-ink/40 uppercase tracking-wider mb-1">{label[lang]}</p>
                    <a href={href} className="font-serif text-3xl text-ink hover:text-gold transition-colors">{phone}</a>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <p className="font-thai text-xs uppercase tracking-widest text-gold mb-4">{ct.socialTag[lang]}</p>
              <div className="space-y-4">
                {SOCIALS.map(({ name, handle, href, icon }) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <span className="text-ink/40 group-hover:text-gold transition-colors">{icon}</span>
                    <span className="font-thai text-sm text-ink/40 group-hover:text-gold transition-colors">
                      {name} · {handle}
                    </span>
                  </a>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.4} className="mt-12">
              <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{ct.addressTag[lang]}</p>
              <p className="font-body text-ink/60 leading-relaxed whitespace-pre-line">{ct.address[lang]}</p>
              <p className="font-body text-sm text-ink/50 mt-2">{ct.hours[lang]}</p>
              <a
                href="https://g.co/kgs/QFWbvZy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-thai text-sm text-gold border border-gold/30 px-4 py-2 hover:bg-gold hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {ct.mapBtn[lang]}
              </a>
            </FadeUp>
          </div>

          {/* Right — Form */}
          <FadeUp delay={0.1}>
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">{ct.formTag[lang]}</p>
            <h2 className="font-serif font-light text-4xl text-ink mb-8">{ct.formTitle[lang]}</h2>

            {sent ? (
              <div className="text-center py-16 border border-gold/20">
                <p className="font-serif italic text-3xl text-gold mb-3">{ct.thankYou[lang]}</p>
                <p className="font-body text-ink/60">{ct.thankYouDesc[lang]}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-thai text-sm text-ink/60 mb-1.5">
                    {ct.nameLabel[lang]} <span className="text-gold">*</span>
                  </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-cream border border-ink/10 px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block font-thai text-sm text-ink/60 mb-1.5">
                    {ct.phoneLabel[lang]} <span className="text-gold">*</span>
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-cream border border-ink/10 px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block font-thai text-sm text-ink/60 mb-1.5">{ct.msgLabel[lang]}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full bg-cream border border-ink/10 px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-ink text-white font-thai py-4 hover:bg-ink/80 transition-colors">
                  {ct.submitBtn[lang]}
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>
    </motion.div>
  )
}
