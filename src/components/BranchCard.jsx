import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

export default function BranchCard({ branch }) {
  const { lang } = useLang()
  const name = branch[`name${lang === 'en' ? 'En' : ''}`] || branch.name
  const address = branch[`address${lang === 'en' ? 'En' : ''}`] || branch.address

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="bg-ivory border border-gold/15 overflow-hidden group"
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden bg-cream">
        {branch.image ? (
          <img
            src={branch.image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-cream">
            <span className="font-serif italic text-ink/25 text-xl">
              อร่อยซอย 8
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-6">
        <p className="font-thai text-xs uppercase tracking-widest text-gold mb-2">
          {T.common.branch[lang]}
        </p>
        <h3 className="font-serif text-xl text-ink mb-3 leading-snug">{name}</h3>
        <p className="font-body text-sm text-ink/60 mb-1">{address}</p>
        <p className="font-body text-sm text-ink/60 mb-1">
          <a href={`tel:${branch.phone.replace(/-/g, '')}`} className="hover:text-gold transition-colors">
            {branch.phone}
          </a>
        </p>
        <p className="font-body text-sm text-ink/50 mb-5">{T.common.hours[lang]}</p>

        <a
          href={branch.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-thai text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-white transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {T.common.viewMap[lang]}
        </a>
      </div>
    </motion.div>
  )
}
