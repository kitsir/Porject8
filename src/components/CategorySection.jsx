import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

export default function CategorySection({ category, innerRef }) {
  const { lang } = useLang()
  const name = lang === 'en' ? category.nameEn : category.name
  const description = lang === 'en' && category.descriptionEn ? category.descriptionEn : category.description

  return (
    <section ref={innerRef} className="py-16 border-b border-gold/15 last:border-0">
      {/* Category header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="font-thai text-xs uppercase tracking-widest text-gold mb-3">
          {lang === 'en' ? (category.tagEn || category.nameEn) : category.nameEn}
        </p>
        <h2 className="font-serif font-light text-4xl md:text-5xl text-ink mb-4 leading-tight">
          {name}
        </h2>
        <p className="font-body text-ink/60 max-w-xl leading-relaxed">{description}</p>
        {category.halal && (
          <span className="inline-block mt-4 text-xs font-thai border border-gold/40 text-gold px-3 py-1 tracking-wide">
            {T.common.halal[lang]}
          </span>
        )}
      </motion.div>

      {/* Category hero image */}
      {category.heroImage && (
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 aspect-[21/9] overflow-hidden bg-cream"
        >
          <img src={category.heroImage} alt={name} className="w-full h-full object-cover object-center" />
        </motion.div>
      )}

      {/* Subgroups */}
      <div className="space-y-12">
        {category.subgroups.map((sg) => {
          const sgTitle = lang === 'en' && sg.titleEn ? sg.titleEn : sg.title
          return (
            <div key={sg.title}>
              <p className="font-thai text-sm text-ink/50 border-b border-gold/20 pb-3 mb-6">{sgTitle}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {sg.items.map((item) => (
                  <ProductCard key={item.id} catId={category.id} item={item} categoryImage={category.heroImage} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
