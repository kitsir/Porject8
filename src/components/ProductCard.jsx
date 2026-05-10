import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function ProductCard({ catId, item, categoryImage }) {
  const { lang } = useLang()
  const displayName = lang === 'en' && item.nameEn ? item.nameEn : item.name

  return (
    <Link to={`/products/${catId}/${item.id}`} className="group block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-sm bg-cream aspect-[4/3] mb-3"
      >
        {categoryImage ? (
          <img
            src={categoryImage}
            alt={displayName}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-cream">
            <span className="font-serif italic text-ink/25 text-lg text-center px-4 leading-snug">
              อร่อย<br />ซอย 8
            </span>
          </div>
        )}
      </motion.div>
      <p className="font-thai text-sm text-ink group-hover:text-gold transition-colors leading-relaxed">
        {displayName}
      </p>
    </Link>
  )
}
