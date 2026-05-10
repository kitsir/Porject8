import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

export default function Timeline() {
  const { lang } = useLang()

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-px" />

      <div className="space-y-0">
        {T.timeline.map((ev, i) => {
          const isLeft = i % 2 === 0
          const title = lang === 'en' ? ev.titleEn : ev.titleTh
          const desc = lang === 'en' ? ev.descEn : ev.descTh
          return (
            <motion.div
              key={ev.year}
              initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative flex items-start gap-6 pb-12 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row pl-12 md:pl-0`}
            >
              {/* Content */}
              <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                <p className="font-serif italic text-gold text-2xl mb-1">{ev.year}</p>
                <h3 className="font-thai font-medium text-ink text-lg mb-2">{title}</h3>
                <p className="font-body text-sm text-ink/60 leading-relaxed">{desc}</p>
              </div>

              {/* Gold dot */}
              <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-gold border-2 border-ivory -translate-x-1/2 shadow-sm" />

              {/* Empty spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
