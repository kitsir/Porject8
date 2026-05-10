import { motion, useReducedMotion } from 'framer-motion'

export default function HeroBanner({
  image,
  height = '40vh',
  label,
  title,
  titleEn,
  overlay = 0.55,
  children,
}) {
  const reduced = useReducedMotion()

  const fade = reduced
    ? {}
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } }

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: height }}
    >
      {/* Background */}
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-ink" />
      )}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(26,20,16,${overlay})` }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 py-24">
        {label && (
          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-thai text-xs uppercase tracking-widest text-gold/90 mb-5"
          >
            {label}
          </motion.p>
        )}
        {title && (
          <motion.h1
            {...fade}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
          >
            {title}
          </motion.h1>
        )}
        {titleEn && (
          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif italic text-xl md:text-2xl text-white/75"
          >
            {titleEn}
          </motion.p>
        )}
        {children && (
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
