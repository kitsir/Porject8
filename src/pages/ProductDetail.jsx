import { useParams, Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { categories } from '../data/products'
import { useLang } from '../context/LanguageContext'
import { T } from '../data/translations'

function findItem(catId, itemId) {
  const cat = categories.find((c) => c.id === catId)
  if (!cat) return { cat: null, item: null, subgroupTitle: null }
  for (const sg of cat.subgroups) {
    const item = sg.items.find((it) => it.id === itemId)
    if (item) return { cat, item, subgroupTitle: sg.title, subgroupTitleEn: sg.titleEn || sg.title }
  }
  return { cat, item: null, subgroupTitle: null, subgroupTitleEn: null }
}

function getRelated(cat, currentItemId) {
  if (!cat) return []
  return cat.subgroups.flatMap((sg) => sg.items).filter((it) => it.id !== currentItemId).slice(0, 4)
}

// Derive ingredients from the item's Thai name. Order matters: longer/specific
// keywords first so we don't double-match (e.g. "ส้มยูสุ" before "ส้ม").
const INGREDIENT_KEYWORDS = [
  ['ฝอยทูโทน',     ['ฝอยทอง', 'ใบเตย'],            ['Golden Thread', 'Pandan']],
  ['ฝอยใบเตย',     ['ฝอยทอง', 'ใบเตย'],            ['Golden Thread', 'Pandan']],
  ['ส้มยูสุ',       ['ส้มยูสุ'],                   ['Yuzu Orange']],
  ['สตรอเบอรี่',   ['สตรอเบอรี่'],                ['Strawberry']],
  ['บลูเบอร์รี่',    ['บลูเบอร์รี่'],                 ['Blueberry']],
  ['นมกล้วยเกาหลี', ['นมกล้วย'],                  ['Korean Banana Milk']],
  ['ชาไทย',        ['ชาไทย'],                     ['Thai Tea']],
  ['โอวัลติน',      ['โอวัลติน'],                  ['Ovaltine']],
  ['ทุเรียน',       ['ทุเรียน'],                   ['Durian']],
  ['มันม่วง',       ['มันม่วง'],                   ['Purple Yam']],
  ['ใบเตย',        ['ใบเตย'],                     ['Pandan']],
  ['ฝอยทอง',       ['ฝอยทอง'],                    ['Golden Thread']],
  ['เผือก',         ['เผือก'],                     ['Taro']],
  ['ฟัก',           ['ฟัก'],                       ['Winter Melon']],
  ['ถั่ว',          ['ถั่ว'],                       ['Mung Bean']],
  ['งาดำ',         ['งาดำ'],                       ['Black Sesame']],
  ['มะพร้าว',       ['มะพร้าว'],                   ['Coconut']],
  ['กาแฟ',         ['กาแฟ'],                      ['Coffee']],
  ['ส้ม',           ['ส้ม'],                       ['Orange']],
  ['ไข่เค็ม',       ['ไข่เค็ม'],                   ['Salted Egg']],
  ['หยอดไข่',      ['ไข่เค็ม'],                   ['Salted Egg']],
  ['นมสด',         ['นมสด'],                      ['Fresh Milk']],
]

function deriveIngredients(item, cat) {
  // Explicit per-item ingredients override
  if (item.ingredients && item.ingredients.length > 0) {
    return { th: item.ingredients, en: item.ingredientsEn || item.ingredients }
  }

  let scratch = item.name || ''
  const th = []
  const en = []
  const seenTh = new Set()
  const seenEn = new Set()

  for (const [keyword, thList, enList] of INGREDIENT_KEYWORDS) {
    if (scratch.includes(keyword)) {
      thList.forEach((t) => { if (!seenTh.has(t)) { seenTh.add(t); th.push(t) } })
      enList.forEach((e) => { if (!seenEn.has(e)) { seenEn.add(e); en.push(e) } })
      // Consume keyword so shorter substrings don't re-match
      scratch = scratch.split(keyword).join('')
    }
  }

  // For pia categories, fresh milk is part of the recipe
  const piaCats = new Set(['pia-yai-talak', 'pia-kai-bum', 'pia-taejew', 'pia-taihao', 'pia-saimu', 'pia-mini'])
  if (piaCats.has(cat.id) && !seenTh.has('นมสด')) {
    th.push('นมสด')
    en.push('Fresh Milk')
  }

  // Fallback to category-level ingredients if we matched nothing
  if (th.length === 0) {
    return { th: cat.ingredients || [], en: cat.ingredientsEn || cat.ingredients || [] }
  }
  return { th, en }
}

export default function ProductDetail() {
  const { catId, itemId } = useParams()
  const reduced = useReducedMotion()
  const { lang } = useLang()
  const dt = T.detail
  const { cat, item, subgroupTitle, subgroupTitleEn } = findItem(catId, itemId)
  const related = getRelated(cat, itemId)

  if (!cat || !item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6 pt-24">
        <div>
          <p className="font-serif text-5xl text-gold/30 mb-4">404</p>
          <h1 className="font-serif text-3xl text-ink mb-4">{dt.notFound[lang]}</h1>
          <Link to="/products" className="font-thai text-gold underline underline-offset-4">
            {dt.backToAll[lang]}
          </Link>
        </div>
      </div>
    )
  }

  const catName = lang === 'en' ? cat.nameEn : cat.name
  const catDesc = lang === 'en' && cat.descriptionEn ? cat.descriptionEn : cat.description
  const sgTitle = lang === 'en' ? subgroupTitleEn : subgroupTitle
  const itemName = lang === 'en' && item.nameEn ? item.nameEn : item.name
  const itemIngredients = deriveIngredients(item, cat)

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduced ? {} : { opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-20"
    >
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <nav className="flex items-center gap-2 font-body text-xs text-ink/40">
          <Link to="/products" className="hover:text-gold transition-colors">{dt.breadcrumb[lang]}</Link>
          <span>/</span>
          <Link to={`/products#${cat.id}`} className="hover:text-gold transition-colors">{catName}</Link>
          <span>/</span>
          <span className="text-ink/60">{itemName}</span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Sticky image */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={reduced ? {} : { opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="aspect-square overflow-hidden bg-cream"
            >
              {cat.heroImage ? (
                <img src={cat.heroImage} alt={itemName} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-serif italic text-ink/20 text-4xl">อร่อยซอย 8</span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right — Details */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2"
          >
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-4">{cat.nameEn}</p>

            <h1 className="font-serif font-light text-4xl md:text-5xl text-ink leading-tight mb-3">
              {itemName}
            </h1>

            <p className="font-body text-ink/60 leading-relaxed mb-6">{catDesc}</p>

            {sgTitle && (
              <div className="mb-6">
                <p className="font-thai text-xs text-ink/40 uppercase tracking-widest mb-2">{dt.fillingType[lang]}</p>
                <span className="inline-block font-thai text-sm border border-gold/30 text-gold px-4 py-1.5">{sgTitle}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {cat.halal && (
                <span className="font-thai text-xs bg-gold/10 text-gold px-3 py-1.5 border border-gold/20">
                  {dt.halal[lang]}
                </span>
              )}
              <span className="font-thai text-xs bg-cream text-ink/60 px-3 py-1.5 border border-ink/10">
                {dt.freshBaked[lang]}
              </span>
            </div>

            {/* Long description */}
            {(cat.longDescription || cat.longDescriptionEn) && (
              <div className="border-t border-gold/15 pt-6 mb-8">
                <p className="font-thai text-xs uppercase tracking-widest text-ink/40 mb-3">{dt.longDescLabel[lang]}</p>
                <p className="font-body text-ink/70 leading-loose">
                  {lang === 'en' && cat.longDescriptionEn ? cat.longDescriptionEn : cat.longDescription}
                </p>
              </div>
            )}

            {/* Specs panel */}
            <div className="border-t border-gold/15 pt-6 mb-8">
              <p className="font-thai text-xs uppercase tracking-widest text-ink/40 mb-4">{dt.specsLabel[lang]}</p>
              <dl className="space-y-3">
                {cat.weight && (
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <dt className="font-thai text-sm text-ink/40 sm:w-32 flex-shrink-0">{dt.weightLabel[lang]}</dt>
                    <dd className="font-body text-sm text-ink">{lang === 'en' && cat.weightEn ? cat.weightEn : cat.weight}</dd>
                  </div>
                )}
                {cat.pastry && (
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <dt className="font-thai text-sm text-ink/40 sm:w-32 flex-shrink-0">{dt.pastryLabel[lang]}</dt>
                    <dd className="font-body text-sm text-ink">{lang === 'en' && cat.pastryEn ? cat.pastryEn : cat.pastry}</dd>
                  </div>
                )}
                {itemIngredients.th.length > 0 && (
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <dt className="font-thai text-sm text-ink/40 sm:w-32 flex-shrink-0">{dt.ingredientsLabel[lang]}</dt>
                    <dd className="font-body text-sm text-ink">
                      {(lang === 'en' ? itemIngredients.en : itemIngredients.th).join(' · ')}
                    </dd>
                  </div>
                )}
                {item.note && (
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <dt className="font-thai text-sm text-ink/40 sm:w-32 flex-shrink-0">Note</dt>
                    <dd className="font-body text-sm text-ink/80 italic">
                      {lang === 'en' && item.noteEn ? item.noteEn : item.note}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Where to Buy */}
            <div className="border-t border-gold/15 pt-8 space-y-5">
              <p className="font-thai text-xs uppercase tracking-widest text-gold mb-1">{dt.whereTag[lang]}</p>

              {/* Branches CTA — primary */}
              <div className="bg-cream p-6">
                <h3 className="font-serif text-2xl text-ink mb-2 leading-snug">{dt.atBranchesTitle[lang]}</h3>
                <p className="font-body text-sm text-ink/65 leading-relaxed mb-4">{dt.atBranchesDesc[lang]}</p>
                <Link
                  to="/branches"
                  className="inline-flex items-center gap-2 bg-ink text-white font-thai text-sm px-6 py-3 hover:bg-ink/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {dt.atBranchesBtn[lang]}
                </Link>
              </div>

              {/* 7-Eleven badge — only if at7Eleven */}
              {cat.at7Eleven && (
                <div className="border border-[#fa6432]/40 bg-[#fa6432]/5 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#fa6432] text-white font-serif font-bold text-lg flex items-center justify-center">
                      7
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-ink mb-1.5 leading-snug">{dt.at7ElevenTitle[lang]}</h3>
                      <p className="font-body text-sm text-ink/65 leading-relaxed">{dt.at7ElevenDesc[lang]}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* LINE — secondary, for general questions */}
              <div className="pt-3">
                <p className="font-thai text-xs uppercase tracking-widest text-ink/40 mb-2">{dt.askLineTag[lang]}</p>
                <p className="font-body text-sm text-ink/55 leading-relaxed mb-3">{dt.askLineDesc[lang]}</p>
                <a
                  href="https://line.me/R/ti/p/@soi888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#06C755]/40 text-[#06C755] font-thai text-sm px-5 py-2.5 hover:bg-[#06C755] hover:text-white transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  {dt.askLineBtn[lang]}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-cream py-16 px-6 border-t border-gold/15">
          <div className="max-w-7xl mx-auto">
            <p className="font-thai text-xs uppercase tracking-widest text-gold mb-2">{dt.relatedTag[lang]}</p>
            <h2 className="font-serif font-light text-3xl text-ink mb-10">{dt.relatedTitle[lang]}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} to={`/products/${cat.id}/${rel.id}`} className="group">
                  <div className="aspect-square overflow-hidden bg-ivory mb-3">
                    {cat.heroImage ? (
                      <img src={cat.heroImage} alt={rel.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-serif italic text-ink/20">อร่อยซอย 8</span>
                      </div>
                    )}
                  </div>
                  <p className="font-thai text-sm text-ink group-hover:text-gold transition-colors">
                    {lang === 'en' && rel.nameEn ? rel.nameEn : rel.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}
